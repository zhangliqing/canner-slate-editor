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

const defaultData = JSON.stringify({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: ''
        }
      ]
    }
  ]
});

export default class QaEditor extends Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      state: Raw.deserialize(
        JSON.parse(props.state === '' ? defaultData : props.state),
        {terse: true}
      ),
      // https://github.com/Canner/qa-editor/issues/7
      readOnly: props.readOnly
    };
  }

  static propTypes = {
    onChange: PropTypes.func,
    state: PropTypes.string,
    readOnly: PropTypes.bool
  };

  static defaultProps = {
    state: defaultData
  };

  onChange(state) {
    this.setState({state});
    this.props.onChange(JSON.stringify(Raw.serialize(state, {terse: true})));
  }

  onBlur() {
    this.setState({readOnly: true});
  }

  onFocus() {
    if (!this.props.readOnly) {
      this.setState({readOnly: false});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.readOnly || this.state.readOnly) {
      this.setState({
        state: Raw.deserialize(JSON.parse(nextProps.state), {terse: true})
      });
    }
  }

  render() {
    const {state} = this.state;
    return (
      <div onMouseOver={this.onFocus}>
        {
          this.props.readOnly ? null : (
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
                  activeClassName: `${styles.topToolbarItem} ${styles.topToolbarItemActive}`, // eslint-disable-line
                  activeStrokeClassName: styles.qlStrokeActive,
                  activeFillClassName: styles.qlFillActive,
                  activeThinClassName: styles.qlThinActive,
                  activeEvenClassName: styles.qlEvenActive
                });
              })}
            </div>
          )
        }
        <EditorComponent
          {...this.props}
          state={state}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}
