(this["webpackJsonptaco-thing"]=this["webpackJsonptaco-thing"]||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(3),s=a.n(i),n=a(42),o=a.n(n),r=(a(50),a(28)),l=a.n(r),h=a(43),b=a(4),j=a(5),u=a(9),p=a(7),d=a(6),m=a.p+"static/media/logo.e01ecb40.svg",g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).handleClick=c.handleClick.bind(Object(u.a)(c)),c}return Object(j.a)(a,[{key:"handleClick",value:function(){console.log("click handled"),this.props.generateTaco(this.props.tacoName,this.props.recipe,this.props.image)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"taco-card-small",onClick:this.handleClick,children:[Object(c.jsx)("div",{className:"taco-name",children:Object(c.jsx)("h1",{children:this.props.tacoName})}),Object(c.jsx)("div",{className:"taco-image",children:Object(c.jsx)("img",{src:this.props.image,alt:""})})]})}}]),a}(s.a.Component),O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidUpdate",value:function(){console.log(this.props.tacoList)}},{key:"render",value:function(){var e=this,t=this.props.tacoList.map((function(t,a){return Object(c.jsx)(g,{tacoName:t.tacoName,image:t.image,recipe:t.recipe,generateTaco:e.props.generateTaco},a)}));return this.props.isVisible?Object(c.jsx)("div",{children:t}):null}}]),a}(s.a.Component),f=a(44),v=a.n(f),x=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.recipe,t=this.props.image;return Object(c.jsx)("div",{className:"recipe-card",children:Object(c.jsxs)("div",{className:"title-card",children:[Object(c.jsx)("div",{className:"taco-recipe",children:Object(c.jsx)(v.a,{children:e})}),Object(c.jsx)("div",{className:"taco-image",children:Object(c.jsx)("img",{src:t,alt:"a randomly generated taco"})})]})})}}]),a}(s.a.Component),k=a.p+"static/media/heart.ab8d4f8a.svg",T=a.p+"static/media/arrow.9275f0f5.svg",N=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return this.props.isVisible?Object(c.jsxs)("div",{className:"taco-generator",children:[Object(c.jsxs)("div",{className:"taco-buttons",children:[Object(c.jsxs)("button",{className:"get-taco-button",onClick:this.props.fetchTaco,children:[Object(c.jsx)("span",{className:"arrow",children:Object(c.jsx)("img",{src:T,alt:""})}),Object(c.jsx)("span",{children:"Not delicious? Taco 'nother chance \ud83c\udf2e"})]}),Object(c.jsxs)("button",{className:"like-button",onClick:this.props.likeTaco,children:[Object(c.jsx)("span",{children:Object(c.jsx)("img",{className:"heart",src:k,alt:""})}),Object(c.jsx)("span",{children:"Like"})]})]}),Object(c.jsx)(x,{recipe:this.props.recipe,image:this.props.image})]}):null}}]),a}(s.a.Component),L=(a(130),a(131),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(b.a)(this,a),(e=t.call(this)).fetchTaco=e.fetchTaco.bind(Object(u.a)(e)),e.toggletacoListVisible=e.toggletacoListVisible.bind(Object(u.a)(e)),e.likeTaco=e.likeTaco.bind(Object(u.a)(e)),e.generateTaco=e.generateTaco.bind(Object(u.a)(e)),e.state={tacoListVisible:!1,tacoList:[]},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchTaco()}},{key:"toggletacoListVisible",value:function(){this.setState({tacoListVisible:!this.state.tacoListVisible})}},{key:"likeTaco",value:function(){var e={tacoName:this.state.tacoName,image:this.state.image,recipe:this.state.recipe};this.state.tacoList.some((function(t){return t.tacoName===e.tacoName}))||this.setState({tacoList:this.state.tacoList.concat(e)})}},{key:"fetchTaco",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,a,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",redirect:"follow"},"https://taco-randomizer.herokuapp.com/random/?full-taco=true",e.next=4,fetch("https://taco-randomizer.herokuapp.com/random/?full-taco=true",t).then((function(e){return e.json()}));case 4:a=e.sent,console.log(a.name),c=a.name,i=/!\[(.*?)\]\((.*?)\)/g,s=a.recipe.replace(i,""),this.setState({recipe:s,image:"https://repository-images.githubusercontent.com/199493546/d2739980-b53b-11e9-9622-4b4307910050",tacoName:c});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"generateTaco",value:function(e,t,a){this.setState({recipe:t,image:a,tacoName:e,tacoListVisible:!1})}},{key:"render",value:function(){var e=this.state.tacoListVisible?"Random Taco":"Favourites";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"top-bar",children:[Object(c.jsx)("img",{src:m,alt:"Tacothing logo"}),Object(c.jsx)("button",{className:"my-tacos",onClick:this.toggletacoListVisible,children:e})]})}),Object(c.jsxs)("main",{children:[Object(c.jsx)(N,{recipe:this.state.recipe,image:this.state.image,fetchTaco:this.fetchTaco,isVisible:!this.state.tacoListVisible,likeTaco:this.likeTaco}),Object(c.jsx)(O,{isVisible:this.state.tacoListVisible,tacoList:this.state.tacoList,generateTaco:this.generateTaco})]})]})}}]),a}(s.a.Component)),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),y()},50:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.e8e65b0d.chunk.js.map