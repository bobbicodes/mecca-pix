// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.upload');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
mecca.upload.first_file = cljs.core.map.call(null,(function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
mecca.upload.extract_result = cljs.core.map.call(null,(function (p1__18768_SHARP_){
return p1__18768_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.call(null,(1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.call(null,(1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.call(null,mecca.upload.upload_reqs,e);
});
var c__12885__auto___18791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___18791){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___18791){
return (function (state_18781){
var state_val_18782 = (state_18781[(1)]);
if((state_val_18782 === (1))){
var state_18781__$1 = state_18781;
var statearr_18783_18792 = state_18781__$1;
(statearr_18783_18792[(2)] = null);

(statearr_18783_18792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (2))){
var inst_18771 = (new FileReader());
var state_18781__$1 = (function (){var statearr_18784 = state_18781;
(statearr_18784[(7)] = inst_18771);

return statearr_18784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18781__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_18782 === (3))){
var inst_18779 = (state_18781[(2)]);
var state_18781__$1 = state_18781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18781__$1,inst_18779);
} else {
if((state_val_18782 === (4))){
var inst_18771 = (state_18781[(7)]);
var inst_18773 = (state_18781[(2)]);
var inst_18774 = (function (){var reader = inst_18771;
var file = inst_18773;
return ((function (reader,file,inst_18771,inst_18773,state_val_18782,c__12885__auto___18791){
return (function (p1__18769_SHARP_){
return cljs.core.async.put_BANG_.call(null,mecca.upload.file_reads,p1__18769_SHARP_);
});
;})(reader,file,inst_18771,inst_18773,state_val_18782,c__12885__auto___18791))
})();
var inst_18775 = inst_18771.onload = inst_18774;
var inst_18776 = inst_18771.readAsArrayBuffer(inst_18773);
var state_18781__$1 = (function (){var statearr_18785 = state_18781;
(statearr_18785[(8)] = inst_18776);

(statearr_18785[(9)] = inst_18775);

return statearr_18785;
})();
var statearr_18786_18793 = state_18781__$1;
(statearr_18786_18793[(2)] = null);

(statearr_18786_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__12885__auto___18791))
;
return ((function (switch__12726__auto__,c__12885__auto___18791){
return (function() {
var mecca$upload$state_machine__12727__auto__ = null;
var mecca$upload$state_machine__12727__auto____0 = (function (){
var statearr_18787 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18787[(0)] = mecca$upload$state_machine__12727__auto__);

(statearr_18787[(1)] = (1));

return statearr_18787;
});
var mecca$upload$state_machine__12727__auto____1 = (function (state_18781){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_18781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e18788){if((e18788 instanceof Object)){
var ex__12730__auto__ = e18788;
var statearr_18789_18794 = state_18781;
(statearr_18789_18794[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18795 = state_18781;
state_18781 = G__18795;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
mecca$upload$state_machine__12727__auto__ = function(state_18781){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__12727__auto____0.call(this);
case 1:
return mecca$upload$state_machine__12727__auto____1.call(this,state_18781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__12727__auto____0;
mecca$upload$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__12727__auto____1;
return mecca$upload$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___18791))
})();
var state__12887__auto__ = (function (){var statearr_18790 = f__12886__auto__.call(null);
(statearr_18790[(6)] = c__12885__auto___18791);

return statearr_18790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___18791))
);

var c__12885__auto___18818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___18818){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___18818){
return (function (state_18808){
var state_val_18809 = (state_18808[(1)]);
if((state_val_18809 === (1))){
var state_18808__$1 = state_18808;
var statearr_18810_18819 = state_18808__$1;
(statearr_18810_18819[(2)] = null);

(statearr_18810_18819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18809 === (2))){
var inst_18797 = cljs.core.PersistentVector.EMPTY_NODE;
var state_18808__$1 = (function (){var statearr_18811 = state_18808;
(statearr_18811[(7)] = inst_18797);

return statearr_18811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18808__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_18809 === (3))){
var inst_18806 = (state_18808[(2)]);
var state_18808__$1 = state_18808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18808__$1,inst_18806);
} else {
if((state_val_18809 === (4))){
var inst_18797 = (state_18808[(7)]);
var inst_18799 = (state_18808[(2)]);
var inst_18800 = (new ArrayBuffer(inst_18799));
var inst_18801 = [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),inst_18800];
var inst_18802 = (new cljs.core.PersistentVector(null,2,(5),inst_18797,inst_18801,null));
var inst_18803 = re_frame.core.dispatch.call(null,inst_18802);
var state_18808__$1 = (function (){var statearr_18812 = state_18808;
(statearr_18812[(8)] = inst_18803);

return statearr_18812;
})();
var statearr_18813_18820 = state_18808__$1;
(statearr_18813_18820[(2)] = null);

(statearr_18813_18820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__12885__auto___18818))
;
return ((function (switch__12726__auto__,c__12885__auto___18818){
return (function() {
var mecca$upload$state_machine__12727__auto__ = null;
var mecca$upload$state_machine__12727__auto____0 = (function (){
var statearr_18814 = [null,null,null,null,null,null,null,null,null];
(statearr_18814[(0)] = mecca$upload$state_machine__12727__auto__);

(statearr_18814[(1)] = (1));

return statearr_18814;
});
var mecca$upload$state_machine__12727__auto____1 = (function (state_18808){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_18808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e18815){if((e18815 instanceof Object)){
var ex__12730__auto__ = e18815;
var statearr_18816_18821 = state_18808;
(statearr_18816_18821[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18822 = state_18808;
state_18808 = G__18822;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
mecca$upload$state_machine__12727__auto__ = function(state_18808){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__12727__auto____0.call(this);
case 1:
return mecca$upload$state_machine__12727__auto____1.call(this,state_18808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__12727__auto____0;
mecca$upload$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__12727__auto____1;
return mecca$upload$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___18818))
})();
var state__12887__auto__ = (function (){var statearr_18817 = f__12886__auto__.call(null);
(statearr_18817[(6)] = c__12885__auto___18818);

return statearr_18817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___18818))
);


//# sourceMappingURL=upload.js.map
