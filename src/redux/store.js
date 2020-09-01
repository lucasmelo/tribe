import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

console.log('aaa', store.getState())

export default store;