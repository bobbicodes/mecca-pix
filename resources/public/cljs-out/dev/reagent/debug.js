// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__19593__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19594__i = 0, G__19594__a = new Array(arguments.length -  0);
while (G__19594__i < G__19594__a.length) {G__19594__a[G__19594__i] = arguments[G__19594__i + 0]; ++G__19594__i;}
  args = new cljs.core.IndexedSeq(G__19594__a,0,null);
} 
return G__19593__delegate.call(this,args);};
G__19593.cljs$lang$maxFixedArity = 0;
G__19593.cljs$lang$applyTo = (function (arglist__19595){
var args = cljs.core.seq(arglist__19595);
return G__19593__delegate(args);
});
G__19593.cljs$core$IFn$_invoke$arity$variadic = G__19593__delegate;
return G__19593;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19596__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19597__i = 0, G__19597__a = new Array(arguments.length -  0);
while (G__19597__i < G__19597__a.length) {G__19597__a[G__19597__i] = arguments[G__19597__i + 0]; ++G__19597__i;}
  args = new cljs.core.IndexedSeq(G__19597__a,0,null);
} 
return G__19596__delegate.call(this,args);};
G__19596.cljs$lang$maxFixedArity = 0;
G__19596.cljs$lang$applyTo = (function (arglist__19598){
var args = cljs.core.seq(arglist__19598);
return G__19596__delegate(args);
});
G__19596.cljs$core$IFn$_invoke$arity$variadic = G__19596__delegate;
return G__19596;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
