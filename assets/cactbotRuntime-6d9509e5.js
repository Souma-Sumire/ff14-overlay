import{d as Q,A as x,C as S,r as N,o as m,b as v,a as w,w as V,I as ae,J as I,K as M,u as n,h as D,R as oe,t as F,H as U,aM as ne,F as re,g as p,a3 as le,aN as se,S as K,i as ie,p as ue,l as ce,c as de}from"./vendor-b254d16d.js";import{U as s,j as pe}from"./util-4b7cb3a6.js";import{_ as W}from"./index-b49e0245.js";import{a as B,c as fe}from"./overlay_plugin_api-409cb9ea.js";const me={flex:"~ col",style:{position:"relative"}},be=Q({__name:"dragJob",props:{party:{}},emits:["updateSortArr"],setup(j,{emit:_}){const b=j,C=_,A=x(),H=x(!0),a=x(!1),h=[{role:"tank",color:"blue"},{role:"healer",color:"green"},{role:"dps",color:"red"},{role:"crafter",color:"yellow"},{role:"gatherer",color:"purple"},{role:"none",color:"gray"}];function k(o){return b.party.find(i=>i.job===o)}const f=s.getBattleJobs3(),J=(()=>{const o={},i={tank:s.isTankJob,healer:s.isHealerJob,dps:s.isDpsJob,crafter:s.isCraftingJob,gatherer:s.isGatheringJob};for(const u of h.map(r=>r.role))o[u]=(u==="none"?[]:f.filter(r=>i[u](r))).map(r=>s.jobToJobEnum(r)).sort((r,y)=>s.enumSortMethod(r,y));return o})(),P=Object.values(J).flat().map(o=>({name:s.nameToFullName(s.jobEnumToJob(o)).simple1,id:o})),l=S("cactbotRuntime-jobList",(()=>{const o={};for(const i of h.map(u=>u.role))o[i]=P.filter(u=>J[i].includes(u.id)).sort((u,r)=>J[i].indexOf(u.id)-J[i].indexOf(r.id));return o})());l.value.dps.findIndex(o=>o.id===41)===-1&&l.value.dps.push({name:"蛇",id:41}),l.value.dps.findIndex(o=>o.id===42)===-1&&l.value.dps.push({name:"绘",id:42});function O(){C("updateSortArr",Object.values(l.value).flat().map(o=>o.id))}return(o,i)=>{const u=N("vxe-checkbox");return m(),v("div",me,[w(u,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=r=>a.value=r),size:"mini",style:{"--vxe-primary-color":"none",position:"absolute",top:"0.25rem",right:"0.25rem",background:"rgba(30, 30, 30, 0.33)",color:"white","border-radius":"0.25rem",padding:"0.08rem 0.16rem","font-size":"0.75rem","line-height":"1","box-shadow":"0 0 2px black"}},{default:V(()=>[ae(" 解除限制 ")]),_:1},8,["modelValue"]),(m(),v(I,null,M(h,(r,y)=>w(n(ne),{key:y,ref_for:!0,ref_key:"el",ref:A,modelValue:n(l)[r.role],"onUpdate:modelValue":g=>n(l)[r.role]=g,disabled:!H.value,animation:"150","ghost-class":"ghost",class:"m-b-0.25 m-t-0.25 flex flex-row gap-0.25 rounded p-0",filter:".no-draggable","force-fallback":!0,onUpdate:O},{default:V(()=>[(m(!0),v(I,null,M(n(l)[r.role],g=>D((m(),v("div",{key:g.id,class:oe(`${a.value||k(g.id)?`draggable bg-${r.color} cursor-move`:"no-draggable bg-gray-700/50 opacity-75"} rounded p-l-0.6 p-r-0.6 p-t-0 p-b-0.3 m-0 color-white`)},F(g.name),3)),[[U,b.party.find(E=>E.job===36)?!0:g.id!==36]])),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),64))])}}});const ve=W(be,[["__scopeId","data-v-153e95e1"]]),G=j=>(ue("data-v-5721e1bb"),j=j(),ce(),j),_e={class:"text-white text-shadow-sm text-shadow-color-black"},ye=G(()=>p("span",null,"用法",-1)),ge=G(()=>p("p",null,"使悬浮窗的位置分配对应游戏内的实际位置（D1D2等）",-1)),he=G(()=>p("ul",null,[p("li",null,"临时：下拉选择框修改。"),p("li",null,"长期：用鼠标拖动职能顺序。")],-1)),xe={class:"players"},je={class:"name"},ke={key:0,style:{position:"fixed",bottom:"0"}},Je=Q({__name:"cactbotRuntime",setup(j){function _(e,t,c=0){return Array(t).fill(e).map((R,$)=>R+(+$+1+c))}const b=x(!1),C=S("cactbotRuntime-sortArr",pe),A=[{id:"10000001",name:"虚构战士",job:21,inParty:!0},{id:"10000002",name:"虚构骑士",job:19,inParty:!0},{id:"10000003",name:"虚构占星",job:33,inParty:!0},{id:"10000004",name:"虚构学者",job:28,inParty:!0},{id:"10000005",name:"虚构忍者",job:30,inParty:!0},{id:"10000006",name:"虚构武士",job:34,inParty:!0},{id:"10000008",name:"虚构诗人",job:23,inParty:!0},{id:"10000007",name:"虚构召唤",job:27,inParty:!0}],a=S("cactbotRuntime-data",{party:[]}),h=S("cactbotRuntime-showTips",x(!0)),k=S("cactbotRuntime-roleSelectLength",{tank:0,healer:0,dps:0,crafter:0,gatherer:0,none:0}),f=S("cactbotRuntime-roleAssignLocationNames",{tank:["MT","ST",..._("T",6,2)],healer:[..._("H",8)],dps:[..._("D",8)],crafter:[..._("C",8)],gatherer:[..._("G",8)],none:[..._("N",8)]});function J(){for(const e in k.value)Object.prototype.hasOwnProperty.call(k.value,e)&&(k.value[e]=a.value.party.reduce((t,c)=>o(c.job)===e?t+1:t,0))}function q(e){const t=o(e);return f.value[t].filter((c,R)=>R<k.value[t])}const P=location.href.includes("localhost"),l=x(!1),O=x(P?A[2].name:"");function o(e){return[1,3,19,21,32,37].includes(e)?"tank":[6,24,28,33,40].includes(e)?"healer":[2,4,5,7,20,22,23,25,26,27,29,30,31,34,35,36,38,39,41,42].includes(e)?"dps":s.isCraftingJob(s.jobEnumToJob(e))?"crafter":s.isGatheringJob(s.jobEnumToJob(e))?"gatherer":"none"}function i(){a.value.party.sort((e,t)=>C.value.indexOf(e.job)-C.value.indexOf(t.job));for(const e of a.value.party)e.rp=void 0,e.rp=r(e)}function u(e){a.value.party[e].specify=!0;const t=a.value.party.find(c=>c.rp===a.value.party[e].rp&&c.id!==a.value.party[e].id);t&&(t.rp=r(t),t.specify=!0),y()}function r(e){return f.value[o(e.job)].find(t=>!a.value.party.find(c=>c.rp===t))??"unknown"}function y(){const e=[...f.value.tank,...f.value.healer,...f.value.dps,...f.value.crafter,...f.value.gatherer,...f.value.none];a.value.party.sort((t,c)=>e.indexOf(t.rp??"")-e.indexOf(c.rp??"")),fe({call:"broadcast",source:"soumaRuntimeJS",msg:{party:a.value.party}})}function g(){l.value=!0}function E(){l.value=!1}function X(e){C.value=e,L()}function Y(e){return s.nameToFullName(s.jobEnumToJob(e)).simple1}function Pe(e){return e}function L(){i(),J(),y()}re(()=>{y(),B("PartyChanged",e=>{h.value&&(b.value=!0),!(P&&e.party.length===0)&&(a.value.party=e.party.filter(t=>t.inParty).map(t=>({...t,rp:"",specify:!1})),L())}),B("ChangePrimaryPlayer",e=>{P||(O.value=e.charName)}),B("BroadcastMessage",e=>{e.source==="soumaUserJS"&&typeof e.msg=="object"&&e.msg!==null&&Reflect.get(e.msg,"text")==="requestData"&&y()})});function Z(){const e={party:A};h.value&&(b.value=!0),a.value.party=e.party.filter(t=>t.inParty).map(t=>({...t,rp:"",specify:!1})),L()}return(e,t)=>{const c=N("vxe-modal"),R=N("vxe-option"),$=N("vxe-select"),ee=ve;return m(),v("div",{onMouseenter:g,onMouseleave:E},[D(p("span",_e,"...",512),[[U,n(a).party.length<=1]]),w(c,{modelValue:n(b),"onUpdate:modelValue":t[0]||(t[0]=d=>le(b)?b.value=d:null),size:"small",position:{left:10,top:10},width:"90vw",onClose:t[1]||(t[1]=d=>{b.value=!1,h.value=!1})},{title:V(()=>[ye]),default:V(()=>[ge,he]),_:1},8,["modelValue"]),p("main",{style:K({width:n(l)?`${15.5+ +(n(a).party.find(d=>d.job===36)?1:0)}em`:"4em"})},[p("div",xe,[w(se,{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInLeft","leave-active-class":"animate__fadeOutLeft"},{default:V(()=>[(m(!0),v(I,null,M(n(a).party,(d,z)=>D((m(),v("section",{key:d.id,flex:"~ nowrap",style:K({opacity:n(l)?1:.5}),class:"player"},[w($,{modelValue:d.rp,"onUpdate:modelValue":T=>d.rp=T,size:"mini","class-name":"select",onChange:T=>u(z)},{default:V(()=>[(m(!0),v(I,null,M(q(d.job),(T,te)=>(m(),de(R,{key:te,value:T,label:T},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),p("span",je,F(Y(d.job))+" "+F(n(l)?d.name:""),1)],4)),[[U,n(a).party.length>1&&(n(l)||d.name===n(O))]])),128))]),_:1})]),D(w(ee,{party:n(a).party,"m-b-1":"","p-1":"",onUpdateSortArr:X},null,8,["party"]),[[U,n(l)]])],4),n(P)?(m(),v("div",ke,[p("button",{onClick:t[2]||(t[2]=d=>{n(a).party=n(a).party.filter(z=>z.name===n(O)),L()})}," 测试单人 "),p("button",{onClick:Z}," 测试组队 ")])):ie("",!0)],32)}}});const Oe=W(Je,[["__scopeId","data-v-5721e1bb"]]);export{Oe as default};
