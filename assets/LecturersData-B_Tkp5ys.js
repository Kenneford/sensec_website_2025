import{f as $,g as Q,a as Y,e as z,r as l,u as J,n as K,cN as V,i as Z,j as s,B as c}from"./index-BgAz6R-J.js";/* empty css                      */import{X as ee}from"./index.es-CbWliC7Q.js";import{N as se}from"./NewEmploymentModal-Dlv2FVoG.js";import{c as te}from"./usersInfoTableStyle-D7rSQ0GJ.js";import{c as re}from"./LinksFormat-DQzWvp0Y.js";import{F as ae}from"./FetchLecturers-g06Qmz1E.js";import{t as le}from"./UsersInfoDataFormat-C8uQnlpJ.js";import{S as oe}from"./SearchFilter-BivGD2XO.js";import{F as ne}from"./FetchClassLevel-BNpuw00E.js";import{G as j}from"./Grid-LFq3_oT1.js";/* empty css               */import"./Stack-D3vGdk1Y.js";import"./styled-B4oIaKT5.js";import"./useThemeProps-JU6LSmm0.js";import"./getThemeProps-IXaZHU6q.js";import"./react-router-hash-link.esm-BD8c6mys.js";import"./Edit-D4CNqQj2.js";import"./TaskAlt-bfh00-md.js";import"./SchoolOutlined-FRPh5Qka.js";import"./DateFormatter-B-8qT63H.js";import"./DemotionsModal-ukhU6vqu.js";import"./index-CCyO3jyY.js";import"./Close-C57ZU4ps.js";/* empty css                   */import"./Search-BzpM2Jt_.js";function _e(){const t=$(Q),n=ae(),m=Y(),B=re(),g=z(),{removeLecturerStatus:u,error:x,successMessage:k}=$(e=>e.classSection),[N,L]=l.useState(!1),[C,p]=l.useState(null),[R,_]=l.useState(""),F=ne(),H=le({authAdmin:t,redirect:N,setRedirect:L,navigate:m,removeLecturerStatus:u,setRemovingLecturer:p,removingLecturer:C,dispatch:g,lecturerToAssign:R,setLecturerToAssign:_}),{adminCurrentAction:o,adminCurrentLink:i,class_level:M,employees_link:h}=J(),[a,q]=l.useState(""),r=n==null?void 0:n.filter(e=>{var d,f,T,b,v,w,A,y,D,I;return e&&((T=(f=(d=e==null?void 0:e.personalInfo)==null?void 0:d.firstName)==null?void 0:f.toLowerCase())==null?void 0:T.includes(a))||((v=(b=e==null?void 0:e.personalInfo)==null?void 0:b.firstName)==null?void 0:v.includes(a))||((y=(A=(w=e==null?void 0:e.personalInfo)==null?void 0:w.lastName)==null?void 0:A.toLowerCase())==null?void 0:y.includes(a))||((I=(D=e==null?void 0:e.personalInfo)==null?void 0:D.lastName)==null?void 0:I.includes(a))}),[E,U]=l.useState(!1),[W,S]=l.useState(!1),[G,O]=l.useState(""),P=()=>{U(!0),O("You're being redirected"),setTimeout(()=>{m(`/sensec/users/${t==null?void 0:t.uniqueId}/admin/${o}/new_employment`)},3e3)};l.useEffect(()=>{if(u==="pending"&&p(!1),u==="rejected"){setTimeout(()=>{var e,d;(d=(e=x==null?void 0:x.errorMessage)==null?void 0:e.message)==null||d.map(f=>K.error(f,{position:"top-right",theme:"light",toastId:f}))},2e3),setTimeout(()=>{p(null),g(V())},3e3);return}u==="success"&&(setTimeout(()=>{p(!0)},3e3),setTimeout(()=>{g(Z()),p(null)},6e3))},[m,g,u,x,k,o,i,t]),l.useEffect(()=>{N&&setTimeout(()=>{L(!1)},3e3)},[N]);const X=`All Employed Lecturers / Total = ${r==null?void 0:r.length}`;return s.jsxs(s.Fragment,{children:[s.jsxs(c,{component:"div",id:"adminDashboardHeaderWrap",sx:{position:"sticky",top:0,backgroundColor:"#fff",padding:0},minHeight:"4rem",children:[s.jsxs("h1",{className:"dashAction",children:[o==null?void 0:o.replace(/_/g,"-")," /"," ",s.jsx("span",{children:i==null?void 0:i.replace(/_/g," ")})]}),s.jsx(c,{sx:{display:{xs:"none",sm:"block"}},children:s.jsx(oe,{value:a,onChange:q,placeholder:"Search"})})]}),s.jsxs(c,{className:"allAdminsData",id:"allAdmins",padding:{xs:" 1rem .5rem",sm:" 1rem"},children:[s.jsxs(c,{className:"searchDetails",children:[(r==null?void 0:r.length)===0&&a!==""&&s.jsxs("p",{className:"searchInfo",children:["We couldn't find any matches for '",a,"'"]}),(r==null?void 0:r.length)===0&&a!==""&&s.jsx("p",{style:{paddingLeft:"1.5rem",display:"flex",alignItems:"center",color:"red"},children:"||"}),a&&s.jsxs("p",{className:"searchInfo",children:["Search Result = ",r.length]}),!a&&s.jsxs("p",{className:"searchInfo",children:["Total Lecturers = ",n==null?void 0:n.length]})]}),s.jsx(c,{children:s.jsxs(j,{container:!0,spacing:3,className:"addNewAdminBtnsWrap",width:"100%",m:"0 auto",children:[B.map(e=>s.jsx(j,{component:"span",item:!0,xs:2.9,sm:2,onClick:()=>{e.label==="Add New Lecturer +"?S(!0):m(`/sensec/users/${t==null?void 0:t.uniqueId}/admin/${o}/${i}/employees/${e.label.replace(/ /g,"_")}`)},className:(h==null?void 0:h.replace(/_/g," "))===e.label?"adminDashBtn isActive":(e==null?void 0:e.label)==="Add New Lecturer +"?"adminDashAddBtn":"adminDashBtn",children:e.label==="All"?"All Employed Lecturers":e.label},e.label)),s.jsx(se,{open:W,onClose:()=>S(!1),handleNewEmployment:P,redirecting:E,uncompletedEmploymentTask:G,question:"Are you sure you would like to employ a new Lecturer?"})]})}),s.jsx(j,{container:!0,spacing:3,width:"100%",m:"0 auto",className:"classLevelLecturers",children:F.map(e=>s.jsx(j,{component:"span",item:!0,xs:2.9,sm:2,onClick:()=>m(`/sensec/users/${t==null?void 0:t.uniqueId}/admin/${o}/${i}/employees/${h}/${e.name.replace(/ /g,"_")}`),className:e.name===M?"classLevelLecturersBtn isActive":"classLevelLecturersBtn",children:e.name},e._id))}),s.jsx(c,{className:"lecturerDataTable",children:s.jsx(ee,{title:X,columns:H,data:r,customStyles:te,pagination:!0,selectableRows:!0,fixedHeader:!0,selectableRowsHighlight:!0,highlightOnHover:!0,responsive:!0})})]})]})}export{_e as LecturersData};