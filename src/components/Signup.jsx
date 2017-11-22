import React, {Component} from 'react';
import {withRouter} from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleFormSubmit = this
      .handleFormSubmit
      .bind(this);
    this.handleTextFieldChange = this
      .handleTextFieldChange
      .bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const {username, password} = this.state;

    if (!username || !password) {
      // display error to user
      return;
    }

    this
      .props
      .signup(username, password);
  }

  handleTextFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this
        .props
        .router
        .push('/dashboard')
    }
  }

  render() {
    console.log('this.props', this.props);
    const {error, isSigningUp} = this.props;
    return (
      <div className="login-wrapper">
        <h1>Sign up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            {error}

            <label className="control-label">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleTextFieldChange}
              required/>

            <label className="control-label">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleTextFieldChange}
              minLength={8}
              required/>

            <input
              className="form-control m-t-10"
              type="submit"
              value={isSigningUp
              ? 'Signing up...'
              : 'Sign up'}
              disabled={isSigningUp}/>
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
