import { NavLink } from "react-router-dom";

const Tabs = ({ dataType, children }) => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-center mb-6">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
          {dataType.map((typeitem) => (
            <NavLink
              to={`/allcards/${typeitem.category}`}
              key={typeitem.id}
              typeitem={typeitem}
              className="inline-flex items-center px-4 py-3 text-white bg-gray-300 rounded-full w-full"
              aria-current="page"
            >
              {typeitem.category}
            </NavLink>
          ))}
          <li></li>
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
