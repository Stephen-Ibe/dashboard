import { Link } from "react-router-dom";
import Logo from "../assets/images/mainstack-logo.png";

const Home = () => {
  return (
    <div className="h-screen flex">
      <div className="border w-[20%] p-4">
        <div className="logo">
          <img src={Logo} alt="mainstack_logo" />
        </div>
        SM
      </div>
      <div className="border border-black w-full p-4">
        <div className="container mx-auto">
          <div className="header">
            <h1 className="font-bold text-xl">Dashboard</h1>
          </div>
          <main>
            <div className="db--heading my-8 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Good Morning, Blessing ⛅️
                </h2>
                <p className="text-sm">Check out your dashboard summary.</p>
              </div>
              <Link to="/" className="text-secondary-orange text-sm">
                View Analytics
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
