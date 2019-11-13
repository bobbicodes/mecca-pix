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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19673){
var vec__19674 = p__19673;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19677 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19677);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19680){
var map__19681 = p__19680;
var map__19681__$1 = ((((!((map__19681 == null)))?(((((map__19681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19681):map__19681);
var request = map__19681__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19681__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19681__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19681,map__19681__$1,request,on_success,on_failure){
return (function (p1__19678_SHARP_){
var G__19683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19678_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19683) : re_frame.core.dispatch.call(null,G__19683));
});})(api,map__19681,map__19681__$1,request,on_success,on_failure))
,((function (api,map__19681,map__19681__$1,request,on_success,on_failure){
return (function (p1__19679_SHARP_){
var G__19684 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19679_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19684) : re_frame.core.dispatch.call(null,G__19684));
});})(api,map__19681,map__19681__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19685 = cljs.core.seq(seq_request_maps);
var chunk__19686 = null;
var count__19687 = (0);
var i__19688 = (0);
while(true){
if((i__19688 < count__19687)){
var request__$1 = chunk__19686.cljs$core$IIndexed$_nth$arity$2(null,i__19688);
var G__19689_19691 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19689_19691) : ajax.core.ajax_request.call(null,G__19689_19691));


var G__19692 = seq__19685;
var G__19693 = chunk__19686;
var G__19694 = count__19687;
var G__19695 = (i__19688 + (1));
seq__19685 = G__19692;
chunk__19686 = G__19693;
count__19687 = G__19694;
i__19688 = G__19695;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19685);
if(temp__5457__auto__){
var seq__19685__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19685__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19685__$1);
var G__19696 = cljs.core.chunk_rest(seq__19685__$1);
var G__19697 = c__4351__auto__;
var G__19698 = cljs.core.count(c__4351__auto__);
var G__19699 = (0);
seq__19685 = G__19696;
chunk__19686 = G__19697;
count__19687 = G__19698;
i__19688 = G__19699;
continue;
} else {
var request__$1 = cljs.core.first(seq__19685__$1);
var G__19690_19700 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19690_19700) : ajax.core.ajax_request.call(null,G__19690_19700));


var G__19701 = cljs.core.next(seq__19685__$1);
var G__19702 = null;
var G__19703 = (0);
var G__19704 = (0);
seq__19685 = G__19701;
chunk__19686 = G__19702;
count__19687 = G__19703;
i__19688 = G__19704;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19705_19707 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19706_19708 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19705_19707,G__19706_19708) : re_frame.core.reg_fx.call(null,G__19705_19707,G__19706_19708));
