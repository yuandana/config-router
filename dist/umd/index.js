!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-router-dom"),require("lodash-es")):"function"==typeof define&&define.amd?define(["exports","react","react-router-dom","lodash-es"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@yuandana/config-router"]={},e.React,e.ReactRouterDOM,e.lodash)}(this,(function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=o(t);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,c=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(e){if(!e)return"";if(!n.isObject(e))return"";var t=Object.entries(e).map((function(e){var t=i(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(n)}));return t.length>0?"?".concat(t.join("&")):""},l=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return"";if(!t||!n.isObject(t))return e;var o=e,c=[];if(Object.entries(t).forEach((function(e){var t=i(e,2),r=t[0],n=t[1],a=":".concat(r);-1!==o.indexOf(a)&&(o=o.replace(":".concat(r),n),c.push(r))})),!0===r){var a=n.omit(t,c),u=f(a);o="".concat(o).concat(u)}return o};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=new Map,O=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=Array.isArray(t)&&t.map((function(t){var o=t.routes,c=t.path,a=t.name,u="".concat(r).concat(c).replace(/\/\/*/g,"/"),i=e(o,u).routes,f=b(b({},t),{},{fullPath:u,routes:i});return a&&y.set(a,n.omit(f,["component","routes"])),f}));return{routes:o,nameMapper:y}};function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var v=t.createRef(),j=t.createRef();function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.name,r=e.to,o=e.params,c=m(e,["name","to","params"]),a=j.current;if(!t||!a)return h(h({},c),{},{to:r});var u=r,i=(a.get(t)||{}).fullPath,f=l(i,o,!0);return r&&!n.isString(r)||(u=f),n.isObject(r)&&(u=h(h({},r),{},{pathname:f})),n.isFunction(r)&&(u=function(e){var t=h(h({},e),{},{pathname:f});return r(t)}),!u&&t&&(u="".concat(t)),h(h({},c),{},{to:u})},P=function(e){var t=e.route,n=void 0===t?{}:t,o=e.children,u=n.redirect,i=n.component,f=n.fullPath,s=r.useLocation().pathname,p=r.useParams(),b=l(f,p),y=u,O=j.current.get(u);return O&&(y=O.fullPath),(y=l(y,p))&&s===b&&s!==y?c.default.createElement(r.Redirect,{from:f,to:y}):function(e){return!!(e&&(e.prototype&&e.prototype.isReactComponent||"object"===a(e)&&e.$$typeof||"function"==typeof e))}(i)?c.default.createElement(n.component,null,o):o},w=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(t))return null;if(0===t.length)return null;var n=t.map((function(t,n){var o=t.routes,a=void 0===o?[]:o,u=t.fullPath,i=e(a),f=0===a.length;return c.default.createElement(r.Route,{key:u||n,path:u,exact:f,strict:!0},c.default.createElement(P,{route:t},i))}));return c.default.createElement(r.Switch,null,n)};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object.defineProperty(e,"useHistory",{enumerable:!0,get:function(){return r.useHistory}}),Object.defineProperty(e,"useLocation",{enumerable:!0,get:function(){return r.useLocation}}),Object.defineProperty(e,"useParams",{enumerable:!0,get:function(){return r.useParams}}),Object.defineProperty(e,"useRouteMatch",{enumerable:!0,get:function(){return r.useRouteMatch}}),e.ConfigRouter=function(e){var t=e.routes,n=O(void 0===t?[]:t),o=n.routes,a=n.nameMapper;j&&(j.current=a);var u=w(o);return c.default.createElement(r.BrowserRouter,{ref:v},u)},e.Link=function(e){var t=r.useParams(),n=e.params,o=k(k({},m(e,["params"])),{},{params:k(k({},t),n)});return o=d(o),c.default.createElement(r.Link,o)},e.NavLink=function(e){var t=r.useParams(),n=e.params,o=E(E({},m(e,["params"])),{},{params:E(E({},t),n)});return o=d(o),c.default.createElement(r.NavLink,o)},e.nameMapperRef=j,e.navigationRef=v,e.useNavigate=function(){var e=r.useParams();return{navigateBack:t.useCallback((function(){var e,t;null==v||null===(e=v.current)||void 0===e||null===(t=e.history)||void 0===t||t.goBack()}),[]),navigateTo:t.useCallback((function(t,r){var n,o,c=(j.current.get(t)||{}).fullPath,a=l(c||t,A(A({},e),r),!0);if(!t)throw new Error("You must specify a path to navigateTo function");a&&(null==v||null===(n=v.current)||void 0===n||null===(o=n.history)||void 0===o||o.push(a))}),[e]),redirectTo:t.useCallback((function(t,r){var n,o,c=(j.current.get(t)||{}).fullPath,a=l(c||t,A(A({},e),r),!0);if(!t)throw new Error("You must specify a path to navigateTo function");a&&(null==v||null===(n=v.current)||void 0===n||null===(o=n.history)||void 0===o||o.replace(a))}),[e])}},e.useSearch=function(){var e=r.useLocation().search.replace("?","").split("&").map((function(e){var t=i(e.split("="),2),r=t[0],n=t[1];return n==="".concat(parseFloat(n))?[r,parseFloat(n)]:[r,n]}));return Object.fromEntries(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
