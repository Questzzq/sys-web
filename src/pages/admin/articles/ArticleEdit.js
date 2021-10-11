import React from 'react'
import {Form, Card, Input, Button, message, Space} from 'antd'

function ArticleEdit() {
    const [form] = Form.useForm();

    const onFinish = (e) => {
        console.log(e);
        console.log(e['url'])
        // todo 调用保存接口
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    const onFill = () => {
        form.setFieldsValue({
            url: 'https://taobao.com/',
        });
    };

    const priceValidate = (rule, price, callback) => {
        if(price*1 > 100) {
            callback('不能大于100')
        } else {
            callback();
        }
    };

    return (
        <Card
            title="文章编辑"
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={e=>onFinish(e)}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div style={{ overflow: 'hidden' }}>
                    <Form.Item
                        name="url"
                        label="文章名字"
                        rules={[
                            { required: true },
                            { type: 'string', min: 6 },
                        ]}
                    >
                        <Input placeholder="请输入文章名字" />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="价格"
                        rules={[
                            { required: true },
                            { validator: priceValidate }
                        ]}
                    >
                        <Input placeholder="请输入文章名字" />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                        <Button htmlType="button" onClick={onFill}>
                            Fill
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default ArticleEdit