import React from 'react'
import {Form, Input, Button, Checkbox, Card} from 'antd';
import "./login.css"
// import { setToken } from "../utils/auth"
import { loginApi } from "../services/auth";
import { setToken } from '../utils/auth';

function Login(props) {
    const onFinish = (values) => {
        loginApi({
            id: values.username,
            password: values.password
        }).then(res => {
            setToken(res.data.token);
            props.history.push("/admin/ArticleList");
            console.log(res);
            console.log(res.data.token);
        })
        // setToken(values.username+"/"+values.password);
        // console.log('Success:', values);
        // props.history.push("/admin/ArticleList");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Card title="欢迎登录"
              className="login-form"
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login;