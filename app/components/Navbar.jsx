import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ toggleTheme }) => {
  return (
    <div className="navbar dark shadow-2xl z-50 fixed">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 "
          >
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Products</a>
              <ul className="p-2">
                <li>
                  <a>Cabinets</a>
                </li>
                <li>
                  <a>Doors</a>
                </li>
              </ul>
            </li>

            <li>
              <details>
                <summary>Socials</summary>
                <ul className="p-2">
                  <li>
                    <a
                      href="https://www.facebook.com/mi.konstraktura"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a>Twitter</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img
            src="mi-konstraktura logo.jpg"
            alt="logo"
            className="navbar-logo"
          />
          Mi-Konstrucktura
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Services</a>
          </li>
          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2">
                <li>
                  <a>Cabinets</a>
                </li>
                <li>
                  <a>Doors</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Socials</summary>
              <ul className="p-2">
                <li>
                  <a
                    href="https://www.facebook.com/mi.konstraktura"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden sm:inline-flex">
        <a className="btn">Inquire now</a>
      </div>
    </div>
  );
};

export default Navbar;
