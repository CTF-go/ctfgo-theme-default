(function(e){function t(t){for(var o,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-018ee30c":"84d4bc97","chunk-18d1a3e1":"026b5e7d","chunk-1d3b1ab7":"c19c80d2","chunk-4177b96a":"991ee38e","chunk-77e1b5ca":"bd66e9ce","chunk-b9cfbb7a":"43dccf57","chunk-c57e261c":"cc632c3e","chunk-c7a6bd3c":"500d0121"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-018ee30c":1,"chunk-18d1a3e1":1,"chunk-1d3b1ab7":1,"chunk-4177b96a":1,"chunk-77e1b5ca":1,"chunk-b9cfbb7a":1,"chunk-c57e261c":1,"chunk-c7a6bd3c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-018ee30c":"f00aeced","chunk-18d1a3e1":"c19067b7","chunk-1d3b1ab7":"0dca8d15","chunk-4177b96a":"176edd6f","chunk-77e1b5ca":"aeb1129b","chunk-b9cfbb7a":"145326ab","chunk-c57e261c":"ad9b3312","chunk-c7a6bd3c":"076ac8a8"}[e]+".css",i=s.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===o||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],p.parentNode.removeChild(p),n(a)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"016a":function(e,t,n){},"16ab":function(e,t,n){"use strict";n("6557")},2618:function(e,t,n){},"273a":function(e,t,n){"use strict";n("2618")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),r=n("ecee"),i=n("c074"),a=n("ad3d");r["d"].add(i["e"]),o["default"].component("font-awesome-icon",a["a"]);n("d3b7");var c=n("bc3a"),s=n.n(c),u={},l=s.a.create(u);l.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=l,window.axios=l,Object.defineProperties(e.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},o["default"].use(Plugin);Plugin;var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},p=[],m=n("2877"),f={},h=Object(m["a"])(f,d,p,!1,null,null,null),v=h.exports,b=(n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navbar"),n("router-view")],1)},k=[],w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"center examplex"},[o("vs-navbar",{attrs:{color:"#24292e","text-white":"",square:"","center-collapsed":""},scopedSlots:e._u([{key:"left",fn:function(){return[o("img",{attrs:{src:n("cf05"),alt:""}})]},proxy:!0},{key:"right",fn:function(){return[void 0==e.username||""==e.username?o("div",[o("vs-button",{attrs:{color:"#fff",border:""},on:{click:function(t){e.signinForm.active=!e.signinForm.active}}},[e._v("Login")])],1):o("div",[o("menu-dropdown",{attrs:{username:e.username}})],1)]},proxy:!0}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[o("vs-navbar-item",{attrs:{active:"/home"==e.active,id:"/home"},on:{click:function(t){return e.pushRouter("/home")}}},[e._v(" Home ")]),o("vs-navbar-item",{attrs:{active:"/notices"==e.active,id:"/notices"},on:{click:function(t){return e.pushRouter("/notices")}}},[e._v(" Notices ")]),o("vs-navbar-item",{attrs:{active:"/scoreboard"==e.active,id:"/scoreboard"},on:{click:function(t){return e.pushRouter("/scoreboard")}}},[e._v(" Scoreboard ")]),o("vs-navbar-item",{attrs:{active:"/challenges"==e.active,id:"/challenges"},on:{click:function(t){return e.pushRouter("/challenges")}}},[e._v(" Challenges ")]),e.admin?o("vs-navbar-item",{attrs:{active:"/dashboard"==e.active,id:"/dashboard"},on:{click:function(t){return e.pushRouter("/dashboard")}}},[e._v(" Dashboard ")]):e._e()],1),o("div",{staticClass:"center"},[o("vs-dialog",{attrs:{blur:""},scopedSlots:e._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[e._v(" Welcome to "),o("b",[e._v("CTFgo")])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"footer-dialog"},[o("vs-button",{attrs:{block:""},on:{click:function(t){return e.signin()}}},[e._v(" Sign In ")]),o("div",{staticClass:"new"},[o("vs-button",{attrs:{transparent:"",active:1==e.signupForm.active},on:{click:function(t){return e.loadSignupForm()}}},[e._v(" New Here? Create New Account ")])],1)],1)]},proxy:!0}]),model:{value:e.signinForm.active,callback:function(t){e.$set(e.signinForm,"active",t)},expression:"signinForm.active"}},[o("div",{staticClass:"con-form"},[o("vs-input",{attrs:{placeholder:"Username or email address"},model:{value:e.signinForm.submit.username,callback:function(t){e.$set(e.signinForm.submit,"username",t)},expression:"signinForm.submit.username"}}),o("vs-input",{attrs:{placeholder:"Password",type:"password"},model:{value:e.signinForm.submit.password,callback:function(t){e.$set(e.signinForm.submit,"password",t)},expression:"signinForm.submit.password"}}),o("div",{staticClass:"flex"},[o("vs-checkbox",{model:{value:e.rememberme,callback:function(t){e.rememberme=t},expression:"rememberme"}},[e._v("Remember me")]),o("vs-button",{attrs:{transparent:"",active:1==e.forgotForm.active},on:{click:function(t){e.forgotForm.active=!e.forgotForm.active}}},[e._v(" Forgot Password? ")])],1)],1),o("vs-dialog",{attrs:{blur:""},scopedSlots:e._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[e._v(" Create Account to Register ")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"footer-dialog"},[o("vs-button",{attrs:{block:""},on:{click:function(t){return e.signup()}}},[e._v(" Sign Up ")])],1)]},proxy:!0}]),model:{value:e.signupForm.active,callback:function(t){e.$set(e.signupForm,"active",t)},expression:"signupForm.active"}},[o("div",{staticClass:"con-form"},[o("vs-input",{attrs:{placeholder:"Email"},model:{value:e.signupForm.submit.email,callback:function(t){e.$set(e.signupForm.submit,"email",t)},expression:"signupForm.submit.email"}}),o("vs-input",{attrs:{placeholder:"Username"},model:{value:e.signupForm.submit.username,callback:function(t){e.$set(e.signupForm.submit,"username",t)},expression:"signupForm.submit.username"}}),o("vs-input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.signupForm.submit.password,callback:function(t){e.$set(e.signupForm.submit,"password",t)},expression:"signupForm.submit.password"}}),o("vs-input",{attrs:{type:"checkPassword",placeholder:"Confirm Password"},model:{value:e.signupForm.checkPassword,callback:function(t){e.$set(e.signupForm,"checkPassword",t)},expression:"signupForm.checkPassword"}}),o("div",{staticStyle:{width:"100px"}},[o("vs-input",{staticStyle:{width:"100px"},attrs:{placeholder:"Auth Code"},model:{value:e.signupForm.solution,callback:function(t){e.$set(e.signupForm,"solution",t)},expression:"signupForm.solution"}})],1),o("div",{staticClass:"authcode-img"},[o("img",{staticStyle:{height:"40px"},attrs:{src:e.signupForm.image,alt:"验证码图片"},on:{click:function(t){return e.getCaptchaID()}}})])],1)]),o("vs-dialog",{attrs:{blur:""},scopedSlots:e._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[e._v(" Find Password ")])]},proxy:!0}]),model:{value:e.forgotForm.active,callback:function(t){e.$set(e.forgotForm,"active",t)},expression:"forgotForm.active"}},[o("div",[o("h2",[e._v("爬，密码都能忘？💩")])])])],1)],1)],1)},F=[],x=n("1da1"),y=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vs-button",{attrs:{color:"#fff",flat:""},on:{click:function(t){return e.show()}}},[e._v("Hi, "+e._s(e.username))]),n("div",{staticClass:"menu__items"},[e.toggle?n("ul",[n("button",{on:{click:function(t){return e.pushRouter("/profile")}}},[e._v("Profile")]),n("button",{on:{click:function(t){return e.pushRouter("/team")}}},[e._v("Team")]),n("button",{on:{click:function(t){return e.pushRouter("/settings")}}},[e._v("Settings")]),n("div",{staticClass:"dropdown-divider",attrs:{role:"none"}}),n("button",[e._v("Sign out")])]):e._e()])],1)}),_=[],C={props:{username:{type:String,default:"Not Found"}},data:function(){return{toggle:!1}},methods:{show:function(){document.addEventListener("click",this.hideMenu)},pushRouter:function(e){e!=window.location.pathname&&this.$router.push(e)},hideMenu:function(e){this.toggle=!this.toggle,this.toggle||document.removeEventListener("click",this.hideMenu)}}},P=C,S=(n("a429"),Object(m["a"])(P,y,_,!1,null,"3126cef9",null)),$=S.exports,j={name:"Navbar",components:{MenuDropdown:$},data:function(){return{username:"",admin:!0,active:"/home",rememberme:!1,signinForm:{active:!1,submit:{username:"",password:""}},signupForm:{active:!1,solution:"",checkPassword:"",image:"",id:"",submit:{email:"",username:"",password:""}},forgotForm:{active:!1,usermail:"",authcode:"",mailcode:""}}},methods:{pushRouter:function(e){e!=window.location.pathname&&this.$router.push(e)},loadSignupForm:function(){this.signupForm.active=!this.signupForm.active,this.getCaptchaID()},getCaptchaID:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/captcha");case 2:n=t.sent,o=n.data,200==o.code&&(e.signupForm.image="data:image/png;base64,"+o.data,e.signupForm.id=o.id);case 5:case"end":return t.stop()}}),t)})))()},signin:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/login",e.signinForm.submit);case 2:n=t.sent,o=n.data,200==o.code?(e.openNotification("🥳 Success!","Hi, "+o.username+". Welcome to CTFgo~"),e.username=o.username,e.signinForm.active=!1):e.openNotification("👎 Login failed!","Plese check your <strong>username</strong> or <strong>password</strong>.");case 6:case"end":return t.stop()}}),t)})))()},signup:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,o,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log({id:e.signupForm.id,solution:e.signupForm.solution}),t.next=3,e.$http.post("/captcha",{id:e.signupForm.id,solution:e.signupForm.solution});case 3:if(n=t.sent,o=n.data,200==o.code){t.next=8;break}return e.openNotification("👎 验证码都看不清？"),t.abrupt("return");case 8:return t.next=10,e.$http.post("/register",e.signupForm.submit);case 10:r=t.sent,i=r.data,200==i.code?e.openNotification("🥳 Congratulations～ Sign up success!"):1e3==i.code?e.openNotification("用户名重复"):1001==i.code?e.openNotification("邮箱重复"):e.openNotification("注册失败");case 14:case"end":return t.stop()}}),t)})))()},openNotification:function(e,t){this.$vs.notification({position:"top-center",title:e,text:t})}},created:function(){this.active=window.location.pathname}},O=j,N=(n("16ab"),n("f59e"),Object(m["a"])(O,w,F,!1,null,"5e680e9e",null)),R=N.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("a",[e._v("Copyright © 2021 CTFgo Development Team")])])}],L={name:"Footer"},A=L,D=(n("273a"),Object(m["a"])(A,E,T,!1,null,"dec54548",null)),M=D.exports,I={name:"Index",components:{Navbar:R,Footer:M}},H=I,U=Object(m["a"])(H,g,k,!1,null,null,null),q=U.exports;o["default"].use(b["a"]);var B=[{path:"/",redirect:"/home",name:"Index",component:q,children:[{path:"home",component:function(){return n.e("chunk-1d3b1ab7").then(n.bind(null,"bb51"))}},{path:"notices",component:function(){return n.e("chunk-c57e261c").then(n.bind(null,"ccc4"))}},{path:"scoreboard",component:function(){return n.e("chunk-c7a6bd3c").then(n.bind(null,"3cb4"))}},{path:"challenges",component:function(){return n.e("chunk-018ee30c").then(n.bind(null,"4bec"))}},{path:"dashboard",component:function(){return n.e("chunk-18d1a3e1").then(n.bind(null,"7277"))}},{path:"/profile",component:function(){return n.e("chunk-4177b96a").then(n.bind(null,"c66d"))}},{path:"/team",component:function(){return n.e("chunk-b9cfbb7a").then(n.bind(null,"0767"))}},{path:"/settings",component:function(){return n.e("chunk-77e1b5ca").then(n.bind(null,"26d3"))}}]}],J=new b["a"]({mode:"history",base:"/",routes:B}),W=J,K=n("574d"),z=n.n(K);n("04f2"),n("c789");o["default"].use(z.a),r["b"].watch(),r["d"].add(i["d"],i["c"],i["b"]),o["default"].component("font-awesome-icon",a["a"]),s.a.defaults.baseURL="http://127.0.0.1:8081/v1/",o["default"].prototype.$http=s.a,o["default"].config.productionTip=!1,new o["default"]({router:W,render:function(e){return e(v)}}).$mount("#app")},6557:function(e,t,n){},9096:function(e,t,n){},a429:function(e,t,n){"use strict";n("9096")},cf05:function(e,t,n){e.exports=n.p+"img/logo.caaee648.png"},f59e:function(e,t,n){"use strict";n("016a")}});
//# sourceMappingURL=app.27ab4136.js.map