import{f as G,g as Ae,a as ve,e as Ie,u as Ee,r as t,cC as W,n as N,i as I,cD as X,cE as z,cF as J,j as s,B as m,cG as Re,cH as Te,cI as we,cJ as De}from"./index-BgAz6R-J.js";/* empty css                   */import{X as Ce}from"./index.es-CbWliC7Q.js";import{N as Ne}from"./NewEmploymentModal-Dlv2FVoG.js";import{c as be}from"./usersInfoTableStyle-D7rSQ0GJ.js";import{a as Ue}from"./LinksFormat-DQzWvp0Y.js";import{a as Be}from"./FetchAdmins-uoJxoGz5.js";import{S as Le}from"./SearchFilter-BivGD2XO.js";import{p as ke}from"./UsersInfoDataFormat-C8uQnlpJ.js";import{G as Q}from"./Grid-LFq3_oT1.js";/* empty css               */import"./Stack-D3vGdk1Y.js";import"./styled-B4oIaKT5.js";import"./useThemeProps-JU6LSmm0.js";import"./getThemeProps-IXaZHU6q.js";/* empty css                   */import"./Search-BzpM2Jt_.js";import"./react-router-hash-link.esm-BD8c6mys.js";import"./Edit-D4CNqQj2.js";import"./TaskAlt-bfh00-md.js";import"./SchoolOutlined-FRPh5Qka.js";import"./DateFormatter-B-8qT63H.js";import"./DemotionsModal-ukhU6vqu.js";import"./index-CCyO3jyY.js";import"./Close-C57ZU4ps.js";function pt(){const l=G(Ae),k=ve(),Y=Ue(),o=Ie(),{approveEmploymentStatus:d,approveMultiEmploymentStatus:f,rejectEmploymentStatus:g,rejectMultiEmploymentStatus:h,successMessage:Pe,error:r}=G(e=>e.employment),{adminCurrentAction:j,adminCurrentLink:E,employees_link:b}=Ee(),[K,V]=t.useState(""),[Z,S]=t.useState(null),[ee,y]=t.useState(null),[te,R]=t.useState(null),[P,T]=t.useState(!1),[se,w]=t.useState(!1);console.log(P);const[oe,U]=t.useState(!1),[le,B]=t.useState(!1),[re,D]=t.useState(null),[i,ae]=t.useState("");t.useState("");const[ne,ie]=t.useState(!1),[ce,pe]=t.useState(!1),[me,ue]=t.useState(!1),[de,$]=t.useState(!1),[fe,ge]=t.useState(""),[he,je]=t.useState(""),a=Be(),c=a.filter(e=>{var n,p,u,L,H,_,q,F;return((p=(n=e==null?void 0:e.personalInfo)==null?void 0:n.firstName)==null?void 0:p.toLowerCase().includes(i))||((L=(u=e==null?void 0:e.personalInfo)==null?void 0:u.firstName)==null?void 0:L.includes(i))||((_=(H=e==null?void 0:e.personalInfo)==null?void 0:H.lastName)==null?void 0:_.toLowerCase().includes(i))||((F=(q=e==null?void 0:e.personalInfo)==null?void 0:q.lastName)==null?void 0:F.includes(i))}),x=a==null?void 0:a.find(e=>e._id===K),M=a==null?void 0:a.find(e=>e._id===fe),[A,C]=t.useState([]),[v,O]=t.useState(!1);console.log(A);const Se=e=>{var n;if(e){const p=(n=e==null?void 0:e.selectedRows)==null?void 0:n.map(u=>({uniqueId:u==null?void 0:u.uniqueId}));C(p)}else C([])},ye=ke({setCurrentAdmin:V,loadingComplete:Z,setLoadingComplete:S,rejectLoadingComplete:ee,setRejectLoadingComplete:y,authAdmin:l,foundAdmin:x,approveEmploymentStatus:d,rejectEmploymentStatus:g,openApproveEmploymentModal:ce,setOpenApproveEmploymentModal:pe,setRejectAdmin:ge,adminToReject:M,setOpenRejectModal:ie,openRejectModal:ne,setApprovalInProgress:T,approvalInProgress:P,rejectionInProgress:se,setRejectionInProgress:w});window.location.hash&&window.history.replaceState("",document.title,window.location.pathname);const xe=()=>{ue(!0),je("You're being redirected"),setTimeout(()=>{k(`/sensec/users/${l==null?void 0:l.uniqueId}/admin/${j}/new_employment`)},3e3)};t.useEffect(()=>{if(x&&!M){if(d==="pending"&&(S(!1),T(!0)),d==="rejected"){setTimeout(()=>{S(null),T(!1),o(W())},3e3),setTimeout(()=>{r.errorMessage.message.map(e=>N.error(e,{position:"top-right",theme:"dark"}))},2e3);return}d==="success"&&(setTimeout(()=>{S(!0)},3e3),setTimeout(()=>{o(W()),o(I()),T(!1),S(null)},6e3))}},[o,d,r,x,M]),t.useEffect(()=>{if(M&&!x){if(g==="pending"&&(y(!1),w(!0)),g==="rejected"){setTimeout(()=>{y(null),w(!1),o(X())},3e3),setTimeout(()=>{r.errorMessage.message.map(e=>N.error(e,{position:"top-right",theme:"dark"}))},2e3);return}g==="success"&&(setTimeout(()=>{y(!0)},3e3),setTimeout(()=>{y(null),w(!1),o(I()),o(X())},6e3))}},[o,g,r,M,x]),t.useEffect(()=>{if(f==="pending"&&R(!1),f==="rejected"){setTimeout(()=>{R(null),U(!1),o(z())},3e3),setTimeout(()=>{var e,n;(n=(e=r==null?void 0:r.errorMessage)==null?void 0:e.message)==null||n.map(p=>N.error(p,{position:"top-right",theme:"dark",toastId:"multiApprovalError"}))},2e3);return}f==="success"&&(setTimeout(()=>{R(!0),C([])},3e3),setTimeout(()=>{o(I()),o(I()),O(!v),o(z()),U(!1),R(null)},6e3))},[o,f,r,A,v]),t.useEffect(()=>{if(h==="pending"&&D(!1),h==="rejected"){setTimeout(()=>{D(null),B(!1),o(J())},3e3),setTimeout(()=>{var e,n;(n=(e=r==null?void 0:r.errorMessage)==null?void 0:e.message)==null||n.map(p=>N.error(p,{position:"top-right",theme:"dark",toastId:"multiRejectionError"}))},2e3);return}h==="success"&&(setTimeout(()=>{D(!0),C([])},3e3),setTimeout(()=>{D(null),O(!v),o(I()),B(!1),o(J())},6e3))},[o,h,r,A,v]);const Me=`All Pending Admins / Total = ${a==null?void 0:a.length}`;return s.jsxs(s.Fragment,{children:[s.jsxs(m,{component:"div",id:"adminDashboardHeaderWrap",sx:{position:"sticky",top:0,backgroundColor:"#fff",padding:0},minHeight:"4rem",children:[s.jsxs("h1",{className:"dashAction",children:[j==null?void 0:j.replace(/_/g,"-")," /"," ",s.jsx("span",{children:E==null?void 0:E.replace(/_/g," ")})]}),s.jsx(m,{sx:{display:{xs:"none",sm:"block"}},children:s.jsx(Le,{value:i,onChange:ae,placeholder:"Search"})})]}),s.jsxs(m,{className:"allAdminsData",id:"allAdmins",padding:{xs:" 1rem .5rem",sm:" 1rem"},children:[s.jsxs(m,{className:"searchDetails",children:[(c==null?void 0:c.length)===0&&i!==""&&s.jsxs("p",{className:"searchInfo",children:[`We couldn't find any matches for " `,i,' "']}),(c==null?void 0:c.length)===0&&i!==""&&s.jsx("p",{style:{paddingLeft:"1.5rem",display:"flex",alignItems:"center",color:"red"},children:"||"}),i&&s.jsxs("p",{className:"searchInfo",children:["Search Result = ",c.length]}),!i&&s.jsxs("p",{className:"searchInfo",children:["Total Admins = ",a.length]})]}),s.jsx(m,{children:s.jsxs(Q,{container:!0,spacing:3,className:"addNewAdminBtnsWrap",width:"100%",m:"0 auto",children:[Y.map(e=>s.jsx(Q,{component:"span",item:!0,xs:2.9,sm:2,onClick:()=>{e.label==="Add New Admin +"?$(!0):k(`/sensec/users/${l==null?void 0:l.uniqueId}/admin/${j}/${E}/employees/${e.label.replace(/ /g,"_")}`)},className:(b==null?void 0:b.replace(/_/g," "))===e.label?"adminDashBtn isActive":(e==null?void 0:e.label)==="Add New Admin +"?"adminDashAddBtn":"adminDashBtn",children:e.label==="All"?"All Employed Admins":e.label},e.label)),s.jsx(Ne,{open:de,onClose:()=>$(!1),handleNewEmployment:xe,redirecting:me,uncompletedEmploymentTask:he,question:"Are you sure you would like to employ a new Admin?"})]})}),s.jsxs(m,{sx:{display:"flex",gap:1,fontSize:"calc(0.7rem + 1vmin)"},children:[s.jsx(Re,{approveMultiUsersDataStatus:f,approveMultiUsersDataLoadingComplete:te,multiUsersDataRejectionInProgress:le,setMultiUsersDataApprovalInProgress:U,multiUsersDataApprovalFunction:Te({employees:A,employmentApprovedBy:`${l==null?void 0:l.id}`})}),s.jsx(we,{rejectMultiUsersDataStatus:h,rejectMultiUsersDataLoadingComplete:re,multiUsersDataApprovalInProgress:oe,setMultiUsersDataRejectionInProgress:B,multiUsersDataApprovalFunction:De({employees:A,employmentRejectedBy:`${l==null?void 0:l.id}`})})]}),s.jsx(m,{className:"adminDataTable",children:s.jsx(Ce,{title:Me,columns:ye,data:c,customStyles:be,pagination:!0,selectableRows:!0,fixedHeader:!0,selectableRowsHighlight:!0,highlightOnHover:!0,responsive:!0,onSelectedRowsChange:Se,clearSelectedRows:v})})]})]})}export{pt as PendingAdmins};