import React, { useEffect, useState } from 'react'
import { Button, Card, Table, Popconfirm } from 'antd'
import { articlePageListApi } from '../../../services/article'

function ArticleList(props) {
    // 定义局部状态
    const [dataSource, setDataSource] = useState([])
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        loadData(1, 10);
    }, []);

    const loadData = (pageNum, pageSize) => {
        articlePageListApi(pageNum, pageSize)
        .then(res => {
            console.log(res);
            setDataSource(res.data);
            setTotal(res.total);
        })
    }

    const columns = [
        {
            title: '编号',
            key: 'articleId',
            width: 80,
            align: 'center',
            render: (txt, record, index) => index + 1
        },
        {
            title: '文章名',
            dataIndex: 'title'
        },
        {
            title: '点赞数量',
            dataIndex: 'like'
        },
        {
            title: '反对数量',
            dataIndex: 'dislike'
        },
        {
            title: '打赏数量',
            dataIndex: 'like'
        },
        {
            title: '浏览量',
            dataIndex: 'views'
        },
        {
            title: '创建时间',
            dataIndex: 'createTime'
        },
        {
            title: '操作',
            render: (txt, record, index) => {
                return (
                    <div>
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
                    onClick={() => props.history.push('/admin/articles/edit')}
                >
                    新增
                </Button>
            }
        >
            <Table 
                rowKey="articleId" 
                columns={columns} boarded dataSource={dataSource} 
                pagination={{ total, defaultPageSize:10, onChange: loadData }}
            />
        </Card>
    )
}

export default ArticleList