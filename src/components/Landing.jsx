import {Link, withRouter} from 'react-router';
import React, {Component} from 'react';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header></header>
        <h1>This is landing page!</h1>
        <div className="landing-wrapper">
          <nav className="landing-nav-bar">
            <li className="landing-nav-elements">
              <a href="#">
                <h3 className="m-0">Code Investigator</h3>
              </a>
            </li>
            <li className="landing-nav-elements">
              <Link to="/">Home</Link>
            </li>
            <li className="landing-nav-elements">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="landing-nav-elements">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="landing-nav-elements">
              <Link to="/login">Login</Link>
            </li>
            <li className="landing-nav-elements">
              <Link to="/chartsGauge">Charts</Link>
            </li>
            <li className="landing-nav-elements">
              <Link to="/testcomponent">TestComponents</Link>
            </li>
            <li className="landing-nav-elements pull-right">
              <Link to="/codeupload" className="active m-0">CodeUpload</Link>
            </li>
          </nav>
          <div className="col-md-5">
            <h1>Get intelligent insights about the code that you've written</h1>
            <h3>Analyze you code, get it reviewed according to the styleguide followed in your project</h3>
            <div className="col-md-6">
              <Link className="btn btn-primary" to="/login">Login</Link>
            </div>
            <div className="col-md-6">
            <Link to="/dashboard">OR CONTINUE AS A GUEST</Link>
            </div>
            <div className="col-md-12 m-t-5"><Link to="/signup">DON'T HAVE AN ACCOUNT? SIGNUP</Link></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);