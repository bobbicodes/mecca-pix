// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__11555 = e.target.readyState;
var fexpr__11554 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__11554.cljs$core$IFn$_invoke$arity$1 ? fexpr__11554.cljs$core$IFn$_invoke$arity$1(G__11555) : fexpr__11554.call(null,G__11555));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11557,handler){
var map__11558 = p__11557;
var map__11558__$1 = ((((!((map__11558 == null)))?(((((map__11558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11558):map__11558);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11558__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11558__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11558__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11558__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11558__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11558__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11558__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11558,map__11558__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11556_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__11556_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__11558,map__11558__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___11570 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___11570)){
var response_type_11571 = temp__5457__auto___11570;
this$__$1.responseType = cljs.core.name(response_type_11571);
} else {
}

var seq__11560_11572 = cljs.core.seq(headers);
var chunk__11561_11573 = null;
var count__11562_11574 = (0);
var i__11563_11575 = (0);
while(true){
if((i__11563_11575 < count__11562_11574)){
var vec__11564_11576 = chunk__11561_11573.cljs$core$IIndexed$_nth$arity$2(null,i__11563_11575);
var k_11577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11564_11576,(0),null);
var v_11578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11564_11576,(1),null);
this$__$1.setRequestHeader(k_11577,v_11578);


var G__11579 = seq__11560_11572;
var G__11580 = chunk__11561_11573;
var G__11581 = count__11562_11574;
var G__11582 = (i__11563_11575 + (1));
seq__11560_11572 = G__11579;
chunk__11561_11573 = G__11580;
count__11562_11574 = G__11581;
i__11563_11575 = G__11582;
continue;
} else {
var temp__5457__auto___11583 = cljs.core.seq(seq__11560_11572);
if(temp__5457__auto___11583){
var seq__11560_11584__$1 = temp__5457__auto___11583;
if(cljs.core.chunked_seq_QMARK_(seq__11560_11584__$1)){
var c__4351__auto___11585 = cljs.core.chunk_first(seq__11560_11584__$1);
var G__11586 = cljs.core.chunk_rest(seq__11560_11584__$1);
var G__11587 = c__4351__auto___11585;
var G__11588 = cljs.core.count(c__4351__auto___11585);
var G__11589 = (0);
seq__11560_11572 = G__11586;
chunk__11561_11573 = G__11587;
count__11562_11574 = G__11588;
i__11563_11575 = G__11589;
continue;
} else {
var vec__11567_11590 = cljs.core.first(seq__11560_11584__$1);
var k_11591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11567_11590,(0),null);
var v_11592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11567_11590,(1),null);
this$__$1.setRequestHeader(k_11591,v_11592);


var G__11593 = cljs.core.next(seq__11560_11584__$1);
var G__11594 = null;
var G__11595 = (0);
var G__11596 = (0);
seq__11560_11572 = G__11593;
chunk__11561_11573 = G__11594;
count__11562_11574 = G__11595;
i__11563_11575 = G__11596;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
