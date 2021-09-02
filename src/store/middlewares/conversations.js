import { conversationsDb, messagesDb } from "../../api";
import { messagesChatAdded } from "../../store/messages";

export const conversattionsMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "conversations/conversationAdded") {
    conversationsDb.set(action.payload);
    storeAPI.dispatch(messagesChatAdded(action.payload));
  }

  return next(action);
};
