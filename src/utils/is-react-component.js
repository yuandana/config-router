/**
 * 判断是否为 react component
 * @param {*} component
 * @returns
 */
export const isReactComponent = component => {
    if (!component) {
        return false;
    }
    if (component.prototype && component.prototype.isReactComponent) {
        return true;
    }
    if (typeof component === 'object' && component.$$typeof) {
        return true;
    }
    if (typeof component === 'function') {
        return true;
    }
    return false;
};
