import {
  ListItem,
  Input,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle, DeleteForeverOutlined } from "@material-ui/icons";
import { useState } from "react";
/* import styles from "./chat.module.css"; */
import { themes } from "../../../themes";

const useStyles = makeStyles({
  room: {
    width: "100%",
    "&:hover": {
      backgroundColor: (props) => props.buttonBgHovColor,
      fontWeight: 900
    },
    "&.Mui-selected": {
      backgroundColor: (props) => props.buttonBgHovColor
    }
  },
  roomTitle: {
    width: "fit-content"
  },
  info: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center"
  },
  text: {
    width: "100px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
});

export const Chat = ({
  currentTheme,
  title,
  selected,
  lastMessage,
  changeRoomName,
  roomDelete
}) => {
  const [roomName, setRoomName] = useState(title);
  const [editRoomName, setEditRoomName] = useState(true);

  const props = themes[currentTheme];
  const classes = useStyles(props);

  const handleDblClick = () => {
    setEditRoomName(false);
  };

  const sendChangeRoomName = () => {
    setEditRoomName(true);
    changeRoomName(title, roomName);
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    roomDelete(title);
  };

  const handlePressEnter = ({ code }) => {
    if (code.match("Enter") && roomName !== title) sendChangeRoomName();
  };

  const handleEscape = ({ target }) => {
    if (target.id !== "chatId") setEditRoomName(true);
  };

  return (
    <ListItem divider dense selected={selected} className={classes.room}>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <div className={classes.info}>
        <ListItemText
          onDoubleClick={handleDblClick}
          onMouseUp={handleEscape}
          primary={
            !editRoomName ? (
              <Input
                id="chatId"
                value={roomName}
                inputProps={{ size: title.length, maxlengt: title.length }}
                onKeyPress={handlePressEnter}
                onChange={({ target }) => setRoomName(target.value)}
              />
            ) : (
              title
            )
          }
          secondary={`${lastMessage.author}: ${lastMessage.message}`}
          secondaryTypographyProps={{ class: classes.text }}
        />
        <IconButton aria-label="delete" edge="end" onClick={handleClickDelete}>
          <DeleteForeverOutlined fontSize="small" />
        </IconButton>
      </div>
    </ListItem>
  );
};
