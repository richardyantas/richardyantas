(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c,a,r,s,i,o,l,d,b,j,u=n(1),p=n.n(u),h=n(20),g=n.n(h),x=(n(54),n(6)),m=(n(55),n(5)),O=[{title:"About",path:"/about",subNav:[]},{title:"Projects",path:"/projects",subNav:[{title:"Sthocastic H.G",path:"/projects/55978965a31d4355b1190d0059189924",subNav:[],cName:"sub-nav"},{title:"Urban Networks",path:"/projects/fb1b9e08f84842b39f014742343ccc4e",subNav:[],cName:"sub-nav"},{title:"Text Recognizer",path:"/projects/9fa38b45c12647b68afec7587b944b20",subNav:[]}]},{title:"Backend",path:"/backend",subNav:[{title:"Flask API",path:"/backend/55978965a31d4355b1190d0059189924",subNav:[],cName:"sub-nav"}]},{title:"Machine learning",path:"/machine-learning",subNav:[]},{title:"Data Engineering",path:"/data-engineering",subNav:[]},{title:"Data Science",path:"/data-engineering",subNav:[]},{title:"Cloud Computing",path:"/cloud-compuing",subNav:[]},{title:"Algorithms&DS",path:"/algorithms-datastructures",subNav:[]},{title:"Contact",path:"/contact",subNav:[]}],f=n(11),v=n(18),y=n(3),w=n(2),k=Object(m.a)(v.b)(c||(c=Object(x.a)(["\n  color: white;\n  display: block;\n  width: 150px;\n  height: 30px;\n  font-family: Gudea, sans-serif;\n  padding: 1px;\n  padding-left: 10px;\n  margin-bottom: 1px;\n  text-decoration: none;\n  background-repeat: no-repeat;\n  background-size: 164px 31px;\n  vertical-align: middle;\n  background-image: ",";\n  &:hover {\n    color: hsl(225deg 33% 60%);\n    cursor: pointer;\n  }\n"])),(function(e){var t=e.subnav;return e.item.subNav.length>0?t?"url(/nav-button_bottom-arrow.png)":"url(/nav-button_right-arrow.png)":"url(/nav-button.png)"})),_=m.a.span(a||(a=Object(x.a)(["\n  height: 39px;\n  line-height: 29px;\n  margin-left: 16px;\n"]))),S=Object(m.a)(v.b)(r||(r=Object(x.a)(["\n  color: white;\n  display: block;\n  width: 150px;\n  height: 30px;\n  font-family: Gudea, sans-serif;\n  padding: 1px;\n  padding-left: 10px;\n  margin-left: 40px;\n  margin-bottom: 1px;\n  text-decoration: none;\n  background-repeat: no-repeat;\n  background-size: 164px 31px;\n  vertical-align: middle;\n  background-image: url(/nav-button.png);\n  &:hover {\n    color: hsl(225deg 33% 60%);\n    cursor: pointer;\n  }\n"]))),N=function(e){var t=e.item,n=Object(u.useState)(!1),c=Object(f.a)(n,2),a=c[0],r=c[1],s=Object(y.g)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(k,{item:t,subnav:a,to:t.subNav.length>0?s.pathname:t.path,onClick:function(){return r(!a)},children:[Object(w.jsx)("div",{children:Object(w.jsx)(_,{children:t.title})}),Object(w.jsx)("img",{src:"/nav-button_bottom-arrow.png",style:{display:"none"}})]}),a&&t.subNav.map((function(e,t){return Object(w.jsx)(S,{item:e,to:e.path,children:Object(w.jsx)(_,{children:e.title})},t)}))]})},C=n(0),E=m.a.nav(s||(s=Object(x.a)(["\n  width: 20%;\n  padding-left: 0px;\n"]))),T=m.a.div(i||(i=Object(x.a)(["\n  margin: 0 0 0 0;\n  height: auto;\n  width: 100%;\n  padding-left: 0px;\n"]))),I=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(C.b.Provider,{value:{color:"#fff"},children:Object(w.jsxs)(E,{children:[Object(w.jsx)(T,{children:O.map((function(e,t){return Object(w.jsx)(N,{item:e},t)}))}),Object(w.jsxs)("div",{className:"books",children:[Object(w.jsx)("a",{href:"https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618",target:"_blank",children:Object(w.jsx)("img",{src:"/deeplearning.jpg",className:"book",alt:"W3Schools"})}),Object(w.jsx)("a",{href:"https://www.amazon.com/Python-Data-Science-Handbook-Essential/dp/1491912057",target:"_blank",children:Object(w.jsx)("img",{src:"/datascience.jpg",className:"book",alt:"W3Schools"})}),Object(w.jsx)("a",{href:"https://www.amazon.com/-/es/Himanshu-Singh/dp/1484262212",target:"_blank",children:Object(w.jsx)("img",{src:"/machinelearning.jpg",className:"book",alt:"W3Schools"})})]})]})})})},F=(n(61),n(62),n(63),n(15)),M=n.n(F),z=n(21),B=n(22),D="https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",P=function(){var e=Object(u.useState)(!0),t=Object(f.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)({}),r=Object(f.a)(a,2),s=r[0],i=r[1];function o(){return(o=Object(z.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(D).then((function(e){return e.json()}));case 2:t=e.sent,c(!1),i(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[s]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:"About"}),n?Object(w.jsxs)("div",{class:"spinner-box",children:[Object(w.jsx)("div",{class:"configure-border-1",children:Object(w.jsx)("div",{class:"configure-core"})}),Object(w.jsx)("div",{class:"configure-border-2",children:Object(w.jsx)("div",{class:"configure-core"})})]}):Object(w.jsx)(B.a,{blockMap:s})]})},A=n(12),W=m.a.div(o||(o=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 40px;\n\n  & .project__icons {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 60px;\n    height: 100%;\n    padding: 0px auto;\n  }\n\n  & #project__description {\n    color: white;\n    background: hsl(225deg 33% 25%);\n    padding: 15px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n  }\n\n  & #project__demo {\n    color: hsl(225deg 33% 60%);\n    background: hsl(0deg 0% 87%);\n    padding: 15px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n  }\n"]))),G=function(){var e=Object(u.useState)(1),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(w.jsx)("div",{className:"contact",children:Object(w.jsxs)(W,{children:[Object(w.jsx)("div",{id:"project__description",children:"Description"}),Object(w.jsxs)("div",{className:"project__icons",children:[Object(w.jsx)("div",{onClick:function(e){c(1),document.getElementById("project__demo").style.background="hsl(0deg 0% 87%)",document.getElementById("project__demo").style.color="hsl(225deg 33% 60%)",document.getElementById("project__description").style.background="hsl(225deg 33% 25%)",document.getElementById("project__description").style.color="white"},children:n?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(A.b,{fontSize:"1.5em",onMouseOver:function(e){var t=e.target;return t.style.opacity=.5,t.style.cursor="pointer"},onMouseOut:function(e){return e.target.style.opacity=1}})}):Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(A.a,{fontSize:"1.5em",onMouseOver:function(e){var t=e.target;return t.style.opacity=.5,t.style.cursor="pointer"},onMouseOut:function(e){return e.target.style.opacity=1}})})}),Object(w.jsx)("div",{onClick:function(e){c(0),document.getElementById("project__description").style.background="hsl(0deg 0% 87%)",document.getElementById("project__description").style.color="hsl(225deg 33% 60%)",document.getElementById("project__demo").style.background="hsl(225deg 33% 25%)",document.getElementById("project__demo").style.color="white"},children:n?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(A.c,{fontSize:"1.5em",onMouseOver:function(e){var t=e.target;return t.style.opacity=.5,t.style.cursor="pointer"},onMouseOut:function(e){return e.target.style.opacity=1}})}):Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(A.d,{fontSize:"1.5em",onMouseOver:function(e){var t=e.target;return t.style.opacity=.5,t.style.cursor="pointer"},onMouseOut:function(e){return e.target.style.opacity=1}})})})]}),Object(w.jsx)("div",{id:"project__demo",children:"Demo"})]})})},H=function(){var e=Object(y.h)().id;console.log("notionid:",e);var t=Object(u.useState)(!0),n=Object(f.a)(t,2),c=n[0],a=n[1],r=Object(u.useState)({}),s=Object(f.a)(r,2),i=s[0],o=s[1];function l(){return(l=Object(z.a)(M.a.mark((function t(){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://notion-api.splitbee.io/v1/page/".concat(e)).then((function(e){return e.json()}));case 2:n=t.sent,a(!1),o(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[e]),Object(w.jsxs)("div",{className:"contact",children:[Object(w.jsx)("h1",{children:"Projects"}),Object(w.jsx)(G,{}),c?Object(w.jsxs)("div",{class:"spinner-box",children:[Object(w.jsx)("div",{class:"configure-border-1",children:Object(w.jsx)("div",{class:"configure-core"})}),Object(w.jsx)("div",{class:"configure-border-2",children:Object(w.jsx)("div",{class:"configure-core"})})]}):Object(w.jsx)(B.a,{blockMap:i})]})},L=n(24),q=n(45),J=n(46),U=n(49),R=n(48),K=n(47),Q=n.n(K),V={paddingTop:"1rem",paddingBottom:"1rem"},X={backgroundColor:"#FF6961",padding:"0.5rem"},Y={backgroundColor:"#77dd77",padding:"0.5rem"},Z=function(e){var t=e.errorText;return Object(w.jsxs)("div",{style:X,children:[Object(w.jsx)("b",{children:"Error"}),": ",t]})},$=function(e){var t=e.successText;return Object(w.jsxs)("div",{style:Y,children:[Object(w.jsx)("b",{children:"Success"}),": ",t]})},ee=function(e){var t=e.labelText,n=e.errorText,c=e.children;return Object(w.jsxs)(p.a.Fragment,{children:[Object(w.jsxs)("div",{style:V,children:[Object(w.jsx)("div",{children:t}),Object(w.jsx)("div",{children:c})]}),n?Object(w.jsx)(Z,{errorText:n}):null]})},te=function(e){Object(U.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(q.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:"",message:"",submitting:!1,fieldErrors:{},error:"",success:!1},e.handleInputChange=function(t){var n;t.preventDefault();var c=t.target,a=c.value,r=c.name;e.setState((n={},Object(L.a)(n,r,a),Object(L.a)(n,"fieldErrors",{}),Object(L.a)(n,"success",!1),n))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,c=n.name,a=n.email,r=n.message;e.setState({submitting:!0});Q.a.post("https://5fs0uj97k4.execute-api.us-east-1.amazonaws.com/beta/contact",{name:c,email:a,message:r}).then((function(t){e.setState({success:!0,message:""})})).catch((function(t){var n=t.response.data;if("message"in n&&"field_errors"in n.message){var c=n.message.field_errors;e.setState({fieldErrors:c})}})).finally((function(t){return e.setState({submitting:!1})}))},e}return Object(J.a)(n,[{key:"render",value:function(){var e=this.state,t=e.submitting,n=e.fieldErrors,c=e.error,a=e.success,r=n.name,s=n.email,i=n.message;return Object(w.jsxs)("div",{style:{padding:"2rem",maxWidth:"500px"},children:[Object(w.jsx)("h1",{children:" Contact Us "}),Object(w.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(w.jsx)(ee,{labelText:"Name",errorText:r,children:Object(w.jsx)("input",{style:{width:"100%"},type:"text",name:"name",required:!0,value:this.state.name,onChange:this.handleInputChange})}),Object(w.jsx)(ee,{labelText:"Email",errorText:s,children:Object(w.jsx)("input",{style:{width:"100%"},type:"email",name:"email",required:!0,value:this.state.email,onChange:this.handleInputChange})}),Object(w.jsx)(ee,{labelText:"Message",errorText:i,children:Object(w.jsx)("textarea",{style:{width:"100%"},rows:"6",type:"text",name:"message",value:this.state.message,onChange:this.handleInputChange})}),c?Object(w.jsx)(Z,{errorText:c}):null,a?Object(w.jsx)($,{successText:"Message sent"}):null,Object(w.jsx)("button",{style:{marginTop:"2rem"},type:"submit",disabled:t,children:"Submit"})]})]})}}]),n}(u.Component);g.a.render(Object(w.jsx)(te,{}),document.getElementById("root"));var ne=m.a.div(l||(l=Object(x.a)(["\n  width: 1200px;\n  height: auto;\n  margin: 0 auto;\n"]))),ce=m.a.div(d||(d=Object(x.a)(["\n  height: 180px;\n\n  & #logo {\n    width: 550px;\n    height: 300px;\n    margin-left: -200px;\n    overflow: visible;\n    z-index: 30;\n  }\n\n  & #cat {\n    position: relative;\n    top: -0px;\n    left: 670px;\n    width: 300px;\n    height: 200px;\n    z-index: -100;\n  }\n"]))),ae=m.a.div(b||(b=Object(x.a)(["\n  width: auto;\n  display: flex;\n  justify-content: row;\n"]))),re=m.a.div(j||(j=Object(x.a)(["\n  width: 80%;\n"])));var se=function(){return Object(w.jsx)(v.a,{children:Object(w.jsxs)(ne,{children:[Object(w.jsxs)(ce,{children:[Object(w.jsx)("img",{id:"logo",src:"/logo2.png"}),Object(w.jsx)("img",{id:"cat",src:"/cat.gif"})]}),Object(w.jsxs)(ae,{children:[Object(w.jsx)(I,{}),Object(w.jsx)(re,{children:Object(w.jsxs)(y.d,{children:[Object(w.jsx)(y.b,{exact:!0,path:"/",render:function(){return Object(w.jsx)(y.a,{to:"/about"})}}),Object(w.jsx)(y.b,{path:"/about",exact:!0,component:P}),Object(w.jsx)(y.b,{path:"/projects/:id",exact:!0,component:H}),Object(w.jsx)(y.b,{path:"/contact",exact:!0,component:te})]})})]})]})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};g.a.render(Object(w.jsx)(p.a.StrictMode,{children:Object(w.jsx)(se,{})}),document.getElementById("root")),ie()}},[[84,1,2]]]);
//# sourceMappingURL=main.3720b2b7.chunk.js.map