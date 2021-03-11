import React, { Component } from 'react';
import { Layout } from 'antd';
import "./home.less";
import Sider from "./Sider";
import Distribution from "./Layout";
class Home extends React.Component {
    render() {
        return (
            <Layout style={{height:"100%"}}>
                <Sider />
                <Distribution />
            </Layout>
        );
    }
}
export default Home