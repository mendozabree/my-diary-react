import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import {
  registerUser,
  userLogin,
} from '../../actions/userActions';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
} from '../../actions/types';
import axiosInstance from '../../config';

describe('userAction', () => {
  let store;
  let mock;
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance);
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  it('should register a user', async () => {
    mock.onPost('/api/v1/auth/signup').reply(200);
    registerUser()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_USER_SUCCESS, payload: true },
      ],
    );
  });

  it('should login a user', async () => {
    const response = {
      message: { access_token: 'token', status: 'success' },
    };
    mock.onPost('/api/v1/auth/login').reply(200, response);
    userLogin()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: LOGIN_USER_INITIATED, payload: true },
        { type: LOGIN_USER_SUCCESS, payload: true },
      ],
    );
  });

  it('should not register a user when passwords do not match', async () => {
    const response = {
      error: {
        message: 'Passwords do not match',
      },
    };
    mock.onPost('/api/v1/auth/signup').reply(400, response);
    registerUser()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_USER_ERROR, payload: response.error.message },
      ],
    );
  });

  it('should return an error toast for errors during login', async () => {
    toast.error = jest.fn();
    const response = {
      message: {
        message: 'Incorrect username',
      },
    };
    mock.onPost('/api/v1/auth/login').reply(400, response);
    userLogin()(store.dispatch);
    await flushAllPromises();
    expect(toast.error).toBeCalled();
    expect(store.getActions()).toEqual(
      [
        { type: LOGIN_USER_INITIATED, payload: true },
        { type: LOGIN_USER_ERROR, payload: false },
      ],
    );
  });

  it('should pass payload of true when the error message states You are already logged in', async () => {
    const response = {
      message: {
        message: 'You are already logged in!',
      },
    };
    mock.onPost('/api/v1/auth/login').reply(400, response);
    userLogin()(store.dispatch);
    await flushAllPromises();
    expect(toast.error).toBeCalled();
    expect(store.getActions()).toEqual(
      [
        { type: LOGIN_USER_INITIATED, payload: true },
        { type: LOGIN_USER_ERROR, payload: true },
      ],
    );
  });
});
