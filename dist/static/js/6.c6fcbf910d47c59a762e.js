webpackJsonp([6],{"7TTi":function(n,t,A){var i=A("kxFB");t=n.exports=A("FZ+f")(!0),t.push([n.i,"header[data-v-79165bdb]{color:#fff;position:fixed;top:0;left:0;width:100%;z-index:100}main[data-v-79165bdb]{margin-top:125px}nav[data-v-79165bdb]{height:45px;background-color:#124cb2;padding:10px}.menu[data-v-79165bdb]{width:80px;text-align:center;font-size:12px}.menu .menu-icon[data-v-79165bdb]{width:16px;height:16px;background-position:50%;background-size:contain;background-repeat:no-repeat;background-image:url("+i(A("f9hy"))+");margin:0 auto}.submenu[data-v-79165bdb]{background-color:#94dbff;height:80px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;color:#124cb2;padding-bottom:20px}.profile-icon[data-v-79165bdb]{background-position:50%;background-size:contain;background-repeat:no-repeat;background-image:url("+i(A("GIEP"))+");width:60px;height:60px;left:0;top:-30px;right:0;bottom:0;margin:auto;position:absolute}.info-block[data-v-79165bdb]{border-bottom:1px solid #ccc;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;max-width:800px;padding:10px;margin:0 auto 20px}.info-left[data-v-79165bdb]{width:95%}.info-left h6[data-v-79165bdb]{color:#5d6c7b;margin:0}.info-left p[data-v-79165bdb]{margin:8px 0}.info-right[data-v-79165bdb]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.info-right p[data-v-79165bdb]{color:#5d6c7b;text-decoration:underline;cursor:pointer}","",{version:3,sources:["/Users/eugene/Documents/verified/demos/banks/src/views/Profile/index.vue"],names:[],mappings:"AACA,wBACE,WAAe,AACf,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,WAAa,CACd,AACD,sBACE,gBAAkB,CACnB,AACD,qBACE,YAAa,AACb,yBAA0B,AAC1B,YAAc,CACf,AACD,uBACE,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CACjB,AACD,kCACE,WAAY,AACZ,YAAa,AACb,wBAAmC,AACnC,wBAAyB,AACzB,4BAA6B,AAC7B,+CAAqD,AACrD,aAAe,CAChB,AACD,0BACE,yBAA0B,AAC1B,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AAChB,qBAAsB,AAC9B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,cAAe,AACf,mBAAqB,CACtB,AACD,+BACE,wBAAmC,AACnC,wBAAyB,AACzB,4BAA6B,AAC7B,+CAA6D,AAC7D,WAAY,AACZ,YAAa,AACb,OAAQ,AACR,UAAW,AACX,QAAS,AACT,SAAU,AACV,YAAa,AACb,iBAAmB,CACpB,AACD,6BACE,6BAAiC,AACjC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,yBAA0B,AACtB,qBAAsB,AAC9B,2BAA4B,AACxB,wBAAyB,AACrB,qBAAsB,AAC9B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,WAAY,AACZ,gBAAiB,AACjB,aAAc,AACd,kBAAoB,CACrB,AACD,4BACE,SAAW,CACZ,AACD,+BACE,cAAe,AACf,QAAU,CACX,AACD,8BACE,YAAc,CACf,AACD,6BACE,mBAAoB,AAChB,oBAAqB,AACjB,WAAa,CACtB,AACD,+BACE,cAAe,AACf,0BAA2B,AAC3B,cAAgB,CACjB",file:"index.vue",sourcesContent:["\nheader[data-v-79165bdb] {\n  color: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n}\nmain[data-v-79165bdb] {\n  margin-top: 125px;\n}\nnav[data-v-79165bdb] {\n  height: 45px;\n  background-color: #124cb2;\n  padding: 10px;\n}\n.menu[data-v-79165bdb] {\n  width: 80px;\n  text-align: center;\n  font-size: 12px;\n}\n.menu .menu-icon[data-v-79165bdb] {\n  width: 16px;\n  height: 16px;\n  background-position: center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url('../../assets/icons/menu.svg');\n  margin: 0 auto;\n}\n.submenu[data-v-79165bdb] {\n  background-color: #94dbff;\n  height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 18px;\n  color: #124cb2;\n  padding-bottom: 20px;\n}\n.profile-icon[data-v-79165bdb] {\n  background-position: center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url('../../assets/icons/profile-icon.svg');\n  width: 60px;\n  height: 60px;\n  left: 0;\n  top: -30px;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  position: absolute;\n}\n.info-block[data-v-79165bdb] {\n  border-bottom: 1px solid #cccccc;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 800px;\n  padding: 10px;\n  margin: 0 auto 20px;\n}\n.info-left[data-v-79165bdb] {\n  width: 95%;\n}\n.info-left h6[data-v-79165bdb] {\n  color: #5d6c7b;\n  margin: 0;\n}\n.info-left p[data-v-79165bdb] {\n  margin: 8px 0;\n}\n.info-right[data-v-79165bdb] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.info-right p[data-v-79165bdb] {\n  color: #5d6c7b;\n  text-decoration: underline;\n  cursor: pointer;\n}\n"],sourceRoot:""}])},GIEP:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzJfMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MzcgNzM3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MzcgNzM3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwNUU5NDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzNzAuMyIgY3k9IjM2NC42IiByPSIzNTAiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2Ny43LDM4Mi4zYzAuNSwwLDEsMCwxLjYsMGMwLjIsMCwwLjQsMCwwLjYsMGMwLjMsMCwwLjcsMCwxLDBjMjkuMy0wLjUsNTMtMTAuOCw3MC41LTMwLjUKCWMzOC41LTQzLjQsMzIuMS0xMTcuOCwzMS40LTEyNC45Yy0yLjUtNTMuMy0yNy43LTc4LjgtNDguNS05MC43Yy0xNS41LTguOS0zMy42LTEzLjctNTMuOC0xNC4xaC0wLjdjLTAuMSwwLTAuMywwLTAuNCwwaC0wLjYKCWMtMTEuMSwwLTMyLjksMS44LTUzLjgsMTMuN2MtMjEsMTEuOS00Ni42LDM3LjQtNDkuMSw5MS4xYy0wLjcsNy4xLTcuMSw4MS41LDMxLjQsMTI0LjlDMzE0LjcsMzcxLjUsMzM4LjQsMzgxLjgsMzY3LjcsMzgyLjN6CgkgTTI5Mi42LDIyOS40YzAtMC4zLDAuMS0wLjYsMC4xLTAuOGMzLjMtNzEuNyw1NC4yLTc5LjQsNzYtNzkuNGgwLjRjMC4yLDAsMC41LDAsMC44LDBjMjcsMC42LDcyLjksMTEuNiw3Niw3OS40CgljMCwwLjMsMCwwLjYsMC4xLDAuOGMwLjEsMC43LDcuMSw2OC43LTI0LjcsMTA0LjVjLTEyLjYsMTQuMi0yOS40LDIxLjItNTEuNSwyMS40Yy0wLjIsMC0wLjMsMC0wLjUsMGwwLDBjLTAuMiwwLTAuMywwLTAuNSwwCgljLTIyLTAuMi0zOC45LTcuMi01MS40LTIxLjRDMjg1LjcsMjk4LjMsMjkyLjUsMjMwLDI5Mi42LDIyOS40eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTc0LjgsNTA1LjdjMC0wLjEsMC0wLjIsMC0wLjNjMC0wLjgtMC4xLTEuNi0wLjEtMi41Yy0wLjYtMTkuOC0xLjktNjYuMS00NS4zLTgwLjljLTAuMy0wLjEtMC43LTAuMi0xLTAuMwoJYy00NS4xLTExLjUtODIuNi0zNy41LTgzLTM3LjhjLTYuMS00LjMtMTQuNS0yLjgtMTguOCwzLjNjLTQuMyw2LjEtMi44LDE0LjUsMy4zLDE4LjhjMS43LDEuMiw0MS41LDI4LjksOTEuMyw0MS43CgljMjMuMyw4LjMsMjUuOSwzMy4yLDI2LjYsNTZjMCwwLjksMCwxLjcsMC4xLDIuNWMwLjEsOS0wLjUsMjIuOS0yLjEsMzAuOWMtMTYuMiw5LjItNzkuNyw0MS0xNzYuMyw0MQoJYy05Ni4yLDAtMTYwLjEtMzEuOS0xNzYuNC00MS4xYy0xLjYtOC0yLjMtMjEuOS0yLjEtMzAuOWMwLTAuOCwwLjEtMS42LDAuMS0yLjVjMC43LTIyLjgsMy4zLTQ3LjcsMjYuNi01NgoJYzQ5LjgtMTIuOCw4OS42LTQwLjYsOTEuMy00MS43YzYuMS00LjMsNy42LTEyLjcsMy4zLTE4LjhjLTQuMy02LjEtMTIuNy03LjYtMTguOC0zLjNjLTAuNCwwLjMtMzcuNywyNi4zLTgzLDM3LjgKCWMtMC40LDAuMS0wLjcsMC4yLTEsMC4zYy00My40LDE0LjktNDQuNyw2MS4yLTQ1LjMsODAuOWMwLDAuOSwwLDEuNy0wLjEsMi41YzAsMC4xLDAsMC4yLDAsMC4zYy0wLjEsNS4yLTAuMiwzMS45LDUuMSw0NS4zCgljMSwyLjYsMi44LDQuOCw1LjIsNi4zYzMsMiw3NC45LDQ3LjgsMTk1LjIsNDcuOHMxOTIuMi00NS45LDE5NS4yLTQ3LjhjMi4zLTEuNSw0LjItMy43LDUuMi02LjNDNTc1LDUzNy42LDU3NC45LDUxMC45LDU3NC44LDUwNS43Cgl6Ii8+Cjwvc3ZnPgo="},TBEP:function(n,t,A){"use strict";function i(n){A("wgWs")}Object.defineProperty(t,"__esModule",{value:!0});var e=A("a9PU"),s=A("nJVk"),a=A("XyMi"),M=i,o=Object(a.a)(e.a,s.a,s.b,!1,M,"data-v-79165bdb",null);t.default=o.exports},a9PU:function(n,t,A){"use strict";var i=A("Dd8w"),e=A.n(i),s=A("NYxO");t.a={computed:e()({},Object(s.c)(["userData"]))}},f9hy:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkxLjMxOCwyMzUuMzE4SDIwLjY4MkM5LjI2LDIzNS4zMTgsMCwyNDQuNTc3LDAsMjU2czkuMjYsMjAuNjgyLDIwLjY4MiwyMC42ODJoNDcwLjYzNiAgICBjMTEuNDIzLDAsMjAuNjgyLTkuMjU5LDIwLjY4Mi0yMC42ODJDNTEyLDI0NC41NzgsNTAyLjc0MSwyMzUuMzE4LDQ5MS4zMTgsMjM1LjMxOHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OTEuMzE4LDc4LjQzOUgyMC42ODJDOS4yNiw3OC40MzksMCw4Ny42OTksMCw5OS4xMjFjMCwxMS40MjIsOS4yNiwyMC42ODIsMjAuNjgyLDIwLjY4Mmg0NzAuNjM2ICAgIGMxMS40MjMsMCwyMC42ODItOS4yNiwyMC42ODItMjAuNjgyQzUxMiw4Ny42OTksNTAyLjc0MSw3OC40MzksNDkxLjMxOCw3OC40Mzl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkxLjMxOCwzOTIuMTk3SDIwLjY4MkM5LjI2LDM5Mi4xOTcsMCw0MDEuNDU2LDAsNDEyLjg3OXM5LjI2LDIwLjY4MiwyMC42ODIsMjAuNjgyaDQ3MC42MzYgICAgYzExLjQyMywwLDIwLjY4Mi05LjI1OSwyMC42ODItMjAuNjgyUzUwMi43NDEsMzkyLjE5Nyw0OTEuMzE4LDM5Mi4xOTd6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="},kxFB:function(n,t){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},nJVk:function(n,t,A){"use strict";A.d(t,"a",function(){return i}),A.d(t,"b",function(){return e});var i=function(){var n=this,t=n.$createElement,A=n._self._c||t;return n.userData?A("div",{staticClass:"container"},[n._m(0),n._v(" "),A("main",[A("div",{staticClass:"info-block"},[A("div",{staticClass:"info-left"},[A("h6",[n._v("Contact Information")]),n._v(" "),A("p",[n._v(n._s(n.userData.given_name))]),n._v(" "),A("p",[n._v(n._s(n.userData.family_name))]),n._v(" "),A("p",[n._v(n._s(n.userData.email))]),n._v(" "),A("p",[n._v(n._s(n.userData.phone_number))])]),n._v(" "),n._m(1)]),n._v(" "),A("div",{staticClass:"info-block"},[A("div",{staticClass:"info-left"},[A("h6",[n._v("Home Address")]),n._v(" "),A("p",[n._v(n._s(n.userData.address.street_address))]),n._v(" "),A("p",[n._v(n._s(n.userData.address.locality+" "+n.userData.address.country))]),n._v(" "),A("p",[n._v(n._s(n.userData.address.postal_code))])]),n._v(" "),n._m(2)]),n._v(" "),n._m(3),n._v(" "),n._m(4)])]):n._e()},e=[function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("header",[A("nav",[A("div",{staticClass:"menu"},[A("div",{staticClass:"menu-icon"}),n._v(" "),A("span",[n._v("Menu")])])]),n._v(" "),A("div",{staticClass:"submenu"},[n._v("\n      Does everything look correct?\n    ")]),n._v(" "),A("div",{staticClass:"profile-icon"})])},function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"info-right"},[A("p",[n._v("Edit")])])},function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"info-right"},[A("p",[n._v("Edit")])])},function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"info-block"},[A("div",{staticClass:"info-left"},[A("h6",[n._v("Permanent Residence")]),n._v(" "),A("p",[n._v("United States")])]),n._v(" "),A("div",{staticClass:"info-right"},[A("p",[n._v("Edit")])])])},function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",{staticClass:"info-block"},[A("div",{staticClass:"info-left"},[A("h6",[n._v("Identification")]),n._v(" "),A("p",[n._v("08/08/XXXX")]),n._v(" "),A("p",[n._v("XXXX-XX-7876")]),n._v(" "),A("p",[n._v("US Driver's License")])]),n._v(" "),A("div",{staticClass:"info-right"},[A("p",[n._v("Edit")])])])}]},wgWs:function(n,t,A){var i=A("7TTi");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=A("rjj0").default;e("08bb61e0",i,!0,{})}});
//# sourceMappingURL=6.c6fcbf910d47c59a762e.js.map