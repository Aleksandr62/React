import { UPDATE_USER } from "./types";

export const updateUser = (user = {}) => ({ type: UPDATE_USER, payload: user });
