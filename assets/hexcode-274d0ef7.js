import{d as F,v as g,y as N,Z as k,o as m,b as x,D as S,ar as B,u as f,f as a,a1 as U,t as _,G as j,H as z,I as A,p as G,j as H,Q as M}from"./vendor-834361d8.js";import{_ as O}from"./index-22844531.js";const V=u=>(G("data-v-e18ff42f"),u=u(),H(),u),Q=V(()=>a("h2",null,"UTF8长度计算",-1)),R=V(()=>a("h2",null,_("<hex:02开头检测"),-1)),W=F({__name:"hexcode",setup(u){const i=g(""),y=g(0),d=N("hexcode",""),p=g([]);k(()=>{y.value=b(i.value)});function b(t){let e=0;for(let s=0;s<t.length;s++){let l=t.charCodeAt(s);l<128?e+=1:l<2048?e+=2:l<65536?e+=3:l<2097152&&(e+=4)}return e}function C(t){let e=0;const s=[];for(;e<t.length;){const l=t.indexOf("<hex:02",e);if(l===-1)break;e=l+1;const D=t.slice(e+6,e+8),w=t.slice(e+8,e+10),I=parseInt(w,16),E=`指令${D} 长度${w}(${I})`;let n=0,v=0,r=!0,c=!0;for(;v<I;n++){const o=t[l+n+11],T=t.slice(l+n+11,l+n+11+5);if(o===void 0)break;if(o==="<"&&(r=!0,c=!1),!(r&&!c)){if(!(o===">"&&c)){if(!(o==="<"&&T==="<hex:")){const h=b(o);v+=r?h/2:h,console.debug(o,"+"+(r?h/2:h),`已数${v}`)}}}o===":"&&(c=!0),o===">"&&(r=!1,c=!1)}const $=t.slice(e+n+3,e+n+11),L=t.slice(e+10,e+10+n);s.push({passed:$.endsWith("03>"),over:$,msg:E,full:L})}return s}return k(()=>{p.value.length=0,d.value.split(`
`).forEach(t=>{const e=C(t);p.value.push(...e)})}),(t,e)=>(m(),x("main",null,[Q,S(a("textarea",{name:"",id:"",cols:"100",rows:"5","onUpdate:modelValue":e[0]||(e[0]=s=>U(i)?i.value=s:null),wrap:"off"},null,512),[[B,f(i)]]),a("p",null,_(f(y)),1),R,S(a("textarea",{name:"",id:"",cols:"100",rows:"5","onUpdate:modelValue":e[1]||(e[1]=s=>U(d)?d.value=s:null),wrap:"off"},null,512),[[B,f(d)]]),a("article",null,[j(_(f(p).every(s=>s.passed)?"全部通过":"有错误")+" ",1),a("ul",null,[(m(!0),x(z,null,A(f(p),(s,l)=>(m(),x("li",{key:l},[a("span",{style:M({color:s.passed?"black":"red"})},_(`${s.passed?"通过":"错误"} ${s.msg} ${s.full}`),5)]))),128))])])]))}});const J=O(W,[["__scopeId","data-v-e18ff42f"]]);export{J as default};
