import{f as R,g as _,a as F,e as q,u as L,r as m,j as s,B as o}from"./index-CL8aB76r.js";/* empty css                     */import{X as M}from"./index.es-BbMtkD1E.js";import{N as U}from"./NewEmploymentModal-DmTBdVj7.js";import{c as W}from"./usersInfoTableStyle-D7rSQ0GJ.js";import{b as E}from"./LinksFormat-DQzWvp0Y.js";import{n as G}from"./UsersInfoDataFormat-Bi18O2Bc.js";import{F as O}from"./FetchNT-Staffs-CpN3tFoh.js";import{S as P}from"./SearchFilter-CgDWyRwC.js";import{G as w}from"./Grid-C0sdyGW0.js";/* empty css               */import"./Stack-DmUJKXZk.js";import"./styled-DCaZBxMP.js";import"./useThemeProps-5fjUjDwy.js";import"./getThemeProps-BQ9MDSVY.js";import"./react-router-hash-link.esm-B89W9L0I.js";import"./Edit-kyd4yOMZ.js";import"./TaskAlt-S5e9RsjI.js";import"./SchoolOutlined-DO3mvWS8.js";import"./DateFormatter-B-8qT63H.js";import"./DemotionsModal-C2-M0s41.js";import"./index-C29gN_Wn.js";import"./Close-DXFNgs9K.js";/* empty css                   */import"./Search-QY5huDaQ.js";function he(){const l=R(_),t=O(),d=F(),y=E();q();const{adminCurrentAction:n,adminCurrentLink:i,class_level:X,employees_link:p}=L(),[r,A]=m.useState(""),a=t==null?void 0:t.filter(e=>{var f,u,g,x,N,h,S,j,b,T;return e&&((g=(u=(f=e==null?void 0:e.personalInfo)==null?void 0:f.firstName)==null?void 0:u.toLowerCase())==null?void 0:g.includes(r))||((N=(x=e==null?void 0:e.personalInfo)==null?void 0:x.firstName)==null?void 0:N.includes(r))||((j=(S=(h=e==null?void 0:e.personalInfo)==null?void 0:h.lastName)==null?void 0:S.toLowerCase())==null?void 0:j.includes(r))||((T=(b=e==null?void 0:e.personalInfo)==null?void 0:b.lastName)==null?void 0:T.includes(r))}),[D,I]=m.useState(""),[v,c]=m.useState(!1),[k,B]=m.useState(""),$=G(i,l),C=()=>{I(!0),B("You're being redirected"),setTimeout(()=>{d(`/sensec/users/${l==null?void 0:l.uniqueId}/admin/${n}/new_employment`)},3e3)},H=`All Employed NT-Staffs / Total = ${a==null?void 0:a.length}`;return s.jsxs(s.Fragment,{children:[s.jsxs(o,{component:"div",id:"adminDashboardHeaderWrap",sx:{position:"sticky",top:0,backgroundColor:"#fff",padding:0},minHeight:"4rem",children:[s.jsxs("h1",{className:"dashAction",children:[n==null?void 0:n.replace(/_/g,"-")," /"," ",s.jsx("span",{children:i==null?void 0:i.replace(/_/g," ")})]}),s.jsx(o,{sx:{display:{xs:"none",sm:"block"}},children:s.jsx(P,{value:r,onChange:A,placeholder:"Search"})})]}),s.jsxs(o,{className:"allAdminsData",id:"allAdmins",padding:{xs:" 1rem .5rem",sm:" 1rem"},children:[s.jsxs(o,{className:"searchDetails",children:[(a==null?void 0:a.length)===0&&r!==""&&s.jsxs("p",{className:"searchInfo",children:["We couldn't find any matches for '",r,"'"]}),(a==null?void 0:a.length)===0&&r!==""&&s.jsx("p",{style:{paddingLeft:"1.5rem",display:"flex",alignItems:"center",color:"red"},children:"||"}),r&&s.jsxs("p",{className:"searchInfo",children:["Search Result = ",a.length]}),!r&&s.jsxs("p",{className:"searchInfo",children:["Total NT-Staffs = ",t==null?void 0:t.length]})]}),s.jsx(o,{children:s.jsxs(w,{container:!0,spacing:3,className:"addNewAdminBtnsWrap",width:"100%",m:"0 auto",children:[y.map(e=>s.jsx(w,{component:"span",item:!0,xs:2.9,sm:2,onClick:()=>{e.label==="Add New NT-Staff +"?c(!0):d(`/sensec/users/${l==null?void 0:l.uniqueId}/admin/${n}/${i}/employees/${e.label.replace(/ /g,"_")}`)},className:(p==null?void 0:p.replace(/_/g," "))===e.label?"adminDashBtn isActive":(e==null?void 0:e.label)==="Add New NT-Staff +"?"adminDashAddBtn":"adminDashBtn",children:e.label==="All"?"All Employed NT-Staffs":e.label},e.label)),s.jsx(U,{open:v,onClose:()=>c(!1),handleNewEmployment:C,redirecting:D,uncompletedEmploymentTask:k,question:"Are you sure you would like to employ a new NT-Staff?"})]})}),s.jsx(o,{className:"lecturerDataTable",children:s.jsx(M,{title:H,columns:$,data:a,customStyles:W,pagination:!0,selectableRows:!0,fixedHeader:!0,selectableRowsHighlight:!0,highlightOnHover:!0,responsive:!0})})]})]})}export{he as NTStaffsData};
