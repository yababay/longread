var yt=Object.defineProperty;var _t=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>_t(e,typeof t!="symbol"?t+"":t,n);import{n as pe,s as vt,o as je,t as bt}from"./DYjCt7Qj.js";new URL("sveltekit-internal://");function At(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function St(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ge({href:e}){return e.split("#")[0]}function Et(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function Rt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function It(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Ut=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&G.delete(Ae(e)),Ut(e,t));const G=new Map;function Lt(e,t){const n=Ae(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=It(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Tt(e,t,n){if(G.size>0){const r=Ae(e,n),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(t,n)}function Ae(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Rt(...a)}"]`}return r}const xt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ot(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return me(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return me(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const h=xt.exec(c),[,u,w,f,m]=h;return t.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return me(c)}).join("")}).join("")}/?$`),params:t}}function Ct(e){return!/^\([^)]+\)$/.test(e)}function Ot(e){return e.slice(1).split("/").filter(Ct)}function Nt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=t[o+1],u=a[o+1];h&&!h.rest&&h.optional&&u&&c.chained&&(i=0),!h&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function me(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $t({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,h]])=>{const{pattern:u,params:w}=Pt(o),f={id:o,exec:m=>{const p=u.exec(m);if(p)return Nt(p,w,r)},errors:[1,...h||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function ze(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function De(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const D=[];function Se(e,t=pe){let n;const r=new Set;function a(o){if(vt(e,o)&&(e=o,n)){const c=!D.length;for(const l of r)l[1](),D.push(l,e);if(c){for(let l=0;l<D.length;l+=2)D[l][0](D[l+1]);D.length=0}}}function s(o){a(o(e))}function i(o,c=pe){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||pe),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}var We;const T=((We=globalThis.__sveltekit_4vlgnm)==null?void 0:We.base)??"/longread";var Ye;const jt=((Ye=globalThis.__sveltekit_4vlgnm)==null?void 0:Ye.assets)??T,Dt="1743510818355",Je="sveltekit:snapshot",Xe="sveltekit:scroll",Ze="sveltekit:states",Ft="sveltekit:pageurl",V="sveltekit:history",W="sveltekit:navigation",N={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},X=location.origin;function Qe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ke(){return{x:pageXOffset,y:pageYOffset}}function F(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Fe={...N,"":N.hover};function et(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function tt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function _e(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ce(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===X&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ee(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=F(o,"preload-code")),a===null&&(a=F(o,"preload-data")),t===null&&(t=F(o,"keepfocus")),n===null&&(n=F(o,"noscroll")),s===null&&(s=F(o,"reload")),i===null&&(i=F(o,"replacestate")),o=et(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Fe[r??"off"],preload_data:Fe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ve(e){const t=Se(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const nt={v:()=>{}};function Vt(){const{set:e,subscribe:t}=Se(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${jt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Dt;return i&&(e(!0),nt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ce(e,t,n){return e.origin!==X||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function En(e){}function Be(e){const t=qt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function qt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Bt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Mt=-1,Gt=-2,Ht=-3,Kt=-4,Wt=-5,Yt=-6;function zt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Mt)return;if(s===Ht)return NaN;if(s===Kt)return 1/0;if(s===Wt)return-1/0;if(s===Yt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const h=new Set;r[s]=h;for(let f=1;f<o.length;f+=1)h.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],p=Be(m),d=new f(p);r[s]=d;break}case"ArrayBuffer":{const f=o[1],m=Be(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const h=o[l];h!==Gt&&(c[l]=a(h))}}else{const c={};r[s]=c;for(const l in o){const h=o[l];c[l]=a(h)}}return r[s]}return a(0)}const rt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...rt];const Jt=new Set([...rt]);[...Jt];function Xt(e){return e.filter(t=>t!=null)}class le{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Ee{constructor(t,n){this.status=t,this.location=n}}class Re extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Zt="x-sveltekit-invalidated",Qt="x-sveltekit-trailing-slash";function te(e){return e instanceof le||e instanceof Re?e.status:500}function en(e){return e instanceof Re?e.text:"Internal Error"}let I,Y,we;const tn=je.toString().includes("$$")||/function \w+\(\) \{\}/.test(je.toString());tn?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Y={current:null},we={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},Y=new class{constructor(){x(this,"current",$state.raw(null))}},we=new class{constructor(){x(this,"current",$state.raw(!1))}},nt.v=()=>we.current=!0);function nn(e){Object.assign(I,e)}const rn="/__data.json",an=".html__data.json";function on(e){return e.endsWith(".html")?e.replace(/\.html$/,an):e.replace(/\/$/,"")+rn}const sn=new Set(["icon","shortcut icon","apple-touch-icon"]),j=ze(Xe)??{},z=ze(Je)??{},C={url:Ve({}),page:Ve({}),navigating:Se(null),updated:Vt()};function Ie(e){j[e]=ke()}function cn(e,t){let n=e+1;for(;j[n];)delete j[n],n+=1;for(n=t+1;z[n];)delete z[n],n+=1}function q(e){return location.href=e.href,new Promise(()=>{})}async function at(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function qe(){}let Ue,ve,ne,P,be,A;const re=[],ae=[];let U=null;const Z=new Map,ot=new Set,ln=new Set,H=new Set;let v={branch:[],error:null,url:null},Le=!1,oe=!1,Me=!0,J=!1,M=!1,st=!1,Te=!1,it,k,L,$;const K=new Set;async function Ln(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Ue=$t(e),P=document.documentElement,be=t,ve=e.nodes[0],ne=e.nodes[1],ve(),ne(),k=(i=history.state)==null?void 0:i[V],L=(o=history.state)==null?void 0:o[W],k||(k=L=Date.now(),history.replaceState({...history.state,[V]:k,[W]:L},""));const r=j[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await vn(be,n):await wn(A.hash?An(new URL(location.href)):location.href,{replaceState:!0}),_n()}function fn(){re.length=0,Te=!1}function ct(e){ae.some(t=>t==null?void 0:t.snapshot)&&(z[e]=ae.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function lt(e){var t;(t=z[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=ae[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function Ge(){Ie(k),De(Xe,j),ct(L),De(Je,z)}async function xe(e,t,n,r){return Q({type:"goto",url:Qe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Te=!0),t.invalidate&&t.invalidate.forEach(yn)}})}async function un(e){if(e.id!==(U==null?void 0:U.id)){const t={};K.add(t),U={id:e.id,token:t,promise:dt({...e,preload:t}).then(n=>(K.delete(t),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function ye(e){var n;const t=(n=await ue(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function ft(e,t,n){var s;v=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,e.props.page),it=new A.root({target:t,props:{...e.props,stores:C,components:ae},hydrate:n,sync:!1}),lt(L);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};H.forEach(i=>i(a)),oe=!0}function se({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(T&&(e.pathname===T||e.pathname===T+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=At(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Xt(n).map(f=>f.node.component),page:Oe(I)}};i!==void 0&&(c.props.form=i);let l={},h=!I,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],p=v.branch[f];(m==null?void 0:m.data)!==(p==null?void 0:p.data)&&(h=!0),m&&(l={...l,...m.data},h&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||e.href!==v.url.href||v.error!==a||i!==void 0&&i!==I.form||h)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:h?l:I.data}),c}async function Pe({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var h,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((h=l.universal)!=null&&h.load){let f=function(...p){for(const d of p){const{href:_}=new URL(d,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(p,d)=>(o&&(c.route=!0),p[d])}),params:new Proxy(r,{get:(p,d)=>(o&&c.params.add(d),p[d])}),data:(s==null?void 0:s.data)??null,url:Et(n,()=>{o&&(c.url=!0)},p=>{o&&c.search_params.add(p)},A.hash),async fetch(p,d){p instanceof Request&&(d={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:[...p.headers].length?p.headers:void 0,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...d});const{resolved:_,promise:E}=ut(p,d,n);return o&&f(_.href),E},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(p){o=!1;try{return p()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function ut(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=oe?Tt(r,a.href,t):Lt(r,t);return{resolved:a,promise:s}}function He(e,t,n,r,a,s){if(Te)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(re.some(o=>o(new URL(i))))return!0;return!1}function Ce(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function dn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function Ke({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Oe(I),constructors:[]}}}async function dt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((U==null?void 0:U.id)===e)return K.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let h=null;const u=v.url?e!==ie(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=dn(v.url,n);let m=!1;const p=l.map((g,y)=>{var O;const b=v.branch[y],S=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||He(m,w,u,f,(O=b.server)==null?void 0:O.uses,r));return S&&(m=!0),S});if(p.some(Boolean)){try{h=await gt(n,p)}catch(g){const y=await B(g,{url:n,params:r,route:{id:e}});return K.has(s)?Ke({error:y,url:n,params:r,route:a}):fe({status:te(g),error:y,url:n,route:a})}if(h.type==="redirect")return h}const d=h==null?void 0:h.nodes;let _=!1;const E=l.map(async(g,y)=>{var de;if(!g)return;const b=v.branch[y],S=d==null?void 0:d[y];if((!S||S.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!He(_,w,u,f,(de=b.universal)==null?void 0:de.uses,r))return b;if(_=!0,(S==null?void 0:S.type)==="error")throw S;return Pe({loader:g[1],url:n,params:r,route:a,parent:async()=>{var $e;const Ne={};for(let he=0;he<y;he+=1)Object.assign(Ne,($e=await E[he])==null?void 0:$e.data);return Ne},server_data_node:Ce(S===void 0&&g[0]?{type:"skip"}:S??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of E)g.catch(()=>{});const R=[];for(let g=0;g<l.length;g+=1)if(l[g])try{R.push(await E[g])}catch(y){if(y instanceof Ee)return{type:"redirect",location:y.location};if(K.has(s))return Ke({error:await B(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=te(y),S;if(d!=null&&d.includes(y))b=y.status??b,S=y.error;else if(y instanceof le)S=y.body;else{if(await C.updated.check())return await at(),await q(n);S=await B(y,{params:r,url:n,route:{id:a.id}})}const O=await hn(g,R,i);return O?se({url:n,params:r,branch:R.slice(0,O.idx).concat(O.node),status:b,error:S,route:a}):await pt(n,{id:a.id},S,b)}else R.push(void 0);return se({url:n,params:r,branch:R,status:200,error:null,route:a,form:t?void 0:null})}async function hn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:e,error:t,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await gt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==X||n.pathname!==location.pathname||Le)&&await q(n)}try{const o=await Pe({loader:ve,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ce(s)}),c={node:await ne(),loader:ne,universal:null,server:null,data:null};return se({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Ee)return xe(new URL(o.location,location.href),{},0);throw o}}async function pn(e){const t=e.href;if(Z.has(t))return Z.get(t);let n;try{const r=(async()=>{let a=await A.hooks.reroute({url:new URL(e),fetch:async(s,i)=>ut(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);A.hash?s.hash=a:s.pathname=a,a=s}return a})();Z.set(t,r),n=await r}catch{Z.delete(t);return}return n}async function ue(e,t){if(e&&!ce(e,T,A.hash)){const n=await pn(e);if(!n)return;const r=gn(n);for(const a of Ue){const s=a.exec(r);if(s)return{id:ie(e),invalidating:t,route:a,params:kt(s),url:e}}}}function gn(e){return St(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function ie(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ht({url:e,type:t,intent:n,delta:r}){let a=!1;const s=wt(v,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return J||ot.forEach(o=>o(i)),a?null:s}async function Q({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=qe,block:h=qe}){const u=$;$=c;const w=await ue(t,!1),f=ht({url:t,type:e,delta:n==null?void 0:n.delta,intent:w});if(!f){h(),$===c&&($=u);return}const m=k,p=L;l(),J=!0,oe&&C.navigating.set(Y.current=f.navigation);let d=w&&await dt(w);if(!d){if(ce(t,T,A.hash))return await q(t);d=await pt(t,{id:null},await B(new Re(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(w==null?void 0:w.url)||t,$!==c)return f.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await fe({status:500,error:await B(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await xe(new URL(d.location,t).href,{},o+1,c),!1;else d.props.page.status>=400&&await C.updated.check()&&(await at(),await q(t));if(fn(),Ie(m),ct(p),d.props.page.url.pathname!==t.pathname&&(t.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,y={[V]:k+=g,[W]:L+=g,[Ze]:i};(s?history.replaceState:history.pushState).call(history,y,"",t),s||cn(k,L)}if(U=null,d.props.page.state=i,oe){v=d.state,d.props.page&&(d.props.page.url=t);const g=(await Promise.all(Array.from(ln,y=>y(f.navigation)))).filter(y=>typeof y=="function");if(g.length>0){let y=function(){g.forEach(b=>{H.delete(b)})};g.push(y),g.forEach(b=>{H.add(b)})}it.$set(d.props),nn(d.props.page),st=!0}else ft(d,be,!1);const{activeElement:_}=document;await bt();const E=n?n.scroll:a?ke():null;if(Me){const g=t.hash&&document.getElementById(decodeURIComponent(A.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==_&&document.activeElement!==document.body;!r&&!R&&bn(),Me=!0,d.props.page&&Object.assign(I,d.props.page),J=!1,e==="popstate"&&lt(L),f.fulfil(void 0),H.forEach(g=>g(f.navigation)),C.navigating.set(Y.current=null)}async function pt(e,t,n,r){return e.origin===X&&e.pathname===location.pathname&&!Le?await fe({status:r,error:n,url:e,route:t}):await q(e)}function mn(){let e,t,n;P.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,N.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],N.tap)}P.addEventListener("mousedown",r),P.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(ye(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=tt(o,P),h=l===t&&c>=n;if(!l||h)return;const{url:u,external:w,download:f}=_e(l,T,A.hash);if(w||f)return;const m=ee(l),p=u&&ie(v.url)===ie(u);if(!(m.reload||p))if(c<=m.preload_data){t=l,n=N.tap;const d=await ue(u,!1);if(!d)return;un(d)}else c<=m.preload_code&&(t=l,n=c,ye(u))}function i(){a.disconnect();for(const o of P.querySelectorAll("a")){const{url:c,external:l,download:h}=_e(o,T,A.hash);if(l||h)continue;const u=ee(o);u.reload||(u.preload_code===N.viewport&&a.observe(o),u.preload_code===N.eager&&ye(c))}}H.add(i),i()}function B(e,t){if(e instanceof le)return e.body;const n=te(e),r=en(e);return A.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function wn(e,t={}){return e=new URL(Qe(e)),e.origin!==X?Promise.reject(new Error("goto: invalid URL")):xe(e,t,0)}function yn(e){if(typeof e=="function")re.push(e);else{const{href:t}=new URL(e,location.href);re.push(n=>n.href===t)}}function _n(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Ge(),!J){const a=wt(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ot.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ge()}),(t=navigator.connection)!=null&&t.saveData||mn(),P.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=tt(n.composedPath()[0],P);if(!r)return;const{url:a,external:s,target:i,download:o}=_e(r,T,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ee(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[h,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=h===ge(location);if(s||c.reload&&(!w||!u)){ht({url:a,type:"link"})?J=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(M=!0,Ie(k),e(a),!c.replace_state)return;M=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await Q({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ce(o,T,!1))return;const c=n.target,l=ee(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&h.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(h).toString(),Q({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[V]){const a=n.state[V];if($={},a===k)return;const s=j[a],i=n.state[Ze]??{},o=new URL(n.state[Ft]??location.href),c=n.state[W],l=v.url?ge(location)===ge(v.url):!1;if(c===L&&(st||l)){i!==I.state&&(I.state=i),e(o),j[k]=ke(),s&&scrollTo(s.x,s.y),k=a;return}const u=a-k;await Q({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{k=a,L=c},block:()=>{history.go(-u)},nav_token:$})}else if(!M){const a=new URL(location.href);e(a),A.hash&&location.reload()}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[V]:++k,[W]:L},"",location.href))});for(const n of document.querySelectorAll("link"))sn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&C.navigating.set(Y.current=null)});function e(n){v.url=I.url=n,C.page.set(Oe(I)),C.page.notify()}}async function vn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Le=!0;const l=new URL(location.href);let h;({params:a={},route:s={id:null}}=await ue(l,!1)||{}),h=Ue.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(p,d)=>{const _=o[d];return _!=null&&_.uses&&(_.uses=mt(_.uses)),Pe({loader:A.nodes[p],url:l,params:a,route:s,parent:async()=>{const E={};for(let R=0;R<d;R+=1)Object.assign(E,(await f[R]).data);return E},server_data_node:Ce(_)})}),m=await Promise.all(f);if(h){const p=h.layouts;for(let d=0;d<p.length;d++)p[d]||m.splice(d,0,void 0)}u=se({url:l,params:a,branch:m,status:t,error:n,form:c,route:h??null})}catch(f){if(f instanceof Ee){await q(new URL(f.location,location.href));return}u=await fe({status:te(f),error:await B(f,{url:l,params:a,route:s}),url:l,route:s}),e.textContent="",w=!1}u.props.page&&(u.props.page.state={}),ft(u,e,w)}async function gt(e,t){var s;const n=new URL(e);n.pathname=on(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Qt,"1"),n.searchParams.append(Zt,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new le(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function h(f){return zt(f,{...A.decoders,Promise:m=>new Promise((p,d)=>{o.set(m,{fulfil:p,reject:d})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const p=u.indexOf(`
`);if(p===-1)break;const d=JSON.parse(u.slice(0,p));if(u=u.slice(p+1),d.type==="redirect")return i(d);if(d.type==="data")(w=d.nodes)==null||w.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=mt(_.uses),_.data=h(_.data))}),i(d);else if(d.type==="chunk"){const{id:_,data:E,error:R}=d,g=o.get(_);o.delete(_),R?g.reject(h(R)):g.fulfil(h(E))}}}})}function mt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function bn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function wt(e,t,n,r){var c,l;let a,s;const i=new Promise((h,u)=>{a=h,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Oe(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function An(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Ln as a,En as l,C as s};
