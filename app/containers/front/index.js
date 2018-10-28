import React, {Component, PropTypes} from 'react'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import {
    Route,Switch
} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Home from '../home'
import {Detail} from '../detail'
import {Header,Footer} from '../../components'
import './index.less'

class Front extends Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixiin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        let {isFetching} = this.props;
        return (
                <div className='appwrapper'>
                    <Header></Header>
                    <main className='main container'>
                    <Switch>
                        <Route path={`/detail/:id`} component={Detail}/>
                        <Route  path='/' component={Home}/>     
                    </Switch>            
                    </main>
                    <Footer></Footer>
                </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        notification: state.globalState.msg,
        isFetching: state.globalState.isFetching,
        userInfo: state.globalState.userInfo,
    }
}




export default connect(
    mapStateToProps
)(Front)