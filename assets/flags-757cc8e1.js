import{aw as L,U,d as F,o as f,b as h,g as a,t as o,I as T,R as k,c as W,w as I,u as m,a as R,aA as V,S as B,i as $,A as x,F as M,ax as P,p as z,l as Y}from"./vendor-4119510c.js";import{s as O,c as K}from"./status-fac9a947.js";import{g as Z,h as N}from"./xivapi-d474f14e.js";import{_ as q}from"./index-d22cd35f.js";const A=[{name:"铁壁",id:1191,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"盾阵",id:1856,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"干预",id:1174,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"预警",id:74,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"武装",id:1176,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"神圣领域",id:82,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"圣光幕帘",id:1362,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"圣盾阵",id:2674,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"骑士的坚守",id:2675,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"壁垒",id:77,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的直觉",id:735,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的勇猛",id:1857,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的武猛",id:1858,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"战栗",id:87,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"复仇",id:89,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"摆脱",id:1457,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"死斗",id:409,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血气",id:2678,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血潮",id:2679,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初的血烟",id:2680,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"至黑之夜",id:1178,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"弃明投暗",id:746,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"暗影墙",id:747,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"暗黑布道",id:1894,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"行尸走肉",id:810,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"死而不僵",id:811,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"出死入生",id:3255,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"献奉",id:2682,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"石之心",id:1840,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"残暴弹",id:1898,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"伪装",id:1832,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"星云",id:1834,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"光之心",id:1839,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"超火流星",id:1836,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"刚玉之心",id:2683,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"刚玉之清",id:2684,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"神祝祷",id:1218,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"节制",id:1873,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"水流幕",id:2708,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"鼓舞",id:297,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"激励",id:1918,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"炽天的幕帘",id:1917,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"野战治疗阵",id:299,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"异想的幻光",id:317,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"炽天的幻光",id:1875,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"生命回生法",id:2710,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"怒涛之计",id:2711,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"命运之轮",id:849,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"天星交错",id:1889,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"擢升",id:2717,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"中间学派",id:1921,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"均衡诊断",id:2607,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"齐衡诊断",id:2608,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"均衡预后",id:2609,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坚角清汁",id:2618,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"白牛清汁",id:2619,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"整体论",id:3003,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"整体盾",id:3365,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"输血",id:2612,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"泛输血",id:2613,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"心眼",id:1232,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"金刚极意",id:1179,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"行吟",id:1934,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"策动",id:1951,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"防守之桑巴",id:1826,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"即兴表演结束",id:2697,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"残影",id:488,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"魔罩",id:168,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"守护之光",id:2702,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"守护纹",id:2597,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"抗死",id:2707,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!0},{name:"雪仇",id:1193,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"牵制",id:1195,type:"multiplier",performance:{physics:1,magic:.5,darkness:0},isFriendly:!1},{name:"昏乱",id:1203,type:"multiplier",performance:{physics:.5,magic:1,darkness:0},isFriendly:!1},{name:"武装解除",id:860,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"减速",id:9,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"体力增加",id:2120,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"腐臭",id:1715,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!1},{name:"智力精神降低",id:2115,type:"multiplier",performance:{physics:0,magic:1,darkness:0},isFriendly:!1},{name:"龙之力",id:2500,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"超硬化",id:1722,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"玄结界",id:2496,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"仙人盾",id:2119,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"强力守护",id:1719,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"哥布防御",id:2114,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"铜墙铁盾",id:194,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坚守要塞",id:195,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"终极堡垒",id:196,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"原初大地",id:863,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"暗黑之力",id:864,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"灵魂之青",id:1931,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0}],j=[...A,{name:"大预警",id:3829,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大预警[护盾]",id:3830,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大复仇",id:3832,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大暗影墙",id:3835,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"大星云",id:3838,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"坦培拉涂层",id:3686,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"油性坦培拉",id:3687,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"世界树之干",id:3890,type:"multiplier",performance:{physics:1,magic:1,darkness:1},isFriendly:!0},{name:"建筑神之塔",id:3892,type:"absorbed",performance:{physics:1,magic:1,darkness:1},isFriendly:!0}],g=new Map;let S="Chinese";function w(e){if(S!==e||g.size===0){g.clear();for(const r of e==="Chinese"?A:j){const s=O[r.id][1];r.fullIcon=K(s),g.set(r.id.toString(16).toUpperCase().padStart(2,"0"),r)}S=e}}w("Chinese");function Se(e){return g.get(e)}function Ee(e){return e===1?"useful":e===0?"unuseful":"half-useful"}const G=/(?:耐性|防御力)(?:大幅)?(?:降低|提升|低下|下降)|受伤(?:加重|减轻)|体力(?:增加|衰减|减少)|伤害屏障/,J=/(?:精神|力量|灵巧|智力){1,2}(?:大幅)?降低/;function C(e,r){return Object.entries(O).reduce((s,[n,[i,l]])=>(e.test(i)&&s.set(n,{name:i,icon:l,isFriendly:r}),s),new Map)}const Oe=C(G,!0),Ae=C(J,!1),c=L("hash"),Q=U("keigennRecord2",{state:()=>({userOptions:{scale:d(c.scale,1),showHeader:d(c.showHeader,!0),showIcon:d(c.showIcon,!0),showName:d(c.showName,!1),abbrId:d(c.abbrId,!0),anonymous:d(c.anonymous,!0),replaceWithYou:d(c.replaceWithYou,!1),parseAA:d(c.parseAA,!0),parseDoT:d(c.parseDoT,!1),minimize:d(c.minimize,!1),actionCN:d(c.actionCN,!0),statusCN:d(c.statusCN,!0)},isBrowser:!1,isLocalhost:!1}),getters:{icon4k(e){return e.userOptions.scale>=2||window.devicePixelRatio>=2?"_hr1":""}},actions:{recheckIsDev(){this.isBrowser=!window.OverlayPluginApi&&!c.OVERLAY_WS&&!c.HOST_PORT,this.isLocalhost=location.hostname==="localhost",this.isBrowser&&setTimeout(()=>this.recheckIsDev(),1e3)},formatterName(e){return e},initEnvironment(e){/^[A-Z]\S+ [A-Z]\S+$/.test(e)?(this.userOptions.abbrId&&(this.formatterName=r=>r.replace(/^([A-Z])\S+ ([A-Z])\S+$/,"$1.$2.")),w("Global")):(this.userOptions.abbrId&&(this.formatterName=r=>r.substring(0,2)),w("Chinese"))}}});function d(e,r){return typeof r=="boolean"?e==="0"?!1:e==="1"?!0:r:typeof r=="number"?Number.isNaN(+e)?r:+e:r}const X=a("br",null,null,-1),ee=a("br",null,null,-1),re=a("br",null,null,-1),se=a("br",null,null,-1),ie=a("br",null,null,-1),ne=F({__name:"AmountDetails",props:{row:{type:Object,required:!0}},setup(e){const r=e;return(s,n)=>(f(),h("div",null,[a("span",null,"来源:"+o(r.row.source),1),X,a("span",null,"目标:"+o(r.row.target),1),ee,a("span",null," 护盾:"+o(Math.round(r.row.maxHp*+r.row.shield/100))+" ("+o(r.row.shield)+"%) ",1),re,a("span",null," 血量:"+o(r.row.currentHp)+"/"+o(r.row.maxHp)+" ("+o(Math.round(r.row.currentHp/r.row.maxHp*100))+"%) ",1),se,a("span",null,[T("伤害:"),a("span",{class:k(r.row.type)},o(r.row.amount),3)]),ie,a("span",null," 剩余:"+o(r.row.currentHp-r.row.amount)+" ("+o(Math.round((r.row.currentHp-r.row.amount)/r.row.maxHp*100))+"%) ",1)]))}}),ae=[409 .toString(16).toUpperCase(),810 .toString(16).toUpperCase(),811 .toString(16).toUpperCase(),1836 .toString(16).toUpperCase()];function te(e){return e.currentHp-e.amount<0&&!e.keigenns.find(r=>ae.includes(r.effectId))}const ce={class:"amount"},Ce=F({__name:"Amount",props:{row:{type:Object,required:!0}},setup(e){const r=e;return(s,n)=>{const i=ne,l=V;return f(),W(l,{"append-to":".wrapper",effect:"dark",placement:"right-start",title:"",trigger:"hover",enterable:!1,"hide-after":0,"popper-class":"my-el-popover"},{reference:I(()=>[a("span",ce,[a("span",{class:k(r.row.type)},[a("span",{class:k(`${m(te)(e.row)?"lethal":""}`)},o(e.row.amount.toLocaleString().padStart(3,"　")),3)],2)])]),default:I(()=>[R(i,{row:e.row},null,8,["row"])]),_:1})}}}),pe={key:0,class:"target"},de=["src","data-job"],De=F({__name:"Target",props:{row:{type:Object,required:!0}},setup(e){const r=e,s=Q();return(n,i)=>(f(),h("div",null,[m(s).userOptions.showIcon?(f(),h("span",pe,[a("img",{class:"jobIcon",src:m(Z)(`/cj/companion/${r.row.jobIcon}.png`),alt:"","data-job":m(s).userOptions.showName?"":r.row.job,loading:"lazy",onError:i[0]||(i[0]=(...l)=>m(N)&&m(N)(...l))},null,40,de),m(s).userOptions.showName?(f(),h("span",{key:0,class:k(`job ${r.row.jobIcon} ${r.row.targetId===r.row.povId?"YOU":""}`),style:B(!m(s).userOptions.abbrId&&m(s).userOptions.showName?{overflow:"hidden",textOverflow:"ellipsis"}:{})},o(r.row.targetId===r.row.povId&&m(s).userOptions.replaceWithYou?"YOU":m(s).userOptions.anonymous?r.row.job:m(s).formatterName(r.row.target)),7)):$("",!0)])):$("",!0)]))}}),me=e=>(z("data-v-69d24300"),e=e(),Y(),e),oe={class:"upload select"},le=me(()=>a("div",{class:"upload text"},[a("span",null,"+"),a("p",null,"上传或拖入ACT日志")],-1)),ue=F({__name:"testLog",emits:["handleLine","beforeHandle","afterHandle"],setup(e,{emit:r}){const s=r,n=x(null),i=x(null);async function l(p){var u,v;(u=i.value)==null||u.classList.remove("drag");const t=p.target.files;if(!(!t||t.length===0)){s("beforeHandle");for(let b=0;b<t.length;b++){const D=await t[b].text();for(const H of D.split(`
`))s("handleLine",H)}s("afterHandle"),(v=i.value)==null||v.classList.remove("drag")}}function y(p){var t;p.preventDefault(),(t=i.value)==null||t.classList.add("drag")}function _(p){var t;p.preventDefault(),(t=i.value)==null||t.classList.remove("drag")}return M(()=>{var p,t,u;(p=n.value)==null||p.addEventListener("change",l),(t=i.value)==null||t.addEventListener("dragover",y),(u=i.value)==null||u.addEventListener("dragleave",_)}),P(()=>{var p,t,u;(p=n.value)==null||p.removeEventListener("change",l),(t=i.value)==null||t.removeEventListener("dragover",y),(u=i.value)==null||u.removeEventListener("dragleave",_)}),(p,t)=>(f(),h("div",oe,[a("div",{ref_key:"select",ref:i,class:"upload-select"},[le,a("input",{ref_key:"input",ref:n,type:"file"},null,512)],512)]))}});const He=q(ue,[["__scopeId","data-v-69d24300"]]),E=(()=>typeof structuredClone=="function"?structuredClone:e=>{if(e===null||typeof e!="object")return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e.source,e.flags);if(Array.isArray(e))return e.map(s=>E(s));const r=new e.constructor;for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=E(e[s]));return r})();function Le(e){switch(e){case"dodge":return"闪避";case"damage done":return"击中";case"blocked damage":return"格挡";case"parried damage":return"招架";case"instant death":return"即死";case"heal":return"治疗";case"crit heal":return"暴击治疗";case"damage":return"普通";case"crit damage":return"暴击";case"direct hit damage":return"直击";case"crit direct hit damage":return"直暴";case"physics":return"物理";case"magic":return"魔法";case"darkness":return"暗黑";default:throw new Error("Unknown type")}}function Ue(e){const r=ye(e),s=fe(e),n=he(e);return{effect:r,properties:s,type:n}}function ye(e){switch(!0){case e.endsWith("1"):return"dodge";case e.endsWith("3"):return"damage done";case e.endsWith("5"):return"blocked damage";case e.endsWith("6"):return"parried damage";case e.endsWith("33"):return"instant death";case e.endsWith("4"):return"heal";case/2\w{4}4$/.test(e):return"crit heal";default:throw new Error(`Unknown effect flag ${e}`)}}function fe(e){switch(!0){case/2\w{3}$/.test(e):return"crit damage";case/4\w{3}$/.test(e):return"direct hit damage";case/6\w{3}$/.test(e):return"crit direct hit damage";default:return"damage"}}function he(e){switch(!0){case/7?[1-4]\w{3}[35]$|[16]$/.test(e):return"physics";case/^E$/.test(e):case/5\w{4}$/.test(e):return"magic";case/^(?:\d0)?3$/.test(e):case/6\w{4}$/.test(e):return"darkness";default:return console.error(`Unknown type flag ${e}`),"physics"}}const ge=["3E","113","213","313"],ke=["A10","E"],Fe=["04"],be="36",we=["01","03","05","06",be];function Te(e){let s=0,n=e[8]??"",i=e[8+1]??"";ge.includes(n)&&(s+=2,n=e[8+s]??n,i=e[8+s+1]??i),ke.includes(n)&&(s+=2,n=e[8+s]??n,i=e[8+s+1]??i);const l=_e(i),y=`00${n}`.slice(-2);return{amount:l,lowByte:y,flags:n,isHeal:Fe.includes(y),isAttack:we.includes(y)}}function _e(e){if(e===void 0)return 0;const r=e.length;if(r<=4)return 0;let s=Number.parseInt(e.slice(0,r-4),16);if(e[r-4]==="4"){const n=Number.parseInt(e.slice(r-2,r),16);s=s-n+(n<<16)}return s}export{De as _,He as a,Ue as b,Ce as c,E as d,Oe as e,Ae as f,Se as g,Ee as m,Te as p,Le as t,Q as u};