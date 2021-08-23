import {
  ADD_CONVERSATION,
  UPDATE_CONVERSATION,
  CLEAR_CONVERSATION_VALUE,
  DELETE_CONVERSATION,
  UPDATE_VALUE_CONVERSATION,
} from "./types";

export const addConversation = (conversation) => ({
  type: ADD_CONVERSATION,
  payload: conversation,
});

export const updateConversation = (conversation, newRoom) => ({
  type: UPDATE_CONVERSATION,
  payload: { ...conversation, newRoom },
});

export const clearConversationValue = (conversation) => ({
  type: CLEAR_CONVERSATION_VALUE,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});

export const updateValueConversation = (conversation) => ({
  type: UPDATE_VALUE_CONVERSATION,
  payload: conversation,
});
