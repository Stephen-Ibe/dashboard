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

const Home = () => {
  return (
    // <div className="h-screen flex">
    //   <div className="border w-[20%] p-8 fixed top-0 left-0 h-screen">
    //     <div className="logo">
    //       <img src={Logo} alt="mainstack_logo" />
    //     </div>
    //     SM
    //   </div>
    //   <div className="w-full lg:w-[80%] p-4">
    //     <div className="container mx-auto py-4 lg:px-10">
    //       <div className="header">
    //         <h1 className="font-bold text-xl">Dashboard</h1>
    //       </div>
    //       <main>
    //         <div className="db--heading my-8 flex items-center justify-between">
    //           <div className="space-y-1">
    //             <h2 className="text-xl font-semibold">
    //               Good Morning, Blessing ⛅️
    //             </h2>
    //             <p className="text-xs">Check out your dashboard summary.</p>
    //           </div>
    //           <Link to="/" className="text-secondary-orange text-sm">
    //             View Analytics
    //           </Link>
    //         </div>
    //         <div className="date--range">
    //           {dateRanges.map(({ id, title, isActive }) => (
    //             <div
    //               className={`${isActive && "isActive"} date--range-pill`}
    //               key={id}
    //             >
    //               {title}
    //             </div>
    //           ))}
    //         </div>
    //         <div className="border rounded-xl h-[500px] my-10">H</div>
    //         <div className="border rounded-xl h-[500px] my-10">H</div>
    //       </main>
    //     </div>
    //   </div>
    // </div>
    <div className="grid min-h-screen grid-cols-[auto_1fr] justify-center overflow-hidden">
      <aside className="md:flex h-[calc(100vh_-_.0rem)] sm:w-28 lg:w-72 py-6 flex-col border-r hidden">
        <div className="logo px-6">
          <img src={Logo} alt="mainstack_logo" />
        </div>
        <div className="my-10">
          <ul className="">
            <li className="px-6 border-l-4 border-secondary-orange font-semibold text-secondary-orange">
              Dashboard
            </li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
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
          </div>

          <h1>Main content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod
            expedita voluptate cumque dicta minima temporibus quae consectetur
            pariatur, architecto accusamus. Et quod quos sit, deleniti rerum
            odio numquam reiciendis ipsa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod
            expedita voluptate cumque dicta minima temporibus quae consectetur
            pariatur, architecto accusamus. Et quod quos sit, deleniti rerum
            odio numquam reiciendis ipsa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod
            expedita voluptate cumque dicta minima temporibus quae consectetur
            pariatur, architecto accusamus. Et quod quos sit, deleniti rerum
            odio numquam reiciendis ipsa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod
            expedita voluptate cumque dicta minima temporibus quae consectetur
            pariatur, architecto accusamus. Et quod quos sit, deleniti rerum
            odio numquam reiciendis ipsa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quod
            expedita voluptate cumque dicta minima temporibus quae consectetur
            pariatur, architecto accusamus. Et quod quos sit, deleniti rerum
            odio numquam reiciendis ipsa!
          </p>
        </main>
      </div>
    </div>
  );
};

export default Home;
