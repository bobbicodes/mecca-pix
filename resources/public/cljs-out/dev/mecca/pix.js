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
var G__12561 = cljs.core.rest(c1);
var G__12562 = cljs.core.rest(c2);
var G__12563 = (diff + Math.abs((cljs.core.first(c1) - cljs.core.first(c2))));
c1 = G__12561;
c2 = G__12562;
diff = G__12563;
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
return (function mecca$pix$color_sort_$_iter__12565(s__12566){
return (new cljs.core.LazySeq(null,((function (pixels,colors){
return (function (){
var s__12566__$1 = s__12566;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12566__$1);
if(temp__5457__auto__){
var s__12566__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12566__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12566__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12568 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12567 = (0);
while(true){
if((i__12567 < size__4323__auto__)){
var color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12567);
cljs.core.chunk_append(b__12568,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$score,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12567,color,c__4322__auto__,size__4323__auto__,b__12568,s__12566__$2,temp__5457__auto__,pixels,colors){
return (function (p1__12564_SHARP_){
return mecca.pix.compare_rgb(color,p1__12564_SHARP_);
});})(i__12567,color,c__4322__auto__,size__4323__auto__,b__12568,s__12566__$2,temp__5457__auto__,pixels,colors))
,colors))], null));

var G__12569 = (i__12567 + (1));
i__12567 = G__12569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12568),mecca$pix$color_sort_$_iter__12565(cljs.core.chunk_rest(s__12566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12568),null);
}
} else {
var color = cljs.core.first(s__12566__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$score,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (color,s__12566__$2,temp__5457__auto__,pixels,colors){
return (function (p1__12564_SHARP_){
return mecca.pix.compare_rgb(color,p1__12564_SHARP_);
});})(color,s__12566__$2,temp__5457__auto__,pixels,colors))
,colors))], null),mecca$pix$color_sort_$_iter__12565(cljs.core.rest(s__12566__$2)));
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
mecca.pix.svg_data = (function mecca$pix$svg_data(img){
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__12592(s__12593){
return (new cljs.core.LazySeq(null,(function (){
var s__12593__$1 = s__12593;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12593__$1);
if(temp__5457__auto__){
var s__12593__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12593__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12593__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12595 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12594 = (0);
while(true){
if((i__12594 < size__4323__auto__)){
var vec__12596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12594);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12596,(1),null);
cljs.core.chunk_append(b__12595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12594,vec__12596,k,v,c__4322__auto__,size__4323__auto__,b__12595,s__12593__$2,temp__5457__auto__){
return (function (p__12599){
var vec__12600 = p__12599;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(i__12594,vec__12596,k,v,c__4322__auto__,size__4323__auto__,b__12595,s__12593__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__12610 = (i__12594 + (1));
i__12594 = G__12610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12595),mecca$pix$svg_data_$_iter__12592(cljs.core.chunk_rest(s__12593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12595),null);
}
} else {
var vec__12603 = cljs.core.first(s__12593__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12603,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12603,k,v,s__12593__$2,temp__5457__auto__){
return (function (p__12606){
var vec__12607 = p__12606;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12607,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12607,(1),null);
return mecca.pix.make_path_data(x,y,(1));
});})(vec__12603,k,v,s__12593__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$pix$svg_data_$_iter__12592(cljs.core.rest(s__12593__$2)));
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
