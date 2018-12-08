import marked from 'marked';
import classnames from 'classnames';
import * as React from 'react';
import './index.less'


class MarkDownEditor extends React.Component{
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
    

    render(){
        return (
        <div className="editor">
            <div className="md_panel">
                <div className="md_editor">
                    <textarea onChange={this.props.onChange} value={this.props.content} />
                </div>
                <div className="md_preview"  dangerouslySetInnerHTML={{ __html: this.state.result }}>
                </div>
            </div>
        </div>)
    }
}

export default MarkDownEditor;