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
var _STAR_current_trace_STAR_11775 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11776 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11777 = null;
var count__11778 = (0);
var i__11779 = (0);
while(true){
if((i__11779 < count__11778)){
var vec__11780 = chunk__11777.cljs$core$IIndexed$_nth$arity$2(null,i__11779);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11780,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11780,(1),null);
var temp__5455__auto___11796 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11796)){
var effect_fn_11797 = temp__5455__auto___11796;
(effect_fn_11797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11797.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11798 = seq__11776;
var G__11799 = chunk__11777;
var G__11800 = count__11778;
var G__11801 = (i__11779 + (1));
seq__11776 = G__11798;
chunk__11777 = G__11799;
count__11778 = G__11800;
i__11779 = G__11801;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11776);
if(temp__5457__auto__){
var seq__11776__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11776__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11776__$1);
var G__11802 = cljs.core.chunk_rest(seq__11776__$1);
var G__11803 = c__4351__auto__;
var G__11804 = cljs.core.count(c__4351__auto__);
var G__11805 = (0);
seq__11776 = G__11802;
chunk__11777 = G__11803;
count__11778 = G__11804;
i__11779 = G__11805;
continue;
} else {
var vec__11783 = cljs.core.first(seq__11776__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11783,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11783,(1),null);
var temp__5455__auto___11806 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11806)){
var effect_fn_11807 = temp__5455__auto___11806;
(effect_fn_11807.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11807.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11807.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11808 = cljs.core.next(seq__11776__$1);
var G__11809 = null;
var G__11810 = (0);
var G__11811 = (0);
seq__11776 = G__11808;
chunk__11777 = G__11809;
count__11778 = G__11810;
i__11779 = G__11811;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11340__auto___11812 = re_frame.interop.now();
var duration__11341__auto___11813 = (end__11340__auto___11812 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11341__auto___11813,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11340__auto___11812);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11775;
}} else {
var seq__11786 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11787 = null;
var count__11788 = (0);
var i__11789 = (0);
while(true){
if((i__11789 < count__11788)){
var vec__11790 = chunk__11787.cljs$core$IIndexed$_nth$arity$2(null,i__11789);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11790,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11790,(1),null);
var temp__5455__auto___11814 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11814)){
var effect_fn_11815 = temp__5455__auto___11814;
(effect_fn_11815.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11815.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11815.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11816 = seq__11786;
var G__11817 = chunk__11787;
var G__11818 = count__11788;
var G__11819 = (i__11789 + (1));
seq__11786 = G__11816;
chunk__11787 = G__11817;
count__11788 = G__11818;
i__11789 = G__11819;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11786);
if(temp__5457__auto__){
var seq__11786__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11786__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11786__$1);
var G__11820 = cljs.core.chunk_rest(seq__11786__$1);
var G__11821 = c__4351__auto__;
var G__11822 = cljs.core.count(c__4351__auto__);
var G__11823 = (0);
seq__11786 = G__11820;
chunk__11787 = G__11821;
count__11788 = G__11822;
i__11789 = G__11823;
continue;
} else {
var vec__11793 = cljs.core.first(seq__11786__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11793,(1),null);
var temp__5455__auto___11824 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11824)){
var effect_fn_11825 = temp__5455__auto___11824;
(effect_fn_11825.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11825.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11825.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11826 = cljs.core.next(seq__11786__$1);
var G__11827 = null;
var G__11828 = (0);
var G__11829 = (0);
seq__11786 = G__11826;
chunk__11787 = G__11827;
count__11788 = G__11828;
i__11789 = G__11829;
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
var seq__11830 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11831 = null;
var count__11832 = (0);
var i__11833 = (0);
while(true){
if((i__11833 < count__11832)){
var map__11834 = chunk__11831.cljs$core$IIndexed$_nth$arity$2(null,i__11833);
var map__11834__$1 = ((((!((map__11834 == null)))?(((((map__11834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11834):map__11834);
var effect = map__11834__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11834__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11834__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11830,chunk__11831,count__11832,i__11833,map__11834,map__11834__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11830,chunk__11831,count__11832,i__11833,map__11834,map__11834__$1,effect,ms,dispatch))
,ms);
}


var G__11838 = seq__11830;
var G__11839 = chunk__11831;
var G__11840 = count__11832;
var G__11841 = (i__11833 + (1));
seq__11830 = G__11838;
chunk__11831 = G__11839;
count__11832 = G__11840;
i__11833 = G__11841;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11830);
if(temp__5457__auto__){
var seq__11830__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11830__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11830__$1);
var G__11842 = cljs.core.chunk_rest(seq__11830__$1);
var G__11843 = c__4351__auto__;
var G__11844 = cljs.core.count(c__4351__auto__);
var G__11845 = (0);
seq__11830 = G__11842;
chunk__11831 = G__11843;
count__11832 = G__11844;
i__11833 = G__11845;
continue;
} else {
var map__11836 = cljs.core.first(seq__11830__$1);
var map__11836__$1 = ((((!((map__11836 == null)))?(((((map__11836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11836):map__11836);
var effect = map__11836__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11836__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11836__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11830,chunk__11831,count__11832,i__11833,map__11836,map__11836__$1,effect,ms,dispatch,seq__11830__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11830,chunk__11831,count__11832,i__11833,map__11836,map__11836__$1,effect,ms,dispatch,seq__11830__$1,temp__5457__auto__))
,ms);
}


var G__11846 = cljs.core.next(seq__11830__$1);
var G__11847 = null;
var G__11848 = (0);
var G__11849 = (0);
seq__11830 = G__11846;
chunk__11831 = G__11847;
count__11832 = G__11848;
i__11833 = G__11849;
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
var seq__11850 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11851 = null;
var count__11852 = (0);
var i__11853 = (0);
while(true){
if((i__11853 < count__11852)){
var event = chunk__11851.cljs$core$IIndexed$_nth$arity$2(null,i__11853);
re_frame.router.dispatch(event);


var G__11854 = seq__11850;
var G__11855 = chunk__11851;
var G__11856 = count__11852;
var G__11857 = (i__11853 + (1));
seq__11850 = G__11854;
chunk__11851 = G__11855;
count__11852 = G__11856;
i__11853 = G__11857;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11850);
if(temp__5457__auto__){
var seq__11850__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11850__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11850__$1);
var G__11858 = cljs.core.chunk_rest(seq__11850__$1);
var G__11859 = c__4351__auto__;
var G__11860 = cljs.core.count(c__4351__auto__);
var G__11861 = (0);
seq__11850 = G__11858;
chunk__11851 = G__11859;
count__11852 = G__11860;
i__11853 = G__11861;
continue;
} else {
var event = cljs.core.first(seq__11850__$1);
re_frame.router.dispatch(event);


var G__11862 = cljs.core.next(seq__11850__$1);
var G__11863 = null;
var G__11864 = (0);
var G__11865 = (0);
seq__11850 = G__11862;
chunk__11851 = G__11863;
count__11852 = G__11864;
i__11853 = G__11865;
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
var seq__11866 = cljs.core.seq(value);
var chunk__11867 = null;
var count__11868 = (0);
var i__11869 = (0);
while(true){
if((i__11869 < count__11868)){
var event = chunk__11867.cljs$core$IIndexed$_nth$arity$2(null,i__11869);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11870 = seq__11866;
var G__11871 = chunk__11867;
var G__11872 = count__11868;
var G__11873 = (i__11869 + (1));
seq__11866 = G__11870;
chunk__11867 = G__11871;
count__11868 = G__11872;
i__11869 = G__11873;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11866);
if(temp__5457__auto__){
var seq__11866__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11866__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11866__$1);
var G__11874 = cljs.core.chunk_rest(seq__11866__$1);
var G__11875 = c__4351__auto__;
var G__11876 = cljs.core.count(c__4351__auto__);
var G__11877 = (0);
seq__11866 = G__11874;
chunk__11867 = G__11875;
count__11868 = G__11876;
i__11869 = G__11877;
continue;
} else {
var event = cljs.core.first(seq__11866__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11878 = cljs.core.next(seq__11866__$1);
var G__11879 = null;
var G__11880 = (0);
var G__11881 = (0);
seq__11866 = G__11878;
chunk__11867 = G__11879;
count__11868 = G__11880;
i__11869 = G__11881;
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
