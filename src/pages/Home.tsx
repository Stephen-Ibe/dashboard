import { useEffect, useMemo, useState } from "react";
import { IconContext } from "react-icons";
import {
  MdAlarm,
  MdFilePresent,
  MdGroup,
  MdInfoOutline,
  MdMoreHoriz,
  MdOutlineDashboard,
  MdOutlineEdit,
  MdOutlineHourglassEmpty,
  MdSubscriptions,
} from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { TbCameraPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avatar.png";
import Logo from "../assets/images/mainstack-logo.png";
import { GetDashboardDataApi } from "../services/api";
import PageViewsChart from "./sections/PageViewsChart";
import TopLocationsChart from "./sections/TopLocationsChart";
import TopReferralSource from "./sections/TopReferralSource";

const dateRanges = [
  { id: 0, title: "1 Day" },
  { id: 1, title: "3 Days" },
  { id: 2, title: "7 Days" },
  { id: 3, title: "30 Days" },
  { id: 4, title: "All Time", isActive: true },
  { id: 5, title: "Custom Date" },
];

const SideMenuItems = [
  { id: 0, title: "Dashboard", icon: <MdOutlineDashboard />, isActive: true },
  { id: 1, title: "Item 1", icon: <MdOutlineEdit />, isActive: false },
  { id: 2, title: "Item 2", icon: <MdGroup />, isActive: false },
  {
    id: 3,
    title: "Item 3",
    icon: <MdOutlineHourglassEmpty />,
    isActive: false,
  },
  {
    id: 4,
    heading: "Others 1",
    subItems: [
      { id: 0, title: "Item 4", icon: <TbCameraPlus /> },
      { id: 1, title: "Item 5", icon: <RiDeleteBin7Line /> },
    ],
  },
  {
    id: 5,
    heading: "Others 2",
    subItems: [
      { id: 0, title: "Item 6", icon: <MdSubscriptions /> },
      { id: 1, title: "Item 7", icon: <MdFilePresent /> },
      { id: 2, title: "Item 8", icon: <MdAlarm /> },
    ],
  },
];

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, any>>({
    graph_data: { views: {} },
  });

  const addViews = useMemo((): number => {
    const views = Object.values(data?.graph_data?.views);
    const viewSum = views.reduce((a: any, b: any) => a + b, 0);
    return Number(viewSum);
  }, [data]);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await GetDashboardDataApi();
      setData(res);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <IconContext.Provider value={{ size: "22px" }}>
      <div className="grid min-h-screen grid-cols-[auto_1fr] justify-center overflow-hidden">
        <aside className="md:flex h-[calc(100vh_-_.0rem)] sm:w-20 lg:w-72 py-6 flex-col justify-between border-r hidden">
          <div>
            <div className="px-6 logo">
              <img src={Logo} alt="mainstack_logo" />
            </div>
            <div className="my-10">
              <ul className="space-y-7 text-dark-shade-light">
                {SideMenuItems.map(
                  ({ id, title, icon, isActive, heading, subItems }) =>
                    heading ? (
                      <div className="px-6 pt-4" key={id}>
                        <h4 className="hidden text-sm uppercase lg:block">
                          {heading}
                        </h4>
                        <ul className="mt-6 space-y-7">
                          {subItems.map(({ id, title, icon }) => (
                            <li
                              key={id}
                              className="flex items-center font-semibold cursor-pointer gap-x-3"
                            >
                              {icon}
                              <span className="hidden lg:block">{title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <li
                        key={id}
                        className={`${
                          isActive &&
                          "border-secondary-orange text-secondary-orange border-l-4"
                        } px-6 flex items-center gap-x-3 font-semibold cursor-pointer`}
                      >
                        {icon}
                        <span className="hidden lg:block">{title}</span>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 cursor-pointer">
            <div className="flex items-center gap-x-2">
              <img src={Avatar} alt="avatar" className="rounded-full" />
              <h4 className="hidden font-semibold lg:block text-dark-shade-light">
                Blessing Daniels
              </h4>
            </div>
            <MdMoreHoriz className="hidden lg:block" />
          </div>
        </aside>
        <div className="h-[calc(100vh_-_0rem)] w-full overflow-y-scroll">
          <main className="w-full min-h-screen px-10 py-6">
            <div className="container mx-auto">
              <div className="header">
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
              <div className="flex items-center justify-between my-8 db--heading">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">
                    Good Morning, Blessing ⛅️
                  </h2>
                  <p className="text-xs">Check out your dashboard summary.</p>
                </div>

                <Link to="/" className="text-sm text-secondary-orange">
                  View Analytics
                </Link>
              </div>

              <div className="date--range">
                {dateRanges.map(({ id, title, isActive }) => (
                  <div
                    className={`${isActive && "isActive"} date--range-pill`}
                    key={id}
                  >
                    {title}
                  </div>
                ))}
              </div>
              <div className="my-10">
                {loading ? (
                  ""
                ) : (
                  <div className="p-6 border rounded-xl">
                    <div className="flex items-center justify-between mb-5">
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold">Page Views</h4>
                        <p className="text-sm text-dark-shade">All Time</p>
                      </div>
                      <MdInfoOutline />
                    </div>
                    <div className="mb-8">
                      <h4 className="text-4xl font-bold">{addViews}</h4>
                    </div>
                    <PageViewsChart graphData={data?.graph_data?.views} />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2">
                {loading ? (
                  ""
                ) : (
                  <>
                    <TopLocationsChart
                      loading={loading}
                      graphData={data?.top_locations}
                    />
                    <TopReferralSource
                      loading={loading}
                      graphData={data?.top_sources}
                    />
                  </>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Home;
