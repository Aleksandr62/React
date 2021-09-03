import {
  ListItem,
  ListItemText,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyle = makeStyles({
  message: {
    justifyContent: "end"
  },
  text: {
    padding: "8px",
    background: "#ebebeb",
    borderRadius: "5px",
    width: "150px",
    "&.bot": {
      justifySelf: "start"
    }
  },
  date: {
    fontSize: "10px"
  }
});

export const Message = ({ message }) => {
  const classes = useStyle();
  const { author, text, date } = message;

  return (
    <ListItem>
      <ListItemText
        className={classes.message}
        primary={author}
        secondary={
          <Typography component="div">
            <div className={classes.text}>
              <div>{text}</div>
              <div className={classes.date}>
                {new Date(JSON.parse(date)).toLocaleDateString("ru-Ru", {
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </div>
            </div>
          </Typography>
        }
      />
    </ListItem>
  );
};
