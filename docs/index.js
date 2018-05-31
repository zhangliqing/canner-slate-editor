// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Value} from 'slate';
//import initialValue from './initialValue';
import CannerEditor from '../src';

const initialValue = Value.fromJSON(
  {"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"header_one","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Kfcoding Beta Stage1","marks":[]}]}]},{"object":"block","type":"blockquote","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"666!","marks":[]}]}]}]},{"object":"block","type":"header_two","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"项目进展：","marks":[]}]}]},{"object":"block","type":"ordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"KFEditor基础功能版完成","marks":[]}]}]},{"object":"block","type":"ordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"实时Markdown语法","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"代码高亮","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"表格","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"字体样式","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"引用类型","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"多级有序列表","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"多级无序列表","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"图片","marks":[{"object":"mark","type":"STRIKETHROUGH","data":{}}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"视频","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"链接","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"实时文件保存","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"内嵌Terminal","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"内嵌云件","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"KFReader","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Github OAuth登录","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"藏经阁","marks":[]}]}]}]}]},{"object":"block","type":"header_two","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"效果预览","marks":[]}]}]},{"object":"block","type":"blockquote","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"这是一个引用块","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"这个也是，和👆一起的","marks":[]}]}]}]},{"object":"block","type":"code_block","isVoid":false,"data":{"syntax":"javascript"},"nodes":[{"object":"block","type":"code_line","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"console.log('diao~');","marks":[]}]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"table","isVoid":false,"data":{},"nodes":[{"object":"block","type":"table_row","isVoid":false,"data":{},"nodes":[{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"这是一个","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"表格","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"还","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"能","marks":[]}]}]}]}]},{"object":"block","type":"table_row","isVoid":false,"data":{},"nodes":[{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"自定义","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"行列","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]}]},{"object":"block","type":"table_row","isVoid":false,"data":{},"nodes":[{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]},{"object":"block","type":"table_cell","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]}]}]},{"object":"block","type":"header_two","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"各种字体样式: ","marks":[]},{"object":"leaf","text":"粗体","marks":[{"object":"mark","type":"BOLD","data":{}}]},{"object":"leaf","text":"，","marks":[]},{"object":"leaf","text":"斜体","marks":[{"object":"mark","type":"ITALIC","data":{}}]},{"object":"leaf","text":"，","marks":[]},{"object":"leaf","text":"粗斜体","marks":[{"object":"mark","type":"ITALIC","data":{}},{"object":"mark","type":"BOLD","data":{}}]},{"object":"leaf","text":"，","marks":[]},{"object":"leaf","text":"横线","marks":[{"object":"mark","type":"STRIKETHROUGH","data":{}}]},{"object":"leaf","text":"，","marks":[]},{"object":"leaf","text":"下划线","marks":[{"object":"mark","type":"UNDERLINE","data":{}}]},{"object":"leaf","text":"，","marks":[]},{"object":"leaf","text":"code","marks":[{"object":"mark","type":"CODE","data":{}}]},{"object":"leaf","text":"，","marks":[]}]},{"object":"inline","type":"link","isVoid":false,"data":{"href":"http://baidu.com"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"链接","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":"，","marks":[]},{"object":"leaf","text":"字体颜色","marks":[{"object":"mark","type":"FONTCOLOR","data":{"color":{"color":"#26ed17","alpha":100,"open":true,"rgba":"rgba(38,237,23,255, 1)"}}}]},{"object":"leaf","text":"，","marks":[]},{"object":"leaf","text":"颜色","marks":[{"object":"mark","type":"FONTBGCOLOR","data":{"color":{"color":"#da1515","alpha":100,"open":true,"rgba":"rgba(218,21,21,255, 1)"}}}]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Video:","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]},{"object":"inline","type":"youtube","isVoid":true,"data":{"id":"Rb0UmrCXxVA","width":560,"height":315},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Terminal:","marks":[]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"TerminalIcon","isVoid":true,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"header_two","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"人员分工","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"KFCoding首页","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"林海铭","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"KFEditor","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"张礼庆","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"郭栋","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"EFReader","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"郭栋","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"API","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"毕风岭","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"邰丽媛","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"K8s Terminal","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"吴邵岭","marks":[]}]}]}]}]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"header_two","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"TODO List","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"自研／深入探索Slate（6.1 - 6.20)","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"自定义存储结构","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"自定义插件","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Editor附加功能（6.1 - 6.30)","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Publish功能","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Save提示","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"文件操作功能","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"云件深度调试（6.1 - 6.20)","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"首次加载时候，窗口内容获取","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"重连机制","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"其他页面（6.1-)","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"辅助功能","marks":[]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"前端统一风格","marks":[]}]}]}]}]}]},{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"http端口开放（6.1-6.30)","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"默认开放8080端口转发","marks":[]}]}]}]}]}]}]},{"object":"block","type":"header_two","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"新鲜血液","marks":[]}]}]},{"object":"block","type":"unordered_list","isVoid":false,"data":{},"nodes":[{"object":"block","type":"list_item","isVoid":false,"data":{},"nodes":[{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"李坤","marks":[]}]}]}]}]},{"object":"block","type":"paragraph","isVoid":false,"data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]}}
)

class DemoEditor extends React.Component<*, {value: Value}> {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  }


  render() {
    const {value} = this.state;
    const onChange = ({value}) => this.setState({value});

    return (
      <div style={{margin: '20px'}}>
        <h1>Canner-slate-editor demo</h1>
        <CannerEditor
          readOnly={false}
          value={value}
          onChange={onChange}
          serviceConfig={{
            name: 'image',
            accept: 'image/*',
            action: 'https://api.imgur.com/3/image',
            headers: {
              'Authorization': 'Client-ID a214c4836559c77',
              'X-Requested-With': null
            }
          }}
          />
      </div>
    );
  }
}

ReactDOM.render(
  <DemoEditor/>
, (document: any).getElementById('root'));
