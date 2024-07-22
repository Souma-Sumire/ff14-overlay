import{d as te,y as ne,B as le,C as se,D as u,A as z,o as b,c as ae,w as r,h as U,H as T,u as e,a as l,g as s,I as a,b as ie,K as me,J as ue,t as C,S as V,M as re,O as de,N as fe,a4 as pe,P as ce,Q as ge,j as Ce,am as we,af as Ve,aL as he,k as _e,e as ve,ae as Ae}from"./vendor-5d3cd767.js";import{a as h}from"./overlay_plugin_api-409cb9ea.js";import{g as xe}from"./actionChinese-9c69a298.js";import{_ as Ie}from"./index-a8eea6f1.js";const ye={style:{width:"10rem"}},Se={class:"noCSS"},De={class:"noCSS"},ze={class:"actionID"},be=te({__name:"castingToChinese",setup(Ue){var v,A;ne(i=>({"6da43396":e($),"73fbe109":e(L),"73fbe10a":e(B),d2a7bcae:e(k),"7b3fd7db":e(F),ecfaddba:e(K),ecfaddb8:e(M),"6fa0314d":e(P),"3ad4d7a5":e(O),"3ad4d7a6":e(H),af2532f2:e(N)}));const X=new URLSearchParams(window.location.href.split("?")[1]);class Y{constructor(t){this.name=xe(Number.parseInt(t[4],16))??`${t[5]}(${t[4]})`,this.startTime=Date.now(),this.castTime=Number(t[8])*1e3,this.overTime=this.startTime+this.castTime,this.actionId=Number.parseInt(t[4],16)}}const d=le({targetCast:void 0}),E=[{value:"Target",label:"当前目标"},{value:"Focus",label:"焦点目标"}],o=se("castingToChinese",{width:283,showCountdown:!0,showProgress:!0,showActionChinese:!0,showActionID:!1,offsetCountdownX:2,offsetCountdownY:2,offsetActionChineseX:0,offsetActionChineseY:-2,offsetActionIDX:0,offsetActionIDY:35,ping:80,keep:100,fontSizeCountDown:17,fontSizeActionName:20,fontFamily:"SmartisanHei",targetKey:"Target"},localStorage,{mergeDefaults:!0}),N=u(()=>`${o.value.width}px`),$=u(()=>o.value.showCountdown?1:0),k=u(()=>o.value.showProgress?1:0),F=u(()=>o.value.showActionChinese?1:0),P=u(()=>o.value.showActionID?1:0),L=u(()=>`${o.value.offsetCountdownX}px`),B=u(()=>`${o.value.offsetCountdownY}px`),K=u(()=>`${o.value.offsetActionChineseX}px`),M=u(()=>`${o.value.offsetActionChineseY}px`),O=u(()=>`${o.value.offsetActionIDX}px`),H=u(()=>`${o.value.offsetActionIDY}px`),p=new Map,c=z(0),w=o.value.ping,_=z(/^(?:1|true|on)$/i.test(X.get("showSettings")||"")||((A=(v=document.getElementById("unlocked"))==null?void 0:v.style)==null?void 0:A.display)==="flex");h("EnmityTargetData",i=>{var t;d.targetCast=p.get((t=i[o.value.targetKey])==null?void 0:t.ID)}),h("LogLine",i=>{i.line[0]==="20"?p.set(Number.parseInt(i.line[2],16),new Y(i.line)):i.line[0]==="23"&&p.delete(Number.parseInt(i.line[2],16))}),h("ChangeZone",()=>p.clear()),requestAnimationFrame(function i(){c.value=Date.now(),requestAnimationFrame(i)}),document.addEventListener("onOverlayStateUpdate",i=>{var t;_.value=((t=i==null?void 0:i.detail)==null?void 0:t.isLocked)===!1});function j(){localStorage.removeItem("castingToChinese"),location.reload()}return(i,t)=>{const m=re,g=de,q=fe,R=Ae,J=pe,Q=ce,W=ge,Z=Ce,x=we,I=Ve,G=he,ee=_e,oe=ve;return b(),ae(oe,null,{default:r(()=>[U(l(Z,{class:"settings"},{default:r(()=>[s("form",null,[a(" 宽度: "),l(m,{modelValue:e(o).width,"onUpdate:modelValue":t[0]||(t[0]=n=>e(o).width=n),min:20,max:1e3,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",null,[a("显示倒计时: "),l(g,{modelValue:e(o).showCountdown,"onUpdate:modelValue":t[1]||(t[1]=n=>e(o).showCountdown=n)},null,8,["modelValue"])]),s("form",null,[a("显示进度条: "),l(g,{modelValue:e(o).showProgress,"onUpdate:modelValue":t[2]||(t[2]=n=>e(o).showProgress=n)},null,8,["modelValue"])]),s("form",null,[a("显示中文: "),l(g,{modelValue:e(o).showActionChinese,"onUpdate:modelValue":t[3]||(t[3]=n=>e(o).showActionChinese=n)},null,8,["modelValue"])]),s("form",null,[a("显示ID: "),l(g,{modelValue:e(o).showActionID,"onUpdate:modelValue":t[4]||(t[4]=n=>e(o).showActionID=n)},null,8,["modelValue"])]),s("form",null,[a(" 延迟(ms): "),l(m,{modelValue:e(o).ping,"onUpdate:modelValue":t[5]||(t[5]=n=>e(o).ping=n),min:0,max:1e4,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",null,[a(" 保留(ms): "),l(m,{modelValue:e(o).keep,"onUpdate:modelValue":t[6]||(t[6]=n=>e(o).keep=n),min:0,max:1e5,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",null,[a(" 倒计时偏移X: "),l(m,{modelValue:e(o).offsetCountdownX,"onUpdate:modelValue":t[7]||(t[7]=n=>e(o).offsetCountdownX=n),min:-1e3,max:1e3,size:"small"},null,8,["modelValue"])]),s("form",null,[a(" 倒计时偏移Y: "),l(m,{modelValue:e(o).offsetCountdownY,"onUpdate:modelValue":t[8]||(t[8]=n=>e(o).offsetCountdownY=n),min:-1e3,max:1e3,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",null,[a(" 中文偏移X: "),l(m,{modelValue:e(o).offsetActionChineseX,"onUpdate:modelValue":t[9]||(t[9]=n=>e(o).offsetActionChineseX=n),min:-1e3,max:1e3,size:"small"},null,8,["modelValue"])]),s("form",null,[a(" 中文偏移Y: "),l(m,{modelValue:e(o).offsetActionChineseY,"onUpdate:modelValue":t[10]||(t[10]=n=>e(o).offsetActionChineseY=n),min:-1e3,max:1e3,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",null,[a(" ID偏移X: "),l(m,{modelValue:e(o).offsetActionIDX,"onUpdate:modelValue":t[11]||(t[11]=n=>e(o).offsetActionIDX=n),min:-1e3,max:1e3,size:"small"},null,8,["modelValue"])]),s("form",null,[a(" ID偏移Y: "),l(m,{modelValue:e(o).offsetActionIDY,"onUpdate:modelValue":t[12]||(t[12]=n=>e(o).offsetActionIDY=n),min:-1e3,max:1e3,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",null,[a(" 倒计时字号(px): "),l(m,{modelValue:e(o).fontSizeCountDown,"onUpdate:modelValue":t[13]||(t[13]=n=>e(o).fontSizeCountDown=n),min:1,max:100,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",null,[a(" 中文字号(px): "),l(m,{modelValue:e(o).fontSizeActionName,"onUpdate:modelValue":t[14]||(t[14]=n=>e(o).fontSizeActionName=n),min:1,max:100,size:"small","controls-position":"right"},null,8,["modelValue"])]),s("form",ye,[a(" 字体: "),l(q,{modelValue:e(o).fontFamily,"onUpdate:modelValue":t[15]||(t[15]=n=>e(o).fontFamily=n),size:"small",clearable:"",onClear:t[16]||(t[16]=n=>e(o).fontFamily="SmartisanHei")},null,8,["modelValue"])]),s("form",Se,[l(J,{modelValue:e(o).targetKey,"onUpdate:modelValue":t[17]||(t[17]=n=>e(o).targetKey=n),placeholder:"Select",size:"small",teleported:!1},{default:r(()=>[(b(),ie(ue,null,me(E,n=>l(R,{key:n.value,label:n.label,value:n.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),s("form",De,[l(W,{teleported:!1,title:"确定要重置？",onConfirm:j},{reference:r(()=>[l(Q,null,{default:r(()=>[a("重置全部用户设置")]),_:1})]),_:1})])]),_:1},512),[[T,e(_)]]),U(l(ee,{style:V({fontFamily:e(o).fontFamily})},{default:r(()=>{var n,y;return[l(I,null,{default:r(()=>[l(x,{span:24,flex:"","justify-end":""},{default:r(()=>{var f;return[s("div",{style:V({fontSize:`${e(o).fontSizeCountDown}px`}),class:"countdown"},C(Math.max(((((f=e(d).targetCast)==null?void 0:f.overTime)??1)-e(c)-e(w))/1e3,0).toFixed(2)),5)]}),_:1})]),_:1}),l(G,{percentage:Math.min((e(c)-(((n=e(d).targetCast)==null?void 0:n.startTime)??1)+e(w))/(((y=e(d).targetCast)==null?void 0:y.castTime)??1)*100,100),"stroke-width":8,indeterminate:!1,"show-text":!1,color:"#fbfff9",class:"progress"},null,8,["percentage"]),l(I,null,{default:r(()=>[l(x,{span:24,class:"action"},{default:r(()=>{var f,S,D;return[s("div",ze,C((f=e(d).targetCast)==null?void 0:f.actionId)+"("+C((S=e(d).targetCast)==null?void 0:S.actionId.toString(16).toUpperCase())+") ",1),s("div",{style:V({fontSize:`${e(o).fontSizeActionName}px`}),class:"actionChinese"},C((D=e(d).targetCast)==null?void 0:D.name),5)]}),_:1})]),_:1})]}),_:1},8,["style"]),[[T,e(d).targetCast&&e(c)-e(d).targetCast.overTime+e(w)<e(o).keep]])]),_:1})}}});const Ne=Ie(be,[["__scopeId","data-v-d31f086c"]]);export{Ne as default};