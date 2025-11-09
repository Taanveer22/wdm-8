import { toast } from "react-toastify";

// get from wish list
const getWishListFromLocalStorage = () => {
  let wishList = [];
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    wishList = JSON.parse(storedWishList);
  }
  return wishList;
};
// set to wish list
const setWishListToLocalStorage = (product) => {
  // console.log(product);
  let wishList = getWishListFromLocalStorage();
  const isExist = wishList.find(
    (item) => item.product_id === product.product_id
  );
  if (isExist) {
    return toast.error("already exist in wish list");
  } else {
    wishList.push(product);
    localStorage.setItem("wishList", JSON.stringify(wishList));
    return toast.success("successfully added to wish list");
  }
};
// delete from wish list
const deleteWishListFromLocalStorage = (id) => {
  let wishList = getWishListFromLocalStorage();
  const remainingWishList = wishList.filter((item) => item.product_id !== id);
  if (remainingWishList) {
    localStorage.setItem("wishList", JSON.stringify(remainingWishList));
    return toast.warning("deleted from wish list");
  }
}; // export all functions

export {
  getWishListFromLocalStorage,
  setWishListToLocalStorage,
  deleteWishListFromLocalStorage,
};
