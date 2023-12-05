import{d as $,s as P,x as T,o as c,b as p,G as C,H as M,a as y,w as b,u as r,O as te,t as N,aE as ae,A as ne,B as oe,a5 as re,f as x,F as se,a0 as le,aF as ie,C as D,D as B,P as ue,M as de,aG as ce,h as pe,e as me,p as fe,i as _e,c as ye,ac as be,a1 as ve}from"./vendor-2418a256.js";import{U as s,j as he}from"./util-f6d3a594.js";import{_ as H}from"./index-a219b89b.js";const ge={flex:"~ col"},ke=$({__name:"dragJob",props:{party:{}},emits:["updateSortArr"],setup(O,{emit:S}){const v=P(),h=P(!0),J=S,A=O,U=()=>{J("updateSortArr",Object.values(j.value).flat().map(e=>e.id))},n=[{name:"tank",color:"blue"},{name:"healer",color:"green"},{name:"dps",color:"red"}];function E(e){return A.party.find(o=>o.job===e)}const m=s.getBattleJobs3(),L=m.filter(e=>s.isTankJob(e)).map(e=>s.jobToJobEnum(e)).sort((e,o)=>s.enumSortMethod(e,o)),w=m.filter(e=>s.isHealerJob(e)).map(e=>s.jobToJobEnum(e)).sort((e,o)=>s.enumSortMethod(e,o)),f=m.filter(e=>s.isDpsJob(e)).map(e=>s.jobToJobEnum(e)).sort((e,o)=>s.enumSortMethod(e,o)),l={tank:L,healer:w,dps:f,unknown:[]},k=Object.values(l).flat().map(e=>({name:s.nameToFullName(s.jobEnumToJob(e)).simple1,id:e})),j=T("cactbotRuntime-jobList",{tank:k.filter(e=>l.tank.includes(e.id)).sort((e,o)=>l.tank.indexOf(e.id)-l.tank.indexOf(o.id)),healer:k.filter(e=>l.healer.includes(e.id)).sort((e,o)=>l.healer.indexOf(e.id)-l.healer.indexOf(o.id)),dps:k.filter(e=>l.dps.includes(e.id)).sort((e,o)=>l.dps.indexOf(e.id)-l.dps.indexOf(o.id)),unknown:[]});return(e,o)=>(c(),p("div",ge,[(c(),p(C,null,M(n,u=>y(r(ae),{ref_for:!0,ref_key:"el",ref:v,disabled:!h.value,modelValue:r(j)[u.name],"onUpdate:modelValue":_=>r(j)[u.name]=_,animation:"150",ghostClass:"ghost",class:"flex flex-row gap-0.25 p-0 m-t-0.25 m-b-0.25 rounded",onUpdate:U,filter:".no-draggable",forceFallback:!0},{default:b(()=>[(c(!0),p(C,null,M(r(j)[u.name],_=>(c(),p("div",{key:_.id,class:te(`${E(_.id)?`draggable bg-${u.color}`:"no-draggable bg-gray-700/50"} rounded p-l-0.6 p-r-0.6 p-t-0 p-b-0.3 m-0 color-white cursor-move`)},N(_.name),3))),128))]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"])),64))]))}});const je=H(ke,[["__scopeId","data-v-43ac9ddb"]]),z=O=>(fe("data-v-b2038826"),O=O(),_e(),O),xe={key:0,style:{color:"white","text-shadow":"1px 1px 2px black"}},Oe=z(()=>x("p",null,"使悬浮窗的位置分配对应游戏内的实际位置（D1D2等）",-1)),we=z(()=>x("ul",null,[x("li",null,"长期：用鼠标拖动职能顺序。"),x("li",null,"临时：下拉选择框修改。")],-1)),Pe={class:"dialog-footer"},Se={style:{"white-space":"nowrap"}},Je=$({__name:"cactbotRuntime",setup(O){const S=(t,a)=>Array(a).fill(t).map((d,R)=>d+ ++R),v={tank:["MT","ST",...S("T",70)],healer:[...S("H",72)],dps:[...S("D",72)],unknown:["unknown"]},h=P(!1),J=T("cactbotRuntime-sortArr",he),A=[{id:"10000001",name:"虚构战士",job:21,inParty:!0},{id:"10000002",name:"虚构骑士",job:19,inParty:!0},{id:"10000003",name:"虚构占星",job:33,inParty:!0},{id:"10000004",name:"虚构学者",job:28,inParty:!0},{id:"10000005",name:"虚构忍者",job:30,inParty:!0},{id:"10000006",name:"虚构武士",job:34,inParty:!0},{id:"10000007",name:"虚构黑魔",job:25,inParty:!0},{id:"10000008",name:"虚构舞者",job:38,inParty:!0}],n=T("cactbotRuntime-data",{party:[]}),E=T("cactbotRuntime-showTips",P(!0)),m={tank:0,healer:0,dps:0,unknown:1};function L(){m.tank=n.value.party.reduce((t,a)=>g(a.job)==="tank"?t+1:t,0),m.healer=n.value.party.reduce((t,a)=>g(a.job)==="healer"?t+1:t,0),m.dps=n.value.party.reduce((t,a)=>g(a.job)==="dps"?t+1:t,0)}const w=location.href.includes("localhost"),f=P(!1),l=P(w?"虚构占星":"");w&&k({party:A});function g(t){const a=Number(t);return[1,3,19,21,32,37].includes(a)?"tank":[6,24,28,33,40].includes(a)?"healer":[2,4,5,7,20,22,23,25,26,27,29,30,31,34,35,36,38,39].includes(a)?"dps":"unknown"}function k(t){E.value&&(h.value=!0),!(w&&t.party.length===0)&&(n.value.party=t.party.filter(a=>a.inParty).map(a=>({...a,rp:"",specify:!1})),j(),L(),u())}function j(){n.value.party.sort((t,a)=>J.value.indexOf(t.job)-J.value.indexOf(a.job)),n.value.party.forEach(t=>t.rp=void 0),n.value.party.forEach(t=>t.rp=o(t))}function e(t){n.value.party[t].specify=!0;const a=n.value.party.find(d=>d.rp===n.value.party[t].rp&&d.id!==n.value.party[t].id);a&&(a.rp=o(a))&&(a.specify=!0),u()}function o(t){return v[g(t.job)].find(a=>!n.value.party.find(d=>d.rp===a))??"unknown"}function u(){const t=[...v.tank,...v.healer,...v.dps];n.value.party.sort((a,d)=>t.indexOf(a.rp)-t.indexOf(d.rp)),callOverlayHandler({call:"broadcast",source:"soumaRuntimeJS",msg:{party:n.value.party}})}function _(t){w||(l.value=t.charName)}function I(t){if(t.source==="soumaUserJS")switch(t.msg.text){case"requestData":u();break}}function G(){f.value=!0}function q(){f.value=!1}function Q(t){J.value=t,j(),L(),u()}return ne(()=>{u(),addOverlayListener("PartyChanged",k),addOverlayListener("ChangePrimaryPlayer",_),addOverlayListener("BroadcastMessage",I),startOverlayEvents()}),oe(()=>{removeOverlayListener("PartyChanged",k),removeOverlayListener("ChangePrimaryPlayer",_),removeOverlayListener("BroadcastMessage",I)}),(t,a)=>{const d=de,R=ce,K=be,W=ve,X=je,Y=pe,Z=me;return c(),p(C,null,[r(n).party.length===0?(c(),p("span",xe,"等待小队...")):re("",!0),x("div",{onMouseenter:G,onMouseleave:q},[y(R,{modelValue:r(h),"onUpdate:modelValue":a[1]||(a[1]=i=>le(h)?h.value=i:null),title:"初见提示",width:"90%","destroy-on-close":!0,"close-on-click-modal":!1},{footer:b(()=>[x("span",Pe,[y(d,{type:"primary",onClick:a[0]||(a[0]=i=>{h.value=!1,E.value=!1})},{default:b(()=>[se("明白了")]),_:1})])]),default:b(()=>[Oe,we]),_:1},8,["modelValue"]),y(Z,{style:ue({width:r(f)?"16.75rem":"5rem"})},{default:b(()=>[y(Y,null,{default:b(()=>[y(ie,{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInLeft","leave-active-class":"animate__fadeOutLeft"},{default:b(()=>[(c(!0),p(C,null,M(r(n).party,(i,ee)=>D((c(),p("div",{key:i.id,flex:"~ nowrap"},[y(W,{modelValue:i.rp,"onUpdate:modelValue":V=>i.rp=V,size:"small","m-0":"","p-0":"",onChange:V=>e(ee),teleported:!1},{default:b(()=>[(c(!0),p(C,null,M(v[g(i.job)],(V,F)=>D((c(),ye(K,{key:F,value:V,"fit-input-width":!0},null,8,["value"])),[[B,F<m[g(i.job)]]])),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),x("span",Se,N(r(s).nameToFullName(r(s).jobEnumToJob(i.job)).simple2)+" "+N(r(f)?i.name:""),1)])),[[B,r(f)||i.name===r(l)]])),128))]),_:1}),D(y(X,{class:"dragJob",onUpdateSortArr:Q,party:r(n).party,"m-b-1":"","p-1":""},null,8,["party"]),[[B,r(f)]])]),_:1})]),_:1},8,["style"])],32)],64)}}});const Ve=H(Je,[["__scopeId","data-v-b2038826"]]);export{Ve as default};
