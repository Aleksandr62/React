import { messagesDb } from "../../api";

export const messagesMiddleware = () => (next) => (action) => {
  if (action.type === "messages/messageAdded") {
    messagesDb.set(action.payload);
  }
  return next(action);
};
