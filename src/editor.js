// @flow
import * as React from "react";
import { Editor } from "slate-react";
import type {Value, Change} from 'slate';
import styled from 'styled-components';

type Props = {
  value: Value,
  onChange: (change: Change) => void,
  renderMark: Function,
  renderNode: Function,
  plugins: Array<any>
}

const Container = styled.div`
  margin: 0 20px;
  padding: 5px;
  background-color: #FFF;
  border: 3px solid #f8f8f8;
`

export default class EditorComponent extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Editor {...this.props}/>
      </Container>
    );
  }
}
