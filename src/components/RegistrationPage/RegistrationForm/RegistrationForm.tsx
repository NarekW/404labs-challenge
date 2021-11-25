import React from "react";
import RegProps from "../interfaces/RegProps";
import styles from "./RegistrationFom.module.scss";

export default class RegistrationForm extends React.Component<RegProps> {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {
      email,
      password_repeat,
      password,
      onChangeEmailAdress,
      onChangePassword,
      onChangeRepeatPassword,
      loading,
      error,
    } = this.props;
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.props.onSubmith}>
          <div className={`${styles.container}`}>
            <h1>Register 404labs challenge</h1>
            <p>Please fill in this form to create an account.</p>
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

            <label htmlFor="password-repeat">
              <b className={`${styles.lb}`}>Repeat Password</b>
            </label>
            <input
              className={`${styles.input}`}
              type="password"
              placeholder="Repeat Password"
              name="password-repeat"
              id="password-repeat"
              onChange={onChangeRepeatPassword}
              defaultValue={password_repeat}
              autoComplete="on"
              required
            />

            <p>
              By creating an account you agree to our{" "}
              <a href="/#">Terms & Privacy</a>.
            </p>
            <button type="submit" className={`${styles.registerbtn}`}>
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
          <div className={`${styles.container} ${styles.signin}`}>
            <p>
              Already have an account? <a href="/#">Sign in</a>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}
