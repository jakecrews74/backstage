/*! For license information please see 404a23c0.3a508217.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[824572],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},216389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"plugin-bitbucket-cloud-common.models.repository",title:"Models.Repository",description:"API reference for Models.Repository"},i=void 0,u={unversionedId:"reference/plugin-bitbucket-cloud-common.models.repository",id:"reference/plugin-bitbucket-cloud-common.models.repository",title:"Models.Repository",description:"API reference for Models.Repository",source:"@site/../docs/reference/plugin-bitbucket-cloud-common.models.repository.md",sourceDirName:"reference",slug:"/reference/plugin-bitbucket-cloud-common.models.repository",permalink:"/docs/reference/plugin-bitbucket-cloud-common.models.repository",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-bitbucket-cloud-common.models.repository.md",tags:[],version:"current",frontMatter:{id:"plugin-bitbucket-cloud-common.models.repository",title:"Models.Repository",description:"API reference for Models.Repository"}},c={},p=[{value:"Properties",id:"properties",level:2}],s={toc:p};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-bitbucket-cloud-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-bitbucket-cloud-common"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models"}),(0,n.kt)("inlineCode",{parentName:"a"},"Models"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository"}),(0,n.kt)("inlineCode",{parentName:"a"},"Repository"))),(0,n.kt)("p",null,"A Bitbucket repository."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface Repository extends ModelObject \n")),(0,n.kt)("b",null,"Extends:")," [ModelObject](/docs/reference/plugin-bitbucket-cloud-common.models.modelobject)",(0,n.kt)("h2",o({},{id:"properties"}),"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.created_on"}),"created","_","on?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.description"}),"description?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.fork_policy"}),"fork","_","policy?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repositoryforkpolicyenum"}),"RepositoryForkPolicyEnum")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("p",null,(0,n.kt)("i",null,"(Optional)")," Controls the rules for forking this repository."),(0,n.kt)("p",null,"*"," ","*","*","allow","_","forks","*","*",": unrestricted forking ","*"," ","*","*","no","_","public","_","forks","*","*",": restrict forking to private forks (forks cannot be made public later) ","*"," ","*","*","no","_","forks","*","*",": deny all forking"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.full_name"}),"full","_","name?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"),' The concatenation of the repository owner\'s username and the slugified name, e.g. "evzijst/interruptingcow". This is the same string used in Bitbucket URLs.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.has_issues"}),"has","_","issues?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.has_wiki"}),"has","_","wiki?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.is_private"}),"is","_","private?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.language"}),"language?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.links"}),"links?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repositorylinks"}),"RepositoryLinks")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.mainbranch"}),"mainbranch?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.branch"}),"Branch")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.name"}),"name?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.owner"}),"owner?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.account"}),"Account")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.parent"}),"parent?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository"}),"Repository")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.project"}),"project?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.project"}),"Project")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.scm"}),"scm?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repositoryscmenum"}),"RepositoryScmEnum")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.size"}),"size?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.slug"}),"slug?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"),' The "sluggified" version of the repository\'s name. This contains only ASCII characters and can therefore be slightly different than the name')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.updated_on"}),"updated","_","on?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-bitbucket-cloud-common.models.repository.uuid"}),"uuid?")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)")," The repository's immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user.")))))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,i,u=o(e),c=1;c<arguments.length;c++){for(var p in l=Object(arguments[c]))r.call(l,p)&&(u[p]=l[p]);if(t){i=t(l);for(var s=0;s<i.length;s++)n.call(l,i[s])&&(u[i[s]]=l[i[s]])}}return u}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var l=60109,i=60110,u=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),l=s("react.provider"),i=s("react.context"),u=s("react.forward_ref"),s("react.suspense"),c=s("react.memo"),p=s("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function g(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}function b(){}function y(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var N=y.prototype=new b;N.constructor=y,n(N,g.prototype),N.isPureReactComponent=!0;var h={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)v.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:h.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return l=l(u=e),e=""===n?"."+P(u,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),S(l,t,r,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(_,"$&/")+"/")+e)),t.push(l)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+P(i=e[c],c);u+=S(i,t,r,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(i=e.next()).done;)u+=S(i=i.value,t,r,p=n+P(i,c++),l);else if("object"===i)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function R(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,r)=>{r(541535)}}]);