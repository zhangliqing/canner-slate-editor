import React, {Component, PropTypes} from 'react';
import {Raw} from 'slate';
import Icons from 'slate-editor-icons';
import EditorComponent from './editor';

import styles from "./style/index.scss";

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

export default class QaEditor extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      state: Raw.deserialize(JSON.parse(props.state), {terse: true})
    };
  }

  static propTypes = {
    onChange: PropTypes.func,
    state: PropTypes.string
  };

  onChange(state) {
    this.setState({state});
    this.props.onChange(JSON.stringify(Raw.serialize(state, {terse: true})));
  }

  render() {
    const {state} = this.state;

    return (
      <div>
        <div className={styles.topToolbar}>
          {icons.map((Type, i) => {
            return React.createElement(Type, {
              key: i,
              state,
              onChange: this.onChange,
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
        <EditorComponent
          state={state}
          onChange={this.onChange}/>
      </div>
    );
  }
}
