import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import MenuArr from "../config/MenuArr";
import "./Sider.less";
import { connect } from 'react-redux';
import headerImg from "@/images/logo.png";
import { PoweroffOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

class LayoutSider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
            pathname: "",
            openKeys: ""
        };
    }
    componentWillMount() {
        //获取当前路由地址
        let pathname = window.location.pathname;
        let openKey = "/" + pathname.split("/")[1];
        this.setState({
            pathname: pathname,
            openKeys: openKey
        })
    }
    handleChangePage({ keyPath }) {
        this.setState({
            pathname: keyPath[0],
        })
    }
    onOpenChange = openKeys => {
        let keysLen = openKeys.length;
        if (keysLen > 1) {
            var trueOpen = openKeys.filter(item => {
                return openKeys[keysLen - 1].includes(item)
            })
            this.setState({ openKeys: trueOpen })
        } else {
            this.setState({ openKeys: openKeys })
        }
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
    toggleCollapsed = () => {
        this.props.foldCollapsed(!this.props.collapsed)
    };
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed} width="256px">
                <div className="header_img">
                    <img src={headerImg} style={{ width: "100%", height: "100%" }} />
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={['/statistics']}
                    selectedKeys={[this.state.pathname]}
                    defaultOpenKeys={[this.state.openKeys]}
                    onClick={this.handleChangePage.bind(this)}
                    onOpenChange={this.onOpenChange}
                    inlineCollapsed={this.props.collapsed}
                >
                    {
                        this.renderMenu(MenuArr)
                    }
                    <Menu.Item key="/quit" icon={<PoweroffOutlined />} style={{ position:"absolute",bottom:"10%" }}>
                        退出
                    </Menu.Item>
                </Menu>
            </Sider >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        collapsed: state.FoldCollapsed.collapsed
    }
}
export default connect(mapStateToProps)(LayoutSider);