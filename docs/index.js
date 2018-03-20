// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Value} from 'slate';
import renderNodesFn from '@canner/slate-icon-rendernodes';
import {AlignCenter, AlignLeft, AlignRight} from '@canner/slate-icon-align';
import Blockquote from '@canner/slate-icon-blockquote';
import Bold from '@canner/slate-icon-bold';
import Clean from '@canner/slate-icon-clean';
import Code from '@canner/slate-icon-code';
import {Header1, Header2} from '@canner/slate-icon-header';
import Italic from '@canner/slate-icon-italic';
import Image from '@canner/slate-icon-image';
import Link from '@canner/slate-icon-link';
import {OlList, UlList} from '@canner/slate-icon-list';
import StrikeThrough from '@canner/slate-icon-strikethrough';
import Underline from '@canner/slate-icon-underline';
import Undo from '@canner/slate-icon-undo';
import FontBgColor from '@canner/slate-icon-fontBgColor';
import FontColor from '@canner/slate-icon-fontColor';
import Emoji from '@canner/slate-icon-emoji';
import {Indent, Outdent} from '@canner/slate-icon-indent';
import Video from '@canner/slate-icon-video';

import CannerEditor from '../src';

import {DEFAULT as DEFAULTLIST} from '@canner/slate-helper-block-list';
import {DEFAULT as DEFAULTBLOCKQUOTE} from '@canner/slate-helper-block-quote';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';

import './github-markdown.css';

const {
  commonNode,
  commonMark,
  emojiNode,
  imageNode,
  linkNode,
  videoNode
} = renderNodesFn;

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

const toolbarOptions = {
  toolbarMarks: [
    Undo,
    Bold,
    Italic,
    Underline,
    Code,
    StrikeThrough,
    Clean,
    "divider"
  ],
  toolbarBlocks: [
    Link,
    Header1,
    Header2,
    Blockquote,
    AlignCenter,
    AlignLeft,
    AlignRight,
    OlList,
    UlList
  ]
};

const menuToolbarOptions = [
  Bold,
  Clean,
  Code,
  Emoji,
  FontBgColor,
  FontColor,
  StrikeThrough,
  Underline,
  Italic,
  Link,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Blockquote,
  Header1,
  Header2,
  Image,
  Video,
  Indent,
  Outdent,
  OlList,
  UlList,
  Undo,
];

const plugins = [
  EditList(DEFAULTLIST),
  EditBlockquote(DEFAULTBLOCKQUOTE)
];

class DemoEditor extends React.Component<*, {value: Value}> {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  }


  render() {
    const {value} = this.state;
    const onChange = ({value}) => this.setState({value});

    return (
      <div>
        <CannerEditor
          value={value}
          onChange={onChange}
          className="markdown-body"
          menuToolbarOptions={menuToolbarOptions}
          inlineToolbarOptions={toolbarOptions}
          renderMark={renderMark}
          renderNode={renderNode}
          plugins={plugins}
          />
        {/* <h1>Slate Object:</h1> */}
        {/* <div style={{margin: '20px'}}>
          {this.state.value}
        </div>
        <h2>Preview</h2>
        <Reader
          state={this.state.json}
        /> */}
      </div>
    );
  }
}


function renderMark(props) {
  switch (props.mark.type) {
    case 'bold':
      return commonMark('strong')(props);
    case 'code':
      return commonMark('code')(props);
    case 'fontBgColor':
      return commonMark('span', 'fontBgColor')(props);
    case 'fontColor':
      return commonMark('span', 'fontColor')(props);
    case 'italic':
      return commonMark('i')(props);
    case 'strikethrough':
      return commonMark('s')(props);
    case 'underline':
      return commonMark('u')(props);
  }
}

function renderNode(props) {
  switch (props.node.type) {
    case 'paragraph':
      return commonNode('p')(props);
    case 'blockquote':
      return commonNode('blockquote')(props);
    case 'emoji':
      return emojiNode()(props);
    case 'heading1':
      return commonNode('h1')(props);
    case 'heading2':
      return commonNode('h2')(props);
    case 'list-ul':
      return commonNode('ul')(props);
    case 'list-ol':
      return commonNode('ol')(props);
    case 'list-item':
      return commonNode('li')(props);
    case 'image':
      return imageNode()(props);
    case 'link':
      return linkNode()(props);
    case 'youtube':
      return videoNode('youtube')(props);
    case 'dailymotion':
      return videoNode('dailymotion')(props);
    case 'youku':
      return videoNode('youku')(props);
    case 'vimeo':
      return videoNode('vimeo')(props);
  }
}


ReactDOM.render(
  <DemoEditor/>
, (document: any).getElementById('root'));
