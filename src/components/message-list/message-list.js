import { Input, List } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { messageAdded, selectAllMessagesByChat } from "../../store/messages";
import { Message } from "./message";
import styles from "./message-list.module.css";

export const MessageList = () => {
  const { chatId } = useParams();
  const { user } = useSelector((state) => state.user);

  const [val, setVal] = useState();

  const dispatch = useDispatch();

  const messages = useSelector((state) =>
    selectAllMessagesByChat(state, chatId)
  );

  const handleClickSendMessage = () => {
    const date = new Date();
    dispatch(
      messageAdded(
        { id: date.getTime(), author: user.firstName, text: val },
        chatId
      )
    );
    setVal("");
  };

  return (
    <List className={styles.messageBox}>
      {messages ? (
        <>
          <div>
            {messages &&
              messages.map((message, idx) => {
                return <Message key={idx} message={message} />;
              })}
          </div>
          <Input
            fullWidth
            autoFocus
            value={val}
            onChange={(e) => setVal(e.target.value)}
            endAdornment={
              val && (
                <Send
                  className={styles.sendButton}
                  onClick={handleClickSendMessage}
                />
              )
            }
          />
        </>
      ) : (
        <div className={styles.chatInfo}>
          <h2>Выберите чат</h2>
        </div>
      )}
    </List>
  );
};
