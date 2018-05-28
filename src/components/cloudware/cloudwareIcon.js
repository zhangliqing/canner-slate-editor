/**
 * Created by zhangliqing on 2018/5/18.
 */
// @flow
import * as React from "react";
import Cloudware from "./Cloudware";
import FaCloud from "react-icons/lib/fa/cloud";

export const CloudwarePlugin = () => {
  return {
    renderNode: props => {
      if (props.node.type === "CloudwareIcon") return <Cloudware />;
    }
  };
};

export class CloudwareIcon extends React.Component<any> {
  typeName: string;
  constructor(props: any) {
    super(props);

    this.typeName = this.props.type || "CloudwareIcon";
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
        <path d="M0 0h48v48h-48z" fill="none" />
        <FaCloud className={this.props.className}/>
      </span>
    );
  }
}
