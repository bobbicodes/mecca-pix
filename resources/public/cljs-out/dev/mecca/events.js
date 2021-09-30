// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base64","base64",167760174),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"img","img",1442687358),null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__21240){
var vec__21241 = p__21240;
var _ = cljs.core.nth.call(null,vec__21241,(0),null);
var file = cljs.core.nth.call(null,vec__21241,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"base64","base64",167760174),file,new cljs.core.Keyword(null,"img","img",1442687358),(function (){var img = (new Image());
img.src = file;

return img;
})());
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__21244){
var vec__21245 = p__21244;
var _ = cljs.core.nth.call(null,vec__21245,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21245,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"img","img",1442687358),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"output-xml","output-xml",1271532805),(function (db,p__21248){
var vec__21249 = p__21248;
var _ = cljs.core.nth.call(null,vec__21249,(0),null);
var xml = cljs.core.nth.call(null,vec__21249,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));

//# sourceMappingURL=events.js.map
