import React, { Component } from 'react';
import { withRouter } from 'react-router';

class TsLintSummary extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectName: '',
            summaryData: null
        }
    }
     componentWillReceiveProps(nextProps) {
       console.log('nextProps',nextProps);
       }
    render(){
   //    this.props.getTsLintSummary('CI_Test');
   //    console.log('this.props',this.props);
        return (
            <div>
            <div> Summary component</div>
            <button
            onClick={() => this.props.getTsLintSummary('CI_Test')}
            >Get summary data
            </button>
            </div>
        )
    }
}

export default withRouter(TsLintSummary);