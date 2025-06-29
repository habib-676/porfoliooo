import React from "react";
import { Link } from "react-scroll";
import { IoPersonCircleSharp, IoSchoolSharp } from "react-icons/io5";
import { RiCodeFill } from "react-icons/ri";
import { BsGearFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
const Nav = () => {
  const navLinks = (
    <>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={400}
          className="flex gap-2 hover:text-primary hover:scale-120 transition-all duration-200"
        >
          <IoPersonCircleSharp size={20} />
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={400}
          className="flex gap-2 hover:text-primary hover:scale-120 transition-all duration-200"
        >
          <BsGearFill size={20} />
          <span>Skills</span>
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={400}
          className="flex gap-2 hover:text-primary hover:scale-120 transition-all duration-200"
        >
          <IoSchoolSharp size={20} />
          <span>Education</span>
        </Link>
      </li>

      <li>
        <Link
          to="projects"
          smooth={true}
          duration={400}
          className="flex gap-2 hover:text-primary hover:scale-120 transition-all duration-200"
        >
          <RiCodeFill size={20} />
          <span>Projects</span>
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={400}
          className="flex gap-2 hover:text-primary hover:scale-120 transition-all duration-200"
        >
          <GrContact size={20}/>
          <span>Contact</span>
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
        <div className="navbar  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
