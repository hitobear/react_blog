import marked from 'marked';
import classnames from 'classnames';
import * as React from 'react';
import {message} from 'antd'
import './index.less'
import EditorImageModal from './image-modal'

class MarkDownEditor extends React.Component{
    static defaultProps = {
        content: ''
    };

    state = this.initialState();
    initialState () {
        return {
          result: this.toHtml(this.props.content),
          imageTabKey:'0',
          imageUrl:'',
          fileLink:'',
          imageModalVisible:false,
        }
    }
    handleImageOk() {
        if (!this.state.imageUrl && !this.state.fileLink) {
          message.warning('请插入图片');
          return;
        }
        const start = (this._cleanSelect());
        if (this.state.imageTabKey === '0') {
          const fileName = this.fileInfo.file.name;
          this._preInputText(`![${fileName}](${location.origin + this.imagePath})`, 2, fileName.length + 2, start);
          this.imageModalClose();
        } else {
          if (this.state.imageUrl) {
            this.writeImageUrl();
            this.imageModalClose();
          }
        }
        
    }
    imageModalClose() {
        this.setState({imageModalVisible:false});
        this.setState({imageUrl:''});
      }
    writeImageUrl(){
        const start = this._cleanSelect();
        this._preInputText(`![](${this.state.imageUrl})`, 0, 0, start);
    }
    handleImageUrlChange(url) {
        this.setState({imageUrl: url});
    }
    _cleanSelect() {
        const start = (this.textControl).selectionStart;
        let text = this.props.content;
    
        this.setState({ result: marked(text) });
        this.props.onChange(text);
    
        return start;
      }
    toHtml(text) {
        let result=marked(text, {sanitize: true})
        return marked(text, {sanitize: true});
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.content === this.props.content) { return; }
        this.setState({result: marked(nextProps.content)});
    }
    componentDidMount(){
        this.previewControl = this.preview;
        this._syncScroll = (() => {
          let leftSync = false, rightSync = false;
          let that = this;
    
          return function(e) {
            let scrollEle = e.target;
            let syncEle = scrollEle === that.textControl ? that.previewControl : that.textControl;
            let percent = scrollEle.scrollTop / (scrollEle.scrollHeight - scrollEle.clientHeight);
            if (leftSync && scrollEle === that.previewControl) {
              return true;
            }
            if (rightSync && scrollEle === that.textControl) {
              return true;
            }
    
            leftSync = scrollEle === that.textControl;
            rightSync = scrollEle === that.previewControl;
            syncEle.scrollTop = percent * (syncEle.scrollHeight - syncEle.clientHeight);
    
            setTimeout(() => leftSync = rightSync = false, 100);
          };
        })();

        (this.textControl ).addEventListener('scroll', e => this._syncScroll(e), false);
        this.previewControl.addEventListener('scroll', this._syncScroll, false);
    }
    // widgets constructors
  _getToolBar () {
    return (
      <ul className={classnames('md_toolbar clearfix', {hide: this.state.mode === 'preview'})}>
        <li className="tb-btn"><a title="加粗(Ctrl + B)" onClick={() => this._boldText()} className="editor_toolbar bold"><span /></a></li>{/* bold */}
        <li className="tb-btn"><a title="斜体(Ctrl + I)" onClick={() => this._italicText()} className="editor_toolbar italic"/></li>{/* italic */}
        <li className="tb-btn spliter" />
        <li className="tb-btn"><a title="链接(Ctrl + L)" onClick={() => this._linkModal()} className="editor_toolbar link"/></li>{/* link */}
        <li className="tb-btn"><a title="引用(Ctrl + Q)" onClick={() => this._blockquoteText()} className="editor_toolbar quote"/></li>{/* blockquote */}
        <li className="tb-btn"><a title="代码段(Ctrl + K)" onClick={() => this._codeText()} className="editor_toolbar code"/></li>{/* code */}
        <li className="tb-btn"><a title="图片(Ctrl + G)" onClick={() => this._imageText()} className="editor_toolbar img"/></li>{/* picture-o */}
        <li className="tb-btn spliter"/>
        <li className="tb-btn"><a title="有序列表(Ctrl + O)" onClick={() => this._listOlText()} className="editor_toolbar ol"/></li>{/* list-ol */}
        <li className="tb-btn"><a title="无序列表(Ctrl + U)" onClick={() => this._listUlText()} className="editor_toolbar ul"/></li>{/* list-ul */}
        <li className="tb-btn"><a title="标题(Ctrl + H)" onClick={() => this._headerText()} className="editor_toolbar title"/></li>{/* header */}
        <li className="tb-btn spliter"/>
        <li className="tb-btn"><a title="分割线(Ctrl + R)" onClick={() => this._insertHr()} className="editor_toolbar hr"/></li>
        <li className="tb-btn"><a title="插入 more 标签(Ctrl + M)" onClick={() => this._insertMore()} className="editor_toolbar two"/></li>{/* more */}
      </ul>
    );
  }

    
    _preInputText (text, preStart, preEnd, selectStart) {
        const start = selectStart || this.textControl.selectionStart;
        const end = selectStart || this.textControl.selectionEnd;
        const origin = this.props.content;
    
        if (start !== end) {
          const exist = origin.slice(start, end);
          text = text.slice(0, preStart) + exist + text.slice(preEnd);
          preEnd = preStart + exist.length;
        }
        let content = origin.slice(0, start) + text + origin.slice(end);
    
        // pre-select
        setTimeout(() => this.textControl.setSelectionRange(start + preStart, start + preEnd), 20);
        this.setState({ result: marked(content) }); // change state
        this.props.onChange(content);
    }
    
    _boldText () {
        this._preInputText('**加粗文字**', 2, 6);
    }
    _italicText () {
        this._preInputText('*斜体文字*', 1, 5);
    }
    _imageText () {
        this.setState({imageModalVisible:true});
    }
    _onChange (e) {
        let content = e.target.value;
        this.props.onChange(content);
    }
    _blockquoteText () {
        this._preInputText('\n> 引用', 3, 5);
    }

    render(){
        return (
        <div className="editor">
            <div className="md_panel">
                <div className="md_menubar">
                    {this._getToolBar()}
                </div>
                <div className="md_editor">
                    <textarea ref={div => this.textControl = div} onChange={e => this._onChange(e)} value={this.props.content} />
                </div>
                <div className="md_preview markdown"  ref={div => this.preview = div} dangerouslySetInnerHTML={{ __html: this.state.result }}>
                </div>
            </div>
            <EditorImageModal
            tabChanged={key => this.setState({imageTabKey: key})}
            tabKey={this.state.imageTabKey}
            imageUrl={this.state.imageUrl}
            visible={this.state.imageModalVisible}
            onOk={() => this.handleImageOk()}
            onCancel={() => this.imageModalClose()}
            imageUrlChange={(imageUrl)=>this.handleImageUrlChange(imageUrl)}
            ></EditorImageModal>
        </div>)
    }
}

export default MarkDownEditor;