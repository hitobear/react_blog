import React, {Component} from 'react'
import {Table,Button} from 'antd'

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
        return <Button>编辑</Button>
      },
    
  },
]
const List=({...tableProps})=>{
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