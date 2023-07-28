// stats.js r8 - http://github.com/mrdoob/stats.js
var Stats=function(){var h,a,n=0,o=0,i=Date.now(),u=i,p=i,l=0,q=1E3,r=0,e,j,f,b=[[16,16,48],[0,255,255]],m=0,s=1E3,t=0,d,k,g,c=[[16,48,16],[0,255,0]];h=document.createElement("div");h.style.cursor="pointer";h.style.width="80px";h.style.opacity="0.9";h.style.zIndex="10001";h.addEventListener("mousedown",function(a){a.preventDefault();n=(n+1)%2;n==0?(e.style.display="block",d.style.display="none"):(e.style.display="none",d.style.display="block")},!1);e=document.createElement("div");e.style.textAlign=
"left";e.style.lineHeight="1.2em";e.style.backgroundColor="rgb("+Math.floor(b[0][0]/2)+","+Math.floor(b[0][1]/2)+","+Math.floor(b[0][2]/2)+")";e.style.padding="0 0 3px 3px";h.appendChild(e);j=document.createElement("div");j.style.fontFamily="Helvetica, Arial, sans-serif";j.style.fontSize="19px";j.style.color="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";j.style.fontWeight="bold";j.innerHTML="FPS";e.appendChild(j);f=document.createElement("div");f.style.position="relative";f.style.width="74px";f.style.height=
"30px";f.style.backgroundColor="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";for(e.appendChild(f);f.children.length<74;)a=document.createElement("span"),a.style.width="1px",a.style.height="30px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+b[0][0]+","+b[0][1]+","+b[0][2]+")",f.appendChild(a);d=document.createElement("div");d.style.textAlign="left";d.style.lineHeight="1.2em";d.style.backgroundColor="rgb("+Math.floor(c[0][0]/2)+","+Math.floor(c[0][1]/2)+","+Math.floor(c[0][2]/2)+")";d.style.padding=
"0 0 3px 3px";d.style.display="none";h.appendChild(d);k=document.createElement("div");k.style.fontFamily="Helvetica, Arial, sans-serif";k.style.fontSize="19px";k.style.color="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";k.style.fontWeight="bold";k.innerHTML="MS";d.appendChild(k);g=document.createElement("div");g.style.position="relative";g.style.width="74px";g.style.height="30px";g.style.backgroundColor="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";for(d.appendChild(g);g.children.length<74;)a=document.createElement("span"),
a.style.width="1px",a.style.height=Math.random()*30+"px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+c[0][0]+","+c[0][1]+","+c[0][2]+")",g.appendChild(a);return{domElement:h,update:function(){i=Date.now();m=i-u;s=Math.min(s,m);t=Math.max(t,m);k.textContent=m+" MS ("+s+"-"+t+")";var a=Math.min(30,30-m/200*30);g.appendChild(g.firstChild).style.height=a+"px";u=i;o++;if(i>p+1E3)l=Math.round(o*1E3/(i-p)),q=Math.min(q,l),r=Math.max(r,l),j.textContent=l+" FPS ("+q+"-"+r+")",a=Math.min(30,30-l/
100*30),f.appendChild(f.firstChild).style.height=a+"px",p=i,o=0}}};


/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.17.0",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===n)&&v!==t&&(i=!0,v>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=g+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(l=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&l>=.5)&&(l=1-l),3===_&&(l*=2),1===u?l*=l:2===u?l*=l*l:3===u?l*=l*l*l:4===u&&(l*=l*l*l*l),this.ratio=1===_?1-l:2===_?l:.5>this._time/g?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,c){a=a||0;var f,p,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(c||n.callbackScope||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),f=t.length-1,m=0;f>=m;m++){p={};for(d in n)p[d]=n[d];p.delay=g,m===f&&l&&(p.onComplete=y),v[m]=new r(t[m],e,p),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},c=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=c(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,c,f=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in f)for(l=f[_].target.parentNode;l;)l===t&&(n=n.concat(f[_].tweens)),l=l.parentNode;for(c=n.length,u=0;c>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var f=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=c(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){f(!0,t,e,i)},r.resumeAll=function(t,e,i){f(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],c=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,c=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=c,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&c.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&c.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&c.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=f(r.startAt)),c.to(t[u],e,f(r),u*n);return this.add(c,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==c&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(f===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,h=new i(null,null,1,0),l=s.prototype=new t;return l.constructor=s,l.kill()._gc=!1,s.version="1.17.0",l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},l.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},l.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},l.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:h,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,h,l,_,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,p=this._time,m=this._totalTime,d=this._startTime,g=this._timeScale,v=this._rawPrevTime,y=this._paused,T=this._cycle;if(t>=c)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,l="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>v||v===r)&&v!==t&&this._first&&(_=!0,v>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===f&&v!==r&&(v>0||0>t&&v>=0)&&!this._locked)&&(l="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,l="onReverseComplete"):v>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else 0===f&&0>v&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=f+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time));if(this._cycle!==T&&!this._locked){var x=this._yoyo&&0!==(1&T),w=x===(this._yoyo&&0!==(1&this._cycle)),b=this._totalTime,P=this._cycle,k=this._rawPrevTime,S=this._time;if(this._totalTime=T*f,T>this._cycle?x=!x:this._totalTime+=f,this._time=p,this._rawPrevTime=0===f?v-1e-4:v,this._cycle=T,this._locked=!0,p=x?0:f,this.render(p,e,0===f),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),w&&(p=x?f+1e-4:-1e-4,this.render(p,!0,!1)),this._locked=!1,this._paused&&!y)return;this._time=S,this._totalTime=b,this._cycle=P,this._rawPrevTime=k}if(!(this._time!==p&&this._first||i||_))return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==m&&t>0&&(this._active=!0),0===m&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=p)for(s=this._first;s&&(h=s._next,!this._paused||y);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;else for(s=this._last;s&&(h=s._prev,!this._paused||y);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),l&&(this._locked||this._gc||(d===this._startTime||g!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this._callback(l)))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},l.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},l.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,c=(l+_)/2,f=(c-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(l=0;w>l;l++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[l],T=i[l],x=.25*(T+y)*r/(a?.5:s[l]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,c,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(c=t[h][s])&&"="===c.charAt(1)&&(t[h][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],f[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][s],0,0,t[h+1][s]),f},u=function(t,n,a,h,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!h){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],l(m,n,a,h,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(l=v.length;--l>-1;){for(c=v[l],m[c]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,h=c.b-n,s=r=0,_=1;i>=_;_++)l=p*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(l=c-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]
}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),f[n]?p[n](h):p[n]=h;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](h):p[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(l=0;f>=l;l++)u=i(t,c[l],a,o,h,f!==l),p[l]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.17.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,F={},N=document,E=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},L=E("div"),X=E("img"),B=a._internals={_specialProps:h},Y=navigator.userAgent,j=function(){var t=Y.indexOf("Android"),e=E("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),p=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),f=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return j||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||N.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||Pe===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||be===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return j||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Se&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new fe(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),h="="===t.charAt(1),a=(h?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:I)-(h?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(_e)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(l)+h}:function(t){return t}},ce=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},fe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,c={},f={},p=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(l=new fe(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],c[o]=s[h],n||(l=new fe(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:c,end:f,firstMPT:l,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),me=function(t,e,i,s,r,n){var a=new pe(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},de=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new pe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=h,a.setRatio=l,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&("#"===p.charAt(0)||oe[p]||P.test(p)))k=","===m.charAt(m.length-1)?"),":")",p=le(p),m=le(m),x=p.length+m.length>6,x&&!j&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(j||(x=!1),a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":k,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,k,!1)));else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ge=9;for(l=pe.prototype,l.l=l.pr=0;--ge>0;)l["xn"+ge]=0,l["xs"+ge]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ve=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ye=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ve(n[s],e)},Te=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ye(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ve.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):c&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=h.join(", ")}return de(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ye(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})},a.useSVGTransformAttr=c||f;var xe,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),be=W("transform"),Pe=V+"transform",ke=W("transformOrigin"),Se=null!==W("perspective"),Re=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Oe=window.SVGElement,Ae=function(t,e,i){var s,r=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=N.documentElement,De=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return N.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[ke]="50% 50%",e.style[be]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Se),Ce.removeChild(t)),s}(),Me=function(t,e,i,s,r){var n,o,h,l,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Fe(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=l=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=l*(p/g)+_*(-f/g)+(f*d-p*m)/g,h=l*(-c/g)+_*(u/g)-(u*d-c*m)/g,l=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=h),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=l-v,h=_-y,T.xOffset+=o*x[0]+h*x[2]-o,T.yOffset+=o*x[1]+h*x[3]-h):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},ze=function(t){return!!(Oe&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Fe=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Re,h=1e5;if(be?s=Q(t,Pe,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&ze(t))&&(i&&-1!==(t.style[be]+"").indexOf("matrix")&&(s=t.style[be],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ge=r.length;--ge>-1;)n=Number(r[ge]),r[ge]=(a=n-(n|=0))?(0|a*h+(0>a?-.5:.5))/h+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,h,l,_,u,c,f=s?t._gsTransform||new Re:new Re,p=0>f.scaleX,m=2e-5,d=1e5,g=Se?parseFloat(Q(t,ke,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!ze(t)),f.svg&&(Me(t,Q(t,ke,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),xe=a.useSVGTransformAttr||De),o=Fe(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],F=o[10],N=o[12],E=o[13],L=o[14],X=o[11],B=Math.atan2(C,F);f.zOrigin&&(L=-f.zOrigin,N=M*L-o[12],E=z*L-o[13],L=F*L+f.zOrigin-o[14]),f.rotationX=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+F*b,M=O*-b+M*w,z=A*-b+z*w,F=C*-b+F*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,F),f.rotationY=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-F*b,z=k*b+z*w,F=S*b+F*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+F*F)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=N,f.y=E,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Se&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,j=Y?o[0]:1,U=o[1]||0,q=o[2]||0,V=Y?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,l=Math.sqrt(j*j+U*U),_=Math.sqrt(V*V+q*q),u=j||U?Math.atan2(U,j)*I:f.rotation||0,c=q||V?Math.atan2(q,V)*I+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(l*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=l,f.scaleY=_,f.rotation=u,f.skewX=c,Se&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*j+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(h in f)m>f[h]&&f[h]>-m&&(f[h]=0)}return s&&(t._gsTransform=f,f.svg&&(xe&&t.style[be]?e.delayedCall(.001,function(){Be(t.style,be)}):!xe&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Ee=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=h,h=-l,l=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*h),b+=p-(f*l+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*h)+w)+", Dy="+(p-(f*l+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ge=0;4>ge;ge++)k=ee[ge],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ge?-s.ieOffsetX:-s.ieOffsetY:2>ge?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ge||2===ge?1:R)))+"px"}}},Le=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,I=k.x,F=k.y,N=k.z,E=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||N||L||A||O)&&(!xe||!E)&&Se))return R||k.skewX||E?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,xe&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),I+=.01*k.xPercent*m.width,F+=.01*k.yPercent*m.height),m=1e-6,m>I&&I>-m&&(I=0),m>F&&F>-m&&(F=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+I+","+F+")",E&&xe?this.t.setAttribute("transform","matrix("+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+I+","+F+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||E))return S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+F+"px,"+N+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,l=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,h=l*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,l*=M,c*=M),1!==D&&(i*=D,n*=D,h*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||E)&&(p&&(I+=s*-p,F+=a*-p,N+=l*-p+p),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>I&&I>-m&&(I=w),m>F&&F>-m&&(F=w),m>N&&N>-m&&(N=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>h&&h>-m?w:h)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>l&&l>-m?w:l)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=I+x+F+x+N+x+(L?1+-N/L:1)+")",S[be]=T};l=Re.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=l.xOffset=l.yOffset=0,l.scaleX=l.scaleY=l.scaleZ=1,ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,c,f,p,m,d,g,v=t._gsTransform,y=s._transform=Ne(t,r,!0,h.parseTransform),T=t.style,x=1e-6,w=we.length,b=h,P={},k="transformOrigin";if("string"==typeof b.transform&&be)u=L.style,u[be]=b.transform,u.display="block",u.position="absolute",N.body.appendChild(L),l=Ne(L,null,!1),N.body.removeChild(L),null!=b.xPercent&&(l.xPercent=ne(b.xPercent,y.xPercent)),null!=b.yPercent&&(l.yPercent=ne(b.yPercent,y.yPercent));else if("object"==typeof b){if(l={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,y.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,y.scaleY),scaleZ:ne(b.scaleZ,y.scaleZ),x:ne(b.x,y.x),y:ne(b.y,y.y),z:ne(b.z,y.z),xPercent:ne(b.xPercent,y.xPercent),yPercent:ne(b.yPercent,y.yPercent),perspective:ne(b.transformPerspective,y.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(u in m)b[u]=m[u];else b.rotation=m;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(l.x=0,l.xPercent=ne(b.x,y.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(l.y=0,l.yPercent=ne(b.y,y.yPercent)),l.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:y.rotation,y.rotation,"rotation",P),Se&&(l.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":y.rotationX||0,y.rotationX,"rotationX",P),l.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":y.rotationY||0,y.rotationY,"rotationY",P)),l.skewX=null==b.skewX?y.skewX:ae(b.skewX,y.skewX),l.skewY=null==b.skewY?y.skewY:ae(b.skewY,y.skewY),(_=l.skewY-y.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=b.force3D&&(y.force3D=b.force3D,p=!0),y.skewType=b.skewType||y.skewType||a.defaultSkewType,f=y.force3D||y.z||y.rotationX||y.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,f||null==b.scale||(l.scaleZ=1);--w>-1;)i=we[w],c=l[i]-y[i],(c>x||-x>c||null!=b[i]||null!=F[i])&&(p=!0,n=new pe(y,i,y[i],c,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return c=b.transformOrigin,y.svg&&(c||b.svgOrigin)&&(d=y.xOffset,g=y.yOffset,Me(t,se(c),l,b.svgOrigin,b.smoothOrigin),n=me(y,"xOrigin",(v?y:l).xOrigin,l.xOrigin,n,k),n=me(y,"yOrigin",(v?y:l).yOrigin,l.yOrigin,n,k),(d!==y.xOffset||g!==y.yOffset)&&(n=me(y,"xOffset",v?d:y.xOffset,y.xOffset,n,k),n=me(y,"yOffset",v?g:y.yOffset,y.yOffset,n,k)),c=xe?null:"0px 0px"),(c||Se&&f&&y.zOrigin)&&(be?(p=!0,i=ke,c=(c||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Se?(u=y.zOrigin,c=c.split(" "),y.zOrigin=(c.length>2&&(0===u||"0px"!==c[2])?parseFloat(c[2]):u)||0,n.xs0=n.e=c[0]+" "+(c[1]||"50%")+" 0px",n=new pe(y,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=y.zOrigin):n.xs0=n.e=c):se(c+"",y)),p&&(s._transformType=y.svg&&xe||!f&&3!==this._transformType?2:3),n},prefix:!0}),ye("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ye("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,l=parseFloat(_)+p+g)),a=de(P,b[h],u+" "+_,c+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ye("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",c),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ye("backgroundSize",{defaultValue:"0 0",formatter:se}),ye("perspective",{defaultValue:"0px",prefix:!0}),ye("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ye("transformStyle",{prefix:!0}),ye("backfaceVisibility",{prefix:!0}),ye("userSelect",{prefix:!0}),ye("margin",{parser:ce("marginTop,marginRight,marginBottom,marginLeft")}),ye("padding",{parser:ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ye("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ye("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ye("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ye("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ye("borderWidth",{parser:ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ye("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Xe=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};ye("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),j?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Xe),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n
}});var Be=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Be(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ye("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),l=J(t,_,K(t),h,c),t.setAttribute("class",p),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)}});var je=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=h.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===o?r=!0:i="transformOrigin"===i?ke:h[i].p),Be(a,i);r&&(Be(a,be),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(ye("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=je,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ge=l.length;ge--;)Te(l[ge]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var l,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,l=K(t,r),b.cssText=d+";"+e,l=J(t,l,K(t)).difs,!j&&w.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,b.cssText=d),this._firstPT=f=e.className?h.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,be?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new pe(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=be?Le:Ee,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,o,l,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=h[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=le(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=de(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(l=parseFloat(c),p=l||0===l?c.substr((l+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(l=ie(t,a,r),p="px"):"left"===a||"top"===a?(l=H(t,a,r),p="px"):(l="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+l:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,p),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||l||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=de(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},l._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&xe||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var qe=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)qe(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||qe(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,h=e.to(t,i,s),l=[h],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=h._targets||h.target,qe(t,_,c),h.render(i,!0,!0),qe(t,u),h.render(0,!0,!0),h._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];l.push(e.fromTo(c[r],i,o,n))}return l},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){var t=/(?:\d|\-|\+|=|#|\.)*/g,e=/[A-Za-z%]/g;_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.4.0",init:function(i,s){var r,n,a,o,h;if("function"!=typeof i.setAttribute)return!1;this._target=i,this._proxy={},this._start={},this._end={},this._suffix={};for(r in s)this._start[r]=this._proxy[r]=n=i.getAttribute(r)+"",this._end[r]=a=s[r]+"",this._suffix[r]=o=e.test(a)?a.replace(t,""):e.test(n)?n.replace(t,""):"",o&&(h=a.indexOf(o),-1!==h&&(a=a.substr(0,h))),this._addTween(this._proxy,r,parseFloat(n),a,r)||(this._suffix[r]=""),"="===a.charAt(1)&&(this._end[r]=this._firstPT.s+this._firstPT.c+o),this._overwriteProps.push(r);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start,n=r===this._proxy;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+(n?this._suffix[e]:""))}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,c,f,d=r.length,g=d;--d>-1;)(_=p[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=h(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=l.easing.Linear.easeIn,x.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},l.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),f=t,l.fps(i),void 0):f},l.fps(t),setTimeout(function(){f&&5>l.frame&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){o||a.wake();var i=this.vars.useFrames?j:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new l.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&V())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=G(n,this,!1),1===h&&this._siblings[r].length>1&&Z(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=G(e,this,!1),1===h&&this._siblings.length>1&&Z(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)B[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.17.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},N=D._internals={isArray:f,isSelector:M,lazyTweens:I},E=D._plugins={},L=N.tweenLookup={},X=0,B=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=O._rootFramesTimeline=new C,U=O._rootTimeline=new C,q=30,V=N.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};U._startTime=a.time,j._startTime=a.frame,U._active=j._active=!0,setTimeout(V,1),O._updateRoot=D.render=function(){var t,e,i;if(I.length&&V(),U.render((a.time-U._startTime)*U._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&V(),a.frame>=q){q=a.frame+(parseInt(D.autoSleep,10)||120);for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=U._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var G=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},W=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Z=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,p),0===Q(o,l,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!W(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)B[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):x[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],B[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Z(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)
},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!W(this,i,e,u))return!1}for(n in l)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,h=!0),a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=G(s[i],this,!0);else this._siblings=G(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=G(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var $=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=$.prototype},!0);if(n=$.prototype,$.version="1.10.1",$.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-Number(i):parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},$.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===$.API&&(E[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){$.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new $(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,$.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * VERSION: 0.2.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	_gsScope._gsDefine("easing.CustomEase", ["easing.Ease"], function(Ease) {

		var _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
			_needsParsingExp = /[cLlsS]/g,
			_bezierError = "CustomEase only accepts Cubic Bezier data.",
			_bezierToPoints = function (x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
				var x12 = (x1 + x2) / 2,
					y12 = (y1 + y2) / 2,
					x23 = (x2 + x3) / 2,
					y23 = (y2 + y3) / 2,
					x34 = (x3 + x4) / 2,
					y34 = (y3 + y4) / 2,
					x123 = (x12 + x23) / 2,
					y123 = (y12 + y23) / 2,
					x234 = (x23 + x34) / 2,
					y234 = (y23 + y34) / 2,
					x1234 = (x123 + x234) / 2,
					y1234 = (y123 + y234) / 2,
					dx = x4 - x1,
					dy = y4 - y1,
					d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx),
					d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx),
					length;
				if (!points) {
					points = [{x: x1, y: y1}, {x: x4, y: y4}];
					index = 1;
				}
				points.splice(index || points.length - 1, 0, {x: x1234, y: y1234});
				if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
					length = points.length;
					_bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
					_bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
				}
				return points;
			},

			_pathDataToBezier = function (d) {
				var a = (d + "").replace(_scientific, function (m) {
							var n = +m;
							return (n < 0.0001 && n > -0.0001) ? 0 : n;
						}).match(_svgPathExp) || [], //some authoring programs spit out very small numbers in scientific notation like "1e-5", so make sure we round that down to 0 first.
					path = [],
					relativeX = 0,
					relativeY = 0,
					elements = a.length,
					l = 2,
					i, x, y, command, isRelative, segment, startX, startY, prevCommand, difX, difY;
				for (i = 0; i < elements; i++) {
					prevCommand = command;
					if (isNaN(a[i])) {
						command = a[i].toUpperCase();
						isRelative = (command !== a[i]); //lower case means relative
					} else { //commands like "C" can be strung together without any new command characters between.
						i--;
					}
					x = +a[i + 1];
					y = +a[i + 2];
					if (isRelative) {
						x += relativeX;
						y += relativeY;
					}
					if (!i) {
						startX = x;
						startY = y;
					}
					if (command === "M") {
						if (segment && segment.length < 8) { //if the path data was funky and just had a M with no actual drawing anywhere, skip it.
							path.length -= 1;
							l = 0;
						}
						relativeX = startX = x;
						relativeY = startY = y;
						segment = [x, y];
						l = 2;
						path.push(segment);
						i += 2;
						command = "L"; //an "M" with more than 2 values gets interpreted as "lineTo" commands ("L").

					} else if (command === "C") {
						if (!segment) {
							segment = [0, 0];
						}
						segment[l++] = x;
						segment[l++] = y;
						if (!isRelative) {
							relativeX = relativeY = 0;
						}
						segment[l++] = relativeX + a[i + 3] * 1; //note: "*1" is just a fast/short way to cast the value as a Number. WAAAY faster in Chrome, slightly slower in Firefox.
						segment[l++] = relativeY + a[i + 4] * 1;
						segment[l++] = relativeX = relativeX + a[i + 5] * 1;
						segment[l++] = relativeY = relativeY + a[i + 6] * 1;
						i += 6;

					} else if (command === "S") {
						if (prevCommand === "C" || prevCommand === "S") {
							difX = relativeX - segment[l - 4];
							difY = relativeY - segment[l - 3];
							segment[l++] = relativeX + difX;
							segment[l++] = relativeY + difY;
						} else {
							segment[l++] = relativeX;
							segment[l++] = relativeY;
						}
						segment[l++] = x;
						segment[l++] = y;
						if (!isRelative) {
							relativeX = relativeY = 0;
						}
						segment[l++] = relativeX = relativeX + a[i + 3] * 1;
						segment[l++] = relativeY = relativeY + a[i + 4] * 1;
						i += 4;

					} else if (command === "L" || command === "Z") {
						if (command === "Z") {
							x = startX;
							y = startY;
							segment.closed = true;
						}
						if (command === "L" || Math.abs(relativeX - x) > 0.5 || Math.abs(relativeY - y) > 0.5) {
							segment[l++] = relativeX + (x - relativeX) / 3;
							segment[l++] = relativeY + (y - relativeY) / 3;
							segment[l++] = relativeX + (x - relativeX) * 2 / 3;
							segment[l++] = relativeY + (y - relativeY) * 2 / 3;
							segment[l++] = x;
							segment[l++] = y;
							if (command === "L") {
								i += 2;
							}
						}
						relativeX = x;
						relativeY = y;
					} else {
						throw _bezierError;
					}

				}
				return path[0];
			},

			_findMinimum = function (values) {
				var l = values.length,
					min = 999999999999,
					i;
				for (i = 1; i < l; i += 6) {
					if (+values[i] < min) {
						min = +values[i];
					}
				}
				return min;
			},

			_normalize = function (values, height, originY) { //takes all the points and translates/scales them so that the x starts at 0 and ends at 1.
				if (!originY && originY !== 0) {
					originY = Math.max(+values[values.length-1], +values[1]);
				}
				var tx = +values[0] * -1,
					ty = -originY,
					l = values.length,
					sx = 1 / (+values[l - 2] + tx),
					sy = -height || ((Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0])) ? _findMinimum(values) + ty : +values[l - 1] + ty),
					i;
				if (sy) { //typically y ends at 1 (so that the end values are reached)
					sy = 1 / sy;
				} else { //in case the ease returns to its beginning value, scale everything proportionally
					sy = -sx;
				}
				for (i = 0; i < l; i += 2) {
					values[i] = (+values[i] + tx) * sx;
					values[i + 1] = (+values[i + 1] + ty) * sy;
				}
			},

			_getRatio = function (p) {
				var point = this.lookup[(p * this.l) | 0] || this.lookup[this.l - 1];
				if (point.nx < p) {
					point = point.n;
				}
				return point.y + ((p - point.x) / point.cx) * point.cy;
			},


			CustomEase = function (id, data, config) {
				this._calcEnd = true;
				this.id = id;
				if (id) {
					Ease.map[id] = this;
				}
				this.getRatio = _getRatio; //speed optimization, faster lookups.
				this.setData(data, config);
			},
			p = CustomEase.prototype = new Ease();

		p.constructor = CustomEase;

		p.setData = function(data, config) {
			data = data || "0,0,1,1";
			var values = data.match(_numbersExp),
				closest = 1,
				points = [],
				l, a1, a2, i, inc, j, point, prevPoint, p, precision;
			config = config || {};
			precision = config.precision || 1;
			this.data = data;
			this.lookup = [];
			this.points = points;
			this.fast = (precision <= 1);
			if (_needsParsingExp.test(data) || (data.indexOf("M") !== -1 && data.indexOf("C") === -1)) {
				values = _pathDataToBezier(data);
			}
			l = values.length;
			if (l === 4) {
				values.unshift(0, 0);
				values.push(1, 1);
				l = 8;
			} else if ((l - 2) % 6) {
				throw _bezierError;
			}
			if (+values[0] !== 0 || +values[l - 2] !== 1) {
				_normalize(values, config.height, config.originY);
			}

			this.rawBezier = values;

			for (i = 2; i < l; i += 6) {
				a1 = {x: +values[i - 2], y: +values[i - 1]};
				a2 = {x: +values[i + 4], y: +values[i + 5]};
				points.push(a1, a2);
				_bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 200000), points, points.length - 1);
			}
			l = points.length;
			for (i = 0; i < l; i++) {
				point = points[i];
				prevPoint = points[i - 1] || point;
				if (point.x > prevPoint.x || (prevPoint.y !== point.y && prevPoint.x === point.x) || point === prevPoint) { //if a point goes BACKWARD in time or is a duplicate, just drop it.
					prevPoint.cx = point.x - prevPoint.x; //change in x between this point and the next point (performance optimization)
					prevPoint.cy = point.y - prevPoint.y;
					prevPoint.n = point;
					prevPoint.nx = point.x; //next point's x value (performance optimization, making lookups faster in getRatio()). Remember, the lookup will always land on a spot where it's either this point or the very next one (never beyond that)
					if (this.fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) { //if there's a sudden change in direction, prioritize accuracy over speed. Like a bounce ease - you don't want to risk the sampling chunks landing on each side of the bounce anchor and having it clipped off.
						this.fast = false;
					}
					if (prevPoint.cx < closest) {
						if (!prevPoint.cx) {
							prevPoint.cx = 0.001; //avoids math problems in getRatio() (dividing by zero)
							if (i === l - 1) { //in case the final segment goes vertical RIGHT at the end, make sure we end at the end.
								prevPoint.x -= 0.001;
								closest = Math.min(closest, 0.001);
								this.fast = false;
							}
						} else {
							closest = prevPoint.cx;
						}
					}
				} else {
					points.splice(i--, 1);
					l--;
				}
			}
			l = (1 / closest + 1) | 0;
			this.l = l; //record for speed optimization
			inc = 1 / l;
			j = 0;
			point = points[0];
			if (this.fast) {
				for (i = 0; i < l; i++) { //for fastest lookups, we just sample along the path at equal x (time) distance. Uses more memory and is slightly less accurate for anchors that don't land on the sampling points, but for the vast majority of eases it's excellent (and fast).
					p = i * inc;
					if (point.nx < p) {
						point = points[++j];
					}
					a1 = point.y + ((p - point.x) / point.cx) * point.cy;
					this.lookup[i] = {x: p, cx: inc, y: a1, cy: 0, nx: 9};
					if (i) {
						this.lookup[i - 1].cy = a1 - this.lookup[i - 1].y;
					}
				}
				this.lookup[l - 1].cy = points[points.length - 1].y - a1;
			} else { //this option is more accurate, ensuring that EVERY anchor is hit perfectly. Clipping across a bounce, for example, would never happen.
				for (i = 0; i < l; i++) { //build a lookup table based on the smallest distance so that we can instantly find the appropriate point (well, it'll either be that point or the very next one). We'll look up based on the linear progress. So it's it's 0.5 and the lookup table has 100 elements, it'd be like lookup[Math.floor(0.5 * 100)]
					if (point.nx < i * inc) {
						point = points[++j];
					}
					this.lookup[i] = point;
				}

				if (j < points.length - 1) {
					this.lookup[i-1] = points[points.length-2];
				}
			}
			this._calcEnd = (points[points.length-1].y !== 1 || points[0].y !== 0); //ensures that we don't run into floating point errors. As long as we're starting at 0 and ending at 1, tell GSAP to skip the final calculation and use 0/1 as the factor.
			return this;
		};

		p.getRatio = _getRatio;

		p.getSVGData = function(config) {
			return CustomEase.getSVGData(this, config);
		};

		CustomEase.create = function (id, data, config) {
			return new CustomEase(id, data, config);
		};

		CustomEase.version = "0.2.1";

		CustomEase.bezierToPoints = _bezierToPoints;
		CustomEase.get = function (id) {
			return Ease.map[id];
		};
		CustomEase.getSVGData = function(ease, config) {
			config = config || {};
			var rnd = 1000,
				width = config.width || 100,
				height = config.height || 100,
				x = config.x || 0,
				y = (config.y || 0) + height,
				e = config.path,
				a, slope, i, inc, tx, ty, precision, threshold, prevX, prevY;
			if (config.invert) {
				height = -height;
				y = 0;
			}
			ease = ease.getRatio ? ease : Ease.map[ease] || console.log("No ease found: ", ease);
			if (!ease.rawBezier) {
				a = ["M" + x + "," + y];
				precision = Math.max(5, (config.precision || 1) * 200);
				inc = 1 / precision;
				precision += 2;
				threshold = 5 / precision;
				prevX = (((x + inc * width) * rnd) | 0) / rnd;
				prevY = (((y + ease.getRatio(inc) * -height) * rnd) | 0) / rnd;
				slope = (prevY - y) / (prevX - x);
				for (i = 2; i < precision; i++) {
					tx = (((x + i * inc * width) * rnd) | 0) / rnd;
					ty = (((y + ease.getRatio(i * inc) * -height) * rnd) | 0) / rnd;
					if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) { //only add points when the slope changes beyond the threshold
						a.push(prevX + "," + prevY);
						slope = (ty - prevY) / (tx - prevX);
					}
					prevX = tx;
					prevY = ty;
				}
			} else {
				a = [];
				precision = ease.rawBezier.length;
				for (i = 0; i < precision; i += 2) {
					a.push((((x + ease.rawBezier[i] * width) * rnd) | 0) / rnd + "," + (((y + ease.rawBezier[i + 1] * -height) * rnd) | 0) / rnd);
				}
				a[0] = "M" + a[0];
				a[1] = "C" + a[1];
			}
			if (e) {
				(typeof(e) === "string" ? document.querySelector(e) : e).setAttribute("d", a.join(" "));
			}
			return a.join(" ");
		};

		return CustomEase;

	}, true);

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(define) === "function" && define.amd) { //AMD
		define(["./TweenLite"], getGlobal);
	} else if (typeof(module) !== "undefined" && module.exports) { //node
		require("./TweenLite.js");
		module.exports = getGlobal();
	}
}("CustomEase"));
/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */

(function(global){
  var module = global.noise = {};

  function Grad(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }
  
  Grad.prototype.dot2 = function(x, y) {
    return this.x*x + this.y*y;
  };

  Grad.prototype.dot3 = function(x, y, z) {
    return this.x*x + this.y*y + this.z*z;
  };

  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

  var p = [151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  // To remove the need for index wrapping, double the permutation table length
  var perm = new Array(512);
  var gradP = new Array(512);

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  module.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  };

  module.seed(0);

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 2D simplex noise
  module.simplex2 = function(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin)*F2; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var t = (i+j)*G2;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      i1=1; j1=0;
    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      i1=0; j1=1;
    }
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;
    var gi0 = gradP[i+perm[j]];
    var gi1 = gradP[i+i1+perm[j+j1]];
    var gi2 = gradP[i+1+perm[j+1]];
    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot2(x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
  };

  // 3D simplex noise
  module.simplex3 = function(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var k = Math.floor(zin+s);

    var t = (i+j+k)*G3;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    var z0 = zin-k+t;

    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if(x0 >= y0) {
      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;

    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;

    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;
    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

    // Calculate the contribution from the four corners
    var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if(t3<0) {
      n3 = 0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);

  };

  // ##### Perlin noise stuff

  function fade(t) {
    return t*t*t*(t*(t*6-15)+10);
  }

  function lerp(a, b, t) {
    return (1-t)*a + t*b;
  }

  // 2D Perlin Noise
  module.perlin2 = function(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X; y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255;

    // Calculate noise contributions from each of the four corners
    var n00 = gradP[X+perm[Y]].dot2(x, y);
    var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
    var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
    var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

    // Compute the fade curve value for x
    var u = fade(x);

    // Interpolate the four results
    return lerp(
        lerp(n00, n10, u),
        lerp(n01, n11, u),
       fade(y));
  };

  // 3D Perlin Noise
  module.perlin3 = function(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    // Get relative xyz coordinates of point within that cell
    x = x - X; y = y - Y; z = z - Z;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255; Z = Z & 255;

    // Calculate noise contributions from each of the eight corners
    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

    // Compute the fade curve value for x, y, z
    var u = fade(x);
    var v = fade(y);
    var w = fade(z);

    // Interpolate
    return lerp(
        lerp(
          lerp(n000, n100, u),
          lerp(n001, n101, u), w),
        lerp(
          lerp(n010, n110, u),
          lerp(n011, n111, u), w),
       v);
  };

})(this);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/js/src/Main.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/ejs/inc/metaData.json":
/*!***********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/ejs/inc/metaData.json ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"common_js":{"tit":"MATCH GIRLS｜LUMINE","des":"ルミネがクリスマスに贈る、あたらしい「マッチ売りの少女」。天才漫画家・此元和津也による初の実写脚本を若手女優がW主演。","img":"http://www.lumine.ne.jp/matchgirls/assets/resource/og.png","url":"http://www.lumine.ne.jp/matchgirls/","adress":""},"common":{"tit":"MATCH GIRLS｜LUMINE","des":"ルミネがクリスマスに贈る、あたらしい「マッチ売りの少女」。天才漫画家・此元和津也による初の実写脚本を若手女優がW主演。","img":"http://www.lumine.ne.jp/matchgirls/assets/resource/og.png","keyword":"","fb":{"tit":"MATCH GIRLS｜LUMINE","des":"ルミネがクリスマスに贈る、あたらしい「マッチ売りの少女」。天才漫画家・此元和津也による初の実写脚本を若手女優がW主演。","img":"http://www.lumine.ne.jp/matchgirls/assets/resource/og.png","url":"http://www.lumine.ne.jp/matchgirls/","siteName":"","type":"website"},"tw":{"img":"http://www.lumine.ne.jp/matchgirls/assets/resource/og.png","url":"http://www.lumine.ne.jp/matchgirls/","siteName":"","creator":"","card":"summary_large_image","hash":"","text":"ハッピーエンドにしませんか。「MATCH GIRLS」１２・１０本編公開"},"line":{"tit":"ハッピーエンドにしませんか。「MATCH GIRLS」１２・１０本編公開","des":"ルミネがクリスマスに贈る、あたらしい「マッチ売りの少女」。天才漫画家・此元和津也による初の実写脚本を若手女優がW主演。","img":"http://www.lumine.ne.jp/matchgirls/assets/resource/og.png","url":"http://www.lumine.ne.jp/matchgirls/","text":"ハッピーエンドにしませんか。「MATCH GIRLS」１２・１０本編公開"},"mail":{"tit":"ハッピーエンドにしませんか。「MATCH GIRLS」１２・１０本編公開","des":"ルミネがクリスマスに贈る、あたらしい「マッチ売りの少女」。天才漫画家・此元和津也による初の実写脚本を若手女優がW主演。","adress":""}}}

/***/ }),

/***/ "../../src/js/src/Conf.es6":
/*!*****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Conf.es6 ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Config
//
// ------------------------------------------------------------

var Conf = function Conf() {
  _classCallCheck(this, Conf);

  // ------------------------------------------------------------
  //  本番フラグ
  // ------------------------------------------------------------    
  this.RELEASE = true;
  // this.RELEASE = false;

  // ------------------------------------------------------------
  //  フラグ関連 
  // ------------------------------------------------------------
  // ログ出力, パラメータ, Stars
  this.LOG = true;
  this.PARAM = true;
  this.Profiler = true;
  this.LOADING = true;
  this.OPENING = false;
  this.EFFECT = false;
  this.INERTIA = false;

  // Event
  this.isUpdateMgr = true;
  this.isResizeMgr = true;
  this.isScrollMgr = true;
  this.isMouseMgr = true;

  if (this.RELEASE) {
    this.LOG = false;
    this.PARAM = false;
    this.Profiler = false;
    this.LOADING = true;
    this.OPENING = false;
    this.EFFECT = false;
    this.INERTIA = false;
  }

  // ------------------------------------------------------------
  //  basic width height
  // ------------------------------------------------------------
  // viewport size
  this.vDefW = window.innerWidth;
  this.vDefH = window.innerHeight;
  this.vW = window.innerWidth;
  this.vH = window.innerHeight;
  this.vSPW = window.innerWidth;
  this.vSPH = window.innerHeight;

  // target size
  this.DefW = 1300;
  this.DefH = 850;
  this.W = 1200;
  this.H = 750;
  this.SPW = 375;
  this.SPH = 667;

  // ------------------------------------------------------------
  //  ブレイクポイント
  // ------------------------------------------------------------
  this.bp00 = 375;
  this.bp01 = 768;
  this.bp02 = 1080;
  this.bp03 = 1280;

  // ------------------------------------------------------------
  //  レティナ対応
  // ------------------------------------------------------------
  this.isRetina = window.devicePixelRatio && window.devicePixelRatio > 1 ? true : false;

  // ------------------------------------------------------------
  //
  //  resource
  //
  // ------------------------------------------------------------

  // ------------------------------------------------------------
  //  API
  // ------------------------------------------------------------
  // this.APIData = APIData();
  this.APIURL = './setting.xml';

  // ------------------------------------------------------------
  //  URL
  // ------------------------------------------------------------
  // this.URLData = URLData();

  // ------------------------------------------------------------
  //  sound data
  // ------------------------------------------------------------
  // this.soundData = SoundData();

  // ------------------------------------------------------------
  //  video
  // ------------------------------------------------------------
  // this.videoData = videoData();

  // ------------------------------------------------------------
  //  img
  // ------------------------------------------------------------
  // this.imgData = imgData();

  // ------------------------------------------------------------
  //  web font loaded
  // ------------------------------------------------------------
  // this.webFontLoaded = false;

  // ------------------------------------------------------------
  //
  //  Ohter
  //
  // ------------------------------------------------------------
  this.isFirst = true;

  this.isSound = true;
};

exports.default = Conf;

/***/ }),

/***/ "../../src/js/src/Main.es6":
/*!*****************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Main.es6 ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // setting


// Util


// model


// events


// view


var _Conf = __webpack_require__(/*! Conf.es6 */ "../../src/js/src/Conf.es6");

var _Conf2 = _interopRequireDefault(_Conf);

var _Util = __webpack_require__(/*! _MyLibs/Util/Util.es6 */ "../../src/js/src/_MyLibs/Util/Util.es6");

var _Util2 = _interopRequireDefault(_Util);

var _Func = __webpack_require__(/*! _MyLibs/Util/Func.es6 */ "../../src/js/src/_MyLibs/Util/Func.es6");

var _Func2 = _interopRequireDefault(_Func);

var _Debugger = __webpack_require__(/*! _MyLibs/Util/Debugger.es6 */ "../../src/js/src/_MyLibs/Util/Debugger.es6");

var _Debugger2 = _interopRequireDefault(_Debugger);

var _Controller = __webpack_require__(/*! Util/Controller.es6 */ "../../src/js/src/Util/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

var _Controller3 = __webpack_require__(/*! View/UI/_Loading/Basic/Controller.es6 */ "../../src/js/src/View/UI/_Loading/Basic/Controller.es6");

var _Controller4 = _interopRequireDefault(_Controller3);

var _ResourceMgr = __webpack_require__(/*! Model/Resource/ResourceMgr.es6 */ "../../src/js/src/Model/Resource/ResourceMgr.es6");

var _ResourceMgr2 = _interopRequireDefault(_ResourceMgr);

var _UpdateMgr = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/UpdateMgr.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/UpdateMgr.es6");

var _UpdateMgr2 = _interopRequireDefault(_UpdateMgr);

var _ResizeMgr = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/ResizeMgr.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/ResizeMgr.es6");

var _ResizeMgr2 = _interopRequireDefault(_ResizeMgr);

var _ScrollMgr = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/ScrollMgr.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/ScrollMgr.es6");

var _ScrollMgr2 = _interopRequireDefault(_ScrollMgr);

var _MouseMgr = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/MouseMgr.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/MouseMgr.es6");

var _MouseMgr2 = _interopRequireDefault(_MouseMgr);

var _UpdateList = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/UpdateList.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/UpdateList.es6");

var _UpdateList2 = _interopRequireDefault(_UpdateList);

var _ResizeList = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/ResizeList.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/ResizeList.es6");

var _ResizeList2 = _interopRequireDefault(_ResizeList);

var _ScrollList = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/ScrollList.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/ScrollList.es6");

var _ScrollList2 = _interopRequireDefault(_ScrollList);

var _MouseList = __webpack_require__(/*! _MyLibs/View/Events/EventMgr/MouseList.es6 */ "../../src/js/src/_MyLibs/View/Events/EventMgr/MouseList.es6");

var _MouseList2 = _interopRequireDefault(_MouseList);

var _View = __webpack_require__(/*! View/View.es6 */ "../../src/js/src/View/View.es6");

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
  function Common() {
    _classCallCheck(this, Common);

    this.onImmediate();
    this.setEvents();
  }

  _createClass(Common, [{
    key: 'onImmediate',
    value: function onImmediate() {

      // ------------------------------------------------------------
      //  初期値の設定・データの配置
      //  util関数の初期化
      //  イベントマネージャーの設置
      // ------------------------------------------------------------
      // setting
      gb.conf = new _Conf2.default();

      // util
      gb.d = new _Debugger2.default();
      gb.u = new _Util2.default();
      gb.f = new _Func2.default();

      if (gb.conf.isUpdateMgr) gb.up = new _UpdateMgr2.default();
      if (gb.conf.isResizeMgr) gb.r = new _ResizeMgr2.default();

      this.onReady();
    }
  }, {
    key: 'onReady',
    value: function onReady() {

      // ------------------------------------------------------------
      //  Util
      // ------------------------------------------------------------
      gb.util = new _Controller2.default();

      // ------------------------------------------------------------
      //  Event
      // ------------------------------------------------------------   
      if (gb.conf.isScrollMgr) gb.s = new _ScrollMgr2.default();
      if (gb.conf.isMouseMgr) gb.m = new _MouseMgr2.default();
      // gb.ul = new UpdateList();
      // gb.rl = new ResizeList();
      gb.sl = new _ScrollList2.default();
      // gb.ml = new MouseList();

      // ------------------------------------------------------------
      //  Loading / Model / performance
      // ------------------------------------------------------------
      gb.lm = new _Controller4.default();
      gb.rm = new _ResourceMgr2.default();

      // ------------------------------------------------------------
      //  View
      // ------------------------------------------------------------
      // Layout, UI, Effects
      gb.v = new _View2.default();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {

      // ------------------------------------------------------------
      //  Util
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  Model
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  View
      // ------------------------------------------------------------

    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('load', this.onLoad.bind(this));
    }
  }]);

  return Common;
}();

// ------------------------------------------------------------
//
//  Main
//
// ------------------------------------------------------------


exports.default = Common;
(function () {

  // // globalオブジェクト
  if (window.gb === undefined) window.gb = {};

  gb.common = new Common();

  if (gb.up) gb.up.loop(); //全体のループスタート
})();

/***/ }),

/***/ "../../src/js/src/Model/Resource/GetData.es6":
/*!***********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Model/Resource/GetData.es6 ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  GetData
//
//--------------------------------------------------             

var GetData = function () {
  function GetData(APIURL) {
    _classCallCheck(this, GetData);

    this.APIURL = APIURL;

    this.onSuccess = function () {};
    this.onError = function () {};
    this.status = '';

    this.setup();
    this.setEvents();
  }

  _createClass(GetData, [{
    key: 'setup',
    value: function setup() {

      // param
      this.param = {
        url: this.APIURL,
        type: 'get',
        dataType: 'json',
        data: {
          // 'page_no': this.page_no,
          // 'count': this.count,
          // 'category_slug': this.category_slug,
          // 'tag_slug': this.tag_slug,
          // 'area_slug': this.area_slug,
          // 'author_name': this.author_name,
          // 'search_word': this.search_word,
        },
        timeout: 5000,
        cache: false
      };
    }
  }, {
    key: 'run',
    value: function run() {
      var _this = this;

      $.ajax(this.param).then(function (data) {
        _this.onSuccess(data);
      }, // success
      function (data) {
        _this.onError(data);
      } // error
      );

      return $.ajax(this.param);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return GetData;
}();

exports.default = GetData;

/***/ }),

/***/ "../../src/js/src/Model/Resource/OtherLoader.es6":
/*!***************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Model/Resource/OtherLoader.es6 ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Loader
//
//--------------------------------------------------

// TextLoader
// SVGLoader
// CSSLoader
// JavaScriptLoader
// BinaryLoader
// ImageLoader
// SpriteSheetLoader
// VideoLoader
// SoundLoader
// JSONLoader
// JSONPLoader
// XMLLoader

var Loader = function () {
  function Loader() {
    _classCallCheck(this, Loader);

    this.cb = function () {};
  }

  _createClass(Loader, [{
    key: 'youtubeIframeScript',
    value: function youtubeIframeScript(cb) {

      // IFrame Player API の読み込み
      var tag = document.createElement('script');
      tag.onload = function () {

        // this.cb();

      };

      // tag.src = "https://www.youtube.com/iframe_api";
      tag.src = "//www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // YouTube動画
      window.onYouTubeIframeReady = function () {

        log('youtubeready');
      };
    }
  }, {
    key: 'webFont',
    value: function webFont(config) {

      // web font loader用jsのappend
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);

      var again = function again() {

        // yt.playerがloadされていない場合を考慮して
        if (typeof WebFont !== "undefined" && WebFont) {

          WebFont.load(config);
        } else {

          setTimeout(again, 100);
        }
      };

      again();
    }
  }, {
    key: 'webFont_setting',
    value: function webFont_setting() {

      // web font loader用param
      // var config = {
      //   custom: {
      //     families: [
      //       'Cormorant',
      //       'Roboto Condensed'
      //       // 'Noto Sans Japanese',
      //       // 'Roboto',
      //       // 'Alegreya Sans',
      //       // 'Alegreya Sans SC'
      //       ],
      //     urls: [
      //       'https://fonts.googleapis.com/css?family=Cormorant:500,500i|Roboto+Condensed'
      //       // './ff15/royal/gallery2018/assets/css/font.css',
      //       // 'https://fonts.googleapis.com/css?family=Roboto:400,500,300',
      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans:400,100',
      //       // 'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,300,100'
      //       ]
      //   },
      //   active: function() { 

      //       log('webFont!!!!');
      //       gb.in.conf.webFontLoaded = true;

      //   } 
      // };

      var conf = {
        custom: {
          families: ['Source Code Pro', 'FontAwesome'],
          urls: ['https://fonts.googleapis.com/css?family=Source+Code+Pro:600', 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'],
          testStrings: {
            'FontAwesome': '\uF001'
          }
        },
        // Web Fontが使用可能になったとき
        active: function active() {
          new DemoIconsWorld();
        }
      };

      var loader = new Loader();
      loader.webFont(config);
    }
  }]);

  return Loader;
}();

exports.default = Loader;

/***/ }),

/***/ "../../src/js/src/Model/Resource/ResourceMgr.es6":
/*!***************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Model/Resource/ResourceMgr.es6 ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
//
//  LoadMgr
//
//--------------------------------------------------

var _es6Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");

var _OtherLoader = __webpack_require__(/*! ./OtherLoader.es6 */ "../../src/js/src/Model/Resource/OtherLoader.es6");

var _OtherLoader2 = _interopRequireDefault(_OtherLoader);

var _GetData = __webpack_require__(/*! ./GetData.es6 */ "../../src/js/src/Model/Resource/GetData.es6");

var _GetData2 = _interopRequireDefault(_GetData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadMgr = function () {
  function LoadMgr() {
    _classCallCheck(this, LoadMgr);

    this.setup();
    // this.setEvents();
  }

  _createClass(LoadMgr, [{
    key: 'setup',
    value: function setup() {

      var ol = new _OtherLoader2.default();

      ol.youtubeIframeScript();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return LoadMgr;
}();

exports.default = LoadMgr;

/***/ }),

/***/ "../../src/js/src/Model/Url/Keys.es6":
/*!***************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Model/Url/Keys.es6 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = function data() {

  return [{
    'key': 'mode',
    'def': 'visual',
    'value': ['visual', 'ui', 'util', 'inspection']
  }, {
    'key': 'num',
    'def': '01',
    'value': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  }, {
    'key': 'effect',
    'def': '01',
    'value': ['01', '02']
  }, {
    'key': 'move',
    'def': 'add',
    'value': ['add', 'easing']
  }, {
    'key': 'pattern_cover',
    'def': '1',
    'value': ['1', '2', '3', '4', '5']
  }, {
    'key': 'param03',
    'def': '3',
    'value': ['any']
  }];
};

exports.default = data;

/***/ }),

/***/ "../../src/js/src/Model/Url/UrlParamMgr.es6":
/*!**********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Model/Url/UrlParamMgr.es6 ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Keys = __webpack_require__(/*! ./Keys.es6 */ "../../src/js/src/Model/Url/Keys.es6");

var _Keys2 = _interopRequireDefault(_Keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  UrlParamMgr
//
// ------------------------------------------------------------

var UrlParamMgr = function (_Base) {
  _inherits(UrlParamMgr, _Base);

  function UrlParamMgr() {
    _classCallCheck(this, UrlParamMgr);

    var _this = _possibleConstructorReturn(this, (UrlParamMgr.__proto__ || Object.getPrototypeOf(UrlParamMgr)).call(this));

    _this.name = 'UrlParamMgr';

    _this.keys = (0, _Keys2.default)();

    _this.setParam();
    _this.getParam();

    log(_this);

    return _this;
  }

  _createClass(UrlParamMgr, [{
    key: 'setParam',
    value: function setParam() {}
  }, {
    key: 'getParam',
    value: function getParam() {

      var params = location.search.replace('?', '').split('&');

      // データの設定
      for (var i = 0, len = params.length; i < len; i++) {

        // 各キー、バリューを取得
        var param = params[i];
        var p = param.split('=');
        var key = p[0],
            value = p[1];

        // データと比較して設定
        for (var j = 0; j < this.keys.length; j++) {

          var obj = this.keys[j];

          // パラメータがキーと一緒だったら
          if (obj.key === key) {

            // 各値と比較
            for (var k = 0; k < obj.value.length; k++) {

              var val = obj.value[k];

              // キーをthis.keysのkeyに、valueを比較して同値だったものに
              if (val === value) {
                this[obj.key] = val;
                break;
                // anyは、どの値でも
              } else if (val == 'any') {
                this[obj.key] = value;
                break;
                // anyでも、特定の値でもなければ、def値を入れる
              } else {
                this[obj.key] = obj.def;
              }
            };
          }
        };
      }

      // キーに値が設定されてなければ、def値を設定
      for (var j = 0; j < this.keys.length; j++) {

        var obj = this.keys[j];

        if (this[obj.key] == undefined) this[obj.key] = obj.def;
      }
    }
  }]);

  return UrlParamMgr;
}(_Base3.default);

exports.default = UrlParamMgr;

/***/ }),

/***/ "../../src/js/src/Util/Controller.es6":
/*!****************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Util/Controller.es6 ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

var _UrlParamMgr = __webpack_require__(/*! Model/Url/UrlParamMgr.es6 */ "../../src/js/src/Model/Url/UrlParamMgr.es6");

var _UrlParamMgr2 = _interopRequireDefault(_UrlParamMgr);

var _JudgeEnvironment = __webpack_require__(/*! _MyLibs/Util/JudgeEnvironment.es6 */ "../../src/js/src/_MyLibs/Util/JudgeEnvironment.es6");

var _JudgeEnvironment2 = _interopRequireDefault(_JudgeEnvironment);

var _Profiler = __webpack_require__(/*! _MyLibs/Util/Profiler.es6 */ "../../src/js/src/_MyLibs/Util/Profiler.es6");

var _Profiler2 = _interopRequireDefault(_Profiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.setup();
    this.setEvents();
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      // page id
      gb.pageID = $('body').attr('id');

      // UrlParam パラメータ調整用
      gb.urlp = new _UrlParamMgr2.default();

      // デバイス確認
      gb.je = new _JudgeEnvironment2.default();

      if (gb.conf.Profiler) new _Profiler2.default(); // Profiler
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/Util/Easing/index.es6":
/*!******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Util/Easing/index.es6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = linear;
exports.inBack = inBack;
exports.inBounce = inBounce;
exports.inCirc = inCirc;
exports.inCubic = inCubic;
exports.inElastic = inElastic;
exports.inExpo = inExpo;
exports.inQuad = inQuad;
exports.inQuart = inQuart;
exports.inQuint = inQuint;
exports.inSine = inSine;
exports.outBack = outBack;
exports.outBounce = outBounce;
exports.outCirc = outCirc;
exports.outCubic = outCubic;
exports.outElastic = outElastic;
exports.outExpo = outExpo;
exports.outQuad = outQuad;
exports.outQuart = outQuart;
exports.outQuint = outQuint;
exports.outSine = outSine;
exports.inOutBack = inOutBack;
exports.inOutBounce = inOutBounce;
exports.inOutCirc = inOutCirc;
exports.inOutCubic = inOutCubic;
exports.inOutExpo = inOutExpo;
exports.inOutQuad = inOutQuad;
exports.inOutQuart = inOutQuart;
exports.inOutQuint = inOutQuint;
exports.inOutSine = inOutSine;
// # ---------------------------------------------------
// # イージング計算用オブジェクト
// # t(0~1)を渡すと歪めた結果(0~1)を返す
// # ---------------------------------------------------

// # -----------------------------------------------
// # メソッド一覧
// # @linear
// #
// # @inBack
// # @inBounce
// # @inCirc
// # @inCubic
// # @inElastic
// # @inExpo
// # @inQuad
// # @inQuart
// # @inQuint
// # @inSine
// #
// # @outBack
// # @outBounce
// # @outCirc
// # @outCubic
// # @outElastic
// # @outExpo
// # @outQuad
// # @outQuart
// # @outQuint
// # @outSine
// #
// # @inOutBack
// # @inOutBounce
// # @inOutCirc
// # @inOutCubic
// # @inOutExpo
// # @inOutQuad
// # @inOutQuart
// # @inOutQuint
// # @inOutSine
// # -----------------------------------------------

function linear(t) {

  return t;
}

function inBack(t) {

  var s = 1.70158;
  return t * t * ((s + 1) * t - s);
}

function inBounce(t) {

  t = 1.0 - t;

  if (t < 1 / 2.75) return 1.0 - 7.5625 * t * t;

  if (t < 2 / 2.75) {
    t -= 1.5 / 2.75;
    return 1.0 - (7.5625 * t * t + 0.75);
  }

  if (t < 2.5 / 2.75) {
    t -= 2.25 / 2.75;
    return 1.0 - (7.5625 * t * t + 0.9375);
  }

  t -= 2.625 / 2.75;
  return 1.0 - (7.5625 * t * t + 0.984375);
}

function inCirc(t) {

  if (t >= 1) return 1;else return -(Math.sqrt(1 - t * t) - 1);
}

function inCubic(t) {

  return t * t * t;
}

function inElastic(t) {

  var p = 0.3;
  var a = 1.0;
  var s = 1.70158;

  if (t == 0) return 0;

  if (t == 1.0) return 1.0;

  if (a < 1.0) {
    a = 1.0;
    s = p / 4;
  } else {
    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
  }

  --t;
  return -(a * Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * 3.1419) / p));
}

function inExpo(t) {

  if (t == 0) return 0;else return Math.pow(2, 10 * (t - 1));
}

function inQuad(t) {

  return t * t;
}

function inQuart(t) {

  return t * t * t * t;
}

function inQuint(t) {

  return t * t * t * t * t;
}

function inSine(t) {

  return -Math.cos(t * (Math.PI / 2)) + 1.0;
}

function outBack(t, s) {

  s = s || 1.70158;
  --t;
  return t * t * ((s + 1.0) * t + s) + 1.0;
}

function outBounce(t) {

  if (t < 1 / 2.75) return 7.5625 * t * t;

  if (t < 2 / 2.75) {
    t -= 1.5 / 2.75;
    return 7.5625 * t * t + 0.75;
  }

  if (t < 2.5 / 2.75) {
    t -= 2.25 / 2.75;
    return 7.5625 * t * t + 0.9375;
  }

  t -= 2.625 / 2.75;
  return 7.5625 * t * t + 0.984375;
}

function outCirc(t) {

  --t;
  return Math.sqrt(1 - t * t);
}

function outCubic(t) {

  --t;
  return t * t * t + 1;
}

function outElastic(t, s) {

  var p = s || 0.3;
  var a = 1.0;

  if (t == 0) return 0;

  if (t == 1.0) return 1.0;

  if (a < 1.0) {
    a = 1.0;
    s = p / 4;
  } else {
    s = p / (2 * 3.1419) * Math.asin(1.0 / a);
  }

  return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * 3.1419) / p) + 1.0;
}

function outExpo(t) {

  if (t == 1.0) return 1;else return -Math.pow(2, -10 * t) + 1;
}

function outQuad(t) {

  return -t * (t - 2);
}

function outQuart(t) {

  --t;
  return 1.0 - t * t * t * t;
}

function outQuint(t) {

  --t;
  return t * t * t * t * t + 1;
}

function outSine(t) {

  return Math.sin(t * (Math.PI / 2));
}

function inOutBack(t, s) {

  var s = s || 1.70158;
  var k = 1.525;

  t *= 2;
  s *= k;

  if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));

  t -= 2;
  return 0.5 * (t * t * ((s + 1) * t + s) + 2);
}

function inOutBounce(t) {

  if (t < 0.5) return this.inBounce(t * 2) * 0.5;else return this.outBounce(t * 2 - 1.0) * 0.5 + 0.5;
}

function inOutCirc(t) {

  t *= 2;

  if (t < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);

  t -= 2;
  return 0.5 * (Math.sqrt(1 - t * t) + 1);
}

function inOutCubic(t) {

  t *= 2;

  if (t < 1) return 0.5 * t * t * t;

  t -= 2;
  return 0.5 * (t * t * t + 2);
}

function inOutExpo(t) {

  if (t == 0) return 0;

  if (t == 1.0) return 1.0;

  t *= 2;
  if (t < 1) return 0.5 * Math.pow(2, 10 * (t - 1));

  --t;
  return 0.5 * (-Math.pow(2, -10 * t) + 2);
}

function inOutQuad(t) {

  t *= 2;

  if (t < 1) return 0.5 * t * t * t * t;

  t -= 2;
  return -0.5 * (t * t * t * t - 2);
}

function inOutQuart(t) {

  t *= 2;

  if (t < 1) return 0.5 * t * t * t * t;

  t -= 2;
  return -0.5 * (t * t * t * t - 2);
}

function inOutQuint(t) {

  t *= 2;

  if (t < 1) return 0.5 * t * t * t * t * t;

  t -= 2;
  return 0.5 * (t * t * t * t * t + 2);
}

function inOutSine(t) {

  return -0.5 * (Math.cos(Math.PI * t) - 1);
}

/***/ }),

/***/ "../../src/js/src/Util/Math/index.es6":
/*!****************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/Util/Math/index.es6 ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
exports.randomInt = randomInt;
exports.random2 = random2;
exports.hit = hit;
exports.range = range;
exports.map = map;
exports.demical = demical;
exports.float = float;
exports.clamp = clamp;
exports.rate = rate;
exports.lerp = lerp;
exports.degree = degree;
exports.radian = radian;
exports.dist = dist;
exports.ascend = ascend;
exports.descend = descend;
exports.constrain = constrain;
/**
 * Generate a random float
 *
 * @param  {number} minValue  Minimum boundary
 * @param  {number} maxValue  Maximum boundary
 * @param  {number} precision Precision
 * @return {number}           Generated float
 */
function random(minValue, maxValue) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;


  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
}

// ランダムな整数を取得
// -----------------------------------
// @min : 最小値(int)
// @max : 最大値(int)
// return : minからmaxまでのランダムな整数(int)
// -----------------------------------
function randomInt(min, max) {

  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// ランダムな整数を2つの範囲から取得
// -----------------------------------
// @min1 : 最小値1(int)
// @max1 : 最大値1(int)
// @min2 : 最小値2(int)
// @max2 : 最大値2(int)
// return : minからmaxまでのランダムな整数(int)
// -----------------------------------
function random2(min1, max1, min2, max2) {

  if (this.hit(2)) {
    return this.randomInt(min1, max1);
  } else {
    return this.randomInt(min2, max2);
  }
}

// 1/@rangeの確率でtrueを取得
// -----------------------------------
// @range : 母数(int)
// return : true or false(boolean)
// -----------------------------------
function hit(range) {

  return this.randomInt(0, range - 1) === 0;
}

// 0から範囲内でランダムな整数を取得
// -----------------------------------
// @val : 範囲(int)
// return : ランダムな整数(int)
// -----------------------------------
function range(val) {

  return this.randomInt(-val, val);
}

// 値をマッピング
// -----------------------------------
// @num : マッピングする値(Number)
// @resMin : 結果となる値の最小値(Number)
// @resMax : 結果となる値の最大値(Number)
// @baseMin : 元となる値の最小値(Number)
// @baseMax : 元となる値の最大値(Number)
// return : マッピングされた値(Number)
// -----------------------------------
function map(num, resMin, resMax, baseMin, baseMax) {

  var p;
  if (num < baseMin) {
    return resMin;
  }
  if (num > baseMax) {
    return resMax;
  }
  p = (resMax - resMin) / (baseMax - baseMin);

  return (num - baseMin) * p + resMin;
}

function demical(v) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


  // 計算 ( Math.pow( 10, 4 ) = 10000 )
  var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);

  return val;
}

function float(v) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


  return v.toFixed(n);
}

// 数値に小数点第@n位までをつけた文字列を返す
// -----------------------------------
// @num : 値(Number)
// @n : 小数点の位(int)
// return : 変換された値(String)
// -----------------------------------
// decimal(num, n) {
//   var i, pos;
//   num = String(num);
//   pos = num.indexOf(".");
//   if (n === 0) {
//     return num.split(".")[0];
//   }
//   if (pos === -1) {
//     num += ".";
//     i = 0;
//     while (i < n) {
//       num += "0";
//       i++;
//     }
//     return num;
//   }
//   num = num.substr(0, pos) + num.substr(pos, n + 1);
//   return num;
// }

function clamp(val, min, max, minVal, maxVal) {

  if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;

  return val;
}

function rate(val, base) {

  var v = val / base;

  return v;
}

function lerp(val01, val02, val) {

  val = val < 0 ? 0 : val;
  val = val > 1 ? 1 : val;
  return val01 + (val02 - val01) * val;
}

function degree(radians) {

  return radians * 180 / Math.PI; //1ラジアンが何度か
}

// to radians
function radian(angle) {

  return angle * Math.PI / 180; //1度何ラジアンか
}

function dist(p1, p2) {

  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function ascend(arr) {

  arr.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  // var a = [5,3,9,1,10]
  // 結果:10,9,5,3,1

  return arr;
}

function descend(arr) {

  arr.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  // var a = [5,3,9,1,10]
  // 結果:1,3,5,9,10

  return arr;
}

// map(value, min01, max01, min02, max02) {

//   var dis01 = max01 - min01;
//   var dis02 = max02 - min02

//   var rate = dis02 / dis01;

//   value = value * rate;

//   return value;
// }

function constrain(value, min, max) {

  return Math.min(max, Math.max(value, min));

  // if (value <= low) value = low;
  // if (value >= high) value = high;     
  // return value;
}

/***/ }),

/***/ "../../src/js/src/View/Func/Sns.es6":
/*!**************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/Func/Sns.es6 ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // ------------------------------------------------------------
//
//  SNS
//
// ------------------------------------------------------------

var _metaData = __webpack_require__(/*! ../../../../ejs/inc/metaData.json */ "../../src/ejs/inc/metaData.json");

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SNS = function () {
  function SNS() {
    var $fb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.fbShare');
    var $tw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('.twShare');
    var $line = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $('.lineShare');
    var $mail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $('.onMail');

    _classCallCheck(this, SNS);

    // dom
    this.$fb = $fb;
    this.$tw = $tw;
    this.$line = $line;
    this.$mail = $mail;

    // data
    var dataC = _metaData2.default['common'];

    this.fb = {
      $target: $fb,
      tit: dataC.fb.tit,
      des: dataC.fb.des,
      img: dataC.fb.img,
      url: dataC.fb.url
      // url: location.href,
    };

    this.tw = {
      $target: $tw,
      tit: dataC.tw.tit,
      text: dataC.tw.text,
      url: dataC.tw.url,
      // url: location.href,
      hash: dataC.tw.hash
    };

    this.line = {
      $target: $line,
      tit: dataC.tit,
      des: dataC.des,
      img: dataC.img,
      url: dataC.line.url,
      // url: location.href,
      text: dataC.line.text
    };

    this.mail = {
      tit: dataC.mail.tit,
      des: dataC.mail.des,
      address: dataC.address
    };

    log(this);

    this.setEvents();
  }

  _createClass(SNS, [{
    key: 'runFB',
    value: function runFB(e) {

      this.openWindow('https://www.facebook.com/sharer/sharer.php?u=' + this.fb.url);

      return false;
    }
  }, {
    key: 'runTW',
    value: function runTW(e) {

      this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + encodeURIComponent(this.tw.text) + '&hashtags=' + this.tw.hash);
      // this.openWindow('http://twitter.com/intent/tweet?url=' + this.tw.url + '&text=' + this.tw.text + '&hashtags=' + this.tw.hash);

      return false;
    }
  }, {
    key: 'runLINE',
    value: function runLINE() {

      this.openWindow('http://line.me/R/msg/text/?' + encodeURIComponent(this.line.text) + '%0A' + this.line.url);

      return false;
    }
  }, {
    key: 'runMail',
    value: function runMail() {

      location.href = 'mailto:' + this.mail.address + '?subject=' + this.mail.tit + '&body=' + this.mail.des + this.mail.url;

      return false;
    }
  }, {
    key: 'openWindow',
    value: function openWindow(url, w, h) {

      if (w === undefined) w = 600;
      if (h === undefined) h = 600;

      var l = Number((window.screen.width - w) / 2);
      var t = Number((window.screen.height - h) / 2);

      window.open(url, 'new_window', 'menubar=no,' + 'toolbar=no,' + 'resizable=yes,' + 'scrollbars=yes,' + 'height=' + h + ',' + 'width=' + w + ',' + 'left=' + l + ',' + 'top=' + t);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      if (this.$fb) this.fb.$target.on('click', this.runFB.bind(this));
      if (this.$tw) this.tw.$target.on('click', this.runTW.bind(this));
      if (this.$line) this.line.$target.on('click', this.runLINE.bind(this));
      if (this.$mail) this.$mail.on('click', function () {
        _this.runMail();return false;
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      if (this.$fb) this.fb.$target.off('click');
      if (this.$tw) this.tw.$target.off('click');
      if (this.$line) this.line.$target.off('click');
      if (this.$mail) this.$mail.off('click');
    }
  }]);

  return SNS;
}();

exports.default = SNS;

/***/ }),

/***/ "../../src/js/src/View/UI/Controller.es6":
/*!*******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Controller.es6 ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Controller = __webpack_require__(/*! ./LineBox/Controller.es6 */ "../../src/js/src/View/UI/LineBox/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

var _Controller3 = __webpack_require__(/*! ./Youtube/Controller.es6 */ "../../src/js/src/View/UI/Youtube/Controller.es6");

var _Controller4 = _interopRequireDefault(_Controller3);

var _Controller5 = __webpack_require__(/*! ./OpModal/Controller.es6 */ "../../src/js/src/View/UI/OpModal/Controller.es6");

var _Controller6 = _interopRequireDefault(_Controller5);

var _Controller7 = __webpack_require__(/*! ./Menu/Controller.es6 */ "../../src/js/src/View/UI/Menu/Controller.es6");

var _Controller8 = _interopRequireDefault(_Controller7);

var _Controller9 = __webpack_require__(/*! ./ToScroll/Controller.es6 */ "../../src/js/src/View/UI/ToScroll/Controller.es6");

var _Controller10 = _interopRequireDefault(_Controller9);

var _Controller11 = __webpack_require__(/*! ./MatchMove/Controller.es6 */ "../../src/js/src/View/UI/MatchMove/Controller.es6");

var _Controller12 = _interopRequireDefault(_Controller11);

var _Controller13 = __webpack_require__(/*! ./MatchMove_Bg/Controller.es6 */ "../../src/js/src/View/UI/MatchMove_Bg/Controller.es6");

var _Controller14 = _interopRequireDefault(_Controller13);

var _Controller15 = __webpack_require__(/*! ./Match_dist/Controller.es6 */ "../../src/js/src/View/UI/Match_dist/Controller.es6");

var _Controller16 = _interopRequireDefault(_Controller15);

var _Controller17 = __webpack_require__(/*! ./Play/Controller.es6 */ "../../src/js/src/View/UI/Play/Controller.es6");

var _Controller18 = _interopRequireDefault(_Controller17);

var _Controller19 = __webpack_require__(/*! ./SectionDir/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Controller.es6");

var _Controller20 = _interopRequireDefault(_Controller19);

var _Controller21 = __webpack_require__(/*! ./Slider/Controller.es6 */ "../../src/js/src/View/UI/Slider/Controller.es6");

var _Controller22 = _interopRequireDefault(_Controller21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller() {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    _this.isREv = true;

    _this.setup();
    _this.setEvents();

    // this.timeline();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      gb.y1 = new _Controller4.default('video', 'qb3Cq6kLrz0');
      gb.y2 = new _Controller4.default('video2', 'HkPeh9U_g1s');

      var $t = $('.lineBoxWrap');
      this.lList = [];
      for (var i = 0; i < $t.length; i++) {
        var $tt = $t.eq(i);
        var num = $tt.data('color');
        var l = new _Controller2.default($tt, num);
        l.show(0.0);
        this.lList.push(l);
      }

      gb.opModal = new _Controller6.default($('.toggle_opModal'), $('.open_opModal'), $('.close_opModal'), $('.opModal_contents'));
      gb.menu = new _Controller8.default($('.toggle_menu'), $('.open_menu'), $('.close_menu'), $('.menu_contents'));

      // gb.mv = new Mv();
      gb.tos = new _Controller10.default();

      new _Controller18.default();
      new _Controller22.default();

      this.setup_bgMatch();
      this.setup_op();
    }
  }, {
    key: 'setup_op',
    value: function setup_op() {
      var _this2 = this;

      this.$wrap = $('.block').not('.block01');
      this.$img = $('.block01 .imgMv');
      this.$tit = $('.block01 .titMtach');
      this.$subTit = $('.block01 .titGirl');
      this.$textObiTop = $('.block01 .textObiTop');
      this.$textObi = $('.block01 .textObi.pc');
      if (gb.r.w <= 768) this.$textObi = $('.block01 .textObi.sp');
      this.$scroll = $('.block01 .scroll');
      this.$list = $('.block01 .list .item');
      this.$menuBtn = $('#header .menuBtn');

      this.$webtext = $('.block01 .webtext');
      this.$logotop = $('.block01 .logotop');

      this.$sns = $('#header .sns .item');
      this.$line = $('.block01 .lineBox');

      var sc = 1.07;
      if (gb.r.w <= 768) sc = 1.2;

      TweenMax.set(this.$wrap, { opacity: 0 });
      TweenMax.set(this.$img, { opacity: 0, scale: 1.05 });
      TweenMax.set(this.$tit, { opacity: 0 });
      TweenMax.set(this.$subTit, { opacity: 0, scale: sc });
      TweenMax.set(this.$logotop, { opacity: 0, scale: sc });
      TweenMax.set(this.$textObiTop.find('.bg'), { scaleY: 0 });
      TweenMax.set(this.$textObiTop.find('svg path'), { opacity: 0, y: -8 });
      TweenMax.set(this.$textObi, { scale: sc });
      TweenMax.set(this.$textObi.find('svg path, svg polyline'), { opacity: 0 });
      TweenMax.set(this.$webtext, { scale: sc });
      TweenMax.set(this.$webtext.find('svg path, svg polyline'), { opacity: 0 });
      TweenMax.set(this.$scroll, { opacity: 0 });
      TweenMax.set(this.$list, { opacity: 0, y: -10 });
      TweenMax.set(this.$sns, { y: -this.$sns.height() });
      TweenMax.set(this.$sns.find('svg'), { opacity: 0, y: -10 });
      if (gb.r.w <= 768) TweenMax.set(this.$menuBtn, { y: -this.$menuBtn.height() });
      // TweenMax.set(this.$line, {opacity: 0});
      var cb = function cb() {};

      // mv match
      if (gb.r.w <= 768) {
        var base = 375;
        var rate = gb.r.w / base;
        TweenMax.set($('.tit_matches').parent(), { scale: 0.5 * rate });
      }
      this.titMatches = [];
      $('.tit_matches .itemW').each(function (index, el) {

        // if (index>1) return;
        // if (index!==1) return;

        var m = new _Controller12.default($(el));
        _this2.titMatches.push(m);
      });

      // mv linebox
      var $t = $('.lineBoxWrapMV');
      var num = $t.data('color');
      this.l = new _Controller2.default($t, num, true);
      TweenMax.set($t.find('.lineBox'), { z: 0, 'z-index': 2 });

      // var adj = 100;
      // if (gb.r.w<=768) adj = 70;
      var adj = 0;
      var top = this.$tit.find('img').offset().top + this.$tit.find('img').height() / 2 - gb.r.h / 2 + adj;
      gb.tos.runTo(top);
    }
  }, {
    key: 'setup_bgMatch',
    value: function setup_bgMatch() {
      var _this3 = this;

      var tl = new TimelineMax({ delay: 0.0 });

      tl.add(function () {

        _this3.mb = [];
        $('.matches.mv .itemW').each(function (index, el) {

          // if (index>0) return;
          // if (index!==1) return;

          var $a = $('.ashiato .itemWA').eq(index);

          var m = new _Controller14.default($(el), $a);
          _this3.mb.push(m);
        });
      }, 0.0);
      // .add(()=>{

      //   for (var i = 0; i < this.mb.length; i++) {
      //     var m = this.mb[i];
      //     // m.timeline();
      //     m.timeline_r();
      //   }

      // }, 2.0)
      // .add(()=>{

      //   for (var i = 0; i < this.mb.length; i++) {
      //     var m = this.mb[i];
      //     m.timeline_r();
      //   }


      // }, 8.0)
    }
  }, {
    key: 'bgMathRun',
    value: function bgMathRun() {

      for (var i = 0; i < this.mb.length; i++) {
        var m = this.mb[i];
        m.timeline_r();
      }
    }
  }, {
    key: 'bgMathRun_r',
    value: function bgMathRun_r() {

      for (var i = 0; i < this.mb.length; i++) {
        var m = this.mb[i];
        m.timeline();
      }
    }
  }, {
    key: 'timeline',
    value: function timeline() {
      var _this4 = this;

      var tl = new TimelineMax({ delay: 0.0 });

      tl
      // tit match
      .add(function () {

        for (var i = 0; i < _this4.titMatches.length; i++) {
          var m = _this4.titMatches[i];
          m.timeline();
        }
      }, .0).add(function () {

        var adj = 150;
        if (gb.r.w <= 768) adj = 70;
        gb.tos.runToFirst('+=' + adj, 3.0);
      }, 1.2).to(this.$subTit, 1.4, {
        opacity: 1,
        ease: Power2.easeInOut
      }, 1.3).add(function () {

        TweenMax.to(_this4.$subTit, 1.2, {
          opacity: 1,
          ease: Power2.easeInOut,
          onStart: function onStart() {
            TweenMax.to(_this4.$subTit, 5.0, {
              scale: 1,
              ease: Power2.easeOut
            });
          }
        });
      }, 1.3).add(function () {

        // webtext
        _this4.$webtext.find('svg path, svg polyline').each(function (index, el) {

          TweenMax.to($(el), 1.4, {
            opacity: 1,
            delay: index * 0.05,
            ease: Power2.easeInOut
          });
          TweenMax.to($(el), 1.4, {
            x: 0,
            y: 0,
            delay: index * 0.05,
            ease: Power2.easeOut
          });
        });

        TweenMax.to(_this4.$webtext, 5.0, {
          scale: 1,
          ease: Power2.easeOut
        });
      }, 1.3)
      // textobi
      .add(function () {

        _this4.$textObi.find('svg path, svg polyline').each(function (index, el) {

          TweenMax.to($(el), 1.4, {
            opacity: 1,
            delay: index * 0.05,
            ease: Power2.easeInOut
          });
          TweenMax.to($(el), 1.4, {
            x: 0,
            y: 0,
            delay: index * 0.05,
            ease: Power2.easeOut
          });
        });

        TweenMax.to(_this4.$textObi, 5.0, {
          scale: 1,
          ease: Power2.easeOut
        });
      }, 1.3 + 0.7)
      // logotop
      .add(function () {

        TweenMax.to(_this4.$logotop, 1.2, {
          opacity: 1,
          ease: Power2.easeInOut,
          onStart: function onStart() {
            TweenMax.to(_this4.$logotop, 5.0, {
              scale: 1,
              ease: Power2.easeOut
            });
          }
        });
      }, 1.3 + 2.5)

      // scrollTop
      .add(function () {

        gb.tos.runToFirst(0);
      }, 3.0 + 2.0)

      // line
      .add(function () {
        _this4.l.show(2.2, Expo.easeInOut);
      }, 3.0 + 2.5)
      // img
      .to(this.$img, 1.2, {
        opacity: 1,
        ease: Power2.easeInOut,
        onStart: function onStart() {
          TweenMax.to(_this4.$img, 5.0, {
            scale: 1,
            ease: Power2.easeOut
          });
        }
      }, 3.0 + 3.5)
      // obi
      .add(function () {

        TweenMax.to(_this4.$textObiTop.find('.bg'), 1.2, {
          scaleY: 1,
          ease: Power3.easeInOut
        });
        _this4.$textObiTop.find('svg path').each(function (index, el) {

          TweenMax.to($(el), 1.4, {
            opacity: 1,
            delay: 0.5 + index * 0.1,
            ease: Power2.easeInOut
          });
          TweenMax.to($(el), 1.4, {
            x: 0,
            y: 0,
            delay: 0.5 + index * 0.1,
            ease: Power2.easeOut
          });
        });
      }, 3.0 + 3.5).add(function () {

        // item
        _this4.$list.each(function (index, el) {

          TweenMax.to($(el), 1.0, {
            opacity: 1,
            y: 0,
            z: 0,
            delay: index * 0.1,
            ease: Power2.easeOut
          });
        });

        // sns
        _this4.$sns.each(function (index, el) {

          TweenMax.to($(el), 1.0, {
            y: 0,
            delay: index * 0.1,
            ease: Power2.easeOut
          });
          TweenMax.to($(el).find('svg'), 1.0, {
            opacity: 1,
            y: 0,
            delay: 0.2 + index * 0.1,
            ease: Power2.easeOut
          });
        });
        if (gb.r.w <= 768) {
          TweenMax.to(_this4.$menuBtn, 1.0, {
            y: 0,
            ease: Power2.easeOut
          });
        }
      }, 3.0 + 4.5).to(this.$scroll, 1.0, {
        opacity: 1,
        ease: Power2.easeInOut
      }, 3.0 + 4.5).to(this.$wrap, 1.0, {
        opacity: 1,
        ease: Power2.easeInOut
      }, 3.0 + 4.5).add(function () {

        $('.ashiato').css('position', 'absolute');
        $('.matches').css('position', 'absolute');
        gb.uic.bgMathRun();

        _this4.isOpEnd = true;
      }, 3.0 + 5.0).add(function () {

        new _Controller20.default();
        // if (gb.u.dv.isPC) $('.matchD').each(function(index, el) {new Match_dist($(el));});
        if (!$('body').hasClass('isIE')) $('.matchD').each(function (index, el) {
          new _Controller16.default($(el));
        });
      }, 3.0 + 7.0).add(function () {

        if (!gb.u.dv.isIe()) {
          if (gb.u.dv.isPC) gb.u.o.enableScroll($(window));else gb.u.o.notMove(false, $('#inner'));
        }
      }, 3.0 + 8.0);
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'onResize',
    value: function onResize() {

      for (var i = 0; i < this.lList.length; i++) {
        this.lList[i].onResize();
      }

      this.l.onResize();

      if (gb.r.w <= 768) {
        var base = 375;
        var rate = gb.r.w / base;
        TweenMax.set($('.tit_matches').parent(), { scale: 0.5 * rate });
      }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this5 = this;

      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);

      $(window).on('OpStart', function (event) {
        _this5.timeline();
      });
    }
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Layout/Clone.es6":
/*!*********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Layout/Clone.es6 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Clone
//
//--------------------------------------------------

var Clone = function (_Base) {
  _inherits(Clone, _Base);

  function Clone() {
    _classCallCheck(this, Clone);

    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this));

    _this.$wrap = $('.section03');
    _this.$target = $('.planeWrap02');
    _this.$clone = _this.$target.clone();

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Clone, [{
    key: 'setup',
    value: function setup() {

      this.isREv = true;

      this.$wrap.append(this.$clone);
      this.$clone.addClass('clone');

      this.run();
    }
  }, {
    key: 'run',
    value: function run() {

      // var offset = this.$target.offset();
      // this.$clone.css({
      //   position: 'absolute',
      //   left: offset.left,
      //   top: offset.top,
      // });

    }
  }, {
    key: 'onResize',
    value: function onResize() {

      this.run();
    }
  }]);

  return Clone;
}(_Base3.default);

exports.default = Clone;

/***/ }),

/***/ "../../src/js/src/View/UI/Layout/ResponsiveSwitchImg.es6":
/*!***********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Layout/ResponsiveSwitchImg.es6 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  ResponsiveSwitchImg
//
//--------------------------------------------------

var ResponsiveSwitchImg = function (_Base) {
  _inherits(ResponsiveSwitchImg, _Base);

  function ResponsiveSwitchImg() {
    _classCallCheck(this, ResponsiveSwitchImg);

    var _this = _possibleConstructorReturn(this, (ResponsiveSwitchImg.__proto__ || Object.getPrototypeOf(ResponsiveSwitchImg)).call(this));

    _this.$target = $('.responsiveImg');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(ResponsiveSwitchImg, [{
    key: 'setup',
    value: function setup() {

      this.isREv = true;

      this.isPCLock = gb.u.dv.isResPC ? false : true;
      this.isSPLock = gb.u.dv.isResSP ? false : true;

      this.run();
    }
  }, {
    key: 'run',
    value: function run() {

      log(gb.u.dv.isResSP, this.isSPLock);

      // ------------------------------------------------------------
      //  ブレイクポイントよりもsp側
      // ------------------------------------------------------------
      if (gb.u.dv.isResSP && !this.isSPLock) {
        this.isPCLock = false;
        this.isSPLock = true;

        this.$target.each(function (index, el) {

          // imgの変更        
          var src = $(this).attr('src');
          src = gb.u.s.strReplace(src, 'img_pc', 'img_sp');
          $(this).attr('src', src);

          // sizeの変更
          // $(this).off('load');
          // $(this).on('load', (event)=>{

          //   if ($(this).hasClass('spSize')) gb.u.dv.setImgSPSize($(this));

          // });

        });
      }

      // ------------------------------------------------------------
      //  ブレイクポイントよりもpc側
      // ------------------------------------------------------------
      if (gb.u.dv.isResPC && !this.isPCLock) {
        this.isPCLock = true;
        this.isSPLock = false;

        this.$target.each(function (index, el) {

          // imgの変更        
          var src = $(this).attr('src');
          src = gb.u.s.strReplace(src, 'img_sp', 'img_pc');
          $(this).attr('src', src);

          // sizeの変更
          // $(this).attr({width: 'auto',height: 'auto'});
        });
      }
    }
  }, {
    key: 'onResize',
    value: function onResize() {

      this.run();
    }
  }]);

  return ResponsiveSwitchImg;
}(_Base3.default);

exports.default = ResponsiveSwitchImg;

/***/ }),

/***/ "../../src/js/src/View/UI/Layout/Size.es6":
/*!********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Layout/Size.es6 ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Size
//
//--------------------------------------------------

var Size = function (_Base) {
  _inherits(Size, _Base);

  function Size() {
    _classCallCheck(this, Size);

    var _this = _possibleConstructorReturn(this, (Size.__proto__ || Object.getPrototypeOf(Size)).call(this));

    _this.$target = $('.sliderInner');
    _this.$sub = $('.logo_big');

    _this.max = 768;
    _this.min = 376;
    _this.defw = 340;
    _this.defh = 523;
    _this.defW = 375;
    _this.defH = 667;
    _this.w = _this.defw;
    _this.h = _this.defh;
    _this.rate = _this.h / _this.w;
    _this.ratew = gb.r.w / _this.w;
    _this.rateh = gb.r.h / _this.h;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Size, [{
    key: 'setup',
    value: function setup() {

      this.isREv = true;

      this.run();
    }
  }, {
    key: 'run',
    value: function run() {

      var adjust = 0;
      if ($('body').hasClass('landscape')) adjust = 200;

      var h = gb.r.h - 38 - this.$sub.innerHeight() + adjust;

      TweenMax.set(this.$target, { height: h });
      if (gb.r.w > this.max || gb.r.w < this.min) TweenMax.set(this.$target, { clearProps: 'all' });
    }
  }, {
    key: 'onResizeC',
    value: function onResizeC() {
      var _this2 = this;

      clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {
        _this2.run();
      }, 100);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('orientationchange', this.onResizeC.bind(this));
    }
  }]);

  return Size;
}(_Base3.default);

exports.default = Size;

/***/ }),

/***/ "../../src/js/src/View/UI/LineBox/Controller.es6":
/*!***************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/LineBox/Controller.es6 ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  LineBox
//
//--------------------------------------------------

var LineBox = function () {
  function LineBox($target) {
    var cp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, LineBox);

    this.$target = $target;
    this.$lineBox = '<div class="lineBox">' + '<div class="lineBoxLine lineT"></div>' + '<div class="lineBoxLine lineR"></div>' + '<div class="lineBoxLine lineB"></div>' + '<div class="lineBoxLine lineL"></div>' + '</div>';

    this.$wrap = null;
    this.$lt = null;
    this.$lr = null;
    this.$lb = null;
    this.$ll = null;

    this.flag = flag;

    this.t = 0;this.r = 0;this.l = 0;this.b = 0;
    this.w = 0;this.h = 0;

    this.cp = cp;

    this.isShow = false;

    // color
    this.color = '#000';

    switch (this.cp) {
      case 0:
        this.colorV = '#ea571e';
        this.colorH = '#006549';
        break;
      case 1:
        this.colorV = '#fff';
        this.colorH = '#ea571e';
        break;
      case 2:
        this.colorV = '#ea571e';
        this.colorH = '#fff';
        break;
      case 3:
        this.colorV = '#006549';
        this.colorH = '#ea571e';
        break;
    }
    this.lineWidth = 3 * gb.r.w / 375;
    if (gb.r.w > 768) this.lineWidth = 6;

    this.setup();
    this.setEvents();
  }

  _createClass(LineBox, [{
    key: 'setup',
    value: function setup() {

      this.$target.prepend(this.$lineBox);

      this.$wrap = this.$target.find('.lineBox');
      this.$lt = this.$target.find('.lineT');
      this.$lr = this.$target.find('.lineR');
      this.$lb = this.$target.find('.lineB');
      this.$ll = this.$target.find('.lineL');

      // set style
      TweenMax.set(this.$target, { 'position': 'relative' });
      TweenMax.set(this.$wrap.find('.lineBoxLine'), { 'position': 'absolute' });
      TweenMax.set(this.$lt.add(this.$lb), { backgroundColor: this.colorH });
      TweenMax.set(this.$ll.add(this.$lr), { backgroundColor: this.colorV, 'z-index': 2 });
      TweenMax.set(this.$wrap, { width: '100%', height: '100%', 'position': 'absolute', left: 0, top: 0, 'pointer-events': 'none' });

      this.ready();
    }
  }, {
    key: 'ready',
    value: function ready() {

      this.w = this.$target.width();
      this.h = this.$target.height();

      // 初期 0
      // TweenMax.set(this.$lt, {width: 0,height: this.lineWidth,left: 0,top: 0});
      // TweenMax.set(this.$lr, {width: this.lineWidth,height: 0,left: this.w-this.lineWidth,top: 0});
      // TweenMax.set(this.$lb, {width: 0,height: this.lineWidth,left: this.w,top: this.h-this.lineWidth});
      // TweenMax.set(this.$ll, {width: this.lineWidth,height: 0,left: 0,top: this.h});
      TweenMax.set(this.$lt, { width: 0, height: this.lineWidth, left: 0, top: 0 });
      TweenMax.set(this.$lr, { width: this.lineWidth, height: 0, left: this.w - this.lineWidth, top: this.h - this.lineWidth });
      TweenMax.set(this.$lb, { width: 0, height: this.lineWidth, left: this.w, top: this.h - this.lineWidth });
      TweenMax.set(this.$ll, { width: this.lineWidth, height: 0, left: 0, top: 0 });

      // 初期 100%
      // TweenMax.set(this.$lt, {width: '100%',height: this.lineWidth,left: 0,top: 0});
      // TweenMax.set(this.$lr, {width: this.lineWidth,height: '100%',left: this.w-this.lineWidth,top: 0});
      // TweenMax.set(this.$lb, {width: '100%',height: this.lineWidth,left: 0,top: this.h-this.lineWidth});
      // TweenMax.set(this.$ll, {width: this.lineWidth,height: '100%',left: 0,top: 0});
    }
  }, {
    key: 'show',
    value: function show() {
      var dur = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.7;
      var ease = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Power4.easeOut;


      this.isShow = true;

      var tl = new TimelineMax();

      tl.to(this.$lt, dur, {
        width: '100%',
        ease: ease
      }, 0.0).to(this.$lr, dur, {
        top: 0,
        height: '100%',
        ease: ease
      }, 0.0).to(this.$lb, dur, {
        width: '100%',
        left: 0,
        ease: ease
      }, 0.0).to(this.$ll, dur, {
        height: '100%',
        top: 0,
        ease: ease
      }, 0.0);
    }
  }, {
    key: 'hide',
    value: function hide() {

      var tl = new TimelineMax();

      tl.to(this.$lt, 0.5, {
        width: '0',
        ease: Power4.easeOut
      }).to(this.$lr, 0.5, {
        height: '0',
        ease: Power4.easeOut
      }, '-=0.5').to(this.$lb, 0.5, {
        width: '0',
        left: this.w,
        ease: Power4.easeOut
      }, '-=0.5').to(this.$ll, 0.5, {
        height: '0',
        top: this.h,
        ease: Power4.easeOut
      }, '-=0.5');
    }
  }, {
    key: 'onResize',
    value: function onResize() {

      this.w = this.$target.width();
      this.h = this.$target.height();
      this.lineWidth = 3 * gb.r.w / 375;
      if (gb.r.w > 768) this.lineWidth = 6;

      if (gb.uic.isOpEnd == undefined && this.flag) {

        if (!this.isShow) {
          TweenMax.set(this.$lt, { width: 0, height: this.lineWidth, left: 0, top: 0 });
          TweenMax.set(this.$lr, { width: this.lineWidth, height: 0, left: this.w - this.lineWidth, top: this.h - this.lineWidth });
          TweenMax.set(this.$lb, { width: 0, height: this.lineWidth, left: this.w, top: this.h - this.lineWidth });
          TweenMax.set(this.$ll, { width: this.lineWidth, height: 0, left: 0, top: 0 });
        }

        return;
      }

      TweenMax.set(this.$lt, { width: '100%', height: this.lineWidth, left: 0, top: 0 });
      TweenMax.set(this.$lr, { width: this.lineWidth, height: '100%', left: this.w - this.lineWidth, top: 0 });
      TweenMax.set(this.$lb, { width: '100%', height: this.lineWidth, left: 0, top: this.h - this.lineWidth });
      TweenMax.set(this.$ll, { width: this.lineWidth, height: '100%', left: 0, top: 0 });
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return LineBox;
}();

exports.default = LineBox;

/***/ }),

/***/ "../../src/js/src/View/UI/MatchMove/Controller.es6":
/*!*****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/MatchMove/Controller.es6 ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _index = __webpack_require__(/*! Util/Math/index.es6 */ "../../src/js/src/Util/Math/index.es6");

var m = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(/*! Util/Easing/index.es6 */ "../../src/js/src/Util/Easing/index.es6");

var e = _interopRequireWildcard(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// import Position from './Position.es6';


var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller($wrap) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    _this.$W = $wrap;
    _this.$wrapW = $wrap.find('.co');
    _this.$wrap = $wrap.find('.item');
    _this.$target = _this.$wrap.find('.itemIn');

    _this.$ashiato = $('.ashiato .box');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      // 最初に座標を合わせておく
      // TweenMax.set($('.tit_matches'), {rotationZ: '+=' + .01});
      TweenMax.set(this.$wrapW, { z: 0 });

      this.defl = this.$wrap.get(0).getBoundingClientRect();
      var pos = this.$wrapW.get(0).getBoundingClientRect();
      // this.defl.x -= pos.left;
      // this.defl.y -= pos.top;
      this.defl.x = 0;
      this.defl.y = 0;

      // 中央にset
      // TweenMax.set(this.$wrap, {x: this.defl.x, y: this.defl.y});
      // TweenMax.set(this.$wrap, {position: 'absolute', left: 0,top: 0});

      // origin change
      TweenMax.set(this.$target, { 'transform-origin': '50% 100%' });

      // 最初のmove
      this.rotates = [];
      this.pos = [];
      this.cnt = 0;
      this.cntR = 0;
      this.cntPos = 1;
      this.maxcnt = 1;

      var obj = { x: this.defl.x, y: this.defl.y };
      this.pos.push(obj);
      // this.rotates.push(0);

      // this.save(obj);
      // this.timeline();
      this.ready();
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'ready',
    value: function ready() {
      var _this2 = this;

      var tl = new TimelineMax();

      tl.add(function () {

        _this2.rotateDirP_reverse();
      }, 0.0).add(function () {

        _this2.$W.css('opacity', 1);
        _this2.$W.addClass('itemWrap');
      }, 1.0);
    }
  }, {
    key: 'timeline',
    value: function timeline() {
      var _this3 = this;

      var tl = new TimelineMax();

      var r = Math.floor(Math.random() * 1);
      var d = r * 0.35;

      // log(r, d);

      tl.add(function () {

        _this3.rotateDirP();
      }, 0.0 + d);
    }
  }, {
    key: 'rotateDirP',
    value: function rotateDirP() {
      var _this4 = this;

      if (this.maxcnt < this.cntR) {
        return;
      }

      var dur = .7;
      var deg = this.rotates[this.rotates.length - 1 - this.cntR];
      this.cntR++;
      var deg2 = this.rotates[this.rotates.length - 1 - this.cntR];

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        // TweenMax.set(this.$wrapW, {rotationZ: '-=' + .5});
        TweenMax.set(_this4.$ashiato, { rotationZ: '-=' + .5 });

        // pos
        var pos = _this4.pos[_this4.pos.length - 1 - _this4.cntPos];
        _this4.cntPos++;
        TweenMax.set(_this4.$wrap, { x: pos.x, y: pos.y, z: 1 });

        // origin change
        TweenMax.set(_this4.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)

      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)

      // // rotate後の位置を取得
      .add(function () {

        // pos
        var pos = _this4.pos[_this4.pos.length - 1 - _this4.cntPos];
        _this4.cntPos++;
        TweenMax.set(_this4.$wrap, { x: pos.x, y: pos.y, z: 1 });

        // origin change
        TweenMax.set(_this4.$target, { 'transform-origin': '50% 100%' });

        // end
        if (_this4.maxcnt < _this4.cntR) {
          TweenMax.set(_this4.$target, { rotationZ: 0 });
          return;
        }
      }, dur)

      // rotate
      .set(this.$target, {
        rotationZ: deg2
      }, dur)

      // // // repeat
      .add(function () {
        _this4.rotateDirP();
      }, dur);
    }
  }, {
    key: 'rotateDirP_reverse',
    value: function rotateDirP_reverse() {
      var _this5 = this;

      if (this.maxcnt < this.cnt) {
        return;
      }
      this.cnt++;

      var dur = 0.01;
      // var deg = Math.floor(10 + (Math.random() - 0.5) * 20);
      var deg = Math.floor(10 + (Math.random() - 0.5) * 10);
      // var deg = 30;
      this.rotates.push(deg);

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        // TweenMax.set(this.$wrapW, {rotationZ: '+=' + .5});
        TweenMax.set(_this5.$ashiato, { rotationZ: '+=' + .5 });

        // pos
        var l = _this5.$target.get(0).getBoundingClientRect();
        var pos = _this5.$wrapW.get(0).getBoundingClientRect();
        var obj = { x: l.left, y: l.top };
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = { x: obj.x + l.width - _this5.defl.width / 2, y: obj.y };
        TweenMax.set(_this5.$wrap, { x: obj.x, y: obj.y });
        _this5.pos.push(obj);

        // origin change
        TweenMax.set(_this5.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)
      // save
      // .add(()=>{this.save();}, dur * 0.5)

      .add(function () {

        // pos
        var l = _this5.$target.get(0).getBoundingClientRect();
        var pos = _this5.$wrapW.get(0).getBoundingClientRect();
        var obj = { x: l.left, y: l.top };
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = { x: obj.x + l.width - _this5.defl.width / 2, y: obj.y + l.height - _this5.defl.height };
        TweenMax.set(_this5.$wrap, { x: obj.x, y: obj.y });
        _this5.pos.push(obj);

        // // origin change
        TweenMax.set(_this5.$target, { 'transform-origin': '50% 100%' });
      }, dur).set(this.$target, {
        rotationZ: deg
      }, dur)
      // save
      // .add(()=>{this.save();}, dur)


      // // // repeat
      .add(function () {
        _this5.rotateDirP_reverse();
      }, dur);
    }
  }, {
    key: 'save',
    value: function save() {

      var $c = this.$wrap.clone();
      var pos = this.$wrapW.get(0).getBoundingClientRect();
      TweenMax.set($c, { opacity: .5, 'margin-left': '-4px', backgroundColor: 'none' });
      this.$ashiato.append($c);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/MatchMove_Bg/Controller.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/MatchMove_Bg/Controller.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _index = __webpack_require__(/*! Util/Math/index.es6 */ "../../src/js/src/Util/Math/index.es6");

var m = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(/*! Util/Easing/index.es6 */ "../../src/js/src/Util/Easing/index.es6");

var e = _interopRequireWildcard(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// import Position from './Position.es6';


var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller($wrap, $a) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    _this.$W = $wrap;
    _this.$wrapW = $wrap.find('.co');
    _this.$wrap = $wrap.find('.item');
    _this.$target = _this.$wrap.find('.itemIn');

    _this.$ashiato = $a;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      // 最初に座標を合わせておく
      // TweenMax.set($('.tit_matches'), {rotationZ: '+=' + .01});
      TweenMax.set(this.$wrapW, { z: 0 });

      this.defl = this.$W.get(0).getBoundingClientRect();
      var pos = this.$wrapW.get(0).getBoundingClientRect();

      // origin change
      TweenMax.set(this.$target, { 'transform-origin': '50% 100%' });

      // 最初のmove
      this.rotates = [];
      this.pos = [];
      this.cnt = 0;
      this.cntR = 0;
      this.cntPos = 1;
      this.maxcnt = 2;

      var obj = { x: 0, y: 0 };
      this.pos.push(obj);
      // this.rotates.push(0);

      // this.save(obj);
      this.ready();
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'ready',
    value: function ready() {
      var _this2 = this;

      if ($('body').hasClass('isIE')) {

        this.$W.addClass('itemWrap');
        this.$W.addClass('rotate');
        this.$W.css('opacity', 1);
      } else {

        var tl = new TimelineMax();

        // log(r, d);

        tl.add(function () {

          _this2.rotateDirP_reverse();
        }, 0.0).add(function () {

          _this2.$W.addClass('itemWrap');
          _this2.defl = _this2.$W.get(0).getBoundingClientRect();
        }, 0.3).add(function () {

          // TweenMax.set(this.$W, {rotationZ: '-=' + 233});
          _this2.$W.addClass('rotate');

          _this2.rotateDirP();
        }, 0.6);
      }
    }
  }, {
    key: 'timeline',
    value: function timeline() {
      var _this3 = this;

      if ($('body').hasClass('isIE')) return;

      var tl = new TimelineMax();

      var r = Math.floor(Math.random() * 3);
      var d = r * 0.25;

      // log(r, d);

      tl.add(function () {

        // this.$W.css('opacity', 1);
        var tls = new TimelineMax();
        tls.to(_this3.$W, 1.0, {
          opacity: 1,
          ease: Power2.easeInOut
        }, 0.0);

        _this3.cntR = 0;
        _this3.cntPos = 0;

        _this3.rotateDirPGyaku();
      }, 0.0 + d);
    }
  }, {
    key: 'timeline_r',
    value: function timeline_r() {
      var _this4 = this;

      if ($('body').hasClass('isIE')) return;

      var tl = new TimelineMax();

      var r = Math.floor(Math.random() * 3);
      var d = r * 0.25;

      // log(r, d);

      tl.add(function () {

        var tl = new TimelineMax();
        tl.to(_this4.$W, .25, {
          // .to(this.$W, 1.0, {
          opacity: 1,
          ease: Power2.easeInOut
        }, 0.25);

        _this4.cntR = 0;
        _this4.cntPos = 1;

        _this4.rotateDirP(0.5, true);
      }, 0.0 + d);
    }
  }, {
    key: 'rotateDirP',
    value: function rotateDirP() {
      var _this5 = this;

      var dur = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .01;
      var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


      if (this.maxcnt < this.cntR) {
        return;
      }

      var deg = this.rotates[this.rotates.length - 1 - this.cntR];
      this.cntR++;
      var deg2 = this.rotates[this.rotates.length - 1 - this.cntR];

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        TweenMax.set(_this5.$W, { rotationZ: '+=' + .1 });

        // pos
        var pos = _this5.pos[_this5.pos.length - 1 - _this5.cntPos];
        _this5.cntPos++;
        TweenMax.set(_this5.$wrap, { x: pos.x, y: pos.y, z: 1 });
        // log(this.cntPos, pos, this.pos);

        // origin change
        TweenMax.set(_this5.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)

      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)
      // save
      .add(function () {
        if (flag) _this5.save();
      }, dur * .5)

      // // rotate後の位置を取得
      .add(function () {

        // pos
        var pos = _this5.pos[_this5.pos.length - 1 - _this5.cntPos];
        _this5.cntPos++;
        TweenMax.set(_this5.$wrap, { x: pos.x, y: pos.y, z: 1 });

        // origin change
        TweenMax.set(_this5.$target, { 'transform-origin': '50% 100%' });

        // end
        if (_this5.maxcnt < _this5.cntR) {
          TweenMax.set(_this5.$target, { rotationZ: 0 });
          return;
        }
      }, dur)

      // rotate
      .set(this.$target, {
        rotationZ: deg2
      }, dur)
      // // save
      .add(function () {
        if (flag) _this5.save();
      }, dur)

      // // // repeat
      .add(function () {
        _this5.rotateDirP(dur, flag);
      }, dur);
    }
  }, {
    key: 'rotateDirPGyaku',
    value: function rotateDirPGyaku() {
      var _this6 = this;

      if (this.maxcnt - 1 < this.cntR) {

        // op
        var tl = new TimelineMax();
        tl.to(this.$W, 0.6, {
          opacity: 0,
          ease: Power2.easeInOut
        }, 0.0);

        return;
      }

      var dur = .5;
      var deg = this.rotates[this.cntR];
      var deg2 = this.rotates[this.cntR];
      this.cntR++;

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        // TweenMax.set(this.$W, {rotationZ: '-=' + 3.5});
        TweenMax.set(_this6.$W, { rotationZ: '-=' + .1 });

        // pos
        _this6.cntPos++;
        var pos = _this6.pos[_this6.cntPos];
        // log(this.cntPos, pos, this.pos);
        TweenMax.set(_this6.$wrap, { x: pos.x, y: pos.y, z: 1 });

        // origin change
        TweenMax.set(_this6.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)
      // save
      .add(function () {
        _this6.save();
      }, dur * .5).add(function () {

        // pos
        _this6.cntPos++;
        var pos = _this6.pos[_this6.cntPos];
        TweenMax.set(_this6.$wrap, { x: pos.x, y: pos.y, z: 1 });

        // // origin change
        TweenMax.set(_this6.$target, { 'transform-origin': '50% 100%' });
      }, dur).set(this.$target, {
        rotationZ: deg
      }, dur)
      // save
      .add(function () {
        _this6.save();
      }, dur)

      // // // // // repeat
      .add(function () {
        _this6.rotateDirPGyaku();
      }, dur);
    }
  }, {
    key: 'rotateDirP_reverse',
    value: function rotateDirP_reverse() {
      var _this7 = this;

      if (this.maxcnt < this.cnt) {
        return;
      }
      this.cnt++;

      var dur = 0.01;
      // var deg = Math.floor(10 + (Math.random() - 0.5) * 20);
      var deg = Math.floor(15 + (Math.random() - 0.5) * 20);
      // var deg = 30;
      this.rotates.push(deg);

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        // TweenMax.set(this.$wrapW, {rotationZ: '+=' + 13.5});
        // TweenMax.set(this.$ashiato, {rotationZ: '+=' + .5});

        // pos
        var l = _this7.$target.get(0).getBoundingClientRect();
        var pos = _this7.$wrapW.get(0).getBoundingClientRect();
        var obj = { x: l.left, y: l.top };
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = { x: obj.x + l.width - _this7.defl.width / 2, y: obj.y };
        TweenMax.set(_this7.$wrap, { x: obj.x, y: obj.y });
        _this7.pos.push(obj);

        // origin change
        TweenMax.set(_this7.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)
      // save
      // .add(()=>{this.save();}, dur * 0.5)

      .add(function () {

        // pos
        var l = _this7.$target.get(0).getBoundingClientRect();
        var pos = _this7.$wrapW.get(0).getBoundingClientRect();
        var obj = { x: l.left, y: l.top };
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = { x: obj.x + l.width - _this7.defl.width / 2, y: obj.y };
        TweenMax.set(_this7.$wrap, { x: obj.x, y: obj.y });
        _this7.pos.push(obj);

        // // origin change
        TweenMax.set(_this7.$target, { 'transform-origin': '50% 100%' });
      }, dur).set(this.$target, {
        rotationZ: deg
      }, dur)
      // save
      // .add(()=>{this.save();}, dur)


      // // // repeat
      .add(function () {
        _this7.rotateDirP_reverse();
      }, dur);
    }
  }, {
    key: 'save',
    value: function save() {

      var $c = this.$W.clone();
      var pos = this.$W.get(0).getBoundingClientRect();
      TweenMax.set($c, { opacity: .5, 'margin-left': '0px', backgroundColor: 'none' });
      // TweenMax.set($c, {opacity: .5, 'margin-left': '0px', backgroundColor: 'rgba(255,0,0,.5)'});
      TweenMax.set($c, { left: this.defl.left, top: this.defl.top, 'position': 'absolute' });
      // $('.ashiato').append($c);
      // $c.wrap('<div class="itemWrapA"></div>')

      // // op
      // var tl = new TimelineMax();
      // tl
      //   .to($c, 0.5, {
      //     opacity: 0,
      //     ease: Power2.easeInOut,
      //     onComplete: ()=>{
      //       $c.parent().remove();
      //     }
      //   }, 0.1)
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Match_dist/Controller.es6":
/*!******************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Match_dist/Controller.es6 ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _index = __webpack_require__(/*! Util/Math/index.es6 */ "../../src/js/src/Util/Math/index.es6");

var m = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($w) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $w;

    _this.isFirst = true;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {

      this.isUEv = true;

      this.x = 0;
      this.y = 0;
      this.wrapx = 0;
      this.wrapy = 0;

      this.prex = 0;

      this.ease = 0.12;
      // this.radius = 150;
      this.radius = 40;

      this.v = 0;
      this.isEnter = false;

      this.isLock = false;
      this.isLock2 = false;

      // this.defx = this.$wrap.offset().left + this.$wrap.width() / 2;
      // this.defy = this.$wrap.offset().top + this.$wrap.height() / 2 - gb.s.st;
    }
  }, {
    key: 'update',
    value: function update() {

      // var basex = this.$wrap.offset().left + this.$wrap.width() / 2;
      // var basey = this.$wrap.offset().top + this.$wrap.height() / 2 - gb.s.st;
      var basex = this.$wrap.get(0).getBoundingClientRect().left + this.$wrap.get(0).getBoundingClientRect().width / 2;
      var basey = this.$wrap.get(0).getBoundingClientRect().top + this.$wrap.get(0).getBoundingClientRect().height / 2;

      var mx = gb.m.x;
      var my = gb.m.y;

      var dist = m.dist({ x: mx, y: my }, { x: basex, y: basey });

      // log(mx, my, dist);

      if (dist < this.radius) {

        var theta = Math.atan2(basey - my, basex - mx);
        // var d = 3000 / dist;
        var d = 100;

        // log(m.degree(theta));
        // log(dist, mx, my, basex, basey);

        var x = 0;
        var y = 0;

        // spread
        x += d * Math.cos(theta);
        y += d * Math.sin(theta);

        // log(x, y);
        // log(basex, basey);

        if (this.isFirst) {
          this.isFirst = false;
          TweenMax.set(this.$wrap.parent(), { rotationZ: 0 });
        }

        if (!this.isLock2) this.move(x, y);

        if (!this.isLock) this.rotate();
      } else {}
    }
  }, {
    key: 'move',
    value: function move(x, y) {
      var _this2 = this;

      this.isLock2 = true;
      var tl = new TimelineMax();
      tl.to(this.$wrap, 0.2, {
        x: '+=' + x,
        y: '+=' + y,
        ease: Power3.easeOut,
        onComplete: function onComplete() {
          _this2.isLock2 = false;
        }
      });
    }
  }, {
    key: 'rotate',
    value: function rotate() {
      var _this3 = this;

      this.isLock = true;
      var tl = new TimelineMax();
      tl.to(this.$wrap, 0.2, {
        rotationZ: (Math.random() - 0.5) * 180,
        ease: Power3.easeOut,
        onComplete: function onComplete() {
          _this3.isLock = false;
        }
      });
    }
  }, {
    key: 'timeline',
    value: function timeline() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      gb.m.removeEvents();
      gb.m.setEvents();
      gb.m.x = 0;
      gb.m.y = 0;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);

      // gb.sl.add('Play', this.onScroll.bind(this));   

      // this.$target.on('mouseenter', this.onEnter.bind(this));
      // this.$target.on('mouseleave', this.onLeave.bind(this));
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/Menu/Controller.es6":
/*!************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Menu/Controller.es6 ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Render = __webpack_require__(/*! ./Render.es6 */ "../../src/js/src/View/UI/Menu/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller() {
    var $toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.toggle_modal');
    var $open = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('.open_modal');
    var $close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $('.close_modal');
    var $contents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $('.modal_contents');

    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    _this.name = 'Modal';

    _this.$toggle = $toggle;
    _this.$open = $open;
    _this.$close = $close;
    _this.$contents = $contents;

    _this.isOpen = false;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      this.r = new _Render2.default(this.$contents);
    }
  }, {
    key: 'toggle',
    value: function toggle() {

      if (this.isOpen) {

        this.close();
      } else {

        this.open();
      };

      // this.isOpen = !this.isOpen;
    }
  }, {
    key: 'open',
    value: function open() {

      this.r.show();

      this.$toggle.addClass('active');

      this.isOpen = true;
    }
  }, {
    key: 'close',
    value: function close() {

      this.r.hide();

      this.$toggle.removeClass('active');

      this.isOpen = false;
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      log('set');

      // this.$contents.on('click', function(e){e.stopPropagation();});
      // this.$open.on('click', function(e){

      //   log(11);

      //   self.open.call(self, this)
      // });
      // this.$close.on('click', this.close.bind(this));
      this.$toggle.on('click', this.toggle.bind(this));
    }
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Menu/Render.es6":
/*!********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Menu/Render.es6 ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderBase2 = __webpack_require__(/*! ./RenderBase.es6 */ "../../src/js/src/View/UI/Menu/RenderBase.es6");

var _RenderBase3 = _interopRequireDefault(_RenderBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  RenderBase
//
//--------------------------------------------------

var Render = function (_RenderBase) {
  _inherits(Render, _RenderBase);

  function Render($target) {
    _classCallCheck(this, Render);

    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));

    _this.$target = $target;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Render;
}(_RenderBase3.default);

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/UI/Menu/RenderBase.es6":
/*!************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Menu/RenderBase.es6 ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  UIBase
//
// ------------------------------------------------------------

var UIBase = function (_Base) {
  _inherits(UIBase, _Base);

  function UIBase() {
    _classCallCheck(this, UIBase);

    var _this = _possibleConstructorReturn(this, (UIBase.__proto__ || Object.getPrototypeOf(UIBase)).call(this));

    _this.$target = $('.target');

    return _this;
  }

  _createClass(UIBase, [{
    key: 'show',
    value: function show() {

      // this.$target.show();
      this.$target.css('display', 'flex');
    }
  }, {
    key: 'hide',
    value: function hide() {

      this.$target.hide();
    }
  }]);

  return UIBase;
}(_Base3.default);

exports.default = UIBase;

/***/ }),

/***/ "../../src/js/src/View/UI/OpModal/Controller.es6":
/*!***************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/OpModal/Controller.es6 ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Render = __webpack_require__(/*! ./Render.es6 */ "../../src/js/src/View/UI/OpModal/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller() {
    var $toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.toggle_modal');
    var $open = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('.open_modal');
    var $close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $('.close_modal');
    var $contents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $('.modal_contents');

    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    _this.name = 'Modal';

    // this.$toggle = $toggle;
    _this.$open = $open;
    _this.$close = $close;
    _this.$contents = $contents;

    _this.isOpen = false;
    _this.isREv = true;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      this.r = new _Render2.default(this.$contents);
    }
  }, {
    key: 'toggle',
    value: function toggle() {

      if (this.isOpen) {

        this.close();
      } else {

        this.open();
      };

      this.isOpen = !this.isOpen;
    }
  }, {
    key: 'open',
    value: function open() {

      this.r.show();

      this.isOpen = true;
    }
  }, {
    key: 'close',
    value: function close() {

      this.r.hide();

      this.isOpen = false;
    }
  }, {
    key: 'onResize',
    value: function onResize() {

      this.r.l.onResize();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);

      this.$contents.find('.videoWrap').add(this.$contents.find('.boxWrap .box')).on('click', function (e) {
        e.stopPropagation();
      });
      this.$open.on('click', function (e) {

        self.open.call(self, this);
      });
      this.$close.on('click', this.close.bind(this));
      this.$contents.on('click', this.close.bind(this));
    }
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/OpModal/Render.es6":
/*!***********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/OpModal/Render.es6 ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderBase2 = __webpack_require__(/*! ./RenderBase.es6 */ "../../src/js/src/View/UI/OpModal/RenderBase.es6");

var _RenderBase3 = _interopRequireDefault(_RenderBase2);

var _Controller = __webpack_require__(/*! ../LineBox/Controller.es6 */ "../../src/js/src/View/UI/LineBox/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  RenderBase
//
//--------------------------------------------------

var Render = function (_RenderBase) {
  _inherits(Render, _RenderBase);

  function Render($target) {
    _classCallCheck(this, Render);

    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));

    _this.$target = $target;

    _this.setup();
    _this.setEvents();

    _this.isFirst = true;
    _this.isLock = true;

    return _this;
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {

      $('html').addClass('is-hidden');

      this.$t = $('.lineBoxWrapVideo');
      var num = this.$t.data('color');
      this.l = new _Controller2.default(this.$t, num);

      this.$target.find('.boxWrap .box').eq(1).find('.bg').addClass('inactive');
      $('.movieBox').eq(1).find('.bg').addClass('inactive');
    }
  }, {
    key: 'show',
    value: function show() {

      this.$target.show();

      var tl = new TimelineMax();

      tl.to(this.$target, 0.6, {
        opacity: 1,
        ease: Expo.easeOut
      }).to(this.$videoWrap, 1.5, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, .0).to(this.$skip, 1.5, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, .15).to(this.$box, 1.5, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, .15);

      $('html').addClass('is-hidden');
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this2 = this;

      if (this.isLock) return;

      var tl = new TimelineMax();

      tl.to(this.$target, 1.8, {
        opacity: 0,
        ease: Power2.easeInOut,
        onComplete: function onComplete() {
          _this2.$target.hide();
        },
        onStart: function onStart() {

          TweenMax.set($('.block01 .titMtach'), { opacity: 1 });
        }
      }).to(this.$videoWrap, 1.2, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut
      }, .0).to(this.$skip, 1.2, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut
      }, .0).to(this.$box, 1.2, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut
      }, .0).add(function () {

        if (_this2.isFirst) {

          gb.uic.bgMathRun_r();

          // $(window).scrollTop(0);
          // $('#wrapper').scrollTop(0);


          if (!$('body').hasClass('isIE')) {
            if (gb.u.dv.isPC) gb.u.o.disableScroll($(window));else gb.u.o.notMove(true, $('#inner'));
          }
        }
      }, 0.0).add(function () {

        if (_this2.isFirst) {
          _this2.isFirst = false;
          $(window).trigger('OpStart');
          _this2.$target.css('background', 'rgba(255,255,255,.85)');
          _this2.$skip.find('.text').text('CLOSE');
        }
      }, 2.0);

      $('html').removeClass('is-hidden');
    }
  }, {
    key: 'first',
    value: function first() {
      var _this3 = this;

      this.$modal = $('#modal');
      this.$videoWrap = this.$modal.find('.videoWrap');
      this.$video = this.$modal.find('#video');
      this.$skip = this.$modal.find('.skip');
      this.$box = this.$modal.find('.boxWrap .box');
      TweenMax.set(this.$skip, { y: 10 });
      TweenMax.set(this.$box, { y: 10 });

      var tl = new TimelineMax({ delay: .5 });

      tl.add(function () {

        $('html').css('opacity', 1);
        gb.uic.bgMathRun();
      }, 1.0).add(function () {

        _this3.l.show(2.2, Expo.easeInOut);
      }, 2.0 + 0.0).to(this.$video, 1.8, {
        opacity: 1,
        ease: Power2.easeInOut
      }, 2.0 + 1.0).to(this.$skip, 1.8, {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut
      }, 2.0 + 1.2).add(function () {

        _this3.$box.each(function (index, el) {

          TweenMax.to($(el), 1.8, {
            opacity: 1,
            y: 0,
            delay: index * 0.2,
            ease: Power2.easeInOut
          });
        });
      }, 2.0 + 1.2).add(function () {

        _this3.isLock = false;

        TweenMax.to(_this3.$modal.find('#video'), 1.8, {
          opacity: 1,
          ease: Power2.easeInOut
        });
      }, 2.0 + 2.2);

      this.hLock = false;
      this.zR = 0;
      // this.$skip.find('.skipInner').on('mouseenter', this.onEnter.bind(this));
      // this.$skip.find('.skipInner').on('mouseleave', this.onLeave.bind(this));
    }
  }, {
    key: 'onEnter',
    value: function onEnter() {

      this.zR += 90;

      TweenMax.to(this.$skip.find('.img img'), 1.5, {
        rotationZ: this.zR,
        z: 0,
        ease: Expo.easeOut,
        onComplete: function onComplete() {}
      });
    }
  }, {
    key: 'onLeave',
    value: function onLeave() {

      this.zR += 90;

      TweenMax.to(this.$skip.find('.img img'), 1.5, {
        rotationZ: this.zR,
        z: 0,
        ease: Expo.easeOut,
        onComplete: function onComplete() {}
      });
    }
  }, {
    key: 'onHonpen',
    value: function onHonpen() {

      TweenMax.to($('#video'), 1.5, {
        opacity: 1,
        ease: Power2.easeInOut,
        onComplete: function onComplete() {
          $('#video').css('pointer-events', 'auto');
        }
      });
      TweenMax.to($('#video2'), 1.5, {
        opacity: 0,
        ease: Power2.easeInOut,
        onComplete: function onComplete() {
          $('#video2').css('pointer-events', 'none');
        }
      });
      TweenMax.to($('.cover2'), 1.5, {
        opacity: 0,
        ease: Power2.easeInOut
      });

      this.$target.find('.boxWrap .box .bg').removeClass('inactive');
      this.$target.find('.boxWrap .box').eq(1).find('.bg').addClass('inactive');
      $('.movieBox').find('.bg').removeClass('inactive');
      $('.movieBox').eq(1).find('.bg').addClass('inactive');

      gb.y2.p.player.pauseVideo();
    }
  }, {
    key: 'onYokoku',
    value: function onYokoku() {

      TweenMax.to($('#video'), 1.5, {
        opacity: 0,
        ease: Power2.easeInOut,
        onComplete: function onComplete() {
          $('#video').css('pointer-events', 'none');
        }
      });
      TweenMax.to($('#video2'), 1.5, {
        opacity: 1,
        ease: Power2.easeInOut,
        onComplete: function onComplete() {
          $('#video2').css('pointer-events', 'auto');
        }
      });
      TweenMax.to($('.cover2'), 1.5, {
        opacity: 1,
        ease: Power2.easeInOut
      });

      this.$target.find('.boxWrap .box .bg').removeClass('inactive');
      this.$target.find('.boxWrap .box').eq(0).find('.bg').addClass('inactive');
      $('.movieBox').find('.bg').removeClass('inactive');
      $('.movieBox').eq(0).find('.bg').addClass('inactive');

      gb.y1.p.player.pauseVideo();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // this.first();

      this.$target.find('.boxWrap .box').eq(0).on('click', this.onHonpen.bind(this));
      this.$target.find('.boxWrap .box').eq(1).on('click', this.onYokoku.bind(this));
      $('.movieBox').eq(0).on('click', this.onHonpen.bind(this));
      $('.movieBox').eq(1).on('click', this.onYokoku.bind(this));

      if (gb.u.dv.isIe()) {

        $('html').css('opacity', 1);

        this.first();
      } else {

        $(window).one('youtubeReady', this.first.bind(this));
      }
    }
  }]);

  return Render;
}(_RenderBase3.default);

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/UI/OpModal/RenderBase.es6":
/*!***************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/OpModal/RenderBase.es6 ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  UIBase
//
// ------------------------------------------------------------

var UIBase = function (_Base) {
  _inherits(UIBase, _Base);

  function UIBase() {
    _classCallCheck(this, UIBase);

    var _this = _possibleConstructorReturn(this, (UIBase.__proto__ || Object.getPrototypeOf(UIBase)).call(this));

    _this.$target = $('.target');

    return _this;
  }

  _createClass(UIBase, [{
    key: 'show',
    value: function show() {

      this.$target.show();
    }
  }, {
    key: 'hide',
    value: function hide() {

      this.$target.hide();
    }
  }]);

  return UIBase;
}(_Base3.default);

exports.default = UIBase;

/***/ }),

/***/ "../../src/js/src/View/UI/Play/Controller.es6":
/*!************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Play/Controller.es6 ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _index = __webpack_require__(/*! Util/Math/index.es6 */ "../../src/js/src/Util/Math/index.es6");

var m = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom() {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $('.videoWrap');
    _this.$target = _this.$wrap.find('.play');
    _this.$scale = _this.$target.find('.playScale');

    if (gb.r.w <= 768) return _possibleConstructorReturn(_this);

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {

      // this.isUEv = true;

      this.x = 0;
      this.y = 0;
      this.wrapx = 0;
      this.wrapy = 0;

      this.prex = 0;

      this.ease = 0.12;
      this.radius = 150;

      this.v = 0;
      this.isEnter = false;
    }
  }, {
    key: 'update',
    value: function update() {

      var basex = this.$target.offset().left + this.$target.width() / 2;
      var basey = this.$target.offset().top + this.$target.height() / 2 - gb.s.st;

      var mx = gb.m.x;
      var my = gb.m.y;

      var dist = m.dist({ x: mx, y: my }, { x: basex, y: basey });

      // log(dist, mx, my, basex, basey);

      // if (dist < this.$wrap.height() / 4 * 3) {
      if (dist < this.radius) {

        var tarx = (mx - basex) * 0.2;
        var tary = (my - basey) * 0.2;
      } else {

        var tarx = 0;
        var tary = 0;
      }

      // this.wrapx += (tarx - this.wrapx) * 0.08;
      // this.wrapy += (tary - this.wrapy) * 0.08;
      this.x += (tarx - this.x) * this.ease;
      this.y += (tary - this.y) * this.ease;

      this.dis = Math.abs(tarx - this.x);
      // log(this.dis)
    }
  }, {
    key: 'draw',
    value: function draw() {

      if (this.dis < .1) return;

      // TweenMax.set(this.$wrap, {x: this.wrapx, y: this.wrapy, z: 0});
      TweenMax.set(this.$target, { x: this.x, y: this.y, z: 0 });
    }
  }, {
    key: 'onEnter',
    value: function onEnter() {
      var _this2 = this;

      this.isEnter = true;
      if (this.v != 0) return;

      this.tlEnter = new TimelineMax({ repeat: -1, repeatDelay: .1 });
      this.tlEnter.set(this.$scale, { scale: 1, opacity: 1 }).to(this.$scale, 1.2, {
        scale: 1.2,
        opacity: 0,
        ease: Power2.easeOut,
        onUpdate: function onUpdate() {

          _this2.v = _this2.tlEnter.progress().toFixed(2);

          if (!_this2.isEnter && _this2.v >= 0.99) {
            if (_this2.tlEnter) _this2.tlEnter.kill();
            TweenMax.killTweensOf(_this2.$scale);
            _this2.v = 0;
          }
        }
      });
    }
  }, {
    key: 'onLeave',
    value: function onLeave() {

      this.isEnter = false;
    }
  }, {
    key: 'timeline',
    value: function timeline() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);

      // gb.sl.add('Play', this.onScroll.bind(this));   

      this.$target.on('mouseenter', this.onEnter.bind(this));
      this.$target.on('mouseleave', this.onLeave.bind(this));
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Controller.es6":
/*!******************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Controller.es6 ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Controller = __webpack_require__(/*! ./Sec01/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Sec01/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

var _Controller3 = __webpack_require__(/*! ./Sec02/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Sec02/Controller.es6");

var _Controller4 = _interopRequireDefault(_Controller3);

var _Controller5 = __webpack_require__(/*! ./Sec03/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Sec03/Controller.es6");

var _Controller6 = _interopRequireDefault(_Controller5);

var _Controller7 = __webpack_require__(/*! ./Sec04/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Sec04/Controller.es6");

var _Controller8 = _interopRequireDefault(_Controller7);

var _Controller9 = __webpack_require__(/*! ./Sec05/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Sec05/Controller.es6");

var _Controller10 = _interopRequireDefault(_Controller9);

var _Controller11 = __webpack_require__(/*! ./Sec06/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Sec06/Controller.es6");

var _Controller12 = _interopRequireDefault(_Controller11);

var _Controller13 = __webpack_require__(/*! ./Match/Controller.es6 */ "../../src/js/src/View/UI/SectionDir/Match/Controller.es6");

var _Controller14 = _interopRequireDefault(_Controller13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  UIController
//
//--------------------------------------------------

// ui


var UIController = function (_Base) {
  _inherits(UIController, _Base);

  function UIController() {
    _classCallCheck(this, UIController);

    var _this = _possibleConstructorReturn(this, (UIController.__proto__ || Object.getPrototypeOf(UIController)).call(this));

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(UIController, [{
    key: 'setup',
    value: function setup() {

      if (!$('body').hasClass('isIE')) {

        this.Sec01 = new _Controller2.default($('.block02'));
        this.Sec02 = new _Controller4.default($('.block03'));
        this.Sec03 = new _Controller6.default($('.block04'));
        this.Sec04 = new _Controller8.default($('.block05'));
        this.Sec05 = new _Controller10.default($('.block06'));
        this.Sec06 = new _Controller12.default($('.block07'));
        // this.Match = new Match();
      }

      $('.matches.notMv .itemW').each(function (index, el) {

        // if (index>0) return;
        // if (index!==1) return;

        var m = new _Controller14.default($(el), index);
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'timeline',
    value: function timeline() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      _get(UIController.prototype.__proto__ || Object.getPrototypeOf(UIController.prototype), 'setEvents', this).call(this);
    }
  }]);

  return UIController;
}(_Base3.default);

exports.default = UIController;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Match/Controller.es6":
/*!************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Match/Controller.es6 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/SectionDir/Match/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// import * as a from 'Util/Array/index.es6';

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($wrap, index) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$W = $wrap;
    _this.$wrapW = $wrap.find('.co');
    _this.$wrap = $wrap.find('.item');
    _this.$target = _this.$wrap.find('.itemIn');
    _this.index = index;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      // 最初に座標を合わせておく
      TweenMax.set(this.$wrapW, { z: 0 });

      this.defl = this.$W.get(0).getBoundingClientRect();
      var pos = this.$wrapW.get(0).getBoundingClientRect();

      // origin change
      TweenMax.set(this.$target, { 'transform-origin': '50% 100%' });

      // 最初のmove
      this.rotates = [];
      this.pos = [];
      this.cnt = 0;
      this.cntR = 0;
      this.cntPos = 1;
      this.maxcnt = 1;

      var obj = { x: 0, y: 0 };
      this.pos.push(obj);

      this.ready();

      if (!$('body').hasClass('isIE')) {

        // scroll dir
        this.adjustH = 70;
        var $t = this.$W;
        var targetST = $t.offset().top - gb.r.h + this.adjustH;
        var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'secMatch' + this.index);
        t.$t = this.$W;
        t.cb = function () {

          _this2.timeline_r();

          t.removeEvents();
        };
      }
    }
  }, {
    key: 'ready',
    value: function ready() {
      var _this3 = this;

      if ($('body').hasClass('isIE')) {

        this.$W.addClass('itemWrap');
        this.$W.addClass('rotate');
        this.$W.css('opacity', 1);
      } else {

        var tl = new TimelineMax();

        tl.add(function () {

          _this3.rotateDirP_reverse();
        }, 0.0).add(function () {

          _this3.$W.addClass('itemWrap');

          _this3.defl = _this3.$W.get(0).getBoundingClientRect();
        }, 0.5).add(function () {

          _this3.$W.addClass('rotate');

          _this3.rotateDirP();
        }, 1.0);
      }
    }
  }, {
    key: 'timeline',
    value: function timeline() {
      var _this4 = this;

      var tl = new TimelineMax();

      var r = Math.floor(Math.random() * 3);
      var d = r * 0.25;

      // log(r, d);

      tl.add(function () {

        // this.$W.css('opacity', 1);
        var tls = new TimelineMax();
        tls.to(_this4.$W, 1.0, {
          opacity: 1,
          ease: Power2.easeInOut
        }, 0.0);

        _this4.cntR = 0;
        _this4.cntPos = 0;

        _this4.rotateDirPGyaku();
      }, 0.0 + d);
    }
  }, {
    key: 'timeline_r',
    value: function timeline_r() {
      var _this5 = this;

      var tl = new TimelineMax();

      var r = Math.floor(Math.random() * 3);
      var d = r * 0.25;

      // log(r, d);

      tl.add(function () {

        var tl = new TimelineMax();
        tl.to(_this5.$W, .25, {
          // .to(this.$W, 1.0, {
          opacity: 1,
          ease: Power2.easeInOut
        }, 0.25);

        _this5.cntR = 0;
        _this5.cntPos = 1;

        _this5.rotateDirP(0.5, true);
      }, 0.0 + d);
    }
  }, {
    key: 'rotateDirP',
    value: function rotateDirP() {
      var _this6 = this;

      var dur = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .01;
      var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


      if (this.maxcnt < this.cntR) {
        return;
      }

      var deg = this.rotates[this.rotates.length - 1 - this.cntR];
      this.cntR++;
      var deg2 = this.rotates[this.rotates.length - 1 - this.cntR];

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        TweenMax.set(_this6.$W, { rotationZ: '+=' + .1 });

        // pos
        var pos = _this6.pos[_this6.pos.length - 1 - _this6.cntPos];
        _this6.cntPos++;
        TweenMax.set(_this6.$wrap, { x: pos.x, y: pos.y });

        // origin change
        TweenMax.set(_this6.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)

      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)
      // save
      // .add(()=>{if(flag) this.save();}, dur * .5)

      // // rotate後の位置を取得
      .add(function () {

        // pos
        var pos = _this6.pos[_this6.pos.length - 1 - _this6.cntPos];
        _this6.cntPos++;
        TweenMax.set(_this6.$wrap, { x: pos.x, y: pos.y });

        // origin change
        TweenMax.set(_this6.$target, { 'transform-origin': '50% 100%' });

        // end
        if (_this6.maxcnt < _this6.cntR) {
          TweenMax.set(_this6.$target, { rotationZ: 0 });
          return;
        }
      }, dur)

      // rotate
      .set(this.$target, {
        rotationZ: deg2
      }, dur)
      // // save
      // .add(()=>{if(flag) this.save();}, dur)

      // // // repeat
      .add(function () {
        _this6.rotateDirP(dur, flag);
      }, dur);
    }
  }, {
    key: 'rotateDirPGyaku',
    value: function rotateDirPGyaku() {
      var _this7 = this;

      if (this.maxcnt < this.cntR) {

        // op
        var tl = new TimelineMax();
        tl.to(this.$W, 0.6, {
          opacity: 0,
          ease: Power2.easeInOut
        }, 0.0);

        return;
      }

      var dur = .5;
      var deg = this.rotates[this.cntR];
      var deg2 = this.rotates[this.cntR];
      this.cntR++;

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        // TweenMax.set(this.$W, {rotationZ: '-=' + 3.5});
        TweenMax.set(_this7.$W, { rotationZ: '-=' + .1 });

        // pos
        _this7.cntPos++;
        var pos = _this7.pos[_this7.cntPos];
        TweenMax.set(_this7.$wrap, { x: pos.x, y: pos.y });

        log(deg, _this7.rotates, _this7.cntR, _this7.pos, pos);

        // origin change
        TweenMax.set(_this7.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)
      // save
      // .add(()=>{this.save();}, dur * .5)

      .add(function () {

        // pos
        _this7.cntPos++;
        var pos = _this7.pos[_this7.cntPos];
        TweenMax.set(_this7.$wrap, { x: pos.x, y: pos.y });

        log(deg, _this7.rotates, _this7.cntR, _this7.pos, pos);

        // // origin change
        TweenMax.set(_this7.$target, { 'transform-origin': '50% 100%' });
      }, dur).set(this.$target, {
        rotationZ: deg
      }, dur)
      // save
      // .add(()=>{this.save();}, dur)

      // // // // // repeat
      .add(function () {
        _this7.rotateDirPGyaku();
      }, dur);
    }
  }, {
    key: 'rotateDirP_reverse',
    value: function rotateDirP_reverse() {
      var _this8 = this;

      if (this.maxcnt < this.cnt) {
        return;
      }
      this.cnt++;

      var dur = 0.01;
      // var deg = Math.floor(10 + (Math.random() - 0.5) * 20);
      var deg = Math.floor(15 + (Math.random() - 0.5) * 20);
      // var deg = 30;
      this.rotates.push(deg);

      var tl = new TimelineMax();

      tl.add(function () {

        // wrap rotate
        // TweenMax.set(this.$wrapW, {rotationZ: '+=' + 13.5});
        // TweenMax.set(this.$ashiato, {rotationZ: '+=' + .5});

        // pos
        var l = _this8.$target.get(0).getBoundingClientRect();
        var pos = _this8.$wrapW.get(0).getBoundingClientRect();
        var obj = { x: l.left, y: l.top };
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = { x: obj.x + l.width - _this8.defl.width / 2, y: obj.y };
        TweenMax.set(_this8.$wrap, { x: obj.x, y: obj.y });
        _this8.pos.push(obj);

        // origin change
        TweenMax.set(_this8.$target, { 'transform-origin': '50% 0%' });
      }, dur * 0.5)
      // }, dur * 3)
      // rotate
      .set(this.$target, {
        rotationZ: -deg
      }, dur * 0.5)
      // save
      // .add(()=>{this.save();}, dur * 0.5)

      .add(function () {

        // pos
        var l = _this8.$target.get(0).getBoundingClientRect();
        var pos = _this8.$wrapW.get(0).getBoundingClientRect();
        var obj = { x: l.left, y: l.top };
        obj.x -= pos.left;
        obj.y -= pos.top;
        obj = { x: obj.x + l.width - _this8.defl.width / 2, y: obj.y };
        TweenMax.set(_this8.$wrap, { x: obj.x, y: obj.y });
        _this8.pos.push(obj);

        // // origin change
        TweenMax.set(_this8.$target, { 'transform-origin': '50% 100%' });
      }, dur).set(this.$target, {
        rotationZ: deg
      }, dur)
      // save
      // .add(()=>{this.save();}, dur)


      // // // repeat
      .add(function () {
        _this8.rotateDirP_reverse();
      }, dur);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Match/Scroll.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Match/Scroll.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        // if (this.targetST>st && this.isLock) {
        //   this.isLock = false;

        //   this.cb02();

        // }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec01/Controller.es6":
/*!************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec01/Controller.es6 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/SectionDir/Sec01/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// import * as a from 'Util/Array/index.es6';

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($wrap) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $wrap;
    _this.$titWrap = $wrap.find('.titWrap');
    _this.$tit = $wrap.find('.titWrap .tit');
    _this.$text = $wrap.find('.titWrap .text');

    _this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      // ready
      TweenMax.set(this.$tit, { opacity: 0, x: 20 });
      TweenMax.set(this.$text, { opacity: 0, x: 20 });

      TweenMax.set(this.$box, { opacity: 0, y: 20 });
      // TweenMax.set(this.$box1, {opacity: 0, y: 20});
      // TweenMax.set(this.$box2, {opacity: 0, y: 20});

      // tit
      this.adjustH = 100;
      var $t = this.$titWrap;
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec01' + 0);
      s01.cb = function () {

        TweenMax.to(_this2.$tit, 3.0, {
          x: 0,
          opacity: 1,
          ease: Power4.easeOut
        });
        TweenMax.to(_this2.$text, 3.0, {
          x: 0,
          opacity: 1,
          delay: 0.2,
          ease: Power4.easeOut
        });

        s01.removeEvents();
      };

      // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box1;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec01'+1);
      // s02.cb = ()=>{

      //   TweenMax.to(this.$box1, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s02.removeEvents();

      // };

      // // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box2;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec01'+2);
      // s03.cb = ()=>{

      //   TweenMax.to(this.$box2, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s03.removeEvents();

      // };

      // scrollBox
      this.$box.each(function (index, el) {

        _this2.adjustH = 200;
        var $t = $(el);
        var targetST = $t.offset().top - gb.r.h + _this2.adjustH;
        var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec01_box' + index);
        t.$t = $(el);
        t.index = index;
        t.cb = function () {

          var de = 0;
          if (t.index == 5) de = .5;

          TweenMax.to(t.$t, 3.0, {
            y: 0,
            opacity: 1,
            delay: de,
            ease: Power4.easeOut
          });

          t.removeEvents();
        };
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec01/Scroll.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec01/Scroll.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        // if (this.targetST>st && this.isLock) {
        //   this.isLock = false;

        //   this.cb02();

        // }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec02/Controller.es6":
/*!************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec02/Controller.es6 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/SectionDir/Sec02/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// import * as a from 'Util/Array/index.es6';

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($wrap) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $wrap;
    _this.$titWrap = $wrap.find('.titWrap');
    _this.$tit = $wrap.find('.titWrap .tit');
    _this.$text = $wrap.find('.titWrap .text');

    _this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      // ready
      TweenMax.set(this.$tit, { opacity: 0, x: 20 });
      TweenMax.set(this.$text, { opacity: 0, x: 20 });

      TweenMax.set(this.$box, { opacity: 0, y: 20 });
      // TweenMax.set(this.$box1, {opacity: 0, y: 20});
      // TweenMax.set(this.$box2, {opacity: 0, y: 20});

      // tit
      this.adjustH = 100;
      var $t = this.$titWrap;
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec02' + 0);
      s01.cb = function () {

        TweenMax.to(_this2.$tit, 3.0, {
          x: 0,
          opacity: 1,
          ease: Power4.easeOut
        });
        TweenMax.to(_this2.$text, 3.0, {
          x: 0,
          opacity: 1,
          delay: 0.2,
          ease: Power4.easeOut
        });

        s01.removeEvents();
      };

      // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box1;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec02'+1);
      // s02.cb = ()=>{

      //   TweenMax.to(this.$box1, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s02.removeEvents();

      // };

      // // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box2;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec02'+2);
      // s03.cb = ()=>{

      //   TweenMax.to(this.$box2, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s03.removeEvents();

      // };

      // scrollBox
      this.$box.each(function (index, el) {

        _this2.adjustH = 200;
        var $t = $(el);
        var targetST = $t.offset().top - gb.r.h + _this2.adjustH;
        var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec02_box' + index);
        t.$t = $(el);
        t.index = index;
        t.cb = function () {

          var de = 0;
          // if (t.index==3) de = .5;

          TweenMax.to(t.$t, 3.0, {
            y: 0,
            opacity: 1,
            delay: de,
            ease: Power4.easeOut
          });

          t.removeEvents();
        };
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec02/Scroll.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec02/Scroll.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        // if (this.targetST>st && this.isLock) {
        //   this.isLock = false;

        //   this.cb02();

        // }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec03/Controller.es6":
/*!************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec03/Controller.es6 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/SectionDir/Sec03/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// import * as a from 'Util/Array/index.es6';

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($wrap) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $wrap;
    _this.$titWrap = $wrap.find('.titWrap');
    _this.$tit = $wrap.find('.titWrap .tit');
    _this.$text = $wrap.find('.titWrap .text');

    _this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      // ready
      TweenMax.set(this.$tit, { opacity: 0, x: 20 });
      TweenMax.set(this.$text, { opacity: 0, x: 20 });

      TweenMax.set(this.$box, { opacity: 0, y: 20 });
      // TweenMax.set(this.$box1, {opacity: 0, y: 20});
      // TweenMax.set(this.$box2, {opacity: 0, y: 20});

      // tit
      this.adjustH = 100;
      var $t = this.$titWrap;
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec03' + 0);
      s01.cb = function () {

        TweenMax.to(_this2.$tit, 3.0, {
          x: 0,
          opacity: 1,
          ease: Power4.easeOut
        });
        TweenMax.to(_this2.$text, 3.0, {
          x: 0,
          opacity: 1,
          delay: 0.2,
          ease: Power4.easeOut
        });

        s01.removeEvents();
      };

      // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box1;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec03'+1);
      // s02.cb = ()=>{

      //   TweenMax.to(this.$box1, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s02.removeEvents();

      // };

      // // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box2;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec03'+2);
      // s03.cb = ()=>{

      //   TweenMax.to(this.$box2, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s03.removeEvents();

      // };

      // scrollBox
      this.$box.each(function (index, el) {

        _this2.adjustH = 200;
        var $t = $(el);
        var targetST = $t.offset().top - gb.r.h + _this2.adjustH;
        var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec03_box' + index);
        t.$t = $(el);
        t.index = index;
        t.cb = function () {

          var de = 0;
          if (t.index == 1) de = .2;

          TweenMax.to(t.$t, 3.0, {
            y: 0,
            opacity: 1,
            delay: de,
            ease: Power4.easeOut
          });

          t.removeEvents();
        };
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec03/Scroll.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec03/Scroll.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        // if (this.targetST>st && this.isLock) {
        //   this.isLock = false;

        //   this.cb02();

        // }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec04/Controller.es6":
/*!************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec04/Controller.es6 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/SectionDir/Sec04/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// import * as a from 'Util/Array/index.es6';

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($wrap) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $wrap;
    _this.$titWrap = $wrap.find('.titWrap');
    _this.$tit = $wrap.find('.titWrap .tit');
    _this.$text = $wrap.find('.titWrap .text');

    _this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      // ready
      // TweenMax.set(this.$tit, {opacity: 0, x: 20});
      // TweenMax.set(this.$text, {opacity: 0, x: 20});

      TweenMax.set(this.$box, { opacity: 0, y: 20 });
      // TweenMax.set(this.$box1, {opacity: 0, y: 20});
      // TweenMax.set(this.$box2, {opacity: 0, y: 20});

      // tit
      // this.adjustH = 100;
      // var $t = this.$titWrap;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s01 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec04'+0);
      // s01.cb = ()=>{

      //   TweenMax.to(this.$tit, 3.0, {
      //     x: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })
      //   TweenMax.to(this.$text, 3.0, {
      //     x: 0,
      //     opacity: 1,
      //     delay: 0.2,
      //     ease: Power4.easeOut,
      //   })

      //   s01.removeEvents();

      // };

      // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box1;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec04'+1);
      // s02.cb = ()=>{

      //   TweenMax.to(this.$box1, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s02.removeEvents();

      // };

      // // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box2;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec04'+2);
      // s03.cb = ()=>{

      //   TweenMax.to(this.$box2, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s03.removeEvents();

      // };

      // scrollBox
      this.$box.each(function (index, el) {

        _this2.adjustH = 200;
        var $t = $(el);
        var targetST = $t.offset().top - gb.r.h + _this2.adjustH;
        var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec04_box' + index);
        t.$t = $(el);
        t.index = index;
        t.cb = function () {

          var de = 0;
          // if (t.index==3) de = .5;

          TweenMax.to(t.$t, 3.0, {
            y: 0,
            opacity: 1,
            delay: de,
            ease: Power4.easeOut
          });

          t.removeEvents();
        };
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec04/Scroll.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec04/Scroll.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        // if (this.targetST>st && this.isLock) {
        //   this.isLock = false;

        //   this.cb02();

        // }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec05/Controller.es6":
/*!************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec05/Controller.es6 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/SectionDir/Sec05/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// import * as a from 'Util/Array/index.es6';

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($wrap) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $wrap;
    _this.$titWrap = $wrap.find('.titWrap');
    _this.$tit = $wrap.find('.titWrap .tit');
    _this.$text = $wrap.find('.titWrap .text');

    _this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      // ready
      TweenMax.set(this.$tit, { opacity: 0, x: 20 });
      TweenMax.set(this.$text, { opacity: 0, x: 20 });

      TweenMax.set(this.$box, { opacity: 0, y: 20 });
      // TweenMax.set(this.$box1, {opacity: 0, y: 20});
      // TweenMax.set(this.$box2, {opacity: 0, y: 20});

      // tit
      this.adjustH = 100;
      var $t = this.$titWrap;
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec05' + 0);
      s01.cb = function () {

        TweenMax.to(_this2.$tit, 3.0, {
          x: 0,
          opacity: 1,
          ease: Power4.easeOut
        });
        TweenMax.to(_this2.$text, 3.0, {
          x: 0,
          opacity: 1,
          delay: 0.2,
          ease: Power4.easeOut
        });

        s01.removeEvents();
      };

      // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box1;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec05'+1);
      // s02.cb = ()=>{

      //   TweenMax.to(this.$box1, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s02.removeEvents();

      // };

      // // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box2;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec05'+2);
      // s03.cb = ()=>{

      //   TweenMax.to(this.$box2, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s03.removeEvents();

      // };

      // scrollBox
      this.$box.each(function (index, el) {

        _this2.adjustH = 200;
        var $t = $(el);
        var targetST = $t.offset().top - gb.r.h + _this2.adjustH;
        var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec05_box' + index);
        t.$t = $(el);
        t.index = index;
        t.cb = function () {

          var de = 0;
          if (t.index == 1) de = .2;
          if (t.index == 2) de = .2;

          TweenMax.to(t.$t, 3.0, {
            y: 0,
            opacity: 1,
            delay: de,
            ease: Power4.easeOut
          });

          t.removeEvents();
        };
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec05/Scroll.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec05/Scroll.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        // if (this.targetST>st && this.isLock) {
        //   this.isLock = false;

        //   this.cb02();

        // }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec06/Controller.es6":
/*!************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec06/Controller.es6 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/SectionDir/Sec06/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

// import * as a from 'Util/Array/index.es6';

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom($wrap) {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.$wrap = $wrap;
    _this.$titWrap1 = $wrap.find('.titWrap1');
    _this.$tit1 = _this.$titWrap1.find('.tit');
    _this.$text1 = _this.$titWrap1.find('.text');

    _this.$titWrap2 = $wrap.find('.titWrap2');
    _this.$tit2 = _this.$titWrap2.find('.tit');
    _this.$text2 = _this.$titWrap2.find('.text');

    _this.$box = $wrap.find('.scrollBox');
    // this.$box1 = $wrap.find('.scrollBox1');
    // this.$box2 = $wrap.find('.scrollBox2');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      // ready
      TweenMax.set(this.$tit1, { opacity: 0, x: 20 });
      TweenMax.set(this.$text1, { opacity: 0, x: 20 });
      TweenMax.set(this.$tit2, { opacity: 0, x: 20 });
      TweenMax.set(this.$text2, { opacity: 0, x: 20 });

      TweenMax.set(this.$box, { opacity: 0, y: 20 });
      // TweenMax.set(this.$box1, {opacity: 0, y: 20});
      // TweenMax.set(this.$box2, {opacity: 0, y: 20});

      // tit
      this.adjustH = 100;
      var $t = this.$titWrap1;
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var s01 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec06' + 0);
      s01.cb = function () {

        TweenMax.to(_this2.$tit1, 3.0, {
          x: 0,
          opacity: 1,
          ease: Power4.easeOut
        });
        TweenMax.to(_this2.$text1, 3.0, {
          x: 0,
          opacity: 1,
          delay: 0.2,
          ease: Power4.easeOut
        });

        s01.removeEvents();
      };

      // tit
      this.adjustH = 100;
      var $t = this.$titWrap2;
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var s02 = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec06' + 1);
      s02.cb = function () {

        TweenMax.to(_this2.$tit2, 3.0, {
          x: 0,
          opacity: 1,
          ease: Power4.easeOut
        });
        TweenMax.to(_this2.$text2, 3.0, {
          x: 0,
          opacity: 1,
          delay: 0.2,
          ease: Power4.easeOut
        });

        s02.removeEvents();
      };

      // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box1;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s02 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec06'+1);
      // s02.cb = ()=>{

      //   TweenMax.to(this.$box1, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s02.removeEvents();

      // };

      // // scrollBox
      // this.adjustH = 100;
      // var $t = this.$box2;
      // var targetST = $t.offset().top - gb.r.h + this.adjustH;
      // var s03 = new Scroll(targetST, true, ()=>{}, ()=>{}, 'sec06'+2);
      // s03.cb = ()=>{

      //   TweenMax.to(this.$box2, 3.0, {
      //     y: 0,
      //     opacity: 1,
      //     ease: Power4.easeOut,
      //   })

      //   s03.removeEvents();

      // };

      // scrollBox
      this.$box.each(function (index, el) {

        _this2.adjustH = 200;
        var $t = $(el);
        var targetST = $t.offset().top - gb.r.h + _this2.adjustH;
        var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec06_box' + index);
        t.$t = $(el);
        t.index = index;
        t.cb = function () {

          var de = 0;
          if (t.index == 1) de = .2;
          // if (t.index==6) de = .2;
          // if (t.index==7) de = .2;

          TweenMax.to(t.$t, 3.0, {
            y: 0,
            opacity: 1,
            delay: de,
            ease: Power4.easeOut,
            onComplete: function onComplete() {
              // TweenMax.set(t.$t, {clearProps: 'all'});
            }
          });

          t.removeEvents();
        };
      });
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/SectionDir/Sec06/Scroll.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/SectionDir/Sec06/Scroll.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        // if (this.targetST>st && this.isLock) {
        //   this.isLock = false;

        //   this.cb02();

        // }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/Slider/Controller.es6":
/*!**************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Slider/Controller.es6 ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Order = __webpack_require__(/*! ./Order.es6 */ "../../src/js/src/View/UI/Slider/Order.es6");

var _Order2 = _interopRequireDefault(_Order);

var _Render = __webpack_require__(/*! ./Render/Render.es6 */ "../../src/js/src/View/UI/Slider/Render/Render.es6");

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller($target) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    _this.setup();

    return _this;
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      this.name = 'Slider';

      this.$wrap = $('.slider');
      this.$arrow = this.$wrap.find('.arrow');

      this.o = new _Order2.default(3);
      this.r = new _Render2.default(this.$wrap, this.len);

      this.setEvents();
    }
  }, {
    key: 'next',
    value: function next() {

      log('next');

      this.r.next();
    }
  }, {
    key: 'prev',
    value: function prev() {

      this.r.prev();
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this2 = this;

      var self = this;

      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'setEvents', this).call(this);

      this.$arrow.eq(1).on('click' + '.' + this.name, function () {
        _this2.prev();
      });
      this.$arrow.eq(0).on('click' + '.' + this.name, function () {
        _this2.next();
      });
    }
  }]);

  return Controller;
}(_Base3.default);

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Slider/MouseDrag.es6":
/*!*************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Slider/MouseDrag.es6 ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  MouseDrag
//
// ------------------------------------------------------------

var MouseDrag = function () {
  function MouseDrag() {
    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');

    _classCallCheck(this, MouseDrag);

    // ---------------
    //  dom
    // ---------------
    this.$wrap = $wrap;

    // ---------------
    //  variable
    // ---------------

    // position
    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
    this.dis = 0;this.minDis = 50;
    this.premX = 0;

    // time
    this.sT = 0;this.eT = 0;this.minT = 300; //startTime,ellapsedTime,


    this.onStart = function () {};
    this.onMove = function () {};
    this.onEnd = function () {};
    this.onSwipe = function () {};

    this.setup();
    this.setEvents();
  }

  _createClass(MouseDrag, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {

      // time
      this.sT = new Date().getTime();
      // pos
      this.sX = e.pageX - $(window).scrollLeft();

      // コールバック
      this.onStart();
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {

      // pos
      this.mX = e.pageX - $(window).scrollLeft();
      // var dis = this.sX - this.mX;
      var dis = this.premX - this.mX;
      var sign = 1;
      if (dis < 0) sign = -1;

      this.onMove(sign, Math.abs(dis));

      this.premX = this.mX;
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {

      // コールバック
      this.onEnd();

      // time
      this.eT = new Date().getTime() - this.sT;
      var disT = this.sT - this.eT;
      // pos
      this.eX = e.pageX - $(window).scrollLeft();
      var dis = this.sX - this.eX;
      var sign = 1;
      if (dis < 0) sign = -1;

      // 最小時間より長かったら、処理
      // if(this.minT < this.eT) this.onSwipe();
      // 最小距離より長かったら、処理
      // log(dis, this.minDis);
      if (Math.abs(dis) > this.minDis) this.onSwipe(sign);
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      this.$wrap.off('mousedown.MouseDrag');
      $(window).off('mousemove.MouseDrag');
      $(window).off('mouseup.MouseDrag');
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      this.removeEvents();

      var self = this;

      this.$wrap.on('mousedown.MouseDrag', function (e) {
        _this.onTouchStart(e);
      });
      // this.$wrap.on('mousemove.MouseDrag', (e)=>{this.onTouchMove(e);});
      // this.$wrap.on('mouseup.MouseDrag', (e)=>{this.onTouchEnd(e);});
      $(window).on('mousemove.MouseDrag', function (e) {
        _this.onTouchMove(e);
      });
      $(window).on('mouseup.MouseDrag', function (e) {
        _this.onTouchEnd(e);
      });
    }
  }]);

  return MouseDrag;
}();

exports.default = MouseDrag;

/***/ }),

/***/ "../../src/js/src/View/UI/Slider/Order.es6":
/*!*********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Slider/Order.es6 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Order
//
//--------------------------------------------------

var Order = function () {
  function Order(len) {
    _classCallCheck(this, Order);

    this.current = 0;
    this.old = null;
    this.next = 1;
    this.prev = len - 1;
    this.len = len;

    this.isLoop = true;

    this.setup(len);
    this.setEvents();
  }

  _createClass(Order, [{
    key: 'setup',
    value: function setup(len) {

      this.current = 0;
      this.old = null;
      this.next = 1;
      this.prev = len - 1;
      this.len = len;
    }
  }, {
    key: 'go',
    value: function go() {

      // currentの計算
      this.calculateOrder('right');
    }
  }, {
    key: 'back',
    value: function back() {

      // currentの計算
      this.calculateOrder('left');
    }
  }, {
    key: 'calculateOrder',
    value: function calculateOrder(dir) {

      // ------------------------------------------------------------
      // 端で止める
      // ------------------------------------------------------------
      if (!this.isLoop) {
        if (dir == 'right') {

          this.current++;
          if (this.current > this.len - 1) this.current = this.len - 1;
          this.next = this.current + 1;
          this.prev = this.current - 1;
        } else {

          this.current--;
          if (this.current < 0) this.current = 0;
          this.next = this.current + 1;
          this.prev = this.current - 1;
        }
      }

      // ------------------------------------------------------------
      // ループ
      // ------------------------------------------------------------
      if (this.isLoop) {
        if (dir == 'right') {

          this.current++;

          if (this.current > this.len - 1) {

            this.current = 0;
            this.next = this.current + 1;
            this.prev = this.len - 1;
          } else {

            this.next = this.current + 1;
            this.prev = this.current - 1;
          }

          if (this.current == this.len - 1) {

            this.next = 0;
            this.prev = this.current - 1;
          }
        } else {

          this.current--;

          if (this.current < 0) {

            this.current = this.len - 1;
            this.next = 0;
            this.prev = this.current - 1;
          } else {

            this.next = this.current + 1;
            this.prev = this.current - 1;
          }

          if (this.current == 0) {

            this.next = 1;
            this.prev = this.len - 1;
          }
        }

        this.old = this.current;
      }
    }
  }, {
    key: 'setCur',
    value: function setCur(num) {

      this.current = num;
      this.next = this.current + 1;
      this.prev = this.current - 1;

      if (this.next > this.len - 1) this.next = 0;
      if (this.prev < 0) this.prev = this.len - 1;
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Order;
}();

exports.default = Order;

/***/ }),

/***/ "../../src/js/src/View/UI/Slider/Render/Render.es6":
/*!*****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Slider/Render/Render.es6 ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _MouseDrag = __webpack_require__(/*! ../MouseDrag.es6 */ "../../src/js/src/View/UI/Slider/MouseDrag.es6");

var _MouseDrag2 = _interopRequireDefault(_MouseDrag);

var _Swipe = __webpack_require__(/*! ../Swipe.es6 */ "../../src/js/src/View/UI/Slider/Swipe.es6");

var _Swipe2 = _interopRequireDefault(_Swipe);

var _index = __webpack_require__(/*! Util/Math/index.es6 */ "../../src/js/src/Util/Math/index.es6");

var m = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

var Render = function (_Base) {
  _inherits(Render, _Base);

  function Render($wrap, len) {
    _classCallCheck(this, Render);

    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));

    _this.name = 'Sliders';

    _this.$wrap = $wrap;
    _this.$inner = _this.$wrap.find('.textInIn');
    _this.$in = _this.$inner.find('.textYokoSc');
    _this.$barWrap = $wrap.find('.ui .bar');
    _this.$bar = _this.$barWrap.find('.barIn');
    _this.$ball = $wrap.find('.ui .ball');
    _this.$cur = $wrap.find('.ui .cur');
    _this.$total = $wrap.find('.ui .total');

    _this.$arrow = $wrap.find('.arrow');

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {

      this.isUEv = true;
      this.isREv = true;
      if (gb.r.w <= 750) this.isREv = false;

      this.w = this.$inner.width();

      this.wrapw = this.$inner.width();
      this.innerw = this.$in.width();
      this.dis = this.innerw - this.wrapw;
      this.barDis = this.innerw - gb.r.w;

      TweenMax.set(this.$wrap, { z: 0 });

      this.x = 0;
      this.prex = 0;
      this.tarx = 0;
      this.barTarx = 0;
      this.barx = 0;
      this.dragx = 0;
      this.disx = 0;
      this.cur = 1;
      this.total = Math.ceil(this.innerw / this.wrapw);
      this.$total.text(this.total);

      // bar
      this.$bar.css('width', Math.ceil(this.tarx / this.dis) * 100 + '%');
      this.barw = this.$barWrap.width();
      this.ballw = this.$ball.find('.ballIn').width();

      this.isDrag = false;
    }
  }, {
    key: 'update',
    value: function update() {

      // max
      // min
      // var tarx = this.tarx;
      if (this.tarx > this.dis) this.tarx = this.dis;
      if (this.tarx < 0) this.tarx = 0;
      this.x += (this.tarx - this.x) * 0.24;
      this.x = Number(m.float(this.x, 0));

      // log('this.x', this.x);

      var v = Number(m.float(this.x / this.dis));

      // draw
      // inner
      var x = this.x;
      x = Math.floor(x / this.dis * this.total) * this.w;

      // log(x, this.x, this.dis);
      if (gb.u.dv.isSP) TweenMax.set(this.$in, { marginRight: -x, z: 0 });else TweenMax.set(this.$in, { x: x, z: 0 });
      TweenMax.set(this.$bar, { width: v * 100 + '%', z: 0 });
      TweenMax.set(this.$ball, { x: -v * (this.barw - this.ballw) });

      // cur
      this.cur = Math.floor(v * (this.total - 1)) + 1;
      this.$cur.text(this.cur);

      this.prex = this.x;
    }
  }, {
    key: 'next',
    value: function next(cur, _next, prev) {

      TweenMax.to(this, 0.01, {
        tarx: '+=' + this.w,
        // barTarx: '+=' + - this.w * rate,
        ease: Expo.easeOut,
        // ease: Elastic.easeOut.config(1.9, 0.01),
        onComplete: function onComplete() {
          // this.isLock = false;
        }
      });

      // this.cur++;
      // if (this.cur>this.total) this.cur = this.total;
      // this.$cur.text(this.cur);
    }
  }, {
    key: 'prev',
    value: function prev(cur, next, _prev) {

      TweenMax.to(this, 0.01, {
        tarx: '+=' + -this.w,
        // barTarx: '+=' + this.w * rate,
        ease: Expo.easeOut,
        // ease: Elastic.easeOut.config(1.9, 0.01),
        onComplete: function onComplete() {
          // this.isLock = false;
        }
      });

      // this.cur--;
      // if (this.cur<1) this.cur = 1;
      // this.$cur.text(this.cur);
    }
  }, {
    key: 'onResize',
    value: function onResize() {

      this.w = this.$inner.width();

      this.wrapw = this.$inner.width();
      this.innerw = this.$in.width();
      this.dis = this.innerw - this.wrapw;
      this.barDis = this.innerw - gb.r.w;

      this.x = 0;
      this.prex = 0;
      this.tarx = 0;
      this.barTarx = 0;
      this.barx = 0;
      this.dragx = 0;
      this.disx = 0;
      this.cur = 1;
      this.total = Math.ceil(this.innerw / this.wrapw);
      this.$total.text(this.total);

      // bar
      this.$bar.css('width', Math.ceil(this.tarx / this.dis) * 100 + '%');
      this.barw = this.$barWrap.width();
      this.ballw = this.$ball.find('.ballIn').width();

      this.isDrag = false;
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this2 = this;

      var self = this;

      _get(Render.prototype.__proto__ || Object.getPrototypeOf(Render.prototype), 'setEvents', this).call(this);

      // swipe
      if (gb.u.dv.isSP) {
        this.s = new _Swipe2.default(this.$ball, 'slider1');
        this.sw = new _Swipe2.default(this.$wrap.find('.textWrap'), 'slider2');
      } else {
        this.s = new _MouseDrag2.default(this.$ball);
      }

      // swipe event
      this.s.onStart = function () {

        _this2.isDrag = true;
        // this.dragx = 0;

        $('body').addClass('no-select');
      };
      this.s.onMove = function (sign, val) {

        if (!_this2.isDrag) return;

        var rate = _this2.dis / _this2.barw;

        // if (!this.isOff) {
        // this.dragx = sign * val * 1.0 * rate;
        // }

        _this2.tarx += sign * val * 1.0 * rate;
      };
      this.s.onEnd = function () {

        _this2.isDrag = false;

        $('body').removeClass('no-select');
      };
      if (this.sw) {
        this.sw.onSwipe = function (sign) {

          if (sign > 0) _this2.prev();else _this2.next();
        };
      }
    }
  }]);

  return Render;
}(_Base3.default);

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/UI/Slider/Swipe.es6":
/*!*********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Slider/Swipe.es6 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Swipe
//
// ------------------------------------------------------------

var Swipe = function () {
  function Swipe() {
    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');
    var name = arguments[1];

    _classCallCheck(this, Swipe);

    // ---------------
    //  dom
    // ---------------
    this.$wrap = $wrap;
    this.name = name;

    // ---------------
    //  variable
    // ---------------

    // position
    this.sX = 0;this.mX = 0;this.eX = 0; //startX,moveX,endX
    this.dis = 0;this.minDis = 50;
    this.premX = 0;

    // time
    this.sT = 0;this.eT = 0;this.minT = 300; //startTime,ellapsedTime,


    this.onStart = function () {};
    this.onMove = function () {};
    this.onEnd = function () {};
    this.onSwipe = function () {};

    this.setup();
    this.setEvents();
  }

  _createClass(Swipe, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {

      // time
      this.sT = new Date().getTime();
      // pos
      this.sX = e.originalEvent.changedTouches[0].pageX;

      this.premX = this.sX;

      // コールバック
      this.onStart();
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {

      // pos
      this.mX = e.originalEvent.changedTouches[0].pageX;
      // var dis = this.sX - this.mX;
      var dis = this.premX - this.mX;
      var sign = 1;
      if (dis < 0) sign = -1;

      this.onMove(sign, Math.abs(dis));

      this.premX = this.mX;
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {

      // コールバック
      this.onEnd();

      // time
      this.eT = new Date().getTime() - this.sT;
      var disT = this.sT - this.eT;
      // pos
      this.eX = e.originalEvent.changedTouches[0].pageX;;
      var dis = this.sX - this.eX;
      var sign = 1;
      if (dis < 0) sign = -1;

      // 最小時間より長かったら、処理
      // if(this.minT < this.eT) this.onSwipe();
      // 最小距離より長かったら、処理
      // log(dis, this.minDis);
      if (Math.abs(dis) > this.minDis) this.onSwipe(sign);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      var self = this;

      this.$wrap.on('touchstart' + '.' + this.name, function (e) {
        _this.onTouchStart(e);
      });
      this.$wrap.on('touchmove' + '.' + this.name, function (e) {
        _this.onTouchMove(e);
      });
      this.$wrap.on('touchend' + '.' + this.name, function (e) {
        _this.onTouchEnd(e);
      });
    }
  }]);

  return Swipe;
}();

exports.default = Swipe;

/***/ }),

/***/ "../../src/js/src/View/UI/ToScroll/Controller.es6":
/*!****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/ToScroll/Controller.es6 ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

// howto
// <div data-link=".target" data-diff="30"></div>
// .targetのtop値を取得して、そこまでスクロール

var _Scroll = __webpack_require__(/*! ./Scroll.es6 */ "../../src/js/src/View/UI/ToScroll/Scroll.es6");

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.toScroll');
    var $wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('body,html');

    _classCallCheck(this, Controller);

    if (gb.u.dv.isPC) this.$wrap = $wrap;else this.$wrap = $('#wrapper');

    this.$target = $target;

    this.cb = function () {};

    this.setup();
    this.setEvents();
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup() {

      // Power3.easeInOut
      // Expo.easeInOut

      // CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.812,0.28,0.866,0.356,0.928,0.374,1,1,1") //expo.easeOut
      // CustomEase.create("custom", "M0,0 C0.17,0 0.31,0.076 0.386,0.154 0.464,0.234 0.5,0.42 0.5,0.5 0.5,0.586 0.568,0.858 0.64,0.924 0.712,0.99 0.794,1 1,1") // しゅばっしゅばっと
      // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1") //Expo.easeInOut
      // CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1") //Expo.easeInOut outの方をさらにゆっくりめ
      this.ease = CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"); //Expo.easeInOut outの方をさらにゆっくりめ

      // this.hashScroll();

      // top scroll
      this.adjustH = 0;
      var $t = $('.block02');
      var $s = $('.block01 .scroll');
      var targetST = $t.offset().top - gb.r.h + this.adjustH;
      var t = new _Scroll2.default(targetST, true, function () {}, function () {}, 'sec01scroll');
      t.cb = function () {

        TweenMax.set($s, { 'position': 'absolute' });

        // t.removeEvents();
      };
      t.cb02 = function () {

        TweenMax.set($s, { 'position': 'fixed' });

        // t.removeEvents();
      };
    }
  }, {
    key: 'run',
    value: function run(that) {
      var _this = this;

      // get target position
      var $target = $($(that).data("link"));
      var pos = $target.offset().top;

      // get diff
      var diff = 0;
      if ($(that).data('diff')) diff = $(that).data('diff');
      if (gb.r.w < 768) diff *= 0.8;

      // calculate
      pos = pos - diff;
      if (gb.u.dv.isSP) pos += gb.s.st;

      if (!$('body').hasClass('isIE')) {
        // animation
        TweenMax.to(this.$wrap, 1.9, {
          scrollTop: pos,
          // ease: this.ease,
          ease: Power4.easeInOut,
          onComplete: function onComplete() {
            _this.cb();
          }
        });
      } else {
        log('pos', pos);
        $('html,body').scrollTop(pos);
      }

      if (gb.menu.isOpen) gb.menu.close();
    }
  }, {
    key: 'runTo',
    value: function runTo(pos) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


      // animation
      TweenMax.to(this.$wrap, 1.9, {
        scrollTop: pos,
        ease: this.ease,
        onComplete: function onComplete() {
          cb();
        }
      });
    }
  }, {
    key: 'runToFirst',
    value: function runToFirst(pos) {
      var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.9;
      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Power1.easeInOut;


      // animation
      TweenMax.to(this.$wrap, 1.9, {
        scrollTop: pos,
        // ease: Expo.easeInOut, //Expo.easeInOut,
        // ease: CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"),
        // ease: CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.586,0.88,0.64,0.928,0.679,0.962,0.698,1,1,1"),
        ease: Power1.easeInOut
      });
    }
  }, {
    key: 'hashScroll',
    value: function hashScroll() {

      var h = location.hash;
      if (h == '' || h == null || h == undefined) return;

      var st01 = $('.section04').offset().top;
      var diff = 60;
      if (gb.r.w < 768) diff *= 0.8;
      if (h == "#campaign") this.runTo(st01 - diff, function () {});
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      this.$target.not('.notScroll').on('click', function () {
        self.run.call(self, this);return false;
      });
    }
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/ToScroll/Scroll.es6":
/*!************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/ToScroll/Scroll.es6 ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Scroll
//
//--------------------------------------------------

var Scroll = function () {
  function Scroll(targetST) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var cb02 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var name = arguments[4];

    _classCallCheck(this, Scroll);

    this.targetST = targetST;

    this.isLock = false;

    this.flag = flag; //一回だけcb実行か(true)、連続cb実行か(false);

    this.cb = cb;
    this.cb02 = cb02;

    this.name = name;

    this.setup();
    this.setEvents();
  }

  _createClass(Scroll, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      var st = gb.s.st;

      // 特定のst以上になったら1回だけ実行

      if (this.flag) {

        if (this.targetST <= st && !this.isLock) {
          this.isLock = true;

          this.cb();
        }

        if (this.targetST > st && this.isLock) {
          this.isLock = false;

          this.cb02();
        }

        // 特定のst以上になったら連続cb実行
      } else {

          // if (this.targetST<=st) {

          //   this.cb();

          // }

          // if (this.targetST>st) {

          //   this.cb02();

          // }

        }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // log('setEvents');

      gb.sl.add('Scroll' + this.name, this.onScroll.bind(this));
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      gb.sl.remove('Scroll' + this.name);
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

/***/ }),

/***/ "../../src/js/src/View/UI/Youtube/Controller.es6":
/*!***************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Youtube/Controller.es6 ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

var _Player = __webpack_require__(/*! ./Player.es6 */ "../../src/js/src/View/UI/Youtube/Player.es6");

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(id, videoID) {
    _classCallCheck(this, Controller);

    this.list = [];

    this.id = id;
    this.videoID = videoID;

    this.setup();
    this.setEvents();
  }

  _createClass(Controller, [{
    key: 'setup',
    value: function setup(id, videoID) {

      this.p = new _Player2.default(this.id, this.videoID);
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Controller;
}();

exports.default = Controller;

/***/ }),

/***/ "../../src/js/src/View/UI/Youtube/Player.es6":
/*!***********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Youtube/Player.es6 ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
//
//  Player
//
//--------------------------------------------------

var _Resize = __webpack_require__(/*! ./Resize.es6 */ "../../src/js/src/View/UI/Youtube/Resize.es6");

var _Resize2 = _interopRequireDefault(_Resize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(id, videoID) {
    _classCallCheck(this, Player);

    this.player = null;

    this.id = id;
    this.videoID = videoID;

    this.setup();
    this.setEvents();
  }

  _createClass(Player, [{
    key: 'setup',
    value: function setup() {

      // yt.player��load����Ƥ��ʤ����Ϥ򿼑]����
      if (typeof YT !== "undefined" && YT && YT.Player) {

        gb.player = this.player = new YT.Player(this.id, {
          width: '100%', // �ץ�`��`�η�
          height: '100%', // �ץ�`��`�θߤ�
          videoId: this.videoID, // YouTube��ID
          events: {
            'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
            'onStateChange': this.onPlayerStateChange.bind(this)
          },
          playerVars: {
            autoplay: 0,
            controls: 1,
            showinfo: 0,
            autohide: 1,
            rel: 0,
            enablejsapi: 1,
            iv_load_policy: 3,
            disablekb: 1,
            modestbranding: 1,
            start: 0
          }
        });

        if (gb.u.dv.isIe()) $(window).trigger('youtubeReady');
      } else {

        setTimeout(this.setup.bind(this), 100);
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {

      // this.player.playVideo();
      // this.player.pauseVideo();
      // new Resize();

      $(window).trigger('youtubeReady');
    }
  }, {
    key: 'onPlayerStateChange',
    value: function onPlayerStateChange(e) {

      var status = e.data;
      // �����K�ˤ����Ȥ�
      if (status == window.YT.PlayerState.ENDED) {
        console.log('�����K��');
        // �ӻ�����
        e.target.playVideo();
      }
      // // �����ФΤȤ�
      // if (status == window.YT.PlayerState.PLAYING) {
      //     // e.target.pauseVideo();
      // }
      // // ֹͣ�ФΤȤ�
      // if (status == window.YT.PlayerState.PAUSED) {
      //     console.log('ֹͣ��');
      // }
      // // �Хåե�����ФΤȤ�
      // if (status == window.YT.PlayerState.BUFFERING) {
      //     console.log('�Хåե������');
      // }
      // // �^�����g�ߤΤȤ�
      // if (status == window.YT.PlayerState.CUED) {
      //     console.log('�^�����g��');
      // }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // ����
      // $('.detail .playBox').click(()=>{this.player.playVideo();});
      // // һ�rֹͣ
      // $('#pause').click(()=>{this.player.pauseVideo();});
      // // 1��ǰ��
      // $('#prev').click(()=>{
      //     // �F�ڤ������r�gȡ��
      //     var currentTime = this.player.getCurrentTime();
      //     // ���`���Щ`���Ƅ�
      //     this.player.seekTo(currentTime - 60);
      // });
      // // 1���Ȥ�
      // $('#next').click(()=>{
      //     // �F�ڤ������r�gȡ��
      //     var currentTime = this.player.getCurrentTime();
      //     // ���`���Щ`���Ƅ�
      //     this.player.seekTo(currentTime + 60);
      // });
      // // �������å�(+10)
      // $('#volup').click(()=>{
      //     // �F�ڤ�����ȡ��
      //     var currentVol = this.player.getVolume();
      //     this.player.setVolume(currentVol + 10);
      // });
      // // ����������(-10)
      // $('#voldown').click(()=>{
      //     // �F�ڤ�����ȡ��
      //     var currentVol = this.player.getVolume();
      //     this.player.setVolume(currentVol - 10);
      // });
      // // �ߥ�`��
      // $('#mute').click(()=>{
      //     // �ߥ�`�Ȥ���Ƥ��뤫�ɤ���
      //     if(this.player.isMuted()) {
      //         // �ߥ�`�Ȥν��
      //         this.player.unMute();
      //     } else {
      //         // �ߥ�`��
      //         this.player.mute();
      //     }
      // });

    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),

/***/ "../../src/js/src/View/UI/Youtube/Resize.es6":
/*!***********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/Youtube/Resize.es6 ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ------------------------------------------------------------
//
//  Dom
//
// ------------------------------------------------------------

var Dom = function (_Base) {
  _inherits(Dom, _Base);

  function Dom() {
    _classCallCheck(this, Dom);

    var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

    _this.isREv = true;

    _this.adjust = 1.0;

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Dom, [{
    key: 'setup',
    value: function setup() {

      this.$target = $('#modal #video');

      this.getDef();
    }
  }, {
    key: 'getDef',
    value: function getDef() {

      this.$target.css({ width: 'auto', height: 'auto' });

      // this.defw = this.$target.width();
      // this.defh = this.$target.height();
      this.defw = 980;
      this.defh = 551;

      this.onResize();
    }
  }, {
    key: 'onResize',
    value: function onResize() {

      var H = gb.r.h - 50;
      var W = gb.r.w - 0;
      if (gb.r.w <= 750) {
        var H = gb.r.h - 0;
        var W = gb.r.w - 0;
      }

      this.ratioW = H / W;
      this.ratio = this.defh / this.defw;

      // size cover
      // update
      if (this.ratioW > this.ratio) {

        var scale = W / this.defw;

        var w = Math.min(W, this.defw * this.adjust);
        var h = Math.min(this.defh * scale, this.defh * this.adjust);
      } else if (this.ratioW <= this.ratio) {

        var scale = H / this.defh;

        var w = Math.min(this.defw * scale, this.defw * this.adjust);
        var h = Math.min(H, this.defh * this.adjust);
      }

      // render
      log(w, h);
      this.$target.css({ width: Math.floor(w), height: Math.floor(h) });
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      _get(Dom.prototype.__proto__ || Object.getPrototypeOf(Dom.prototype), 'setEvents', this).call(this);
    }
  }]);

  return Dom;
}(_Base3.default);

exports.default = Dom;

/***/ }),

/***/ "../../src/js/src/View/UI/_Loading/Basic/Controller.es6":
/*!**********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/_Loading/Basic/Controller.es6 ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Events = __webpack_require__(/*! ./Events.es6 */ "../../src/js/src/View/UI/_Loading/Basic/Events.es6");

var _Events2 = _interopRequireDefault(_Events);

var _Render_def = __webpack_require__(/*! ./Render_def.es6 */ "../../src/js/src/View/UI/_Loading/Basic/Render_def.es6");

var _Render_def2 = _interopRequireDefault(_Render_def);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  ReadyMgr
//
//--------------------------------------------------

var ReadyMgr = function (_Base) {
  _inherits(ReadyMgr, _Base);

  function ReadyMgr() {
    _classCallCheck(this, ReadyMgr);

    var _this = _possibleConstructorReturn(this, (ReadyMgr.__proto__ || Object.getPrototypeOf(ReadyMgr)).call(this));

    _this.name = 'ReadyMgr';

    _this.completed = 0;
    _this.total = 1; // 最初に0で割られるのを防ぐ
    _this.current = 0;

    _this.$wrap = $('#wrapper');

    if (gb.conf.LOADING) _this.setup(); // loading有り
    else _this.setup_not_loading(); // loading無し

    _this.setEvents();

    return _this;
  }

  _createClass(ReadyMgr, [{
    key: 'setup',
    value: function setup() {

      this.e = new _Events2.default(this);
      this.r = new _Render_def2.default();

      // this.r.add();
      // this.r.show();
    }
  }, {
    key: 'setup_not_loading',
    value: function setup_not_loading() {

      // this.$wrap.css('opacity', 1);
      this.onComplete();
    }
  }, {
    key: 'update',
    value: function update() {

      this.e = this.e.update();
      this.r.update(this.e);
    }
  }, {
    key: 'onComplete',
    value: function onComplete() {

      // update処理をやめる
      this.offU();

      // this.r.hide();

      var $mask = $('#loading .mask');

      var tl = new TimelineMax();

      tl.to($mask.eq(0), 1.2, {
        width: '102%',
        ease: Power3.easeInOut
      }, 0.2 * 0).to($mask.eq(1), 1.2, {
        width: '102%',
        ease: Power3.easeInOut
      }, 0.2 * 1).to($mask.eq(2), 1.2, {
        width: '102%',
        ease: Power3.easeInOut,
        onComplete: function onComplete() {
          $('#loading').remove();
        }
      }, 0.2 * 2).add(function () {

        $(window).trigger('loadingEnd');
      }, 0.0);
    }
  }]);

  return ReadyMgr;
}(_Base3.default);

exports.default = ReadyMgr;

/***/ }),

/***/ "../../src/js/src/View/UI/_Loading/Basic/Events.es6":
/*!******************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/_Loading/Basic/Events.es6 ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Events
//
//--------------------------------------------------

var Events = function () {
  function Events(parent) {
    _classCallCheck(this, Events);

    this.parent = parent;

    this.current = 0;
    this.ease = 0.12;

    this.isLock = false;
    this.loopStart = true;

    this.setup();
    this.setEvents();
  }

  _createClass(Events, [{
    key: "setup",
    value: function setup() {}
  }, {
    key: "update",
    value: function update() {

      var target = gb.lm.completed / gb.lm.total * 100;
      this.current += (target - this.current) * this.ease;
      gb.lm.current = this.current;
      // log(gb.lm.completed,gb.lm.total)

      // 終了処理
      if (this.current >= 100 && !this.isLock) {
        this.isLock = true;
        this.parent.onComplete();
      }

      // current が 99.9 より大きければ 100 と見なして終了処理へ
      if (this.current > 99.9) {
        this.current = 100;
      }

      // log(gb.lm.completed, gb.lm.total, this.current);

      return this;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {}
  }]);

  return Events;
}();

exports.default = Events;

/***/ }),

/***/ "../../src/js/src/View/UI/_Loading/Basic/Render_def.es6":
/*!**********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/UI/_Loading/Basic/Render_def.es6 ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

var Render = function () {
  function Render(parent) {
    _classCallCheck(this, Render);

    this.$wrap = $('html');

    this.setup();
    this.setEvents();
  }

  _createClass(Render, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'add',
    value: function add() {

      var html = '<div id="loading">' + '<div class="loadingBar"></div>' + '<div class="loadingPercent"></div>' + '</div>';

      this.$wrap.append(html);

      // get dom
      this.$loading = $('#loading');
      this.$bar = $('#loading .loadingBar');
      this.$percent = $('#loading .loadingPercent');
    }
  }, {
    key: 'show',
    value: function show() {

      // var tl = new TimelineMax();

      // tl.to(this.$loading, 1.0, {
      //   opacity: 1,
      //   ease: Expo.easeInOut,
      //   onComplete: ()=>{

      //   }
      // })

      TweenMax.set(this.$loading, { opacity: 1 });
    }
  }, {
    key: 'update',
    value: function update(e) {

      // log('loading', e.current);

      // this.$bar.css({ width: e.current + '%' }); // bar
      // this.$percent.html( Math.floor(e.current) + '<span>%</span>'); // value

    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;

      var tl = new TimelineMax();

      tl.to(this.$bar, 1.0, {
        x: '102%',
        ease: Expo.easeInOut,
        onComplete: function onComplete() {

          _this.remove();
        }
      }).to(this.$percent, 1.0, {
        opacity: 0,
        ease: Power2.easeInOut
      }, 0.0);
    }
  }, {
    key: 'remove',
    value: function remove() {

      this.$loading.remove();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {}
  }]);

  return Render;
}();

exports.default = Render;

/***/ }),

/***/ "../../src/js/src/View/View.es6":
/*!**********************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/View/View.es6 ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

var _Sns = __webpack_require__(/*! ./Func/Sns.es6 */ "../../src/js/src/View/Func/Sns.es6");

var _Sns2 = _interopRequireDefault(_Sns);

var _ResponsiveSwitchImg = __webpack_require__(/*! ./UI/Layout/ResponsiveSwitchImg.es6 */ "../../src/js/src/View/UI/Layout/ResponsiveSwitchImg.es6");

var _ResponsiveSwitchImg2 = _interopRequireDefault(_ResponsiveSwitchImg);

var _Size = __webpack_require__(/*! ./UI/Layout/Size.es6 */ "../../src/js/src/View/UI/Layout/Size.es6");

var _Size2 = _interopRequireDefault(_Size);

var _Clone = __webpack_require__(/*! ./UI/Layout/Clone.es6 */ "../../src/js/src/View/UI/Layout/Clone.es6");

var _Clone2 = _interopRequireDefault(_Clone);

var _Controller = __webpack_require__(/*! ./UI/Controller.es6 */ "../../src/js/src/View/UI/Controller.es6");

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  ViewTop sss
//
//--------------------------------------------------


var ViewCommon = function (_Base) {
  _inherits(ViewCommon, _Base);

  function ViewCommon() {
    _classCallCheck(this, ViewCommon);

    var _this = _possibleConstructorReturn(this, (ViewCommon.__proto__ || Object.getPrototypeOf(ViewCommon)).call(this));

    _this.name = 'ViewCommon';

    _this.isUEv = false; // update
    _this.isREv = true; // resize
    _this.isSEv = false; // scroll
    _this.isMEv = false; // mouse

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(ViewCommon, [{
    key: 'setup',
    value: function setup() {

      if (gb.u.dv.isAndroid()) $('body').addClass('isAndroid');

      this.onLoad();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {

      new _ResponsiveSwitchImg2.default();

      // gb.f.SPH($('#wrapper, .section01 .block01'));

      // ------------------------------------------------------------
      //  Util
      // ------------------------------------------------------------
      new _Sns2.default();

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------
      // new Size();
      // new Clone();
      // this.setPos();

      // ------------------------------------------------------------
      //  ui
      // ------------------------------------------------------------
      gb.uic = this.uic = new _Controller2.default();

      // ------------------------------------------------------------
      // timeline
      // ------------------------------------------------------------
      // this.uic.timeline();

      // this.$header = $('#header');
      // this.$bg = $('.block01 .bg');
      // this.$tit = $('.block01 .tit');
      // this.$pipe = $('.block02 .pipe');
      // TweenMax.set(this.$header, {opacity: 1});
      // TweenMax.set(this.$bg, {opacity: 1});
      // TweenMax.set(this.$tit, {opacity: 1});
      // TweenMax.set(this.$pipe, {opacity: 1});
    }
  }, {
    key: 'onLoadingEnd',
    value: function onLoadingEnd() {

      // ------------------------------------------------------------
      //  Util
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  layout
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      //  ui
      // ------------------------------------------------------------


      // ------------------------------------------------------------
      // effect
      // ------------------------------------------------------------

      // ------------------------------------------------------------
      // Scene / timeline
      // ------------------------------------------------------------


    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onLoadAll',
    value: function onLoadAll() {

      // new Responsive();

    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      _get(ViewCommon.prototype.__proto__ || Object.getPrototypeOf(ViewCommon.prototype), 'setEvents', this).call(this);

      // $(window).on('load', this.onLoad.bind(this));
      $(window).on('loadingEnd', this.onLoadingEnd.bind(this));
      $(window).on('loadAll', this.onLoadAll.bind(this));
    }
  }]);

  return ViewCommon;
}(_Base3.default);

exports.default = ViewCommon;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/Base.es6":
/*!******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/Base.es6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Base
//
// ------------------------------------------------------------

var Base = function () {
  function Base() {
    _classCallCheck(this, Base);

    this.name = 'Base';

    this.isUEv = false; // update
    this.isREv = false; // resize
    this.isSEv = false; // scroll
    this.isMEv = false; // mouse
    this.prevent = true;

    this.isloop = true;
  }

  _createClass(Base, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }, {
    key: 'loop',
    value: function loop() {

      if (this.isloop) {

        this.update();
        this.draw();

        this.Timer = requestAnimationFrame(this.loop.bind(this));
      }
    }
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {}
  }, {
    key: 'onMouseMove',
    value: function onMouseMove() {}
  }, {
    key: 'setEvents',
    value: function setEvents() {

      var self = this;

      if (this.isUEv) this.loop();
      if (this.isREv) $(window).on('resize' + '.' + this.name, this.onResize.bind(this));
      if (this.isSEv) $(window).on('scroll' + '.' + this.name, this.onScroll.bind(this));
      if (this.isMEv) $(window).on('touchmove' + '.' + this.name, function (e) {
        self.onMouseMove.call(self, e);
        if (self.prevent) e.preventDefault();
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      if (this.isUEv) {
        this.isloop = false;
        cancelAnimationFrame(this.Timer);
      }
      if (this.isREv) $(window).off('resize' + '.' + this.name);
      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
    }
  }, {
    key: 'onU',
    value: function onU() {

      this.isUEv = true;
      this.isloop = true;
      this.loop();
    }
  }, {
    key: 'offU',
    value: function offU() {

      this.isloop = false;
      if (this.isUEv) cancelAnimationFrame(this.Timer);
    }
  }, {
    key: 'offR',
    value: function offR() {

      if (this.isREv) $(window).off('resize' + '.' + this.name);
    }
  }, {
    key: 'offS',
    value: function offS() {

      if (this.isSEv) $(window).off('scroll' + '.' + this.name);
    }
  }, {
    key: 'offM',
    value: function offM() {

      if (this.isMEv) $(window).off('touchmove' + '.' + this.name);
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/Debugger.es6":
/*!**********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/Debugger.es6 ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Debugger
//
// ------------------------------------------------------------

var Debugger = function () {
  function Debugger() {
    _classCallCheck(this, Debugger);

    this.setup();
    this.setEvents();
  }

  _createClass(Debugger, [{
    key: 'setup',
    value: function setup() {

      this.console(); // console
    }

    // html外出し用

  }, {
    key: 'setupHTML',
    value: function setupHTML() {

      // 本番だったら、div追加しない
      if (!gb.conf.LOG) return;

      this.$target = $('<div class="debug"></div>');

      this.$target.prependTo($('body')).css({
        position: 'fixed',
        'z-index': 99999,
        left: 20,
        top: 20
      });
    }

    // log系を短く

  }, {
    key: 'console',
    value: function (_console) {
      function console() {
        return _console.apply(this, arguments);
      }

      console.toString = function () {
        return _console.toString();
      };

      return console;
    }(function () {

      // 置換対象のメソッドを配列として保持する
      var methods = ['log'];

      // consoleが使えない場合は空のオブジェクトを設定しておく
      if (typeof window.console === "undefined") {
        window.console = {};
      }

      // 各メソッドをwindowへ直接追加して行く
      for (var i in methods) {
        (function (m) {

          // consoleにある？デバッグモードは有効？consoleのものは関数？
          if (console[m] && typeof console[m] === "function" && gb.conf.LOG) {
            window[m] = console[m].bind(console);
          } else {
            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
            window[m] = function () {};
          }
        })(methods[i]);
      }
    })

    // htmlに外出し

  }, {
    key: 'html',
    value: function html(v) {

      // 本番だったら、div追加しない
      if (!gb.conf.LOG) return;

      this.$target.text(v);
    }

    // alert

  }, {
    key: 'alert',
    value: function alert(v) {

      window.alert(v);
    }
  }, {
    key: 'onReady',
    value: function onReady() {

      this.setupHTML();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(document).on('ready', this.onReady.bind(this));
    }
  }]);

  return Debugger;
}();

exports.default = Debugger;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/Func.es6":
/*!******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/Func.es6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Func
//
// ------------------------------------------------------------

var Func = function () {
  function Func() {
    _classCallCheck(this, Func);

    this.blank();
    this.requestAnimationFrame();
    this.scrollRestoration(false);
    this.checkPassive();
  }

  _createClass(Func, [{
    key: 'blank',
    value: function blank() {

      $(function () {
        $('.blank').attr('target', '_blank');
      });
    }
  }, {
    key: 'scrollRestoration',
    value: function scrollRestoration() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


      // スクロール位置を元の位置に戻す
      if (bool) {

        window.history.scrollRestoration = 'auto';

        // スクロール位置を必ず一番上に
      } else {

        window.history.scrollRestoration = 'manual';
      }
    }
  }, {
    key: 'requestAnimationFrame',
    value: function requestAnimationFrame() {

      var FPS = 1000 / 60;

      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
      window.mozRequestAnimationFrame || // 古いfirefox用
      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
      function (callback) {
        window.setTimeout(callback, FPS);
      };

      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
        window.clearTimeout(timer);
      };
    }

    // smart phone 全画面

  }, {
    key: 'SPH',
    value: function SPH() {
      var _this = this;

      var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('#wrapper');


      if (gb.u.dv.isPC) return;

      var r = function r() {
        clearTimeout(_this.Timer);
        _this.Timer = setTimeout(function () {
          var adjust = 0;
          if ($('body').hasClass('landscape')) adjust = 200;
          $target.innerHeight(gb.r.h + adjust);
        }, 100);
      };

      r();

      // $(window).on('resize', r);
      $(window).on('orientationchange', r);
    }
  }, {
    key: 'checkCssBlend',
    value: function checkCssBlend() {

      if ('CSS' in window && 'supports' in window.CSS) {
        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
          document.documentElement.classList.add('not-mix-blend-mode');
        }
      }

      log(gb.u.isIE);

      if (gb.u.isIE) {

        document.documentElement.classList.add('not-mix-blend-mode');
      };
    }
  }, {
    key: 'notSaveImg',
    value: function notSaveImg() {

      // ------------------------------------------------------------
      //
      //  pc
      //
      // ------------------------------------------------------------

      if (gb.u.isPC) {

        $(function () {
          $("img").on("contextmenu", function () {
            return false;
          });
        });
      }

      // ------------------------------------------------------------
      //
      //  sp android
      //
      // ------------------------------------------------------------
      var v = gb.u.isAndroidVersion();

      if (v == undefined) return;
      if (v < 5) {

        var timer;
        $("img").on("touchstart", function () {
          timer = setTimeout(function () {
            alert("画像は保存できません");
          }, 500);
          return false;
        });
        $("img").on("touchend", function () {
          clearTimeout(timer);
          return false;
        });
      }
    }
  }, {
    key: 'smartRollover',
    value: function smartRollover($target) {
      var off = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_off.';
      var on = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_on.';


      var $images = $target;

      for (var i = 0; i < $images.length; i++) {

        if ($images.eq(i).get(0).getAttribute("src").match(off)) {

          log(111);

          $images.eq(i).get(0).onmouseover = function () {
            this.setAttribute("src", this.getAttribute("src").replace(off, on));
          };
          $images.eq(i).get(0).onmouseout = function () {
            this.setAttribute("src", this.getAttribute("src").replace(on, off));
          };
        }
      }
    }
  }, {
    key: 'checkPassive',
    value: function checkPassive() {

      // check passive 
      var supportsPassive = false;
      try {
        // getter として opts.passive を定義して、 addEventListener 内で呼ばれたことがわかるようにする
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            // 内部で opts.passive が呼ばれたら対応ブラウザ
            // 用意しておいたフラグを有効にする
            supportsPassive = true;
          }
        });
        // 試しに適当なイベントを補足し、 opts.passive が呼ばれるか試す
        window.addEventListener("test", null, opts);
        window.removeEventListener("test", null, opts);
      } catch (e) {}

      window.addEventListenerWithOptions = function (target, type, handler, options) {
        var optionsOrCapture = options;
        if (!supportsPassive) {
          // 非対応ブラウザでは、他のオプションは全て捨て
          // { capture: bool } の値を useCapture の値として採用する
          optionsOrCapture = options.capture;
        }
        //
        target.addEventListener(type, handler, optionsOrCapture);
      };
    }
  }]);

  return Func;
}();

exports.default = Func;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/JudgeEnvironment.es6":
/*!******************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/JudgeEnvironment.es6 ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  JudgeEnvironment
//
//--------------------------------------------------

var JudgeEnvironment = function (_Base) {
  _inherits(JudgeEnvironment, _Base);

  function JudgeEnvironment() {
    _classCallCheck(this, JudgeEnvironment);

    var _this = _possibleConstructorReturn(this, (JudgeEnvironment.__proto__ || Object.getPrototypeOf(JudgeEnvironment)).call(this));

    _this.name = 'JudgeEnvironment';

    _this.isUEv = false; // update
    _this.isREv = true; // resize
    _this.isSEv = false; // scroll
    _this.isMEv = false; // mouse

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(JudgeEnvironment, [{
    key: 'setup',
    value: function setup() {

      this.isREv = true;

      // デバイス判定
      gb.u.dv.isDeviceSP();
      gb.u.dv.isDeviceTAB();
      gb.u.dv.isDeviceMB();
      gb.u.dv.isDevicePC();
      gb.u.dv.setEventString();

      // ブラウザ判定
      gb.u.dv.isBrowserCheck();

      // responsive / portrait / landscape
      gb.u.dv.isDirection();
      gb.u.dv.isResponsive(gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
    }
  }, {
    key: 'onResize',
    value: function onResize() {

      gb.u.dv.isDirection.call(gb.u.dv);
      gb.u.dv.isResponsive.call(gb.u.dv, gb.conf.bp00, gb.conf.bp01, gb.conf.bp02, gb.conf.bp03);
    }
  }]);

  return JudgeEnvironment;
}(_Base3.default);

exports.default = JudgeEnvironment;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/Profiler.es6":
/*!**********************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/Profiler.es6 ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(/*! _MyLibs/Util/Base.es6 */ "../../src/js/src/_MyLibs/Util/Base.es6");

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //--------------------------------------------------
//
//  Profiler
//
//--------------------------------------------------

var Profiler = function (_Base) {
  _inherits(Profiler, _Base);

  function Profiler() {
    _classCallCheck(this, Profiler);

    var _this = _possibleConstructorReturn(this, (Profiler.__proto__ || Object.getPrototypeOf(Profiler)).call(this));

    _this.name = 'Profiler';

    _this.isUEv = true; // update

    _this.setup();
    _this.setEvents();

    return _this;
  }

  _createClass(Profiler, [{
    key: 'setup',
    value: function setup() {

      this.Stats = new Stats();
      this.Stats.domElement.style.position = "fixed";
      this.Stats.domElement.style.left = "0px";
      this.Stats.domElement.style.top = "0px";
      document.body.appendChild(this.Stats.domElement);
    }
  }, {
    key: 'update',
    value: function update() {

      if (this.Stats) this.Stats.update();
    }
  }]);

  return Profiler;
}(_Base3.default);

exports.default = Profiler;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/Util.es6":
/*!******************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/Util.es6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Array = __webpack_require__(/*! ./UtilPack/Array.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Array.es6");

var _Array2 = _interopRequireDefault(_Array);

var _Color = __webpack_require__(/*! ./UtilPack/Color.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Color.es6");

var _Color2 = _interopRequireDefault(_Color);

var _DateClass = __webpack_require__(/*! ./UtilPack/DateClass.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/DateClass.es6");

var _DateClass2 = _interopRequireDefault(_DateClass);

var _Device = __webpack_require__(/*! ./UtilPack/Device.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Device.es6");

var _Device2 = _interopRequireDefault(_Device);

var _Math = __webpack_require__(/*! ./UtilPack/Math.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Math.es6");

var _Math2 = _interopRequireDefault(_Math);

var _Other = __webpack_require__(/*! ./UtilPack/Other.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Other.es6");

var _Other2 = _interopRequireDefault(_Other);

var _String = __webpack_require__(/*! ./UtilPack/String.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/String.es6");

var _String2 = _interopRequireDefault(_String);

var _Url = __webpack_require__(/*! ./UtilPack/Url.es6 */ "../../src/js/src/_MyLibs/Util/UtilPack/Url.es6");

var _Url2 = _interopRequireDefault(_Url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // ------------------------------------------------------------
//
//  Util
//
// ------------------------------------------------------------

var Util = function Util() {
  _classCallCheck(this, Util);

  this.a = new _Array2.default();
  this.c = new _Color2.default();
  this.d = new _DateClass2.default();
  this.dv = new _Device2.default();
  this.m = new _Math2.default();
  this.o = new _Other2.default();
  this.s = new _String2.default();
  this.u = new _Url2.default();
};

exports.default = Util;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Array.es6":
/*!****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/Array.es6 ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Array
//
// ------------------------------------------------------------

var Array = function () {
  function Array() {
    _classCallCheck(this, Array);
  }

  // ------------------------------------------------------------
  //
  //  Array
  //
  // ------------------------------------------------------------

  // 配列内のランダムな値をひとつ取得
  // -----------------------------------
  // @arr : 配列
  // return : 配列内の値
  // -----------------------------------


  _createClass(Array, [{
    key: "arrRand",
    value: function arrRand(arr) {

      return arr[gb.u.m.randomInt(0, arr.length - 1)];
    }

    // 配列をランダムに並べ替え
    // -----------------------------------
    // @arr : 配列(Array)
    // -----------------------------------

  }, {
    key: "shuffle",
    value: function shuffle(ary) {

      var arr = [];
      arr = ary.slice();
      var i = arr.length;
      while (i) {
        var j = Math.floor(Math.random() * i);
        var t = arr[--i];
        arr[i] = arr[j];
        arr[j] = t;
      }
      return arr;
    }

    // ランダムな数値を作る

  }, {
    key: "randomArr",
    value: function randomArr(len) {

      var arr = [];

      for (var i = 0; i < len; i++) {
        arr.push(i);
      }arr = this.shuffle(arr);

      return arr;
    }

    // nullを削除した配列を返す
    // -----------------------------------
    // @arr : 配列(Array)
    // return : null削除した配列(Array)
    // -----------------------------------

  }, {
    key: "sliceNull",
    value: function sliceNull(arr) {

      var i, l, len1, newArr, val;
      newArr = [];
      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
        val = arr[i];
        if (val !== null) {
          newArr.push(val);
        }
      }
      return newArr;
    }

    // 配列内のパラメータを比較してソート
    // -----------------------------------
    // @arr : 配列(Array)
    // @para : パラメーター名
    // @desc : 降順かどうか(boolean) デフォルトは昇順
    // -----------------------------------

  }, {
    key: "sort",
    value: function sort(arr, para, desc) {
      if (desc === void 0) {
        desc = false;
      }
      if (desc) {
        return arr.sort(function (a, b) {
          return b[para] - a[para];
        });
      } else {
        return arr.sort(function (a, b) {
          return a[para] - b[para];
        });
      }
    }
  }, {
    key: "getKey",
    value: function getKey(list, value) {
      var returnKey = [];
      for (var key in list) {
        if (list[key] == value) {
          returnKey.push(key);
        }
      }
      return returnKey;
    }
  }]);

  return Array;
}();

exports.default = Array;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Color.es6":
/*!****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/Color.es6 ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Color
//
// ------------------------------------------------------------

var Color = function () {
    function Color() {
        _classCallCheck(this, Color);
    }

    // rgbからHEX(16進数)カラー取得
    // -----------------------------------
    // @r : 0~255
    // @g : 0~255
    // @b : 0~255
    // return : ex "#FFFFFF"
    // -----------------------------------


    _createClass(Color, [{
        key: "getHexColor",
        value: function getHexColor(r, g, b) {
            var str;
            str = (r << 16 | g << 8 | b).toString(16);
            return "#" + new Array(7 - str.length).join("0") + str;
        }

        // rgbからhslへ

    }, {
        key: "rgbToHsl",
        value: function rgbToHsl(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;

            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var h, s, l;

            l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                var d = max - min;
                switch (max) {
                    case r:
                        h = ((g - b) / d * 60 + 360) % 360;break;
                    case g:
                        h = (b - r) / d * 60 + 120;break;
                    case b:
                        h = (r - g) / d * 60 + 240;break;
                }
                s = l <= 0.5 ? d / (max + min) : d / (2 - max - min);
            }

            return [h, s * 100, l * 100];
        }

        // hslからrgbへ

    }, {
        key: "hslToRgb",
        value: function hslToRgb(h, s, l) {
            s /= 100;
            l /= 100;

            var r, g, b;

            if (s === 0) {
                r = g = b = l * 255;
            } else {
                var v2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var v1 = 2 * l - v2;
                r = Math.round(hueToRgb(v1, v2, h + 120) * 255);
                g = Math.round(hueToRgb(v1, v2, h) * 255);
                b = Math.round(hueToRgb(v1, v2, h - 120) * 255);
            }

            return [r, g, b];
        }
    }]);

    return Color;
}();

exports.default = Color;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/DateClass.es6":
/*!********************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/DateClass.es6 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  DateClass
//
// ------------------------------------------------------------

var DateClass = function () {
  function DateClass() {
    _classCallCheck(this, DateClass);

    this.startTime = null;
    this.elapsedTime = null;
    this.now = new Date();
  }

  _createClass(DateClass, [{
    key: "getNow",
    value: function getNow() {

      this.now = new Date();
    }
  }, {
    key: "start",
    value: function start() {

      this.now = new Date();
      this.startTime = this.now.getTime();
    }
  }, {
    key: "elapsed",
    value: function elapsed() {

      this.now = new Date();
      return this.elapsedTime = this.now.getTime() - this.startTime;
    }
  }, {
    key: "m",
    value: function m() {

      this.elapsed();
      return Math.floor(this.elapsedTime + 100 / 60);
    }
  }, {
    key: "s",
    value: function s() {

      this.elapsed();
      return Math.floor(this.elapsedTime / 1000);
    }
  }, {
    key: "ms",
    value: function ms() {

      this.elapsed();
      return this.elapsedTime;
    }
  }, {
    key: "time",
    value: function time() {

      this.getNow();

      this.hour = this.now.getHours(); // 時
      this.minute = this.now.getMinutes(); // 分
      this.second = this.now.getSeconds();
    }
  }, {
    key: "date",
    value: function date() {

      return this.now.getDate();
    }
  }, {
    key: "months",
    value: function months() {

      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

      return this.now.getMonth() + 1;
    }
  }, {
    key: "year",
    value: function year() {

      return this.now.getFullYear();
    }
  }, {
    key: "day",
    value: function day() {

      // 曜日 (日本語)
      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
      var wDJ = weekDayJP[this.now.getDay()];

      // 曜日 (英語)
      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var wDE = weekDayEN[this.now.getDay()];
    }

    // 数日後のDateオブジェクト取得
    // -----------------------------------

  }, {
    key: "afterDay",
    value: function afterDay(date, num) {

      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
    }
  }]);

  return DateClass;
}();

exports.default = DateClass;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Device.es6":
/*!*****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/Device.es6 ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Device
//
// ------------------------------------------------------------

var Device = function () {
  function Device() {
    _classCallCheck(this, Device);

    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
    this.isRes = null;
    this.isResSP = null; // responsive sp
    this.isResPC = null; // responsive pc

    this.isPC = null;
    this.isSP = null;
    this.isTAB = null;
    this.isMB = null;
    this.isIE = false;

    this.isSetSPSize = false;
  }

  // ------------------------------------------------------------
  //
  //  device
  //
  // ------------------------------------------------------------

  _createClass(Device, [{
    key: "isDeviceSP",
    value: function isDeviceSP() {

      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
      var pattern = new RegExp(media.join("|"), "i");

      var b = pattern.test(this.ua);
      if (b) $('body').addClass('isDeviceSP');

      this.isSP = b;
    }
  }, {
    key: "isDeviceTAB",
    value: function isDeviceTAB() {

      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
      if (b) $('body').addClass('isDeviceTAB');

      this.isTAB = b;
    }
  }, {
    key: "isDeviceMB",
    value: function isDeviceMB() {

      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
      if (b) $('body').addClass('isDeviceMB');

      this.isMB = b;
    }
  }, {
    key: "isDevicePC",
    value: function isDevicePC() {

      if (!(this.isSP || this.isTAB || this.isMB)) {

        $('body').addClass('isDevicePC');
        this.isPC = true;
        return;
      }

      this.isPC = false;
    }
  }, {
    key: "setEventString",
    value: function setEventString() {

      this.eClick = this.isTab || this.isSP ? 'touchstart' : 'click';
      this.eStart = this.isTab || this.isSP ? 'touchstart' : 'mousedown';
      this.eEnd = this.isTab || this.isSP ? 'touchend' : 'mouseup';
      this.eMove = this.isTab || this.isSP ? 'touchmove' : 'mousemove';

      this.eEnter = this.isTab || this.isSP ? 'touchstart' : 'mouseenter';
      this.eLeave = this.isTab || this.isSP ? 'touchend' : 'mouseleave';
      this.eOver = this.isTab || this.isSP ? 'touchstart' : 'mouseover';
      this.eOut = this.isTab || this.isSP ? 'touchend' : 'mouseout';

      this.eWheel = this.isTab || this.isSP ? 'touchmove' : 'mousewheel';
      this.eScroll = this.isTab || this.isSP ? 'touchmove' : 'scroll';
    }

    // スマフォ判定
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isSmt",
    value: function isSmt() {

      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
    }

    // タブレット端末かどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isTablet",
    value: function isTablet() {

      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
    }

    // iPad判定
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIpad",
    value: function isIpad() {

      return navigator.userAgent.indexOf('iPad') > 0;
    }

    // ------------------------------------------------------------
    //
    //  OS
    //
    // ------------------------------------------------------------

    // Android判定
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isAndroid",
    value: function isAndroid() {

      var u;
      u = navigator.userAgent;
      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
    }
  }, {
    key: "isiPhone",
    value: function isiPhone() {
      var pattern = new RegExp("iphone", "i");
      return pattern.test(this.ua);
    }

    // iOS判定
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIos",
    value: function isIos() {

      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
    }

    // PS3判定
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isPs3",
    value: function isPs3() {

      var u;
      u = navigator.userAgent;
      return u.indexOf('PLAYSTATION 3') > 0;
    }

    // VITA判定
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isVita",
    value: function isVita() {

      var u;
      u = navigator.userAgent;
      return u.indexOf('PlayStation Vita') > 0;
    }

    // ------------------------------------------------------------
    //
    //  browser
    //
    // ------------------------------------------------------------

  }, {
    key: "isBrowserCheck",
    value: function isBrowserCheck() {

      this.isIEVersion();
      this.isEdge();
      this.isChrome();
      this.isFF();
      this.isSafari();
      this.isOpera();
      this.isIOSNotSfari();
      this.isAPPBrowser();
    }

    // IEかどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIe",
    value: function isIe() {

      var ua;
      ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
    }

    // WINかどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isWin",
    value: function isWin() {

      return navigator.platform.indexOf("Win") !== -1;
    }

    // googleChromeかどうか pcのみ
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isChrome",
    value: function isChrome() {

      if (this.ua.indexOf('chrome') !== -1) {

        $('body').addClass('isChorme');
        return true;
      } else {

        return false;
      }
    }

    // FireFoxかどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isFF",
    value: function isFF() {

      if (this.ua.indexOf('firefox') !== -1) {

        $('body').addClass('isFF');
        return true;
      } else {

        return false;
      }
    }
  }, {
    key: "isSafari",
    value: function isSafari() {

      if (!this.isChrome() && this.ua.indexOf("lunascape") == -1) {

        var pattern = new RegExp("safari", "i");
        if (pattern.test(this.ua)) {

          $('body').addClass('isSafari');
          return true;
        } else {

          return false;
        }
      } else {

        return false;
      }
    }
  }, {
    key: "isOpera",
    value: function isOpera() {

      var pattern = new RegExp("opera", "i");
      if (pattern.test(this.ua)) {

        $('body').addClass('isOpera');
        return true;
      } else {

        return false;
      }
    }

    // iOSのsafari以外かどうか spでsafariかsafariでないか(chromeかandroidの標準ブラウザか)を判定したい場合はこちらを使う
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIOSNotSfari",
    value: function isIOSNotSfari() {

      if (this.isIos() && this.ua.indexOf('safari') === -1 || this.isIos() && this.ua.indexOf('crios') > 0 || this.isIos() && this.ua.indexOf('gsa') > 0) {

        $('body').addClass('isIOSNotSafari');
        // alert('isIOSNotSafari');
        return true;
      } else {

        $('body').addClass('isIOSSafari');
        // alert('isSafari');
        return false;
      }
    }
  }, {
    key: "isAPPBrowser",
    value: function isAPPBrowser() {

      // debug
      // var r01 = this.ua.indexOf("fban/fbios;fbav") !== -1;
      // var r02 = this.ua.indexOf("twitter") !== -1;

      // // $('body').prepend(String(r01));
      // // $('body').prepend(String(r02));

      // // alert(r01);
      // // alert(r02);

      if (this.ua.indexOf("fban/fbios;fbav") !== -1 || this.ua.indexOf("twitter") !== -1) {

        $('body').addClass('isAPPBrowser');
        return true;
      } else {

        return false;
      }
    }

    // ------------------------------------------------------------
    //
    //  version
    //
    // ------------------------------------------------------------
    // IE8以下かどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIe8Under",
    value: function isIe8Under() {

      var msie;
      msie = navigator.appVersion.toLowerCase();
      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
      return msie <= 8 && msie !== 0;
    }

    // IE9以下かどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIe9Under",
    value: function isIe9Under() {

      var msie;
      msie = navigator.appVersion.toLowerCase();
      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
      return msie <= 9 && msie !== 0;
    }

    // IE10以下かどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIe10Under",
    value: function isIe10Under() {

      var msie;
      msie = navigator.appVersion.toLowerCase();
      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
      return msie <= 10 && msie !== 0;
    }

    // IE11以下かどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isIe11Under",
    value: function isIe11Under() {

      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
      return b;
      // return true;
    }

    // edgeかどうか
    // -----------------------------------
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "isEdge",
    value: function isEdge() {

      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;

      if (b) $('body').addClass('isEdge');

      return b;
      // return true;
    }
  }, {
    key: "isIEVersion",
    value: function isIEVersion() {

      $('body').addClass('isIE');
      this.isIE = true;

      if (this.appV.indexOf("msie 10.") != -1) {
        $('body').addClass('isIE10');
        return 'ie10';
      } else if (this.appV.indexOf("msie 9.") != -1) {
        $('body').addClass('isIE9');
        return 'ie9';
      } else if (this.appV.indexOf("msie 8.") != -1) {
        $('body').addClass('isIE8');
        return 'ie8';
      } else if (this.appV.indexOf("msie 7.") != -1) {
        $('body').addClass('isIE7');
        return 'ie7';
      } else if (this.appV.indexOf("msie 6.") != -1) {
        $('body').addClass('isIE6');
        return 'ie6';
      } else if (this.appV.indexOf("trident") != -1) {
        $('body').addClass('isIE11');
        return 'ie11';
      }

      $('body').removeClass('isIE');
      this.isIE = false;
      return 'notIE';
    }
  }, {
    key: "isAndroidVersion",
    value: function isAndroidVersion() {

      if (this.ua.indexOf("android") > 0) {

        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
        return version;
      }
    }
  }, {
    key: "isiphoneVersion",
    value: function isiphoneVersion() {

      if (this.ua.indexOf("iPhone OS") > 0) {

        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
        return version;
      }
    }

    // ------------------------------------------------------------
    //
    //  portrait / landscape
    //
    // ------------------------------------------------------------

  }, {
    key: "isDirection",
    value: function isDirection() {

      var W = window.innerWidth,
          H = window.innerHeight;

      if (H > W) {
        $("body").addClass("portrait");
        $("body").removeClass("landscape");
      } else {
        $("body").addClass("landscape");
        $("body").removeClass("portrait");
      }
    }

    // ------------------------------------------------------------
    //
    //  responsive 横幅を見る
    //
    // ------------------------------------------------------------

  }, {
    key: "isResponsive",
    value: function isResponsive() {
      var bp00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 375 - 1;
      var bp01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 960;
      var bp02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
      var bp03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1280 + 1;


      var W = window.innerWidth,
          H = window.innerHeight;

      // ブレイクしたときに一度だけイベントを発行する
      if (W > bp00 && this.isRes == 'sp-s') $(window).trigger('sp_s_sp');
      if (W <= bp00 && this.isRes == 'sp') $(window).trigger('sp_sp_s');
      if (W > bp01 && this.isRes == 'sp') $(window).trigger('sp_tab');
      if (W <= bp01 && this.isRes == 'tab') $(window).trigger('tab_sp');
      if (W > bp02 && this.isRes == 'tab') $(window).trigger('tab_pc');
      if (W <= bp02 && this.isRes == 'pc') $(window).trigger('pc_tab');
      if (W > bp03 && this.isRes == 'pc') $(window).trigger('pc_pc_w');
      if (W <= bp03 && this.isRes == 'pc-w') $(window).trigger('pc_w_pc');

      // isRes
      if (W <= bp00) this.isRes = 'sp-s';
      if (W > bp00 && W <= bp01) this.isRes = 'sp';
      if (W > bp01 && W <= bp02) this.isRes = 'tab';
      if (W > bp02 && W <= bp03) this.isRes = 'pc';
      if (W > bp03) this.isRes = 'pc-w';

      // isResPC, isResSP
      if (W > bp01) {
        this.isResSP = false;
        this.isResPC = true;
        $('body').removeClass('isResponsiveSP');
        $('body').addClass('isResponsivePC');
      } else {
        this.isResSP = true;
        this.isResPC = false;
        $('body').addClass('isResponsiveSP');
        $('body').removeClass('isResponsivePC');
      }

      log(this.isResSP, this.isResPC);
    }

    // ------------------------------------------------------------
    //
    //  user agentでpc,sp振り分け
    //
    // ------------------------------------------------------------

  }, {
    key: "isPCSP",
    value: function isPCSP(urlPC, urlSP) {

      var url = location.href;

      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {

        location.href = urlSP;
      }

      if (this.isPC && url.indexOf('pc') == -1) {

        location.href = urlPC;
      }

      if (this.isTAB && url.indexOf('pc') == -1) {

        location.href = urlPC;
      }
    }
  }]);

  return Device;
}();

exports.default = Device;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Math.es6":
/*!***************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/Math.es6 ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  MyMath
//
// ------------------------------------------------------------

var MyMath = function () {
  function MyMath() {
    _classCallCheck(this, MyMath);
  }

  // ランダムな整数を取得
  // -----------------------------------
  // @min : 最小値(int)
  // @max : 最大値(int)
  // return : minからmaxまでのランダムな整数(int)
  // -----------------------------------


  _createClass(MyMath, [{
    key: "randomInt",
    value: function randomInt(min, max) {

      return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    // ランダムな整数を2つの範囲から取得
    // -----------------------------------
    // @min1 : 最小値1(int)
    // @max1 : 最大値1(int)
    // @min2 : 最小値2(int)
    // @max2 : 最大値2(int)
    // return : minからmaxまでのランダムな整数(int)
    // -----------------------------------

  }, {
    key: "random2",
    value: function random2(min1, max1, min2, max2) {

      if (this.hit(2)) {
        return this.randomInt(min1, max1);
      } else {
        return this.randomInt(min2, max2);
      }
    }

    // 1/@rangeの確率でtrueを取得
    // -----------------------------------
    // @range : 母数(int)
    // return : true or false(boolean)
    // -----------------------------------

  }, {
    key: "hit",
    value: function hit(range) {

      return this.randomInt(0, range - 1) === 0;
    }

    // 0から範囲内でランダムな整数を取得
    // -----------------------------------
    // @val : 範囲(int)
    // return : ランダムな整数(int)
    // -----------------------------------

  }, {
    key: "range",
    value: function range(val) {

      return this.randomInt(-val, val);
    }

    // 値をマッピング
    // -----------------------------------
    // @num : マッピングする値(Number)
    // @resMin : 結果となる値の最小値(Number)
    // @resMax : 結果となる値の最大値(Number)
    // @baseMin : 元となる値の最小値(Number)
    // @baseMax : 元となる値の最大値(Number)
    // return : マッピングされた値(Number)
    // -----------------------------------

  }, {
    key: "map",
    value: function map(num, resMin, resMax, baseMin, baseMax) {

      var p;
      if (num < baseMin) {
        return resMin;
      }
      if (num > baseMax) {
        return resMax;
      }
      p = (resMax - resMin) / (baseMax - baseMin);

      return (num - baseMin) * p + resMin;
    }
  }, {
    key: "demical",
    value: function demical(v) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


      // 計算 ( Math.pow( 10, 4 ) = 10000 )
      var val = Math.floor(v * Math.pow(10, n)) / Math.pow(10, n);

      return val;
    }
  }, {
    key: "float",
    value: function float(v) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


      return v.toFixed(n);
    }

    // 数値に小数点第@n位までをつけた文字列を返す
    // -----------------------------------
    // @num : 値(Number)
    // @n : 小数点の位(int)
    // return : 変換された値(String)
    // -----------------------------------
    // decimal(num, n) {
    //   var i, pos;
    //   num = String(num);
    //   pos = num.indexOf(".");
    //   if (n === 0) {
    //     return num.split(".")[0];
    //   }
    //   if (pos === -1) {
    //     num += ".";
    //     i = 0;
    //     while (i < n) {
    //       num += "0";
    //       i++;
    //     }
    //     return num;
    //   }
    //   num = num.substr(0, pos) + num.substr(pos, n + 1);
    //   return num;
    // }

  }, {
    key: "clamp",
    value: function clamp(val, min, max, minVal, maxVal) {

      if (val < min) val = minVal == undefined ? min : minVal;else if (val > max) val = maxVal == undefined ? max : maxVal;

      return val;
    }
  }, {
    key: "rate",
    value: function rate(val, base) {

      var v = val / base;

      return v;
    }
  }, {
    key: "lerp",
    value: function lerp(val01, val02, val) {

      val = val < 0 ? 0 : val;
      val = val > 1 ? 1 : val;
      return val01 + (val02 - val01) * val;
    }
  }, {
    key: "degree",
    value: function degree(radians) {

      return radians * 180 / Math.PI; //1ラジアンが何度か
    }

    // to radians

  }, {
    key: "radian",
    value: function radian(angle) {

      return angle * Math.PI / 180; //1度何ラジアンか
    }
  }, {
    key: "dist",
    value: function dist(p1, p2) {

      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }
  }, {
    key: "ascend",
    value: function ascend(arr) {

      arr.sort(function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      });
      // var a = [5,3,9,1,10]
      // 結果:10,9,5,3,1

      return arr;
    }
  }, {
    key: "descend",
    value: function descend(arr) {

      arr.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      // var a = [5,3,9,1,10]
      // 結果:1,3,5,9,10

      return arr;
    }

    // map(value, min01, max01, min02, max02) {

    //   var dis01 = max01 - min01;
    //   var dis02 = max02 - min02

    //   var rate = dis02 / dis01;

    //   value = value * rate;

    //   return value;
    // }

  }, {
    key: "constrain",
    value: function constrain(value, min, max) {

      return Math.min(max, Math.max(value, min));

      // if (value <= low) value = low;
      // if (value >= high) value = high;     
      // return value;
    }
  }]);

  return MyMath;
}();

exports.default = MyMath;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Other.es6":
/*!****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/Other.es6 ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Other
//
// ------------------------------------------------------------

var Other = function () {
  function Other() {
    _classCallCheck(this, Other);
  }

  // ------------------------------------------------------------
  //  getPageID
  // ------------------------------------------------------------


  _createClass(Other, [{
    key: 'getPageID',
    value: function getPageID() {

      this.pageID = $('body').attr('id');
    }

    // ------------------------------------------------------------
    //
    //  Data type check
    //
    // ------------------------------------------------------------

  }, {
    key: 'isObject',
    value: function isObject(value, ignoreArray) {
      return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
    }
  }, {
    key: 'isNumber',
    value: function isNumber(value) {
      return typeof value === 'number';
    }
  }, {
    key: 'isString',
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: 'isFunction',
    value: function isFunction(value) {
      return typeof value === 'function';
    }
  }, {
    key: 'isArray',
    value: function isArray(value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    }
  }, {
    key: 'isNull',
    value: function isNull(value) {
      return value === null;
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(value) {
      return typeof value === 'undefined';
    }

    // ------------------------------------------------------------
    //
    //  other
    //
    // ------------------------------------------------------------

  }, {
    key: 'setImgSPSize',
    value: function setImgSPSize($target) {

      // responsive spのとき処理
      // if (!this.isResSP) return;
      // 一度だけ処理
      if (this.isSetSPSize) return;
      this.isSetSPSize = true;

      var $img = $target,
          len = $img.length;

      $img.each(function (i) {

        var w = Math.floor($(this).width() / 2),
            h = Math.floor($(this).height() / 2);

        $(this).attr({
          'width': w,
          'height': h
        });

        if (len == i + 1) $(window).trigger('setSpZieEnd');
      });
    }

    // ------------------------------------------------------------
    //  スマホ操作無効
    // ------------------------------------------------------------

  }, {
    key: 'notMove',
    value: function notMove() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var $wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('#wrapper');


      if (flag) {

        log('noveMove');

        $wrap.on('touchstart.noControl touchmove.noControl touchend.noControl', function (e) {
          e.preventDefault();
        });

        // this.f = (e)=>{e.preventDefault();};
        // document.addEventListener('touchmove', this.f, { passive: false });
      } else {

        $wrap.off('touchstart.noControl touchmove.noControl touchend.noControl');

        // document.removeEventListener('touchmove', this.f, false);
      }

      // this.offNotMove();

      // $(window).on('touchstart.noControl touchmove.noControl touchend.noControl click.noControl', function(e){e.preventDefault();});
    }

    // offNotMove() {

    //   $(window).off('touchstart.noControl touchmove.noControl touchend.noControl');
    //   // $(window).off('touchstart.noControl touchmove.noControl touchend.noControl click.noControl');

    // }

    // notMove(flag=true) {

    //   if (flag) {

    //     this.f = (e)=>{e.preventDefault();};

    //     document.addEventListener('touchmove', this.f, { passive: false });

    //   } else {

    //     log('off',this.f)

    //     document.removeEventListener('touchmove', this.f, false);

    //   }

    // }

    // notMove() {

    //   this.offNotMove();

    //   this.f = (e)=>{e.preventDefault();};

    //   document.addEventListener('touchmove', this.f.bind(this), { passive: false });

    // }

    // offNotMove() {


    //   log(111,this.f);
    //   if (this.f) {
    //     log(111,this.f);
    //     document.removeEventListener('touchmove', this.f.bind(this));  
    //   }

    // }


  }, {
    key: 'setPreventMousemove',
    value: function setPreventMousemove() {

      var self = this;

      this.removePrevent();
      $(window).on('touchmove.noControl', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: 'preventDefault',
    value: function preventDefault(e) {

      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    }
  }, {
    key: 'preventDefaultForScrollKeys',
    value: function preventDefaultForScrollKeys(e) {

      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }
  }, {
    key: 'disableScroll',
    value: function disableScroll($target) {

      if ($target.addEventListener) // older FF
        $target.addEventListener('DOMMouseScroll', this.preventDefault, false);
      $target.onwheel = this.preventDefault; // modern standard
      $target.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
      $target.ontouchmove = this.preventDefault; // mobile
      // document.onkeydown  = this.preventDefaultForScrollKeys;
    }
  }, {
    key: 'enableScroll',
    value: function enableScroll($target) {

      if ($target.removeEventListener) $target.removeEventListener('DOMMouseScroll', this.preventDefault, false);
      $target.onmousewheel = document.onmousewheel = null;
      $target.onwheel = null;
      $target.ontouchmove = null;
      document.onkeydown = null;
    }

    // 全画面

  }, {
    key: 'full',
    value: function full() {

      var b = document.body;
      // var b = document.getElementById("wrapper")
      // var b = document.getElementsByClassName('menu03');

      if (b.requestFullScreen) {
        b.requestFullScreen();
      } else if (b.webkitRequestFullScreen) {
        b.webkitRequestFullScreen();
      } else if (b.mozRequestFullScreen) {
        b.mozRequestFullScreen();
      } else if (b.msRequestFullscreen) {
        b.msRequestFullscreen();
      } else {
        alert('ご利用のブラウザはフルスクリーン操作に対応していません');
        return;
      }
    }
  }]);

  return Other;
}();

exports.default = Other;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/String.es6":
/*!*****************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/String.es6 ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  String
//
// ------------------------------------------------------------

var String = function () {
  function String() {
    _classCallCheck(this, String);
  }

  _createClass(String, [{
    key: "isContain",
    value: function isContain(str, contain) {

      // strの中に,containが存在したら
      if (str.indexOf(contain) != -1) {
        return true;
      }

      return false;
    }

    // 0埋めで2桁にする関数

  }, {
    key: "add0",
    value: function add0(str) {
      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;


      return ("000000000000" + str).substr(num);
    }

    // 値段表記
    // -----------------------------------

  }, {
    key: "price",
    value: function price(num) {

      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

    // 文字列を反転
    // -----------------------------------
    // @str : 文字列(String)
    // return : 文字列(String)
    // -----------------------------------

  }, {
    key: "strReverse",
    value: function strReverse(str) {

      var i, len, res;
      res = "";
      len = str.length;
      i = 1;
      while (i <= len) {
        res += str.substr(-i, 1);
        i++;
      }
      return res;
    }

    // 文字列の全置換
    // -----------------------------------
    // @val  : 文字列
    // @oeg  : 置換前の文字列
    // @dest : 置換後の文字列
    // -----------------------------------

  }, {
    key: "replaceAll",
    value: function replaceAll(val, org, dest) {

      return val.split(org).join(dest);
    }
  }, {
    key: "strReplace",
    value: function strReplace(str, before, after) {

      var r = new RegExp(before, 'g');

      return str.replace(r, after);
    }

    // ユニークIDを取得
    // -----------------------------------

  }, {
    key: "unique",
    value: function unique() {

      return new Date().getTime();
    }
  }]);

  return String;
}();

exports.default = String;

/***/ }),

/***/ "../../src/js/src/_MyLibs/Util/UtilPack/Url.es6":
/*!**************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/Util/UtilPack/Url.es6 ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ------------------------------------------------------------
//
//  Url
//
// ------------------------------------------------------------

var Url = function () {
  function Url() {
    _classCallCheck(this, Url);
  }

  // クエリ抜き出し


  _createClass(Url, [{
    key: 'getParam',
    value: function getParam() {

      var url = location.href;
      var param = url.split('?')[1];
      if (param == undefined) return undefined;
      var paramItems = param.split('&');
      var list = {};

      for (var i = 0; i < paramItems.length; i++) {

        paramItem = paramItems[i].split('=');
        list[paramItem[0]] = paramItem[1];
      }

      return list;
    }
  }, {
    key: 'setParam',
    value: function setParam(text) {

      window.history.pushState('', '', '?' + text);
    }

    // ハッシュ取得
    // -----------------------------------
    // return : location.hashの#を削除したやつ
    // -----------------------------------

  }, {
    key: 'hash',
    value: function hash() {

      return location.hash.replace("#", "");
    }
  }, {
    key: 'getHash',
    value: function getHash() {

      return location.hash;
    }
  }, {
    key: 'setHash',
    value: function setHash(text) {

      location.hash = text;
    }

    // 指定したstringがクッキーにセットされていたらtrue

  }, {
    key: 'checkCookie',
    value: function checkCookie(str) {

      var flag = null;

      if ($.cookie(str) == undefined || $.cookie(str) == '') flag = false;else flag = true;

      return flag;
    }

    // 指定したstringがクッキーにセットされていたらtrue

  }, {
    key: 'getCookie',
    value: function getCookie(str) {

      if ($.cookie(str) == undefined || $.cookie(str) == '') return null;else return $.cookie(str);
    }
  }, {
    key: 'setCookie',
    value: function setCookie(str, val, period) {

      var p = period || 5 * 1000; // 5秒
      // var p = period || 30 * 1000; // 30秒
      // var p = period || 15 * 60 * 1000; // 15分
      // var p = period || 7 * 24 * 60 * 60 * 1000; //7日
      var date = new Date();
      date.setTime(date.getTime() + p);

      $.cookie(str, val, { expires: date, path: '/' });
    }

    // ------------------------------------------------------------
    //  host,protcol
    // ------------------------------------------------------------

  }, {
    key: 'protocol',
    value: function protocol() {

      return location.protocol;
    }
  }, {
    key: 'host',
    value: function host() {

      return location.hostname;
      // return location.host
    }
  }, {
    key: 'port',
    value: function port() {

      return location.port;
    }
  }, {
    key: 'path',
    value: function path() {

      return location.pathname;
    }
  }]);

  return Url;
}();

exports.default = Url;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/MouseList.es6":
/*!***************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/MouseList.es6 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  MouseList
//
//--------------------------------------------------

var MouseList = function () {
  function MouseList() {
    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);

    _classCallCheck(this, MouseList);

    this.$wrap = $wrap;

    this.list = [{ name: 'def', func: function func() {} }];
    this.startList = [{ name: 'def', func: function func() {} }];
    this.endList = [{ name: 'def', func: function func() {} }];

    this.x = 0;
    this.y = 0;
    this.endx = 0;
    this.endy = 0;

    this.isStart = true;
    this.Timer = null;
    this.endTime = 20;

    this.setup();
    this.setEvents();
  }

  _createClass(MouseList, [{
    key: 'setup',
    value: function setup() {

      // this.add('onEnd', this.onMouseEnd.bind(this));

    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {

      for (var i in this.list) {
        this.list[i].func();
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {

      if (this.Timer) clearTimeout(this.Timer);
      var dis = gb.m.x - this.endx;
      // log(this.isStart, dis);
      // if (this.isStart && Math.abs(dis)>3) {
      //   this.isStart = false;

      //   // 最初だけの処理
      //   // log('moveStart');

      //   for (var i in this.startList) this.startList[i].func();

      // };

      for (var i in this.list) {
        this.list[i].func();
      }
    }
  }, {
    key: 'onMouseEnd',
    value: function onMouseEnd(e) {
      var _this = this;

      if (this.Timer) clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {
        if (!_this.isStart) {
          _this.isStart = true;

          // log('moveEnd');
          _this.endx = gb.m.x;
          _this.endy = gb.m.y;

          for (var i in _this.endList) {
            _this.endList[i].func();
          }
        }
      }, this.endTime);
    }
  }, {
    key: 'add',
    value: function add(name, func) {

      var obj = { name: name, func: func };

      this.list.push(obj);
    }
  }, {
    key: 'addStart',
    value: function addStart(name, func) {

      var obj = { name: name, func: func };

      this.startList.push(obj);
    }
  }, {
    key: 'addEnd',
    value: function addEnd(name, func) {

      var obj = { name: name, func: func };

      this.endList.push(obj);
    }
  }, {
    key: 'remove',
    value: function remove(name) {

      MouseList.arrRemove(this.list, name);
    }
  }, {
    key: 'removeStart',
    value: function removeStart(name) {

      MouseList.arrRemove(this.startList, name);
    }
  }, {
    key: 'removeEnd',
    value: function removeEnd(name) {

      MouseList.arrRemove(this.endList, name);
    }

    // ------------------------------------------------------------
    //
    //  静的メンバ
    //
    // ------------------------------------------------------------

  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this2 = this;

      this.$wrap.on("touchmove.MouseList", function (e) {
        _this2.onTouchMove(e);
      });
      this.$wrap.on("mousemove.MouseList", function (e) {
        _this2.onMouseMove(e);
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {

      this.$wrap.off("touchmove.MouseList");
      this.$wrap.off("mousemove.MouseList");
    }
  }], [{
    key: 'arrRemove',
    value: function arrRemove(arr, name) {

      var len = arr.length;
      var check;
      for (var i = 0; i < len; i++) {
        check = arr[i];

        if (check.name == name) {
          arr.splice(i, 1);
          i--;
          len--;
        }
      }

      return arr;
    }
  }]);

  return MouseList;
}();

exports.default = MouseList;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/MouseMgr.es6":
/*!**************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/MouseMgr.es6 ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  MouseMgr
//
//--------------------------------------------------

var MouseMgr = function () {
  function MouseMgr() {
    var $wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $(document);

    _classCallCheck(this, MouseMgr);

    this.$wrap = $wrap;

    this.x = 0;
    this.y = 0;
    this.px = 0; // previous
    this.py = 0; // previous

    this.cx = 0;
    this.cy = 0;

    this.setup();
    this.setEvents();
  }

  _createClass(MouseMgr, [{
    key: "setup",
    value: function setup() {}
  }, {
    key: "onMousemove",
    value: function onMousemove(e) {

      this.getPos(e);
    }
  }, {
    key: "onTouchmove",
    value: function onTouchmove(e) {

      this.x = e.originalEvent.changedTouches[0].pageX;
      this.y = e.originalEvent.changedTouches[0].pageY;
    }
  }, {
    key: "getPos",
    value: function getPos(e) {

      if (e.offsetX == undefined) {
        // this works for Firefox
        this.x = e.pageX - this.$wrap.offset().left;
        this.y = e.pageY - this.$wrap.offset().top;
      } else {
        // works in Google Chrome
        this.x = e.pageX - $(window).scrollLeft();
        this.y = e.pageY - $(window).scrollTop();
      }

      this.cx = e.clientX - gb.r.haw;
      this.cy = e.clientY - gb.r.hah;
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this = this;

      this.$wrap.on("touchmove.MouseMgr", function (e) {
        _this.onTouchmove(e);
      });
      this.$wrap.on("mousemove.MouseMgr", function (e) {
        _this.onMousemove(e);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {

      this.$wrap.off("touchmove.MouseMgr");
      this.$wrap.off("mousemove.MouseMgr");
    }
  }]);

  return MouseMgr;
}();

exports.default = MouseMgr;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/ResizeList.es6":
/*!****************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/ResizeList.es6 ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  ResizeList
//
//--------------------------------------------------

var ResizeList = function () {
  function ResizeList() {
    _classCallCheck(this, ResizeList);

    this.list = [];

    this.setup();
    this.setEvents();
  }

  _createClass(ResizeList, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onResize',
    value: function onResize(e) {

      for (var i in this.list) {
        this.list[i].func();
      }
    }
  }, {
    key: 'add',
    value: function add(name, func) {

      var obj = { name: name, func: func };

      this.list.push(obj);
    }
  }, {
    key: 'remove',
    value: function remove(name) {

      var arr = this.list;
      var len = arr.length;
      var check;
      for (var i = 0; i < len; i++) {
        check = arr[i];

        if (check.name == name) {
          arr.splice(i, 1);
          i--;
          len--;
        }
      }
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // $(window).on('resize', this.onResize.bind(this));
      $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
      $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
    }
  }]);

  return ResizeList;
}();

exports.default = ResizeList;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/ResizeMgr.es6":
/*!***************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/ResizeMgr.es6 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  ResizeMgr
//
//--------------------------------------------------

var ResizeMgr = function () {
  function ResizeMgr() {
    _classCallCheck(this, ResizeMgr);

    this.w = 0;
    this.h = 0;
    this.oldW = 0;
    this.oldH = 0;
    this.ww = 0;
    this.wh = 0;

    this.setup();
    this.setEvents();
  }

  _createClass(ResizeMgr, [{
    key: 'setup',
    value: function setup() {

      this.getWindowSize();
    }
  }, {
    key: 'getWindowSize',
    value: function getWindowSize() {

      this.oldW = this.w;
      this.oldH = this.h;
      this.w = window.innerWidth;
      this.h = window.innerHeight;

      this.ww = $(window).width();
      this.hh = $(window).height();

      this.haw = this.w / 2;
      this.hah = this.h / 2;
    }
  }, {
    key: 'onResize',
    value: function onResize(e) {

      this.getWindowSize();
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      $(window).on('resize', this.onResize.bind(this));
      // $(window).on('resize', $.throttle(100, false, this.onResize.bind(this)));
      // $(window).on('resize', $.debounce(200, this.onResize.bind(this)));
    }
  }]);

  return ResizeMgr;
}();

exports.default = ResizeMgr;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/ScrollList.es6":
/*!****************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/ScrollList.es6 ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  ScrollList
//
//--------------------------------------------------

var ScrollList = function () {
  function ScrollList() {
    _classCallCheck(this, ScrollList);

    this.list = [];
    this.endList = [];

    this.isStart = true;
    this.isWheel = false; // wheel中か、そうでないか
    this.endTimer = 200;

    this.setup();
    this.setEvents();
  }

  _createClass(ScrollList, [{
    key: 'setup',
    value: function setup() {

      // this.add('end',this.onEnd.bind(this));

    }
  }, {
    key: 'add',
    value: function add(name, func) {

      var obj = { name: name, func: func };

      this.list.push(obj);
    }
  }, {
    key: 'remove',
    value: function remove(name) {

      ScrollList.arrRemove(this.list, name);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(e) {

      // if (this.isStart) {
      //   this.isStart = false;
      //   // log('resizeStart');
      //   // 最初だけの処理
      // };

      for (var i in this.list) {
        this.list[i].func();
      }
    }
  }, {
    key: 'onMouseWheel',
    value: function onMouseWheel(e, delta, deltaX, deltaY) {

      this.isWheel = true;

      if (deltaY > 0) this.upWheel = true;else this.upWheel = false;

      for (var i in this.list) {
        this.list[i].func();
      }
    }
  }, {
    key: 'onEnd',
    value: function onEnd(e) {

      var self = this;

      if (this.Timer) clearTimeout(this.Timer);
      this.Timer = setTimeout(function () {
        self.isStart = true;
        self.isWheel = false;

        for (var i in self.endList) {
          self.endList[i]();
        }
      }, this.endTimer);
    }
  }, {
    key: 'addFixedObjectScroll',
    value: function addFixedObjectScroll($target) {

      this.list.push(function () {

        $target.css("left", -$(window).scrollLeft());
      });
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {

      // $(window).on('scroll', (e)=>{this.onScroll(e);});
      // var $wrap = $(window).get(0);
      if (gb.u.dv.isPC) var $wrap = $(window).get(0);else var $wrap = $('#wrapper').get(0);
      window.addEventListenerWithOptions($wrap, 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
      // $(window).on('scroll', $.throttle(100, false, this.onScroll.bind(this)));
      // $(document).on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);}); // → document指定だと、trackball controlsが上手く動かない
      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onMouseWheel(e,delta,deltaX,deltaY);});
    }

    // ------------------------------------------------------------
    //
    //  静的メンバ
    //
    // ------------------------------------------------------------

  }], [{
    key: 'arrRemove',
    value: function arrRemove(arr, name) {

      var len = arr.length;
      var check;
      for (var i = 0; i < len; i++) {
        check = arr[i];

        if (check.name == name) {
          arr.splice(i, 1);
          i--;
          len--;
        }
      }

      return arr;
    }
  }]);

  return ScrollList;
}();

exports.default = ScrollList;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/ScrollMgr.es6":
/*!***************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/ScrollMgr.es6 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  ScrollMgr
//
//--------------------------------------------------

var ScrollMgr = function () {
  function ScrollMgr() {
    _classCallCheck(this, ScrollMgr);

    // this.$wrap = $(window);
    if (gb.u.dv.isPC) this.$wrap = $(window);else this.$wrap = $('#wrapper');

    this.st = 0; // 現在のscroll top
    this.prest = 0;
    this.sb = 0; // 現在のscroll bottom

    this.isUp = null; // 上スクロールか下スクロールか;
    this.dis = 0;
    this.deltaY = 0;
    this.offset = 0;

    this.isSetWheel = false;

    this.setup();
    this.setEvents();
  }

  _createClass(ScrollMgr, [{
    key: 'setup',
    value: function setup() {}
  }, {
    key: 'onScroll',
    value: function onScroll() {

      this.st = this.$wrap.scrollTop();
      this.sb = this.st + gb.r.h;

      // down or up
      // if (this.st > this.prest) {
      //   console.log('down');
      // } else {
      //   console.log('up');
      // }
      // this.prest = this.st;
    }
  }, {
    key: 'onWheel',
    value: function onWheel(e, delta, deltaX, deltaY) {

      this.isWheel = true;

      if (deltaY > 0) this.isUp = true;else this.isUp = false;

      this.dis = deltaY - this.deltaY;
      this.offset += deltaY;
      this.deltaY = deltaY;
    }
  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this = this;

      // scroll
      window.addEventListenerWithOptions(this.$wrap.get(0), 'scroll', this.onScroll.bind(this), { passive: true, capture: false });
      // this.$wrap.on('scroll', $.throttle(100, false, this.onScroll.bind(this)));

      // wheel
      if (this.isSetWheel) $(document).on('mousewheel', function (e, delta, deltaX, deltaY) {
        _this.onWheel(e, delta, deltaX, deltaY);
      }); // → document指定だと、trackball controlsが上手く動かない
      // $('canvas').on('mousewheel', (e,delta,deltaX,deltaY)=>{this.onWheel(e,delta,deltaX,deltaY);});
    }
  }]);

  return ScrollMgr;
}();

exports.default = ScrollMgr;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/UpdateList.es6":
/*!****************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/UpdateList.es6 ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  updateList
//
//--------------------------------------------------

var UpdateList = function () {
  function UpdateList() {
    _classCallCheck(this, UpdateList);

    this.list = [];

    this.Timer = null;
    this.isStop = false;
  }

  _createClass(UpdateList, [{
    key: "setup",
    value: function setup() {}
  }, {
    key: "update",
    value: function update() {

      // 処理
      for (var i in this.list) {
        this.list[i].func();
      } // 再帰
      this.Timer = requestAnimationFrame(this.update.bind(this));
      if (this.isStop) cancelAnimationFrame(this.Timer);
    }
  }, {
    key: "start",
    value: function start() {

      this.update();
    }
  }, {
    key: "stop",
    value: function stop() {

      this.isStop = true;
    }
  }, {
    key: "resume",
    value: function resume() {

      this.isStop = false;
      this.update();
    }
  }, {
    key: "add",
    value: function add(name, func) {

      var obj = { name: name, func: func };

      this.list.push(obj);
    }
  }, {
    key: "remove",
    value: function remove(name) {

      var target = { name: name, func: function func() {} };

      UpdateList.arrRemove(this.list, target);
    }

    // ------------------------------------------------------------
    //
    //  静的メンバ
    //
    // ------------------------------------------------------------

  }], [{
    key: "arrRemove",
    value: function arrRemove(arr, target) {

      var len = arr.length;
      var check;
      for (var i = 0; i < len; i++) {
        check = arr[i];

        if (check.name == target.name) {
          arr.splice(i, 1);
          i--;
          len--;
        }
      }

      return arr;
    }
  }]);

  return UpdateList;
}();

exports.default = UpdateList;

/***/ }),

/***/ "../../src/js/src/_MyLibs/View/Events/EventMgr/UpdateMgr.es6":
/*!***************************************************************************************************************************!*\
  !*** /Users/soichirofujii/Project/02_Sense/aid/lumine/htdocs_drama/src/js/src/_MyLibs/View/Events/EventMgr/UpdateMgr.es6 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//--------------------------------------------------
//
//  updateManager
//
//--------------------------------------------------

var UpdateMgr = function () {
  function UpdateMgr() {
    _classCallCheck(this, UpdateMgr);

    this.frame = 0;
    this.len = 0;
    this.Timer = null;
    this.isStop = false;

    this.st = 0;
    this.et = 0;
    this.delta = 0;
    this.frameRate = 0;

    this.setup();
  }

  _createClass(UpdateMgr, [{
    key: "setup",
    value: function setup() {

      this.start = this.st = new Date().getTime();
      this.fps = 60.0;
      this.frameLength = 6.0;
    }
  }, {
    key: "loop",
    value: function loop() {

      // delta
      var et = new Date().getTime();
      this.delta = et - this.st;
      this.st = et;

      // frame
      this.frame++;

      // 再帰
      this.Timer = requestAnimationFrame(this.loop.bind(this));
    }
  }, {
    key: "stop",
    value: function stop() {

      cancelAnimationFrame(this.Timer);
    }
  }, {
    key: "resume",
    value: function resume() {

      this.loop();
    }
  }, {
    key: "getElapsedTime",
    value: function getElapsedTime() {

      var elapsed = new Date().getTime() - this.start;

      return elapsed / 1000;
    }
  }]);

  return UpdateMgr;
}();

exports.default = UpdateMgr;

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map