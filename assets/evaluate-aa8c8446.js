import{k as g,l as wt,m as Tt,p as Qe,u as l,q as Ce,x as Ct,a as F,c as G,e as W,y as et,z as Le,A as St,B as $t,j as K,o as ne,C as It,D as ie,E as U,G as I,i as tt,H as Ot,N as ye,I as Se,d as R,J as A,K as nt,L as ot,M as be,f as Q,O as Nt,n as k,t as At,w as z,P as _e,Q as Pt,b as we,R as st,S as Lt,g as Dt,T as Ft,v as kt,U as Mt,V as xt,_ as Rt,W as Bt,X as jt}from"./index-b3f4e9a2.js";var De;const x=typeof window<"u";x&&((De=window==null?void 0:window.navigator)!=null&&De.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function zt(e){return typeof e=="function"?e():l(e)}function Kt(e){return Tt()?(Qe(e),!0):!1}function Fe(e,t,n={}){const{immediate:o=!0}=n,s=g(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function f(){s.value=!1,i()}function v(...b){i(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=null,e(...b)},zt(t))}return o&&(s.value=!0,x&&v()),Kt(f),{isPending:wt(s),start:v,stop:f}}var Ut=typeof global=="object"&&global&&global.Object===Object&&global;const Ht=Ut;var Vt=typeof self=="object"&&self&&self.Object===Object&&self,Yt=Ht||Vt||Function("return this")();const $e=Yt;var Gt=$e.Symbol;const q=Gt;var at=Object.prototype,Wt=at.hasOwnProperty,qt=at.toString,Z=q?q.toStringTag:void 0;function Jt(e){var t=Wt.call(e,Z),n=e[Z];try{e[Z]=void 0;var o=!0}catch{}var s=qt.call(e);return o&&(t?e[Z]=n:delete e[Z]),s}var Xt=Object.prototype,Zt=Xt.toString;function Qt(e){return Zt.call(e)}var en="[object Null]",tn="[object Undefined]",ke=q?q.toStringTag:void 0;function rt(e){return e==null?e===void 0?tn:en:ke&&ke in Object(e)?Jt(e):Qt(e)}function nn(e){return e!=null&&typeof e=="object"}var on="[object Symbol]";function Ie(e){return typeof e=="symbol"||nn(e)&&rt(e)==on}function sn(e,t){for(var n=-1,o=e==null?0:e.length,s=Array(o);++n<o;)s[n]=t(e[n],n,e);return s}var an=Array.isArray;const Oe=an;var rn=1/0,Me=q?q.prototype:void 0,xe=Me?Me.toString:void 0;function lt(e){if(typeof e=="string")return e;if(Oe(e))return sn(e,lt)+"";if(Ie(e))return xe?xe.call(e):"";var t=e+"";return t=="0"&&1/e==-rn?"-0":t}function ct(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ln="[object AsyncFunction]",cn="[object Function]",un="[object GeneratorFunction]",dn="[object Proxy]";function fn(e){if(!ct(e))return!1;var t=rt(e);return t==cn||t==un||t==ln||t==dn}var pn=$e["__core-js_shared__"];const he=pn;var Re=function(){var e=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function vn(e){return!!Re&&Re in e}var mn=Function.prototype,yn=mn.toString;function hn(e){if(e!=null){try{return yn.call(e)}catch{}try{return e+""}catch{}}return""}var gn=/[\\^$.*+?()[\]{}|]/g,En=/^\[object .+?Constructor\]$/,bn=Function.prototype,_n=Object.prototype,wn=bn.toString,Tn=_n.hasOwnProperty,Cn=RegExp("^"+wn.call(Tn).replace(gn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Sn(e){if(!ct(e)||vn(e))return!1;var t=fn(e)?Cn:En;return t.test(hn(e))}function $n(e,t){return e==null?void 0:e[t]}function it(e,t){var n=$n(e,t);return Sn(n)?n:void 0}function In(e,t){return e===t||e!==e&&t!==t}var On=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nn=/^\w*$/;function An(e,t){if(Oe(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Ie(e)?!0:Nn.test(e)||!On.test(e)||t!=null&&e in Object(t)}var Pn=it(Object,"create");const ee=Pn;function Ln(){this.__data__=ee?ee(null):{},this.size=0}function Dn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Fn="__lodash_hash_undefined__",kn=Object.prototype,Mn=kn.hasOwnProperty;function xn(e){var t=this.__data__;if(ee){var n=t[e];return n===Fn?void 0:n}return Mn.call(t,e)?t[e]:void 0}var Rn=Object.prototype,Bn=Rn.hasOwnProperty;function jn(e){var t=this.__data__;return ee?t[e]!==void 0:Bn.call(t,e)}var zn="__lodash_hash_undefined__";function Kn(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ee&&t===void 0?zn:t,this}function H(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}H.prototype.clear=Ln;H.prototype.delete=Dn;H.prototype.get=xn;H.prototype.has=jn;H.prototype.set=Kn;function Un(){this.__data__=[],this.size=0}function ue(e,t){for(var n=e.length;n--;)if(In(e[n][0],t))return n;return-1}var Hn=Array.prototype,Vn=Hn.splice;function Yn(e){var t=this.__data__,n=ue(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():Vn.call(t,n,1),--this.size,!0}function Gn(e){var t=this.__data__,n=ue(t,e);return n<0?void 0:t[n][1]}function Wn(e){return ue(this.__data__,e)>-1}function qn(e,t){var n=this.__data__,o=ue(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}function J(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}J.prototype.clear=Un;J.prototype.delete=Yn;J.prototype.get=Gn;J.prototype.has=Wn;J.prototype.set=qn;var Jn=it($e,"Map");const Xn=Jn;function Zn(){this.size=0,this.__data__={hash:new H,map:new(Xn||J),string:new H}}function Qn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function de(e,t){var n=e.__data__;return Qn(t)?n[typeof t=="string"?"string":"hash"]:n.map}function eo(e){var t=de(this,e).delete(e);return this.size-=t?1:0,t}function to(e){return de(this,e).get(e)}function no(e){return de(this,e).has(e)}function oo(e,t){var n=de(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}function V(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}V.prototype.clear=Zn;V.prototype.delete=eo;V.prototype.get=to;V.prototype.has=no;V.prototype.set=oo;var so="Expected a function";function Ne(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(so);var n=function(){var o=arguments,s=t?t.apply(this,o):o[0],a=n.cache;if(a.has(s))return a.get(s);var i=e.apply(this,o);return n.cache=a.set(s,i)||a,i};return n.cache=new(Ne.Cache||V),n}Ne.Cache=V;var ao=500;function ro(e){var t=Ne(e,function(o){return n.size===ao&&n.clear(),o}),n=t.cache;return t}var lo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,co=/\\(\\)?/g,io=ro(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(lo,function(n,o,s,a){t.push(s?a.replace(co,"$1"):o||n)}),t});const uo=io;function fo(e){return e==null?"":lt(e)}function po(e,t){return Oe(e)?e:An(e,t)?[e]:uo(fo(e))}var vo=1/0;function mo(e){if(typeof e=="string"||Ie(e))return e;var t=e+"";return t=="0"&&1/e==-vo?"-0":t}function yo(e,t){t=po(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[mo(t[n++])];return n&&n==o?e:void 0}function ho(e,t,n){var o=e==null?void 0:yo(e,t);return o===void 0?n:o}function go(e){for(var t=-1,n=e==null?0:e.length,o={};++t<n;){var s=e[t];o[s[0]]=s[1]}return o}function Eo(e){return e==null}const bo=e=>e===void 0,_o=e=>typeof e=="boolean",ut=e=>typeof e=="number",wo=e=>Ce(e)?!Number.isNaN(Number(e)):!1;class To extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Co(e,t){throw new To(`[${e}] ${t}`)}const dt=(e="")=>e.split(" ").filter(t=>!!t.trim()),Be=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},So=(e,t)=>{!e||!t.trim()||e.classList.add(...dt(t))},$o=(e,t)=>{!e||!t.trim()||e.classList.remove(...dt(t))},Io=(e,t)=>{var n;if(!x||!e||!t)return"";let o=Ct(t);o==="float"&&(o="cssFloat");try{const s=e.style[o];if(s)return s;const a=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return a?a[o]:""}catch{return e.style[o]}};function ce(e,t="px"){if(!e)return"";if(ut(e)||wo(e))return`${e}${t}`;if(Ce(e))return e}let oe;const Oo=e=>{var t;if(!x)return 0;if(oe!==void 0)return oe;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const o=n.offsetWidth;n.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",n.appendChild(s);const a=s.offsetWidth;return(t=n.parentNode)==null||t.removeChild(n),oe=o-a,oe};/*! Element Plus Icons Vue v2.1.0 */var No=(e,t)=>{let n=e.__vccOpts||e;for(let[o,s]of t)n[o]=s;return n},Ao={name:"Close"},Po={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Lo=W("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),Do=[Lo];function Fo(e,t,n,o,s,a){return F(),G("svg",Po,Do)}var ko=No(Ao,[["render",Fo],["__file","close.vue"]]);const ft="__epPropKey",te=e=>e,Mo=e=>et(e)&&!!e[ft],xo=(e,t)=>{if(!et(e)||Mo(e))return e;const{values:n,required:o,default:s,type:a,validator:i}=e,v={type:a,required:!!o,validator:n||i?b=>{let E=!1,_=[];if(n&&(_=Array.from(n),Le(e,"default")&&_.push(s),E||(E=_.includes(b))),i&&(E||(E=i(b))),!E&&_.length>0){const p=[...new Set(_)].map(T=>JSON.stringify(T)).join(", ");St(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${p}], got value ${JSON.stringify(b)}.`)}return E}:void 0,[ft]:!0};return Le(e,"default")&&(v.default=s),v},fe=e=>go(Object.entries(e).map(([t,n])=>[t,xo(n,t)])),Ro=te([String,Object,Function]),Bo={Close:ko},pt=(e,t)=>{if(e.install=n=>{for(const o of[e,...Object.values(t??{})])n.component(o.name,o)},t)for(const[n,o]of Object.entries(t))e[n]=o;return e},jo=(...e)=>t=>{e.forEach(n=>{$t(n)?n(t):n.value=t})},vt={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},mt="update:modelValue";var le=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(le||{});const je=({from:e,replacement:t,scope:n,version:o,ref:s,type:a="API"},i)=>{K(()=>l(i),f=>{},{immediate:!0})},zo=(e,t,n)=>{let o={offsetX:0,offsetY:0};const s=f=>{const v=f.clientX,b=f.clientY,{offsetX:E,offsetY:_}=o,p=e.value.getBoundingClientRect(),T=p.left,c=p.top,r=p.width,u=p.height,y=document.documentElement.clientWidth,C=document.documentElement.clientHeight,D=-T+E,P=-c+_,N=y-T-r+E,L=C-c-u+_,h=w=>{const d=Math.min(Math.max(E+w.clientX-v,D),N),O=Math.min(Math.max(_+w.clientY-b,P),L);o={offsetX:d,offsetY:O},e.value.style.transform=`translate(${ce(d)}, ${ce(O)})`},m=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",m)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",m)},a=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",s)},i=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",s)};ne(()=>{It(()=>{n.value?a():i()})}),ie(()=>{i()})};var Ko={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Uo=e=>(t,n)=>Ho(t,n,l(e)),Ho=(e,t,n)=>ho(n,e,e).replace(/\{(\w+)\}/g,(o,s)=>{var a;return`${(a=t==null?void 0:t[s])!=null?a:`{${s}}`}`}),Vo=e=>{const t=I(()=>l(e).name),n=tt(e)?e:g(e);return{lang:t,locale:n,t:Uo(e)}},Yo=Symbol("localeContextKey"),Go=e=>{const t=e||U(Yo,g());return Vo(I(()=>t.value||Ko))},Te="el",Wo="is-",j=(e,t,n,o,s)=>{let a=`${e}-${t}`;return n&&(a+=`-${n}`),o&&(a+=`__${o}`),s&&(a+=`--${s}`),a},qo=Symbol("namespaceContextKey"),yt=e=>{const t=e||U(qo,g(Te));return I(()=>l(t)||Te)},pe=(e,t)=>{const n=yt(t);return{namespace:n,b:(r="")=>j(n.value,e,r,"",""),e:r=>r?j(n.value,e,"",r,""):"",m:r=>r?j(n.value,e,"","",r):"",be:(r,u)=>r&&u?j(n.value,e,r,u,""):"",em:(r,u)=>r&&u?j(n.value,e,"",r,u):"",bm:(r,u)=>r&&u?j(n.value,e,r,"",u):"",bem:(r,u,y)=>r&&u&&y?j(n.value,e,r,u,y):"",is:(r,...u)=>{const y=u.length>=1?u[0]:!0;return r&&y?`${Wo}${r}`:""},cssVar:r=>{const u={};for(const y in r)r[y]&&(u[`--${n.value}-${y}`]=r[y]);return u},cssVarName:r=>`--${n.value}-${r}`,cssVarBlock:r=>{const u={};for(const y in r)r[y]&&(u[`--${n.value}-${e}-${y}`]=r[y]);return u},cssVarBlockName:r=>`--${n.value}-${e}-${r}`}},Jo=(e,t={})=>{tt(e)||Co("[useLockscreen]","You need to pass a ref param to this function");const n=t.ns||pe("popup"),o=Ot(()=>n.bm("parent","hidden"));if(!x||Be(document.body,o.value))return;let s=0,a=!1,i="0";const f=()=>{setTimeout(()=>{$o(document==null?void 0:document.body,o.value),a&&document&&(document.body.style.width=i)},200)};K(e,v=>{if(!v){f();return}a=!Be(document.body,o.value),a&&(i=document.body.style.width),s=Oo(n.namespace.value);const b=document.documentElement.clientHeight<document.body.scrollHeight,E=Io(document.body,"overflowY");s>0&&(b||E==="scroll")&&a&&(document.body.style.width=`calc(100% - ${s}px)`),So(document.body,o.value)}),Qe(()=>f())},ht=e=>{if(!e)return{onClick:ye,onMousedown:ye,onMouseup:ye};let t=!1,n=!1;return{onClick:i=>{t&&n&&e(i),t=n=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{n=i.target===i.currentTarget}}},ze={prefix:Math.floor(Math.random()*1e4),current:0},Xo=Symbol("elIdInjection"),Zo=()=>Se()?U(Xo,ze):ze,Ke=e=>{const t=Zo(),n=yt();return I(()=>l(e)||`${n.value}-id-${t.prefix}-${t.current++}`)};let Y=[];const Ue=e=>{const t=e;t.key===vt.esc&&Y.forEach(n=>n(t))},Qo=e=>{ne(()=>{Y.length===0&&document.addEventListener("keydown",Ue),x&&Y.push(e)}),ie(()=>{Y=Y.filter(t=>t!==e),Y.length===0&&x&&document.removeEventListener("keydown",Ue)})},He=g(0),es=2e3,ts=Symbol("zIndexContextKey"),ns=e=>{const t=e||U(ts,void 0),n=I(()=>{const a=l(t);return ut(a)?a:es}),o=I(()=>n.value+He.value);return{initialZIndex:n,currentZIndex:o,nextZIndex:()=>(He.value++,o.value)}},os=Symbol(),Ve=g();function ss(e,t=void 0){const n=Se()?U(os,Ve):Ve;return e?I(()=>{var o,s;return(s=(o=n.value)==null?void 0:o[e])!=null?s:t}):n}var ve=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const as=fe({size:{type:te([Number,String])},color:{type:String}}),rs=R({name:"ElIcon",inheritAttrs:!1}),ls=R({...rs,props:as,setup(e){const t=e,n=pe("icon"),o=I(()=>{const{size:s,color:a}=t;return!s&&!a?{}:{fontSize:bo(s)?void 0:ce(s),"--color":a}});return(s,a)=>(F(),G("i",nt({class:l(n).b(),style:l(o)},s.$attrs),[A(s.$slots,"default")],16))}});var cs=ve(ls,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const is=pt(cs),ge="focus-trap.focus-after-trapped",Ee="focus-trap.focus-after-released",us="focus-trap.focusout-prevented",Ye={cancelable:!0,bubbles:!1},ds={cancelable:!0,bubbles:!1},Ge="focusAfterTrapped",We="focusAfterReleased",gt=Symbol("elFocusTrap"),Ae=g(),me=g(0),Pe=g(0);let se=0;const Et=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},qe=(e,t)=>{for(const n of e)if(!fs(n,t))return n},fs=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},ps=e=>{const t=Et(e),n=qe(t,e),o=qe(t.reverse(),e);return[n,o]},vs=e=>e instanceof HTMLInputElement&&"select"in e,M=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),Pe.value=window.performance.now(),e!==n&&vs(e)&&t&&e.select()}};function Je(e,t){const n=[...e],o=e.indexOf(t);return o!==-1&&n.splice(o,1),n}const ms=()=>{let e=[];return{push:o=>{const s=e[0];s&&o!==s&&s.pause(),e=Je(e,o),e.unshift(o)},remove:o=>{var s,a;e=Je(e,o),(a=(s=e[0])==null?void 0:s.resume)==null||a.call(s)}}},ys=(e,t=!1)=>{const n=document.activeElement;for(const o of e)if(M(o,t),document.activeElement!==n)return},Xe=ms(),hs=()=>me.value>Pe.value,ae=()=>{Ae.value="pointer",me.value=window.performance.now()},Ze=()=>{Ae.value="keyboard",me.value=window.performance.now()},gs=()=>(ne(()=>{se===0&&(document.addEventListener("mousedown",ae),document.addEventListener("touchstart",ae),document.addEventListener("keydown",Ze)),se++}),ie(()=>{se--,se<=0&&(document.removeEventListener("mousedown",ae),document.removeEventListener("touchstart",ae),document.removeEventListener("keydown",Ze))}),{focusReason:Ae,lastUserFocusTimestamp:me,lastAutomatedFocusTimestamp:Pe}),re=e=>new CustomEvent(us,{...ds,detail:e}),Es=R({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Ge,We,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=g();let o,s;const{focusReason:a}=gs();Qo(c=>{e.trapped&&!i.paused&&t("release-requested",c)});const i={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},f=c=>{if(!e.loop&&!e.trapped||i.paused)return;const{key:r,altKey:u,ctrlKey:y,metaKey:C,currentTarget:D,shiftKey:P}=c,{loop:N}=e,L=r===vt.tab&&!u&&!y&&!C,h=document.activeElement;if(L&&h){const m=D,[w,d]=ps(m);if(w&&d){if(!P&&h===d){const $=re({focusReason:a.value});t("focusout-prevented",$),$.defaultPrevented||(c.preventDefault(),N&&M(w,!0))}else if(P&&[w,m].includes(h)){const $=re({focusReason:a.value});t("focusout-prevented",$),$.defaultPrevented||(c.preventDefault(),N&&M(d,!0))}}else if(h===m){const $=re({focusReason:a.value});t("focusout-prevented",$),$.defaultPrevented||c.preventDefault()}}};ot(gt,{focusTrapRef:n,onKeydown:f}),K(()=>e.focusTrapEl,c=>{c&&(n.value=c)},{immediate:!0}),K([n],([c],[r])=>{c&&(c.addEventListener("keydown",f),c.addEventListener("focusin",E),c.addEventListener("focusout",_)),r&&(r.removeEventListener("keydown",f),r.removeEventListener("focusin",E),r.removeEventListener("focusout",_))});const v=c=>{t(Ge,c)},b=c=>t(We,c),E=c=>{const r=l(n);if(!r)return;const u=c.target,y=c.relatedTarget,C=u&&r.contains(u);e.trapped||y&&r.contains(y)||(o=y),C&&t("focusin",c),!i.paused&&e.trapped&&(C?s=u:M(s,!0))},_=c=>{const r=l(n);if(!(i.paused||!r))if(e.trapped){const u=c.relatedTarget;!Eo(u)&&!r.contains(u)&&setTimeout(()=>{if(!i.paused&&e.trapped){const y=re({focusReason:a.value});t("focusout-prevented",y),y.defaultPrevented||M(s,!0)}},0)}else{const u=c.target;u&&r.contains(u)||t("focusout",c)}};async function p(){await be();const c=l(n);if(c){Xe.push(i);const r=c.contains(document.activeElement)?o:document.activeElement;if(o=r,!c.contains(r)){const y=new Event(ge,Ye);c.addEventListener(ge,v),c.dispatchEvent(y),y.defaultPrevented||be(()=>{let C=e.focusStartEl;Ce(C)||(M(C),document.activeElement!==C&&(C="first")),C==="first"&&ys(Et(c),!0),(document.activeElement===r||C==="container")&&M(c)})}}}function T(){const c=l(n);if(c){c.removeEventListener(ge,v);const r=new CustomEvent(Ee,{...Ye,detail:{focusReason:a.value}});c.addEventListener(Ee,b),c.dispatchEvent(r),!r.defaultPrevented&&(a.value=="keyboard"||!hs()||c.contains(document.activeElement))&&M(o??document.body),c.removeEventListener(Ee,v),Xe.remove(i)}}return ne(()=>{e.trapped&&p(),K(()=>e.trapped,c=>{c?p():T()})}),ie(()=>{e.trapped&&T()}),{onKeydown:f}}});function bs(e,t,n,o,s,a){return A(e.$slots,"default",{handleKeydown:e.onKeydown})}var _s=ve(Es,[["render",bs],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);const ws=fe({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:te([String,Array,Object])},zIndex:{type:te([String,Number])}}),Ts={click:e=>e instanceof MouseEvent},Cs="overlay";var Ss=R({name:"ElOverlay",props:ws,emits:Ts,setup(e,{slots:t,emit:n}){const o=pe(Cs),s=v=>{n("click",v)},{onClick:a,onMousedown:i,onMouseup:f}=ht(e.customMaskEvent?void 0:s);return()=>e.mask?Q("div",{class:[o.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:i,onMouseup:f},[A(t,"default")],le.STYLE|le.CLASS|le.PROPS,["onClick","onMouseup","onMousedown"]):Nt("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[A(t,"default")])}});const $s=Ss,bt=Symbol("dialogInjectionKey"),_t=fe({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ro},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Is={close:()=>!0},Os=["aria-label"],Ns=["id"],As=R({name:"ElDialogContent"}),Ps=R({...As,props:_t,emits:Is,setup(e){const t=e,{t:n}=Go(),{Close:o}=Bo,{dialogRef:s,headerRef:a,bodyId:i,ns:f,style:v}=U(bt),{focusTrapRef:b}=U(gt),E=jo(b,s),_=I(()=>t.draggable);return zo(s,a,_),(p,T)=>(F(),G("div",{ref:l(E),class:k([l(f).b(),l(f).is("fullscreen",p.fullscreen),l(f).is("draggable",l(_)),l(f).is("align-center",p.alignCenter),{[l(f).m("center")]:p.center},p.customClass]),style:st(l(v)),tabindex:"-1"},[W("header",{ref_key:"headerRef",ref:a,class:k(l(f).e("header"))},[A(p.$slots,"header",{},()=>[W("span",{role:"heading",class:k(l(f).e("title"))},At(p.title),3)]),p.showClose?(F(),G("button",{key:0,"aria-label":l(n)("el.dialog.close"),class:k(l(f).e("headerbtn")),type:"button",onClick:T[0]||(T[0]=c=>p.$emit("close"))},[Q(l(is),{class:k(l(f).e("close"))},{default:z(()=>[(F(),_e(Pt(p.closeIcon||l(o))))]),_:1},8,["class"])],10,Os)):we("v-if",!0)],2),W("div",{id:l(i),class:k(l(f).e("body"))},[A(p.$slots,"default")],10,Ns),p.$slots.footer?(F(),G("footer",{key:0,class:k(l(f).e("footer"))},[A(p.$slots,"footer")],2)):we("v-if",!0)],6))}});var Ls=ve(Ps,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ds=fe({..._t,appendToBody:{type:Boolean,default:!1},beforeClose:{type:te(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Fs={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[mt]:e=>_o(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ks=(e,t)=>{const o=Se().emit,{nextZIndex:s}=ns();let a="";const i=Ke(),f=Ke(),v=g(!1),b=g(!1),E=g(!1),_=g(e.zIndex||s());let p,T;const c=ss("namespace",Te),r=I(()=>{const S={},B=`--${c.value}-dialog`;return e.fullscreen||(e.top&&(S[`${B}-margin-top`]=e.top),e.width&&(S[`${B}-width`]=ce(e.width))),S}),u=I(()=>e.alignCenter?{display:"flex"}:{});function y(){o("opened")}function C(){o("closed"),o(mt,!1),e.destroyOnClose&&(E.value=!1)}function D(){o("close")}function P(){T==null||T(),p==null||p(),e.openDelay&&e.openDelay>0?{stop:p}=Fe(()=>m(),e.openDelay):m()}function N(){p==null||p(),T==null||T(),e.closeDelay&&e.closeDelay>0?{stop:T}=Fe(()=>w(),e.closeDelay):w()}function L(){function S(B){B||(b.value=!0,v.value=!1)}e.beforeClose?e.beforeClose(S):N()}function h(){e.closeOnClickModal&&L()}function m(){x&&(v.value=!0)}function w(){v.value=!1}function d(){o("openAutoFocus")}function O(){o("closeAutoFocus")}function $(S){var B;((B=S.detail)==null?void 0:B.focusReason)==="pointer"&&S.preventDefault()}e.lockScroll&&Jo(v);function X(){e.closeOnPressEscape&&L()}return K(()=>e.modelValue,S=>{S?(b.value=!1,P(),E.value=!0,_.value=e.zIndex?_.value++:s(),be(()=>{o("open"),t.value&&(t.value.scrollTop=0)})):v.value&&N()}),K(()=>e.fullscreen,S=>{t.value&&(S?(a=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=a)}),ne(()=>{e.modelValue&&(v.value=!0,E.value=!0,P())}),{afterEnter:y,afterLeave:C,beforeLeave:D,handleClose:L,onModalClick:h,close:N,doClose:w,onOpenAutoFocus:d,onCloseAutoFocus:O,onCloseRequested:X,onFocusoutPrevented:$,titleId:i,bodyId:f,closed:b,style:r,overlayDialogStyle:u,rendered:E,visible:v,zIndex:_}},Ms=["aria-label","aria-labelledby","aria-describedby"],xs=R({name:"ElDialog",inheritAttrs:!1}),Rs=R({...xs,props:Ds,emits:Fs,setup(e,{expose:t}){const n=e,o=Lt();je({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!o.title)),je({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!n.customClass));const s=pe("dialog"),a=g(),i=g(),f=g(),{visible:v,titleId:b,bodyId:E,style:_,overlayDialogStyle:p,rendered:T,zIndex:c,afterEnter:r,afterLeave:u,beforeLeave:y,handleClose:C,onModalClick:D,onOpenAutoFocus:P,onCloseAutoFocus:N,onCloseRequested:L,onFocusoutPrevented:h}=ks(n,a);ot(bt,{dialogRef:a,headerRef:i,bodyId:E,ns:s,rendered:T,style:_});const m=ht(D),w=I(()=>n.draggable&&!n.fullscreen);return t({visible:v,dialogContentRef:f}),(d,O)=>(F(),_e(xt,{to:"body",disabled:!d.appendToBody},[Q(Mt,{name:"dialog-fade",onAfterEnter:l(r),onAfterLeave:l(u),onBeforeLeave:l(y),persisted:""},{default:z(()=>[Dt(Q(l($s),{"custom-mask-event":"",mask:d.modal,"overlay-class":d.modalClass,"z-index":l(c)},{default:z(()=>[W("div",{role:"dialog","aria-modal":"true","aria-label":d.title||void 0,"aria-labelledby":d.title?void 0:l(b),"aria-describedby":l(E),class:k(`${l(s).namespace.value}-overlay-dialog`),style:st(l(p)),onClick:O[0]||(O[0]=(...$)=>l(m).onClick&&l(m).onClick(...$)),onMousedown:O[1]||(O[1]=(...$)=>l(m).onMousedown&&l(m).onMousedown(...$)),onMouseup:O[2]||(O[2]=(...$)=>l(m).onMouseup&&l(m).onMouseup(...$))},[Q(l(_s),{loop:"",trapped:l(v),"focus-start-el":"container",onFocusAfterTrapped:l(P),onFocusAfterReleased:l(N),onFocusoutPrevented:l(h),onReleaseRequested:l(L)},{default:z(()=>[l(T)?(F(),_e(Ls,nt({key:0,ref_key:"dialogContentRef",ref:f},d.$attrs,{"custom-class":d.customClass,center:d.center,"align-center":d.alignCenter,"close-icon":d.closeIcon,draggable:l(w),fullscreen:d.fullscreen,"show-close":d.showClose,title:d.title,onClose:l(C)}),Ft({header:z(()=>[d.$slots.title?A(d.$slots,"title",{key:1}):A(d.$slots,"header",{key:0,close:l(C),titleId:l(b),titleClass:l(s).e("title")})]),default:z(()=>[A(d.$slots,"default")]),_:2},[d.$slots.footer?{name:"footer",fn:z(()=>[A(d.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):we("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ms)]),_:3},8,["mask","overlay-class","z-index"]),[[kt,l(v)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Bs=ve(Rs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Ys=pt(Bs);const js={},zs={class:"footer"},Ks=W("div",null,"黃瑄惠2023/05製作",-1),Us=[Ks];function Hs(e,t){return F(),G("div",zs,Us)}const Gs=Rt(js,[["render",Hs]]),Ws=Bt("evaluate",()=>{const e=g(!0),t=g(!1),n=g(!1),o=g([]),s=g([]),a=g(0),i=g([]),f=g(!1),v=g(!1),b=g(!1),E=g(!1),_=g(0),p=g([]),T=I(()=>100/o.value.length),c=async()=>{try{const h="https://api-quiz-project.vercel.app/api/questions",m=await jt.get(h);m.status===200&&(s.value=m.data,o.value=s.value.sort(()=>Math.random()-.5),e.value=!1,i.value=o.value.map(w=>{let d=[];return d=w._id,d}))}catch(h){console.log(h)}},r=()=>{p.value.length===11&&setTimeout(()=>{E.value=!0},1500)},u=(h,m,w,d)=>{if(document.getElementsByClassName("alreadyItem")[m].classList.add("already"),p.value.indexOf(h)>-1?(b.value=!0,setTimeout(()=>{b.value=!1},800)):p.value.push(h),d!=w){const X="https://vite-lara.vercel.app/blogimg/video/wrong.mp3",S=new Audio(X);S.play(),v.value=!0,setTimeout(()=>{S.pause(),v.value=!1},800),r()}else{const X="https://vite-lara.vercel.app/blogimg/video/goldAward.mp3",S=new Audio(X);S.play(),_.value++,f.value=!0,setTimeout(()=>{S.pause(),f.value=!1},800),r()}};return{showLoading:e,activeId:a,dialogSuccess:f,dialogFail:v,dialogAlready:b,dialogSun:E,rightAmount:_,getEvaluateList:c,quizLists:o,isTransform:t,videoStop:n,changeActive:(h,m)=>{a.value=h},pageArray:i,answer1:(h,m,w,d)=>{u(h,m,w,d)},answer2:(h,m,w,d)=>{u(h,m,w,d)},answer3:(h,m,w,d)=>{u(h,m,w,d)},answer4:(h,m,w,d)=>{u(h,m,w,d)},playAudio:h=>{t.value=!0,n.value=!0;const m=new Audio(h);m.play(),setTimeout(()=>{m.pause(),t.value=!1,n.value=!1},800)},calculate:T,alreadyArray:p}});export{Ys as E,Gs as F,Ws as u};
