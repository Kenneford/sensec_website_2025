import{F as c,j as s,f as h,g as x,u as f,r as a,B as j,bN as L,P as S}from"./index-CL8aB76r.js";/* empty css                */import{E as b}from"./ExpandMore-DT9CsP_O.js";import{E as g}from"./ExpandLess-BnlJnJ9a.js";import{H as E}from"./react-router-hash-link.esm-B89W9L0I.js";import{f as N}from"./muiStyling-Biny6EY4.js";import{E as k}from"./Edit-kyd4yOMZ.js";import"./FormLabel-DFf2C-vG.js";import"./index-DcfIKM1A.js";import"./useControlled-CyfcTk32.js";import"./useThemeProps-5fjUjDwy.js";import"./getThemeProps-BQ9MDSVY.js";import"./index-DvkxpYwK.js";import"./IconButton-zfBQ5iJg.js";const H=c(s.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"}),"Help"),C=c(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person"),I=[{name:"Profile"},{name:"Edit"},{name:"Settings"},{name:"Help"}];function P({hovered:n}){const t=h(x),{adminCurrentLink:m}=f(),[o,p]=a.useState(!1),[d,l]=a.useState(0),r=a.useRef(null);a.useEffect(()=>{r.current&&l(r.current.scrollHeight)},[]);const u=()=>{p(!o)};return window.location.hash&&window.history.replaceState("",document.title,window.location.pathname),s.jsxs(s.Fragment,{children:[s.jsxs(j,{component:"button",className:n?"sidebarLinksTitle":"sidebarLinksTitle closed",onClick:u,children:[s.jsx("h5",{className:"dashboardSidebarLinksTitle",children:"Account"}),o?s.jsx(g,{className:"expandMoreIcon"}):s.jsx(b,{className:"expandMoreIcon"})]}),s.jsx(N,{isExpanded:o,contentHeight:d,className:n?"sidebarContentLinks":"sidebarContentLinks closed",children:s.jsx("div",{ref:r,className:"allSidebarLinksWrap",children:I.map(e=>{var i;return s.jsxs(E,{to:`/sensec/users/${t==null?void 0:t.uniqueId}/admin/Account/${e.name.replace(/ /g,"_")}`,className:((i=e.name)==null?void 0:i.replace(/ /g,"_"))===m?"currentAdminSidebarLink":"notCurrentAdminSidebarLink",smooth:!0,title:n?"":e.name,children:[e.name==="Profile"&&s.jsx(C,{className:"icon"}),e.name==="Edit"&&s.jsx(k,{className:"icon"}),e.name==="Settings"&&s.jsx(L,{className:"icon"}),e.name==="Help"&&s.jsx(H,{className:"icon"}),n&&s.jsx("h4",{children:e.name})]},e.name)})})})]})}P.propTypes={hovered:S.bool};export{P as AccountLinks};
