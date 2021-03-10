import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom'//引入路由
import { UserOutlined, VideoCameraOutlined, UserDeleteOutlined } from '@ant-design/icons';
const { Content } = Layout;//antd
const newList = [
    {//一级菜单需要的参数
        title: "首页",
        icon: UserOutlined,
        permission: 1, //权限判断
        path: '/home' //设置的好处：1、可以用来跳转页面，2、可以用来配置下拉菜单的默认下来项
    },
    {
        title: "用户管理",
        icon: VideoCameraOutlined,
        permission: 3,
        path: '/user-manage',
        children: [ //二级菜单的配置
            {
                title: "用户列表",
                icon: UserDeleteOutlined,
                permission: 3,
                path: "/user-manage/users"
            }
        ]
    },
]
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    forList = (newList) => { //定义函数，接收后端数据
        // console.log(newList)
        return newList.map((item) => { //循环
            if (item.children) { //判断是否有孩子，有就继续循环
                return item.children.map((item) => { //循环孩子数据路由
                    return <Route exact key={item.id} path={item.path} component={item.component}></Route>
                })
            } else {//如果没有孩子就直接循环
                return <Route exact key={item.id} path={item.path} component={item.component}></Route>
            }
        })
    }
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: '100%',
                }}
            >
                <Switch>//保留模糊匹配
               {this.forList(newList)} //调用上面定义的函数，将后端数据传递过去用于渲染路由
               <Redirect from="/*" to="/home"></Redirect> //路由重定向
               </Switch>
                {/* Content */}
            </Content>
        )
    }
}

export default Home;