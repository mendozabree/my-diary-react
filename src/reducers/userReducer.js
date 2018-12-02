import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
} from '../actions/types';

const initialState = {
  registerUserSuccess: false,
  registerUserError: {},
  isLoggedIn: false,
  loginError: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserSuccess: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload,
        loading: false,
      };
    case LOGIN_USER_INITIATED:
      return {
        ...state,
        loading: action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
