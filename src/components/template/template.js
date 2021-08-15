import { makeStyles, createStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "./template.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.light.color,
      backgroundColor: theme.light.backgroundColor
    }
  })
);

export const Template = ({ leftSideBar, children }) => {
  const classes = useStyles();

  return (
    <div className={classNames(styles.container, classes.root)}>
      <div className={classNames(styles.leftSideBar, classes.root)}>
        {leftSideBar}
      </div>
      <div className={classNames(styles.content, classes.root)}>{children}</div>
    </div>
  );
};
