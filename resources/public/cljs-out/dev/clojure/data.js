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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__9991){
var vec__9992 = p__9991;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992,(1),null);
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
var vec__9995 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9995,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9995,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9995,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__9999 = arguments.length;
switch (G__9999) {
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

var G__10001_10025 = clojure.data.equality_partition;
var G__10002_10026 = "null";
var G__10003_10027 = ((function (G__10001_10025,G__10002_10026){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10001_10025,G__10002_10026))
;
goog.object.set(G__10001_10025,G__10002_10026,G__10003_10027);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__10004_10028 = clojure.data.equality_partition;
var G__10005_10029 = "string";
var G__10006_10030 = ((function (G__10004_10028,G__10005_10029){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10004_10028,G__10005_10029))
;
goog.object.set(G__10004_10028,G__10005_10029,G__10006_10030);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__10007_10031 = clojure.data.equality_partition;
var G__10008_10032 = "number";
var G__10009_10033 = ((function (G__10007_10031,G__10008_10032){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10007_10031,G__10008_10032))
;
goog.object.set(G__10007_10031,G__10008_10032,G__10009_10033);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__10010_10034 = clojure.data.equality_partition;
var G__10011_10035 = "array";
var G__10012_10036 = ((function (G__10010_10034,G__10011_10035){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__10010_10034,G__10011_10035))
;
goog.object.set(G__10010_10034,G__10011_10035,G__10012_10036);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__10013_10037 = clojure.data.equality_partition;
var G__10014_10038 = "function";
var G__10015_10039 = ((function (G__10013_10037,G__10014_10038){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10013_10037,G__10014_10038))
;
goog.object.set(G__10013_10037,G__10014_10038,G__10015_10039);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__10016_10040 = clojure.data.equality_partition;
var G__10017_10041 = "boolean";
var G__10018_10042 = ((function (G__10016_10040,G__10017_10041){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10016_10040,G__10017_10041))
;
goog.object.set(G__10016_10040,G__10017_10041,G__10018_10042);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__10019_10043 = clojure.data.equality_partition;
var G__10020_10044 = "_";
var G__10021_10045 = ((function (G__10019_10043,G__10020_10044){
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
});})(G__10019_10043,G__10020_10044))
;
goog.object.set(G__10019_10043,G__10020_10044,G__10021_10045);
goog.object.set(clojure.data.Diff,"null",true);

var G__10046_10070 = clojure.data.diff_similar;
var G__10047_10071 = "null";
var G__10048_10072 = ((function (G__10046_10070,G__10047_10071){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10046_10070,G__10047_10071))
;
goog.object.set(G__10046_10070,G__10047_10071,G__10048_10072);

goog.object.set(clojure.data.Diff,"string",true);

var G__10049_10073 = clojure.data.diff_similar;
var G__10050_10074 = "string";
var G__10051_10075 = ((function (G__10049_10073,G__10050_10074){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10049_10073,G__10050_10074))
;
goog.object.set(G__10049_10073,G__10050_10074,G__10051_10075);

goog.object.set(clojure.data.Diff,"number",true);

var G__10052_10076 = clojure.data.diff_similar;
var G__10053_10077 = "number";
var G__10054_10078 = ((function (G__10052_10076,G__10053_10077){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10052_10076,G__10053_10077))
;
goog.object.set(G__10052_10076,G__10053_10077,G__10054_10078);

goog.object.set(clojure.data.Diff,"array",true);

var G__10055_10079 = clojure.data.diff_similar;
var G__10056_10080 = "array";
var G__10057_10081 = ((function (G__10055_10079,G__10056_10080){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__10055_10079,G__10056_10080))
;
goog.object.set(G__10055_10079,G__10056_10080,G__10057_10081);

goog.object.set(clojure.data.Diff,"function",true);

var G__10058_10082 = clojure.data.diff_similar;
var G__10059_10083 = "function";
var G__10060_10084 = ((function (G__10058_10082,G__10059_10083){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10058_10082,G__10059_10083))
;
goog.object.set(G__10058_10082,G__10059_10083,G__10060_10084);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__10061_10085 = clojure.data.diff_similar;
var G__10062_10086 = "boolean";
var G__10063_10087 = ((function (G__10061_10085,G__10062_10086){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10061_10085,G__10062_10086))
;
goog.object.set(G__10061_10085,G__10062_10086,G__10063_10087);

goog.object.set(clojure.data.Diff,"_",true);

var G__10064_10088 = clojure.data.diff_similar;
var G__10065_10089 = "_";
var G__10066_10090 = ((function (G__10064_10088,G__10065_10089){
return (function (a,b){
var fexpr__10068 = (function (){var G__10069 = clojure.data.equality_partition(a);
var G__10069__$1 = (((G__10069 instanceof cljs.core.Keyword))?G__10069.fqn:null);
switch (G__10069__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10069__$1)].join('')));

}
})();
return (fexpr__10068.cljs$core$IFn$_invoke$arity$2 ? fexpr__10068.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__10068.call(null,a,b));
});})(G__10064_10088,G__10065_10089))
;
goog.object.set(G__10064_10088,G__10065_10089,G__10066_10090);
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
