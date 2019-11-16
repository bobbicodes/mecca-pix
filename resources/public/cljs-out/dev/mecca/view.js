// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('goog.dom');
mecca.view.svg_paths = (function mecca$view$svg_paths(var_args){
var G__13561 = arguments.length;
switch (G__13561) {
case 1:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$1 = (function (paths){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(null,paths,(0),(0),(1));
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$2 = (function (attrs,paths){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(attrs,paths,(0),(0),(1));
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$3 = (function (paths,x,y){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(null,paths,x,y,(1));
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$4 = (function (paths,x,y,scale){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(null,paths,x,y,scale);
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5 = (function (attrs,paths,x,y,scale){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null)], 0))], null),(function (){var iter__4324__auto__ = (function mecca$view$iter__13562(s__13563){
return (new cljs.core.LazySeq(null,(function (){
var s__13563__$1 = s__13563;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13563__$1);
if(temp__5457__auto__){
var s__13563__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13563__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13563__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13565 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13564 = (0);
while(true){
if((i__13564 < size__4323__auto__)){
var vec__13566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13564);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13566,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13566,(1),null);
cljs.core.chunk_append(b__13565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13573 = (i__13564 + (1));
i__13564 = G__13573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13565),mecca$view$iter__13562(cljs.core.chunk_rest(s__13563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13565),null);
}
} else {
var vec__13569 = cljs.core.first(s__13563__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13569,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13569,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$view$iter__13562(cljs.core.rest(s__13563__$2)));
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

mecca.view.svg_paths.cljs$lang$maxFixedArity = 5;

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
mecca.view.make_path = (function mecca$view$make_path(color,data){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),"\"]\n"].join('');
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
var G__13575 = ((4) + n);
var G__13576 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(colors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,colors,data,w){
return (function (p1__13574_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13574_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,colors,data,w))
);
n = G__13575;
colors = G__13576;
continue;
}
break;
}
});
mecca.view.import_image = (function mecca$view$import_image(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import image file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__13578 = dom;
var G__13579 = ["files",(0)];
return goog.object.getValueByKeys(G__13578,G__13579);
})();
var reader = (new FileReader());
reader.readAsDataURL(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__13577_SHARP_){
var G__13580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,p1__13577_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13580) : re_frame.core.dispatch.call(null,G__13580));
});})(dom,file,reader))
;
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null);
});
mecca.view.svg_data = (function mecca$view$svg_data(img){
var iter__4324__auto__ = (function mecca$view$svg_data_$_iter__13581(s__13582){
return (new cljs.core.LazySeq(null,(function (){
var s__13582__$1 = s__13582;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13582__$1);
if(temp__5457__auto__){
var s__13582__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13582__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13582__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13584 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13583 = (0);
while(true){
if((i__13583 < size__4323__auto__)){
var vec__13585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13583);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13585,(1),null);
cljs.core.chunk_append(b__13584,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__13583,vec__13585,k,v,c__4322__auto__,size__4323__auto__,b__13584,s__13582__$2,temp__5457__auto__){
return (function (p__13588){
var vec__13589 = p__13588;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13589,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13589,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(i__13583,vec__13585,k,v,c__4322__auto__,size__4323__auto__,b__13584,s__13582__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__13599 = (i__13583 + (1));
i__13583 = G__13599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13584),mecca$view$svg_data_$_iter__13581(cljs.core.chunk_rest(s__13582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13584),null);
}
} else {
var vec__13592 = cljs.core.first(s__13582__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13592,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13592,k,v,s__13582__$2,temp__5457__auto__){
return (function (p__13595){
var vec__13596 = p__13595;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13596,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13596,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(vec__13592,k,v,s__13582__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$view$svg_data_$_iter__13581(cljs.core.rest(s__13582__$2)));
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
mecca.view.img_el = (function mecca$view$img_el(){
var file = (function (){var G__13600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13600) : re_frame.core.subscribe.call(null,G__13600));
})();
return ((function (file){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Original image:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.deref(file)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Scaled:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.deref(file),cljs.core.cst$kw$width,(400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Base64:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(50),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
;})(file))
});
mecca.view.svg_output = (function mecca$view$svg_output(){
var temp__5457__auto__ = goog.dom.getElement("converted");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return ((function (el,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"SVG XML:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(100),cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xml], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13601) : re_frame.core.subscribe.call(null,G__13601));
})()),cljs.core.cst$kw$on_DASH_change,((function (el,temp__5457__auto__){
return (function (){
var G__13602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_xml,el.outerHTML], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13602) : re_frame.core.dispatch.call(null,G__13602));
});})(el,temp__5457__auto__))
], null)], null)], null);
});
;})(el,temp__5457__auto__))
} else {
return null;
}
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.import_image], null),(function (){var temp__5457__auto__ = cljs.core.deref((function (){var G__13603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13603) : re_frame.core.subscribe.call(null,G__13603));
})());
if(cljs.core.truth_(temp__5457__auto__)){
var img = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.img_el], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"SVG:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_SHARP_converted,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xmlns,"http://www.w3.org/2000/svg",cljs.core.cst$kw$shape_DASH_rendering,"crispEdges",cljs.core.cst$kw$width,"60%",cljs.core.cst$kw$view_DASH_box,["0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img.width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img.height)].join('')], null),mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$1(mecca.view.svg_data(img))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.svg_output], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Path data (EDN):"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(100),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.svg_data(img))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Pixels by color:"], null),(function (){var iter__4324__auto__ = ((function (img,temp__5457__auto__){
return (function mecca$view$mecca_$_iter__13604(s__13605){
return (new cljs.core.LazySeq(null,((function (img,temp__5457__auto__){
return (function (){
var s__13605__$1 = s__13605;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13605__$1);
if(temp__5457__auto____$1){
var s__13605__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13605__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13605__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13607 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13606 = (0);
while(true){
if((i__13606 < size__4323__auto__)){
var vec__13608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13606);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13608,(1),null);
cljs.core.chunk_append(b__13607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__13614 = (i__13606 + (1));
i__13606 = G__13614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13607),mecca$view$mecca_$_iter__13604(cljs.core.chunk_rest(s__13605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13607),null);
}
} else {
var vec__13611 = cljs.core.first(s__13605__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),mecca$view$mecca_$_iter__13604(cljs.core.rest(s__13605__$2)));
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
