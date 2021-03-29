import {createStore} from "redux";
import applicationReducer from "../reducers/application-reducer";

let store = createStore(applicationReducer)

export default store;