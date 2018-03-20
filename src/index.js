// @flow
import * as React from "react";
import inlineToolbar from "slate-toolbar";
import MenuToolbar from './menuToolbar';
import EditorComponent from './editor';
import type {Value, Change} from 'slate';
let Editor;

type Props = {
  value: Value,
  onChange: (change: Change) => void,
  menuToolbarOptions: Array<any>,
  inlineToolbarOptions: {[string]: any},
  renderMark: Function,
  renderNode: Function,
  plugins: Array<any>
}

export default class EditorWithToolbar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    Editor = inlineToolbar(props.inlineToolbarOptions)(EditorComponent);
  }
  render() {
    const { value, onChange, menuToolbarOptions, ...rest } = this.props;

    return (
      <div>
        <MenuToolbar
          options={menuToolbarOptions}
          onChange={onChange}
          value={value}/>
        <Editor
          {...rest}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}
