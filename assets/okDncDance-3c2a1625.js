import{d as z,C as j,F as k,o as M,b as T,a as n,w as c,u as l,g as s,ae as $,a4 as N,ak as U,N as L,az as Z,O as A,al as B}from"./vendor-baf370be.js";import{N as g}from"./netregexes-2830d8aa.js";import{a as v,c as F}from"./overlay_plugin_api-409cb9ea.js";import{c as C}from"./postNamazu-be00c1d8.js";const I={"bg-white":"","p-l-3":""},O=s("svg",{t:"1717309838763",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1460",width:"16",height:"16",flex:""},[s("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z","p-id":"1461"}),s("path",{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5 0.1-39.3-17.1-76-48.3-103.3z","p-id":"1462"}),s("path",{d:"M512 732m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z","p-id":"1463"})],-1),P=s("svg",{t:"1717309838763",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1460",width:"16",height:"16",flex:""},[s("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z","p-id":"1461"}),s("path",{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5 0.1-39.3-17.1-76-48.3-103.3z","p-id":"1462"}),s("path",{d:"M512 732m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z","p-id":"1463"})],-1),G=s("svg",{t:"1717309838763",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1460",width:"16",height:"16",flex:""},[s("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z","p-id":"1461"}),s("path",{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5 0.1-39.3-17.1-76-48.3-103.3z","p-id":"1462"}),s("path",{d:"M512 732m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z","p-id":"1463"})],-1),K=z({__name:"okDncDance",setup(q){let D=-1,S="",_=0;const y={cn:["瀑泻","喷泉","逆瀑泻","坠喷泉"],en:["Cascade","Fountain","Reverse Cascade","Fountainfall"],ja:["カスケード","ファウンテン","リバースカスケー","ファウンテンフォール"]},b={cn:{standard:"标准舞步",technical:"技巧舞步"},en:{standard:"Standard Step",technical:"Technical Step"},ja:{standard:"スタンダードステップ",technical:"テクニカルステップ"}},V={inACTCombat:!1,inGameCombat:!1},t=j("okDncDanceSettings",{lang:"cn",hotbar:{standard:[2,1],technical:[2,2]},cdDancingStart:!0,cdDancingEnd:!0,autoDance:!1}),x=a=>F({call:"PostNamazu",c:"DoTextCommand",p:a});function w(a,e){S==="DNC"&&(a&&x(`/hotbar set ${b[t.value.lang].standard} ${t.value.hotbar.standard.join(" ")}`),e&&x(`/hotbar set ${b[t.value.lang].technical} ${t.value.hotbar.technical.join(" ")}`),D=-1)}const p={countdown:g.countdown(),countdownCancel:g.countdownCancel(),losesEffect:g.losesEffect(),changeZone:g.changeZone(),wipe:g.network6d({command:["40000010","4000000F"]})},h={countdown:a=>{t.value.cdDancingStart&&C([{c:"stop",p:"okDncDance-start"},{c:"qid",p:"okDncDance-start"},{c:"DoTextCommand",p:`/ac ${b[t.value.lang].standard}`,d:Math.max(0,(a-15)*1e3)}]),t.value.cdDancingEnd&&C([{c:"stop",p:"okDncDance-end"},{c:"qid",p:"okDncDance-end"},{c:"DoTextCommand",p:`/ac ${b[t.value.lang].standard}`,d:a*1e3-300}])},countdownCancel:()=>{C([{c:"stop",p:"okDncDance-(?:start|end|auto)"}])},losesEffect:()=>{w(!0,!0)},changeZone:()=>{w(!0,!0)},playerDied:()=>{w(!0,!0)},wipe:()=>{w(!0,!0)}};return k(()=>{v("onPlayerChangedEvent",a=>{var r,i,m;if(S=a.detail.job,_!==a.detail.id&&(_=a.detail.id,p.losesEffect=g.losesEffect({targetId:_.toString(16).toUpperCase()})),a.detail.job!=="DNC")return;const e=(r=a.detail.jobDetail)==null?void 0:r.currentStep,o=(i=a.detail.jobDetail)==null?void 0:i.steps;if(!(e===void 0||o===void 0||e===D)){if(o.length&&e<o.length){const u=y[t.value.lang][["Emboite","Entrechat","Jete","Pirouette"].indexOf(o[e])];x(`/hotbar set ${u} ${t.value.hotbar[o.length===2?"standard":"technical"].join(" ")}`);const f=(m=a.detail.jobDetail)==null?void 0:m.currentStep;if(V.inGameCombat===!1&&f!==void 0){const E=[{c:"DoTextCommand",p:`/ac ${u}`,d:f===0?1460:960},...Array.from({length:4}).map(()=>({c:"DoTextCommand",p:`/ac ${u}`,d:20}))];C(E)}}else e===o.length&&w(o.length===2,o.length===4);o.length&&(D=e)}}),v("onPlayerDied",()=>{h.playerDied()}),v("LogLine",a=>{var o,r;const e=(r=(o=p.countdown.exec(a.rawLine))==null?void 0:o.groups)==null?void 0:r.countdownTime;e!==void 0?h.countdown(Number.parseInt(e)):p.countdownCancel.test(a.rawLine)?h.countdownCancel():p.losesEffect.test(a.rawLine)?h.losesEffect():p.changeZone.test(a.rawLine)?h.changeZone():p.wipe.test(a.rawLine)&&h.wipe()}),v("onInCombatChangedEvent",a=>{V.inACTCombat=a.detail.inACTCombat,V.inGameCombat=a.detail.inGameCombat})}),(a,e)=>{const o=$,r=N,i=U,m=L,u=Z,f=A,E=B;return M(),T("div",I,[n(E,{"label-width":"9rem",style:{"max-width":"300px"}},{default:c(()=>[n(i,{label:"Action语言",style:{width:"14em"}},{default:c(()=>[n(r,{modelValue:l(t).lang,"onUpdate:modelValue":e[0]||(e[0]=d=>l(t).lang=d),size:"small"},{default:c(()=>[n(o,{value:"cn",label:"中文"}),n(o,{value:"en",label:"English"}),n(o,{value:"ja",label:"日本語"})]),_:1},8,["modelValue"])]),_:1}),n(i,{label:"标准舞步热键栏"},{default:c(()=>[n(m,{modelValue:l(t).hotbar.standard[0],"onUpdate:modelValue":e[1]||(e[1]=d=>l(t).hotbar.standard[0]=d),type:"number",style:{width:"2.5rem"},min:"1",max:"10",size:"small"},null,8,["modelValue"]),n(m,{modelValue:l(t).hotbar.standard[1],"onUpdate:modelValue":e[2]||(e[2]=d=>l(t).hotbar.standard[1]=d),type:"number",style:{width:"2.5rem"},min:"1",max:"12",size:"small"},null,8,["modelValue"]),n(u,{trigger:"hover",content:"标准舞步的热键栏位置，例如2-1，代表热键栏2的编号1位置。"},{reference:c(()=>[O]),_:1})]),_:1}),n(i,{label:"技巧舞步热键栏"},{default:c(()=>[n(m,{modelValue:l(t).hotbar.technical[0],"onUpdate:modelValue":e[3]||(e[3]=d=>l(t).hotbar.technical[0]=d),type:"number",style:{width:"2.5rem"},min:"1",max:"10",size:"small"},null,8,["modelValue"]),n(m,{modelValue:l(t).hotbar.technical[1],"onUpdate:modelValue":e[4]||(e[4]=d=>l(t).hotbar.technical[1]=d),type:"number",style:{width:"2.5rem"},min:"1",max:"12",size:"small"},null,8,["modelValue"]),n(u,{trigger:"hover",content:"技巧舞步的热键栏位置，例如2-2，代表热键栏2的编号2位置。"},{reference:c(()=>[P]),_:1})]),_:1}),n(i,{label:"倒计时15秒小舞"},{default:c(()=>[n(f,{modelValue:l(t).cdDancingStart,"onUpdate:modelValue":e[5]||(e[5]=d=>l(t).cdDancingStart=d),size:"small"},null,8,["modelValue"])]),_:1}),n(i,{label:"倒计时0秒小舞"},{default:c(()=>[n(f,{modelValue:l(t).cdDancingEnd,"onUpdate:modelValue":e[6]||(e[6]=d=>l(t).cdDancingEnd=d),size:"small"},null,8,["modelValue"])]),_:1}),n(i,{label:"自动舞步(仅脱战时)"},{default:c(()=>[n(f,{modelValue:l(t).autoDance,"onUpdate:modelValue":e[7]||(e[7]=d=>l(t).autoDance=d),size:"small"},null,8,["modelValue"]),n(u,{trigger:"hover",content:"仅在非战斗状态下生效，只跳颜色，不自动终结"},{reference:c(()=>[G]),_:1})]),_:1})]),_:1})])}}});export{K as default};