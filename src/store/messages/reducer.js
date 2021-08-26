import {
  ADD_CONVERSATION_MESSAGES,
  SEND_MESSAGE,
  DELETE_MESSAGES
} from "./types";

const initialState = {
  messages: {}
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONVERSATION_MESSAGES:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.title]: []
        }
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            action.payload.message
          ]
        }
      };
    case DELETE_MESSAGES:
      return {
        ...state,
        messages: Object.entries(state.messages).reduce((acc, [key, value]) => {
          if (key !== action.payload.title) acc[key] = value;
          return acc;
        }, {})
      };
    default:
      return state;
  }
};
