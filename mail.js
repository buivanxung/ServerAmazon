
var dot = require('dot-object')
var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
var client =  require('mqtt').connect('mqtt://wirelesstech.online:1883', {
  keepalive: 10,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  username: 'xung',
  password: '1234567',
  rejectUnauthorized: false
});

var pg = require('pg')

var configpg = {
  user:'datalora',
  database: 'loradb',
  password: '1234567',
  host: 'localhost',
  port: 5432,
  max:10,
  idleTimeoutMillis:30000,
};
var pool = new pg.Pool(configpg);
var nodemailer = require('nodemailer');
var hps = require('nodemailer-express-handlebars');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: 'anhxungce@gmail.com',
    pass: 'Anhxung13521067'
  }
});

transporter.use('compile',hps({
  viewPath:'app/server/views',
  extName:'.ejs'
}))


  function getdata( a, data) {
  	   //console.log(dot.pick(a,data));
  	   return dot.pick( a,data);
  };

  client.on('connect', function () {
  	   console.log('connected:' + clientId)
  });

  client.on('error', function (err) {
  	   console.log(err)
  	   client.end()
  });

  client.subscribe('application/+/device/+/rx', { qos: 0 })
  client.on('message', function (topic, message) {
  	   //console.log(message.toString());
  	   try {
  	   var parse_data = JSON.parse(message);
  	   }
  	   catch(e) {
  	    return console.error(e);
  	   }

  	   var appName = getdata('applicationName', parse_data);
  	   var deviceName = getdata('deviceName', parse_data);
  	   var devEUI = getdata('devEUI', parse_data);


  	   var phyPayload1 = getdata('data', parse_data);
  	   if(phyPayload1 != null) {
  	 	       var raw_data = phyPayload1.toString();
  	         var buf = new Buffer(phyPayload1,'base64');
  	         var phyPayload2 = buf.toString();
  	         var wdata = phyPayload2.split(",");
  	         var temper = wdata[1];
  	         var humid = wdata[0];
             var name = deviceName.split("_");
             var floor = "Floor" + " " + name[1];
             var time = new Date() ;
             if ( temper != null ) {
               transporter.sendMail({
                    from: 'anhxungce@gmail.com',
                    to: 'quangceuit@gmail.com',
                    subject:'System Warning',
                    template:'mail',
                    context: {
                      appName,
                      floor,
                      humid,
                      temper,
                      time
                    },function(err,response){
                      if(err){
                        console.log("Send error");
                      }
                    }
                })
  	           }
             }
           });

  client.on('close', function () {
  	   console.log(clientId + ' disconnected')
  });
