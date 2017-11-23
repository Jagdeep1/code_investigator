
import {Link, withRouter} from 'react-router';
import React, { Component } from 'react';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h1><code>Code Investigator</code></h1>
        </header>
        <h1>This is landing page!</h1>
        <div>
          <nav className="nav-bar">
            <li className="nav-elements">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-elements">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-elements">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="nav-elements">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-elements">
              <Link to="/charts">Charts</Link>
            </li>
            <li className="nav-elements">
              <Link to="/testcomponent">TestComponents</Link>
            </li>
            <li className="nav-elements pull-right">
              <Link
                to="/codeupload"
                className="active"
                style={{
                'margin': '0'
              }}>CodeUpload</Link>
            </li>
          </nav>
        </div>
      </div>
    );
  }
}




export default withRouter(Landing);