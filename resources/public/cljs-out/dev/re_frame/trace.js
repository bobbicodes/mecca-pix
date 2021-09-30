// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20381){
var map__20382 = p__20381;
var map__20382__$1 = ((((!((map__20382 == null)))?(((((map__20382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20382):map__20382);
var operation = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__20384_20396 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__20385_20397 = null;
var count__20386_20398 = (0);
var i__20387_20399 = (0);
while(true){
if((i__20387_20399 < count__20386_20398)){
var vec__20388_20400 = cljs.core._nth.call(null,chunk__20385_20397,i__20387_20399);
var k_20401 = cljs.core.nth.call(null,vec__20388_20400,(0),null);
var cb_20402 = cljs.core.nth.call(null,vec__20388_20400,(1),null);
try{cb_20402.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e20391){var e_20403 = e20391;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_20401,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_20403);
}

var G__20404 = seq__20384_20396;
var G__20405 = chunk__20385_20397;
var G__20406 = count__20386_20398;
var G__20407 = (i__20387_20399 + (1));
seq__20384_20396 = G__20404;
chunk__20385_20397 = G__20405;
count__20386_20398 = G__20406;
i__20387_20399 = G__20407;
continue;
} else {
var temp__5457__auto___20408 = cljs.core.seq.call(null,seq__20384_20396);
if(temp__5457__auto___20408){
var seq__20384_20409__$1 = temp__5457__auto___20408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20384_20409__$1)){
var c__4351__auto___20410 = cljs.core.chunk_first.call(null,seq__20384_20409__$1);
var G__20411 = cljs.core.chunk_rest.call(null,seq__20384_20409__$1);
var G__20412 = c__4351__auto___20410;
var G__20413 = cljs.core.count.call(null,c__4351__auto___20410);
var G__20414 = (0);
seq__20384_20396 = G__20411;
chunk__20385_20397 = G__20412;
count__20386_20398 = G__20413;
i__20387_20399 = G__20414;
continue;
} else {
var vec__20392_20415 = cljs.core.first.call(null,seq__20384_20409__$1);
var k_20416 = cljs.core.nth.call(null,vec__20392_20415,(0),null);
var cb_20417 = cljs.core.nth.call(null,vec__20392_20415,(1),null);
try{cb_20417.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e20395){var e_20418 = e20395;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_20416,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_20418);
}

var G__20419 = cljs.core.next.call(null,seq__20384_20409__$1);
var G__20420 = null;
var G__20421 = (0);
var G__20422 = (0);
seq__20384_20396 = G__20419;
chunk__20385_20397 = G__20420;
count__20386_20398 = G__20421;
i__20387_20399 = G__20422;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
