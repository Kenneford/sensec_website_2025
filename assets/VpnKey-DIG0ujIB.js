import{F as r,j as a,o as j,p as $,s as M,aH as g,t as n,v as B,r as v,w as P,x as R,y as O,aA as f,z}from"./index-BgAz6R-J.js";import{S as V}from"./FormControlLabel-DHQ49enT.js";const w=r(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),H=r(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=r(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function F(e){return j("MuiCheckbox",e)}const h=$("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),U=e=>{const{classes:o,indeterminate:t,color:s,size:i}=e,l={root:["root",t&&"indeterminate",`color${n(s)}`,`size${n(i)}`]},p=O(l,F,o);return{...o,...p}},K=M(V,{shouldForwardProp:e=>g(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${n(t.size)}`],t.color!=="default"&&o[`color${n(t.color)}`]]}})(B(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:f(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(z()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:f(e.palette[o].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(z()).map(([o])=>({props:{color:o},style:{[`&.${h.checked}, &.${h.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),L=a.jsx(H,{}),N=a.jsx(w,{}),A=a.jsx(E,{}),q=v.forwardRef(function(o,t){const s=P({props:o,name:"MuiCheckbox"}),{checkedIcon:i=L,color:l="primary",icon:p=N,indeterminate:c=!1,indeterminateIcon:u=A,inputProps:y,size:d="medium",disableRipple:x=!1,className:I,...S}=s,m=c?u:p,C=c?u:i,k={...s,disableRipple:x,color:l,indeterminate:c,size:d},b=U(k);return a.jsx(K,{type:"checkbox",inputProps:{"data-indeterminate":c,...y},icon:v.cloneElement(m,{fontSize:m.props.fontSize??d}),checkedIcon:v.cloneElement(C,{fontSize:C.props.fontSize??d}),ownerState:k,ref:t,className:R(b.root,I),disableRipple:x,...S,classes:b})}),G=r(a.jsx("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"VpnKey");export{q as C,G as V};