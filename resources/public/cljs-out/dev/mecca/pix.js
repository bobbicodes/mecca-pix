// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.pix');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
mecca.pix.component__GT_hex = (function mecca$pix$component__GT_hex(c){
var hex = c.toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hex.length,(1))){
return ((0) + hex);
} else {
return hex;
}
});
mecca.pix.get_color = (function mecca$pix$get_color(r,g,b,a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(0))){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex(b))].join('');
}
});
/**
 * Draw image onto HTML Canvas, returns a
 * Uint8ClampedArray of rgba values (0-255 inclusive)
 */
mecca.pix.img__GT_data = (function mecca$pix$img__GT_data(img){
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var width = img.width;
var height = img.height;
canvas.width = width;

canvas.height = height;

ctx.drawImage(img,(0),(0));

return ctx.getImageData((0),(0),width,height).data;
});
mecca.pix.get_colors = (function mecca$pix$get_colors(img){
var data = mecca.pix.img__GT_data(img);
var w = img.width;
var n = (0);
var colors = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((n >= data.length)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(colors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
} else {
var G__12531 = ((4) + n);
var G__12532 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(colors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,colors,data,w){
return (function (p1__12530_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12530_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,colors,data,w))
);
n = G__12531;
colors = G__12532;
continue;
}
break;
}
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs a reagent element
 */
mecca.pix.svg_paths = (function mecca$pix$svg_paths(paths){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$pix$svg_paths_$_iter__12533(s__12534){
return (new cljs.core.LazySeq(null,(function (){
var s__12534__$1 = s__12534;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12534__$1);
if(temp__5457__auto__){
var s__12534__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12534__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12534__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12536 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12535 = (0);
while(true){
if((i__12535 < size__4323__auto__)){
var vec__12537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12535);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12537,(1),null);
cljs.core.chunk_append(b__12536,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__12543 = (i__12535 + (1));
i__12535 = G__12543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12536),mecca$pix$svg_paths_$_iter__12533(cljs.core.chunk_rest(s__12534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12536),null);
}
} else {
var vec__12540 = cljs.core.first(s__12534__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$pix$svg_paths_$_iter__12533(cljs.core.rest(s__12534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(paths);
})());
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 *   and outputs proper SVG
 */
mecca.pix.edn__GT_xml = (function mecca$pix$edn__GT_xml(width,height,paths){
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$pix$edn__GT_xml_$_iter__12544(s__12545){
return (new cljs.core.LazySeq(null,(function (){
var s__12545__$1 = s__12545;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12545__$1);
if(temp__5457__auto__){
var s__12545__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12545__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12545__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12547 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12546 = (0);
while(true){
if((i__12546 < size__4323__auto__)){
var vec__12548 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12546);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548,(1),null);
cljs.core.chunk_append(b__12547,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__12554 = (i__12546 + (1));
i__12546 = G__12554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12547),mecca$pix$edn__GT_xml_$_iter__12544(cljs.core.chunk_rest(s__12545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12547),null);
}
} else {
var vec__12551 = cljs.core.first(s__12545__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(1),null);
return cljs.core.cons(["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$pix$edn__GT_xml_$_iter__12544(cljs.core.rest(s__12545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(paths);
})())),"</g></svg>"].join('');
});
mecca.pix.make_path_data = (function mecca$pix$make_path_data(x,y,w){
return ["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)].join('');
});
mecca.pix.svg_data = (function mecca$pix$svg_data(img){
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__12555(s__12556){
return (new cljs.core.LazySeq(null,(function (){
var s__12556__$1 = s__12556;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12556__$1);
if(temp__5457__auto__){
var s__12556__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12556__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12556__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12558 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12557 = (0);
while(true){
if((i__12557 < size__4323__auto__)){
var vec__12559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12557);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559,(1),null);
cljs.core.chunk_append(b__12558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12557,vec__12559,k,v,c__4322__auto__,size__4323__auto__,b__12558,s__12556__$2,temp__5457__auto__){
return (function (p__12562){
var vec__12563 = p__12562;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(i__12557,vec__12559,k,v,c__4322__auto__,size__4323__auto__,b__12558,s__12556__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__12573 = (i__12557 + (1));
i__12557 = G__12573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12558),mecca$pix$svg_data_$_iter__12555(cljs.core.chunk_rest(s__12556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12558),null);
}
} else {
var vec__12566 = cljs.core.first(s__12556__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12566,k,v,s__12556__$2,temp__5457__auto__){
return (function (p__12569){
var vec__12570 = p__12569;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(vec__12566,k,v,s__12556__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$pix$svg_data_$_iter__12555(cljs.core.rest(s__12556__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.pix.get_colors(img));
});
