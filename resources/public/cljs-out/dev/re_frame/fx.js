// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_20721 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__20722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__20723 = null;
var count__20724 = (0);
var i__20725 = (0);
while(true){
if((i__20725 < count__20724)){
var vec__20726 = cljs.core._nth.call(null,chunk__20723,i__20725);
var effect_key = cljs.core.nth.call(null,vec__20726,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20726,(1),null);
var temp__5455__auto___20742 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___20742)){
var effect_fn_20743 = temp__5455__auto___20742;
effect_fn_20743.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20744 = seq__20722;
var G__20745 = chunk__20723;
var G__20746 = count__20724;
var G__20747 = (i__20725 + (1));
seq__20722 = G__20744;
chunk__20723 = G__20745;
count__20724 = G__20746;
i__20725 = G__20747;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20722);
if(temp__5457__auto__){
var seq__20722__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20722__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20722__$1);
var G__20748 = cljs.core.chunk_rest.call(null,seq__20722__$1);
var G__20749 = c__4351__auto__;
var G__20750 = cljs.core.count.call(null,c__4351__auto__);
var G__20751 = (0);
seq__20722 = G__20748;
chunk__20723 = G__20749;
count__20724 = G__20750;
i__20725 = G__20751;
continue;
} else {
var vec__20729 = cljs.core.first.call(null,seq__20722__$1);
var effect_key = cljs.core.nth.call(null,vec__20729,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20729,(1),null);
var temp__5455__auto___20752 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___20752)){
var effect_fn_20753 = temp__5455__auto___20752;
effect_fn_20753.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20754 = cljs.core.next.call(null,seq__20722__$1);
var G__20755 = null;
var G__20756 = (0);
var G__20757 = (0);
seq__20722 = G__20754;
chunk__20723 = G__20755;
count__20724 = G__20756;
i__20725 = G__20757;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14799__auto___20758 = re_frame.interop.now.call(null);
var duration__14800__auto___20759 = (end__14799__auto___20758 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14800__auto___20759,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__14799__auto___20758);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_20721;
}} else {
var seq__20732 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__20733 = null;
var count__20734 = (0);
var i__20735 = (0);
while(true){
if((i__20735 < count__20734)){
var vec__20736 = cljs.core._nth.call(null,chunk__20733,i__20735);
var effect_key = cljs.core.nth.call(null,vec__20736,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20736,(1),null);
var temp__5455__auto___20760 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___20760)){
var effect_fn_20761 = temp__5455__auto___20760;
effect_fn_20761.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20762 = seq__20732;
var G__20763 = chunk__20733;
var G__20764 = count__20734;
var G__20765 = (i__20735 + (1));
seq__20732 = G__20762;
chunk__20733 = G__20763;
count__20734 = G__20764;
i__20735 = G__20765;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20732);
if(temp__5457__auto__){
var seq__20732__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20732__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20732__$1);
var G__20766 = cljs.core.chunk_rest.call(null,seq__20732__$1);
var G__20767 = c__4351__auto__;
var G__20768 = cljs.core.count.call(null,c__4351__auto__);
var G__20769 = (0);
seq__20732 = G__20766;
chunk__20733 = G__20767;
count__20734 = G__20768;
i__20735 = G__20769;
continue;
} else {
var vec__20739 = cljs.core.first.call(null,seq__20732__$1);
var effect_key = cljs.core.nth.call(null,vec__20739,(0),null);
var effect_value = cljs.core.nth.call(null,vec__20739,(1),null);
var temp__5455__auto___20770 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___20770)){
var effect_fn_20771 = temp__5455__auto___20770;
effect_fn_20771.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__20772 = cljs.core.next.call(null,seq__20732__$1);
var G__20773 = null;
var G__20774 = (0);
var G__20775 = (0);
seq__20732 = G__20772;
chunk__20733 = G__20773;
count__20734 = G__20774;
i__20735 = G__20775;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__20776 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__20777 = null;
var count__20778 = (0);
var i__20779 = (0);
while(true){
if((i__20779 < count__20778)){
var map__20780 = cljs.core._nth.call(null,chunk__20777,i__20779);
var map__20780__$1 = ((((!((map__20780 == null)))?(((((map__20780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20780):map__20780);
var effect = map__20780__$1;
var ms = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__20780__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__20776,chunk__20777,count__20778,i__20779,map__20780,map__20780__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__20776,chunk__20777,count__20778,i__20779,map__20780,map__20780__$1,effect,ms,dispatch))
,ms);
}


var G__20784 = seq__20776;
var G__20785 = chunk__20777;
var G__20786 = count__20778;
var G__20787 = (i__20779 + (1));
seq__20776 = G__20784;
chunk__20777 = G__20785;
count__20778 = G__20786;
i__20779 = G__20787;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20776);
if(temp__5457__auto__){
var seq__20776__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20776__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20776__$1);
var G__20788 = cljs.core.chunk_rest.call(null,seq__20776__$1);
var G__20789 = c__4351__auto__;
var G__20790 = cljs.core.count.call(null,c__4351__auto__);
var G__20791 = (0);
seq__20776 = G__20788;
chunk__20777 = G__20789;
count__20778 = G__20790;
i__20779 = G__20791;
continue;
} else {
var map__20782 = cljs.core.first.call(null,seq__20776__$1);
var map__20782__$1 = ((((!((map__20782 == null)))?(((((map__20782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20782):map__20782);
var effect = map__20782__$1;
var ms = cljs.core.get.call(null,map__20782__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__20782__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__20776,chunk__20777,count__20778,i__20779,map__20782,map__20782__$1,effect,ms,dispatch,seq__20776__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__20776,chunk__20777,count__20778,i__20779,map__20782,map__20782__$1,effect,ms,dispatch,seq__20776__$1,temp__5457__auto__))
,ms);
}


var G__20792 = cljs.core.next.call(null,seq__20776__$1);
var G__20793 = null;
var G__20794 = (0);
var G__20795 = (0);
seq__20776 = G__20792;
chunk__20777 = G__20793;
count__20778 = G__20794;
i__20779 = G__20795;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__20796 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__20797 = null;
var count__20798 = (0);
var i__20799 = (0);
while(true){
if((i__20799 < count__20798)){
var event = cljs.core._nth.call(null,chunk__20797,i__20799);
re_frame.router.dispatch.call(null,event);


var G__20800 = seq__20796;
var G__20801 = chunk__20797;
var G__20802 = count__20798;
var G__20803 = (i__20799 + (1));
seq__20796 = G__20800;
chunk__20797 = G__20801;
count__20798 = G__20802;
i__20799 = G__20803;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20796);
if(temp__5457__auto__){
var seq__20796__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20796__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20796__$1);
var G__20804 = cljs.core.chunk_rest.call(null,seq__20796__$1);
var G__20805 = c__4351__auto__;
var G__20806 = cljs.core.count.call(null,c__4351__auto__);
var G__20807 = (0);
seq__20796 = G__20804;
chunk__20797 = G__20805;
count__20798 = G__20806;
i__20799 = G__20807;
continue;
} else {
var event = cljs.core.first.call(null,seq__20796__$1);
re_frame.router.dispatch.call(null,event);


var G__20808 = cljs.core.next.call(null,seq__20796__$1);
var G__20809 = null;
var G__20810 = (0);
var G__20811 = (0);
seq__20796 = G__20808;
chunk__20797 = G__20809;
count__20798 = G__20810;
i__20799 = G__20811;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__20812 = cljs.core.seq.call(null,value);
var chunk__20813 = null;
var count__20814 = (0);
var i__20815 = (0);
while(true){
if((i__20815 < count__20814)){
var event = cljs.core._nth.call(null,chunk__20813,i__20815);
clear_event.call(null,event);


var G__20816 = seq__20812;
var G__20817 = chunk__20813;
var G__20818 = count__20814;
var G__20819 = (i__20815 + (1));
seq__20812 = G__20816;
chunk__20813 = G__20817;
count__20814 = G__20818;
i__20815 = G__20819;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20812);
if(temp__5457__auto__){
var seq__20812__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20812__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20812__$1);
var G__20820 = cljs.core.chunk_rest.call(null,seq__20812__$1);
var G__20821 = c__4351__auto__;
var G__20822 = cljs.core.count.call(null,c__4351__auto__);
var G__20823 = (0);
seq__20812 = G__20820;
chunk__20813 = G__20821;
count__20814 = G__20822;
i__20815 = G__20823;
continue;
} else {
var event = cljs.core.first.call(null,seq__20812__$1);
clear_event.call(null,event);


var G__20824 = cljs.core.next.call(null,seq__20812__$1);
var G__20825 = null;
var G__20826 = (0);
var G__20827 = (0);
seq__20812 = G__20824;
chunk__20813 = G__20825;
count__20814 = G__20826;
i__20815 = G__20827;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
