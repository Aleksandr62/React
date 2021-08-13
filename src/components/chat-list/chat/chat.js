import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@material-ui/core";
import { AccountCircle, DeleteForeverOutlined } from "@material-ui/icons";
import styles from "./chat.module.css";

export const Chat = ({ title, selected, lastMessage, roomDelete }) => {
  const handleClickDelete = (e) => {
    e.preventDefault();
    roomDelete(title);
  };

  return (
    <ListItem divider dense selected={selected} className={styles.room}>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <div className={styles.info}>
        <ListItemText
          primary={title}
          secondary={`${lastMessage.author}: ${lastMessage.message}`}
        />
        <IconButton aria-label="delete" edge="end" onClick={handleClickDelete}>
          <DeleteForeverOutlined fontSize="small" />
        </IconButton>
      </div>
    </ListItem>
  );
};
