import React from "react";
import { Link } from "react-scroll";
const Nav = () => {
  const navLinks = (
    <>
      <li>
        <Link to="about" smooth={true} duration={400}>
          About
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={400}>
          Skills
        </Link>
      </li>
      <li>
        <Link to="education" smooth={true} duration={400}>
          Education
        </Link>
      </li>
      <li>
        <Link to="experience" smooth={true} duration={400}>
          Experience
        </Link>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
         <Link to="contact" smooth={true} duration={400}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img src="logo.png" className="w-28" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
