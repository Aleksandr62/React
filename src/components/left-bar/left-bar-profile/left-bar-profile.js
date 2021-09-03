import { useSelector } from "react-redux";
import { AccountCircle } from "@material-ui/icons";
import styles from "./left-bar-profile.module.css";

export const LeftBarProfile = () => {
  const { firstName } = useSelector((state) => state.user.user);

  return (
    <div className={styles.barProfile}>
      <AccountCircle className={styles.name} fontSize="large" />
      <h2>{firstName}</h2>
    </div>
  );
};
