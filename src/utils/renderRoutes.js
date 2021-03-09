import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import store from "../store/index";

//判断登录
const renderRoutes = (routes, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                    if (!route.requiresAuth || store.getState().loginReducer.authed || route.path === authPath) {
                        return <route.component {...props} {...extraProps} route={route} />
                    }
                    return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                }}
            />
        ))}
    </Switch>
) : null

export default renderRoutes;