import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { DoughnutGraph } from "../../components";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  graphData: any;
  loading: boolean;
};

const TopLocationsChart = ({ loading, graphData }: Props) => {
  const countries = graphData?.map((item: any) => item.country);
  const counts = graphData?.map((item: any) => item.count);

  return (
    <div className="border rounded-xl p-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Top Locations</h4>
        <Link to="/" className="text-xs">
          View full reports
        </Link>
      </div>
      {loading ? (
        ""
      ) : (
        <div className="grid grid-cols-2 items-center justify-center mt-8">
          <div className="border">H</div>
          <div className="">
            <DoughnutGraph labels={countries} graphData={counts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopLocationsChart;
