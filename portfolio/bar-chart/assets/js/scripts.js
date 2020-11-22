var chart = xCharts(document.querySelector("#chart"));
option = {
  title: {
    text: "Bar Chart"
  },
  tooltip: {
    show: true,
    trigger: "axis"
  },
  legend: {
    x: "center",
    y: "bottom",
    show: true,
    data: ["X Center", "Y Bottom"]
  },
  xAxis: [
    {
      type: "category",
      data: ["Tiger", "Panther", "Lion", "Fox", "Dog", "Cat"]
    }
  ],
  yAxis: [
    {
      type: "value",
      maxValue: 100,
      minValue: 0
    }
  ],
  resize: {
    enable: true
  },
  animation: {
    enable: true
  },
  series: [
    {
      name: "First",
      type: "bar",
      data: [10, 20, 30, 40, 50, 60]
    },
    {
      name: "Second",
      type: "bar",
      data: [60, 50, 40, 30, 20, 10],
      formatter: function(name, value) {
        var htmlStr = "";
        htmlStr += "<div>" + name + "：" + value + "</div>";
        return htmlStr;
      }
    }
  ]
};
chart.loadConfig(option);

var pie = xCharts(document.querySelector("#pie"));
option = {
  title: {
    text: "Pie Chart"
  },
  tooltip: {
    show: true
  },
  legend: {
    orient: "vertical",
    x: "right",
    y: "center",
    show: true,
    data: [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6"
    ]
  },
  resize: {
    enable: true
  },
  animation: {
    enable: true
  },
  series: [
    {
      type: "pie",
      center: ["50%", "50%"],
      radius: {
        outerRadius: "30%",
        innerRadius: 0
      },
      data: [
        {
          name: "section1",
          value: 10
        },
        {
          name: "section2",
          value: 20
        },
        {
          name: "section3",
          value: 30
        },
        {
          name: "section4",
          value: 40
        },
        {
          name: "section5",
          value: 50
        },
        {
          name: "section6",
          value: 60
        }
      ]
    }
  ]
};

pie.loadConfig(option);
