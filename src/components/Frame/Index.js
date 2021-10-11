import React from 'react'
import {Layout, Menu, Dropdown, Avatar, message} from 'antd';
import logo from '../../assets/logo.png'
import {adminRoutes} from '../../routes/index'
import {withRouter} from "react-router-dom";
import "./frame.css"
import {clearToken} from "../../utils/auth"
import IconComponent from "../IconComponent";

const {Header, Content, Sider} = Layout;
const routes = adminRoutes.filter(route => route.isShow);

function Index(props) {
  const popMenu = (
    <Menu onClick={(p) => {
      if (p.key === 'logOut') {
        clearToken()
        props.history.push('/login')
      } else {
        message.info(p.key)
      }
    }}>
      <Menu.Item key="notify">通知中心</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="logOut">退出</Menu.Item>
    </Menu>);

  return (
    <Layout>
      <Header className="header" style={{
        backgroundColor: '#428bca'
      }}>
        <div className="logo">
          <img src={logo} alt="logo" height="35" width="35"/>
        </div>
        <Dropdown overlay={popMenu}>
          <div>
            <Avatar>U</Avatar>
            <span style={{color: '#f1f5f1'}}>超级管理员</span>
            <IconComponent iconType={'DownOutlined'} iconSize={'12px'} />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
          >
            {routes.map(route => {
              return (<Menu.Item
                key={route.path}
                onClick={p => props.history.push(p.key)}
              >
                <div>
                  <IconComponent iconType={route.icon} iconSize={'18px'} />
                  <span>{route.title}</span>
                </div>
              </Menu.Item>)
            })}
          </Menu>
        </Sider>
        <Layout style={{padding: '0 16px 16px'}}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Index)