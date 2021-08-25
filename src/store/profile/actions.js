import { UPDATE_USER, CHANGE_THEME } from "./types";

export const updateUser = (user = {}) => ({ type: UPDATE_USER, payload: user });

export const changeTheme = (theme) => ({ type: CHANGE_THEME, payload: theme });
