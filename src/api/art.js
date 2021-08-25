import { art } from "./request";

export const getArtItems = ({ article, page }) =>
  art.get(`/${article}?page=${+page}`);
