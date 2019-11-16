// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__13654){
var vec__13655 = p__13654;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13655,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__13658 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__13658);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__13661){
var map__13662 = p__13661;
var map__13662__$1 = ((((!((map__13662 == null)))?(((((map__13662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13662):map__13662);
var request = map__13662__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13662__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13662__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__13662,map__13662__$1,request,on_success,on_failure){
return (function (p1__13659_SHARP_){
var G__13664 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__13659_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13664) : re_frame.core.dispatch.call(null,G__13664));
});})(api,map__13662,map__13662__$1,request,on_success,on_failure))
,((function (api,map__13662,map__13662__$1,request,on_success,on_failure){
return (function (p1__13660_SHARP_){
var G__13665 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__13660_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13665) : re_frame.core.dispatch.call(null,G__13665));
});})(api,map__13662,map__13662__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__13666 = cljs.core.seq(seq_request_maps);
var chunk__13667 = null;
var count__13668 = (0);
var i__13669 = (0);
while(true){
if((i__13669 < count__13668)){
var request__$1 = chunk__13667.cljs$core$IIndexed$_nth$arity$2(null,i__13669);
var G__13670_13672 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__13670_13672) : ajax.core.ajax_request.call(null,G__13670_13672));


var G__13673 = seq__13666;
var G__13674 = chunk__13667;
var G__13675 = count__13668;
var G__13676 = (i__13669 + (1));
seq__13666 = G__13673;
chunk__13667 = G__13674;
count__13668 = G__13675;
i__13669 = G__13676;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13666);
if(temp__5457__auto__){
var seq__13666__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13666__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13666__$1);
var G__13677 = cljs.core.chunk_rest(seq__13666__$1);
var G__13678 = c__4351__auto__;
var G__13679 = cljs.core.count(c__4351__auto__);
var G__13680 = (0);
seq__13666 = G__13677;
chunk__13667 = G__13678;
count__13668 = G__13679;
i__13669 = G__13680;
continue;
} else {
var request__$1 = cljs.core.first(seq__13666__$1);
var G__13671_13681 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__13671_13681) : ajax.core.ajax_request.call(null,G__13671_13681));


var G__13682 = cljs.core.next(seq__13666__$1);
var G__13683 = null;
var G__13684 = (0);
var G__13685 = (0);
seq__13666 = G__13682;
chunk__13667 = G__13683;
count__13668 = G__13684;
i__13669 = G__13685;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__13686_13688 = cljs.core.cst$kw$http_DASH_xhrio;
var G__13687_13689 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__13686_13688,G__13687_13689) : re_frame.core.reg_fx.call(null,G__13686_13688,G__13687_13689));
