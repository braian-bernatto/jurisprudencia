/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{374:function(Ca,ua,x){x.r(ua);var pa=x(2),la=x(206);Ca=x(366);x(32);x=x(302);var ka=function(ha){function da(z,r){var w=ha.call(this,z,r)||this;w.url=z;w.range=r;w.status=la.a.NOT_STARTED;return w}Object(pa.c)(da,ha);da.prototype.start=function(){var z=document.createElement("IFRAME");z.setAttribute("src",this.url);document.documentElement.appendChild(z);z.parentNode.removeChild(z);this.status=la.a.STARTED;this.ny()};return da}(Ca.ByteRangeRequest);
Ca=function(ha){function da(z,r,w,h){z=ha.call(this,z,r,w,h)||this;z.iu=ka;return z}Object(pa.c)(da,ha);da.prototype.os=function(z,r){return z+"#"+r.start+"&"+(r.stop?r.stop:"")};return da}(Ca["default"]);Object(x.a)(Ca);Object(x.b)(Ca);ua["default"]=Ca}}]);}).call(this || window)