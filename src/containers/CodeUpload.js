import { connect } from 'react-redux';
import { upload } from '../actions/upload';
import CodeUpload from '../components/CodeUpload';

const select = state => ({
  files: state.files
});

const actions = {
    upload
};

export default connect(select, actions)(CodeUpload);
