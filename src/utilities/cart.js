// get from local storage
const getCartFromLocalStorage = () => {
  let cart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// set to local storage
const setCartToLocalStorage = (product) => {
  // console.log(product);
  let cart = getCartFromLocalStorage();
  const isExist = cart.find((item) => item.product_id === product.product_id);
  if (isExist) {
    return alert("already added");
  } else {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    return alert("successfully added");
  }
};

// delete from local storage

// export all functions

export { getCartFromLocalStorage, setCartToLocalStorage };
