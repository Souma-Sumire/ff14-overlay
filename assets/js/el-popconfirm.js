import{z as x,bn as v,aI as z,bo as I,aH as h,d as b,af as V,A as _,r as $,c as p,a6 as A,f as i,n as c,l as s,h as f,x as a,i as t,aD as D,y as M,p as R,Y as g,j as u,t as m,k as C,E as k,C as j,aK as q,at as H,a8 as K,M as L}from"./index.js";const U=x({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:v,default:"primary"},cancelButtonType:{type:String,values:v,default:"text"},icon:{type:z,default:()=>I},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:h.teleported,persistent:h.persistent,width:{type:[String,Number],default:150}}),Y={confirm:o=>o instanceof MouseEvent,cancel:o=>o instanceof MouseEvent},F=b({name:"ElPopconfirm"}),G=b({...F,props:U,emits:Y,setup(o,{emit:d}){const l=o,{t:y}=V(),n=_("popconfirm"),B=$(),T=()=>{var e,r;(r=(e=B.value)==null?void 0:e.onClose)==null||r.call(e)},E=p(()=>({width:A(l.width)})),P=e=>{d("confirm",e),T()},S=e=>{d("cancel",e),T()},N=p(()=>l.confirmButtonText||y("el.popconfirm.confirmButtonText")),w=p(()=>l.cancelButtonText||y("el.popconfirm.cancelButtonText"));return(e,r)=>(i(),c(t(H),q({ref_key:"tooltipRef",ref:B,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${t(n).namespace.value}-popover`,"popper-style":t(E),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:s(()=>[f("div",{class:a(t(n).b())},[f("div",{class:a(t(n).e("main"))},[!e.hideIcon&&e.icon?(i(),c(t(D),{key:0,class:a(t(n).e("icon")),style:M({color:e.iconColor})},{default:s(()=>[(i(),c(R(e.icon)))]),_:1},8,["class","style"])):g("v-if",!0),u(" "+m(e.title),1)],2),f("div",{class:a(t(n).e("action"))},[C(t(k),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:S},{default:s(()=>[u(m(t(w)),1)]),_:1},8,["type","text"]),C(t(k),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:P},{default:s(()=>[u(m(t(N)),1)]),_:1},8,["type","text"])],2)],2)]),default:s(()=>[e.$slots.reference?j(e.$slots,"reference",{key:0}):g("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var J=K(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const Q=L(J);export{Q as E};
