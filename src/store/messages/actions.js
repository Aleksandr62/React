import {
  ADD_CONVERSATION_MESSAGES,
  SEND_MESSAGE,
  DELETE_MESSAGES
} from "./types";

export const addConversationToMessages = (roomId) => ({
  type: ADD_CONVERSATION_MESSAGES,
  payload: roomId
});

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId }
});

export const deleteChatMessage = (roomId) => ({
  type: DELETE_MESSAGES,
  payload: roomId
});
