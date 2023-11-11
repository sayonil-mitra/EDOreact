import ReactEcharts from "echarts-for-react";

function BasicLineChart() {
  const option = {
    title: {
      text: "Basic Line Chart",
      subtext: "Updated 1h ago",
      textStyle: {
        color: "#26282C",
        fontWeight: "normal",
        fontSize: 14,
      },
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}

export default BasicLineChart;
