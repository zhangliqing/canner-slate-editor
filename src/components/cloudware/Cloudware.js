import React from 'react';
import Window from "./Window";

function mapKey(keyCode) {
  var xkm = [[65406, 0, 65406, 0, 0, 0, 0], [65307, 0, 65307, 0, 0, 0, 0], [49, 33, 49, 33, 0, 0, 0], [50, 64, 50, 64, 0, 0, 0], [51, 35, 51, 35, 0, 0, 0], [52, 36, 52, 36, 0, 0, 0],
    [53, 37, 53, 37, 0, 0, 0], [54, 94, 54, 94, 0, 0, 0], [55, 38, 55, 38, 0, 0, 0], [56, 42, 56, 42, 0, 0, 0], [57, 40, 57, 40, 0, 0, 0], [48, 41, 48, 41, 0, 0, 0],
    [45, 95, 45, 95, 0, 0, 0], [61, 43, 61, 43, 0, 0, 0], [65288, 65288, 65288, 65288, 0, 0, 0], [65289, 65056, 65289, 65056, 0, 0, 0], [113, 81, 113, 81, 0, 0, 0],
    [119, 87, 119, 87, 0, 0, 0], [101, 69, 101, 69, 0, 0, 0], [114, 82, 114, 82, 0, 0, 0], [116, 84, 116, 84, 0, 0, 0], [121, 89, 121, 89, 0, 0, 0], [117, 85, 117, 85, 0, 0, 0],
    [105, 73, 105, 73, 0, 0, 0], [111, 79, 111, 79, 0, 0, 0], [112, 80, 112, 80, 0, 0, 0], [91, 123, 91, 123, 0, 0, 0], [93, 125, 93, 125, 0, 0, 0], [65293, 0, 65293, 0, 0, 0, 0],
    [65507, 0, 65507, 0, 0, 0, 0], [97, 65, 97, 65, 0, 0, 0], [115, 83, 115, 83, 0, 0, 0], [100, 68, 100, 68, 0, 0, 0], [102, 70, 102, 70, 0, 0, 0], [103, 71, 103, 71, 0, 0, 0],
    [104, 72, 104, 72, 0, 0, 0], [106, 74, 106, 74, 0, 0, 0], [107, 75, 107, 75, 0, 0, 0], [108, 76, 108, 76, 0, 0, 0], [59, 58, 59, 58, 0, 0, 0], [39, 34, 39, 34, 0, 0, 0],
    [96, 126, 96, 126, 0, 0, 0], [65505, 0, 65505, 0, 0, 0, 0], [92, 124, 92, 124, 0, 0, 0], [122, 90, 122, 90, 0, 0, 0], [120, 88, 120, 88, 0, 0, 0], [99, 67, 99, 67, 0, 0, 0],
    [118, 86, 118, 86, 0, 0, 0], [98, 66, 98, 66, 0, 0, 0], [110, 78, 110, 78, 0, 0, 0], [109, 77, 109, 77, 0, 0, 0], [44, 60, 44, 60, 0, 0, 0], [46, 62, 46, 62, 0, 0, 0],
    [47, 63, 47, 63, 0, 0, 0], [65506, 0, 65506, 0, 0, 0, 0], [65450, 65450, 65450, 65450, 65450, 65450, 269024801], [65513, 65511, 65513, 65511, 0, 0, 0], [32, 0, 32, 0, 0, 0, 0],
    [65509, 0, 65509, 0, 0, 0, 0], [65470, 65470, 65470, 65470, 65470, 65470, 269024769], [65471, 65471, 65471, 65471, 65471, 65471, 269024770],
    [65472, 65472, 65472, 65472, 65472, 65472, 269024771], [65473, 65473, 65473, 65473, 65473, 65473, 269024772], [65474, 65474, 65474, 65474, 65474, 65474, 269024773],
    [65475, 65475, 65475, 65475, 65475, 65475, 269024774], [65476, 65476, 65476, 65476, 65476, 65476, 269024775], [65477, 65477, 65477, 65477, 65477, 65477, 269024776],
    [65478, 65478, 65478, 65478, 65478, 65478, 269024777], [65479, 65479, 65479, 65479, 65479, 65479, 269024778], [65407, 0, 65407, 0, 0, 0, 0], [65300, 0, 65300, 0, 0, 0, 0],
    [65429, 65463, 65429, 65463, 0, 0, 0], [65431, 65464, 65431, 65464, 0, 0, 0], [65434, 65465, 65434, 65465, 0, 0, 0], [65453, 65453, 65453, 65453, 65453, 65453, 269024803],
    [65430, 65460, 65430, 65460, 0, 0, 0], [65437, 65461, 65437, 65461, 0, 0, 0], [65432, 65462, 65432, 65462, 0, 0, 0], [65451, 65451, 65451, 65451, 65451, 65451, 269024802],
    [65436, 65457, 65436, 65457, 0, 0, 0], [65433, 65458, 65433, 65458, 0, 0, 0], [65435, 65459, 65435, 65459, 0, 0, 0], [65438, 65456, 65438, 65456, 0, 0, 0],
    [65439, 65454, 65439, 65454, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [60, 62, 60, 62, 124, 166, 124], [65480, 65480, 65480, 65480, 65480, 65480, 269024779],
    [65481, 65481, 65481, 65481, 65481, 65481, 269024780], [65360, 0, 65360, 0, 0, 0, 0], [65362, 0, 65362, 0, 0, 0, 0], [65365, 0, 65365, 0, 0, 0, 0], [65361, 0, 65361, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [65363, 0, 65363, 0, 0, 0, 0], [65367, 0, 65367, 0, 0, 0, 0], [65364, 0, 65364, 0, 0, 0, 0], [65366, 0, 65366, 0, 0, 0, 0], [65379, 0, 65379, 0, 0, 0, 0],
    [65535, 0, 65535, 0, 0, 0, 0], [65421, 0, 65421, 0, 0, 0, 0], [65508, 0, 65508, 0, 0, 0, 0], [65299, 65387, 65299, 65387, 0, 0, 0], [65377, 65301, 65377, 65301, 0, 0, 0],
    [65455, 65455, 65455, 65455, 65455, 65455, 269024800], [65514, 65512, 65514, 65512, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [65515, 0, 65515, 0, 0, 0, 0], [65516, 0, 65516, 0, 0, 0, 0],
    [65383, 0, 65383, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [65027, 0, 65027, 0, 0, 0, 0], [0, 65513, 0, 65513, 0, 0, 0], [65469, 0, 65469, 0, 0, 0, 0], [0, 65515, 0, 65515, 0, 0, 0], [0, 65517, 0, 65517, 0, 0, 0],
    [269025074, 0, 269025074, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [65454, 65454, 65454, 65454, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [269025046, 0, 269025046, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [269025071, 0, 269025071, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025047, 0, 269025047, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 65511, 0, 65511, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025042, 0, 269025042, 0, 0, 0, 0], [269025053, 0, 269025053, 0, 0, 0, 0],
    [269025044, 269025073, 269025044, 269025073, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025045, 269025068, 269025045, 269025068, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025068, 0, 269025068, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [269025041, 0, 269025041, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025043, 0, 269025043, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025070, 0, 269025070, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [269025068, 0, 269025068, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025113, 0, 269025113, 0, 0, 0, 0], [269025028, 0, 269025028, 0, 0, 0, 0], [269025030, 0, 269025030, 0, 0, 0, 0],
    [269025029, 0, 269025029, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025066, 0, 269025066, 0, 0, 0, 0],
    [269025040, 0, 269025040, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025067, 0, 269025067, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [269025051, 0, 269025051, 0, 0, 0, 0], [269025072, 0, 269025072, 0, 0, 0, 0], [269025139, 0, 269025139, 0, 0, 0, 0], [269025064, 0, 269025064, 0, 0, 0, 0],
    [269025063, 0, 269025063, 0, 0, 0, 0], [269025062, 0, 269025062, 0, 0, 0, 0], [269025075, 0, 269025075, 0, 0, 0, 0], [269025049, 0, 269025049, 0, 0, 0, 0],
    [269025074, 0, 269025074, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [269025171, 0, 269025171, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025173, 0, 269025173, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
  var exceptionKeys = {
    '190': '46',// PERIOD CHROME
    '16': '65506', // SHIFT CHROME
    '17': '65507', // CTRL CHROME
    '18': '65513', // ALT CHROME
    '34': '65307', // ESC CHROME
    '191': '47', // BACKSLASH CHROME
    '20': '65509', // CAPS CHROME
    '9': '65289', // TAB CHROME
    '189': '45', // MINUS CHROME
    '187': '61', // EQUALS CHROME
    '8': '65288', // BACKSPACE CHROME
    '220': '92', // FOWARD SLASH CHROME
    '13': '65293', // ENTER CHROME
    '192': '96', // TILDE CHROME
    '186': '59', // SEMICOLON CHROME
    '222': '34', // QUOTES CHROME
    '188': '44', // COMMA CHROME
    '27': '65307', // ESC CHROME
    '39': '65363', // RIGHT ARROW CHROME
    '37': '65361', // LEFT ARROW CHROME
    '38': '65362', // UP ARROW CHROME
    '40': '65364', // DOWN ARROW CHROME
    '91': '65506', // set osx cmd to shift
  };
  function buildASCIIToXKeyMap(XKeysMap, min) {
    var asciiToX = {};
    for (var i = 0; i < XKeysMap.length; i++) {
      for (var j = 0; j < XKeysMap[i].length; j++) {
        var key = XKeysMap[i][j];
        var value = i + min;
        if (key !== 0)
          asciiToX[key] = value;
      }
    }
    return asciiToX;
  }
  var keyMap = buildASCIIToXKeyMap(xkm, 8);
  if (exceptionKeys[keyCode])
    keyCode = exceptionKeys[keyCode];
  var key = keyMap[keyCode];
  if (key === undefined || key === null)
    key = 62; // shift
  if (keyCode == 219) {
    key = 34;
  } else if (keyCode === 221) {
    key = 35
  }
  return key;
}

class Cloudware extends React.Component {

  constructor(props) {
    super(props);
    var self = this;

    this.container = React.createRef();

    this.state = {
      windows: []
    };

    var ws = new WebSocket("ws://temp.wss.kfcoding.com/");

    ws.binaryType = 'arraybuffer';
    ws.onopen = function () {
      console.log(ws);
      var container = self.container.current;
      container.onmousemove = function (e) {
        var dom_left = container.offsetLeft + container.offsetParent.offsetLeft;
        var dom_top = container.offsetTop + container.offsetParent.offsetTop;

        var bei = 1;
        var x = Math.floor((e.pageX - dom_left) / bei);
        var y = Math.floor((e.pageY - dom_top) / bei);
        var buf = new ArrayBuffer(5);
        var dv = new DataView(buf);
        dv.setUint8(0, 7);
        dv.setUint16(1, x, true);
        dv.setUint16(3, y, true);
        if (ws.readyState == 1)
          ws.send(buf);
      };

      container.onmousedown = function (e) {
        var buf = new ArrayBuffer(5);
        var dv = new DataView(buf);
        dv.setUint8(0, 8);
        dv.setUint32(1, e.which, true);
        if (ws.readyState == 1)
          ws.send(buf);
      };
      container.onmouseup = function (e) {
        var buf = new ArrayBuffer(5);
        var dv = new DataView(buf);
        dv.setUint8(0, 9);
        dv.setUint32(1, e.which, true);
        if (ws.readyState == 1)
          ws.send(buf);
      };
      document.onkeydown = function (e) {
        if (e.keyCode == 9 || e.keyCode == 32) {  //tab pressed
          e.preventDefault(); // stops its action
        }
        var buf = new ArrayBuffer(5);
        var dv = new DataView(buf);
        dv.setUint8(0, 10);
        dv.setUint32(1, mapKey(e.which), true);
        if (ws.readyState == 1)
          ws.send(buf);
      };
      document.onkeyup = function (e) {
        if (e.keyCode == 9 || e.keyCode == 32) {  //tab pressed
          e.preventDefault(); // stops its action
        }
        var buf = new ArrayBuffer(5);
        var dv = new DataView(buf);
        dv.setUint8(0, 11);
        dv.setUint32(1, mapKey(e.which), true);
        if (ws.readyState == 1)
          ws.send(buf);
      };
    }
    ws.onmessage = function (msg) {
      var data = msg.data;
      var dv = new DataView(data);
      switch (dv.getUint32(0, true)) {
        case 1:
          var wid = dv.getUint32(4, true);
          var x = dv.getInt16(8, true);
          var y = dv.getInt16(10, true);
          var width = dv.getUint16(12, true);
          var height = dv.getUint16(14, true);
          var canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          let window = {
            wid: wid,
            x: x,
            y: y,
            width: width,
            height: height,
            canvas: canvas,
            show: false
          };
          self.state.windows.push(window);
          self.forceUpdate();
          break;
        case 2:
          var wid = dv.getUint32(4, true);
          for (var i in self.state.windows) {
            if (self.state.windows[i].wid == wid) {
              self.state.windows.splice(i, 1);
              self.forceUpdate();
              break;
            }
          }
          break;
        case 3:
          var wid = dv.getUint32(4, true);
          var win = self._findWindow(wid);
          if (win) {
            win.show = true;
            self.forceUpdate();
          }
          break;
        case 4:
          var wid = dv.getUint32(4, true);
          var win = self._findWindow(wid);
          if (win) {
            win.show = false;
            self.forceUpdate();
          }
          break;
        case 5:
          var wid = dv.getUint32(4, true);
          var x = dv.getInt16(8, true);
          var y = dv.getInt16(10, true);
          var width = dv.getUint16(12, true);
          var height = dv.getUint16(14, true);

          self.state.windows.forEach(win => {
            if (win.wid == wid) {
              win.x = x;
              win.y = y;
              win.width = width;
              win.height = height;
              win.canvas.width = width;
              win.canvas.height = height;
              self.forceUpdate();
            }
          });
          break;
        case 6:
          var wid = dv.getUint32(4, true);
          var x = dv.getInt16(12, true);
          var y = dv.getInt16(14, true);
          var bf = data.slice(28);
          self.state.windows.forEach(window => {
            if (window.wid == wid) {
              var blob = new Blob([bf], {type: 'image/png'});

              var ctx = window.canvas.getContext('2d');

              var url = URL.createObjectURL(blob);
              var img = new Image;

              img.onload = function() {
                ctx.drawImage(this, x, y);
                URL.revokeObjectURL(url);
                self.setState({windows: self.state.windows})
              }
              img.src = url;
            }
          })
          break;
      }
    }
  }

  _findWindow(wid) {
    for (var i in this.state.windows) {
      if (this.state.windows[i].wid == wid) {
        return this.state.windows[i];
      }
    }
    return null;
  }

  render() {
    var windows = this.state.windows.map(window => {
      return (
        <Window
          key={window.wid}
          window={window}
        />
      )
    });
    return (
      <div style={{position: 'relative'}} ref={this.container}>
        123132
        {windows}
      </div>
    )
  }
}

export default Cloudware;
