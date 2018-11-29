import { REGISTER_USER_SUCCESS } from '../actions/types';

const initialState = {
  registerUserSuccess: false,
  registerUserError: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserSuccess: true,
      };
    default:
      return state;
  }
};

export default userReducer;
