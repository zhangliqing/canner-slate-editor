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
  render() {
    const {state} = this.state;
    return (
      <div>
        <Toolbar onChange={this.onChange}
          readOnly={this.props.readOnly}
          state={state} />
        <Editor
          {...this.props}
          state={state}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}
