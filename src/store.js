
import { createStoreHook} from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootreducers from "./components/redux/reducers/main";


const middleware = [thunk];

const store = createStoreHook(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;