import{h as x,b as S,R as k,L as $,e as m,q as u,u as t,f as e,t as o,ay as U,s as g,l as N,F as w,p as R,N as j,n as q,m as i,y as _,S as f,o as p,Z as z,J as B,x as T}from"./vendor-3t5S13OX.js";import{N as b}from"./vue3-star-ratings-Nu-FVTek.js";const A={class:"container-fluid py-5 marginTopHalf"},I={class:"card flex justify-content-center"},O={class:"container py-5"},P={class:"row g-4"},C={class:"col-lg-6"},D={class:"border rounded"},E={href:"#",class:"d-flex flex-column justify-content-center align-items-center"},L=["src","alt"],M={class:"align-self-start ms-5 mt-3 colorOrange fw-bold"},F={class:"col-lg-6"},H={class:"fw-bold mb-3"},J={class:"d-flex mb-4"},Z={class:"mb-4 text-break"},G={class:"mb-4 text-break"},K={class:"fw-bold"},Q={class:"mb-4 text-break"},W={class:"fw-bold"},X={class:"row d-flex justify-content-between marginTopHalf"},Y={class:"mb-3"},ee={key:0},te={class:"row mt-5 border-bottom-1 pb-5 border-secondary"},se={class:"col-md-6 d-flex gap-4 py-5"},oe=["src","alt"],le={class:"lh0"},ae={class:"text-muted mt-4 text-break"},re={class:"col-md-6 d-flex justify-content-end align-items-center mb-3"},ne={class:"row g-4"},de={class:"col-lg-6"},ce={class:"border-bottom rounded"},ie=["placeholder"],ue={class:"text-danger p-2"},me={class:"col-lg-6"},pe={class:"border-bottom rounded"},he=["placeholder"],_e={class:"text-danger p-2"},fe={class:"col-lg-12"},be={class:"border-bottom rounded my-4"},ge=["placeholder"],we={class:"text-danger p-2"},ve={class:"col-lg-12"},ye={class:"d-flex justify-content-between py-3 mb-5"},Ve={class:"d-flex align-items-center"},xe={class:"mb-0 me-3 fw-bold"},Se={class:"d-flex align-items-center",dir:"ltr"},ke={href:"#",class:"btn fw-bold borderBlueish colorBlueish rounded-pill px-4 py-3 fancyBtn"},Ne={__name:"ShopDetails",props:{product:Object,productAvgRate:Number,reviews:Object},setup(n){const d=x(localStorage.getItem("locale"));S(()=>{window.addEventListener("locale-changed",a=>{d.value=a.detail.storage})});const v=k(),c=n,h=c.productAvgRate,l=$("addReview",{username:"",email:"",review:"",rate:5}),y=a=>{l.post(route("products.reviews.store",a),{preserveScroll:!0,onSuccess:()=>{v.add({severity:"success",summary:"Successful",detail:"Review has been added successfully",life:3e3}),l.reset()}})};return(a,r)=>(p(),m(w,null,[u(t(z),{title:d.value=="en"?c.product[0].name:c.product[0].nameAr},null,8,["title"]),e("section",A,[e("aside",I,[u(t(B))]),e("section",O,[e("section",P,[e("article",C,[e("article",D,[e("a",E,[e("img",{src:c.product[0].imageUrl,class:"img-fluid rounded productImg",width:"400",height:"400",alt:d.value=="en"?"Product image":"صورة المنتج"},null,8,L),e("p",M,o(c.product[0].bestSelling?a.$t("products.bestSelling"):null),1)])])]),e("article",F,[e("h4",H,o(d.value==="en"?n.product[0].name:n.product[0].nameAr),1),e("p",J,[u(t(b),{dir:"ltr",starSize:"20",modelValue:t(h),"onUpdate:modelValue":r[0]||(r[0]=s=>U(h)?h.value=s:null),disableClick:!0},null,8,["modelValue"])]),e("p",Z,o(d.value==="en"?n.product[0].description:n.product[0].descriptionAr),1),e("p",G,[e("span",K,o(a.$t("products.size")),1),g(" "+o(n.product[0].size),1)]),e("p",Q,[e("span",W,o(a.$t("products.quantity")),1),g(" "+o(n.product[0].quantityPerPacket),1)])]),e("aside",X,[e("article",Y,[n.reviews.length>0?(p(),m("h2",ee,o(a.$t("reviews")),1)):N("",!0),(p(!0),m(w,null,R(c.reviews,s=>(p(),m("article",te,[e("article",se,[e("img",{src:s.imageUrl,class:"reviewImg col-md-2",alt:d.value=="en"?"User image":"صورة المستخدم",width:"50",height:"50"},null,8,oe),e("p",null,[e("h6",le,o(s.username),1),u(t(b),{starSize:"11",modelValue:s.rate,"onUpdate:modelValue":V=>s.rate=V},null,8,["modelValue","onUpdate:modelValue"]),e("p",ae,o(s.review),1)])]),e("aside",re,[e("p",null,o(t(T)(s.created_at).fromNow()),1)])]))),256))])]),e("form",{onSubmit:r[5]||(r[5]=j(s=>y(c.product[0].id),["prevent"]))},[e("h4",{class:q(["mb-5 fw-bold",[d.value==="en"?null:"me-4"]])},o(a.$t("rateOurProduct")),3),e("section",ne,[e("article",de,[e("article",ce,[i(e("input",{type:"text",class:"form-control border-0 me-4",placeholder:a.$t("profile.profileInfoName"),"onUpdate:modelValue":r[1]||(r[1]=s=>t(l).username=s),required:""},null,8,ie),[[_,t(l).username]]),i(e("p",null,[e("p",ue,o(t(l).errors.username),1)],512),[[f,t(l).errors.username]])])]),e("article",me,[e("p",pe,[i(e("input",{type:"email",class:"form-control border-0",placeholder:a.$t("profile.profileInfoEmail"),"onUpdate:modelValue":r[2]||(r[2]=s=>t(l).email=s),required:""},null,8,he),[[_,t(l).email]])]),i(e("p",null,[e("p",_e,o(t(l).errors.email),1)],512),[[f,t(l).errors.email]])]),e("article",fe,[e("article",be,[i(e("textarea",{name:"",id:"",class:"form-control border-0 me-4",cols:"30",rows:"8",placeholder:a.$t("yourReview"),spellcheck:"false","onUpdate:modelValue":r[3]||(r[3]=s=>t(l).review=s),required:""},null,8,ge),[[_,t(l).review]]),i(e("p",null,[e("p",we,o(t(l).errors.review),1)],512),[[f,t(l).errors.review]])])]),e("aside",ve,[e("article",ye,[e("article",Ve,[e("p",xe,o(a.$t("productRate")),1),e("div",Se,[u(t(b),{starSize:"20",modelValue:t(l).rate,"onUpdate:modelValue":r[4]||(r[4]=s=>t(l).rate=s)},null,8,["modelValue"])])]),e("button",ke,o(a.$t("comment")),1)])])])],32)])])])],64))}};export{Ne as default};
