(function(){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var k;a:{var ba={G:!0},ca={};try{ca.__proto__=ba;k=ca.G;break a}catch(a){}k=!1}g=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=g,ea=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype},m=this,p=function(a){return"string"==typeof a},ha=function(){if(null===q){a:{var a=m.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&fa.test(a))break a;a=null}q=a||""}return q},fa=/^[\w+/_-]+[=]{0,2}$/,q=null,ia=function(){},r=function(a){a.m=void 0;a.g=function(){return a.m?a.m:a.m=new a}},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},v=function(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.I=function(a,c,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var w=function(a,b){for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},ja=function(a){for(var b=x(219),c=b.length,d=Array(c),e=p(b)?b.split(""):b,f=0;f<c;f++)f in e&&(d[f]=a.call(void 0,e[f],f,b));return d},ka=function(a,b){a:{for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]};var y;a:{var la=m.navigator;if(la){var ma=la.userAgent;if(ma){y=ma;break a}}y=""};var oa=function(){var a=na,b={},c;for(c in a)b[c]=a[c];return b};var z=function(a){z[" "](a);return a};z[" "]=ia;var B=function(){this.b="";this.c=pa};B.prototype.iGSTS=!0;B.prototype.a=function(){return this.b};var qa=function(a){return a instanceof B&&a.constructor===B&&a.c===pa?a.b:"type_error:TrustedResourceUrl"},pa={};var C=function(){this.l="";this.F=ra};C.prototype.iGSTS=!0;C.prototype.a=function(){return this.l};var sa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ra={},ta=function(a){var b=new C;b.l=a;return b};ta("about:blank");var ua=function(a,b){a.src=qa(b);(b=ha())&&a.setAttribute("nonce",b)};var D=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var wa=function(a){va();var b=new B;b.b=a;return b},va=ia;var Aa=function(a,b,c){var d=!1;void 0===c||c||(d=xa());return!d&&!ya()&&(c=Math.random(),c<b)?(c=za(),a[Math.floor(c*a.length)]):null},za=function(){if(!m.crypto)return Math.random();try{var a=new Uint32Array(1);m.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Ba=function(){var a=x(210),b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0},ya=D(function(){return-1!=y.indexOf("Google Web Preview")||1E-4>Math.random()}),xa=D(function(){return-1!=y.indexOf("MSIE")}),E=function(a){return/^true$/.test(a)},Ca=function(){try{return ha()}catch(a){}};var F=function(){return m.googletag||(m.googletag={})};var G={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,85:0,99:.01,103:.01,104:"/pagead/js/rum.js",113:1,114:1,115:0,116:0,117:1,118:1,124:1,208:.01,169:0,207:.01,127:0,129:.05,131:"",134:.01,135:.1,229:!1,143:.005,168:0,144:.001,187:.01,141:1,158:.001,150:"",179:.05,170:!1,211:!1,196:.001,234:.01,197:.001,152:[],172:null,182:1E3,188:0,189:.01,191:"001530320824316",192:"041530567757224",190:"031530567757224",194:.95,225:.95,231:.1,199:0,180:null,219:[],230:{},210:{},227:{},226:[],195:1,198:1,222:1,200:1,201:.001,202:"",203:.01,206:0,213:1,214:.05,215:.01,233:.01,235:.01,217:0,218:.01,220:!1,228:"//www.googletagservices.com/pubconsole/"};G[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);G[49]=(new Date).getTime();G[36]=E("false");G[46]=E("false");G[148]=E("false");G[221]=E("");G[232]=E("false");var Da;a:{if(/^(-?[0-9.]{1,30})$/.test("{{MOD}}")){var Ea=Number("{{MOD}}");if(!isNaN(Ea)){Da=Ea;break a}}Da=-1}G[204]=Da;var H=function(){for(var a in G)this[a]=G[a]};r(H);var x=function(a){return H.g()[a]},I=function(a,b){H.g()[a]=b},Fa=F(),Ga=H.g(),Ha=Fa._vars_,Ia;for(Ia in Ha)Ga[Ia]=Ha[Ia];Fa._vars_=Ga;var Ja=function(){return"231"},Ka=F();Ka.hasOwnProperty("getVersion")||(Ka.getVersion=Ja);var J=function(){},La="function"==typeof Uint8Array,L=function(a,b,c,d){a.b=null;b||(b=[]);a.K=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var e=a.a[b];if(e&&"object"==typeof e&&"array"!=t(e)&&!(La&&e instanceof Uint8Array)){a.h=b-a.f;a.c=e;break a}}a.h=Number.MAX_VALUE}a.J={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.h?(e+=a.f,a.a[e]=a.a[e]||K):(Ma(a),a.c[e]=a.c[e]||K);if(d&&d.length)for(b=0;b<d.length;b++)Na(a,d[b])},K=[],Ma=function(a){var b=a.h+a.f;a.a[b]||(a.c=a.a[b]={})},Oa=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===K?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===K?a.c[b]=[]:c},Pa=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===K?a.a[b]=[]:c}c=a.c[b];return c===K?a.c[b]=[]:c},M=function(a,b,c){a=Oa(a,b);return null==a?c:a},Qa=function(a,b,c){b<a.h?a.a[b+a.f]=c:(Ma(a),a.c[b]=c)},Na=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=Oa(a,f);null!=h&&(c=f,d=h,Qa(a,f,void 0))}return c?(Qa(a,c,d),c):0},Ra=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=Oa(a,c);d&&(a.b[c]=new b(d))}return a.b[c]},Sa=function(a,b){a.b||(a.b={});if(!a.b[2]){for(var c=Pa(a,2),d=[],e=0;e<c.length;e++)d[e]=new b(c[e]);a.b[2]=d}b=a.b[2];b==K&&(b=a.b[2]=[]);return b};var Ta=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)},Ua=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};var Va=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var N=null,Wa=function(){if(null===N){N="";try{var a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);N=b?b[1]:""}}catch(c){}}return N};var Ya=function(a){L(this,a,Xa,null)};v(Ya,J);var Xa=[2],$a=function(a){L(this,a,Za,null)};v($a,J);var Za=[2];$a.prototype.getId=function(){return M(this,1,0)};var O=function(a){L(this,a,ab,bb)};v(O,J);var ab=[5],bb=[[1,2,3,6]],db=function(a){L(this,a,cb,null)};v(db,J);var cb=[4],gb=function(a){L(this,a,eb,fb)};v(gb,J);var eb=[2,8],fb=[[3,4,5],[6,7]];var hb=function(a,b){switch(b){case 1:return M(a,1,0);case 2:return M(a,2,0);case 3:return M(a,3,0);case 6:return M(a,6,0);default:return null}},ib=function(a,b){if(!a)return null;switch(b){case 1:return M(a,1,!1);case 2:return+M(a,2,0);case 3:return M(a,3,"");case 6:return Pa(a,4);default:return null}},jb=D(function(){var a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),Q=function(a,b,c){var d=jb();if(d[a]&&null!=d[a][b])return d[a][b];b=P.g().a[a][b];if(!b)return c;b=new O(b);P.g();b=Ra(b,db,4);a=ib(b,a);return null!=a?a:c},P=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a)};r(P);var kb=function(a){var b=P.g().a;w(a,function(a){var c=Na(a,bb[0]),e=hb(a,c);e&&(b[c][e]=a.a)})};var lb=function(a,b){var c=this,d=void 0===b?{}:b;b=void 0===d.u?!1:d.u;var e=void 0===d.w?{}:d.w;d=void 0===d.C?[]:d.C;this.c=a;this.f=b;this.a=e;this.h=d;this.b={};if(a=Wa())a=a.split(",")||[],w(a,function(a){(a=parseInt(a,10))&&(c.b[a]=!0)})},ob=function(){var a=mb.g(),b=a.c[5];b&&(delete a.c[5],w(b,function(b){b=new Ya(b);!Ra(b,gb,3)&&(b=nb(a,b))&&(a.h.push(b.getId()),(b=Sa(b,O))&&kb(b))}))},nb=function(a,b){var c=Sa(b,$a),d=c.length;if(!d)return null;var e=M(b,4,0);b=d*M(b,1,0);if(!e)return pb(a,c,b/1E3);d=null!=a.a[e]?a.a[e]:1E3;if(0>=d)return null;c=pb(a,c,b/d);a.a[e]=c?0:d-b;return c},pb=function(a,b,c){var d=a.b,e=ka(b,function(a){return!!d[a.getId()]});return e?e:a.f?null:Aa(b,c,!1)};var qb=function(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;m.google_image_requests||(m.google_image_requests=[]);var d=m.document.createElement("img");if(b){var e=function(){if(b){var a=m.google_image_requests;a:if(p(a))var c=p(d)&&1==d.length?a.indexOf(d,0):-1;else{for(c=0;c<a.length;c++)if(c in a&&a[c]===d)break a;c=-1}0<=c&&Array.prototype.splice.call(a,c,1)}Ua(d,"load",e);Ua(d,"error",e)};Ta(d,"load",e);Ta(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;m.google_image_requests.push(d)};var rb=D(function(){var a=m.navigator&&m.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),R=function(a,b,c,d,e){d=void 0===d?"":d;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=qa(b);else{if(b instanceof B)var u=qa(b);else{if(b instanceof C)var n=b instanceof C&&b.constructor===C&&b.F===ra?b.l:"type_error:SafeUrl";else{if(b instanceof C)var l=b;else b=b.iGSTS?b.a():String(b),sa.test(b)||(b="about:invalid#zClosurez"),l=ta(b);n=l.a()}u=n}h=u}f.href=h}catch(A){return}d&&"preload"==c&&(f.as=d);e&&(f.nonce=e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(A){}};var sb=/^\.google\.(com?\.)?[a-z]{2,3}$/,tb=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,ub=function(a){return sb.test(a)&&!tb.test(a)},vb=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},S=m,wb=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(m.location.hostname)];T[3]>=+new Date&&b.push("adsid="+encodeURIComponent(T[1]));return a+"?"+b.join("&")},T,U,V=function(){S=m;T=S.googleToken=S.googleToken||{};var a=+new Date;T[1]&&T[3]>a&&0<T[2]||(T[1]="",T[2]=-1,T[3]=-1,T[4]="",T[6]="");U=S.googleIMState=S.googleIMState||{};ub(U[1])||(U[1]=".google.com");"array"==t(U[5])||(U[5]=[]);"boolean"==typeof U[6]||(U[6]=!1);"array"==t(U[7])||(U[7]=[]);"number"==typeof U[8]||(U[8]=0)},xb=function(a){try{a()}catch(b){m.setTimeout(function(){throw b;},0)}},zb=function(a){"complete"==m.document.readyState||"loaded"==m.document.readyState||m.document.currentScript&&m.document.currentScript.async?yb(3):a()},Ab=0,W={i:function(){return 0<U[8]},o:function(){U[8]++},A:function(){0<U[8]&&U[8]--},B:function(){U[8]=0},j:function(){},D:function(){return!1},v:function(){return U[5]},s:xb},X={i:function(){return U[6]},o:function(){U[6]=!0},A:function(){U[6]=!1},B:function(){U[6]=!1},j:function(){},D:function(){return".google.com"!=U[1]&&2<++Ab},v:function(){return U[7]},s:function(a){zb(function(){xb(a)})}},yb=function(a){1E-5>Math.random()&&qb("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a)};W.j=function(){if(!W.i()){var a=m.document,b=function(b){var c=wb("js",b),d=Ca();R(a,c,"preload","script",d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return m.processGoogleToken({},2)};c=wa(c);ua(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),W.o()}catch(u){}},c=U[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);m.setTimeout(function(){return m.processGoogleToken(d,1)},1E3)}};X.j=function(){if(!X.i()){var a=m.document,b=wb("sync.js",U[1]);R(a,b,"preload","script");b=vb(b);var c=z("script"),d="",e=Ca();e&&(d='nonce="'+vb(e)+'"');var f="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");zb(function(){a.write(f);X.o()})}};var Bb=function(a){V();T[3]>=+new Date&&T[2]>=+new Date||a.j()},Db=function(){m.processGoogleToken=m.processGoogleToken||function(a,b){return Cb(W,a,b)};Bb(W)},Eb=function(){m.processGoogleTokenSync=m.processGoogleTokenSync||function(a,b){return Cb(X,a,b)};Bb(X)},Cb=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),u=b["1p_jar"]||"";b=b.pucrd||"";V();1==c?a.B():a.A();if(!d&&a.D())ub(".google.com")&&(U[1]=".google.com"),a.j();else{var n=S.googleToken=S.googleToken||{},l=0==c&&d&&p(d)&&!e&&"number"==typeof f&&0<f&&"number"==typeof h&&0<h&&p(u);e=e&&!a.i()&&(!(T[3]>=+new Date)||"NT"==T[1]);var A=!(T[3]>=+new Date)&&0!=c;if(l||e||A)e=+new Date,f=e+1E3*f,h=e+1E3*h,yb(c),n[5]=c,n[1]=d,n[2]=f,n[3]=h,n[4]=u,n[6]=b,V();if(l||!a.i()){c=a.v();for(d=0;d<c.length;d++)a.s(c[d]);c.length=0}}};var Fb=function(){this.a=null},Gb=function(a,b){a.a=b};Fb.prototype.b=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new Va(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);m.google_js_errors=m.google_js_errors||[];m.google_js_errors.push(b);m.error_rep_loaded||(b=m.document,a=b.createElement("script"),ua(a,wa(m.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),m.error_rep_loaded=!0);return!1};var Hb=function(a,b){var c=void 0===c?a.b:c;try{b()}catch(d){if(!c.call(a,420,d,.01,void 0,"gpt_exception"))throw d;}};var Ib=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];w(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Jb=[[28,null,null,[1]],[18,null,null,[1]],[25,null,null,[1]],[null,8,null,[null,-1]],[15,null,null,[1]],[null,null,2,[null,null,"1-0-29"]],[21,null,null,[1]],[4,null,null,[1]],[7,null,null,[1]]];var Kb=function(){lb.call(this,x(210),{u:x(211),w:x(227),C:x(226)})};ea(Kb,lb);var na={3:[[10,[[21061799],[21061800],[21061801]]],[50,[[21061763],[21061764,[[5,null,null,[1]],[4,null,null,[1]]]]]],[50,[[21062082],[21062083,[[11,null,null,[1]]]]]],[null,[[21062156],[21062157,[[15,null,null,[1]]]]]],[10,[[21062287],[21062288,[[27,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[32,null,null,[1]]]],[21062289,[[null,6,null,[null,1]],[27,null,null,[1]],[26,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[32,null,null,[1]]]]]],[null,[[21062261],[21062262,[[33,null,null,[1]]]]]],[null,[[21062229],[21062230,[[30,null,null,[1]]]],[21062245,[[30,null,null,[1]],[31,null,null,[1]]]]]],[null,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,1E4]]]]]],[1,[[21062185],[21062186,[[24,null,null,[1]]]]]],[null,[[21062168],[21062169,[[23,null,null,[1]]]]]],[1,[[22321847],[21062060,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]]],[22321848,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]]],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]],[21062061,[[null,null,null,[null,null,null,["125","125","125","125"]],null,2]]],[21062059,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]]]]],[1E3,[[21062150,null,[3,[[6,null,null,1,null,19],[6,null,null,1,null,29],[6,null,null,1,null,39],[6,null,null,1,null,49]]]],[21062153,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]],[3,[[6,null,null,1,null,16],[6,null,null,1,null,26],[6,null,null,1,null,36],[6,null,null,1,null,46]]]],[21062152,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]],[3,[[6,null,null,1,null,17],[6,null,null,1,null,27],[6,null,null,1,null,37],[6,null,null,1,null,47]]]],[21062151,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]],[3,[[6,null,null,1,null,18],[6,null,null,1,null,28],[6,null,null,1,null,38],[6,null,null,1,null,48]]]]],[4,null,3]],[1,[[21062021],[21062012],[21062013],[21062014],[21062015],[21062016],[21062017],[21062018],[21062019],[21062020],[21062011]]],[100,[[21061811],[21061812,[[3,null,null,[1]]]]]],[1E3,[[21062101,null,[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]]],[21062102,null,[2,[[8,null,null,1,null,19],[7,null,null,1,null,30]]]],[21062103,null,[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]]],[21062104,null,[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]]]],[4,null,3]],[10,[[22322686],[22322687,[[null,3,null,[null,.01]]]]]],[null,[[21062120,[[null,null,2,[null,null,"1-0-29"]]]],[21062119],[21062118,[[null,null,null,[null,null,null,["v","1-0-29"]],null,1]]]]],[10,[[21062123],[21062124,[[13,null,null,[1]]]]]],[1E3,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[10,[[21062125],[21062137,[[null,2,null,[null,5E3]]]],[21062126,[[null,2,null,[null,1E3]]]],[21062136,[[null,2,null,[null,3E3]]]]]],[10,[[21061803],[21061804]]]],4:[[null,[[21062282],[21062283,[[8,null,null,[1]]]],[21062281]]],[null,[[21062304],[21062305,[[34,null,null,[1]]]]]]],5:[[null,[[21061212],[21061213,[[16,null,null,[1]]]],[21061214,[[17,null,null,[1]]]],[21061277,[[17,null,null,[1]],[16,null,null,[1]]]]]]]};var mb=function(){Ba()&&I(210,oa());Kb.call(this);x(219).length||I(219,Jb);kb(ja(function(a){return new O(a)}));I(230,P.g().a)};ea(mb,Kb);r(mb);z("partner.googleadservices.com");var Lb=z("www.googletagservices.com"),Y="",Z="",Mb=x(46)&&!x(6);Y=Mb?"http:":"https:";Z=x(Mb?2:3);var Nb=function(a){var b=x(148)?Wa():"";return(b=b&&b.match(new RegExp("\\b("+a.join("|")+")\\b")))?b[0]:Aa(a,.001*a.length)};(function(a){var b=new Fb;Gb(b,function(a){a.methodId=420});Hb(b,function(){var b=a,d=F(),e=d.fifWin||window;b=b||e.document;var f=[],h=F();h.hasOwnProperty("cmd")||(h.cmd=f);if(d.evalScripts)d.evalScripts();else{ob();f=b;if(h=Nb(["21061590","21061591"]))"21061591"==h?(I(173,Lb),I(174,Lb)):I(163,h),x(152).push(h);-1!=y.indexOf("Mobile")||I(194,x(225));h=x(150);V();ub(h)&&(U[1]=h);if(!(h=f.currentScript))a:{if(f=f.scripts)for(h=0;h<f.length;h++){var u=f[h];if(-1<u.src.indexOf(Lb+"/tag/js/gpt")){h=u;break a}}h=null}I(172,h);e.PerformanceObserver&&e.PerformanceLongTaskTiming&&Ib(e);f=e;f=void 0===f?m:f;if(f=(f=f.performance)&&f.now?f.now():null)f={label:"1",type:9,value:f},e=e.google_js_reporting_queue=e.google_js_reporting_queue||[],1024>e.length&&e.push(f);if(e=x(76))var n=e;else{var l;e="";if(x(148))try{f="";try{f=m.top.location.hash}catch(A){f=m.location.hash}f&&(e=(l=f.match(/\bgptv=(\d+)/))?l[1]:"")}catch(A){}l=e;e="";x(131)?n="231":"21062294"==Nb(["21062293","21062294"])&&(f=Date.now(),e="?cb="+f,I(163,f));e=Y+"//"+Z+"/gpt/pubads_impl_"+(l?l:n||"225")+".js"+e;I(76,e);n=e}l=b.currentScript;if(!("complete"==b.readyState||"loaded"==b.readyState||l&&l.async)){l="gpt-impl-"+Math.random();try{e='<script id="'+l+'" src="'+n+'">\x3c/script>',Q(1,17,!1)&&rb()&&(e+='<link rel="preconnect" href="'+Y+"//"+Z+'">'),b.write(e)}catch(A){}b.getElementById(l)&&(d._loadStarted_=!0,I(220,!1),Q(2,4,0)||Eb())}d._loadStarted_||(Q(2,4,0)||Db(),Q(1,16,!1)&&R(b,n,"preload","script"),l=b.createElement("script"),l.src=n,l.async=!0,(b.head||b.body||b.documentElement).appendChild(l),Q(1,17,!1)&&rb()&&R(b,Y+"//"+Z,"preconnect"),I(220,!0),d._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
