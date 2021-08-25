import { GET_ART_START, GET_ART_SUCCESS, GET_ART_ERROR } from "./types";

const initialState = {
  data: {},
  loading: false,
  error: null
};

export const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ART_START:
      return {
        ...state,
        loading: true
      };
    case GET_ART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      };
    case GET_ART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
