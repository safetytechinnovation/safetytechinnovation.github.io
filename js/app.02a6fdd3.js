(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var r=n("fb1c"),a=n.n(r);a.a},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var r=n("2b0e"),a=n("e84f"),o=n("7051"),u=n("2040"),i=n("cf12"),c=n("46a9"),s=n("32a1"),p=n("7646"),f=n("6580"),d=n("3a08"),l=n("dc23"),h=n("3054"),m=n("6ddb"),b=n("79e9"),Q=n("5d8b"),g=n("f30c"),v=n("ce67"),w=n("b70a"),y=n("7668"),A=n("482e"),q=n("9e58"),S=n("52b5"),R=n("1180"),I=n("1e55"),$=n("506f"),C=n("9541"),L=n("2f48"),x=n("93f5"),U=n("b8d9"),j=n("7d43"),T=n("0952"),k=n("e9e5"),D=n("5931"),E=n("1526"),M=n("133b"),_=n("a9a0"),B=n("6780");r["a"].use(a["a"],{config:{},components:{QLayout:o["a"],QLayoutHeader:u["a"],QLayoutDrawer:i["a"],QPageContainer:c["a"],QPage:s["a"],QCard:p["a"],QCardTitle:f["a"],QCardMain:d["a"],QCardMedia:l["a"],QCardSeparator:h["a"],QCardActions:m["a"],QField:b["a"],QInput:Q["a"],QToolbar:g["a"],QToolbarTitle:v["a"],QSpinner:w["a"],QSpinnerMat:y["a"],QBtn:A["a"],QBtnDropdown:q["a"],QIcon:S["a"],QList:R["a"],QListHeader:I["a"],QItem:$["a"],QItemTile:C["a"],QUploader:L["a"],QScrollArea:x["a"],QItemMain:U["a"],QItemSide:j["a"],QModal:T["a"],QPagination:k["a"],QSelect:D["a"]},directives:{Ripple:E["a"]},plugins:{Notify:M["a"],Loading:_["a"],Dialog:B["a"]}});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},P=[];K._withStripped=!0;var F={name:"App"},O=F,z=(n("034f"),n("2877")),H=Object(z["a"])(O,K,P,!1,null,null,null);H.options.__file="App.vue";var J=H.exports,V=n("2f62"),X=(n("96cf"),n("c973")),Y=n.n(X),N=n("59ca"),W=n.n(N),G=(n("ea7b"),n("66ce"),n("588e"),n("5f30")),Z=n.n(G),ee=n("1dce"),te=n.n(ee),ne={apiKey:"AIzaSyCRqi1FoKA4tXFyEKa7SdywYnsjLY8gKXI",authDomain:"stifire-c6c2f.firebaseapp.com",databaseURL:"https://stifire-c6c2f.firebaseio.com",projectID:"stifire-c6c2f",storageBucket:"stifire-c6c2f.appspot.com",messagingSenderId:"466857491363"};W.a.initializeApp(ne);var re=W.a.auth(),ae=W.a.database(),oe=W.a.storage(),ue=ae.ref("homeTestimonial"),ie=ae.ref("products"),ce=ae.ref("inquiries"),se=ae.ref("homeLayout"),pe=ae.ref("contacts"),fe=ae.ref("projects"),de=ae.ref("newsSettings"),le=ae.ref("productSettings"),he=function(e){e.app;var t=e.router,n=e.Vue,r=e.store;n.use(Z.a),n.use(te.a),n.prototype.$newsRef=ue,n.prototype.$storage=oe,n.prototype.$productRef=ie,n.prototype.$inquireRef=ce,n.prototype.$layoutRef=se,n.prototype.$contactRef=pe,n.prototype.$newsSettings=de,n.prototype.$productSettings=le,n.prototype.$projectRef=fe,t.beforeEach(function(e,t,n){var a=e.matched.some(function(e){return e.meta.requiresAuth});re.onAuthStateChanged(function(e){a?e?(r.state.user=e,n()):(r.state.user=null,n("/")):e?(r.state.user=e,n("/header")):(r.state.user=null,n())})})},me={namespaced:!0,state:{user:{}},getters:{user:function(e){return e.user}},mutations:{setUser:function(e,t){e.user=t},resetUser:function(e){e.user=null}},actions:{signIn:function(){var e=Y()(regeneratorRuntime.mark(function e(t,n){var r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.email,o=n.password,e.next=5,re.signInWithEmailAndPassword(a,o).then(function(e){r("setUser",e.user)}).catch(function(e){throw r("resetUser"),e});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),signOut:function(){var e=Y()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,re.signOut().then(function(){n("resetUser")});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}};r["a"].use(V["a"]);var be=function(){var e=new V["a"].Store({modules:{auth:me}});return e},Qe=n("8c4f"),ge=[{path:"/",component:function(){return n.e("32a5c660").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("69e31901").then(n.bind(null,"c6f7"))},meta:{requiresAuth:!1}}]},{path:"",component:function(){return n.e("32a5c660").then(n.bind(null,"f241"))},children:[{path:"/header",component:function(){return n.e("c4b56d8a").then(n.bind(null,"f15b"))},meta:{requiresAuth:!0}},{path:"/news",component:function(){return n.e("10df515c").then(n.bind(null,"6078"))},meta:{requiresAuth:!0}},{path:"/products",component:function(){return n.e("9534668e").then(n.bind(null,"dc08"))},meta:{requiresAuth:!0}},{path:"/projects",component:function(){return n.e("b6c5d0a8").then(n.bind(null,"e00e"))},meta:{requiresAuth:!0}},{path:"/inquiries",component:function(){return n.e("b41cd076").then(n.bind(null,"4dc8"))},meta:{requiresAuth:!0}},{path:"/settings",component:function(){return n.e("2e945104").then(n.bind(null,"c52c"))},meta:{requiresAuth:!0}},{path:"/inquiries/:id",component:function(){return n.e("609e08a0").then(n.bind(null,"54ea"))},meta:{requiresAuth:!0}}]},{path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}}];ge.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var ve=ge;r["a"].use(Qe["a"]);var we=function(){var e=new Qe["a"]({scrollBehavior:function(){return{y:0}},routes:ve,mode:"history",base:"/"});return e},ye=function(){var e="function"===typeof be?be():be,t="function"===typeof we?we({store:e}):we;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(J)}};return{app:n,store:e,router:t}},Ae=ye(),qe=Ae.app,Se=Ae.store,Re=Ae.router;[he].forEach(function(e){e({app:qe,router:Re,store:Se,Vue:r["a"],ssrContext:null})}),new r["a"](qe)},"7e6d":function(e,t,n){},fb1c:function(e,t,n){}},[[0,"runtime","vendor"]]]);