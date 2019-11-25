// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.pix');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
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
var G__12559 = ((4) + n);
var G__12560 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,pixels,data,w){
return (function (p1__12558_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12558_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__12559;
pixels = G__12560;
continue;
}
break;
}
});
/**
 * Quantifies euclidean distance in 3 dimensional color space
 */
mecca.pix.compare_rgb = (function mecca$pix$compare_rgb(p__12561,p__12562){
var vec__12563 = p__12561;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(3),null);
var vec__12566 = p__12562;
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(3),null);
return Math.sqrt(((Math.pow((r1 - r2),(2)) + Math.pow((g1 - g2),(2))) + Math.pow((b1 - b2),(2))));
});
/**
 * Returns distance of nearest color to color in colors
 */
mecca.pix.closest_neighbor = (function mecca$pix$closest_neighbor(color,colors){
return cljs.core.second(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12569_SHARP_){
return mecca.pix.compare_rgb(color,p1__12569_SHARP_);
}),colors)));
});
/**
 * Takes a collection of rgba vectors,
 *   sorts them by colors closest to each other
 */
mecca.pix.similar_colors = (function mecca$pix$similar_colors(colors){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12570_SHARP_){
return mecca.pix.closest_neighbor(p1__12570_SHARP_,colors);
}),colors);
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs a reagent hiccup element
 */
mecca.pix.svg_paths = (function mecca$pix$svg_paths(paths){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$pix$svg_paths_$_iter__12571(s__12572){
return (new cljs.core.LazySeq(null,(function (){
var s__12572__$1 = s__12572;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12572__$1);
if(temp__5457__auto__){
var s__12572__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12572__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12572__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12574 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12573 = (0);
while(true){
if((i__12573 < size__4323__auto__)){
var vec__12575 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12573);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12575,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12575,(1),null);
cljs.core.chunk_append(b__12574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__12581 = (i__12573 + (1));
i__12573 = G__12581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12574),mecca$pix$svg_paths_$_iter__12571(cljs.core.chunk_rest(s__12572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12574),null);
}
} else {
var vec__12578 = cljs.core.first(s__12572__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$pix$svg_paths_$_iter__12571(cljs.core.rest(s__12572__$2)));
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
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$pix$edn__GT_xml_$_iter__12582(s__12583){
return (new cljs.core.LazySeq(null,(function (){
var s__12583__$1 = s__12583;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12583__$1);
if(temp__5457__auto__){
var s__12583__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12583__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12583__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12585 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12584 = (0);
while(true){
if((i__12584 < size__4323__auto__)){
var vec__12586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12584);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12586,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12586,(1),null);
cljs.core.chunk_append(b__12585,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__12592 = (i__12584 + (1));
i__12584 = G__12592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12585),mecca$pix$edn__GT_xml_$_iter__12582(cljs.core.chunk_rest(s__12583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12585),null);
}
} else {
var vec__12589 = cljs.core.first(s__12583__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(1),null);
return cljs.core.cons(["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$pix$edn__GT_xml_$_iter__12582(cljs.core.rest(s__12583__$2)));
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
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__12593(s__12594){
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
var vec__12597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12595);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597,(1),null);
cljs.core.chunk_append(b__12596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12595,vec__12597,k,v,c__4322__auto__,size__4323__auto__,b__12596,s__12594__$2,temp__5457__auto__){
return (function (p__12600){
var vec__12601 = p__12600;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(i__12595,vec__12597,k,v,c__4322__auto__,size__4323__auto__,b__12596,s__12594__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__12611 = (i__12595 + (1));
i__12595 = G__12611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12596),mecca$pix$svg_data_$_iter__12593(cljs.core.chunk_rest(s__12594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12596),null);
}
} else {
var vec__12604 = cljs.core.first(s__12594__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12604,k,v,s__12594__$2,temp__5457__auto__){
return (function (p__12607){
var vec__12608 = p__12607;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12608,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12608,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(vec__12604,k,v,s__12594__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$pix$svg_data_$_iter__12593(cljs.core.rest(s__12594__$2)));
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
