import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import registerUser from '../../actions/userActions';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
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
});
