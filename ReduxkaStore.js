import {createStore} from "redux";

import rootReducer from "./Reduxtodo/Reducer/MultiReduce";

const store = createStore(rootReducer);

export default store;