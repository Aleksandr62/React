import { Button /* FormControlLabel, Switch */ } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
/* import { useEffect, useState } from "react"; */
import classNames from "classnames";
import styles from "./menu.module.css";

export const Menu = () => {
  const { pathname } = useLocation();

  /*   const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((state) => !state);

  useEffect(() => {}, [checked]); */

  return (
    <>
      <Link to="/">
        <Button
          size="small"
          className={classNames(styles.button, {
            [styles.selected]: pathname === "/"
          })}
        >
          home
        </Button>
      </Link>
      <Link to="/chat">
        <Button
          size="small"
          className={classNames(styles.button, {
            [styles.selected]: pathname === "/chat"
          })}
        >
          chats
        </Button>
      </Link>
      <Link to="/profile">
        <Button
          size="small"
          className={classNames(styles.button, {
            [styles.selected]: pathname === "/profile"
          })}
        >
          profile
        </Button>
      </Link>
      {/*       <FormControlLabel
        control={
          <Switch size="small" checked={checked} onChange={toggleChecked} />
        }
        label="dark"
      /> */}
    </>
  );
};
