import { StrictMode } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Chat, Profile, PageNone, Home, Art } from "./pages";
import { Menu } from "./components";
import styles from "./styles.module.css";
import { store, persistore } from "./store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <BrowserRouter>
          <header className={styles.header}>
            <Menu />
          </header>
          <Switch>
            <Route path="/chat" component={() => <Chat />} />
            <Route path="/profile" component={() => <Profile />} />
            <Route path="/artic" component={() => <Art />} />
            <Route exact path="/" component={() => <Home />} />
            <Route path="*" component={() => <PageNone />} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
