// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
mecca.view.svg_paths = (function mecca$view$svg_paths(var_args){
var G__13789 = arguments.length;
switch (G__13789) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null)], 0))], null),(function (){var iter__4324__auto__ = (function mecca$view$iter__13790(s__13791){
return (new cljs.core.LazySeq(null,(function (){
var s__13791__$1 = s__13791;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13791__$1);
if(temp__5457__auto__){
var s__13791__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13791__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13791__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13793 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13792 = (0);
while(true){
if((i__13792 < size__4323__auto__)){
var vec__13794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13792);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794,(1),null);
cljs.core.chunk_append(b__13793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13801 = (i__13792 + (1));
i__13792 = G__13801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13793),mecca$view$iter__13790(cljs.core.chunk_rest(s__13791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13793),null);
}
} else {
var vec__13797 = cljs.core.first(s__13791__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$view$iter__13790(cljs.core.rest(s__13791__$2)));
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
mecca.view.img_el = (function mecca$view$img_el(){
var file = (function (){var G__13802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13802) : re_frame.core.subscribe.call(null,G__13802));
})();
return ((function (file){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.deref(file)], null)], null)], null);
});
;})(file))
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
var G__13804 = ((4) + n);
var G__13805 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(colors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(data[n]),(data[(n + (1))]),(data[(n + (2))]),(data[(n + (3))])], null),((function (n,colors,data,w){
return (function (p1__13803_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13803_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((n / (4)),w),Math.floor(((n / (4)) / w))], null));
});})(n,colors,data,w))
);
n = G__13804;
colors = G__13805;
continue;
}
break;
}
});
mecca.view.import_image = (function mecca$view$import_image(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import image file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__13807 = dom;
var G__13808 = ["files",(0)];
return goog.object.getValueByKeys(G__13807,G__13808);
})();
var reader = (new FileReader());
reader.readAsDataURL(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__13806_SHARP_){
var G__13809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,p1__13806_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13809) : re_frame.core.dispatch.call(null,G__13809));
});})(dom,file,reader))
;
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.import_image], null),(function (){var temp__5457__auto__ = cljs.core.deref((function (){var G__13810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13810) : re_frame.core.subscribe.call(null,G__13810));
})());
if(cljs.core.truth_(temp__5457__auto__)){
var img = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.img_el], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"SVG:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img.width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img.height)].join('')], null),mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (img,temp__5457__auto__){
return (function mecca$view$mecca_$_iter__13811(s__13812){
return (new cljs.core.LazySeq(null,((function (img,temp__5457__auto__){
return (function (){
var s__13812__$1 = s__13812;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13812__$1);
if(temp__5457__auto____$1){
var s__13812__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13812__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13812__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13814 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13813 = (0);
while(true){
if((i__13813 < size__4323__auto__)){
var vec__13815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13813);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815,(1),null);
cljs.core.chunk_append(b__13814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__13813,vec__13815,k,v,c__4322__auto__,size__4323__auto__,b__13814,s__13812__$2,temp__5457__auto____$1,img,temp__5457__auto__){
return (function (p__13818){
var vec__13819 = p__13818;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(i__13813,vec__13815,k,v,c__4322__auto__,size__4323__auto__,b__13814,s__13812__$2,temp__5457__auto____$1,img,temp__5457__auto__))
,cljs.core.reverse(v)))], null));

var G__13829 = (i__13813 + (1));
i__13813 = G__13829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13814),mecca$view$mecca_$_iter__13811(cljs.core.chunk_rest(s__13812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13814),null);
}
} else {
var vec__13822 = cljs.core.first(s__13812__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.view.get_color,k),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13822,k,v,s__13812__$2,temp__5457__auto____$1,img,temp__5457__auto__){
return (function (p__13825){
var vec__13826 = p__13825;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(1),null);
return mecca.view.make_path_data(x,y,(1));
});})(vec__13822,k,v,s__13812__$2,temp__5457__auto____$1,img,temp__5457__auto__))
,cljs.core.reverse(v)))], null),mecca$view$mecca_$_iter__13811(cljs.core.rest(s__13812__$2)));
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
})())], null)], null)], null);
} else {
return null;
}
})()], null);
});
