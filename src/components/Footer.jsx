import thank from "../assets/thank.svg";

export const Footer = () => {
  return (
    <div>
      <div className="h-24 -mt-8 flex gap-12 items-end overflow-hidden">
        {Array.from({ length: 24 }).map((_, index) => (
          <img
            key={index}
            className="h-12 scale-90 -mb-1 -ml-5 -z-10  opacity-30"
            src={thank}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
