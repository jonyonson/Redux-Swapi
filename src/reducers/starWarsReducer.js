import { FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
  characters: [],
  fetching: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        fetching: false,
        error: '',
        characters: action.payload,
      };

    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default charsReducer;
