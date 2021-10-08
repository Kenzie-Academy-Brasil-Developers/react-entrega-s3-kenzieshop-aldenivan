import { addToCart } from "./actions";

export const addToCartThunk = (product) => (disptch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));

  disptch(addToCart(product));
};
