import * as React from 'react';
import { Input, Form } from 'antd';
import './blog-header.less';
import classNames from 'classnames';
const FormItem = Form.Item;

class BlogHeaderForm extends React.Component {

    render(){
        return <div>Header</div>
    }
}

const BlogHeader = Form.create()(BlogHeaderForm);
export default BlogHeader;