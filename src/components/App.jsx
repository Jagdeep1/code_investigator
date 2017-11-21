import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1><code>Code Investigator</code></h1>
        </header>
        <nav className="nav-bar">
          <li className="nav-elements"><Link to="/">Home</Link></li>
          <li className="nav-elements"><Link to="/signup">Signup</Link></li>
          <li className="nav-elements"><Link to="/login">Login</Link></li>
          <li className="nav-elements"><Link to="/charts">Charts</Link></li>
	        <li className="nav-elements"><Link to="/testcomponent">TestComponents</Link></li>
          <li className="nav-elements pull-right" >
            <Link to="/codeupload" className="active" style={{'margin':'0'}}>CodeUpload</Link>
          </li>
        </nav>
        {this.props.children}
        <footer>
          <p>some footer text</p>
        </footer>
      </div>
    );
  }
}

export default App;
