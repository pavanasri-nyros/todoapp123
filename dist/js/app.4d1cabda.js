(function(t){function e(e){for(var n,i,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);s&&s(e);while(f.length)f.shift()();return d.push.apply(d,u||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(d.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},d=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var s=c;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("TodoInput"),o("TodoList")],1)},d=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"row"},[o("input",{staticClass:"col form-control mr-2",attrs:{type:"text"},domProps:{value:t.todoText},on:{change:t.todoTextChange}}),o("button",{staticClass:"btn btn-primary",on:{click:t.addTodoI}},[t._v("Add")])])])},a=[],c=o("5530"),u=o("2f62"),s=o("c50a"),l={data:function(){return{todoText:""}},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["addTodo"])),{},{todoTextChange:function(t){this.todoText=t.target.value},addTodoI:function(){this.addTodo({id:Object(s["a"])(),title:this.todoText}),this.todoText=""}})},f=l,p=o("2877"),b=Object(p["a"])(f,i,a,!1,null,"7f3c15e2",null),v=b.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.allTodos,(function(t){return o("div",{key:t.id},[o("TodoItem",{attrs:{todo:t}})],1)})),0)},T=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row my-3 justify-content-between"},[t.editing?o("input",{staticClass:"col form-contorl",attrs:{type:"text"},domProps:{value:t.todoText},on:{change:t.todoTextChange}}):o("h3",[t._v(t._s(t.todo.title))]),o("div",[o("button",{staticClass:"btn btn-primary mx-2",on:{click:function(e){return t.updateTodoI(t.todo)}}},[t._v(t._s(t.editing?"Update":"Edit"))]),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteTodo(t.todo.id)}}},[t._v("Delete")])])])])},g=[],x={props:{todo:{}},data:function(){return{todoText:"",editing:!1}},methods:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["deleteTodo","updateTodo"])),{},{todoTextChange:function(t){this.todoText=t.target.value},updateTodoI:function(t){this.editing=1!=this.editing,this.editing?(this.todoText=t.title,this.updateTodo(t)):t.title=this.todoText}})},_=x,O=Object(p["a"])(_,m,g,!1,null,"cfee2de4",null),y=O.exports,j={components:{TodoItem:y},computed:Object(c["a"])({},Object(u["c"])(["allTodos"]))},w=j,C=Object(p["a"])(w,h,T,!1,null,"051ecc36",null),I=C.exports,P={name:"App",components:{TodoInput:v,TodoList:I}},k=P,S=(o("034f"),Object(p["a"])(k,r,d,!1,null,null,null)),E=S.exports;o("f9e3"),o("4de4"),o("c740");n["a"].use(u["a"]);var $=new u["a"].Store({state:{todos:[{id:1,title:"One"},{id:2,title:"Two"},{id:3,title:"Three"}]},getters:{allTodos:function(t){return t.todos}},mutations:{add_todo:function(t,e){t.todos.push(e)},delete_todo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!=e}))},update_todo:function(t,e){var o=t.todos.findIndex((function(t){return t.id==e.id}));-1!=o&&(t.todos[o]=e)}},actions:{addTodo:function(t,e){var o=t.commit;o("add_todo",e)},deleteTodo:function(t,e){var o=t.commit;o("delete_todo",e)},updateTodo:function(t,e){var o=t.commit;o("update_todo",e)}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:$,render:function(t){return t(E)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.4d1cabda.js.map