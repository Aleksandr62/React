import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

export const DialogConfirm = ({ chats, open, close, handleAddRoom }) => {
  const [room, setRoom] = useState("");

  const isExistRoom = () => !room || chats.find((item) => item.title === room);

  const handleConfirm = () => {
    handleAddRoom(room);
    setRoom((state) => "");
    close();
  };

  const handleChangeRoom = ({ target }) => {
    setRoom((state) => target.value);
  };

  const handlePressEnter = ({ code }) => {
    if (code.match("Enter") && !isExistRoom()) handleConfirm();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Создать чат</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          value={room}
          onChange={handleChangeRoom}
          label="Название комнаты"
          type="text"
          onKeyPress={handlePressEnter}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} variant="outlined" color="secondary">
          отмена
        </Button>
        <Button
          onClick={handleConfirm}
          variant="outlined"
          color="primary"
          disabled={isExistRoom()}
        >
          создать
        </Button>
      </DialogActions>
    </Dialog>
  );
};
