import{d as N,x as D,v as w,B as v,ag as f,o as n,b as r,a as c,w as d,f as s,t as l,u as o,g as _,H as x,I as y,i as k,e as S,p as L,j as B,aB as E}from"./vendor-834361d8.js";import{_ as I}from"./index-3e85e074.js";const U=a=>(L("data-v-47b5649e"),a=a(),B(),a),j={class:"common-layout"},G=U(()=>s("h1",null,"FFLOGS上传器 加速下载",-1)),$={key:0},F={flex:"~ col wrap gap1","items-start":""},V=N({__name:"fflogsUploaderDownload",setup(a){const e=D({res:{}}),p=w(),g=[["https://gh.h233.eu.org/https://github.com","[美国 Cloudflare CDN]"],["https://gh.ddlc.top/https://github.com","[美国 Cloudflare CDN]"],["https://dl.ghpig.top/https://github.com","[美国 Cloudflare CDN]"],["https://slink.ltd/https://github.com","[美国 Cloudflare CDN]"],["https://git.xfj0.cn/https://github.com","[美国 Cloudflare CDN]"],["https://gh.con.sh/https://github.com","[美国 Cloudflare CDN]"],["https://ghps.cc/https://github.com","[美国 Cloudflare CDN]"],["https://cors.isteed.cc/github.com","[美国 Cloudflare CDN]"],["https://hub.gitmirror.com/https://github.com","[美国 Cloudflare CDN]"],["https://download.fgit.cf","[美国 洛杉矶]"],["https://download.njuu.cf","[美国 拉斯维加斯]"],["https://download.yzuu.cf","[美国 Cloudflare CDN]"],["https://download.nuaa.cf","[美国 Cloudflare CDN]"]];return v(()=>{fetch("https://api.github.com/repos/RPGLogs/Uploaders-fflogs/releases/latest",{method:"GET"}).then(t=>{if(t.ok)return t.json();throw t.status}).then(t=>{f.close(),p.value=t.assets.find(h=>/v.+\.exe$/.test(h.name)).name,e.res=t}).catch(t=>{f.fire({icon:"error",title:"错误",text:t})})}),(t,h)=>{const m=E,C=k,b=S;return n(),r("div",j,[c(b,null,{default:d(()=>[c(C,null,{default:d(()=>[G,s("h2",null,"最新版本："+l(o(e).res.tag_name||"loading"),1),s("h2",null,"更新时间："+l(o(e).res.published_at||"loading"),1),o(e).res.tag_name?(n(),r("h3",$,"加速节点：（挨个试试，总有一个能用的）")):_("",!0),s("div",F,[o(e).res.tag_name?(n(),r(x,{key:0},y(g,(u,i)=>c(m,{key:i,href:`${u[0]}/RPGLogs/Uploaders-fflogs/releases/download/v${o(e).res.name}/${o(p)}`,type:"primary","m-r-8px":""},{default:d(()=>[s("span",null,l((i+1).toString().padStart(2,"0"))+"."+l(u[1])+"节点",1)]),_:2},1032,["href"])),64)):_("",!0)])]),_:1})]),_:1})])}}});const R=I(V,[["__scopeId","data-v-47b5649e"]]);export{R as default};