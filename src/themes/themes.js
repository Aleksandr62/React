import { createTheme } from "@material-ui/core";

export const themes = {
  dark: createTheme({
    backgroundColor: "#17212b",
    color: "#fff",
    buttonBgColor: "#fff",
    buttonColor: "#17212b"
  }),
  light: createTheme({
    backgroundColor: "#fff",
    color: "#17212b",
    buttonBgHovColor: "#6791bb",
    buttonBgColor: "#17212b",
    buttonColor: "#fff"
  })
};
