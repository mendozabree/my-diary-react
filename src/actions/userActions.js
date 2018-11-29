import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  registerUserError,
  registerUserSuccess,
} from './actionCreators';
import axiosInstance from '../config';


const registerUser = (postData) => dispatch => {
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

export default registerUser;
