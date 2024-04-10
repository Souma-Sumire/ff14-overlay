import{av as ut,U as ft,d as ne,o as N,b as T,J as we,K as We,g as y,t as E,u as c,R as fe,c as Be,w as B,a as x,aA as yt,S as Ke,i as _e,D as ke,A as L,C as U,F as gt,B as ht,a0 as bt,r as re,h as Le,H as Pe,a3 as vt,ax as kt,ay as ze}from"./vendor-bfd3a191.js";import{s as Ve,c as Je,a as Ft}from"./status-5d5f450e.js";import{h as ye}from"./xivapi-cae66b04.js";import{t as Ce,a as wt,p as _t,b as Ct,d as xt}from"./deepClone-e0e0475f.js";import{N as P,l as n}from"./netregexes-2830d8aa.js";import{U as W}from"./util-ef9ccf87.js";import{g as Nt}from"./actionChinese-91930ff4.js";import{a as Fe}from"./overlay_plugin_api-409cb9ea.js";import"./queryParams-cf2e4fb1.js";import"./index-a91834b5.js";const Me=[{name:"铁壁",description:"减轻所受到的伤害",id:1191,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"盾阵",description:"受到攻击时必定发动格挡",id:1856,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"干预",description:"减轻所受到的伤害",id:1174,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"预警",description:"减轻所受到的伤害",id:74,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"武装",description:"减轻所受到的伤害",id:1176,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"神圣领域",description:"除特定攻击之外其他所有攻击均无效化",id:82,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"圣光幕帘",description:"抵消一定伤害",id:1362,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"圣盾阵",description:"受到攻击时必定发动格挡",id:2674,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"骑士的坚守",description:"减轻所受到的伤害",id:2675,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"壁垒",description:"受到攻击时必定发动格挡",id:77,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的直觉",description:"自身发动战技命中时可以恢复体力，同时减轻所受到的伤害",id:735,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的勇猛",description:"自身发动战技命中时可以恢复体力",id:1857,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的武猛",description:`附加此效果的战士受到原初的勇猛的恢复体力的效果时，会获得相当于其100%的恢复效果
另外受到攻击的伤害减少`,id:1858,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"战栗",description:`体力最大值提高
习得战栗效果提高后追加效果：自身所受的治疗效果提高`,id:87,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"复仇",description:"受到攻击的伤害减少并且受到物理攻击时会发动反击",id:89,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"摆脱",description:"抵消一定伤害",id:1457,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"死斗",description:"除特定攻击之外其他所有对自身发动的攻击均无法令体力减少到1以下",id:409,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血气",description:"自身发动战技命中时可以恢复体力，同时减轻所受到的伤害",id:2678,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血潮",description:"减轻所受到的伤害",id:2679,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血烟",description:"抵消一定伤害",id:2680,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"至黑之夜",description:"抵消一定伤害",id:1178,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"弃明投暗",description:"减轻所受到的魔法伤害",id:746,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"暗影墙",description:"减轻所受到的伤害",id:747,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"暗黑布道",description:"减轻所受到的魔法伤害",id:1894,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"行尸走肉",description:`受到致命伤害时体力减为1，并附加死而不僵状态
但是对部分攻击无效`,id:810,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"死而不僵",description:"除特定攻击之外其他所有对自身发动的攻击均无法令体力减少到1以下",id:811,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"出死入生",description:"除特定攻击之外其他所有对自身发动的攻击均无法令体力减少到1以下",id:3255,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"献奉",description:"减轻所受到的伤害",id:2682,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"石之心",description:"减轻所受到的伤害",id:1840,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"残暴弹",description:"抵消一定伤害",id:1898,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"伪装",description:"招架发动率提高，减轻所受到的伤害",id:1832,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"星云",description:"减轻所受到的伤害",id:1834,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"光之心",description:"减轻所受到的魔法伤害",id:1839,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"超火流星",description:"除特定攻击之外其他所有攻击均无效化",id:1836,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"刚玉之心",description:"减轻所受到的伤害",id:2683,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"刚玉之清",description:"减轻所受到的伤害",id:2684,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"神祝祷",description:"抵消一定伤害",id:1218,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"节制",description:"减轻所受到的伤害",id:1873,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"水流幕",description:"减轻所受到的伤害",id:2708,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"鼓舞",description:"抵消一定伤害",id:297,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"激励",description:"抵消一定伤害",id:1918,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"炽天的幕帘",description:"抵消一定伤害",id:1917,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"野战治疗阵",description:"减轻所受到的伤害",id:299,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"异想的幻光",description:"发动治疗魔法的治疗量提高，且受到魔法攻击的伤害减少",id:317,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"炽天的幻光",description:"发动治疗魔法的治疗量提高，且受到魔法攻击的伤害减少",id:1875,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"生命回生法",description:"体力最大值提高，同时自身所受体力恢复效果提高",id:2710,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"怒涛之计",description:"减轻所受到的伤害",id:2711,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"命运之轮",description:"减轻所受到的伤害",id:849,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"天星交错",description:"抵消一定伤害",id:1889,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"擢升",description:"减轻所受到的伤害",id:2717,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"中间学派",description:"抵消一定伤害",id:1921,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"均衡诊断",description:"抵消一定伤害",id:2607,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"齐衡诊断",description:"抵消一定伤害",id:2608,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"均衡预后",description:"抵消一定伤害",id:2609,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坚角清汁",description:"减轻所受到的伤害",id:2618,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"白牛清汁",description:"减轻所受到的伤害",id:2619,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"整体论",description:"减轻所受到的伤害",id:3003,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"整体盾",description:"抵消一定伤害",id:3365,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"输血",description:"抵消一定伤害",id:2612,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"泛输血",description:"抵消一定伤害",id:2613,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"心眼",description:"下次受到攻击时所受到的伤害减轻",id:1232,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"金刚极意",description:"减轻所受到的一部分伤害",id:1179,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"行吟",description:"减轻所受到的伤害",id:1934,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"策动",description:"减轻所受到的伤害",id:1951,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"防守之桑巴",description:"减轻所受到的伤害",id:1826,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"即兴表演结束",description:"抵消一定伤害",id:2697,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"残影",description:"抵消一定伤害",id:488,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"魔罩",description:"抵消一定伤害",id:168,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"守护之光",description:"抵消一定伤害",id:2702,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"守护纹",description:"抵消一定伤害",id:2597,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"抗死",description:"减轻所受到的魔法伤害，同时自身所受体力恢复效果提高",id:2707,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"雪仇",description:"攻击所造成的伤害降低",id:1193,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"牵制",description:"物理攻击和魔法攻击所造成的伤害降低",id:1195,type:"multiplier",performance:{physics:1,magic:.5,darkness:0},isFriendly:!1},{name:"昏乱",description:"物理攻击和魔法攻击所造成的伤害降低",id:1203,type:"multiplier",performance:{physics:.5,magic:1,darkness:0},isFriendly:!1},{name:"武装解除",description:"攻击所造成的伤害降低",id:860,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"减速",description:"战技与魔法的咏唱及复唱时间延长",id:9,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"体力增加",description:"体力最大值提高",id:2120,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"腐臭",description:"造成的伤害降低",id:1715,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"智力精神降低",description:"智力与精神有所降低",id:2115,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!1},{name:"龙之力",description:"受到的伤害降低",id:2500,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"超硬化",description:"无法自由活动，但受到攻击的伤害减少",id:1722,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"玄结界",description:"减轻所受到的伤害，受到一定伤害后将附加玄天武水壁状态",id:2496,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"仙人盾",description:"受到的伤害降低",id:2119,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"强力守护",description:"令自身所受到的伤害减少，同时会以攻击力降低为代价提高自身仇恨",id:1719,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"哥布防御",description:"抵消一定伤害",id:2114,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"铜墙铁盾",description:"减轻所受到的伤害",id:194,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坚守要塞",description:"减轻所受到的伤害",id:195,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"终极堡垒",description:"减轻所受到的伤害",id:196,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初大地",description:"减轻所受到的伤害",id:863,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"暗黑之力",description:"减轻所受到的伤害",id:864,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"灵魂之青",description:"减轻所受到的伤害",id:1931,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0}],xe=new Map;let Ge;function Ne(a){if(Ge!==a){const t=a==="Chinese"?Me:Object.assign(Me,{});xe.clear();for(const i of t){const h=Ve[i.id][1];i.fullIcon=Je(h),xe.set(i.id.toString(16).toUpperCase(),i)}Ge=a}}Ne("Chinese");function It(a){return xe.get(a)}const $t=a=>a===1?"useful":a===0?"unuseful":"half-useful",Et=/(?:耐性|防御力)(?:大幅)?(?:降低|提升|低下|下降)|受伤(?:加重|减轻)|体力(?:增加|衰减|减少)|伤害屏障/,Tt=/(?:精神|力量|灵巧|智力){1,2}(?:大幅)?降低/,Ze=(a,t)=>Object.entries(Ve).reduce((i,[h,[b,k]])=>(a.test(b)&&i.set(h,{name:b,icon:k,isFriendly:t}),i),new Map),St=Ze(Et,!0),At=Ze(Tt,!1),g=ut("hash"),Ie=ft("keigennRecord2",{state:()=>({userOptions:{scale:$(g.scale,1),showHeader:$(g.showHeader,!0),showIcon:$(g.showIcon,!0),showName:$(g.showName,!1),abbrId:$(g.abbrId,!0),anonymous:$(g.anonymous,!0),replaceWithYou:$(g.replaceWithYou,!1),parseAA:$(g.parseAA,!0),parseDoT:$(g.parseDoT,!1),minimize:$(g.minimize,!1),actionCN:$(g.actionCN,!0),statusCN:$(g.statusCN,!0)},isDev:!1}),getters:{icon4k(a){return a.userOptions.scale>=2||window.devicePixelRatio>=2?"_hr1":""}},actions:{recheckIsDev(){this.isDev=g.dev==="1"||g.dev===void 0&&!window.OverlayPluginApi&&!g.OVERLAY_WS&&!g.HOST_PORT,this.isDev&&setTimeout(this.recheckIsDev,1e3)},formatterName(a){return a},initEnvironment(a){/^([A-Z])\S+ ([A-Z])\S+$/.test(a)?(this.userOptions.abbrId&&(this.formatterName=t=>t.replace(/^([A-Z])\S+ ([A-Z])\S+$/,"$1.$2.")),Ne("Global")):(this.userOptions.abbrId&&(this.formatterName=t=>t.substring(0,2)),Ne("Chinese"))}}});function $(a,t){return typeof t=="boolean"?a==="0"?!1:a==="1"?!0:t:typeof t=="number"?Number.isNaN(+a)?t:+a:t}const Dt={key:0},jt={key:1},Ht=["title","data-duration","data-sourcePov"],Ot=["src","alt"],Rt=ne({__name:"StatusShow",props:{row:{type:Object,required:!0}},setup(a){const i=Ie().icon4k,h=a;return(b,k)=>h.row.type==="dot"?(N(),T("div",Dt,"（不支持）")):(N(),T("div",jt,[(N(!0),T(we,null,We(h.row.keigenns,(D,ae)=>(N(),T("span",{key:ae},[y("span",{class:"status",title:`${D.name}(${D.source})`,"data-duration":D.remainingDuration,"data-sourcePov":D.isPov},[y("img",{class:fe(`statusIcon ${c($t)(D.performance[a.row.type])}`),src:`//cafemaker.wakingsands.com/i/${D.fullIcon}${c(i)}.png`,alt:D.effect,onError:k[0]||(k[0]=(...ie)=>c(ye)&&c(ye)(...ie)),loading:"lazy"},null,42,Ot)],8,Ht)]))),128)),y("span",null,E(a.row.effect==="damage done"?"":c(Ce)(a.row.effect)),1)]))}}),Lt=y("br",null,null,-1),Pt=y("br",null,null,-1),zt=y("br",null,null,-1),Mt=y("br",null,null,-1),Gt=ne({__name:"AmountDetails",props:{row:{type:Object,required:!0}},setup(a){const t=a;return(i,h)=>(N(),T("div",null,[y("span",null," 盾:"+E(Math.round(t.row.maxHp*+t.row.shield/100))+" ("+E(t.row.shield)+"%) ",1),Lt,y("span",null," HP:"+E(t.row.currentHp)+"/"+E(t.row.maxHp)+" ("+E(Math.round(t.row.currentHp/t.row.maxHp*100))+"%) ",1),Pt,y("span",null,"来源:"+E(t.row.source),1),zt,y("span",null,"受到伤害:"+E(t.row.amount),1),Mt,y("span",null," 剩余HP:"+E(t.row.currentHp-t.row.amount)+" ("+E(Math.round((t.row.currentHp-t.row.amount)/t.row.maxHp*100))+"%) ",1)]))}}),Ut=[409 .toString(16).toUpperCase(),810 .toString(16).toUpperCase(),811 .toString(16).toUpperCase(),1836 .toString(16).toUpperCase()],Wt=a=>a.currentHp-a.amount<0&&!a.keigenns.find(t=>Ut.includes(t.effectId)),Bt={class:"amount"},Kt=ne({__name:"Amount",props:{row:{type:Object,required:!0}},setup(a){const t=a;return(i,h)=>{const b=Gt,k=yt;return N(),Be(k,{"append-to":".wrapper",effect:"dark",placement:"right-start",title:"",trigger:"hover",enterable:!1,"hide-after":0,"popper-class":"my-el-popover"},{reference:B(()=>[y("span",Bt,[y("span",{class:fe(t.row.type)},[y("span",{class:fe(`${c(Wt)(a.row)?"lethal":""}`)},E(a.row.amount.toLocaleString().padStart(3,"　")),3)],2)])]),default:B(()=>[x(b,{row:a.row},null,8,["row"])]),_:1})}}}),Vt={key:0,class:"target"},Jt=["src","data-job"],Zt=ne({__name:"Target",props:{row:{type:Object,required:!0}},setup(a){const t=Ie(),i=a;return(h,b)=>(N(),T("div",null,[c(t).userOptions.showIcon?(N(),T("span",Vt,[y("img",{class:"jobIcon",src:`//cafemaker.wakingsands.com/cj/companion/${i.row.jobIcon}.png`,alt:"","data-job":c(t).userOptions.showName?"":i.row.job,onError:b[0]||(b[0]=(...k)=>c(ye)&&c(ye)(...k)),loading:"lazy"},null,40,Jt),c(t).userOptions.showName?(N(),T("span",{key:0,class:fe(`job ${i.row.jobIcon} ${i.row.targetId===i.row.povId?"YOU":""}`),style:Ke(!c(t).userOptions.abbrId&&c(t).userOptions.showName?{overflow:"hidden",textOverflow:"ellipsis"}:{})},E(i.row.targetId===i.row.povId&&c(t).userOptions.replaceWithYou?"YOU":c(t).userOptions.anonymous?i.row.job:c(t).formatterName(i.row.target)),7)):_e("",!0)])):_e("",!0)]))}}),Yt={key:0,class:"testLog"},Ue="souma-keigenn-record-2",oi=ne({__name:"keigennRecord2",setup(a){const t=Ie(),i=t.userOptions;t.recheckIsDev();const h=ke(()=>i.actionCN?"actionCN":"action"),b=L(i.minimize),k={line_height:28*i.scale,time:35*i.scale,action:65*i.scale,target:((i.showIcon?24:0)+(i.showName?i.anonymous||!i.anonymous&&i.abbrId?24:36:0)+7)*i.scale,amount:44*i.scale},D={"--vxe-font-size-mini":`${12*i.scale}px`,"--vxe-table-row-line-height":`${30*i.scale}px`,"--vxe-table-row-height-mini":`${30*i.scale}px`,"--vxe-input-height-mini":`${20*i.scale}px`,"--vxe-select-option-height-mini":`${24*i.scale}px`},ae={runtime:99,localStorage:3},ie=L(!1),oe=L(),ce=U("keigenn-record-2-pov-name",""),z=U("keigenn-record-2-pov-id",""),ge=U("keigenn-record-2-party-list",[]),K=U("keigenn-record-2-job-map",{}),le=U("keigenn-record-2-party-event-party",[]),H=L(0),d=L([{zoneName:"",duration:"00:00",table:[],key:"init"}]),$e={rsv:/^262\|(?<timestamp>[^|]*)\|[^|]*\|[^|]*\|_rsv_(?<id>\d*)[^|]*\|(?<real>[^|]*)\|/i,ability:P.ability(),statusEffectExplicit:P.statusEffectExplicit(),gainsEffect:P.gainsEffect(),losesEffect:P.losesEffect(),inCombat:/^260\|(?<timestamp>[^|]*)\|(?<inACTCombat>[^|]*)\|(?<inGameCombat>[^|]*)\|/i,changeZone:P.changeZone(),partyList:/^11\|(?<timestamp>[^|]*)\|(?<partyCount>\d*)\|(?<list>(?:\w{8}\|){0,})\w{16}/i,primaryPlayer:/^02\|(?<timestamp>[^|]*)\|(?<id>[^|]*)\|(?<name>[^|]*)/,addCombatant:P.addedCombatant(),removingCombatant:P.removingCombatant(),networkDoT:P.networkDoT()},I=L(0),Ee=U("souma-keigenn-record-2-zone-name",""),Te=U("souma-keigenn-record-2-rsv-data",{}),he={},F={friendly:{},enemy:{}},Ye=e=>{e.table.length=0,e.zoneName="",e.duration="00:00",e.key="init"},qe=()=>{ie.value=!0,I.value=0,H.value=0,d.value.length=1,Ye(d.value[0])},Xe=()=>{He(),ie.value=!1},Se=e=>{var s,o,p,w,v,J,Z,Y,q,u;for(const me in $e){const M=$e[me].exec(e);if(M){const r=e.split("|");switch(me){case"statusEffectExplicit":(s=M.groups)!=null&&s.targetId.startsWith("1")&&(he[(o=M.groups)==null?void 0:o.targetId]=(p=M.groups)==null?void 0:p.currentShield);break;case"gainsEffect":{const l=r[n.GainsEffect.fields.effectId],m=r[n.GainsEffect.fields.effect],f=r[n.GainsEffect.fields.target],_=r[n.GainsEffect.fields.targetId],j=Number(r[n.GainsEffect.fields.count]);let C=It(l);if(!C){const A=_.startsWith("1")&&St.get(Number.parseInt(l,16).toString())||_.startsWith("4")&&At.get(Number.parseInt(l,16).toString());if(!A)return;const te=Je(A.icon),se=j>1?Ft(te,j):te;C={type:"multiplier",performance:{physics:1,magic:1,darkness:1},id:Number.parseInt(l,16),fullIcon:se,name:A.name,isFriendly:A.isFriendly}}const X=r[n.GainsEffect.fields.duration],S=r[n.GainsEffect.fields.source],R=r[n.GainsEffect.fields.sourceId],Q=new Date(r[n.GainsEffect.fields.timestamp]).getTime()+Number.parseFloat(X)*1e3,ee={name:C.name,count:j,effect:m,effectId:l,source:S,sourceId:R,target:f,targetId:_,expirationTimestamp:Q,performance:C.performance,fullIcon:C.fullIcon,isPov:z.value===R};_.startsWith("1")&&C.isFriendly?(F.friendly[_]===void 0&&(F.friendly[_]={}),F.friendly[_][l]=ee):_.startsWith("4")&&!C.isFriendly&&(F.enemy[f]===void 0&&(F.enemy[f]={}),F.enemy[f][l]=ee)}break;case"losesEffect":{const l=r[n.LosesEffect.fields.target],m=r[n.LosesEffect.fields.targetId],f=r[n.LosesEffect.fields.effectId];m.startsWith("1")?F.friendly[m]&&Reflect.deleteProperty(F.friendly[m],f):F.enemy[l]&&Reflect.deleteProperty(F.enemy[l],f)}break;case"addCombatant":if(r[n.AddedCombatant.fields.job]!=="00"){const l=r[n.AddedCombatant.fields.job],m=new Date(r[n.AddedCombatant.fields.timestamp]).getTime();K.value[r[n.AddedCombatant.fields.id]]={job:Number.parseInt(l,16),timestamp:m}}break;case"removingCombatant":Reflect.deleteProperty(K.value,r[n.RemovedCombatant.fields.id]);break;case"primaryPlayer":{z.value=r[n.ChangedPlayer.fields.id];const l=r[n.ChangedPlayer.fields.name];if(ce.value===l)return;ce.value=l,t.initEnvironment(r[n.ChangedPlayer.fields.name]);break}case"partyList":ge.value=((v=(w=M.groups)==null?void 0:w.list)==null?void 0:v.split("|"))??[];break;case"changeZone":Ee.value=r[n.ChangeZone.fields.name],je(new Date(r[n.ChangeZone.fields.timestamp]).getTime());break;case"inCombat":{const l=r[n.InCombat.fields.inACTCombat]==="1",m=r[n.InCombat.fields.inGameCombat]==="1",f=new Date(r[n.InCombat.fields.timestamp]).getTime();if(l||m){if(I.value>0)return;d.value[0].table.length!==0&&(d.value[0]=kt(d.value[0]),d.value.unshift({zoneName:"",duration:"00:00",table:[],key:r[n.InCombat.fields.timestamp]}),d.value.length>=ae.runtime&&d.value.splice(d.value.length-1,1)),I.value=f,d.value[0].zoneName=Ee.value,H.value=0;return}if(!l&&!m){je(f);return}}break;case"rsv":{const l=Number((J=M.groups)==null?void 0:J.id),m=r[n.RSVData.fields.value];Te.value[Number(l)]=m}break;case"networkDoT":if(!i.parseDoT)return;{const l=r[n.NetworkDoT.fields.which],m=r[n.NetworkDoT.fields.id];if(l!=="DoT"||m.startsWith("4")||!(m===z.value||ge.value.includes(m)||le.value.find(se=>se.id===m)))return;const f=r[n.NetworkDoT.fields.name],_=r[n.NetworkDoT.fields.damage],j=Number.parseInt(_,16),C=new Date(r[n.Ability.fields.timestamp]??"???").getTime(),X=Number(r[n.NetworkDoT.fields.currentHp]),S=Number(r[n.NetworkDoT.fields.maxHp]),R=I.value===0?0:C-I.value,pe=de(R),Q=Ae(m),ee=W.nameToFullName(W.jobEnumToJob(Q)).simple2,A=Q,te=W.jobEnumToIcon(A).toLocaleLowerCase();De({timestamp:C,time:pe,id:void 0,action:l,actionCN:l,source:"",target:f,targetId:m,job:ee,jobIcon:te,jobEnum:A,amount:j,keigenns:[],currentHp:X,maxHp:S,effect:"damage done",type:"dot",shield:he[m],povId:z.value})}break;case"ability":if(I.value===0)return;{const l=_t(r);if(l.isAttack&&l.amount>=0){const m=r[n.Ability.fields.sourceId]??"???",f=r[n.Ability.fields.targetId]??"???";if(!(m.startsWith("4")&&f.startsWith("1"))||!(f===z.value||ge.value.includes(f)||le.value.find(G=>G.id===f)))return;const _=new Date(r[n.Ability.fields.timestamp]??"???").getTime(),j=r[n.Ability.fields.ability],C=j.match(/^_rsv_(?<id>\d+)_/),X=r[n.Ability.fields.id]??"???";let S=j;if(C){const G=Number((Z=C.groups)==null?void 0:Z.id);S=Te.value[G]??((q=(Y=j.match(/^_(?<id>rsv_\d+)_/))==null?void 0:Y.groups)==null?void 0:q.id)}else if(S=S.replace(/unknown_.*/,"攻击"),i.parseAA===!1&&/^攻击|攻撃|[Aa]ttack$/.test(S))return;const R=Nt(Number.parseInt(X,16)),pe=R&&R!==""?R:S,Q=Number(r[n.Ability.fields.targetCurrentHp])??"???",ee=Number(r[n.Ability.fields.targetMaxHp])??"???",A=r[n.Ability.fields.source]??"???",te=r[n.Ability.fields.target]??"???",{effect:se,type:ot}=Ct(l.flags),ct=I.value===0?0:_-I.value,lt=de(ct),Oe=Ae(f),dt=W.nameToFullName(W.jobEnumToJob(Oe)).cn.substring(0,2),Re=Oe,mt=W.jobEnumToIcon(Re).toLocaleLowerCase(),pt=xt(Object.values(F.friendly[f]??[]).concat(Object.values(F.enemy[A]??[])).filter(G=>{const ue=Math.max(0,(G.expirationTimestamp-_)/1e3);return G.remainingDuration=ue>=999?"":ue.toFixed(ue>.05&&ue<.95?1:0),Number(G.remainingDuration)>-3}));De({timestamp:_,time:lt,id:X,action:S,actionCN:pe,source:A,target:te,targetId:f,job:dt,jobIcon:mt,jobEnum:Re,amount:l.amount,keigenns:pt,currentHp:Q,maxHp:ee,effect:se,type:ot,shield:he[((u=M.groups)==null?void 0:u.targetId)??""],povId:z.value}),d.value[0].duration=de(new Date(r[n.Ability.fields.timestamp]).getTime()-I.value)}break}}}}},Ae=e=>{const s=K.value[e],o=le.value.find(p=>p.id===e)??{job:0,timestamp:0};return[s,o].sort((p,w)=>w.timestamp-p.timestamp)[0].job},De=e=>{d.value[0].table.unshift(e)},je=e=>{I.value!==0&&(d.value[0].duration=de(e-I.value),I.value=0,F.friendly={},F.enemy={},He())},He=()=>{localStorage.setItem(Ue,JSON.stringify(d.value.slice(0,ae.localStorage)))},Qe=()=>{const e=localStorage.getItem(Ue);if(e)try{const s=JSON.parse(e);d.value.length=0,d.value.push(...s)}catch(s){console.error(s)}},de=e=>{const s=Math.max(Math.floor(e/6e4),0),o=Math.max(Math.floor((e-s*6e4)/1e3),0);return`${s<10?"0":""}${s}:${o<10?"0":""}${o}`},et=ke(()=>{const e=new Set(d.value[H.value].table.map(s=>i.actionCN?s.actionCN:s.action));return Array.from(e).map(s=>({label:s,value:s}))}),tt=ke(()=>{const e={},s=new Set(d.value[H.value].table.slice().sort((o,p)=>W.enumSortMethod(o.jobEnum,p.jobEnum)).map(o=>(e[o.target]=o.job,o.target)));return Array.from(s).map(o=>({label:`${e[o]}（${o}）`,value:o}))});t.initEnvironment(ce.value),gt(()=>{for(const e in K.value){const s=K.value[e];Date.now()-s.timestamp>1e3*60*60*24*1&&Reflect.deleteProperty(K.value,e)}Qe(),Fe("LogLine",e=>{Se(e.rawLine)}),Fe("PartyChanged",e=>{le.value=e.party.map(s=>({...s,timestamp:Date.now()}))}),Fe("ChangePrimaryPlayer",e=>{ce.value=e.charName,z.value=Number(e.charID).toString(16).toUpperCase()}),startOverlayEvents()});const it=e=>{const{action:s,actionCN:o,amount:p,job:w,keigenns:v,source:J,target:Z,time:Y,type:q}=e,u=e.effect==="damage done"?"":`,${Ce(e.effect)}`,me=`${Y} [${w}]${Z} HP:${e.currentHp}/${e.maxHp}(${Math.round(e.currentHp/e.maxHp*100)}%) + 护盾:${Math.round(e.maxHp*+e.shield/100)}(${e.shield}%) 受到${J}“${s}${o!==s?`(${o})`:""}”的${p.toLocaleString()}点${Ce(q)}伤害。剩余HP:${e.currentHp-e.amount}(${Math.round((e.currentHp-e.amount)/e.maxHp*100)}%)。减伤：${v.length===0&&u===""?"无":v.map(ve=>i.statusCN?ve.name:ve.effect).join(",")+u}。`;st(me)},st=e=>{navigator.clipboard.writeText(e).catch(()=>{const s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s)}),ze.modal.message({content:"已复制到剪贴板",status:"success"})},O=L({target:!1,action:!1}),V=L(),be=ht({className:"my-menus",body:{options:[]}});bt(()=>{var e,s,o,p;(e=be.body)!=null&&e.options&&oe.value&&(be.body.options[0]=[{code:"copy",name:"复制详情",prefixIcon:"vxe-icon-copy",className:"my-copy-item"},{code:"clearFilterAction",name:"取消技能筛选",prefixIcon:"vxe-icon-funnel-clear",className:"my-clear-filter",visible:O.value.action,disabled:!1},{code:"filterSelectAction",name:(s=V.value)!=null&&s[h.value]?`只看 ${(o=V.value)==null?void 0:o[h.value]}`:"只看该技能",prefixIcon:"vxe-icon-info-circle",visible:!O.value.action,disabled:!1},{code:"clearFilterTarget",name:"取消玩家筛选",prefixIcon:"vxe-icon-funnel-clear",visible:O.value.target,disabled:!1},{code:"filterSelectTarget",name:(p=V.value)!=null&&p.target?`只看[${V.value.job}] ${V.value.target}`:"只看该玩家",prefixIcon:"vxe-icon-user-fill",visible:!O.value.target,disabled:!1}])});const rt=()=>{b.value=!b.value},nt=({row:e})=>{const s=oe.value;s&&(s.setCurrentRow(e),V.value=e)},at=({menu:e,row:s})=>{const o=oe.value;switch(e.code){case"copy":if(!s){ze.modal.message({content:"未选中有效数据行",status:"error"});return}it(s);break;case"clearFilterTarget":o&&(o.clearFilter(o.getColumnByField("target")),O.value.target=!1);break;case"clearFilterAction":o&&(o.clearFilter(o.getColumnByField(h.value)),O.value.action=!1);break;case"filterSelectTarget":if(o){const p=o.getColumnByField("target");if(p){const w=p.filters.find(v=>v.value===s.target);if(!w)return;w.checked=!0,o.updateData().then(()=>{o.scrollToRow(s),O.value.target=!0})}}break;case"filterSelectAction":if(o){const p=o.getColumnByField(h.value);if(p){const w=p.filters.find(v=>v.value===s[h.value]);if(!w)return;w.checked=!0,o.updateData().then(()=>{o.scrollToRow(s),O.value.action=!0})}}break}};return(e,s)=>{const o=re("vxe-option"),p=re("vxe-select"),w=re("vxe-button"),v=re("vxe-column"),J=Zt,Z=Kt,Y=Rt,q=re("vxe-table");return N(),T(we,null,[y("div",{class:"wrapper",style:D},[y("header",null,[Le(x(p,{modelValue:c(H),"onUpdate:modelValue":s[0]||(s[0]=u=>vt(H)?H.value=u:null),size:"mini",class:"select"},{default:B(()=>[(N(!0),T(we,null,We(c(d).length,u=>(N(),Be(o,{key:`${c(d)[u-1].key}-${c(d)[u-1].duration}-${c(d)[u-1].zoneName}`,value:u-1,label:`${c(d)[u-1].duration} ${c(d)[u-1].zoneName}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),[[Pe,!c(b)]]),x(w,{class:"minimize",icon:c(b)?"vxe-icon-fullscreen":"vxe-icon-minimize",onClick:rt,style:Ke({opacity:c(b)?.5:1})},null,8,["icon","style"])]),Le(y("main",null,[x(q,{ref_key:"xTable",ref:oe,size:"mini",class:"vxe-table","show-overflow":"tooltip",round:"",height:"100%","scroll-y":{enabled:!0},loading:c(ie),"show-header":c(i).showHeader,data:c(d)[c(H)].table,"row-config":{isHover:!0,height:k.line_height},"header-cell-style":{padding:"0px"},onCellMenu:nt,"menu-config":c(be),onMenuClick:at},{default:B(()=>[x(v,{width:k.time,field:"time",title:"时间",align:"center"},null,8,["width"]),x(v,{width:k.action,field:c(i).actionCN?"actionCN":"action",title:"技能",filters:c(et),"filter-multiple":!1,resizable:!1,align:"center"},null,8,["width","field","filters"]),x(v,{width:k.target,field:"target",title:c(i).showName?"目标":"目",filters:c(tt),"filter-multiple":!1,resizable:!c(i).anonymous&&!c(i).abbrId,align:"left","header-align":"center"},{default:B(({row:u})=>[x(J,{row:u},null,8,["row"])]),_:1},8,["width","title","filters","resizable"]),x(v,{width:k.amount,title:"伤害","header-align":"center"},{default:B(({row:u})=>[x(Z,{row:u},null,8,["row"])]),_:1},8,["width"]),x(v,{title:"减伤",align:"left"},{default:B(({row:u})=>[x(Y,{row:u},null,8,["row"])]),_:1})]),_:1},8,["loading","show-header","data","row-config","menu-config"])],512),[[Pe,!c(b)]])]),c(t).isDev?(N(),T("div",Yt,[x(wt,{onBeforeHandle:qe,onAfterHandle:Xe,onHandleLine:Se})])):_e("",!0)],64)}}});export{oi as default};
