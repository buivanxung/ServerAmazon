var socket;
var message = [[],[],[],[],[],[]];
var limit = 100;
$(document).ready(function()
  {
    socket = io.connect('http://wirelesstech.online:3000',{
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax : 5000,
      reconnectionAttempts: 99999
    });
    socket.emit('reciver_data_moritoring', " ");
    socket.on('sending_data_moritoring_Node_1', function (data) {
      message[0] = data;
    });
    socket.on('sending_data_moritoring_Node_2', function (data) {
      message[1] = data;
    });
    socket.on('sending_data_moritoring_Node_3', function (data) {
      message[2] = data;
    });
    socket.on('sending_data_moritoring_Node_4', function (data) {
      message[3] = data;
    });
    socket.on('sending_data_moritoring_Node_5', function (data) {
      message[4] = data;
    });
    socket.on('sending_data_moritoring_Node_6', function (data) {
      message[5] = data;
    });
  })
window.onload = function () {
    var dataPoints = [[],[],[],[],[],[],[],[],[],[],[],[]];
    var chart1 = new CanvasJS.Chart("chartContainer", {
      theme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
    		text: "Temperature"
    	},
    	axisY :{
    		includeZero: false,
    		title: "Temperature",
    		suffix: "oC"
    	},
    	toolTip: {
    		shared: "true"
    	},
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 oC",
        name: "Node 1",
        dataPoints: dataPoints[0]
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##.00 oC",
        name: "Node 2",
        dataPoints: dataPoints[1]
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##.00 oC",
        name: "Node 3",
        dataPoints: dataPoints[2]
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##.00 oC",
        name: "Node 4",
        dataPoints: dataPoints[3]
      },
      {
        type: "spline",
        showInLegend: true,
        yValueFormatString: "##.00 oC",
        name: "Node 5",
        dataPoints: dataPoints[4]
      },
      {
        type: "spline",
        showInLegend: true,
        yValueFormatString: "##.00 oC",
        name: "Node 6",
        dataPoints: dataPoints[5]
      }]
    });

    var chart2 = new CanvasJS.Chart("chartContainer2", {
      theme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Humidity"
      },
      axisY :{
        includeZero: false,
        title: "Humidity",
        suffix: "%"
      },
      toolTip: {
        shared: "true"
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 1",
        dataPoints: dataPoints[6]
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##.00 %",
        name: "Node 2",
        dataPoints: dataPoints[7]
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##.00 %",
        name: "Node 3",
        dataPoints: dataPoints[8]
      },
      {
        type: "spline",
        showInLegend: true,
        visible: true,
        yValueFormatString: "##.00 %",
        name: "Node 4",
        dataPoints: dataPoints[9]
      },
      {
        type: "spline",
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 5",
        dataPoints: dataPoints[10]
      },
      {
        type: "spline",
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 6",
        dataPoints: dataPoints[11]
      }]
    });

    var chart3 = new CanvasJS.Chart("chartContainer3", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: "Humidity"
        },
        axisY :{
          includeZero: false,
          title: "Humidity",
          suffix: " %"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 %",
          name: "Node 1",
          dataPoints: dataPoints[6]
        }]
      });

      var chart4 = new CanvasJS.Chart("chartContainer4", {
          theme:"light2",
          animationEnabled: true,
          zoomEnabled: true,
          title:{
            text: "Temperature"
          },
          axisY :{
            includeZero: false,
            title: "Temperature",
            suffix: " oC"
          },
          toolTip: {
            shared: "true"
          },
          data: [{
            type: "spline",
            visible: true,
            showInLegend: true,
            yValueFormatString: "##.00 oC",
            name: "Node 1",
            dataPoints: dataPoints[0]
          }]
        });

    var chart5 = new CanvasJS.Chart("chartContainer5", {
      ttheme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Humidity"
      },
      axisY :{
        includeZero: false,
        title: "Humidity",
        suffix: " %"
      },
      toolTip: {
        shared: "true"
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 2",
        dataPoints: dataPoints[7]
      }]
    });

    var chart6 = new CanvasJS.Chart("chartContainer6", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: "Temperature"
        },
        axisY :{
          includeZero: false,
          title: "Temperature",
          suffix: " oC"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 oC",
          name: "Node 2",
          dataPoints: dataPoints[1]
        }]
      });

    var chart7 = new CanvasJS.Chart("chartContainer7", {
      theme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Humidity"
      },
      axisY :{
        includeZero: false,
        title: "Humidity",
        suffix: " %"
      },
      toolTip: {
        shared: "true"
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 3",
        dataPoints: dataPoints[8]
      }]
    });

    var chart8 = new CanvasJS.Chart("chartContainer8", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: "Temperature"
        },
        axisY :{
          includeZero: false,
          title: "Temperature",
          suffix: " oC"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 oC",
          name: "Node 3",
          dataPoints: dataPoints[2]
        }]
      });
    var chart9 = new CanvasJS.Chart("chartContainer9", {
      theme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Humidity"
      },
      axisY :{
        includeZero: false,
        title: "Humidity",
        suffix: " %"
      },
      toolTip: {
        shared: "true"
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 4",
        dataPoints: dataPoints[9]
      }]
    });
    var chart10 = new CanvasJS.Chart("chartContainer10", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: "Temperature"
        },
        axisY :{
          includeZero: false,
          title: "Temperature",
          suffix: " oC"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 oC",
          name: "Node 4",
          dataPoints: dataPoints[3]
        }]
      });
    var chart11 = new CanvasJS.Chart("chartContainer11", {
      theme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Humidity"
      },
      axisY :{
        includeZero: false,
        title: "Humidity",
        suffix: " %"
      },
      toolTip: {
        shared: "true"
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 5",
        dataPoints: dataPoints[10]
      }]
    });

    var chart12 = new CanvasJS.Chart("chartContainer12", {
        theme:"light2",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: "Temperature"
        },
        axisY :{
          includeZero: false,
          title: "Temperature",
          suffix: " oC"
        },
        toolTip: {
          shared: "true"
        },
        data: [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##.00 oC",
          name: "Node 5",
          dataPoints: dataPoints[4]
        }]
      });
    var chart13 = new CanvasJS.Chart("chartContainer13", {
      theme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Humidity"
      },
      axisY :{
        includeZero: false,
        title: "Humidity",
        suffix: " %"
      },
      toolTip: {
        shared: "true"
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 %",
        name: "Node 6",
        dataPoints: dataPoints[11]
      }]
    });
    var chart14 = new CanvasJS.Chart("chartContainer14", {
      theme:"light2",
      animationEnabled: true,
      zoomEnabled: true,
      title:{
        text: "Temperature"
      },
      axisY :{
        includeZero: false,
        title: "Temperature",
        suffix: " oC"
      },
      toolTip: {
        shared: "true"
      },
      data: [{
        type: "spline",
        visible: true,
        showInLegend: true,
        yValueFormatString: "##.00 oC",
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
    chart8.render();
    chart9.render();
    chart10.render();
    chart11.render();
    chart12.render();
    chart13.render();
    chart14.render();
    var updateChart = function () {
      if (message[0] != " ") {
        for (var i = limit - 1; i >= 0; i--){
          dataPoints[0].push({
            label : message[0][i].created_at,
            y : parseInt(message[0][i].temperature)
          });
          dataPoints[6].push({
            label : message[0][i].created_at,
            y : parseInt(message[0][i].humidity)
          });
          }
        }
      if (message[1] != " ") {
        for (var i = message[1].length - 1; i >= 0; i--){
          dataPoints[1].push({
            label : message[1][i].created_at,
            y : parseInt(message[1][i].temperature)
          });
          dataPoints[7].push({
            label : message[1][i].created_at,
            y : parseInt(message[1][i].humidity)
          });
          }
        }
      if (message[2] != " ") {
        for (var i = message[2].length - 1; i >= 0; i--){
          dataPoints[2].push({
            label : message[2][i].created_at,
            y : parseInt(message[2][i].temperature)
          });
          dataPoints[8].push({
            label : message[2][i].created_at,
            y : parseInt(message[2][i].humidity)
          });
          }
        }
      if (message[3] != " ") {
        for (var i =message[3].length - 1; i >= 0; i--){
          dataPoints[3].push({
            label : message[3][i].created_at,
            y : parseInt(message[3][i].temperature)
          });
          dataPoints[9].push({
            label : message[3][i].created_at,
            y : parseInt(message[3][i].humidity)
          });
          }
        }
      if (message[4] != " ") {
        for (var i = message[4].length - 1; i >= 0; i--){
          dataPoints[4].push({
            label : message[4][i].created_at,
            y : parseInt(message[4][i].temperature)
          });
          dataPoints[10].push({
            label : message[4][i].created_at,
            y : parseInt(message[4][i].humidity)
          });
          }
        }
      if (message[5] != " ") {
        for (var i = message[5].length - 1; i >= 0; i--){
          dataPoints[5].push({
            label : message[5][i].created_at,
            y : parseInt(message[5][i].temperature)
          });
          dataPoints[11].push({
            label : message[5][i].created_at,
            y : parseInt(message[5][i].humidity)
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
      chart8.render();
      chart9.render();
      chart10.render();
      chart11.render();
      chart12.render();
      chart13.render();
      chart14.render();
      dataPoints = [[],[],[],[],[],[],[],[],[],[],[],[]];
  };
  setInterval(function(){updateChart()}, 3000);
}
