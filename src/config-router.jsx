import React from 'react';
import {
    BrowserRouter as ReactRouter,
    Route as ReactRoute,
    Switch
} from 'react-router-dom';
import { transformRoutesData } from './utils';
import { navigationRef, nameMapperRef } from './root';
import { RedirectRoute } from './redirect-route.jsx';

const renderRouter = (routes = []) => {
    if (!Array.isArray(routes)) {
        return null;
    }
    if (routes.length === 0) {
        return null;
    }
    const switchItems = routes.map((route, index) => {
        const { routes: childrenRoutes = [], fullPath } = route;
        const children = renderRouter(childrenRoutes);
        const isExact = childrenRoutes.length === 0;

        // 严格匹配带斜杠的路径
        // /one/ !== /one
        const isStrict = true;

        return (
            <ReactRoute
                key={fullPath || index}
                path={fullPath}
                exact={isExact}
                strict={isStrict}
            >
                <RedirectRoute route={route}>{children}</RedirectRoute>
            </ReactRoute>
        );
    });

    return <Switch>{switchItems}</Switch>;
};

export const ConfigRouter = props => {
    const { routes = [] } = props;
    const { routes: nextRoutes, nameMapper } = transformRoutesData(routes);
    if (nameMapperRef) {
        nameMapperRef.current = nameMapper;
    }
    const children = renderRouter(nextRoutes);

    return <ReactRouter ref={navigationRef}>{children}</ReactRouter>;
};
