import { UPDATE_USER, CHANGE_THEME } from "./types";

const initialState = {
  user: {
    id: 1,
    firstName: "Vasya",
    lastName: "Ivanov",
    birthday: "2001-10-01",
    theme: "light"
  }
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case CHANGE_THEME:
      return {
        ...state,
        user: { ...state.user, theme: action.payload }
      };
    default:
      return state;
  }
};
