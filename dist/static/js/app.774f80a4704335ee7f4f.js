webpackJsonp([1],{"285i":function(t,n){},"3E6T":function(t,n,a){"use strict";var e=a("Dd8w"),s=a.n(e),i=a("NYxO"),c=a("Cz8s");n.a=s()({components:{BankHeader:c.a}},Object(i.b)({getUser:"getUserData"}),{created:function(){this.$store.dispatch("getUserData")}})},"3bYE":function(t,n,a){"use strict";var e=a("Cz8s");n.a={name:"Home",components:{BankHeader:e.a}}},"4I7M":function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.userData?a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("main",[a("h3",[t._v("Does everything look correct?")]),t._v(" "),a("div",{staticClass:"info-block"},[a("div",{staticClass:"info-left"},[a("h6",[t._v("Contact Information")]),t._v(" "),a("p",[t._v(t._s(t.userData.given_name))]),t._v(" "),a("p",[t._v(t._s(t.userData.family_name))]),t._v(" "),a("p",[t._v(t._s(t.userData.email))]),t._v(" "),a("p",[t._v(t._s(t.userData.phone_number))])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"info-block"},[a("div",{staticClass:"info-left"},[a("h6",[t._v("Home Address")]),t._v(" "),a("p",[t._v(t._s(t.userData.address.street_address))]),t._v(" "),a("p",[t._v(t._s(t.userData.address.locality+" "+t.userData.address.country))]),t._v(" "),a("p",[t._v(t._s(t.userData.address.postal_code))])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),a("router-link",{staticClass:"confirm-button",attrs:{to:"/account"}},[t._v("Confirm")])],1)]):t._e()},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("header",[a("div",{staticClass:"submenu"},[a("div",{staticClass:"profile-icon"})])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info-right"},[a("p",[t._v("Edit")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info-right"},[a("p",[t._v("Edit")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info-block"},[a("div",{staticClass:"info-left"},[a("h6",[t._v("Permanent Residence")]),t._v(" "),a("p",[t._v("United States")])]),t._v(" "),a("div",{staticClass:"info-right"},[a("p",[t._v("Edit")])])])}]},"4uLN":function(t,n,a){"use strict";function e(t){a("285i")}var s=a("HJtx"),i=a("Imve"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-701065e6",null);n.a=o.exports},"5ZUA":function(t,n){},"6IPz":function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"view-empty"},[t._v("\n  page not found "),a("router-link",{attrs:{to:"/"}},[t._v("back home")])],1)},s=[]},"6fGQ":function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"redirect-button",on:{click:function(n){t.redirectToURL()}}},[t._v("\n  Go back to the U.S. Bank app\n")])},s=[]},"73wl":function(t,n,a){"use strict";var e,s=a("bOdI"),i=a.n(s),c=a("mtWM"),r=a.n(c),o=a("VLWU"),u={signInQRCode:null,fetchedSignInQR:!1},v={},_=(e={},i()(e,o.a,function(t){t.fetchedSignInQR=!1}),i()(e,o.b,function(t){t.fetchedSignInQR=!1}),i()(e,o.c,function(t,n){t.fetchedSignInQR=!0,t.signInQRCode=n.appLink}),e),l={getSignInQRCode:function(t){var n=t.commit;n("QR_SIGN_IN_REQUEST"),r.a.post("/api/licenseRequest").then(function(t){t&&n("QR_SIGN_IN_REQUEST_SUCCEED",t.data)}).catch(function(t){console.error(t),n("QR_SIGN_IN_REQUEST_FAILED")})}};n.a={state:u,getters:v,mutations:_,actions:l}},"9+lz":function(t,n){},Cz8s:function(t,n,a){"use strict";function e(t){a("ttX3")}var s=a("wqBJ"),i=a("PmqF"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-ecc4710e",null);n.a=o.exports},Dgx1:function(t,n){},EFii:function(t,n){},FffS:function(t,n,a){"use strict";function e(t){a("jeGP")}var s=a("rz+E"),i=a("6fGQ"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-bdde08a6",null);n.a=o.exports},HJtx:function(t,n,a){"use strict";var e=a("Dd8w"),s=a.n(e),i=a("NYxO");n.a={computed:s()({},Object(i.c)(["userData"]))}},IcnI:function(t,n,a){"use strict";var e=a("7+uW"),s=a("NYxO"),i=a("sax8"),c=(a.n(i),a("bREw")),r=a("73wl");e.a.use(s.a);var o=new s.a.Store({modules:{User:c.a,QR:r.a},strict:!1,plugins:[]});n.a=o},Imve:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.userData?a("div",{staticClass:"container"},[a("main",[a("h3",[t._v("Welcome, "+t._s(t.userData.given_name)+"!")]),t._v(" "),a("p",[t._v("Choose one of the options below:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]):t._e()},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info-block"},[a("h4",[t._v("Past Transactions")]),t._v(" "),a("div",{staticClass:"arrow-icon"})])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info-block"},[a("h4",[t._v("My payments")]),t._v(" "),a("div",{staticClass:"arrow-icon"})])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info-block"},[a("h4",[t._v("Deposits")]),t._v(" "),a("div",{staticClass:"arrow-icon"})])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info-block"},[a("h4",[t._v("Recharge mobile")]),t._v(" "),a("div",{staticClass:"arrow-icon"})])}]},KWv7:function(t,n,a){"use strict";var e=a("O11y"),s=a("esL9"),i=a("s+bK"),c=a("PnOV"),r=a("yurm"),o=a("TBEP"),u=a("zahh"),v=a("FffS"),_=a("4uLN");n.a=[{path:"/",components:{default:s.a}},{path:"/accounts",components:{default:i.a}},{path:"/personal-account",components:{default:c.a}},{path:"/easy-checking",components:{default:r.a}},{path:"/profile",components:{default:o.a}},{path:"/account",components:{default:_.a}},{path:"/user-verified",components:{default:u.a}},{path:"/redirect",components:{default:v.a}},{path:"*",component:e.default}]},M93x:function(t,n,a){"use strict";function e(t){a("5ZUA")}var s=a("xJD8"),i=a("gGH2"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,null,null);n.a=o.exports},MPYx:function(t,n,a){"use strict";var e=a("Cz8s");n.a={components:{BankHeader:e.a}}},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("Dd8w"),s=a.n(e),i=a("7+uW"),c=a("IcnI"),r=a("YaEn"),o=a("9JMe"),u=a.n(o),v=a("M93x");i.a.config.productionTip=!1,u.a.sync(c.a,r.a),new i.a(s()({el:"app",router:r.a,store:c.a},v.a))},O11y:function(t,n,a){"use strict";function e(t){a("Dgx1")}var s=a("UuVd"),i=a.n(s),c=a("6IPz"),r=a("XyMi"),o=e,u=Object(r.a)(i.a,c.a,c.b,!1,o,null,null);n.default=u.exports},OfVs:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("main",[a("h3",[t._v("Enroll to Access Your Accounts")]),t._v(" "),a("p",{staticClass:"description"},[t._v("Activate your account - it only takes a few minutes")]),t._v(" "),a("section",{staticClass:"accounts"},[a("router-link",{staticClass:"account",attrs:{to:"/personal-account"}},[t._v("Personal "),a("div",{staticClass:"icon__arrow"})]),t._v(" "),t._m(0)],1)])])},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"account"},[t._v("Business "),a("div",{staticClass:"icon__arrow"})])}]},PmqF:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"header"},[a("div",{staticClass:"us-logo"})])}]},PnOV:function(t,n,a){"use strict";function e(t){a("iVEC")}var s=a("mn7Q"),i=a("Zlmt"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-2ac1273a",null);n.a=o.exports},TBEP:function(t,n,a){"use strict";function e(t){a("EFii")}var s=a("a9PU"),i=a("4I7M"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-ca6f7f4e",null);n.a=o.exports},TK6d:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"verified"},[a("div",{staticClass:"verified-icon"}),t._v(" "),a("h3",[t._v("Identity Verified! You will be redirected to you account in a minute\n      "),a("span",{staticClass:"dot"},[t._v(".")]),t._v(" "),a("span",{staticClass:"dot"},[t._v(".")]),t._v(" "),a("span",{staticClass:"dot"},[t._v(".")])])])])}]},UuVd:function(t,n){},VLWU:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"c",function(){return s}),a.d(n,"b",function(){return i}),a.d(n,"d",function(){return c}),a.d(n,"f",function(){return r}),a.d(n,"e",function(){return o});var e="QR_SIGN_IN_REQUEST",s="QR_SIGN_IN_REQUEST_SUCCEED",i="QR_SIGN_IN_REQUEST_FAILED",c="USER_DATA_REQUEST",r="USER_DATA_REQUEST_SUCCEED",o="USER_DATA_REQUEST_FAILED"},YaEn:function(t,n,a){"use strict";var e=a("7+uW"),s=a("/ocq"),i=a("KWv7");e.a.use(s.a);var c=new s.a({mode:"history",base:"/",routes:i.a});n.a=c},Zlmt:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("main",[a("h3",[t._v("About your account")]),t._v(" "),a("p",{staticClass:"description"},[t._v("Do you have a U.S. bank small business checking or saving account?")]),t._v(" "),t._m(0),t._v(" "),a("section",{staticClass:"accounts"},[a("router-link",{staticClass:"account open-account",attrs:{to:"/easy-checking"}},[t._v("Open an account now. "),a("div",{staticClass:"icon__arrow"})])],1)])])},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"accounts"},[a("div",{staticClass:"account"},[t._v("I have a small business checking or savings account "),a("div",{staticClass:"icon__arrow"})]),t._v(" "),a("div",{staticClass:"account"},[t._v("I have a different account "),a("div",{staticClass:"icon__arrow"})])])}]},a9PU:function(t,n,a){"use strict";var e=a("Dd8w"),s=a.n(e),i=a("NYxO");n.a={computed:s()({},Object(i.c)(["userData"]))}},advI:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("header"),t._v(" "),a("transition",{staticClass:"content",attrs:{appear:"",name:"fadeIn"}},[a("main",[a("div",{staticClass:"anonymous-avatar"}),t._v(" "),a("h2",[t._v("Hello")]),t._v(" "),a("form",[a("input",{staticClass:"form__input",attrs:{type:"text",placeholder:"ENTER PERSONAL ID"}}),t._v(" "),a("div",{staticClass:"icon icon__lock"}),t._v(" "),a("div",{staticClass:"form__button"},[a("div",{staticClass:"icon icon__arrow"})])]),t._v(" "),a("div",{staticClass:"login-checkboxes"},[a("span",[t._v("Remember Me")]),t._v(" "),a("input",{staticClass:"ios8-switch",attrs:{type:"checkbox",id:"rememberCheckbox"}}),t._v(" "),a("label",{attrs:{for:"rememberCheckbox"}})]),t._v(" "),a("div",{staticClass:"login-checkboxes"},[a("span",[t._v("Enable Touch ID")]),t._v(" "),a("input",{staticClass:"ios8-switch",attrs:{type:"checkbox",id:"touchIDCheckbox"}}),t._v(" "),a("label",{attrs:{for:"touchIDCheckbox"}})]),t._v(" "),a("div",{staticClass:"login-management"},[a("div",{staticClass:"login-management__block"},[a("p",{staticClass:"with-border"},[t._v("Forgot ID?")]),t._v(" "),a("div",{staticClass:"icon icon__map"})]),t._v(" "),a("div",{staticClass:"login-management__block"},[a("router-link",{attrs:{to:"/accounts"}},[t._v("New User?")]),t._v(" "),a("div",{staticClass:"icon icon__info"})],1)])])]),t._v(" "),t._m(0)],1)},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("footer",[a("div",[t._v("Online privacy and security")]),t._v(" "),a("div",[t._v("Legal Disclosures")]),t._v(" "),a("div",[t._v("Advanced Security")]),t._v(" "),a("div",[t._v("2018")])])}]},bREw:function(t,n,a){"use strict";var e,s=a("bOdI"),i=a.n(s),c=a("mtWM"),r=a.n(c),o=a("VLWU"),u=a("YaEn"),v={userDataFetched:!1,userDataLoading:!1,userData:null},_={userData:function(t){return t.userData}},l=(e={},i()(e,o.d,function(t){t.userDataFetched=!1,t.userDataLoading=!0}),i()(e,o.e,function(t){t.userDataFetched=!1,t.userDataLoading=!1}),i()(e,o.f,function(t,n){t.userDataFetched=!0,t.userDataLoading=!1,t.userData=n}),e),d={getUserData:function(t){var n=t.commit;t.state.userDataFetched||(n("USER_DATA_REQUEST"),r.a.post("/api/get-user").then(function(t){t.data&&(n("USER_DATA_REQUEST_SUCCEED",t.data),u.a.push("/profile"))}).catch(function(t){console.error(t),n("USER_DATA_REQUEST_FAILED")}))}};n.a={state:v,getters:_,mutations:l,actions:d}},esL9:function(t,n,a){"use strict";function e(t){a("s+5Y")}var s=a("3bYE"),i=a("advI"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-aae97700",null);n.a=o.exports},gGH2:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("transition",{attrs:{name:"router",mode:"out-in"}},[a("router-view")],1)],1)},s=[]},iVEC:function(t,n){},"iz+3":function(t,n){},jeGP:function(t,n){},mn7Q:function(t,n,a){"use strict";var e=a("Dd8w"),s=a.n(e),i=a("NYxO"),c=a("Cz8s");n.a={components:{BankHeader:c.a},methods:s()({},Object(i.b)(["getSignInQRCode"])),mounted:function(){this.getSignInQRCode()}}},pwOY:function(t,n){},q7Ii:function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s});var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("main",[a("div",{staticClass:"checking-header"},[a("div",{staticClass:"checking-header__image"}),t._v(" "),a("div",{staticClass:"checking-header__text"},[a("h4",[t._v("Easy Checking")]),t._v(" "),a("h1",[t._v("A basic checking account with great standard features")]),t._v(" "),a("h3",[t._v("Open Account with")]),t._v(" "),a("div",{staticClass:"buttons-container"},[a("a",{staticClass:"button violet-button",attrs:{href:t.QR.signInQRCode}},[a("div",{staticClass:"verified_logo"}),t._v("\n            Verified.Me\n          ")]),t._v(" "),a("button",{staticClass:"button red-button"},[t._v("Continue to form")])])])]),t._v(" "),t._m(0)])])},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("p",[t._v("\n        Easy Checking is a basic checking account that comes with standard benefits like a debit card that doubles as an ATM card.\n        It also gives you full access to Online and Mobile Banking, a suite of powerful tools and apps that make it easy to track your spending, pay bills,\n        send money, deposit checks and more.\n      ")]),t._v(" "),a("p",[t._v("\n        Sound good? You may also like our "),a("span",{staticClass:"selected"},[t._v("Silver Checking Package")]),t._v(", a matched checking and savings account with extra ways to help you save.\n      ")]),t._v(" "),a("h2",[t._v("Easy Checking benefits")]),t._v(" "),a("h3",[t._v("Basic banking must-haves")]),t._v(" "),a("p",[t._v("You'll get a "),a("span",{staticClass:"selected"},[t._v("U.S. Bank Visa® Debit Card")]),t._v(", no-fee transactions at U.S. Bank ATMs, and "),a("span",{staticClass:"selected"},[t._v("Online/Mobile Banking")]),t._v(" with "),a("span",{staticClass:"selected"},[t._v("mobile check deposit")]),t._v(", bill pay and more.")]),t._v(" "),a("h2",[t._v("Pricing and features")]),t._v(" "),a("h3",[t._v("Monthly maintenance fee")])])}]},"rz+E":function(t,n,a){"use strict";n.a={mounted:function(){window.location.href="usbankverified://open.my.app?url_launch=https://usbankverified.herokuapp.com/user-verified"},methods:{redirectToURL:function(){window.location.href="usbankverified://open.my.app?url_launch=https://usbankverified.herokuapp.com/user-verified"}}}},"s+5Y":function(t,n){},"s+bK":function(t,n,a){"use strict";function e(t){a("9+lz")}var s=a("MPYx"),i=a("OfVs"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-33b69cfa",null);n.a=o.exports},ttX3:function(t,n){},wqBJ:function(t,n,a){"use strict";n.a={}},xJD8:function(t,n,a){"use strict";var e=a("Dd8w"),s=a.n(e),i=a("NYxO");n.a={name:"App",methods:s()({},Object(i.b)(["getSignInQRCode","getSignUpQRCode"]))}},yurm:function(t,n,a){"use strict";function e(t){a("pwOY")}var s=a("zrXZ"),i=a("q7Ii"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-04e8841a",null);n.a=o.exports},zahh:function(t,n,a){"use strict";function e(t){a("iz+3")}var s=a("3E6T"),i=a("TK6d"),c=a("XyMi"),r=e,o=Object(c.a)(s.a,i.a,i.b,!1,r,"data-v-610c2b8f",null);n.a=o.exports},zrXZ:function(t,n,a){"use strict";var e=a("Dd8w"),s=a.n(e),i=a("NYxO"),c=a("Cz8s");n.a={components:{BankHeader:c.a},computed:s()({},Object(i.d)(["QR"]))}}},["NHnr"]);
//# sourceMappingURL=app.774f80a4704335ee7f4f.js.map