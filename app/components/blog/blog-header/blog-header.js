import * as React from 'react';
import { Input, Form,Row,Col,Select,Button } from 'antd';
import './blog-header.less';
import classNames from 'classnames';
const FormItem = Form.Item;

class BlogHeaderForm extends React.Component {
    
    render(){
        const { getFieldDecorator } = this.props.form;
        const {taglist,tags,handleTagChange} =this.props;
        console.log('taglisto%',this.props)
        console.log('tagso%',tags)
        console.log(tags)
        const formItemLayout = {
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 24 },
              md: { span: 12 },
            },
        };
        return ( <div className="article-header">
            <Form layout="inline">
            <div className="article-header-title">
                    <Row gutter={16}>
                        <Col lg={16} md={24} sm={24} xs={24}>
                            <FormItem className="row">
                                {getFieldDecorator('title', {
                                    rules: [{
                                        required: true, message: '请输入标题',
                                    }],
                                    initialValue: this.props.title,
                                })(
                                    <Input 
                                        addonBefore="标题"
                                        onChange={e => console.log(123)} 
                                        placeholder="标题"
                                    />
                                )}
                            </FormItem>
                        </Col>
                        <Col lg={8} md={24} sm={24} xs={24}>   
                            <div className='manage-header' style={{display: 'flex', justifyContent: 'flex-start'}}>
                                <Button type='default' style={{marginRight:10}}>保存草稿</Button>
                                <Button type='primary' onClick={this.props.publish}>发布文章</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col lg={16} md={24} sm={24} xs={24}>
                          <FormItem  label="标签">
                          {getFieldDecorator('tags', {
                              initialValue: tags,
                          })(
                          <Select
                                mode="tags"
                                showSearch={true}
                                placeholder="请输入标签"
                                style={{maxWidth:286,width: '100%'}}
                                onChange={handleTagChange}
                            >
                              {taglist.map(tag => <Option key={tag._id} value={tag.name}>{tag.name}</Option>)}
                            </Select>
                          )}
                          </FormItem>
                        </Col>
                    </Row>
            </div>
        </Form>
      </div> )
    }
}

const BlogHeader = Form.create()(BlogHeaderForm);
export default BlogHeader;