import{z as i,d as n,A as p,c as o,ac as f,f as m,n as y,l as g,C as d,x as w,i as a,y as _,p as v,a8 as C,M as R}from"./index.js";const b=Symbol("rowContextKey"),x=["start","center","end","space-around","space-between","space-evenly"],S=["top","middle","bottom"],h=i({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:x,default:"start"},align:{type:String,values:S,default:"top"}}),j=n({name:"ElRow"}),k=n({...j,props:h,setup(r){const t=r,s=p("row"),l=o(()=>t.gutter);f(b,{gutter:l});const c=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),u=o(()=>[s.b(),s.is(`justify-${t.justify}`,t.justify!=="start"),s.is(`align-${t.align}`,t.align!=="top")]);return(e,z)=>(m(),y(v(e.tag),{class:w(a(u)),style:_(a(c))},{default:g(()=>[d(e.$slots,"default")]),_:3},8,["class","style"]))}});var $=C(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const K=R($);export{K as E,b as r};
//# sourceMappingURL=el-row.js.map
