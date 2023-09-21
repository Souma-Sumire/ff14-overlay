import{d as E,b as k,a as I,r as w,f as C,n as D,l as s,k as n,i as m,j as T,E as x,W as V,X as b}from"./index.js";import{E as P,a as $}from"./el-form-item.js";import{E as B}from"./el-row.js";import{E as j}from"./el-col.js";import{E as F}from"./el-input.js";import"./moment.js";import{E as c,a as M}from"./index2.js";import"./index3.js";import"./scroll.js";import"./vnode.js";const X=E({__name:"fflogsCsvTimelineCreate",setup(N){const l=k("fflogs-csv-timeline-create",{api_key:"",url:"",code:""}),a=I({fight:void 0,enemies:[],friendlies:[],enemiesIDs:[],friendyIDs:[],takenEvents:[],showCN:!0,filter:{friendlyID:0},tableData:[],keigenns:[]}),p=w(!1);async function g(){p.value=!0;let r=l.value.url.match(new RegExp("(?<=^|\\/)(?<code>[\\d\\w]{16,})\\/?#fight=(?<fight>\\d+|last)"));if(l.value.api_key.length!==32){c.alert("错误的 API key");return}if(!r){M.error("战斗记录输入有误");return}l.value.code=r.groups.code,await fetch(`https://cn.fflogs.com/v1/report/fights/${l.value.code}?api_key=${l.value.api_key}`).then(t=>t.json()).then(async t=>{var i;const o=(r.groups.fight==="last"?t.fights.length:parseInt(r.groups.fight))-1;a.fight=t.fights[o],a.enemiesIDs=t.enemies.filter(e=>e.type==="Boss").map(e=>e.id),a.enemies=t.enemies,a.friendlies=t.friendlies.filter(e=>e.fights.find(f=>f.id===o)),a.friendyIDs=a.friendlies.map(e=>e.id).filter(e=>{var f;return((f=t.friendlies.find(u=>u.id===e))==null?void 0:f.type)!=="LimitBreak"}),a.takenEvents=[],await d(a.fight.start_time,a.fight.end_time,0),a.takenEvents=a.takenEvents.filter(e=>e.ability.name!=="Combined DoTs"&&e.type==="damage").sort((e,f)=>e.timestamp-f.timestamp),a.filter.friendlyID=((i=a.friendyIDs)==null?void 0:i[0])??0}).catch(t=>{c.alert(t)}),p.value=!1}async function d(r,t,o){o>=0&&await fetch(`https://cn.fflogs.com/v1/report/events/damage-taken/${l.value.code}?start=${r}&end=${t}&hostility=0&sourceid=${a.friendyIDs[o]}&api_key=${l.value.api_key}`).then(i=>i.json()).then(async i=>{let e=i;a.takenEvents.push(...e.events),e!=null&&e.nextPageTimestamp&&(e==null?void 0:e.nextPageTimestamp)>0&&e.nextPageTimestamp<t&&await d(e.nextPageTimestamp,t,o),o<a.friendyIDs.length-1&&await d(r,t,o+1)})}return(r,t)=>{const o=F,i=P,e=j,f=x,u=B,y=$,h=V,v=b;return C(),D(v,null,{default:s(()=>[n(h,{"p-t-0":""},{default:s(()=>[n(y,null,{default:s(()=>[n(i,null,{default:s(()=>[n(u,{gutter:5,style:{width:"100%"}},{default:s(()=>[n(e,{span:6},{default:s(()=>[n(i,{label:"API KEY"},{default:s(()=>[n(o,{modelValue:m(l).api_key,"onUpdate:modelValue":t[0]||(t[0]=_=>m(l).api_key=_),type:"password",placeholder:"","show-password":""},null,8,["modelValue"])]),_:1})]),_:1}),n(e,{span:12},{default:s(()=>[n(i,{label:"FIGHT CODE"},{default:s(()=>[n(o,{modelValue:m(l).url,"onUpdate:modelValue":t[1]||(t[1]=_=>m(l).url=_),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),n(e,{span:6},{default:s(()=>[n(f,{type:"primary",onClick:g,loading:m(p)},{default:s(()=>[T("开始分析")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{X as default};
//# sourceMappingURL=fflogsCsvTimelineCreate.js.map
