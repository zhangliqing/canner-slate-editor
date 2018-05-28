import React from 'react';

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentWillReceiveProps(next) {

  }

  componentDidMount() {
    this.container.current.appendChild(this.props.window.canvas)
  }

  render() {
    let { x, y, width, height, show } = this.props.window;
    return (
      <div ref={this.container} x-wid={this.props.window.wid} style={{display: show ? 'block' : 'none', position: 'absolute', left: x + 'px', top: y + 'px', width: width + 'px', height: height + 'px'}}>
      </div>
    )
  }
}

export default Window;
