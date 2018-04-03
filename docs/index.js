// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Value} from 'slate';
import initialValue from './initialValue';
import CannerEditor from '../src';

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
