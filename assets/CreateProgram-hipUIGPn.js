import{f as p,g as S,e as B,r as c,a as v,n as d,c9 as g,j as e,B as x,l as b,ca as N}from"./index-BgAz6R-J.js";/* empty css               */import{T as y}from"./TaskAlt-bfh00-md.js";import{c as D}from"./muiStyling-DmAU0UFM.js";import{L as E}from"./LoadingProgress-C8hgd9jP.js";import{G as f}from"./Grid-LFq3_oT1.js";import"./FormLabel-C_YAtYcn.js";import"./index-DcfIKM1A.js";import"./useControlled-BV50I6TR.js";import"./useThemeProps-JU6LSmm0.js";import"./getThemeProps-IXaZHU6q.js";import"./index-CUAsLGHl.js";import"./IconButton-DXnj9XZJ.js";function U(){const s=p(S),{createStatus:r,successMessage:i,error:o}=p(t=>t.programme),h=B(),[n,m]=c.useState(null),[a,l]=c.useState({name:"",createdBy:`${s==null?void 0:s.id}`});console.log(a),v();const j=t=>{l({...a,[t.target.name]:t.target.value})},C=!!a.name,P=t=>{t.preventDefault(),h(N(a))};return c.useEffect(()=>{if(r==="pending"&&m(!1),r==="rejected"){setTimeout(()=>{m(null)},3e3),setTimeout(()=>{var t,u;(u=(t=o==null?void 0:o.errorMessage)==null?void 0:t.message)==null||u.map(T=>d.error(T,{position:"top-right",theme:"dark",toastId:"createProgrammeError"})),g()},2e3);return}r==="success"&&(setTimeout(()=>{m(!0)},3e3),setTimeout(()=>{d.success(i,{position:"top-right",theme:"dark",toastId:i})},1e3),setTimeout(()=>{l({name:"",createdBy:`${s==null?void 0:s.id}`}),g(),m(null)},6e3))},[o,i,r,s]),e.jsx(x,{sx:{width:{xs:"100%",sm:"85%",md:"75%",lg:"60%",xl:"50%"},margin:"auto",paddingTop:"2rem",display:"flex",flexDirection:"column"},className:"createDataWrap",children:e.jsxs(x,{component:"form",onSubmit:P,minHeight:220,p:2,children:[e.jsx("h1",{children:"Programme Form"}),e.jsx(f,{container:!0,spacing:3,children:e.jsx(f,{item:!0,xs:12,sm:6,md:6,lg:6,className:"inputCont",children:e.jsx(D,{fullWidth:!0,label:"Name",name:"name",onChange:j,value:a.name,required:!0,className:"textField",sx:{"&:hover":{borderColor:"none"}}})})}),e.jsxs(b,{type:"submit",disabled:!C,children:[n===!1&&e.jsx(E,{color:"#fff",size:"1.3rem"}),n===!0&&r==="success"&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Successful"})," ",e.jsx(y,{})]}),n===null&&"Create Programme"]})]})})}export{U as CreateProgram};