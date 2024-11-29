import{f as q,bR as K,e as Q,r as d,bS as V,u as Z,j as t,B as r,G as $}from"./index-CL8aB76r.js";import{E as T}from"./Edit-kyd4yOMZ.js";import{D as S}from"./DeleteForever-BHsyWczw.js";import{T as E}from"./TaskAlt-S5e9RsjI.js";import{X as P}from"./index.es-BbMtkD1E.js";import{F as o}from"./FetchProgrammeData-Dhiaheji.js";import{g as w}from"./FetchAllStudents-DcT4Vh_v.js";import{d as ee}from"./FetchLecturers-MCgcX9AR.js";const H=()=>{const l=q(K),i=Q();return d.useEffect(()=>{i(V())},[i]),l},te=()=>{const l=H();return l==null?void 0:l.filter(n=>{var m;return n&&((m=n==null?void 0:n.electiveSubInfo)==null?void 0:m.isElectiveSubject)&&n})},se=()=>{const l=H();return l==null?void 0:l.filter(n=>{var m;return n&&((m=n==null?void 0:n.coreSubInfo)==null?void 0:m.isCoreSubject)&&n})};function be(){const{adminCurrentAction:l,adminCurrentLink:i}=Z(),[n,m]=d.useState(!1),[c,ae]=d.useState(null),[le,_]=d.useState(!1),[ne,v]=d.useState(!1),[ce,C]=d.useState(!1),[I,D]=d.useState(""),[ie,F]=d.useState(""),[de,A]=d.useState(""),[me,O]=d.useState(""),R="",b=o(),L=H(),y=te(),N=se(),g=b.find(e=>e._id===I),x=y.find(e=>e._id===I),B=N.find(e=>e._id===I),U="",k={headRow:{style:{backgroundColor:"#555",color:"#fff"}},headColumn:{style:{border:"1rem solid red"}},headCells:{style:{display:"flex",justifyContent:"center",fontSize:"1.2rem"}},cells:{style:{display:"flex",justifyContent:"center",paddingTop:".5rem",paddingBottom:".5rem",fontSize:"1rem"}}},z=[{name:"Programme",selector:e=>e!=null&&e.name?e==null?void 0:e.name:"---"},{name:"Code",selector:e=>e!=null&&e.code?e==null?void 0:e.code:"---",sortable:!0},{name:"Divisions",selector:e=>{var s;return e!=null&&e.programDivisions?(s=e==null?void 0:e.programDivisions)==null?void 0:s.length:"---"},sortable:!0},{name:"Students",selector:e=>{const s=w(e==null?void 0:e._id);return t.jsx("p",{children:s==null?void 0:s.length})}},{name:"Teachers",selector:e=>{const s=ee(e==null?void 0:e._id);return t.jsx("p",{children:s==null?void 0:s.length})},sortable:!0},{name:"Duration",selector:e=>e!=null&&e.duration?e==null?void 0:e.duration:"---"},{name:"CreatedBy",selector:e=>{var s,a,u,h,p,j,f;return t.jsx("p",{title:((u=(a=(s=e==null?void 0:e.createdBy)==null?void 0:s.personalInfo)==null?void 0:a.fullName)==null?void 0:u.length)>20?(p=(h=e==null?void 0:e.createdBy)==null?void 0:h.personalInfo)==null?void 0:p.fullName:"",children:e!=null&&e.createdBy?(f=(j=e==null?void 0:e.createdBy)==null?void 0:j.personalInfo)==null?void 0:f.fullName:"---"})}},{name:"Last Updated By",selector:e=>{var s,a;return e!=null&&e.lastUpdatedBy?(a=(s=e==null?void 0:e.lastUpdatedBy)==null?void 0:s.personalInfo)==null?void 0:a.fullName:"---"}},{name:"Edit",selector:e=>t.jsx($,{className:"editLink",to:`/sensec/admin/${l}/${i}/Programme/${e==null?void 0:e.name.replace(/ /g,"_")}/edit`,children:t.jsx(T,{})})},{name:"Delete",selector:e=>t.jsx(t.Fragment,{children:t.jsxs("button",{onClick:async()=>{D(e._id),F(e==null?void 0:e.name),m(!0),_(!0),v(!1),C(!1)},className:"deleteLink",children:[g&&(g==null?void 0:g._id)===e._id&&t.jsxs(t.Fragment,{children:[c===!1&&"Deleting...",c&&R==="success"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Deleted"})," ",t.jsx(E,{})]})]}),c===null&&t.jsx(S,{}),e._id!==(g==null?void 0:g._id)&&c!==null&&t.jsx(S,{})]})})}],M=[{name:"Subject",selector:e=>e!=null&&e.subjectName?t.jsx("p",{title:e==null?void 0:e.subjectName,children:e==null?void 0:e.subjectName}):t.jsx("p",{children:"---"})},{name:"Programme",selector:e=>{var s,a;return e!=null&&e.electiveSubInfo?(a=(s=e==null?void 0:e.electiveSubInfo)==null?void 0:s.programId)==null?void 0:a.name:"---"},sortable:!0},{name:"Teachers",selector:e=>{var s;return e!=null&&e.teachers?(s=e==null?void 0:e.teachers)==null?void 0:s.length:"---"},sortable:!0},{name:"Optional",selector:e=>{var s;return(s=e==null?void 0:e.electiveSubInfo)!=null&&s.isOptional?"Yes":"No"}},{name:"CreatedBy",selector:e=>{var s,a,u,h,p,j,f;return t.jsx("p",{title:((u=(a=(s=e==null?void 0:e.createdBy)==null?void 0:s.personalInfo)==null?void 0:a.fullName)==null?void 0:u.length)>20?(p=(h=e==null?void 0:e.createdBy)==null?void 0:h.personalInfo)==null?void 0:p.fullName:"",children:e!=null&&e.createdBy?(f=(j=e==null?void 0:e.createdBy)==null?void 0:j.personalInfo)==null?void 0:f.fullName:"---"})}},{name:"Last Updated By",selector:e=>{var s,a;return e!=null&&e.lastUpdatedBy?(a=(s=e==null?void 0:e.lastUpdatedBy)==null?void 0:s.personalInfo)==null?void 0:a.fullName:"---"}},{name:"Edit",selector:e=>t.jsx($,{className:"editLink",to:`/sensec/admin/${l}/${i}/Subject/${e==null?void 0:e.subjectName.replace(/ /g,"_")}/edit`,children:t.jsx(T,{})})},{name:"Delete",selector:e=>t.jsxs("button",{onClick:async()=>{var s;D(e._id),F(e==null?void 0:e.subjectName),A(e==null?void 0:e.nameOfProgram),O((s=e==null?void 0:e.classLevel)==null?void 0:s._id),m(!0),_(!1),v(!0),C(!1)},className:"deleteLink",children:[x&&(x==null?void 0:x._id)===e._id&&t.jsxs(t.Fragment,{children:[c===!1&&"Deleting...",c&&U==="success"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Deleted"})," ",t.jsx(E,{})]})]}),c===null&&t.jsx(S,{}),e._id!==(x==null?void 0:x._id)&&c!==null&&t.jsx(S,{})]})}],W=[{name:"Subject",selector:e=>e!=null&&e.subjectName?t.jsx("p",{title:e==null?void 0:e.subjectName,children:e==null?void 0:e.subjectName}):t.jsx("p",{children:"---"})},{name:"Teachers",selector:e=>{var s;return e!=null&&e.teachers?(s=e==null?void 0:e.teachers)==null?void 0:s.length:"---"},sortable:!0},{name:"CreatedBy",selector:e=>{var s,a,u,h,p,j,f;return t.jsx("p",{title:((u=(a=(s=e==null?void 0:e.createdBy)==null?void 0:s.personalInfo)==null?void 0:a.fullName)==null?void 0:u.length)>20?(p=(h=e==null?void 0:e.createdBy)==null?void 0:h.personalInfo)==null?void 0:p.fullName:"",children:e!=null&&e.createdBy?(f=(j=e==null?void 0:e.createdBy)==null?void 0:j.personalInfo)==null?void 0:f.fullName:"---"})}},{name:"Last Updated By",selector:e=>{var s,a;return e!=null&&e.lastUpdatedBy?(a=(s=e==null?void 0:e.lastUpdatedBy)==null?void 0:s.personalInfo)==null?void 0:a.fullName:"---"}},{name:"Edit",selector:e=>t.jsx($,{className:"editLink",to:`/sensec/admin/${l}/${i}/Subject/${e==null?void 0:e.subjectName.replace(/ /g,"_")}/edit`,children:t.jsx(T,{})})},{name:"Delete",selector:e=>t.jsx(t.Fragment,{children:t.jsxs("button",{onClick:async()=>{D(e._id),F(e==null?void 0:e.subjectName),m(!0),_(!1),v(!1),C(!0)},className:"deleteLink",children:[B&&B._id===e._id&&t.jsxs(t.Fragment,{children:[c===!1&&"Deleting...",c&&U==="success"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Deleted"})," ",t.jsx(E,{})]})]}),c===null&&t.jsx(S,{}),e._id!==(B==null?void 0:B._id)&&c!==null&&t.jsx(S,{})]})})}],X=`All Programmes / Total = ${b==null?void 0:b.length}`,G=`All Subjects / Total = ${L==null?void 0:L.length}`,J=`Elective Subjects / Total = ${y==null?void 0:y.length}`,Y=`Core Subjects / Total = ${N==null?void 0:N.length}`;return t.jsxs(t.Fragment,{children:[t.jsx(r,{component:"div",id:"adminDashboardHeaderWrap",sx:{position:"sticky",top:0,backgroundColor:"#fff",padding:0},minHeight:"4rem",children:t.jsxs("h1",{className:"dashAction",children:[l==null?void 0:l.replace(/_/g,"-")," /"," ",t.jsx("span",{children:i==null?void 0:i.replace(/_/g," ")})]})}),t.jsxs(r,{className:"programDataWrap",children:[t.jsx("h2",{children:X}),t.jsx(r,{className:"programDataCont",children:t.jsx(P,{columns:z,data:b,customStyles:k,pagination:!0,fixedHeader:!0,highlightOnHover:!0,responsive:!0})}),t.jsx("h2",{className:"allSubjectsh2",children:G}),t.jsx("h4",{children:Y}),t.jsx(r,{className:"programDataCont",children:t.jsx(P,{columns:W,data:N,customStyles:k,pagination:!0,fixedHeader:!0,highlightOnHover:!0,responsive:!0})}),t.jsx("h4",{className:"electiveSubJHead",children:J}),t.jsx(r,{className:"programDataCont",children:t.jsx(P,{columns:M,data:y,customStyles:k,pagination:!0,fixedHeader:!0,highlightOnHover:!0,responsive:!0})})]})]})}export{be as SchoolProgrammesData};
