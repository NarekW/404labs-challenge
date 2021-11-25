import { SET_LOADING } from "../actions/loadingAction";

const initialState = {
  loading: false,
};

export default function loadingReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOADING:
      return action.value;
    default:
      return state;
  }
}
