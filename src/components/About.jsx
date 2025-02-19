import works from "../assets/works.svg";
import { OneProject } from "./builders/OneProject";

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
        <OneProject />
        <OneProject />
        <OneProject />
      </div>
    </div>
  );
};
