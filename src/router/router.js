import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./privateRouter";
import { Home, Chat, Profile, Login, Register } from "../pages";

const routes = [
  {
    path: "/home",
    main: Home,
    meta: {
      authRequire: false,
    },
  },
  {
    path: "/login",
    main: Login,
    meta: {
      authRequire: true,
    },
  },
  {
    path: "/register",
    main: Register,
    meta: {
      authRequire: true,
    },
  },
  {
    path: "/chat/:chatId",
    main: Chat,
    meta: {
      authRequire: true,
    },
  },
  {
    path: "/chat",
    exact: true,
    main: Chat,
    meta: {
      authRequire: true,
    },
  },
  {
    path: "/profile",
    main: Profile,
    meta: {
      authRequire: true,
    },
  },
  {
    path: "/artic",
    main: () => <div>Artic</div>,
    meta: {
      authRequire: false,
    },
  },
  {
    path: "/",
    exact: true,
    main: Home,
    meta: {
      authRequire: false,
    },
  },
];

export const MainRouter = () => {
  const { email } = useSelector((state) => state.user.user);

  return (
    <Switch>
      {routes.map((route, idx) =>
        route.meta?.authRequire ? (
          <PrivateRoute
            key={idx}
            path={route.path}
            component={route.main}
            meta={route.meta}
            isAuth={Boolean(email)}
          />
        ) : (
          <Route
            key={idx}
            path={route.path}
            component={route.main}
            meta={route.meta}
          />
        )
      )}
    </Switch>
  );
};
