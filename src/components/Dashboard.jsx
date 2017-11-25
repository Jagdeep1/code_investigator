import React, {Component} from 'react';
import {Link, withRouter} from 'react-router';

import ChartsGauge from './ChartsGauge'; 
import ChartsDoughnut from './ChartsDoughnut'; 
import ChartsPie from './ChartsPie'; 
import ChartsHistogram from './ChartsHistogram'; 
import ChartsMixedLineBar from './ChartsMixedLineBar'; 

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dash-wrapper m-t-10 pull-left">
        {/* <h1>This is dashboard!</h1> */}
        <div className="dash-nav-wrapper">
          <nav className="dash-nav-bar dash-nav">
             <li className="dash-nav-elements">
              <Link to="/landing">CI</Link>
            </li>
            <li className="dash-nav-elements">
              <Link to="">DASHBOARD</Link>
            </li>
            {/*<li className="dash-nav-elements">
              <Link to="/login">Login</Link>
            </li>
            <li className="dash-nav-elements">
              <Link to="/ChartsGauge">ChartsGauge</Link>
            </li> */}
            <li className="dash-nav-elements pull-right">
              <Link to="/codeupload" className="m-0">CodeUpload</Link>
            </li>
            <li className="dash-nav-elements pull-right">
              <Link to="" className="m-0">Configure Rules</Link>
            </li>
          </nav>
        </div>
        <div className="numeric-tile-wrapper">
            <div className="dash-numeric-tile pull-left text-white tile-gradient1">
              <p className="p-l-10 p-t-5 m-b-5">LINT ERRORS</p>
              <p className="col-md-2">60</p>
              <p className="col-md-10">is the total number of lint errors you have in your codebase</p>
            </div>
            <div className="dash-numeric-tile pull-left text-white tile-gradient2">
              <p className="p-l-10 p-t-5 m-b-5">CODE COMPLEXITY</p>
              <p className="col-md-2">6%</p>
              <p className="col-md-10">of the total code has complexity beyond the threshold value of 2</p>
            </div>
            <div className="dash-numeric-tile pull-left text-white tile-gradient3">
              <p className="p-l-10 p-t-5 m-b-5">CODE DUPLICACY</p>
              <p className="col-md-2">8%</p>
              <p className="col-md-10">of the overall code is duplicate and can be removed</p>
            </div>
            <div className="dash-numeric-tile pull-left text-white tile-gradient4">
              <p className="p-l-10 p-t-5 m-b-5">SLOC</p>
              <p className="col-md-2">98</p>
              <p className="col-md-10">is the average SLOC of your codebase</p>
            </div>
        </div>
        <div className="charts-line-wrapper">
            <div className="col-md-6 zero-auto">
              <ChartsGauge/>
            </div>
            <div className="col-md-6 zero-auto">
              <ChartsGauge/>
            </div>
            <div className="col-md-6 zero-auto">
              <ChartsDoughnut/>
            </div>
            <div className="col-md-6 zero-auto">
              <ChartsPie/>
            </div>
            <div className="col-md-12">
              <ChartsHistogram/>
            </div>
            <div className="col-md-12">
              <ChartsMixedLineBar/>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
