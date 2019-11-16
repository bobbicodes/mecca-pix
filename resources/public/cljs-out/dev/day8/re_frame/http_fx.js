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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__13655){
var vec__13656 = p__13655;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13656,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13656,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__13659 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__13659);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__13662){
var map__13663 = p__13662;
var map__13663__$1 = ((((!((map__13663 == null)))?(((((map__13663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13663):map__13663);
var request = map__13663__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13663__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13663__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__13663,map__13663__$1,request,on_success,on_failure){
return (function (p1__13660_SHARP_){
var G__13665 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__13660_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13665) : re_frame.core.dispatch.call(null,G__13665));
});})(api,map__13663,map__13663__$1,request,on_success,on_failure))
,((function (api,map__13663,map__13663__$1,request,on_success,on_failure){
return (function (p1__13661_SHARP_){
var G__13666 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__13661_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13666) : re_frame.core.dispatch.call(null,G__13666));
});})(api,map__13663,map__13663__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__13667 = cljs.core.seq(seq_request_maps);
var chunk__13668 = null;
var count__13669 = (0);
var i__13670 = (0);
while(true){
if((i__13670 < count__13669)){
var request__$1 = chunk__13668.cljs$core$IIndexed$_nth$arity$2(null,i__13670);
var G__13671_13673 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__13671_13673) : ajax.core.ajax_request.call(null,G__13671_13673));


var G__13674 = seq__13667;
var G__13675 = chunk__13668;
var G__13676 = count__13669;
var G__13677 = (i__13670 + (1));
seq__13667 = G__13674;
chunk__13668 = G__13675;
count__13669 = G__13676;
i__13670 = G__13677;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13667);
if(temp__5457__auto__){
var seq__13667__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13667__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13667__$1);
var G__13678 = cljs.core.chunk_rest(seq__13667__$1);
var G__13679 = c__4351__auto__;
var G__13680 = cljs.core.count(c__4351__auto__);
var G__13681 = (0);
seq__13667 = G__13678;
chunk__13668 = G__13679;
count__13669 = G__13680;
i__13670 = G__13681;
continue;
} else {
var request__$1 = cljs.core.first(seq__13667__$1);
var G__13672_13682 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__13672_13682) : ajax.core.ajax_request.call(null,G__13672_13682));


var G__13683 = cljs.core.next(seq__13667__$1);
var G__13684 = null;
var G__13685 = (0);
var G__13686 = (0);
seq__13667 = G__13683;
chunk__13668 = G__13684;
count__13669 = G__13685;
i__13670 = G__13686;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__13687_13689 = cljs.core.cst$kw$http_DASH_xhrio;
var G__13688_13690 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__13687_13689,G__13688_13690) : re_frame.core.reg_fx.call(null,G__13687_13689,G__13688_13690));
