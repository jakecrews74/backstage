/*! For license information please see d72ae872.ed9d4a55.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[694463],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},558518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"backend-app-api.middlewarefactory",title:"MiddlewareFactory",description:"API reference for MiddlewareFactory"},l=void 0,c={unversionedId:"reference/backend-app-api.middlewarefactory",id:"reference/backend-app-api.middlewarefactory",title:"MiddlewareFactory",description:"API reference for MiddlewareFactory",source:"@site/../docs/reference/backend-app-api.middlewarefactory.md",sourceDirName:"reference",slug:"/reference/backend-app-api.middlewarefactory",permalink:"/docs/reference/backend-app-api.middlewarefactory",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-app-api.middlewarefactory.md",tags:[],version:"current",frontMatter:{id:"backend-app-api.middlewarefactory",title:"MiddlewareFactory",description:"API reference for MiddlewareFactory"}},p={},u=[{value:"Methods",id:"methods",level:2}],d={toc:u};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/backend-app-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-app-api"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/backend-app-api.middlewarefactory"}),(0,n.kt)("inlineCode",{parentName:"a"},"MiddlewareFactory"))),(0,n.kt)("p",null,"A utility to configure common middleware."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class MiddlewareFactory \n")),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory.compression"}),"compression()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Returns the compression middleware.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory.cors"}),"cors()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Returns a middleware that implements the cors library.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory.create"}),"create(options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Creates a new ",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory"}),"MiddlewareFactory"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory.error"}),"error(options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Express middleware to handle errors during request processing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory.helmet"}),"helmet()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Returns a middleware that implements the helmet library.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory.logging"}),"logging()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Returns a request logging middleware.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/backend-app-api.middlewarefactory.notfound"}),"notFound()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Returns a middleware that unconditionally produces a 404 error response.")))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,c=a(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))r.call(i,u)&&(c[u]=i[u]);if(t){l=t(i);for(var d=0;d<l.length;d++)n.call(i,l[d])&&(c[l[d]]=i[l[d]])}}return c}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,c=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),i=d("react.provider"),l=d("react.context"),c=d("react.forward_ref"),d("react.suspense"),p=d("react.memo"),u=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function k(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(s(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var h=g.prototype=new k;h.constructor=g,n(h,b.prototype),h.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];o.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===n?"."+_(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+_(l=e[p],p);c+=S(l,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(l=e.next()).done;)c+=S(l=l.value,t,r,u=n+_(l,p++),i);else if("object"===l)throw t=""+e,Error(s(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function M(e,t,r){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(s(321));return e}},827378:(e,t,r)=>{r(541535)}}]);