import{d as b,K as y,p as x,b as D,n as N,o as i,e as l,a as p,w as c,x as e,A as a,u as s,$ as w,F as k,M as v,a4 as I,a5 as U,H as S,I as E,t as G,v as L,aP as z}from"./vendor-6ba522cf.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const F=h=>(S("data-v-e6d0bec6"),h=h(),E(),h),P={class:"common-layout"},$=F(()=>e("h1",null,"FFLOGS上传器 加速下载",-1)),X={key:0},B={flex:"~ col wrap gap1","items-start":""},V=b({__name:"fflogsUploaderDownload",setup(h){const o=y({res:{}}),r=x(),m=[["https://gh.h233.eu.org/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@X.I.U/XIU2] 提供"],["https://gh.xiu2.us.kg/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@X.I.U/XIU2] 提供"],["https://gh.ddlc.top/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@mtr-static-official] 提供"],["https://dl.ghpig.top/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [feizhuqwq.com] 提供"],["https://slink.ltd/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [知了小站] 提供"],["https://gh.con.sh/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [佚名] 提供"],["https://gh-proxy.com/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [佚名] 提供"],["https://cors.isteed.cc/github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@Lufs's] 提供"],["https://hub.gitmirror.com/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [GitMirror] 提供"],["https://sciproxy.com/github.com","[美国 Cloudflare CDN] - 该公益加速源由 [sciproxy.com] 提供"],["https://ghproxy.cc/https://github.com","[美国 洛杉矶] - 该公益加速源由 [@yionchiii] 提供"],["https://cf.ghproxy.cc/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@yionchiii] 提供"],["https://www.ghproxy.cc/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@yionchiii] 提供"],["https://ghproxy.cn/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@yionchiii] 提供"],["https://www.ghproxy.cn/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@yionchiii] 提供"],["https://github.site","[美国 Cloudflare CDN] - 该公益加速源由 [@yionchiii] 提供"],["https://github.store","[美国 Cloudflare CDN] - 该公益加速源由 [@yionchiii] 提供"],["https://github.tmby.shop/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [blog.tmby.shop] 提供"],["https://github.moeyy.xyz/https://github.com","[美国 Cloudflare CDN] - 该公益加速源由 [@Moeyy] 提供"],["https://hub.whtrys.space","[美国 Cloudflare CDN] - 该公益加速源由 [FastGit 群组成员] 提供"],["https://dgithub.xyz","[美国 西雅图] - 该公益加速源由 [dgithub.xyz] 提供"],["https://gh-proxy.ygxz.in/https://github.com","[美国 洛杉矶] - 该公益加速源由 [@一个小站 www.ygxz.in] 提供"],["https://download.ixnic.net","[美国 洛杉矶] - 该公益加速源由 [@黃埔興國] 提供"],["https://ghproxy.net/https://github.com","[英国伦敦] - 该公益加速源由 [ghproxy]"],["https://ghp.ci/https://github.com","[日本、韩国、新加坡、美国、德国等]（CDN 不固定） - 该公益加速源由 [ghproxy] 提供"],["https://kkgithub.com","[中国香港、日本、韩国、新加坡等] - 该公益加速源由 [help.kkgithub.com] 提供"]];D(()=>{fetch("https://api.github.com/repos/RPGLogs/Uploaders-fflogs/releases/latest",{method:"GET"}).then(t=>{if(t.ok)return t.json();throw t.status}).then(t=>{r.value=t.assets.find(u=>/v.+\.exe$/.test(u.name)).name,o.res=t}).catch(t=>{t.status===403?n("您的网络环境不允许访问GitHub API，请检查网络设置。"):n(t)})});function n(t){N.error(t)}return(t,u)=>{const f=z,_=I,C=U;return i(),l("div",P,[p(C,null,{default:c(()=>[p(_,null,{default:c(()=>[$,e("h2",null,"最新版本："+a(s(o).res.tag_name||"loading"),1),e("h2",null,"更新时间："+a(s(o).res.published_at||"loading"),1),s(o).res.tag_name?(i(),l("h3",X," 加速节点：（挨个试试，总有一个能用的） ")):w("",!0),e("div",B,[(i(),l(k,null,v(m,(d,g)=>G(p(f,{key:g,href:`${d[0]}/RPGLogs/Uploaders-fflogs/releases/download/v${s(o).res.name}/${s(r)}`,type:"primary","m-r-8px":""},{default:c(()=>[e("span",null,a((g+1).toString().padStart(2,"0"))+"."+a(d[1])+"节点",1)]),_:2},1032,["href"]),[[L,s(o).res.tag_name]])),64))])]),_:1})]),_:1})])}}});const H=M(V,[["__scopeId","data-v-e6d0bec6"]]);export{H as default};
