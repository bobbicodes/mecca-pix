// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_12777 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12778 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12779 = null;
var count__12780 = (0);
var i__12781 = (0);
while(true){
if((i__12781 < count__12780)){
var vec__12782 = chunk__12779.cljs$core$IIndexed$_nth$arity$2(null,i__12781);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12782,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12782,(1),null);
var temp__5455__auto___12798 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12798)){
var effect_fn_12799 = temp__5455__auto___12798;
(effect_fn_12799.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12799.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12799.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12800 = seq__12778;
var G__12801 = chunk__12779;
var G__12802 = count__12780;
var G__12803 = (i__12781 + (1));
seq__12778 = G__12800;
chunk__12779 = G__12801;
count__12780 = G__12802;
i__12781 = G__12803;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12778);
if(temp__5457__auto__){
var seq__12778__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12778__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12778__$1);
var G__12804 = cljs.core.chunk_rest(seq__12778__$1);
var G__12805 = c__4351__auto__;
var G__12806 = cljs.core.count(c__4351__auto__);
var G__12807 = (0);
seq__12778 = G__12804;
chunk__12779 = G__12805;
count__12780 = G__12806;
i__12781 = G__12807;
continue;
} else {
var vec__12785 = cljs.core.first(seq__12778__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,(1),null);
var temp__5455__auto___12808 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12808)){
var effect_fn_12809 = temp__5455__auto___12808;
(effect_fn_12809.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12809.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12809.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12810 = cljs.core.next(seq__12778__$1);
var G__12811 = null;
var G__12812 = (0);
var G__12813 = (0);
seq__12778 = G__12810;
chunk__12779 = G__12811;
count__12780 = G__12812;
i__12781 = G__12813;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12342__auto___12814 = re_frame.interop.now();
var duration__12343__auto___12815 = (end__12342__auto___12814 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__12343__auto___12815,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12342__auto___12814);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12777;
}} else {
var seq__12788 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12789 = null;
var count__12790 = (0);
var i__12791 = (0);
while(true){
if((i__12791 < count__12790)){
var vec__12792 = chunk__12789.cljs$core$IIndexed$_nth$arity$2(null,i__12791);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,(1),null);
var temp__5455__auto___12816 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12816)){
var effect_fn_12817 = temp__5455__auto___12816;
(effect_fn_12817.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12817.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12817.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12818 = seq__12788;
var G__12819 = chunk__12789;
var G__12820 = count__12790;
var G__12821 = (i__12791 + (1));
seq__12788 = G__12818;
chunk__12789 = G__12819;
count__12790 = G__12820;
i__12791 = G__12821;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12788);
if(temp__5457__auto__){
var seq__12788__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12788__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12788__$1);
var G__12822 = cljs.core.chunk_rest(seq__12788__$1);
var G__12823 = c__4351__auto__;
var G__12824 = cljs.core.count(c__4351__auto__);
var G__12825 = (0);
seq__12788 = G__12822;
chunk__12789 = G__12823;
count__12790 = G__12824;
i__12791 = G__12825;
continue;
} else {
var vec__12795 = cljs.core.first(seq__12788__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(1),null);
var temp__5455__auto___12826 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12826)){
var effect_fn_12827 = temp__5455__auto___12826;
(effect_fn_12827.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12827.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12827.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12828 = cljs.core.next(seq__12788__$1);
var G__12829 = null;
var G__12830 = (0);
var G__12831 = (0);
seq__12788 = G__12828;
chunk__12789 = G__12829;
count__12790 = G__12830;
i__12791 = G__12831;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__12832 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12833 = null;
var count__12834 = (0);
var i__12835 = (0);
while(true){
if((i__12835 < count__12834)){
var map__12836 = chunk__12833.cljs$core$IIndexed$_nth$arity$2(null,i__12835);
var map__12836__$1 = ((((!((map__12836 == null)))?(((((map__12836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12836):map__12836);
var effect = map__12836__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12836__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12836__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12832,chunk__12833,count__12834,i__12835,map__12836,map__12836__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12832,chunk__12833,count__12834,i__12835,map__12836,map__12836__$1,effect,ms,dispatch))
,ms);
}


var G__12840 = seq__12832;
var G__12841 = chunk__12833;
var G__12842 = count__12834;
var G__12843 = (i__12835 + (1));
seq__12832 = G__12840;
chunk__12833 = G__12841;
count__12834 = G__12842;
i__12835 = G__12843;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12832);
if(temp__5457__auto__){
var seq__12832__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12832__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12832__$1);
var G__12844 = cljs.core.chunk_rest(seq__12832__$1);
var G__12845 = c__4351__auto__;
var G__12846 = cljs.core.count(c__4351__auto__);
var G__12847 = (0);
seq__12832 = G__12844;
chunk__12833 = G__12845;
count__12834 = G__12846;
i__12835 = G__12847;
continue;
} else {
var map__12838 = cljs.core.first(seq__12832__$1);
var map__12838__$1 = ((((!((map__12838 == null)))?(((((map__12838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12838):map__12838);
var effect = map__12838__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12838__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12838__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12832,chunk__12833,count__12834,i__12835,map__12838,map__12838__$1,effect,ms,dispatch,seq__12832__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12832,chunk__12833,count__12834,i__12835,map__12838,map__12838__$1,effect,ms,dispatch,seq__12832__$1,temp__5457__auto__))
,ms);
}


var G__12848 = cljs.core.next(seq__12832__$1);
var G__12849 = null;
var G__12850 = (0);
var G__12851 = (0);
seq__12832 = G__12848;
chunk__12833 = G__12849;
count__12834 = G__12850;
i__12835 = G__12851;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12852 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12853 = null;
var count__12854 = (0);
var i__12855 = (0);
while(true){
if((i__12855 < count__12854)){
var event = chunk__12853.cljs$core$IIndexed$_nth$arity$2(null,i__12855);
re_frame.router.dispatch(event);


var G__12856 = seq__12852;
var G__12857 = chunk__12853;
var G__12858 = count__12854;
var G__12859 = (i__12855 + (1));
seq__12852 = G__12856;
chunk__12853 = G__12857;
count__12854 = G__12858;
i__12855 = G__12859;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12852);
if(temp__5457__auto__){
var seq__12852__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12852__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12852__$1);
var G__12860 = cljs.core.chunk_rest(seq__12852__$1);
var G__12861 = c__4351__auto__;
var G__12862 = cljs.core.count(c__4351__auto__);
var G__12863 = (0);
seq__12852 = G__12860;
chunk__12853 = G__12861;
count__12854 = G__12862;
i__12855 = G__12863;
continue;
} else {
var event = cljs.core.first(seq__12852__$1);
re_frame.router.dispatch(event);


var G__12864 = cljs.core.next(seq__12852__$1);
var G__12865 = null;
var G__12866 = (0);
var G__12867 = (0);
seq__12852 = G__12864;
chunk__12853 = G__12865;
count__12854 = G__12866;
i__12855 = G__12867;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12868 = cljs.core.seq(value);
var chunk__12869 = null;
var count__12870 = (0);
var i__12871 = (0);
while(true){
if((i__12871 < count__12870)){
var event = chunk__12869.cljs$core$IIndexed$_nth$arity$2(null,i__12871);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12872 = seq__12868;
var G__12873 = chunk__12869;
var G__12874 = count__12870;
var G__12875 = (i__12871 + (1));
seq__12868 = G__12872;
chunk__12869 = G__12873;
count__12870 = G__12874;
i__12871 = G__12875;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12868);
if(temp__5457__auto__){
var seq__12868__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12868__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12868__$1);
var G__12876 = cljs.core.chunk_rest(seq__12868__$1);
var G__12877 = c__4351__auto__;
var G__12878 = cljs.core.count(c__4351__auto__);
var G__12879 = (0);
seq__12868 = G__12876;
chunk__12869 = G__12877;
count__12870 = G__12878;
i__12871 = G__12879;
continue;
} else {
var event = cljs.core.first(seq__12868__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12880 = cljs.core.next(seq__12868__$1);
var G__12881 = null;
var G__12882 = (0);
var G__12883 = (0);
seq__12868 = G__12880;
chunk__12869 = G__12881;
count__12870 = G__12882;
i__12871 = G__12883;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
