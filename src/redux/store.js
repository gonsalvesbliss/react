//Central place where state is stored
import { createStore } from "redux";
import cartReducer from "./cartReducer";

const store = createStore(cartReducer);

export default store;