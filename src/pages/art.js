import { Switch, Route } from "react-router-dom";
import { Artic } from "../components";

export const Art = () => {
  return (
    <>
      <Switch>
        <Route path={["/artic/:articlePage", "/artic"]}>
          <Artic />
        </Route>
      </Switch>
    </>
  );
};
