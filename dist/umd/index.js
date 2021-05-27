!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react-router-dom"),require("lodash-es"),require("react")):"function"==typeof define&&define.amd?define(["exports","react-router-dom","lodash-es","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@yuandana/config-router"]={},e.ReactRouterDOM,e.lodashES,e.React)}(this,(function(e,t,r,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);t>r;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,c=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(e){if(!e)return"";if(!r.isObject(e))return"";var t=Object.entries(e).map((function(e){var t=a(e,2),r=t[1];return"".concat(t[0],"=").concat(r)}));return t.length>0?"?".concat(t.join("&")):""},i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return"";if(!t||!r.isObject(t))return e;var o=e,c=[];if(Object.entries(t).forEach((function(e){var t=a(e,2),r=t[0],n=t[1];-1!==o.indexOf(":".concat(r))&&(o=o.replace(":".concat(r),n),c.push(r))})),!0===n){var i=r.omit(t,c),f=u(i);o="".concat(o).concat(f)}return o};function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;arguments.length>t;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=new Map,y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=Array.isArray(t)&&t.map((function(t){var o=t.routes,c=t.path,a=t.name,u="".concat(n).concat(c).replace(/\/\/*/g,"/"),i=e(o,u).routes,f=p(p({},t),{},{fullPath:u,routes:i});return a&&s.set(a,r.omit(f,["component","routes"])),f}));return{routes:o,nameMapper:s}};function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;c.length>n;n++)t.indexOf(r=c[n])>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;c.length>n;n++)t.indexOf(r=c[n])>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=n.createRef(),m=n.createRef();function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;arguments.length>t;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=e.name,n=e.to,o=e.params,c=b(e,["name","to","params"]),a=m.current;if(!t||!a)return j(j({},c),{},{to:n});var u=n,f=(a.get(t)||{}).fullPath,l=i(f,o,!0);return n&&!r.isString(n)||(u=l),r.isObject(n)&&(u=j(j({},n),{},{pathname:l})),r.isFunction(n)&&(u=function(e){var t=j(j({},e),{},{pathname:l});return n(t)}),!u&&t&&(u="".concat(t)),j(j({},c),{},{to:u})},h=function(e){var r=e.route,n=void 0===r?{}:r,c=e.children,a=n.redirect,u=n.component,f=n.fullPath,l=t.useLocation(),p=t.useParams(),s=l.pathname,y=i(f,p),b=a,O=m.current.get(a);return O&&(b=O.fullPath),(b=i(b,p))&&s===y&&s!==b?React.createElement(t.Redirect,{from:f,to:b}):function(e){return!(!e||!(e.prototype&&e.prototype.isReactComponent||"object"===o(e)&&e.$$typeof||"function"==typeof e))}(u)?React.createElement(n.component,null,c):c},d=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(r))return null;if(0===r.length)return null;var n=r.map((function(r,n){var o=r.routes,c=void 0===o?[]:o,a=r.fullPath,u=e(c);return React.createElement(t.Route,{key:a||n,path:a,exact:0===c.length,strict:!0},React.createElement(h,{route:r},u))}));return React.createElement(t.Switch,null,n)};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;arguments.length>t;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;arguments.length>t;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;arguments.length>t;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object.defineProperty(e,"useParams",{enumerable:!0,get:function(){return t.useParams}}),e.ConfigRouter=function(e){var r=e.routes,n=y(void 0===r?[]:r),o=n.routes;m&&(m.current=n.nameMapper);var c=d(o);return React.createElement(t.BrowserRouter,{ref:O},c)},e.Link=function(e){var r=t.useParams(),n=e.params,o=E(E({},b(e,["params"])),{},{params:E(E({},r),n)});return o=g(o),React.createElement(t.Link,o)},e.NavLink=function(e){var r=t.useParams(),n=e.params,o=w(w({},b(e,["params"])),{},{params:w(w({},r),n)});return o=g(o),React.createElement(t.NavLink,o)},e.nameMapperRef=m,e.navigationRef=O,e.useNavigate=function(){var e=t.useParams();return{navigateBack:n.useCallback((function(){var e,t;null==O||null===(e=O.current)||void 0===e||null===(t=e.history)||void 0===t||t.goBack()}),[]),navigateTo:n.useCallback((function(t,r){var n,o,c=(m.current.get(t)||{}).fullPath,a=i(c||t,R(R({},e),r),!0);if(!t)throw Error("You must specify a path to navigateTo function");a&&(null==O||null===(n=O.current)||void 0===n||null===(o=n.history)||void 0===o||o.push(a))}),[e]),redirectTo:n.useCallback((function(t,r){var n,o,c=(m.current.get(t)||{}).fullPath,a=i(c||t,R(R({},e),r),!0);if(!t)throw Error("You must specify a path to navigateTo function");a&&(null==O||null===(n=O.current)||void 0===n||null===(o=n.history)||void 0===o||o.replace(a))}),[e])}},e.useSearch=function(){var e=t.useLocation().search.replace("?","").split("&").map((function(e){var t=a(e.split("="),2),r=t[0],n=t[1];return n==="".concat(parseFloat(n))?[r,parseFloat(n)]:[r,n]}));return Object.fromEntries(e)},Object.defineProperty(e,"__esModule",{value:!0})}));