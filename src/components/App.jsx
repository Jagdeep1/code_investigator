import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1><code>Code Investigator</code></h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/charts">Charts</Link>
          <Link to="/codeupload">CodeUpload</Link>
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
