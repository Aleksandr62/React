import { UPDATE_USER } from "./types";

export const updateUser = (payload = {}) => ({ type: UPDATE_USER, payload });
