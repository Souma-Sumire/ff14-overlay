import{aC as yt,R as gt,d as le,o as x,e as D,F as _e,K as We,s as p,x as T,u as o,O as ee,t as ht,c as Be,w as X,a as S,ax as bt,P as Ge,a7 as ue,m as j,b as Ve,aD as vt,D as kt,G as wt,aE as ke,n as we,p as q,I as Ft,Z as _t,r as de,q as je,v as Pe,a0 as xt,aF as It}from"./vendor-a77f175b.js";import{s as Ke,c as Ze,a as Ct}from"./status-4ace57fd.js";import{g as Je,h as he}from"./xivapi-d474f14e.js";import{N as W,l as i}from"./netregexes-2830d8aa.js";import{a as Fe}from"./overlay_plugin_api-409cb9ea.js";import{_ as Nt}from"./_plugin-vue_export-helper-c27b6911.js";import{U as Q}from"./util-6ab7166a.js";import{g as $t}from"./actionChinese-f1cca7b0.js";const Ye=[{name:"铁壁",id:1191,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"盾阵",id:1856,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"干预",id:1174,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"预警",id:74,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"武装",id:1176,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"神圣领域",id:82,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"圣光幕帘",id:1362,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"圣盾阵",id:2674,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"骑士的坚守",id:2675,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"壁垒",id:77,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的直觉",id:735,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的勇猛",id:1857,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的武猛",id:1858,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"战栗",id:87,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"复仇",id:89,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"摆脱",id:1457,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"死斗",id:409,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血气",id:2678,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血潮",id:2679,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血烟",id:2680,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"至黑之夜",id:1178,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"弃明投暗",id:746,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"暗影墙",id:747,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"暗黑布道",id:1894,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"行尸走肉",id:810,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"死而不僵",id:811,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"出死入生",id:3255,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"献奉",id:2682,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"石之心",id:1840,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"残暴弹",id:1898,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"伪装",id:1832,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"星云",id:1834,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"光之心",id:1839,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"超火流星",id:1836,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"刚玉之心",id:2683,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"刚玉之清",id:2684,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"神祝祷",id:1218,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"节制",id:1873,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"水流幕",id:2708,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"鼓舞",id:297,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"激励",id:1918,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"炽天的幕帘",id:1917,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"野战治疗阵",id:299,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"异想的幻光",id:317,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"炽天的幻光",id:1875,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"生命回生法",id:2710,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"怒涛之计",id:2711,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"命运之轮",id:849,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"天星交错",id:1889,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"擢升",id:2717,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"中间学派",id:1921,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"均衡诊断",id:2607,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"齐衡诊断",id:2608,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"均衡预后",id:2609,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坚角清汁",id:2618,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"白牛清汁",id:2619,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"整体论",id:3003,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"整体盾",id:3365,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"输血",id:2612,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"泛输血",id:2613,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"心眼",id:1232,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"金刚极意",id:1179,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"行吟",id:1934,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"策动",id:1951,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"防守之桑巴",id:1826,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"即兴表演结束",id:2697,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"残影",id:488,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"魔罩",id:168,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"守护之光",id:2702,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"守护纹",id:2597,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"抗死",id:2707,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"雪仇",id:1193,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"牵制",id:1195,type:"multiplier",performance:{physics:1,magic:.5,darkness:0},isFriendly:!1},{name:"昏乱",id:1203,type:"multiplier",performance:{physics:.5,magic:1,darkness:0},isFriendly:!1},{name:"武装解除",id:860,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"减速",id:9,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"体力增加",id:2120,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"腐臭",id:1715,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"智力精神降低",id:2115,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!1},{name:"龙之力",id:2500,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"超硬化",id:1722,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"玄结界",id:2496,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"仙人盾",id:2119,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"强力守护",id:1719,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"哥布防御",id:2114,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"铜墙铁盾",id:194,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坚守要塞",id:195,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"终极堡垒",id:196,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初大地",id:863,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"暗黑之力",id:864,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"灵魂之青",id:1931,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0}],Et=[...Ye,{name:"大预警",id:3829,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大预警[护盾]",id:3830,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大复仇",id:3832,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大暗影墙",id:3835,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大星云",id:3838,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坦培拉涂层",id:3686,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"油性坦培拉",id:3687,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"世界树之干",id:3890,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"建筑神之塔",id:3892,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0}],ge=new Map;let Me="Chinese";function xe(e){if(Me!==e||ge.size===0){ge.clear();for(const t of e==="Chinese"?Ye:Et){const a=Ke[t.id][1];t.fullIcon=Ze(a),ge.set(t.id.toString(16).toUpperCase().padStart(2,"0"),t)}Me=e}}xe("Chinese");function St(e){return ge.get(e)}function Tt(e){return e===1?"useful":e===0?"unuseful":"half-useful"}const Dt=/(?:耐性|防御力)(?:大幅)?(?:降低|提升|低下|下降)|受伤(?:加重|减轻)|体力(?:增加|衰减|减少)|伤害屏障/,At=/(?:精神|力量|灵巧|智力){1,2}(?:大幅)?降低/;function qe(e,t){return Object.entries(Ke).reduce((a,[m,[l,b]])=>(e.test(l)&&a.set(m,{name:l,icon:b,isFriendly:t}),a),new Map)}const Ht=qe(Dt,!0),Lt=qe(At,!1),$=yt("hash"),Ne=gt("keigennRecord2",{state:()=>({userOptions:{scale:H($.scale,1),showHeader:H($.showHeader,!0),showIcon:H($.showIcon,!0),showName:H($.showName,!1),abbrId:H($.abbrId,!0),anonymous:H($.anonymous,!0),replaceWithYou:H($.replaceWithYou,!1),parseAA:H($.parseAA,!0),parseDoT:H($.parseDoT,!1),minimize:H($.minimize,!1),actionCN:H($.actionCN,!0),statusCN:H($.statusCN,!0)},isBrowser:!1,isLocalhost:!1}),getters:{icon4k(e){return e.userOptions.scale>=2||window.devicePixelRatio>=2?"_hr1":""}},actions:{recheckIsDev(){this.isBrowser=!window.OverlayPluginApi&&!$.OVERLAY_WS&&!$.HOST_PORT,this.isLocalhost=location.hostname==="localhost",this.isBrowser&&setTimeout(()=>this.recheckIsDev(),1e3)},formatterName(e){return e},initEnvironment(e){/^[A-Z]\S+ [A-Z]\S+$/.test(e)?(this.userOptions.abbrId&&(this.formatterName=t=>t.replace(/^([A-Z])\S+ ([A-Z])\S+$/,"$1.$2.")),xe("Global")):(this.userOptions.abbrId&&(this.formatterName=t=>t.substring(0,2)),xe("Chinese"))}}});function H(e,t){return typeof t=="boolean"?e==="0"?!1:e==="1"?!0:t:typeof t=="number"?Number.isNaN(+e)?t:+e:t}function Ie(e){switch(e){case"dodge":return"闪避";case"damage done":return"击中";case"blocked damage":return"格挡";case"parried damage":return"招架";case"instant death":return"即死";case"heal":return"治疗";case"crit heal":return"暴击治疗";case"damage":return"普通";case"crit damage":return"暴击";case"direct hit damage":return"直击";case"crit direct hit damage":return"直暴";case"physics":return"物理";case"magic":return"魔法";case"darkness":return"暗黑";default:throw new Error("Unknown type")}}function Ot(e){const t=Rt(e),a=zt(e),m=jt(e);return{effect:t,properties:a,type:m}}function Rt(e){switch(!0){case e.endsWith("1"):return"dodge";case e.endsWith("3"):return"damage done";case e.endsWith("5"):return"blocked damage";case e.endsWith("6"):return"parried damage";case e.endsWith("33"):return"instant death";case e.endsWith("4"):return"heal";case/2\w{4}4$/.test(e):return"crit heal";default:throw new Error(`Unknown effect flag ${e}`)}}function zt(e){switch(!0){case/2\w{3}$/.test(e):return"crit damage";case/4\w{3}$/.test(e):return"direct hit damage";case/6\w{3}$/.test(e):return"crit direct hit damage";default:return"damage"}}function jt(e){switch(!0){case/7?[1-4]\w{3}[35]$|[16]$/.test(e):return"physics";case/^E$/.test(e):case/5\w{4}$/.test(e):return"magic";case/^(?:\d0)?3$/.test(e):case/6\w{4}$/.test(e):return"darkness";default:return console.error(`Unknown type flag ${e}`),"physics"}}const Pt=["3E","113","213","313"],Mt=["A10","E"],Ut=["04"],Wt="36",Bt=["01","03","05","06",Wt];function Gt(e){let a=0,m=e[8]??"",l=e[8+1]??"";Pt.includes(m)&&(a+=2,m=e[8+a]??m,l=e[8+a+1]??l),Mt.includes(m)&&(a+=2,m=e[8+a]??m,l=e[8+a+1]??l);const b=Vt(l),w=`00${m}`.slice(-2);return{amount:b,lowByte:w,flags:m,isHeal:Ut.includes(w),isAttack:Bt.includes(w)}}function Vt(e){if(e===void 0)return 0;const t=e.length;if(t<=4)return 0;let a=Number.parseInt(e.slice(0,t-4),16);if(e[t-4]==="4"){const m=Number.parseInt(e.slice(t-2,t),16);a=a-m+(m<<16)}return a}const Kt={key:0},Zt={key:1},Jt=["title","data-duration","data-sourcePov"],Yt=["src","alt"],qt=le({__name:"StatusShow",props:{row:{type:Object,required:!0}},setup(e){const t=e,m=Ne().icon4k;return(l,b)=>t.row.type==="dot"?(x(),D("div",Kt," （不支持） ")):(x(),D("div",Zt,[(x(!0),D(_e,null,We(t.row.keigenns,(w,B)=>(x(),D("span",{key:B},[p("span",{class:"status",title:`${w.name}(${w.source})`,"data-duration":w.remainingDuration,"data-sourcePov":w.isPov},[p("img",{class:ee(`statusIcon ${o(Tt)(w.performance[e.row.type])}`),src:o(Je)(`/i/${w.fullIcon}${o(m)}.png`),alt:w.effect,loading:"lazy",onError:b[0]||(b[0]=(...v)=>o(he)&&o(he)(...v))},null,42,Yt)],8,Jt)]))),128)),p("span",null,T(e.row.effect==="damage done"?"":o(Ie)(e.row.effect)),1)]))}}),Qt=p("br",null,null,-1),Xt=p("br",null,null,-1),ea=p("br",null,null,-1),ta=p("br",null,null,-1),aa=p("br",null,null,-1),ra=le({__name:"AmountDetails",props:{row:{type:Object,required:!0}},setup(e){const t=e;return(a,m)=>(x(),D("div",null,[p("span",null,"来源:"+T(t.row.source),1),Qt,p("span",null,"目标:"+T(t.row.target),1),Xt,p("span",null," 护盾:"+T(Math.round(t.row.maxHp*+t.row.shield/100))+" ("+T(t.row.shield)+"%) ",1),ea,p("span",null," 血量:"+T(t.row.currentHp)+"/"+T(t.row.maxHp)+" ("+T(Math.round(t.row.currentHp/t.row.maxHp*100))+"%) ",1),ta,p("span",null,[ht("伤害:"),p("span",{class:ee(t.row.type)},T(t.row.amount),3)]),aa,p("span",null," 剩余:"+T(t.row.currentHp-t.row.amount)+" ("+T(Math.round((t.row.currentHp-t.row.amount)/t.row.maxHp*100))+"%) ",1)]))}}),sa=[409 .toString(16).toUpperCase(),810 .toString(16).toUpperCase(),811 .toString(16).toUpperCase(),1836 .toString(16).toUpperCase()];function na(e){return e.currentHp-e.amount<0&&!e.keigenns.find(t=>sa.includes(t.effectId))}const ia={class:"amount"},oa=le({__name:"Amount",props:{row:{type:Object,required:!0}},setup(e){const t=e;return(a,m)=>{const l=ra,b=bt;return x(),Be(b,{"append-to":".wrapper",effect:"dark",placement:"right-start",title:"",trigger:"hover",enterable:!1,"hide-after":0,"popper-class":"my-el-popover"},{reference:X(()=>[p("span",ia,[p("span",{class:ee(t.row.type)},[p("span",{class:ee(`${o(na)(e.row)?"lethal":""}`)},T(e.row.amount.toLocaleString().padStart(3,"　")),3)],2)])]),default:X(()=>[S(l,{row:e.row},null,8,["row"])]),_:1})}}}),ca={key:0,class:"target"},la=["src","data-job"],ma=le({__name:"Target",props:{row:{type:Object,required:!0}},setup(e){const t=e,a=Ne();return(m,l)=>(x(),D("div",null,[o(a).userOptions.showIcon?(x(),D("span",ca,[p("img",{class:"jobIcon",src:o(Je)(`/cj/companion/${t.row.jobIcon}.png`),alt:"","data-job":o(a).userOptions.showName?"":t.row.job,loading:"lazy",onError:l[0]||(l[0]=(...b)=>o(he)&&o(he)(...b))},null,40,la),o(a).userOptions.showName?(x(),D("span",{key:0,class:ee(`job ${t.row.jobIcon} ${t.row.targetId===t.row.povId?"YOU":""}`),style:Ge(!o(a).userOptions.abbrId&&o(a).userOptions.showName?{overflow:"hidden",textOverflow:"ellipsis"}:{})},T(t.row.targetId===t.row.povId&&o(a).userOptions.replaceWithYou?"YOU":o(a).userOptions.anonymous?t.row.job:o(a).formatterName(t.row.target)),7)):ue("",!0)])):ue("",!0)]))}}),da=e=>(kt("data-v-6c0fea12"),e=e(),wt(),e),ua={class:"upload select"},pa=da(()=>p("div",{class:"upload text"},[p("span",null,"+"),p("p",null,"上传或拖入ACT日志")],-1)),fa=le({__name:"testLog",emits:["handleLine","beforeHandle","afterHandle"],setup(e,{emit:t}){const a=t,m=j(null),l=j(null);async function b(v){var F,L;(F=l.value)==null||F.classList.remove("drag");const f=v.target.files;if(!(!f||f.length===0)){a("beforeHandle");for(let G=0;G<f.length;G++){const te=await f[G].text();for(const O of te.split(`
`))a("handleLine",O)}a("afterHandle"),(L=l.value)==null||L.classList.remove("drag")}}function w(v){var f;v.preventDefault(),(f=l.value)==null||f.classList.add("drag")}function B(v){var f;v.preventDefault(),(f=l.value)==null||f.classList.remove("drag")}return Ve(()=>{var v,f,F;(v=m.value)==null||v.addEventListener("change",b),(f=l.value)==null||f.addEventListener("dragover",w),(F=l.value)==null||F.addEventListener("dragleave",B)}),vt(()=>{var v,f,F;(v=m.value)==null||v.removeEventListener("change",b),(f=l.value)==null||f.removeEventListener("dragover",w),(F=l.value)==null||F.removeEventListener("dragleave",B)}),(v,f)=>(x(),D("div",ua,[p("div",{ref_key:"select",ref:l,class:"upload-select"},[pa,p("input",{ref_key:"input",ref:m,type:"file"},null,512)],512)]))}});const ya=Nt(fa,[["__scopeId","data-v-6c0fea12"]]),Ce=(()=>typeof structuredClone=="function"?structuredClone:e=>{if(e===null||typeof e!="object")return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e.source,e.flags);if(Array.isArray(e))return e.map(a=>Ce(a));const t=new e.constructor;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=Ce(e[a]));return t})(),ga={key:0},ha={key:0,class:"testLog"},Ue="souma-keigenn-record-2",Na=le({__name:"keigennRecord2",setup(e){ke.setTheme("dark");const t=Ne(),a=t.userOptions;t.recheckIsDev();const m=we(()=>a.actionCN?"actionCN":"action"),l=j(a.minimize),b={line_height:28*a.scale,time:35*a.scale,action:65*a.scale,target:((a.showIcon?24:0)+(a.showName?a.anonymous||!a.anonymous&&a.abbrId?24:36:0)+7)*a.scale,amount:44*a.scale},w={"--vxe-font-size-mini":`${12*a.scale}px`,"--vxe-ui-row-line-height":`${30*a.scale}px`,"--vxe-ui-row-height-mini":`${30*a.scale}px`,"--vxe-input-height-mini":`${20*a.scale}px`,"--vxe-select-option-height-mini":`${24*a.scale}px`},B={runtime:99,localStorage:3},v=j(!1),f=j(),F=q("keigenn-record-2-pov-name",""),L=q("keigenn-record-2-pov-id",""),G=q("keigenn-record-2-party-list",[]),V=q("keigenn-record-2-job-map",{}),te=q("keigenn-record-2-party-event-party",[]),O=j(0),d=j([{zoneName:"",duration:"00:00",table:[],key:"init"}]),$e={rsv:/^262\|(?<timestamp>[^|]*)\|[^|]*\|[^|]*\|_rsv_(?<id>\d+)_[^|]+\|(?<real>[^|]*)\|/i,ability:W.ability(),statusEffectExplicit:W.statusEffectExplicit(),gainsEffect:W.gainsEffect(),losesEffect:W.losesEffect(),inCombat:/^260\|(?<timestamp>[^|]*)\|(?<inACTCombat>[^|]*)\|(?<inGameCombat>[^|]*)\|/,changeZone:W.changeZone(),partyList:/^11\|(?<timestamp>[^|]*)\|(?<partyCount>\d*)\|(?<list>(?:\w{8}\|)*)\w{16}/,primaryPlayer:/^02\|(?<timestamp>[^|]*)\|(?<id>[^|]*)\|(?<name>[^|]*)/,addCombatant:W.addedCombatant(),removingCombatant:W.removingCombatant(),networkDoT:W.networkDoT()},A=j(0),Ee=q("souma-keigenn-record-2-zone-name",""),Se=q("souma-keigenn-record-2-rsv-data",{}),be={},I={friendly:{},enemy:{}};function Qe(r){r.table.length=0,r.zoneName="",r.duration="00:00",r.key="init"}function Xe(){v.value=!0,A.value=0,O.value=0,d.value.length=1,Qe(d.value[0])}function et(){Le(),v.value=!1}function Te(r){var s,c,g,_,C,re,K,se,Z,k;for(const Oe in $e){const J=$e[Oe].exec(r);if(J){const n=r.split("|");switch(Oe){case"statusEffectExplicit":(s=J.groups)!=null&&s.targetId.startsWith("1")&&(be[(c=J.groups)==null?void 0:c.targetId]=(g=J.groups)==null?void 0:g.currentShield);break;case"gainsEffect":{const u=n[i.GainsEffect.fields.effectId],y=n[i.GainsEffect.fields.effect],h=n[i.GainsEffect.fields.target],N=n[i.GainsEffect.fields.targetId],P=Number.parseInt(n[i.GainsEffect.fields.count],16);let E=St(u);if(!E){const z=N.startsWith("1")&&Ht.get(Number.parseInt(u,16).toString())||N.startsWith("4")&&Lt.get(Number.parseInt(u,16).toString());if(!z)return;const ce=Ze(z.icon),me=P>1?Ct(ce,P):ce;E={type:"multiplier",performance:{physics:1,magic:1,darkness:1},id:Number.parseInt(u,16),fullIcon:me,name:z.name,isFriendly:z.isFriendly}}const ne=n[i.GainsEffect.fields.duration],R=n[i.GainsEffect.fields.source],U=n[i.GainsEffect.fields.sourceId],ie=new Date(n[i.GainsEffect.fields.timestamp]).getTime()+Number.parseFloat(ne)*1e3,oe={name:E.name,count:P,effect:y,effectId:u,source:R,sourceId:U,target:h,targetId:N,expirationTimestamp:ie,performance:E.performance,fullIcon:E.fullIcon,isPov:L.value===U};N.startsWith("1")&&E.isFriendly?(I.friendly[N]===void 0&&(I.friendly[N]={}),I.friendly[N][u]=oe):N.startsWith("4")&&!E.isFriendly&&(I.enemy[h]===void 0&&(I.enemy[h]={}),I.enemy[h][u]=oe)}break;case"losesEffect":{const u=n[i.LosesEffect.fields.target],y=n[i.LosesEffect.fields.targetId],h=n[i.LosesEffect.fields.effectId];y.startsWith("1")?I.friendly[y]&&Reflect.deleteProperty(I.friendly[y],h):I.enemy[u]&&Reflect.deleteProperty(I.enemy[u],h)}break;case"addCombatant":if(n[i.AddedCombatant.fields.job]!=="00"){const u=n[i.AddedCombatant.fields.job],y=new Date(n[i.AddedCombatant.fields.timestamp]).getTime();V.value[n[i.AddedCombatant.fields.id]]={job:Number.parseInt(u,16),timestamp:y}}break;case"removingCombatant":Reflect.deleteProperty(V.value,n[i.RemovedCombatant.fields.id]);break;case"primaryPlayer":{L.value=n[i.ChangedPlayer.fields.id];const u=n[i.ChangedPlayer.fields.name];if(F.value===u)return;F.value=u,t.initEnvironment(n[i.ChangedPlayer.fields.name]);break}case"partyList":G.value=((C=(_=J.groups)==null?void 0:_.list)==null?void 0:C.split("|"))??[];break;case"changeZone":Ee.value=n[i.ChangeZone.fields.name],He(new Date(n[i.ChangeZone.fields.timestamp]).getTime());break;case"inCombat":{const u=n[i.InCombat.fields.inACTCombat]==="1",y=n[i.InCombat.fields.inGameCombat]==="1",h=new Date(n[i.InCombat.fields.timestamp]).getTime();if(u||y){if(A.value>0)return;d.value[0].key==="placeholder"&&d.value.splice(0,1),d.value[0].table.length!==0&&(d.value[0]=It(d.value[0]),d.value.unshift({zoneName:"",duration:"00:00",table:[],key:n[i.InCombat.fields.timestamp]}),d.value.length>=B.runtime&&d.value.splice(d.value.length-1,1)),A.value=h,d.value[0].zoneName=Ee.value,O.value=0;return}if(!u&&!y){He(h);return}}break;case"rsv":{const u=Number((re=J.groups)==null?void 0:re.id),y=n[i.RSVData.fields.value];Se.value[Number(u)]=y}break;case"networkDoT":if(!a.parseDoT)return;{const u=n[i.NetworkDoT.fields.which],y=n[i.NetworkDoT.fields.id];if(u!=="DoT"||y.startsWith("4")||!(y===L.value||G.value.includes(y)||te.value.find(me=>me.id===y)))return;const h=n[i.NetworkDoT.fields.name],N=n[i.NetworkDoT.fields.damage],P=Number.parseInt(N,16),E=new Date(n[i.Ability.fields.timestamp]??"???").getTime(),ne=Number(n[i.NetworkDoT.fields.currentHp]),R=Number(n[i.NetworkDoT.fields.maxHp]),U=A.value===0?0:E-A.value,fe=pe(U),ie=De(y),oe=Q.nameToFullName(Q.jobEnumToJob(ie)).simple2,z=ie,ce=Q.jobEnumToIcon(z).toLowerCase();Ae({timestamp:E,time:fe,id:void 0,action:u,actionCN:u,source:"",target:h,targetId:y,job:oe,jobIcon:ce,jobEnum:z,amount:P,keigenns:[],currentHp:ne,maxHp:R,effect:"damage done",type:"dot",shield:be[y],povId:L.value})}break;case"ability":if(A.value===0)return;{const u=Gt(n);if(u.isAttack&&u.amount>=0){const y=n[i.Ability.fields.sourceId]??"???",h=n[i.Ability.fields.targetId]??"???";if(!(y.startsWith("4")&&h.startsWith("1"))||!(h===L.value||G.value.includes(h)||te.value.find(Y=>Y.id===h)))return;const N=new Date(n[i.Ability.fields.timestamp]??"???").getTime(),P=n[i.Ability.fields.ability],E=P.match(/^_rsv_(?<id>\d+)_/),ne=n[i.Ability.fields.id]??"???";let R=P;if(E){const Y=Number((K=E.groups)==null?void 0:K.id);R=Se.value[Y]??((Z=(se=P.match(/^_(?<id>rsv_\d+)_/))==null?void 0:se.groups)==null?void 0:Z.id)}else if(R=R.replace(/unknown_.*/,"攻击"),a.parseAA===!1&&/^攻击|攻撃|[Aa]ttack$/.test(R))return;const U=$t(Number.parseInt(ne,16)),fe=U&&U!==""?U:R,ie=Number(n[i.Ability.fields.targetCurrentHp])??"???",oe=Number(n[i.Ability.fields.targetMaxHp])??"???",z=n[i.Ability.fields.source]??"???",ce=n[i.Ability.fields.target]??"???",{effect:me,type:lt}=Ot(u.flags),mt=A.value===0?0:N-A.value,dt=pe(mt),Re=De(h),ut=Q.nameToFullName(Q.jobEnumToJob(Re)).simple2,ze=Re,pt=Q.jobEnumToIcon(ze).toLowerCase(),ft=Ce(Object.values(I.friendly[h]??[]).concat(Object.values(I.enemy[z]??[])).filter(Y=>{const ye=Math.max(0,(Y.expirationTimestamp-N)/1e3);return Y.remainingDuration=ye>=999?"":ye.toFixed(ye>.05&&ye<.95?1:0),Number(Y.remainingDuration)>-3}));Ae({timestamp:N,time:dt,id:ne,action:R,actionCN:fe,source:z,target:ce,targetId:h,job:ut,jobIcon:pt,jobEnum:ze,amount:u.amount,keigenns:ft,currentHp:ie,maxHp:oe,effect:me,type:lt,shield:be[((k=J.groups)==null?void 0:k.targetId)??""],povId:L.value}),d.value[0].duration=pe(new Date(n[i.Ability.fields.timestamp]).getTime()-A.value)}break}}}}}function De(r){const s=V.value[r],c=te.value.find(g=>g.id===r)??{job:0,timestamp:0};return[s,c].sort((g,_)=>_.timestamp-g.timestamp)[0].job}function Ae(r){d.value[0].table.unshift(r)}function He(r){A.value!==0&&(d.value[0].duration=pe(r-A.value),A.value=0,I.friendly={},I.enemy={},Le())}function Le(){localStorage.setItem(Ue,JSON.stringify(d.value.slice(0,B.localStorage)))}function tt(){const r=localStorage.getItem(Ue);if(r)try{const s=JSON.parse(r);d.value.length=0,d.value.push(...s)}catch(s){console.error(s)}}function pe(r){const s=Math.max(Math.floor(r/6e4),0),c=Math.max(Math.floor((r-s*6e4)/1e3),0);return`${s<10?"0":""}${s}:${c<10?"0":""}${c}`}const at=we(()=>{const r=new Set(d.value[O.value].table.map(s=>a.actionCN?s.actionCN:s.action));return Array.from(r).map(s=>({label:s,value:s}))}),rt=we(()=>{const r={},s=new Set(d.value[O.value].table.slice().sort((c,g)=>Q.enumSortMethod(c.jobEnum,g.jobEnum)).map(c=>(r[c.target]=c.job,c.target)));return Array.from(s).map(c=>({label:`${r[c]}（${c}）`,value:c}))});t.isBrowser&&(F.value="测试用户"),F.value!==""&&t.initEnvironment(F.value),Ve(()=>{for(const r in V.value){const s=V.value[r];Date.now()-s.timestamp>1e3*60*60*24*1&&Reflect.deleteProperty(V.value,r)}tt(),!t.isBrowser&&d.value[0].key!=="placeholder"&&d.value.unshift({duration:"00:00",table:[],zoneName:"",key:"placeholder"}),Fe("LogLine",r=>{Te(r.rawLine)}),Fe("PartyChanged",r=>{te.value=r.party.map(s=>({...s,timestamp:Date.now()}))}),Fe("ChangePrimaryPlayer",r=>{F.value=r.charName,L.value=Number(r.charID).toString(16).toUpperCase()})});function st(r){const{actionCN:s,amount:c,job:g,keigenns:_,time:C,type:re}=r,K=r.effect==="damage done"?"":`,${Ie(r.effect)}`,se=`${C} ${g} ${s} ${c.toLocaleString()}(${Ie(re)}) 减伤:${_.length===0&&K===""?"无":_.map(Z=>a.statusCN?Z.name:Z.effect).join(",")+K} HP:${r.currentHp}/${r.maxHp}(${Math.round(r.currentHp/r.maxHp*100)}%)+盾:${Math.round(r.maxHp*+r.shield/100)}(${r.shield}%)`;nt(se)}function nt(r){navigator.clipboard.writeText(r).catch(()=>{const s=document.createElement("input");s.value=r,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s)}),ke.modal.message({content:"已复制到剪贴板",status:"success"})}const M=j({target:!1,action:!1}),ae=j(),ve=Ft({className:"my-menus",body:{options:[]}});_t(()=>{var r,s,c,g;(r=ve.body)!=null&&r.options&&f.value&&(ve.body.options[0]=[{code:"copy",name:"复制详情",prefixIcon:"vxe-icon-copy",className:"my-copy-item"},{code:"clearFilterAction",name:"取消技能筛选",prefixIcon:"vxe-icon-funnel-clear",className:"my-clear-filter",visible:M.value.action,disabled:!1},{code:"filterSelectAction",name:(s=ae.value)!=null&&s[m.value]?`只看 ${(c=ae.value)==null?void 0:c[m.value]}`:"只看该技能",prefixIcon:"vxe-icon-info-circle",visible:!M.value.action,disabled:!1},{code:"clearFilterTarget",name:"取消玩家筛选",prefixIcon:"vxe-icon-funnel-clear",visible:M.value.target,disabled:!1},{code:"filterSelectTarget",name:(g=ae.value)!=null&&g.target?`只看[${ae.value.job}] ${ae.value.target}`:"只看该玩家",prefixIcon:"vxe-icon-user-fill",visible:!M.value.target,disabled:!1}])});function it(){l.value=!l.value}const ot=({row:r})=>{const s=f.value;s&&(s.setCurrentRow(r),ae.value=r)},ct=({menu:r,row:s})=>{const c=f.value;switch(r.code){case"copy":if(!s){ke.modal.message({content:"未选中有效数据行",status:"error"});return}st(s);break;case"clearFilterTarget":c&&(c.clearFilter(c.getColumnByField("target")),M.value.target=!1);break;case"clearFilterAction":c&&(c.clearFilter(c.getColumnByField(m.value)),M.value.action=!1);break;case"filterSelectTarget":if(c){const g=c.getColumnByField("target");if(g){const _=g.filters.find(C=>C.value===s.target);if(!_)return;_.checked=!0,c.updateData().then(()=>{c.scrollToRow(s),M.value.target=!0})}}break;case"filterSelectAction":if(c){const g=c.getColumnByField(m.value);if(g){const _=g.filters.find(C=>C.value===s[m.value]);if(!_)return;_.checked=!0,c.updateData().then(()=>{c.scrollToRow(s),M.value.action=!0})}}break}};return(r,s)=>{const c=de("vxe-option"),g=de("vxe-select"),_=de("vxe-button"),C=de("vxe-column"),re=ma,K=oa,se=qt,Z=de("vxe-table");return x(),D(_e,null,[p("div",{class:ee(["wrapper",o(t).isBrowser?"is-browser":"not-browser"]),style:w},[o(a).showHeader?(x(),D("header",ga,[je(S(g,{modelValue:o(O),"onUpdate:modelValue":s[0]||(s[0]=k=>xt(O)?O.value=k:null),size:"mini",class:"select"},{default:X(()=>[(x(!0),D(_e,null,We(o(d).length,k=>(x(),Be(c,{key:`${o(d)[k-1].key}-${o(d)[k-1].duration}-${o(d)[k-1].zoneName}`,value:k-1,label:`${o(d)[k-1].duration} ${o(d)[k-1].zoneName}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),[[Pe,!o(l)]]),S(_,{class:ee(["minimize",o(l)?"in-minimize":"not-minimize"]),icon:o(l)?"vxe-icon-fullscreen":"vxe-icon-minimize",style:Ge({opacity:o(l)?.5:1}),onClick:it},null,8,["class","icon","style"])])):ue("",!0),je(p("main",null,[S(Z,{ref_key:"xTable",ref:f,size:"mini",class:"vxe-table","show-overflow":"tooltip",round:"",height:"100%","scroll-y":{enabled:!0},loading:o(v),"show-header":o(a).showHeader,data:o(d)[o(O)].table,"row-config":{isHover:!0,height:b.line_height},"header-cell-style":{padding:"0px"},"menu-config":o(ve),onCellMenu:ot,onMenuClick:ct},{default:X(()=>[S(C,{width:b.time,field:"time",title:"时间",align:"center"},null,8,["width"]),S(C,{width:b.action,field:o(a).actionCN?"actionCN":"action",title:"技能",filters:o(at),"filter-multiple":!1,resizable:!1,align:"center"},null,8,["width","field","filters"]),S(C,{width:b.target,field:"target",title:"目标",filters:o(rt),"filter-multiple":!1,resizable:!o(a).anonymous&&!o(a).abbrId,align:"left","header-align":"center","header-class-name":o(a).showName?"target-name-column-full":"target-name-column-abbr"},{default:X(({row:k})=>[S(re,{row:k},null,8,["row"])]),_:1},8,["width","filters","resizable","header-class-name"]),S(C,{width:b.amount,title:"伤害","header-align":"center"},{default:X(({row:k})=>[S(K,{row:k},null,8,["row"])]),_:1},8,["width"]),S(C,{title:"减伤",align:"left"},{default:X(({row:k})=>[S(se,{row:k},null,8,["row"])]),_:1})]),_:1},8,["loading","show-header","data","row-config","menu-config"])],512),[[Pe,!o(l)]])],2),o(t).isBrowser?(x(),D("div",ha,[ue("",!0),S(ya,{"m-1":"",onBeforeHandle:Xe,onAfterHandle:et,onHandleLine:Te})])):ue("",!0)],64)}}});export{Na as default};
