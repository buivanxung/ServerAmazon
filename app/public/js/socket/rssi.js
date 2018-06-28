var socket;
var message = [[],[],[],[],[],[]];
var limit = 100;
$(document).ready(function()
  {
    socket = io.connect('http://wirelesstech.online:5000',{
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: 99999
    });
    socket.emit('reciver_data_rssi', " ");
    socket.on('sending_data_rssi_Node_1', function (data) {
      message[0] = data;
    });
    socket.on('sending_data_rssi_Node_2', function (data) {
      message[1] = data;
    });
    socket.on('sending_data_rssi_Node_3', function (data) {
      message[2] = data;
    });
    socket.on('sending_data_rssi_Node_4', function (data) {
      message[3] = data;
    });
    socket.on('sending_data_rssi_Node_5', function (data) {
      message[4] = data;
    });
    socket.on('sending_data_rssi_Node_6', function (data) {
      message[5] = data;
    });
  })

  window.onload = function () {
      var dataPoints = [[],[],[],[],[],[]];
      var chart1 = new CanvasJS.Chart("chartContainer1", {
        theme:"dark2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: "Received Signal Strength Indication (RSSI)"
        },
        axisY :{
          includeZero: true,
          title: "RSSI",
          suffix: "dBm",
          minimum : -140,
          maximum : 140
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 1",
          dataPoints: dataPoints[0]
        },
        {
          type: "spline",
          showInLegend: true,
          visible: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 2",
          dataPoints: dataPoints[1]
        },
        {
          type: "spline",
          showInLegend: true,
          visible: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 3",
          dataPoints: dataPoints[2]
        },
        {
          type: "spline",
          showInLegend: true,
          visible: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 4",
          dataPoints: dataPoints[3]
        },
        {
          type: "spline",
          showInLegend: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 5",
          dataPoints: dataPoints[4]
        },
        {
          type: "spline",
          showInLegend: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 6",
          dataPoints: dataPoints[5]
        }]
      });

      var chart2 = new CanvasJS.Chart("chartContainer2", {
            theme:"light2",
            animationEnabled: true,
            zoomEnabled: true,
            title:{
              text: " "
            },
            axisY :{
              includeZero: false,
              title: "RSSI",
              suffix: " dBm"
            },
            toolTip: {
              shared: "true"
            },
            data: [{
              type: "spline",
              visible: true,
              showInLegend: true,
              yValueFormatString: "##.00 dBm",
              name: "Node 1",
              dataPoints: dataPoints[0]
            }]
          });

      var chart3 = new CanvasJS.Chart("chartContainer3", {
          theme:"light2",
          animationEnabled: true,
          zoomEnabled: true,
          title:{
            text: " "
          },
          axisY :{
            includeZero: false,
            title: "RSSI",
            suffix: " dBm"
          },
          toolTip: {
            shared: "true"
          },
          data: [{
            type: "spline",
            visible: true,
            showInLegend: true,
            yValueFormatString: "##.00 dBm",
            name: "Node 2",
            dataPoints: dataPoints[1]
          }]
        });

      var chart4 = new CanvasJS.Chart("chartContainer4", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: " "
        },
        axisY :{
          includeZero: false,
          title: "RSSI",
          suffix: "dBm"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 3",
          dataPoints: dataPoints[2]
        }]
      });
      var chart5 = new CanvasJS.Chart("chartContainer5", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: " "
        },
        axisY :{
          includeZero: false,
          title: "RSSI",
          suffix: " dBm"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 4",
          dataPoints: dataPoints[3]
        }]
      });
      var chart6 = new CanvasJS.Chart("chartContainer6", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: " "
        },
        axisY :{
          includeZero: false,
          title: "RSSI",
          suffix: " dBm"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 5",
          dataPoints: dataPoints[4]
        }]
      });
      var chart7 = new CanvasJS.Chart("chartContainer7", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: " "
        },
        axisY :{
          includeZero: false,
          title: "RSSI",
          suffix: "dBm"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 dBm",
          name: "Node 6",
          dataPoints: dataPoints[5]
        }]
      });
      chart1.render();
      chart2.render();
      chart3.render();
      chart4.render();
      chart5.render();
      chart6.render();
      chart7.render();
      var updateChart = function () {
        if (message[0] != " ") {
          for (var i = limit - 1; i >= 0; i--){
            dataPoints[0].push({
              label : message[0][i].created_at,
              y : parseInt(message[0][i].rssi)
            });
            }
          }
          if (message[1] != " ") {
            for (var i = limit - 1; i >= 0; i--){
              dataPoints[1].push({
                label : message[1][i].created_at,
                y : parseInt(message[1][i].rssi)
              });
              }
            }
            if (message[2] != " ") {
              for (var i = limit - 1; i >= 0; i--){
                dataPoints[2].push({
                  label : message[2][i].created_at,
                  y : parseInt(message[2][i].rssi)
                });
                }
              }
              if (message[3] != " ") {
                for (var i = limit - 1; i >= 0; i--){
                  dataPoints[3].push({
                    label : message[3][i].created_at,
                    y : parseInt(message[3][i].rssi)
                  });
                  }
                }
                if (message[4] != " ") {
                  for (var i = limit - 1; i >= 0; i--){
                    dataPoints[4].push({
                      label : message[4][i].created_at,
                      y : parseInt(message[4][i].rssi)
                    });
                    }
                  }
                  if (message[5] != " ") {
                    for (var i = limit - 1; i >= 0; i--){
                      dataPoints[5].push({
                        label : message[5][i].created_at,
                        y : parseInt(message[5][i].rssi)
                      });
                      }
                    }
      chart1.render();
      chart2.render();
      chart3.render();
      chart4.render();
      chart5.render();
      chart6.render();
      chart7.render();
      dataPoints = [[],[],[],[],[],[]];
      };
      setInterval(function(){updateChart()}, 3000);
  }
