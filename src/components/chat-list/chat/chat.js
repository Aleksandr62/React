import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./chat.module.css";

export const Chat = ({ chat, lastMessage, selected }) => {
  return (
    <Link to={`/chat/${chat.id}`}>
      <ListItem button selected={selected}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText
          primary={chat.title}
          secondary={
            lastMessage && (
              <div className={styles.lastMessage}>
                {lastMessage.author}:<i>{lastMessage.text}</i>
              </div>
            )
          }
        />
      </ListItem>
    </Link>
  );
};
