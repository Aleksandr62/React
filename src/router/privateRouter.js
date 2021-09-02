import { Route } from "react-router-dom";
import { Home, Login, Register } from "../pages";

export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  const isPrivate = ["/login", "/register"].includes(rest.path);

  return isAuth ? (
    <Route
      {...rest}
      component={() => (!isPrivate ? <Component /> : <Home />)}
    />
  ) : rest.path === "/register" ? (
    <Register />
  ) : (
    <Login />
  );
};
