import {
  ADD_CONVERSATION_MESSAGES,
  UPDATE_CONVERSATION_MESSAGES,
  SEND_MESSAGE,
  DELETE_MESSAGES,
  DELETE_MESSAGE
} from "./types";

export const addConversationToMessages = (roomId) => ({
  type: ADD_CONVERSATION_MESSAGES,
  payload: roomId
});

export const updateChatMessage = (room, newRoom) => ({
  type: UPDATE_CONVERSATION_MESSAGES,
  payload: { room, newRoom }
});

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId }
});

export const deleteChatMessage = (roomId) => ({
  type: DELETE_MESSAGES,
  payload: roomId
});

export const deleteMessage = (idMessage, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { idMessage, roomId }
});
