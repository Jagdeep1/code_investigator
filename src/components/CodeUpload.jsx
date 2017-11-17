import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router';

class CodeUpload extends Component {
    constructor(props) {
        super(props)
        this.state = { files: [] }
      }
    
      onDrop(files) {
        this.setState({
          files
        });
        this.props.upload(files);
        console.log('this.props',this.props);
      }
    render(){

        return (
            <section>
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop.bind(this)}>
                <p>Try dropping some files here, or click to select files to upload.</p>
              </Dropzone>
            </div>
            <aside>
              <h2>Dropped files</h2>
              <ul>
                {
                  this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </ul>
            </aside>
          </section>
        );
    }
}

export default withRouter(CodeUpload);