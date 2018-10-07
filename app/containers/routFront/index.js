import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {Home} from '../home'

import {
    Switch,
    Route
} from 'react-router-dom'


class RoutFront extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log('willmountfont')
    }
    render(){
        const {url} = this.props.match;
        const {login, register} = this.props;
        return(
            <div>
                <div>
                   header
                </div>
                <div>
                    <div>
                        <div>
                            <Switch>
                                <Route path='/' component={Home}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
    }
}

RoutFront.defaultProps = {
    categories:[]
};



function mapStateToProps(state) {
    return{
        categories:[],
        userInfo: {}
    }
}

export default connect(
    mapStateToProps,
)(RoutFront)