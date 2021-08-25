import { getArtStart, getArtSuccess, getArtError } from "./actions";

export const getArt = (url, page = 1) => {
  return async (dispatch, _, api) => {
    try {
      dispatch(getArtStart());

      const { data } = await api.getArtItems(url, page);

      dispatch(getArtSuccess(data));
    } catch (err) {
      dispatch(getArtError(err));
    }
  };
};
