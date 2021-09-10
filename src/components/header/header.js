import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { Menu } from "../menu";
import { signOutApp } from "../../api";
import styles from "./header.module.css";

export const Header = () => {
  const { user } = useSelector((state) => state.user);

  const history = useHistory();

  const handleSignOut = () => {
    signOutApp();
    history.push("/home");
  };

  return (
    <div className={styles.header}>
      <Menu />
      <div className={styles.spacer}></div>
      {user.email && (
        <div className={styles.user}>
          <div>{user.email}</div>
          <IconButton size="small" onClick={handleSignOut}>
            <ExitToApp />
          </IconButton>
        </div>
      )}
    </div>
  );
};
