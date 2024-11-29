import{f as v,a0 as E,e as T,u as R,h as Y,r as h,a2 as O,i as z,n as D,a6 as G,j as s,B as l,l as P,a7 as H}from"./index-CL8aB76r.js";import{L as w}from"./LoadingProgress-DrQz26HU.js";import{c as m}from"./muiStyling-Biny6EY4.js";import{d as J}from"./DateFormatter-B-8qT63H.js";import{G as r}from"./Grid-C0sdyGW0.js";import{A as V}from"./ArrowBack-CW7NKGGu.js";import{C as K}from"./CalendarMonth-nAY77HpZ.js";import{T as Q}from"./TaskAlt-S5e9RsjI.js";import"./FormLabel-DFf2C-vG.js";import"./index-DcfIKM1A.js";import"./useControlled-CyfcTk32.js";import"./useThemeProps-5fjUjDwy.js";import"./getThemeProps-BQ9MDSVY.js";import"./index-DvkxpYwK.js";import"./IconButton-zfBQ5iJg.js";function xe(){var u,A,W;const q=localStorage.getItem("studentUniqueId"),p=v(E),t=T(),{studentIndexNo:y}=R(),C=v(Y);console.log(y);const{updateStatus:d,error:j,successMessage:B}=v(o=>o.placement),[c,b]=h.useState(!1),[N,g]=h.useState(null),a=p==null?void 0:p.find(o=>o.jhsIndexNo===y),x=C==null?void 0:C.find(o=>o.uniqueId===(a==null?void 0:a.enrollmentId)),[X,L]=h.useState(!1),[n,f]=h.useState(!1),[e,I]=h.useState({firstName:a==null?void 0:a.firstName,lastName:a==null?void 0:a.lastName,otherName:a==null?void 0:a.otherName,dateOfBirth:a==null?void 0:a.dateOfBirth,gender:a==null?void 0:a.gender,fullName:a==null?void 0:a.fullName,jhsAttended:a==null?void 0:a.jhsAttended,jhsIndexNo:a==null?void 0:a.jhsIndexNo,programme:a==null?void 0:a.programme,yearGraduated:a==null?void 0:a.yearGraduated,boardingStatus:a==null?void 0:a.boardingStatus,smsContact:a==null?void 0:a.smsContact});console.log(e);const M=!!(e!=null&&e.firstName)&&!!(e!=null&&e.lastName)&&!!(e!=null&&e.dateOfBirth)&&!!(e!=null&&e.jhsAttended)&&!!(e!=null&&e.yearGraduated)&&!!(e!=null&&e.smsContact),i=o=>{I({...e,[o.target.name]:o.target.value})},k=()=>{if(c){if(!M){L("Required Field!");return}const o={firstName:e==null?void 0:e.firstName,lastName:e==null?void 0:e.lastName,otherName:e==null?void 0:e.otherName,dateOfBirth:e==null?void 0:e.dateOfBirth,gender:e==null?void 0:e.gender,fullName:e==null?void 0:e.fullName,jhsAttended:e==null?void 0:e.jhsAttended,jhsIndexNo:e==null?void 0:e.jhsIndexNo,programme:e==null?void 0:e.programme,yearGraduated:e==null?void 0:e.yearGraduated,boardingStatus:e==null?void 0:e.boardingStatus,smsContact:e==null?void 0:e.smsContact};t(H(o))}else b(!0)};return h.useEffect(()=>{I(a)},[a]),h.useEffect(()=>{t(O()),t(z())},[t,q]),h.useEffect(()=>{if(d==="pending"&&g(!1),d==="success"&&(setTimeout(()=>{D.success(B,{position:"top-right",theme:"dark",toastId:B})},2e3),setTimeout(()=>{g(!0),t(O()),I(a)},3e3),setTimeout(()=>{t(G()),g(null),b(!1),f(!1)},6e3)),d==="rejected")return setTimeout(()=>{var o,F;g(null),(F=(o=j==null?void 0:j.errorMessage)==null?void 0:o.message)==null||F.map(U=>D.error(U,{position:"top-right",theme:"light"})),t(G())},3e3)},[d,B,N,j,t,a]),a?s.jsxs(l,{className:"checkWrap",id:"check",children:[s.jsx(l,{className:"checkContWrap",sx:{},maxWidth:900,mx:{xs:"0 .5rem",sm:"auto"},children:s.jsxs(l,{className:"checkCont",py:"1rem",children:[s.jsx("h1",{style:{textAlign:"center",color:"#696969",fontSize:"1.5rem"},children:"Student Placement Overview"}),s.jsx(l,{className:"studentDataCont",mx:{xs:".5rem",sm:"2rem"},children:s.jsxs(l,{className:"studentData",children:[s.jsx(l,{className:"studentDataWrap",children:s.jsxs(l,{className:"student",children:[s.jsx("p",{className:"studentName",children:a==null?void 0:a.fullName}),s.jsx("p",{className:"studentId",children:"[ Student ]"}),s.jsx(l,{className:"studentImg",children:s.jsx("img",{src:(u=x==null?void 0:x.personalInfo)!=null&&u.profilePicture?(W=(A=x==null?void 0:x.personalInfo)==null?void 0:A.profilePicture)==null?void 0:W.url:"/assets/noAvatar.png",alt:""})})]})}),c?s.jsx(l,{className:"updatePlacementData",children:s.jsxs(l,{className:"formInputWrap",children:[s.jsxs("button",{onClick:()=>{n&&f(!1),b(!1)},className:"placementUpdateBackBtn",children:[s.jsx(V,{className:"placementPrev"})," ",s.jsx("span",{children:"Go Back"})]}),s.jsxs(r,{container:!0,spacing:2,children:[s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"First Name",name:"firstName",value:e==null?void 0:e.firstName,onChange:i,autoComplete:"off",required:!0,className:"textField",sx:{"& .MuiInputLabel-asterisk":{color:e!=null&&e.firstName?"green":"red"}}})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Last Name",name:"lastName",value:e==null?void 0:e.lastName,onChange:i,autoComplete:"off",required:!0,className:"textField",sx:{"& .MuiInputLabel-asterisk":{color:e!=null&&e.lastName?"green":"red"}}})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Other Name",name:"otherName",value:e==null?void 0:e.otherName,onChange:i,autoComplete:"off",className:"textField"})}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"changeDOBWrap",children:[!n&&s.jsx(m,{fullWidth:!0,label:"Date Of Birth",name:"dateOfBirth",value:e!=null&&e.dateOfBirth?J.format(new Date(e==null?void 0:e.dateOfBirth)):"---",onChange:i,autoComplete:"off",disabled:!0,className:"textField"}),!n&&s.jsx(K,{onClick:()=>f(!0),className:"dOBBtn"}),n&&s.jsx("p",{onClick:()=>f(!1),className:"closeDOBBtn",children:"Close"}),n&&s.jsx(m,{fullWidth:!0,type:"date",name:"dateOfBirth",value:e==null?void 0:e.dateOfBirth,onChange:i,autoComplete:"off",required:!0,className:"textField"})]}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"JHS Attended",name:"jhsAttended",value:e==null?void 0:e.jhsAttended,onChange:i,autoComplete:"off",required:!0,className:"textField",sx:{"& .MuiInputLabel-asterisk":{color:e!=null&&e.jhsAttended?"green":"red"}}})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Year Graduated",name:"yearGraduated",value:e==null?void 0:e.yearGraduated,onChange:i,autoComplete:"off",required:!0,className:"textField",sx:{"& .MuiInputLabel-asterisk":{color:e!=null&&e.yearGraduated?"green":"red"}}})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Mobile",name:"smsContact",value:e==null?void 0:e.smsContact,onChange:i,autoComplete:"off",required:!0,className:"textField"})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"JHS Index No.",name:"jhsIndexNo",value:e==null?void 0:e.jhsIndexNo,onChange:i,autoComplete:"off",disabled:!0,className:"textField"})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Programme",name:"programme",value:e==null?void 0:e.programme,onChange:i,autoComplete:"off",disabled:!0,className:"textField"})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Boarding Status",name:"boardingStatus",value:e==null?void 0:e.boardingStatus,onChange:i,autoComplete:"off",disabled:!0,className:"textField"})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Gender",name:"gender",value:e==null?void 0:e.gender,onChange:i,autoComplete:"off",disabled:!0,className:"textField"})}),s.jsx(r,{item:!0,xs:12,sm:6,md:4,lg:4,children:s.jsx(m,{fullWidth:!0,label:"Full Name",name:"fullName",value:e==null?void 0:e.fullName,onChange:i,autoComplete:"off",disabled:!0,className:"textField"})})]})]})}):s.jsxs(l,{className:"enrollmentInfoWrap",pb:2,children:[s.jsxs(l,{className:"updateBtnWrap",mx:{xs:"1rem",sm:"2.5rem"},children:[s.jsx(l,{className:"enrolledDate",children:s.jsxs("h3",{children:["Enrolled:"," ",s.jsx("span",{children:a!=null&&a.enrolled?"Yes":"No"})]})}),s.jsx(P,{variant:"contained",style:{backgroundColor:"green",borderRadius:".4rem",fontSize:".9rem",textTransform:"capitalize"},className:"updateBtn",onClick:k,children:!c&&"Update Data"})]}),s.jsxs(r,{container:!0,spacing:2,className:"studentEnrolmentInfo",children:[s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.firstName?a==null?void 0:a.firstName:"---"}),s.jsx("span",{children:"[ First Name ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.lastName?a==null?void 0:a.lastName:"---"}),s.jsx("span",{children:"[ Last Name ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.otherName?a==null?void 0:a.otherName:"---"}),s.jsx("span",{children:"[ Other Name ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.gender?a==null?void 0:a.gender:"---"}),s.jsx("span",{children:"[ Gender ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.jhsAttended?a==null?void 0:a.jhsAttended:"---"}),s.jsx("span",{children:"[ JHS Completed ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.yearGraduated?a==null?void 0:a.yearGraduated:"---"}),s.jsx("span",{children:"[ Year Graduated ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.jhsIndexNo?a==null?void 0:a.jhsIndexNo:"---"}),s.jsx("span",{children:"[ JHS Index-Number ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.placementVerified?"Yes":"Not Yet"}),s.jsx("span",{children:"[ Placement Verified ]"})]}),s.jsxs(r,{item:!0,xs:12,sm:6,md:4,lg:4,className:"placementInfoBox",children:[s.jsx("h3",{children:a!=null&&a.smsContact?a==null?void 0:a.smsContact:"---"}),s.jsx("span",{children:"[ Contact Number ]"})]})]})]}),c&&s.jsx(l,{className:"saveUpdateBtnWrap",children:s.jsxs(P,{variant:"contained",style:{backgroundColor:"green",borderRadius:".4rem"},className:"saveUpdateBtn",onClick:k,children:[c&&N===!1&&s.jsx(w,{color:"#fff",size:"1.5rem"}),c&&N===!0&&d==="success"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"Successful"})," ",s.jsx(Q,{})]}),c&&N===null&&"Save Changes"]})})]})}),s.jsxs(l,{className:"note",mx:{xs:".5rem",sm:"2rem"},children:[s.jsx("h4",{children:"Note:"}),s.jsx("p",{children:"The above data is just to let you know that you've been placed into our school. You are therefore expected to follow the following steps:"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("p",{children:"After a successful placement check, kindly update your placement data with the required data before proceeding to enroll."})}),s.jsx("li",{children:s.jsxs("p",{children:["Verify your placement ["," ",s.jsx("span",{className:"firstStepInfo",children:"First step during enrollment process"})," ","]."]})}),s.jsx("li",{children:s.jsx("p",{children:"Start your enrollment process."})})]}),s.jsx("p",{children:"If you're ready to enroll, kindly click on the others link with dropdown arrow on the navbar and select the enrollment option to begin the enrollment process."}),s.jsx("span",{children:"Please don't forget to come along with all downloaded documents on the reporting date."})]})]})}),s.jsxs(l,{className:"footer",children:[s.jsxs("p",{children:["Copyright ©2023 ",s.jsx("span",{style:{color:"#0fc80f"},children:"Sen"}),s.jsx("span",{style:{color:"yellow"},children:"sec"})]}),s.jsx("div",{style:{border:"1px solid #fff",height:"15px"}}),s.jsx("p",{children:"All Rights Reserved."})]})]}):s.jsx("div",{className:"checkPageLoading",children:s.jsx(w,{color:"#696969",size:"1.7rem"})})}export{xe as PlacementCheckOverview};
