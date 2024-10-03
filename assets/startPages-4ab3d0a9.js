import{d as T,r as l,av as k,o,e as i,a as s,w as t,c as B,x as C,y as p,s as x,a0 as _,t as a,ak as N,al as I,D as R,a5 as A,a6 as D,G as M,H as L}from"./vendor-9c3ca848.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const H="/ff14-overlay-vue/assets/castingMonitor-6712fc16.webp",O="/ff14-overlay-vue/assets/castingToChinese-3f47f77a.webp",V="/ff14-overlay-vue/assets/dnc-fb351e04.webp",W="/ff14-overlay-vue/assets/keigennRecord2-4142bde2.webp",F="/ff14-overlay-vue/assets/keySkillTimer-794d4a66.webp",U="/ff14-overlay-vue/assets/limitBreakTip-f4c9c6e9.webp",j="/ff14-overlay-vue/assets/raidbuffRecord-3a54552e.webp",E="/ff14-overlay-vue/assets/risingstones-ea75f732.webp",P="/ff14-overlay-vue/assets/teamWatch-b39910c5.webp",G="/ff14-overlay-vue/assets/timeline-6b6992a2.webp",Y="/ff14-overlay-vue/assets/zoneMacro-a2a2a9eb.webp",m=n=>(M("data-v-e17feb1e"),n=n(),L(),n),J={class:"common-layout","bt-white":""},X=m(()=>a("div",{style:{display:"flex","align-items":"center",gap:"16px"}},[a("a",{href:"https://github.com/Souma-Sumire",target:"_blank",style:{"text-decoration":"none"}}," Github "),a("a",{href:"https://space.bilibili.com/1443740",target:"_blank",style:{"text-decoration":"none"}}," Bilibili "),a("span",{style:{"font-weight":"bold",color:"#f00"}}," 其余账号均为山寨，请勿相信任何信息 ")],-1)),$=m(()=>a("h1",null,"主页导航",-1)),q=["href"],K={key:0},Q={key:1},Z=["innerHTML"],ee=T({__name:"startPages",setup(n){function h(c){return new URL(Object.assign({"../assets/screenshots/castingMonitor.webp":H,"../assets/screenshots/castingToChinese.webp":O,"../assets/screenshots/dnc.webp":V,"../assets/screenshots/keigennRecord2.webp":W,"../assets/screenshots/keySkillTimer.webp":F,"../assets/screenshots/limitBreakTip.webp":U,"../assets/screenshots/raidbuffRecord.webp":j,"../assets/screenshots/risingstones.webp":E,"../assets/screenshots/teamWatch.webp":P,"../assets/screenshots/timeline.webp":G,"../assets/screenshots/zoneMacro.webp":Y})[`../assets/screenshots/${c}`],self.location)}const u=[{title:"[悬浮窗] 减伤监控2",type:"悬浮窗/网页",path:"keigennRecord2?scale=1&showHeader=true&showIcon=true&showName=false&abbrId=true&anonymous=true&replaceWithYou=false&parseAA=true&parseDoT=false&minimize=false&actionCN=true&statusCN=true",comment:`可以添加到 ACT 悬浮窗中用于实时监控。也可以在浏览器中打开，导入日志分析过往记录。
URL地址栏参数说明：
scale: 缩放倍率，默认1
showHeader: 显示表头，默认true
showIcon: 显示目标图标，默认true
showName: 显示目标ID，默认false
abbrId: 目标ID缩写（只有在showName=true时才有效），默认true
anonymous: 目标ID改为职业名（只有在showName=true时才有效），默认true
replaceWithYou: 目标是玩家本人替换为YOU（只有在showName=true时才有效），默认false
parseAA: 解析自动攻击（仅影响新记录，历史结果不会同步改变），默认true
parseDoT: 解析DoT仅影响新记录，历史结果不会同步改变），默认false
minimize: 启动时迷你化，默认false
actionCN: action显示中文化，默认true
statusCN: status显示中文化，默认true
    `,src:"keigennRecord2.webp"},{title:"[网页] 全副本发宏/标点",type:"悬浮窗",path:"zoneMacro?OVERLAY_WS=ws://127.0.0.1:10501/ws",src:"zoneMacro.webp",comment:`需开启 ACT.OverlayPlugin WSServer
 喊话、标点需<a href="https://github.com/Natsukage/PostNamazu">鲶鱼精邮差</a>`},{title:"[悬浮窗] 治疗/减伤时间轴",type:"悬浮窗",path:"timeline",src:"timeline.webp"},{title:"[悬浮窗] OBS 自动录制（不再维护）",type:"悬浮窗",path:"obs",comment:"满足条件时自动开启 OBS 录屏"},{title:"[悬浮窗] OBS 自动录制 2（新）",type:"悬浮窗",path:"obs2",comment:"满足条件时自动开启 OBS 录屏"},{title:"[悬浮窗] 施法监控（技能展示）",type:"悬浮窗",path:"castingMonitor?duration=25&displayAA=false&api=cafemaker&showHeader=true&syncFocusWS=false",src:"castingMonitor.webp",comment:`URL地址栏参数说明：
duration: 图片从右划到左的动画持续时间（越短速度越快）
displayAA: 是否显示自动攻击
api: 技能图标图床来源，国内建议cafemaker，外网则选择xivapi
showHeader: 是否显示悬浮窗头部的队员选择器（用于切换监控目标）
syncFocusWS: 是否同步监控目标至通过 WebSocket 连接的其他页面（例如OBS） 
`},{title:"[悬浮窗] 读条汉化",type:"悬浮窗",path:"castingToChinese",comment:"",src:"castingToChinese.webp"},{title:"[悬浮窗] 团辅监控",type:"悬浮窗",path:"https://souma.diemoe.net/dist/keySkillTimer.html?international=false&dajinengTTS=true&jianshangTTS=true&tuanfuTTS=true",comment:`URL地址栏参数说明：
international: 是否采用国际服技改数据
dajinengTTS: 是否开启大技能TTS（坦克无敌不包含在内，因为 Cactbot 已有对应功能）
jianshangTTS: 是否开启减伤TTS
tuanfuTTS: 是否开启团辅TTS
`,src:"keySkillTimer.webp"},{title:"[悬浮窗] 盾值显示",type:"悬浮窗",path:"showBarrier?lineHeight=1&fontSize=26&type=1&showSettings=1",comment:`速刷用，显示小队成员的现有护盾值。

URL地址栏参数说明：
lineHeight: 行高
fontSize: 字体尺寸
type: 显示方式 1=仅显示百分比 2=仅显示数值 3=同时显示
showSettings: 显示排序设置与人名

用之前需要将排序设置与游戏内的'小队列表'-'职能内排序顺序'保持一致
设置好了将showSettings改为0隐藏

盾值百分比为四舍五入，数值也是根据百分比计算的值，故都存在误差，无法更精准。
`},{title:"[悬浮窗] LB 额外增长监控",type:"悬浮窗",path:"https://souma.diemoe.net/dist/limitBreakTip.html?LBMax=30000&automatic=220",comment:"速刷用，记录LB奖励数值。",src:"limitBreakTip.webp"},{title:"[悬浮窗] 我 TM 现在在几线？",type:"悬浮窗",path:"instancedAreaInfo",comment:"狩猎用，简单显示你当前在几线。"},{title:"[悬浮窗] DNC 触发倒计时显示",type:"悬浮窗",path:"jobs/dnc",comment:"在技能上显示buff消失倒计时，防止你丢失触发。仅包含6.X技能。7.0未适配，因为改的太蠢，我不玩了",src:"dnc.webp"},{title:"[悬浮窗] 一键 VPR 连击",type:"悬浮窗",path:"okVpr",comment:`<a href="#/okVpr">版本A</a>，进附体时不会重置热键栏，适合直接设置成单独键位（我没用过，不知道好不好用）
<a href="#/okVpr2">版本B</a>，进附体时会重置热键栏，适合设置成平时按的键位（我没用过，不知道好不好用）`},{title:"[悬浮窗] 技能监控（不再维护）",type:"悬浮窗",path:"obs",comment:'仅存档，不再维护。替代品：<a href="https://github.com/0ceal0t/JobBars">JobBars</a>'},{title:"国际服汉化补丁",type:"网页",path:"https://github.com/Souma-Sumire/FFXIVChnTextPatch-Souma/",comment:"前往Github项目了解详情"},{title:"个人修改版 Cactbot Raidboss",type:"网页",path:"https://github.com/Souma-Sumire/raidboss-user-js-public",comment:"前往Github项目了解详情"},{title:"狩猎 车头找怪工具",type:"网页",path:"hunt"},{title:"简易风脉地图",type:"网页",path:"aether"},{title:"FFLOGS 上传器 加速下载",type:"网页",path:"fflogsUploaderDownload"}];return(c,te)=>{const b=N,f=I,d=R,g=l("router-link"),r=l("vxe-column"),y=l("vxe-table"),w=A,v=D,S=k("lazy");return o(),i("div",J,[s(v,null,{default:t(()=>[s(f,null,{default:t(()=>[s(b,{label:"联系我：","label-width":"auto",style:{"margin-bottom":"0","padding-left":"1rem"}},{default:t(()=>[X]),_:1})]),_:1}),s(d,null,{default:t(()=>[$]),_:1}),s(w,null,{default:t(()=>[s(y,{data:u,stripe:"",border:"","row-config":{height:100}},{default:t(()=>[s(r,{width:"250",title:"名称"},{default:t(({row:e})=>[e.path.startsWith("http")?(o(),i("a",{key:1,href:e.path,target:"_blank"},p(e.title),9,q)):(o(),B(g,{key:0,to:e.path},{default:t(()=>[C(p(e.title),1)]),_:2},1032,["to"]))]),_:1}),s(r,{width:"420",title:"预览"},{default:t(({row:{src:e}})=>[e?x((o(),i("img",K,null,512)),[[S,h(e).pathname]]):_("",!0),e?_("",!0):(o(),i("i",Q,"无"))]),_:1}),s(r,{field:"comment",title:"描述"},{default:t(({row:e})=>[a("span",{innerHTML:e.comment},null,8,Z)]),_:1})]),_:1})]),_:1})]),_:1})])}}});const oe=z(ee,[["__scopeId","data-v-e17feb1e"]]);export{oe as default};
