/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{377:function(Ca,ua,x){function pa(ba,aa,ia){aa.endsWith("/")||(aa+="/");ia=ia||{};var ca=ia.disableWebsockets||!1;this.oR=ia.singleServerMode||!1;null!=ia.customQueryParameters&&Object(n.b)("wvsQueryParameters",ia.customQueryParameters);aa.endsWith("blackbox/")||(aa+="blackbox/");this.Tl=ia.uploadData||null;this.Yu=ia.uriData||null;this.sK=ia.cacheKey||null;this.AO=ia.officeOptions||null;this.ns=Object(h.a)(aa,null,ca);this.xe=
aa;this.QC=ba;this.Ke=null;this.Gi=ka();this.Zk=ka();this.lx=!1;this.wf=this.pd=this.Dd=this.we=null;this.Oe=[];this.Rx=[];this.cache={};this.timeStamp=0;this.hf=[];this.tg=[];this.iD=null;this.MC=!1;this.kG=this.id=null;this.QE=this.bN=ha;this.Sz=0;this.gE=!1;this.vO=1;this.ph={};this.Oo=0;this.uq=la();this.eo(!0)}function la(){var ba={Mp:{},qb:[],pop:function(){var aa=ba.qb.pop();ba.Mp[aa.key]=void 0;return aa},push:function(aa,ia){ia={key:aa,data:ia};ba.qb.push(ia);ba.Mp[aa]=ia.data},contains:function(aa){return!!ba.Mp[aa]},
get:function(aa){return ba.Mp[aa]},set:function(aa,ia){ba.Mp[aa]=ia;ba.qb.forEach(function(ca,ea){ca.key==aa&&(ba.qb[ea]=ca)})},remove:function(aa){ba.Mp[aa]=void 0;ba.qb.forEach(function(ia,ca){ia.key==aa&&ba.qb.splice(ca,1)})},length:function(){return ba.qb.length}};return ba}function ka(){var ba={promise:null,resolve:null,reject:null,state:0,result:null,request:null,Xp:function(){return 1===(ba.state&1)},C4:function(){return 2===(ba.state&2)},kh:function(){return!ba.C4()&&!ba.Xp()},a4:function(){return 4===
(ba.state&4)},KQ:function(){ba.state|=4}};ba.promise=new Promise(function(aa,ia){ba.resolve=function(){if(0===ba.state||4===ba.state)ba.state=1,ba.result=arguments[0],aa.apply(null,arguments)};ba.reject=function(){if(0===ba.state||4===ba.state)ba.state=2,ia.apply(null,arguments)}});return ba}function ha(){return!1}function da(ba,aa,ia){if(!(aa in y))return!0;aa=y[aa];for(var ca=0;ca<aa.length;ca++){var ea=ba;var fa=aa[ca];var ja=ia;if(fa.name in ea){var na="",ma=!1;ea=ea[fa.name];switch(fa.type){case "s":na=
"String";ma=Object(z.isString)(ea);break;case "a":na="Array";ma=Object(z.isArray)(ea);break;case "n":na="Number";ma=Object(z.isNumber)(ea)&&Object(z.isFinite)(ea);break;case "o":na="Object",ma=Object(z.isObject)(ea)&&!Object(z.isArray)(ea)}ma||ja.reject('Expected response field "'+fa.name+'" to have type '+na);fa=ma}else ja.reject('Response missing field "'+fa.name+'"'),fa=!1;if(!fa)return!1}return!0}x.r(ua);var z=x(0);x.n(z);var r=x(1);Ca=x(48);var w=x(32),h=x(396),a=x(80),b=x(302),e=x(101),n=x(37),
f=x(139),y={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};pa.prototype=
Object(z.extend)(pa.prototype,{WY:function(){var ba=this;return new Promise(function(aa,ia){var ca=new XMLHttpRequest;ca.open("GET",ba.xe+"ck");ca.withCredentials=ba.Ej();ca.onreadystatechange=function(){ca.readyState===XMLHttpRequest.DONE&&(200===ca.status?aa():ia())};ca.send()})},P9:function(ba,aa){this.bN=ba||ha;this.QE=aa||ha},GK:function(){var ba=this;this.Zk=ka();this.Gi=ka();return this.ns.$C().then(function(){ba.lx=!1;ba.id=null;ba.MC=!1;return ba.WY()})},YF:function(){this.bN();this.vE();
this.we&&(this.we.kh()?this.Tf(this.we.request):this.we.Xp()&&this.QE(this.we.result.url,"pdf")&&(this.we=null,this.jQ()));this.wf&&this.wf.kh()&&this.Tf(this.wf.request);this.Dd&&this.Dd.kh()?this.Tf(this.Dd.request):this.pd&&this.pd.kh()&&this.SM(this.pd.request);var ba;for(ba=0;ba<this.hf.length;ba++)this.hf[ba]&&this.hf[ba]&&(this.hf[ba].kh()?this.Tf(this.hf[ba].request):this.hf[ba].Xp()&&this.QE(this.hf[ba].result.url,"image")&&(this.hf[ba]=null,this.Pz(Object(z.uniqueId)(),ba)));for(ba=0;ba<
this.tg.length;ba++)this.tg[ba]&&this.tg[ba]&&this.tg[ba].kh()&&!this.tg[ba].a4()&&this.Tf(this.tg[ba].request);for(ba=0;ba<this.Oe.length;ba++)this.Oe[ba]&&this.Oe[ba].kh()&&this.Tf(this.Oe[ba].request)},vE:function(ba){var aa=this;this.lx||(this.timeStamp=Date.now(),this.ns.NG(function(ia){aa.Q5(ia)},function(){return null},function(){return null},!0).then(function(){clearInterval(aa.Iz);aa.Iz=null},function(ia){aa.lx=!1;if(!aa.Iz){var ca=0;aa.MC=!0;aa.kG=0;aa.Iz=setInterval(function(){2>ca++?aa.YF():
(clearInterval(aa.Iz),ba&&ba.reject(e.a),Object(r.g)("WebViewerServer connection failed:"+ia))},5E3)}}),this.lx=!0)},Oaa:function(){var ba=this,aa=createPromiseCapability();if(this.Tl){var ia=new FormData;ia.append("file",this.Tl.fileHandle,this.Tl.fileHandle.name);var ca=this.Tl.loadCallback;var ea="upload";var fa=this.Tl.extension}else if(this.Yu){ia={uri:this.Yu.uri,oha:this.Yu.shareId};ia=Object.keys(ia).map(function(qa){return qa+"="+(ia[qa]?encodeURIComponent(ia[qa]):"")}).join("&");var ja=
"application/x-www-form-urlencoded; charset=UTF-8";ca=this.Yu.loadCallback;ea="url";fa=this.Yu.extension}else return Promise.resolve();var na=new XMLHttpRequest,ma=Object(w.h)(ba.xe,"AuxUpload");ma=Object(f.a)(ma)+"&type="+ea+"&ext="+fa;na.open("POST",ma);na.withCredentials=this.Ej();ja&&na.setRequestHeader("Content-Type",ja);na.addEventListener("load",function(){if(na.readyState===na.DONE&&200===na.status){var qa=JSON.parse(na.response);ba.QC=qa.uri;ca(qa);aa.resolve(qa)}});na.addEventListener("error",
function(){aa.reject(na.statusText+" "+JSON.stringify(na))});this.Tl&&null!=this.Tl.onProgress&&(na.upload.onprogress=function(qa){ba.Tl.onProgress(qa)});na.send(ia);return aa.promise},C8:function(ba){this.password=ba||null;this.Gi.Xp()||(this.Gi=ka(),this.Tf({t:"pages"}));return this.Gi.promise},qu:function(ba){this.iD=ba||null;this.Gi.Xp()||(this.vE(this.Gi),this.Tf({t:"pages"}));return this.Gi.promise},ls:function(ba){ba=Object.assign(ba,{uri:encodeURIComponent(this.QC)});this.iD&&(ba.ext=this.iD);
this.Ke&&(ba.c=this.Ke);this.password&&(ba.pswd=this.password);this.sK&&(ba.cacheKey=this.sK);this.AO&&(ba.officeOptions=this.AO);return ba},j9:function(){0<this.uq.length()&&10>=this.Oo&&this.k9(this.uq.pop().data)},IX:function(ba){return 0<this.uq.length()&&this.uq.contains(ba)?(this.uq.remove(ba),!0):!1},Tf:function(ba){ba=this.ls(ba);this.ns.send(ba)},xQ:function(ba,aa){10<this.Oo?this.uq.push(ba,aa):(this.Oo++,ba=this.ls(aa),this.ns.send(ba))},k9:function(ba){this.Oo++;ba=this.ls(ba);this.ns.send(ba)},
qj:function(ba){return ba},Q5:function(ba){var aa=this,ia=ba.data,ca=ba.err,ea=ba.t;switch(ea){case "upload":ca?aa.Paa.reject(ca):aa.Paa.resolve("Success");break;case "pages":ca?aa.Gi.reject(ca):da(ia,ea,aa.Gi)&&aa.Gi.resolve(ia);break;case "config":if(ca)aa.Zk.reject(ca);else if(da(ia,ea,aa.Zk)){ia.id&&(aa.id=ia.id);if(ia.auth){var fa=Object(n.a)("wvsQueryParameters");fa.auth=ia.auth;Object(n.b)("wvsQueryParameters",fa)}ia.serverVersion&&(aa.qS=ia.serverVersion,Object(r.h)("[WebViewer Server] server version: "+
aa.qS));ia.serverID?(aa.Sz=ia.serverID===aa.kG&&aa.gE?aa.Sz+1:0,aa.kG=ia.serverID):aa.Sz=0;aa.gE=!1;aa.Zk.resolve(ia)}break;case "health":ca?aa.Zk.reject(ca):da(ia,ea,aa.Zk)&&(ia=ia.unhealthy,aa.oR&&ia?Object(r.j)("Server failed health check. Single server mode ignoring check."):!aa.Cda&&ia&&1>=aa.Sz&&(aa.gE=!0,aa.GK().then(function(){aa.YF()},function(){aa.YF()})));break;case "pdf":ia.url=Object(f.a)(aa.xe+"../"+encodeURI(ia.url));ca?aa.we.reject(ca):da(ia,ea,aa.we)&&aa.we.resolve(ia);break;case "ApString2Xod":ia.url=
Object(f.a)(aa.xe+"../data/"+encodeURI(ia.url));ca?aa.ph[ia.rID].reject(ca):da(ia,ea,aa.ph[ia.rID])&&aa.ph[ia.rID].resolve(ia);break;case "docmod":ia.url=Object(f.a)(aa.xe+"../"+encodeURI(ia.url));ca?aa.ph[ia.rID].reject(ca):da(ia,ea,aa.we)&&aa.ph[ia.rID].resolve(ia);break;case "xod":if(ca)this.Dd&&this.Dd.kh()&&this.Dd.reject(ca),this.pd&&this.pd.kh()&&this.pd.reject(ca);else if(ia.notFound)ia.noCreate||this.Dd&&this.Dd.kh()&&this.Dd.resolve(ia),this.pd&&this.pd.kh()&&this.pd.resolve(ia);else{ia.url&&
(ia.url=Object(f.a)(aa.xe+"../"+encodeURI(ia.url)));if(!this.pd||this.pd.Xp())this.pd=ka(),this.pd.request={t:"xod",noCreate:!0};this.Dd||(this.Dd=ka(),this.Dd.request={t:"xod"});this.pd.resolve(ia);this.Dd.resolve(ia)}break;case "annots":if(ca)aa.wf.reject(ca);else if(da(ia,ea,aa.wf)){aa.wf.KQ();var ja=new XMLHttpRequest;fa=aa.xe+"../"+encodeURI(ia.url);var na=ia.hasAppearance?Object(f.a)(fa+".xodapp"):null;ja.open("GET",Object(f.a)(fa));ja.responseType="text";ja.withCredentials=this.Ej();ja.addEventListener("load",
function(){ja.readyState===ja.DONE&&200===ja.status&&aa.wf.resolve({lH:ja.response,Ow:na})});ja.addEventListener("error",function(){aa.wf.reject(ja.statusText+" "+JSON.stringify(ja))});ja.send()}break;case "image":aa.Oo--;var ma=this.hf[ia.p];ca?ma.promise.reject(ca):da(ia,ea,ma)&&(ma.result=ia,ma.result.url=Object(f.a)(aa.xe+"../"+encodeURI(ma.result.url)),ma.resolve(ma.result));break;case "tiles":aa.Oo--;ma=ia.rID;fa=this.Oe[ma];this.Oe[ma]=null;this.Rx.push(ma);if(ca)fa.reject(ca);else if(da(ia,
ea,fa)){for(ca=0;ca<ia.tiles.length;ca++)ia.tiles[ca]=Object(f.a)(aa.xe+"../"+encodeURI(ia.tiles[ca]));fa.resolve(ia)}break;case "text":ma=this.tg[ia.p];if(ca)ma.reject(ca);else if(da(ia,ea,ma)){ma.KQ();var qa=new XMLHttpRequest;ia=Object(f.a)(aa.xe+"../"+encodeURI(ia.url));qa.open("GET",ia);qa.withCredentials=this.Ej();qa.addEventListener("load",function(){qa.readyState===qa.DONE&&200===qa.status&&(ma.result=JSON.parse(qa.response),ma.resolve(ma.result))});qa.addEventListener("error",function(ra){ma.reject(qa.statusText+
" "+JSON.stringify(ra))});qa.send()}break;case "progress":"loading"===ia.t&&aa.trigger(a.a.Events.DOCUMENT_LOADING_PROGRESS,[ia.bytes,ia.total])}this.j9();!ea&&ba.echo&&ba&&"apstring2xod"==ba.echo.t&&(ba=ba.echo.reqID)&&(2<=parseInt(aa.qS)?aa.ph[ba].reject("Message unhandled by server"):aa.ph[ba].reject())},aM:function(){this.vE(this.Zk);return this.Zk.promise},V0:function(ba){for(var aa=this,ia=new XMLHttpRequest,ca=Object(f.a)(this.xe+"aul")+"&id="+this.id,ea=new FormData,fa={},ja=0;ja<ba.body.length;ja++){var na=
ba.body[ja];fa[na.id]=na.hC.w+";"+na.hC.h;ea.append(na.id,na.hC.dataString)}ba={t:"apstring2xod",reqID:this.vO++,parts:fa};var ma=this.ls(ba);ea.append("msg",JSON.stringify(ma));aa.ph[ma.reqID]=ka();ia.open("POST",ca);ia.withCredentials=aa.Ej;ca=new Promise(function(qa,ra){ia.onreadystatechange=function(){4===ia.readyState&&(200===ia.status?qa():ra("An error occurred while sending down appearance strings to the server"))}});ia.send(ea);return ca.then(function(){return aa.ph[ma.reqID].promise})},U0:function(){this.wf||
(this.wf=ka(),this.wf.request={t:"annots"},this.Tf(this.wf.request));return this.wf.promise},Pz:function(ba,aa){this.hf[aa]||(this.hf[aa]=ka(),this.hf[aa].request={t:"image",p:aa},this.xQ(ba,this.hf[aa].request));return this.hf[aa].promise},D8:function(ba){this.tg[ba]||(this.tg[ba]=ka(),this.tg[ba].request={t:"text",p:ba},this.Tf(this.tg[ba].request));return this.tg[ba].promise},E8:function(ba,aa,ia,ca,ea){var fa=this.Oe.length;this.Rx.length&&(fa=this.Rx.pop());this.Oe[fa]=ka();this.Oe[fa].request=
{t:"tiles",p:aa,z:ia,r:ca,size:ea,rID:fa};this.xQ(ba,this.Oe[fa].request);return this.Oe[fa].promise},jQ:function(){this.we||(this.we=ka(),this.we.request={t:"pdf"},this.MC?this.we.resolve({url:this.QC}):this.Tf(this.we.request));return this.we.promise},tM:function(ba){var aa=this,ia=new XMLHttpRequest,ca=Object(f.a)(this.xe+"aul")+"&id="+this.id,ea=new FormData,fa={};ba.annots&&(fa.annots="xfdf");ba.watermark&&(fa.watermark="png");ba.redactions&&(fa.redactions="redact");fa={t:"docmod",reqID:this.vO++,
parts:fa};ba.print&&(fa.print=!0);var ja=this.ls(fa);ea.append("msg",JSON.stringify(ja));return Promise.all([ba.annots,ba.watermark,ba.redactions].map(function(na){return Promise.resolve(na)})).then(function(na){var ma=na[0],qa=na[1],ra=na[2];ma&&ea.append("annots",ma);qa&&ea.append("watermark",na.watermark);ra&&ea.append("redactions",ra);aa.ph[ja.reqID]=ka();ia.open("POST",ca);ia.withCredentials=aa.Ej;na=new Promise(function(ta,va){ia.onreadystatechange=function(){4===ia.readyState&&(200===ia.status?
ta():va("An error occurred while sending down annotation data to the server"))}});ia.send(ea);return na.then(function(){return aa.ph[ja.reqID].promise})})},SM:function(){this.pd||(this.pd=ka(),this.pd.request={t:"xod",noCreate:!0},this.Tf(this.pd.request));return this.pd.promise},F8:function(){this.Dd||(this.Dd=ka(),this.Dd.request={t:"xod"},this.Tf(this.Dd.request));return this.Dd.promise},Jl:function(){return!0},request:function(){},HP:function(){},abort:function(){for(var ba=0;ba<this.Oe.length;ba++)this.Oe[ba]&&
(this.Oe[ba].resolve(null),this.Oe[ba]=null,this.Rx.push(ba));this.close()},aA:function(ba){this.Ke=this.Ke||{};this.Ke.headers=ba},zea:function(){return this.Ke?Object(z.omit)(this.Ke.headers,["Cookie","cookie"]):null},eo:function(ba){this.Ke=this.Ke||{};this.Ke.internal=this.Ke.internal||{};this.Ke.internal.withCredentials=ba},Ej:function(){return this.Ke&&this.Ke.internal?this.Ke.internal.withCredentials:null},getFileData:function(){return Promise.reject()}});Object(Ca.a)(pa);Object(b.a)(pa);Object(b.b)(pa);
ua["default"]=pa},396:function(Ca,ua,x){function pa(z,r,w){function h(b,e){function n(qa){y().then(function(ra){fa&&!ja?setTimeout(function(){n(qa)},1):ra.send(JSON.stringify(qa))})}function f(qa,ra,ta,va){var sa=window.createPromiseCapability(),Da=!1,Ja=sa;ia=qa;ca=ra;ea=ta;aa=null;va&&(qa=Object(ha.a)("wvsQueryParameters"),qa.bcid=Object(ka.i)(8),Object(ha.b)("wvsQueryParameters",qa));try{qa=na?ma+"/"+na:ma+"/ws";qa=Object(da.a)(qa);var Oa=new WebSocket(qa);Oa.onopen=function(){sa.resolve();Da=
!0;sa=null;fa=!1;ba.resolve(Oa);ca&&ca()};Oa.onerror=function(Ia){fa=ja=!0;sa&&sa.reject(Ia);aa&&aa.reject()};Oa.onclose=function(){ba=window.createPromiseCapability();fa=!0;aa||(aa=window.createPromiseCapability());aa.resolve();ea&&ea();ia&&Da&&ia({t:"health",data:{unhealthy:!0,isDead:!0}})};Oa.onmessage=function(Ia){Ia&&Ia.data&&(Ia=JSON.parse(Ia.data),Ia.hb?n({hb:!0}):Ia.end?close():ia(Ia))}}catch(Ia){sa.reject(Ia),sa=null}return Ja.promise}function y(){fa&&ia&&f(ia);return ba.promise}var ba=window.createPromiseCapability(),
aa=null,ia,ca,ea=null,fa=!1,ja=!1,na=e,ma=function(qa){var ra=qa.indexOf("://"),ta="ws://";0>ra?ra=0:(5===ra&&(ta="wss://"),ra+=3);var va=qa.lastIndexOf("/");0>va&&(va=qa.length);return ta+qa.slice(ra,va)}(b);return{send:n,NG:f,$C:function(){return aa?aa.promise:y().then(function(qa){aa=window.createPromiseCapability();ia=null;qa.close();return aa.promise})}}}function a(b){var e=b.lastIndexOf("/");0>e&&(e=b.length);return b.slice(0,e)}return window.WebSocket&&!w?h(z,r):function(b,e){function n(qa){(ea?
ea.promise:Promise.resolve(ca)).then(function(ra){var ta=new XMLHttpRequest,va=ia?aa+"/"+ia+"pf":aa+"/pf";va=Object(da.a)(va)+"&id="+ra;ra=new FormData;ra.append("data",JSON.stringify(qa));ta.open("POST",va);ta.withCredentials=!0;ta.send(ra)})}function f(){ca=0;ea||(ea=window.createPromiseCapability())}function y(){ba=new XMLHttpRequest;var qa=aa+"/pf";qa+=0!==ca?"?id="+ca+"&uc="+ma:"?uc="+ma;ma++;ba.open("GET",qa,!0);ba.withCredentials=!0;ba.setRequestHeader("Cache-Control","no-cache");ba.setRequestHeader("X-Requested-With",
"XMLHttpRequest");var ra=ba,ta=!1;ba.onreadystatechange=function(){a:if(3<=ra.readyState&&!ta){try{var va=ra.responseText.length}catch(Ja){Object(la.h)("caught exception");break a}if(0<va)try{var sa=ra.responseText.split("\n");for(sa[sa.length-1]&&sa.pop();0<sa.length&&3>sa[sa.length-1].length;)"]"===sa.pop()&&f();0<sa.length&&3>sa[0].length&&sa.shift();for(va=0;va<sa.length;++va)sa[va].endsWith(",")&&(sa[va]=sa[va].substr(0,sa[va].length-1));0===ca&&0<sa.length&&(ca=JSON.parse(sa.shift()).id,va=
ea,ea=null,va.resolve(ca));var Da;for(va=0;va<sa.length;++va)(Da=JSON.parse(sa[va]))&&Da.end?close():Da&&Da.hb&&Da.id===ca?n({hb:!0}):na(Da)}catch(Ja){}fa||(ta=!0,y())}};ba.send()}var ba,aa=a(b),ia=e,ca=0,ea=window.createPromiseCapability(),fa=!1,ja=null,na=null,ma=0;return{send:n,NG:function(qa,ra,ta){na=qa;ja=ta;fa=!1;f();y();ra&&ra();return Promise.resolve()},$C:function(){f();na=null;fa=!0;ja&&ja();ba.abort();return Promise.resolve()}}}(z,r)}x.d(ua,"a",function(){return pa});var la=x(1),ka=x(32),
ha=x(37),da=x(139)}}]);}).call(this || window)