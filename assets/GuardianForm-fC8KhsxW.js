import{f,g as y,u as F,a0 as I,r as o,e as z,a as E,a2 as P,n as b,j as e,B as S,T as R,l as q,db as D}from"./index-CL8aB76r.js";/* empty css                        */import{L as k}from"./LoadingProgress-DrQz26HU.js";import{R as L}from"./Redirection-C_WW2eLG.js";import{C as M,c as p}from"./muiStyling-Biny6EY4.js";import{G as a}from"./Grid-C0sdyGW0.js";import{T as $}from"./TaskAlt-S5e9RsjI.js";import"./FormLabel-DFf2C-vG.js";import"./index-DcfIKM1A.js";import"./useControlled-CyfcTk32.js";import"./useThemeProps-5fjUjDwy.js";import"./getThemeProps-BQ9MDSVY.js";import"./index-DvkxpYwK.js";import"./IconButton-zfBQ5iJg.js";function te(){f(y);const{studentId:r}=F();console.log(r);const g=f(I);localStorage.getItem("indexNumber");const x=g.find(s=>s.enrollmentId===r),N=g.find(s=>s.enrollmentId===r),v={},{createStatus:n,error:i,successMessage:C}=f(s=>s.student),[l,d]=o.useState(null),[h,T]=o.useState(!1),m=z(),j=E(),[t,B]=o.useState({studentId:r,guardianName:"",email:"",address:"",mobile:""}),u=s=>{B({...t,[s.target.name]:s.target.value})};t.guardianName&&t.email&&t.address&&t.mobile;const W=s=>{if(s.preventDefault(),d(!1),r){const c={studentId:r,indexNumber:x==null?void 0:x.jhsIndexNo,guardianName:t.guardianName,email:t.email,address:t.address,mobile:t.mobile};m(D(c))}else{b.error("Your ID Was Not Found!",{position:"top-right",theme:"light"});return}};return o.useEffect(()=>{m(P())},[m]),o.useEffect(()=>{if(n==="pending"&&d(!1),n==="rejected"){setTimeout(()=>{d(null)},3e3),setTimeout(()=>{var s,c;(c=(s=i==null?void 0:i.errorMessage)==null?void 0:s.message)==null||c.map(A=>b.error(A,{position:"top-right",theme:"light"}))},2e3);return}n==="success"&&(setTimeout(()=>{d(!0)},3e3),setTimeout(()=>{T(!0)},6e3),setTimeout(()=>{j(`/sensec/students/${r}/enrollment/online/success`)},9e3))},[j,m,n,i,C,l,N,v,r]),e.jsxs(M,{component:"div",id:"parentWrap",sx:{px:{xs:".5rem",sm:"auto"}},children:[e.jsx("h1",{style:{textAlign:"center",color:"#696969",fontSize:"1.5rem"},children:"Student Guardian Form"}),e.jsx(S,{component:"div",id:"parentFormWrap",sx:{maxWidth:600,mx:{xs:"0",sm:"auto"},mt:3,p:{xs:1,sm:2},border:"1px solid #ccc",borderRadius:"8px",backgroundColor:"#f9f9f9"},children:e.jsxs(S,{component:"form",autoComplete:"off",onSubmit:W,style:{padding:".5rem "},children:[e.jsxs(R,{variant:"h6",component:"h3",mb:3,color:"#696969",fontSize:"1.1rem",lineHeight:"1.2em",letterSpacing:"1px",children:["Kindly fill all required fields in order to add your guardian data. Click"," ",e.jsx("a",{href:`/sensec/students/enrollment/online/${r}/parent/add`,children:"here"})," ","to add parent instead!"]}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(p,{fullWidth:!0,label:"Guardian's Name",name:"guardianName",value:t==null?void 0:t.guardianName,onChange:u,required:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(p,{fullWidth:!0,label:"Address",name:"address",value:t==null?void 0:t.address,onChange:u,required:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(p,{fullWidth:!0,label:"Mobile",name:"mobile",value:t==null?void 0:t.mobile,onChange:u,required:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(p,{fullWidth:!0,label:"Email",name:"email",value:t==null?void 0:t.email,onChange:u})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(q,{variant:"contained",color:"success",type:"submit",fullWidth:!0,sx:{height:"3.5rem",letterSpacing:"1px",textTransform:"capitalize",fontSize:"1em"},children:[l===!1&&e.jsx(k,{color:"#fff",size:"1.5rem"}),l===!0&&n==="success"&&!h&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Successful"})," ",e.jsx($,{})]}),h&&e.jsx(L,{color:"#fff",size:"1.5rem"}),l===null&&"Add Guardian"]})})]})]})})]})}export{te as GuardianForm};
