export const NavLink = ({ link, to, children }) => {
  return (
    <a
      className="hover:bg-white rounded-lg shadow-2xl flex flex-col gap-1 items-center justify-center bg-yellow-50 h-20 w-20"
      href={to}
    >
      <span className="text-2xl">{children}</span>
      <span className="text-xs font-light">{link}</span>
    </a>
  );
};
