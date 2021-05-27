import { isObject } from 'lodash-es';

export const transformObjectToSearchString = object => {
    if (!object) {
        return '';
    }
    if (!isObject(object)) {
        return '';
    }
    const searchMapList = Object.entries(object).map(
        ([key, value]) => `${key}=${value}`
    );
    if (searchMapList.length > 0) {
        return `?${searchMapList.join('&')}`;
    }
    return '';
};
