/**
 * Created by zhangliqing on 2018/5/18.
 */
// @flow
import * as React from "react";
import { Terminal } from "./xterm/lib/Terminal";
import SockJS from "sockjs-client/dist/sockjs.min";
import $ from "jquery";

//import * as Terminal from 'xterm/lib/xterm';
import * as attach from "./xterm/lib/addons/attach";
import * as fit from "./xterm/lib/addons/fit/fit";
import * as fullscreen from "./xterm/lib/addons/fullscreen/fullscreen";
import * as search from "./xterm/lib/addons/search/search";
import * as webLinks from "./xterm/lib/addons/webLinks/webLinks";
import * as winptyCompat from "./xterm/lib/addons/winptyCompat/winptyCompat";

Terminal.applyAddon(attach);
Terminal.applyAddon(fit);
Terminal.applyAddon(fullscreen);
Terminal.applyAddon(search);
Terminal.applyAddon(webLinks);
Terminal.applyAddon(winptyCompat);

class Xterm extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      xterm: null
    };
  }

  componentDidMount() {
    if (this.props.addons) {
      this.props.addons.forEach(s => {
        const addon = require(`./xterm/dist/addons/${s}/${s}`);
        Terminal.applyAddon(addon);
      });
    }
    this.setState({ xterm: new Terminal({ cursorBlink: true }) }, () => {
      this.state.xterm.open(this.container);
      this.state.xterm.winptyCompatInit();
      this.state.xterm.webLinksInit();
      this.state.xterm.fit();
      this.state.xterm.focus();
      var socket;
      $.ajax({
        method: "GET",
        url:
          "http://wss.kfcoding.com:30081/api/v1/pod/kfcoding-alpha/shell-demo/shell/nginx",
        //url: "http://120.132.94.141:9090/api/v1/pod/kfcoding-alpha/shell-demo/shell/nginx",
        success: res => {
          socket = SockJS("http://wss.kfcoding.com:30081/api/sockjs?" + res.id);
          socket.onopen = () => {
            socket.send(JSON.stringify({ Op: "bind", SessionID: res.id }));
            socket.send(JSON.stringify({ Op: "resize", Cols: 80, Rows: 24 }));
            this.state.xterm.attach(socket);
            //this.xterm._initialized = true;
          };
          /*socket.onmessage = function(e) {
           console.log("message", e.data);
           };*/
        }
      });
    });
  }

  componentWillUnmount() {
    if (this.xterm) {
      this.xterm.destroy();
      this.xterm = null;
    }
  }

  shouldComponentUpdate(nextProps: any) {
    if (
      nextProps.hasOwnProperty("value") &&
      nextProps.value != this.props.value
    ) {
      if (this.xterm) {
        this.xterm.clear();
        setTimeout(() => {
          this.xterm.write(nextProps.value);
        }, 0);
      }
    }
    return false;
  }

  handleClick = (e: Event) => {
    e.stopPropagation();
    this.state.xterm.focus();
  };
  render() {
    const onClick = (e: Event) => this.handleClick(e);
    return (
      <div
        style={{ margin: "10px auto", width: "80%" }}
        ref={ref => (this.container = ref)}
        onClick={onClick}
      />
    );
  }
}

export default Xterm;
