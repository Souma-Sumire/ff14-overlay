import{d as H,J as R,n as k,q as K,p as M,b as Q,ai as B,o as r,e as c,u as o,F as W,L as X,a0 as g,a as Y,y as L,U as D}from"./vendor-9294eafe.js";import{u as ee,p as te,_ as ne}from"./TimelineShow-55a76eff.js";import{a as b,c as I}from"./overlay_plugin_api-409cb9ea.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";import"./util-831b56e7.js";import"./xivapi-a5c0f7f0.js";const ae={id:"wrapper"},ie={key:0,class:"optionalTimelines"},le=["onClick"],se={key:6,style:{color:"white","background-color":"black"}},re=H({__name:"timeline",setup(ce){const n=ee(),l=R({loadedTimeline:[],optionalTimeline:[]}),p=k(0),s=k(0-n.configValues.preBattle),C=k(0);let y=!1;const u=K("timeline-condition",{zoneId:"0",job:"NONE"}),N=new URLSearchParams(location.hash.split("?")[1]),v=k(window.location.href.match(/localhost/)||N.get("dev")==="1"),$=M(()=>l.loadedTimeline.filter(e=>e.sync)),S=M(()=>l.loadedTimeline.filter(e=>e.tts));Q(()=>{U()});function w(e){T(),l.loadedTimeline.length=0,l.optionalTimeline.length=0;const t=n.getTimeline(e);t.length===1?A(t[0]):t.length>1&&(l.optionalTimeline=t)}function x(e){A(e)}async function A(e,t=!0){t&&T(),y=!1,e!=null&&e.timeline&&(l.loadedTimeline=await te(e.timeline),l.loadedTimeline.sort((m,a)=>m.time-a.time),B.fire({position:"top-end",icon:"success",text:`加载了${e.name}`,showConfirmButton:!1,timer:1e3,backdrop:!1})),setTimeout(()=>{y=!0},1e3)}function T(){p.value=0,s.value=0-n.configValues.preBattle,C.value=0;for(const e of l.loadedTimeline)e.alertAlready=!1;for(const e of $.value)e.syncAlready=!1}function _(e,t=!0){t&&(y=!1,setTimeout(()=>{y=!0},1e3)),s.value=0,C.value=0,p.value=new Date().getTime()+e*1e3,S.value.forEach(m=>{m.alertAlready=!1}),E()}function E(){if(p.value===0)return;s.value=(new Date().getTime()-p.value+C.value)/1e3;const e=S.value.find(t=>!t.alertAlready&&t.time-n.configValues.ttsAdvance<=s.value);e&&(e.alertAlready=!0,e.tts&&j(e.tts)),requestAnimationFrame(E)}function O(e){var t,m,a;for(const d of e.detail.logs){const h=d.match(/^.{14} \w+ 00:(?:00b9|0[12]39)::?(?:距离战斗开始还有|Battle commencing in |戦闘開始まで)(?<cd>\d+)[^（(\d]+[（(]/i);if(h)_(Number.parseInt(((t=h==null?void 0:h.groups)==null?void 0:t.cd)||"0"));else if(/^.{14} Director 21:.{8}:4000000F/.test(d)||/^.{14} ChatLog 00:0038::end$/.test(d)||/^.{14} SystemLogMessage 29:.{8}:B1C:/.test(d))T();else{const f=$.value.find(i=>i.sync&&(i.syncOnce&&!i.syncAlready||!i.syncOnce)&&s.value>=i.time-i.windowBefore&&s.value<=i.time+Number(i.windowAfter)&&i.sync.test(d));f&&(f.syncAlready=!0,V(f.jump||f.time))}if(/^.{14} ChatLog 00:0038::/.test(d)){const f=(a=(m=d.match(/^.{14} ChatLog 00:0038::(?<name>.+)$/))==null?void 0:m.groups)==null?void 0:a.name;if(f){const i=n.getTimeline(u.value).find(Z=>Z.name===f);i&&A(i,!1)}}}}function F(e){V(e)}function V(e){p.value===0&&_(0,!1),C.value+=(e-s.value)*1e3,S.value.forEach(t=>{t.time<e&&(t.alertAlready=!0)})}const P=e=>{e.detail.job!==u.value.job?(u.value.job=e.detail.job,w(u.value)):u.value.job=e.detail.job},z=e=>{u.value.zoneId=String(e.zoneID),w(u.value)};function j(e,t=!1){e&&(y||t)&&I({call:"cactbotSay",text:e})}function q(e,t={}){I({call:"broadcast",source:"soumaTimeline",msg:{type:e,data:t}})}const G=e=>{if(e.source==="soumaTimelineSettings"){if(e.msg.type==="post"){const t=e.msg.data;n.allTimelines=t.allTimelines,n.configValues=t.configValues,n.showStyle=t.showStyle,n.saveTimelineSettings(),D.closeAll(),D({message:"已更新数据",type:"success",duration:0,showClose:!0}),w(u.value)}e.msg.type==="get"&&q("post",n.$state)}};function J(e){e.detail.inGameCombat&&e.detail.inACTCombat&&p.value===0?_(0):!e.detail.inGameCombat&&!e.detail.inACTCombat&&T()}function U(){b("onLogEvent",O),b("onPlayerChangedEvent",P),b("ChangeZone",z),b("BroadcastMessage",G),b("onInCombatChangedEvent",J),n.loadTimelineSettings(),B.isVisible()||B.fire({text:`${n.allTimelines.length}条时间轴已就绪`,showConfirmButton:!1,timer:1500,backdrop:!1}),w(u.value)}return(e,t)=>{const m=ne;return r(),c("div",ae,[o(l).optionalTimeline.length&&o(s)<=-o(n).configValues.preBattle?(r(),c("ul",ie,[(r(!0),c(W,null,X(o(l).optionalTimeline,(a,d)=>(r(),c("li",{key:d,onClick:h=>x(a)},L(a.condition.job)+" - "+L(a.name),9,le))),128))])):g("",!0),Y(m,{config:o(n).configValues,lines:o(l).loadedTimeline,runtime:o(s),"show-style":o(n).showStyle},null,8,["config","lines","runtime","show-style"]),o(v)?(r(),c("button",{key:1,onClick:t[0]||(t[0]=a=>_(30))}," 开始从-30 ")):g("",!0),o(v)?(r(),c("button",{key:2,onClick:t[1]||(t[1]=a=>_(0))}," 开始从0 ")):g("",!0),o(v)?(r(),c("button",{key:3,onClick:t[2]||(t[2]=a=>T())}," 团灭 ")):g("",!0),o(v)?(r(),c("button",{key:4,onClick:t[3]||(t[3]=a=>F(1e3))}," 跳转1000测试 ")):g("",!0),o(v)?(r(),c("button",{key:5,onClick:t[4]||(t[4]=a=>j("今天天气真不错",!0))}," TTS测试 ")):g("",!0),o(v)?(r(),c("span",se,L(o(s)),1)):g("",!0)])}}});const ve=oe(re,[["__scopeId","data-v-7c161d54"]]);export{ve as default};
