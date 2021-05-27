import{useLocation as t,useParams as r,Redirect as e,BrowserRouter as n,Route as o,Switch as a,NavLink as c,Link as u}from"react-router-dom";export{useParams}from"react-router-dom";import{isObject as i,omit as f,isString as l,isFunction as p}from"lodash-es";import{createRef as s,useCallback as y}from"react";function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);r>e;e++)n[e]=t[e];return n}function m(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=e){var n,o,a=[],c=!0,u=!1;try{for(e=e.call(t);!(c=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==e.return||e.return()}finally{if(u)throw o}}return a}}(t,r)||function(t,r){if(t){if("string"==typeof t)return O(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(t){if(!t)return"";if(!i(t))return"";var r=Object.entries(t).map((function(t){var r=m(t,2),e=r[1];return"".concat(r[0],"=").concat(e)}));return r.length>0?"?".concat(r.join("&")):""},j=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return"";if(!r||!i(r))return t;var n=t,o=[];if(Object.entries(r).forEach((function(t){var r=m(t,2),e=r[0],a=r[1];-1!==n.indexOf(":".concat(e))&&(n=n.replace(":".concat(e),a),o.push(e))})),!0===e){var a=f(r,o),c=v(a);n="".concat(n).concat(c)}return n};function g(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function h(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function P(t){for(var r=1;arguments.length>r;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?h(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var d=new Map,w=function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Array.isArray(r)&&r.map((function(r){var n=r.routes,o=r.path,a=r.name,c="".concat(e).concat(o).replace(/\/\/*/g,"/"),u=t(n,c).routes,i=P(P({},r),{},{fullPath:c,routes:u});return a&&d.set(a,f(i,["component","routes"])),i}));return{routes:n,nameMapper:d}};function S(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},a=Object.keys(t);for(n=0;a.length>n;n++)r.indexOf(e=a[n])>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;a.length>n;n++)r.indexOf(e=a[n])>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var E=s(),D=s();function R(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var r=1;arguments.length>r;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?R(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var A=function(t){var r=t.name,e=t.to,n=t.params,o=S(t,["name","to","params"]),a=D.current;if(!r||!a)return k(k({},o),{},{to:e});var c=e,u=(a.get(r)||{}).fullPath,f=j(u,n,!0);return e&&!l(e)||(c=f),i(e)&&(c=k(k({},e),{},{pathname:f})),p(e)&&(c=function(t){var r=k(k({},t),{},{pathname:f});return e(r)}),!c&&r&&(c="".concat(r)),k(k({},o),{},{to:c})},x=function(n){var o=n.route,a=void 0===o?{}:o,c=n.children,u=a.redirect,i=a.component,f=a.fullPath,l=t(),p=r(),s=l.pathname,y=j(f,p),O=u,m=D.current.get(u);return m&&(O=m.fullPath),(O=j(O,p))&&s===y&&s!==O?React.createElement(e,{from:f,to:O}):function(t){return!(!t||!(t.prototype&&t.prototype.isReactComponent||"object"===b(t)&&t.$$typeof||"function"==typeof t))}(i)?React.createElement(a.component,null,c):c},L=function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(r))return null;if(0===r.length)return null;var e=r.map((function(r,e){var n=r.routes,a=void 0===n?[]:n,c=r.fullPath,u=t(a);return React.createElement(o,{key:c||e,path:c,exact:0===a.length,strict:!0},React.createElement(x,{route:r},u))}));return React.createElement(a,null,e)},M=function(t){var r=t.routes,e=w(void 0===r?[]:r),o=e.routes;D&&(D.current=e.nameMapper);var a=L(o);return React.createElement(n,{ref:E},a)};function T(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var r=1;arguments.length>r;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?T(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):T(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var I=function(t){var e=r(),n=t.params,o=C(C({},S(t,["params"])),{},{params:C(C({},e),n)});return o=A(o),React.createElement(c,o)};function B(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var r=1;arguments.length>r;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?B(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):B(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var N=function(t){var e=r(),n=t.params,o=F(F({},S(t,["params"])),{},{params:F(F({},e),n)});return o=A(o),React.createElement(u,o)};function $(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Y(t){for(var r=1;arguments.length>r;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?$(Object(e),!0).forEach((function(r){g(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):$(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var U=function(){var t=r();return{navigateBack:y((function(){var t,r;null==E||null===(t=E.current)||void 0===t||null===(r=t.history)||void 0===r||r.goBack()}),[]),navigateTo:y((function(r,e){var n,o,a=(D.current.get(r)||{}).fullPath,c=j(a||r,Y(Y({},t),e),!0);if(!r)throw Error("You must specify a path to navigateTo function");c&&(null==E||null===(n=E.current)||void 0===n||null===(o=n.history)||void 0===o||o.push(c))}),[t]),redirectTo:y((function(r,e){var n,o,a=(D.current.get(r)||{}).fullPath,c=j(a||r,Y(Y({},t),e),!0);if(!r)throw Error("You must specify a path to navigateTo function");c&&(null==E||null===(n=E.current)||void 0===n||null===(o=n.history)||void 0===o||o.replace(c))}),[t])}},q=function(){var r=t().search.replace("?","").split("&").map((function(t){var r=m(t.split("="),2),e=r[0],n=r[1];return n==="".concat(parseFloat(n))?[e,parseFloat(n)]:[e,n]}));return Object.fromEntries(r)};export{M as ConfigRouter,N as Link,I as NavLink,D as nameMapperRef,E as navigationRef,U as useNavigate,q as useSearch};
