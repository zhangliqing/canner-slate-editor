/* eslint-disable new-cap */
import React, {Component, PropTypes} from 'react';
import {Editor} from 'slate';
import Icons from 'slate-editor-icons';
import toolbar from 'slate-toolbar';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import TrailingBlock from 'slate-trailing-block';
import schema from './schema';

import styles from "./style/index.scss";
import "./style/github-markdown.lib.scss";

const icons = [
  Icons.history.Undo,
  Icons.marks.FontColor,
  Icons.marks.FontBgColor,
  Icons.inlines.Link,
  Icons.inlines.Emoji,
  Icons.blocks.Header1,
  Icons.blocks.Header2,
  Icons.blocks.AlignCenter,
  Icons.blocks.AlignLeft,
  Icons.blocks.AlignRight,
  Icons.blocks.Indent,
  Icons.blocks.Outdent,
  Icons.blocks.Video,
  Icons.blocks.Image,
  Icons.blocks.Blockquote,
  Icons.blocks.OlList,
  Icons.blocks.UlList
];

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

@toolbar(options) // embed a toolbar in editor!
export default class QaEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    state: PropTypes.object
  };

  render() {
    const {onChange, state} = this.props;
    return (
      <div>
        <div className={styles.topToolbar}>
          {icons.map((Type, i) => {
            return React.createElement(Type, {
              key: i,
              state: state,
              onChange: onChange,
              className: styles.topToolbarItem,
              strokeClassName: styles.qlStroke,
              strokeMitterClassName: styles.qlStrokeMitter,
              fillClassName: styles.qlFill,
              evenClassName: styles.qlEven,
              colorLabelClassName: styles.qlColorLabel,
              thinClassName: styles.qlThin,
              activeStrokeMitterClassName: styles.qlStrokeMitterActive,
              activeClassName: `${styles.topToolbarItem} ${styles.topToolbarItemActive}`,
              activeStrokeClassName: styles.qlStrokeActive,
              activeFillClassName: styles.qlFillActive,
              activeThinClassName: styles.qlThinActive,
              activeEvenClassName: styles.qlEvenActive
            });
          })}
        </div>
        <div className={`${styles.editor} qa-editor__html-style`}>
          <Editor
            state={state}
            schema={schema}
            onChange={onChange}
            plugins={[
              EditList(LIST_DEFAULT),
              EditBlockquote(BLOCKQUOTE_DEFAULT),
              TrailingBlock({type: 'paragraph'})
            ]}
          />
        </div>
      </div>
    );
  }
}
