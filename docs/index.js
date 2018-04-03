// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Value} from 'slate';

import CannerEditor from '../src';

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
              }
            ],
          },
        ],
      },
    ],
  },
});

class DemoEditor extends React.Component<*, {value: Value}> {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  }


  render() {
    const {value} = this.state;
    const onChange = ({value}) => this.setState({value});

    return (
      <div style={{margin: '20px'}}>
        <CannerEditor
          value={value}
          onChange={onChange}
          />
      </div>
    );
  }
}

ReactDOM.render(
  <DemoEditor/>
, (document: any).getElementById('root'));
