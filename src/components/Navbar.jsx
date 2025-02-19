import { NavLink } from "./builders/NavLink";
import { RiFileUserFill, RiFolderVideoFill, RiPhoneFill } from "react-icons/ri";

export const Navbar = () => {
  const links = [
    { link: "About", to: "#about", icon: <RiFileUserFill /> },
    { link: "Works", to: "#projects", icon: <RiFolderVideoFill /> },
    { link: "Contact", to: "#contact", icon: <RiPhoneFill /> },
  ];

  return (
    <div className="p-4 flex gap-4 items-center font-one rounded-lg w">
      <div>
        <p className="text-3xl">TAWHID KHAN</p>
      </div>
      <div className="h-[2px] rounded-full flex-1 bg-black/70"></div>
      <div className="flex gpa-2 text-white bg-black/70 p-4 rounded-lg gap-4">
        {links.map((l, i) => {
          return <NavLink key={i} link={l.link} to={l.to} />;
        })}
      </div>
    </div>
  );
};
