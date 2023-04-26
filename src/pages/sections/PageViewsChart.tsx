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

type Props = {
  graphData: any;
};

const formatDates = (dates: string[]): string[] => {
  return dates.map((date) => {
    const [year, month, day] = date.split("-");
    const monthName = new Date(date).toLocaleString("default", {
      month: "long",
    });
    return `${parseInt(day)} ${monthName}`;
  });
};

export const PageViewsChart = ({ graphData }: Props) => {
  const formattedDates = formatDates(Object.keys(graphData));

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false, lineThickness: 0 },
        gridLine: { drawBorder: false },
      },
      y: { border: { dash: [4, 4] } },
    },
  };

  const data = {
    labels: formattedDates,
    datasets: [
      {
        fill: true,
        stepped: false,
        label: "",
        data: Object.values(graphData),
        borderColor: "#FF5403",
        backgroundColor: "rgba(255, 84, 3, 0.2)",
      },
    ],
  };

  return <Line options={lineOptions} data={data} />;
};

export default PageViewsChart;
