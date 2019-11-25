// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.pix');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
mecca.pix.component__GT_hex = (function mecca$pix$component__GT_hex(c){
var hex = c.toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(hex),(1))){
return ((0) + hex);
} else {
return hex;
}
});
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
var G__12531 = ((4) + n);
var G__12532 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,pixels,data,w){
return (function (p1__12530_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12530_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__12531;
pixels = G__12532;
continue;
}
break;
}
});
/**
 * Takes 2 vectors of rgba values,
 * returns a score of how different they are.
 * Score of 0 means same color. 765 means black and white.
 */
mecca.pix.compare_rgb = (function mecca$pix$compare_rgb(color1,color2){
var c1 = color1;
var c2 = color2;
var diff = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(c1))){
return diff;
} else {
var G__12533 = cljs.core.rest(c1);
var G__12534 = cljs.core.rest(c2);
var G__12535 = (diff + Math.abs((cljs.core.first(c1) - cljs.core.first(c2))));
c1 = G__12533;
c2 = G__12534;
diff = G__12535;
continue;
}
break;
}
});
/**
 * Returns a sequence of an image's colors sorted by similarity to others
 */
mecca.pix.color_sort = (function mecca$pix$color_sort(img){
var pixels = mecca.pix.get_pixels(img);
var colors = cljs.core.keys(pixels);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$score,(function (){var iter__4324__auto__ = ((function (pixels,colors){
return (function mecca$pix$color_sort_$_iter__12537(s__12538){
return (new cljs.core.LazySeq(null,((function (pixels,colors){
return (function (){
var s__12538__$1 = s__12538;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12538__$1);
if(temp__5457__auto__){
var s__12538__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12538__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12538__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12540 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12539 = (0);
while(true){
if((i__12539 < size__4323__auto__)){
var color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12539);
cljs.core.chunk_append(b__12540,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$score,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12539,color,c__4322__auto__,size__4323__auto__,b__12540,s__12538__$2,temp__5457__auto__,pixels,colors){
return (function (p1__12536_SHARP_){
return mecca.pix.compare_rgb(color,p1__12536_SHARP_);
});})(i__12539,color,c__4322__auto__,size__4323__auto__,b__12540,s__12538__$2,temp__5457__auto__,pixels,colors))
,colors))], null));

var G__12541 = (i__12539 + (1));
i__12539 = G__12541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12540),mecca$pix$color_sort_$_iter__12537(cljs.core.chunk_rest(s__12538__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12540),null);
}
} else {
var color = cljs.core.first(s__12538__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$score,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (color,s__12538__$2,temp__5457__auto__,pixels,colors){
return (function (p1__12536_SHARP_){
return mecca.pix.compare_rgb(color,p1__12536_SHARP_);
});})(color,s__12538__$2,temp__5457__auto__,pixels,colors))
,colors))], null),mecca$pix$color_sort_$_iter__12537(cljs.core.rest(s__12538__$2)));
}
} else {
return null;
}
break;
}
});})(pixels,colors))
,null,null));
});})(pixels,colors))
;
return iter__4324__auto__(colors);
})());
});
/**
 * Returns distance of nearest color to color in colors
 */
mecca.pix.closest_neighbor = (function mecca$pix$closest_neighbor(color,colors){
return cljs.core.second(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12542_SHARP_){
return mecca.pix.compare_rgb(color,p1__12542_SHARP_);
}),colors)));
});
/**
 * Takes a collection of rgba vectors,
 *   sorts them by colors closest to each other
 */
mecca.pix.similar_colors = (function mecca$pix$similar_colors(colors){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12543_SHARP_){
return mecca.pix.closest_neighbor(p1__12543_SHARP_,colors);
}),colors);
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs a reagent hiccup element
 */
mecca.pix.svg_paths = (function mecca$pix$svg_paths(paths){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$pix$svg_paths_$_iter__12544(s__12545){
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
cljs.core.chunk_append(b__12547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__12554 = (i__12546 + (1));
i__12546 = G__12554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12547),mecca$pix$svg_paths_$_iter__12544(cljs.core.chunk_rest(s__12545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12547),null);
}
} else {
var vec__12551 = cljs.core.first(s__12545__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$pix$svg_paths_$_iter__12544(cljs.core.rest(s__12545__$2)));
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
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$pix$edn__GT_xml_$_iter__12555(s__12556){
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
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559,(1),null);
cljs.core.chunk_append(b__12558,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__12565 = (i__12557 + (1));
i__12557 = G__12565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12558),mecca$pix$edn__GT_xml_$_iter__12555(cljs.core.chunk_rest(s__12556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12558),null);
}
} else {
var vec__12562 = cljs.core.first(s__12556__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(1),null);
return cljs.core.cons(["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$pix$edn__GT_xml_$_iter__12555(cljs.core.rest(s__12556__$2)));
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
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__12566(s__12567){
return (new cljs.core.LazySeq(null,(function (){
var s__12567__$1 = s__12567;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12567__$1);
if(temp__5457__auto__){
var s__12567__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12567__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12567__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12569 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12568 = (0);
while(true){
if((i__12568 < size__4323__auto__)){
var vec__12570 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12568);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(1),null);
cljs.core.chunk_append(b__12569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12568,vec__12570,k,v,c__4322__auto__,size__4323__auto__,b__12569,s__12567__$2,temp__5457__auto__){
return (function (p__12573){
var vec__12574 = p__12573;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(i__12568,vec__12570,k,v,c__4322__auto__,size__4323__auto__,b__12569,s__12567__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__12584 = (i__12568 + (1));
i__12568 = G__12584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12569),mecca$pix$svg_data_$_iter__12566(cljs.core.chunk_rest(s__12567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12569),null);
}
} else {
var vec__12577 = cljs.core.first(s__12567__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12577,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12577,k,v,s__12567__$2,temp__5457__auto__){
return (function (p__12580){
var vec__12581 = p__12580;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12581,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(vec__12577,k,v,s__12567__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$pix$svg_data_$_iter__12566(cljs.core.rest(s__12567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.pix.get_pixels(img));
});
