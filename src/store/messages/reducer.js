import {
  ADD_CONVERSATION_MESSAGES,
  UPDATE_CONVERSATION_MESSAGES,
  SEND_MESSAGE,
  DELETE_MESSAGES,
  DELETE_MESSAGE
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
    case UPDATE_CONVERSATION_MESSAGES:
      return {
        ...state,
        messages: Object.entries(state.messages).reduce((acc, [key, value]) => {
          key !== action.payload.room
            ? (acc[key] = value)
            : (acc[action.payload.newRoom] = value);
          return acc;
        }, {})
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId],
            { ...action.payload.message }
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
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...state.messages[action.payload.roomId].filter(
              (message) => +message.id !== +action.payload.idMessage
            )
          ]
        }
      };
    default:
      return state;
  }
};
