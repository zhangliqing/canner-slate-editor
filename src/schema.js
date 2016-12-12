import React from 'react';
import {Emoji} from 'emoji-mart';
import Icons from 'slate-editor-icons';
const {commonNode, videoNode, imageNode} = Icons.helpers;

/* eslint-disable react/prop-types, react/display-name */
export default {
  nodes: {
    'blockquote': commonNode('blockquote'),
    'list-ul': commonNode('ul'),
    'list-ol': commonNode('ol'),
    'list-item': commonNode('li'),
    'heading1': commonNode('h1'),
    'heading2': commonNode('h2'),
    'heading3': commonNode('h3'),
    'heading4': commonNode('h4'),
    'heading5': commonNode('h5'),
    'heading6': commonNode('h6'),
    'paragraph': commonNode('p'),
    'youtube': videoNode('youtube'),
    'dailymotion': videoNode('dailymotion'),
    'vimeo': videoNode('vimeo'),
    'youku': videoNode('youku'),
    'image': imageNode(),
    'link': props => {
      return (
        <a {...props.attributes} href={props.node.data.get('url')}>
          {props.children}
        </a>
      );
    },
    'emoji': props => {
      return (
        <Emoji emoji={props.node.data.get('code').colons} size={18}/>
      );
    },
    // 'table': props => <table><tbody {...props.attributes}>{props.children}</tbody></table>,
    'table_row': props => <tr {...props.attributes}>{props.children}</tr>,
    'table_cell': props => <td {...props.attributes}>{props.children}</td>
  },
  marks: {
    bold: ({children}) => <strong>{children}</strong>,
    code: ({children}) => <code>{children}</code>,
    italic: ({children}) => <em>{children}</em>,
    underline: ({children}) => <u>{children}</u>,
    fontColor: ({children, mark}) => {
      const color = mark.get('data').get('rgba');
      return (
        <span style={{color}}>
          {children}
        </span>
      );
    },
    fontBgColor: ({children, mark}) => {
      const color = mark.get('data').get('rgba');
      return (
        <span style={{backgroundColor: color}}>
          {children}
        </span>
      );
    },
    strikethrough: ({children}) => <s>{children}</s>
  }
};
