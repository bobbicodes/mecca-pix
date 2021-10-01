// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('mecca.pix');
mecca.view.import_image = (function mecca$view$import_image(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import image"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var G__12662_12670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_loading], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12662_12670) : re_frame.core.dispatch.call(null,G__12662_12670));

var dom = goog.object.get(e,"target");
var file = (function (){var G__12663 = dom;
var G__12664 = ["files",(0)];
return goog.object.getValueByKeys(G__12663,G__12664);
})();
var reader = (new FileReader());
reader.readAsDataURL(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12661_SHARP_){
var G__12665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,p1__12661_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12665) : re_frame.core.dispatch.call(null,G__12665));
});})(dom,file,reader))
;
})], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not(cljs.core.deref((function (){var G__12668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12668) : re_frame.core.subscribe.call(null,G__12668));
})()));
if(and__3938__auto__){
return cljs.core.deref((function (){var G__12669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12669) : re_frame.core.subscribe.call(null,G__12669));
})());
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$fade,"Processing..."], null):null)], null);
});
mecca.view.scaled_image = (function mecca$view$scaled_image(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Original image scaled normally:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.deref((function (){var G__12671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12671) : re_frame.core.subscribe.call(null,G__12671));
})()),cljs.core.cst$kw$width,(400)], null)], null)], null);
});
mecca.view.base64 = (function mecca$view$base64(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Base64:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12672) : re_frame.core.subscribe.call(null,G__12672));
})()))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
mecca.view.orig_img = (function mecca$view$orig_img(){
var file = (function (){var G__12673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base64], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12673) : re_frame.core.subscribe.call(null,G__12673));
})();
return ((function (file){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Original image: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12674) : re_frame.core.subscribe.call(null,G__12674));
})()).width)," x ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12675) : re_frame.core.subscribe.call(null,G__12675));
})()).height)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.deref(file)], null)], null)], null);
});
;})(file))
});
mecca.view.svg_output = (function mecca$view$svg_output(){
var img = (function (){var G__12676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12676) : re_frame.core.subscribe.call(null,G__12676));
})();
return ((function (img){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"SVG:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_SHARP_converted,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xmlns,"http://www.w3.org/2000/svg",cljs.core.cst$kw$shape_DASH_rendering,"crispEdges",cljs.core.cst$kw$width,(400),cljs.core.cst$kw$view_DASH_box,["0 -0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(img).width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(img).height)].join('')], null),mecca.pix.svg_paths(mecca.pix.svg_data(cljs.core.deref(img)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,mecca.pix.edn__GT_xml(cljs.core.deref(img).width,cljs.core.deref(img).height,mecca.pix.svg_data(cljs.core.deref(img))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
;})(img))
});
mecca.view.img_data = (function mecca$view$img_data(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Image data:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.pix.img__GT_data(cljs.core.deref((function (){var G__12677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12677) : re_frame.core.subscribe.call(null,G__12677));
})())))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null);
});
/**
 * Renders image's colors sorted by similarity to each other,
 *   with most similar on top
 */
mecca.view.color_pix = (function mecca$view$color_pix(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Pixels by color:"], null),(function (){var pixels = mecca.pix.get_pixels(cljs.core.deref((function (){var G__12678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12678) : re_frame.core.subscribe.call(null,G__12678));
})()));
var colors = mecca.pix.similar_colors(cljs.core.keys(pixels));
var iter__4324__auto__ = ((function (pixels,colors){
return (function mecca$view$color_pix_$_iter__12679(s__12680){
return (new cljs.core.LazySeq(null,((function (pixels,colors){
return (function (){
var s__12680__$1 = s__12680;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12680__$1);
if(temp__5457__auto__){
var s__12680__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12680__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12680__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12682 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12681 = (0);
while(true){
if((i__12681 < size__4323__auto__)){
var color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12681);
cljs.core.chunk_append(b__12682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(40),cljs.core.cst$kw$height,(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(40),cljs.core.cst$kw$height,(40),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,color))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Color distance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(mecca.pix.closest_neighbor(color,colors)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["RGBA: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",color)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Hex: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,color))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pixels,color)))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,color], null)));

var G__12683 = (i__12681 + (1));
i__12681 = G__12683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12682),mecca$view$color_pix_$_iter__12679(cljs.core.chunk_rest(s__12680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12682),null);
}
} else {
var color = cljs.core.first(s__12680__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(40),cljs.core.cst$kw$height,(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(40),cljs.core.cst$kw$height,(40),cljs.core.cst$kw$fill,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,color))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Color distance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(mecca.pix.closest_neighbor(color,colors)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["RGBA: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",color)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Hex: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mecca.pix.rgba__GT_hex,color))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$cols,(30),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pixels,color)))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,color], null)),mecca$view$color_pix_$_iter__12679(cljs.core.rest(s__12680__$2)));
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
})()], null);
});
mecca.view.button = (function mecca$view$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,onclick], null),label], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.import_image], null),(cljs.core.truth_(cljs.core.deref((function (){var G__12685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12685) : re_frame.core.subscribe.call(null,G__12685));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.orig_img], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.pix.input,"number","Colors: ",cljs.core.deref(mecca.pix.n_colors),(function (p1__12684_SHARP_){
return cljs.core.reset_BANG_(mecca.pix.n_colors,parseInt(p1__12684_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.svg_output], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Path data (EDN):"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(10),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(mecca.pix.svg_data(cljs.core.deref((function (){var G__12686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12686) : re_frame.core.subscribe.call(null,G__12686));
})()))))].join(''),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null):null)], null);
});
