import{r as l,T as R}from"./index.D8jWovPM.js";var x={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=l,O=Symbol.for("react.element"),g=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,I=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function w(a,e,i){var r,n={},t=null,d=null;i!==void 0&&(t=""+i),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(d=e.ref);for(r in e)j.call(e,r)&&!S.hasOwnProperty(r)&&(n[r]=e[r]);if(a&&a.defaultProps)for(r in e=a.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:O,type:a,key:t,ref:d,props:n,_owner:I.current}}m.Fragment=g;m.jsx=w;m.jsxs=w;x.exports=m;var _=x.exports,b={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function k(){if(h)return f;h=1;var a=R,e=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function d(p,o,y){var s,c={},u=null,v=null;y!==void 0&&(u=""+y),o.key!==void 0&&(u=""+o.key),o.ref!==void 0&&(v=o.ref);for(s in o)r.call(o,s)&&!t.hasOwnProperty(s)&&(c[s]=o[s]);if(p&&p.defaultProps)for(s in o=p.defaultProps,o)c[s]===void 0&&(c[s]=o[s]);return{$$typeof:e,type:p,key:u,ref:v,props:c,_owner:n.current}}return f.Fragment=i,f.jsx=d,f.jsxs=d,f}b.exports=k();var T=b.exports;const L=l.forwardRef(function({project:a,innerRef:e}){return l.useEffect(()=>{const i=document.getElementById("responsiveIframe");i&&(i.style.width="90px",i.style.height="90px");const r=n=>{const t=document.getElementById("responsiveIframe");t&&n.data.type==="chatbotStateChange"&&(t&&n.data.isClosed?setTimeout(()=>{t.style.width="90px",t.style.height="90px"},300):window.innerWidth<1e3?(t.style.width="100vw",t.style.height="38.5rem"):(t.style.width="35rem",t.style.height="38.5rem"))};return window.addEventListener("message",r),()=>{window.removeEventListener("message",r)}},[]),T.jsx("iframe",{ref:e,src:a,id:"responsiveIframe",className:"chatbot-container",allow:"microphone",style:{position:"fixed",zIndex:"100",overflow:"hidden",bottom:"0",right:"0",border:"none",borderRadius:"10px"}})}),N=()=>_.jsx(_.Fragment,{children:_.jsx(L,{project:"https://www.stack-ai.com/embed/98c27ea2-dfd7-4eae-ae0c-7da5f555c5b6/984b50ad-23da-41a5-8dc6-bc352d7b7976/673f7de268b49835e6b9c828"})});export{N as default};
