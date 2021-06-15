import { match } from 'path-to-regexp';
import { flatRoutesRef, nameMapperRef } from '../root';
import { useLocation } from 'react-router-dom';

const getMatchRoute = pathname => {
    const route = flatRoutesRef.current?.find(route => {
        const { fullPath } = route;
        return match(fullPath, { decode: decodeURIComponent })(pathname);
    });
    return route;
};

/**
 * 根据传入的 name || path 返回对应的 route 对象
 * 如果未传入任何参数则返回当前 pathname 匹配的route对象
 * @param {*} target
 * @returns
 */
export const useRoute = target => {
    const { pathname } = useLocation();

    if (target) {
        // target === name ?
        const route = nameMapperRef.current?.get(target);
        if (route) {
            return route;
        }
    }
    const targetPathName = target || pathname;

    // default target = currentPath || target = path
    const route = getMatchRoute(targetPathName);
    if (route) {
        return route;
    }
};
