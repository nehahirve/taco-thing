(this["webpackJsonptaco-thing"]=this["webpackJsonptaco-thing"]||[]).push([[0],{130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),r=c.n(a),o=c(42),i=c.n(o),s=(c(50),c(24)),u=c.n(s),h=c(43),l=c(25),j=c(26),d=c(15),f=c(28),b=c(27),p=c(44),m=c.n(p),O=c.p+"static/media/logo.e01ecb40.svg",g=(c(130),c(131),function(e){Object(f.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).fetchTaco=e.fetchTaco.bind(Object(d.a)(e)),e.state={},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){this.fetchTaco()}},{key:"fetchTaco",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,c,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",redirect:"follow"},"https://taco-randomizer.herokuapp.com/random/?full-taco=true",e.next=4,fetch("https://taco-randomizer.herokuapp.com/random/?full-taco=true",t).then((function(e){return e.json()}));case 4:c=e.sent,console.log(c),n=/!\[(.*?)\]\((.*?)\)/g,a=c.recipe.replace(n,""),this.setState({recipe:a});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("img",{src:O,alt:"Tacothing logo"})}),Object(n.jsxs)("main",{children:[Object(n.jsx)(x,{recipe:this.state.recipe}),Object(n.jsx)("button",{className:"get-taco-button",onClick:this.fetchTaco,children:"Not delicious? Taco 'nother chance \ud83c\udf2e"})]})]})}}]),c}(r.a.Component)),x=function(e){Object(f.a)(c,e);var t=Object(b.a)(c);function c(e){return Object(l.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props.recipe;return Object(n.jsx)("div",{className:"recipe-card",children:Object(n.jsxs)("div",{className:"title-card",children:[Object(n.jsx)("div",{className:"taco-recipe",children:Object(n.jsx)(m.a,{children:e})}),Object(n.jsx)("div",{className:"taco-image",children:Object(n.jsx)("img",{src:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",alt:"a randomly generated taco"})})]})})}}]),c}(r.a.Component),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()},50:function(e,t,c){}},[[132,1,2]]]);
//# sourceMappingURL=main.6ef2987b.chunk.js.map