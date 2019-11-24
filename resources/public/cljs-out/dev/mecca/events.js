// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$base64,null,cljs.core.cst$kw$converting_QMARK_,false,cljs.core.cst$kw$img,null,cljs.core.cst$kw$xml,null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__12600){
var vec__12601 = p__12600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$converting_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$base64,file,cljs.core.cst$kw$img,(function (){var img = (new Image());
img.src = file;

return img;
})()], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$output_DASH_xml,(function (db,p__12604){
var vec__12605 = p__12604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$xml,xml);
}));
