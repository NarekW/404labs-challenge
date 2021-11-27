import { SORT_BY_NAME } from "../actions/sortByNameAction";

export function sortByNameActionCreator(value: any) {
  return {
    type: SORT_BY_NAME,
    value,
  };
}

export default sortByNameActionCreator;
