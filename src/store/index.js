import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["conversations", "messages"],
  whitelist: ["profile"]
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer
  })
);

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export const persistore = persistStore(store);
