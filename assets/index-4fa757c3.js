import{d as E,c as P,w as m,u as O,r as b,E as A,o as f,a as p,z as D,b as V,e as v,f as R,t as I,g as S,h as T,i as x,j as C,k as M,p as B,l as j,m as z,n as F,q as U,s as N,v as W,V as H,x as $}from"./vendor-56eeab8c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function _(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=_(t);fetch(t.href,o)}})();const G=E({__name:"App",setup(s){return(n,_)=>{const a=b("router-view"),t=A;return f(),P(t,{locale:O(D)},{default:m(()=>[p(a)]),_:1},8,["locale"])}}});const q="modulepreload",X=function(s){return"/ff14-overlay-vue/"+s},w={},e=function(n,_,a){if(!_||_.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(_.map(o=>{if(o=X(o),o in w)return;w[o]=!0;const r=o.endsWith(".css"),h=r?'[rel="stylesheet"]':"";if(!!a)for(let c=t.length-1;c>=0;c--){const l=t[c];if(l.href===o&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${h}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":q,r||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),r)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},J="/ff14-overlay-vue/assets/castingMonitor-6712fc16.webp",K="/ff14-overlay-vue/assets/castingToChinese-3f47f77a.webp",Q="/ff14-overlay-vue/assets/dnc-fb351e04.webp",Y="/ff14-overlay-vue/assets/keigennRecord2-4142bde2.webp",Z="/ff14-overlay-vue/assets/keySkillTimer-794d4a66.webp",ee="/ff14-overlay-vue/assets/limitBreakTip-f4c9c6e9.webp",te="/ff14-overlay-vue/assets/raidbuffRecord-3a54552e.webp",oe="/ff14-overlay-vue/assets/risingstones-ea75f732.webp",se="/ff14-overlay-vue/assets/teamWatch-b39910c5.webp",ne="/ff14-overlay-vue/assets/timeline-6b6992a2.webp",_e="/ff14-overlay-vue/assets/zoneMacro-a2a2a9eb.webp",re=s=>(B("data-v-da9a8a09"),s=s(),j(),s),ae={class:"common-layout","bt-white":""},ie=re(()=>R("h1",null,"主页导航",-1)),pe=["onClick"],ce={key:0},me={key:1},le=E({__name:"startPages",setup(s){function n(t){return new URL(Object.assign({"../assets/screenshots/castingMonitor.webp":J,"../assets/screenshots/castingToChinese.webp":K,"../assets/screenshots/dnc.webp":Q,"../assets/screenshots/keigennRecord2.webp":Y,"../assets/screenshots/keySkillTimer.webp":Z,"../assets/screenshots/limitBreakTip.webp":ee,"../assets/screenshots/raidbuffRecord.webp":te,"../assets/screenshots/risingstones.webp":oe,"../assets/screenshots/teamWatch.webp":se,"../assets/screenshots/timeline.webp":ne,"../assets/screenshots/zoneMacro.webp":_e})[`../assets/screenshots/${t}`],self.location)}const _=[{title:"7.0 车头找怪工具",type:"网页",path:"hunt"},{title:"7.0 风脉地图",type:"网页",path:"aether"},{title:"Cactbot User JS 分享",type:"网页",path:"https://github.com/Souma-Sumire/raidboss-user-js-public",comment:"前往Github项目了解详情"},{title:"国际服汉化补丁",type:"网页",path:"https://github.com/Souma-Sumire/FFXIVChnTextPatch-Souma/",comment:"前往Github项目了解详情"},{title:"6.58 青魔法书图鉴",type:"网页",path:"blubook"},{title:"FFLOGS上传器加速下载",type:"网页",path:"fflogsUploaderDownload"},{title:"[悬浮窗] 减伤监控2",type:"悬浮窗/网页",path:"keigennRecord2",comment:`详细说明：
https://nga.178.com/read.php?tid=28047277`,src:"keigennRecord2.webp"},{title:"[悬浮窗] 职业增强：舞者",type:"悬浮窗",path:"jobs/dnc",comment:"在技能上显示buff消失倒计时",src:"dnc.webp"},{title:"[悬浮窗] 一键舞步",type:"悬浮窗",path:"okDncDance"},{title:"[悬浮窗] 一键 VPR 连击 Type1",type:"悬浮窗",path:"okVpr",comment:"进附体时不会重置热键栏，适合直接设置成单独键位的情况"},{title:"[悬浮窗] 一键 VPR 连击 Type2",type:"悬浮窗",path:"okVpr2",comment:"进附体时会重置热键栏，适合设置成平时按的键位的情况"},{title:"[悬浮窗] 6.X 占星一键发卡",type:"悬浮窗",path:"okASTCard"},{title:"[悬浮窗] 施法监控",type:"悬浮窗",path:"castingMonitor?duration=25&energySaving=true&displayAA=false&displayGCDSpace=false&api=cafemaker&syncFocusWS=true&showHeader=true",comment:`详细说明：
https://nga.178.com/read.php?tid=33989985`,src:"castingMonitor.webp"},{title:"[悬浮窗] 全副本发宏/标点",type:"悬浮窗",path:"zoneMacro",src:"zoneMacro.webp"},{title:"[悬浮窗] 治疗/减伤时间轴",type:"悬浮窗",path:"timeline",src:"timeline.webp"},{title:"[悬浮窗] OBS 自动录制",type:"悬浮窗",path:"obs"},{title:"[悬浮窗] 读条汉化",type:"悬浮窗",path:"castingToChinese",comment:"",src:"castingToChinese.webp"},{title:"[悬浮窗] 团辅监控",type:"悬浮窗",path:"https://souma.diemoe.net/dist/keySkillTimer.html?international=false&dajinengTTS=true&jianshangTTS=true&tuanfuTTS=true",comment:"",src:"keySkillTimer.webp"},{title:"[悬浮窗] LB 额外增长监控",type:"悬浮窗",path:"https://souma.diemoe.net/dist/limitBreakTip.html?LBMax=30000&automatic=220",comment:"速刷用，记录LB奖励数值。",src:"limitBreakTip.webp"},{title:"[悬浮窗] 我 TM 现在在几线？",type:"悬浮窗",path:"instancedAreaInfo",comment:"狩猎用，显示你当前在几线。"}];function a(t){t.path.startsWith("http")?window.open(t.path,"_blank"):g.push(t.path)}return(t,o)=>{const r=x,h=b("vxe-column"),y=b("vxe-table"),i=C,c=M,l=V("lazy");return f(),v("div",ae,[p(c,null,{default:m(()=>[p(r,null,{default:m(()=>[ie]),_:1}),p(i,null,{default:m(()=>[p(y,{data:_,stripe:"",border:"","row-config":{height:100}},{default:m(()=>[p(h,{width:"250",title:"名称"},{default:m(({row:u})=>[R("a",{style:{cursor:"pointer"},onClick:()=>a(u)},I(u.title),9,pe)]),_:1}),p(h,{width:"420",title:"预览"},{default:m(({row:{src:u}})=>[u?S((f(),v("img",ce,null,512)),[[l,n(u).pathname]]):T("",!0),u?T("",!0):(f(),v("i",me,"无"))]),_:1}),p(h,{field:"comment",title:"描述"})]),_:1})]),_:1})]),_:1})])}}});const ue=(s,n)=>{const _=s.__vccOpts||s;for(const[a,t]of n)_[a]=t;return _},L=ue(le,[["__scopeId","data-v-da9a8a09"]]),de=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),he=E({__name:"index",setup(s){return(n,_)=>(f(),P(L))}}),fe=()=>e(()=>import("./r4s-43b419e3.js"),["assets/r4s-43b419e3.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-2830d8aa.js","assets/r4s-9f75b35e.css"]),ge=()=>e(()=>import("./dnc-8f25b6eb.js"),["assets/dnc-8f25b6eb.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/dnc-b7ce10dc.css"]),ve=()=>e(()=>import("./zoneMacro-cfe62cca.js"),["assets/zoneMacro-cfe62cca.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/postNamazu-289e44d2.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-4a9ca0cf.js","assets/content_type-52b79aff.js","assets/actWS-e2500b62.js","assets/zoneMacro-ce3842eb.css"]),be=()=>e(()=>import("./timelineSettings-5daa52e0.js"),["assets/timelineSettings-5daa52e0.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/TimelineShow-fd9761ff.js","assets/util-6ab7166a.js","assets/xivapi-d474f14e.js","assets/TimelineShow-75399fec.css","assets/actionChinese-14fd9964.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-4a9ca0cf.js","assets/timelineSettings-29cb3fca.css"]),Ee=()=>e(()=>import("./timelineHelp-0e367359.js"),["assets/timelineHelp-0e367359.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css"]),ye=()=>e(()=>import("./timeline-2bc5afec.js"),["assets/timeline-2bc5afec.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/TimelineShow-fd9761ff.js","assets/util-6ab7166a.js","assets/xivapi-d474f14e.js","assets/TimelineShow-75399fec.css","assets/overlay_plugin_api-409cb9ea.js","assets/timeline-59d695f6.css"]),Te=()=>e(()=>import("./time-6ace46de.js"),["assets/time-6ace46de.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/time-d2eb91d9.css"]),we=()=>e(()=>import("./statusCompare-e91e1649.js"),["assets/statusCompare-e91e1649.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/status-ea9dd8b5.js","assets/statusCompare-ee841d7b.css"]),ke=()=>e(()=>Promise.resolve().then(()=>de),void 0),Pe=()=>e(()=>import("./stageProgramme-68ae90eb.js"),["assets/stageProgramme-68ae90eb.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/stageProgramme-c07a9f58.css"]),Re=()=>e(()=>import("./raidbuffRecord-581554c3.js"),["assets/raidbuffRecord-581554c3.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/flags-bdc23c04.js","assets/status-ea9dd8b5.js","assets/xivapi-d474f14e.js","assets/util-6ab7166a.js","assets/flags-5f00b490.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-2830d8aa.js","assets/actionChinese-14fd9964.js","assets/raidbuffRecord-a7bb338c.css"]),Le=()=>e(()=>import("./okVpr2-e83aaf0d.js"),["assets/okVpr2-e83aaf0d.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js"]),Oe=()=>e(()=>import("./okVpr-f1edd51d.js"),["assets/okVpr-f1edd51d.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js"]),Ae=()=>e(()=>import("./okDncDance-832e2d68.js"),["assets/okDncDance-832e2d68.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/postNamazu-289e44d2.js"]),De=()=>e(()=>import("./okASTCard-ba8af6b0.js"),["assets/okASTCard-ba8af6b0.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-6ab7166a.js","assets/xivapi-d474f14e.js"]),Ve=()=>e(()=>import("./obs-1b237b24.js"),["assets/obs-1b237b24.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/content_type-52b79aff.js","assets/zoneInfo-4a9ca0cf.js","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-7db6ccb1.js","assets/obs-4e3c15aa.css"]),Ie=()=>e(()=>import("./keySkillTimer-6098ebba.js"),["assets/keySkillTimer-6098ebba.js","assets/overlay_plugin_api-409cb9ea.js","assets/util-6ab7166a.js","assets/status-ea9dd8b5.js","assets/xivapi-d474f14e.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css"]),Se=()=>e(()=>import("./keigennRecord2-e0e3d615.js"),["assets/keigennRecord2-e0e3d615.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/flags-bdc23c04.js","assets/status-ea9dd8b5.js","assets/xivapi-d474f14e.js","assets/util-6ab7166a.js","assets/flags-5f00b490.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-14fd9964.js","assets/keigennRecord2-7e1b8c27.css"]),xe=()=>e(()=>import("./instancedAreaInfo-3e073936.js"),["assets/instancedAreaInfo-3e073936.js","assets/overlay_plugin_api-409cb9ea.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/instancedAreaInfo-766fd563.css"]),Ce=()=>e(()=>import("./hunt-22b87f37.js"),["assets/hunt-22b87f37.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-7db6ccb1.js","assets/zoneInfo-4a9ca0cf.js","assets/actWS-e2500b62.js","assets/hunt-7ba9a32a.css"]),Me=()=>e(()=>import("./hexcode-28172171.js"),["assets/hexcode-28172171.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/hexcode-75bc61c5.css"]),Be=()=>e(()=>import("./ffxivAxisWebFont-ceb7e991.js"),["assets/ffxivAxisWebFont-ceb7e991.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/ffxivAxisWebFont-bd8882d2.css"]),je=()=>e(()=>import("./fflogsUploaderDownload-1193278b.js"),["assets/fflogsUploaderDownload-1193278b.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/fflogsUploaderDownload-0397129e.css"]),ze=()=>e(()=>import("./dsrp6-88ae753a.js"),["assets/dsrp6-88ae753a.js","assets/overlay_plugin_api-409cb9ea.js","assets/xivapi-d474f14e.js","assets/util-6ab7166a.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/dsrp6-8f5f5616.css"]),Fe=()=>e(()=>import("./dawntrail-c65a1edd.js"),["assets/dawntrail-c65a1edd.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/dawntrail-e206ec5d.css"]),Ue=()=>e(()=>import("./castingToChinese-5bc2dfd4.js"),["assets/castingToChinese-5bc2dfd4.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-14fd9964.js","assets/castingToChinese-8a287926.css"]),Ne=()=>e(()=>import("./castingMonitor-9ac18930.js"),["assets/castingMonitor-9ac18930.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-6ab7166a.js","assets/xivapi-d474f14e.js","assets/castingMonitor-828bad59.css"]),We=()=>e(()=>import("./cactbotRuntime-59e2673e.js"),["assets/cactbotRuntime-59e2673e.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/util-6ab7166a.js","assets/overlay_plugin_api-409cb9ea.js","assets/cactbotRuntime-0f3ade16.css"]),He=()=>e(()=>import("./blubook-20976c9e.js"),["assets/blubook-20976c9e.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/status-ea9dd8b5.js","assets/blubook-15ced835.css"]),$e=()=>e(()=>import("./aether-a2559196.js"),["assets/aether-a2559196.js","assets/vendor-56eeab8c.js","assets/vendor-0fa5a5c6.css","assets/aether-11c17ed0.css"]),Ge=[{name:"special-r4s",path:"/special/r4s",component:fe,props:!0},{name:"jobs-dnc",path:"/jobs/dnc",component:ge,props:!0},{name:"zoneMacro",path:"/zonemacro",component:ve,props:!0},{name:"timelineSettings",path:"/timelinesettings",component:be,props:!0},{name:"timelineHelp",path:"/timelinehelp",component:Ee,props:!0},{name:"timeline",path:"/timeline",component:ye,props:!0},{name:"time",path:"/time",component:Te,props:!0},{name:"statusCompare",path:"/statuscompare",component:we,props:!0},{name:"startPages",path:"/startpages",component:ke,props:!0},{name:"stageProgramme",path:"/stageprogramme",component:Pe,props:!0},{name:"raidbuffRecord",path:"/raidbuffrecord",component:Re,props:!0},{name:"okVpr2",path:"/okvpr2",component:Le,props:!0},{name:"okVpr",path:"/okvpr",component:Oe,props:!0},{name:"okDncDance",path:"/okdncdance",component:Ae,props:!0},{name:"okASTCard",path:"/okastcard",component:De,props:!0},{name:"obs",path:"/obs",component:Ve,props:!0},{name:"keySkillTimer",path:"/keyskilltimer",component:Ie,props:!0},{name:"keigennRecord2",path:"/keigennrecord2",component:Se,props:!0},{name:"instancedAreaInfo",path:"/instancedareainfo",component:xe,props:!0},{name:"index",path:"/",component:he,props:!0},{name:"hunt",path:"/hunt",component:Ce,props:!0},{name:"hexcode",path:"/hexcode",component:Me,props:!0},{name:"ffxivAxisWebFont",path:"/ffxivaxiswebfont",component:Be,props:!0},{name:"fflogsUploaderDownload",path:"/fflogsuploaderdownload",component:je,props:!0},{name:"dsrp6",path:"/dsrp6",component:ze,props:!0},{name:"dawntrail",path:"/dawntrail",component:Fe,props:!0},{name:"castingToChinese",path:"/castingtochinese",component:Ue,props:!0},{name:"castingMonitor",path:"/castingmonitor",component:Ne,props:!0},{name:"cactbotRuntime",path:"/cactbotruntime",component:We,props:!0},{name:"blubook",path:"/blubook",component:He,props:!0},{name:"aether",path:"/aether",component:$e,props:!0}],g=z({history:F(),routes:Ge}),qe=new Map(Object.entries({index:"导航页",timeline:"时间轴",timelineSettings:"时间轴编辑",instancedAreaInfo:"副本区信息",stageProgramme:"舞台节目单",dsrp6:"绝龙诗P6",obs:"obs自动录制",zoneMacro:"副本宏",fflogsUploaderDownload:"今天FFLogsUploader更新了吗？","jobs-dnc":"舞者增强",okASTCard:"一键发卡",castingToChinese:"读条汉化",castingMonitor:"施法监控",cactbotRuntime:"cactbot拓展",blubook:"青魔法书图鉴",keigennRecord:"减伤监控2"}));var k;for(const s of g.getRoutes())s.meta.title=qe.get(((k=s.name)==null?void 0:k.toString())??"")??s.name;g.afterEach((s,n)=>{var _;document.title=((_=s.meta.title)==null?void 0:_.toString())??"",s.name==="index"&&n.name!==void 0&&s.name!==n.name&&window.location.reload()});const d=U(G),Xe=N(),Je=W();d.use(g);d.use(Xe);d.use(Je);d.use(H);d.use($);d.mount("#app");export{ue as _,g as r};
