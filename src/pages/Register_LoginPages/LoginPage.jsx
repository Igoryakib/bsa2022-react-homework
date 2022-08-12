import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register_LoginPages.module.css";
import routes from "../../utils/routes";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/auth-operations";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onSubmitForm = (event) => {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    dispatch(loginUser(credentials));
    setEmail('');
    setPassword('');
  };
  return (
    <main className={styles["sign-in-page"]}>
      <form onSubmit={onSubmitForm} className={styles["sign-in-form"]} autoComplete="off">
        <h2 className={styles["sign-in-form__title"]}>Sign In</h2>
        <Input
          setValue={setEmail}
          value={email}
          type="email"
          name="email"
          text="Email"
        />
        <Input
          minLength={3}
          maxLength={20}
          setValue={setPassword}
          value={password}
          type="password"
          name="password"
          text="Password"
          autocomplete="new-password"
        />
        <Button type="submit" text="Sign In" />
      </form>
      <span>
        Already have an account?
        <Link to={routes.registerPage} className={styles["sign-in-form__link"]}>
          Sign Up
        </Link>
      </span>
    </main>
  );
};

export default LoginPage;
