import {
  ADD_CONVERSATION,
  UPDATE_CONVERSATION,
  CLEAR_CONVERSATION_VALUE,
  DELETE_CONVERSATION,
  UPDATE_VALUE_CONVERSATION
} from "./types";

const initialState = {
  conversations: []
};

const updateConversation = (state, title, value, newRoom = "") => {
  return newRoom
    ? state.conversations.map((room) =>
        room?.title === title ? { ...room, title: newRoom } : room
      )
    : state.conversations.map((room) =>
        room?.title === title ? { ...room, value } : room
      );
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload]
      };
    case UPDATE_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...updateConversation(
            state,
            action.payload.title,
            action.payload.value,
            action.payload.newRoom
          )
        ]
      };
    case CLEAR_CONVERSATION_VALUE:
      return {
        ...state,
        conversations: [...updateConversation(state, action.payload.title, "")]
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...state.conversations.filter(
            (room) => room.title !== action.payload.title
          )
        ]
      };
    case UPDATE_VALUE_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...updateConversation(
            state,
            action.payload.title,
            action.payload.value
          )
        ]
      };
    default:
      return state;
  }
};
