(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{8454:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/smart-sparrow",function(){return n(273)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a({},o,e));!1;(o=a({},o,t)).loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,s(n,o);delete o.ssr}return n(o)},t.noSSR=s;var a=n(6495).Z,o=n(2648).Z,i=(o(n(7294)),o(n(4302)));function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,i=(0,n(2648).Z)(n(7294)),s=n(6319),l=n(7294).useSyncExternalStore,u=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var _=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!u){var t=new _(e,a);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},r=function(){n();var e=i.default.useContext(s.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=i.default.lazy(a.loader));var u=null;if(!d){var f=a.webpack?a.webpack():a.modules;f&&c.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,i=f[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;if(-1!==e.indexOf(s))return n()}}catch(l){r=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}}))}var h=a.suspense?function(e,t){return r(),i.default.createElement(a.lazy,o({},e,{ref:t}))}:function(e,t){r();var n=l(u.subscribe,u.getCurrentValue,u.getCurrentValue);return i.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:u.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",i.default.forwardRef(h)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){m(u).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};m(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var p=h;t.default=p},2045:function(e,t,n){"use strict";n.d(t,{FV:function(){return x},XR:function(){return g},T4:function(){return b},II:function(){return j},IG:function(){return N},d:function(){return k},Hr:function(){return w},ee:function(){return P}});var r=n(1799),a=n(9396),o=n(9534),i=n(5893),s=n(8526),l=n(2221),u=n(1424),c=n(6602),d=n(7346),f=n(3994),_=n(7260),h=n(4529),m=n(7294),p=n(2362),v=n(5903),y=n.n(v);function b(e){var t=e.title,n=e.description,r=e.linkLabel,a=void 0===r?"Visit website":r,o=e.url,u=e.roles,f=e.className;return(0,i.jsx)(c.$,{className:(0,p.Sh)(y().header,f),as:"section",children:(0,i.jsxs)("div",{className:y().headerContent,style:(0,p.Fh)({initDelay:(0,p.aU)(300)}),children:[(0,i.jsxs)("div",{className:y().details,children:[(0,i.jsx)(l.X,{className:y().title,level:2,as:"h1",children:t}),(0,i.jsx)(d.x,{className:y().description,size:"xl",as:"p",children:n}),!!o&&(0,i.jsx)(s.z,{secondary:!0,iconHoverShift:!0,className:y().linkButton,icon:"chevronRight",href:o,children:a})]}),!!(null===u||void 0===u?void 0:u.length)&&(0,i.jsx)("ul",{className:y().meta,children:null===u||void 0===u?void 0:u.map((function(e,t){return(0,i.jsx)("li",{className:y().metaItem,style:(0,p.Fh)({delay:(0,p.aU)(600+140*t)}),children:(0,i.jsx)(d.x,{secondary:!0,children:e})},e)}))})]})})}var g=function(e){var t=e.className,n=(0,o.Z)(e,["className"]);return(0,i.jsx)("article",(0,r.Z)({className:(0,p.Sh)(y().project,t)},n))},j=(0,m.forwardRef)((function(e,t){var n=e.className,s=e.light,l=e.padding,u=void 0===l?"both":l,d=e.fullHeight,f=e.backgroundOverlayOpacity,_=void 0===f?.9:f,h=e.backgroundElement,m=e.children,v=(0,o.Z)(e,["className","light","padding","fullHeight","backgroundOverlayOpacity","backgroundElement","children"]);return(0,i.jsxs)("section",(0,a.Z)((0,r.Z)({className:(0,p.Sh)(y().section,n),"data-light":s,"data-full-height":d,ref:t},v),{children:[!!h&&(0,i.jsx)("div",{className:y().sectionBackground,style:(0,p.Fh)({opacity:_}),children:h}),(0,i.jsx)(c.$,{className:y().sectionInner,"data-padding":u,children:m})]}))})),x=function(e){var t=e.opacity,n=void 0===t?.7:t,a=e.className,s=(0,o.Z)(e,["opacity","className"]),l=(0,m.useRef)();return(0,h.YT)(.6,(function(e){l.current&&l.current.style.setProperty("--offset","".concat(e,"px"))})),(0,i.jsx)(_.u,{in:!0,timeout:(0,p.zG)(f.T.base.durationM),children:function(e){return(0,i.jsxs)("div",{className:(0,p.Sh)(y().backgroundImage,a),"data-visible":e,children:[(0,i.jsx)("div",{className:y().backgroundImageElement,ref:l,children:(0,i.jsx)(u.E,(0,r.Z)({alt:"",role:"presentation"},s))}),(0,i.jsx)("div",{className:y().backgroundScrim,style:(0,p.Fh)({opacity:n})})]})}})},N=function(e){var t=e.className,n=e.width,a=void 0===n?"l":n,s=(0,o.Z)(e,["className","width"]);return(0,i.jsx)("div",(0,r.Z)({className:(0,p.Sh)(y().sectionContent,t),"data-width":a},s))},k=function(e){var t=e.className,n=e.level,a=void 0===n?3:n,s=e.as,u=void 0===s?"h2":s,c=(0,o.Z)(e,["className","level","as"]);return(0,i.jsx)(l.X,(0,r.Z)({className:(0,p.Sh)(y().sectionHeading,t),as:u,level:a,align:"auto"},c))},w=function(e){var t=e.className,n=(0,o.Z)(e,["className"]);return(0,i.jsx)(d.x,(0,r.Z)({className:(0,p.Sh)(y().sectionText,t),size:"l",as:"p"},n))},P=function(e){var t=e.center,n=e.stretch,a=e.justify,s=void 0===a?"center":a,l=e.width,u=void 0===l?"m":l,c=e.noMargin,d=e.className,f=e.centerMobile,_=(0,o.Z)(e,["center","stretch","justify","width","noMargin","className","centerMobile"]);return(0,i.jsx)("div",(0,r.Z)({className:(0,p.Sh)(y().textRow,d),"data-center":t,"data-stretch":n,"data-center-mobile":f,"data-no-margin":c,"data-width":u,"data-justify":s},_))}},273:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),a=n(5192),o=(n(1424),n(270),n(5633)),i=(n(2323),n(7294)),s=(n(2362),n(8718)),l=n(4529),u=n(2045),c=n(5152),d=n.n(c),f=(d()((function(){return Promise.all([n.e(737),n.e(559),n.e(571),n.e(93)]).then(n.bind(n,9556)).then((function(e){return e.Earth}))}),{loadableGenerated:{webpack:function(){return[9556]}}}),d()((function(){return Promise.all([n.e(737),n.e(559),n.e(571),n.e(93)]).then(n.bind(n,9556)).then((function(e){return e.EarthSection}))}),{loadableGenerated:{webpack:function(){return[9556]}}}),function(){(0,s.Fg)().themeId,(0,l.bp)().dispatch;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(u.XR,{className:"spr",children:(0,r.jsx)(o.h,{title:"Designing the future of education",prefix:"Projects",description:"I worked as the design lead on a major iteration of Smart Sparrow\u2019s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers."})}),(0,r.jsx)(a.$,{})]})})},5903:function(e){e.exports={project:"Project_project__JsLZW",section:"Project_section__J6GYi",sectionInner:"Project_sectionInner__BbL68",sectionBackground:"Project_sectionBackground__c9_MI",backgroundImage:"Project_backgroundImage___m2co",backgroundImageElement:"Project_backgroundImageElement__YUY7W",backgroundScrim:"Project_backgroundScrim__kwaD6",header:"Project_header__wfcEM",headerContent:"Project_headerContent__vZAy7",details:"Project_details__7Wyft",title:"Project_title__gFlr3",projectFadeSlide:"Project_projectFadeSlide__G5Z1R",description:"Project_description__xM50C",linkButton:"Project_linkButton__Aa9Ww",meta:"Project_meta__i27_j",metaItem:"Project_metaItem__wSCNh",image:"Project_image__mqYQv",sectionContent:"Project_sectionContent__uitMB",sectionHeading:"Project_sectionHeading__smXXM",sectionText:"Project_sectionText__wfpeH",textRow:"Project_textRow__tVxUD",sectionColumns:"Project_sectionColumns__uNmfU"}},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[199,774,888,179],(function(){return t=8454,e(e.s=t);var t}));var t=e.O();_N_E=t}]);