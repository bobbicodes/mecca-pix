// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame.undo');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
day8.re_frame.undo.config = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-undos","max-undos",-911142923),(50),new cljs.core.Keyword(null,"harvest-fn","harvest-fn",9140059),cljs.core.deref,new cljs.core.Keyword(null,"reinstate-fn","reinstate-fn",1996128442),cljs.core.reset_BANG_], null));
/**
 * Set configuration parameters for library.
 * 
 *   Should be called on app startup.
 */
day8.re_frame.undo.undo_config_BANG_ = (function day8$re_frame$undo$undo_config_BANG_(new_config){
var temp__5455__auto__ = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_config)),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,day8.re_frame.undo.config)))));
if(temp__5455__auto__){
var unknown_keys = temp__5455__auto__;
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame-undo: undo-config! called within unknown keys: ",unknown_keys);
} else {
return cljs.core.swap_BANG_.call(null,day8.re_frame.undo.config,cljs.core.merge,new_config);
}
});
day8.re_frame.undo.max_undos = (function day8$re_frame$undo$max_undos(){
return new cljs.core.Keyword(null,"max-undos","max-undos",-911142923).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame.undo.config));
});
/**
 * A list of history states
 */
day8.re_frame.undo.undo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * A list of future states, caused by undoing
 */
day8.re_frame.undo.redo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors app-db
 */
day8.re_frame.undo.app_explain = reagent.core.atom.call(null,"");
/**
 * Mirrors undo-list
 */
day8.re_frame.undo.undo_explain_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors redo-list
 */
day8.re_frame.undo.redo_explain_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
day8.re_frame.undo.clear_undos_BANG_ = (function day8$re_frame$undo$clear_undos_BANG_(){
cljs.core.reset_BANG_.call(null,day8.re_frame.undo.undo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,day8.re_frame.undo.undo_explain_list,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame.undo.clear_redos_BANG_ = (function day8$re_frame$undo$clear_redos_BANG_(){
cljs.core.reset_BANG_.call(null,day8.re_frame.undo.redo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,day8.re_frame.undo.redo_explain_list,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame.undo.clear_history_BANG_ = (function day8$re_frame$undo$clear_history_BANG_(){
day8.re_frame.undo.clear_undos_BANG_.call(null);

day8.re_frame.undo.clear_redos_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,day8.re_frame.undo.app_explain,"");
});
/**
 * Stores the value currently in app-db, so the user can later undo
 */
day8.re_frame.undo.store_now_BANG_ = (function day8$re_frame$undo$store_now_BANG_(explanation){
day8.re_frame.undo.clear_redos_BANG_.call(null);

cljs.core.reset_BANG_.call(null,day8.re_frame.undo.undo_list,cljs.core.vec.call(null,cljs.core.take_last.call(null,day8.re_frame.undo.max_undos.call(null),cljs.core.conj.call(null,cljs.core.deref.call(null,day8.re_frame.undo.undo_list),new cljs.core.Keyword(null,"harvest-fn","harvest-fn",9140059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame.undo.config)).call(null,re_frame.db.app_db)))));

cljs.core.reset_BANG_.call(null,day8.re_frame.undo.undo_explain_list,cljs.core.vec.call(null,cljs.core.take_last.call(null,day8.re_frame.undo.max_undos.call(null),cljs.core.conj.call(null,cljs.core.deref.call(null,day8.re_frame.undo.undo_explain_list),cljs.core.deref.call(null,day8.re_frame.undo.app_explain)))));

return cljs.core.reset_BANG_.call(null,day8.re_frame.undo.app_explain,explanation);
});
/**
 * Returns true if undos exist, false otherwise
 */
day8.re_frame.undo.undos_QMARK_ = (function day8$re_frame$undo$undos_QMARK_(){
return cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame.undo.undo_list));
});
/**
 * Returns true if redos exist, false otherwise
 */
day8.re_frame.undo.redos_QMARK_ = (function day8$re_frame$undo$redos_QMARK_(){
return cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame.undo.redo_list));
});
/**
 * Returns a vector of undo descriptions, perhaps empty
 */
day8.re_frame.undo.undo_explanations = (function day8$re_frame$undo$undo_explanations(){
if(cljs.core.truth_(day8.re_frame.undo.undos_QMARK_.call(null))){
return cljs.core.conj.call(null,cljs.core.deref.call(null,day8.re_frame.undo.undo_explain_list),cljs.core.deref.call(null,day8.re_frame.undo.app_explain));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword(null,"undos?","undos?",-1094259081),(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return day8.re_frame.undo.undos_QMARK_.call(null);
}));
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword(null,"redos?","redos?",1340247550),(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return day8.re_frame.undo.redos_QMARK_.call(null);
}));
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword(null,"undo-explanations","undo-explanations",942251259),(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return day8.re_frame.undo.undo_explanations.call(null);
}));
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword(null,"redo-explanations","redo-explanations",-1933832741),(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,day8.re_frame.undo.redo_explain_list);
}));
}));
day8.re_frame.undo.undo = (function day8$re_frame$undo$undo(harvester,reinstater,undos,cur,redos){
var u = cljs.core.deref.call(null,undos);
var r = cljs.core.cons.call(null,harvester.call(null,cur),cljs.core.deref.call(null,redos));
reinstater.call(null,cur,cljs.core.last.call(null,u));

cljs.core.reset_BANG_.call(null,redos,r);

return cljs.core.reset_BANG_.call(null,undos,cljs.core.pop.call(null,u));
});
/**
 * undo n steps or until we run out of undos
 */
day8.re_frame.undo.undo_n = (function day8$re_frame$undo$undo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__3938__auto__ = (n > (0));
if(and__3938__auto__){
return day8.re_frame.undo.undos_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
day8.re_frame.undo.undo.call(null,new cljs.core.Keyword(null,"harvest-fn","harvest-fn",9140059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame.undo.config)),new cljs.core.Keyword(null,"reinstate-fn","reinstate-fn",1996128442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame.undo.config)),day8.re_frame.undo.undo_list,re_frame.db.app_db,day8.re_frame.undo.redo_list);

day8.re_frame.undo.undo.call(null,cljs.core.deref,cljs.core.reset_BANG_,day8.re_frame.undo.undo_explain_list,day8.re_frame.undo.app_explain,day8.re_frame.undo.redo_explain_list);

var G__11573 = (n - (1));
n = G__11573;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.undo_handler = (function day8$re_frame$undo$undo_handler(_,p__11574){
var vec__11575 = p__11574;
var ___$1 = cljs.core.nth.call(null,vec__11575,(0),null);
var n = cljs.core.nth.call(null,vec__11575,(1),null);
if(cljs.core.not.call(null,day8.re_frame.undo.undos_QMARK_.call(null))){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: you did a (dispatch [:undo]), but there is nothing to undo.");
} else {
day8.re_frame.undo.undo_n.call(null,(function (){var or__3949__auto__ = n;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
}

return cljs.core.PersistentArrayMap.EMPTY;
});
day8.re_frame.undo.redo = (function day8$re_frame$undo$redo(harvester,reinstater,undos,cur,redos){
var u = cljs.core.conj.call(null,cljs.core.deref.call(null,undos),harvester.call(null,cur));
var r = cljs.core.deref.call(null,redos);
reinstater.call(null,cur,cljs.core.first.call(null,r));

cljs.core.reset_BANG_.call(null,redos,cljs.core.rest.call(null,r));

return cljs.core.reset_BANG_.call(null,undos,u);
});
/**
 * redo n steps or until we run out of redos
 */
day8.re_frame.undo.redo_n = (function day8$re_frame$undo$redo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__3938__auto__ = (n > (0));
if(and__3938__auto__){
return day8.re_frame.undo.redos_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
day8.re_frame.undo.redo.call(null,new cljs.core.Keyword(null,"harvest-fn","harvest-fn",9140059).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame.undo.config)),new cljs.core.Keyword(null,"reinstate-fn","reinstate-fn",1996128442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame.undo.config)),day8.re_frame.undo.undo_list,re_frame.db.app_db,day8.re_frame.undo.redo_list);

day8.re_frame.undo.redo.call(null,cljs.core.deref,cljs.core.reset_BANG_,day8.re_frame.undo.undo_explain_list,day8.re_frame.undo.app_explain,day8.re_frame.undo.redo_explain_list);

var G__11578 = (n - (1));
n = G__11578;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.redo_handler = (function day8$re_frame$undo$redo_handler(_,p__11579){
var vec__11580 = p__11579;
var ___$1 = cljs.core.nth.call(null,vec__11580,(0),null);
var n = cljs.core.nth.call(null,vec__11580,(1),null);
if(cljs.core.not.call(null,day8.re_frame.undo.redos_QMARK_.call(null))){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: you did a (dispatch [:redo]), but there is nothing to redo.");
} else {
day8.re_frame.undo.redo_n.call(null,(function (){var or__3949__auto__ = n;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
}

return cljs.core.PersistentArrayMap.EMPTY;
});
day8.re_frame.undo.purge_redo_handler = (function day8$re_frame$undo$purge_redo_handler(db,_){
if(cljs.core.not.call(null,day8.re_frame.undo.redos_QMARK_.call(null))){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo.");
} else {
day8.re_frame.undo.clear_redos_BANG_.call(null);
}

return db;
});
/**
 * returns a side-effecting Interceptor, which stores an undo checkpoint in
 *   `:after` processing.
 * If the `:effect` cotnains an `:undo` key, then use the explanation provided
 * by it. Otherwise, `explanation` can be:
 *   - a string (of explanation)
 *   - a function expected to return a string of explanation. It will be called
 *     with two arguments: `db` and `event-vec`.
 *   - a nil, in which case "" is recorded as the explanation
 *   
 */
day8.re_frame.undo.undoable = (function day8$re_frame$undo$undoable(var_args){
var G__11584 = arguments.length;
switch (G__11584) {
case 0:
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame.undo.undoable.call(null,null);
});

day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"undoable","undoable",303475882),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var event = re_frame.core.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var undo_effect = re_frame.core.get_effect.call(null,context,new cljs.core.Keyword(null,"undo","undo",-1818036302));
var explanation__$1 = ((!((undo_effect == null)))?undo_effect:((cljs.core.fn_QMARK_.call(null,explanation))?explanation.call(null,re_frame.core.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759)),event):((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame-undo: \"undoable\" interceptor on event ",event," given a bad parameter. Got: ",explanation)
))));
day8.re_frame.undo.store_now_BANG_.call(null,explanation__$1);

return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),cljs.core.dissoc,new cljs.core.Keyword(null,"undo","undo",-1818036302));
}));
});

day8.re_frame.undo.undoable.cljs$lang$maxFixedArity = 1;

day8.re_frame.undo.register_events_subs_BANG_ = (function day8$re_frame$undo$register_events_subs_BANG_(){
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),day8.re_frame.undo.undo_handler);

re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"redo","redo",501190664),day8.re_frame.undo.redo_handler);

return re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"purge-redos","purge-redos",1815721624),day8.re_frame.undo.purge_redo_handler);
});
day8.re_frame.undo.register_events_subs_BANG_.call(null);

//# sourceMappingURL=undo.js.map
