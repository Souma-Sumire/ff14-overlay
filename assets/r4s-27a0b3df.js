import{d as L,y as h,A as N,B as D,o as k,b as B,h as E,C as I,u as n,a as _,w as F,g as d,D as v,t as U,F as z,G as C,H as M,I as A,j as H,p as O,l as $}from"./vendor-900219e9.js";import{a as j,c as G}from"./overlay_plugin_api-409cb9ea.js";import{N as R}from"./netregexes-2830d8aa.js";import{_ as Z}from"./index-6bc22f57.js";const q=c=>(O("data-v-53a96e9c"),c=c(),$(),c),J={"w-30":""},K=q(()=>d("span",null," 若无法输入，先切换到ACT，再点击此悬浮窗 ",-1)),P=L({__name:"r4s",setup(c){var S,T;const x={gainsEffects:R.gainsEffect({effectId:["F9F","343"],targetId:"1[a-zA-Z0-9]{7}"})},r=h(Date.now()),t=h([]),i=N(()=>{if(t.value.length===0||t.value[0].end===0)return"0";const e=Math.abs(r.value-t.value[0].end).toString().padStart(5,"0"),o=e.slice(0,2),m=e.slice(2,4);return`${o}.${m}`}),w=h(((T=(S=document.getElementById("unlocked"))==null?void 0:S.style)==null?void 0:T.display)==="flex");document.addEventListener("onOverlayStateUpdate",a=>{var e;w.value=((e=a==null?void 0:a.detail)==null?void 0:e.isLocked)===!1});const s=D("special-r4s-settings",{ms:.8,text:"穿",test:!1});j("LogLine",a=>{var e;for(const o in x){const u=x[o].exec(a.rawLine);if(u)switch(o){case"gainsEffects":{if(((e=u.groups)==null?void 0:e.effectId)==="343"&&s.value.test===!1)return;const f=+u.groups.duration,l=Date.now(),y=l+ +f*1e3;if(t.value.find(p=>Math.abs(p.start-l)<=1e3&&Math.abs(p.end-y)<=1e3))return;t.value.push({start:l,end:y,duration:f,alreadyTTS:!1}),t.value.sort((p,b)=>p.end-b.end);break}}}});let g=0;function V(){r.value=Date.now();const a=r.value-g;a>100&&g!==0&&console.warn(a),g=r.value,t.value=t.value.filter(e=>e.end>0&&!(e.end<r.value&&e.alreadyTTS===!0)),t.value.length>0&&i.value!=="0"&&Math.abs(Number.parseFloat(i.value))<=s.value.ms&&t.value[0].alreadyTTS===!1&&(t.value[0].alreadyTTS=!0,G({call:"cactbotSay",text:s.value.text}))}return setInterval(()=>{V()},1),(a,e)=>{const o=C,m=M,u=A,f=H;return k(),B(z,null,[E(_(f,{class:"settings"},{default:F(()=>[d("form",null,[v(" 剩余秒 "),_(o,{modelValue:n(s).ms,"onUpdate:modelValue":e[0]||(e[0]=l=>n(s).ms=l),min:0,max:1e4,size:"small",step:.001},null,8,["modelValue"])]),d("form",J,[v(" TTS文本 "),_(m,{modelValue:n(s).text,"onUpdate:modelValue":e[1]||(e[1]=l=>n(s).text=l),size:"small"},null,8,["modelValue"])]),v(),K,d("form",null,[_(u,{modelValue:n(s).test,"onUpdate:modelValue":e[2]||(e[2]=l=>n(s).test=l),size:"small"},null,8,["modelValue"]),v(" 使用吉星相位测试 ")])]),_:1},512),[[I,n(w)]]),E(d("h1",{"w-50":"","text-right":"","color-white":""},U(n(i)),513),[[I,n(i)!=="0"]])],64)}}});const te=Z(P,[["__scopeId","data-v-53a96e9c"]]);export{te as default};
