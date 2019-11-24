// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('mecca.pix');
mecca.view.import_image = (function mecca$view$import_image(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import image file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__12577 = dom;
var G__12578 = ["files",(0)];
return goog.object.getValueByKeys(G__12577,G__12578);
})();
var reader = (new FileReader());
reader.readAsDataURL(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12576_SHARP_){
var G__12579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,p1__12576_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12579) : re_frame.core.dispatch.call(null,G__12579));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.scaled_image = (function mecca$view$scaled_image(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Original image scaled normally:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.deref((function (){var G__12580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12580) : re_frame.core.subscribe.call(null,G__12580));
})()),cljs.core.cst$kw$width,(400)], null)], null)], null);
});
mecca.view.base64 = (function mecca$view$base64(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Base64:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12581 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12581) : re_frame.core.subscribe.call(null,G__12581));
})()))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
mecca.view.orig_img = (function mecca$view$orig_img(){
var file = (function (){var G__12582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12582) : re_frame.core.subscribe.call(null,G__12582));
})();
return ((function (file){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Original image:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.deref(file)], null)], null)], null);
});
;})(file))
});
mecca.view.svg_output = (function mecca$view$svg_output(){
var img = (function (){var G__12583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12583) : re_frame.core.subscribe.call(null,G__12583));
})();
return ((function (img){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(img).width)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(img).height)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"SVG:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_SHARP_converted,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xmlns,"http://www.w3.org/2000/svg",cljs.core.cst$kw$shape_DASH_rendering,"crispEdges",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$view_DASH_box,["0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(img).width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(img).height)].join('')], null),mecca.pix.svg_paths(mecca.pix.svg_data(cljs.core.deref(img)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,mecca.pix.edn__GT_xml(cljs.core.deref(img).width,cljs.core.deref(img).height,mecca.pix.svg_data(cljs.core.deref(img))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
;})(img))
});
mecca.view.img_data = (function mecca$view$img_data(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Image data:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.img__GT_data(cljs.core.deref((function (){var G__12584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12584) : re_frame.core.subscribe.call(null,G__12584));
})())))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
mecca.view.color_pix = (function mecca$view$color_pix(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Pixels by color:"], null),(function (){var iter__4324__auto__ = (function mecca$view$color_pix_$_iter__12585(s__12586){
return (new cljs.core.LazySeq(null,(function (){
var s__12586__$1 = s__12586;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12586__$1);
if(temp__5457__auto__){
var s__12586__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12586__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12586__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12588 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12587 = (0);
while(true){
if((i__12587 < size__4323__auto__)){
var vec__12589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12587);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(1),null);
cljs.core.chunk_append(b__12588,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(v))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__12596 = (i__12587 + (1));
i__12587 = G__12596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12588),mecca$view$color_pix_$_iter__12585(cljs.core.chunk_rest(s__12586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12588),null);
}
} else {
var vec__12592 = cljs.core.first(s__12586__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k))].join('')], null)], null)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.get_color,k))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(v))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),mecca$view$color_pix_$_iter__12585(cljs.core.rest(s__12586__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.pix.get_colors(cljs.core.deref((function (){var G__12595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12595) : re_frame.core.subscribe.call(null,G__12595));
})())));
})()], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.import_image], null),(cljs.core.truth_(cljs.core.deref((function (){var G__12597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12597) : re_frame.core.subscribe.call(null,G__12597));
})()))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.orig_img], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.svg_output], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scaled_image], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.base64], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.img_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.color_pix], null)], null):null)], null);
});
