import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QaEditor from '../src/index';
import Reader from '../src/qaEditor';

const initialState = JSON.stringify({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.'
        }
      ]
    }
  ]
});

class Editor extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      json: initialState
    };
  }

  onChange(json) {
    this.setState({
      json
    });
  }

  render() {
    return (
      <div>
        <QaEditor
          state={this.state.json}
          onChange={this.onChange}/>
        <h1>Slate Object:</h1>
        <div style={{margin: '20px'}}>
          {this.state.json}
        </div>
        <h2>Preview</h2>
        <Reader
          state={this.state.json}
        />

        <h1>Customize Slate editor: </h1>
        <QaEditor
          style={{color: '#FFF', backgroundColor: 'rgba(0, 0, 0, .65)'}}
          state={this.state.json}
          onChange={arg => arg}/>

        <h2>Update</h2>
        <div>
          <a href="https://github.com/Canner/qa-editor/issues/7">
            Test Issue
          </a>
        </div>
        <textarea rows="8" cols="80"
          ref={newJson => {
            this.newJson = newJson;
          }}
          defaultValue={JSON.stringify(this.state.json)}>
        </textarea>
        <div>
          <button onClick={() => {
            this.onChange(JSON.parse(this.newJson.value));
          }}>
            更新data
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Editor/>
, document.getElementById('root'));
