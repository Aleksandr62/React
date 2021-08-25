import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    maxWidth: "300px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  history: {
    padding: "6px",
    backgroundColor: "#ebebeb"
  }
});

export const Artworks = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <div>
          <h3 className={classes.title}>{item.title}</h3>
          <p>Artist: {item.artist_title}</p>
        </div>
        <div className={classes.history}>
          <h4>History:</h4>
          <p>{item.exhibition_history}</p>
        </div>
      </div>
    </>
  );
};
