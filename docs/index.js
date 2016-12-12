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

  render() {
    const onChange = json => console.log(json);

    return (
      <QaEditor
        state={initialState}
        onChange={onChange}/>
    );
  }
}

ReactDOM.render(
  <Editor/>
, document.getElementById('root'));
