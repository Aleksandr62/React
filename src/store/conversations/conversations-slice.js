import { createSlice, nanoid } from "@reduxjs/toolkit";
import { conversationsDb } from "../../api";

const initialState = {
  conversations: [],
  status: "idle",
  error: null,
};

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    fetchConversations: {
      reducer(state, action) {
        state.conversations = action.payload;
      },
    },
    conversationAdded: {
      reducer(state, action) {
        state.conversations = [...state.conversations, action.payload];
      },
      prepare({ id, title, value }) {
        return { payload: { id, title, value } };
      },
    },
    conversationUpdated(state, action) {
      const { id, title, value } = action.payload;
      const existingConversation = state.conversations.find(
        (conversation) => conversation.id === id
      );
      if (existingConversation) {
        existingConversation.title = title;
        existingConversation.value = value;
      }
    },
  },
});

export const { fetchConversations, conversationAdded, conversationUpdated } =
  conversationsSlice.actions;

export function getConversattions(dispatch, getState) {
  const response = conversationsDb.get();
  dispatch(conversationAdded(response));
}

export const selectAllConversations = (state) =>
  state.conversations.conversations;

export const selectConversationById = (state, conversationId) =>
  state.conversations.conversations.find(
    (conversation) => conversation.id === conversationId
  );
