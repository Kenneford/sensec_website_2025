import{r as a,o as V,p as j,s as M,t as R,w as z,b1 as L,j as y,x as B,y as D,v as T,z as J}from"./index-CL8aB76r.js";function K({props:e,states:r,muiFormControl:t}){return r.reduce((s,o)=>(s[o]=e[o],t&&typeof e[o]>"u"&&(s[o]=t[o]),s),{})}const I=a.createContext(void 0);function Q(){return a.useContext(I)}function w(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function P(e,r=!1){return e&&(w(e.value)&&e.value!==""||r&&w(e.defaultValue)&&e.defaultValue!=="")}function X(e){return e.startAdornment}function Y(e){return V("MuiFormControl",e)}j("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Z=e=>{const{classes:r,margin:t,fullWidth:s}=e,o={root:["root",t!=="none"&&`margin${R(t)}`,s&&"fullWidth"]};return D(o,Y,r)},_=M("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},r)=>({...r.root,...r[`margin${R(e.margin)}`],...e.fullWidth&&r.fullWidth})})({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",variants:[{props:{margin:"normal"},style:{marginTop:16,marginBottom:8}},{props:{margin:"dense"},style:{marginTop:8,marginBottom:4}},{props:{fullWidth:!0},style:{width:"100%"}}]}),le=a.forwardRef(function(r,t){const s=z({props:r,name:"MuiFormControl"}),{children:o,className:c,color:f="primary",component:d="div",disabled:i=!1,error:F=!1,focused:x,fullWidth:g=!1,hiddenLabel:C=!1,margin:S="none",required:m=!1,size:l="medium",variant:u="outlined",...b}=s,q={...s,color:f,component:d,disabled:i,error:F,fullWidth:g,hiddenLabel:C,margin:S,required:m,size:l,variant:u},H=Z(q),[A,O]=a.useState(()=>{let p=!1;return o&&a.Children.forEach(o,n=>{if(!L(n,["Input","Select"]))return;const U=L(n,["Select"])?n.props.input:n;U&&X(U.props)&&(p=!0)}),p}),[W,$]=a.useState(()=>{let p=!1;return o&&a.Children.forEach(o,n=>{L(n,["Input","Select"])&&(P(n.props,!0)||P(n.props.inputProps,!0))&&(p=!0)}),p}),[k,h]=a.useState(!1);i&&k&&h(!1);const E=x!==void 0&&!i?x:k;let N;a.useRef(!1);const G=a.useMemo(()=>({adornedStart:A,setAdornedStart:O,color:f,disabled:i,error:F,filled:W,focused:E,fullWidth:g,hiddenLabel:C,size:l,onBlur:()=>{h(!1)},onEmpty:()=>{$(!1)},onFilled:()=>{$(!0)},onFocus:()=>{h(!0)},registerEffect:N,required:m,variant:u}),[A,f,i,F,W,E,g,C,N,m,l,u]);return y.jsx(I.Provider,{value:G,children:y.jsx(_,{as:d,ownerState:q,className:B(H.root,c),ref:t,...b,children:o})})});function ee(e){return V("MuiFormLabel",e)}const v=j("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),re=e=>{const{classes:r,color:t,focused:s,disabled:o,error:c,filled:f,required:d}=e,i={root:["root",`color${R(t)}`,o&&"disabled",c&&"error",f&&"filled",s&&"focused",d&&"required"],asterisk:["asterisk",c&&"error"]};return D(i,ee,r)},oe=M("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},r)=>({...r.root,...e.color==="secondary"&&r.colorSecondary,...e.filled&&r.filled})})(T(({theme:e})=>({color:(e.vars||e).palette.text.secondary,...e.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(e.palette).filter(J()).map(([r])=>({props:{color:r},style:{[`&.${v.focused}`]:{color:(e.vars||e).palette[r].main}}})),{props:{},style:{[`&.${v.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${v.error}`]:{color:(e.vars||e).palette.error.main}}}]}))),se=M("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(T(({theme:e})=>({[`&.${v.error}`]:{color:(e.vars||e).palette.error.main}}))),ae=a.forwardRef(function(r,t){const s=z({props:r,name:"MuiFormLabel"}),{children:o,className:c,color:f,component:d="label",disabled:i,error:F,filled:x,focused:g,required:C,...S}=s,m=Q(),l=K({props:s,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),u={...s,color:l.color||"primary",component:d,disabled:l.disabled,error:l.error,filled:l.filled,focused:l.focused,required:l.required},b=re(u);return y.jsxs(oe,{as:d,ownerState:u,className:B(b.root,c),ref:t,...S,children:[o,l.required&&y.jsxs(se,{ownerState:u,"aria-hidden":!0,className:b.asterisk,children:[" ","*"]})]})});export{I as F,ae as a,v as b,le as c,K as f,P as i,Q as u};
