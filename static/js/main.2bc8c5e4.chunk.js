(this["webpackJsonpvk-miniapps"]=this["webpackJsonpvk-miniapps"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(17),s=n.n(r),j=(n(113),n(21)),a=(n(114),n(12)),d=n.n(a),o=n(7),l=n(4);d.a.subscribe((function(e){return function(e){if("VKWebAppOpenCodeReaderResult"===e.detail.type){var t=e.detail.data.code_data.toString();console.log("\u041f\u043e\u043b\u0443\u0447\u0435\u043d URL",t),d.a.send("VKWebAppStorageSet",{key:t,value:t})}}(e)}));var b=function(){return Object(l.jsx)(o.r,{activePanel:"main",id:"view1",children:Object(l.jsx)(o.k,{id:"main",children:Object(l.jsx)(o.i,{children:Object(l.jsx)(o.e,{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(o.d,{size:"l",mode:"shadow",style:{width:"100%"},children:Object(l.jsx)("div",{style:{height:"50vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(l.jsx)(o.h,{onClick:function(){d.a.send("VKWebAppOpenCodeReader")},children:Object(l.jsx)(o.c,{style:{height:"70px"},mode:"outline",size:"l",children:"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"})})})})})})})})};d.a.subscribe((function(e){return function(e){if("VKWebAppStorageGetKeysResult"===e.detail.type){var t=e.detail.data.keys;console.log("\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435:",t)}}(e)}));var h=function(){return d.a.send("VKWebAppStorageGetKeys",{count:1e3,offset:0}),Object(l.jsx)(o.r,{activePanel:"main",id:"view2",children:Object(l.jsx)(o.k,{id:"main",children:Object(l.jsx)(o.i,{children:Object(l.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0432\u043e\u0438\u0445 QR \u043a\u043e\u0434\u043e\u0432"})})})})};var O=function(){return Object(l.jsx)(o.r,{activePanel:"main",id:"view3",children:Object(l.jsx)(o.k,{id:"main",children:Object(l.jsxs)(o.i,{children:[Object(l.jsx)("h1",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e QR \u043a\u043e\u0434\u043e\u0432"}),Object(l.jsx)("p",{children:"123 \u0448\u0442."})]})})})},u=(n(25),n(128)),x=n(129),p=n(130),f=n(131);d.a.send("VKWebAppInit",{}).then((function(e){return console.log("Bridge:",e)}));var v=function(){var e=Object(o.t)().viewWidth,t=Object(i.useState)("view1"),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(i.useState)(!1),a=Object(j.a)(s,2),d=a[0],v=a[1];function g(){v(!d)}return Object(l.jsx)(o.g,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(o.b,{children:Object(l.jsx)(o.q,{header:Object(l.jsx)(o.l,{separator:!1}),children:Object(l.jsxs)(o.p,{spaced:e&&e>o.s.MOBILE,children:[Object(l.jsx)(o.l,{children:Object(l.jsx)(o.m,{aside:Object(l.jsx)(u.a,{style:{transform:"rotate(".concat(d?"180deg":"0",")")}}),onClick:g,children:"VK-QRCode"})}),Object(l.jsx)(o.n,{opened:d,onClose:function(){return g},children:Object(l.jsxs)(o.j,{children:[Object(l.jsx)(o.f,{before:Object(l.jsx)(x.a,{}),onClick:function(){r("view1"),v(!1)},"data-mode":"all",children:"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"}),Object(l.jsx)(o.f,{before:Object(l.jsx)(p.a,{}),onClick:function(){r("view2"),v(!1)},"data-mode":"all",children:"\u041c\u043e\u0438 QR \u043a\u043e\u0434\u044b"}),Object(l.jsx)(o.f,{before:Object(l.jsx)(f.a,{}),onClick:function(){r("view3"),v(!1)},"data-mode":"managed",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e QR \u043a\u043e\u0434\u043e\u0432"})]})}),Object(l.jsxs)(o.o,{activeView:c,children:[Object(l.jsx)(b,{id:"view1"}),Object(l.jsx)(h,{id:"view2"}),Object(l.jsx)(O,{id:"view3"})]})]})})})})})};d.a.send("VKWebAppInit",{}).then((function(e){return console.log("Bridge:",e)})),String.prototype.hash=function(){for(var e=this,t=Array(this.length),n=0;n<this.length;n++)t[n]=n;return Array.prototype.map.call(t,(function(t){return e.charCodeAt(t).toString(16)})).join("")},s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.2bc8c5e4.chunk.js.map