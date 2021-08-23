import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Template, ChatList, MessageList } from "../components";

export const Chat = () => {
  const { push } = useHistory();

  useEffect(() => {
    const listenExistChat = ({ code }) => {
      if (code === "Escape") {
        push("/chat");
      }
    };
    document.addEventListener("keydown", listenExistChat);
    return () => {
      document.removeEventListener("keydown", listenExistChat);
    };
  }, [push]);

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <Template leftSideBar={<ChatList />}>
          <Route path="/chat/:roomId">
            <MessageList />
          </Route>
          <Route exact={true} path="/chat">
            <h3>Выберите чат</h3>
          </Route>
        </Template>
      </Route>
    </Switch>
  );
};
