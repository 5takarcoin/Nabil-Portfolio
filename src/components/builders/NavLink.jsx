export const NavLink = ({ link, to }) => {
  return (
    <a href={to}>
      <span className="text-sm font-light hover:text-gray-300 text-white font-one">
        {link}
      </span>
    </a>
  );
};
