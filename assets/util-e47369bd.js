const r={NONE:0,Gladiator:1,Pugilist:2,Marauder:3,Lancer:4,Archer:5,Conjurer:6,Thaumaturge:7,Carpenter:8,Blacksmith:9,Armorer:10,Goldsmith:11,Leatherworker:12,Weaver:13,Alchemist:14,Culinarian:15,Miner:16,Botanist:17,Fisher:18,Paladin:19,Monk:20,Warrior:21,Dragoon:22,Bard:23,WhiteMage:24,BlackMage:25,Arcanist:26,Summoner:27,Scholar:28,Rogue:29,Ninja:30,Machinist:31,DarkKnight:32,Astrologian:33,Samurai:34,RedMage:35,BlueMage:36,Gunbreaker:37,Dancer:38,Reaper:39,Sage:40},m={NONE:0,GLA:1,PGL:2,MRD:3,LNC:4,ARC:5,CNJ:6,THM:7,CRP:8,BSM:9,ARM:10,GSM:11,LTW:12,WVR:13,ALC:14,CUL:15,MIN:16,BTN:17,FSH:18,PLD:19,MNK:20,WAR:21,DRG:22,BRD:23,WHM:24,BLM:25,ACN:26,SMN:27,SCH:28,ROG:29,NIN:30,MCH:31,DRK:32,AST:33,SAM:34,RDM:35,BLU:36,GNB:37,DNC:38,RPR:39,SGE:40,VPR:41,PCT:42},C=["GLA","MRD","CNJ","ROG","PGL","LNC","ARC","ACN","THM"],M=[3,21,1,32,37,19,6,24,33,40,28,41,34,29,30,39,4,22,2,20,5,23,31,38,42,7,25,26,27,35,36,8,9,10,11,12,13,14,15,16,17,18,0],A={NONE:{en:"Adventurer",ja:"すっぴん士",cn:"冒险者",simple1:"冒",simple2:"冒险"},GLA:{en:"Gladiator",ja:"剣術士",cn:"剑术师",simple1:"剑",simple2:"剑术"},PGL:{en:"Pugilist",ja:"格闘士",cn:"格斗家",simple1:"斗",simple2:"格斗"},MRD:{en:"Marauder",ja:"斧術士",cn:"斧术师",simple1:"斧",simple2:"斧术"},LNC:{en:"Lancer",ja:"槍術士",cn:"枪术师",simple1:"枪",simple2:"枪术"},ARC:{en:"Archer",ja:"弓術士",cn:"弓箭手",simple1:"弓",simple2:"弓箭"},CNJ:{en:"Conjurer",ja:"幻術士",cn:"幻术师",simple1:"幻",simple2:"幻术"},THM:{en:"Thaumaturge",ja:"呪術士",cn:"咒术师",simple1:"咒",simple2:"咒术"},CRP:{en:"Carpenter",ja:"木工師",cn:"刻木匠",simple1:"刻",simple2:"刻木"},BSM:{en:"Blacksmith",ja:"鍛冶師",cn:"锻铁匠",simple1:"锻",simple2:"锻铁"},ARM:{en:"Armorer",ja:"甲冑師",cn:"铸甲匠",simple1:"铸",simple2:"铸甲"},GSM:{en:"Goldsmith",ja:"彫金師",cn:"雕金匠",simple1:"雕",simple2:"雕金"},LTW:{en:"Leatherworker",ja:"革細工師",cn:"制革匠",simple1:"革",simple2:"制革"},WVR:{en:"Weaver",ja:"裁縫師",cn:"裁衣匠",simple1:"裁",simple2:"裁衣"},ALC:{en:"Alchemist",ja:"錬金術師",cn:"炼金术士",simple1:"炼",simple2:"炼金"},CUL:{en:"Culinarian",ja:"調理師",cn:"烹调师",simple1:"烹",simple2:"烹调"},MIN:{en:"Miner",ja:"採掘師",cn:"采矿工",simple1:"采",simple2:"采矿"},BTN:{en:"Botanist",ja:"園芸師",cn:"园艺工",simple1:"园",simple2:"园艺"},FSH:{en:"Fisher",ja:"漁師",cn:"捕鱼人",simple1:"捕",simple2:"捕鱼"},PLD:{en:"Paladin",ja:"ナイト",cn:"骑士",simple1:"骑",simple2:"骑士"},MNK:{en:"Monk",ja:"モンク",cn:"武僧",simple1:"僧",simple2:"武僧"},WAR:{en:"Warrior",ja:"戦士",cn:"战士",simple1:"战",simple2:"战士"},DRG:{en:"Dragoon",ja:"竜騎士",cn:"龙骑士",simple1:"龙",simple2:"龙骑"},BRD:{en:"Bard",ja:"吟遊詩人",cn:"吟游诗人",simple1:"诗",simple2:"诗人"},WHM:{en:"White Mage",ja:"白魔道士",cn:"白魔法师",simple1:"白",simple2:"白魔"},BLM:{en:"Black Mage",ja:"黒魔道士",cn:"黑魔法师",simple1:"黑",simple2:"黑魔"},ACN:{en:"Arcanist",ja:"巴術士",cn:"秘术师",simple1:"秘",simple2:"秘术"},SMN:{en:"Summoner",ja:"召喚士",cn:"召唤师",simple1:"召",simple2:"召唤"},SCH:{en:"Scholar",ja:"学者",cn:"学者",simple1:"学",simple2:"学者"},ROG:{en:"Rogue",ja:"双剣士",cn:"双剑师",simple1:"双",simple2:"双剑"},NIN:{en:"Ninja",ja:"忍者",cn:"忍者",simple1:"忍",simple2:"忍者"},MCH:{en:"Machinist",ja:"機工士",cn:"机工士",simple1:"机",simple2:"机工"},DRK:{en:"Dark Knight",ja:"暗黒騎士",cn:"暗黑骑士",simple1:"暗",simple2:"暗骑"},AST:{en:"Astrologian",ja:"占星術師",cn:"占星术士",simple1:"占",simple2:"占星"},SAM:{en:"Samurai",ja:"侍",cn:"武士",simple1:"武",simple2:"武士"},RDM:{en:"Red Mage",ja:"赤魔道士",cn:"赤魔法师",simple1:"赤",simple2:"赤魔"},BLU:{en:"Blue Mage",ja:"青魔道士",cn:"青魔法师",simple1:"青",simple2:"青魔"},GNB:{en:"Gunbreaker",ja:"ガンブレイカー",cn:"绝枪战士",simple1:"绝",simple2:"绝枪"},DNC:{en:"Dancer",ja:"踊り子",cn:"舞者",simple1:"舞",simple2:"舞者"},RPR:{en:"Reaper",ja:"リーパー",cn:"钐镰客",simple1:"镰",simple2:"钐镰"},SGE:{en:"Sage",ja:"賢者",cn:"贤者",simple1:"贤",simple2:"贤者"},VPR:{en:"Viper",ja:"ヴァイパー",cn:"蝰蛇剑士",simple1:"蛇",simple2:"蝰蛇"},PCT:{en:"Pictomancer",ja:"ピクトマンサー",cn:"绘灵法师",simple1:"绘",simple2:"绘灵"}},u=Object.keys(m),J=Object.keys(r),L=["tank","healer","dps","crafter","gatherer","none"],s=["GLA","PLD","MRD","WAR","DRK","GNB"],i=["CNJ","WHM","SCH","AST","SGE"],a=["PGL","MNK","LNC","DRG","ROG","NIN","SAM","RPR","VPR"],o=["ARC","BRD","DNC","MCH"],c=["BLU","RDM","BLM","SMN","ACN","THM","PCT"],R=[...a,...o,...c],j=[...s,...i,...a,...o,...c],g=[...s,...i,...a,...o,...c,"NONE"],t=["CRP","BSM","ARM","GSM","LTW","WVR","ALC","CUL"],p=["MIN","BTN","FSH"],B=["BLU",...s,...a],D=["BLU",...s,...o],S=["BLM","BLU",...i],G=[...a],T=[...c],h=["BLU","BRD",...i],P=(()=>{const e=(l,b,N)=>{for(const d of b)l.set(d,N)},n=new Map([["NONE","none"]]);return e(n,s,"tank"),e(n,i,"healer"),e(n,R,"dps"),e(n,t,"crafter"),e(n,p,"gatherer"),n})(),k={jobEnumToJob:e=>u.find(l=>m[l]===e)??"NONE",jobEnumToIcon:e=>J.find(l=>r[l]===e)??"none",jobToJobEnum:e=>m[e],jobToRole:e=>P.get(e)??"none",getAllRoles:()=>L,isTankJob:e=>s.includes(e),isHealerJob:e=>i.includes(e),isMeleeDpsJob:e=>a.includes(e),isRangedDpsJob:e=>o.includes(e),isCasterDpsJob:e=>c.includes(e),isDpsJob:e=>R.includes(e),isCraftingJob:e=>t.includes(e),isGatheringJob:e=>p.includes(e),isCombatJob:e=>!t.includes(e)&&!p.includes(e),canStun:e=>B.includes(e),canSilence:e=>D.includes(e),canSleep:e=>S.includes(e),canCleanse:e=>h.includes(e),canFeint:e=>G.includes(e),canAddle:e=>T.includes(e),getAllJobs:()=>u,getBattleJobs:()=>j,getBattleJobs2:()=>g,getBattleJobs3:()=>j.filter(e=>!C.includes(e)),nameToFullName:e=>A[e],iconToJobEnum:e=>r[e]??0,nameToJobEnum:e=>m[e]??0,enumSortMethod:(e,n)=>M.indexOf(e)-M.indexOf(n)},W=k;export{W as U,M as j};
