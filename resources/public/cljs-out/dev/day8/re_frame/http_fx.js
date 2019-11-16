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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__13630){
var vec__13631 = p__13630;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13631,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13631,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__13634 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__13634);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__13637){
var map__13638 = p__13637;
var map__13638__$1 = ((((!((map__13638 == null)))?(((((map__13638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13638):map__13638);
var request = map__13638__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13638__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13638__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__13638,map__13638__$1,request,on_success,on_failure){
return (function (p1__13635_SHARP_){
var G__13640 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__13635_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13640) : re_frame.core.dispatch.call(null,G__13640));
});})(api,map__13638,map__13638__$1,request,on_success,on_failure))
,((function (api,map__13638,map__13638__$1,request,on_success,on_failure){
return (function (p1__13636_SHARP_){
var G__13641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__13636_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13641) : re_frame.core.dispatch.call(null,G__13641));
});})(api,map__13638,map__13638__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__13642 = cljs.core.seq(seq_request_maps);
var chunk__13643 = null;
var count__13644 = (0);
var i__13645 = (0);
while(true){
if((i__13645 < count__13644)){
var request__$1 = chunk__13643.cljs$core$IIndexed$_nth$arity$2(null,i__13645);
var G__13646_13648 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__13646_13648) : ajax.core.ajax_request.call(null,G__13646_13648));


var G__13649 = seq__13642;
var G__13650 = chunk__13643;
var G__13651 = count__13644;
var G__13652 = (i__13645 + (1));
seq__13642 = G__13649;
chunk__13643 = G__13650;
count__13644 = G__13651;
i__13645 = G__13652;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13642);
if(temp__5457__auto__){
var seq__13642__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13642__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13642__$1);
var G__13653 = cljs.core.chunk_rest(seq__13642__$1);
var G__13654 = c__4351__auto__;
var G__13655 = cljs.core.count(c__4351__auto__);
var G__13656 = (0);
seq__13642 = G__13653;
chunk__13643 = G__13654;
count__13644 = G__13655;
i__13645 = G__13656;
continue;
} else {
var request__$1 = cljs.core.first(seq__13642__$1);
var G__13647_13657 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__13647_13657) : ajax.core.ajax_request.call(null,G__13647_13657));


var G__13658 = cljs.core.next(seq__13642__$1);
var G__13659 = null;
var G__13660 = (0);
var G__13661 = (0);
seq__13642 = G__13658;
chunk__13643 = G__13659;
count__13644 = G__13660;
i__13645 = G__13661;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__13662_13664 = cljs.core.cst$kw$http_DASH_xhrio;
var G__13663_13665 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__13662_13664,G__13663_13665) : re_frame.core.reg_fx.call(null,G__13662_13664,G__13663_13665));
