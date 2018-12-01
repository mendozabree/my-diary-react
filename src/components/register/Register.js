import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../actions/userActions';
import NavBar from '../landingPage/NavBar';

export class RegisterUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registerUserSuccess === true) {
      const { history } = this.props;
      history.push('/');
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {
      firstName, lastName, email, username, password, confirmPassword,
    } = this.state;
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password,
      confirm_password: confirmPassword,
    };
    const { registerUser } = this.props;
    registerUser(payload);
  }

  render() {
    const {
      firstName, lastName, email, username, password, confirmPassword,
    } = this.state;
    return (
      <div>
        <NavBar />
        <form id="signUp-Form" onSubmit={this.handleFormSubmit} className="form">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-1" />
                  <div className="col-10 userForm">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12">
                          <label>First Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 ">
                          <input id="firstName" className="form-control" type="text" name="firstName" required value={firstName} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12">
                          <label>Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 ">
                          <input id="lastName" className="form-control" type="text" name="lastName" required value={lastName} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12">
                          <label>Username</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 ">
                          <input id="userName" className="form-control" type="text" name="username" require value={username} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12">
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input id="email" className="form-control" type="text" name="email" required value={email} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12">
                          <label>Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input id="password" className="form-control" type="password" name="password" required value={password} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-12">
                          <label>Confirm Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input id="confirm_password" className="form-control" type="password" name="confirmPassword" required value={confirmPassword} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button id="register" className="btn btn-primary btn-margin-top" type="submit">Sign Up</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-1" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerUserSuccess: state.user.registerUserSuccess,
  registerUserError: state.user.registerUserError,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  registerUser,
}, dispatch);

RegisterUserForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  registerUserSuccess: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

RegisterUserForm.defaultProps = {
  registerUserSuccess: false,
};

export default connect(mapStateToProps, matchDispatchToProps)(RegisterUserForm);
