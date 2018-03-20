// @flow
import * as React from "react";
import type {Value, Change} from 'slate';
import {Container} from './components/menuContainer';

type Props = {
  value: Value,
  onChange: (change: Change) => void,
  options?: Array<any>
}

export default class Toolbar extends React.Component<Props> {
  render() {
    const { value, onChange, options } = this.props;
    if (!options || options.length <= 0) {
      return null;
    }

    return (
      <Container>
        {options.map((Type, i) => {
          return <Type
            change={value.change()}
            onChange={onChange}
            key={i}
            className="topToolbarItem"
            strokeClassName="qlStroke"
            strokeMitterClassName="qlStrokeMitter"
            fillClassName="qlFill"
            evenClassName="qlEven"
            colorLabelClassName="qlColorLabel"
            thinClassName="qlThin"
            activeStrokeMitterClassName="qlStrokeMitterActive"
            activeClassName="topToolbarItem topToolbarItemActive"
            activeStrokeClassName="qlStrokeActive"
            activeFillClassName="qlFillActive"
            activeThinClassName="qlThinActive"
            activeEvenClassName="qlEvenActive"
          />
        })}
      </Container>
    );
  }
}
