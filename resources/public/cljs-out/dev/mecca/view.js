// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('goog.dom');
mecca.view.svg_paths = (function mecca$view$svg_paths(paths){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$view$svg_paths_$_iter__13560(s__13561){
return (new cljs.core.LazySeq(null,(function (){
var s__13561__$1 = s__13561;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13561__$1);
if(temp__5457__auto__){
var s__13561__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13561__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13561__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13563 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13562 = (0);
while(true){
if((i__13562 < size__4323__auto__)){
var vec__13564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13562);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(1),null);
cljs.core.chunk_append(b__13563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13570 = (i__13562 + (1));
i__13562 = G__13570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13563),mecca$view$svg_paths_$_iter__13560(cljs.core.chunk_rest(s__13561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13563),null);
}
} else {
var vec__13567 = cljs.core.first(s__13561__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$view$svg_paths_$_iter__13560(cljs.core.rest(s__13561__$2)));
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
mecca.view.component__GT_hex = (function mecca$view$component__GT_hex(c){
var hex = c.toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hex.length,(1))){
return ((0) + hex);
} else {
return hex;
}
});
mecca.view.get_color = (function mecca$view$get_color(r,g,b,a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(255))){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.component__GT_hex(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.component__GT_hex(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.component__GT_hex(b))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(0))){
return false;
} else {
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((a / (255))),")"].join('');

}
}
});
mecca.view.make_path_data = (function mecca$view$make_path_data(x,y,w){
return ["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)].join('');
});
mecca.view.img__GT_data = (function mecca$view$img__GT_data(img){
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var width = img.width;
var height = img.height;
canvas.width = width;

canvas.height = height;

ctx.drawImage(img,(0),(0));

return ctx.getImageData((0),(0),width,height).data;
});
mecca.view.get_colors = (function mecca$view$get_colors(img){
var data = mecca.view.img__GT_data(img);
var w = img.width;
var n = (0);
var colors = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((((n >= data.length)) || (((1) > (data[(n + (3))]))))){
return colors;
} else {
var G__13572 = ((4) + n);
var G__13573 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(colors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,colors,data,w){
return (function (p1__13571_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13571_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,colors,data,w))
);
n = G__13572;
colors = G__13573;
continue;
}
break;
}
});
mecca.view.svg_data = (function mecca$view$svg_data(img){
var iter__4324__auto__ = (function mecca$view$svg_data_$_iter__13574(s__13575){
return (new cljs.core.LazySeq(null,(function (){
var s__13575__$1 = s__13575;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13575__$1);
if(temp__5457__auto__){
var s__13575__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13575__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13575__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13577 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13576 = (0);
while(true){
if((i__13576 < size__4323__auto__)){
var vec__13578 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13576);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13578,(1),null);
cljs.core.chunk_append(b__13577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__13576,vec__13578,k,v,c__4322__auto__,size__4323__auto__,b__13577,s__13575__$2,temp__5457__auto__){
return (function (p__13581){
var vec__13582 = p__13581;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13582,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13582,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(i__13576,vec__13578,k,v,c__4322__auto__,size__4323__auto__,b__13577,s__13575__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__13592 = (i__13576 + (1));
i__13576 = G__13592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13577),mecca$view$svg_data_$_iter__13574(cljs.core.chunk_rest(s__13575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13577),null);
}
} else {
var vec__13585 = cljs.core.first(s__13575__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13585,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13585,k,v,s__13575__$2,temp__5457__auto__){
return (function (p__13588){
var vec__13589 = p__13588;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13589,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13589,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(vec__13585,k,v,s__13575__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$view$svg_data_$_iter__13574(cljs.core.rest(s__13575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.view.get_colors(img));
});
mecca.view.import_image = (function mecca$view$import_image(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import image file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__13594 = dom;
var G__13595 = ["files",(0)];
return goog.object.getValueByKeys(G__13594,G__13595);
})();
var reader = (new FileReader());
reader.readAsDataURL(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__13593_SHARP_){
var G__13596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,p1__13593_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13596) : re_frame.core.dispatch.call(null,G__13596));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.img_el = (function mecca$view$img_el(){
var file = (function (){var G__13597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13597) : re_frame.core.subscribe.call(null,G__13597));
})();
var img = (function (){var G__13598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13598) : re_frame.core.subscribe.call(null,G__13598));
})();
return ((function (file,img){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Original image:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.deref(file)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Scaled to 480px:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.deref(file),cljs.core.cst$kw$width,(480)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Base64:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(50),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
;})(file,img))
});
mecca.view.edn__GT_xml = (function mecca$view$edn__GT_xml(width,height,paths){
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$view$edn__GT_xml_$_iter__13599(s__13600){
return (new cljs.core.LazySeq(null,(function (){
var s__13600__$1 = s__13600;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13600__$1);
if(temp__5457__auto__){
var s__13600__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13600__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13600__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13602 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13601 = (0);
while(true){
if((i__13601 < size__4323__auto__)){
var vec__13603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13601);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13603,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13603,(1),null);
cljs.core.chunk_append(b__13602,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>"].join(''));

var G__13609 = (i__13601 + (1));
i__13601 = G__13609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13602),mecca$view$edn__GT_xml_$_iter__13599(cljs.core.chunk_rest(s__13600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13602),null);
}
} else {
var vec__13606 = cljs.core.first(s__13600__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13606,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13606,(1),null);
return cljs.core.cons(["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>"].join(''),mecca$view$edn__GT_xml_$_iter__13599(cljs.core.rest(s__13600__$2)));
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
mecca.view.svg_output = (function mecca$view$svg_output(){
var xml = (function (){var G__13610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xml], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13610) : re_frame.core.subscribe.call(null,G__13610));
})();
var img = (function (){var G__13611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13611) : re_frame.core.subscribe.call(null,G__13611));
})();
var width = cljs.core.deref(img).width;
var height = cljs.core.deref(img).height;
return ((function (xml,img,width,height){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"SVG XML:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(100),cljs.core.cst$kw$value,mecca.view.edn__GT_xml(width,height,mecca.view.svg_data(cljs.core.deref(img))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
;})(xml,img,width,height))
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.import_image], null),(function (){var temp__5457__auto__ = cljs.core.deref((function (){var G__13612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13612) : re_frame.core.subscribe.call(null,G__13612));
})());
if(cljs.core.truth_(temp__5457__auto__)){
var img = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.img_el], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Image data:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(50),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.img__GT_data(img))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"SVG:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_SHARP_converted,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xmlns,"http://www.w3.org/2000/svg",cljs.core.cst$kw$shape_DASH_rendering,"crispEdges",cljs.core.cst$kw$width,(480),cljs.core.cst$kw$view_DASH_box,["0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img.width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img.height)].join('')], null),mecca.view.svg_paths(mecca.view.svg_data(img))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.svg_output], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Path data (EDN):"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(100),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.svg_data(img))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Pixels by color:"], null),(function (){var iter__4324__auto__ = ((function (img,temp__5457__auto__){
return (function mecca$view$mecca_$_iter__13613(s__13614){
return (new cljs.core.LazySeq(null,((function (img,temp__5457__auto__){
return (function (){
var s__13614__$1 = s__13614;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13614__$1);
if(temp__5457__auto____$1){
var s__13614__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13614__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13614__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13616 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13615 = (0);
while(true){
if((i__13615 < size__4323__auto__)){
var vec__13617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13615);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13617,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13617,(1),null);
cljs.core.chunk_append(b__13616,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__13623 = (i__13615 + (1));
i__13615 = G__13623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13616),mecca$view$mecca_$_iter__13613(cljs.core.chunk_rest(s__13614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13616),null);
}
} else {
var vec__13620 = cljs.core.first(s__13614__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),mecca$view$mecca_$_iter__13613(cljs.core.rest(s__13614__$2)));
}
} else {
return null;
}
break;
}
});})(img,temp__5457__auto__))
,null,null));
});})(img,temp__5457__auto__))
;
return iter__4324__auto__(mecca.view.get_colors(img));
})()], null)], null);
} else {
return null;
}
})()], null);
});
