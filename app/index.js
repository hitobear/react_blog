import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import configureStore from './configureStore'
import IndexApp from './containers'
let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);
let link=document.createElement('link');
link.href='http://at.alicdn.com/t/font_864247_sabsff1tj0h.css';
link.setAttribute('rel','stylesheet');
link.setAttribute('type','text/css');
document.getElementsByTagName('head')[0].appendChild(link);

const mountNode = document.getElementById('app');
const store = configureStore();

render(
    <AppContainer>
        <Provider store={store}>
            <IndexApp/>
        </Provider>
    </AppContainer>
    ,
    mountNode
);

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}