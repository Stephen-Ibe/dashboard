import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  graphData: any;
};

const TopLocationsChart = ({ graphData }: Props) => {
  const countries = graphData?.map((item: any) => item.country);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  console.log(countries, graphData);

  const data = {
    labels: countries,
    datasets: [
      {
        label: "Count",
        data: [68, 37, 50, 40, 4],
        borderWidth: 0,
        backgroundColor: [
          "#599EEA",
          "#0FB77A",
          "#FAB70A",
          "#F09468",
          "#844FF6",
        ],

        rotation: -30,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};

export default TopLocationsChart;
