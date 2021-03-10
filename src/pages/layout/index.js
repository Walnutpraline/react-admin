import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./layout.css";
import Statistics from "../statistics/index";
import Sider from "./Sider/index";
import Header from "./Header/index";

const {Content } = Layout;
class Navigation extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Router>
                <Layout>
                    <Sider />
                    <Layout className="site-layout">
                        <Header />
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <Route exact path="/statistics" component={Statistics} />
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Navigation;