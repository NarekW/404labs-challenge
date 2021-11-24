import React from "react";
import { connect } from "react-redux";
import emailActionCreator from "../../store/actionCreators/emailActionCreator";
import passwordActionCreator from "../../store/actionCreators/passwordActionCreator";
import repeatPasswordActionCreator from "../../store/actionCreators/repeatPasswordActionCreator";
import { Loading } from "../../store/asyncActions/Loading";
import RegProps from "./interfaces/RegProps";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

class RegistrationPage extends React.Component<RegProps> {
  render() {
    const {
      email,
      password,
      repeat_password,
      onChangeEmailAdress,
      onChangePassword,
      onChangeRepeatPassword,
      onLoading,
    } = this.props;
    return (
      <div>
        <RegistrationForm
          email={email}
          password={password}
          repeat_password={repeat_password}
          onChangeEmailAdress={onChangeEmailAdress}
          onChangePassword={onChangePassword}
          onChangeRepeatPassword={onChangeRepeatPassword}
          onLoading={onLoading}
        />
      </div>
    );
  }
}
const mapStateToProps = function (state: any) {
  return {
    email: state.email,
    password: state.password,
    repeat_password: state.repeat_password,
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
      dispatch(repeatPasswordActionCreator(event.target.value));
    },
    onLoading: () => {
      dispatch(Loading());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
