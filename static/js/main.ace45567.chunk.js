(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{29:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(20),o=t.n(i),l=(t(29),t(14)),s=t.n(l),r=t(17),b=t(21),p=t(7),h=t(22),d=t(2),u=t(24),m=(t(32),t(33),"nav-button.png"),j="nav-button_right-arrow.png",g="nav-button_bottom-arrow.png",f=[{name:"Home",path:"/home",url:"https://notion-api.splitbee.io/v1/page/d53ab561c3bf4317b035ca9c08b60d7a",children:[]},{name:"Projects",path:"/projects",children:[{name:"Sthocastic Games",path:"/project1",url:"https://notion-api.splitbee.io/v1/page/55978965a31d4355b1190d0059189924",children:[]},{name:"Urban R. networks",path:"/project2",url:"https://notion-api.splitbee.io/v1/page/fb1b9e08f84842b39f014742343ccc4e",children:[]},{name:"Text Recognizer",path:"/project2",children:[],url:"https://notion-api.splitbee.io/v1/page/9fa38b45c12647b68afec7587b944b20"}]},{name:"Posts",path:"/posts",children:[{name:"Cloud Computing",children:[{name:"Docker Compose",children:[],url:"https://notion-api.splitbee.io/v1/page/802dcb67d2914440a6dcf6707912be1d"},{name:"AWS Lambda",children:[],url:"https://notion-api.splitbee.io/v1/page/0fff2ffd25274e318a31df2063469540"},{name:"AWS EC2",children:[],url:"https://notion-api.splitbee.io/v1/page/4190b0d66c2b4ed5b10f6406a46eb961"}]},{name:"Deep Learning",children:[{name:"Pytorch Tabular",children:[],url:"https://notion-api.splitbee.io/v1/page/90608dd258534f378f6948ba9183746e"}]},{name:"Data Science",children:[{name:"Exploratory DA.",children:[],url:"https://notion-api.splitbee.io/v1/page/d4e777953c86444aad508e3f038992eb"}]},{name:"Python Backend",children:[{name:"Flask API",children:[],url:"https://notion-api.splitbee.io/v1/page/2aa082d5278342689c4be8c8570a616f"},{name:"FastAPI",children:[],url:"https://notion-api.splitbee.io/v1/page/503b2424eb3943668f01e05ab44d013c"}]}]},{name:"Categories",path:"/categories",children:[{name:"Statistics",children:[],url:"https://notion-api.splitbee.io/v1/page/40e08fa308694e9b8edf776233d77f0e"},{name:"Economy",children:[{name:"Macroeconomics",children:[],url:"https://notion-api.splitbee.io/v1/page/6cba99f396124b6181968a7f897271d8"}]},{name:"Sociology",children:[],url:"https://notion-api.splitbee.io/v1/page/e85da77cbce54043acdb701002493bc0"},{name:"Linguistics",children:[],url:"https://notion-api.splitbee.io/v1/page/5b4413eb0bd745d28d883329d38575d6"},{name:"Biology",children:[],url:"https://notion-api.splitbee.io/v1/page/9848671446b0484bb46a104e616f7740"},{name:"Robotics",children:[],url:"https://notion-api.splitbee.io/v1/page/8a964af37e6949fcaefef8699912a7ad"}]},{name:"Papers",path:"/papers",children:[],url:"https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2"},{name:"Books",path:"/books",children:[{name:"Deep Learning GF.",url:"https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",children:[]},{name:"Data Science",url:"https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",children:[]}]},{name:"About",path:"/about",children:[],url:"https://notion-api.splitbee.io/v1/page/d53ab561c3bf4317b035ca9c08b60d7a"},{name:"Contact",path:"contact",children:[],url:"https://notion-api.splitbee.io/v1/page/39e7102c299441b5a95e79eb163e0ed3"}],O=t(1);function v(e){var n=e.name||"naa",t=e.children||[],c=e.url;e.path;console.log(e);var i=Object(a.useState)(!1),o=Object(p.a)(i,2),l=o[0],s=o[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"menu__item",onClick:function(n){0==t.length?e.onClick(c):s(!l)&&e.onClick("0")},style:{backgroundImage:"url(".concat(0==t.length?m:l?g:j,")")},children:Object(O.jsx)("a",{children:n})},e.id),l&&Object(O.jsx)("ul",{className:"menu__sublist",children:t.map((function(n,t){return Object(O.jsx)(x,{onClick:e.onClick,name:n.name,path:n.path||"/",url:n.url||"0",children:Object(r.a)(n.children)||[]},t)}))})]})}function x(e){var n=e.name,t=e.url,c=(e.path,e.children||[]),i=Object(a.useState)(!1),o=Object(p.a)(i,2),l=o[0],s=o[1];return console.log("props hehe: ",n,t,c),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"menu__subitem",onClick:function(){0===c.length?e.onClick(t):s(!l)&&e.onClick("0")},style:{backgroundImage:"url(".concat(0===c.length?m:l?g:j,")")},children:Object(O.jsx)("a",{children:n})}),l&&Object(O.jsx)("ul",{className:"menu__subsublist",children:c.map((function(n){return Object(O.jsx)("li",{className:"menu__subsubitem",onClick:function(){0===n.children.length?e.onClick(n.url):e.onClick("0")},style:{backgroundImage:"url(".concat(0===n.children.length?m:j,")")},children:Object(O.jsx)("a",{children:n.name})})}))})]})}var k=function(){var e=Object(a.useState)(!0),n=Object(p.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)({}),o=Object(p.a)(i,2),l=o[0],m=o[1],j=Object(a.useState)("https://notion-api.splitbee.io/v1/page/d53ab561c3bf4317b035ca9c08b60d7a"),g=Object(p.a)(j,2),x=g[0],k=g[1],C=function(e){console.log("kp:",e),"0"!=e&&k(e)};function S(){return(S=Object(b.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x).then((function(e){return e.json()}));case 2:n=e.sent,c(!1),m(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){S.apply(this,arguments)}(),console.log(":)",x)}),[x]);var _=f.filter((function(e){return 0==e.children.length})).map((function(e,n){return Object(O.jsx)(d.a,{exact:!0,path:e.path,component:v})}));return console.log(_),Object(O.jsx)(u.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{className:"header",children:Object(O.jsx)("img",{src:"logo.png",className:"logo"})}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("nav",{className:"menu",children:[Object(O.jsx)("ul",{className:"menu__list",children:f.map((function(e,n){return Object(O.jsx)(v,{id:n,onClick:C,path:e.path||"/",name:e.name,url:e.url||"0",children:Object(r.a)(e.children)})}))}),Object(O.jsxs)("div",{className:"books",children:[Object(O.jsx)("a",{href:"https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618",target:"_blank",children:Object(O.jsx)("img",{src:"deeplearning.jpg",className:"book",alt:"W3Schools"})}),Object(O.jsx)("a",{href:"https://www.amazon.com/Python-Data-Science-Handbook-Essential/dp/1491912057",target:"_blank",children:Object(O.jsx)("img",{src:"datascience.jpg",className:"book",alt:"W3Schools"})}),Object(O.jsx)("a",{href:"https://www.amazon.com/-/es/Himanshu-Singh/dp/1484262212",target:"_blank",children:Object(O.jsx)("img",{src:"machinelearning.jpg",className:"book",alt:"W3Schools"})})]})]}),t?Object(O.jsx)("section",{className:"section loading",children:Object(O.jsx)("h1",{children:"Loading..."})}):Object(O.jsx)("div",{className:"body",children:Object(O.jsx)(h.a,{blockMap:l})})]})]})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.ace45567.chunk.js.map