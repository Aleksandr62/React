import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../themes";
/* import styles from "./template.module.css"; */

const useStyles = makeStyles({
  container: {
    display: "flex",
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.color,
  },
  leftSideBar: {
    height: "100vh",
    minWidth: "20%",
    overflowY: "auto",
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.color,
  },
  content: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden",
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.color,
  },
});

export const Template = ({ leftSideBar, children }) => {
  const currentTheme = useSelector((state) => state.profile.user.theme);
  const props = themes[currentTheme];
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      <div className={classes.leftSideBar}>{leftSideBar}</div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
