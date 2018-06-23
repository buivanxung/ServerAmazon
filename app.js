
var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
var client =  require('mqtt').connect('mqtt://localhost:1883', {
  keepalive: 10,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  username: 'trung_admin',
  password: 'Anhxung179',
  rejectUnauthorized: false
});

client.subscribe('#', { qos: 0 })
  client.on('message', function (topic, message) {
           console.log(message.toString());
})
var i=0;
setInterval(function () {
	i++;
	client.publish('garage/state',i.toString());
  }, 5000);
