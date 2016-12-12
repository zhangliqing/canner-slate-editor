import Icons from 'slate-editor-icons';
const {
  commonNode,
  commonMark,
  videoNode,
  imageNode,
  emojiNode,
  linkNode
} = Icons.helpers;

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
    'link': linkNode(),
    'emoji': emojiNode()
  },
  marks: {
    bold: commonMark('strong'),
    code: commonMark('code'),
    italic: commonMark('em'),
    underline: commonMark('u'),
    fontColor: commonMark('span', 'fontColor'),
    fontBgColor: commonMark('span', 'fontBgColor'),
    strikethrough: commonMark('s')
  }
};
