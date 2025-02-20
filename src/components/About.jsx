import works from "../assets/works.svg";
import { OneProject } from "./builders/OneProject";

import cool from "../assets/cool.png";
import cool2 from "../assets/cool2.jpeg";
import cool3 from "../assets/cool3.jpeg";

export const About = () => {
  return (
    <div>
      <div className="h-24 -mb-10 flex gap-12 items-center overflow-hidden">
        {Array.from({ length: 24 }).map((_, index) => (
          <img
            key={index}
            className="h-12 -z-10  opacity-30"
            src={works}
            alt=""
          />
        ))}
      </div>
      <div className="h-90 flex gap-4 px-4 z-10">
        <OneProject cool={cool} />
        <OneProject cool={cool2} />
        <OneProject cool={cool3} />
      </div>
    </div>
  );
};
