import React, {Component} from 'react'
import { Form, Input, Radio, Modal } from 'antd'

const FormItem = Form.Item
const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
}
const modal = ({
    item={},
    onOk,
    form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue,
    },
    ...modalProps
})=>{
    const onCancel=()=>{
        console.log('cancel...')
    }
    const handleOk = () => {
        validateFields((errors) => {
          if (errors) {
            return
          }
          const data = {
            ...getFieldsValue(),
            id: item.key,
          }
          console.log(data)
          console.log('handleok.....')
          onOk(data)
        })
    }

    const modalOpts={
        ...modalProps,
        onOk:handleOk,
    }
    return (
        <Modal {...modalOpts}>
            <Form layout="horizontal">
                <FormItem label="Name" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('name', {
                    initialValue: item.name,
                    rules: [
                      {
                        required: true,
                      },
                    ],
                  })(<Input />)}
                </FormItem>
                <FormItem label="shortName" hasFeedback {...formItemLayout}>
                  {getFieldDecorator('shortName', {
                    initialValue: item.shortName
                  })(<Input />)}
                </FormItem>
            </Form>
        </Modal>
    )
}

export default Form.create()(modal)