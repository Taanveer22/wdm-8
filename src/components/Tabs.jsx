import { NavLink } from "react-router-dom";

const Tabs = ({ dataType }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
          {dataType.map((typeItem) => (
            <NavLink
              key={typeItem.id}
              typeItem={typeItem}
              className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full"
              aria-current="page"
            >
              {typeItem.category}
            </NavLink>
          ))}
          <li></li>
        </ul>
        <div className="p-6 bg-gray-50 text-medium text-gray-500  rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Profile Tab</h3>
          <p className="mb-2">
            This is some placeholder content the Profile tab's associated
            content, clicking another tab will toggle the visibility of this one
            for the next.
          </p>
          <p>
            The tab JavaScript swaps classes to control the content visibility
            and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
