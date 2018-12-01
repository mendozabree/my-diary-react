import React, { Component } from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { userLogin } from '../../actions/userActions';
import NavBar from '../landingPage/NavBar';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn === true) {
      const { history } = this.props;
      history.push('/');
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLoginClick = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const { userLogin } = this.props;
    const data = { username, password };
    userLogin(data);
  }

  render() {
    const { username, password } = this.state;
    const { loading } = this.props;
    return (
      <div>
        <NavBar />
        <form id="loginForm" onSubmit={this.handleLoginClick} className="form">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Loader loaded={!loading}>
                  <div className="row">
                    <div className="col-1" />
                    <div className="col-10 userForm">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-12">
                            <label>Username</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 ">
                            <input id="username" className="form-control" type="text" name="username" require value={username} onChange={this.handleChange} />
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
                            <label>Password</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button id="login" className="btn btn-primary btn-margin-top" type="submit">Login</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-1" />
                  </div>
                </Loader>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  loading: state.user.loading,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  userLogin,
}, dispatch);

Login.defaultProps = {
  isLoggedIn: false,
  loading: false,
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  loading: PropTypes.bool,
  history: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Login);
