import { GET_ART_START, GET_ART_SUCCESS, GET_ART_ERROR } from "./types";

export const getArtStart = () => ({ type: GET_ART_START });

export const getArtSuccess = (data) => ({
  type: GET_ART_SUCCESS,
  payload: data
});

export const getArtError = (error) => ({
  type: GET_ART_ERROR,
  payload: error
});
