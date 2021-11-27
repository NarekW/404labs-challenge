import React from "react";
import { Link } from "react-router-dom";
import RegProps from "../interfaces/LogProps";
import styles from "./LoginForm.module.scss";

export default class LoginForm extends React.Component<RegProps> {
  render() {
    const {
      email,
      password,
      onChangeEmailAdress,
      onChangePassword,
      loading,
      error,
    } = this.props;
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.props.onSubmith}>
          <div className={`${styles.container}`}>
            <h1>Login 404labs challenge</h1>
            <p>Please fill in this form to login.</p>
            <p style={{ color: "red" }}>{error}</p>
            <label htmlFor="email">
              <b className={`${styles.lb}`}>Email</b>
            </label>
            <input
              className={`${styles.input}`}
              type="text"
              placeholder="Enter Email"
              onChange={onChangeEmailAdress}
              name="email"
              id="email"
              defaultValue={email}
              autoComplete="on"
              required
            />
            <label htmlFor="psw">
              <b className={`${styles.lb}`}>Password</b>
            </label>
            <input
              className={`${styles.input}`}
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              onChange={onChangePassword}
              defaultValue={password}
              autoComplete="on"
              required
            />

            <button type="submit" className={`${styles.registerbtn}`}>
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
          <div className={`${styles.container} ${styles.signin}`}>
            <p>
              Already have an account?{" "}
              <Link to="/registration">Registration</Link>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}
