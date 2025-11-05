import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Tabs from "../components/Tabs";

const HomePage = () => {
  const dataType = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Tabs dataType={dataType}></Tabs>
    </div>
  );
};

export default HomePage;
