// @flow
import * as React from "react";
import { Editor } from "slate-react";
import { Affix } from 'antd';
import type {Value, Change} from 'slate';
import styled from 'styled-components';
import Fullscreen from "react-full-screen";
import Toolbar from './menuToolbar';
import toolbar from 'slate-toolbar';
import sidebar from 'slate-sidebar';
import {MarkdownPlugin} from 'slate-md-editor';

import Blockquote, {BlockquotePlugin} from '@canner/slate-icon-blockquote';
import Bold, {BoldPlugin} from '@canner/slate-icon-bold';
import Code, {CodePlugin} from '@canner/slate-icon-code';
import Clean from '@canner/slate-icon-clean';
import {CodeBlockPlugin} from '@canner/slate-icon-codeblock';
import {FontBgColorPlugin} from '@canner/slate-icon-fontbgcolor';
import {FontColorPlugin} from '@canner/slate-icon-fontcolor';
import {Header1, Header2, HeaderOnePlugin, HeaderTwoPlugin, HeaderThreePlugin} from '@canner/slate-icon-header';
import Hr, {HrPlugin} from '@canner/slate-icon-hr';
import {ImagePlugin} from '@canner/slate-icon-image';
import Italic, {ItalicPlugin} from '@canner/slate-icon-italic';
import {LinkPlugin} from '@canner/slate-icon-link';
import {OlList, UlList, ListPlugin} from '@canner/slate-icon-list';
import StrikeThrough, {StrikeThroughPlugin} from '@canner/slate-icon-strikethrough';
import Underline, {UnderlinePlugin} from '@canner/slate-icon-underline';
import {VideoPlugin} from '@canner/slate-icon-video';
import {ParagraphPlugin} from '@canner/slate-icon-shared';

import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';

import EditPrism from 'slate-prism'
import EditCode from 'slate-edit-code'
import TrailingBlock from 'slate-trailing-block'

import "prismjs/themes/prism.css"

// default value
import {DEFAULT as DEFAULTLIST} from '@canner/slate-helper-block-list';
import {DEFAULT as DEFAULTBLOCKQUOTE} from '@canner/slate-helper-block-quote';

import "github-markdown-css";

const plugins = [
  MarkdownPlugin(),
  EditPrism({
    onlyIn: node => node.type === 'code_block',
    getSyntax: node => node.data.get('syntax')
  }),
  EditCode({
    onlyIn: node => node.type === 'code_block'
  }),
  TrailingBlock(),
  EditList(DEFAULTLIST),
  EditBlockquote(DEFAULTBLOCKQUOTE),
  ParagraphPlugin(),
  BlockquotePlugin(),
  BoldPlugin(),
  CodePlugin(),
  CodeBlockPlugin(),
  FontBgColorPlugin({
    backgroundColor: (mark) => mark.data.get('color').color
  }),
  FontColorPlugin({
    color: (mark) => mark.data.get('color').color
  }),
  ItalicPlugin(),
  StrikeThroughPlugin(),
  UnderlinePlugin(),
  HeaderOnePlugin(),
  HeaderTwoPlugin(),
  HeaderThreePlugin(),
  HrPlugin(),
  ImagePlugin(),
  LinkPlugin(),
  ListPlugin(),
  VideoPlugin()
];

type Props = {
  value: Value,
  onChange: (change: Change) => void
}

type State = {
  isFull: boolean
}

const Container = styled.div`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px 1px rgba(0,0,0,0.16);
  height: ${props => props.isFull ? '100vh' : 'auto'};
  overflow-y: ${props => props.isFull ? 'scroll' : 'initial'};
`

const EditorContainer = styled.div`
  padding: 25px;
  margin-top: ${props => props.isFull ? '50px' : '0'};
`

const toolbarOptions = {
  icons: [
    Bold,
    Italic,
    StrikeThrough,
    Underline,
    Code,
    Clean
  ],
  position: 'bottom'
}

const sidebarOptions = {
  icons: [
    {
      icon: OlList,
      title: "Order List"
    },
    {
      icon: UlList,
      title: "Unorder List"
    },
    {
      icon: Header1,
      title: "Header One"
    },
    {
      icon: Header2,
      title: "Header Two"
    },
    {
      icon: Hr,
      title: "Ruler"
    },
    {
      icon: Blockquote,
      title: "Blockquote"
    }
  ],
  leftOffset: 5
};

@toolbar(toolbarOptions)
@sidebar(sidebarOptions)
export default class EditorComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFull: false,
    };
  }

  goFull = () => {
    this.setState({ isFull: !this.state.isFull });
  }

  render() {
    const {value, onChange, ...rest} = this.props;
    const {isFull} = this.state;

    const ToolbarNav = () => (
      <Toolbar
        value={value}
        onChange={onChange}
        goFull={this.goFull}/>
    );

    return (
      <Fullscreen
        enabled={isFull}
        onChange={isFull => this.setState({isFull})}
      >
        <Container isFull={isFull} {...rest}>
          {
            isFull ? (
              <Affix offsetTop={10}>
                <ToolbarNav/>
              </Affix>
            ) : (
              <ToolbarNav/>
            )
          }
          <EditorContainer isFull={isFull}>
            <Editor 
              className="markdown-body"
              value={value}
              onChange={onChange}
              plugins={plugins}
              />
          </EditorContainer>
        </Container>
      </Fullscreen>
    );
  }
}
