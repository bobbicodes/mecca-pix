// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11619){
var map__11620 = p__11619;
var map__11620__$1 = ((((!((map__11620 == null)))?(((((map__11620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11620):map__11620);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11620__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11620__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11620__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11620__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__11622_11636 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__11623_11637 = null;
var count__11624_11638 = (0);
var i__11625_11639 = (0);
while(true){
if((i__11625_11639 < count__11624_11638)){
var vec__11626_11640 = chunk__11623_11637.cljs$core$IIndexed$_nth$arity$2(null,i__11625_11639);
var k_11641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11626_11640,(0),null);
var cb_11642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11626_11640,(1),null);
try{var G__11630_11643 = cljs.core.deref(re_frame.trace.traces);
(cb_11642.cljs$core$IFn$_invoke$arity$1 ? cb_11642.cljs$core$IFn$_invoke$arity$1(G__11630_11643) : cb_11642.call(null,G__11630_11643));
}catch (e11629){var e_11644 = e11629;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11641,"while storing",cljs.core.deref(re_frame.trace.traces),e_11644], 0));
}

var G__11645 = seq__11622_11636;
var G__11646 = chunk__11623_11637;
var G__11647 = count__11624_11638;
var G__11648 = (i__11625_11639 + (1));
seq__11622_11636 = G__11645;
chunk__11623_11637 = G__11646;
count__11624_11638 = G__11647;
i__11625_11639 = G__11648;
continue;
} else {
var temp__5457__auto___11649 = cljs.core.seq(seq__11622_11636);
if(temp__5457__auto___11649){
var seq__11622_11650__$1 = temp__5457__auto___11649;
if(cljs.core.chunked_seq_QMARK_(seq__11622_11650__$1)){
var c__4351__auto___11651 = cljs.core.chunk_first(seq__11622_11650__$1);
var G__11652 = cljs.core.chunk_rest(seq__11622_11650__$1);
var G__11653 = c__4351__auto___11651;
var G__11654 = cljs.core.count(c__4351__auto___11651);
var G__11655 = (0);
seq__11622_11636 = G__11652;
chunk__11623_11637 = G__11653;
count__11624_11638 = G__11654;
i__11625_11639 = G__11655;
continue;
} else {
var vec__11631_11656 = cljs.core.first(seq__11622_11650__$1);
var k_11657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11631_11656,(0),null);
var cb_11658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11631_11656,(1),null);
try{var G__11635_11659 = cljs.core.deref(re_frame.trace.traces);
(cb_11658.cljs$core$IFn$_invoke$arity$1 ? cb_11658.cljs$core$IFn$_invoke$arity$1(G__11635_11659) : cb_11658.call(null,G__11635_11659));
}catch (e11634){var e_11660 = e11634;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11657,"while storing",cljs.core.deref(re_frame.trace.traces),e_11660], 0));
}

var G__11661 = cljs.core.next(seq__11622_11650__$1);
var G__11662 = null;
var G__11663 = (0);
var G__11664 = (0);
seq__11622_11636 = G__11661;
chunk__11623_11637 = G__11662;
count__11624_11638 = G__11663;
i__11625_11639 = G__11664;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
