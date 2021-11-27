import { SORT_BY_DATE } from "../actions/sortByDateAction";

export function sortByDateActionCreator(value: any) {
  return {
    type: SORT_BY_DATE,
    value,
  };
}

export default sortByDateActionCreator;
