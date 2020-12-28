import { Link, NavLink } from "react-router-dom";
const Fade = require("react-reveal/Fade");

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-gray-200 px-2 md:px-16 lg:px-24">
      <Fade left>
        <Link to="/" className="text-2xl pl-2">
          AmZaDin14
        </Link>
      </Fade>
      <Fade right>
        <ol className="flex space-x-6 md:space-x-12 py-2 px-5 text-gray-400">
          <li>
            <NavLink
              to="/"
              exact
              className="hover:text-gray-200 hover:border-gray-200 py-2"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-200 hover:border-gray-200 py-2"
            >
              About
            </NavLink>
          </li>
        </ol>
      </Fade>
    </nav>
  );
};

export default Navbar;
