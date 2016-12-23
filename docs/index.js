import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QaEditor from '../src/index';

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
          state={initialState}
          onChange={this.onChange}/>
        <h1>Slate Object:</h1>
        <div style={{margin: '20px'}}>
          {this.state.json}
        </div>
        <h2>Preview</h2>
        <QaEditor
          readOnly={true}
          state={this.state.json}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Editor/>
, document.getElementById('root'));
