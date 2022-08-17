import {combineReducers, legacy_createStore} from "redux";
import ServiceReducer from "../reducers/services";
import defaultValue from "../reducers/defaultValue";



const reducer = combineReducers({
    services: ServiceReducer,
    defaultValue: defaultValue
});
const store = legacy_createStore(reducer);
export default store;