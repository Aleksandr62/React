import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: {},
  status: "idle",
  error: null,
  reactions: 0
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    fetchMessages: {
      reducer(state, action) {
        state.messages = action.payload;
      }
    },
    messagesChatAdded: {
      reducer(state, action) {
        const { id } = action.payload;
        state.messages = { ...state.messages, [id]: [] };
      }
    },
    messageAdded: {
      reducer(state, action) {
        const { chatId, message } = action.payload;
        state.messages[chatId] = [...state.messages[chatId], message];
      },
      prepare({ id, author, text }, chatId) {
        const date = JSON.stringify(new Date());
        return {
          payload: { message: { id, author, text, date }, chatId }
        };
      }
    },
    messageUpdated(state, action) {
      const { id, author, text } = action.payload;
      const existingMessage = state.messages.find(
        (message) => message.id === id
      );
      if (existingMessage) {
        existingMessage.author = author;
        existingMessage.text = text;
      }
    }
  }
});

export const {
  fetchMessages,
  messagesChatAdded,
  messageAdded,
  messageUpdated
} = messagesSlice.actions;

export const selectAllMessages = (state) => state.messages.messages;

export const selectAllMessagesByChat = (state, chatId) =>
  state.messages.messages[chatId];

export const selectLastMessageByChat = (state, chatId) => {
  const messages = state.messages.messages[chatId];
  return messages && messages?.lenght > 1 ? messages[messages?.length - 1] : "";
};

export const selectMessageById = (state, messageId) =>
  state.messages.messages.find((message) => message.id === messageId);
