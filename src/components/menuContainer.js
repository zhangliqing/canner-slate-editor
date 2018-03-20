// @flow
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: inline-block;
  background-color: #fff;

  .topToolbarItem,
  .topToolbarItemActive {
    width: 30px;
    height: 30px;
  }

  .qlStroke {
    stroke: #444;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }

  .qlStrokeActive {
    stroke: #ccc;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
  }

  .qlStrokeMitter {
    stroke: #444;
    fill: transparent;
  }

  .qlStrokeMitterActive {
    stroke: #ccc;
    fill: transparent;
  }

  .qlFill {
    fill: #444;
  }

  .qlFillActive {
    fill: #ccc;
  }

  .qlEven {
    stroke: #444;
    fill: #fff;
  }

  .qlEvenActive {
    stroke: #ccc;
    fill: #fff;
  }

  .qlColorLabel {
    fill: red;
  }

  .qlTransparent {
    opacity: 0.2;
  }

  .qlThin {
    stroke: #444;
    fill: transparent;
    stroke-width: 1;
  }

  .qlThinActive {
    stroke: #ccc;
    fill: transparent;
    stroke-width: 1;
  }
`;
