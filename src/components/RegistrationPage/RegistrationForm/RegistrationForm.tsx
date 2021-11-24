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
      repeat_password,
      password,
      onChangeEmailAdress,
      onChangePassword,
      onChangeRepeatPassword,
      onLoading,
    } = this.props;
    return (
      <div className={styles.formContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLoading();
          }}
        >
          <div className={`${styles.container}`}>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
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
              defaultValue={repeat_password}
              autoComplete="on"
              required
            />

            <p>
              By creating an account you agree to our{" "}
              <a href="/#">Terms & Privacy</a>.
            </p>
            <button type="submit" className={`${styles.registerbtn}`}>
              Register
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
