import { useCallback, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { List, Fab } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ChatOutlined } from "@material-ui/icons";
import {
  addConversation,
  deleteConversation
} from "../../store/conversations/actions";
import {
  addConversationToMessages,
  deleteChatMessage
} from "../../store/messages/actions";
import { DialogConfirm } from "./dialog-confirm";
import { Chat } from "./chat";
import styles from "./chat-list.module.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%",
      minWidth: "200px",
      minHeight: "60px"
    },
    fab: {
      position: "absolute",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      zIndex: 10,
      bottom: theme.spacing(-1.5),
      right: theme.spacing(2)
    }
  })
);

const selector = (state) => state.conversations.conversations;

export const ChatList = memo(() => {
  const { roomId } = useParams();
  const classes = useStyles();

  const conversations = useSelector(selector);
  const messages = useSelector(
    (state) => state.messages.messages[roomId] || []
  );

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleAddRoom = useCallback(
    (room = "") => {
      dispatch(addConversation({ title: room, value: "" }));
      dispatch(addConversationToMessages({ title: room }));
    },
    [dispatch]
  );

  const handleDeleteRoom = useCallback(
    (roomTitle) => {
      dispatch(deleteConversation({ title: roomTitle }));
      dispatch(deleteChatMessage({ title: roomTitle }));
    },
    [dispatch]
  );

  const handleClose = () => {
    setOpen((open) => (open = false));
  };

  return (
    <div className={classes.root}>
      <Fab
        aria-label="add"
        size="small"
        className={classes.fab}
        onClick={() => setOpen((open) => (open = true))}
      >
        <ChatOutlined fontSize="small" />
      </Fab>
      <DialogConfirm
        chats={conversations}
        open={open}
        close={handleClose}
        handleAddRoom={handleAddRoom}
      />
      <div>
        <List component="nav">
          {conversations.map((room, idx) => {
            const lastMessage = messages[messages?.length - 1] || {
              author: "",
              message: "Нет сообщений"
            };

            return (
              <Link
                key={idx}
                className={styles.chatList}
                to={`/chat/${room.title}`}
              >
                <Chat
                  title={room.title}
                  selected={room.title === roomId}
                  lastMessage={lastMessage}
                  roomDelete={handleDeleteRoom}
                />
              </Link>
            );
          })}
        </List>
      </div>
    </div>
  );
});
