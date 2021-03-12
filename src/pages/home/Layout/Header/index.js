import React, { Component } from 'react';
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { foldCollapsed } from "@/store/actions/index";

const { Header } = Layout;

class LayoutHeader extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.props.foldCollapsed(!this.props.collapsed);
    };
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })}
            </Header>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        collapsed: state.FoldCollapsed.collapsed
    }
}
export default connect(mapStateToProps, { foldCollapsed })(LayoutHeader);