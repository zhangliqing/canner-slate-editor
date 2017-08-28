import React from 'react';
import EditorComponent from './editor';
import Toolbar from './toolbar';
import QaEditor from './qaEditor';
import embededToolbar from 'slate-toolbar';
import Icons from 'slate-editor-icons';
const options = {
  toolbarMarks: [
    Icons.marks.Bold,
    Icons.marks.Italic,
    Icons.marks.Underline,
    Icons.marks.Code,
    Icons.marks.StrikeThrough,
    Icons.marks.Clean
  ]
};

const Editor = embededToolbar(options)(EditorComponent);
export default class QaEditorWithToolbar extends QaEditor {
  constructor(props) {
    super(props);
    this.readOnly = false;
    this.state.readOnly = false;
  }
  render() {
    const {state} = this.state;
    return (
      <div>
        <Toolbar onChange={this.onChange}
          state={state} />
        <Editor
          {...this.props}
          readOnly={false}
          state={state}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}
