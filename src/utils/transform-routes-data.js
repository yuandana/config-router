import { pathToRegexp } from 'path-to-regexp';
import { nameMapperRef, flatRoutesRef } from '../root';

/**
 * 处理路由对象数据
 * 计算fullPath
 *
 * @param {*} routes
 * @param {*} basePath
 * @returns
 */
export const transformRoutesData = (routes, basePath = '') => {

    if (!Array.isArray(routes)) {
        return routes;
    }

    const resultRoutes = routes.map(route => {
        const { routes: childrenRoutes, path, name } = route;

        if (!path) {
            throw new Error(`@yuandana/config-router: path attribute required`);
        }

        const fullPath = `${basePath}${path}`.replace(/\/\/*/g, '/');

        const regexp = pathToRegexp(fullPath);

        const nextChildrenRoutes = transformRoutesData(
            childrenRoutes,
            fullPath
        );

        const nextRoute = {
            ...route,
            fullPath,
            regexp,
            routes: nextChildrenRoutes
        };

        if (name) {
            if(!nameMapperRef.current){
                nameMapperRef.current = new Map();
            }
            nameMapperRef.current?.set(name, nextRoute);
        }

        if(!flatRoutesRef.current){
            flatRoutesRef.current = [];
        }

        flatRoutesRef.current?.push(nextRoute);

        return nextRoute;
    });

    return resultRoutes
};
