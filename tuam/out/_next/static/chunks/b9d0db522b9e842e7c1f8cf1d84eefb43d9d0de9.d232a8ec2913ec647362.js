(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"2qu3":function(e,t,r){"use strict";var n=r("lSNA"),a=r("lwsE"),o=r("W8MJ");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var c,f=(c=r("q1tI"))&&c.__esModule?c:{default:c},d=r("8L3h"),p=r("jwwS");var m=[],h=[],y=!1;function b(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function g(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var a=b(e[n]);a.loading?t.loading=!0:(t.loaded[n]=a.loaded,t.error=a.error),r.push(a.promise),a.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function O(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function a(){if(!n){var t=new _(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var o=r.webpack();h.push((function(e){var t,r=l(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){a();var o=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return a()},i.displayName="LoadableComponent",f.default.forwardRef(i)}var _=function(){function e(t,r){a(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return O(b,e)}function j(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return j(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(g,e)},w.preloadAll=function(){return new Promise((function(e,t){j(m).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};j(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var P=w;t.default=P},Vvt1:function(e,t,r){e.exports=r("a6RD")},a6RD:function(e,t,r){"use strict";var n=r("lSNA");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));if(n=o(o({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var a={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=a}n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};u(r("q1tI"));var i=u(r("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},sex0:function(e,t,r){"use strict";var n=r("wx14"),a=r("1OyB"),o=r("vuIU"),i=r("JX7q"),u=r("Ji7U"),l=r("md7G"),s=r("foSv"),c=r("rePB"),f=r("q1tI"),d=r.n(f),p=r("YFqc"),m=r.n(p),h=r("Vvt1"),y=r.n(h),b=d.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var v=y()((function(){return r.e(4).then(r.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),O={loop:!0,nav:!1,dots:!1,autoplayHoverPause:!0,autoplay:!0,margin:30,navText:["<i class='flaticon-left-chevron'></i>","<i class='flaticon-right-chevron'></i>"],responsive:{0:{items:3,margin:10},576:{items:4},768:{items:5},1200:{items:7}}},_=function(e){Object(u.a)(r,e);var t=g(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),Object(c.a)(Object(i.a)(e),"_isMounted",!1),Object(c.a)(Object(i.a)(e),"state",{display:!1}),e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setState({display:!0})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return b(d.a.Fragment,null,b("section",{className:"partner-area ptb-100 bg-f8f8f8"},b("div",{className:"container"},b("div",{className:"partner-title"},b("h2",null,"Trusted by 20,000 Companies")),this.state.display?b(v,Object(n.a)({className:"partner-slides owl-carousel owl-theme"},O),b("div",{className:"single-partner-item"},b(m.a,{href:"#"},b("a",null,b("img",{src:"/images/partner/partner1.png",alt:"image"})))),b("div",{className:"single-partner-item"},b(m.a,{href:"#"},b("a",null,b("img",{src:"/images/partner/partner2.png",alt:"image"})))),b("div",{className:"single-partner-item"},b(m.a,{href:"#"},b("a",null,b("img",{src:"/images/partner/partner3.png",alt:"image"})))),b("div",{className:"single-partner-item"},b(m.a,{href:"#"},b("a",null,b("img",{src:"/images/partner/partner4.png",alt:"image"})))),b("div",{className:"single-partner-item"},b(m.a,{href:"#"},b("a",null,b("img",{src:"/images/partner/partner5.png",alt:"image"})))),b("div",{className:"single-partner-item"},b(m.a,{href:"#"},b("a",null,b("img",{src:"/images/partner/partner6.png",alt:"image"})))),b("div",{className:"single-partner-item"},b(m.a,{href:"#"},b("a",null,b("img",{src:"/images/partner/partner7.png",alt:"image"}))))):"")))}}]),r}(f.Component);t.a=_},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))}}]);