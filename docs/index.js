import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QaEditor from '../src/index';
import {Raw} from 'slate';

const initialState = Raw.deserialize({
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
}, {terse: true});

class Editor extends Component {
  // Set the initial state when the app is first constructed.
  state = {
    state: initialState
  }

  render() {
    const onChange = state => this.setState({state});
    return (
      <QaEditor
        state={this.state.state}
        onChange={onChange}/>
    );
  }
}

ReactDOM.render(
  <Editor/>
, document.getElementById('root'));
