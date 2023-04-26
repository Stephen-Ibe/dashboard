import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Link } from "react-router-dom";
import { DoughnutGraph } from "../../components";
import { x } from "../../utils/countryFlags";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  graphData: any;
  loading: boolean;
};

const TopLocationsChart = ({ loading, graphData }: Props) => {
  const countries = graphData?.map((item: any) => item.country);
  const counts = graphData?.map((item: any) => item.count);

  const locationData = graphData?.map(({ country, percent }: any) => ({
    country,
    percent,
    flag: x.COUNTRY_FLAG[country],
  }));

  return (
    <div className="px-10 py-10 border rounded-xl">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">Top Locations</h4>
        <Link to="/" className="text-sm">
          View full reports
        </Link>
      </div>
      {loading ? (
        ""
      ) : (
        <div className="grid items-center justify-center grid-cols-2 mt-8 gap-x-4">
          <div className="space-y-8">
            {locationData?.map(({ country, percent, flag }: any) => (
              <p key={country}>
                {flag} {country}{" "}
                <span className="font-semibold">{percent}%</span>
              </p>
            ))}
          </div>
          <div className="flex items-center justify-center border-0">
            <DoughnutGraph labels={countries} graphData={counts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopLocationsChart;
