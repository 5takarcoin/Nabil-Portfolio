import { useState } from "react";
import { IoMdEye } from "react-icons/io";

export const OneProject = ({ cool, offset = "", desc = "description" }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="flex relative items-center justify-center w-full h-72 md:h-96 rounded-lg overflow-hidden"
    >
      <img
        src={cool}
        className={`${
          hovering && "scale-125 " + offset
        } transition-transform duration-300`}
        alt=""
      />
      {hovering && (
        <div className="absolute flex items-center justify-center bg-black/60 h-full w-full">
          <IoMdEye className="text-white text-4xl" />
        </div>
      )}
      {hovering && (
        <div className="absolute bottom-4 text-white font-one">
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};
