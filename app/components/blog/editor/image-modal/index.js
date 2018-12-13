import * as React from 'react';
import { Input, Modal, Tabs, Form, Select, Upload, message, Icon } from 'antd';
import './index.less'
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class EditorImageModal extends React.Component {
        state = {
            loading: false,
        };


        render(){
            const {imageUrl} = this.props
            const uploadButton = (
                <div>
                  <Icon type={this.state.loading ? 'loading' : 'plus'} />
                  <div className="ant-upload-text">Upload</div>
                </div>
            );
            const formItemLayout = {
                labelCol: {
                    xl: { span: 4 },
                },
                wrapperCol: {
                    xl: { span: 20 },
                },
            };
            console.log(`this.props.tabkey${this.props.tabKey}`)
            return (
                <Modal
                    title="插入图片"
                    visible={this.props.visible}
                    // onOk={(e) => this.props.onOk(e, this.state)}
                    className="eidto_-image_modal"
                    onOk={this.props.onOk}
                    onCancel={this.props.onCancel}
                >
                    <Tabs className="tabs" 
                        defaultActiveKey="0"
                        type="card" 
                        onChange={key => {this.props.tabChanged(key) }}
                        activeKey={this.props.tabKey}
                    >
                        <TabPane tab="本地上传" key="0">
                        <Upload
                            name="file"
                            listType="picture-card"
                            accept=""
                            className="avatar-uploader"
                            showUploadList={false}
                            style={{width: 100, height: 100}}
                            action="/admin/api/file"
                        >
                            {uploadButton}
                        </Upload>
                        </TabPane>
                        <TabPane tab="从网络上抓取" key="1">
                            <Form>
                                <FormItem
                                    
                                    {...formItemLayout}
                                    label="链接地址："
                                    
                                >
                                    <Input value={imageUrl} onChange={(e)=>{this.props.imageUrlChange(e.target.value)}}/>
                                </FormItem>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            );
        }
}

export default EditorImageModal