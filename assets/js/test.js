import{d as a,k as t,j as o,F as i,f as c,g as s,i as d,h as l}from"./index.js";const p=a({setup(r,{slots:e}){return()=>{var u,n;return t(i,null,[t("div",null,[o("默认插槽："),(u=e.default)==null?void 0:u.call(e)]),t("div",null,[o("具名插槽："),(n=e.prefix)==null?void 0:n.call(e)])])}}}),f=a({emits:["testEmit"],setup(r,{emit:e}){return()=>t(i,null,[t(p,null,{default:()=>"default",prefix:()=>t("i",null,[o("prefix")])}),t("button",{onClick:()=>{e("testEmit")}},[o("触发emit")])])}}),D=a({__name:"test",setup(r){function e(){console.log("click!")}function u(){console.log("test"),localStorage.setItem("test",Date.now().toString())}return window.addEventListener("storage",n=>{console.log("storage",n)}),(n,m)=>(c(),s("div",null,[t(d(f),{onTestEmit:e}),l("div",null,[l("button",{onClick:u},"测试")])]))}});export{D as default};
//# sourceMappingURL=test.js.map
