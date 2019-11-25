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
var _STAR_current_trace_STAR_11981 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11982 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11983 = null;
var count__11984 = (0);
var i__11985 = (0);
while(true){
if((i__11985 < count__11984)){
var vec__11986 = chunk__11983.cljs$core$IIndexed$_nth$arity$2(null,i__11985);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11986,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11986,(1),null);
var temp__5455__auto___12002 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12002)){
var effect_fn_12003 = temp__5455__auto___12002;
(effect_fn_12003.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12003.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12003.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12004 = seq__11982;
var G__12005 = chunk__11983;
var G__12006 = count__11984;
var G__12007 = (i__11985 + (1));
seq__11982 = G__12004;
chunk__11983 = G__12005;
count__11984 = G__12006;
i__11985 = G__12007;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11982);
if(temp__5457__auto__){
var seq__11982__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11982__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11982__$1);
var G__12008 = cljs.core.chunk_rest(seq__11982__$1);
var G__12009 = c__4351__auto__;
var G__12010 = cljs.core.count(c__4351__auto__);
var G__12011 = (0);
seq__11982 = G__12008;
chunk__11983 = G__12009;
count__11984 = G__12010;
i__11985 = G__12011;
continue;
} else {
var vec__11989 = cljs.core.first(seq__11982__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11989,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11989,(1),null);
var temp__5455__auto___12012 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12012)){
var effect_fn_12013 = temp__5455__auto___12012;
(effect_fn_12013.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12013.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12013.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12014 = cljs.core.next(seq__11982__$1);
var G__12015 = null;
var G__12016 = (0);
var G__12017 = (0);
seq__11982 = G__12014;
chunk__11983 = G__12015;
count__11984 = G__12016;
i__11985 = G__12017;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11546__auto___12018 = re_frame.interop.now();
var duration__11547__auto___12019 = (end__11546__auto___12018 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11547__auto___12019,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11546__auto___12018);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11981;
}} else {
var seq__11992 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11993 = null;
var count__11994 = (0);
var i__11995 = (0);
while(true){
if((i__11995 < count__11994)){
var vec__11996 = chunk__11993.cljs$core$IIndexed$_nth$arity$2(null,i__11995);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996,(1),null);
var temp__5455__auto___12020 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12020)){
var effect_fn_12021 = temp__5455__auto___12020;
(effect_fn_12021.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12021.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12021.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12022 = seq__11992;
var G__12023 = chunk__11993;
var G__12024 = count__11994;
var G__12025 = (i__11995 + (1));
seq__11992 = G__12022;
chunk__11993 = G__12023;
count__11994 = G__12024;
i__11995 = G__12025;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11992);
if(temp__5457__auto__){
var seq__11992__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11992__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11992__$1);
var G__12026 = cljs.core.chunk_rest(seq__11992__$1);
var G__12027 = c__4351__auto__;
var G__12028 = cljs.core.count(c__4351__auto__);
var G__12029 = (0);
seq__11992 = G__12026;
chunk__11993 = G__12027;
count__11994 = G__12028;
i__11995 = G__12029;
continue;
} else {
var vec__11999 = cljs.core.first(seq__11992__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11999,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11999,(1),null);
var temp__5455__auto___12030 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12030)){
var effect_fn_12031 = temp__5455__auto___12030;
(effect_fn_12031.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12031.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12031.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12032 = cljs.core.next(seq__11992__$1);
var G__12033 = null;
var G__12034 = (0);
var G__12035 = (0);
seq__11992 = G__12032;
chunk__11993 = G__12033;
count__11994 = G__12034;
i__11995 = G__12035;
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
var seq__12036 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12037 = null;
var count__12038 = (0);
var i__12039 = (0);
while(true){
if((i__12039 < count__12038)){
var map__12040 = chunk__12037.cljs$core$IIndexed$_nth$arity$2(null,i__12039);
var map__12040__$1 = ((((!((map__12040 == null)))?(((((map__12040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12040):map__12040);
var effect = map__12040__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12040__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12040__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12036,chunk__12037,count__12038,i__12039,map__12040,map__12040__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12036,chunk__12037,count__12038,i__12039,map__12040,map__12040__$1,effect,ms,dispatch))
,ms);
}


var G__12044 = seq__12036;
var G__12045 = chunk__12037;
var G__12046 = count__12038;
var G__12047 = (i__12039 + (1));
seq__12036 = G__12044;
chunk__12037 = G__12045;
count__12038 = G__12046;
i__12039 = G__12047;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12036);
if(temp__5457__auto__){
var seq__12036__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12036__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12036__$1);
var G__12048 = cljs.core.chunk_rest(seq__12036__$1);
var G__12049 = c__4351__auto__;
var G__12050 = cljs.core.count(c__4351__auto__);
var G__12051 = (0);
seq__12036 = G__12048;
chunk__12037 = G__12049;
count__12038 = G__12050;
i__12039 = G__12051;
continue;
} else {
var map__12042 = cljs.core.first(seq__12036__$1);
var map__12042__$1 = ((((!((map__12042 == null)))?(((((map__12042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12042):map__12042);
var effect = map__12042__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12042__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12042__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12036,chunk__12037,count__12038,i__12039,map__12042,map__12042__$1,effect,ms,dispatch,seq__12036__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12036,chunk__12037,count__12038,i__12039,map__12042,map__12042__$1,effect,ms,dispatch,seq__12036__$1,temp__5457__auto__))
,ms);
}


var G__12052 = cljs.core.next(seq__12036__$1);
var G__12053 = null;
var G__12054 = (0);
var G__12055 = (0);
seq__12036 = G__12052;
chunk__12037 = G__12053;
count__12038 = G__12054;
i__12039 = G__12055;
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
var seq__12056 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12057 = null;
var count__12058 = (0);
var i__12059 = (0);
while(true){
if((i__12059 < count__12058)){
var event = chunk__12057.cljs$core$IIndexed$_nth$arity$2(null,i__12059);
re_frame.router.dispatch(event);


var G__12060 = seq__12056;
var G__12061 = chunk__12057;
var G__12062 = count__12058;
var G__12063 = (i__12059 + (1));
seq__12056 = G__12060;
chunk__12057 = G__12061;
count__12058 = G__12062;
i__12059 = G__12063;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12056);
if(temp__5457__auto__){
var seq__12056__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12056__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12056__$1);
var G__12064 = cljs.core.chunk_rest(seq__12056__$1);
var G__12065 = c__4351__auto__;
var G__12066 = cljs.core.count(c__4351__auto__);
var G__12067 = (0);
seq__12056 = G__12064;
chunk__12057 = G__12065;
count__12058 = G__12066;
i__12059 = G__12067;
continue;
} else {
var event = cljs.core.first(seq__12056__$1);
re_frame.router.dispatch(event);


var G__12068 = cljs.core.next(seq__12056__$1);
var G__12069 = null;
var G__12070 = (0);
var G__12071 = (0);
seq__12056 = G__12068;
chunk__12057 = G__12069;
count__12058 = G__12070;
i__12059 = G__12071;
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
var seq__12072 = cljs.core.seq(value);
var chunk__12073 = null;
var count__12074 = (0);
var i__12075 = (0);
while(true){
if((i__12075 < count__12074)){
var event = chunk__12073.cljs$core$IIndexed$_nth$arity$2(null,i__12075);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12076 = seq__12072;
var G__12077 = chunk__12073;
var G__12078 = count__12074;
var G__12079 = (i__12075 + (1));
seq__12072 = G__12076;
chunk__12073 = G__12077;
count__12074 = G__12078;
i__12075 = G__12079;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12072);
if(temp__5457__auto__){
var seq__12072__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12072__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12072__$1);
var G__12080 = cljs.core.chunk_rest(seq__12072__$1);
var G__12081 = c__4351__auto__;
var G__12082 = cljs.core.count(c__4351__auto__);
var G__12083 = (0);
seq__12072 = G__12080;
chunk__12073 = G__12081;
count__12074 = G__12082;
i__12075 = G__12083;
continue;
} else {
var event = cljs.core.first(seq__12072__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12084 = cljs.core.next(seq__12072__$1);
var G__12085 = null;
var G__12086 = (0);
var G__12087 = (0);
seq__12072 = G__12084;
chunk__12073 = G__12085;
count__12074 = G__12086;
i__12075 = G__12087;
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
