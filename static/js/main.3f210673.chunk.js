(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/BIONICKIDSLANTED3D.b3a7bd4b.ttf"},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=(a(12),a(1)),i=a(2),l=a(4),h=a(3),u=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"dib ba bw2 br4 pa1 ma1 b--orange grow shadow"},r.a.createElement("img",{class:"db",alt:"robots",src:"https://robohash.org/".concat(t)}),r.a.createElement("dl",{class:"mt2 f6 lh-copy"},r.a.createElement("dd",{class:"ml0 fw6 courier hover-white"},a),r.a.createElement("dd",{class:"ml0 underline-hover"},n)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{key:t[a].id,id:t[a].id,name:t[a].name,email:t[a].email})})))},m=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",className:"pa3 ba bg-lightest-blue shadow-3 br-pill",placeholder:"Search Robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"410px",padding:"10px"}},e.children)},f=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oopps! That is not good."):this.props.children}}]),a}(n.Component),p=(a(13),a(14),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robot:[],searchField:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robot:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robot,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Robo Friends"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(d,{robots:n})))):r.a.createElement("h1",null,"Loading")}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3f210673.chunk.js.map