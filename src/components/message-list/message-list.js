import { Input, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { Message } from "./message";
import styles from "./message-list.module.css";

export const MessageList = ({
  messages,
  value,
  handleChangeValue,
  sendMessage
}) => {
  const { roomId } = useParams();

  const handleSendMessage = () => {
    sendMessage({ author: "User", message: value }, roomId);
  };

  return (
    <div className={styles.messageBox}>
      <div className={styles.messages}>
        {messages[roomId].map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </div>
      <Input
        value={value}
        onChange={handleChangeValue}
        name={roomId}
        fullWidth={true}
        placeholder="Введите сообщение..."
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={handleSendMessage} />}
          </InputAdornment>
        }
      />
    </div>
  );
};
