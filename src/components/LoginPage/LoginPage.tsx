import React from "react";
import { connect } from "react-redux";
import emailActionCreator from "../../store/actionCreators/emailActionCreator";
import errorActionCreator from "../../store/actionCreators/errorActionCreator";
import passwordActionCreator from "../../store/actionCreators/passwordActionCreator";
import passwordRepeatActionCreator from "../../store/actionCreators/passwordRepeatActionCreator";
import { loading } from "../../store/asyncActions/loading";
import LogProps from "./interfaces/LogProps";
import RegistrationForm from "./LoginForm/LoginForm";

class LoginPage extends React.Component<LogProps> {
  onSubmith = (e: any) => {
    e.preventDefault();
    this.props.onLoading();
    this.props.onError("");

    try {
      const checkuserInfo: any = window.localStorage.getItem("userData");

      if (!checkuserInfo) {
        this.props.onError("This account is not registered");
      }
      if (
        this.props.password !== JSON.parse(checkuserInfo).password ||
        this.props.email !== JSON.parse(checkuserInfo).email
      ) {
        this.props.onError("wrong password or email");
      } else {
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
      dispatch(loading());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
