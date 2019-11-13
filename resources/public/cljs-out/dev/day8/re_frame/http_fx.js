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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19672){
var vec__19673 = p__19672;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19673,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19673,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19676 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19676);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19679){
var map__19680 = p__19679;
var map__19680__$1 = ((((!((map__19680 == null)))?(((((map__19680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19680):map__19680);
var request = map__19680__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19680__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19680__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19680,map__19680__$1,request,on_success,on_failure){
return (function (p1__19677_SHARP_){
var G__19682 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19677_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19682) : re_frame.core.dispatch.call(null,G__19682));
});})(api,map__19680,map__19680__$1,request,on_success,on_failure))
,((function (api,map__19680,map__19680__$1,request,on_success,on_failure){
return (function (p1__19678_SHARP_){
var G__19683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19678_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19683) : re_frame.core.dispatch.call(null,G__19683));
});})(api,map__19680,map__19680__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19684 = cljs.core.seq(seq_request_maps);
var chunk__19685 = null;
var count__19686 = (0);
var i__19687 = (0);
while(true){
if((i__19687 < count__19686)){
var request__$1 = chunk__19685.cljs$core$IIndexed$_nth$arity$2(null,i__19687);
var G__19688_19690 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19688_19690) : ajax.core.ajax_request.call(null,G__19688_19690));


var G__19691 = seq__19684;
var G__19692 = chunk__19685;
var G__19693 = count__19686;
var G__19694 = (i__19687 + (1));
seq__19684 = G__19691;
chunk__19685 = G__19692;
count__19686 = G__19693;
i__19687 = G__19694;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19684);
if(temp__5457__auto__){
var seq__19684__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19684__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19684__$1);
var G__19695 = cljs.core.chunk_rest(seq__19684__$1);
var G__19696 = c__4351__auto__;
var G__19697 = cljs.core.count(c__4351__auto__);
var G__19698 = (0);
seq__19684 = G__19695;
chunk__19685 = G__19696;
count__19686 = G__19697;
i__19687 = G__19698;
continue;
} else {
var request__$1 = cljs.core.first(seq__19684__$1);
var G__19689_19699 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19689_19699) : ajax.core.ajax_request.call(null,G__19689_19699));


var G__19700 = cljs.core.next(seq__19684__$1);
var G__19701 = null;
var G__19702 = (0);
var G__19703 = (0);
seq__19684 = G__19700;
chunk__19685 = G__19701;
count__19686 = G__19702;
i__19687 = G__19703;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19704_19706 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19705_19707 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19704_19706,G__19705_19707) : re_frame.core.reg_fx.call(null,G__19704_19706,G__19705_19707));
