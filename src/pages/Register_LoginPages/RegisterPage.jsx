import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Register_LoginPages.module.css";
import routes from "../../utils/routes";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/auth-operations";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onSubmitForm = (event) => {
    event.preventDefault();
    const credentials = {
      fullName,
      email,
      password,
    };
    dispatch(registerUser(credentials));
    setFullName('');
    setEmail('');
    setPassword('');
  };
  return (
    <main className={styles['sign-up-page']}>
      <form onSubmit={onSubmitForm} className={styles["sign-up-form"]} autoComplete="off">
        <h2 className={styles["sign-up-form__title"]}>Sign Up</h2>
        <Input setValue={setFullName} value={fullName} type="text" name="full-name" text="Full name" />
        <Input setValue={setEmail} value={email} type="email" name="email" text="Email"/>
        <Input minLength={3} maxLength={20} setValue={setPassword} value={password} type="password" name="password" text="Password" autocomplete='new-password'/>
        <Button type="submit" text="Sign Up"/>
      </form>
      <span>
        Already have an account?
        <Link to={routes.loginPage} className={styles["sign-up-form__link"]}>
          Sign In
        </Link>
      </span>
    </main>
  );
};

export default RegisterPage;
