(()=>{"use strict";var e={614:(e,t,n)=>{var o;n.r(t),n.d(t,{NIL:()=>j,parse:()=>h,stringify:()=>s,v1:()=>f,v3:()=>T,v4:()=>A,v5:()=>x,validate:()=>d,version:()=>k});var c=new Uint8Array(16);function r(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(c)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(e){return"string"==typeof e&&l.test(e)};for(var a=[],i=0;i<256;++i)a.push((i+256).toString(16).substr(1));const s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!d(n))throw TypeError("Stringified UUID is invalid");return n};var u,p,m=0,g=0;const f=function(e,t,n){var o=t&&n||0,c=t||new Array(16),l=(e=e||{}).node||u,d=void 0!==e.clockseq?e.clockseq:p;if(null==l||null==d){var a=e.random||(e.rng||r)();null==l&&(l=u=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==d&&(d=p=16383&(a[6]<<8|a[7]))}var i=void 0!==e.msecs?e.msecs:Date.now(),f=void 0!==e.nsecs?e.nsecs:g+1,h=i-m+(f-g)/1e4;if(h<0&&void 0===e.clockseq&&(d=d+1&16383),(h<0||i>m)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");m=i,g=f,p=d;var y=(1e4*(268435455&(i+=122192928e5))+f)%4294967296;c[o++]=y>>>24&255,c[o++]=y>>>16&255,c[o++]=y>>>8&255,c[o++]=255&y;var v=i/4294967296*1e4&268435455;c[o++]=v>>>8&255,c[o++]=255&v,c[o++]=v>>>24&15|16,c[o++]=v>>>16&255,c[o++]=d>>>8|128,c[o++]=255&d;for(var E=0;E<6;++E)c[o+E]=l[E];return t||s(c)},h=function(e){if(!d(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function y(e,t,n){function o(e,o,c,r){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof o&&(o=h(o)),16!==o.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var l=new Uint8Array(16+e.length);if(l.set(o),l.set(e,o.length),(l=n(l))[6]=15&l[6]|t,l[8]=63&l[8]|128,c){r=r||0;for(var d=0;d<16;++d)c[r+d]=l[d];return c}return s(l)}try{o.name=e}catch(e){}return o.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",o}function v(e){return 14+(e+64>>>9<<4)+1}function E(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function S(e,t,n,o,c,r){return E((l=E(E(t,e),E(o,r)))<<(d=c)|l>>>32-d,n);var l,d}function I(e,t,n,o,c,r,l){return S(t&n|~t&o,e,t,c,r,l)}function C(e,t,n,o,c,r,l){return S(t&o|n&~o,e,t,c,r,l)}function N(e,t,n,o,c,r,l){return S(t^n^o,e,t,c,r,l)}function b(e,t,n,o,c,r,l){return S(n^(t|~o),e,t,c,r,l)}const T=y("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,o="0123456789abcdef",c=0;c<n;c+=8){var r=e[c>>5]>>>c%32&255,l=parseInt(o.charAt(r>>>4&15)+o.charAt(15&r),16);t.push(l)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[v(t)-1]=t;for(var n=1732584193,o=-271733879,c=-1732584194,r=271733878,l=0;l<e.length;l+=16){var d=n,a=o,i=c,s=r;n=I(n,o,c,r,e[l],7,-680876936),r=I(r,n,o,c,e[l+1],12,-389564586),c=I(c,r,n,o,e[l+2],17,606105819),o=I(o,c,r,n,e[l+3],22,-1044525330),n=I(n,o,c,r,e[l+4],7,-176418897),r=I(r,n,o,c,e[l+5],12,1200080426),c=I(c,r,n,o,e[l+6],17,-1473231341),o=I(o,c,r,n,e[l+7],22,-45705983),n=I(n,o,c,r,e[l+8],7,1770035416),r=I(r,n,o,c,e[l+9],12,-1958414417),c=I(c,r,n,o,e[l+10],17,-42063),o=I(o,c,r,n,e[l+11],22,-1990404162),n=I(n,o,c,r,e[l+12],7,1804603682),r=I(r,n,o,c,e[l+13],12,-40341101),c=I(c,r,n,o,e[l+14],17,-1502002290),n=C(n,o=I(o,c,r,n,e[l+15],22,1236535329),c,r,e[l+1],5,-165796510),r=C(r,n,o,c,e[l+6],9,-1069501632),c=C(c,r,n,o,e[l+11],14,643717713),o=C(o,c,r,n,e[l],20,-373897302),n=C(n,o,c,r,e[l+5],5,-701558691),r=C(r,n,o,c,e[l+10],9,38016083),c=C(c,r,n,o,e[l+15],14,-660478335),o=C(o,c,r,n,e[l+4],20,-405537848),n=C(n,o,c,r,e[l+9],5,568446438),r=C(r,n,o,c,e[l+14],9,-1019803690),c=C(c,r,n,o,e[l+3],14,-187363961),o=C(o,c,r,n,e[l+8],20,1163531501),n=C(n,o,c,r,e[l+13],5,-1444681467),r=C(r,n,o,c,e[l+2],9,-51403784),c=C(c,r,n,o,e[l+7],14,1735328473),n=N(n,o=C(o,c,r,n,e[l+12],20,-1926607734),c,r,e[l+5],4,-378558),r=N(r,n,o,c,e[l+8],11,-2022574463),c=N(c,r,n,o,e[l+11],16,1839030562),o=N(o,c,r,n,e[l+14],23,-35309556),n=N(n,o,c,r,e[l+1],4,-1530992060),r=N(r,n,o,c,e[l+4],11,1272893353),c=N(c,r,n,o,e[l+7],16,-155497632),o=N(o,c,r,n,e[l+10],23,-1094730640),n=N(n,o,c,r,e[l+13],4,681279174),r=N(r,n,o,c,e[l],11,-358537222),c=N(c,r,n,o,e[l+3],16,-722521979),o=N(o,c,r,n,e[l+6],23,76029189),n=N(n,o,c,r,e[l+9],4,-640364487),r=N(r,n,o,c,e[l+12],11,-421815835),c=N(c,r,n,o,e[l+15],16,530742520),n=b(n,o=N(o,c,r,n,e[l+2],23,-995338651),c,r,e[l],6,-198630844),r=b(r,n,o,c,e[l+7],10,1126891415),c=b(c,r,n,o,e[l+14],15,-1416354905),o=b(o,c,r,n,e[l+5],21,-57434055),n=b(n,o,c,r,e[l+12],6,1700485571),r=b(r,n,o,c,e[l+3],10,-1894986606),c=b(c,r,n,o,e[l+10],15,-1051523),o=b(o,c,r,n,e[l+1],21,-2054922799),n=b(n,o,c,r,e[l+8],6,1873313359),r=b(r,n,o,c,e[l+15],10,-30611744),c=b(c,r,n,o,e[l+6],15,-1560198380),o=b(o,c,r,n,e[l+13],21,1309151649),n=b(n,o,c,r,e[l+4],6,-145523070),r=b(r,n,o,c,e[l+11],10,-1120210379),c=b(c,r,n,o,e[l+2],15,718787259),o=b(o,c,r,n,e[l+9],21,-343485551),n=E(n,d),o=E(o,a),c=E(c,i),r=E(r,s)}return[n,o,c,r]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(v(t)),o=0;o<t;o+=8)n[o>>5]|=(255&e[o/8])<<o%32;return n}(e),8*e.length))})),A=function(e,t,n){var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var c=0;c<16;++c)t[n+c]=o[c];return t}return s(o)};function w(e,t,n,o){switch(e){case 0:return t&n^~t&o;case 1:case 3:return t^n^o;case 2:return t&n^t&o^n&o}}function O(e,t){return e<<t|e>>>32-t}const x=y("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var o=unescape(encodeURIComponent(e));e=[];for(var c=0;c<o.length;++c)e.push(o.charCodeAt(c))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var r=e.length/4+2,l=Math.ceil(r/16),d=new Array(l),a=0;a<l;++a){for(var i=new Uint32Array(16),s=0;s<16;++s)i[s]=e[64*a+4*s]<<24|e[64*a+4*s+1]<<16|e[64*a+4*s+2]<<8|e[64*a+4*s+3];d[a]=i}d[l-1][14]=8*(e.length-1)/Math.pow(2,32),d[l-1][14]=Math.floor(d[l-1][14]),d[l-1][15]=8*(e.length-1)&4294967295;for(var u=0;u<l;++u){for(var p=new Uint32Array(80),m=0;m<16;++m)p[m]=d[u][m];for(var g=16;g<80;++g)p[g]=O(p[g-3]^p[g-8]^p[g-14]^p[g-16],1);for(var f=n[0],h=n[1],y=n[2],v=n[3],E=n[4],S=0;S<80;++S){var I=Math.floor(S/20),C=O(f,5)+w(I,h,y,v)+E+t[I]+p[S]>>>0;E=v,v=y,y=O(h,30)>>>0,h=f,f=C}n[0]=n[0]+f>>>0,n[1]=n[1]+h>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+v>>>0,n[4]=n[4]+E>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),j="00000000-0000-0000-0000-000000000000",k=function(e){if(!d(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{v4:e}=n(614),t=function(){const e=new Date;let t=e.getDate(),n=e.getMonth()+1;return t<10&&(t="0"+t),n<10&&(n="0"+n),`${e.getFullYear()}-${n}-${t}`};class o{constructor(e,t){this.title=e,this.description=t,this.addNote()}addNote(){let e=[];e=null==JSON.parse(localStorage.getItem("notes"))||null==JSON.parse(localStorage.getItem("notes"))?[]:JSON.parse(localStorage.getItem("notes")),e=[...e,this],localStorage.setItem("notes",JSON.stringify(e))}}const{v4:c}=n(614);let r=[];r=null==JSON.parse(localStorage.getItem("Todos"))||null==JSON.parse(localStorage.getItem("Todos"))?[]:JSON.parse(localStorage.getItem("Todos"));let l=[];l=null==JSON.parse(localStorage.getItem("projects"))||null==JSON.parse(localStorage.getItem("projects"))?[]:JSON.parse(localStorage.getItem("projects")),function(e){let n=document.querySelector(".projects");e.map((o=>{let c=document.createElement("li");c.setAttribute("class","project-name");const r=document.createElement("p");r.appendChild(document.createTextNode(o.name)),c.appendChild(r);const l=document.createElement("i");l.setAttribute("class","fas fa-times"),l.addEventListener("click",(function(){e=e.filter((e=>e.id!=o.id)),localStorage.setItem("projects",JSON.stringify(e)),window.location.reload()})),c.appendChild(l),r.addEventListener("click",(function(){let n=document.querySelector(".main-content");n.innerHTML="";const c=document.createElement("h2");c.appendChild(document.createTextNode("Today")),c.setAttribute("style","text-align:center;"),n.appendChild(c);const r=document.createElement("ul");r.setAttribute("class","project-todos");let l=t();console.log(o.todo);let d=!1;if(o.todo.map((t=>{if(t.dueDate==l){d=!0;const n=document.createElement("li");n.setAttribute("class","todoitem"),"high"==t.priority&&n.setAttribute("class","high-priority");const c=document.createElement("input");c.setAttribute("type","checkbox"),c.setAttribute("class","delete-todo"),c.addEventListener("click",(function(){o.todo=o.todo.filter((e=>t.id!=e.id)),localStorage.setItem("projects",JSON.stringify(e)),window.location.reload()}));const l=document.createElement("div");l.appendChild(document.createTextNode(t.title)),document.createElement("div").appendChild(document.createTextNode(t.category));const a=document.createElement("p");a.appendChild(document.createTextNode(t.dueDate));const i=document.createElement("i");i.setAttribute("class","fas fa-trash"),i.addEventListener("click",(function(){o.todo=o.todo.filter((e=>e.id!=t.id)),localStorage.setItem("projects",JSON.stringify(e)),window.location.reload()})),n.appendChild(c),n.appendChild(l),n.appendChild(a),n.appendChild(i),r.appendChild(n)}})),n.appendChild(r),0==d){let e=document.createElement("p");e.appendChild(document.createTextNode("no Tasks for Today")),e.setAttribute("style","text-align:center"),n.appendChild(e)}const a=document.createElement("h2");a.appendChild(document.createTextNode("Upcoming")),a.setAttribute("style","text-align:center"),n.appendChild(a);const i=document.createElement("ul");i.setAttribute("class","upcoming-project-todos"),console.log(o);let s=!1;if(o.todo.map((t=>{if(t.dueDate>l){s=!0,console.log(t);const n=document.createElement("li");n.setAttribute("class","todoitem"),"high"==t.priority&&n.setAttribute("class","high-priority");const c=document.createElement("input");c.setAttribute("type","checkbox"),c.setAttribute("class","delete-todo"),c.addEventListener("click",(function(){o.todo=o.todo.filter((e=>t.id!=e.id)),localStorage.setItem("projects",JSON.stringify(e)),window.location.reload()}));const r=document.createElement("div");r.appendChild(document.createTextNode(t.title)),document.createElement("div").appendChild(document.createTextNode(t.category));const l=document.createElement("p");l.appendChild(document.createTextNode(t.dueDate));const d=document.createElement("i");d.setAttribute("class","fas fa-trash"),d.addEventListener("click",(function(){console.log("deleting todo"),o.todo=o.todo.filter((e=>e.id!=t.id)),localStorage.setItem("projects",JSON.stringify(e)),window.location.reload()})),n.appendChild(c),n.appendChild(r),n.appendChild(l),n.appendChild(d),i.appendChild(n)}})),n.appendChild(i),0==s){let e=document.createElement("p");e.appendChild(document.createTextNode("no Upcoming Tasks")),e.setAttribute("style","text-align:center"),n.appendChild(e)}})),n.appendChild(c)}));let o=document.createElement("button");o.innerHTML="Add Project +",o.setAttribute("id","add-project-form"),n.appendChild(o)}(l);class d{constructor(e){this.id=c(),this.name=e,this.todo=[],l.push(this)}addTodo(e){this.todo.push(e)}deleteTodo(e){this.todo.filter((t=>t.id!=e.id))}}class a{constructor(e,t,n,o,r,l){this.id=c(),this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.category=r,"none"===l?(console.log(l),this.addTodo()):this.addtoproject(l)}addTodo(){let e=[];console.log("in addtodo"),e=null==JSON.parse(localStorage.getItem("Todos"))||null==JSON.parse(localStorage.getItem("Todos"))?[]:JSON.parse(localStorage.getItem("Todos")),e=[...e,this],localStorage.setItem("Todos",JSON.stringify(e))}addtoproject(e){let t=[];t=null==JSON.parse(localStorage.getItem("projects"))||null==JSON.parse(localStorage.getItem("projects"))?[]:JSON.parse(localStorage.getItem("projects")),t.map((t=>{t.id===e&&(t.todo=[...t.todo,this])})),console.log(t),localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(t))}}document.getElementById("createTodo").addEventListener("click",(function(){console.log(document.getElementById("title").value),console.log(document.getElementById("desc").value),console.log(document.getElementById("select-project").value),new a(document.getElementById("title").value,document.getElementById("desc").value,document.getElementById("dueDate").value,document.getElementById("priority").value,document.getElementById("category").value,document.getElementById("select-project").value),document.querySelector(".to-do-card").style.display="none"})),document.getElementById("cancel-project").addEventListener("click",(function(){document.getElementById("project-form").style.display="none"})),document.getElementById("add-project-form").addEventListener("click",(function(){document.getElementById("project-form").style.display="flex"})),document.getElementById("add-project").addEventListener("click",(function(){new d(document.getElementById("project-name").value),localStorage.setItem("projects",JSON.stringify(l))})),document.getElementById("closeDisplay").addEventListener("click",(function(){document.querySelector(".to-do-card").style.display="none"})),document.getElementById("openDisplay").addEventListener("click",(function(){console.log("hello"),document.querySelector(".to-do-card").style.display="block",console.log("hello");let e=document.getElementById("select-project");console.log(e),l.map((t=>{const n=document.createElement("option");n.appendChild(document.createTextNode(t.name)),n.setAttribute("value",t.id),e.appendChild(n)}))})),document.getElementById("project-closeDisplay").addEventListener("click",(function(){document.querySelector(".project-to-do-card").style.display="none"})),document.getElementById("opennote").addEventListener("click",(function(){console.log("hello!!!"),document.querySelector(".main-content").innerHTML="",document.getElementById("noteFormContainer").style.display="flex",console.log("hello!!!")})),document.getElementById("closeNote").addEventListener("click",(function(){document.getElementById("noteFormContainer").style.display="none"})),document.getElementById("create-note").addEventListener("click",(function(){console.log(document.getElementById("note-title").value,document.getElementById("note-description").value),new o(document.getElementById("note-title").value,document.getElementById("note-description").value),document.getElementById("noteFormContainer").style.display="none"})),document.getElementById("show-notes").addEventListener("click",(function(){!function(){let e=[];e=null==JSON.parse(localStorage.getItem("notes"))||null==JSON.parse(localStorage.getItem("notes"))?[]:JSON.parse(localStorage.getItem("notes"));const t=document.querySelector(".main-content");t.innerHTML="";const n=document.createElement("h1");n.appendChild(document.createTextNode("Notes")),t.appendChild(n);const o=document.createElement("ul");console.log(e),e.map((e=>{const t=document.createElement("li");t.setAttribute("class","individual-note");const n=document.createElement("h2");n.appendChild(document.createTextNode(e.title));const c=document.createElement("p");c.appendChild(document.createTextNode(e.description));const r=document.createElement("i");r.setAttribute("class","fas fa-trash"),r.setAttribute("style","float:right"),r.addEventListener("click",(function(){let t=[];t=null==JSON.parse(localStorage.getItem("notes"))||null==JSON.parse(localStorage.getItem("notes"))?[]:JSON.parse(localStorage.getItem("notes")),t=t.filter((t=>t.id!=e.id)),localStorage.setItem("notes",JSON.stringify(t)),window.location.reload()})),t.appendChild(n),t.appendChild(r),t.appendChild(c),o.appendChild(t)})),t.appendChild(o)}()})),document.getElementById("today").addEventListener("click",(function(){document.querySelector(".main-content").innerHTML="";const e=document.querySelector(".main-content"),t=document.createElement("h1");t.appendChild(document.createTextNode("TODAY TASKS")),t.setAttribute("style","text-align:center"),e.appendChild(t);const n=document.createElement("ul");let o=!1;if(r.map((e=>{let t=new Date,c=t.getDate(),l=t.getMonth(),d=t.getFullYear();console.log(e.dueDate);const a=`${d}-${l+1}-0${c}`;if(console.log(a),e.dueDate==a){o=!0;const t=document.createElement("li");t.setAttribute("class","todoitem");const c=document.createElement("input");c.setAttribute("type","checkbox"),c.setAttribute("class","delete-todo"),c.addEventListener("click",(function(){r=r.filter((t=>t.id!=e.id)),console.log(r),localStorage.setItem("Todos",JSON.stringify(r)),window.location.reload()}));const l=document.createElement("div");l.appendChild(document.createTextNode(e.title));const d=document.createElement("p");d.appendChild(document.createTextNode(e.dueDate));const a=document.createElement("i");a.setAttribute("class","fas fa-trash"),a.addEventListener("click",(function(){console.log("deleting todo"),r=r.filter((t=>t.id!=e.id)),console.log(r),localStorage.setItem("Todos",JSON.stringify(r)),window.location.reload()})),t.appendChild(c),t.appendChild(l),t.appendChild(d),t.appendChild(a),n.appendChild(t)}})),e.appendChild(n),0==o){let t=document.createElement("p");t.appendChild(document.createTextNode("no Tasks for Today")),t.setAttribute("style","text-align:center"),e.appendChild(t)}})),document.getElementById("upcoming").addEventListener("click",(function(){document.querySelector(".main-content").innerHTML="";const e=document.querySelector(".main-content"),n=document.createElement("h1");n.appendChild(document.createTextNode("UPCOMING TASKS")),n.setAttribute("style","text-align:center"),e.appendChild(n);const o=document.createElement("ul");let c=!1;if(r.map((e=>{let n=new Date,l=n.getDate(),d=n.getMonth(),a=n.getFullYear();console.log(e.dueDate);const i=`${a}-${d+1}-0${l}`;if(console.log(i),e.dueDate>t()){c=!0;const t=document.createElement("li");t.setAttribute("class","todoitem");const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("class","delete-todo"),n.addEventListener("click",(function(){r=r.filter((t=>t.id!=e.id)),console.log(r),localStorage.setItem("Todos",JSON.stringify(r)),window.location.reload()}));const l=document.createElement("div");l.appendChild(document.createTextNode(e.title));const d=document.createElement("p");d.appendChild(document.createTextNode(e.dueDate));const a=document.createElement("i");a.setAttribute("class","fas fa-trash"),a.addEventListener("click",(function(){console.log("deleting UPCOMING todo"),r=r.filter((t=>t.id!=e.id)),console.log(r),localStorage.setItem("Todos",JSON.stringify(r)),window.location.reload()})),t.appendChild(n),t.appendChild(l),t.appendChild(d),t.appendChild(a),o.appendChild(t)}})),e.appendChild(o),0==c){let t=document.createElement("p");t.appendChild(document.createTextNode("no Upcoming tasks")),t.setAttribute("style","text-align:center"),e.appendChild(t)}}))})()})();