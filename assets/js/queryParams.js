function s(a){if(!a)return{};let i=a.split("?")[1];if(!i)return{};let t=i.split("&");if(!t)return{};let r={};for(let l=0;l<t.length;l++){let n=t[l].split("="),e=n[0],p=n[1];r[e]?(r[e]=Array.isArray(r[e])?r[e]:[r[e]],r[e].push(p)):r[e]=p}return r}const u=s(location.href);export{u as p};
//# sourceMappingURL=queryParams.js.map
