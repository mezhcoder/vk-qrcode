(this["webpackJsonpvk-miniapps"]=this["webpackJsonpvk-miniapps"]||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(19),i=n.n(a),s=(n(136),n(22)),r=(n(137),n(21)),d=n(13),j=n.n(d),o=n(8),l="POST_DATA",b="CLEAR_DATA";var O=n(4);j.a.subscribe((function(e){return function(e){if("VKWebAppOpenCodeReaderResult"===e.detail.type){var t=e.detail.data.code_data.toString();j.a.send("VKWebAppStorageSet",{key:t,value:t})}}(e)}));var u={postData:function(e){return{type:l,payload:e}}},h=Object(r.b)(null,u)((function(e){return e.syncData,Object(O.jsx)(o.r,{activePanel:"main",id:"view1",children:Object(O.jsx)(o.k,{id:"main",children:Object(O.jsx)(o.i,{children:Object(O.jsx)(o.e,{style:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(o.d,{size:"l",mode:"shadow",style:{width:"100%"},children:Object(O.jsx)("div",{style:{height:"50vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)(o.h,{onClick:function(){j.a.send("VKWebAppOpenCodeReader")},children:Object(O.jsx)(o.c,{style:{height:"70px"},mode:"outline",size:"l",children:"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"})})})})})})})})})),p=n(49),x=function(){return new Promise((function(e,t){j.a.send("VKWebAppStorageGetKeys",{count:1e3,offset:0}),j.a.subscribe((function t(n){"VKWebAppStorageGetKeysResult"===n.detail.type&&(console.log("go +1"),j.a.unsubscribe(t),e(n.detail.data.keys))}))}))};var f=function(){var e=Object(p.a)({promiseFn:x}),t=e.data,n=e.error;return e.isLoading?"Loading...":n?"Something went wrong: ".concat(n.message):Object(O.jsx)(o.r,{activePanel:"main",id:"view2",children:Object(O.jsx)(o.k,{id:"main",children:Object(O.jsxs)(o.i,{children:["Data: ",t]})})})};var v=function(){return Object(O.jsx)(o.r,{activePanel:"main",id:"view3",children:Object(O.jsx)(o.k,{id:"main",children:Object(O.jsxs)(o.i,{children:[Object(O.jsx)("h1",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e QR \u043a\u043e\u0434\u043e\u0432"}),Object(O.jsx)("p",{children:"123 \u0448\u0442."})]})})})},y=(n(43),n(158)),g=n(159),m=n(160),w=n(161);j.a.send("VKWebAppInit",{}).then((function(e){return console.log("Bridge:",e)}));var k=Object(r.b)((function(e){return{syncData:e.data.data}}),null)((function(e){var t=e.syncData,n=Object(o.t)().viewWidth,a=Object(c.useState)("view1"),i=Object(s.a)(a,2),r=i[0],d=i[1],j=Object(c.useState)(!1),l=Object(s.a)(j,2),b=l[0],u=l[1];function p(){u(!b)}return Object(O.jsx)(o.g,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(o.b,{children:Object(O.jsx)(o.q,{header:Object(O.jsx)(o.l,{separator:!1}),children:Object(O.jsxs)(o.p,{spaced:n&&n>o.s.MOBILE,children:[Object(O.jsx)(o.l,{children:Object(O.jsx)(o.m,{aside:Object(O.jsx)(y.a,{style:{transform:"rotate(".concat(b?"180deg":"0",")")}}),onClick:p,children:"VK-QRCode"})}),Object(O.jsx)(o.n,{opened:b,onClose:function(){return p},children:Object(O.jsxs)(o.j,{children:[Object(O.jsx)(o.f,{before:Object(O.jsx)(g.a,{}),onClick:function(){d("view1"),u(!1)},"data-mode":"all",children:"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"}),Object(O.jsx)(o.f,{before:Object(O.jsx)(m.a,{}),onClick:function(){d("view2"),u(!1)},"data-mode":"all",children:"\u041c\u043e\u0438 QR \u043a\u043e\u0434\u044b"}),Object(O.jsx)(o.f,{before:Object(O.jsx)(w.a,{}),onClick:function(){d("view3"),u(!1)},"data-mode":"managed",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e QR \u043a\u043e\u0434\u043e\u0432"})]})}),Object(O.jsxs)(o.o,{activeView:r,children:[Object(O.jsx)(h,{syncData:t,id:"view1"}),Object(O.jsx)(f,{syncData:t,id:"view2"}),Object(O.jsx)(v,{syncData:t,id:"view3"})]})]})})})})})})),_=n(17),D=n(38),R=n(51),S=n.n(R),A=n(5),C={data:{repository:"",command:"",branch:"",syncTime:1}},E=Object(_.a)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(A.a)(Object(A.a)({},e),{},{data:t.payload});case b:return console.log("OK"),Object(A.a)(Object(A.a)({},e),{},{data:C.data});default:return e}}}),K={key:"authType",storage:S.a},V=Object(D.a)(K,E),T=Object(_.c)(V,Object(_.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(D.b)(T);j.a.send("VKWebAppInit",{}).then((function(e){return console.log("Bridge:",e)})),i.a.render(Object(O.jsx)(r.a,{store:T,children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.cd2e08f6.chunk.js.map