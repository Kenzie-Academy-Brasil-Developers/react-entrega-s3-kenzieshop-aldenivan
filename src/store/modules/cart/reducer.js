import { ADD_CART } from "./actionType";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;

      return [...state, product];

    default:
      return state;
  }
};

export default cartReducer;
