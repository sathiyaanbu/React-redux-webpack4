import { FETCH_DATA, INCREMENT_PAGE, DECREMENT_PAGE } from "../actions/index";

const INITIAL = {
  characters: [],
  page: 1
};

export default function(state = INITIAL, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        characters: [action.payload.data, ...state]
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
  }
  return state;
}
