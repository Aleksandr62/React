import { useState } from "react";
import { List, Fab } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ChatOutlined } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { DialogConfirm } from "./dialog-confirm";
import { Chat } from "./chat";
import styles from "./chat-list.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%"
    },
    fab: {
      position: "absolute",
      color: theme.dark.color,
      backgroundColor: theme.light.buttonColor,
      zIndex: 10,
      bottom: theme.spacing(-1.5),
      right: theme.spacing(2)
    }
  })
);

export const ChatList = ({ conversations, messages, roomDelete, addRoom }) => {
  const { roomId } = useParams();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleAddRoom = (room = "") => {
    addRoom(room);
  };

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
        rooms={conversations}
        open={open}
        close={handleClose}
        handleAddRoom={handleAddRoom}
      />
      <List>
        {conversations.map((room) => {
          const lastMessage = [...messages[room.title]].pop() || "";

          return (
            <div className={styles.chatList}>
              <Link key={room.title} to={`/chat/${room.title}`}>
                <Chat
                  title={room.title}
                  selected={room.title === roomId}
                  lastMessage={lastMessage}
                  roomDelete={roomDelete}
                />
              </Link>
            </div>
          );
        })}
      </List>
    </div>
  );
};
