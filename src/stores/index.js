import { createStore } from "redux";
import makananReducer from "./reducers/makananReducer";

const store = createStore(makananReducer);

export default store;