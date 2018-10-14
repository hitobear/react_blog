import React, {Component, PropTypes} from 'react'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RoutFront from './routFront'
import {Home} from './home'
import {Detail} from './detail'
import {Header,Footer} from '../components'
import './index.less'

class AppIndex extends Component {

    constructor(props) {
        super(props);
        this.openNotification = this.openNotification.bind(this);
        this.shouldComponentUpdate = PureRenderMixiin.shouldComponentUpdate.bind(this);
    }

    openNotification(type, message) {
        let that = this;
        notification[type]({
            message: message,
            onClose: () => {
                that.props.clear_msg();
            }
        });
        that.props.clear_msg();
    };
    componentWillMount(){
        console.log('willmountindex')
    }
    
    render() {
        let {isFetching} = this.props;
        return (
            <Router>
                <div className='appwrapper'>
                    <Header></Header>
                    <main className='main container'>
                    <Switch>
                        <Route  path='/home' component={Home}/>
                        <Route path={`/detail/:id`} component={Detail}/>
                        <Route  component={RoutFront}/>
                    </Switch>
                    </main>
                    <Footer></Footer>
                </div>
            </Router>
        )
    }

    componentDidMount() {
        
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
)(AppIndex)