import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experiences" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-White font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-Cyan/30 backdrop-blur-lg lg:bg-Black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              href="#"
              className="cursor-pointer text-White hover:text-Cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-Cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
