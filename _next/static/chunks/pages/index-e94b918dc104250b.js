(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2198:function(e,t,n){"use strict";var r,i=n(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}t.Z=e=>i.createElement("svg",a({stroke:"currentColor",width:43,height:15,viewBox:"0 0 43 15"},e),r||(r=i.createElement("path",{d:"M1 1l20.5 12L42 1",strokeWidth:2,fill:"none"})))},3916:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4947)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=i({},a,e));!1;(a=i({},a,t)).loadableGenerated&&delete(a=i({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,s(n,a);delete a.ssr}return n(a)},t.noSSR=s;var i=n(6495).Z,a=n(2648).Z,o=(a(n(7294)),a(n(4302)));function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,i=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,o=(0,n(2648).Z)(n(7294)),s=n(6319),l=n(7294).useSyncExternalStore,c=[],u=[],d=!1;function A(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var f=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!c){var t=new f(e,i);c={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return c.promise()},r=function(){n();var e=o.default.useContext(s.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach((function(t){e(t)}))},i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);i.suspense&&(i.lazy=o.default.lazy(i.loader));var c=null;if(!d){var A=i.webpack?i.webpack():i.modules;A&&u.push((function(e){var t=!0,r=!1,i=void 0;try{for(var a,o=A[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return n()}}catch(l){r=!0,i=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}))}var h=i.suspense?function(e,t){return r(),o.default.createElement(i.lazy,a({},e,{ref:t}))}:function(e,t){r();var n=l(c.subscribe,c.getCurrentValue,c.getCurrentValue);return o.default.useImperativeHandle(t,(function(){return{retry:c.retry}}),[]),o.default.useMemo((function(){return n.loading||n.error?o.default.createElement(i.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:c.retry}):n.loaded?o.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",o.default.forwardRef(h)}(A,e)}function p(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return p(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){p(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};p(u,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var m=h;t.default=m},4451:function(e,t,n){"use strict";n.d(t,{V:function(){return b}});var r=n(7568),i=n(1799),a=n(9396),o=n(9534),s=n(4051),l=n.n(s),c=n(5893),u=n(2323),d=n(6240),A=n(7378),f=n(7294);function h(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n(2362),g=n(9085),v=n.n(g),_=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],x="glyph",y="value";var b=(0,f.memo)((function(e){var t=e.text,n=e.start,s=void 0===n||n,p=e.delay,g=void 0===p?0:p,b=e.className,j=(0,o.Z)(e,["text","start","delay","className"]),w=(0,f.useRef)([{type:x,value:""}]),I=(0,f.useRef)(),D=(0,d.J)(),E=(0,A.q)(0,{stiffness:8,damping:5});return(0,f.useEffect)((function(){var e=I.current,n=t.split(""),i=function(){var t=w.current.map((function(e){return'<span class="'.concat(v()[e.type],'">').concat(e.value,"</span>")}));e.innerHTML=t.join("")},a=E.onChange((function(e){w.current=function(e,t,n){return e.map((function(e,r){if(r<n)return{type:y,value:e};if(n%1<.5){var i=Math.floor(Math.random()*_.length);return{type:x,value:_[i]}}return{type:x,value:t[r].value}}))}(n,w.current,e),i()})),o=function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(g);case 2:E.set(n.length);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s&&!D&&o(),D&&(w.current=n.map((function(e,t){return{type:y,value:n[t]}})),i()),function(){null===a||void 0===a||a()}}),[E,D,s,g,t]),(0,c.jsxs)("span",(0,a.Z)((0,i.Z)({className:(0,m.Sh)(v().text,b)},j),{children:[(0,c.jsx)(u.T,{className:v().label,children:t}),(0,c.jsx)("span",{"aria-hidden":!0,className:v().content,ref:I})]}))}))},3185:function(e,t,n){"use strict";n.d(t,{i:function(){return u}});var r=n(1799),i=n(9396),a=n(9534),o=n(5893),s=n(2362),l=n(3265),c=n.n(l),u=function(e){var t=e.lineWidth,n=e.lineHeight,l=e.notchWidth,u=e.notchHeight,d=e.collapseDelay,A=e.collapsed,f=e.className,h=e.style,p=(0,a.Z)(e,["lineWidth","lineHeight","notchWidth","notchHeight","collapseDelay","collapsed","className","style"]);return(0,o.jsxs)("div",(0,i.Z)((0,r.Z)({className:(0,s.Sh)(c().divider,f),style:(0,s.Fh)({lineWidth:t,lineHeight:n,notchWidth:l,notchHeight:u,collapseDelay:(0,s.aU)(d)},h)},p),{children:[(0,o.jsx)("div",{className:c().line,"data-collapsed":A}),(0,o.jsx)("div",{className:c().notch,"data-collapsed":A,style:(0,s.Fh)({collapseDelay:(0,s.aU)(d+160)})})]}))};u.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0}},4947:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(828),i=n(9815),a=n(5893),o=n(5192),s=n(5633),l=n(1799),c=n(9396),u=n(9534),d=n(2198),A=n(4451),f=n(2221),h=n(6602),p=n(8718),m=n(3994),g=n(7260),v=n(2323),_=n(1190),x=n(4529),y=n(5152),b=n.n(y),j=n(1664),w=n.n(j),I=n(7294),D=n(2362),E=n(1593),C=n.n(E),S=b()((function(){return Promise.all([n.e(737),n.e(559),n.e(980)]).then(n.bind(n,6980)).then((function(e){return e.DisplacementSphere}))}),{loadableGenerated:{webpack:function(){return[6980]}}});function k(e){var t=e.id,n=e.sectionRef,r=e.disciplines,i=e.scrollIndicatorHidden,o=(0,u.Z)(e,["id","sectionRef","disciplines","scrollIndicatorHidden"]),s=(0,p.Fg)(),y=(0,I.useState)(0),b=y[0],j=y[1],E=(0,x.D9)(s),k=[r.slice(0,-1).join(", "),r.slice(-1)[0]].join(", and "),P=r.find((function(e,t){return t===b})),M="".concat(t,"-title"),B=(0,x.jh)();(0,x.Yz)((function(){var e=(b+1)%r.length;j(e)}),5e3,s.themeId),(0,I.useEffect)((function(){E&&E.themeId!==s.themeId&&j(0)}),[s.themeId,E]);var N=function(e){e.preventDefault(),B(e.currentTarget.href)};return(0,a.jsx)(h.$,(0,c.Z)((0,l.Z)({className:C().intro,as:"section",ref:n,id:t,"aria-labelledby":M,tabIndex:-1},o),{children:(0,a.jsx)(g.u,{in:!0,timeout:3e3,children:function(e,t){return(0,a.jsxs)(I.Fragment,{children:[(0,a.jsx)(S,{}),(0,a.jsxs)("header",{className:C().text,children:[(0,a.jsx)("h1",{className:C().name,"data-visible":e,id:M,children:(0,a.jsx)(A.V,{text:"MolarFox",delay:300})}),(0,a.jsxs)(f.X,{level:0,as:"h2",className:C().title,children:[(0,a.jsx)(v.T,{className:C().label,children:"Engineer + ".concat(k)}),(0,a.jsxs)("span",{"aria-hidden":!0,className:C().row,children:[(0,a.jsx)("span",{className:C().word,"data-status":t,style:(0,D.Fh)({delay:m.T.base.durationXS}),children:"Engineer"}),(0,a.jsx)("span",{className:C().line,"data-status":t})]}),(0,a.jsx)("div",{className:C().row,component:"span",children:(0,a.jsx)(_.M,{children:r.map((function(e){return(0,a.jsx)(g.u,{unmount:!0,in:e===P,timeout:{enter:3e3,exit:2e3},children:function(t,n){return(0,a.jsx)("span",{"aria-hidden":!0,className:C().word,"data-plus":!0,"data-status":n,style:(0,D.Fh)({delay:m.T.base.durationL}),children:e})}},e)}))})})]})]}),(0,a.jsx)(w(),{href:"/#details",children:(0,a.jsx)("a",{className:C().scrollIndicator,"data-status":t,"data-hidden":i,onClick:N,children:(0,a.jsx)(v.T,{children:"Scroll to details"})})}),(0,a.jsx)(w(),{href:"/#details",children:(0,a.jsxs)("a",{className:C().mobileScrollIndicator,"data-status":t,"data-hidden":i,onClick:N,children:[(0,a.jsx)(v.T,{children:"Scroll to details"}),(0,a.jsx)(d.Z,{"aria-hidden":!0})]})})]})}},s.themeId)}))}var P={src:"/_next/static/media/molar-headshot.c7936483.jpeg",height:960,width:960,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAApAMh/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDBDEABRETIf/aAAgBAQABPwDcrjUrVcyW4uO1SkeSVfzI1//EABsRAAAHAQAAAAAAAAAAAAAAAAABAgMEISMy/9oACAECAQE/AJDKc7Pkf//EABcRAAMBAAAAAAAAAAAAAAAAAAACESH/2gAIAQMBAT8ARrcP/9k="},M={src:"/_next/static/media/molar-headshot.603a6e43.png",height:960,width:960,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AP/dg//hjP7djv/jkMywgJyHfvnTgf/ahQDozZnPs4n+1ob715Dntn+tm5rfu3j/3IYA89WYwaqez6eBtqibjXlslYOE0Kx2/92DAP/be9O/mGllbqyReXRjV4JYO513SPLJcQD/2Hr2zmvFoXDnupXbsI7slgWPUi/Jn1EA/tiH/9iA3L6Pw7Ksw6mZ46d/q3If+MtlAPzhsv//++7n37Wopq2in5iHgD4rFZN1QADkvnnaz87Vuq+KXEdfSkA1PEBGNC2mfDkD63r5CtC4agAAAABJRU5ErkJggg=="},B={src:"/_next/static/media/molar-headshot-placeholder.df363a4c.jpeg",height:280,width:280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAApAOh/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAAhBREx/9oACAEBAAE/AOSutStQGS3F0JVKRnZKvr0Z/8QAGhEAAQUBAAAAAAAAAAAAAAAAAwABAiEjMv/aAAgBAgEBPwA4Y52/K//EABcRAAMBAAAAAAAAAAAAAAAAAAACESH/2gAIAQMBAT8ARrcP/9k="},N=n(8526),R=n(3185),Q=n(1424),T=n(270),Z=n(7346),F=n(3845),O=n.n(F),H=function(e){var t=e.visible,n=e.titleId;return(0,a.jsxs)(I.Fragment,{children:[(0,a.jsx)(f.X,{className:O().title,"data-visible":t,level:3,id:n,children:(0,a.jsx)(A.V,{text:"G'Day!",start:t,delay:500})}),(0,a.jsxs)(Z.x,{className:O().description,"data-visible":t,size:"l",as:"p",children:["I'm RJ, aka MolarFox: a Melbourne-based software engineer, amateur radio operator, and tinkerer. In my day-to-day here in my current role at ",(0,a.jsx)(T.r,{href:"https://www.lexer.io/",children:"Lexer"}),", I regularly bounce from software engineer to devops engineer, data scientist, and fullstack webapp dev to build, maintain, and oversee the dataflows through our system and its 85+ integrations."]}),(0,a.jsxs)(Z.x,{className:O().description,"data-visible":t,size:"l",as:"p",children:["In my spare time you'll find me hiking up hills with my QRP radio gear, 3D printing my growing army of plastic foxes, playing ",(0,a.jsx)(T.r,{href:"https://steamcommunity.com/id/MolarFox/",children:"video games"}),", listening to ",(0,a.jsx)(T.r,{href:"https://bandcamp.com/molarfox",children:"music"}),", and making bottled chaos in my workshop."]}),(0,a.jsxs)(Z.x,{className:O().description,"data-visible":t,size:"l",as:"p",children:["Here's my ",(0,a.jsx)(T.r,{href:"/404",children:"gallery"}),", my ",(0,a.jsx)(T.r,{href:"https://blog.molarfox.io/",children:"blog"}),", and my list of ",(0,a.jsx)(T.r,{href:"/404",children:"preferred tools and gear"}),"."]})]})},L=function(e){var t=e.id,n=e.visible,r=e.sectionRef,i=(0,I.useState)(!1),o=i[0],s=i[1],l="".concat(t,"-title");return(0,a.jsx)(h.$,{className:O().profile,onFocus:function(){return s(!0)},onBlur:function(){return s(!1)},as:"section",id:t,ref:r,"aria-labelledby":l,tabIndex:-1,children:(0,a.jsx)(g.u,{in:n||o,timeout:0,children:function(e){return(0,a.jsxs)("div",{className:O().content,children:[(0,a.jsxs)("div",{className:O().column,children:[(0,a.jsx)(H,{visible:e,titleId:l}),(0,a.jsx)(N.z,{secondary:!0,className:O().button,"data-visible":e,href:"/contact",icon:"send",children:"Send me a message"})]}),(0,a.jsxs)("div",{className:O().column,children:[(0,a.jsxs)("div",{className:O().tag,"aria-hidden":!0,children:[(0,a.jsx)(R.i,{notchWidth:"64px",notchHeight:"8px",collapsed:!e,collapseDelay:1e3}),(0,a.jsx)("div",{className:O().tagText,"data-visible":e,children:"About Me"})]}),(0,a.jsxs)("div",{className:O().image,children:[(0,a.jsx)(Q.E,{reveal:!0,delay:100,placeholder:B,srcSet:[P,M],sizes:"(max-width: ".concat(D.BC.mobile,"px) 100vw, 480px"),alt:"Digital artwork of me / my fox character, Molar. He's depicted in this headshot in his bright orange / dark grey fur, with goggles on his head, a smiling expression, and a leather jacket on. Artwork by efi"}),(0,a.jsx)("svg",{"aria-hidden":"true",width:"135",height:"765",viewBox:"0 0 135 765",className:O().svg,"data-visible":e})]})]})]})}})})},U=n(1867),V=n.n(U),K=["Radio Operator","Fox","Photographer","Guitarist","Maker","Modder","3D Modeler","Tinkerer","3D Printerist","Python Dev","Ruby Dev","Scala Dev","Fullstack Dev","Kotlin Dev","DevOps","Rust Dev","C++ Dev","AWS Cloud Dev","Arduino Dev"];var W=function(){var e=(0,I.useState)([]),t=e[0],n=e[1],l=(0,I.useState)(!1),c=l[0],u=l[1],d=(0,I.useState)(K),A=d[0],f=d[1],h=(0,I.useRef)(),p=(0,I.useRef)();return(0,I.useEffect)((function(){var e=[h,p];f(K.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})));var a=new IntersectionObserver((function(e,r){e.forEach((function(e){if(e.isIntersecting){var a=e.target;if(r.unobserve(a),t.includes(a))return;n((function(e){return(0,i.Z)(e).concat([a])}))}}))}),{rootMargin:"0px 0px -10% 0px",threshold:.1}),o=new IntersectionObserver((function(e){var t=(0,r.Z)(e,1)[0];u(!t.isIntersecting)}),{rootMargin:"-100% 0px 0px 0px"});return e.forEach((function(e){a.observe(e.current)})),o.observe(h.current),function(){a.disconnect(),o.disconnect()}}),[t]),(0,a.jsxs)("div",{className:V().home,children:[(0,a.jsx)(s.h,{title:"Software & ECSE Engineer",description:"Portfolio and personal site of MolarFox / RJ: A Melbourne based software engineer with a passion for learning, and an eye for optimisation. Interests include Amateur Radio, 3D Printing, Cybersecurity, Music, 4x4 Off-Roading, Hiking, and Tinkering. "}),(0,a.jsx)(k,{id:"intro",sectionRef:h,disciplines:A,scrollIndicatorHidden:c}),(0,a.jsx)(L,{sectionRef:p,visible:t.includes(p.current),id:"details"}),(0,a.jsx)(o.$,{})]})}},9085:function(e){e.exports={text:"DecoderText_text__ZFBnw",glyph:"DecoderText_glyph__vCP7h",value:"DecoderText_value__DIA5G"}},3265:function(e){e.exports={divider:"Divider_divider__R3vqT",line:"Divider_line__bFTLx",notch:"Divider_notch__1kxAj"}},1867:function(e){e.exports={home:"Home_home__yJ5yN"}},1593:function(e){e.exports={intro:"Intro_intro__Fx18m",text:"Intro_text__bLtjA",name:"Intro_name__hkBtD",title:"Intro_title__qdlyS",row:"Intro_row__9djxx",word:"Intro_word__VWCdZ",introTextReveal:"Intro_introTextReveal__XXLDM",line:"Intro_line__LKNE4",introLine:"Intro_introLine__U_V3J",scrollIndicator:"Intro_scrollIndicator__lSkd1",introScrollIndicator:"Intro_introScrollIndicator__8hg2_",mobileScrollIndicator:"Intro_mobileScrollIndicator__F_88l",introMobileScrollIndicator:"Intro_introMobileScrollIndicator__S2kYr"}},3845:function(e){e.exports={profile:"Profile_profile__DRTQQ",content:"Profile_content__nk6uj",column:"Profile_column__TSml5",title:"Profile_title__ix51N",description:"Profile_description__9LXnv",tag:"Profile_tag__o8Ug4",tagText:"Profile_tagText__ItnPN",image:"Profile_image__fjDOX",svg:"Profile_svg__lECpK",button:"Profile_button__WturH"}},5152:function(e,t,n){e.exports=n(638)},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(943);var i=n(3375);var a=n(1566);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,i.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7378:function(e,t,n){"use strict";n.d(t,{q:function(){return d}});var r=n(655),i=n(7294),a=n(754),o=n(406),s=n(3234),l=n(6014),c=n(6681);var u=n(8868);function d(e,t){void 0===t&&(t={});var n=(0,i.useContext)(l._).isStatic,d=(0,i.useRef)(null),A=function(e){var t=(0,c.h)((function(){return(0,s.B)(e)}));if((0,i.useContext)(l._).isStatic){var n=(0,r.CR)((0,i.useState)(e),2)[1];(0,i.useEffect)((function(){return t.onChange(n)}),[])}return t}((0,o.i)(e)?e.get():e);return(0,i.useMemo)((function(){return A.attach((function(e,i){return n?i(e):(d.current&&d.current.stop(),d.current=(0,a.j)((0,r.pi)((0,r.pi)({from:A.get(),to:e,velocity:A.getVelocity()},t),{onUpdate:i})),A.get())}))}),[JSON.stringify(t)]),function(e,t){(0,u.L)((function(){if((0,o.i)(e))return e.onChange(t)}),[t])}(e,(function(e){return A.set(parseFloat(e))})),A}}},function(e){e.O(0,[199,774,888,179],(function(){return t=3916,e(e.s=t);var t}));var t=e.O();_N_E=t}]);