import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <ul className="grid grid-flow-col gap-4">
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
      </ul>

      <aside>
        <img src="logo.png" alt="logo" className="w-20" />
        <p>© 2025 Habibur Rahman. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
