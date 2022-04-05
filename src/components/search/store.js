import { createStore } from "redux";
import { tokenReducer } from "./reducers";

const store = createStore(tokenReducer, { accessToken: "" });

export default store;
