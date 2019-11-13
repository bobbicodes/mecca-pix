// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__18548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18548) : re_frame.core.subscribe.call(null,G__18548));
})();
var notes = (function (){var G__18549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18549) : re_frame.core.subscribe.call(null,G__18549));
})();
var jump = (function (){var G__18550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18550) : re_frame.core.subscribe.call(null,G__18550));
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref((function (){var G__18552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18552) : re_frame.core.subscribe.call(null,G__18552));
})());
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes,jump){
return (function (p1__18547_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18547_SHARP_),(cljs.core.deref(beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref(notes))))){
var G__18553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18553) : re_frame.core.dispatch.call(null,G__18553));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$buffer,req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
});})(out,req))
;

req.open("GET",cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref((function (){var G__18554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18554) : re_frame.core.subscribe.call(null,G__18554));
})()).decodeAudioData(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$decoded_DASH_buffer,decoded_buffer));

return cljs.core.async.close_BANG_(out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
});})(out))
);
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref((function (){var G__18555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18555) : re_frame.core.subscribe.call(null,G__18555));
})()).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18567){
var state_val_18568 = (state_18567[(1)]);
if((state_val_18568 === (1))){
var inst_18556 = mecca.music.load_sound(named_url);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18567__$1,(2),inst_18556);
} else {
if((state_val_18568 === (2))){
var inst_18558 = (state_18567[(7)]);
var inst_18558__$1 = (state_18567[(2)]);
var state_18567__$1 = (function (){var statearr_18569 = state_18567;
(statearr_18569[(7)] = inst_18558__$1);

return statearr_18569;
})();
if(cljs.core.truth_(inst_18558__$1)){
var statearr_18570_18578 = state_18567__$1;
(statearr_18570_18578[(1)] = (3));

} else {
var statearr_18571_18579 = state_18567__$1;
(statearr_18571_18579[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (3))){
var inst_18558 = (state_18567[(7)]);
var inst_18560 = mecca.music.decode(inst_18558);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18567__$1,(6),inst_18560);
} else {
if((state_val_18568 === (4))){
var state_18567__$1 = state_18567;
var statearr_18572_18580 = state_18567__$1;
(statearr_18572_18580[(2)] = null);

(statearr_18572_18580[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (5))){
var inst_18565 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18567__$1,inst_18565);
} else {
if((state_val_18568 === (6))){
var inst_18562 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18573_18581 = state_18567__$1;
(statearr_18573_18581[(2)] = inst_18562);

(statearr_18573_18581[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__14553__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__14553__auto____0 = (function (){
var statearr_18574 = [null,null,null,null,null,null,null,null];
(statearr_18574[(0)] = mecca$music$get_and_decode_$_state_machine__14553__auto__);

(statearr_18574[(1)] = (1));

return statearr_18574;
});
var mecca$music$get_and_decode_$_state_machine__14553__auto____1 = (function (state_18567){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18567);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18575){if((e18575 instanceof Object)){
var ex__14556__auto__ = e18575;
var statearr_18576_18582 = state_18567;
(statearr_18576_18582[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18567);

return cljs.core.cst$kw$recur;
} else {
throw e18575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18583 = state_18567;
state_18567 = G__18583;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__14553__auto__ = function(state_18567){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__14553__auto____1.call(this,state_18567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__14553__auto____0;
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__14553__auto____1;
return mecca$music$get_and_decode_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18577 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18577[(6)] = c__14735__auto__);

return statearr_18577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18612){
var state_val_18613 = (state_18612[(1)]);
if((state_val_18613 === (1))){
var inst_18584 = cljs.core.PersistentHashMap.EMPTY;
var inst_18585 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_18586 = inst_18584;
var inst_18587 = inst_18585;
var state_18612__$1 = (function (){var statearr_18614 = state_18612;
(statearr_18614[(7)] = inst_18586);

(statearr_18614[(8)] = inst_18587);

return statearr_18614;
})();
var statearr_18615_18627 = state_18612__$1;
(statearr_18615_18627[(2)] = null);

(statearr_18615_18627[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18613 === (2))){
var inst_18587 = (state_18612[(8)]);
var inst_18589 = cljs.core.first(inst_18587);
var inst_18590 = (inst_18589 == null);
var inst_18591 = cljs.core.not(inst_18590);
var state_18612__$1 = state_18612;
if(inst_18591){
var statearr_18616_18628 = state_18612__$1;
(statearr_18616_18628[(1)] = (4));

} else {
var statearr_18617_18629 = state_18612__$1;
(statearr_18617_18629[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18613 === (3))){
var inst_18610 = (state_18612[(2)]);
var state_18612__$1 = state_18612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18612__$1,inst_18610);
} else {
if((state_val_18613 === (4))){
var inst_18593 = (state_18612[(9)]);
var inst_18587 = (state_18612[(8)]);
var inst_18593__$1 = cljs.core.first(inst_18587);
var inst_18594 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_18595 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18593__$1),".mp3"].join('');
var inst_18596 = [inst_18595,inst_18593__$1];
var inst_18597 = cljs.core.PersistentHashMap.fromArrays(inst_18594,inst_18596);
var inst_18598 = mecca.music.get_and_decode(inst_18597);
var state_18612__$1 = (function (){var statearr_18618 = state_18612;
(statearr_18618[(9)] = inst_18593__$1);

return statearr_18618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18612__$1,(7),inst_18598);
} else {
if((state_val_18613 === (5))){
var inst_18586 = (state_18612[(7)]);
var state_18612__$1 = state_18612;
var statearr_18619_18630 = state_18612__$1;
(statearr_18619_18630[(2)] = inst_18586);

(statearr_18619_18630[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18613 === (6))){
var inst_18608 = (state_18612[(2)]);
var state_18612__$1 = state_18612;
var statearr_18620_18631 = state_18612__$1;
(statearr_18620_18631[(2)] = inst_18608);

(statearr_18620_18631[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18613 === (7))){
var inst_18593 = (state_18612[(9)]);
var inst_18586 = (state_18612[(7)]);
var inst_18587 = (state_18612[(8)]);
var inst_18600 = (state_18612[(2)]);
var inst_18601 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18593], 0));
var inst_18602 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18600], 0));
var inst_18603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18586,inst_18593,inst_18600);
var inst_18604 = cljs.core.rest(inst_18587);
var inst_18586__$1 = inst_18603;
var inst_18587__$1 = inst_18604;
var state_18612__$1 = (function (){var statearr_18621 = state_18612;
(statearr_18621[(7)] = inst_18586__$1);

(statearr_18621[(10)] = inst_18602);

(statearr_18621[(11)] = inst_18601);

(statearr_18621[(8)] = inst_18587__$1);

return statearr_18621;
})();
var statearr_18622_18632 = state_18612__$1;
(statearr_18622_18632[(2)] = null);

(statearr_18622_18632[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__14553__auto__ = null;
var mecca$music$load_samples_$_state_machine__14553__auto____0 = (function (){
var statearr_18623 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18623[(0)] = mecca$music$load_samples_$_state_machine__14553__auto__);

(statearr_18623[(1)] = (1));

return statearr_18623;
});
var mecca$music$load_samples_$_state_machine__14553__auto____1 = (function (state_18612){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18612);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18624){if((e18624 instanceof Object)){
var ex__14556__auto__ = e18624;
var statearr_18625_18633 = state_18612;
(statearr_18625_18633[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18612);

return cljs.core.cst$kw$recur;
} else {
throw e18624;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18634 = state_18612;
state_18612 = G__18634;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__14553__auto__ = function(state_18612){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__14553__auto____1.call(this,state_18612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__14553__auto____0;
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__14553__auto____1;
return mecca$music$load_samples_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18626 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18626[(6)] = c__14735__auto__);

return statearr_18626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18644){
var state_val_18645 = (state_18644[(1)]);
if((state_val_18645 === (1))){
var inst_18635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18636 = mecca.music.load_samples();
var state_18644__$1 = (function (){var statearr_18646 = state_18644;
(statearr_18646[(7)] = inst_18635);

return statearr_18646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18644__$1,(2),inst_18636);
} else {
if((state_val_18645 === (2))){
var inst_18635 = (state_18644[(7)]);
var inst_18638 = (state_18644[(2)]);
var inst_18639 = [cljs.core.cst$kw$load_DASH_samples,inst_18638];
var inst_18640 = (new cljs.core.PersistentVector(null,2,(5),inst_18635,inst_18639,null));
var inst_18641 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18640) : re_frame.core.dispatch.call(null,inst_18640));
var inst_18642 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_18644__$1 = (function (){var statearr_18647 = state_18644;
(statearr_18647[(8)] = inst_18641);

return statearr_18647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18644__$1,inst_18642);
} else {
return null;
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$state_machine__14553__auto__ = null;
var mecca$music$state_machine__14553__auto____0 = (function (){
var statearr_18648 = [null,null,null,null,null,null,null,null,null];
(statearr_18648[(0)] = mecca$music$state_machine__14553__auto__);

(statearr_18648[(1)] = (1));

return statearr_18648;
});
var mecca$music$state_machine__14553__auto____1 = (function (state_18644){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18644);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18649){if((e18649 instanceof Object)){
var ex__14556__auto__ = e18649;
var statearr_18650_18652 = state_18644;
(statearr_18650_18652[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18644);

return cljs.core.cst$kw$recur;
} else {
throw e18649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18653 = state_18644;
state_18644 = G__18653;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$state_machine__14553__auto__ = function(state_18644){
switch(arguments.length){
case 0:
return mecca$music$state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$state_machine__14553__auto____1.call(this,state_18644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__14553__auto____0;
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__14553__auto____1;
return mecca$music$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18651 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18651[(6)] = c__14735__auto__);

return statearr_18651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.add_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.sub_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate((midi_num - (66)));
} else {
return mecca.music.dec_rate(((68) - midi_num));
}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = (function (){var G__18654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18654) : re_frame.core.subscribe.call(null,G__18654));
})();
var samples = (function (){var G__18655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$samples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18655) : re_frame.core.subscribe.call(null,G__18655));
})();
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = (function (){var G__18656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18656) : re_frame.core.subscribe.call(null,G__18656));
})();
var samples = (function (){var G__18657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$samples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18657) : re_frame.core.subscribe.call(null,G__18657));
})();
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$time,(function (p1__18658_SHARP_){
return (beats + p1__18658_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$time,(function (p1__18659_SHARP_){
return (p1__18659_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__18662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18662) : re_frame.core.subscribe.call(null,G__18662));
})();
var started = (function (){var G__18663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18663) : re_frame.core.subscribe.call(null,G__18663));
})();
var tempo = (function (){var G__18664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18664) : re_frame.core.subscribe.call(null,G__18664));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,started,tempo){
return (function (p1__18660_SHARP_){
return (((from <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18660_SHARP_))) && ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18660_SHARP_) <= to)));
});})(notes,started,tempo))
,cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,started,tempo,section){
return (function (p1__18661_SHARP_){
return mecca.music.advance_note(from,p1__18661_SHARP_);
});})(notes,started,tempo,section))
,section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,started,tempo,section,advanced){
return (function mecca$music$queue_section_$_iter__18665(s__18666){
return (new cljs.core.LazySeq(null,((function (notes,started,tempo,section,advanced){
return (function (){
var s__18666__$1 = s__18666;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18666__$1);
if(temp__5457__auto__){
var s__18666__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18666__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18666__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18668 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18667 = (0);
while(true){
if((i__18667 < size__4323__auto__)){
var map__18669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18667);
var map__18669__$1 = ((((!((map__18669 == null)))?(((((map__18669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18669):map__18669);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18668,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__18673 = (i__18667 + (1));
i__18667 = G__18673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18668),mecca$music$queue_section_$_iter__18665(cljs.core.chunk_rest(s__18666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18668),null);
}
} else {
var map__18671 = cljs.core.first(s__18666__$2);
var map__18671__$1 = ((((!((map__18671 == null)))?(((((map__18671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18671):map__18671);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__18665(cljs.core.rest(s__18666__$2)));
}
} else {
return null;
}
break;
}
});})(notes,started,tempo,section,advanced))
,null,null));
});})(notes,started,tempo,section,advanced))
;
return iter__4324__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = (function (){var G__18676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18676) : re_frame.core.subscribe.call(null,G__18676));
})();
var now = cljs.core.deref((function (){var G__18677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18677) : re_frame.core.subscribe.call(null,G__18677));
})()).currentTime;
var tempo = (function (){var G__18678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18678) : re_frame.core.subscribe.call(null,G__18678));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,now,tempo){
return (function (p1__18674_SHARP_){
return (((from <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18674_SHARP_))) && ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18674_SHARP_) <= to)));
});})(notes,now,tempo))
,cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,now,tempo,section){
return (function (p1__18675_SHARP_){
return mecca.music.advance_note(from,p1__18675_SHARP_);
});})(notes,now,tempo,section))
,section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo,section,advanced){
return (function mecca$music$play_section_$_iter__18679(s__18680){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo,section,advanced){
return (function (){
var s__18680__$1 = s__18680;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18680__$1);
if(temp__5457__auto__){
var s__18680__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18680__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18680__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18682 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18681 = (0);
while(true){
if((i__18681 < size__4323__auto__)){
var map__18683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18681);
var map__18683__$1 = ((((!((map__18683 == null)))?(((((map__18683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18683):map__18683);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18683__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18683__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18683__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18682,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18687 = (i__18681 + (1));
i__18681 = G__18687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18682),mecca$music$play_section_$_iter__18679(cljs.core.chunk_rest(s__18680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18682),null);
}
} else {
var map__18685 = cljs.core.first(s__18680__$2);
var map__18685__$1 = ((((!((map__18685 == null)))?(((((map__18685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18685):map__18685);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__18679(cljs.core.rest(s__18680__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo,section,advanced))
,null,null));
});})(notes,now,tempo,section,advanced))
;
return iter__4324__auto__(advanced);
})());
});
mecca.music.play_note = (function mecca$music$play_note(){
var editor_start = (function (){var G__18688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18688) : re_frame.core.subscribe.call(null,G__18688));
})();
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__18689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18689) : re_frame.core.subscribe.call(null,G__18689));
})())));
return mecca.music.play_section((play_pos - (1)),(play_pos - 0.5));
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = (function (){var G__18690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18690) : re_frame.core.subscribe.call(null,G__18690));
})();
var tempo = (function (){var G__18691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18691) : re_frame.core.subscribe.call(null,G__18691));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__18692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18692) : re_frame.core.subscribe.call(null,G__18692));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__18693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18693) : re_frame.core.subscribe.call(null,G__18693));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__18695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18695) : re_frame.core.subscribe.call(null,G__18695));
})();
var editor_start = (function (){var G__18696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18696) : re_frame.core.subscribe.call(null,G__18696));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,editor_start,play_pos){
return (function (p1__18694_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18694_SHARP_);
});})(notes,editor_start,play_pos))
,cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__18697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18697) : re_frame.core.subscribe.call(null,G__18697));
})();
var now = cljs.core.deref((function (){var G__18698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18698) : re_frame.core.subscribe.call(null,G__18698));
})()).currentTime;
var tempo = (function (){var G__18699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18699) : re_frame.core.subscribe.call(null,G__18699));
})();
var G__18700_18709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18700_18709) : re_frame.core.dispatch.call(null,G__18700_18709));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__18701(s__18702){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__18702__$1 = s__18702;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18702__$1);
if(temp__5457__auto__){
var s__18702__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18702__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18702__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18704 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18703 = (0);
while(true){
if((i__18703 < size__4323__auto__)){
var map__18705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18703);
var map__18705__$1 = ((((!((map__18705 == null)))?(((((map__18705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18705):map__18705);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18705__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18705__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18705__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18704,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18710 = (i__18703 + (1));
i__18703 = G__18710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18704),mecca$music$play_song_BANG__$_iter__18701(cljs.core.chunk_rest(s__18702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18704),null);
}
} else {
var map__18707 = cljs.core.first(s__18702__$2);
var map__18707__$1 = ((((!((map__18707 == null)))?(((((map__18707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18707):map__18707);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18707__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18707__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18707__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__18701(cljs.core.rest(s__18702__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo))
,null,null));
});})(notes,now,tempo))
;
return iter__4324__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});
