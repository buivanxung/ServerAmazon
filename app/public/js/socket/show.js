var socket;
$(document).ready(function()
  {
    socket = io.connect('http://wirelesstech.online:3000',{
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: 99999
    });
    $('#n1Temper').html("0 &deg;C");
    $('#n2Temper').html("0 &deg;C");
    $('#n3Temper').html("0 &deg;C");
    $('#n4Temper').html("0 &deg;C");
    $('#n5Temper').html("0 &deg;C");
    $('#n6Temper').html("0 &deg;C");
    $('#n1Humid').html("0 %");
    $('#n2Humid').html("0 %");
    $('#n3Humid').html("0 %");
    $('#n4Humid').html("0 %");
    $('#n5Humid').html("0 %");
    $('#n6Humid').html("0 %");

    socket.emit('reciver_data_show', " ");
    socket.on('sending_data_show_Node_1', function (data) {
        if (data != "Err") {
          $('#n1Temper').html(data[0].temperature + " &deg;C");
          $('#n1Humid').html(data[0].humidity + " %");
        }
    });
    socket.on('sending_data_show_Node_2', function (data) {
        if (data != "Err") {
          $('#n2Temper').html(data[0].temperature + " &deg;C");
          $('#n2Humid').html(data[0].humidity + " %");
        }
    });
    socket.on('sending_data_show_Node_3', function (data) {
        if (data != "Err") {
          $('#n3Temper').html(data[0].temperature + " &deg;C");
          $('#n3Humid').html(data[0].humidity + " %");
        }
    });
    socket.on('sending_data_show_Node_4', function (data) {
        if (data != "Err") {
          $('#n4Temper').html(data[0].temperature + " &deg;C");
          $('#n4Humid').html(data[0].humidity + " %");
        }
    });
    socket.on('sending_data_show_Node_5', function (data) {
        if (data != "Err") {
          $('#n5Temper').html(data[0].temperature + " &deg;C");
          $('#n5Humid').html(data[0].humidity + " %");
        }
    });
    socket.on('sending_data_rssi_Node_6', function (data) {
      console.log(data);
        if (data != "Err") {
          $('#n6Temper').html(data[0].temperature + " &deg;C");
          $('#n6Humid').html(data[0].humidity + " %");
      }
    });
  })
