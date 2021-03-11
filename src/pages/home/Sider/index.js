import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import MenuArr from "../config/MenuArr";
const { Sider } = Layout;
const { SubMenu } = Menu;

class LayoutSider extends React.Component {
    state = {
        collapsed: false,
    };
    renderMenu = (menus) => {
        let roleType = 4;
        return menus.map(item => {
            if (item.children && roleType >= item.permission) {
                return <SubMenu key={item.path} title={
                    <span>
                        <item.icon />
                        <span>{item.title}</span>
                    </span>
                }>
                    {
                        this.renderMenu(item.children)
                    }
                </SubMenu>
            } else {
                if (item.permission > roleType) {
                    return null
                }
                return (
                    <Menu.Item key={item.path} icon={<item.icon />}>
                        <Link to={item.path}>{item.title}</Link>
                    </Menu.Item>
                )
            }
        })
    }
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {
                        this.renderMenu(MenuArr)
                    }
                </Menu>
            </Sider>
        )
    }
}
export default LayoutSider