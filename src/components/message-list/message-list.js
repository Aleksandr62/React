import { useDispatch, useSelector } from "react-redux";
import { Input, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { sendMessageWithThunk, deleteMessage } from "../../store/messages";
import { updateValueConversation } from "../../store/conversations";
import { Message } from "./message";
import styles from "./message-list.module.css";
import { useEffect, useRef } from "react";

export const MessageList = () => {
  const { roomId } = useParams();

  const ref = useRef(null);

  const value = useSelector(
    (state) =>
      state.conversations.conversations.find((room) => room.title === roomId)
        ?.value || ""
  );
  const isExistRoom = useSelector((state) =>
    state.conversations.conversations.find((room) => room.title === roomId)
  );

  const messages = useSelector(
    (state) => state.messages.messages[roomId] || []
  );
  const user = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  const handleChangeValue = ({ target }) => {
    dispatch(updateValueConversation({ title: roomId, value: target.value }));
  };

  const handleSendMessage = () => {
    dispatch(
      sendMessageWithThunk(
        {
          id: messages.length,
          author: user.firstName,
          message: value,
          date: new Date()
        },
        roomId
      )
    );
  };

  useEffect(() => {
    if (ref.current) ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  const handleMessageDelete = ({ target }) => {
    dispatch(deleteMessage(target.dataset.messageId, roomId));
  };

  const handlePressEnter = ({ code }) => {
    if (code.match("Enter") && value) handleSendMessage();
  };

  return (
    <div className={styles.messageBoxWrapper}>
      {isExistRoom && (
        <div>
          <div ref={ref} className={styles.messageBox}>
            <div className={styles.messages}>
              {messages.map((message, index) => {
                return (
                  <Message
                    key={index}
                    message={message}
                    handleMessageDelete={handleMessageDelete}
                  />
                );
              })}
            </div>
          </div>
          <Input
            value={value}
            onChange={handleChangeValue}
            onKeyPress={handlePressEnter}
            fullWidth={true}
            placeholder="Введите сообщение..."
            endAdornment={
              <InputAdornment className={styles.sendButton} position="end">
                {value && <Send onClick={handleSendMessage} />}
              </InputAdornment>
            }
          />
        </div>
      )}
    </div>
  );
};
