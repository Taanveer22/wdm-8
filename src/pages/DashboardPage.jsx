import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaSortAmountDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import {
  deleteCartFromLocalStorage,
  getCartFromLocalStorage,
} from "../utilities/lsCart";
import {
  deleteWishListFromLocalStorage,
  getWishListFromLocalStorage,
} from "../utilities/lsWishList";

const DashboardPage = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  // const [sortCartList, setSortCartList] = useState([]);

  useEffect(() => {
    const localStorageCart = getCartFromLocalStorage();
    setCartList(localStorageCart);

    const localStorageWishList = getWishListFromLocalStorage();
    setWishList(localStorageWishList);
  }, []);
  // console.log(cartList);
  // console.log(wishList);
  const handleRemoveFromCart = (id) => {
    deleteCartFromLocalStorage(id);
    const localStorageCart = getCartFromLocalStorage();
    setCartList(localStorageCart);
  };

  const handleRemoveFromWishList = (id) => {
    deleteWishListFromLocalStorage(id);
    const localStorageWishList = getWishListFromLocalStorage();
    setWishList(localStorageWishList);
  };

  const handleCartListSorting = (type) => {
    // console.log(type);
    if (type === "price") {
      const sortedCartList = [...cartList].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      setCartList(sortedCartList);
    }
  };
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
              <button
                onClick={() => handleCartListSorting("price")}
                className="flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-full"
              >
                <span>Sort By Price</span>
                <FaSortAmountDown></FaSortAmountDown>
              </button>
              <button className=" bg-purple-500 px-4 py-2 rounded-full">
                Purchase
              </button>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 w-1/2 mx-auto mt-6">
            {cartList.map((cardItem) => (
              <Card
                cardItem={cardItem}
                key={cardItem.product_id}
                showDeleteIcon={true}
                handleRemoveFromCart={handleRemoveFromCart}
              ></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex justify-between items-center mt-16">
            <h1 className="text-2xl font-bold">Wishlist</h1>
            <button className="flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-full">
              <span>Sort By Rating</span>
              <FaSortAmountDown></FaSortAmountDown>
            </button>
          </div>
          <div className="grid gap-6 grid-cols-1 w-1/2 mx-auto">
            {wishList.map((cardItem) => (
              <Card
                cardItem={cardItem}
                key={cardItem.product_id}
                showDeleteIcon={true}
                handleRemoveFromWishList={handleRemoveFromWishList}
              ></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
