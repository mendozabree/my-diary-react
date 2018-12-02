import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  registerUserError,
  registerUserSuccess,
  loginUserSuccess,
  loginUserInitiated,
  loginUserError,
} from './actionCreators';
import axiosInstance from '../config';


export const registerUser = (postData) => dispatch => {
  toast.dismiss();
  axiosInstance
    .post('/api/v1/auth/signup', postData)
    .then(() => {
      dispatch(registerUserSuccess(true));
      toast.success('Welcome! Next is the Login!', { autoClose: 3500, hideProgressBar: true });
    })
    .catch((error) => {
      dispatch(registerUserError(error.response.data.error.message));
      toast.error(error.response.data.error.message, { autoClose: false, hideProgressBar: true });
    });
};

export const userLogin = postData => dispatch => {
  toast.dismiss();
  dispatch(loginUserInitiated(true));
  axiosInstance
    .post('/api/v1/auth/login', postData)
    .then(response => {
      localStorage.setItem('authToken', response.data.message.access_token);
      dispatch(loginUserSuccess(true));
      toast.success(
        response.data.message.message,
        { autoClose: 3500, hideProgressBar: true },
        { position: toast.POSITION.TOP_CENTER },
      );
    })
    .catch(error => {
      const errorMessage = error.response.data.message.message;
      if (errorMessage === 'You are already logged in!') {
        dispatch(loginUserError(true));
      } else {
        dispatch(loginUserError(false));
        toast.error(
          errorMessage,
          { autoClose: false, hideProgressBar: true },
          { position: toast.POSITION.TOP_CENTER },
        );
      }
    });
};
