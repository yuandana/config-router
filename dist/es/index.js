import{useLocation as t,useParams as r,Redirect as e,BrowserRouter as n,Route as o,Switch as c,NavLink as a,Link as u}from"react-router-dom";export{useParams}from"react-router-dom";import{isObject as i,omit as f,isString as l,isFunction as p}from"lodash-es";import{createRef as s,useCallback as y}from"react";function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function m(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=e){var n,o,c=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(c.push(n.value),!r||c.length!==r);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return c}}(t,r)||function(t,r){if(t){if("string"==typeof t)return O(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(t){if(!t)return"";if(!i(t))return"";var r=Object.entries(t).map((function(t){var r=m(t,2),e=r[0],n=r[1];return"".concat(e,"=").concat(n)}));return r.length>0?"?".concat(r.join("&")):""},j=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return"";if(!r||!i(r))return t;var n=t,o=[];if(Object.entries(r).forEach((function(t){var r=m(t,2),e=r[0],c=r[1],a=":".concat(e);-1!==n.indexOf(a)&&(n=n.replace(":".concat(e),c),o.push(e))})),!0===e){var c=f(r,o),a=v(c);n="".concat(n).concat(a)}return n};function g(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function h(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function P(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?h(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var d=new Map,w=function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Array.isArray(r)&&r.map((function(r){var n=r.routes,o=r.path,c=r.name,a="".concat(e).concat(o).replace(/\/\/*/g,"/"),u=t(n,a).routes,i=P(P({},r),{},{fullPath:a,routes:u});return c&&d.set(c,f(i,["component","routes"])),i}));return{routes:n,nameMapper:d}};function E(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)e=c[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)e=c[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var S=s(),D=s();function k(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?k(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var R=function(t){var r=t.name,e=t.to,n=t.params,o=E(t,["name","to","params"]),c=D.current;if(!r||!c)return A(A({},o),{},{to:e});var a=e,u=(c.get(r)||{}).fullPath,f=j(u,n,!0);return e&&!l(e)||(a=f),i(e)&&(a=A(A({},e),{},{pathname:f})),p(e)&&(a=function(t){var r=A(A({},t),{},{pathname:f});return e(r)}),!a&&r&&(a="".concat(r)),A(A({},o),{},{to:a})},x=function(n){var o=n.route,c=void 0===o?{}:o,a=n.children,u=c.redirect,i=c.component,f=c.fullPath,l=t(),p=r(),s=l.pathname,y=j(f,p),O=u,m=D.current.get(u);return m&&(O=m.fullPath),(O=j(O,p))&&s===y&&s!==O?React.createElement(e,{from:f,to:O}):function(t){return!!(t&&(t.prototype&&t.prototype.isReactComponent||"object"===b(t)&&t.$$typeof||"function"==typeof t))}(i)?React.createElement(c.component,null,a):a},T=function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(r))return null;if(0===r.length)return null;var e=r.map((function(r,e){var n=r.routes,c=void 0===n?[]:n,a=r.fullPath,u=t(c),i=0===c.length;return React.createElement(o,{key:a||e,path:a,exact:i,strict:!0},React.createElement(x,{route:r},u))}));return React.createElement(c,null,e)},I=function(t){var r=t.routes,e=w(void 0===r?[]:r),o=e.routes,c=e.nameMapper;D&&(D.current=c);var a=T(o);return React.createElement(n,{ref:S},a)};function M(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?M(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var B=function(t){var e=r(),n=t.params,o=$($({},E(t,["params"])),{},{params:$($({},e),n)});return o=R(o),React.createElement(a,o)};function C(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?C(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var L=function(t){var e=r(),n=t.params,o=F(F({},E(t,["params"])),{},{params:F(F({},e),n)});return o=R(o),React.createElement(u,o)};function Y(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function N(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?Y(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Y(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var U=function(){var t=r();return{navigateBack:y((function(){var t,r;null==S||null===(t=S.current)||void 0===t||null===(r=t.history)||void 0===r||r.goBack()}),[]),navigateTo:y((function(r,e){var n,o,c=(D.current.get(r)||{}).fullPath,a=j(c||r,N(N({},t),e),!0);if(!r)throw new Error("You must specify a path to navigateTo function");a&&(null==S||null===(n=S.current)||void 0===n||null===(o=n.history)||void 0===o||o.push(a))}),[t]),redirectTo:y((function(r,e){var n,o,c=(D.current.get(r)||{}).fullPath,a=j(c||r,N(N({},t),e),!0);if(!r)throw new Error("You must specify a path to navigateTo function");a&&(null==S||null===(n=S.current)||void 0===n||null===(o=n.history)||void 0===o||o.replace(a))}),[t])}},q=function(){var r=t().search.replace("?","").split("&").map((function(t){var r=m(t.split("="),2),e=r[0],n=r[1];return n==="".concat(parseFloat(n))?[e,parseFloat(n)]:[e,n]}));return Object.fromEntries(r)};export{I as ConfigRouter,L as Link,B as NavLink,D as nameMapperRef,S as navigationRef,U as useNavigate,q as useSearch};
