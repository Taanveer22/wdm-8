import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Tabs from "../components/Tabs";

import { Outlet } from "react-router-dom";

const HomePage = () => {
  const dataType = useLoaderData();
  return (
    <>
      <Banner></Banner>
      {/* pass outlet as a children of tabs to show right side cards */}
      <Tabs dataType={dataType}>
        <Outlet></Outlet>
      </Tabs>
    </>
  );
};

export default HomePage;
