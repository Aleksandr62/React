import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { profileUpdated } from "../../store/profile";
import { updateProfileApp } from "../../api";
import styles from "./profile.module.css";

export const ProfileCard = () => {
  const { user } = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [email, setEmail] = useState(user.email);

  const dispatch = useDispatch();

  const handleUserUpdate = () => {
    dispatch(profileUpdated({ firstName }));
  };

  useEffect(() => {
    updateProfileApp(firstName);
  });

  return (
    <div className={styles.profile}>
      <TextField
        className={styles.field}
        autoFocus
        value={firstName}
        label="First name:"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        className={styles.field}
        value={email}
        disabled
        label="Email:"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleUserUpdate}>Сохранить</Button>
    </div>
  );
};
