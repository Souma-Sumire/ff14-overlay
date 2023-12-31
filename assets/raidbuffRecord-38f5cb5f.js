import{d as nt,at as ot,v as _,y as T,A as st,B as it,au as lt,x as rt,Z as ct,r as B,o as J,b as oe,f as se,D as _e,F as Ne,u as f,a as u,w as D,H as ie,I as ut,a1 as dt,Q as mt,G as ft,t as pt,g as bt,av as vt,aw as ke,c as gt}from"./vendor-834361d8.js";import{t as K,a as yt,p as ht,b as Ct,d as wt}from"./deepClone-46de3b63.js";import{N as z,l as o}from"./netregexes-bb7ceaea.js";import{U as Q}from"./util-f6d3a594.js";import{c as $e,s as xt,a as It}from"./status-2cacdfd9.js";import{g as _t}from"./actionChinese-71b7e526.js";import"./index-f634aad1.js";const Ee=[{id:141,name:"战斗之声",icon:12601,isFriendly:!0},{id:2722,name:"光明神的最终乐章",icon:12622,isFriendly:!0},{id:3183,name:"夺取",icon:14942,isFriendly:!1},{id:2599,name:"神秘环",icon:12936,isFriendly:!0},{id:786,name:"战斗连祷",icon:12578,isFriendly:!0},{id:1910,name:"巨龙右眼",icon:12581,isFriendly:!0},{id:1454,name:"巨龙左眼",icon:12582,isFriendly:!0},{id:1185,name:"义结金兰：攻击",icon:12532,isFriendly:!0},{id:2703,name:"灼热之光",icon:12699,isFriendly:!0},{id:1221,name:"连环计",icon:12809,isFriendly:!1},{id:1297,name:"鼓励",icon:13410,isFriendly:!0},{id:1822,name:"技巧舞步结束",icon:13709,isFriendly:!0},{id:1825,name:"进攻之探戈",icon:13714,isFriendly:!0},{id:1878,name:"占卜",icon:13245,isFriendly:!0}],le=new Map;let Ae;function re(N){if(Ae!==N){const s=N==="Chinese"?Ee:Object.assign(Ee,{});le.clear();for(const y of s)y.fullIcon=$e(y.icon),le.set(y.id.toString(16).toUpperCase(),y);Ae=N}}re("Chinese");function Nt(N){return le.get(N)}const kt=/(?:攻击力|伤害)提高/,Et=/(?:耐性|防御力)(?:大幅)?(?:降低|提升|低下|下降)|受伤(?:加重|减轻)|体力(?:增加|衰减|减少)|伤害屏障/,Te=(N,s)=>Object.entries(xt).reduce((y,[p,[n,k]])=>(N.test(n)&&y.set(p,{name:n,icon:k,isFriendly:s}),y),new Map),At=Te(kt,!0),St=Te(Et,!1),$t={key:0,class:"testLog"},Se="souma-raidbuff-record-2",Ot=nt({__name:"raidbuffRecord",setup(N){const s=ot("hash"),y=_(s.dev==="1"||s.dev===void 0&&!window.OverlayPluginApi&&!s.OVERLAY_WS&&!s.HOST_PORT);y.value&&setTimeout(()=>{y.value=s.dev==="1"||s.dev===void 0&&!window.OverlayPluginApi&&!s.OVERLAY_WS&&!s.HOST_PORT},1e3);function p(e,t){return typeof t=="boolean"?e==="0"?!1:e==="1"?!0:t:typeof t=="number"?isNaN(+e)?t:+e:t}const n={scale:p(s.scale,1),showHeader:p(s.showHeader,!0),showIcon:p(s.showIcon,!0),showName:p(s.showName,!1),abbrId:p(s.abbrId,!0),anonymous:p(s.anonymous,!0),replaceWithYou:p(s.replaceWithYou,!1),parseAA:p(s.parseAA,!1),parseDoT:p(s.parseDoT,!1),minimize:p(s.minimize,!1),actionCN:p(s.actionCN,!0),statusCN:p(s.statusCN,!0),onlyBuffs:p(s.onlyBuffs,!0),filterPov:p(s.filterPov,!0)},k=_(n.minimize),Fe=n.scale>=2||window.devicePixelRatio>=2?"_hr1":"",F={line_height:28*n.scale,time:35*n.scale,action:65*n.scale,source:((n.showIcon?24:0)+(n.showName?n.anonymous||!n.anonymous&&n.abbrId?24:36:0)+4)*n.scale,amount:44*n.scale,properties:32*n.scale},Le={"--vxe-font-size-mini":12*n.scale+"px","--vxe-table-row-line-height":30*n.scale+"px","--vxe-table-row-height-mini":30*n.scale+"px","--vxe-input-height-mini":20*n.scale+"px","--vxe-select-option-height-mini":24*n.scale+"px"},ce={runtime:99,localStorage:3},X=_(!1),O=_(),R=T("raidbuff-record-2-pov-name",""),M=T("raidbuff-record-2-pov-id",""),ue=T("raidbuff-record-2-party-list",[]),L=T("raidbuff-record-2-job-map",{}),q=T("raidbuff-record-2-party-event-party",[]),A=_(0),i=_([{zoneName:"",duration:"00:00",table:[],key:"init"}]),de={rsv:/^262\|(?<timestamp>[^|]*)\|[^|]*\|[^|]*\|_rsv_(?<id>\d*)[^|]*\|(?<real>[^|]*)\|/i,ability:z.ability(),gainsEffect:z.gainsEffect(),losesEffect:z.losesEffect(),inCombat:/^260\|(?<timestamp>[^|]*)\|(?<inACTCombat>[^|]*)\|(?<inGameCombat>[^|]*)\|/i,changeZone:z.changeZone(),partyList:/^11\|(?<timestamp>[^|]*)\|(?<partyCount>\d*)\|(?<list>(?:\w{8}\|){0,})\w{16}/i,primaryPlayer:/^02\|(?<timestamp>[^|]*)\|(?<id>[^|]*)\|(?<name>[^|]*)/,addCombatant:z.addedCombatant(),removingCombatant:z.removingCombatant()},C=_(0),me=T("souma-raidbuff-record-2-zone-name",""),fe=T("souma-raidbuff-record-2-rsv-data",{}),w={friendly:{},enemy:{}},je=e=>{e.table.length=0,e.zoneName="",e.duration="00:00",e.key="init"},Pe=()=>{X.value=!0,C.value=0,A.value=0,i.value.length=1,je(i.value[0])},De=()=>{ge(),X.value=!1},pe=e=>{be(e.rawLine)},be=e=>{var t,r,d;for(const h in de){const I=de[h].exec(e);if(I){const a=e.split("|");switch(h){case"gainsEffect":{const l=a[o.GainsEffect.fields.effectId],c=a[o.GainsEffect.fields.effect],b=a[o.GainsEffect.fields.target],m=a[o.GainsEffect.fields.targetId],x=Number(a[o.GainsEffect.fields.count]);let g=Nt(l);if(!g){const S=m.startsWith("1")&&At.get(parseInt(l,16).toString())||m.startsWith("4")&&St.get(parseInt(l,16).toString());if(!S)return;const G=$e(S.icon),ne=x>1?It(G,x):G;g={id:parseInt(l,16),icon:S.icon,fullIcon:ne,name:S.name,isFriendly:S.isFriendly}}const j=a[o.GainsEffect.fields.duration],E=a[o.GainsEffect.fields.source],P=a[o.GainsEffect.fields.sourceId],ae=new Date(a[o.GainsEffect.fields.timestamp]).getTime()+parseFloat(j)*1e3,Z={name:g.name,count:x,effect:c,effectId:l,source:E,sourceId:P,target:b,targetId:m,expirationTimestamp:ae,fullIcon:g.fullIcon,isPov:M.value===P};m.startsWith("1")&&g.isFriendly?((t=w.friendly)[m]??(t[m]={}))[l]=Z:m.startsWith("4")&&!g.isFriendly&&(((r=w.enemy)[b]??(r[b]={}))[l]=Z)}break;case"losesEffect":{const l=a[o.LosesEffect.fields.target],c=a[o.LosesEffect.fields.targetId],b=a[o.LosesEffect.fields.effectId];c.startsWith("1")?w.friendly[c]&&Reflect.deleteProperty(w.friendly[c],b):w.enemy[l]&&Reflect.deleteProperty(w.enemy[l],b)}break;case"addCombatant":if(a[o.AddedCombatant.fields.job]!=="00"){const l=a[o.AddedCombatant.fields.job],c=new Date(a[o.AddedCombatant.fields.timestamp]).getTime();L.value[a[o.AddedCombatant.fields.id]]={job:parseInt(l,16),timestamp:c}}break;case"removingCombatant":Reflect.deleteProperty(L.value,a[o.RemovedCombatant.fields.id]);break;case"primaryPlayer":M.value=a[o.ChangedPlayer.fields.id];const U=a[o.ChangedPlayer.fields.name];if(R.value===U)return;R.value=U,ye(a[o.ChangedPlayer.fields.name]);break;case"partyList":ue.value=((d=I.groups.list)==null?void 0:d.split("|"))??[];break;case"changeZone":me.value=a[o.ChangeZone.fields.name],ve(new Date(a[o.ChangeZone.fields.timestamp]).getTime());break;case"inCombat":{const l=a[o.InCombat.fields.inACTCombat]==="1",c=a[o.InCombat.fields.inGameCombat]==="1",b=new Date(a[o.InCombat.fields.timestamp]).getTime();if(l||c){if(C.value>0)return;i.value[0].table.length!==0&&(i.value[0]=vt(i.value[0]),i.value.unshift({zoneName:"",duration:"00:00",table:[],key:a[o.InCombat.fields.timestamp]}),i.value.length>=ce.runtime&&i.value.splice(i.value.length-1,1)),C.value=b,i.value[0].zoneName=me.value,A.value=0;const m=O.value;m&&n.filterPov&&m.updateData().then(()=>{const x=m.getColumnByField("source");if(x){const g=x.filters.find(j=>j.value===R.value);if(!g)return;g.checked=!0,m.updateData().then(()=>{H.value.source=!0})}});return}if(!l&&!c){ve(b);return}}break;case"rsv":{const l=Number(I.groups.id),c=a[o.RSVData.fields.value];fe.value[Number(l)]=c}break;case"ability":if(C.value===0)return;{const l=ht(a);if(l.isAttack&&l.amount>=0){const c=a[o.Ability.fields.sourceId]??"???",b=a[o.Ability.fields.targetId]??"???";if(!(c.startsWith("1")&&b.startsWith("4"))||!(c===M.value||ue.value.includes(c)||q.value.find($=>$.id===c)))return;const m=new Date(a[o.Ability.fields.timestamp]??"???").getTime(),x=a[o.Ability.fields.ability],g=x.match(/^_rsv_(?<id>\d+)_/),j=a[o.Ability.fields.id]??"???";let E=x;if(g){const $=Number(g.groups.id);E=fe.value[$]??x.match(/^_(?<id>rsv_\d+)_/).groups.id}else if(E=E.replace(/unknown_.*/,"攻击"),n.parseAA===!1&&/^攻击|攻撃|[Aa]ttack$/.test(E))return;const P=_t(parseInt(j,16)),Ce=P&&P!==""?P:E,ae=Number(a[o.Ability.fields.targetCurrentHp])??"???",Z=Number(a[o.Ability.fields.targetMaxHp])??"???",S=a[o.Ability.fields.source]??"???",G=a[o.Ability.fields.target]??"???",{effect:ne,type:Qe,properties:Xe}=Ct(l.flags),qe=C.value===0?0:m-C.value,et=ee(qe),we=ze(c),tt=Q.nameToFullName(Q.jobEnumToJob(we)).cn.substring(0,2),xe=we,at=Q.jobEnumToIcon(xe).toLocaleLowerCase(),Ie=wt(Object.values(w.friendly[c]??[]).concat(Object.values(w.enemy[G]??[])).filter($=>{const Y=Math.max(0,($.expirationTimestamp-m)/1e3);return $.remainingDuration=Y>=999?"":Y.toFixed(Y>.05&&Y<.95?1:0),Number($.remainingDuration)>-3}));if(n.onlyBuffs&&Ie.length===0)return;Oe({timestamp:m,time:et,id:j,action:E,actionCN:Ce,source:S,target:G,sourceId:c,job:tt,jobIcon:at,jobEnum:xe,amount:l.amount,raidbuffs:Ie,currentHp:ae,maxHp:Z,effect:ne,properties:Xe,type:Qe,povId:M.value}),i.value[0].duration=ee(new Date(a[o.Ability.fields.timestamp]).getTime()-C.value)}break}}}}},ze=e=>{const t=L.value[e],r=q.value.find(d=>d.id===e)??{job:0,timestamp:0};return[t,r].sort((d,h)=>h.timestamp-d.timestamp)[0].job},Oe=e=>{i.value[0].table.unshift(e)},ve=e=>{C.value!==0&&(i.value[0].duration=ee(e-C.value),C.value=0,w.friendly={},w.enemy={},ge())},ge=()=>{localStorage.setItem(Se,JSON.stringify(i.value.slice(0,ce.localStorage)))},Re=()=>{const e=localStorage.getItem(Se);if(e)try{const t=JSON.parse(e);i.value.length=0,i.value.push(...t)}catch(t){console.error(t)}},ee=e=>{const t=Math.max(Math.floor(e/6e4),0),r=Math.max(Math.floor((e-t*6e4)/1e3),0);return`${t<10?"0":""}${t}:${r<10?"0":""}${r}`},Me=st(()=>{const e={},t=new Set(i.value[A.value].table.slice().sort((r,d)=>Q.enumSortMethod(r.jobEnum,d.jobEnum)).map(r=>(e[r.source]=r.job,r.source)));return Array.from(t).map(r=>({label:`${e[r]}（${r}）`,value:r}))});let te=e=>e;const ye=e=>{/^([A-Z])\S+ ([A-Z])\S+$/.test(e)?(n.abbrId&&(te=t=>t.replace(/^([A-Z])\S+ ([A-Z])\S+$/,"$1.$2.")),re("Global")):(n.abbrId&&(te=t=>t.substring(0,2)),re("Chinese"))};ye(R.value);const he=e=>{const t=e.target;t.src.includes("cafemaker.wakingsands.com")?t.src=t.src.replace("cafemaker.wakingsands.com","xivapi.com"):t.src.includes("xivapi.com")&&(t.src="")},He=e=>{R.value=e.charName,M.value=e.charID.toString(16).toUpperCase()},Ge=e=>{q.value=e.party.map(t=>({...t,timestamp:Date.now()}))};it(()=>{for(const e in L.value){const t=L.value[e];Date.now()-t.timestamp>1e3*60*60*24*1&&Reflect.deleteProperty(L.value,e)}Re(),addOverlayListener("LogLine",pe),addOverlayListener("PartyChanged",Ge),addOverlayListener("ChangePrimaryPlayer",He),startOverlayEvents()}),lt(()=>{removeOverlayListener("LogLine",pe)});const Be=({row:e})=>u("div",null,[u("span",{class:"target"},[n.showIcon&&u("img",{class:"jobIcon",src:`//cafemaker.wakingsands.com/cj/companion/${e.jobIcon}.png`,alt:"","data-job":n.showName?"":e.job,onError:he,loading:"lazy"},null),n.showName&&u("span",{class:`job ${e.jobIcon} ${e.sourceId===e.povId?"YOU":""}`},[e.sourceId===e.povId&&n.replaceWithYou?"YOU":n.anonymous?e.job:te(e.source)])])]),Ve=({row:e})=>u("span",{class:"amount"},[u("span",{class:`${e.type}`},[u("span",null,[e.amount.toLocaleString().padStart(3,"　")])])]),We=({row:e})=>u(ie,null,[e.type==="dot"?"（不支持）":e.raidbuffs.map(t=>u("span",{class:"status",title:`${t.name}(${t.source})`,"data-duration":t.remainingDuration,"data-sourcePov":t.isPov},[u("img",{class:"statusIcon",src:`//cafemaker.wakingsands.com/i/${t.fullIcon}${Fe}.png`,alt:t.effect,onError:he,loading:"lazy"},null)]))]),Ue=e=>{const{action:t,actionCN:r,amount:d,job:h,raidbuffs:v,source:I,time:a,type:U,properties:l}=e,c=e.effect==="damage done"?"":","+K(e.effect),b=`${a} [${h}]${I}的“${t}${r!==t?"("+r+")":""}”造成${d.toLocaleString()}点${K(U)}${K(l)}伤害。团辅：${v.length===0&&c===""?"无":v.map(m=>n.statusCN?m.name:m.effect).join(",")+c}。`;Ze(b)},Ze=e=>{navigator.clipboard.writeText(e).catch(()=>{const t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}),ke.modal.message({content:"已复制到剪贴板",status:"success"})},H=_({source:!1,action:!1}),V=_(),W=rt({className:"my-menus",body:{options:[]}});ct(()=>{var e;W.body&&W.body.options&&O.value&&(W.body.options[0]=[{code:"copy",name:"复制详情",prefixIcon:"vxe-icon-copy",className:"my-copy-item"},{code:"clearFilterTarget",name:"取消玩家筛选",prefixIcon:"vxe-icon-funnel-clear",visible:H.value.source,disabled:!1},{code:"filterSelectTarget",name:(e=V.value)!=null&&e.source?`只看[${V.value.job}] ${V.value.source}`:"只看该玩家",prefixIcon:"vxe-icon-user-fill",visible:!H.value.source,disabled:!1}])});const Ye=()=>{k.value=!k.value},Je=({row:e})=>{const t=O.value;t&&(t.setCurrentRow(e),V.value=e)},Ke=({menu:e,row:t,column:r})=>{const d=O.value;switch(e.code){case"copy":if(!t){ke.modal.message({content:"未选中有效数据行",status:"error"});return}Ue(t);break;case"clearFilterTarget":d&&(d.clearFilter(d.getColumnByField("source")),H.value.source=!1);break;case"filterSelectTarget":if(d){const h=d.getColumnByField("source");if(h){const v=h.filters.find(I=>I.value===t.source);if(!v)return;v.checked=!0,d.updateData().then(()=>{d.scrollToRow(t),H.value.source=!0})}}break}};return(e,t)=>{const r=B("vxe-option"),d=B("vxe-select"),h=B("vxe-button"),v=B("vxe-column"),I=B("vxe-table");return J(),oe(ie,null,[se("div",{class:"wrapper",style:Le},[se("header",null,[_e(u(d,{modelValue:f(A),"onUpdate:modelValue":t[0]||(t[0]=a=>dt(A)?A.value=a:null),size:"mini",class:"select"},{default:D(()=>[(J(!0),oe(ie,null,ut(f(i).length,a=>(J(),gt(r,{key:`${f(i)[a-1].key}-${f(i)[a-1].duration}-${f(i)[a-1].zoneName}`,value:a-1,label:`${f(i)[a-1].duration} ${f(i)[a-1].zoneName}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),[[Ne,!f(k)]]),u(h,{class:"minimize",icon:f(k)?"vxe-icon-fullscreen":"vxe-icon-minimize",onClick:Ye,style:mt({opacity:f(k)?.5:1})},null,8,["icon","style"])]),_e(se("main",null,[u(I,{ref_key:"xTable",ref:O,size:"mini",class:"vxe-table","show-overflow":"tooltip",round:"",height:"100%","scroll-y":{enabled:!0},loading:f(X),"show-header":n.showHeader,data:f(i)[f(A)].table,"row-config":{isHover:!0,height:F.line_height},"header-cell-style":{padding:"0px"},onCellMenu:Je,"menu-config":f(W),onMenuClick:Ke},{default:D(()=>[u(v,{width:F.source,field:"source",title:n.showName?"友方":"友",filters:f(Me),"filter-multiple":!1,resizable:!n.anonymous&&!n.abbrId,align:"left","header-align":"center"},{default:D(({row:a})=>[u(Be,{row:a},null,8,["row"])]),_:1},8,["width","title","filters","resizable"]),u(v,{width:F.time,field:"time",title:"时间",align:"center"},null,8,["width"]),u(v,{width:F.action,field:n.actionCN?"actionCN":"action",title:"技能",resizable:!1,align:"right"},null,8,["width","field"]),u(v,{width:F.amount,title:"伤害","header-align":"center"},{default:D(({row:a})=>[u(Ve,{row:a},null,8,["row"])]),_:1},8,["width"]),u(v,{width:F.properties,title:"直暴","header-align":"center",align:"center"},{default:D(({row:a})=>[ft(pt(f(K)(a.properties).replace(/普通|击$/,"")),1)]),_:1},8,["width"]),u(v,{title:"团辅",align:"left"},{default:D(({row:a})=>[u(We,{row:a},null,8,["row"])]),_:1})]),_:1},8,["loading","show-header","data","row-config","menu-config"])],512),[[Ne,!f(k)]])]),f(y)?(J(),oe("div",$t,[u(yt,{onBeforeHandle:Pe,onAfterHandle:De,onHandleLine:be})])):bt("",!0)],64)}}});export{Ot as default};
