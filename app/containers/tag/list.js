import React, {Component} from 'react'
import {Table,Modal,Button} from 'antd'
const confirm = Modal.confirm

const List=({onEditItem,onDeleteItem,...tableProps})=>{
    const onDelete=(record)=>{
        confirm({
            title: '确定要删除这个标签吗?',
            onOk () {
              onDeleteItem(record._id)
            },
        })
    }
    const columns = [{
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },{
        title: '缩略名',
        dataIndex: 'shortName',
        key: 'name',
      },
      {
        title: '文章数',
        dataIndex: 'count',
        key: 'count',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => {
            return (<div><Button onClick={(e)=>{onEditItem(record)}}>编辑</Button>
            <Button onClick={(e)=>{onDelete(record)}}>删除</Button></div>)
          },
        
      },
    ]
    const data = [{
        key: '1',
        name: 'CSS',
        shortname: 'CSS',
        count:0,
      },
      {
        key: '2',
        name: 'CSSs',
        shortname: 'CSS',
        count:0,
      },
    ]
   
    return (<div>
            <Table  columns={columns} {...tableProps}/>
        </div>)
}

export default List