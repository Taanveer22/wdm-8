import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base font-medium"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-violet-700" : "text-gray-700"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statisticspage"
                  className={({ isActive }) =>
                    isActive ? "text-violet-700" : "text-gray-700"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboardpage"
                  className={({ isActive }) =>
                    isActive ? "text-violet-700" : "text-gray-700"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <h1 className="text-xl font-bold">Gadget Heaven</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-violet-700" : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statisticspage"
                className={({ isActive }) =>
                  isActive ? "text-violet-700" : "text-gray-700"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboardpage"
                className={({ isActive }) =>
                  isActive ? "text-violet-700" : "text-gray-700"
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-6">
            <div className="p-3 rounded-full border-2 border-gray-300">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </div>
            <div className="p-3 rounded-full border-2 border-gray-300">
              <FaRegHeart></FaRegHeart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
