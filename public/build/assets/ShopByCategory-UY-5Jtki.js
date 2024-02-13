import{h as f,b as g,e as l,f as e,t as n,F as m,p as _,o,q as i,w as u,u as c,i as h}from"./vendor-3t5S13OX.js";import{N as p}from"./vue3-star-ratings-Nu-FVTek.js";import{_ as y}from"./app-ph6eZdHP.js";const v={class:"container-fluid fruite py-5"},V={class:"container py-5"},w={class:"nav nav-tabs",role:"tablist"},x={class:"nav-item",role:"presentation"},B={class:"active-cat nav-link colorBlueish fw-bold active",id:"simple-tab-0","data-bs-toggle":"tab",href:"#simple-tabpanel-0",role:"tab","aria-controls":"simple-tabpanel-0","aria-selected":"true"},U={class:"nav-item",role:"presentation"},k={class:"nav-link colorBlueish fw-bold",id:"simple-tab-1","data-bs-toggle":"tab",href:"#simple-tabpanel-1",role:"tab","aria-controls":"simple-tabpanel-1","aria-selected":"false"},I={class:"nav-item",role:"presentation"},S={class:"nav-link colorBlueish fw-bold",id:"simple-tab-2","data-bs-toggle":"tab",href:"#simple-tabpanel-2",role:"tab","aria-controls":"simple-tabpanel-2","aria-selected":"false"},$={class:"nav-item",role:"presentation"},C={class:"nav-link colorBlueish fw-bold",id:"simple-tab-3","data-bs-toggle":"tab",href:"#simple-tabpanel-3",role:"tab","aria-controls":"simple-tabpanel-3","aria-selected":"false"},j={class:"tab-content pt-5",id:"tab-content"},z={class:"tab-pane active",id:"simple-tabpanel-0",role:"tabpanel","aria-labelledby":"simple-tab-0"},A={class:"container"},P={class:"row"},N={class:"col-md-4 d-flex flex-column align-items-center mt-4"},E=["src","alt"],F={class:"text-center"},L={href:"#",class:"fs-5 colorBlueish"},q={class:"d-flex my-3 justify-content-center"},D={class:"tab-pane",id:"simple-tabpanel-1",role:"tabpanel","aria-labelledby":"simple-tab-1"},M={class:"container"},O={class:"row"},G={class:"col-md-4 d-flex flex-column align-items-center mt-4"},H=["src","alt"],J={class:"text-center"},K={href:"#",class:"fs-5 colorBlueish"},Q={class:"d-flex my-3 justify-content-center"},R={class:"tab-pane",id:"simple-tabpanel-2",role:"tabpanel","aria-labelledby":"simple-tab-2"},T={class:"container"},W={class:"row"},X={class:"col-md-4 d-flex flex-column align-items-center mt-4"},Y=["src","alt"],Z={class:"text-center"},ee={href:"#",class:"fs-5 colorBlueish"},te={class:"d-flex my-3 justify-content-center"},ae={class:"tab-pane",id:"simple-tabpanel-3",role:"tabpanel","aria-labelledby":"simple-tab-3"},se={class:"container"},le={class:"row"},oe={class:"col-md-4 d-flex flex-column align-items-center mt-4"},ne=["src","alt"],ie={class:"text-center"},ce={href:"#",class:"fs-5 colorBlueish"},re={class:"d-flex my-3 justify-content-center"},de={__name:"ShopByCategory",props:{products:Object},setup(b){const s=f(localStorage.getItem("locale"));g(()=>{window.addEventListener("locale-changed",a=>{s.value=a.detail.storage})});const d=b;return(a,me)=>(o(),l("section",v,[e("section",V,[e("menu",w,[e("li",x,[e("a",B,n(a.$t("products.category1")),1)]),e("li",U,[e("a",k,n(a.$t("products.category2")),1)]),e("li",I,[e("a",S,n(a.$t("products.category3")),1)]),e("li",$,[e("a",C,n(a.$t("products.category4")),1)])]),e("section",j,[e("section",z,[e("article",A,[e("article",P,[(o(!0),l(m,null,_(d.products.filter(t=>t.category_id===1),t=>(o(),l("article",N,[i(c(h),{type:"button",as:"button",href:a.$route("product",t.name)},{default:u(()=>[e("img",{src:t.imageUrl,alt:s.value=="en"?"Product image":"صورة المنتج",class:"mx-auto rounded-circle bestsellingImg sliderImg",width:"200",height:"200"},null,8,E)]),_:2},1032,["href"]),e("p",F,[e("a",L,n(s.value==="en"?t.name:t.nameAr),1),e("p",q,[i(c(p),{disableClick:!0,starSize:"20",modelValue:t.rate,"onUpdate:modelValue":r=>t.rate=r,dir:"ltr"},null,8,["modelValue","onUpdate:modelValue"])])])]))),256))])])]),e("section",D,[e("article",M,[e("article",O,[(o(!0),l(m,null,_(d.products.filter(t=>t.category_id===2),t=>(o(),l("article",G,[i(c(h),{type:"button",as:"button",href:a.$route("product",t.name)},{default:u(()=>[e("img",{src:t.imageUrl,alt:s.value=="en"?"Product image":"صورة المنتج",class:"mx-auto rounded-circle bestsellingImg sliderImg",width:"200",height:"200"},null,8,H)]),_:2},1032,["href"]),e("p",J,[e("a",K,n(s.value==="en"?t.name:t.nameAr),1),e("p",Q,[i(c(p),{disableClick:!0,starSize:"20",modelValue:t.rate,"onUpdate:modelValue":r=>t.rate=r,dir:"ltr"},null,8,["modelValue","onUpdate:modelValue"])])])]))),256))])])]),e("section",R,[e("article",T,[e("article",W,[(o(!0),l(m,null,_(d.products.filter(t=>t.category_id===3),t=>(o(),l("article",X,[i(c(h),{type:"button",as:"button",href:a.$route("product",t.name)},{default:u(()=>[e("img",{src:t.imageUrl,alt:s.value=="en"?"Product image":"صورة المنتج",class:"mx-auto rounded-circle bestsellingImg sliderImg",width:"200",height:"200"},null,8,Y)]),_:2},1032,["href"]),e("p",Z,[e("a",ee,n(s.value==="en"?t.name:t.nameAr),1),e("p",te,[i(c(p),{disableClick:!0,starSize:"20",modelValue:t.rate,"onUpdate:modelValue":r=>t.rate=r,dir:"ltr"},null,8,["modelValue","onUpdate:modelValue"])])])]))),256))])])]),e("section",ae,[e("article",se,[e("article",le,[(o(!0),l(m,null,_(d.products.filter(t=>t.category_id===4),t=>(o(),l("article",oe,[i(c(h),{type:"button",as:"button",href:a.$route("product",t.name)},{default:u(()=>[e("img",{src:t.imageUrl,alt:s.value=="en"?"Product image":"صورة المنتج",class:"mx-auto rounded-circle bestsellingImg sliderImg",width:"200",height:"200"},null,8,ne)]),_:2},1032,["href"]),e("p",ie,[e("a",ce,n(s.value==="en"?t.name:t.nameAr),1),e("p",re,[i(c(p),{disableClick:!0,starSize:"20",modelValue:t.rate,"onUpdate:modelValue":r=>t.rate=r,dir:"ltr"},null,8,["modelValue","onUpdate:modelValue"])])])]))),256))])])])])])]))}},pe=y(de,[["__scopeId","data-v-0aa8bcfd"]]);export{pe as default};
