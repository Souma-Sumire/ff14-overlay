import{d as H,v as J,y as R,o as c,b as d,G as T,H as D,a as _,w as y,u as r,O as Z,t as I,aD as ee,B as te,g as ae,f as j,F as oe,a0 as ne,aE as re,C as N,D as U,P as se,M as le,aF as ue,i as ie,e as ce,p as de,j as pe,c as fe,ab as me,a1 as _e}from"./vendor-ce6ce513.js";import{U as s,j as ye}from"./util-f6d3a594.js";import{_ as z}from"./index-ecfccaf0.js";import{c as be,a as B}from"./overlay_plugin_api-9faadcd6.js";const ve={flex:"~ col"},he=H({__name:"dragJob",props:{party:{}},emits:["updateSortArr"],setup(k,{emit:O}){const b=J(),p=J(!0),P=O,A=k,F=()=>{P("updateSortArr",Object.values(w.value).flat().map(t=>t.id))},n=[{name:"tank",color:"blue"},{name:"healer",color:"green"},{name:"dps",color:"red"}];function E(t){return A.party.find(o=>o.job===t)}const f=s.getBattleJobs3(),V=f.filter(t=>s.isTankJob(t)).map(t=>s.jobToJobEnum(t)).sort((t,o)=>s.enumSortMethod(t,o)),x=f.filter(t=>s.isHealerJob(t)).map(t=>s.jobToJobEnum(t)).sort((t,o)=>s.enumSortMethod(t,o)),m=f.filter(t=>s.isDpsJob(t)).map(t=>s.jobToJobEnum(t)).sort((t,o)=>s.enumSortMethod(t,o)),l={tank:V,healer:x,dps:m,unknown:[]},h=Object.values(l).flat().map(t=>({name:s.nameToFullName(s.jobEnumToJob(t)).simple1,id:t})),w=R("cactbotRuntime-jobList",{tank:h.filter(t=>l.tank.includes(t.id)).sort((t,o)=>l.tank.indexOf(t.id)-l.tank.indexOf(o.id)),healer:h.filter(t=>l.healer.includes(t.id)).sort((t,o)=>l.healer.indexOf(t.id)-l.healer.indexOf(o.id)),dps:h.filter(t=>l.dps.includes(t.id)).sort((t,o)=>l.dps.indexOf(t.id)-l.dps.indexOf(o.id)),unknown:[]});return(t,o)=>(c(),d("div",ve,[(c(),d(T,null,D(n,(S,L)=>_(r(ee),{key:L,ref_for:!0,ref_key:"el",ref:b,disabled:!p.value,modelValue:r(w)[S.name],"onUpdate:modelValue":g=>r(w)[S.name]=g,animation:"150",ghostClass:"ghost",class:"flex flex-row gap-0.25 p-0 m-t-0.25 m-b-0.25 rounded",onUpdate:F,filter:".no-draggable",forceFallback:!0},{default:y(()=>[(c(!0),d(T,null,D(r(w)[S.name],g=>(c(),d("div",{key:g.id,class:Z(`${E(g.id)?`draggable bg-${S.color}`:"no-draggable bg-gray-700/50"} rounded p-l-0.6 p-r-0.6 p-t-0 p-b-0.3 m-0 color-white cursor-move`)},I(g.name),3))),128))]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"])),64))]))}});const ge=z(he,[["__scopeId","data-v-1e09b055"]]),G=k=>(de("data-v-c31eee2f"),k=k(),pe(),k),je={key:0,style:{color:"white","text-shadow":"1px 1px 2px black"}},ke=G(()=>j("p",null,"使悬浮窗的位置分配对应游戏内的实际位置（D1D2等）",-1)),xe=G(()=>j("ul",null,[j("li",null,"长期：用鼠标拖动职能顺序。"),j("li",null,"临时：下拉选择框修改。")],-1)),we={class:"dialog-footer"},Se={style:{"white-space":"nowrap"}},Je=H({__name:"cactbotRuntime",setup(k){const O=(e,a)=>Array(a).fill(e).map((i,M)=>i+ +M+1),b={tank:["MT","ST",...O("T",70)],healer:[...O("H",72)],dps:[...O("D",72)],unknown:["unknown"]},p=J(!1),P=R("cactbotRuntime-sortArr",ye),A=[{id:"10000001",name:"虚构战士",job:21,inParty:!0},{id:"10000002",name:"虚构骑士",job:19,inParty:!0},{id:"10000003",name:"虚构占星",job:33,inParty:!0},{id:"10000004",name:"虚构学者",job:28,inParty:!0},{id:"10000005",name:"虚构忍者",job:30,inParty:!0},{id:"10000006",name:"虚构武士",job:34,inParty:!0},{id:"10000007",name:"虚构黑魔",job:25,inParty:!0},{id:"10000008",name:"虚构舞者",job:38,inParty:!0}],n=R("cactbotRuntime-data",{party:[]}),E=R("cactbotRuntime-showTips",J(!0)),f={tank:0,healer:0,dps:0,unknown:1};function V(){f.tank=n.value.party.reduce((e,a)=>v(a.job)==="tank"?e+1:e,0),f.healer=n.value.party.reduce((e,a)=>v(a.job)==="healer"?e+1:e,0),f.dps=n.value.party.reduce((e,a)=>v(a.job)==="dps"?e+1:e,0)}const x=location.href.includes("localhost"),m=J(!1),l=J(x?"虚构占星":"");if(x){const e={party:A};E.value&&(p.value=!0),n.value.party=e.party.map(a=>({...a,rp:"",specify:!1})),h(),V(),o()}function v(e){const a=Number(e);return[1,3,19,21,32,37].includes(a)?"tank":[6,24,28,33,40].includes(a)?"healer":[2,4,5,7,20,22,23,25,26,27,29,30,31,34,35,36,38,39].includes(a)?"dps":"unknown"}function h(){n.value.party.sort((e,a)=>P.value.indexOf(e.job)-P.value.indexOf(a.job));for(const e of n.value.party)e.rp=void 0,e.rp=t(e)}function w(e){n.value.party[e].specify=!0;const a=n.value.party.find(i=>i.rp===n.value.party[e].rp&&i.id!==n.value.party[e].id);a&&(a.rp=t(a),a.specify=!0),o()}function t(e){return b[v(e.job)].find(a=>!n.value.party.find(i=>i.rp===a))??"unknown"}function o(){const e=[...b.tank,...b.healer,...b.dps];n.value.party.sort((a,i)=>e.indexOf(a.rp??"")-e.indexOf(i.rp??"")),be({call:"broadcast",source:"soumaRuntimeJS",msg:{party:n.value.party}})}function S(){m.value=!0}function L(){m.value=!1}function g(e){P.value=e,h(),V(),o()}return te(()=>{o(),B("PartyChanged",e=>{E.value&&(p.value=!0),!(x&&e.party.length===0)&&(n.value.party=e.party.filter(a=>a.inParty).map(a=>({...a,rp:"",specify:!1})),h(),V(),o())}),B("ChangePrimaryPlayer",e=>{x||(l.value=e.charName)}),B("BroadcastMessage",e=>{e.source==="soumaUserJS"&&typeof e.msg=="object"&&e.msg!==null&&Reflect.get(e.msg,"text")==="requestData"&&o()}),startOverlayEvents()}),(e,a)=>{const i=le,M=ue,q=me,Q=_e,K=ge,W=ie,X=ce;return c(),d(T,null,[r(n).party.length===0?(c(),d("span",je,"等待小队...")):ae("",!0),j("div",{onMouseenter:S,onMouseleave:L},[_(M,{modelValue:r(p),"onUpdate:modelValue":a[1]||(a[1]=u=>ne(p)?p.value=u:null),title:"初见提示",width:"90%","destroy-on-close":!0,"close-on-click-modal":!1},{footer:y(()=>[j("span",we,[_(i,{type:"primary",onClick:a[0]||(a[0]=u=>{p.value=!1,E.value=!1})},{default:y(()=>[oe("明白了")]),_:1})])]),default:y(()=>[ke,xe]),_:1},8,["modelValue"]),_(X,{style:se({width:r(m)?"16.75rem":"5rem"})},{default:y(()=>[_(W,null,{default:y(()=>[_(re,{name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInLeft","leave-active-class":"animate__fadeOutLeft"},{default:y(()=>[(c(!0),d(T,null,D(r(n).party,(u,Y)=>N((c(),d("div",{key:u.id,flex:"~ nowrap"},[_(Q,{modelValue:u.rp,"onUpdate:modelValue":C=>u.rp=C,size:"small","m-0":"","p-0":"",onChange:C=>w(Y),teleported:!1},{default:y(()=>[(c(!0),d(T,null,D(b[v(u.job)],(C,$)=>N((c(),fe(q,{key:$,value:C,"fit-input-width":!0},null,8,["value"])),[[U,$<f[v(u.job)]]])),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),j("span",Se,I(r(s).nameToFullName(r(s).jobEnumToJob(u.job)).simple2)+" "+I(r(m)?u.name:""),1)])),[[U,r(m)||u.name===r(l)]])),128))]),_:1}),N(_(K,{class:"dragJob",onUpdateSortArr:g,party:r(n).party,"m-b-1":"","p-1":""},null,8,["party"]),[[U,r(m)]])]),_:1})]),_:1},8,["style"])],32)],64)}}});const Te=z(Je,[["__scopeId","data-v-c31eee2f"]]);export{Te as default};
