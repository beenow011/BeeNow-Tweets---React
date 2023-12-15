import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" sticky z-50 top-0 shadow-lg shadow-gray-900/80">
      <nav className=" bg-black lg:px-10 py-2.5 text-white flex   justify-evenly rounded-md sm:flex-col md:flex-row">
        <div className="flex-none my-auto ml-2 md:pl-4">
          <Link to="/">
            <h1 className="flex sm:text-lg  md:text-3xl   ">
              <p className="bg-blue-500 rounded-md text-black px-1 ">Be</p>
              <p className="m-auto">-</p>
              <p className="text-black rounded-lg  bg-white flex px-1">
                N<span className="italic">ow</span>
              </p>
            </h1>
          </Link>
        </div>

        <div className="grow flex justify-center items-center text-sm md:text-lg">
          <ul className="flex gap-6 md:gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-blue-400" : "text-white"
                  }  hover:text-blue-300`
                }
              >
                <span class="material-symbols-outlined">home</span>
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
                <span class="material-symbols-outlined">edit_note</span>
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
                <span class="material-symbols-outlined">account_circle</span>
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
