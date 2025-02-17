import { FaPhone } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { NavLink } from "./builders/NavLink";

export const Navbar = () => {
  const links = [
    { link: "About", to: "#about", icon: <FcAbout /> },
    { link: "Projects", to: "#projects", icon: <GrProjects /> },
    { link: "Contact", to: "#contact", icon: <FaPhone /> },
  ];

  return (
    <div className="z-100 absolute p-12  top-0 right-0 w-[200px]">
      <div className="flex flex-col items-center gap-4 shadow-md rounded-xl h-full w-28 bg-blue-200">
        <span></span>
        {links.map((li, i) => {
          const { link, to, icon } = li;
          return (
            <NavLink key={i} link={link} to={to}>
              {icon}
            </NavLink>
          );
        })}

        <span></span>
      </div>
    </div>
  );
};
