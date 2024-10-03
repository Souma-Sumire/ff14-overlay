import{d as h,c as O,w as E,u as T,r as S,E as P,o as g,a as R,z as f,b as v,e as D,f as $,g as b,h as L,i as A,j as y,k as B,V as w,l as V,m as I}from"./vendor-9c3ca848.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function p(o){if(o.ep)return;o.ep=!0;const e=i(o);fetch(o.href,e)}})();const k="Connecting...",W="Add this page as a data statistics overlay in ACT.",x="Open OBS → Tools → WebSocket Server Settings → Enable WebSocket Server → Show Connection Info → Obtain Port and Password",N="Can't type? First click on ACT, then click on this floating window to enter normally.",U="After completing all settings, in OverlayPlugin, uncheck [Show Overlay] to hide this page.",F="Combat Start",G="Combat End",H="Connect",z="Connected",M="CountDown",j="Deep Dungeons",Q="Disciples Of The Land",Y="Disconnect",q="Dungeons",Z="Eureka",K="GrandCompany",X="Guildhests",J="Instructions",tt="No",et="None",ot="Password",nt="Port",st="Pvp",rt="QuestBattles",it="Raids",at="Recording",ct="TreasureHunt",pt="Trials",_t="Type",ut="Ultimate",lt="VCD",dt="Wipe",mt="Yes",ht="WebSocket Server Password",gt="WebSocket Server Port",Ct="Record only when the number of team members is less than or equal to 8 (to exclude 24 person content)",Ot="Record only when the number of team members is less than or equal to 5 (to exclude 72 person content)",Et={Connecting:k,overlayTutorial:W,obsTutorial:x,inputTutorial:N,hideTutorial:U,CombatStart:F,CombatEnd:G,"ACT Not Ready":"ACT Not Ready",Connect:H,"Connect to OBS":"Connect to OBS",Connected:z,"Connection Status":"Connection Status",CountDown:M,DeepDungeons:j,DisciplesOfTheLand:Q,Disconnect:Y,Dungeons:q,"End When":"End When","Enter Zone":"Enter Zone",Eureka:Z,"Extra Rule":"Extra Rule",GrandCompany:K,Guildhests:X,Instructions:J,No:tt,None:et,"OBS Auto Record V2":"OBS Auto Record V2","OBS Connection":"OBS Connection","OBS Connection Closed":"OBS Connection Closed","OBS Connection Error":"OBS Connection Error","OBS Connection Opened":"OBS Connection Opened","Output Active":"Output Active","Output Path":"Output Path",Password:ot,Port:nt,Pvp:st,QuestBattles:rt,Raids:it,Recording:at,"Recording Controls":"Recording Controls","Split Record":"Split Record","Start Record":"Start Record","Start When":"Start When","Stop Record":"Stop Record",TreasureHunt:ct,Trials:pt,Type:_t,UltimateRaids:ut,"User Content Settings":"User Content Settings",VCDungeonFinder:lt,Wipe:dt,Yes:mt,passwordPlaceholder:ht,portPlaceholder:gt,RaidsLimitToEightOrLess:Ct,PvpLimitToEightOrLess:Ot},Tt="WebSocket 服务器端口",St="WebSocket 服务器密码",Pt="大型任务",Rt="绝境战",ft="迷宫挑战",vt="讨伐歼灭战",Dt="多变迷宫",$t="深层迷宫",bt="行会令",Lt="海钓 / 云岛",At="尤雷卡",yt="金蝶游乐场",Bt="任务剧情",wt="挖宝",Vt="PVP",It="断开连接",kt="已连接",Wt="录制中",xt="副本类型",Nt="团灭",Ut="打不了字？先点击 ACT，再点击本悬浮窗，即可正常输入",Ft="端口",Gt="密码",Ht="无",zt="是",Mt="否",jt="打开 OBS → 工具 → WebSocket 服务器设置 → 开启 WebSocket 服务器 → 显示连接信息 → 获得端口与密码",Qt="正在尝试连接...",Yt="连接",qt="使用说明",Zt="一切设置妥当后，在 OverlayPlugin 悬浮窗插件中，取消勾选 [显示悬浮窗] 以隐藏本页面",Kt="在 ACT 中添加本页面作为数据统计悬浮窗",Xt="战斗结束",Jt="倒计时开始",te="战斗开始",ee="队员数量小于等于 8 人时才录制（用于排除 24 人本）",oe="队员数量小于等于 5 人时才录制（用于排除 72 人战场）",ne={portPlaceholder:Tt,passwordPlaceholder:St,Raids:Pt,UltimateRaids:Rt,Dungeons:ft,Trials:vt,VCDungeonFinder:Dt,DeepDungeons:$t,Guildhests:bt,DisciplesOfTheLand:Lt,Eureka:At,GrandCompany:yt,QuestBattles:Bt,TreasureHunt:wt,Pvp:Vt,"OBS Connection":"OBS 连接","OBS Connection Closed":"OBS 连接失败","OBS Connection Error":"OBS 连接错误","OBS Connection Opened":"OBS 连接成功","Connection Status":"连接状态",Disconnect:It,Connected:kt,Recording:Wt,"Output Active":"输出激活","Output Path":"输出路径","Recording Controls":"测试面板","Start Record":"开始录制","Stop Record":"停止录制","Split Record":"分割录制","User Content Settings":"录制规则",Type:xt,"Start When":"开始录制条件","Enter Zone":"进入区域","End When":"结束录制条件",Wipe:Nt,"OBS Auto Record V2":"OBS 自动录制 2",inputTutorial:Ut,Port:Ft,Password:Gt,None:Ht,Yes:zt,No:Mt,obsTutorial:jt,Connecting:Qt,Connect:Yt,Instructions:qt,"Connect to OBS":"连接到 OBS",hideTutorial:Zt,overlayTutorial:Kt,"ACT Not Ready":"ACT 未连接",CombatEnd:Xt,CountDown:Jt,CombatStart:te,"Extra Rule":"额外规则",RaidsLimitToEightOrLess:ee,PvpLimitToEightOrLess:oe},se="WebSocketサーバーポート",re="WebSocketサーバーパスワード",ie="接続",ae="レイド",ce="絶難易度レイド",pe="ダンジョン",_e="討伐・討滅戦",ue="変動ダンジョン",le="ディープダンジョン",de="ギルドオーダー",me="オーシャンフィッシング/無人島",he="エウレカ",ge="ゴールドソーサー",Ce="クエストバトル",Oe="トレジャーハント",Ee="PVP",Te="切断",Se="接続済み",Pe="録画中",Re="インスタンスタイプ",fe="全滅",ve="ポート",De="パスワード",$e="なし",be="すべての設定が完了したら、OverlayPluginで「オーバーレイを表示」のチェックを外して、このページを非表示にします。",Le="OBSを開く → ツール → WebSocketサーバー設定 → WebSocketサーバーを有効にする → 接続情報を表示 → ポートとパスワードを取得する",Ae="接続を試みています...",ye="いいえ",Be="はい",we="使用方法",Ve="入力できない場合は、まずACTをクリックし、次にこのオーバーレイウィンドウをクリックすると、通常の入力が可能になります",Ie="ACTでこのページをデータ統計用のオーバーレイウィンドウとして追加してください",ke="戦闘終了",We="カウントダウン開始",xe="戦闘開始",Ne="メンバー数が8以下の場合に録画（24人を除くため）",Ue="メンバー数が5以下の場合に録画（72人を除くため）",Fe={portPlaceholder:se,passwordPlaceholder:re,Connect:ie,Raids:ae,UltimateRaids:ce,Dungeons:pe,Trials:_e,VCDungeonFinder:ue,DeepDungeons:le,Guildhests:de,DisciplesOfTheLand:me,Eureka:he,GrandCompany:ge,QuestBattles:Ce,TreasureHunt:Oe,Pvp:Ee,"OBS Connection":"OBS接続","OBS Connection Closed":"OBS接続切断","OBS Connection Error":"OBS接続エラー","OBS Connection Opened":"OBS接続成功","Connection Status":"接続状態",Disconnect:Te,Connected:Se,Recording:Pe,"Output Active":"出力アクティブ","Output Path":"出力パス","Recording Controls":"コントロールパネル","Start Record":"録画開始","Stop Record":"録画停止","Split Record":"録画分割","User Content Settings":"ルール設定",Type:Re,"Start When":"録画開始条件","Enter Zone":"エリア入場","End When":"録画終了条件",Wipe:fe,"OBS Auto Record V2":"OBS 自動録画2",Port:ve,Password:De,None:$e,hideTutorial:be,obsTutorial:Le,Connecting:Ae,No:ye,Yes:Be,Instructions:we,inputTutorial:Ve,"Connect to OBS":"OBSに接続",overlayTutorial:Ie,CombatEnd:ke,CountDown:We,CombatStart:xe,"ACT Not Ready":"ACT未接続","Extra Rule":"追加ルール",RaidsLimitToEightOrLess:Ne,PvpLimitToEightOrLess:Ue},Ge=h({__name:"App",setup(n){return(s,i)=>{const p=S("router-view"),o=P;return g(),O(o,{locale:T(f)},{default:E(()=>[R(p)]),_:1},8,["locale"])}}});const He="modulepreload",ze=function(n){return"/ff14-overlay-vue/"+n},d={},t=function(s,i,p){if(!i||i.length===0)return s();const o=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=ze(e),e in d)return;d[e]=!0;const r=e.endsWith(".css"),C=r?'[rel="stylesheet"]':"";if(!!p)for(let _=o.length-1;_>=0;_--){const u=o[_];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${C}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":He,r||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),r)return new Promise((_,u)=>{c.addEventListener("load",_),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},Me=h({__name:"index",setup(n){return v(()=>{t(()=>Promise.resolve().then(()=>Po),void 0).then(s=>{s.default.push("/startPages")})}),(s,i)=>(g(),D("div"))}}),je=()=>t(()=>import("./r4s-b9a14a25.js"),["assets/r4s-b9a14a25.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-60f54b26.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/r4s-9f75b35e.css"]),Qe=()=>t(()=>import("./dnc-290c06d9.js"),["assets/dnc-290c06d9.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/dnc-b7ce10dc.css"]),Ye=()=>t(()=>import("./zoneMacro-ac19d8f5.js"),["assets/zoneMacro-ac19d8f5.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/postNamazu-4eca3669.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-a419d684.js","assets/content_type-52b79aff.js","assets/actWS-e2500b62.js","assets/zoneMacro-b3190f0d.css"]),qe=()=>t(()=>import("./timelineSettings-c7a48e55.js"),["assets/timelineSettings-c7a48e55.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/TimelineShow-ca532673.js","assets/util-831b56e7.js","assets/xivapi-a5c0f7f0.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/TimelineShow-75399fec.css","assets/actionChinese-3b4280ef.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-a419d684.js","assets/timelineSettings-29cb3fca.css"]),Ze=()=>t(()=>import("./timelineHelp-9d96dd80.js"),["assets/timelineHelp-9d96dd80.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css"]),Ke=()=>t(()=>import("./timeline-778008ed.js"),["assets/timeline-778008ed.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/TimelineShow-ca532673.js","assets/util-831b56e7.js","assets/xivapi-a5c0f7f0.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/TimelineShow-75399fec.css","assets/overlay_plugin_api-409cb9ea.js","assets/timeline-59d695f6.css"]),Xe=()=>t(()=>import("./time-a5b15d6d.js"),["assets/time-a5b15d6d.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/time-d2eb91d9.css"]),Je=()=>t(()=>import("./statusCompare-e0100d6a.js"),["assets/statusCompare-e0100d6a.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/status-49900b6c.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/statusCompare-9a9b33b3.css"]),to=()=>t(()=>import("./startPages-f0b6d585.js"),["assets/startPages-f0b6d585.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/startPages-f32f36bf.css"]),eo=()=>t(()=>import("./showBarrier-8a52722a.js"),["assets/showBarrier-8a52722a.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/DragJob-7f8f6a54.js","assets/util-831b56e7.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/DragJob-7531adf9.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-60f54b26.js","assets/showBarrier-76e24b3a.css"]),oo=()=>t(()=>import("./okVpr2-8f5cd198.js"),["assets/okVpr2-8f5cd198.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js"]),no=()=>t(()=>import("./okVpr-0fdb39fe.js"),["assets/okVpr-0fdb39fe.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js"]),so=()=>t(()=>import("./okDncDance-bb8ba432.js"),["assets/okDncDance-bb8ba432.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js","assets/postNamazu-4eca3669.js"]),ro=()=>t(()=>import("./obs2-56be7c83.js"),["assets/obs2-56be7c83.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/content_type-52b79aff.js","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-60f54b26.js","assets/zoneInfo-a419d684.js","assets/obs2-05c5b2ec.css"]),io=()=>t(()=>import("./obs-990177cb.js"),["assets/obs-990177cb.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/content_type-52b79aff.js","assets/zoneInfo-a419d684.js","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-4ed47fc5.js","assets/obs-4e3c15aa.css"]),ao=()=>t(()=>import("./keigennRecord2-971fe094.js"),["assets/keigennRecord2-971fe094.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/status-49900b6c.js","assets/xivapi-a5c0f7f0.js","assets/util-831b56e7.js","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-3b4280ef.js","assets/keigennRecord2-c3314e99.css"]),co=()=>t(()=>import("./instancedAreaInfo-a6c15306.js"),["assets/instancedAreaInfo-a6c15306.js","assets/overlay_plugin_api-409cb9ea.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/instancedAreaInfo-766fd563.css"]),po=()=>t(()=>import("./hunt-cb29a4e7.js"),["assets/hunt-cb29a4e7.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-4ed47fc5.js","assets/zoneInfo-a419d684.js","assets/actWS-e2500b62.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/hunt-f41a6b22.css"]),_o=()=>t(()=>import("./hexcode-a5cb8315.js"),["assets/hexcode-a5cb8315.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/hexcode-75bc61c5.css"]),uo=()=>t(()=>import("./ffxivAxisWebFont-dcad915e.js"),["assets/ffxivAxisWebFont-dcad915e.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/ffxivAxisWebFont-bd8882d2.css"]),lo=()=>t(()=>import("./fflogsUploaderDownload-136a6740.js"),["assets/fflogsUploaderDownload-136a6740.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/fflogsUploaderDownload-0397129e.css"]),mo=()=>t(()=>import("./dsrp6-ba724867.js"),["assets/dsrp6-ba724867.js","assets/overlay_plugin_api-409cb9ea.js","assets/xivapi-a5c0f7f0.js","assets/util-831b56e7.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/dsrp6-8f5f5616.css"]),ho=()=>t(()=>import("./castingToChinese-b2c1f4eb.js"),["assets/castingToChinese-b2c1f4eb.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-3b4280ef.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/castingToChinese-8a287926.css"]),go=()=>t(()=>import("./castingMonitor-62218938.js"),["assets/castingMonitor-62218938.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-831b56e7.js","assets/xivapi-a5c0f7f0.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/castingMonitor-18fbedc2.css"]),Co=()=>t(()=>import("./cactbotRuntime-3d5d7a8c.js"),["assets/cactbotRuntime-3d5d7a8c.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/DragJob-7f8f6a54.js","assets/util-831b56e7.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/DragJob-7531adf9.css","assets/overlay_plugin_api-409cb9ea.js","assets/cactbotRuntime-6dd56130.css"]),Oo=()=>t(()=>import("./blubook-a6bc1598.js"),["assets/blubook-a6bc1598.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/status-49900b6c.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/blubook-15ced835.css"]),Eo=()=>t(()=>import("./aether-9a7f0b7f.js"),["assets/aether-9a7f0b7f.js","assets/vendor-9c3ca848.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/aether-11c17ed0.css"]),To=[{name:"special-r4s",path:"/special/r4s",component:je,props:!0},{name:"jobs-dnc",path:"/jobs/dnc",component:Qe,props:!0},{name:"zoneMacro",path:"/zonemacro",component:Ye,props:!0},{name:"timelineSettings",path:"/timelinesettings",component:qe,props:!0},{name:"timelineHelp",path:"/timelinehelp",component:Ze,props:!0},{name:"timeline",path:"/timeline",component:Ke,props:!0},{name:"time",path:"/time",component:Xe,props:!0},{name:"statusCompare",path:"/statuscompare",component:Je,props:!0},{name:"startPages",path:"/startpages",component:to,props:!0},{name:"showBarrier",path:"/showbarrier",component:eo,props:!0},{name:"okVpr2",path:"/okvpr2",component:oo,props:!0},{name:"okVpr",path:"/okvpr",component:no,props:!0},{name:"okDncDance",path:"/okdncdance",component:so,props:!0},{name:"obs2",path:"/obs2",component:ro,props:!0},{name:"obs",path:"/obs",component:io,props:!0},{name:"keigennRecord2",path:"/keigennrecord2",component:ao,props:!0},{name:"instancedAreaInfo",path:"/instancedareainfo",component:co,props:!0},{name:"index",path:"/",component:Me,props:!0},{name:"hunt",path:"/hunt",component:po,props:!0},{name:"hexcode",path:"/hexcode",component:_o,props:!0},{name:"ffxivAxisWebFont",path:"/ffxivaxiswebfont",component:uo,props:!0},{name:"fflogsUploaderDownload",path:"/fflogsuploaderdownload",component:lo,props:!0},{name:"dsrp6",path:"/dsrp6",component:mo,props:!0},{name:"castingToChinese",path:"/castingtochinese",component:ho,props:!0},{name:"castingMonitor",path:"/castingmonitor",component:go,props:!0},{name:"cactbotRuntime",path:"/cactbotruntime",component:Co,props:!0},{name:"blubook",path:"/blubook",component:Oo,props:!0},{name:"aether",path:"/aether",component:Eo,props:!0}],l=$({history:b(),routes:To}),So=new Map(Object.entries({aether:"简易风脉地图",blubook:"青魔法书图鉴",cactbotRuntime:"职能分配",castingMonitor:"施法监控",castingToChinese:"读条汉化",dsrp6:"绝龙诗 P6 修血简易记录",fflogsUploaderDownload:"今天 FFLogsUploader 更新了吗？",ffxivAxisWebFont:"FFXIV Axis 字体",hexcode:"hexcode 简易工具",hunt:"有车吗？",instancedAreaInfo:"我 TM 现在在几线？",keigennRecord2:"减伤监控 2",obs:"OBS 自动录制",obs2:"OBS 自动录制 2",showBarrier:"盾值显示",startPages:"主页导航",statusCompare:"版本新增状态一览",time:"显示时间",timeline:"自定义时间轴",timelineHelp:"自定义时间轴帮助",timelineSettings:"自定义时间轴编辑",zoneMacro:"副本宏"}));var m;for(const n of l.getRoutes())n.meta.title=So.get(((m=n.name)==null?void 0:m.toString())??"")??n.name;l.afterEach((n,s)=>{var i;document.title=((i=n.meta.title)==null?void 0:i.toString())??"",s.name==="startPages"&&n.name==="zoneMacro"&&window.location.reload(),n.name==="startPages"&&s.name!==void 0&&n.name!==s.name&&window.location.reload()});const Po=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));const a=L(Ge),Ro=A(),fo=y(),vo=B({legacy:!1,locale:"zhCn",fallbackLocale:"en",messages:{en:Et,zhCn:ne,ja:Fe}});a.use(l);a.use(Ro);a.use(fo);a.use(w);a.use(V);a.use(I);a.use(vo);a.mount("#app");export{l as r};
