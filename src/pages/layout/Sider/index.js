import { Layout, Menu } from "antd";
import React from "react";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
const { Sider } = Layout;

const LayoutSider = (props) => {
    return (
        <Sider trigger={null} collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/statistics">statistics</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default LayoutSider