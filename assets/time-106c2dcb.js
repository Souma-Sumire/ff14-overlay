import{d as T,m as i,ao as h,o as d,e as _,u as c,x as v,a7 as A,s as L}from"./vendor-a77f175b.js";import{a as f}from"./overlay_plugin_api-409cb9ea.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const y={key:0,class:"time gameTime"},C={class:"time logTime"},D=T({__name:"time",setup(k){const m=i(!1),a=i(0),s=i(""),r=i("");requestAnimationFrame(function e(){if(a.value>0){const n=Date.now()-a.value,t=h.duration(n),l=t.minutes(),u=t.seconds();s.value=`${l<10?"0":""}${l}:${u<10?"0":""}${u}`}requestAnimationFrame(e)});const p=e=>{e.isActive==="true"&&m.value===!1?a.value=Date.now():e.isActive==="false"&&(a.value=0,s.value=""),m.value=e.isActive==="true"},g=e=>{var o,n,t;e.line[0]!=="00"&&(r.value=((t=(n=(o=e==null?void 0:e.line)==null?void 0:o[1])==null?void 0:n.match(new RegExp("(?<=T)\\d\\d:\\d\\d:\\d\\d\\.\\d\\d\\d")))==null?void 0:t[0])??"")};return f("CombatData",p),f("LogLine",g),(e,o)=>(d(),_("div",null,[c(s)?(d(),_("span",y,v(c(s)),1)):A("",!0),L("span",C,v(c(r)),1)]))}});const q=x(D,[["__scopeId","data-v-65c845e9"]]);export{q as default};
