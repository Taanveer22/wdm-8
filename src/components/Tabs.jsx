import { NavLink } from "react-router-dom";

const Tabs = ({ dataType, children }) => {
  return (
    <div className="my-12">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
          {dataType.map((typeitem) => (
            <li key={typeitem.id}>
              <NavLink
                to={`/allcards/${typeitem.category}`}
                typeitem={typeitem}
                className={({ isActive }) =>
                  `flex w-full items-start px-4 py-3 rounded-full ${
                    isActive
                      ? "bg-violet-500 text-white"
                      : "bg-gray-200 text-black"
                  }`
                }
                aria-current="page"
              >
                {typeitem.category}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-6 bg-gray-100 text-gray-500 rounded-lg w-full">
          {/* cards data showed by children props */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
