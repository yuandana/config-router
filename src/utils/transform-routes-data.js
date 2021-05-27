import { omit } from 'lodash-es';

const nameMapper = new Map();

/**
 * 处理路由对象数据
 * 计算fullPath
 *
 * @param {*} routes
 * @param {*} basePath
 * @returns
 */
export const transformRoutesData = (routes = [], basePath = '') => {
    const resultRoutes =
        Array.isArray(routes) &&
        routes.map(route => {
            const { routes: childrenRoutes, path, name } = route;
            const fullPath = `${basePath}${path}`.replace(/\/\/*/g, '/');
            const { routes: nextChildrenRoutes } = transformRoutesData(
                childrenRoutes,
                fullPath
            );

            const nextRoutes = {
                ...route,
                fullPath,
                routes: nextChildrenRoutes
            };

            if (name) {
                nameMapper.set(name, omit(nextRoutes, ['component', 'routes']));
            }

            return nextRoutes;
        });

    return {
        routes: resultRoutes,
        nameMapper
    };
};
