import helpers from 'slate-editor-icons/lib/helpers';
const {
  commonNode,
  commonMark,
  videoNode,
  imageNode,
  emojiNode,
  linkNode
} = helpers;

/* eslint-disable react/prop-types, react/display-name, require-jsdoc */
export default function(readOnly) {
  return ({
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
      'youtube': videoNode('youtube', readOnly),
      'dailymotion': videoNode('dailymotion', readOnly),
      'vimeo': videoNode('vimeo', readOnly),
      'youku': videoNode('youku', readOnly),
      'image': imageNode(readOnly),
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
  });
}
