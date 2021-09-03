import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { conversationsSlice } from "./conversations";
import {
  logger,
  conversattionsMiddleware,
  messagesMiddleware,
} from "./middlewares";
import { messagesSlice } from "./messages";
import { profileSlice } from "./profile";

const combinedReducer = combineReducers({
  conversations: conversationsSlice.reducer,
  messages: messagesSlice.reducer,
  user: profileSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: [
    conversattionsMiddleware,
    messagesMiddleware,
    /*     ...getDefaultMiddleware(), */
  ],
});
