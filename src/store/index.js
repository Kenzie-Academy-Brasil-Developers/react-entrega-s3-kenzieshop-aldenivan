import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./modules/products/redeucer";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
