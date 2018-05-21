/**
 * Created by zhangliqing on 2018/5/18.
 */
// @flow
import * as React from "react";
import Xterm from "./Xterm";
import "../packages/xterm/dist/xterm.css";

export const TerminalPlugin = () => {
  return {
    renderNode: props => {
      if (props.node.type === "Terminal") return <Xterm />;
    }
  };
};

export class Terminal extends React.Component<any> {
  typeName: string;
  constructor(props: any) {
    super(props);

    this.typeName = this.props.type || "Terminal";
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
        style={{ margin: "0px 0px 0px 5px" }}
        className={this.props.className}
        onClick={onClick}
        height="18"
        width="18"
        viewBox="0 0 48 48"
      >
        <i className="fa fa-terminal fa-stack-1x" />
      </span>
    );
  }
}
