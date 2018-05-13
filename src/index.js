// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import { Editor } from "slate-react";
import type {Value, Change} from 'slate';
import styled from 'styled-components';
import Toolbar from './menuToolbar';
import toolbar from 'slate-toolbar';
import sidebar from 'slate-sidebar';
import {MarkdownPlugin} from 'slate-md-editor';
import {BLOCKS} from '@canner/slate-constant';

import Blockquote, {BlockquotePlugin} from '@canner/slate-icon-blockquote';
import Bold, {BoldPlugin} from '@canner/slate-icon-bold';
import Code, {CodePlugin} from '@canner/slate-icon-code';
import Clean from '@canner/slate-icon-clean';
import {CodeBlockPlugin} from '@canner/slate-icon-codeblock';
import {TablePlugin} from '@canner/slate-icon-table';
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
  TablePlugin(),
  HrPlugin(),
  ImagePlugin(),
  LinkPlugin(),
  ListPlugin(),
  VideoPlugin()
];

type Props = {
  value: Value,
  onChange: (change: Change) => void,
  serviceConfig?: any
}

type State = {
  isFull: boolean,
  isSticky:boolean
}

const Container = styled.div`
  ${props => props.isFull && (`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000
  `)}
  background-color: #FFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px 1px rgba(0,0,0,0.16);
  overflow-y: ${props => props.isFull ? 'scroll' : 'initial'};
`

const EditorContainer = styled.div`
  padding: 25px;
  margin-top: ${props => props.isFull ? '60px' : '10px'};
`

//position: absolute;
//top: 10px;
//position: ${props => props.isSticky ? 'fixed':'absolute'};
const FixedToolbar = styled.div`
  ${props => props.isSticky && (`
    position: fixed;
    top: 10px;
  `)}
  z-index: 10;
  width: ${props => props.isSticky ? '800px':'100%'}
  margin-bottom: 30px;
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
  position: 'top',
  disabledTypes: [
    BLOCKS.CODE,
    BLOCKS.CODE_LINE,
    BLOCKS.HEADING_1,
    BLOCKS.HEADING_2,
    BLOCKS.HEADING_3,
    BLOCKS.HEADING_4,
    BLOCKS.HEADING_5,
    BLOCKS.HEADING_6
  ]
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
  ]
};

export default class EditorComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.fixedToolbarRef = React.createRef();
    this.state = {
      isFull: false,
      isSticky:false
    };
  }

  handleScroll = () => {
    var sticky = this.fixedToolbarRef.current.offsetTop;
    if(window.pageYOffset >= sticky){
      this.setState({isSticky:true})
    }else {
      this.setState({isSticky:false})
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  goFull = () => {
    this.setState({ isFull: !this.state.isFull });
  }

  render() {
    const {value, onChange, serviceConfig, ...rest} = this.props;
    const {isFull,isSticky} = this.state;

    return (
      <Container isFull={isFull} isSticky={isSticky} {...rest}>
        {

          /*isFull ? (
            <FixedToolbar>
              <Toolbar
                isFull={true}
                value={value}
                serviceConfig={serviceConfig}
                onChange={onChange}
                goFull={this.goFull}/>
            </FixedToolbar>
          ) : (
            <Toolbar
              serviceConfig={serviceConfig}
              value={value}
              onChange={onChange}
              goFull={this.goFull}/>
          )*/
        }
        <EditorContainer isFull={isFull} isSticky={isSticky}>
          <div ref={this.fixedToolbarRef}>
          <FixedToolbar isSticky={isSticky}>
            <Toolbar
              value={value}
              serviceConfig={serviceConfig}
              onChange={onChange}
            />
          </FixedToolbar>
          </div>
          <CannerEditor value={value} onChange={onChange}/>
        </EditorContainer>
      </Container>
    );
  }
}

@toolbar(toolbarOptions)
@sidebar(sidebarOptions)
class CannerEditor extends React.Component<Props> {

  shouldComponentUpdate(nextProps: Props) {
    if (this.props.value === nextProps.value)
      return false
    return true
  }

  render() {
    const {value, onChange} = this.props;
    return (
      <Editor 
        className="markdown-body"
        value={value}
        onChange={onChange}
        plugins={plugins}
        />
    )
  }
}
