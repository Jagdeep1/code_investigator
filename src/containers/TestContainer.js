import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTsLintSummary } from '../actions/fetchData';
import TsLintSummary from '../components/TsLintSummary';

class TestContainer extends Component{
    render(){
        console.log('this.state in container',this.props);
        return(
            <TsLintSummary {...this.props} />
        )
    }
}

const select = state => ({
  data: state.getTsLintSummary.data
});

const actions = {
    getTsLintSummary
};
export default connect(select, actions)(TestContainer)