import { Input, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { Save } from "@material-ui/icons";
import styles from "./profile-card.module.css";

export const ProfileCard = ({ firstName, lastName, birthday, updateUser }) => {
  const [newUser, setNewUser] = useState({
    firstName,
    lastName,
    birthday
  });

  const handleUpdateUser = ({ target }) => {
    const { name, value } = target;
    setNewUser((state) => {
      return { ...state, [name]: value };
    });
  };

  return (
    <form noValidate className={styles.profileBox}>
      <h2>Profile</h2>
      <Input
        className={styles.inputName}
        value={newUser.lastName}
        onChange={handleUpdateUser}
        name="lastName"
        placeholder="Фамилия..."
      />
      <Input
        className={styles.inputName}
        value={newUser.firstName}
        onChange={handleUpdateUser}
        name="firstName"
        placeholder="Имя..."
      />
      <TextField
        name="birthday"
        label="День рождения"
        type="date"
        className={styles.inputName}
        value={newUser.birthday}
        onChange={handleUpdateUser}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button
        className={styles.saveButton}
        variant="outlined"
        size="small"
        onClick={() => updateUser({ ...newUser })}
        startIcon={<Save />}
      >
        Сохранить
      </Button>
    </form>
  );
};
