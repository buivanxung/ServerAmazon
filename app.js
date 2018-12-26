// Setup basic express server
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.engine('html', require('ejs').renderFile);
app.use(require('stylus').middleware({ src: __dirname + '/' }));
app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/');

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

app.get('/', function(req, res){
  res.render('image.ejs');
});

io.on('connection', function (socket) {
  console.log("New connection");
  socket.on('reciver_data_rssi', function(data) {
    query_page_rssi("Node_1","50");
    query_page_rssi("Node_2","50");
    query_page_rssi("Node_3","50");
    query_page_rssi("Node_4","50");
    query_page_rssi("Node_5","50");
    query_page_rssi("Node_6","50");
    setInterval(function () {
      query_page_rssi("Node_1","50");
      query_page_rssi("Node_2","50");
      query_page_rssi("Node_3","50");
      query_page_rssi("Node_4","50");
      query_page_rssi("Node_5","50");
      query_page_rssi("Node_6","50");
    }, 5000);
  })
  socket.on('reciver_data_show', function(data) {
    query_page_show("Node_1");
    query_page_show("Node_2");
    query_page_show("Node_3");
    query_page_show("Node_4");
    query_page_show("Node_5");
    query_page_show("Node_6");
    setInterval(function () {
      query_page_show("Node_1");
      query_page_show("Node_2");
      query_page_show("Node_3");
      query_page_show("Node_4");
      query_page_show("Node_5");
      query_page_show("Node_6");
    }, 5000);
  })
  socket.on('reciver_data_moritoring', function(data) {
    query_page_moritoring("Node_1","50");
    query_page_moritoring("Node_2","50");
    query_page_moritoring("Node_3","50");
    query_page_moritoring("Node_4","50");
    query_page_moritoring("Node_5","50");
    query_page_moritoring("Node_6","50");
    setInterval(function () {
      query_page_moritoring("Node_1","50");
      query_page_moritoring("Node_2","50");
      query_page_moritoring("Node_3","50");
      query_page_moritoring("Node_4","50");
      query_page_moritoring("Node_5","50");
      query_page_moritoring("Node_6","50");
    }, 5000);
  })
function query_page_rssi(nameNode, limitNumber) {
  pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query("select rssi, created_at from lora_imst WHERE device_name = '"+nameNode+"' order by id desc limit " +limitNumber, function (err, node) {
        done();
        if (err) {console.log("Erorr Query:" + err);}
        if (node == null) {
          socket.emit("sending_data_rssi_"+nameNode, "Err");
        }else {
          try {
            socket.emit("sending_data_rssi_"+nameNode, node.rows);
          } catch (e) {
            return console.error(e);
          }
        }
      });
    });
  }
function query_page_moritoring(nameNode, limitNumber) {
  pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query("select temperature, humidity, created_at from lora_imst WHERE device_name = '"+nameNode+"' order by id desc limit " +limitNumber, function (err, node) {
        done();
        if (err) {console.log("Erorr Query:" + err);}
        if (node == null) {
          socket.emit('sending_data_moritoring_'+nameNode, "Err");
        }else {
          try {
            socket.emit('sending_data_moritoring_'+nameNode, node.rows);
          } catch (e) {
            return console.error(e);
          }
        }
      });
    });
  }
function query_page_show(nameNode) {
  pool.connect(function (err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err)
      }
      client.query("select temperature, humidity, created_at from lora_imst WHERE device_name = '"+nameNode+"' order by id desc limit 1", function (err, node) {
        done();
        if (err) {console.log("Erorr Query:" + err);}
        if (node == null) {
          socket.emit('sending_data_show_'+nameNode, "Err");
        }else {
          try {
            socket.emit('sending_data_show_'+nameNode, node.rows);
          } catch (e) {
            return console.error(e);
          }
        }
      });
    });
  }
  socket.on('disconnect', () => {
    console.log('Socket disconnected: ')
  })
});
http.listen(8083, function () {
  console.log("Server running");
});
