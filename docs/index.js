// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor} from 'slate-react';
import {Value, Change} from 'slate';
import QaEditor from '../src/index';
import Reader from '../src/qaEditor';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

class DemoEditor extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      json: initialValue
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
      </div>
    );
  }
}

ReactDOM.render(
  <DemoEditor/>
, document.getElementById('root'));
