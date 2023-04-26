import React, { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { DoughnutGraph } from "../../components";
import { Link } from "react-router-dom";
import { x } from "../../utils/countryFlags";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  graphData: any;
  loading: boolean;
};

const TopLocationsChart = ({ loading, graphData }: Props) => {
  const countries = graphData?.map((item: any) => item.country);
  const counts = graphData?.map((item: any) => item.count);

  const locationData = graphData?.map(({ country, count }: any) => ({
    country,
    count,
    flag: x.COUNTRY_FLAG[country],
  }));

  return (
    <div className="border rounded-xl py-10 px-10">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-xl">Top Locations</h4>
        <Link to="/" className="text-sm">
          View full reports
        </Link>
      </div>
      {loading ? (
        ""
      ) : (
        <div className="grid grid-cols-2 items-center justify-center mt-8 gap-x-4">
          <div className="space-y-8">
            {locationData?.map(({ country, count, flag }: any) => (
              <p>
                {flag} {country} <span className="font-semibold">{count}%</span>
              </p>
            ))}
          </div>
          <div className="border-0 flex items-center justify-center">
            <DoughnutGraph labels={countries} graphData={counts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopLocationsChart;
