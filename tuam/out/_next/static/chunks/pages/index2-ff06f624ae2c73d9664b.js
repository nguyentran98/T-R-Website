_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"7DGc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index2",function(){return n("fC+r")}])},VCL8:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function l(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,l=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?l="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(l="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==l||null!==s){var c=e.displayName||e.name,r="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+r+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==l?"\n  "+l:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,a)}}return e}n.r(t),n.d(t,"polyfill",(function(){return l})),a.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},"fC+r":function(e,t,n){"use strict";n.r(t);var a=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),l=n("md7G"),s=n("foSv"),c=n("q1tI"),r=n.n(c),u=n("zCU4"),p=n("wx14"),m=n("JX7q"),f=n("rePB"),d=n("YFqc"),v=n.n(d),h=n("60Bi"),b=n.n(h),N=n("Vvt1"),y=n.n(N),g=r.a.createElement;function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var S=y()((function(){return n.e(4).then(n.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),j={loop:!0,nav:!0,dots:!1,autoplayHoverPause:!0,autoplay:!0,smartSpeed:1e3,animateOut:"slideOutDown",animateIn:"slideInDown",items:1,navText:["<i class='flaticon-left-chevron'></i>","<i class='flaticon-right-chevron'></i>"]},w=function(e){Object(i.a)(n,e);var t=O(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i)),Object(f.a)(Object(m.a)(e),"_isMounted",!1),Object(f.a)(Object(m.a)(e),"state",{display:!1,isOpen:!1}),Object(f.a)(Object(m.a)(e),"openModal",(function(){e.setState({isOpen:!0})})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setState({display:!0})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return g(r.a.Fragment,null,this.state.display?g(S,Object(p.a)({className:"home-area home-slides owl-carousel owl-theme"},j),g("div",{className:"main-banner item-bg1"},g("div",{className:"d-table"},g("div",{className:"d-table-cell"},g("div",{className:"container"},g("div",{className:"main-banner-content"},g("span",{className:"sub-title"},"The Best Workspace in New York"),g("h1",null,"Professional, Creative, Flexible, Scalable Workspace"),g("div",{className:"btn-box"},g(v.a,{href:"#"},g("a",{className:"default-btn"},"Book A Room ",g("span",null))),g("div",{onClick:function(t){t.preventDefault(),e.openModal()},className:"optional-btn"},g("i",{className:"flaticon-play-button"})," Watch Video"))))))),g("div",{className:"main-banner item-bg2"},g("div",{className:"d-table"},g("div",{className:"d-table-cell"},g("div",{className:"container"},g("div",{className:"main-banner-content"},g("span",{className:"sub-title"},"The Best Workspace in New York"),g("h1",null,"Professional, Creative, Flexible, Scalable Workspace"),g("div",{className:"btn-box"},g(v.a,{href:"#"},g("a",{className:"default-btn"},"Book A Room ",g("span",null))),g("div",{onClick:function(t){t.preventDefault(),e.openModal()},className:"optional-btn"},g("i",{className:"flaticon-play-button"})," Watch Video"))))))),g("div",{className:"main-banner item-bg3"},g("div",{className:"d-table"},g("div",{className:"d-table-cell"},g("div",{className:"container"},g("div",{className:"main-banner-content"},g("span",{className:"sub-title"},"The Best Workspace in New York"),g("h1",null,"Professional, Creative, Flexible, Scalable Workspace"),g("div",{className:"btn-box"},g(v.a,{href:"#"},g("a",{className:"default-btn"},"Book A Room ",g("span",null))),g("div",{onClick:function(t){t.preventDefault(),e.openModal()},className:"optional-btn"},g("i",{className:"flaticon-play-button"})," Watch Video")))))))):"",g(b.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:"szuchBiLrEM",onClose:function(){return e.setState({isOpen:!1})}}))}}]),n}(c.Component),R=r.a.createElement;function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var W=function(e){Object(i.a)(n,e);var t=_(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return R(r.a.Fragment,null,R("section",{className:"services-boxes-area"},R("div",{className:"container"},R("div",{className:"row"},R("div",{className:"col-lg-4 col-md-6 col-sm-6"},R("div",{className:"single-box"},R("img",{src:"/images/services/services1.jpg",alt:"image"}),R("div",{className:"content"},R("h3",null,R(v.a,{href:"/service-details"},R("a",null,"Office Spaces")))),R("div",{className:"hover-content"},R("h3",null,R(v.a,{href:"/service-details"},R("a",null,"Office Spaces"))),R("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolore."),R(v.a,{href:"/service-details"},R("a",{className:"read-more-btn"},"Learn More"))))),R("div",{className:"col-lg-4 col-md-6 col-sm-6"},R("div",{className:"single-box"},R("img",{src:"/images/services/services2.jpg",alt:"image"}),R("div",{className:"content"},R("h3",null,R(v.a,{href:"/service-details"},R("a",null,"Coworking")))),R("div",{className:"hover-content"},R("h3",null,R(v.a,{href:"/service-details"},R("a",null,"Coworking"))),R("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolore."),R(v.a,{href:"/service-details"},R("a",{className:"read-more-btn"},"Learn More"))))),R("div",{className:"col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3"},R("div",{className:"single-box"},R("img",{src:"/images/services/services3.jpg",alt:"image"}),R("div",{className:"content"},R("h3",null,R(v.a,{href:"/service-details"},R("a",null,"Meeting Spaces")))),R("div",{className:"hover-content"},R("h3",null,R(v.a,{href:"/service-details"},R("a",null,"Meeting Spaces"))),R("p",null,"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolore."),R(v.a,{href:"/service-details"},R("a",{className:"read-more-btn"},"Learn More")))))))))}}]),n}(c.Component),D=r.a.createElement;function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var U=function(e){Object(i.a)(n,e);var t=k(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return D(r.a.Fragment,null,D("section",{className:"about-area ptb-100"},D("div",{className:"container"},D("div",{className:"row align-items-center"},D("div",{className:"col-lg-6 col-md-12"},D("div",{className:"about-title"},D("span",null,"About Us"),D("h2",null,"We offer creative working environments that suit your business"))),D("div",{className:"col-lg-6 col-md-12"},D("div",{className:"about-text"},D("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),D(v.a,{href:"/about"},D("a",{className:"read-more-btn"},"More About Us ",D("i",{className:"flaticon-next"})))))))))}}]),n}(c.Component),C=n("YRmA"),P=n("sex0"),F=r.a.createElement;function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var E=function(e){Object(i.a)(n,e);var t=x(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return F(r.a.Fragment,null,F("section",{className:"why-choose-us-area"},F("div",{className:"container-fluid"},F("div",{className:"row"},F("div",{className:"col-lg-5 col-md-12"},F("div",{className:"why-choose-us-image"},F("img",{src:"/images/why-choose-img1.jpg",alt:"image"}))),F("div",{className:"col-lg-7 col-md-12"},F("div",{className:"why-choose-us-content"},F("div",{className:"content"},F("span",{className:"sub-title"},"Your Benefits"),F("h2",null,"Why Choose Us"),F("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),F("ul",{className:"features-list"},F("li",null,F("div",{className:"icon"},F("i",{className:"flaticon-layers"})),F("span",null,"Creative Space"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),F("li",null,F("div",{className:"icon"},F("i",{className:"flaticon-security"})),F("span",null,"24/7 Access"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),F("li",null,F("div",{className:"icon"},F("i",{className:"flaticon-wifi"})),F("span",null,"High Speed Wifi"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),F("li",null,F("div",{className:"icon"},F("i",{className:"flaticon-location"})),F("span",null,"Great Location"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),F("li",null,F("div",{className:"icon"},F("i",{className:"flaticon-taxi"})),F("span",null,"Car Sharing"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),F("li",null,F("div",{className:"icon"},F("i",{className:"flaticon-calendar"})),F("span",null,"Weekly Events"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit")))))))))}}]),n}(c.Component),M=n("1g+J"),L=n("fOcN"),B=n("IlQe"),A=n("CSWC"),I=n("Elbp"),T=n("cHmR"),Y=n("po4M"),q=n("v6Hh"),G=r.a.createElement;function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var V=function(e){Object(i.a)(n,e);var t=J(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return G(r.a.Fragment,null,G(u.a,null),G(w,null),G(W,null),G(U,null),G(C.a,null),G(P.a,null),G(E,null),G(M.a,null),G(L.a,null),G(B.a,null),G(A.a,null),G(I.a,null),G(T.a,null),G(Y.a,null),G(q.a,null))}}]),n}(c.Component);t.default=V}},[["7DGc",0,2,1,3,5,7,9]]]);