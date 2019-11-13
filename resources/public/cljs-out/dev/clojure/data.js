// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12999){
var vec__13000 = p__12999;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13000,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__13003 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13003,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13003,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13003,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__13007 = arguments.length;
switch (G__13007) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__13009_13033 = clojure.data.equality_partition;
var G__13010_13034 = "null";
var G__13011_13035 = ((function (G__13009_13033,G__13010_13034){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13009_13033,G__13010_13034))
;
goog.object.set(G__13009_13033,G__13010_13034,G__13011_13035);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__13012_13036 = clojure.data.equality_partition;
var G__13013_13037 = "string";
var G__13014_13038 = ((function (G__13012_13036,G__13013_13037){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13012_13036,G__13013_13037))
;
goog.object.set(G__13012_13036,G__13013_13037,G__13014_13038);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__13015_13039 = clojure.data.equality_partition;
var G__13016_13040 = "number";
var G__13017_13041 = ((function (G__13015_13039,G__13016_13040){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13015_13039,G__13016_13040))
;
goog.object.set(G__13015_13039,G__13016_13040,G__13017_13041);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__13018_13042 = clojure.data.equality_partition;
var G__13019_13043 = "array";
var G__13020_13044 = ((function (G__13018_13042,G__13019_13043){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__13018_13042,G__13019_13043))
;
goog.object.set(G__13018_13042,G__13019_13043,G__13020_13044);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__13021_13045 = clojure.data.equality_partition;
var G__13022_13046 = "function";
var G__13023_13047 = ((function (G__13021_13045,G__13022_13046){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13021_13045,G__13022_13046))
;
goog.object.set(G__13021_13045,G__13022_13046,G__13023_13047);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__13024_13048 = clojure.data.equality_partition;
var G__13025_13049 = "boolean";
var G__13026_13050 = ((function (G__13024_13048,G__13025_13049){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__13024_13048,G__13025_13049))
;
goog.object.set(G__13024_13048,G__13025_13049,G__13026_13050);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__13027_13051 = clojure.data.equality_partition;
var G__13028_13052 = "_";
var G__13029_13053 = ((function (G__13027_13051,G__13028_13052){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__13027_13051,G__13028_13052))
;
goog.object.set(G__13027_13051,G__13028_13052,G__13029_13053);
goog.object.set(clojure.data.Diff,"null",true);

var G__13054_13078 = clojure.data.diff_similar;
var G__13055_13079 = "null";
var G__13056_13080 = ((function (G__13054_13078,G__13055_13079){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13054_13078,G__13055_13079))
;
goog.object.set(G__13054_13078,G__13055_13079,G__13056_13080);

goog.object.set(clojure.data.Diff,"string",true);

var G__13057_13081 = clojure.data.diff_similar;
var G__13058_13082 = "string";
var G__13059_13083 = ((function (G__13057_13081,G__13058_13082){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13057_13081,G__13058_13082))
;
goog.object.set(G__13057_13081,G__13058_13082,G__13059_13083);

goog.object.set(clojure.data.Diff,"number",true);

var G__13060_13084 = clojure.data.diff_similar;
var G__13061_13085 = "number";
var G__13062_13086 = ((function (G__13060_13084,G__13061_13085){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13060_13084,G__13061_13085))
;
goog.object.set(G__13060_13084,G__13061_13085,G__13062_13086);

goog.object.set(clojure.data.Diff,"array",true);

var G__13063_13087 = clojure.data.diff_similar;
var G__13064_13088 = "array";
var G__13065_13089 = ((function (G__13063_13087,G__13064_13088){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__13063_13087,G__13064_13088))
;
goog.object.set(G__13063_13087,G__13064_13088,G__13065_13089);

goog.object.set(clojure.data.Diff,"function",true);

var G__13066_13090 = clojure.data.diff_similar;
var G__13067_13091 = "function";
var G__13068_13092 = ((function (G__13066_13090,G__13067_13091){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13066_13090,G__13067_13091))
;
goog.object.set(G__13066_13090,G__13067_13091,G__13068_13092);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__13069_13093 = clojure.data.diff_similar;
var G__13070_13094 = "boolean";
var G__13071_13095 = ((function (G__13069_13093,G__13070_13094){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__13069_13093,G__13070_13094))
;
goog.object.set(G__13069_13093,G__13070_13094,G__13071_13095);

goog.object.set(clojure.data.Diff,"_",true);

var G__13072_13096 = clojure.data.diff_similar;
var G__13073_13097 = "_";
var G__13074_13098 = ((function (G__13072_13096,G__13073_13097){
return (function (a,b){
var fexpr__13076 = (function (){var G__13077 = clojure.data.equality_partition(a);
var G__13077__$1 = (((G__13077 instanceof cljs.core.Keyword))?G__13077.fqn:null);
switch (G__13077__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13077__$1)].join('')));

}
})();
return (fexpr__13076.cljs$core$IFn$_invoke$arity$2 ? fexpr__13076.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__13076.call(null,a,b));
});})(G__13072_13096,G__13073_13097))
;
goog.object.set(G__13072_13096,G__13073_13097,G__13074_13098);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
