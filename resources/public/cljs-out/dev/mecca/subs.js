// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mecca.pix');
var G__12624_12626 = cljs.core.cst$kw$base64;
var G__12625_12627 = ((function (G__12624_12626){
return (function (db,_){
return cljs.core.cst$kw$base64.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12624_12626))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12624_12626,G__12625_12627) : re_frame.core.reg_sub.call(null,G__12624_12626,G__12625_12627));
var G__12628_12630 = cljs.core.cst$kw$img;
var G__12629_12631 = ((function (G__12628_12630){
return (function (db,_){
return cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12628_12630))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12628_12630,G__12629_12631) : re_frame.core.reg_sub.call(null,G__12628_12630,G__12629_12631));
var G__12632_12634 = cljs.core.cst$kw$pix;
var G__12633_12635 = ((function (G__12632_12634){
return (function (db,_){
return mecca.pix.get_pixels(cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1(db));
});})(G__12632_12634))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12632_12634,G__12633_12635) : re_frame.core.reg_sub.call(null,G__12632_12634,G__12633_12635));
var G__12636_12648 = cljs.core.cst$kw$colors;
var G__12637_12649 = ((function (G__12636_12648){
return (function (db,_){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pixels,(function (){var iter__4324__auto__ = ((function (G__12636_12648){
return (function mecca$subs$iter__12638(s__12639){
return (new cljs.core.LazySeq(null,((function (G__12636_12648){
return (function (){
var s__12639__$1 = s__12639;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12639__$1);
if(temp__5457__auto__){
var s__12639__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12639__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12639__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12641 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12640 = (0);
while(true){
if((i__12640 < size__4323__auto__)){
var vec__12642 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12640);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12642,(0),null);
var pix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12642,(1),null);
cljs.core.chunk_append(b__12641,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$pixels,cljs.core.count(pix)], null));

var G__12650 = (i__12640 + (1));
i__12640 = G__12650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12641),mecca$subs$iter__12638(cljs.core.chunk_rest(s__12639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12641),null);
}
} else {
var vec__12645 = cljs.core.first(s__12639__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,(0),null);
var pix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$pixels,cljs.core.count(pix)], null),mecca$subs$iter__12638(cljs.core.rest(s__12639__$2)));
}
} else {
return null;
}
break;
}
});})(G__12636_12648))
,null,null));
});})(G__12636_12648))
;
return iter__4324__auto__(mecca.pix.get_pixels(cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1(db)));
})()));
});})(G__12636_12648))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12636_12648,G__12637_12649) : re_frame.core.reg_sub.call(null,G__12636_12648,G__12637_12649));
var G__12651_12653 = cljs.core.cst$kw$loading_QMARK_;
var G__12652_12654 = ((function (G__12651_12653){
return (function (db,_){
return cljs.core.cst$kw$loading_QMARK_.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12651_12653))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12651_12653,G__12652_12654) : re_frame.core.reg_sub.call(null,G__12651_12653,G__12652_12654));
var G__12655_12657 = cljs.core.cst$kw$xml;
var G__12656_12658 = ((function (G__12655_12657){
return (function (db,_){
return cljs.core.cst$kw$xml.cljs$core$IFn$_invoke$arity$1(db);
});})(G__12655_12657))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12655_12657,G__12656_12658) : re_frame.core.reg_sub.call(null,G__12655_12657,G__12656_12658));
