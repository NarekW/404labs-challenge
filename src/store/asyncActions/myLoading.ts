import loadingActionCreator from "../actionCreators/loadingActionCreator";

export const loading = () => {
  return function (dispatch: any) {
    dispatch(loadingActionCreator(true));
    setTimeout(() => {
      dispatch(loadingActionCreator(false));
    }, 1000);
  };
};
