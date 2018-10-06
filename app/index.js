import React from 'react'
import {render} from 'react-dom'
let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');


render(
   <div>begin</div>
    ,
    mountNode
);

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}