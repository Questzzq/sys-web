import React from 'react'
import {Form, Input, Button, Checkbox, Card, message} from 'antd';
import "./login.css"
import { loginApi } from "../services/auth";
import { setToken } from '../utils/auth';

function Login(props) {
    const onFinish = (values) => {
        loginApi({
            userId: values.username,
            password: values.password
        }).then(res => {
            if(res.code===200) {
                setToken(res.data.token);
                props.history.push("/admin/ArticleList");
            } else {
                if(loginForDev(values)) {
                    setToken('testToken');
                    props.history.push("/admin/ArticleList");
                } else {
                    message.info(res.msg);
                }
            }
        })
    };

    /**
     * 前端开发的时候用
     * @param {*} values 
     * @returns 
     */
    const loginForDev = (values) => {
        if(values.username === 'admin' && values.password === 'admin') {
            return true;
        }
        return false;
    } 

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