import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);
export function ChartChefDashboard() {
  const ctx = document.getElementById("earningChart").getContext("2d");
  if (window.myChart !== undefined && window.myChart !== null) {
    window.myChart.destroy();
  }
  window.myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Oct 2021",
        "Nov 2021",
        "Dec 2021",
        "Jan 2022",
        "Feb 2022",
        "Mar 2022",
      ],
      datasets: [
        {
          label: "Earning", // Name the series
          data: [600, 1050, 800, 500, 700, 400], // Specify the data values array
          fill: false,
          gridLineColor: "#F3F4F8",
          borderColor: "#05AC93", // Add custom color border (Line)
          backgroundColor: "#05AC93", // Add custom color background (Points and Fill)
          borderWidth: 4, // Specify bar border width
        },
      ],
    },
    options: {
      tooltips: {
        backgroundColor: "#fff",
        displayColors: false,
        titleFontColor: "#000",
        bodyFontColor: "#000",
      },
      legend: {
        display: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
      },
      legend: {
        display: false,
      },
    },
  });
}

export function ChartChefPayout() {
  const ctx = document.getElementById("myEarningChart").getContext("2d");
  var gradient = ctx.createLinearGradient(0, 0, 0, 100);
  gradient.addColorStop(0, "rgba(39, 114, 234, 1)");
  gradient.addColorStop(1, "rgba(39, 114, 234,0.08)");
  if (window.chartInstance !== undefined && window.chartInstance !== null) {
    window.chartInstance.destroy();
  }
  var data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        backgroundColor: gradient,
        fill: true,
        // pointBackgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: "#2772EA",
        data: [20, 300, 200, 400, 100, 300, 350, 250, 50, 300, 150, 300],
      },
    ],
  };

  var options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      easing: "easeInOutQuad",
      duration: 520,
    },
    scales: {
      xAxes: {
        grid: {
          display: false,
        },
        gridLines: {
          showBorder: false,
        },
        gridLines: {
          drawTicks: false,
          display: false,
          color: "rgba(0, 0, 0, 0)",
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
    legend: {
      display: false,
    },
  };

  window.chartInstance = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
}
