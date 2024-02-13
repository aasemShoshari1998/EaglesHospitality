import{R as h,h as f,b as _,L as g,e as b,q as m,u as s,f as e,N as w,m as n,y as r,S as i,t as l,F as y,o as v,Z as $,J as S}from"./vendor-3t5S13OX.js";const B={class:"container-fluid p-md-5 marginTopHalf"},x={class:"row g-4 justify-content-center marginTopHalf"},T={class:"col-lg-6"},M=["placeholder"],V={class:"text-danger text-center"},N=["placeholder"],U={class:"text-danger text-center"},k=["placeholder"],E={class:"text-danger text-center"},j={class:"w-50 fw-bold form-control py-md-3 bg-white colorBlueish fancyBtn z-0"},C={class:"col-lg-3"},D={class:"d-flex p-md-4 rounded mb-4 bg-white"},F=e("i",{class:"fas fa-map-marker-alt fa-2x colorBlueish me-4"},null,-1),H={class:"mb-2"},L={class:"d-flex p-md-4 rounded mb-4 bg-white"},q=e("i",{class:"fas fa-envelope fa-2x colorBlueish me-4"},null,-1),z={class:"mb-2"},I={class:"d-flex p-md-4 rounded bg-white"},J=e("i",{class:"fa fa-phone-alt fa-2x colorBlueish me-4"},null,-1),R={class:"mb-2"},G={__name:"Contact",setup(Z){const u=h(),d=f(localStorage.getItem("locale"));_(()=>{window.addEventListener("locale-changed",o=>{d.value=o.detail.storage})});const t=g({username:"",email:"",message:""}),p=()=>{console.log("object"),t.post(route("contacts.store"),{preserveScroll:!0,onSuccess:()=>{u.add({severity:"success",summary:"Successful",detail:"Message sent successfully",life:3e3})}})};return(o,a)=>(v(),b(y,null,[m(s($),{title:d.value=="en"?"Contact us":"تواصل معنا"},null,8,["title"]),e("section",B,[e("section",x,[e("aside",T,[e("form",{onSubmit:w(p,["prevent"])},[n(e("input",{type:"text",class:"w-100 form-control py-md-3 mb-4",placeholder:o.$t("contact.formName"),"onUpdate:modelValue":a[0]||(a[0]=c=>s(t).username=c)},null,8,M),[[r,s(t).username]]),n(e("p",null,[e("p",V,l(s(t).errors.username),1)],512),[[i,s(t).errors.username]]),n(e("input",{type:"email",class:"w-100 form-control py-md-3 mb-4",placeholder:o.$t("contact.formEmail"),"onUpdate:modelValue":a[1]||(a[1]=c=>s(t).email=c)},null,8,N),[[r,s(t).email]]),n(e("p",null,[e("p",U,l(s(t).errors.email),1)],512),[[i,s(t).errors.email]]),n(e("textarea",{class:"w-100 form-control mb-4",rows:"5",cols:"10",placeholder:o.$t("contact.formMessage"),"onUpdate:modelValue":a[2]||(a[2]=c=>s(t).message=c)},null,8,k),[[r,s(t).message]]),n(e("p",null,[e("p",E,l(s(t).errors.message),1)],512),[[i,s(t).errors.message]]),e("button",j,l(o.$t("contact.formSubmit")),1)],32)]),e("aside",C,[e("p",D,[F,e("p",null,[e("h4",null,l(o.$t("contact.title")),1),e("p",H,l(o.$t("contact.address")),1)])]),e("p",L,[q,e("p",null,[e("h4",null,l(o.$t("contact.mailUs")),1),e("p",z,l(o.$t("contact.gmail")),1)])]),e("p",I,[J,e("p",null,[e("h4",null,l(o.$t("contact.telephoneTitle")),1),e("p",R,l(o.$t("contact.telephone")),1)])])])]),m(s(S))])],64))}};export{G as default};
