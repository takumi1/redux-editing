import {combineReducers, legacy_createStore} from "redux";
import serviceReducer from "../reducers/services";
import defaultValue from "../reducers/defaultValue";


const reducer = combineReducers({
    services: serviceReducer,
    defaultValue: defaultValue
});
const store = legacy_createStore(reducer);
export default store;