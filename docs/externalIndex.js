import React from 'react';
import ReactDOM from 'react-dom';
import QaEditor from '../src/qaEditor';

window.qaEditor = {
  render: function(selector, stateString) {
    ReactDOM.render(
      <QaEditor
        readOnly={true}
        state={stateString}
      />
    , document.querySelector(selector));
  }
};
