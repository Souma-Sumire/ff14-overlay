import{d as h,c as E,w as O,u as T,r as S,E as P,o as g,a as R,z as f,b as v,e as D,f as $,g as b,h as A,i as y,j as L,k as B,V as w,l as V,m as k}from"./vendor-8bdaa26a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))_(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&_(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function _(o){if(o.ep)return;o.ep=!0;const e=a(o);fetch(o.href,e)}})();const I="Connecting...",W="Add this page as a data statistics overlay in ACT.",x="Open OBS → Tools → WebSocket Server Settings → Enable WebSocket Server → Show Connection Info → Obtain Port and Password",N="Can't type? First click on ACT, then click on this floating window to enter normally.",U="After completing all settings, in OverlayPlugin, uncheck [Show Overlay] to hide this page.",G="Combat Start",F="Combat End",H="Connect",z="Connected",j="CountDown",M="DeepDungeons",Q="DisciplesOfTheLand",Y="Disconnect",Z="Dungeons",q="Eureka",K="GrandCompany",J="Guildhests",X="Instructions",tt="No",et="None",ot="Password",nt="Port",st="Pvp",rt="QuestBattles",at="Raids",it="Recording",ct="TreasureHunt",_t="Trials",pt="Type",ut="Ultimate",lt="VCD",dt="Wipe",mt="Yes",ht="Record only when the number of team members is less than or equal to 8 (to exclude 24 person laptops)",gt="WebSocket Server Password",Ct="WebSocket Server Port",Et={Connecting:I,overlayTutorial:W,obsTutorial:x,inputTutorial:N,hideTutorial:U,CombatStart:G,CombatEnd:F,"ACT Not Ready":"ACT Not Ready",Connect:H,"Connect to OBS":"Connect to OBS",Connected:z,"Connection Status":"Connection Status",CountDown:j,DeepDungeons:M,DisciplesOfTheLand:Q,Disconnect:Y,Dungeons:Z,"End When":"End When","Enter Zone":"Enter Zone",Eureka:q,"Extra Rule":"Extra Rule",GrandCompany:K,Guildhests:J,Instructions:X,No:tt,None:et,"OBS Auto Record V2":"OBS Auto Record V2","OBS Connection":"OBS Connection","OBS Connection Closed":"OBS Connection Closed","OBS Connection Error":"OBS Connection Error","OBS Connection Opened":"OBS Connection Opened","Output Active":"Output Active","Output Path":"Output Path",Password:ot,Port:nt,Pvp:st,QuestBattles:rt,Raids:at,Recording:it,"Recording Controls":"Recording Controls","Split Record":"Split Record","Start Record":"Start Record","Start When":"Start When","Stop Record":"Stop Record",TreasureHunt:ct,Trials:_t,Type:pt,UltimateRaids:ut,"User Content Settings":"User Content Settings",VCDungeonFinder:lt,Wipe:dt,Yes:mt,limitToEightOrLess:ht,passwordPlaceholder:gt,portPlaceholder:Ct},Ot="WebSocket 服务器端口",Tt="WebSocket 服务器密码",St="大型任务",Pt="绝境战",Rt="迷宫挑战",ft="讨伐歼灭战",vt="多变迷宫",Dt="深层迷宫",$t="行会令",bt="海钓/云岛",At="尤雷卡",yt="金蝶游乐场",Lt="任务剧情",Bt="挖宝",wt="PVP",Vt="断开连接",kt="已连接",It="录制中",Wt="副本类型",xt="团灭",Nt="打不了字？先点击ACT，再点击本悬浮窗，即可正常输入",Ut="端口",Gt="密码",Ft="无",Ht="是",zt="否",jt="打开 OBS → 工具 → WebSocket 服务器设置 → 开启 WebSocket 服务器 → 显示连接信息 → 获得端口与密码",Mt="正在尝试连接...",Qt="连接",Yt="使用说明",Zt="一切设置妥当后，在 OverlayPlugin 悬浮窗插件中，取消勾选 [显示悬浮窗] 以隐藏本页面",qt="在 ACT 中添加本页面作为数据统计悬浮窗",Kt="战斗结束",Jt="倒计时开始",Xt="战斗开始",te="队员数量小于等于8时才录制（用于排除24人本）",ee={portPlaceholder:Ot,passwordPlaceholder:Tt,Raids:St,UltimateRaids:Pt,Dungeons:Rt,Trials:ft,VCDungeonFinder:vt,DeepDungeons:Dt,Guildhests:$t,DisciplesOfTheLand:bt,Eureka:At,GrandCompany:yt,QuestBattles:Lt,TreasureHunt:Bt,Pvp:wt,"OBS Connection":"OBS 连接","OBS Connection Closed":"OBS 连接失败","OBS Connection Error":"OBS 连接错误","OBS Connection Opened":"OBS 连接成功","Connection Status":"连接状态",Disconnect:Vt,Connected:kt,Recording:It,"Output Active":"输出激活","Output Path":"输出路径","Recording Controls":"测试面板","Start Record":"开始录制","Stop Record":"停止录制","Split Record":"分割录制","User Content Settings":"录制规则",Type:Wt,"Start When":"开始录制条件","Enter Zone":"进入区域","End When":"结束录制条件",Wipe:xt,"OBS Auto Record V2":"OBS 自动录制2",inputTutorial:Nt,Port:Ut,Password:Gt,None:Ft,Yes:Ht,No:zt,obsTutorial:jt,Connecting:Mt,Connect:Qt,Instructions:Yt,"Connect to OBS":"连接到 OBS",hideTutorial:Zt,overlayTutorial:qt,"ACT Not Ready":"ACT未连接",CombatEnd:Kt,CountDown:Jt,CombatStart:Xt,"Extra Rule":"额外规则",limitToEightOrLess:te},oe="WebSocketサーバーポート",ne="WebSocketサーバーパスワード",se="接続",re="レイド",ae="絶難易度レイド",ie="ダンジョン",ce="討伐・討滅戦",_e="変動ダンジョン",pe="ディープダンジョン",ue="ギルドオーダー",le="オーシャンフィッシング/無人島",de="エウレカ",me="ゴールドソーサー",he="クエストバトル",ge="トレジャーハント",Ce="PVP",Ee="切断",Oe="接続済み",Te="録画中",Se="インスタンスタイプ",Pe="全滅",Re="ポート",fe="パスワード",ve="なし",De="すべての設定が完了したら、OverlayPluginで「オーバーレイを表示」のチェックを外して、このページを非表示にします。",$e="OBSを開く → ツール → WebSocketサーバー設定 → WebSocketサーバーを有効にする → 接続情報を表示 → ポートとパスワードを取得する",be="接続を試みています...",Ae="いいえ",ye="はい",Le="使用方法",Be="入力できない場合は、まずACTをクリックし、次にこのオーバーレイウィンドウをクリックすると、通常の入力が可能になります",we="ACTでこのページをデータ統計用のオーバーレイウィンドウとして追加してください",Ve="戦闘終了",ke="カウントダウン開始",Ie="戦闘開始",We="メンバー数が8以下の場合に録画（24人本を除くため）",xe={portPlaceholder:oe,passwordPlaceholder:ne,Connect:se,Raids:re,UltimateRaids:ae,Dungeons:ie,Trials:ce,VCDungeonFinder:_e,DeepDungeons:pe,Guildhests:ue,DisciplesOfTheLand:le,Eureka:de,GrandCompany:me,QuestBattles:he,TreasureHunt:ge,Pvp:Ce,"OBS Connection":"OBS接続","OBS Connection Closed":"OBS接続切断","OBS Connection Error":"OBS接続エラー","OBS Connection Opened":"OBS接続成功","Connection Status":"接続状態",Disconnect:Ee,Connected:Oe,Recording:Te,"Output Active":"出力アクティブ","Output Path":"出力パス","Recording Controls":"コントロールパネル","Start Record":"録画開始","Stop Record":"録画停止","Split Record":"録画分割","User Content Settings":"ルール設定",Type:Se,"Start When":"録画開始条件","Enter Zone":"エリア入場","End When":"録画終了条件",Wipe:Pe,"OBS Auto Record V2":"OBS 自動録画2",Port:Re,Password:fe,None:ve,hideTutorial:De,obsTutorial:$e,Connecting:be,No:Ae,Yes:ye,Instructions:Le,inputTutorial:Be,"Connect to OBS":"OBSに接続",overlayTutorial:we,CombatEnd:Ve,CountDown:ke,CombatStart:Ie,"ACT Not Ready":"ACT未接続","Extra Rule":"追加ルール",limitToEightOrLess:We},Ne=h({__name:"App",setup(n){return(s,a)=>{const _=S("router-view"),o=P;return g(),E(o,{locale:T(f)},{default:O(()=>[R(_)]),_:1},8,["locale"])}}});const Ue="modulepreload",Ge=function(n){return"/ff14-overlay-vue/"+n},d={},t=function(s,a,_){if(!a||a.length===0)return s();const o=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=Ge(e),e in d)return;d[e]=!0;const r=e.endsWith(".css"),C=r?'[rel="stylesheet"]':"";if(!!_)for(let p=o.length-1;p>=0;p--){const u=o[p];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${C}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Ue,r||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),r)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},Fe=h({__name:"index",setup(n){return v(()=>{t(()=>Promise.resolve().then(()=>Po),void 0).then(s=>{s.default.push("/startPages")})}),(s,a)=>(g(),D("div"))}}),He=()=>t(()=>import("./r4s-e88b1c80.js"),["assets/r4s-e88b1c80.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-60f54b26.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/r4s-9f75b35e.css"]),ze=()=>t(()=>import("./dnc-58ee9416.js"),["assets/dnc-58ee9416.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/dnc-b7ce10dc.css"]),je=()=>t(()=>import("./zoneMacro-e1b98dfc.js"),["assets/zoneMacro-e1b98dfc.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/postNamazu-4eca3669.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-a419d684.js","assets/content_type-52b79aff.js","assets/actWS-e2500b62.js","assets/zoneMacro-b3190f0d.css"]),Me=()=>t(()=>import("./timelineSettings-cb3df6a7.js"),["assets/timelineSettings-cb3df6a7.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/TimelineShow-8671ab5e.js","assets/util-6ab7166a.js","assets/xivapi-13f39952.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/TimelineShow-75399fec.css","assets/actionChinese-3b4280ef.js","assets/overlay_plugin_api-409cb9ea.js","assets/zoneInfo-a419d684.js","assets/timelineSettings-29cb3fca.css"]),Qe=()=>t(()=>import("./timelineHelp-8e3c54cf.js"),["assets/timelineHelp-8e3c54cf.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css"]),Ye=()=>t(()=>import("./timeline-ea2a4ea6.js"),["assets/timeline-ea2a4ea6.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/TimelineShow-8671ab5e.js","assets/util-6ab7166a.js","assets/xivapi-13f39952.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/TimelineShow-75399fec.css","assets/overlay_plugin_api-409cb9ea.js","assets/timeline-59d695f6.css"]),Ze=()=>t(()=>import("./time-fce8c63a.js"),["assets/time-fce8c63a.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/time-d2eb91d9.css"]),qe=()=>t(()=>import("./statusCompare-bb131e3f.js"),["assets/statusCompare-bb131e3f.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/status-49900b6c.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/statusCompare-9a9b33b3.css"]),Ke=()=>t(()=>import("./startPages-3f7f28d8.js"),["assets/startPages-3f7f28d8.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/startPages-44e6c677.css"]),Je=()=>t(()=>import("./stageProgramme-7713930f.js"),["assets/stageProgramme-7713930f.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/stageProgramme-c07a9f58.css"]),Xe=()=>t(()=>import("./showBarrier-c627d430.js"),["assets/showBarrier-c627d430.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/DragJob-716bef9c.js","assets/util-6ab7166a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/DragJob-7531adf9.css","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-60f54b26.js","assets/showBarrier-76e24b3a.css"]),to=()=>t(()=>import("./okVpr2-0ab82001.js"),["assets/okVpr2-0ab82001.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js"]),eo=()=>t(()=>import("./okVpr-0a76f696.js"),["assets/okVpr-0a76f696.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js"]),oo=()=>t(()=>import("./okDncDance-6104f589.js"),["assets/okDncDance-6104f589.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js","assets/postNamazu-4eca3669.js"]),no=()=>t(()=>import("./obs2-ce97c92e.js"),["assets/obs2-ce97c92e.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/content_type-52b79aff.js","assets/overlay_plugin_api-409cb9ea.js","assets/netregexes-60f54b26.js","assets/zoneInfo-a419d684.js","assets/obs2-ad882adf.css"]),so=()=>t(()=>import("./obs-236799e1.js"),["assets/obs-236799e1.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/content_type-52b79aff.js","assets/zoneInfo-a419d684.js","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-4ed47fc5.js","assets/obs-4e3c15aa.css"]),ro=()=>t(()=>import("./keySkillTimer-755f1bc0.js"),["assets/keySkillTimer-755f1bc0.js","assets/overlay_plugin_api-409cb9ea.js","assets/util-6ab7166a.js","assets/status-49900b6c.js","assets/xivapi-13f39952.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css"]),ao=()=>t(()=>import("./keigennRecord2-6670038a.js"),["assets/keigennRecord2-6670038a.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/status-49900b6c.js","assets/xivapi-13f39952.js","assets/util-6ab7166a.js","assets/netregexes-60f54b26.js","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-3b4280ef.js","assets/keigennRecord2-c3314e99.css"]),io=()=>t(()=>import("./instancedAreaInfo-28e71284.js"),["assets/instancedAreaInfo-28e71284.js","assets/overlay_plugin_api-409cb9ea.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/instancedAreaInfo-766fd563.css"]),co=()=>t(()=>import("./hunt-18c45652.js"),["assets/hunt-18c45652.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/zone_id-4ed47fc5.js","assets/zoneInfo-a419d684.js","assets/actWS-e2500b62.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/hunt-f41a6b22.css"]),_o=()=>t(()=>import("./hexcode-1aa9e244.js"),["assets/hexcode-1aa9e244.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/hexcode-75bc61c5.css"]),po=()=>t(()=>import("./ffxivAxisWebFont-2e4f39d3.js"),["assets/ffxivAxisWebFont-2e4f39d3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/ffxivAxisWebFont-bd8882d2.css"]),uo=()=>t(()=>import("./fflogsUploaderDownload-7511d6cd.js"),["assets/fflogsUploaderDownload-7511d6cd.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/fflogsUploaderDownload-0397129e.css"]),lo=()=>t(()=>import("./dsrp6-5b77ccd8.js"),["assets/dsrp6-5b77ccd8.js","assets/overlay_plugin_api-409cb9ea.js","assets/xivapi-13f39952.js","assets/util-6ab7166a.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/dsrp6-8f5f5616.css"]),mo=()=>t(()=>import("./dawntrail-338cb8f4.js"),["assets/dawntrail-338cb8f4.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/dawntrail-e206ec5d.css"]),ho=()=>t(()=>import("./castingToChinese-c0cfbc68.js"),["assets/castingToChinese-c0cfbc68.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/actionChinese-3b4280ef.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/castingToChinese-8a287926.css"]),go=()=>t(()=>import("./castingMonitor-fe8b7edb.js"),["assets/castingMonitor-fe8b7edb.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/overlay_plugin_api-409cb9ea.js","assets/util-6ab7166a.js","assets/xivapi-13f39952.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/castingMonitor-18fbedc2.css"]),Co=()=>t(()=>import("./cactbotRuntime-3352eb08.js"),["assets/cactbotRuntime-3352eb08.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/DragJob-716bef9c.js","assets/util-6ab7166a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/DragJob-7531adf9.css","assets/overlay_plugin_api-409cb9ea.js","assets/cactbotRuntime-6dd56130.css"]),Eo=()=>t(()=>import("./blubook-44fb1b1c.js"),["assets/blubook-44fb1b1c.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/status-49900b6c.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/blubook-15ced835.css"]),Oo=()=>t(()=>import("./aether-803bb3f7.js"),["assets/aether-803bb3f7.js","assets/vendor-8bdaa26a.js","assets/vendor-0289d9db.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/aether-11c17ed0.css"]),To=[{name:"special-r4s",path:"/special/r4s",component:He,props:!0},{name:"jobs-dnc",path:"/jobs/dnc",component:ze,props:!0},{name:"zoneMacro",path:"/zonemacro",component:je,props:!0},{name:"timelineSettings",path:"/timelinesettings",component:Me,props:!0},{name:"timelineHelp",path:"/timelinehelp",component:Qe,props:!0},{name:"timeline",path:"/timeline",component:Ye,props:!0},{name:"time",path:"/time",component:Ze,props:!0},{name:"statusCompare",path:"/statuscompare",component:qe,props:!0},{name:"startPages",path:"/startpages",component:Ke,props:!0},{name:"stageProgramme",path:"/stageprogramme",component:Je,props:!0},{name:"showBarrier",path:"/showbarrier",component:Xe,props:!0},{name:"okVpr2",path:"/okvpr2",component:to,props:!0},{name:"okVpr",path:"/okvpr",component:eo,props:!0},{name:"okDncDance",path:"/okdncdance",component:oo,props:!0},{name:"obs2",path:"/obs2",component:no,props:!0},{name:"obs",path:"/obs",component:so,props:!0},{name:"keySkillTimer",path:"/keyskilltimer",component:ro,props:!0},{name:"keigennRecord2",path:"/keigennrecord2",component:ao,props:!0},{name:"instancedAreaInfo",path:"/instancedareainfo",component:io,props:!0},{name:"index",path:"/",component:Fe,props:!0},{name:"hunt",path:"/hunt",component:co,props:!0},{name:"hexcode",path:"/hexcode",component:_o,props:!0},{name:"ffxivAxisWebFont",path:"/ffxivaxiswebfont",component:po,props:!0},{name:"fflogsUploaderDownload",path:"/fflogsuploaderdownload",component:uo,props:!0},{name:"dsrp6",path:"/dsrp6",component:lo,props:!0},{name:"dawntrail",path:"/dawntrail",component:mo,props:!0},{name:"castingToChinese",path:"/castingtochinese",component:ho,props:!0},{name:"castingMonitor",path:"/castingmonitor",component:go,props:!0},{name:"cactbotRuntime",path:"/cactbotruntime",component:Co,props:!0},{name:"blubook",path:"/blubook",component:Eo,props:!0},{name:"aether",path:"/aether",component:Oo,props:!0}],l=$({history:b(),routes:To}),So=new Map(Object.entries({index:"导航页",timeline:"时间轴",timelineSettings:"时间轴编辑",instancedAreaInfo:"副本区信息",stageProgramme:"舞台节目单",dsrp6:"绝龙诗P6",obs:"obs自动录制",zoneMacro:"副本宏",fflogsUploaderDownload:"今天FFLogsUploader更新了吗？","jobs-dnc":"舞者增强",okASTCard:"一键发卡",castingToChinese:"读条汉化",castingMonitor:"施法监控",cactbotRuntime:"cactbot拓展",blubook:"青魔法书图鉴",keigennRecord:"减伤监控2"}));var m;for(const n of l.getRoutes())n.meta.title=So.get(((m=n.name)==null?void 0:m.toString())??"")??n.name;l.afterEach((n,s)=>{var a;document.title=((a=n.meta.title)==null?void 0:a.toString())??"",s.name==="startPages"&&n.name==="zoneMacro"&&window.location.reload(),n.name==="startPages"&&s.name!==void 0&&n.name!==s.name&&window.location.reload()});const Po=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));const i=A(Ne),Ro=y(),fo=L(),vo=B({legacy:!1,locale:"zhCn",fallbackLocale:"en",messages:{en:Et,zhCn:ee,ja:xe}});i.use(l);i.use(Ro);i.use(fo);i.use(w);i.use(V);i.use(k);i.use(vo);i.mount("#app");export{l as r};
