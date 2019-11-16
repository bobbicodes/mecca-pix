// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file_DASH_upload,null,cljs.core.cst$kw$img,null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__13532){
var vec__13533 = p__13532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13533,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13533,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$file_DASH_upload,file,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$img,(function (){var img = (new Image());
img.src = file;

return img;
})()], 0));
}));
