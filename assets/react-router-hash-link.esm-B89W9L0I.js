import{R as v,G as O,ao as b}from"./index-CL8aB76r.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s.apply(this,arguments)};function k(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}var a="",u=null,f=null,y=null;function d(){a="",u!==null&&u.disconnect(),f!==null&&(window.clearTimeout(f),f=null)}function m(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],r=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||r.includes(t.tagName)&&t.hasAttribute("href")}function h(){var t=null;if(a==="#")t=document.body;else{var e=a.replace("#","");t=document.getElementById(e),t===null&&a==="#top"&&(t=document.body)}if(t!==null){y(t);var r=t.getAttribute("tabindex");return r===null&&!m(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),r===null&&!m(t)&&(t.blur(),t.removeAttribute("tabindex")),d(),!0}return!1}function A(t){window.setTimeout(function(){h()===!1&&(u===null&&(u=new MutationObserver(h)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout(function(){d()},t||1e4))},0)}function g(t){return v.forwardRef(function(e,r){var n="";typeof e.to=="string"&&e.to.includes("#")?n="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(n=e.to.hash);var i={};t===b&&(i.isActive=function(l,c){return l&&l.isExact&&c.hash===n});function o(l){d(),a=e.elementId?"#"+e.elementId:n,e.onClick&&e.onClick(l),a!==""&&!l.defaultPrevented&&l.button===0&&(!e.target||e.target==="_self")&&!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&(y=e.scroll||function(c){return e.smooth?c.scrollIntoView({behavior:"smooth"}):c.scrollIntoView()},A(e.timeout))}var w=k(e,["scroll","smooth","timeout","elementId"]);return v.createElement(t,s({},i,w,{onClick:o,ref:r}),e.children)})}var T=g(O),I=g(b);export{T as H,I as N};
