import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "./middlewares";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";

const combineStore = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer
});

export const store = createStore(combineStore, applyMiddleware(logger));
