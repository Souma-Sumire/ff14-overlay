import{p as y}from"./queryParams-cf2e4fb1.js";import{U as g}from"./util-ef9ccf87.js";const{api:a}=y,c={cafe:"https://cafemaker.wakingsands.com",xivapi:"https://xivapi.com"},s={first:(a==null?void 0:a.toLowerCase())==="xivapi"?c.xivapi:c.cafe,second:(a==null?void 0:a.toLowerCase())==="xivapi"?c.cafe:c.xivapi},C={get random(){return Math.floor(Math.random()*864e5*11)+864e5*25}},A=new Map(Object.entries({任务指令:"/i/000000/000123.png",冲刺:"/i/000000/000104.png",坐骑:"/i/000000/000118.png",攻击:"/i/000000/000101.png",腐秽大地:"/i/003000/003090.png"})),u="souma-img-cache",p="souma-action-cache",$=JSON.parse(localStorage.getItem(u)||"[]"),m=JSON.parse(localStorage.getItem(p)||"[]"),f=Date.now(),d=1e3,D=$.filter((e,t)=>e.expirationTime>=f&&t<d),T=m.filter((e,t)=>e.expirationTime>=f&&t<d);localStorage.setItem(u,JSON.stringify(D));localStorage.setItem(p,JSON.stringify(T));const x=/(\d{6})\/(\d{6})\.png$/;async function E(e,t,o=["ID","Icon","ActionCategoryTargetID"]){const r=S(e,t,o);try{return await(await I(r,{mode:"cors"})).json()}catch(n){return console.error(`Failed to parse action: ${n}`),{ActionCategoryTargetID:0,ID:t,Icon:"/i/000000/000405.png"}}}function S(e,t,o){const r=`${s.first}/${e}/${t}?columns=${o.join(",")}`;return[r,r.replace(s.first,s.second)]}async function N(e,t=!1){return`${s.first}${e}`.replace(x,(r,n,i)=>`${n}/${t?"hq/":""}${i}.png`)}function b(e){const t=g.jobEnumToJob(e),o=g.nameToFullName(t);return`${s.first}/cj/companion/${o.en.toLowerCase().replaceAll(/\s/g,"")}.png`}async function O(e){const t=await E("action",e,["Icon"]);return N(t.Icon)}async function k(e){var r;const t=A.get(e);if(t)return{ActionCategoryTargetID:0,ID:0,Icon:t};const o=m.find(n=>n.name===e);if(o!=null&&o.action)return o.action;try{const l=(r=(await(await I([`${c.cafe}/search?filters=ClassJobLevel>0&indexes=action&string=${encodeURIComponent(e)}`])).json()).Results)==null?void 0:r[0];if(l){const h=Date.now()+C.random,w={name:e,action:l,expirationTime:h};return m.push(w),localStorage.setItem("souma-action-cache",JSON.stringify(m)),l}return{ActionCategoryTargetID:0,ID:0,Icon:"/i/000000/000405.png"}}catch(n){throw console.error(`Failed to get action by name: ${n}`),new Error("Failed to retrieve action data")}}async function j(e,t){let o;const r=new Promise((n,i)=>{o=setTimeout(()=>{i(new Error("Promise timed out"))},t)});return Promise.race([e,r]).finally(()=>{clearTimeout(o)})}async function I(e,t){const o=Object.assign({cache:"force-cache"},t);for(const r of e)try{const n=await j(fetch(r,o),3e3);if(n.ok)return n}catch(n){console.error(`Failed to fetch ${r}: ${n}`)}throw new Error("All fetch attempts failed.")}const J=e=>{const t=e.target;t.src.includes("cafemaker.wakingsands.com")?t.src=t.src.replace("cafemaker.wakingsands.com","xivapi.com"):t.src.includes("xivapi.com")&&(t.src="")};export{N as a,b,O as c,k as g,J as h,E as p};