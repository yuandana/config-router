import { isObject, omit } from 'lodash-es';
import { transformObjectToSearchString } from './transform-object-to-search-string';

export const parsePath = (path, params, handleSearch = false) => {
    if (!path) {
        return '';
    }
    if (!params || !isObject(params)) {
        return path;
    }
    // 处理 path 中 /:someParams 的情况;
    let nextPath = path;
    const useInParamsKeyList = [];
    Object.entries(params).forEach(([key, value]) => {
        const keyReg = `:${key}`;
        if (nextPath.indexOf(keyReg) !== -1) {
            nextPath = nextPath.replace(`:${key}`, value);
            useInParamsKeyList.push(key);
        }
    });
    if (handleSearch === true) {
        // 处理剩余的 search
        const search = omit(params, useInParamsKeyList);
        const searchString = transformObjectToSearchString(search);
        nextPath = `${nextPath}${searchString}`;
    }

    return nextPath;
};
