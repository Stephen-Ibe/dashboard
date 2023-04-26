import React from "react";
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
    <div className="border rounded-xl py-10 px-10">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-xl">Top Referral Source</h4>
        <Link to="/" className="text-sm">
          View full reports
        </Link>
      </div>
      {loading ? (
        ""
      ) : (
        <div className="grid grid-cols-2 items-center justify-center mt-8 gap-x-4">
          <div className="space-y-8">
            <IconContext.Provider value={{ size: "16px" }}>
              {locationData?.map(({ source, percent, logo }: any) => (
                <div
                  className="capitalize flex items-center space-x-2"
                  key={source}
                >
                  <span>{logo}</span> <p> {source}</p>
                  <span className="font-semibold">{percent}%</span>
                </div>
              ))}
            </IconContext.Provider>
          </div>
          <div className="border-0 flex items-center justify-center">
            <DoughnutGraph labels={sources} graphData={counts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopReferralSource;
