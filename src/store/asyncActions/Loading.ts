import loadingActionCreator from "../actionCreators/loadingActionCreator";

export const Loading = () => {
  return function (dispatch: any) {
    dispatch(loadingActionCreator(true));
    setTimeout(() => {
      dispatch(loadingActionCreator(false));
    }, 5000);
  };
};
