(self["webpackChunkfinal_project"]=self["webpackChunkfinal_project"]||[]).push([[297],{8803:function(t,e,s){s(1703),
/*!
  * Bootstrap toast.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,i){t.exports=i(s(1437),s(4130),s(1884),s(9069))}(0,(function(t,e,s,i){"use strict";const a=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},o=a(e),n=a(s),r="toast",c="bs.toast",l=`.${c}`,u=`mouseover${l}`,d=`mouseout${l}`,h=`focusin${l}`,g=`focusout${l}`,m=`hide${l}`,p=`hidden${l}`,f=`show${l}`,_=`shown${l}`,w="fade",y="hide",v="show",P="showing",b={animation:"boolean",autohide:"boolean",delay:"number"},C={animation:!0,autohide:!0,delay:5e3};class D extends n.default{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return C}static get DefaultType(){return b}static get NAME(){return r}show(){const e=o.default.trigger(this._element,f);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(w);const s=()=>{this._element.classList.remove(P),o.default.trigger(this._element,_),this._maybeScheduleHide()};this._element.classList.remove(y),t.reflow(this._element),this._element.classList.add(v,P),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=o.default.trigger(this._element,m);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(y),this._element.classList.remove(P,v),o.default.trigger(this._element,p)};this._element.classList.add(P),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(v),super.dispose()}isShown(){return this._element.classList.contains(v)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){o.default.on(this._element,u,(t=>this._onInteraction(t,!0))),o.default.on(this._element,d,(t=>this._onInteraction(t,!1))),o.default.on(this._element,h,(t=>this._onInteraction(t,!0))),o.default.on(this._element,g,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=D.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return i.enableDismissTrigger(D),t.defineJQueryPlugin(D),D}))},8557:function(t,e,s){"use strict";function i(t){return{all:t=t||new Map,on:function(e,s){var i=t.get(e);i?i.push(s):t.set(e,[s])},off:function(e,s){var i=t.get(e);i&&(s?i.splice(i.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var i=t.get(e);i&&i.slice().map((function(t){t(s)})),(i=t.get("*"))&&i.slice().map((function(t){t(e,s)}))}}}s.d(e,{Z:function(){return o}});const a=i();var o=a},4511:function(t,e,s){"use strict";s.d(e,{Z:function(){return _}});var i=s(3396),a=s(7139);const o={"aria-label":"breadcrumb"},n={class:"breadcrumb"},r={class:"breadcrumb-item"},c=(0,i.Uk)("首頁"),l={class:"breadcrumb-item",style:{width:"105px"}},u=(0,i.Uk)("商品列表"),d={key:0,class:"breadcrumb-item"},h={class:"active"};function g(t,e,s,g,m,p){const f=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",o,[(0,i._)("ol",n,[(0,i._)("li",r,[(0,i.Wm)(f,{to:"/user/index"},{default:(0,i.w5)((()=>[c])),_:1})]),(0,i._)("li",l,[(0,i.Wm)(f,{to:"/user/productlist"},{default:(0,i.w5)((()=>[u])),_:1})]),s.title?((0,i.wg)(),(0,i.iD)("li",d,[(0,i._)("a",h,(0,a.zw)(s.title),1)])):(0,i.kq)("",!0)])])}var m={props:["title"]},p=s(89);const f=(0,p.Z)(m,[["render",g]]);var _=f},3235:function(t,e,s){"use strict";s.d(e,{Z:function(){return h}});var i=s(3396),a=s.p+"img/logo2.6e1c6a3f.png";const o={class:"bg-dark"},n=(0,i.uE)('<div class="container-fluid"><div class="copyright"><div class="copyright-context"><img src="'+a+'" alt=""><p> © 2022 TD_STORE 本網站僅供個人作品使用，不提供商業用途 </p></div></div><div class="author"><p> 作者資訊 </p></div></div>',1),r=[n];function c(t,e,s,a,n,c){return(0,i.wg)(),(0,i.iD)("footer",o,r)}var l={},u=s(89);const d=(0,u.Z)(l,[["render",c]]);var h=d},7467:function(t,e,s){"use strict";s.d(e,{Z:function(){return v}});var i=s(3396),a=s(7139),o=s(9242);const n={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},c={class:"page-item"},l=(0,i._)("span",{"aria-hidden":"true"},"«",-1),u=[l],d=["onClick"],h={class:"page-link",href:"#"},g={class:"page-item"},m=(0,i._)("span",{"aria-hidden":"true"},"»",-1),p=[m];function f(t,e,s,l,m,f){return(0,i.wg)(),(0,i.iD)("nav",n,[(0,i._)("ul",r,[(0,i._)("li",c,[(0,i._)("a",{class:(0,a.C_)(["page-link",{disabled:1==s.nowpage}]),href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)((t=>f.updatePage(s.nowpage-1)),["prevent"]))},u,2)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.pages,(t=>((0,i.wg)(),(0,i.iD)("li",{class:(0,a.C_)(["page-item",{active:t==s.nowpage}]),key:t,onClick:(0,o.iM)((e=>f.updatePage(t)),["prevent"])},[(0,i._)("a",h,(0,a.zw)(t),1)],10,d)))),128)),(0,i._)("li",g,[(0,i._)("a",{class:(0,a.C_)(["page-link",{disabled:s.nowpage==s.pages}]),href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.iM)((t=>f.updatePage(s.nowpage+1)),["prevent"]))},p,2)])])])}var _={props:["pages","nowpage","isCategory"],methods:{updatePage(t){t===this.nowpage?this.$emit("changepage",t):(this.$emit("changepage",t),this.$emit("onTop"))}}},w=s(89);const y=(0,w.Z)(_,[["render",f]]);var v=y},43:function(t,e,s){"use strict";s.d(e,{Z:function(){return P}});var i=s(3396);const a={class:"toast-container position-absolute pe-3 top-0 end-0"};function o(t,e,s,o,n,r){const c=(0,i.up)("Toast");return(0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.messages,((t,e)=>((0,i.wg)(),(0,i.j4)(c,{key:e,msg:t},null,8,["msg"])))),128))])}var n=s(7139);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={class:"toast-header"},l={class:"me-auto"},u=(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),d={key:0,class:"toast-body"};function h(t,e,s,a,o,h){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",c,[(0,i._)("span",{class:(0,n.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,i._)("strong",l,(0,n.zw)(s.msg.title),1),u]),s.msg.content?((0,i.wg)(),(0,i.iD)("div",d,(0,n.zw)(s.msg.content),1)):(0,i.kq)("",!0)],512)}var g=s(8803),m=s.n(g),p={name:"Toast",props:["msg"],mounted(){const t=this.$refs.toast,e=new(m())(t,{delay:6e3});e.show()}},f=s(89);const _=(0,f.Z)(p,[["render",h]]);var w=_,y={components:{Toast:w},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:i}=t;this.messages.push({style:e,title:s,content:i})}))}};const v=(0,f.Z)(y,[["render",o]]);var P=v},938:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return E}});var i=s(3396),a=s(7139),o=s(9242);const n={class:"header",ref:"header"},r={class:"header"},c=(0,i._)("img",{src:"https://dlcdnwebimgs.asus.com/gain/F3ADB159-24F6-4C9C-941A-BB998C7F5682/fwebp",alt:""},null,-1),l=(0,i._)("a",{href:"https://www.asus.com/tw/events/infoM/3472/"},[(0,i._)("img",{src:"https://www.asus.com/events/eventes/epic/3472_1900.jpg",alt:""})],-1),u=(0,i._)("img",{src:"https://dlcdnwebimgs.asus.com/gain/FA0E1264-D4F9-40F6-9861-CD60D40C24CF/fwebp",alt:""},null,-1),d={class:"product"},h={class:"list"},g={class:"card bg-dark text-white",style:{width:"100%"}},m=(0,i._)("div",{class:"card-header"},"商品分類",-1),p={class:"list-group list-group-flush"},f=["onClick"],_={class:"products"},w={class:"productList"},y=["src","alt","title"],v={class:"card-body"},P={class:"card-text"},b={class:"origin-price"},C={class:"price"},D={class:"footer-button"},L={class:"detail"},k=["onClick"],x=(0,i._)("div",{class:"add-cart"},[(0,i._)("button",{class:"btn btn-primary"},"加入購物車")],-1),T={class:"pagination"};function $(t,e,s,$,M,Z){const I=(0,i.up)("Loading"),W=(0,i.up)("ToastMessage"),F=(0,i.up)("router-view"),z=(0,i.up)("swiper-slide"),H=(0,i.up)("swiper"),j=(0,i.up)("Breadcrumb"),q=(0,i.up)("marquee"),E=(0,i.up)("Pagination2"),O=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(I,{active:M.isLoading},null,8,["active"]),(0,i.Wm)(W),(0,i.Wm)(F),(0,i._)("section",n,[(0,i._)("div",r,[(0,i.Wm)(H,{spaceBetween:30,modules:$.modules,class:"mySwiper",loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}},{default:(0,i.w5)((()=>[(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[u])),_:1})])),_:1},8,["modules"])])],512),(0,i.Uk)(" "+(0,a.zw)(M.EmitData)+" ",1),(0,i._)("section",d,[(0,i._)("div",h,[(0,i.Wm)(j),(0,i._)("div",g,[m,(0,i._)("ul",p,[(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active2:"所有商品"===M.nowChoose}]),onClick:e[0]||(e[0]=(0,o.iM)((t=>Z.categoryData("所有商品")),["prevent"]))}," 所有商品 ",2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(M.category,(t=>((0,i.wg)(),(0,i.iD)("li",{class:(0,a.C_)(["list-group-item",{active2:t===M.nowChoose}]),key:t,onClick:(0,o.iM)((e=>Z.categoryData(t)),["prevent"])},(0,a.zw)(t),11,f)))),128))])])]),(0,i._)("div",_,[(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(M.showProducts,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"card",style:{width:"17rem"},key:t.id},[(0,i._)("img",{src:t.imageUrl,class:"card-img-top",alt:t.title,title:t.title},null,8,y),(0,i._)("div",v,[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.content),1)])),_:2},1024),(0,i._)("h5",{class:(0,a.C_)(["card-title",{"fs-6":t.title.length>=45,"fs-5":t.title.length>=35,"fs-4":t.title.length<15}]),style:{color:"black"}},(0,a.zw)(t.title),3),(0,i._)("div",P,[(0,i._)("small",b,"原價"+(0,a.zw)(t.origin_price),1),(0,i._)("p",C,"優惠價$"+(0,a.zw)(t.price),1)]),(0,i._)("div",D,[(0,i._)("div",L,[(0,i._)("button",{class:"btn btn-secondary",onClick:e=>Z.ProductDetail(t.id)}," 詳細資訊 ",8,k)]),x])])])))),128))]),(0,i._)("div",T,[(0,i.Wm)(E,{pages:M.totalPage,nowpage:M.nowPage,isCategory:M.isCategory,onChangepage:Z.updateData,onOnTop:Z.onTop},null,8,["pages","nowpage","isCategory","onChangepage","onOnTop"])])])]),(0,i.Wm)(O)],64)}var M=s(8170),Z=s(8557),I=s(43),W=s(3235),F=s(7467),z=s(4511),H={data(){return{Products:{},isLoading:!1,nowPage:1,maxProductLen:12,showProducts:{},totalPage:1,category:[],isCategory:!1,nowChoose:"所有商品",EmitData:"",categoryProduct:{}}},props:["query"],setup(){return{modules:[M.pt,M.tl,M.W_,M.lI]}},components:{ToastMessage:I.Z,Footer:W.Z,Pagination2:F.Z,Breadcrumb:z.Z},provide(){return{emitter:Z.Z}},methods:{getData(t=1){this.nowPage=t,this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/toad-api/products/all";this.$http.get(e).then((t=>{if(t.data.success){this.Products=t.data.products;const e=this.nowPage*this.maxProductLen-this.maxProductLen+1;this.showProducts=this.Products.slice(e-1,this.maxProductLen*this.nowPage),this.category=this.Products.map((t=>t.category)),this.category=this.category.filter(((t,e,s)=>s.indexOf(t)===e)),this.totalPage=Math.ceil(this.Products.length/this.maxProductLen),this.isLoading=!1}}))},categoryGetData(t,e=1){this.nowPage=e,this.isLoading=!0;const s="https://vue3-course-api.hexschool.io/api/toad-api/products/all";this.$http.get(s).then((e=>{if(e.data.success){this.Products=e.data.products;const s=this.nowPage*this.maxProductLen-this.maxProductLen+1;this.showProducts=this.Products.slice(s-1,this.maxProductLen*this.nowPage),this.category=this.Products.map((t=>t.category)),this.category=this.category.filter(((t,e,s)=>s.indexOf(t)===e)),this.categoryData(t),this.isLoading=!1}}))},updateData(t){if(this.isCategory)this.categoryUpdate(t);else{this.nowPage=t;const e=this.nowPage*this.maxProductLen-this.maxProductLen+1;this.showProducts=this.Products.slice(e-1,this.maxProductLen*this.nowPage),this.totalPage=Math.ceil(this.Products.length/this.maxProductLen)}},ProductDetail(t){this.$router.push(`/user/product/${t}`)},categoryData(t){if(this.nowPage=1,"所有商品"===t)this.emitter.emit("now-category",t),this.cFalse(),this.updateData(1);else{this.emitter.emit("now-category",t),this.isCategory=!0,this.nowChoose=t,this.categoryProduct=this.Products.filter((e=>e.category===t));const e=this.nowPage*this.maxProductLen-this.maxProductLen+1;this.showProducts=this.categoryProduct.slice(e-1,this.maxProductLen*this.nowPage),this.totalPage=Math.ceil(this.categoryProduct.length/this.maxProductLen)}},categoryUpdate(t){this.nowPage=t;const e=this.nowPage*this.maxProductLen-this.maxProductLen+1;this.showProducts=this.categoryProduct.slice(e-1,this.maxProductLen*this.nowPage)},cFalse(){this.nowChoose="所有商品",this.isCategory=!1},onTop(){window.document.body.scrollTop=this.$refs.header.offsetHeight,window.document.documentElement.scrollTop=this.$refs.header.offsetHeight}},inject:["emitter"],created(){this.query?this.categoryGetData(this.query):this.getData()},mounted(){this.emitter.on("push-category",(t=>{this.categoryData(t)}))}},j=s(89);const q=(0,j.Z)(H,[["render",$]]);var E=q}}]);
//# sourceMappingURL=297.17087345.js.map