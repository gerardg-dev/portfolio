import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Landing from "./Landing";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["landing"]
};

const rootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    landing: Landing
  });
};

export default history => persistReducer(persistConfig, rootReducer(history));
