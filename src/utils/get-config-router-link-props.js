import { isFunction, isObject, isString } from 'lodash-es';
import { nameMapperRef } from '../root';
import { parsePath } from './parse-path';

export const getConfigRouterLinkProps = props => {
    const { name, to, params, ...otherProps } = props;

    const nameMapper = nameMapperRef.current;
    if (!name || !nameMapper) {
        return {
            ...otherProps,
            to
        };
    }

    let nextTo = to;
    const route = nameMapper.get(name) || {};
    const { fullPath } = route;

    const pathname = parsePath(fullPath, params, true);

    if (!to || isString(to)) {
        nextTo = pathname;
    }

    if (isObject(to)) {
        nextTo = {
            ...to,
            pathname
        };
    }
    if (isFunction(to)) {
        nextTo = location => {
            const nextLocation = {
                ...location,
                pathname
            };
            return to(nextLocation);
        };
    }

    // 防止to没有值
    if (!nextTo && name) {
        nextTo = `${name}`;
    }

    return {
        ...otherProps,
        to: nextTo
    };
};
