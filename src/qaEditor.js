import React, {Component, PropTypes} from 'react';
import {Raw} from 'slate';
import EditorComponent from './editor';

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
      readOnly: true
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
      <EditorComponent
        {...this.props}
        state={state}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
      />
    );
  }
}
