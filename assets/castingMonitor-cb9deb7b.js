import{U as E,B as F,A as w,d as j,o as h,b as m,J as v,K as T,u as s,c as G,w as g,g as y,t as P,R as x,S as O,i as k,aI as U,p as z,l as B,a0 as R,I,F as Q,h as J,H as V,a as f,j as W,k as Y,e as q,P as K}from"./vendor-8c5d2527.js";import{c as X,a as b}from"./overlay_plugin_api-409cb9ea.js";import{U as D}from"./util-e47369bd.js";import{s as Z,p as tt,a as et,h as M,b as at}from"./xivapi-782819e1.js";import{_ as N}from"./index-700da392.js";const C=new URLSearchParams(window.location.href.split("?")[1]),L=["tank","healer","dps","crafter","gatherer","none"],H=[34563,34564,34565,34566,34567,34568,34569,34570,34571,34572,34573,34574,34575,34576,34577,34578,34579,34580,34581,34582],$=E("castingMonitor",{state:()=>({castData:F({}),playerId:w(""),focusTargetId:w(""),partyData:[],config:{duration:Number(C.get("duration")||25)},lastPush:Date.now()}),getters:{partyDataFormatted(t){return t.partyData.sort((e,o)=>L.indexOf(D.jobToRole(D.jobEnumToJob(e.job)))-L.indexOf(D.jobToRole(D.jobEnumToJob(o.job))))},focusTargetCastArr(t){var e;return((e=t.castData)==null?void 0:e[t.focusTargetId])??[]}},actions:{testAction(){const t=H[Math.floor(Math.random()*H.length)];this.pushAction(Date.now(),15,"青魔技能随机",this.focusTargetId,t)},testItem(){this.pushAction(Date.now(),15,"item_11c7",this.focusTargetId,33558983)},testItemHQ(){this.pushAction(Date.now(),15,"item_f5407",this.focusTargetId,34558983)},testParty(t){this.handlePartyChanged({party:t?[{id:"10000001",name:"测试张三",job:24,inParty:!0,worldId:0},{id:"10000002",name:"测试李四",job:25,inParty:!0,worldId:0},{id:"10000004",name:"测试王五",job:19,inParty:!0,worldId:0},{id:"10000005",name:"测试赵六",job:23,inParty:!0,worldId:0},{id:"10000006",name:"测试孙七",job:39,inParty:!0,worldId:0},{id:"10000007",name:"测试周八",job:40,inParty:!0,worldId:0},{id:"10000008",name:"测试吴九",job:37,inParty:!0,worldId:0},{id:"10000009",name:"测试郑十",job:38,inParty:!0,worldId:0}]:[]})},async pushAction(t,e,o,r,d,l){const u=/^(?:1|true|yes|on|open|enabled|undefined)$/i.test(C.get("energySaving")||"");let p=d;if(this.partyData.length===0&&r===this.playerId||u&&r===this.focusTargetId||!u&&this.partyData.length>0&&this.partyData.find(c=>c.id===r)){let c,_=!1;if(o.startsWith("item_"))return;o.startsWith("mount_")?(p=Number.parseInt(o.replace(/^.+_/,""),16),p>983040&&(p=Number.parseInt(p.toString().slice(-5),10),_=!0),c=o.replace(/_.+$/,"")):c="action",this.castData[r]||(this.castData[r]=[]);const i=Symbol("cast");this.castData[r].push({time:t,logLine:e,src:"",class:"",key:i,APIData:{}}),this.lastPush=Date.now();const a=this.castData[r].find(n=>n.key===i);if(!a)return;if(setTimeout(()=>{var n;(n=this.castData[r])==null||n.splice(this.castData[r].indexOf(a),1)},(l||this.config.duration)*1e3),o.startsWith("unknown_"))a.src=`${Z.first}/i/000000/000405.png`,a.class="action action-category-0";else if(p<1e5){const n=await tt(c,p,["ID","Icon","ActionCategoryTargetID","Name","Description"]);if(a.APIData=n,a.src=await et((n==null?void 0:n.Icon)??"",_),c==="action"?a.class=`action action-category-${n==null?void 0:n.ActionCategoryTargetID}`:c==="item"?a.class=`item${_?"HQ":""}`:c==="mount"&&(a.class="mount"),n.ActionCategoryTargetID===2||n.ActionCategoryTargetID===3){const A=this.castData[r].filter(S=>/action-category-[23]/.test(S.class)&&S.logLine!==14).at(-2);A&&(a.GCDCast=((a.time-A.time)/1e3).toFixed(2),Number.parseFloat(a.GCDCast)>=2.55&&(a.GCDClass="wasted"))}}}},handleChangePrimaryPlayer(t){this.playerId=t.charID.toString(16).toUpperCase(),this.focusTargetId=this.playerId},handleLogLine(t){t.line[0]==="20"?this.pushAction(Date.parse(t.line[1]),14,t.line[5],t.line[2],Number.parseInt(t.line[4],16),Number(t.line[8])):(t.line[0]==="21"||t.line[0]==="22"&&t.line[45]==="0")&&this.pushAction(Date.parse(t.line[1]),15,t.line[5],t.line[2],Number.parseInt(t.line[4],16))},handlePartyChanged(t){if(t.party.length>0){this.partyData=t.party.filter(e=>e.inParty).map(e=>({...e,src:""}));for(const e in this.castData)Object.prototype.hasOwnProperty.call(this.castData,e)&&(this.partyData.find(o=>o.id===e)||Reflect.deleteProperty(this.castData,e));Object.keys(this.partyData).includes(this.focusTargetId)||(this.focusTargetId=this.playerId)}else this.focusTargetId=this.playerId,this.partyData.length=0},handleClickChangeTarget(t){t===this.focusTargetId?this.focusTargetId=this.playerId:this.focusTargetId=t,/^(?:1|true|yes|on|open|enabled|undefined)$/i.test(C.get("syncFocusWS")||"")&&X({call:"broadcast",source:"castMonitorOverlay",msg:{targetId:this.focusTargetId}})}}}),st=t=>(z("data-v-c1771d0c"),t=t(),B(),t),ot={"w-100vw":"",flex:"~ nowrap",class:"main"},nt=["data-casterId"],rt={class:"elhover"},it=["innerHTML"],lt=["src"],ct=st(()=>y("img",{class:"frame",loading:"lazy"},null,-1)),dt=j({__name:"Main",setup(t){const e=new URLSearchParams(window.location.href.split("?")[1]),o=$(),r=Number(/^(?:1|true|yes|on|open|enabled)$/i.test(e.get("displayAA")??"")),d=Number(/^(?:1|true|yes|on|open|enabled)$/i.test(e.get("displayGCD")??e.get("displayGCDSpace")??""));return(l,u)=>{const p=U;return h(),m("div",ot,[(h(!0),m(v,null,T(s(o).castData,(c,_)=>(h(),m("div",{key:_,"data-casterId":_},[(h(!0),m(v,null,T(c,i=>(h(),G(p,{key:i.key,"raw-content":"",placement:"right-start",effect:"dark",transition:"",teleported:!1,"popper-class":"el-tooltip","show-arrow":!1},{content:g(()=>{var a;return[y("div",rt,[y("strong",null,P(i.APIData.Name),1),y("div",{style:{"white-space":"pre-line"},innerHTML:(a=i.APIData)==null?void 0:a.Description},null,8,it)])]}),default:g(()=>[y("div",{class:x(`images ${i.class} logLine${i.logLine} displayAA${s(r)} displayGCD${s(d)}`),style:O(`--animeDuration: ${s(o).config.duration}s;opacity:${+(s(o).focusTargetId===_)}`)},[y("img",{src:i.src,class:"action-icon",height:"40",loading:"lazy",onError:u[0]||(u[0]=(...a)=>s(M)&&s(M)(...a))},null,40,lt),ct,s(d)===1?(h(),m("span",{key:0,class:x(["GCDCast",i.GCDClass])},P((i==null?void 0:i.GCDCast)??""),3)):k("",!0)],6)]),_:2},1024))),128))],8,nt))),128))])}}});const ut=N(dt,[["__scopeId","data-v-c1771d0c"]]),pt={key:0,"z-100":"",flex:"~ gap0 wrap",class:"header-layout"},ht=["onClick"],ft={flex:"~ nowrap items-end",style:{"align-items":"flex-end",gap:"0.1rem"}},gt=["src"],mt=j({__name:"Header",setup(t){const e=new URLSearchParams(window.location.href.split("?")[1]),o=$();R(()=>{for(const d of o.partyData)d.src=at(d.job)});const r=/^(?:1|true|yes|on|open|enabled|undefined)$/i.test(e.get("showHeader")||"false");return(d,l)=>s(r)?(h(),m("div",pt,[(h(!0),m(v,null,T(s(o).partyDataFormatted,(u,p)=>(h(),m("button",{key:p,class:x(["job-lists",s(o).focusTargetId===u.id?"job-lists-focus":""]),"m-0":"","p-0":"",onClick:c=>s(o).handleClickChangeTarget(u.id)},[y("div",ft,[y("img",{src:u.src,style:{height:"1.25em"},loading:"lazy"},null,8,gt),I(" "+P(s(D).nameToFullName(s(D).jobEnumToJob(u.job)).simple2),1)])],10,ht))),128))])):k("",!0)}});const _t={class:"common-layout"},yt={key:0},It=j({__name:"castingMonitor",setup(t){const e=$(),o=location.href.includes("localhost");Q(()=>{b("ChangePrimaryPlayer",e.handleChangePrimaryPlayer),b("LogLine",e.handleLogLine),b("PartyChanged",e.handlePartyChanged),b("BroadcastMessage",d=>{d.source==="castMonitorOverlay"&&(e.focusTargetId=d.msg.targetId)})});const r=w(!1);return setInterval(()=>{r.value=Date.now()-e.lastPush<e.config.duration*2*1e3},1e3),(d,l)=>{const u=mt,p=W,c=ut,_=Y,i=q,a=K;return J((h(),m("div",_t,[f(i,{"items-center":""},{default:g(()=>[f(p,{class:"header-layout"},{default:g(()=>[f(u)]),_:1}),f(_,{"p-0":""},{default:g(()=>[f(c)]),_:1})]),_:1}),s(o)?(h(),m("footer",yt,[f(a,{onClick:l[0]||(l[0]=n=>s(e).testParty(!0))},{default:g(()=>[I(" 虚假小队 ")]),_:1}),f(a,{onClick:l[1]||(l[1]=n=>s(e).testParty(!1))},{default:g(()=>[I(" 单人 ")]),_:1}),f(a,{onClick:l[2]||(l[2]=n=>s(e).testAction())},{default:g(()=>[I(" Action ")]),_:1}),f(a,{onClick:l[3]||(l[3]=n=>s(e).testItem())},{default:g(()=>[I(" Item ")]),_:1}),f(a,{onClick:l[4]||(l[4]=n=>s(e).testItemHQ())},{default:g(()=>[I(" ItemHQ ")]),_:1})])):k("",!0)],512)),[[V,s(r)]])}}});const Tt=N(It,[["__scopeId","data-v-8d0ae53f"]]);export{Tt as default};
