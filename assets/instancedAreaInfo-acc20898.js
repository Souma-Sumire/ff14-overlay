import{a as g}from"./overlay_plugin_api-9faadcd6.js";import{d as v,v as f,o as y,b as L,t as p,u as _}from"./vendor-052ff5d9.js";import{_ as N}from"./index-66fd7128.js";var u=(e=>(e[""]="①",e[""]="②",e[""]="③",e[""]="④",e[""]="⑤",e[""]="⑥",e[""]="⑦",e[""]="⑧",e[""]="⑨",e))(u||{});const x=v({__name:"instancedAreaInfo",setup(e){var i;g("LogLine",z),startOverlayEvents();const r=f(""),s=f(""),d=((i=m(location.href))==null?void 0:i.simple)==="true";function m(o){var n,l;const a=(l=(n=o.split("?"))==null?void 0:n.pop())==null?void 0:l.split("&"),t={};if(!a)return null;for(const h of a){const c=h.split("=");t[c[0]]=c[1]}return t}function z(o){var a,t;if(o.line[0]==="00"&&o.line[2]==="0039"){const n=o.line[4].match(/当前所在副本区为“(?<zoneName>[^”]+)(?<zoneInstanced>[])”/)??o.line[4].match(/You are now in the instanced area (?<zoneName>.+?)(?<zoneInstanced>[])”/)??o.line[4].match(/インスタンスエリア「(?<zoneName>.+?)(?<zoneInstanced>[])」/);n&&(r.value=((a=n.groups)==null?void 0:a.zoneName)??"",s.value=u[(t=n.groups)==null?void 0:t.zoneInstanced])}else o.line[0]==="01"&&(r.value=o.line[3],s.value="")}return(o,a)=>(y(),L("h5",null,p(d?"":_(r))+p(_(s)),1))}});const O=N(x,[["__scopeId","data-v-9111fc41"]]);export{O as default};
