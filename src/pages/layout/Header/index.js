import { Layout } from "antd";
import React from "react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
class LayoutHeader extends React.Component {
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(false ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })}
            </Header>
        )
    }
}
export default LayoutHeader