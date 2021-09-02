import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { conversationsDb, messagesDb } from "./api";
import { fetchConversations } from "./store/conversations";
import { fetchMessages } from "./store/messages";
import { profileAdded, profileClear } from "./store/profile";
import { store } from "./store";
import { MainRouter } from "./router";
import styles from "./app.module.css";

const App = () => {
  const auth = getAuth();

  const dispatch = useDispatch();

  useEffect(() =>
    onAuthStateChanged(auth, (user) => {
      const userProfile = {
        id: user?.uid,
        email: user?.email,
        firstName: user?.displayName,
        lastName: user?.email,
        created_at: user?.metadata.createdAt,
        updated_at: user?.reloadUserInfo.lastRefreshAt
      };

      if (user) {
        dispatch(profileAdded(userProfile));
        conversationsDb
          .get()
          .then((resp) => dispatch(fetchConversations(resp)));
        messagesDb.get().then((resp) => dispatch(fetchMessages(resp)));
      } else {
        dispatch(profileClear());
      }
    })
  );

  return (
    <BrowserRouter>
      <MainRouter className={styles.app} />
    </BrowserRouter>
  );
};

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  root
);
