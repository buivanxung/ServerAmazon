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
    $('#n1Time').html("--/--/--");
    $('#n2Time').html("--/--/--");
    $('#n3Time').html("--/--/--");
    $('#n4Time').html("--/--/--");
    $('#n5Time').html("--/--/--");
    $('#n6Time').html("--/--/--");


    socket.emit('reciver_data_show', " ");
    socket.on('sending_data_show_Node_1', function (data) {
        if (data != "Err") {
          $('#n1Temper').html(data[0].temperature);
          $('#n1Humid').html(data[0].humidity);
          $('#n1Time').html(convertTime(data[0].created_at));
        }
    });
    socket.on('sending_data_show_Node_2', function (data) {
        if (data != "Err") {
          $('#n2Temper').html(data[0].temperature);
          $('#n2Humid').html(data[0].humidity);
          $('#n2Time').html(convertTime(data[0].created_at));
        }
    });
    socket.on('sending_data_show_Node_3', function (data) {
        if (data != "Err") {
          $('#n3Temper').html(data[0].temperature);
          $('#n3Humid').html(data[0].humidity);
          $('#n3Time').html(convertTime(data[0].created_at));
        }
    });
    socket.on('sending_data_show_Node_4', function (data) {
        if (data != "Err") {
          $('#n4Temper').html(data[0].temperature);
          $('#n4Humid').html(data[0].humidity);
          $('#n4Time').html(convertTime(data[0].created_at));
        }
    });
    socket.on('sending_data_show_Node_5', function (data) {
        if (data != "Err") {
          $('#n5Temper').html(data[0].temperature);
          $('#n5Humid').html(data[0].humidity);
          $('#n5Time').html(convertTime(data[0].created_at));
        }
    });
    socket.on('sending_data_show_Node_6', function (data) {
        if (data != "Err") {
          $('#n6Temper').html(data[0].temperature);
          $('#n6Humid').html(data[0].humidity);
          $('#n6Time').html(convertTime(data[0].created_at));
      }
    });
  })
  function convertTime(time) {
    var t,d,s,tS,tM,tH,dD,dM,dY;
    s = time.split("T");
    t = s[1].split(":");
    d = s[0].split("-");
    tS = t[2].split(".");
    tM = t[1];
    tH = t[0]*1 + 2*1;
    if (tH > 12) {
      tH = tH - 12;
    }
    dD = d[2];
    dM = d[1];
    dY = d[0];
    return " "+ tH + ":" + tM + ":" + tS[0] + "  " + dD + "/" + dM;
  }
