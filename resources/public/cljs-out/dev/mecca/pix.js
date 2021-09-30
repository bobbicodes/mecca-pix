// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.pix');
goog.require('cljs.core');
goog.require('re_frame.core');
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
mecca.pix.quantize = (function mecca$pix$quantize(p__28342){
var vec__28343 = p__28342;
var r = cljs.core.nth.call(null,vec__28343,(0),null);
var g = cljs.core.nth.call(null,vec__28343,(1),null);
var b = cljs.core.nth.call(null,vec__28343,(2),null);
var a = cljs.core.nth.call(null,vec__28343,(3),null);
if(((325) < ((r + g) + b))){
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
var G__28347 = ((4) + n);
var G__28348 = cljs.core.update.call(null,pixels,mecca.pix.quantize.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null)),((function (n,pixels,data,w){
return (function (p1__28346_SHARP_){
return cljs.core.conj.call(null,p1__28346_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,pixels,data,w))
);
n = G__28347;
pixels = G__28348;
continue;
}
break;
}
});
/**
 * Quantifies euclidean distance in 3 dimensional color space
 */
mecca.pix.compare_rgb = (function mecca$pix$compare_rgb(p__28349,p__28350){
var vec__28351 = p__28349;
var r1 = cljs.core.nth.call(null,vec__28351,(0),null);
var g1 = cljs.core.nth.call(null,vec__28351,(1),null);
var b1 = cljs.core.nth.call(null,vec__28351,(2),null);
var _ = cljs.core.nth.call(null,vec__28351,(3),null);
var vec__28354 = p__28350;
var r2 = cljs.core.nth.call(null,vec__28354,(0),null);
var g2 = cljs.core.nth.call(null,vec__28354,(1),null);
var b2 = cljs.core.nth.call(null,vec__28354,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__28354,(3),null);
return Math.sqrt(((Math.pow((r1 - r2),(2)) + Math.pow((g1 - g2),(2))) + Math.pow((b1 - b2),(2))));
});
/**
 * Returns distance of nearest color to color in colors
 */
mecca.pix.closest_neighbor = (function mecca$pix$closest_neighbor(color,colors){
return cljs.core.second.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__28357_SHARP_){
return mecca.pix.compare_rgb.call(null,color,p1__28357_SHARP_);
}),colors)));
});
/**
 * Takes a collection of rgba vectors,
 *   sorts them by colors closest to each other
 */
mecca.pix.similar_colors = (function mecca$pix$similar_colors(colors){
return cljs.core.sort_by.call(null,(function (p1__28358_SHARP_){
return mecca.pix.closest_neighbor.call(null,p1__28358_SHARP_,colors);
}),colors);
});
/**
 * Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
 * and outputs a reagent hiccup element
 */
mecca.pix.svg_paths = (function mecca$pix$svg_paths(paths){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4324__auto__ = (function mecca$pix$svg_paths_$_iter__28359(s__28360){
return (new cljs.core.LazySeq(null,(function (){
var s__28360__$1 = s__28360;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28360__$1);
if(temp__5457__auto__){
var s__28360__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28360__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28360__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28362 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28361 = (0);
while(true){
if((i__28361 < size__4323__auto__)){
var vec__28363 = cljs.core._nth.call(null,c__4322__auto__,i__28361);
var color = cljs.core.nth.call(null,vec__28363,(0),null);
var path = cljs.core.nth.call(null,vec__28363,(1),null);
cljs.core.chunk_append.call(null,b__28362,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null));

var G__28369 = (i__28361 + (1));
i__28361 = G__28369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28362),mecca$pix$svg_paths_$_iter__28359.call(null,cljs.core.chunk_rest.call(null,s__28360__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28362),null);
}
} else {
var vec__28366 = cljs.core.first.call(null,s__28360__$2);
var color = cljs.core.nth.call(null,vec__28366,(0),null);
var path = cljs.core.nth.call(null,vec__28366,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null),mecca$pix$svg_paths_$_iter__28359.call(null,cljs.core.rest.call(null,s__28360__$2)));
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
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$pix$edn__GT_xml_$_iter__28370(s__28371){
return (new cljs.core.LazySeq(null,(function (){
var s__28371__$1 = s__28371;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28371__$1);
if(temp__5457__auto__){
var s__28371__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28371__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28371__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28373 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28372 = (0);
while(true){
if((i__28372 < size__4323__auto__)){
var vec__28374 = cljs.core._nth.call(null,c__4322__auto__,i__28372);
var color = cljs.core.nth.call(null,vec__28374,(0),null);
var path = cljs.core.nth.call(null,vec__28374,(1),null);
cljs.core.chunk_append.call(null,b__28373,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__28380 = (i__28372 + (1));
i__28372 = G__28380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28373),mecca$pix$edn__GT_xml_$_iter__28370.call(null,cljs.core.chunk_rest.call(null,s__28371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28373),null);
}
} else {
var vec__28377 = cljs.core.first.call(null,s__28371__$2);
var color = cljs.core.nth.call(null,vec__28377,(0),null);
var path = cljs.core.nth.call(null,vec__28377,(1),null);
return cljs.core.cons.call(null,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$pix$edn__GT_xml_$_iter__28370.call(null,cljs.core.rest.call(null,s__28371__$2)));
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
var iter__4324__auto__ = (function mecca$pix$row_runs_$_iter__28382(s__28383){
return (new cljs.core.LazySeq(null,(function (){
var s__28383__$1 = s__28383;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28383__$1);
if(temp__5457__auto__){
var s__28383__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28383__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28383__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28385 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28384 = (0);
while(true){
if((i__28384 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__28384);
cljs.core.chunk_append.call(null,b__28385,(function (){var pixels = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (i__28384,y,c__4322__auto__,size__4323__auto__,b__28385,s__28383__$2,temp__5457__auto__){
return (function (p1__28381_SHARP_){
return cljs.core._EQ_.call(null,y,cljs.core.last.call(null,p1__28381_SHARP_));
});})(i__28384,y,c__4322__auto__,size__4323__auto__,b__28385,s__28383__$2,temp__5457__auto__))
,color));
var run_start = cljs.core.first.call(null,pixels);
var runs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pixels)){
return runs;
} else {
if(cljs.core._EQ_.call(null,(1),(cljs.core.second.call(null,pixels) - cljs.core.first.call(null,pixels)))){
var G__28386 = cljs.core.rest.call(null,pixels);
var G__28387 = run_start;
var G__28388 = runs;
pixels = G__28386;
run_start = G__28387;
runs = G__28388;
continue;
} else {
var G__28389 = cljs.core.rest.call(null,pixels);
var G__28390 = cljs.core.second.call(null,pixels);
var G__28391 = cljs.core.conj.call(null,runs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_start,y,((cljs.core.first.call(null,pixels) - run_start) + (1))], null));
pixels = G__28389;
run_start = G__28390;
runs = G__28391;
continue;

}
}
break;
}
})());

var G__28392 = (i__28384 + (1));
i__28384 = G__28392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28385),mecca$pix$row_runs_$_iter__28382.call(null,cljs.core.chunk_rest.call(null,s__28383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28385),null);
}
} else {
var y = cljs.core.first.call(null,s__28383__$2);
return cljs.core.cons.call(null,(function (){var pixels = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (y,s__28383__$2,temp__5457__auto__){
return (function (p1__28381_SHARP_){
return cljs.core._EQ_.call(null,y,cljs.core.last.call(null,p1__28381_SHARP_));
});})(y,s__28383__$2,temp__5457__auto__))
,color));
var run_start = cljs.core.first.call(null,pixels);
var runs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pixels)){
return runs;
} else {
if(cljs.core._EQ_.call(null,(1),(cljs.core.second.call(null,pixels) - cljs.core.first.call(null,pixels)))){
var G__28393 = cljs.core.rest.call(null,pixels);
var G__28394 = run_start;
var G__28395 = runs;
pixels = G__28393;
run_start = G__28394;
runs = G__28395;
continue;
} else {
var G__28396 = cljs.core.rest.call(null,pixels);
var G__28397 = cljs.core.second.call(null,pixels);
var G__28398 = cljs.core.conj.call(null,runs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run_start,y,((cljs.core.first.call(null,pixels) - run_start) + (1))], null));
pixels = G__28396;
run_start = G__28397;
runs = G__28398;
continue;

}
}
break;
}
})(),mecca$pix$row_runs_$_iter__28382.call(null,cljs.core.rest.call(null,s__28383__$2)));
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
var iter__4324__auto__ = (function mecca$pix$svg_data_$_iter__28400(s__28401){
return (new cljs.core.LazySeq(null,(function (){
var s__28401__$1 = s__28401;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28401__$1);
if(temp__5457__auto__){
var s__28401__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28401__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__28401__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__28403 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__28402 = (0);
while(true){
if((i__28402 < size__4323__auto__)){
var vec__28404 = cljs.core._nth.call(null,c__4322__auto__,i__28402);
var k = cljs.core.nth.call(null,vec__28404,(0),null);
var v = cljs.core.nth.call(null,vec__28404,(1),null);
cljs.core.chunk_append.call(null,b__28403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,mecca.pix.rgba__GT_hex,k),cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (i__28402,vec__28404,k,v,c__4322__auto__,size__4323__auto__,b__28403,s__28401__$2,temp__5457__auto__){
return (function (p1__28399_SHARP_){
return cljs.core.map.call(null,((function (i__28402,vec__28404,k,v,c__4322__auto__,size__4323__auto__,b__28403,s__28401__$2,temp__5457__auto__){
return (function (run){
return cljs.core.apply.call(null,mecca.pix.make_path_data,run);
});})(i__28402,vec__28404,k,v,c__4322__auto__,size__4323__auto__,b__28403,s__28401__$2,temp__5457__auto__))
,p1__28399_SHARP_);
});})(i__28402,vec__28404,k,v,c__4322__auto__,size__4323__auto__,b__28403,s__28401__$2,temp__5457__auto__))
,mecca.pix.row_runs.call(null,cljs.core.reverse.call(null,v)))))], null));

var G__28410 = (i__28402 + (1));
i__28402 = G__28410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28403),mecca$pix$svg_data_$_iter__28400.call(null,cljs.core.chunk_rest.call(null,s__28401__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28403),null);
}
} else {
var vec__28407 = cljs.core.first.call(null,s__28401__$2);
var k = cljs.core.nth.call(null,vec__28407,(0),null);
var v = cljs.core.nth.call(null,vec__28407,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,mecca.pix.rgba__GT_hex,k),cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (vec__28407,k,v,s__28401__$2,temp__5457__auto__){
return (function (p1__28399_SHARP_){
return cljs.core.map.call(null,((function (vec__28407,k,v,s__28401__$2,temp__5457__auto__){
return (function (run){
return cljs.core.apply.call(null,mecca.pix.make_path_data,run);
});})(vec__28407,k,v,s__28401__$2,temp__5457__auto__))
,p1__28399_SHARP_);
});})(vec__28407,k,v,s__28401__$2,temp__5457__auto__))
,mecca.pix.row_runs.call(null,cljs.core.reverse.call(null,v)))))], null),mecca$pix$svg_data_$_iter__28400.call(null,cljs.core.rest.call(null,s__28401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,mecca.pix.get_pixels.call(null,img));
});

//# sourceMappingURL=pix.js.map
