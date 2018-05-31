/**
 * Created by zhangliqing on 2018/5/18.
 */
// @flow
import * as React from "react";
import Image from "./Image";

import FaFileImageO from "react-icons/lib/fa/file-image-o";

export const ImagePlugin = () => {
  return {
    renderNode: props => {
      if (props.node.type === "ImageIcon") return <Image/>;
    }
  };
};

export class ImageIcon extends React.Component<any> {
  typeName: string;
  constructor(props: any) {
    super(props);

    this.typeName = this.props.type || "ImageIcon";
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
        <FaFileImageO className={this.props.className} />
      </span>
    );
  }
}
