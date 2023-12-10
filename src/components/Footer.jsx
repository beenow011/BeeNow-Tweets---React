import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black text-white border-y mt-10 rounded-md">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <h1 className="flex text-3xl">
                <p className="text-blue-500">B</p>e
                <p className="text-blue-500">N</p>ow
              </h1>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Tweet
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/beenow011"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023
            <a href="">beenow011</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="/" className="flex items-center">
              <h5 className="flex text-lg">
                <p className="text-blue-500">B</p>e
                <p className="text-blue-500">N</p>ow
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
