import{c as f}from"./overlay_plugin_api-409cb9ea.js";import{A as h}from"./actWS-e2500b62.js";import{p as c,b as m,U as i,X as w}from"./vendor-8aa0aaaa.js";function P(o){return new Promise((t,a)=>{const e=document.createElement("textarea");e.value=o,document.body.appendChild(e),e.select();try{document.execCommand("copy"),t()}catch(n){a(n)}finally{document.body.removeChild(e)}})}function C(){const o=window.navigator.userAgent,t=o.includes("MSIE "),a=o.includes("Trident/");return t||a}function p(){const o=window.location.href,[t,a=""]=o.split("#"),[e,n=""]=a.split("?"),l=new URLSearchParams(n);let s="";l.forEach((d,u)=>{u!=="OVERLAY_WS"&&(s+=`${u}=${encodeURIComponent(d)}&`)}),s+="OVERLAY_WS=ws://127.0.0.1:10501/ws";let r=t;e&&(r+=`#${e}`,s&&(r+=`?${s}`)),window.location.href=r,location.reload()}function S(o={allowClose:!1,addWsParam:!0}){const t=c(void 0),a=c(!1),e=c(void 0);function n(){Promise.race([f({call:"cactbotRequestState"}),new Promise((s,r)=>{setTimeout(()=>{r(new Error("Timeout"))},1e3)})]).then(()=>{t.value=!0}).catch(()=>{t.value=!1})}function l(){a.value||i.alert(`请按照下图设置<img src='${h}' style='width:100%'>`,o.allowClose?"未连接到 ACT":"未连接到 ACT，无法使用",{dangerouslyUseHTMLString:!0,closeOnClickModal:!1,showClose:!1,closeOnPressEscape:!1,closeOnHashChange:!1,showCancelButton:o.allowClose,showConfirmButton:!1,cancelButtonText:"我偏要看看",buttonSize:"small"}).catch(()=>{a.value=!0})}return m(()=>{if(C()){i.alert("不支持 IE 浏览器，请使用 Chrome、Firefox、Edge 等现代浏览器访问。","提示",{type:"error",showConfirmButton:!1,showClose:!1});return}w(t,s=>{s?i.close():l()}),!window.location.href.includes("OVERLAY_WS")&&o.addWsParam?(e.value="websocket",p()):e.value="overlay",n(),setInterval(()=>{n()},3e3)}),{wsConnected:t,useType:e}}export{P as c,S as u};
