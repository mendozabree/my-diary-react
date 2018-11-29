import {
  REGISTER_USER_SUCCESS,
} from '../../actions/types';
import userReducer from '../../reducers/userReducer';

describe('userReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      registerUserSuccess: false,
      registerUserError: {},
    };
  });

  it('should initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it('should add user when REGISTER_USER_SUCCESS is passed', () => {
    const action = {
      type: REGISTER_USER_SUCCESS,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      registerUserSuccess: true,
    });
  });
});
