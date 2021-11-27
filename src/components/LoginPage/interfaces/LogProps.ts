export default interface LogProps {
  email?: string;
  password?: string;
  password_repeat?: string;
  onChangeEmailAdress?: any;
  onChangePassword?: any;
  onChangeRepeatPassword?: any;
  onSubmith?: any;
  onLoading?: any;
  loading?: any;
  error?: any;
  onError?: any;
}
