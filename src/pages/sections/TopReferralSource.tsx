import { Link } from "react-router-dom";
import { DoughnutGraph } from "../../components";
import { x } from "../../utils/countryFlags";
import { IconContext } from "react-icons";

type Props = {
  graphData: any;
  loading: boolean;
};

const TopReferralSource = ({ loading, graphData }: Props) => {
  const sources = graphData?.map((item: any) => item.source);
  const counts = graphData?.map((item: any) => item.count);

  const locationData = graphData?.map(({ source, percent }: any) => ({
    source,
    percent,
    logo: x.SOURCE_LOGO[source],
  }));

  return (
    <div className="px-10 py-10 border rounded-xl">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">Top Referral Source</h4>
        <Link to="/" className="text-sm">
          View full reports
        </Link>
      </div>
      {loading ? (
        ""
      ) : (
        <div className="grid items-center justify-center grid-cols-2 mt-8 gap-x-4">
          <div className="space-y-8">
            <IconContext.Provider value={{ size: "16px" }}>
              {locationData?.map(({ source, percent, logo }: any) => (
                <div
                  className="flex items-center space-x-2 capitalize"
                  key={source}
                >
                  <span>{logo}</span> <p> {source}</p>
                  <span className="font-semibold">{percent}%</span>
                </div>
              ))}
            </IconContext.Provider>
          </div>
          <div className="flex items-center justify-center border-0">
            <DoughnutGraph labels={sources} graphData={counts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopReferralSource;
