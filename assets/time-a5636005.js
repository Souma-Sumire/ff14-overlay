import{d as A,A as s,ao as T,o as c,b as r,u as t,t as l,i as u}from"./vendor-40de6a4b.js";import{a as h}from"./overlay_plugin_api-409cb9ea.js";import{_ as D}from"./index-9dad0f21.js";const L={key:0,class:"time gameTime"},k={key:1,class:"time logTime"},w={key:2,class:"time realTime"},C=A({__name:"time",setup(S){const d=s(""),_=s(!1),o=s(0),n=s(""),p=s(""),v=new URLSearchParams(window.location.search).get("timeType")==="game"?"game":"real";requestAnimationFrame(function e(){if(d.value=T().format("YYYY/MM/DD HH:mm:ss.SSS"),o.value>0){const m=Date.now()-o.value,a=T.duration(m),f=a.minutes(),g=a.seconds();n.value=`${f<10?"0":""}${f}:${g<10?"0":""}${g}`}requestAnimationFrame(e)});const y=e=>{e.isActive==="true"&&_.value===!1?o.value=Date.now():e.isActive==="false"&&(o.value=0,n.value=""),_.value=e.isActive==="true"},b=e=>{var i,m,a;e.line[0]!=="00"&&(p.value=((a=(m=(i=e==null?void 0:e.line)==null?void 0:i[1])==null?void 0:m.match(new RegExp("(?<=T)\\d\\d:\\d\\d:\\d\\d\\.\\d\\d\\d")))==null?void 0:a[0])??"")};return h("CombatData",y),h("LogLine",b),(e,i)=>(c(),r("div",null,[t(n)?(c(),r("span",L,l(t(n)),1)):u("",!0),t(v)==="game"?(c(),r("span",k,l(t(p)),1)):u("",!0),t(v)==="real"?(c(),r("span",w,l(t(d)),1)):u("",!0)]))}});const B=D(C,[["__scopeId","data-v-b0675bd1"]]);export{B as default};
