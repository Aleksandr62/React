import { useState, useMemo } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

export const DialogConfirm = ({ rooms, open, close, handleAddRoom }) => {
  const [room, setRoom] = useState("");

  const isExistRoom = useMemo(() => {
    return rooms.find((item) => {
      return item.title === room;
    });
  });

  const handleConfirm = () => {
    handleAddRoom(room);
    setRoom((room) => "");
    close();
  };

  const handleChangeRoom = ({ target }) => {
    setRoom((room) => target.value);
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
          disabled={isExistRoom || !room}
        >
          создать
        </Button>
      </DialogActions>
    </Dialog>
  );
};
