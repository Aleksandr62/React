import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
/* import { logger } from "./middlewares"; */
import { getArtItems } from "../api/art";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { artReducer, getArtSaga } from "./art";

const sagaMiddleware = createSagaMiddleware();

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
    messages: messagesReducer,
    art: artReducer
  })
);

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) //logger , thunk.withExtraArgument({ getArtItems })
);

sagaMiddleware.run(getArtSaga);

export const persistore = persistStore(store);
