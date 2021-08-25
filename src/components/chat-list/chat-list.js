import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { List, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChatOutlined } from "@material-ui/icons";
import {
  addConversation,
  updateConversation,
  deleteConversation
} from "../../store/conversations/actions";
import {
  addConversationToMessages,
  deleteChatMessage,
  updateChatMessage
} from "../../store/messages/actions";
import { DialogConfirm } from "./dialog-confirm";
import { Chat } from "./chat";
import { themes } from "../../themes";

const useStyles = makeStyles({
  chatBox: {
    position: "relative",
    width: "100%",
    minHeight: "60px"
  },
  fab: {
    position: "absolute",
    color: (props) => props.buttonColor,
    backgroundColor: (props) => props.buttonBgColor,
    zIndex: 10,
    bottom: "-10px",
    right: "15px",
    "&:hover": {
      backgroundColor: (props) => props.buttonBgHovColor,
      color: (props) => props.buttonBgColor
    }
  }
});

const selector = (state) => state.conversations.conversations;

export const ChatList = () => {
  const { roomId } = useParams();

  const currentTheme = useSelector((state) => state.profile.user.theme);
  const props = themes[currentTheme];
  const classes = useStyles(props);

  const conversations = useSelector(selector);
  const messages = useSelector((state) => state.messages.messages || []);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleAddRoom = useCallback(
    (room = "") => {
      dispatch(addConversation({ title: room, value: "" }));
      dispatch(addConversationToMessages({ title: room }));
    },
    [dispatch]
  );

  const changeRoomName = useCallback(
    (room, newRoom) => {
      dispatch(updateConversation({ title: room, value: "" }, newRoom));
      dispatch(updateChatMessage(room, newRoom));
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
    setOpen(false);
  };

  return (
    <div className={classes.chatBox}>
      <Fab
        aria-label="add"
        size="small"
        className={classes.fab}
        onClick={() => setOpen(true)}
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
            const messagesRoom = messages[room.title] || [];
            const lastMessage = messagesRoom[messagesRoom.length - 1] || {
              author: "",
              message: "Нет сообщений"
            };

            return (
              <Link
                key={idx}
                className={classes.chatList}
                to={`/chat/${room.title}`}
              >
                <Chat
                  currentTheme={currentTheme}
                  title={room.title}
                  selected={room.title === roomId}
                  lastMessage={lastMessage}
                  changeRoomName={changeRoomName}
                  roomDelete={handleDeleteRoom}
                />
              </Link>
            );
          })}
        </List>
      </div>
    </div>
  );
};
