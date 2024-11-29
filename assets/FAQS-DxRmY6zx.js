import{r as c,p as k,o as T,s as b,q as O,v as x,w as N,ab as q,j as e,x as R,y as $,ac as z,T as P}from"./index-CL8aB76r.js";import{E as J}from"./ExpandMore-DT9CsP_O.js";import{C as K}from"./Container-BF3i8410.js";import"./index-DcfIKM1A.js";import{u as X}from"./useControlled-CyfcTk32.js";import{C as Z}from"./Collapse-Jb7FTdMh.js";import"./styled-DCaZBxMP.js";import"./useThemeProps-5fjUjDwy.js";import"./getThemeProps-BQ9MDSVY.js";const B=c.createContext({});function _(o){return T("MuiAccordion",o)}const C=k("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),oo=o=>{const{classes:s,square:r,expanded:t,disabled:n,disableGutters:i}=o;return $({root:["root",!r&&"rounded",t&&"expanded",n&&"disabled",!i&&"gutters"],heading:["heading"],region:["region"]},_,s)},so=b(O,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:r}=o;return[{[`& .${C.region}`]:s.region},s.root,!r.square&&s.rounded,!r.disableGutters&&s.gutters]}})(x(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${C.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${C.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}}),x(({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${C.expanded}`]:{margin:"16px 0"}}}]}))),ro=b("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(o,s)=>s.heading})({all:"unset"}),eo=c.forwardRef(function(s,r){const t=N({props:s,name:"MuiAccordion"}),{children:n,className:i,defaultExpanded:d=!1,disabled:l=!1,disableGutters:p=!1,expanded:S,onChange:u,square:y=!1,slots:h={},slotProps:v={},TransitionComponent:w,TransitionProps:m,...f}=t,[a,G]=X({controlled:S,default:d,name:"Accordion",state:"expanded"}),I=c.useCallback(Q=>{G(!a),u&&u(Q,!a)},[a,u,G]),[j,...W]=c.Children.toArray(n),E=c.useMemo(()=>({expanded:a,disabled:l,disableGutters:p,toggle:I}),[a,l,p,I]),A={...t,square:y,disabled:l,disableGutters:p,expanded:a},M=oo(A),U={transition:w,...h},V={transition:m,...v},D={slots:U,slotProps:V},[H,F]=q("heading",{elementType:ro,externalForwardedProps:D,className:M.heading,ownerState:A}),[L,Y]=q("transition",{elementType:Z,externalForwardedProps:D,ownerState:A});return e.jsxs(so,{className:R(M.root,i),ref:r,ownerState:A,square:y,...f,children:[e.jsx(H,{...F,children:e.jsx(B.Provider,{value:E,children:j})}),e.jsx(L,{in:a,timeout:"auto",...Y,children:e.jsx("div",{"aria-labelledby":j.props.id,id:j.props["aria-controls"],role:"region",className:M.region,children:W})})]})});function to(o){return T("MuiAccordionDetails",o)}k("MuiAccordionDetails",["root"]);const no=o=>{const{classes:s}=o;return $({root:["root"]},to,s)},ao=b("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(x(({theme:o})=>({padding:o.spacing(1,2,2)}))),io=c.forwardRef(function(s,r){const t=N({props:s,name:"MuiAccordionDetails"}),{className:n,...i}=t,d=t,l=no(d);return e.jsx(ao,{className:R(l.root,n),ref:r,ownerState:d,...i})});function co(o){return T("MuiAccordionSummary",o)}const g=k("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),lo=o=>{const{classes:s,expanded:r,disabled:t,disableGutters:n}=o;return $({root:["root",r&&"expanded",t&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},co,s)},po=b(z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(x(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${g.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${g.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${g.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${g.expanded}`]:{minHeight:64}}}]}})),uo=b("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(x(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${g.expanded}`]:{margin:"20px 0"}}}]}))),mo=b("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(x(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${g.expanded}`]:{transform:"rotate(180deg)"}}))),fo=c.forwardRef(function(s,r){const t=N({props:s,name:"MuiAccordionSummary"}),{children:n,className:i,expandIcon:d,focusVisibleClassName:l,onClick:p,...S}=t,{disabled:u=!1,disableGutters:y,expanded:h,toggle:v}=c.useContext(B),w=a=>{v&&v(a),p&&p(a)},m={...t,expanded:h,disabled:u,disableGutters:y},f=lo(m);return e.jsxs(po,{focusRipple:!1,disableRipple:!0,disabled:u,component:"div","aria-expanded":h,className:R(f.root,i),focusVisibleClassName:R(f.focusVisible,l),onClick:w,ref:r,ownerState:m,...S,children:[e.jsx(uo,{className:f.content,ownerState:m,children:n}),d&&e.jsx(mo,{className:f.expandIconWrapper,ownerState:m,children:d})]})}),go=[{id:1,question:"What is your return policy?",answer:"You can return any unused item within 30 days for a full refund."},{id:2,question:"Do you offer international shipping?",answer:"Yes, we ship worldwide. Shipping fees may apply."},{id:3,question:"How do I track my order?",answer:"You will receive an email with tracking details once your order is shipped."}];function wo(){return e.jsxs(K,{maxWidth:"md",style:{marginTop:"2rem"},children:[e.jsx(P,{variant:"h4",align:"center",gutterBottom:!0,children:"Frequently Asked Questions"}),go.map(o=>e.jsxs(eo,{children:[e.jsx(fo,{expandIcon:e.jsx(J,{}),children:e.jsx(P,{children:o.question})}),e.jsx(io,{children:e.jsx(P,{children:o.answer})})]},o.id))]})}export{wo as FAQS};
