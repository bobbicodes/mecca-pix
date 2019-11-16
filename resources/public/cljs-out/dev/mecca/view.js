// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
mecca.view.svg_paths = (function mecca$view$svg_paths(paths){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$view$svg_paths_$_iter__12558(s__12559){
return (new cljs.core.LazySeq(null,(function (){
var s__12559__$1 = s__12559;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12559__$1);
if(temp__5457__auto__){
var s__12559__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12559__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12559__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12561 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12560 = (0);
while(true){
if((i__12560 < size__4323__auto__)){
var vec__12562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12560);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(1),null);
cljs.core.chunk_append(b__12561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__12568 = (i__12560 + (1));
i__12560 = G__12568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12561),mecca$view$svg_paths_$_iter__12558(cljs.core.chunk_rest(s__12559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12561),null);
}
} else {
var vec__12565 = cljs.core.first(s__12559__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$view$svg_paths_$_iter__12558(cljs.core.rest(s__12559__$2)));
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
var G__12570 = ((4) + n);
var G__12571 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(colors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,colors,data,w){
return (function (p1__12569_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12569_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,colors,data,w))
);
n = G__12570;
colors = G__12571;
continue;
}
break;
}
});
mecca.view.svg_data = (function mecca$view$svg_data(img){
var iter__4324__auto__ = (function mecca$view$svg_data_$_iter__12572(s__12573){
return (new cljs.core.LazySeq(null,(function (){
var s__12573__$1 = s__12573;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12573__$1);
if(temp__5457__auto__){
var s__12573__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12573__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12573__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12575 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12574 = (0);
while(true){
if((i__12574 < size__4323__auto__)){
var vec__12576 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12574);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(1),null);
cljs.core.chunk_append(b__12575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__12574,vec__12576,k,v,c__4322__auto__,size__4323__auto__,b__12575,s__12573__$2,temp__5457__auto__){
return (function (p__12579){
var vec__12580 = p__12579;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12580,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12580,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(i__12574,vec__12576,k,v,c__4322__auto__,size__4323__auto__,b__12575,s__12573__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__12590 = (i__12574 + (1));
i__12574 = G__12590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12575),mecca$view$svg_data_$_iter__12572(cljs.core.chunk_rest(s__12573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12575),null);
}
} else {
var vec__12583 = cljs.core.first(s__12573__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12583,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12583,k,v,s__12573__$2,temp__5457__auto__){
return (function (p__12586){
var vec__12587 = p__12586;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12587,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12587,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(vec__12583,k,v,s__12573__$2,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$view$svg_data_$_iter__12572(cljs.core.rest(s__12573__$2)));
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
var file = (function (){var G__12592 = dom;
var G__12593 = ["files",(0)];
return goog.object.getValueByKeys(G__12592,G__12593);
})();
var reader = (new FileReader());
reader.readAsDataURL(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12591_SHARP_){
var G__12594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,p1__12591_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12594) : re_frame.core.dispatch.call(null,G__12594));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.scaled_image = (function mecca$view$scaled_image(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Original image scaled normally:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.deref((function (){var G__12595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12595) : re_frame.core.subscribe.call(null,G__12595));
})()),cljs.core.cst$kw$width,(480)], null)], null)], null);
});
mecca.view.base64 = (function mecca$view$base64(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Base64:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(40),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12596) : re_frame.core.subscribe.call(null,G__12596));
})()))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
mecca.view.orig_img = (function mecca$view$orig_img(){
var file = (function (){var G__12597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12597) : re_frame.core.subscribe.call(null,G__12597));
})();
return ((function (file){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Original image:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.deref(file)], null)], null)], null);
});
;})(file))
});
mecca.view.edn__GT_xml = (function mecca$view$edn__GT_xml(width,height,paths){
return ["<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"\"><g>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4324__auto__ = (function mecca$view$edn__GT_xml_$_iter__12598(s__12599){
return (new cljs.core.LazySeq(null,(function (){
var s__12599__$1 = s__12599;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12599__$1);
if(temp__5457__auto__){
var s__12599__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12599__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12599__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12601 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12600 = (0);
while(true){
if((i__12600 < size__4323__auto__)){
var vec__12602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12600);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12602,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12602,(1),null);
cljs.core.chunk_append(b__12601,["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''));

var G__12608 = (i__12600 + (1));
i__12600 = G__12608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12601),mecca$view$edn__GT_xml_$_iter__12598(cljs.core.chunk_rest(s__12599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12601),null);
}
} else {
var vec__12605 = cljs.core.first(s__12599__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(1),null);
return cljs.core.cons(["<path stroke=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"\" ","d=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"></path>\n"].join(''),mecca$view$edn__GT_xml_$_iter__12598(cljs.core.rest(s__12599__$2)));
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
var img = (function (){var G__12609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12609) : re_frame.core.subscribe.call(null,G__12609));
})();
var width = cljs.core.deref(img).width;
var height = cljs.core.deref(img).height;
return ((function (img,width,height){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"SVG:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_SHARP_converted,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xmlns,"http://www.w3.org/2000/svg",cljs.core.cst$kw$shape_DASH_rendering,"crispEdges",cljs.core.cst$kw$width,(480),cljs.core.cst$kw$view_DASH_box,["0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)].join('')], null),mecca.view.svg_paths(mecca.view.svg_data(cljs.core.deref(img)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(100),cljs.core.cst$kw$value,mecca.view.edn__GT_xml(width,height,mecca.view.svg_data(cljs.core.deref(img))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
;})(img,width,height))
});
mecca.view.img_data = (function mecca$view$img_data(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Image data:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(50),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.img__GT_data(cljs.core.deref((function (){var G__12610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12610) : re_frame.core.subscribe.call(null,G__12610));
})())))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.import_image], null),(function (){var temp__5457__auto__ = cljs.core.deref((function (){var G__12611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12611) : re_frame.core.subscribe.call(null,G__12611));
})());
if(cljs.core.truth_(temp__5457__auto__)){
var img = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.orig_img], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.svg_output], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scaled_image], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.base64], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.img_data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Pixels by color:"], null),(function (){var iter__4324__auto__ = ((function (img,temp__5457__auto__){
return (function mecca$view$mecca_$_iter__12612(s__12613){
return (new cljs.core.LazySeq(null,((function (img,temp__5457__auto__){
return (function (){
var s__12613__$1 = s__12613;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__12613__$1);
if(temp__5457__auto____$1){
var s__12613__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12613__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12613__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12615 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12614 = (0);
while(true){
if((i__12614 < size__4323__auto__)){
var vec__12616 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12614);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12616,(1),null);
cljs.core.chunk_append(b__12615,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__12622 = (i__12614 + (1));
i__12614 = G__12622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12615),mecca$view$mecca_$_iter__12612(cljs.core.chunk_rest(s__12613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12615),null);
}
} else {
var vec__12619 = cljs.core.first(s__12613__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12619,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),mecca$view$mecca_$_iter__12612(cljs.core.rest(s__12613__$2)));
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
