import { Input, Button } from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { create, signIn } from "../../api";
import styles from "./auth-form.module.css";

export const AuthForm = ({ title, button, register }) => {
  const [email, setEmail] = useState();
  const [passw, setPassw] = useState();

  const history = useHistory();

  const handleSubmiteAuth = (e) => {
    e.preventDefault();
    register ? create(email, passw) : signIn(email, passw);
    history.push("/home");
  };

  return (
    <form onSubmit={handleSubmiteAuth}>
      <h2>{title}</h2>
      <Input
        fullWidth
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        label="Email"
      />
      <Input
        fullWidth
        value={passw}
        type="password"
        onChange={(e) => setPassw(e.target.value)}
        placeholder="Password..."
        label="Password"
      />
      <Button type="submit" fullWidth>
        {button}
      </Button>
      {!register ? (
        <p>
          Don't have account:&nbsp;
          <Link to="/register" className={styles.linkRegister}>
            Register
          </Link>
        </p>
      ) : (
        <p>
          If you have account:&nbsp;
          <Link to="/login" className={styles.linkRegister}>
            Sign in
          </Link>
        </p>
      )}
    </form>
  );
};
