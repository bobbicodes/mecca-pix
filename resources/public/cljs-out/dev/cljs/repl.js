// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32100){
var map__32101 = p__32100;
var map__32101__$1 = ((((!((map__32101 == null)))?(((((map__32101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);
var m = map__32101__$1;
var n = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32103_32125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32104_32126 = null;
var count__32105_32127 = (0);
var i__32106_32128 = (0);
while(true){
if((i__32106_32128 < count__32105_32127)){
var f_32129 = cljs.core._nth.call(null,chunk__32104_32126,i__32106_32128);
cljs.core.println.call(null,"  ",f_32129);


var G__32130 = seq__32103_32125;
var G__32131 = chunk__32104_32126;
var G__32132 = count__32105_32127;
var G__32133 = (i__32106_32128 + (1));
seq__32103_32125 = G__32130;
chunk__32104_32126 = G__32131;
count__32105_32127 = G__32132;
i__32106_32128 = G__32133;
continue;
} else {
var temp__5457__auto___32134 = cljs.core.seq.call(null,seq__32103_32125);
if(temp__5457__auto___32134){
var seq__32103_32135__$1 = temp__5457__auto___32134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32103_32135__$1)){
var c__4351__auto___32136 = cljs.core.chunk_first.call(null,seq__32103_32135__$1);
var G__32137 = cljs.core.chunk_rest.call(null,seq__32103_32135__$1);
var G__32138 = c__4351__auto___32136;
var G__32139 = cljs.core.count.call(null,c__4351__auto___32136);
var G__32140 = (0);
seq__32103_32125 = G__32137;
chunk__32104_32126 = G__32138;
count__32105_32127 = G__32139;
i__32106_32128 = G__32140;
continue;
} else {
var f_32141 = cljs.core.first.call(null,seq__32103_32135__$1);
cljs.core.println.call(null,"  ",f_32141);


var G__32142 = cljs.core.next.call(null,seq__32103_32135__$1);
var G__32143 = null;
var G__32144 = (0);
var G__32145 = (0);
seq__32103_32125 = G__32142;
chunk__32104_32126 = G__32143;
count__32105_32127 = G__32144;
i__32106_32128 = G__32145;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32146 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32146);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32146)))?cljs.core.second.call(null,arglists_32146):arglists_32146));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32107_32147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32108_32148 = null;
var count__32109_32149 = (0);
var i__32110_32150 = (0);
while(true){
if((i__32110_32150 < count__32109_32149)){
var vec__32111_32151 = cljs.core._nth.call(null,chunk__32108_32148,i__32110_32150);
var name_32152 = cljs.core.nth.call(null,vec__32111_32151,(0),null);
var map__32114_32153 = cljs.core.nth.call(null,vec__32111_32151,(1),null);
var map__32114_32154__$1 = ((((!((map__32114_32153 == null)))?(((((map__32114_32153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32114_32153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32114_32153):map__32114_32153);
var doc_32155 = cljs.core.get.call(null,map__32114_32154__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32156 = cljs.core.get.call(null,map__32114_32154__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32152);

cljs.core.println.call(null," ",arglists_32156);

if(cljs.core.truth_(doc_32155)){
cljs.core.println.call(null," ",doc_32155);
} else {
}


var G__32157 = seq__32107_32147;
var G__32158 = chunk__32108_32148;
var G__32159 = count__32109_32149;
var G__32160 = (i__32110_32150 + (1));
seq__32107_32147 = G__32157;
chunk__32108_32148 = G__32158;
count__32109_32149 = G__32159;
i__32110_32150 = G__32160;
continue;
} else {
var temp__5457__auto___32161 = cljs.core.seq.call(null,seq__32107_32147);
if(temp__5457__auto___32161){
var seq__32107_32162__$1 = temp__5457__auto___32161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32107_32162__$1)){
var c__4351__auto___32163 = cljs.core.chunk_first.call(null,seq__32107_32162__$1);
var G__32164 = cljs.core.chunk_rest.call(null,seq__32107_32162__$1);
var G__32165 = c__4351__auto___32163;
var G__32166 = cljs.core.count.call(null,c__4351__auto___32163);
var G__32167 = (0);
seq__32107_32147 = G__32164;
chunk__32108_32148 = G__32165;
count__32109_32149 = G__32166;
i__32110_32150 = G__32167;
continue;
} else {
var vec__32116_32168 = cljs.core.first.call(null,seq__32107_32162__$1);
var name_32169 = cljs.core.nth.call(null,vec__32116_32168,(0),null);
var map__32119_32170 = cljs.core.nth.call(null,vec__32116_32168,(1),null);
var map__32119_32171__$1 = ((((!((map__32119_32170 == null)))?(((((map__32119_32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32119_32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32119_32170):map__32119_32170);
var doc_32172 = cljs.core.get.call(null,map__32119_32171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32173 = cljs.core.get.call(null,map__32119_32171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32169);

cljs.core.println.call(null," ",arglists_32173);

if(cljs.core.truth_(doc_32172)){
cljs.core.println.call(null," ",doc_32172);
} else {
}


var G__32174 = cljs.core.next.call(null,seq__32107_32162__$1);
var G__32175 = null;
var G__32176 = (0);
var G__32177 = (0);
seq__32107_32147 = G__32174;
chunk__32108_32148 = G__32175;
count__32109_32149 = G__32176;
i__32110_32150 = G__32177;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__32121 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32122 = null;
var count__32123 = (0);
var i__32124 = (0);
while(true){
if((i__32124 < count__32123)){
var role = cljs.core._nth.call(null,chunk__32122,i__32124);
var temp__5457__auto___32178__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32178__$1)){
var spec_32179 = temp__5457__auto___32178__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32179));
} else {
}


var G__32180 = seq__32121;
var G__32181 = chunk__32122;
var G__32182 = count__32123;
var G__32183 = (i__32124 + (1));
seq__32121 = G__32180;
chunk__32122 = G__32181;
count__32123 = G__32182;
i__32124 = G__32183;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32121);
if(temp__5457__auto____$1){
var seq__32121__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32121__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32121__$1);
var G__32184 = cljs.core.chunk_rest.call(null,seq__32121__$1);
var G__32185 = c__4351__auto__;
var G__32186 = cljs.core.count.call(null,c__4351__auto__);
var G__32187 = (0);
seq__32121 = G__32184;
chunk__32122 = G__32185;
count__32123 = G__32186;
i__32124 = G__32187;
continue;
} else {
var role = cljs.core.first.call(null,seq__32121__$1);
var temp__5457__auto___32188__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32188__$2)){
var spec_32189 = temp__5457__auto___32188__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32189));
} else {
}


var G__32190 = cljs.core.next.call(null,seq__32121__$1);
var G__32191 = null;
var G__32192 = (0);
var G__32193 = (0);
seq__32121 = G__32190;
chunk__32122 = G__32191;
count__32123 = G__32192;
i__32124 = G__32193;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
