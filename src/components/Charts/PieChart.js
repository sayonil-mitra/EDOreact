import ReactEcharts from "echarts-for-react";

function PieChart() {
  var datas = [
    ////////////////////////////////////////
    [
      { name: "Value 1", value: 5.6 },
      { name: "Value 2", value: 1 },
      { name: "Value 3", value: 0.8 },
      { name: "Value 4", value: 0.5 },
      { name: "Value 5", value: 0.5 },
      { name: "Value 6", value: 3.8 },
    ],
    // ////////////////////////////////////////
    [
      { name: "Value 1", value: 3.8 },
      { name: "Value 2", value: 2.3 },
      { name: "Value 3", value: 2.2 },
      { name: "Value 4", value: 1.3 },
      { name: "Value 5", value: 1.2 },
      { name: "Value 6", value: 5.7 },
    ],
    ////////////////////////////////////////
    [
      { name: "Value 1", value: 3.5 },
      { name: "Value 2", value: 2.8 },
      { name: "Value 3", value: 1.7 },
      { name: "Value 4", value: 1.4 },
      { name: "Value 5", value: 0.5 },
      { name: "Value 6", value: 3.8 },
    ],
  ];
  const option = {
    title: {
      text: "Pie Scrollable Legend",
      subtext: "Last updated 1 hr ago",
      left: "left",
      textStyle: {
        color: "#26282C",
        fontWeight: "normal",
        fontSize: 14,
      },
    },
    series: datas.map(function (data, idx) {
      var top = idx * 33.3;
      return {
        type: "pie",
        radius: [15, 50],
        top: top + "%",
        height: "35%",
        left: "center",
        width: 400,
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c} sec}",
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 10,
              color: "#999",
            },
          },
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
        },
        data: data,
      };
    }),
  };
  return <ReactEcharts option={option} />;
}

export default PieChart;
