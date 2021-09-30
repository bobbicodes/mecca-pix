// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_20172 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_20172){
return (function (){
var _STAR_always_update_STAR_20173 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20173;
}});})(_STAR_always_update_STAR_20172))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20172;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__20175 = arguments.length;
switch (G__20175) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__20177_20181 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__20178_20182 = null;
var count__20179_20183 = (0);
var i__20180_20184 = (0);
while(true){
if((i__20180_20184 < count__20179_20183)){
var v_20185 = cljs.core._nth.call(null,chunk__20178_20182,i__20180_20184);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20185);


var G__20186 = seq__20177_20181;
var G__20187 = chunk__20178_20182;
var G__20188 = count__20179_20183;
var G__20189 = (i__20180_20184 + (1));
seq__20177_20181 = G__20186;
chunk__20178_20182 = G__20187;
count__20179_20183 = G__20188;
i__20180_20184 = G__20189;
continue;
} else {
var temp__5457__auto___20190 = cljs.core.seq.call(null,seq__20177_20181);
if(temp__5457__auto___20190){
var seq__20177_20191__$1 = temp__5457__auto___20190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20177_20191__$1)){
var c__4351__auto___20192 = cljs.core.chunk_first.call(null,seq__20177_20191__$1);
var G__20193 = cljs.core.chunk_rest.call(null,seq__20177_20191__$1);
var G__20194 = c__4351__auto___20192;
var G__20195 = cljs.core.count.call(null,c__4351__auto___20192);
var G__20196 = (0);
seq__20177_20181 = G__20193;
chunk__20178_20182 = G__20194;
count__20179_20183 = G__20195;
i__20180_20184 = G__20196;
continue;
} else {
var v_20197 = cljs.core.first.call(null,seq__20177_20191__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20197);


var G__20198 = cljs.core.next.call(null,seq__20177_20191__$1);
var G__20199 = null;
var G__20200 = (0);
var G__20201 = (0);
seq__20177_20181 = G__20198;
chunk__20178_20182 = G__20199;
count__20179_20183 = G__20200;
i__20180_20184 = G__20201;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
