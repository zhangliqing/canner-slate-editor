/**
 * Created by zhangliqing on 2018/5/18.
 */
// @flow
import * as React from "react";
import Xterm from "./Xterm";
import "kf-xterm/lib/xterm.css";
import FaTerminal from "react-icons/lib/fa/terminal";

export const TerminalPlugin = () => {
  return {
    renderNode: props => {
      if (props.node.type === "TerminalIcon") return <Xterm />;
    }
  };
};

export class TerminalIcon extends React.Component<any> {
  typeName: string;
  constructor(props: any) {
    super(props);

    this.typeName = this.props.type || "TerminalIcon";
  }

  onClick = (e: Event) => {
    let { change, onChange } = this.props;
    e.preventDefault();

    onChange(
      change.insertBlock({
        type: this.typeName,
        isVoid: true
      })
    );
    //.focus()
    //.collapseToStartOfNextBlock()
  };

  render() {
    const onClick = e => this.onClick(e);

    return (
      <span
        onClick={onClick}
        height="18"
        width="18"
        viewBox="0 0 48 48"
      >
        <FaTerminal className={this.props.className} />
      </span>
    );
  }
}
