import {
  LOGIN_USER_INITIATED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from '../../actions/types';
import userReducer from '../../reducers/userReducer';

describe('userReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      registerUserSuccess: false,
      registerUserError: {},
      loading: false,
      isLoggedIn: false,
    };
  });

  it('should initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it('should set registerUserSuccess to true when REGISTER_USER_SUCCESS is passed', () => {
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

  it('should set isLoggedin to true when LOGIN_USER_SUCCESS is passed', () => {
    const action = {
      type: LOGIN_USER_SUCCESS,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });

  it('should add set loading to true when LOGIN_USER_INITIATED is passed', () => {
    const action = {
      type: LOGIN_USER_INITIATED,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set laoding to false when LOGIN_USER_ERROR is passed', () => {
    const action = {
      type: LOGIN_USER_ERROR,
      payload: false,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
