import {
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from './types';

export const registerUserSuccess = payload => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserError = payload => ({
  type: REGISTER_USER_ERROR,
  payload,
});
