// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.pix');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
/**
 * Takes ASCII value 0-255, returns hex byte as string
 */
mecca.pix.component__GT_hex = (function mecca$pix$component__GT_hex(c){
var hex = c.toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(hex),(1))){
return ((0) + hex);
} else {
return hex;
}
});
/**
 * Returns proper hex color code. Ignores fully transparent colors.
 */
mecca.pix.rgba__GT_hex = (function mecca$pix$rgba__GT_hex(r,g,b,a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(0))){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex(b))].join('');
}
});
/**
 * Draws image onto HTML Canvas, returns a
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
/**
 * Takes an HTMLImageElement, returns a seq of rgba vals.
 */
mecca.pix.pix = (function mecca$pix$pix(el){
return cljs.core.vec(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Array.from(mecca.pix.img__GT_data(el)))));
});
if((typeof mecca !== 'undefined') && (typeof mecca.pix !== 'undefined') && (typeof mecca.pix.threshold !== 'undefined')){
} else {
mecca.pix.threshold = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((80));
}
mecca.pix.input = (function mecca$pix$input(type,label,value,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(40)], null),cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,on_change], null)], null)], null);
});
mecca.pix.quantize_bw = (function mecca$pix$quantize_bw(p__12544){
var vec__12545 = p__12544;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(3),null);
if((cljs.core.deref(mecca.pix.threshold) < (((r + g) + b) / (3)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),(255)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(255)], null);
}
});
/**
 * Takes an HTMLImageElement, returns a map of
 *   the colors to their corresponding pixels
 */
mecca.pix.get_pixels = (function mecca$pix$get_pixels(img){
var data = mecca.pix.img__GT_data(img);
var w = img.width;
var n = (0);
var pixels = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((n >= data.length)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
} else {
var G__12549 = ((4) + n);
var G__12550 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,pixels,data,w){
return (function (p1__12548_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12548_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__12549;
pixels = G__12550;
continue;
}
break;
}
});
/**
 * Quantifies euclidean distance in 3 dimensional color space
 */
mecca.pix.compare_rgb = (function mecca$pix$compare_rgb(p__12551,p__12552){
var vec__12553 = p__12551;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(3),null);
var vec__12556 = p__12552;
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556,(3),null);
return Math.sqrt(((Math.pow((r1 - r2),(2)) + Math.pow((g1 - g2),(2))) + Math.pow((b1 - b2),(2))));
});
/**
 * Returns distance of nearest color to color in colors
 */
mecca.pix.closest_neighbor = (function mecca$pix$closest_neighbor(color,colors){
return cljs.core.second(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12559_SHARP_){
return mecca.pix.compare_rgb(color,p1__12559_SHARP_);
}),colors)));
});
mecca.pix.closest_color = (function mecca$pix$closest_color(color,colors){
return cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dist,(function (){var iter__4324__auto__ = (function mecca$pix$closest_color_$_iter__12560(s__12561){
return (new cljs.core.LazySeq(null,(function (){
var s__12561__$1 = s__12561;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12561__$1);
if(temp__5457__auto__){
var s__12561__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12561__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12561__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12563 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12562 = (0);
while(true){
if((i__12562 < size__4323__auto__)){
var dominant_color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12562);
cljs.core.chunk_append(b__12563,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,dominant_color,cljs.core.cst$kw$dist,mecca.pix.compare_rgb(color,dominant_color)], null));

var G__12564 = (i__12562 + (1));
i__12562 = G__12564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12563),mecca$pix$closest_color_$_iter__12560(cljs.core.chunk_rest(s__12561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12563),null);
}
} else {
var dominant_color = cljs.core.first(s__12561__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,dominant_color,cljs.core.cst$kw$dist,mecca.pix.compare_rgb(color,dominant_color)], null),mecca$pix$closest_color_$_iter__12560(cljs.core.rest(s__12561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(colors);
})())));
});
mecca.pix.quantize_color = (function mecca$pix$quantize_color(color,n){
return mecca.pix.closest_color(color,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.deref((function (){var G__12565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12565) : re_frame.core.subscribe.call(null,G__12565));
})()))));
});
if((typeof mecca !== 'undefined') && (typeof mecca.pix !== 'undefined') && (typeof mecca.pix.n_colors !== 'undefined')){
} else {
mecca.pix.n_colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((5));
}
/**
 * Takes an HTMLImageElement, returns a map of
 *   the colors to their corresponding pixels
 */
mecca.pix.quantized_pixels = (function mecca$pix$quantized_pixels(img){
var data = mecca.pix.img__GT_data(img);
var w = img.width;
var n = (0);
var pixels = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((n >= data.length)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
} else {
var G__12567 = ((4) + n);
var G__12568 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(pixels,mecca.pix.quantize_color(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),cljs.core.deref(mecca.pix.n_colors)),((function (n,pixels,data,w){
return (function (p1__12566_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12566_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__12567;
pixels = G__12568;
continue;
}
break;
}
});
/**
 * Takes a collection of rgba vectors,
 *   sorts them by colors closest to each other
 */
mecca.pix.similar_colors = (function mecca$pix$similar_colors(colors){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12569_SHARP_){
return mecca.pix.closest_neighbor(p1__12569_SHARP_,colors);
}),colors);
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs a reagent hiccup element
 */
mecca.pix.svg_paths = (function mecca$pix$svg_paths(paths){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$pix$svg_paths_$_iter__12570(s__12571){
return (new cljs.core.LazySeq(null,(function (){
var s__12571__$1 = s__12571;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12571__$1);
if(temp__5457__auto__){
var s__12571__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12571__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12571__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12573 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12572 = (0);
while(true){
if((i__12572 < size__4323__auto__)){
var vec__12574 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12572);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(1),null);
cljs.core.chunk_append(b__12573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__12580 = (i__12572 + (1));
i__12572 = G__12580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12573),mecca$pix$svg_paths_$_iter__12570(cljs.core.chunk_rest(s__12571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12573),null);
}
} else {
var vec__12577 = cljs.core.first(s__12571__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$pix$svg_paths_$_iter__12570(cljs.core.rest(s__12571__$2)));
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
 * and outputs SVG in XML
 */
mecca.pix.edn__GT_xml = (function mecca$pix$edn__GT_xml(width,height,paths){
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$pix$edn__GT_xml_$_iter__12581(s__12582){
return (new cljs.core.LazySeq(null,(function (){
var s__12582__$1 = s__12582;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12582__$1);
if(temp__5457__auto__){
var s__12582__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12582__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12582__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12584 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12583 = (0);
while(true){
if((i__12583 < size__4323__auto__)){
var vec__12585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12583);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585,(1),null);
cljs.core.chunk_append(b__12584,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__12591 = (i__12583 + (1));
i__12583 = G__12591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12584),mecca$pix$edn__GT_xml_$_iter__12581(cljs.core.chunk_rest(s__12582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12584),null);
}
} else {
var vec__12588 = cljs.core.first(s__12582__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12588,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12588,(1),null);
return cljs.core.cons(["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$pix$edn__GT_xml_$_iter__12581(cljs.core.rest(s__12582__$2)));
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
mecca.pix.row_runs = (function mecca$pix$row_runs(color){
var iter__4324__auto__ = (function mecca$pix$row_runs_$_iter__12593(s__12594){
return (new cljs.core.LazySeq(null,(function (){
var s__12594__$1 = s__12594;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12594__$1);
if(temp__5457__auto__){
var s__12594__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12594__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12594__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12596 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12595 = (0);
while(true){
if((i__12595 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12595);
cljs.core.chunk_append(b__12596,(function (){var pixels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__12595,y,c__4322__auto__,size__4323__auto__,b__12596,s__12594__$2,temp__5457__auto__){
return (function (p1__12592_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.last(p1__12592_SHARP_));
});})(i__12595,y,c__4322__auto__,size__4323__auto__,b__12596,s__12594__$2,temp__5457__auto__))
,color));
var run_start = cljs.core.first(pixels);
var runs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(pixels)){
return runs;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.second(pixels) - cljs.core.first(pixels)))){
var G__12597 = cljs.core.rest(pixels);
var G__12598 = run_start;
var G__12599 = runs;
pixels = G__12597;
run_start = G__12598;
runs = G__12599;
continue;
} else {
var G__12600 = cljs.core.rest(pixels);
var G__12601 = cljs.core.second(pixels);
var G__12602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(runs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_start,y,((cljs.core.first(pixels) - run_start) + (1))], null));
pixels = G__12600;
run_start = G__12601;
runs = G__12602;
continue;

}
}
break;
}
})());

var G__12603 = (i__12595 + (1));
i__12595 = G__12603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12596),mecca$pix$row_runs_$_iter__12593(cljs.core.chunk_rest(s__12594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12596),null);
}
} else {
var y = cljs.core.first(s__12594__$2);
return cljs.core.cons((function (){var pixels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (y,s__12594__$2,temp__5457__auto__){
return (function (p1__12592_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.last(p1__12592_SHARP_));
});})(y,s__12594__$2,temp__5457__auto__))
,color));
var run_start = cljs.core.first(pixels);
var runs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(pixels)){
return runs;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.second(pixels) - cljs.core.first(pixels)))){
var G__12604 = cljs.core.rest(pixels);
var G__12605 = run_start;
var G__12606 = runs;
pixels = G__12604;
run_start = G__12605;
runs = G__12606;
continue;
} else {
var G__12607 = cljs.core.rest(pixels);
var G__12608 = cljs.core.second(pixels);
var G__12609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(runs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_start,y,((cljs.core.first(pixels) - run_start) + (1))], null));
pixels = G__12607;
run_start = G__12608;
runs = G__12609;
continue;

}
}
break;
}
})(),mecca$pix$row_runs_$_iter__12593(cljs.core.rest(s__12594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,color)));
});
mecca.pix.svg_data = (function mecca$pix$svg_data(img){
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__12611(s__12612){
return (new cljs.core.LazySeq(null,(function (){
var s__12612__$1 = s__12612;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12612__$1);
if(temp__5457__auto__){
var s__12612__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12612__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12612__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12614 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12613 = (0);
while(true){
if((i__12613 < size__4323__auto__)){
var vec__12615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12613);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12615,(1),null);
cljs.core.chunk_append(b__12614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12613,vec__12615,k,v,c__4322__auto__,size__4323__auto__,b__12614,s__12612__$2,temp__5457__auto__){
return (function (p1__12610_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12613,vec__12615,k,v,c__4322__auto__,size__4323__auto__,b__12614,s__12612__$2,temp__5457__auto__){
return (function (run){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.make_path_data,run);
});})(i__12613,vec__12615,k,v,c__4322__auto__,size__4323__auto__,b__12614,s__12612__$2,temp__5457__auto__))
,p1__12610_SHARP_);
});})(i__12613,vec__12615,k,v,c__4322__auto__,size__4323__auto__,b__12614,s__12612__$2,temp__5457__auto__))
,mecca.pix.row_runs(cljs.core.reverse(v)))))], null));

var G__12621 = (i__12613 + (1));
i__12613 = G__12621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12614),mecca$pix$svg_data_$_iter__12611(cljs.core.chunk_rest(s__12612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12614),null);
}
} else {
var vec__12618 = cljs.core.first(s__12612__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12618,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12618,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12618,k,v,s__12612__$2,temp__5457__auto__){
return (function (p1__12610_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12618,k,v,s__12612__$2,temp__5457__auto__){
return (function (run){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.make_path_data,run);
});})(vec__12618,k,v,s__12612__$2,temp__5457__auto__))
,p1__12610_SHARP_);
});})(vec__12618,k,v,s__12612__$2,temp__5457__auto__))
,mecca.pix.row_runs(cljs.core.reverse(v)))))], null),mecca$pix$svg_data_$_iter__12611(cljs.core.rest(s__12612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.pix.quantized_pixels(img));
});
