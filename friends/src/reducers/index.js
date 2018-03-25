import { LOADING, GOT_FRIENDS, ERROR, ADDED_FRIEND } from '../actions';

const initialState = {
  friends: [],
  loading: false,
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GOT_FRIENDS:
      return { ...state, friends: action.friends, loading: false, message: null };
    case ADDED_FRIEND:
      return { ...state, friends: action.friends, loading: false, message: action.message }
    case ERROR:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

