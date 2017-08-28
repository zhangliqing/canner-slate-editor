import React, {Component, PropTypes} from 'react';
import Icons from 'slate-editor-icons';
import styles from "./style/toolbar.scss";

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

export default class Toolbar extends Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    state: PropTypes.string,
    onChange: PropTypes.func
  };

  render() {
    const {state, onChange} = this.props;
    return <div className={styles.topToolbar}>
      {icons.map((Type, i) => {
        return React.createElement(Type, {
          key: i,
          state,
          onChange: onChange,
          className: styles.topToolbarItem,
          strokeClassName: styles.qlStroke,
          strokeMitterClassName: styles.qlStrokeMitter,
          fillClassName: styles.qlFill,
          evenClassName: styles.qlEven,
          colorLabelClassName: styles.qlColorLabel,
          thinClassName: styles.qlThin,
          activeStrokeMitterClassName: styles.qlStrokeMitterActive,
          activeClassName: `${styles.topToolbarItem} ${styles.topToolbarItemActive}`, // eslint-disable-line
          activeStrokeClassName: styles.qlStrokeActive,
          activeFillClassName: styles.qlFillActive,
          activeThinClassName: styles.qlThinActive,
          activeEvenClassName: styles.qlEvenActive
        });
      })}
    </div>;
  }
}
