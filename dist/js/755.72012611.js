"use strict";(self["webpackChunkfinal_project"]=self["webpackChunkfinal_project"]||[]).push([[755],{7172:function(t,s,e){e.d(s,{Z:function(){return u}});var i=e(3396);const a={class:"bg-dark"},o=(0,i._)("h1",null,"我是footer",-1),n=[o];function r(t,s,e,o,r,l){return(0,i.wg)(),(0,i.iD)("footer",a,n)}var l={},c=e(89);const d=(0,c.Z)(l,[["render",r]]);var u=d},5755:function(t,s,e){e.r(s),e.d(s,{default:function(){return D}});var i=e(3396),a=e(7139),o=e(9242);const n=(0,i._)("div",{class:"background"},[(0,i._)("div",{class:"context animate__animated animate__fadeInUp"},[(0,i._)("h1",null,"釋放你的電競魂!!"),(0,i._)("button",{type:"button",class:"btn btn-primary"},[(0,i._)("a",{href:""},"開始選購")])])],-1),r={class:"text",ref:"sectionText"},l=(0,i._)("h1",null,"熱門商品",-1),c=(0,i._)("hr",null,null,-1),d=[l,c],u={class:"first animate__animated",ref:"sectionFirst"},p={class:"card"},h=["src","alt","title"],g={class:"card-body d-grid gap-2"},v={class:"card-text"},w={class:"origin-price"},_={class:"price"},m=["onClick"],f=(0,i.uE)('<section class="second"><div class="text"><h1>提供服務</h1></div><hr><br><div class="content"><div class="image3"></div><div class="illustrate"><h2>客製化組裝服務</h2><hr><p> 根據您的需求為您規劃最適合您的電腦<br> 讓您不用再為了組裝而煩惱! </p></div></div><div class="content flex-row-reverse"><div class="image2"></div><div class="illustrate"><h2>專業維修服務</h2><hr><p> 我們重視每一位顧客的售後服務<br> 凡是於本店購買的商品我們都將提供專業的維修服務。 </p></div></div><div class="content"><div class="image"></div><div class="illustrate"><h2>配送服務</h2><hr><p> 提供最快速且方便的配送服務<br> 讓您不再需要為了買東西而出遠門<br> 在家就能輕鬆購物 </p></div></div></section>',1),b=(0,i._)("div",{class:"test"},null,-1);function P(t,s,e,l,c,P){const k=(0,i.up)("Loading"),B=(0,i.up)("swiper-slide"),O=(0,i.up)("swiper"),C=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(k,{active:c.isLoading},null,8,["active"]),n,(0,i._)("section",r,d,512),(0,i._)("section",u,[(0,i.Wm)(O,{slidesPerView:1,spaceBetween:10,breakpoints:{640:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:4,spaceBetween:20},1900:{slidesPerView:5,spaceBetween:20},2024:{slidesPerView:6,spaceBetween:50}},modules:l.modules,autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,class:"mySwiper"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.showProducts,(t=>((0,i.wg)(),(0,i.j4)(B,{key:t.id},{default:(0,i.w5)((()=>[(0,i._)("div",p,[(0,i._)("img",{src:t.imageUrl,class:"card-img-top",alt:t.title,title:t.title},null,8,h),(0,i._)("div",g,[(0,i._)("h5",{class:(0,a.C_)(["card-title",{"fs-6":t.title.length>=40,"fs-5":t.title.length>=35,"fs-4":t.title.length<15}])},(0,a.zw)(t.title),3),(0,i._)("div",v,[(0,i._)("small",w,"原價"+(0,a.zw)(t.origin_price),1),(0,i._)("p",_,"優惠價$"+(0,a.zw)(t.price),1)]),(0,i._)("button",{class:"btn btn-primary",onClick:(0,o.iM)((s=>P.ProductDetail(t.id)),["prevent"])}," 前往選購 ",8,m)])])])),_:2},1024)))),128))])),_:1},8,["modules"])],512),f,(0,i.Wm)(C),b],64)}var k=e(8170),B=e(4677),O={setup(){const t=(0,B.pm)();return{toast:t}},methods:{ToastMessage(t){1===t?this.toast.success("加入成功",{position:"top-right",timeout:2500,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:2,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}):this.toast.error("錯誤",{position:"top-right",timeout:2500,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:2,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})}}},C=e(7172),L={data(){return{showProducts:{},isLoading:!1}},mixins:[O],components:{Footer:C.Z},setup(){const t=(0,B.pm)();return{modules:[k.pt,k.tl,k.W_,k.lI],toast:t}},methods:{test(){this.ToastMessage(2)},ProductDetail(t){this.$router.push(`/user/product/${t}`)},getData(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/toad-api/products/all";this.$http.get(t).then((t=>{t.data.success&&(this.isLoading=!1,this.showProducts=t.data.products.slice(0,10),console.log(this.showProducts))}))}},mounted(){window.pageYOffset<50&&window.addEventListener("scroll",(()=>{window.pageYOffset>50&&this.$refs.sectionFirst.classList.add("animate__fadeInUp")}))},created(){this.getData()}},x=e(89);const y=(0,x.Z)(L,[["render",P]]);var D=y}}]);
//# sourceMappingURL=755.72012611.js.map