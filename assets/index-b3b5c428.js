import{d as T,r as v,c as P,w as m,u as A,E as L,o as d,a as p,z as R,b as g,e as S,f as k,t as O,g as b,h as I,i as C,p as D,j as V,k as w,l as x,m as B,n as j,q as M,V as z}from"./vendor-834361d8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const F=T({__name:"App",setup(o){return(s,a)=>{const i=v("router-view"),t=L;return d(),P(t,{locale:A(R)},{default:m(()=>[p(i)]),_:1},8,["locale"])}}});const N="modulepreload",U=function(o){return"/ff14-overlay-vue/"+o},E={},n=function(s,a,i){if(!a||a.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=U(e),e in E)return;E[e]=!0;const r=e.endsWith(".css"),h=r?'[rel="stylesheet"]':"";if(!!i)for(let _=t.length-1;_>=0;_--){const u=t[_];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":N,r||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),r)return new Promise((_,u)=>{c.addEventListener("load",_),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},W="/ff14-overlay-vue/assets/keigenn-record-2-21d8788f.png",H="/ff14-overlay-vue/assets/key-skill-timer-9b9bee98.png",G="/ff14-overlay-vue/assets/limit-break-tip-027f9c2f.gif",$="/ff14-overlay-vue/assets/dnc-caebfabb.gif",q="/ff14-overlay-vue/assets/casting-to-chinese-d557a6d5.gif",X="/ff14-overlay-vue/assets/team-watch-fbdcb8df.jpg",J="/ff14-overlay-vue/assets/timeline-b2403761.jpg",K="/ff14-overlay-vue/assets/casting-monitor-b2c3df2a.jpg",Q="/ff14-overlay-vue/assets/zone-macro-3d8af792.png",Y=o=>(D("data-v-194c4b20"),o=o(),V(),o),Z={class:"common-layout","bt-white":""},ee=Y(()=>k("h1",null,"主页导航",-1)),te=["onClick"],oe=["src"],ne={key:1},se=T({__name:"index",setup(o){const s=[{title:"Cactbot自定义JS分享",type:"网页",path:"https://github.com/Souma-Sumire/raidboss-user-js-public",comment:"前往Github项目了解详情"},{title:"国际服汉化补丁",type:"网页",path:"https://github.com/Souma-Sumire/FFXIVChnTextPatch-Souma/",comment:"前往Github项目了解详情"},{title:"青魔法书图鉴",type:"网页",path:"blubook"},{title:"FFLOGS上传器加速下载",type:"网页",path:"fflogsUploaderDownload"},{title:"[悬浮窗] 减伤监控2",type:"悬浮窗/网页",path:"keigennRecord2",comment:`详细说明：
https://nga.178.com/read.php?tid=28047277`,src:W},{title:"[悬浮窗] 职业增强：舞者",type:"悬浮窗",path:"jobs/dnc",comment:"在技能上显示buff消失倒计时",src:$},{title:"[悬浮窗] 占星一键发卡",type:"悬浮窗",path:"okASTCard"},{title:"[悬浮窗] 施法监控",type:"悬浮窗",path:"castingMonitor?duration=25&energySaving=true&displayAA=false&displayGCDSpace=false&api=cafemaker&syncFocusWS=true&showHeader=true",comment:`详细说明：
https://nga.178.com/read.php?tid=33989985`,src:K},{title:"[悬浮窗] 全副本发宏/标点",type:"悬浮窗",path:"zoneMacro",src:Q},{title:"[悬浮窗] 自定义技能时间轴",type:"悬浮窗",path:"timeline",src:J},{title:"[悬浮窗] OBS自动录制",type:"悬浮窗",path:"obs"},{title:"[悬浮窗] 读条汉化",type:"悬浮窗",path:"castingToChinese",comment:"",src:q},{title:"[悬浮窗] 团辅监控（旧）",type:"悬浮窗",path:"https://souma.diemoe.net/dist/keySkillTimer.html?international=false&dajinengTTS=true&jianshangTTS=true&tuanfuTTS=true",comment:"",src:H},{title:"[悬浮窗] 技能监控（旧）",type:"悬浮窗",path:"https://souma.diemoe.net/dist/teamWatch.html?scale=1&reverse=false&rightAlign=false&postNamazu=false",comment:"建议使用dalamud同功能插件。",src:X},{title:"[悬浮窗] LB额外增长监控",type:"悬浮窗",path:"https://souma.diemoe.net/dist/limitBreakTip.html?LBMax=30000&automatic=220",comment:"速刷用，记录LB奖励数值。",src:G},{title:"[悬浮窗] 我TM现在在几线？",type:"悬浮窗",path:"instancedAreaInfo",comment:"狩猎用，显示你当前在几线。"}];function a(i){i.path.startsWith("http")?window.open(i.path,"_blank"):f.push(i.path)}return(i,t)=>{const e=I,r=v("vxe-column"),h=v("vxe-table"),y=C,c=S;return d(),g("div",Z,[p(c,null,{default:m(()=>[p(e,null,{default:m(()=>[ee]),_:1}),p(y,null,{default:m(()=>[p(h,{data:s,border:"",stripe:"","row-config":{height:100}},{default:m(()=>[p(r,{width:"250",title:"名称"},{default:m(({row:_})=>[k("a",{onClick:()=>a(_),style:{cursor:"pointer"}},O(_.title),9,te)]),_:1}),p(r,{width:"420",title:"预览"},{default:m(({row:_})=>[_.src?(d(),g("img",{key:0,src:_.src,alt:""},null,8,oe)):b("",!0),_.src?b("",!0):(d(),g("i",ne,"无"))]),_:1}),p(r,{field:"comment",type:"html",title:"描述"})]),_:1})]),_:1})]),_:1})])}}});const re=(o,s)=>{const a=o.__vccOpts||o;for(const[i,t]of s)a[i]=t;return a},ae=re(se,[["__scopeId","data-v-194c4b20"]]),ie=()=>n(()=>import("./dnc-74030a96.js"),["assets/dnc-74030a96.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/dnc-8396f239.css"]),_e=()=>n(()=>import("./zoneMacro-b54ab6f2.js"),["assets/zoneMacro-b54ab6f2.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/zoneInfo-f7201f2f.js","assets/zoneMacro-cf590fb6.css"]),ce=()=>n(()=>import("./timelineSettings-75c8299d.js"),["assets/timelineSettings-75c8299d.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/timelineShow-f062bb85.js","assets/util-f6d3a594.js","assets/xivapi-7d63ceb7.js","assets/queryParams-77a1fad5.js","assets/timelineShow-0777a9cf.css","assets/actionChinese-71b7e526.js","assets/zoneInfo-f7201f2f.js","assets/timelineSettings-ee384bc5.css"]),pe=()=>n(()=>import("./timeline-07c9a8a0.js"),["assets/timeline-07c9a8a0.js","assets/timelineShow-f062bb85.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/util-f6d3a594.js","assets/xivapi-7d63ceb7.js","assets/queryParams-77a1fad5.js","assets/timelineShow-0777a9cf.css","assets/timeline-70662527.css"]),me=()=>n(()=>import("./time-5d0a7552.js"),["assets/time-5d0a7552.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/time-8ba7b8dc.css"]),le=()=>n(()=>import("./test-f82460f4.js"),["assets/test-f82460f4.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css"]),ue=()=>n(()=>import("./stageProgramme-eb2e3e93.js"),["assets/stageProgramme-eb2e3e93.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/stageProgramme-5f2dbca9.css"]),de=()=>n(()=>import("./raidbuffRecord-eeb6ab04.js"),["assets/raidbuffRecord-eeb6ab04.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/deepClone-9d583a4b.js","assets/deepClone-f358ccea.css","assets/netregexes-bb7ceaea.js","assets/util-f6d3a594.js","assets/status-2cacdfd9.js","assets/actionChinese-71b7e526.js","assets/raidbuffRecord-3126a192.css"]),fe=()=>n(()=>import("./okASTCard-ae33c170.js"),["assets/okASTCard-ae33c170.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/util-f6d3a594.js","assets/xivapi-7d63ceb7.js","assets/queryParams-77a1fad5.js"]),he=()=>n(()=>import("./obs-d3aeb344.js"),["assets/obs-d3aeb344.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/zoneInfo-f7201f2f.js","assets/netregexes-bb7ceaea.js","assets/obs-4e3c15aa.css"]),ge=()=>n(()=>import("./keigennRecord2-cf41abfb.js"),["assets/keigennRecord2-cf41abfb.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/deepClone-9d583a4b.js","assets/deepClone-f358ccea.css","assets/netregexes-bb7ceaea.js","assets/util-f6d3a594.js","assets/status-2cacdfd9.js","assets/actionChinese-71b7e526.js","assets/keigennRecord2-c8382c9f.css"]),ve=()=>n(()=>import("./instancedAreaInfo-2859f5b9.js"),["assets/instancedAreaInfo-2859f5b9.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/instancedAreaInfo-b2f56599.css"]),ye=()=>n(()=>import("./fflogsUploaderDownload-52febdfb.js"),["assets/fflogsUploaderDownload-52febdfb.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/fflogsUploaderDownload-78e646bd.css"]),be=()=>n(()=>import("./fflogsCsvTimelineCreate-f12ee196.js"),["assets/fflogsCsvTimelineCreate-f12ee196.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/fflogsCsvTimelineCreate-1c03a104.css"]),Ee=()=>n(()=>import("./dsrp6-15e9bfc9.js"),["assets/dsrp6-15e9bfc9.js","assets/xivapi-7d63ceb7.js","assets/queryParams-77a1fad5.js","assets/util-f6d3a594.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/dsrp6-6844239b.css"]),Te=()=>n(()=>import("./castingToChinese-811670d7.js"),["assets/castingToChinese-811670d7.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/actionChinese-71b7e526.js","assets/queryParams-77a1fad5.js","assets/castingToChinese-8941e49d.css"]),ke=()=>n(()=>import("./castingMonitor-46c770ae.js"),["assets/castingMonitor-46c770ae.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/queryParams-77a1fad5.js","assets/util-f6d3a594.js","assets/xivapi-7d63ceb7.js","assets/castingMonitor-583805c7.css"]),Pe=()=>n(()=>import("./cactbotRuntime-7c33d935.js"),["assets/cactbotRuntime-7c33d935.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/util-f6d3a594.js","assets/cactbotRuntime-bb3e69bb.css"]),Ae=()=>n(()=>import("./blubook-229a1fc4.js"),["assets/blubook-229a1fc4.js","assets/vendor-834361d8.js","assets/vendor-f1e82a98.css","assets/status-2cacdfd9.js","assets/blubook-0ae20ec8.css"]),Le=[{name:"jobs-dnc",path:"/jobs/dnc",component:ie,props:!0},{name:"zoneMacro",path:"/zonemacro",component:_e,props:!0},{name:"timelineSettings",path:"/timelinesettings",component:ce,props:!0},{name:"timeline",path:"/timeline",component:pe,props:!0},{name:"time",path:"/time",component:me,props:!0},{name:"test",path:"/test",component:le,props:!0},{name:"stageProgramme",path:"/stageprogramme",component:ue,props:!0},{name:"raidbuffRecord",path:"/raidbuffrecord",component:de,props:!0},{name:"okASTCard",path:"/okastcard",component:fe,props:!0},{name:"obs",path:"/obs",component:he,props:!0},{name:"keigennRecord2",path:"/keigennrecord2",component:ge,props:!0},{name:"instancedAreaInfo",path:"/instancedareainfo",component:ve,props:!0},{name:"index",path:"/",component:ae,props:!0},{name:"fflogsUploaderDownload",path:"/fflogsuploaderdownload",component:ye,props:!0},{name:"fflogsCsvTimelineCreate",path:"/fflogscsvtimelinecreate",component:be,props:!0},{name:"dsrp6",path:"/dsrp6",component:Ee,props:!0},{name:"castingToChinese",path:"/castingtochinese",component:Te,props:!0},{name:"castingMonitor",path:"/castingmonitor",component:ke,props:!0},{name:"cactbotRuntime",path:"/cactbotruntime",component:Pe,props:!0},{name:"blubook",path:"/blubook",component:Ae,props:!0}],f=w({history:x(),routes:Le}),Re=new Map(Object.entries({index:"导航页",timeline:"时间轴",timelineSettings:"时间轴编辑",instancedAreaInfo:"副本区信息",stageProgramme:"舞台节目单",dsrp6:"绝龙诗P6",obs:"obs自动录制",zoneMacro:"副本宏",fflogsUploaderDownload:"今天FFLogsUploader更新了吗？","jobs-dnc":"舞者增强",okASTCard:"一键发卡",castingToChinese:"读条汉化",castingMonitor:"施法监控",cactbotRuntime:"cactbot拓展",blubook:"青魔法书图鉴",keigennRecord:"减伤监控2"}));f.getRoutes().forEach(o=>{var s;o.meta.title=Re.get(((s=o.name)==null?void 0:s.toString())??"")??o.name});f.afterEach((o,s)=>{var a;document.title=((a=o.meta.title)==null?void 0:a.toString())??"",o.name==="index"&&s.name!==void 0&&o.name!==s.name&&window.location.reload()});const l=B(F),Se=j(),Oe=M();l.use(f);l.use(Se);l.use(Oe);l.use(z);l.mount("#app");export{re as _};
