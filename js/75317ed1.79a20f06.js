(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["75317ed1"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/^-?[0-9]*$/);t.default=i},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})};t.default=i},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})};t.default=i},"386d":function(e,t,r){"use strict";var n=r("cb7c"),i=r("83a1"),o=r("5f1b");r("214f")("search",1,function(e,t,r,a){return[function(r){var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n):new RegExp(r)[t](String(n))},function(e){var t=a(r,e,this);if(t.done)return t.value;var u=n(e),s=String(this),c=u.lastIndex;i(c,0)||(u.lastIndex=0);var d=o(u,s);return i(u.lastIndex,c)||(u.lastIndex=c),null===d?-1:d.index}]})},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,o=(0,n.regex)("email",i);t.default=o},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)})};t.default=i},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",i);t.default=o},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;var u=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=u;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var c=function(e,t){return(0,n.default)({type:e},function(e){return!a(e)||t.test(e)})};t.regex=c},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,THEME:"mat",MODE:"spa",VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)})};t.default=i;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},9621:function(e,t,r){"use strict";var n=r("d05d"),i=r.n(n);i.a},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=i},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return q.default}}),t.helpers=void 0;var n=w(r("6235")),i=w(r("3a54")),o=w(r("45b8")),a=w(r("ec11")),u=w(r("5d75")),s=w(r("c99d")),c=w(r("91d3")),d=w(r("2a12")),l=w(r("5db3")),f=w(r("d4f4")),m=w(r("aa82")),p=w(r("e652")),h=w(r("b6cb")),g=w(r("772d")),v=w(r("d294")),b=w(r("3360")),y=w(r("6417")),P=w(r("eb66")),_=w(r("46bc")),$=w(r("1331")),q=w(r("c301")),O=j(r("78ef"));function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)});t.default=i;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e(function(){})},o=n.vuelidate?n.vuelidate.withParams:i;t.withParams=o}).call(this,r("c8ba"))},d05d:function(e,t,r){},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},n.req);t.default=i},dc08:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("q-input",{staticClass:"q-mb-lg",attrs:{"float-label":"Search Product"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),r("div",{staticClass:"col-12 q-my-lg"},[r("q-list",{attrs:{highlight:"","inset-separator":""}},e._l(e.filterItems,function(t){return r("q-item",{key:t.id},[r("q-item-side",{attrs:{image:t.imageSrc}}),r("q-item-main",{attrs:{label:t.productName,sublabel:t.prize}}),r("q-item-side",{attrs:{right:""}},[r("q-btn",{staticClass:"q-mx-sm",attrs:{round:"",color:"green",icon:"edit"},on:{click:function(r){e.editItem(t)}}}),r("q-btn",{attrs:{round:"",color:"red",icon:"delete"},on:{click:function(r){e.deleteItem(t)}}})],1)],1)}))],1),r("q-pagination",{attrs:{"direction-links":"","boundary-links":"",elipses:"",size:"19px","max-pages":3,min:1,max:e.pageCount},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),r("q-modal",{attrs:{"no-backdrop-dismiss":"","content-css":{minWidth:"80vw",minHeight:"60vh"}},on:{"escape-key":e.cancelItem},model:{value:e.opened,callback:function(t){e.opened=t},expression:"opened"}},[r("div",{staticClass:"q-ma-xl"},[r("h4",[e._v(e._s(e.isAdd?"Add Item":"Edit Item"))]),r("q-input",{attrs:{"float-label":e.$v.items.productName.$error?"Product Required":"Product Name",error:e.$v.items.productName.$error},on:{blur:e.$v.items.productName.$touch},model:{value:e.items.productName,callback:function(t){e.$set(e.items,"productName",t)},expression:"items.productName"}}),r("q-input",{attrs:{type:"textarea",rows:"5","max-height":8,"float-label":e.$v.items.details.$error?"Details Required":"Product Details",error:e.$v.items.details.$error},on:{blur:e.$v.items.details.$touch},model:{value:e.items.details,callback:function(t){e.$set(e.items,"details",t)},expression:"items.details"}}),r("q-input",{attrs:{"float-label":e.$v.items.prize.$error?"Prize Required":"Product Prize",error:e.$v.items.prize.$error},on:{blur:e.$v.items.prize.$touch},model:{value:e.items.prize,callback:function(t){e.$set(e.items,"prize",t)},expression:"items.prize"}}),r("q-uploader",{ref:"uploader",attrs:{"float-label":e.$v.image.$error?"Image is required!":"Image",error:e.$v.image.$error,url:"","hide-upload-button":"","hide-upload-progress":"",extensions:"image/*"},on:{blur:e.$v.image.$touch,add:e.imgAdded,"remove:cancel":e.imgRemoved}}),r("br"),r("q-btn",{attrs:{color:"red",label:"Close"},on:{click:e.cancelItem}}),r("q-btn",{staticClass:"float-right",attrs:{color:"green",label:e.isAdd?"Add Product":"Update Product"},on:{click:e.uploadImg}})],1)]),r("q-btn",{staticClass:"q-ma-lg fixed-bottom-right",attrs:{round:"",icon:"add",color:"green",size:"xl"},on:{click:e.openItem}})],1)},i=[];n._withStripped=!0;r("7f7f"),r("386d");var o=r("b5ae"),a={name:"products",data:function(){return{items:{details:"",imageSrc:"",prize:"",productName:"",ref:""},search:"",products:[],image:null,key:null,opened:!1,isAdd:!0,perPageCount:4,page:1}},validations:{items:{details:{required:o["required"]},prize:{required:o["required"]},productName:{required:o["required"]}},image:{required:o["required"]}},computed:{filterItems:function(){var e=this;if(0!==this.products.length){var t=(this.page-1)*this.perPageCount,r=t+this.perPageCount;return this.products.slice(t,r).filter(function(t){return-1!==t.productName.toLowerCase().indexOf(e.search.toLowerCase())})}},pageCount:function(){return this.search.toLowerCase()<1?Math.ceil(this.products.length/this.perPageCount):Math.ceil(this.filterItems.length/this.perPageCount)}},created:function(){this.$bindAsArray("products",this.$productRef)},methods:{editItem:function(e){this.opened=!0,this.isAdd=!1,this.key=e[".key"],this.items.productName=e.productName,this.items.imageSrc=e.imageSrc,this.items.prize=e.prize,this.items.details=e.details,this.items.ref=e.ref,console.log("key",this.key)},cancelItem:function(){this.$v.$reset(),this.opened=!1,this.key=null,this.items.productName="",this.items.imageSrc="",this.items.prize="",this.items.details="",this.$refs.uploader.clear(),this.$refs.uploader.reset(),this.image=null},openItem:function(){this.opened=!0,this.isAdd=!0},imgAdded:function(e){this.image=e[0],console.log("image",this.image),console.log("image",this.image.name),console.log("size in kilobytes",this.image.size/1e3)},imgRemoved:function(){this.image=null},deleteItem:function(e){var t=this;this.$q.dialog({title:"Prompt",message:'Do you want to Delete Product "'.concat(e.productName,'"?'),cancel:!0,color:"secondary"}).then(function(){t.$productRef.child(e[".key"]).remove().then(function(){t.$q.notify({type:"info",color:"positive",timeout:2e3,message:e.productName+" has been Deleted"})}).then(function(){t.cancelItem()}).catch(function(e){t.$q.notify({type:"negative",color:"negative",timeout:2e3,message:e.errorCode+" : "+e.errorMessage})})}).catch(function(){})},uploadImg:function(){var e=this;if(this.$v.items.$touch(),!1===this.$v.items.$error)if(!0===this.isAdd)if(this.$v.image.$touch(),!1===this.$v.image.$error){this.$q.loading.show({message:"Adding Product. Please wait!",spinnerSize:250,spinnerColor:"blue"}),this.items.ref="img/products/".concat(this.items.productName);var t=this.$storage.ref().child("img/products/"+this.items.productName),r=t.put(this.image);r.on("state_changed",function(){},function(e){console.log("this is error state change",e)},function(){r.snapshot.ref.getDownloadURL().then(function(t){console.log("New File available at",t),e.items.imageSrc=t,e.addItem()})})}else this.$q.notify({type:"negative",color:"negative",timeout:2e3,message:"Error! Fields Required"});else if(console.log("else image",this.image),null!==this.image){this.$q.loading.show({message:"Updating Product. Please Wait!",spinnerSize:250,spinnerColor:"blue"}),this.$storage.ref().child(this.items.ref).delete(),this.items.ref="img/products/".concat(this.items.productName),console.log("imageref",this.items.ref);var n=this.$storage.ref().child("img/products/"+this.items.productName),i=n.put(this.image);i.on("state_changed",function(){},function(e){console.log("this is error state change",e)},function(){i.snapshot.ref.getDownloadURL().then(function(t){console.log("Update File available at",t),e.items.imageSrc=t,e.updateItem()})})}else this.updateItem();else this.$q.notify({type:"negative",color:"negative",timeout:2e3,message:"Error! Fields Required"})},addItem:function(){var e=this;this.$productRef.push(this.items).then(function(){e.$q.notify({type:"info",color:"positive",message:e.items.productName+" has been Added"})}).then(function(){e.$q.loading.hide(),e.cancelItem()}).catch(function(t){e.$q.notify({type:"negative",color:"negative",message:t.errorCode+" : "+t.errorMessage})})},updateItem:function(){var e=this;this.$productRef.child(this.key).update(this.items).then(function(){e.$q.notify({type:"info",color:"positive",timeout:2e3,message:e.items.productName+" has been Updated"})}).then(function(){e.cancelItem(),e.$q.loading.hide()}).catch(function(t){e.$q.notify({type:"negative",color:"negative",timeout:2e3,message:t.errorCode+" : "+t.errorMessage})})}}},u=a,s=(r("9621"),r("2877")),c=Object(s["a"])(u,n,i,!1,null,null,null);c.options.__file="products.vue";t["default"]=c.exports},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})};t.default=i}}]);