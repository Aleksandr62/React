/* import { ThemeProvider } from "@material-ui/core"; */
import { StrictMode } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Chat, Profile, PageNone, Home } from "./pages";
import { Menu } from "./components";
import styles from "./styles.module.css";
/* import { Themes } from "./themes"; */
import { store } from "./store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/*         <ThemeProvider theme={Themes}> */}
        <header className={styles.header}>
          <Menu />
        </header>
        <Switch>
          <Route path="/chat" component={() => <Chat />} />
          <Route path="/profile" component={() => <Profile />} />
          <Route exact path="/" component={() => <Home />} />
          <Route path="*" component={() => <PageNone />} />
        </Switch>
        {/*         </ThemeProvider> */}
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
