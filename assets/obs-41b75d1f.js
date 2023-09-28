import{d as B,y as U,x as A,aw as P,v as R,B as $,ax as p,ay as D,r as g,o as q,b as H,g as f,R as I,u as r,D as v,F as C,a as l,w as h,f as b,G as N,az as F}from"./vendor-8d19117d.js";const W={"p-b-2":""},J=B({__name:"obs",setup(G){var V;const L=(V=JSON.parse(window.localStorage.getItem("obs-data")??"{}"))==null?void 0:V.password,s=U("obs2-data",{port:"4455",password:L??"",greaterThanOrEqualTo:4,partyLength:1,autoHide:!1},localStorage,{mergeDefaults:!0}),t=A({connecting:!1,recording:!1,inACTCombat:!1}),o=new P,u=R(!0);$(async()=>{u.value=!s.value.autoHide,o.on("ExitStarted",i),o.on("ConnectionClosed",i),o.on("ConnectionError",i),o.on("RecordStateChanged",T),addOverlayListener("onLogEvent",S),addOverlayListener("onInCombatChangedEvent",E),addOverlayListener("PartyChanged",O),startOverlayEvents(),s.value.password!==""?(await y(!1),o.call("GetRecordStatus").then(n=>t.recording=n.outputActive)):p.modal.alert({content:"先锁定悬浮窗，再填写端口与密码",title:"初次使用",width:"80%",size:"mini"})}),D(()=>{o.off("ExitStarted",i),o.off("ConnectionClosed",i),o.off("ConnectionError",i),o.off("RecordStateChanged",T),removeOverlayListener("onLogEvent",S),removeOverlayListener("onInCombatChangedEvent",E),removeOverlayListener("PartyChanged",O),o.disconnect()});async function y(n=!1){return o.connect(`ws://127.0.0.1:${s.value.port}`,s.value.password).then(e=>{p.modal.message({content:"连接成功",status:"success",width:"7rem",size:"mini",top:8}),t.connecting=!0,u.value=!1}).catch(e=>{n&&p.modal.message({content:"连接失败",status:"error",width:"7rem",size:"mini",top:8}),t.connecting=!1})}async function m(n=!0,e=!1){if(!e&&s.value.partyLength<s.value.greaterThanOrEqualTo)return Promise.resolve();t.connecting||await y(),t.recording&&n?o.call("StopRecord").then(()=>setTimeout(()=>o.call("StartRecord").catch(()=>{}),1500)).catch(()=>{}):o.call("StartRecord").catch(()=>{})}async function x(){return t.recording?o.call("StopRecord").catch(()=>{}):Promise.resolve()}function i(){t.connecting=!1}function T(n){switch(n.outputState){case"OBS_WEBSOCKET_OUTPUT_STARTED":t.recording=!0;return;case"OBS_WEBSOCKET_OUTPUT_STOPPED":t.recording=!1;return}}async function S(n){for(const e of n.detail.logs)/^.{14} \w+ 00:(?:00B9|0[12]39)::?(?:距离战斗开始还有|Battle commencing in |戦闘開始まで)\d+[^（(]+[（(]/i.test(e)?m():/^.{14} (?:Director 21:.{8}:4000000[3F]|ChatLog 00:0038::end$|ChatLog 00:(?:00B9|0[12]39)::(?:.+取消了战斗开始倒计时。|Countdown canceled by .+\.|.+により、戦闘開始カウントがキャンセルされました。))/i.test(e)&&x()}async function E(n){!t.inACTCombat&&n.detail.inACTCombat&&m(!1),t.inACTCombat&&!n.detail.inACTCombat&&x(),t.inACTCombat=n.detail.inACTCombat}function O(n){var e;s.value.partyLength=((e=n.party)==null?void 0:e.length)??0}return(n,e)=>{const c=g("vxe-button"),_=g("vxe-input"),w=g("vxe-form-item"),z=g("vxe-form"),k=F;return q(),H(N,null,[f("header",null,[f("div",null,[f("i",{class:"vxe-icon-dot icon",style:I({color:r(t).recording?"red":"gray",textShadow:"0px  0px 3px black"})},null,4),v(l(c,{class:"btns",icon:"vxe-icon-caret-right",onClick:e[0]||(e[0]=a=>m(!1,!0))},null,512),[[C,!r(t).recording]]),v(l(c,{class:"btns",icon:"vxe-icon-close",onClick:x,size:"mini"},null,512),[[C,r(t).recording]]),l(c,{class:"btns",icon:"vxe-icon-setting",onClick:e[1]||(e[1]=a=>u.value=!r(u)),size:"mini"}),v(l(c,{class:"btns",icon:"vxe-icon-cut",onClick:e[2]||(e[2]=a=>m(!0,!0)),size:"mini"},null,512),[[C,r(t).recording]])])]),v(f("main",W,[l(z,{data:r(s)},{default:h(()=>[l(w,{span:"24"},{default:h(({data:a})=>[b(" 自动录制最少小队人数 "),l(_,{modelValue:a.greaterThanOrEqualTo,"onUpdate:modelValue":d=>a.greaterThanOrEqualTo=d,size:"small",type:"integer",min:"0",max:"8",style:{width:"3rem","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(w,{span:"24"},{default:h(({data:a})=>[b(" 端口 "),l(_,{modelValue:a.port,"onUpdate:modelValue":d=>a.port=d,size:"small",placeholder:"端口号",style:{width:"4rem","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(w,{span:"24"},{default:h(({data:a})=>[b(" 密码 "),l(_,{modelValue:a.password,"onUpdate:modelValue":d=>a.password=d,size:"small",placeholder:"密码",type:"password",style:{width:"12rem"}},null,8,["modelValue","onUpdate:modelValue"]),l(c,{content:"无法输入",size:"mini",icon:"vxe-icon-question",type:"text",status:"info",onClick:e[3]||(e[3]=d=>r(p).modal.message({content:"先点击ACT，再点击悬浮窗，即可正常输入"}))})]),_:1})]),_:1},8,["data"]),l(c,{size:"mini",status:"primary",icon:"vxe-icon-swap",content:"连接",onClick:e[4]||(e[4]=a=>y(!0))}),l(k,{style:{"margin-left":"1em"},modelValue:r(s).autoHide,"onUpdate:modelValue":e[5]||(e[5]=a=>r(s).autoHide=a),label:"启动时隐藏设置界面（即使连接失败）"},null,8,["modelValue"])],512),[[C,r(u)]])],64)}}});export{J as default};