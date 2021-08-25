export const Exhibitions = ({ classes, item }) => {
  console.log(item);
  return (
    <div className={classes.card}>
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
    </div>
  );
};
