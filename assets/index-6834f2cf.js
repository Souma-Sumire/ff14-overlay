import{d as k,c as A,w as l,u as L,r as v,E as P,o as f,a as c,z as S,b,e as O,f as I,g as R,t as D,h as x,i as w,j as V,k as C,p as M,l as B,m as z,n as j,q as F,s as W,v as N,V as U,x as H}from"./vendor-cc98dd31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const $=k({__name:"App",setup(o){return(r,a)=>{const i=v("router-view"),e=P;return f(),A(e,{locale:L(S)},{default:l(()=>[c(i)]),_:1},8,["locale"])}}});const G="modulepreload",q=function(o){return"/ff14-overlay-vue/"+o},E={},s=function(r,a,i){if(!a||a.length===0)return r();const e=document.getElementsByTagName("link");return Promise.all(a.map(t=>{if(t=q(t),t in E)return;E[t]=!0;const n=t.endsWith(".css"),h=n?'[rel="stylesheet"]':"";if(!!i)for(let p=e.length-1;p>=0;p--){const m=e[p];if(m.href===t&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${h}`))return;const _=document.createElement("link");if(_.rel=n?"stylesheet":G,n||(_.as="script",_.crossOrigin=""),_.href=t,document.head.appendChild(_),n)return new Promise((p,m)=>{_.addEventListener("load",p),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})},X="/ff14-overlay-vue/assets/castingMonitor-6712fc16.webp",J="/ff14-overlay-vue/assets/castingToChinese-3f47f77a.webp",K="/ff14-overlay-vue/assets/dnc-fb351e04.webp",Q="/ff14-overlay-vue/assets/keigennRecord2-4142bde2.webp",Y="/ff14-overlay-vue/assets/keySkillTimer-794d4a66.webp",Z="/ff14-overlay-vue/assets/limitBreakTip-f4c9c6e9.webp",ee="/ff14-overlay-vue/assets/raidbuffRecord-3a54552e.webp",te="/ff14-overlay-vue/assets/teamWatch-b39910c5.webp",oe="/ff14-overlay-vue/assets/timeline-6b6992a2.webp",se="/ff14-overlay-vue/assets/zoneMacro-a2a2a9eb.webp",ne=o=>(M("data-v-024dea07"),o=o(),B(),o),re={class:"common-layout","bt-white":""},ae=ne(()=>R("h1",null,"主页导航",-1)),ie=["onClick"],_e={key:0},ce={key:1},pe=k({__name:"index",setup(o){function r(e){return new URL(Object.assign({"../assets/screenshots/castingMonitor.webp":X,"../assets/screenshots/castingToChinese.webp":J,"../assets/screenshots/dnc.webp":K,"../assets/screenshots/keigennRecord2.webp":Q,"../assets/screenshots/keySkillTimer.webp":Y,"../assets/screenshots/limitBreakTip.webp":Z,"../assets/screenshots/raidbuffRecord.webp":ee,"../assets/screenshots/teamWatch.webp":te,"../assets/screenshots/timeline.webp":oe,"../assets/screenshots/zoneMacro.webp":se})[`../assets/screenshots/${e}`],self.location)}const a=[{title:"Cactbot自定义JS分享",type:"网页",path:"https://github.com/Souma-Sumire/raidboss-user-js-public",comment:"前往Github项目了解详情"},{title:"国际服汉化补丁",type:"网页",path:"https://github.com/Souma-Sumire/FFXIVChnTextPatch-Souma/",comment:"前往Github项目了解详情"},{title:"青魔法书图鉴",type:"网页",path:"blubook"},{title:"FFLOGS上传器加速下载",type:"网页",path:"fflogsUploaderDownload"},{title:"[悬浮窗] 减伤监控2",type:"悬浮窗/网页",path:"keigennRecord2",comment:`详细说明：
https://nga.178.com/read.php?tid=28047277`,src:"keigennRecord2.webp"},{title:"[悬浮窗] 职业增强：舞者",type:"悬浮窗",path:"jobs/dnc",comment:"在技能上显示buff消失倒计时",src:"dnc.webp"},{title:"[悬浮窗] 占星一键发卡",type:"悬浮窗",path:"okASTCard"},{title:"[悬浮窗] 施法监控",type:"悬浮窗",path:"castingMonitor?duration=25&energySaving=true&displayAA=false&displayGCDSpace=false&api=cafemaker&syncFocusWS=true&showHeader=true",comment:`详细说明：
https://nga.178.com/read.php?tid=33989985`,src:"castingMonitor.webp"},{title:"[悬浮窗] 全副本发宏/标点",type:"悬浮窗",path:"zoneMacro",src:"zoneMacro.webp"},{title:"[悬浮窗] 自定义技能时间轴",type:"悬浮窗",path:"timeline",src:"timeline.webp"},{title:"[悬浮窗] OBS自动录制",type:"悬浮窗",path:"obs"},{title:"[悬浮窗] 读条汉化",type:"悬浮窗",path:"castingToChinese",comment:"",src:"castingToChinese.webp"},{title:"[悬浮窗] 团辅监控（旧）",type:"悬浮窗",path:"https://souma.diemoe.net/dist/keySkillTimer.html?international=false&dajinengTTS=true&jianshangTTS=true&tuanfuTTS=true",comment:"",src:"keySkillTimer.webp"},{title:"[悬浮窗] 技能监控（旧）",type:"悬浮窗",path:"https://souma.diemoe.net/dist/teamWatch.html?scale=1&reverse=false&rightAlign=false&postNamazu=false",comment:"建议使用dalamud同功能插件。",src:"teamWatch.webp"},{title:"[悬浮窗] LB额外增长监控",type:"悬浮窗",path:"https://souma.diemoe.net/dist/limitBreakTip.html?LBMax=30000&automatic=220",comment:"速刷用，记录LB奖励数值。",src:"limitBreakTip.webp"},{title:"[悬浮窗] 我TM现在在几线？",type:"悬浮窗",path:"instancedAreaInfo",comment:"狩猎用，显示你当前在几线。"},{title:"[悬浮窗] 团辅覆盖记录",type:"悬浮窗/网页",path:"raidbuffRecord",comment:"真有用吗？",src:"raidbuffRecord.webp"}];function i(e){e.path.startsWith("http")?window.open(e.path,"_blank"):g.push(e.path)}return(e,t)=>{const n=V,h=v("vxe-column"),y=v("vxe-table"),_=C,p=O,m=I("lazy");return f(),b("div",re,[c(p,null,{default:l(()=>[c(n,null,{default:l(()=>[ae]),_:1}),c(_,null,{default:l(()=>[c(y,{data:a,border:"",stripe:"","row-config":{height:100}},{default:l(()=>[c(h,{width:"250",title:"名称"},{default:l(({row:u})=>[R("a",{style:{cursor:"pointer"},onClick:()=>i(u)},D(u.title),9,ie)]),_:1}),c(h,{width:"420",title:"预览"},{default:l(({row:{src:u}})=>[u?x((f(),b("img",_e,null,512)),[[m,r(u).pathname]]):w("",!0),u?w("",!0):(f(),b("i",ce,"无"))]),_:1}),c(h,{field:"comment",title:"描述"})]),_:1})]),_:1})]),_:1})])}}});const le=(o,r)=>{const a=o.__vccOpts||o;for(const[i,e]of r)a[i]=e;return a},me=le(pe,[["__scopeId","data-v-024dea07"]]),ue=()=>s(()=>import("./dnc-9ed34563.js"),["assets/dnc-9ed34563.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/overlay_plugin_api-409cb9ea.js","assets/dnc-fe41a3dc.css"]),de=()=>s(()=>import("./zoneMacro-f56e0ce8.js"),["assets/zoneMacro-f56e0ce8.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/zoneInfo-f2db0ac3.js","assets/overlay_plugin_api-409cb9ea.js","assets/content_type-52b79aff.js","assets/zoneMacro-cb6b8e03.css"]),he=()=>s(()=>import("./timelineSettings-d516ff19.js"),["assets/timelineSettings-d516ff19.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/TimelineShow-fca241b4.js","assets/util-ef9ccf87.js","assets/xivapi-2de896fe.js","assets/TimelineShow-75399fec.css","assets/actionChinese-91930ff4.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-f2db0ac3.js","assets/timelineSettings-0dea3dd9.css"]),fe=()=>s(()=>import("./timelineHelp-8af30730.js"),["assets/timelineHelp-8af30730.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css"]),ge=()=>s(()=>import("./timeline-4038aa56.js"),["assets/timeline-4038aa56.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/TimelineShow-fca241b4.js","assets/util-ef9ccf87.js","assets/xivapi-2de896fe.js","assets/TimelineShow-75399fec.css","assets/overlay_plugin_api-409cb9ea.js","assets/timeline-f0d5d611.css"]),be=()=>s(()=>import("./time-8f790439.js"),["assets/time-8f790439.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/overlay_plugin_api-409cb9ea.js","assets/time-918176d5.css"]),ve=()=>s(()=>import("./stageProgramme-d0c38ffc.js"),["assets/stageProgramme-d0c38ffc.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/overlay_plugin_api-409cb9ea.js","assets/stageProgramme-387e577c.css"]),ye=()=>s(()=>import("./raidbuffRecord-a095e160.js"),["assets/raidbuffRecord-a095e160.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/flags-7cc6220e.js","assets/status-5d5f450e.js","assets/xivapi-2de896fe.js","assets/util-ef9ccf87.js","assets/flags-248e5713.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-2830d8aa.js","assets/actionChinese-91930ff4.js","assets/raidbuffRecord-ab8ce4c0.css"]),we=()=>s(()=>import("./okASTCard-ff9c0d85.js"),["assets/okASTCard-ff9c0d85.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-ef9ccf87.js","assets/xivapi-2de896fe.js"]),Ee=()=>s(()=>import("./obs-cdfdd09d.js"),["assets/obs-cdfdd09d.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/content_type-52b79aff.js","assets/zoneInfo-f2db0ac3.js","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/obs-4e3c15aa.css"]),Te=()=>s(()=>import("./keigennRecord2-cead9a0f.js"),["assets/keigennRecord2-cead9a0f.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/flags-7cc6220e.js","assets/status-5d5f450e.js","assets/xivapi-2de896fe.js","assets/util-ef9ccf87.js","assets/flags-248e5713.css","assets/netregexes-2830d8aa.js","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-91930ff4.js","assets/keigennRecord2-ebe850e1.css"]),ke=()=>s(()=>import("./instancedAreaInfo-1f7192f5.js"),["assets/instancedAreaInfo-1f7192f5.js","assets/overlay_plugin_api-409cb9ea.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/instancedAreaInfo-3a76d1b9.css"]),Re=()=>s(()=>import("./hexcode-6df2c9c3.js"),["assets/hexcode-6df2c9c3.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/hexcode-b7ee9cad.css"]),Ae=()=>s(()=>import("./ffxivAxisWebFont-264f8ed9.js"),["assets/ffxivAxisWebFont-264f8ed9.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/ffxivAxisWebFont-bd8882d2.css"]),Le=()=>s(()=>import("./fflogsUploaderDownload-457534d3.js"),["assets/fflogsUploaderDownload-457534d3.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/fflogsUploaderDownload-0397129e.css"]),Pe=()=>s(()=>import("./dsrp6-62ee5595.js"),["assets/dsrp6-62ee5595.js","assets/overlay_plugin_api-409cb9ea.js","assets/xivapi-2de896fe.js","assets/util-ef9ccf87.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/dsrp6-8f5f5616.css"]),Se=()=>s(()=>import("./castingToChinese-09f5896e.js"),["assets/castingToChinese-09f5896e.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-91930ff4.js","assets/castingToChinese-c014f13b.css"]),Oe=()=>s(()=>import("./castingMonitor-5e0e5feb.js"),["assets/castingMonitor-5e0e5feb.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-ef9ccf87.js","assets/xivapi-2de896fe.js","assets/castingMonitor-07083a4e.css"]),Ie=()=>s(()=>import("./cactbotRuntime-25f057aa.js"),["assets/cactbotRuntime-25f057aa.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/util-ef9ccf87.js","assets/overlay_plugin_api-409cb9ea.js","assets/cactbotRuntime-30262b06.css"]),De=()=>s(()=>import("./blubook-c00e046b.js"),["assets/blubook-c00e046b.js","assets/vendor-cc98dd31.js","assets/vendor-c4618592.css","assets/status-5d5f450e.js","assets/blubook-c4b6b9b1.css"]),xe=[{name:"jobs-dnc",path:"/jobs/dnc",component:ue,props:!0},{name:"zoneMacro",path:"/zonemacro",component:de,props:!0},{name:"timelineSettings",path:"/timelinesettings",component:he,props:!0},{name:"timelineHelp",path:"/timelinehelp",component:fe,props:!0},{name:"timeline",path:"/timeline",component:ge,props:!0},{name:"time",path:"/time",component:be,props:!0},{name:"stageProgramme",path:"/stageprogramme",component:ve,props:!0},{name:"raidbuffRecord",path:"/raidbuffrecord",component:ye,props:!0},{name:"okASTCard",path:"/okastcard",component:we,props:!0},{name:"obs",path:"/obs",component:Ee,props:!0},{name:"keigennRecord2",path:"/keigennrecord2",component:Te,props:!0},{name:"instancedAreaInfo",path:"/instancedareainfo",component:ke,props:!0},{name:"index",path:"/",component:me,props:!0},{name:"hexcode",path:"/hexcode",component:Re,props:!0},{name:"ffxivAxisWebFont",path:"/ffxivaxiswebfont",component:Ae,props:!0},{name:"fflogsUploaderDownload",path:"/fflogsuploaderdownload",component:Le,props:!0},{name:"dsrp6",path:"/dsrp6",component:Pe,props:!0},{name:"castingToChinese",path:"/castingtochinese",component:Se,props:!0},{name:"castingMonitor",path:"/castingmonitor",component:Oe,props:!0},{name:"cactbotRuntime",path:"/cactbotruntime",component:Ie,props:!0},{name:"blubook",path:"/blubook",component:De,props:!0}],g=z({history:j(),routes:xe}),Ve=new Map(Object.entries({index:"导航页",timeline:"时间轴",timelineSettings:"时间轴编辑",instancedAreaInfo:"副本区信息",stageProgramme:"舞台节目单",dsrp6:"绝龙诗P6",obs:"obs自动录制",zoneMacro:"副本宏",fflogsUploaderDownload:"今天FFLogsUploader更新了吗？","jobs-dnc":"舞者增强",okASTCard:"一键发卡",castingToChinese:"读条汉化",castingMonitor:"施法监控",cactbotRuntime:"cactbot拓展",blubook:"青魔法书图鉴",keigennRecord:"减伤监控2"}));var T;for(const o of g.getRoutes())o.meta.title=Ve.get(((T=o.name)==null?void 0:T.toString())??"")??o.name;g.afterEach((o,r)=>{var a;document.title=((a=o.meta.title)==null?void 0:a.toString())??"",o.name==="index"&&r.name!==void 0&&o.name!==r.name&&window.location.reload()});const d=F($),Ce=W(),Me=N();d.use(g);d.use(Ce);d.use(Me);d.use(U);d.use(H);d.mount("#app");export{le as _,g as r};
