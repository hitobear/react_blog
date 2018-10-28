import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {ArticleItem} from "./ArticleItem";
import {List} from 'antd'
import './index.less'
export default class ArticleList extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <div>
                {
                    this.props.data.map((item,index)=>(
                        <ArticleItem history={this.props.history} key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}