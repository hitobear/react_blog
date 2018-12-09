import marked from 'marked';
import classnames from 'classnames';
import * as React from 'react';
import './index.less'


class MarkDownEditor extends React.Component{
    static defaultProps = {
        content: ''
    };

    state = this.initialState();
    initialState () {
        return {
          result: this.toHtml(this.props.content),
        }
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
        console.log('this.preview')
        console.log(this.preview)
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
    

    render(){
        return (
        <div className="editor">
            <div className="md_panel">
                <div className="md_editor">
                    <textarea ref={div => this.textControl = div} onChange={this.props.onChange} value={this.props.content} />
                </div>
                <div className="md_preview"  ref={div => this.preview = div} dangerouslySetInnerHTML={{ __html: this.state.result }}>
                </div>
            </div>
        </div>)
    }
}

export default MarkDownEditor;