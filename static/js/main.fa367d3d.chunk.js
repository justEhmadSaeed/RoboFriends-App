(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{22:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),c=n.n(o);n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);var a=n(5),s=n(6),i=n(9),h=n(8),b=n(7),u=n(1),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"bg-light-blue tc dib br3 pa2 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"1?150x150"),alt:"robots"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},l=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}))})},j=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"search-box br3 pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",maxHeight:"400px"},children:e.children})},p=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Something is not good"}):this.props.children}}]),n}(r.Component),f=(n(30),"CHANGE_SEARCH_FIELD"),g="REQUEST_ROBOTS_PENDING",v="REQUEST_ROBOTS_SUCCESS",m="REQUEST_ROBOTS_FAILED",x=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(u.jsx)("h1",{className:"tc",children:"Loading..."}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(j,{searchChange:n}),Object(u.jsx)(O,{children:Object(u.jsx)(p,{children:Object(u.jsx)(l,{robots:c})})})]})}}]),n}(r.Component),y=Object(b.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:f,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:g}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:v,payload:t})})).catch((function(t){return e({type:m,payload:t})}))}))}}}))(x),R=n(3),w=n(16),E=n(2),C={searchField:""},S={isPending:!1,robots:[],error:""},N=n(17),k=Object(w.createLogger)(),F=Object(R.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object(E.a)(Object(E.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(E.a)(Object(E.a)({},e),{},{isPending:!0});case v:return Object(E.a)(Object(E.a)({},e),{},{robots:t.payload,isPending:!1});case m:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),P=Object(R.d)(F,Object(R.a)(N.a,k));c.a.render(Object(u.jsx)(b.a,{store:P,children:Object(u.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.fa367d3d.chunk.js.map