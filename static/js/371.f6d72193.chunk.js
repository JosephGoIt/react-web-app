/*! For license information please see 371.f6d72193.chunk.js.LICENSE.txt */
(self.webpackChunkreact_web_app=self.webpackChunkreact_web_app||[]).push([[371],{4979:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});r(2791);var n=r(2376),o=r(184),i=function(e){var t=e.color;return(0,o.jsx)(n.g4,{visible:!0,height:"20",width:"45",color:t,ariaLabel:"three-dots-loading"})}},9371:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Oe}});var n=r(2007),o=r.n(n),i=r(9475),a=r.n(i),u=r(77),c=r.n(u),s=r(2791),f=r(1725),l=r.n(f),p="bodyAttributes",d="htmlAttributes",y="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(h).map((function(e){return h[e]})),"charset"),m="cssText",g="href",v="http-equiv",T="innerHTML",w="itemprop",x="name",O="property",j="rel",C="src",A="target",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},E="defaultTitle",k="defer",P="encodeSpecialCharacters",I="onChangeClientState",L="titleTemplate",N=Object.keys(S).reduce((function(e,t){return e[S[t]]=t,e}),{}),_=[h.NOSCRIPT,h.SCRIPT,h.STYLE],R="data-react-helmet",M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=Z(e,h.TITLE),r=Z(e,L);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,E);return t||n||void 0},z=function(e){return Z(e,I)||function(){}},K=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+M(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||r===j&&"canonical"===e[r].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==T&&u!==m&&u!==w||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=l()({},n[u],o[u]);n[u]=c}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){$(t)}),0)}}(),G=function(e){return clearTimeout(e)},J="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,Q="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:r.g.cancelAnimationFrame||G,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;oe(h.BODY,n),oe(h.HTML,o),ne(l,p);var d={baseTag:ie(h.BASE,r),linkTags:ie(h.LINK,i),metaTags:ie(h.META,a),noscriptTags:ie(h.NOSCRIPT,u),scriptTags:ie(h.SCRIPT,s),styleTags:ie(h.STYLE,f)},y={},b={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(b[e]=d[e].oldTags)})),t&&t(),c(e,y,b)},re=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=re(e)),oe(h.TITLE,t)},oe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(R),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(R):r.getAttribute(R)!==a.join(",")&&r.setAttribute(R,a.join(","))}},ie=function(e,t){var r=document.head||document.querySelector(h.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===T)r.innerHTML=t.innerHTML;else if(n===m)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(R,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ae=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[S[r]||r]=e[r],t}),t)},ce=function(e,t,r){switch(e){case h.TITLE:return{toComponent:function(){return function(e,t,r){var n,o=((n={key:t})[R]=!0,n),i=ue(r,o);return[s.createElement(h.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=ae(r),i=re(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case p:case d:return{toComponent:function(){return ue(t)},toString:function(){return ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[R]=!0,n);return Object.keys(t).forEach((function(e){var r=S[e]||e;if(r===T||r===m){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===T||e===m)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},se=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,y=e.titleAttributes;return{base:ce(h.BASE,t,n),bodyAttributes:ce(p,r,n),htmlAttributes:ce(d,o,n),link:ce(h.LINK,i,n),meta:ce(h.META,a,n),noscript:ce(h.NOSCRIPT,u,n),script:ce(h.SCRIPT,c,n),style:ce(h.STYLE,s,n),title:ce(h.TITLE,{title:l,titleAttributes:y},n)}},fe=function(e){var t,r;return r=t=function(t){function r(){return q(this,r),U(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!c()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case h.TITLE:return B({},o,((t={})[n.type]=a,t.titleAttributes=B({},i),t));case h.BODY:return B({},o,{bodyAttributes:B({},i)});case h.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((r={})[n.type]=B({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)}(H(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=H(t,["children"]),o=B({},n);return r&&(o=this.mapChildrenToProps(r,o)),s.createElement(e,o)},D(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(s.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(a()((function(e){return{baseTag:W([g,A],e),bodyAttributes:K(p,e),defer:Z(e,k),encode:Z(e,P),htmlAttributes:K(d,e),linkTags:V(h.LINK,[j,g],e),metaTags:V(h.META,[x,b,v,O,w],e),noscriptTags:V(h.NOSCRIPT,[T],e),onChangeClientState:z(e),scriptTags:V(h.SCRIPT,[C,T],e),styleTags:V(h.STYLE,[m],e),title:F(e),titleAttributes:K(y,e)}}),(function(e){ee&&Q(ee),e.defer?ee=J((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),se)((function(){return null})));fe.renderStatic=fe.rewind;var le=r(5861),pe=r(885),de=r(7757),ye=r.n(de),he=r(9434),be=r(9273),me=r(4217),ge=r(1087),ve=r(2094),Te=(r(5462),r(4979)),we=r(184),xe=function(){var e=(0,he.I0)(),t=(0,he.v9)(me.Vc),r=(0,s.useState)(""),n=(0,pe.Z)(r,2),o=n[0],i=n[1],a=(0,s.useState)(""),u=(0,pe.Z)(a,2),c=u[0],f=u[1],l=(0,s.useState)(""),p=(0,pe.Z)(l,2),d=p[0],y=p[1],h=function(){var t=(0,le.Z)(ye().mark((function t(r){return ye().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),o.trim()){t.next=4;break}return ve.Am.error("Name is required"),t.abrupt("return");case 4:if(c.trim()){t.next=7;break}return ve.Am.error("Email is required"),t.abrupt("return");case 7:if(d.trim()){t.next=10;break}return ve.Am.error("Password is required"),t.abrupt("return");case 10:return t.prev=10,t.next=13,e((0,be.IU)({name:o,email:c,password:d})).unwrap();case 13:i(""),f(""),y(""),t.next=20;break;case 18:t.prev=18,t.t0=t.catch(10);case 20:case"end":return t.stop()}}),t,null,[[10,18]])})));return function(e){return t.apply(this,arguments)}}();return(0,we.jsxs)("div",{children:[(0,we.jsx)(ve.Ix,{}),(0,we.jsx)("p",{className:"flex md:justify-start justify-center text-[14px] font-bold text-orange tracking-[0.56px] uppercase",children:"Register"}),(0,we.jsxs)("form",{onSubmit:h,className:"mt-[60px]",children:[(0,we.jsxs)("div",{className:"flex flex-col gap-[40px] text-[14px] font-bold placeholder:text-textgray tracking-[0.56px] w-full md:max-w-[300px]",children:[(0,we.jsx)("input",{className:"border-b-[1px] focus:border-orange outline-0 pb-[20px]",type:"text",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Name *"}),(0,we.jsx)("input",{className:"border-b-[1px] focus:border-orange outline-0 pb-[20px]",type:"email",value:c,onChange:function(e){return f(e.target.value)},placeholder:"Email *"}),(0,we.jsx)("input",{className:"border-b-[1px] focus:border-orange outline-0 pb-[20px]",type:"password",value:d,onChange:function(e){return y(e.target.value)},placeholder:"Password *"})]}),(0,we.jsxs)("div",{className:"flex md:flex-row flex-col items-center gap-[32px] mt-[60px]",children:[(0,we.jsx)("button",{type:"submit",className:"flex w-[182px] py-[13px] px-[37px] bg-orange items-center justify-center rounded-[30px] shadow-[0px_4px_10px_0px_rgba(252,132,45,0.50)] text-white font-bold text-[14px] hover:bg-darkorange",disabled:t,children:t?(0,we.jsx)(Te.U,{color:"#fff"}):"Register"}),(0,we.jsx)(ge.OL,{to:"/login",children:(0,we.jsx)("button",{type:"button",className:"flex w-[182px] py-[13px] px-[37px] bg-white items-center justify-center rounded-[30px] border-[2px] border-orange text-orange font-bold text-[14px] hover:bg-orange hover:text-white",disabled:t,children:"Login"})})]})]})]})};function Oe(){return(0,we.jsxs)("div",{children:[(0,we.jsx)(fe,{children:(0,we.jsx)("title",{children:"Registration"})}),(0,we.jsx)(xe,{})]})}},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))r.call(a,f)&&(c[f]=a[f]);if(t){u=t(a);for(var l=0;l<u.length;l++)n.call(a,u[l])&&(c[u[l]]=a[u[l]])}}return c}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,f;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;for(f=e.entries();!(c=f.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!==c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},9475:function(e,t,r){"use strict";var n,o=r(2791),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=e(s.map((function(e){return e.props}))),l.canUseDOM?t(c):r&&(c=r(c))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(l,"canUseDOM",u),l}}}}]);
//# sourceMappingURL=371.f6d72193.chunk.js.map