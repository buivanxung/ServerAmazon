var socket;
$(document).ready(function()
  {
    socket = io.connect('http://localhost:5000',{
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: 99999
    });
    socket.emit('reciver_data_rssi', " ");
    socket.on('sending_data_rssi_Node_1', function (data) {
      console.log(data);
    });
    socket.on('sending_data_rssi_Node_2', function (data) {
      console.log(data);
    });
    socket.on('sending_data_rssi_Node_3', function (data) {
      console.log(data);
    });
    socket.on('sending_data_rssi_Node_4', function (data) {
      console.log(data);
      $('temp1').html(data);
    });
    socket.on('sending_data_rssi_Node_5', function (data) {
      console.log(data);
    });
    socket.on('sending_data_rssi_Node_6', function (data) {
      console.log(data);
    });
  })
