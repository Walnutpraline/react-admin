import Home from '../pages/home';
import Login from '../pages/login';
import React, { Component } from 'react';
import { //引入路由相关配置
    // HashRouter,  // 构建 hash 路由
    BrowserRouter,// 构建 history 路由 
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
export default class Router extends Component {
    render() {
        console.log("Router")
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={() =>
                        // localStorage.getItem("token") ? <Home /> : <Redirect to="/login" />
                        <Home />
                    } />
                </Switch>
            </BrowserRouter>
        )
    }
}