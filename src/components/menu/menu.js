import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { List, ListItem, FormControlLabel, Switch } from "@material-ui/core";
import classNames from "classnames";
import { changeTheme } from "../../store/profile/actions";
import styles from "./menu.module.css";

export const Menu = () => {
  const { pathname } = useLocation();
  const menu = [
    { title: "home", path: "/" },
    { title: "chats", path: "/chat" },
    { title: "profile", path: "/profile" }
  ];
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((state) => !state);

  const dispatch = useDispatch();
  useEffect(() => {
    checked ? dispatch(changeTheme("dark")) : dispatch(changeTheme("light"));
  }, [checked, dispatch]);

  return (
    <>
      <List className={styles.menu}>
        {menu.map((item, idx) => {
          return (
            <Link key={idx} to={item.path}>
              <ListItem
                size="small"
                className={classNames(styles.button, {
                  [styles.selected]: pathname === item.path
                })}
              >
                {item.title}
              </ListItem>
            </Link>
          );
        })}
      </List>
      <div className={styles.spacer}></div>

      <FormControlLabel
        className={styles.selector}
        control={
          <Switch
            size="small"
            checked={checked}
            onChange={toggleChecked}
            color="default"
          />
        }
        label="dark"
      />
    </>
  );
};
