import {
  MdAlarm,
  MdFilePresent,
  MdGroup,
  MdOutlineDashboard,
  MdOutlineEdit,
  MdOutlineHourglassEmpty,
  MdSubscriptions,
} from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { TbCameraPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../assets/images/mainstack-logo.png";

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
      { id: 1, title: "Item 8", icon: <MdAlarm /> },
    ],
  },
];

const Home = () => {
  return (
    <div className="grid min-h-screen grid-cols-[auto_1fr] justify-center overflow-hidden">
      <aside className="md:flex h-[calc(100vh_-_.0rem)] sm:w-28 lg:w-72 py-6 flex-col justify-between border-r hidden">
        <div>
          <div className="logo px-6">
            <img src={Logo} alt="mainstack_logo" />
          </div>
          <div className="my-10 border">
            <ul className="space-y-5">
              {SideMenuItems.map(
                ({ id, title, icon, isActive, heading, subItems }) =>
                  heading ? (
                    <div className="px-6 pt-4">
                      <h4 className="uppercase">{heading}</h4>
                      <ul className="space-y-5 mt-4">
                        {subItems.map(({ id, title, icon }) => (
                          <li
                            key={id}
                            className="flex items-center gap-x-2 font-semibold"
                          >
                            {icon}
                            {title}
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
                      } px-6 flex items-center gap-x-2 font-semibold`}
                    >
                      {icon}
                      {title}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
        <div>H</div>
      </aside>
      <div className="h-[calc(100vh_-_0rem)] w-full overflow-y-scroll">
        <main className="min-h-screen w-full py-6 px-10">
          <div className="container mx-auto">
            <div className="header">
              <h1 className="font-bold text-xl">Dashboard</h1>
            </div>
            <div className="db--heading my-8 flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">
                  Good Morning, Blessing ⛅️
                </h2>
                <p className="text-xs">Check out your dashboard summary.</p>
              </div>

              <Link to="/" className="text-secondary-orange text-sm">
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
            <div className="border rounded-xl h-[500px] my-10">H</div>
            <div className="border rounded-xl h-[500px] my-10">H</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
