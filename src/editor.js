/* eslint-disable new-cap */
import React, {Component, PropTypes} from 'react';
import {Editor} from 'slate';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import TrailingBlock from 'slate-trailing-block';
import schema from './schema';

import styles from "./style/index.scss";
import "./style/github-markdown.lib.scss";

const LIST_DEFAULT = {
  typeUL: 'list-ul',
  typeOL: 'list-ol',
  typeItem: 'list-item',
  typeDefault: 'paragraph',
  ordered: true
};

const BLOCKQUOTE_DEFAULT = {
  type: 'blockquote',
  typeDefault: 'paragraph'
};

export default class EditorComponent extends Component {
  static propTypes = {
    state: PropTypes.object,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    style: PropTypes.object,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
  };

  render() {
    const {state, onChange, readOnly, style, onBlur, onFocus} = this.props;

    return (
      <div
        onClick={onFocus}
        className={readOnly ?
          'qa-editor__html-style' :
          `${styles.editor} qa-editor__html-style`}
        style={style}>
        <Editor
          readOnly={readOnly}
          state={state}
          schema={schema(readOnly)}
          onChange={onChange}
          onBlur={onBlur}
          plugins={[
            EditList(LIST_DEFAULT),
            EditBlockquote(BLOCKQUOTE_DEFAULT),
            TrailingBlock({type: 'paragraph'})
          ]}
        />
      </div>
    );
  }
}
