(this["webpackJsonpvk-miniapps"]=this["webpackJsonpvk-miniapps"]||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(24),r=n.n(s),a=(n(129),n(19)),d=(n(130),n(13)),j=n.n(d),o=n(8),l=n(4);j.a.subscribe((function(e){return function(e){if("VKWebAppOpenCodeReaderResult"===e.detail.type){var t=e.detail.data.code_data.toString();console.log("URL \u043f\u043e\u043b\u0443\u0447\u0435\u043d: "+t),j.a.send("VKWebAppStorageSet",{key:t,value:t+"@"})}"VKWebAppStorageSetFailed"===e.detail.type&&console.log(e.detail.data)}(e)}));var b=function(){return Object(l.jsx)(o.r,{activePanel:"main",id:"view1",children:Object(l.jsx)(o.k,{id:"main",children:Object(l.jsx)(o.i,{children:Object(l.jsx)(o.e,{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(o.d,{size:"l",mode:"shadow",style:{width:"100%"},children:Object(l.jsx)("div",{style:{height:"50vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(l.jsx)(o.h,{onClick:function(){return console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d Show"),void j.a.send("VKWebAppOpenCodeReader")},children:Object(l.jsx)(o.c,{style:{height:"70px"},mode:"outline",size:"l",children:"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"})})})})})})})})},O=n(43),h=function(){return new Promise((function(e,t){j.a.send("VKWebAppStorageGetKeys",{count:1e3,offset:0}),j.a.subscribe((function t(n){"VKWebAppStorageGetKeysResult"===n.detail.type&&(j.a.unsubscribe(t),e(n.detail.data.keys))}))}))};var u=function(){var e=Object(O.a)({promiseFn:h}),t=e.data,n=e.error;return e.isLoading?"Loading...":n?"Error: ".concat(n.message):Object(l.jsx)(o.r,{activePanel:"main",id:"view2",children:Object(l.jsx)(o.k,{id:"main",children:Object(l.jsxs)(o.i,{children:["Data: ",t]})})})};var x=function(){return Object(l.jsx)(o.r,{activePanel:"main",id:"view3",children:Object(l.jsx)(o.k,{id:"main",children:Object(l.jsxs)(o.i,{children:[Object(l.jsx)("h1",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e QR \u043a\u043e\u0434\u043e\u0432"}),Object(l.jsx)("p",{children:"123 \u0448\u0442."})]})})})},p=(n(38),n(147)),f=n(148),v=n(149),g=n(150);j.a.send("VKWebAppInit",{}).then((function(e){return console.log("Bridge:",e)}));var m=function(){var e=Object(o.t)().viewWidth,t=Object(i.useState)("view1"),n=Object(a.a)(t,2),c=n[0],s=n[1],r=Object(i.useState)(!1),d=Object(a.a)(r,2),j=d[0],O=d[1];function h(){O(!j)}return Object(l.jsx)(o.g,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(o.b,{children:Object(l.jsx)(o.q,{header:Object(l.jsx)(o.l,{separator:!1}),children:Object(l.jsxs)(o.p,{spaced:e&&e>o.s.MOBILE,children:[Object(l.jsx)(o.l,{children:Object(l.jsx)(o.m,{aside:Object(l.jsx)(p.a,{style:{transform:"rotate(".concat(j?"180deg":"0",")")}}),onClick:h,children:"VK-QRCode"})}),Object(l.jsx)(o.n,{opened:j,onClose:function(){return h},children:Object(l.jsxs)(o.j,{children:[Object(l.jsx)(o.f,{before:Object(l.jsx)(f.a,{}),onClick:function(){s("view1"),O(!1)},"data-mode":"all",children:"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"}),Object(l.jsx)(o.f,{before:Object(l.jsx)(v.a,{}),onClick:function(){s("view2"),O(!1)},"data-mode":"all",children:"\u041c\u043e\u0438 QR \u043a\u043e\u0434\u044b"}),Object(l.jsx)(o.f,{before:Object(l.jsx)(g.a,{}),onClick:function(){s("view3"),O(!1)},"data-mode":"managed",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e QR \u043a\u043e\u0434\u043e\u0432"})]})}),Object(l.jsxs)(o.o,{activeView:c,children:[Object(l.jsx)(b,{id:"view1"}),Object(l.jsx)(u,{id:"view2"}),Object(l.jsx)(x,{id:"view3"})]})]})})})})})};j.a.send("VKWebAppInit",{}).then((function(e){return console.log("Bridge:",e)})),r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.9f3a752f.chunk.js.map