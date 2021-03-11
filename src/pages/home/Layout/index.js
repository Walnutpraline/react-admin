import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from "./Header";
import Content from "./Content";

class Distribution extends React.Component {
    render() {
        return (
            <Layout className="site-layout">
                <Header />
                <Content />
            </Layout>
        )
    }
}
export default Distribution