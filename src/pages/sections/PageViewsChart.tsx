import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const views = {
  "2022-07-31": 1,
  "2022-08-01": 3,
  "2022-08-02": 3,
  "2022-08-03": 7,
  "2022-08-04": 8,
  "2022-08-05": 5,
  "2022-08-06": 20,
  "2022-08-07": 50,
  "2022-08-08": 100,
  "2022-08-09": 2,
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = Object.keys(views);

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      stepped: false,
      label: "",
      data: Object.values(views),
      borderColor: "#FF5403",
      backgroundColor: "rgba(255, 84, 3, 0.2)",
    },
  ],
};

const PageViewsChart = () => {
  return <Line options={options} data={data} />;
};

export default PageViewsChart;
