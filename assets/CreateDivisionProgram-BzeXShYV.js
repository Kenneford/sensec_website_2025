import{f as h,g as S,e as T,r as m,a as P,n as v,c9 as g,j as t,B as j,l as b,cb as y}from"./index-CL8aB76r.js";/* empty css               */import{T as F}from"./TaskAlt-S5e9RsjI.js";import{c as N}from"./muiStyling-Biny6EY4.js";import{L as E}from"./LoadingProgress-DrQz26HU.js";import{F as M}from"./FetchProgrammeData-Dhiaheji.js";import{G as x}from"./Grid-C0sdyGW0.js";import{M as $}from"./MenuItem-Ci3WSCxq.js";import"./FormLabel-DFf2C-vG.js";import"./index-DcfIKM1A.js";import"./useControlled-CyfcTk32.js";import"./useThemeProps-5fjUjDwy.js";import"./getThemeProps-BQ9MDSVY.js";import"./index-DvkxpYwK.js";import"./IconButton-zfBQ5iJg.js";function Q(){const i=h(S),o=M(),{createStatus:a,successMessage:l,error:r}=h(e=>e.programme),I=T(),[d,n]=m.useState(null),[s,f]=m.useState({programName:"",divisionName:"",programId:"",createdBy:`${i==null?void 0:i.id}`});console.log(s);const u=o==null?void 0:o.find(e=>e&&(e==null?void 0:e._id)===(s==null?void 0:s.programId));P();const p=e=>{f({...s,[e.target.name]:e.target.value})},C=!!s.divisionName&&!!s.programId,B=e=>{e.preventDefault();const c={programName:`${u==null?void 0:u.name}`,divisionName:s==null?void 0:s.divisionName,programId:s==null?void 0:s.programId,createdBy:`${i==null?void 0:i.id}`};I(y({data:c}))};return m.useEffect(()=>{if(a==="pending"&&n(!1),a==="rejected"){setTimeout(()=>{n(null)},3e3),setTimeout(()=>{var e,c;(c=(e=r==null?void 0:r.errorMessage)==null?void 0:e.message)==null||c.map(D=>v.error(D,{position:"top-right",theme:"dark",toastId:"createDivisionProgrammeError"})),g()},2e3);return}a==="success"&&(setTimeout(()=>{n(!0)},3e3),setTimeout(()=>{v.success(l,{position:"top-right",theme:"dark",toastId:l})},1e3),setTimeout(()=>{f({programName:"",divisionName:"",programId:"",createdBy:`${i==null?void 0:i.id}`}),g(),n(null)},6e3))},[r,l,a,i]),t.jsx(j,{sx:{width:{xs:"100%",sm:"85%",md:"75%",lg:"60%",xl:"50%"},margin:"auto",paddingTop:"2rem",display:"flex",flexDirection:"column"},className:"createDataWrap",children:t.jsxs(j,{component:"form",onSubmit:B,minHeight:220,p:2,children:[t.jsx("h1",{children:"Division Programme Form"}),t.jsxs(x,{container:!0,spacing:3,children:[t.jsx(x,{item:!0,xs:12,sm:6,md:6,lg:6,className:"inputCont",children:t.jsx(N,{fullWidth:!0,label:"Division Name",name:"divisionName",onChange:p,value:s.divisionName,required:!0,className:"textField",sx:{"&:hover":{borderColor:"none"}}})}),t.jsx(x,{item:!0,xs:12,sm:6,md:6,lg:6,children:t.jsx(N,{select:!0,fullWidth:!0,label:"Select Programme",name:"programId",value:s==null?void 0:s.programId,onChange:p,required:!0,children:o==null?void 0:o.map(e=>t.jsx($,{value:e==null?void 0:e._id,children:e==null?void 0:e.name},e==null?void 0:e._id))})})]}),t.jsxs(b,{type:"submit",disabled:!C,children:[d===!1&&t.jsx(E,{color:"#fff",size:"1.3rem"}),d===!0&&a==="success"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Successful"})," ",t.jsx(F,{})]}),d===null&&"Create Programme"]})]})})}export{Q as CreateDivisionProgram};
