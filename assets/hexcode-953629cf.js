import{d as D,A as v,C as F,a0 as $,o as m,b as x,h as k,at as B,u,g as a,a3 as C,t as _,I as N,J as z,K as J,p as K,l as M,S as O}from"./vendor-9c8efe32.js";import{_ as R}from"./index-701368e2.js";const U=i=>(K("data-v-2ce19700"),i=i(),M(),i),W=U(()=>a("h2",null,"UTF8长度计算",-1)),j=U(()=>a("h2",null,_("<hex:02开头检测"),-1)),q=D({__name:"hexcode",setup(i){const f=v(""),y=v(0),d=F("hexcode",""),p=v([]);$(()=>{y.value=b(f.value)});function b(t){let e=0;for(let s=0;s<t.length;s++){let l=t.charCodeAt(s);l<128?e+=1:l<2048?e+=2:l<65536?e+=3:l<2097152&&(e+=4)}return e}function V(t){let e=0;const s=[];for(;e<t.length;){const l=t.indexOf("<hex:02",e);if(l===-1)break;e=l+1;const E=t.slice(e+6,e+8),w=t.slice(e+8,e+10),I=parseInt(w,16),L=`指令${E} 长度${w}(${I})`;let n=0,g=0,c=!0,r=!0;for(;g<I;n++){const o=t[l+n+11],A=t.slice(l+n+11,l+n+11+5);if(o===void 0)break;if(o==="<"&&(c=!0,r=!1),!(c&&!r)){if(!(o===">"&&r)){if(!(o==="<"&&A==="<hex:")){const h=b(o);g+=c?h/2:h,console.debug(o,"+"+(c?h/2:h),`已数${g}`)}}}o===":"&&(r=!0),o===">"&&(c=!1,r=!1)}const S=t.slice(e+n+3,e+n+11),T=t.slice(e+10,e+10+n);s.push({passed:S.endsWith("03>"),over:S,msg:L,full:T})}return s}return $(()=>{p.value.length=0,d.value.split(`
`).forEach(t=>{const e=V(t);p.value.push(...e)})}),(t,e)=>(m(),x("main",null,[W,k(a("textarea",{name:"",id:"",cols:"100",rows:"5","onUpdate:modelValue":e[0]||(e[0]=s=>C(f)?f.value=s:null),wrap:"off"},null,512),[[B,u(f)]]),a("p",null,_(u(y)),1),j,k(a("textarea",{name:"",id:"",cols:"100",rows:"5","onUpdate:modelValue":e[1]||(e[1]=s=>C(d)?d.value=s:null),wrap:"off"},null,512),[[B,u(d)]]),a("article",null,[N(_(u(p).every(s=>s.passed)?"全部通过":"有错误")+" ",1),a("ul",null,[(m(!0),x(z,null,J(u(p),(s,l)=>(m(),x("li",{key:l},[a("span",{style:O({color:s.passed?"black":"red"})},_(`${s.passed?"通过":"错误"} ${s.msg} ${s.full}`),5)]))),128))])])]))}});const P=R(q,[["__scopeId","data-v-2ce19700"]]);export{P as default};
