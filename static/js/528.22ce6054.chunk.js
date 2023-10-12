/*! For license information please see 528.22ce6054.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[528],{174:function(t,n,e){e.d(n,{O:function(){return y}});var r,o,i,a,c=e(689),u=e(168),s=e(87),l=e(867),f=l.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  justify-content: center;\n\n  padding: 10px;\n  margin-top: 15px;\n\n  list-style: none;\n"]))),p=l.ZP.li(o||(o=(0,u.Z)(["\n  /* border: 1px solid black; */\n  max-width: 150px;\n  /* height: 280px; */\n\n  padding: 5px;\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus-visible {\n    scale: 1.1;\n    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.26);\n  }\n"]))),h=(0,l.ZP)(s.rU)(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  text-decoration: none;\n"]))),d=l.ZP.p(a||(a=(0,u.Z)(["\n  display: block;\n  text-align: center;\n\n  color: black;\n"]))),v=e(184),y=function(t){var n=t.moviesList,e=(0,c.TH)();return(0,v.jsx)(f,{children:n.map((function(t){var n=t.id,r=t.title,o=t.original_title,i=t.poster_path;return(0,v.jsx)(p,{children:(0,v.jsxs)(h,{to:"/movies/".concat(n),state:{from:e},children:[(0,v.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500".concat(i):"https://i.postimg.cc/VL0DBTFD/cinema-popcorn-soda-drink-tickets-and-film-strip-movie-poster-with-fast-food-snack-and-cola-beverage.webp",alt:r&&o,width:"150",height:"200"}),(0,v.jsx)(d,{children:r&&o})]})},n)}))})}},528:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,o,i,a=e(439),c=e(791),u=e(168),s=e(867),l=s.ZP.form(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 25px;\n  gap: 5px;\n"]))),f=s.ZP.input(o||(o=(0,u.Z)(["\n  width: 200px;\n  padding: 5px;\n"]))),p=s.ZP.button(i||(i=(0,u.Z)(["\n  display: block;\n\n  background-color: white;\n  border: 1px solid grey;\n\n  border-radius: 4px;\n\n  &:hover,\n  :active {\n    color: white;\n    background-color: orangered;\n    border: 0px;\n  }\n"]))),h=e(184),d=function(t){var n=t.onSubmit,e=(0,c.useState)(""),r=(0,a.Z)(e,2),o=r[0],i=r[1];return(0,h.jsxs)(l,{onSubmit:function(t){t.preventDefault(),n(o),i("")},children:[(0,h.jsx)(f,{type:"text",placeholder:"Enter movie title",onChange:function(t){i(t.target.value)},value:o}),(0,h.jsx)(p,{type:"submit",children:"Search"})]})},v=e(87),y=e(174),g=e(635),m=function(){var t,n=(0,c.useState)(""),e=(0,a.Z)(n,2),r=e[0],o=e[1],i=(0,v.lr)(),u=(0,a.Z)(i,2),s=u[0],l=u[1],f=null!==(t=s.get("query"))&&void 0!==t?t:"";return(0,c.useEffect)((function(){f&&(0,g.E3)(f).then((function(t){return o(t.data.results)})).catch((function(t){return console.log(t.message)}))}),[f]),(0,h.jsxs)("div",{children:[(0,h.jsx)(d,{onSubmit:function(t){l(""!==t?{query:t}:{})}}),r.length>0&&(0,h.jsx)(y.O,{moviesList:r})]})}},635:function(t,n,e){e.d(n,{E3:function(){return s},Mc:function(){return u},SU:function(){return c},Uw:function(){return f},eH:function(){return l}});var r=e(861),o=e(243);function i(){i=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new P(r||[]);return o(a,"_invoke",{value:E(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,k=b&&b(b(G([])));k&&k!==e&&r.call(k,c)&&(w=k);var L=x.prototype=g.prototype=Object.create(w);function Z(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function e(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function E(n,e,r){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=_(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=p(n,e,r);if("normal"===s.type){if(o=r.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function _(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,_(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=p(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(n){if(n||""===n){var e=n[c];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},Z(j.prototype),l(j.prototype,u,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=G,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:G(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="0ffc72445f4cf4ad84f6636a20d6ec36",c=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?api_key=".concat(a));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"?api_key=").concat(a,"&language=en-US\n  "));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?api_key=".concat(a,"&language=en-US&query=").concat(n,"&include_adult=false\n  "));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/reviews?api_key=").concat(a));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=528.22ce6054.chunk.js.map