import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Login } from '../../components/login/Login';

describe('Login component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const nextProps = {
    isLoggedIn: true,
  };
  const props = {
    history: { push: jest.fn() },
    userLogin: jest.fn(),
    loading: false,
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<Login {...props} />);
  });


  it('should render the Login component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call userLogin when form is submitted', () => {
    wrapper.find('#loginForm').simulate('submit', { preventDefault() {} });
    expect(props.userLogin).toBeCalled();
  });

  it('should set the state when handleInput event is invovked', () => {
    wrapper.find('#username').simulate('change', { target: { name: 'username', value: 'red' } });
    expect(wrapper.state().username).toEqual('red');
  });

  it('should not redirect if isLoggedIn is false', () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect when Login component recieves nextProps', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith('/');
  });
});
