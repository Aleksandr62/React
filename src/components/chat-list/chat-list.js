import {
  List,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Input,
  DialogActions
} from "@material-ui/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  conversationAdded,
  selectAllConversations
} from "../../store/conversations";
import { selectAllMessages } from "../../store/messages";
import { Chat } from "./chat";
import styles from "./chat-list.module.css";

export const ChatList = () => {
  const { chatId } = useParams();

  const conversations = useSelector(selectAllConversations);
  const allMessages = useSelector(selectAllMessages);

  const [dialogShow, setDialogShow] = useState(false);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const handleAddChat = () => {
    const date = new Date();
    dispatch(conversationAdded({ id: date.getTime(), title, value: "" }));
    setTitle("");
    setDialogShow(false);
  };

  return (
    <>
      <Button fullWidth onClick={() => setDialogShow(true)} variant="outlined">
        Add Chat
      </Button>
      <Dialog
        className={styles.dialog}
        open={dialogShow}
        onClose={() => setDialogShow(false)}
      >
        <DialogTitle>Add chat</DialogTitle>
        <DialogContent>
          <Input
            placeholder="Title chat..."
            fullWidth
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button fullWidth onClick={handleAddChat} variant="outlined">
            Add chat
          </Button>
        </DialogActions>
      </Dialog>

      <List component="nav">
        {conversations.map((chat) => {
          const messagesChat = allMessages[chat.id];
          const lastMessage = messagesChat
            ? messagesChat[messagesChat.length - 1]
            : "";
          return (
            <Chat
              key={chat.id}
              chat={chat}
              lastMessage={lastMessage}
              selected={chat.id === chatId}
            />
          );
        })}
      </List>
    </>
  );
};
