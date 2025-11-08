import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaSortAmountDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCartFromLocalStorage } from "../utilities/cart";
import Card from "../components/Card";

const DashboardPage = () => {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    const localStorageCart = getCartFromLocalStorage();
    setCartList(localStorageCart);
  }, []);
  console.log(cartList);
  return (
    <div>
      <div className="text-center bg-purple-500 py-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-base font-normal mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <Tabs>
        <TabList className="bg-purple-500 text-white pb-8 flex justify-center items-center">
          <Tab>Cart</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-16">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex gap-3 items-center">
              <h1 className="text-2xl font-bold">Total Cost : </h1>
              <button className="flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-full">
                <span>Sort By Price</span>
                <FaSortAmountDown></FaSortAmountDown>
              </button>
              <button className=" bg-purple-500 px-4 py-2 rounded-full">
                Purchase
              </button>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1">
            {cartList.map((cardItem) => (
              <Card cardItem={cardItem} key={cardItem.producta_id}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
