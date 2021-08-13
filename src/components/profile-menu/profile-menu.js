import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import styles from "./profile-menu.module.css";

export const ProfileMenu = ({ firstName, lastName }) => {
  return (
    <List>
      <ListItem divider dense className={styles.profileItem}>
        <ListItemAvatar>
          <AccountCircle />
        </ListItemAvatar>
        <ListItemText primary={firstName} />
      </ListItem>
    </List>
  );
};
