import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const menuList = [
  { id: 1, title: "Home", path: "/home" },
  { id: 2, title: "Chat", path: "/chat" },
  { id: 3, title: "Profile", path: "/profile" },
  { id: 4, title: "Artic", path: "/artic" },
  { id: 5, title: "Login", path: "/login" }
];

export const Menu = () => {
  /*   const { email } = useSelector((state) => state.user.user); */
  const handleClickMenuItem = () => {};

  return (
    <nav>
      {menuList.map((item, idx) => {
        return (
          <Link key={idx} to={item.path}>
            <Button onClick={handleClickMenuItem}>{item.title}</Button>
          </Link>
        );
      })}
    </nav>
  );
};
