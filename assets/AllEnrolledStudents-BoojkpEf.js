import{f as M,g as ie,e as me,a as ce,u as ue,r as o,cO as P,n as F,i as de,j as s,B as m}from"./index-CL8aB76r.js";import{X as pe}from"./index.es-BbMtkD1E.js";import{c as he}from"./usersInfoTableStyle-D7rSQ0GJ.js";import{d as ge}from"./LinksFormat-DQzWvp0Y.js";import{F as fe}from"./FetchAllStudents-DcT4Vh_v.js";import{s as xe}from"./UsersInfoDataFormat-Bi18O2Bc.js";import{S as Se}from"./SearchFilter-CgDWyRwC.js";import{F as je}from"./FetchClassLevel-Bq1fN1Fd.js";import{N as Ne}from"./NewEnrollmentModal-Cczk8Wir.js";import{G as h}from"./Grid-C0sdyGW0.js";import"./react-router-hash-link.esm-B89W9L0I.js";import"./Edit-kyd4yOMZ.js";import"./TaskAlt-S5e9RsjI.js";import"./SchoolOutlined-DO3mvWS8.js";import"./DateFormatter-B-8qT63H.js";import"./DemotionsModal-C2-M0s41.js";import"./index-C29gN_Wn.js";import"./Close-DXFNgs9K.js";/* empty css                   */import"./Search-QY5huDaQ.js";/* empty css               */import"./Stack-DmUJKXZk.js";import"./styled-DCaZBxMP.js";import"./useThemeProps-5fjUjDwy.js";import"./getThemeProps-BQ9MDSVY.js";function Je(){const n=M(ie),A=ge(),t=fe(),_=je(),{promotionStatus:c,successMessage:j,error:g}=M(e=>e.promotion),f=me(),x=ce(),{adminCurrentLink:r,adminCurrentAction:i,class_level:N,student_category:S}=ue(),[R,q]=o.useState(""),[H,L]=o.useState(""),[O,G]=o.useState(!1),[U,W]=o.useState(!1),[X,I]=o.useState(!1),[Q,Ie]=o.useState(!1),[Y,u]=o.useState(null),[z,J]=o.useState(null),[a,K]=o.useState(""),[De,V]=o.useState([]),[Z,w]=o.useState(!1),[v,ee]=o.useState(!1),[se,te]=o.useState(""),D=t==null?void 0:t.find(e=>(e==null?void 0:e._id)===R),oe=t==null?void 0:t.find(e=>(e==null?void 0:e._id)===H),l=t==null?void 0:t.filter(e=>{var d,p,$,b,C,T,E,k,y,B;return(($=(p=(d=e==null?void 0:e.personalInfo)==null?void 0:d.firstName)==null?void 0:p.toLowerCase())==null?void 0:$.includes(a))||((C=(b=e==null?void 0:e.personalInfo)==null?void 0:b.firstName)==null?void 0:C.includes(a))||((k=(E=(T=e==null?void 0:e.personalInfo)==null?void 0:T.lastName)==null?void 0:E.toLowerCase())==null?void 0:k.includes(a))||((B=(y=e==null?void 0:e.personalInfo)==null?void 0:y.lastName)==null?void 0:B.includes(a))}),ne=xe({authAdmin:n,studentToPromote:D,adminCurrentAction:i,adminCurrentLink:r,setOpenPromotionModal:G,openPromotionModal:O,setCurrentStudent:q,setDemoteStudent:L,setLoadingComplete:u,loadingComplete:Y,setDemotionLoadingComplete:J,demotionLoadingComplete:z,demotionInProgress:Q,promotionInProgress:X,setOpenDemotionModal:W,openDemotionModal:U,promotionStatus:c,studentToDemote:oe}),ae=e=>{V(e.selectedRows)},le=()=>{ee(!0),te("You're being redirected"),setTimeout(()=>{x(`/sensec/users/${n==null?void 0:n.uniqueId}/admin/${i}/${r}/new_enrollment/placement_verification`)},3e3)};o.useEffect(()=>{if(D){if(c==="pending"&&(u(!1),I(!1)),c==="rejected"){setTimeout(()=>{u(null),I(!1),f(P())},3e3),setTimeout(()=>{var e,d;(d=(e=g==null?void 0:g.errorMessage)==null?void 0:e.message)==null||d.map(p=>F.error(p,{position:"top-right",theme:"light",toastId:p}))},2e3);return}c==="success"&&(setTimeout(()=>{u(!0)},3e3),setTimeout(()=>{F.success(j,{position:"top-right",theme:"dark",toastId:j})},1e3),setTimeout(()=>{f(de()),f(P()),I(!1),u(null)},6e3))}},[c,j,g,f,D]);const re=`All Enrolled Students / Total = ${t==null?void 0:t.length}`;return s.jsxs(s.Fragment,{children:[s.jsxs(m,{component:"div",id:"adminDashboardHeaderWrap",sx:{position:"sticky",top:0,backgroundColor:"#fff",padding:0},minHeight:"4rem",children:[s.jsxs("h1",{className:"dashAction",children:[i==null?void 0:i.replace(/_/g,"-")," /"," ",s.jsx("span",{children:r==null?void 0:r.replace(/_/g," ")})]}),s.jsx(m,{sx:{display:{xs:"none",sm:"block"}},children:s.jsx(Se,{value:a,onChange:K,placeholder:"Search"})})]}),s.jsxs(m,{className:"allStudentsData",padding:{xs:" 1rem .5rem",sm:" 1rem"},children:[s.jsxs(m,{className:"searchDetails",justifyItems:"flex-start",children:[(l==null?void 0:l.length)===0&&a!==""&&s.jsxs("p",{className:"searchInfo",children:[`We couldn't find any matches for "`,a,'"']}),(l==null?void 0:l.length)===0&&a!==""&&s.jsx("p",{style:{paddingLeft:"1.5rem",display:"flex",alignItems:"center",color:"red"},children:"||"}),a&&s.jsxs("p",{className:"searchInfo",children:["Total Enrolled Students Found = ",l==null?void 0:l.length]}),!a&&s.jsxs("p",{className:"searchInfo",children:["Total Students = ",t==null?void 0:t.length]})]}),s.jsx(m,{children:s.jsxs(h,{container:!0,spacing:3,className:"addNewStudentBtnsWrap",width:"100%",m:"0 auto",children:[A.map(e=>s.jsx(h,{component:"span",item:!0,xs:2.9,sm:2,onClick:()=>{e.label==="Add New Student +"?w(!0):x(`/sensec/users/${n==null?void 0:n.uniqueId}/admin/${i}/${r}/${e.label.replace(/ /g,"_")}`)},className:(S==null?void 0:S.replace(/_/g," "))===e.label?"studentDashBtn isActive":(e==null?void 0:e.label)==="Add New Student +"?"studentDashAddBtn":"studentDashBtn",children:e.label==="Enrolled"?"All Enrolled Students":e.label},e.label)),s.jsx(Ne,{open:Z,onClose:()=>w(!1),handleNewEnrollment:le,redirecting:v,uncompletedEmploymentTask:se,question:"Are you sure you would like to enroll a new student?"})]})}),s.jsx(m,{children:s.jsx(h,{container:!0,spacing:3,width:"100%",m:"0 auto",className:"classLevelStudents",children:s.jsxs(s.Fragment,{children:[_.map(e=>s.jsx(h,{component:"span",item:!0,xs:2.9,sm:2,onClick:()=>x(`/sensec/users/${n==null?void 0:n.uniqueId}/admin/${i}/${r}/${S}/${e.name.replace(/ /g,"_")}`),className:(e==null?void 0:e.name)===(N==null?void 0:N.replace(/_/g," "))?"classLevelStudentsBtn isActive":"classLevelStudentsBtn",children:e.name},e.name)),s.jsx(h,{component:"span",item:!0,xs:2.9,sm:2,onClick:()=>x(`/sensec/users/${n==null?void 0:n.uniqueId}/admin/${i}/${r}/Graduates`),className:"classLevelStudentsBtn",children:"Graduates"})]})})}),s.jsx(m,{className:"studentDataTable",children:s.jsx(pe,{title:re,columns:ne,data:l,customStyles:he,pagination:!0,selectableRows:!0,fixedHeader:!0,selectableRowsHighlight:!0,highlightOnHover:!0,responsive:!0,onSelectedRowsChange:ae})})]})]})}export{Je as AllEnrolledStudents};
