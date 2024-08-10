import{d as Y,G as q,l as U,H as S,n as j,m as s,b as G,I as H,o as V,e as b,q as a,p as J,v as K,u as e,s as u,a as r,w as v,F as E,J as T,c as Q,t as I,K as R,x as Z,y as ll,A as el,L as tl,M as ol,C as nl,D as al,N as sl,O as ul}from"./vendor-0825ff50.js";import{a as y,r as g}from"./overlay_plugin_api-409cb9ea.js";import{_ as rl}from"./_plugin-vue_export-helper-c27b6911.js";const A=f=>(nl("data-v-65bbdb84"),f=f(),al(),f),dl={class:"dnc-overlay"},ml={class:"settings"},il=A(()=>a("br",null,null,-1)),pl=A(()=>a("br",null,null,-1)),fl="style",cl=Y({__name:"dnc",setup(f){var x,_;q(n=>({cc5350fc:e(F),"91e182d4":e(h),"64761b14":e(D),"4533038f":e(L),"8e1b8ba0":e(M),"4db82864":e($),"663f4a15":e(P)}));const p=U(0),d=S({playerId:"",lastCombo:0,status:new Map([["A85",0],["A86",0],["BC9",0],["BCA",0]])}),l=j("jobs-dnc",{combo:{left:10,top:-30},tr3:{left:46,top:-22},tr4:{left:82,top:-22},fl:{left:0,top:-15},color:"rgb(255,255,255)",shadow:"rgb(0,0,0)",size:14,warncolor:"rgb(255,255,255)",warnshadow:"rgb(255,0,0)",zeroStr:"",fontFamily:"微软雅黑",fontWeight:!1,warn:5,userCss:""},localStorage,{mergeDefaults:!0}),c=U(((_=(x=document.getElementById("unlocked"))==null?void 0:x.style)==null?void 0:_.display)==="flex"),B=S([{id:"combo",cd:s(()=>30-Math.floor((p.value-d.lastCombo)/1e3)),style:{top:s(()=>`${l.value.combo.top}px`),left:s(()=>`${l.value.combo.left}px`)}},{id:"tr3",cd:s(()=>30-Math.floor((p.value-(d.status.get("A85")??0))/1e3)),style:{top:s(()=>`${l.value.tr3.top}px`),left:s(()=>`${l.value.tr3.left}px`)}},{id:"tr4",cd:s(()=>30-Math.floor((p.value-(d.status.get("A86")??0))/1e3)),style:{top:s(()=>`${l.value.tr4.top}px`),left:s(()=>`${l.value.tr4.left}px`)}},{id:"fl3",cd:s(()=>30-Math.floor((p.value-(d.status.get("BC9")??0))/1e3)),style:{top:s(()=>`${l.value.tr3.top+l.value.fl.top}px`),left:s(()=>`${l.value.tr3.left+l.value.fl.left}px`)}},{id:"fl4",cd:s(()=>30-Math.floor((p.value-(d.status.get("BCA")??0))/1e3)),style:{top:s(()=>`${l.value.tr4.top+l.value.fl.top}px`),left:s(()=>`${l.value.tr4.left+l.value.fl.left}px`)}}]),D=s(()=>l.value.color),L=s(()=>l.value.shadow),$=s(()=>l.value.warncolor),P=s(()=>l.value.warnshadow),F=s(()=>l.value.fontFamily),M=s(()=>`${l.value.size}px`),h=s(()=>l.value.fontWeight?"bold":"none"),k=s(()=>l.value.userCss),w=n=>{n.line[5]===d.playerId&&(n.line[0]==="26"||n.line[0]==="30")&&d.status.has(n.line[2])?d.status.set(n.line[2],n.line[0]==="26"?Date.now():0):n.line[2]===d.playerId&&(n.line[0]==="21"||n.line[0]==="22")&&(n.line[4]==="3E79"&&n.line[0]==="22"||n.line[4]==="3E75"&&n.line[0]==="21"?d.lastCombo=Date.now():(n.line[4]==="3E76"||n.line[4]==="3E7A"||n.line[0]==="21"&&n.line[4]==="3E79")&&(d.lastCombo=0))};function z(){d.status.set("A85",0),d.status.set("A86",0),d.status.set("BC9",0),d.status.set("BCA",0),d.lastCombo=0}const C=n=>{d.playerId=Number(n.charID).toString(16).toUpperCase()};function N(){localStorage.removeItem("jobs-dnc"),location.reload()}return G(()=>{y("onPlayerDied",z),y("LogLine",w),y("ChangePrimaryPlayer",C),document.addEventListener("onOverlayStateUpdate",n=>{var o;c.value=((o=n==null?void 0:n.detail)==null?void 0:o.isLocked)===!1})}),H(()=>{g("onPlayerDied",z),g("LogLine",w),g("ChangePrimaryPlayer",C)}),requestAnimationFrame(function n(){p.value=Date.now(),requestAnimationFrame(n)}),(n,o)=>{const m=Z,i=ll,O=el,W=tl,X=ol;return V(),b(E,null,[a("div",dl,[J(a("header",ml,[a("form",null,[u(" 连击X: "),r(m,{modelValue:e(l).combo.left,"onUpdate:modelValue":o[0]||(o[0]=t=>e(l).combo.left=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 连击Y: "),r(m,{modelValue:e(l).combo.top,"onUpdate:modelValue":o[1]||(o[1]=t=>e(l).combo.top=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 触发3X: "),r(m,{modelValue:e(l).tr3.left,"onUpdate:modelValue":o[2]||(o[2]=t=>e(l).tr3.left=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 触发3Y: "),r(m,{modelValue:e(l).tr3.top,"onUpdate:modelValue":o[3]||(o[3]=t=>e(l).tr3.top=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 触发4X: "),r(m,{modelValue:e(l).tr4.left,"onUpdate:modelValue":o[4]||(o[4]=t=>e(l).tr4.left=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 触发4Y: "),r(m,{modelValue:e(l).tr4.top,"onUpdate:modelValue":o[5]||(o[5]=t=>e(l).tr4.top=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 百花X: "),r(m,{modelValue:e(l).fl.left,"onUpdate:modelValue":o[6]||(o[6]=t=>e(l).fl.left=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 百花Y: "),r(m,{modelValue:e(l).fl.top,"onUpdate:modelValue":o[7]||(o[7]=t=>e(l).fl.top=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 剩余警告: "),r(m,{modelValue:e(l).warn,"onUpdate:modelValue":o[8]||(o[8]=t=>e(l).warn=t),class:"input input-number",min:-1,max:30,size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 常规颜色: "),r(i,{modelValue:e(l).color,"onUpdate:modelValue":o[9]||(o[9]=t=>e(l).color=t),class:"input input-string",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 常规阴影: "),r(i,{modelValue:e(l).shadow,"onUpdate:modelValue":o[10]||(o[10]=t=>e(l).shadow=t),class:"input input-string",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 警告颜色: "),r(i,{modelValue:e(l).warncolor,"onUpdate:modelValue":o[11]||(o[11]=t=>e(l).warncolor=t),class:"input input-string",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 警告阴影: "),r(i,{modelValue:e(l).warnshadow,"onUpdate:modelValue":o[12]||(o[12]=t=>e(l).warnshadow=t),class:"input input-string",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 零值文本: "),r(i,{modelValue:e(l).zeroStr,"onUpdate:modelValue":o[13]||(o[13]=t=>e(l).zeroStr=t),class:"input input-string",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 字号: "),r(m,{modelValue:e(l).size,"onUpdate:modelValue":o[14]||(o[14]=t=>e(l).size=t),class:"input input-number",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 字体: "),r(i,{modelValue:e(l).fontFamily,"onUpdate:modelValue":o[15]||(o[15]=t=>e(l).fontFamily=t),class:"input input-string",size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 粗体："),r(O,{modelValue:e(l).fontWeight,"onUpdate:modelValue":o[16]||(o[16]=t=>e(l).fontWeight=t),size:"small"},null,8,["modelValue"])]),a("form",null,[u(" 自定义CSS： "),il,r(i,{modelValue:e(l).userCss,"onUpdate:modelValue":o[17]||(o[17]=t=>e(l).userCss=t),autosize:"",type:"textarea",placeholder:""},null,8,["modelValue"])]),pl,a("form",null,[r(X,{teleported:!1,title:"确定要重置？",onConfirm:N},{reference:v(()=>[r(W,null,{default:v(()=>[u("重置全部用户设置")]),_:1})]),_:1})])],512),[[K,e(c)]]),a("main",null,[(V(!0),b(E,null,T(e(B),t=>(V(),b("div",{key:t.id},[a("span",{class:sl(t.cd<=e(l).warn&&!e(c)?"warning":""),style:ul(t.style)},I(t.cd>=0?t.cd:e(c)?"30":e(l).zeroStr),7)]))),128))])]),(V(),Q(R(fl),null,{default:v(()=>[u(I(e(k)),1)]),_:1}))],64)}}});const yl=rl(cl,[["__scopeId","data-v-65bbdb84"]]);export{yl as default};
