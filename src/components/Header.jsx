import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className=" bg-black lg:px-10 py-2.5 text-white flex   justify-evenly rounded-md">
        <div className="flex-none">
          <Link to="/">
            <h1 className="flex text-3xl">
              Bee<p className="text-blue-500">N</p>ow
            </h1>
          </Link>
        </div>

        <div className="grow flex justify-center items-center">
          <ul className="flex gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-400" : "text-white"} `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tweets"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-400" : "text-white"} `
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
                  ` ${isActive ? "text-blue-400" : "text-white"} `
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
            className="bg-white hover:bg-gray-500 rounded-md text-black p-2"
          >
            Github
          </a>
        </div>
      </nav>
    </header>
  );
};
