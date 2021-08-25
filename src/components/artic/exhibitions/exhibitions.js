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
  },
  image: {
    maxWidth: "300px"
  }
});

export const Exhibitions = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <div>
          <h3 className={classes.title}>{item.title}</h3>
          <p>Category: {item.department_display}</p>
        </div>
        <div className={classes.history}>
          <h4>Descrption:</h4>
          <p>{item.short_descrption}</p>
          <img className={classes.image} src={item.image_url} alt={item.type} />
        </div>
      </div>
    </>
  );
};
