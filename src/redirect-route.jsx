import React from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { isReactComponent, parsePath } from './utils';
import { nameMapperRef } from './root';

/**
 * 判断是否需要渲染 redirect
 * 如果不需要则渲染 component/children
 *
 * @param {*} props
 * @returns
 */
export const RedirectRoute = props => {
    const { route = {}, children } = props;
    const { redirect, component, fullPath } = route;

    const { pathname } = useLocation();
    const params = useParams();

    const nextFullPath = parsePath(fullPath, params);

    let nextRedirect = redirect;

    const nameMapper = nameMapperRef.current;
    const nameMapRoute = nameMapper.get(redirect);
    if (nameMapRoute) {
        nextRedirect = nameMapRoute.fullPath;
    }

    nextRedirect = parsePath(nextRedirect, params);

    // 判断是否需要 redirect
    if (
        nextRedirect &&
        pathname === nextFullPath &&
        pathname !== nextRedirect
    ) {
        // 处理 redirect 支持含参数的形势

        return <Redirect from={fullPath} to={nextRedirect} />;
    }

    if (isReactComponent(component)) {
        return <route.component>{children}</route.component>;
    }

    return children;
};
