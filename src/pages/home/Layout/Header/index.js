import React, { Component } from 'react';
import { Layout, Input, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SearchOutlined,
    MessageOutlined,
    DownCircleOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { foldCollapsed } from "@/store/actions/index";
import "./header.less";
import userImg from "@/images/logo.png";

const { Header } = Layout;

class LayoutHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }
    toggle = () => {
        this.props.collapsed(!this.props.status);
    };
    search = (event) => {
        this.setState({
            search: event.target.value
        })
    };
    onSearch = () => {
        console.log(this.state.search)
    }
    render() {
        return (
            <Header className="site-layout-background" style={{ "padding-left": "20px" }}>
                {React.createElement(this.props.status ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })}
                <Input placeholder="搜索" className="input_search" bordered={false} onChange={this.search} style={{ width: 400 }} prefix={<SearchOutlined onClick={this.onSearch} />} />
                <div className="message_user">
                    <MessageOutlined className="message" style={{ color: "#0071ff", "font-size": "20px", "margin-right": "40px" }} />
                    <Avatar src={userImg} size={40} style={{ "margin-right": "20px" }} />
                    <div className="user">
                        <div style={{ color: "#666666", "font-weight": "600" }}>李俊</div>
                        <div style={{ color: "#999999" }}>管理员</div>
                    </div>
                    <DownCircleOutlined style={{ "margin-left": "100px", "margin-right": "20px", color: "#999999" }} />
                </div>
            </Header>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.FoldCollapsed.collapsed
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        collapsed: (status) => {
            dispatch(foldCollapsed(status))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutHeader);