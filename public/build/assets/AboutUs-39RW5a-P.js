import{h as e,b as l,e as c,q as n,u as i,f as s,t as a,F as u,o as _,Z as d}from"./vendor-3t5S13OX.js";import{_ as r}from"./app-ph6eZdHP.js";const m="/build/assets/aboutus1-GdUdz1MF.jfif",g="/build/assets/aboutus2-4MsQY8Yi.jfif",h={class:"container-fluid container-lg px-xl-5 marginTop marginBottom"},f={class:"row"},p={class:"col-lg-6"},b=["alt"],w={class:"col-lg-6"},x={class:"w-75 mx-auto lh-lg fs-5"},v={class:"row marginTopHalf"},U={class:"col-lg-6"},A={class:"w-75 mx-auto lh-lg fs-5"},B={class:"w-75 mx-auto lh-lg fs-5"},y={class:"col-lg-6"},F=["alt"],M={__name:"AboutUs",setup($){const o=e(localStorage.getItem("locale"));return l(()=>{window.addEventListener("locale-changed",t=>{o.value=t.detail.storage})}),(t,j)=>(_(),c(u,null,[n(i(d),{title:o.value=="en"?"About us":"نبذة عنا"},null,8,["title"]),s("section",h,[s("section",f,[s("aside",p,[s("img",{class:"w-100 mx-auto rounded",src:m,alt:o.value=="en"?"About company image":"صورة نبذة عن الشركة"},null,8,b)]),s("aside",w,[s("h1",x,a(t.$t("aboutUs")),1)])]),s("section",v,[s("aside",U,[s("h1",A,a(t.$t("aboutUs2")),1),s("h1",B,a(t.$t("aboutUs3")),1)]),s("aside",y,[s("img",{src:g,class:"w-100 mx-auto mt-5 rounded",alt:o.value=="en"?"About company image":"صورة نبذة عن الشركة"},null,8,F)])])])],64))}},I=r(M,[["__scopeId","data-v-c8034d4c"]]);export{I as default};