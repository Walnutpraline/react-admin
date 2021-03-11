import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom';
import RouteMap from "../../config/RouteMap";
const { Content } = Layout;

class LayoutContent extends React.Component {
    RouteArr(route) {
        return route.map(route => {

            return (<Route path={route.path} component={route.component} exact={route.exact} key={route.path} />)
        })
    }
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }
                }
            >
                <Switch>
                    <Redirect exact from="/" to="/statistics" />
                    {this.RouteArr(RouteMap)}
                    <Redirect to="/error/404" />
                </Switch>
            </Content >
        )

    }
}
function Homew() {
    return (
        <div>
            <h3>Homew</h3>
        </div>
    )
}
function Work() {
    return (
        <div>
            <h3>Work</h3>
        </div>
    )
}
export default LayoutContent