// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.pix');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
/**
 * Takes ASCII value 0-255, returns hex byte as string
 */
mecca.pix.component__GT_hex = (function mecca$pix$component__GT_hex(c){
var hex = c.toString((16));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,hex),(1))){
return ((0) + hex);
} else {
return hex;
}
});
/**
 * Returns proper hex color code. Ignores fully transparent colors.
 */
mecca.pix.rgba__GT_hex = (function mecca$pix$rgba__GT_hex(r,g,b,a){
if(cljs.core._EQ_.call(null,a,(0))){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex.call(null,r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.component__GT_hex.call(null,b))].join('');
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
return cljs.core.partition.call(null,(4),cljs.core.js__GT_clj.call(null,Array.from(mecca.pix.img__GT_data.call(null,el))));
});
if((typeof mecca !== 'undefined') && (typeof mecca.pix !== 'undefined') && (typeof mecca.pix.threshold !== 'undefined')){
} else {
mecca.pix.threshold = reagent.core.atom.call(null,(80));
}
mecca.pix.input = (function mecca$pix$input(type,label,value,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(50)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
mecca.pix.quantize = (function mecca$pix$quantize(p__30917){
var vec__30918 = p__30917;
var r = cljs.core.nth.call(null,vec__30918,(0),null);
var g = cljs.core.nth.call(null,vec__30918,(1),null);
var b = cljs.core.nth.call(null,vec__30918,(2),null);
var a = cljs.core.nth.call(null,vec__30918,(3),null);
if((cljs.core.deref.call(null,mecca.pix.threshold) < (((r + g) + b) / (3)))){
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
var data = mecca.pix.img__GT_data.call(null,img);
var w = img.width;
var n = (0);
var pixels = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((n >= data.length)){
return cljs.core.dissoc.call(null,pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
} else {
var G__30922 = ((4) + n);
var G__30923 = cljs.core.update.call(null,pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,pixels,data,w){
return (function (p1__30921_SHARP_){
return cljs.core.conj.call(null,p1__30921_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__30922;
pixels = G__30923;
continue;
}
break;
}
});
mecca.pix.dominant_colors = (function mecca$pix$dominant_colors(img,n){
return cljs.core.take.call(null,n,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"pixels","pixels",-40523077),(function (){var iter__4324__auto__ = (function mecca$pix$dominant_colors_$_iter__30924(s__30925){
return (new cljs.core.LazySeq(null,(function (){
var s__30925__$1 = s__30925;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30925__$1);
if(temp__5457__auto__){
var s__30925__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30925__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__30925__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__30927 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__30926 = (0);
while(true){
if((i__30926 < size__4323__auto__)){
var vec__30928 = cljs.core._nth.call(null,c__4322__auto__,i__30926);
var color = cljs.core.nth.call(null,vec__30928,(0),null);
var pix = cljs.core.nth.call(null,vec__30928,(1),null);
cljs.core.chunk_append.call(null,b__30927,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"pixels","pixels",-40523077),cljs.core.count.call(null,pix)], null));

var G__30934 = (i__30926 + (1));
i__30926 = G__30934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30927),mecca$pix$dominant_colors_$_iter__30924.call(null,cljs.core.chunk_rest.call(null,s__30925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30927),null);
}
} else {
var vec__30931 = cljs.core.first.call(null,s__30925__$2);
var color = cljs.core.nth.call(null,vec__30931,(0),null);
var pix = cljs.core.nth.call(null,vec__30931,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"pixels","pixels",-40523077),cljs.core.count.call(null,pix)], null),mecca$pix$dominant_colors_$_iter__30924.call(null,cljs.core.rest.call(null,s__30925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,mecca.pix.get_pixels.call(null,img));
})())));
});
/**
 * Quantifies euclidean distance in 3 dimensional color space
 */
mecca.pix.compare_rgb = (function mecca$pix$compare_rgb(p__30935,p__30936){
var vec__30937 = p__30935;
var r1 = cljs.core.nth.call(null,vec__30937,(0),null);
var g1 = cljs.core.nth.call(null,vec__30937,(1),null);
var b1 = cljs.core.nth.call(null,vec__30937,(2),null);
var _ = cljs.core.nth.call(null,vec__30937,(3),null);
var vec__30940 = p__30936;
var r2 = cljs.core.nth.call(null,vec__30940,(0),null);
var g2 = cljs.core.nth.call(null,vec__30940,(1),null);
var b2 = cljs.core.nth.call(null,vec__30940,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__30940,(3),null);
return Math.sqrt(((Math.pow((r1 - r2),(2)) + Math.pow((g1 - g2),(2))) + Math.pow((b1 - b2),(2))));
});
/**
 * Returns distance of nearest color to color in colors
 */
mecca.pix.closest_neighbor = (function mecca$pix$closest_neighbor(color,colors){
return cljs.core.second.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__30943_SHARP_){
return mecca.pix.compare_rgb.call(null,color,p1__30943_SHARP_);
}),colors)));
});
mecca.pix.closest_color = (function mecca$pix$closest_color(color,colors){
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"dist","dist",-1401837144),(function (){var iter__4324__auto__ = (function mecca$pix$closest_color_$_iter__30944(s__30945){
return (new cljs.core.LazySeq(null,(function (){
var s__30945__$1 = s__30945;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30945__$1);
if(temp__5457__auto__){
var s__30945__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30945__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__30945__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__30947 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__30946 = (0);
while(true){
if((i__30946 < size__4323__auto__)){
var dominant_color = cljs.core._nth.call(null,c__4322__auto__,i__30946);
cljs.core.chunk_append.call(null,b__30947,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),dominant_color,new cljs.core.Keyword(null,"dist","dist",-1401837144),mecca.pix.compare_rgb.call(null,color,dominant_color)], null));

var G__30948 = (i__30946 + (1));
i__30946 = G__30948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30947),mecca$pix$closest_color_$_iter__30944.call(null,cljs.core.chunk_rest.call(null,s__30945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30947),null);
}
} else {
var dominant_color = cljs.core.first.call(null,s__30945__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),dominant_color,new cljs.core.Keyword(null,"dist","dist",-1401837144),mecca.pix.compare_rgb.call(null,color,dominant_color)], null),mecca$pix$closest_color_$_iter__30944.call(null,cljs.core.rest.call(null,s__30945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,colors);
})())));
});
mecca.pix.quantize_color = (function mecca$pix$quantize_color(color,n){
return mecca.pix.closest_color.call(null,color,cljs.core.map.call(null,new cljs.core.Keyword(null,"color","color",1011675173),mecca.pix.dominant_colors.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358)], null))),n)));
});
if((typeof mecca !== 'undefined') && (typeof mecca.pix !== 'undefined') && (typeof mecca.pix.n_colors !== 'undefined')){
} else {
mecca.pix.n_colors = reagent.core.atom.call(null,(5));
}
/**
 * Takes an HTMLImageElement, returns a map of
 *   the colors to their corresponding pixels
 */
mecca.pix.quantized_pixels = (function mecca$pix$quantized_pixels(img){
var data = mecca.pix.img__GT_data.call(null,img);
var w = img.width;
var n = (0);
var pixels = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((n >= data.length)){
return cljs.core.dissoc.call(null,pixels,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
} else {
var G__30950 = ((4) + n);
var G__30951 = cljs.core.update.call(null,pixels,mecca.pix.quantize_color.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),cljs.core.deref.call(null,mecca.pix.n_colors)),((function (n,pixels,data,w){
return (function (p1__30949_SHARP_){
return cljs.core.conj.call(null,p1__30949_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__30950;
pixels = G__30951;
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
return cljs.core.sort_by.call(null,(function (p1__30954_SHARP_){
return mecca.pix.closest_neighbor.call(null,p1__30954_SHARP_,colors);
}),colors);
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs a reagent hiccup element
 */
mecca.pix.svg_paths = (function mecca$pix$svg_paths(paths){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4324__auto__ = (function mecca$pix$svg_paths_$_iter__30955(s__30956){
return (new cljs.core.LazySeq(null,(function (){
var s__30956__$1 = s__30956;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30956__$1);
if(temp__5457__auto__){
var s__30956__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30956__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__30956__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__30958 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__30957 = (0);
while(true){
if((i__30957 < size__4323__auto__)){
var vec__30959 = cljs.core._nth.call(null,c__4322__auto__,i__30957);
var color = cljs.core.nth.call(null,vec__30959,(0),null);
var path = cljs.core.nth.call(null,vec__30959,(1),null);
cljs.core.chunk_append.call(null,b__30958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null));

var G__30965 = (i__30957 + (1));
i__30957 = G__30965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30958),mecca$pix$svg_paths_$_iter__30955.call(null,cljs.core.chunk_rest.call(null,s__30956__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30958),null);
}
} else {
var vec__30962 = cljs.core.first.call(null,s__30956__$2);
var color = cljs.core.nth.call(null,vec__30962,(0),null);
var path = cljs.core.nth.call(null,vec__30962,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null),mecca$pix$svg_paths_$_iter__30955.call(null,cljs.core.rest.call(null,s__30956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,paths);
})());
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs SVG in XML
 */
mecca.pix.edn__GT_xml = (function mecca$pix$edn__GT_xml(width,height,paths){
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$pix$edn__GT_xml_$_iter__30966(s__30967){
return (new cljs.core.LazySeq(null,(function (){
var s__30967__$1 = s__30967;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30967__$1);
if(temp__5457__auto__){
var s__30967__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30967__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__30967__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__30969 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__30968 = (0);
while(true){
if((i__30968 < size__4323__auto__)){
var vec__30970 = cljs.core._nth.call(null,c__4322__auto__,i__30968);
var color = cljs.core.nth.call(null,vec__30970,(0),null);
var path = cljs.core.nth.call(null,vec__30970,(1),null);
cljs.core.chunk_append.call(null,b__30969,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__30976 = (i__30968 + (1));
i__30968 = G__30976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30969),mecca$pix$edn__GT_xml_$_iter__30966.call(null,cljs.core.chunk_rest.call(null,s__30967__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30969),null);
}
} else {
var vec__30973 = cljs.core.first.call(null,s__30967__$2);
var color = cljs.core.nth.call(null,vec__30973,(0),null);
var path = cljs.core.nth.call(null,vec__30973,(1),null);
return cljs.core.cons.call(null,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$pix$edn__GT_xml_$_iter__30966.call(null,cljs.core.rest.call(null,s__30967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,paths);
})())),"</g></svg>"].join('');
});
mecca.pix.make_path_data = (function mecca$pix$make_path_data(x,y,w){
return ["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)].join('');
});
mecca.pix.color = cljs.core.reverse.call(null,cljs.core.get.call(null,mecca.pix.get_pixels.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358)], null)))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),(255)], null)));
mecca.pix.row_runs = (function mecca$pix$row_runs(color){
var iter__4324__auto__ = (function mecca$pix$row_runs_$_iter__30978(s__30979){
return (new cljs.core.LazySeq(null,(function (){
var s__30979__$1 = s__30979;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30979__$1);
if(temp__5457__auto__){
var s__30979__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30979__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__30979__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__30981 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__30980 = (0);
while(true){
if((i__30980 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__30980);
cljs.core.chunk_append.call(null,b__30981,(function (){var pixels = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__30980,y,c__4322__auto__,size__4323__auto__,b__30981,s__30979__$2,temp__5457__auto__){
return (function (p1__30977_SHARP_){
return cljs.core._EQ_.call(null,y,cljs.core.last.call(null,p1__30977_SHARP_));
});})(i__30980,y,c__4322__auto__,size__4323__auto__,b__30981,s__30979__$2,temp__5457__auto__))
,color));
var run_start = cljs.core.first.call(null,pixels);
var runs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pixels)){
return runs;
} else {
if(cljs.core._EQ_.call(null,(1),(cljs.core.second.call(null,pixels) - cljs.core.first.call(null,pixels)))){
var G__30982 = cljs.core.rest.call(null,pixels);
var G__30983 = run_start;
var G__30984 = runs;
pixels = G__30982;
run_start = G__30983;
runs = G__30984;
continue;
} else {
var G__30985 = cljs.core.rest.call(null,pixels);
var G__30986 = cljs.core.second.call(null,pixels);
var G__30987 = cljs.core.conj.call(null,runs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_start,y,((cljs.core.first.call(null,pixels) - run_start) + (1))], null));
pixels = G__30985;
run_start = G__30986;
runs = G__30987;
continue;

}
}
break;
}
})());

var G__30988 = (i__30980 + (1));
i__30980 = G__30988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30981),mecca$pix$row_runs_$_iter__30978.call(null,cljs.core.chunk_rest.call(null,s__30979__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30981),null);
}
} else {
var y = cljs.core.first.call(null,s__30979__$2);
return cljs.core.cons.call(null,(function (){var pixels = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (y,s__30979__$2,temp__5457__auto__){
return (function (p1__30977_SHARP_){
return cljs.core._EQ_.call(null,y,cljs.core.last.call(null,p1__30977_SHARP_));
});})(y,s__30979__$2,temp__5457__auto__))
,color));
var run_start = cljs.core.first.call(null,pixels);
var runs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pixels)){
return runs;
} else {
if(cljs.core._EQ_.call(null,(1),(cljs.core.second.call(null,pixels) - cljs.core.first.call(null,pixels)))){
var G__30989 = cljs.core.rest.call(null,pixels);
var G__30990 = run_start;
var G__30991 = runs;
pixels = G__30989;
run_start = G__30990;
runs = G__30991;
continue;
} else {
var G__30992 = cljs.core.rest.call(null,pixels);
var G__30993 = cljs.core.second.call(null,pixels);
var G__30994 = cljs.core.conj.call(null,runs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_start,y,((cljs.core.first.call(null,pixels) - run_start) + (1))], null));
pixels = G__30992;
run_start = G__30993;
runs = G__30994;
continue;

}
}
break;
}
})(),mecca$pix$row_runs_$_iter__30978.call(null,cljs.core.rest.call(null,s__30979__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.last,color)));
});
mecca.pix.svg_data = (function mecca$pix$svg_data(img){
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__30996(s__30997){
return (new cljs.core.LazySeq(null,(function (){
var s__30997__$1 = s__30997;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30997__$1);
if(temp__5457__auto__){
var s__30997__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30997__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__30997__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__30999 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__30998 = (0);
while(true){
if((i__30998 < size__4323__auto__)){
var vec__31000 = cljs.core._nth.call(null,c__4322__auto__,i__30998);
var k = cljs.core.nth.call(null,vec__31000,(0),null);
var v = cljs.core.nth.call(null,vec__31000,(1),null);
cljs.core.chunk_append.call(null,b__30999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,mecca.pix.rgba__GT_hex,k),cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (i__30998,vec__31000,k,v,c__4322__auto__,size__4323__auto__,b__30999,s__30997__$2,temp__5457__auto__){
return (function (p1__30995_SHARP_){
return cljs.core.map.call(null,((function (i__30998,vec__31000,k,v,c__4322__auto__,size__4323__auto__,b__30999,s__30997__$2,temp__5457__auto__){
return (function (run){
return cljs.core.apply.call(null,mecca.pix.make_path_data,run);
});})(i__30998,vec__31000,k,v,c__4322__auto__,size__4323__auto__,b__30999,s__30997__$2,temp__5457__auto__))
,p1__30995_SHARP_);
});})(i__30998,vec__31000,k,v,c__4322__auto__,size__4323__auto__,b__30999,s__30997__$2,temp__5457__auto__))
,mecca.pix.row_runs.call(null,cljs.core.reverse.call(null,v)))))], null));

var G__31006 = (i__30998 + (1));
i__30998 = G__31006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30999),mecca$pix$svg_data_$_iter__30996.call(null,cljs.core.chunk_rest.call(null,s__30997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30999),null);
}
} else {
var vec__31003 = cljs.core.first.call(null,s__30997__$2);
var k = cljs.core.nth.call(null,vec__31003,(0),null);
var v = cljs.core.nth.call(null,vec__31003,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,mecca.pix.rgba__GT_hex,k),cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (vec__31003,k,v,s__30997__$2,temp__5457__auto__){
return (function (p1__30995_SHARP_){
return cljs.core.map.call(null,((function (vec__31003,k,v,s__30997__$2,temp__5457__auto__){
return (function (run){
return cljs.core.apply.call(null,mecca.pix.make_path_data,run);
});})(vec__31003,k,v,s__30997__$2,temp__5457__auto__))
,p1__30995_SHARP_);
});})(vec__31003,k,v,s__30997__$2,temp__5457__auto__))
,mecca.pix.row_runs.call(null,cljs.core.reverse.call(null,v)))))], null),mecca$pix$svg_data_$_iter__30996.call(null,cljs.core.rest.call(null,s__30997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,mecca.pix.quantized_pixels.call(null,img));
});

//# sourceMappingURL=pix.js.map
