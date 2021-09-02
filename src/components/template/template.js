import { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Switch,
  ThemeProvider,
  Theme,
  createTheme
} from "@material-ui/core";
import styles from "./template.module.css";

const themeLight = createTheme({
  palette: {
    type: "light"
  }
});
const themeDark = createTheme({
  palette: {
    type: "dark"
  }
});

export const Template = ({ header, leftSideBar, children }) => {
  const [check, setCheck] = useState(false);
  const [curTheme, setCurTheme] = useState(themeLight);
  const handleSwitchTheme = () => {
    setCurTheme(!check ? themeLight : themeDark);
    setCheck((state) => !state);
    console.log(curTheme);
    console.log(check);
  };
  return (
    <ThemeProvider theme={curTheme}>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <Paper elevation={0}>
            <header>{header}</header>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper elevation={0}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={5}>
                <div>dark</div>
                <div>light</div>
              </Grid>
              <Grid item xs={7}>
                <Switch
                  className={styles.switchTheme}
                  checked={check}
                  onChange={handleSwitchTheme}
                  color="default"
                  size="small"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={styles.leftSideBar} elevation={0} square>
            <section>{leftSideBar}</section>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={styles.main} elevation={0} square>
            <section className={styles.content}>{children}</section>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
