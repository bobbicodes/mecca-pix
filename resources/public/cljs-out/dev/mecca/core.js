// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.subs');
goog.require('mecca.view');
var G__12689_12690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__12689_12690) : re_frame.core.dispatch_sync.call(null,G__12689_12690));
var G__12691_12692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,"data:image/gif;base64,R0lGODlhEQAXAOdWAAAAABgYGDEYACkpKQAISgBgKFogAHspEHZMAHpQLkFBQVJSUmhoUGpqanh4aHBwcHt7ewAA+HBI+AiYMACAQADQKAD4ADCg+ADYwAD4yAD4+EiI+HCo+LAAGIBgAJ9hFbBIAPgAAPgAGPgAMMBAIMVtFbAowKhw0MAAwPgA2Pgo+MhQwKmCSsWGBMiAAPiAAPiQAPakGNCQSMyncfDYAPj4AP//AICAgJycnKCggKCogKiokLC4kKioqKCgsL29vbiQyIDokKDAsIj4+Lj4+Ny8jv+A//iw+MDIoMjQqPjAgPjAkPjouPj4uMDAwMjIwMjIyNDQ0Mjo4ODowPj46PDw8Pj4+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+EUNyZWF0ZWQgd2l0aCBHSU1QACwAAAAAEQAXAAAIsgCNCBxoxINBgggHGnTB8GBCgR5cKFEikaKHhwsBTFQCwIVDhRQ5btQo8SJIDxMNolSC0qTClhtbuiRocGPKmQhRAtjJ8mFBDzBWsgTwESKMo0ENEo3oEihDFzs9RH160WlEADU6Yu0YMSkMj1CzhuXqwmtDAFa0po1YtupRqGnhEm34UqrYrSppMgRAQ2tfukav/uXL9aBTj4Sl9mWr8uvTqDufejSIFClYyXlVat6cNyAAOw=="], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12691_12692) : re_frame.core.dispatch.call(null,G__12691_12692));
mecca.core.get_app_element = (function mecca$core$get_app_element(){
return goog.dom.getElement("app");
});
mecca.core.mount = (function mecca$core$mount(el){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var G__12693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.mecca], null);
var G__12694 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12693,G__12694) : reagent.core.render_component.call(null,G__12693,G__12694));
});
mecca.core.mount_app_element = (function mecca$core$mount_app_element(){
var temp__5457__auto__ = mecca.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return mecca.core.mount(el);
} else {
return null;
}
});
mecca.core.mount_app_element();
mecca.core.on_reload = (function mecca$core$on_reload(){
return mecca.core.mount_app_element();
});
mecca.core.init = (function mecca$core$init(){
return mecca.core.mount_app_element();
});
goog.exportSymbol('mecca.core.init', mecca.core.init);
