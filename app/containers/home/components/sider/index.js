import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Card,Tag} from "components";
import  {color} from '../../../utils/utils'
import { withRouter } from 'react-router-dom'
import './index.less'
@withRouter
class Sider extends Component{
    constructor() {
        super()
        this.state = {
          tags: ['Javascript','CSS','React','Vue','webpack','学习']
        }
      }
    render(){
        return (
            <Card title='标签'>
                <div className='tags_content'>
                    {
                    this.state.tags ?
                    this.state.tags.map(v => (
                        <Tag
                        key = {v}
                        color={color[Math.floor(Math.random()*color.length)]}
                        onClick={()=>this.props.history.push(`/app/tags/${v}`)}
                        >
                        {v}
                        </Tag>
                    ))
                    : null
                    }
                </div>
            </Card>
        )
    }
}
export default Sider