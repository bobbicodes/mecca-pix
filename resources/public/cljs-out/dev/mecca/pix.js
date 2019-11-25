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
var G__12563 = ((4) + n);
var G__12564 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,pixels,data,w){
return (function (p1__12562_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12562_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__12563;
pixels = G__12564;
continue;
}
break;
}
});
/**
 * Quantifies euclidean distance in 3 dimensional color space
 */
mecca.pix.compare_rgb = (function mecca$pix$compare_rgb(p__12565,p__12566){
var vec__12567 = p__12565;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12567,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12567,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12567,(2),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12567,(3),null);
var vec__12570 = p__12566;
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12570,(3),null);
return Math.sqrt(((Math.pow((r1 - r2),(2)) + Math.pow((g1 - g2),(2))) + Math.pow((b1 - b2),(2))));
});
/**
 * Returns distance of nearest color to color in colors
 */
mecca.pix.closest_neighbor = (function mecca$pix$closest_neighbor(color,colors){
return cljs.core.second(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12573_SHARP_){
return mecca.pix.compare_rgb(color,p1__12573_SHARP_);
}),colors)));
});
/**
 * Takes a collection of rgba vectors,
 *   sorts them by colors closest to each other
 */
mecca.pix.similar_colors = (function mecca$pix$similar_colors(colors){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12574_SHARP_){
return mecca.pix.closest_neighbor(p1__12574_SHARP_,colors);
}),colors);
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs a reagent hiccup element
 */
mecca.pix.svg_paths = (function mecca$pix$svg_paths(paths){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$pix$svg_paths_$_iter__12575(s__12576){
return (new cljs.core.LazySeq(null,(function (){
var s__12576__$1 = s__12576;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12576__$1);
if(temp__5457__auto__){
var s__12576__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12576__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12576__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12578 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12577 = (0);
while(true){
if((i__12577 < size__4323__auto__)){
var vec__12579 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12577);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579,(1),null);
cljs.core.chunk_append(b__12578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__12585 = (i__12577 + (1));
i__12577 = G__12585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12578),mecca$pix$svg_paths_$_iter__12575(cljs.core.chunk_rest(s__12576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12578),null);
}
} else {
var vec__12582 = cljs.core.first(s__12576__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$pix$svg_paths_$_iter__12575(cljs.core.rest(s__12576__$2)));
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
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$pix$edn__GT_xml_$_iter__12586(s__12587){
return (new cljs.core.LazySeq(null,(function (){
var s__12587__$1 = s__12587;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12587__$1);
if(temp__5457__auto__){
var s__12587__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12587__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12587__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12589 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12588 = (0);
while(true){
if((i__12588 < size__4323__auto__)){
var vec__12590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12588);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12590,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12590,(1),null);
cljs.core.chunk_append(b__12589,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__12596 = (i__12588 + (1));
i__12588 = G__12596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12589),mecca$pix$edn__GT_xml_$_iter__12586(cljs.core.chunk_rest(s__12587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12589),null);
}
} else {
var vec__12593 = cljs.core.first(s__12587__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593,(1),null);
return cljs.core.cons(["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$pix$edn__GT_xml_$_iter__12586(cljs.core.rest(s__12587__$2)));
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
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__12597(s__12598){
return (new cljs.core.LazySeq(null,(function (){
var s__12598__$1 = s__12598;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12598__$1);
if(temp__5457__auto__){
var s__12598__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12598__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12598__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12600 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12599 = (0);
while(true){
if((i__12599 < size__4323__auto__)){
var vec__12601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12599);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(1),null);
cljs.core.chunk_append(b__12600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12599,vec__12601,k,v,c__4322__auto__,size__4323__auto__,b__12600,s__12598__$2,temp__5457__auto__){
return (function (p__12604){
var vec__12605 = p__12604;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(i__12599,vec__12601,k,v,c__4322__auto__,size__4323__auto__,b__12600,s__12598__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__12615 = (i__12599 + (1));
i__12599 = G__12615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12600),mecca$pix$svg_data_$_iter__12597(cljs.core.chunk_rest(s__12598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12600),null);
}
} else {
var vec__12608 = cljs.core.first(s__12598__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12608,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12608,k,v,s__12598__$2,temp__5457__auto__){
return (function (p__12611){
var vec__12612 = p__12611;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(vec__12608,k,v,s__12598__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$pix$svg_data_$_iter__12597(cljs.core.rest(s__12598__$2)));
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
