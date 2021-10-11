import React from 'react'
import {Button, Card, Table, Popconfirm } from 'antd'

const dataSource = [
    {
        id: 1,
        name: '母猪的产后护理',
        like: 299
    },
    {
        id: 2,
        name: '大明王朝',
        like: 232
    },
    {
        id: 3,
        name: '数据库调优',
        like: 123
    },
]

function ArticleList(props) {
  const columns = [
      {
          title: '序号',
          key: 'id',
          width: 80,
          align: 'center',
          render: (txt, record, index) => index + 1
      },
      {
          title: '文章名',
          dataIndex: 'name'
      },
      {
          title: '获赞数量',
          dataIndex: 'like'
      },
      {
          title: '操作',
          render: (txt, record, index) => {
              return (
                  <div>
                      <Button type="primary" size="small">修改</Button>
                      <Popconfirm
                        title="确定删除此项?"
                        onCancel={() => console.log('用户取消删除!')}
                        onConfirm={() => {
                            console.log('用户确认删除!');
                            // Todo 此处调用Api接口
                        }}
                      >
                          <Button
                              style={{ margin: "0 1rem" }}
                              type="danger"
                              size="small"
                          >
                              删除
                          </Button>
                      </Popconfirm>
                  </div>
              )
          }
      }
  ]

  return (
    <Card
        title="文章列表"
        extra={
            <Button
                type="primary"
                size="small"
                onClick={()=>props.history.push('/admin/articles/edit')}
            >
                新增
            </Button>
        }
    >
        <Table rowKey="id" columns={columns} boarded dataSource={dataSource} />
    </Card>
  )
}

export default ArticleList