import { UPDATE_USER } from "./types";

const initialState = {
  user: {
    id: 1,
    firstName: "Vasya",
    lastName: "Ivanov",
    birthday: "2001-10-01"
  }
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
