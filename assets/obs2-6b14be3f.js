import{az as K,q as P,Y as se,b as Q,o as w,e as U,t as i,a,w as o,F as le,L as ie,u as e,c as D,a1 as ce,ad as re,a2 as de,G as ue,H as pe,d as me,n as N,aA as _e,y as r,a0 as z,x as h,aB as S,aC as he,J as fe,ah as be,B as ge,ak as we,N as ve,al as Ce,aD as ye,aE as Ee,as as Se,ap as Ve,af as Te,C as Le,ag as Re,au as Oe}from"./vendor-8bdaa26a.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import{C as $}from"./content_type-52b79aff.js";import{a as G,r as F,c as xe}from"./overlay_plugin_api-409cb9ea.js";import{N as M,c as ke,l as J}from"./netregexes-60f54b26.js";import{z as Pe}from"./zoneInfo-a419d684.js";const Ue=V=>(ue("data-v-66d37cfa"),V=V(),pe(),V),Be={class:"language-switcher"},De={class:"select-wrapper"},Ie=Ue(()=>i("svg",{class:"globe-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[i("circle",{cx:"12",cy:"12",r:"10"}),i("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),i("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})],-1)),Ae={__name:"LanguageSwitcher",setup(V){const{locale:t,availableLocales:u}=K(),_={zhCn:"简体中文",en:"English",ja:"日本語"},p=P("user-locale",t.value);return se(p,T=>{t.value=T}),Q(()=>{t.value=p.value}),(T,y)=>{const I=re,L=de;return w(),U("div",Be,[i("div",De,[Ie,a(L,{modelValue:e(p),"onUpdate:modelValue":y[0]||(y[0]=f=>ce(p)?p.value=f:null),size:"small",class:"language-select"},{default:o(()=>[(w(!0),U(le,null,ie(e(u),(f,B)=>(w(),D(I,{key:B,value:f,label:_[f]},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])])])}}},Ne=X(Ae,[["__scopeId","data-v-66d37cfa"]]),ze={class:"obs-container"},$e={class:"card-header"},Ge={class:"act-not-ready-content"},Fe={key:1},We={class:"card-header"},je={key:1},Ze={class:"card-header"},He={class:"status-info"},Ye={class:"button-container"},qe={class:"card-header"},Me={class:"card-header"},Je=me({__name:"obs2",setup(V){const{t}=K(),u=P("obs-user-config",{host:4455,password:""}),_=P("obs-user-content-setting",[]),p=P("obs-user-content-setting-extra",{raidLimitToEightOrLess:!0,pvpLimitToEightOrLess:!0}),T=P("obs-is-first-time",!0),y=N(!1),I=N(!1);let L=0;const f=N("");function B(){return new Promise(d=>{xe({call:"cactbotRequestState"}).then(()=>{y.value=!0,d()}),setTimeout(()=>{y.value||B()},3e3)})}const W={inCombat:M.inCombat(),countdown:M.countdown(),wipe:ke.wipe},R=["Raids","UltimateRaids","Dungeons","Trials","VCDungeonFinder","DeepDungeons","Guildhests","DisciplesOfTheLand","Eureka","GrandCompany","QuestBattles","TreasureHunt","Pvp"];function ee(){const d=["Raids","UltimateRaids"];if(T.value)T.value=!1,_.value=[...d.map(n=>({type:n,enter:!1,countdown:!0,combatStart:!1,combatEnd:!0,wipe:!0})),...R.filter(n=>!d.includes(n)).map(n=>({type:n,enter:!1,countdown:!1,combatStart:!1,combatEnd:!1,wipe:!1}))];else{_.value=_.value.filter(c=>R.includes(c.type));const n=R.filter(c=>!_.value.some(m=>m.type===c)).map(c=>d.includes(c)?{type:c,enter:!1,countdown:!0,combatStart:!1,combatEnd:!0,wipe:!0}:{type:c,enter:!1,countdown:!1,combatStart:!1,combatEnd:!1,wipe:!1});_.value.push(...n)}_.value.sort((n,c)=>R.indexOf(n.type)-R.indexOf(c.type))}class te{constructor(){this.handleConnectionError=()=>{this.status.connecting=!1,this.status.connected=!1,this.status.recording=!1,this.status.outputActive=!1,this.status.outputPath="",S.modal.close(),S.modal.message({title:t("OBS Connection"),content:t("OBS Connection Error"),status:"warning",duration:2e3})},this.handleConnectionClosed=()=>{this.status.connecting=!1,this.status.connected=!1,this.status.recording=!1,this.status.outputActive=!1,this.status.outputPath="",S.modal.close(),S.modal.message({title:t("OBS Connection"),content:t("OBS Connection Closed"),status:"warning",duration:2e3})},this.ws=new he,this.status=fe({connecting:!1,connected:!1,recording:!1,outputActive:!1,outputPath:""}),this.ws.on("ConnectionClosed",this.handleConnectionClosed),this.ws.on("ConnectionError",this.handleConnectionError),this.ws.on("RecordStateChanged",n=>{this.status.connected=!0,this.status.recording=n.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED",this.status.outputActive=n.outputActive,this.status.outputPath=n.outputPath})}connect(){u.value.host&&u.value.password&&(this.status.connecting=!0,this.ws.connect(`ws://127.0.0.1:${u.value.host}`,u.value.password).then(()=>{this.ws.call("GetRecordStatus").then(n=>{this.status.recording=n.outputActive,this.status.outputActive=n.outputActive}),this.status.connected=!0,S.modal.close(),S.modal.message({title:t("OBS Connection"),content:t("OBS Connection Opened"),status:"success",duration:2e3})}).finally(()=>{this.status.connecting=!1}))}disconnect(){this.ws.disconnect()}startRecord(){this.ws.call("StartRecord")}stopRecord(){this.ws.call("StopRecord")}splitRecord(){this.ws.call("StopRecord").finally(()=>{setTimeout(()=>{this.ws.call("StartRecord")},1e3)})}}const l=new te,j=d=>{var m;const n=d.zoneID,c=(m=Pe[n])==null?void 0:m.contentType;for(const E in $)if(Object.prototype.hasOwnProperty.call($,E)&&$[E]===c){f.value=E,O("enter");return}},Z=d=>{const n=d.rawLine;for(const c in W)if(W[c].exec(n)){const b=n.split("|");switch(c){case"inCombat":{const v=b[J.InCombat.fields.inACTCombat]==="1",x=b[J.InCombat.fields.inGameCombat]==="1";if(v&&x){O("combatStart");return}if(!v&&!x){O("combatEnd");return}break}case"countdown":{O("countdown");break}case"wipe":{O("wipe");break}}}},H=d=>{L=d.party.length};function O(d){const n=l.status.recording;if(_.value.find(c=>c.type===f.value&&c[d])&&!(f.value==="Raids"&&p.value.raidLimitToEightOrLess&&L>8)&&!(f.value==="Pvp"&&p.value.pvpLimitToEightOrLess&&L>5))switch(d){case"enter":case"countdown":case"combatStart":n?l.splitRecord():l.startRecord();return;case"combatEnd":case"wipe":n&&l.stopRecord()}}return Q(async()=>{await B(),l.connect(),G("ChangeZone",j),G("LogLine",Z),G("PartyChanged",H),ee()}),_e(()=>{l.disconnect(),F("ChangeZone",j),F("LogLine",Z),F("PartyChanged",H)}),(d,n)=>{const c=Ne,m=be,E=ge,b=we,v=ve,x=Ce,ne=ye,A=Ee,Y=Se,ae=Ve,C=Te,k=Le,oe=Re,q=Oe;return w(),U("div",ze,[i("header",null,[i("h1",null,r(e(t)("OBS Auto Record V2")),1),a(c)]),e(y)?z("",!0):(w(),D(m,{key:0,class:"act-not-ready-card"},{header:o(()=>[i("div",$e,[i("span",null,r(e(t)("ACT Not Ready")),1)])]),default:o(()=>[i("div",Ge,[i("p",null,r(e(t)("overlayTutorial")),1)])]),_:1})),e(y)?(w(),U("main",Fe,[e(l).status.connected?(w(),U("div",je,[a(A,{class:"instruction-alert",type:"info",description:e(t)("hideTutorial"),closable:!1,"show-icon":""},null,8,["description"]),e(I)?(w(),D(m,{key:0,class:"status-card"},{header:o(()=>[i("div",Ze,[i("span",null,r(e(t)("Connection Status")),1),a(v,{type:"danger",size:"small",class:"disconnect-button",onClick:n[3]||(n[3]=s=>e(l).disconnect())},{default:o(()=>[h(r(e(t)("Disconnect")),1)]),_:1})])]),default:o(()=>[i("div",He,[a(ae,{direction:"vertical",column:1,border:""},{default:o(()=>[a(Y,{label:e(t)("Recording")},{default:o(()=>[h(r(e(l).status.recording?e(t)("Yes"):e(t)("No")),1)]),_:1},8,["label"]),a(Y,{label:e(t)("Output Path")},{default:o(()=>[h(r(e(l).status.outputPath||e(t)("None")),1)]),_:1},8,["label"])]),_:1})]),i("div",Ye,[a(v,{disabled:!e(l).status.connected||e(l).status.recording,type:"primary",onClick:n[4]||(n[4]=s=>e(l).startRecord())},{default:o(()=>[h(r(e(t)("Start Record")),1)]),_:1},8,["disabled"]),a(v,{disabled:!e(l).status.connected||!e(l).status.recording,type:"danger",onClick:n[5]||(n[5]=s=>e(l).stopRecord())},{default:o(()=>[h(r(e(t)("Stop Record")),1)]),_:1},8,["disabled"]),a(v,{disabled:!e(l).status.connected||!e(l).status.recording,type:"warning",onClick:n[6]||(n[6]=s=>e(l).splitRecord())},{default:o(()=>[h(r(e(t)("Split Record")),1)]),_:1},8,["disabled"])])]),_:1})):z("",!0),a(m,{class:"table-card"},{header:o(()=>[i("div",qe,[i("span",null,r(e(t)("User Content Settings")),1)])]),default:o(()=>[a(oe,{data:e(_),style:{width:"100%"},border:!0,stripe:""},{default:o(()=>[a(C,{prop:"type",label:e(t)("Type"),"min-width":"130"},{default:o(s=>[i("span",null,r(e(t)(s.row.type)),1)]),_:1},8,["label"]),a(C,{label:e(t)("Start When"),align:"center"},{default:o(()=>[a(C,{prop:"enter",label:e(t)("Enter Zone"),align:"center","min-width":"100"},{default:o(s=>[a(k,{modelValue:s.row.enter,"onUpdate:modelValue":g=>s.row.enter=g},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(C,{prop:"countdown",label:e(t)("CountDown"),align:"center","min-width":"100"},{default:o(s=>[a(k,{modelValue:s.row.countdown,"onUpdate:modelValue":g=>s.row.countdown=g},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(C,{prop:"combatStart",label:e(t)("CombatStart"),align:"center","min-width":"100"},{default:o(s=>[a(k,{modelValue:s.row.combat,"onUpdate:modelValue":g=>s.row.combat=g},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["label"]),a(C,{label:e(t)("End When"),align:"center"},{default:o(()=>[a(C,{prop:"combatEnd",label:e(t)("CombatEnd"),align:"center","min-width":"100"},{default:o(s=>[a(k,{modelValue:s.row.leave,"onUpdate:modelValue":g=>s.row.leave=g},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),a(C,{prop:"wipe",label:e(t)("Wipe"),align:"center","min-width":"100"},{default:o(s=>[a(k,{modelValue:s.row.wipe,"onUpdate:modelValue":g=>s.row.wipe=g},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1}),a(m,{class:"table-card"},{header:o(()=>[i("div",Me,[i("span",null,r(e(t)("Extra Rule")),1)])]),default:o(()=>[a(x,{"label-position":"top",class:"extra-rule-form"},{default:o(()=>[a(b,{label:e(t)("Raids")},{default:o(()=>[a(q,{modelValue:e(p).raidLimitToEightOrLess,"onUpdate:modelValue":n[7]||(n[7]=s=>e(p).raidLimitToEightOrLess=s)},{default:o(()=>[h(r(e(t)("RaidsLimitToEightOrLess")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(b,{label:e(t)("Pvp")},{default:o(()=>[a(q,{modelValue:e(p).pvpLimitToEightOrLess,"onUpdate:modelValue":n[8]||(n[8]=s=>e(p).pvpLimitToEightOrLess=s)},{default:o(()=>[h(r(e(t)("PvpLimitToEightOrLess")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})])):(w(),D(m,{key:0,class:"connection-card"},{header:o(()=>[i("div",We,[i("span",null,r(e(t)("Connect to OBS")),1)])]),default:o(()=>[a(x,{"label-position":"top",class:"connection-form"},{default:o(()=>[a(b,{label:e(t)("Port")},{default:o(()=>[a(E,{modelValue:e(u).host,"onUpdate:modelValue":n[0]||(n[0]=s=>e(u).host=s),placeholder:e(t)("portPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(b,{label:e(t)("Password")},{default:o(()=>[a(E,{modelValue:e(u).password,"onUpdate:modelValue":n[1]||(n[1]=s=>e(u).password=s),placeholder:e(t)("passwordPlaceholder"),type:"password"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(b,null,{default:o(()=>[a(v,{type:"primary",class:"connect-button",loading:e(l).status.connecting,disabled:e(l).status.connecting||!e(u).host||!e(u).password,onClick:n[2]||(n[2]=s=>e(l).connect())},{default:o(()=>[h(r(e(l).status.connecting?e(t)("Connecting"):e(t)("Connect")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),a(ne,null,{default:o(()=>[h(r(e(t)("Instructions")),1)]),_:1}),a(A,{class:"instruction-alert",type:"info",description:e(t)("obsTutorial"),closable:!1,"show-icon":""},null,8,["description"]),a(A,{class:"instruction-alert",type:"info",description:e(t)("inputTutorial"),closable:!1,"show-icon":""},null,8,["description"])]),_:1}))])):z("",!0)])}}});const at=X(Je,[["__scopeId","data-v-09080664"]]);export{at as default};
