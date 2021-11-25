import React from "react";
import { connect } from "react-redux";
import emailActionCreator from "../../store/actionCreators/emailActionCreator";
import errorActionCreator from "../../store/actionCreators/errorActionCreator";
import passwordActionCreator from "../../store/actionCreators/passwordActionCreator";
import passwordRepeatActionCreator from "../../store/actionCreators/passwordRepeatActionCreator";
import { Loading } from "../../store/asyncActions/Loading";
import RegProps from "./interfaces/RegProps";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

class RegistrationPage extends React.Component<RegProps> {
  onSubmith = (e: any) => {
    e.preventDefault();
    this.props.onLoading();
    this.props.onError("");
    console.log(
      this.props.password !== this.props.password_repeat,
      this.props.password_repeat
    );
    try {
      const checkuserInfo: any = window.localStorage.getItem("userData");
      const userData: RegProps = {
        email: this.props.email,
        password: this.props.password,
      };

      if (
        checkuserInfo &&
        JSON.parse(checkuserInfo).email &&
        JSON.parse(checkuserInfo).email === this.props.email
      ) {
        this.props.onError("This email address is already taken");
      } else if (this.props.password !== this.props.password_repeat) {
        this.props.onError("Password mismatch");
      } else {
        window.localStorage.setItem("userData", JSON.stringify(userData));
        window.location.pathname = "/profile/todo-list";
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      email,
      password,
      password_repeat,
      onChangeEmailAdress,
      onChangePassword,
      onChangeRepeatPassword,
      onLoading,
      loading,
      error,
    } = this.props;
    return (
      <div>
        <RegistrationForm
          email={email}
          password={password}
          password_repeat={password_repeat}
          onChangeEmailAdress={onChangeEmailAdress}
          onChangePassword={onChangePassword}
          onChangeRepeatPassword={onChangeRepeatPassword}
          onSubmith={this.onSubmith}
          onLoading={onLoading}
          loading={loading}
          error={error}
        />
      </div>
    );
  }
}
const mapStateToProps = function (state: any) {
  return {
    email: state.email,
    password: state.password,
    password_repeat: state.password_repeat,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    onChangeEmailAdress: (event: any) => {
      dispatch(emailActionCreator(event.target.value));
    },
    onChangePassword: (event: any) => {
      dispatch(passwordActionCreator(event.target.value));
    },
    onChangeRepeatPassword: (event: any) => {
      dispatch(passwordRepeatActionCreator(event.target.value));
    },
    onError: (errorMessage: string) => {
      dispatch(errorActionCreator(errorMessage));
    },
    onLoading: () => {
      dispatch(Loading());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
