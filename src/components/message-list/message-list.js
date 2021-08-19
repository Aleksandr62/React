import { useDispatch, useSelector } from "react-redux";
import { Input, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../store/messages/actions";
import { updateValueConversation } from "../../store/conversations/actions";
import { Message } from "./message";
import styles from "./message-list.module.css";

export const MessageList = () => {
  const { roomId } = useParams();

  const value = useSelector(
    (state) =>
      state.conversations.conversations.find((room) => (room.title = roomId))
        ?.value
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
    dispatch(sendMessage({ author: user.firstName, message: value }, roomId));
  };

  const handlePressEnter = ({ code }) => {
    if (code.match("Enter") && value) handleSendMessage();
  };

  return (
    <div className={styles.messageBox}>
      <div className={styles.messages}>
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
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
  );
};
