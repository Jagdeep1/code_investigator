import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import {FormControl, FormGroup, ControlLabel, Checkbox} from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }


  handleFormSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    if(!username || !password) {
      // display error to user
      return;
    }

    this.props.login(username, password);
  }

  handleTextFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoggedIn) {
      this.props.router.push('/dashboard')
    }
  }

  render() {
    const { error, isLoggingIn } = this.props;
    return (
      <div className="login-wrapper p-t-100">
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          {error}

            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleTextFieldChange}
              required
            />

            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleTextFieldChange}
              minLength={8}
              required
            />
            <Checkbox >
              Remember Me 
            </Checkbox>
            <FormControl
              type="submit"
              value={isLoggingIn ? 'Logging in...' : 'Log in'}
              disabled={isLoggingIn}
            />
          </FormGroup>
        </form>
        <Link to="/landing"><i className="fa fa-angle-left"></i> Back</Link>
      </div>
    );
  }
}

export default withRouter(Login);
