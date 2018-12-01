import React from 'react';
import { shallow } from 'enzyme';
import { RegisterUserForm } from '../../components/register/Register';

describe('Register component', () => {
  let wrapper;
  const props = {
    registerUser: jest.fn(),
    registerUserSuccess: false,
    history: { push: jest.fn() },
  };
  const createSpy = (toSpy) => jest.spyOn(wrapper.instance(), toSpy);

  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });
  const handleFormSubmit = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<RegisterUserForm {...props} handleFormSubmit={handleFormSubmit} />);
  });

  it('should render the Register component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit when form is submitted', () => {
    const spy = createSpy('handleFormSubmit');
    wrapper.instance().forceUpdate();
    wrapper.find('#signUp-Form').simulate('submit', getEvent());
    expect(spy).toBeCalled();
  });

  it('should call handleChange on form entry', () => {
    const spy = createSpy('handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'text' } });
    expect(spy).toBeCalled();
  });

  it('should not redirect when registerUserSuccess is false', () => {
    wrapper.setProps({ registerUserSuccess: false });
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect when component recieves nextProps', () => {
    wrapper.setProps({ registerUserSuccess: true });
    expect(props.history.push).toBeCalledTimes(1);
  });
});
