import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className=" bg-black lg:px-10 py-2.5 text-white flex   justify-evenly rounded-md sm:flex-col md:flex-row">
        <div className="flex-none my-auto ml-1">
          <Link to="/">
            <h1 className="flex sm:text-lg  md:text-3xl  ">
              <p className="bg-blue-500 text-black px-1 ">Be</p>
              <p className="text-black   bg-white flex px-1">
                N<span className="italic">ow</span>
              </p>
            </h1>
          </Link>
        </div>

        <div className="grow flex justify-center items-center">
          <ul className="flex gap-5 md:gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-blue-400" : "text-white"
                  }  hover:text-blue-300`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tweets"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-blue-400" : "text-white"
                  }  hover:text-blue-300 `
                }
              >
                Tweets
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-blue-400" : "text-white"
                  }  hover:text-blue-300`
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-none flex items-center">
          <a
            href="https://github.com/beenow011/BeeNow-Tweets---React"
            className="md:bg-white hover:bg-gray-500 rounded-md md:text-black  sm:text-sm  p-2 mx-2"
          >
            Github
          </a>
        </div>
      </nav>
    </header>
  );
};
