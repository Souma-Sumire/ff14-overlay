import{d as k,c as P,w as m,u as A,r as v,E as L,o as f,a as p,z as D,b,e as O,f as I,g as R,t as V,h as S,i as E,j as x,k as C,p as M,l as B,m as z,n as j,q as F,s as N,v as U,V as W,x as H}from"./vendor-4119510c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function _(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=_(e);fetch(e.href,o)}})();const G=k({__name:"App",setup(s){return(r,_)=>{const a=v("router-view"),e=L;return f(),P(e,{locale:A(D)},{default:m(()=>[p(a)]),_:1},8,["locale"])}}});const $="modulepreload",q=function(s){return"/ff14-overlay-vue/"+s},w={},t=function(r,_,a){if(!_||_.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(_.map(o=>{if(o=q(o),o in w)return;w[o]=!0;const n=o.endsWith(".css"),h=n?'[rel="stylesheet"]':"";if(!!a)for(let c=e.length-1;c>=0;c--){const l=e[c];if(l.href===o&&(!n||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${h}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":$,n||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),n)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>r()).catch(o=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o})},X="/ff14-overlay-vue/assets/castingMonitor-6712fc16.webp",J="/ff14-overlay-vue/assets/castingToChinese-3f47f77a.webp",K="/ff14-overlay-vue/assets/dnc-fb351e04.webp",Q="/ff14-overlay-vue/assets/keigennRecord2-4142bde2.webp",Y="/ff14-overlay-vue/assets/keySkillTimer-794d4a66.webp",Z="/ff14-overlay-vue/assets/limitBreakTip-f4c9c6e9.webp",ee="/ff14-overlay-vue/assets/raidbuffRecord-3a54552e.webp",te="/ff14-overlay-vue/assets/risingstones-ea75f732.webp",oe="/ff14-overlay-vue/assets/teamWatch-b39910c5.webp",se="/ff14-overlay-vue/assets/timeline-6b6992a2.webp",ne="/ff14-overlay-vue/assets/zoneMacro-a2a2a9eb.webp",re=s=>(M("data-v-b9a15d20"),s=s(),B(),s),_e={class:"common-layout","bt-white":""},ae=re(()=>R("h1",null,"主页导航",-1)),ie=["onClick"],pe={key:0},ce={key:1},me=k({__name:"index",setup(s){function r(e){return new URL(Object.assign({"../assets/screenshots/castingMonitor.webp":X,"../assets/screenshots/castingToChinese.webp":J,"../assets/screenshots/dnc.webp":K,"../assets/screenshots/keigennRecord2.webp":Q,"../assets/screenshots/keySkillTimer.webp":Y,"../assets/screenshots/limitBreakTip.webp":Z,"../assets/screenshots/raidbuffRecord.webp":ee,"../assets/screenshots/risingstones.webp":te,"../assets/screenshots/teamWatch.webp":oe,"../assets/screenshots/timeline.webp":se,"../assets/screenshots/zoneMacro.webp":ne})[`../assets/screenshots/${e}`],self.location)}const _=[{title:"7.0狩猎找怪工具",type:"网页",path:"hunt"},{title:"7.0风脉地图",type:"网页",path:"aether"},{title:"Cactbot Raidboss User JS 分享",type:"网页",path:"https://github.com/Souma-Sumire/raidboss-user-js-public",comment:"前往Github项目了解详情"},{title:"国际服汉化补丁",type:"网页",path:"https://github.com/Souma-Sumire/FFXIVChnTextPatch-Souma/",comment:"前往Github项目了解详情"},{title:"青魔法书图鉴",type:"网页",path:"blubook"},{title:"FFLOGS上传器加速下载",type:"网页",path:"fflogsUploaderDownload"},{title:"[悬浮窗] 减伤监控2",type:"悬浮窗/网页",path:"keigennRecord2",comment:`详细说明：
https://nga.178.com/read.php?tid=28047277`,src:"keigennRecord2.webp"},{title:"[悬浮窗] 职业增强：舞者",type:"悬浮窗",path:"jobs/dnc",comment:"在技能上显示buff消失倒计时",src:"dnc.webp"},{title:"[悬浮窗] 一键舞步",type:"悬浮窗",path:"okDncDance"},{title:"[悬浮窗] 一键 VPR 连击",type:"悬浮窗",path:"okVpr"},{title:"[悬浮窗] 占星一键发卡",type:"悬浮窗",path:"okASTCard"},{title:"[悬浮窗] 施法监控",type:"悬浮窗",path:"castingMonitor?duration=25&energySaving=true&displayAA=false&displayGCDSpace=false&api=cafemaker&syncFocusWS=true&showHeader=true",comment:`详细说明：
https://nga.178.com/read.php?tid=33989985`,src:"castingMonitor.webp"},{title:"[悬浮窗] 全副本发宏/标点",type:"悬浮窗",path:"zoneMacro",src:"zoneMacro.webp"},{title:"[悬浮窗] 自定义技能时间轴",type:"悬浮窗",path:"timeline",src:"timeline.webp"},{title:"[悬浮窗] OBS 自动录制",type:"悬浮窗",path:"obs"},{title:"[悬浮窗] 读条汉化",type:"悬浮窗",path:"castingToChinese",comment:"",src:"castingToChinese.webp"},{title:"[悬浮窗] 团辅监控（旧）",type:"悬浮窗",path:"https://souma.diemoe.net/dist/keySkillTimer.html?international=false&dajinengTTS=true&jianshangTTS=true&tuanfuTTS=true",comment:"",src:"keySkillTimer.webp"},{title:"[悬浮窗] 技能监控（旧）",type:"悬浮窗",path:"https://souma.diemoe.net/dist/teamWatch.html?scale=1&reverse=false&rightAlign=false&postNamazu=false",comment:"建议使用dalamud同功能插件。",src:"teamWatch.webp"},{title:"[悬浮窗] LB 额外增长监控",type:"悬浮窗",path:"https://souma.diemoe.net/dist/limitBreakTip.html?LBMax=30000&automatic=220",comment:"速刷用，记录LB奖励数值。",src:"limitBreakTip.webp"},{title:"[悬浮窗] 我 TM 现在在几线？",type:"悬浮窗",path:"instancedAreaInfo",comment:"狩猎用，显示你当前在几线。"},{title:"[悬浮窗] 团辅覆盖记录",type:"悬浮窗/网页",path:"raidbuffRecord",comment:"真有用吗？",src:"raidbuffRecord.webp"},{title:"石之家 - 修为查询",type:"网页",path:"https://greasyfork.org/zh-CN/scripts/482604",src:"risingstones.webp",comment:"前往GreasyFork脚本页面了解详情"}];function a(e){e.path.startsWith("http")?window.open(e.path,"_blank"):g.push(e.path)}return(e,o)=>{const n=x,h=v("vxe-column"),y=v("vxe-table"),i=C,c=O,l=I("lazy");return f(),b("div",_e,[p(c,null,{default:m(()=>[p(n,null,{default:m(()=>[ae]),_:1}),p(i,null,{default:m(()=>[p(y,{data:_,stripe:"",border:"","row-config":{height:100}},{default:m(()=>[p(h,{width:"250",title:"名称"},{default:m(({row:u})=>[R("a",{style:{cursor:"pointer"},onClick:()=>a(u)},V(u.title),9,ie)]),_:1}),p(h,{width:"420",title:"预览"},{default:m(({row:{src:u}})=>[u?S((f(),b("img",pe,null,512)),[[l,r(u).pathname]]):E("",!0),u?E("",!0):(f(),b("i",ce,"无"))]),_:1}),p(h,{field:"comment",title:"描述"})]),_:1})]),_:1})]),_:1})])}}});const le=(s,r)=>{const _=s.__vccOpts||s;for(const[a,e]of r)_[a]=e;return _},ue=le(me,[["__scopeId","data-v-b9a15d20"]]),de=()=>t(()=>import("./dnc-fe2aa5ac.js"),["assets/dnc-fe2aa5ac.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/overlay_plugin_api-409cb9ea.js","assets/dnc-b7ce10dc.css"]),he=()=>t(()=>import("./zoneMacro-e726c812.js"),["assets/zoneMacro-e726c812.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/postNamazu-cd6a2ebf.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-4a9ca0cf.js","assets/content_type-52b79aff.js","assets/actWS-e2500b62.js","assets/zoneMacro-ce3842eb.css"]),fe=()=>t(()=>import("./timelineSettings-30ec1ca2.js"),["assets/timelineSettings-30ec1ca2.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/TimelineShow-f4a80d0d.js","assets/util-4b7cb3a6.js","assets/xivapi-7138c80f.js","assets/TimelineShow-75399fec.css","assets/actionChinese-b463e832.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-4a9ca0cf.js","assets/timelineSettings-1508cb82.css"]),ge=()=>t(()=>import("./timelineHelp-06532433.js"),["assets/timelineHelp-06532433.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css"]),be=()=>t(()=>import("./timeline-b155fda0.js"),["assets/timeline-b155fda0.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/TimelineShow-f4a80d0d.js","assets/util-4b7cb3a6.js","assets/xivapi-7138c80f.js","assets/TimelineShow-75399fec.css","assets/overlay_plugin_api-409cb9ea.js","assets/timeline-59d695f6.css"]),ve=()=>t(()=>import("./time-bffe82d9.js"),["assets/time-bffe82d9.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/overlay_plugin_api-409cb9ea.js","assets/time-918176d5.css"]),ye=()=>t(()=>import("./statusCompare-98925b38.js"),["assets/statusCompare-98925b38.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/status-cbae0139.js","assets/statusCompare-520dc520.css"]),Ee=()=>t(()=>import("./stageProgramme-64427115.js"),["assets/stageProgramme-64427115.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/overlay_plugin_api-409cb9ea.js","assets/stageProgramme-c07a9f58.css"]),we=()=>t(()=>import("./raidbuffRecord-409bb867.js"),["assets/raidbuffRecord-409bb867.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/flags-ccb9b9ea.js","assets/status-cbae0139.js","assets/xivapi-7138c80f.js","assets/util-4b7cb3a6.js","assets/flags-5f00b490.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-2830d8aa.js","assets/actionChinese-b463e832.js","assets/raidbuffRecord-a7bb338c.css"]),Te=()=>t(()=>import("./okVpr-d2d39771.js"),["assets/okVpr-d2d39771.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js"]),ke=()=>t(()=>import("./okDncDance-b39ffc2b.js"),["assets/okDncDance-b39ffc2b.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/postNamazu-cd6a2ebf.js"]),Re=()=>t(()=>import("./okASTCard-07b4cd41.js"),["assets/okASTCard-07b4cd41.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-4b7cb3a6.js","assets/xivapi-7138c80f.js"]),Pe=()=>t(()=>import("./obs-25a5cdd4.js"),["assets/obs-25a5cdd4.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/content_type-52b79aff.js","assets/zoneInfo-4a9ca0cf.js","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-7db6ccb1.js","assets/obs-4e3c15aa.css"]),Ae=()=>t(()=>import("./keySkillTimer-e7139e9c.js"),["assets/keySkillTimer-e7139e9c.js","assets/overlay_plugin_api-409cb9ea.js","assets/util-4b7cb3a6.js","assets/status-cbae0139.js","assets/xivapi-7138c80f.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css"]),Le=()=>t(()=>import("./keigennRecord2-f70ceea9.js"),["assets/keigennRecord2-f70ceea9.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/flags-ccb9b9ea.js","assets/status-cbae0139.js","assets/xivapi-7138c80f.js","assets/util-4b7cb3a6.js","assets/flags-5f00b490.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-b463e832.js","assets/keigennRecord2-7e1b8c27.css"]),De=()=>t(()=>import("./instancedAreaInfo-4713a0c5.js"),["assets/instancedAreaInfo-4713a0c5.js","assets/overlay_plugin_api-409cb9ea.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/instancedAreaInfo-766fd563.css"]),Oe=()=>t(()=>import("./hunt-496eca61.js"),["assets/hunt-496eca61.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-7db6ccb1.js","assets/zoneInfo-4a9ca0cf.js","assets/actWS-e2500b62.js","assets/hunt-5deac15c.css"]),Ie=()=>t(()=>import("./hexcode-07052852.js"),["assets/hexcode-07052852.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/hexcode-75bc61c5.css"]),Ve=()=>t(()=>import("./ffxivAxisWebFont-2393b298.js"),["assets/ffxivAxisWebFont-2393b298.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/ffxivAxisWebFont-bd8882d2.css"]),Se=()=>t(()=>import("./fflogsUploaderDownload-d84d5703.js"),["assets/fflogsUploaderDownload-d84d5703.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/fflogsUploaderDownload-0397129e.css"]),xe=()=>t(()=>import("./dsrp6-0c85c63c.js"),["assets/dsrp6-0c85c63c.js","assets/overlay_plugin_api-409cb9ea.js","assets/xivapi-7138c80f.js","assets/util-4b7cb3a6.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/dsrp6-8f5f5616.css"]),Ce=()=>t(()=>import("./dawntrail-6d534e58.js"),["assets/dawntrail-6d534e58.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/dawntrail-b179a7b6.css"]),Me=()=>t(()=>import("./castingToChinese-fcf33843.js"),["assets/castingToChinese-fcf33843.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-b463e832.js","assets/castingToChinese-235595d8.css"]),Be=()=>t(()=>import("./castingMonitor-f44bc11d.js"),["assets/castingMonitor-f44bc11d.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-4b7cb3a6.js","assets/xivapi-7138c80f.js","assets/castingMonitor-6b5b5b56.css"]),ze=()=>t(()=>import("./cactbotRuntime-66e3b773.js"),["assets/cactbotRuntime-66e3b773.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/util-4b7cb3a6.js","assets/overlay_plugin_api-409cb9ea.js","assets/cactbotRuntime-0f3ade16.css"]),je=()=>t(()=>import("./blubook-b4ea2f29.js"),["assets/blubook-b4ea2f29.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/status-cbae0139.js","assets/blubook-15ced835.css"]),Fe=()=>t(()=>import("./aether-67f3a3a1.js"),["assets/aether-67f3a3a1.js","assets/vendor-4119510c.js","assets/vendor-1f9ce2e0.css","assets/aether-11c17ed0.css"]),Ne=[{name:"jobs-dnc",path:"/jobs/dnc",component:de,props:!0},{name:"zoneMacro",path:"/zonemacro",component:he,props:!0},{name:"timelineSettings",path:"/timelinesettings",component:fe,props:!0},{name:"timelineHelp",path:"/timelinehelp",component:ge,props:!0},{name:"timeline",path:"/timeline",component:be,props:!0},{name:"time",path:"/time",component:ve,props:!0},{name:"statusCompare",path:"/statuscompare",component:ye,props:!0},{name:"stageProgramme",path:"/stageprogramme",component:Ee,props:!0},{name:"raidbuffRecord",path:"/raidbuffrecord",component:we,props:!0},{name:"okVpr",path:"/okvpr",component:Te,props:!0},{name:"okDncDance",path:"/okdncdance",component:ke,props:!0},{name:"okASTCard",path:"/okastcard",component:Re,props:!0},{name:"obs",path:"/obs",component:Pe,props:!0},{name:"keySkillTimer",path:"/keyskilltimer",component:Ae,props:!0},{name:"keigennRecord2",path:"/keigennrecord2",component:Le,props:!0},{name:"instancedAreaInfo",path:"/instancedareainfo",component:De,props:!0},{name:"index",path:"/",component:ue,props:!0},{name:"hunt",path:"/hunt",component:Oe,props:!0},{name:"hexcode",path:"/hexcode",component:Ie,props:!0},{name:"ffxivAxisWebFont",path:"/ffxivaxiswebfont",component:Ve,props:!0},{name:"fflogsUploaderDownload",path:"/fflogsuploaderdownload",component:Se,props:!0},{name:"dsrp6",path:"/dsrp6",component:xe,props:!0},{name:"dawntrail",path:"/dawntrail",component:Ce,props:!0},{name:"castingToChinese",path:"/castingtochinese",component:Me,props:!0},{name:"castingMonitor",path:"/castingmonitor",component:Be,props:!0},{name:"cactbotRuntime",path:"/cactbotruntime",component:ze,props:!0},{name:"blubook",path:"/blubook",component:je,props:!0},{name:"aether",path:"/aether",component:Fe,props:!0}],g=z({history:j(),routes:Ne}),Ue=new Map(Object.entries({index:"导航页",timeline:"时间轴",timelineSettings:"时间轴编辑",instancedAreaInfo:"副本区信息",stageProgramme:"舞台节目单",dsrp6:"绝龙诗P6",obs:"obs自动录制",zoneMacro:"副本宏",fflogsUploaderDownload:"今天FFLogsUploader更新了吗？","jobs-dnc":"舞者增强",okASTCard:"一键发卡",castingToChinese:"读条汉化",castingMonitor:"施法监控",cactbotRuntime:"cactbot拓展",blubook:"青魔法书图鉴",keigennRecord:"减伤监控2"}));var T;for(const s of g.getRoutes())s.meta.title=Ue.get(((T=s.name)==null?void 0:T.toString())??"")??s.name;g.afterEach((s,r)=>{var _;document.title=((_=s.meta.title)==null?void 0:_.toString())??"",s.name==="index"&&r.name!==void 0&&s.name!==r.name&&window.location.reload()});const d=F(G),We=N(),He=U();d.use(g);d.use(We);d.use(He);d.use(W);d.use(H);d.mount("#app");export{le as _,g as r};
