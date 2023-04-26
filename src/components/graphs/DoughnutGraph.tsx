import React from "react";
import { Doughnut } from "react-chartjs-2";

type Props = { labels: any; graphData: any };

const DoughnutGraph = ({ labels, graphData }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Count",
        data: graphData,
        borderWidth: 0,
        backgroundColor: [
          "#599EEA",
          "#0FB77A",
          "#FAB70A",
          "#F09468",
          "#844FF6",
        ],

        rotation: -40,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutGraph;
