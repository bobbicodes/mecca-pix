// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18715 = arguments.length;
switch (G__18715) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18716 = (function (f,blockable,meta18717){
this.f = f;
this.blockable = blockable;
this.meta18717 = meta18717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18718,meta18717__$1){
var self__ = this;
var _18718__$1 = this;
return (new cljs.core.async.t_cljs$core$async18716(self__.f,self__.blockable,meta18717__$1));
});

cljs.core.async.t_cljs$core$async18716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18718){
var self__ = this;
var _18718__$1 = this;
return self__.meta18717;
});

cljs.core.async.t_cljs$core$async18716.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18717","meta18717",29055958,null)], null);
});

cljs.core.async.t_cljs$core$async18716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18716";

cljs.core.async.t_cljs$core$async18716.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18716");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18716.
 */
cljs.core.async.__GT_t_cljs$core$async18716 = (function cljs$core$async$__GT_t_cljs$core$async18716(f__$1,blockable__$1,meta18717){
return (new cljs.core.async.t_cljs$core$async18716(f__$1,blockable__$1,meta18717));
});

}

return (new cljs.core.async.t_cljs$core$async18716(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18722 = arguments.length;
switch (G__18722) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18725 = arguments.length;
switch (G__18725) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18728 = arguments.length;
switch (G__18728) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18730 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18730);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18730,ret){
return (function (){
return fn1.call(null,val_18730);
});})(val_18730,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18732 = arguments.length;
switch (G__18732) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___18734 = n;
var x_18735 = (0);
while(true){
if((x_18735 < n__4408__auto___18734)){
(a[x_18735] = x_18735);

var G__18736 = (x_18735 + (1));
x_18735 = G__18736;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18737 = (function (flag,meta18738){
this.flag = flag;
this.meta18738 = meta18738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18739,meta18738__$1){
var self__ = this;
var _18739__$1 = this;
return (new cljs.core.async.t_cljs$core$async18737(self__.flag,meta18738__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18739){
var self__ = this;
var _18739__$1 = this;
return self__.meta18738;
});})(flag))
;

cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18737.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18738","meta18738",-1947437780,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18737";

cljs.core.async.t_cljs$core$async18737.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18737");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18737.
 */
cljs.core.async.__GT_t_cljs$core$async18737 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18737(flag__$1,meta18738){
return (new cljs.core.async.t_cljs$core$async18737(flag__$1,meta18738));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18737(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18740 = (function (flag,cb,meta18741){
this.flag = flag;
this.cb = cb;
this.meta18741 = meta18741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18742,meta18741__$1){
var self__ = this;
var _18742__$1 = this;
return (new cljs.core.async.t_cljs$core$async18740(self__.flag,self__.cb,meta18741__$1));
});

cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18742){
var self__ = this;
var _18742__$1 = this;
return self__.meta18741;
});

cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18741","meta18741",-1512099744,null)], null);
});

cljs.core.async.t_cljs$core$async18740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18740";

cljs.core.async.t_cljs$core$async18740.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18740");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18740.
 */
cljs.core.async.__GT_t_cljs$core$async18740 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18740(flag__$1,cb__$1,meta18741){
return (new cljs.core.async.t_cljs$core$async18740(flag__$1,cb__$1,meta18741));
});

}

return (new cljs.core.async.t_cljs$core$async18740(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18743_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18743_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18744_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18744_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18745 = (i + (1));
i = G__18745;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18751 = arguments.length;
var i__4532__auto___18752 = (0);
while(true){
if((i__4532__auto___18752 < len__4531__auto___18751)){
args__4534__auto__.push((arguments[i__4532__auto___18752]));

var G__18753 = (i__4532__auto___18752 + (1));
i__4532__auto___18752 = G__18753;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18748){
var map__18749 = p__18748;
var map__18749__$1 = ((((!((map__18749 == null)))?(((((map__18749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18749):map__18749);
var opts = map__18749__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18746){
var G__18747 = cljs.core.first.call(null,seq18746);
var seq18746__$1 = cljs.core.next.call(null,seq18746);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18747,seq18746__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18755 = arguments.length;
switch (G__18755) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16792__auto___18801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___18801){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___18801){
return (function (state_18779){
var state_val_18780 = (state_18779[(1)]);
if((state_val_18780 === (7))){
var inst_18775 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18781_18802 = state_18779__$1;
(statearr_18781_18802[(2)] = inst_18775);

(statearr_18781_18802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (1))){
var state_18779__$1 = state_18779;
var statearr_18782_18803 = state_18779__$1;
(statearr_18782_18803[(2)] = null);

(statearr_18782_18803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (4))){
var inst_18758 = (state_18779[(7)]);
var inst_18758__$1 = (state_18779[(2)]);
var inst_18759 = (inst_18758__$1 == null);
var state_18779__$1 = (function (){var statearr_18783 = state_18779;
(statearr_18783[(7)] = inst_18758__$1);

return statearr_18783;
})();
if(cljs.core.truth_(inst_18759)){
var statearr_18784_18804 = state_18779__$1;
(statearr_18784_18804[(1)] = (5));

} else {
var statearr_18785_18805 = state_18779__$1;
(statearr_18785_18805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (13))){
var state_18779__$1 = state_18779;
var statearr_18786_18806 = state_18779__$1;
(statearr_18786_18806[(2)] = null);

(statearr_18786_18806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (6))){
var inst_18758 = (state_18779[(7)]);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18779__$1,(11),to,inst_18758);
} else {
if((state_val_18780 === (3))){
var inst_18777 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18779__$1,inst_18777);
} else {
if((state_val_18780 === (12))){
var state_18779__$1 = state_18779;
var statearr_18787_18807 = state_18779__$1;
(statearr_18787_18807[(2)] = null);

(statearr_18787_18807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (2))){
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18779__$1,(4),from);
} else {
if((state_val_18780 === (11))){
var inst_18768 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
if(cljs.core.truth_(inst_18768)){
var statearr_18788_18808 = state_18779__$1;
(statearr_18788_18808[(1)] = (12));

} else {
var statearr_18789_18809 = state_18779__$1;
(statearr_18789_18809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (9))){
var state_18779__$1 = state_18779;
var statearr_18790_18810 = state_18779__$1;
(statearr_18790_18810[(2)] = null);

(statearr_18790_18810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (5))){
var state_18779__$1 = state_18779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18791_18811 = state_18779__$1;
(statearr_18791_18811[(1)] = (8));

} else {
var statearr_18792_18812 = state_18779__$1;
(statearr_18792_18812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (14))){
var inst_18773 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18793_18813 = state_18779__$1;
(statearr_18793_18813[(2)] = inst_18773);

(statearr_18793_18813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (10))){
var inst_18765 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18794_18814 = state_18779__$1;
(statearr_18794_18814[(2)] = inst_18765);

(statearr_18794_18814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18780 === (8))){
var inst_18762 = cljs.core.async.close_BANG_.call(null,to);
var state_18779__$1 = state_18779;
var statearr_18795_18815 = state_18779__$1;
(statearr_18795_18815[(2)] = inst_18762);

(statearr_18795_18815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___18801))
;
return ((function (switch__16633__auto__,c__16792__auto___18801){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_18796 = [null,null,null,null,null,null,null,null];
(statearr_18796[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_18796[(1)] = (1));

return statearr_18796;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_18779){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_18779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e18797){if((e18797 instanceof Object)){
var ex__16637__auto__ = e18797;
var statearr_18798_18816 = state_18779;
(statearr_18798_18816[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18817 = state_18779;
state_18779 = G__18817;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_18779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_18779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___18801))
})();
var state__16794__auto__ = (function (){var statearr_18799 = f__16793__auto__.call(null);
(statearr_18799[(6)] = c__16792__auto___18801);

return statearr_18799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___18801))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18818){
var vec__18819 = p__18818;
var v = cljs.core.nth.call(null,vec__18819,(0),null);
var p = cljs.core.nth.call(null,vec__18819,(1),null);
var job = vec__18819;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16792__auto___18990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___18990,res,vec__18819,v,p,job,jobs,results){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___18990,res,vec__18819,v,p,job,jobs,results){
return (function (state_18826){
var state_val_18827 = (state_18826[(1)]);
if((state_val_18827 === (1))){
var state_18826__$1 = state_18826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18826__$1,(2),res,v);
} else {
if((state_val_18827 === (2))){
var inst_18823 = (state_18826[(2)]);
var inst_18824 = cljs.core.async.close_BANG_.call(null,res);
var state_18826__$1 = (function (){var statearr_18828 = state_18826;
(statearr_18828[(7)] = inst_18823);

return statearr_18828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18826__$1,inst_18824);
} else {
return null;
}
}
});})(c__16792__auto___18990,res,vec__18819,v,p,job,jobs,results))
;
return ((function (switch__16633__auto__,c__16792__auto___18990,res,vec__18819,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0 = (function (){
var statearr_18829 = [null,null,null,null,null,null,null,null];
(statearr_18829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__);

(statearr_18829[(1)] = (1));

return statearr_18829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1 = (function (state_18826){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_18826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e18830){if((e18830 instanceof Object)){
var ex__16637__auto__ = e18830;
var statearr_18831_18991 = state_18826;
(statearr_18831_18991[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18992 = state_18826;
state_18826 = G__18992;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = function(state_18826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1.call(this,state_18826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___18990,res,vec__18819,v,p,job,jobs,results))
})();
var state__16794__auto__ = (function (){var statearr_18832 = f__16793__auto__.call(null);
(statearr_18832[(6)] = c__16792__auto___18990);

return statearr_18832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___18990,res,vec__18819,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18833){
var vec__18834 = p__18833;
var v = cljs.core.nth.call(null,vec__18834,(0),null);
var p = cljs.core.nth.call(null,vec__18834,(1),null);
var job = vec__18834;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18993 = n;
var __18994 = (0);
while(true){
if((__18994 < n__4408__auto___18993)){
var G__18837_18995 = type;
var G__18837_18996__$1 = (((G__18837_18995 instanceof cljs.core.Keyword))?G__18837_18995.fqn:null);
switch (G__18837_18996__$1) {
case "compute":
var c__16792__auto___18998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18994,c__16792__auto___18998,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (__18994,c__16792__auto___18998,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async){
return (function (state_18850){
var state_val_18851 = (state_18850[(1)]);
if((state_val_18851 === (1))){
var state_18850__$1 = state_18850;
var statearr_18852_18999 = state_18850__$1;
(statearr_18852_18999[(2)] = null);

(statearr_18852_18999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (2))){
var state_18850__$1 = state_18850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18850__$1,(4),jobs);
} else {
if((state_val_18851 === (3))){
var inst_18848 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18850__$1,inst_18848);
} else {
if((state_val_18851 === (4))){
var inst_18840 = (state_18850[(2)]);
var inst_18841 = process.call(null,inst_18840);
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18841)){
var statearr_18853_19000 = state_18850__$1;
(statearr_18853_19000[(1)] = (5));

} else {
var statearr_18854_19001 = state_18850__$1;
(statearr_18854_19001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (5))){
var state_18850__$1 = state_18850;
var statearr_18855_19002 = state_18850__$1;
(statearr_18855_19002[(2)] = null);

(statearr_18855_19002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (6))){
var state_18850__$1 = state_18850;
var statearr_18856_19003 = state_18850__$1;
(statearr_18856_19003[(2)] = null);

(statearr_18856_19003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (7))){
var inst_18846 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
var statearr_18857_19004 = state_18850__$1;
(statearr_18857_19004[(2)] = inst_18846);

(statearr_18857_19004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18994,c__16792__auto___18998,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async))
;
return ((function (__18994,switch__16633__auto__,c__16792__auto___18998,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0 = (function (){
var statearr_18858 = [null,null,null,null,null,null,null];
(statearr_18858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__);

(statearr_18858[(1)] = (1));

return statearr_18858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1 = (function (state_18850){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_18850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e18859){if((e18859 instanceof Object)){
var ex__16637__auto__ = e18859;
var statearr_18860_19005 = state_18850;
(statearr_18860_19005[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19006 = state_18850;
state_18850 = G__19006;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = function(state_18850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1.call(this,state_18850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__;
})()
;})(__18994,switch__16633__auto__,c__16792__auto___18998,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async))
})();
var state__16794__auto__ = (function (){var statearr_18861 = f__16793__auto__.call(null);
(statearr_18861[(6)] = c__16792__auto___18998);

return statearr_18861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(__18994,c__16792__auto___18998,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async))
);


break;
case "async":
var c__16792__auto___19007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18994,c__16792__auto___19007,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (__18994,c__16792__auto___19007,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async){
return (function (state_18874){
var state_val_18875 = (state_18874[(1)]);
if((state_val_18875 === (1))){
var state_18874__$1 = state_18874;
var statearr_18876_19008 = state_18874__$1;
(statearr_18876_19008[(2)] = null);

(statearr_18876_19008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18875 === (2))){
var state_18874__$1 = state_18874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18874__$1,(4),jobs);
} else {
if((state_val_18875 === (3))){
var inst_18872 = (state_18874[(2)]);
var state_18874__$1 = state_18874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18874__$1,inst_18872);
} else {
if((state_val_18875 === (4))){
var inst_18864 = (state_18874[(2)]);
var inst_18865 = async.call(null,inst_18864);
var state_18874__$1 = state_18874;
if(cljs.core.truth_(inst_18865)){
var statearr_18877_19009 = state_18874__$1;
(statearr_18877_19009[(1)] = (5));

} else {
var statearr_18878_19010 = state_18874__$1;
(statearr_18878_19010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18875 === (5))){
var state_18874__$1 = state_18874;
var statearr_18879_19011 = state_18874__$1;
(statearr_18879_19011[(2)] = null);

(statearr_18879_19011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18875 === (6))){
var state_18874__$1 = state_18874;
var statearr_18880_19012 = state_18874__$1;
(statearr_18880_19012[(2)] = null);

(statearr_18880_19012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18875 === (7))){
var inst_18870 = (state_18874[(2)]);
var state_18874__$1 = state_18874;
var statearr_18881_19013 = state_18874__$1;
(statearr_18881_19013[(2)] = inst_18870);

(statearr_18881_19013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18994,c__16792__auto___19007,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async))
;
return ((function (__18994,switch__16633__auto__,c__16792__auto___19007,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0 = (function (){
var statearr_18882 = [null,null,null,null,null,null,null];
(statearr_18882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__);

(statearr_18882[(1)] = (1));

return statearr_18882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1 = (function (state_18874){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_18874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e18883){if((e18883 instanceof Object)){
var ex__16637__auto__ = e18883;
var statearr_18884_19014 = state_18874;
(statearr_18884_19014[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19015 = state_18874;
state_18874 = G__19015;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = function(state_18874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1.call(this,state_18874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__;
})()
;})(__18994,switch__16633__auto__,c__16792__auto___19007,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async))
})();
var state__16794__auto__ = (function (){var statearr_18885 = f__16793__auto__.call(null);
(statearr_18885[(6)] = c__16792__auto___19007);

return statearr_18885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(__18994,c__16792__auto___19007,G__18837_18995,G__18837_18996__$1,n__4408__auto___18993,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18837_18996__$1)].join('')));

}

var G__19016 = (__18994 + (1));
__18994 = G__19016;
continue;
} else {
}
break;
}

var c__16792__auto___19017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___19017,jobs,results,process,async){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___19017,jobs,results,process,async){
return (function (state_18907){
var state_val_18908 = (state_18907[(1)]);
if((state_val_18908 === (1))){
var state_18907__$1 = state_18907;
var statearr_18909_19018 = state_18907__$1;
(statearr_18909_19018[(2)] = null);

(statearr_18909_19018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (2))){
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18907__$1,(4),from);
} else {
if((state_val_18908 === (3))){
var inst_18905 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18907__$1,inst_18905);
} else {
if((state_val_18908 === (4))){
var inst_18888 = (state_18907[(7)]);
var inst_18888__$1 = (state_18907[(2)]);
var inst_18889 = (inst_18888__$1 == null);
var state_18907__$1 = (function (){var statearr_18910 = state_18907;
(statearr_18910[(7)] = inst_18888__$1);

return statearr_18910;
})();
if(cljs.core.truth_(inst_18889)){
var statearr_18911_19019 = state_18907__$1;
(statearr_18911_19019[(1)] = (5));

} else {
var statearr_18912_19020 = state_18907__$1;
(statearr_18912_19020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (5))){
var inst_18891 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18907__$1 = state_18907;
var statearr_18913_19021 = state_18907__$1;
(statearr_18913_19021[(2)] = inst_18891);

(statearr_18913_19021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (6))){
var inst_18888 = (state_18907[(7)]);
var inst_18893 = (state_18907[(8)]);
var inst_18893__$1 = cljs.core.async.chan.call(null,(1));
var inst_18894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18895 = [inst_18888,inst_18893__$1];
var inst_18896 = (new cljs.core.PersistentVector(null,2,(5),inst_18894,inst_18895,null));
var state_18907__$1 = (function (){var statearr_18914 = state_18907;
(statearr_18914[(8)] = inst_18893__$1);

return statearr_18914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18907__$1,(8),jobs,inst_18896);
} else {
if((state_val_18908 === (7))){
var inst_18903 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18915_19022 = state_18907__$1;
(statearr_18915_19022[(2)] = inst_18903);

(statearr_18915_19022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18908 === (8))){
var inst_18893 = (state_18907[(8)]);
var inst_18898 = (state_18907[(2)]);
var state_18907__$1 = (function (){var statearr_18916 = state_18907;
(statearr_18916[(9)] = inst_18898);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18907__$1,(9),results,inst_18893);
} else {
if((state_val_18908 === (9))){
var inst_18900 = (state_18907[(2)]);
var state_18907__$1 = (function (){var statearr_18917 = state_18907;
(statearr_18917[(10)] = inst_18900);

return statearr_18917;
})();
var statearr_18918_19023 = state_18907__$1;
(statearr_18918_19023[(2)] = null);

(statearr_18918_19023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___19017,jobs,results,process,async))
;
return ((function (switch__16633__auto__,c__16792__auto___19017,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0 = (function (){
var statearr_18919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__);

(statearr_18919[(1)] = (1));

return statearr_18919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1 = (function (state_18907){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_18907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e18920){if((e18920 instanceof Object)){
var ex__16637__auto__ = e18920;
var statearr_18921_19024 = state_18907;
(statearr_18921_19024[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19025 = state_18907;
state_18907 = G__19025;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = function(state_18907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1.call(this,state_18907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___19017,jobs,results,process,async))
})();
var state__16794__auto__ = (function (){var statearr_18922 = f__16793__auto__.call(null);
(statearr_18922[(6)] = c__16792__auto___19017);

return statearr_18922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___19017,jobs,results,process,async))
);


var c__16792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto__,jobs,results,process,async){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto__,jobs,results,process,async){
return (function (state_18960){
var state_val_18961 = (state_18960[(1)]);
if((state_val_18961 === (7))){
var inst_18956 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18962_19026 = state_18960__$1;
(statearr_18962_19026[(2)] = inst_18956);

(statearr_18962_19026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (20))){
var state_18960__$1 = state_18960;
var statearr_18963_19027 = state_18960__$1;
(statearr_18963_19027[(2)] = null);

(statearr_18963_19027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (1))){
var state_18960__$1 = state_18960;
var statearr_18964_19028 = state_18960__$1;
(statearr_18964_19028[(2)] = null);

(statearr_18964_19028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (4))){
var inst_18925 = (state_18960[(7)]);
var inst_18925__$1 = (state_18960[(2)]);
var inst_18926 = (inst_18925__$1 == null);
var state_18960__$1 = (function (){var statearr_18965 = state_18960;
(statearr_18965[(7)] = inst_18925__$1);

return statearr_18965;
})();
if(cljs.core.truth_(inst_18926)){
var statearr_18966_19029 = state_18960__$1;
(statearr_18966_19029[(1)] = (5));

} else {
var statearr_18967_19030 = state_18960__$1;
(statearr_18967_19030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (15))){
var inst_18938 = (state_18960[(8)]);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18960__$1,(18),to,inst_18938);
} else {
if((state_val_18961 === (21))){
var inst_18951 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18968_19031 = state_18960__$1;
(statearr_18968_19031[(2)] = inst_18951);

(statearr_18968_19031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (13))){
var inst_18953 = (state_18960[(2)]);
var state_18960__$1 = (function (){var statearr_18969 = state_18960;
(statearr_18969[(9)] = inst_18953);

return statearr_18969;
})();
var statearr_18970_19032 = state_18960__$1;
(statearr_18970_19032[(2)] = null);

(statearr_18970_19032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (6))){
var inst_18925 = (state_18960[(7)]);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18960__$1,(11),inst_18925);
} else {
if((state_val_18961 === (17))){
var inst_18946 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
if(cljs.core.truth_(inst_18946)){
var statearr_18971_19033 = state_18960__$1;
(statearr_18971_19033[(1)] = (19));

} else {
var statearr_18972_19034 = state_18960__$1;
(statearr_18972_19034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (3))){
var inst_18958 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18960__$1,inst_18958);
} else {
if((state_val_18961 === (12))){
var inst_18935 = (state_18960[(10)]);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18960__$1,(14),inst_18935);
} else {
if((state_val_18961 === (2))){
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18960__$1,(4),results);
} else {
if((state_val_18961 === (19))){
var state_18960__$1 = state_18960;
var statearr_18973_19035 = state_18960__$1;
(statearr_18973_19035[(2)] = null);

(statearr_18973_19035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (11))){
var inst_18935 = (state_18960[(2)]);
var state_18960__$1 = (function (){var statearr_18974 = state_18960;
(statearr_18974[(10)] = inst_18935);

return statearr_18974;
})();
var statearr_18975_19036 = state_18960__$1;
(statearr_18975_19036[(2)] = null);

(statearr_18975_19036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (9))){
var state_18960__$1 = state_18960;
var statearr_18976_19037 = state_18960__$1;
(statearr_18976_19037[(2)] = null);

(statearr_18976_19037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (5))){
var state_18960__$1 = state_18960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18977_19038 = state_18960__$1;
(statearr_18977_19038[(1)] = (8));

} else {
var statearr_18978_19039 = state_18960__$1;
(statearr_18978_19039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (14))){
var inst_18940 = (state_18960[(11)]);
var inst_18938 = (state_18960[(8)]);
var inst_18938__$1 = (state_18960[(2)]);
var inst_18939 = (inst_18938__$1 == null);
var inst_18940__$1 = cljs.core.not.call(null,inst_18939);
var state_18960__$1 = (function (){var statearr_18979 = state_18960;
(statearr_18979[(11)] = inst_18940__$1);

(statearr_18979[(8)] = inst_18938__$1);

return statearr_18979;
})();
if(inst_18940__$1){
var statearr_18980_19040 = state_18960__$1;
(statearr_18980_19040[(1)] = (15));

} else {
var statearr_18981_19041 = state_18960__$1;
(statearr_18981_19041[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (16))){
var inst_18940 = (state_18960[(11)]);
var state_18960__$1 = state_18960;
var statearr_18982_19042 = state_18960__$1;
(statearr_18982_19042[(2)] = inst_18940);

(statearr_18982_19042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (10))){
var inst_18932 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18983_19043 = state_18960__$1;
(statearr_18983_19043[(2)] = inst_18932);

(statearr_18983_19043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (18))){
var inst_18943 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18984_19044 = state_18960__$1;
(statearr_18984_19044[(2)] = inst_18943);

(statearr_18984_19044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18961 === (8))){
var inst_18929 = cljs.core.async.close_BANG_.call(null,to);
var state_18960__$1 = state_18960;
var statearr_18985_19045 = state_18960__$1;
(statearr_18985_19045[(2)] = inst_18929);

(statearr_18985_19045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto__,jobs,results,process,async))
;
return ((function (switch__16633__auto__,c__16792__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0 = (function (){
var statearr_18986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__);

(statearr_18986[(1)] = (1));

return statearr_18986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1 = (function (state_18960){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_18960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e18987){if((e18987 instanceof Object)){
var ex__16637__auto__ = e18987;
var statearr_18988_19046 = state_18960;
(statearr_18988_19046[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19047 = state_18960;
state_18960 = G__19047;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__ = function(state_18960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1.call(this,state_18960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16634__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto__,jobs,results,process,async))
})();
var state__16794__auto__ = (function (){var statearr_18989 = f__16793__auto__.call(null);
(statearr_18989[(6)] = c__16792__auto__);

return statearr_18989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto__,jobs,results,process,async))
);

return c__16792__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19049 = arguments.length;
switch (G__19049) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19052 = arguments.length;
switch (G__19052) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19055 = arguments.length;
switch (G__19055) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16792__auto___19104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___19104,tc,fc){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___19104,tc,fc){
return (function (state_19081){
var state_val_19082 = (state_19081[(1)]);
if((state_val_19082 === (7))){
var inst_19077 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19083_19105 = state_19081__$1;
(statearr_19083_19105[(2)] = inst_19077);

(statearr_19083_19105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (1))){
var state_19081__$1 = state_19081;
var statearr_19084_19106 = state_19081__$1;
(statearr_19084_19106[(2)] = null);

(statearr_19084_19106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (4))){
var inst_19058 = (state_19081[(7)]);
var inst_19058__$1 = (state_19081[(2)]);
var inst_19059 = (inst_19058__$1 == null);
var state_19081__$1 = (function (){var statearr_19085 = state_19081;
(statearr_19085[(7)] = inst_19058__$1);

return statearr_19085;
})();
if(cljs.core.truth_(inst_19059)){
var statearr_19086_19107 = state_19081__$1;
(statearr_19086_19107[(1)] = (5));

} else {
var statearr_19087_19108 = state_19081__$1;
(statearr_19087_19108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (13))){
var state_19081__$1 = state_19081;
var statearr_19088_19109 = state_19081__$1;
(statearr_19088_19109[(2)] = null);

(statearr_19088_19109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (6))){
var inst_19058 = (state_19081[(7)]);
var inst_19064 = p.call(null,inst_19058);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19064)){
var statearr_19089_19110 = state_19081__$1;
(statearr_19089_19110[(1)] = (9));

} else {
var statearr_19090_19111 = state_19081__$1;
(statearr_19090_19111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (3))){
var inst_19079 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19081__$1,inst_19079);
} else {
if((state_val_19082 === (12))){
var state_19081__$1 = state_19081;
var statearr_19091_19112 = state_19081__$1;
(statearr_19091_19112[(2)] = null);

(statearr_19091_19112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (2))){
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19081__$1,(4),ch);
} else {
if((state_val_19082 === (11))){
var inst_19058 = (state_19081[(7)]);
var inst_19068 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19081__$1,(8),inst_19068,inst_19058);
} else {
if((state_val_19082 === (9))){
var state_19081__$1 = state_19081;
var statearr_19092_19113 = state_19081__$1;
(statearr_19092_19113[(2)] = tc);

(statearr_19092_19113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (5))){
var inst_19061 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19062 = cljs.core.async.close_BANG_.call(null,fc);
var state_19081__$1 = (function (){var statearr_19093 = state_19081;
(statearr_19093[(8)] = inst_19061);

return statearr_19093;
})();
var statearr_19094_19114 = state_19081__$1;
(statearr_19094_19114[(2)] = inst_19062);

(statearr_19094_19114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (14))){
var inst_19075 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19095_19115 = state_19081__$1;
(statearr_19095_19115[(2)] = inst_19075);

(statearr_19095_19115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (10))){
var state_19081__$1 = state_19081;
var statearr_19096_19116 = state_19081__$1;
(statearr_19096_19116[(2)] = fc);

(statearr_19096_19116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (8))){
var inst_19070 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19070)){
var statearr_19097_19117 = state_19081__$1;
(statearr_19097_19117[(1)] = (12));

} else {
var statearr_19098_19118 = state_19081__$1;
(statearr_19098_19118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___19104,tc,fc))
;
return ((function (switch__16633__auto__,c__16792__auto___19104,tc,fc){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_19099 = [null,null,null,null,null,null,null,null,null];
(statearr_19099[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_19099[(1)] = (1));

return statearr_19099;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_19081){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19100){if((e19100 instanceof Object)){
var ex__16637__auto__ = e19100;
var statearr_19101_19119 = state_19081;
(statearr_19101_19119[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19120 = state_19081;
state_19081 = G__19120;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_19081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_19081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___19104,tc,fc))
})();
var state__16794__auto__ = (function (){var statearr_19102 = f__16793__auto__.call(null);
(statearr_19102[(6)] = c__16792__auto___19104);

return statearr_19102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___19104,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto__){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto__){
return (function (state_19141){
var state_val_19142 = (state_19141[(1)]);
if((state_val_19142 === (7))){
var inst_19137 = (state_19141[(2)]);
var state_19141__$1 = state_19141;
var statearr_19143_19161 = state_19141__$1;
(statearr_19143_19161[(2)] = inst_19137);

(statearr_19143_19161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19142 === (1))){
var inst_19121 = init;
var state_19141__$1 = (function (){var statearr_19144 = state_19141;
(statearr_19144[(7)] = inst_19121);

return statearr_19144;
})();
var statearr_19145_19162 = state_19141__$1;
(statearr_19145_19162[(2)] = null);

(statearr_19145_19162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19142 === (4))){
var inst_19124 = (state_19141[(8)]);
var inst_19124__$1 = (state_19141[(2)]);
var inst_19125 = (inst_19124__$1 == null);
var state_19141__$1 = (function (){var statearr_19146 = state_19141;
(statearr_19146[(8)] = inst_19124__$1);

return statearr_19146;
})();
if(cljs.core.truth_(inst_19125)){
var statearr_19147_19163 = state_19141__$1;
(statearr_19147_19163[(1)] = (5));

} else {
var statearr_19148_19164 = state_19141__$1;
(statearr_19148_19164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19142 === (6))){
var inst_19121 = (state_19141[(7)]);
var inst_19128 = (state_19141[(9)]);
var inst_19124 = (state_19141[(8)]);
var inst_19128__$1 = f.call(null,inst_19121,inst_19124);
var inst_19129 = cljs.core.reduced_QMARK_.call(null,inst_19128__$1);
var state_19141__$1 = (function (){var statearr_19149 = state_19141;
(statearr_19149[(9)] = inst_19128__$1);

return statearr_19149;
})();
if(inst_19129){
var statearr_19150_19165 = state_19141__$1;
(statearr_19150_19165[(1)] = (8));

} else {
var statearr_19151_19166 = state_19141__$1;
(statearr_19151_19166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19142 === (3))){
var inst_19139 = (state_19141[(2)]);
var state_19141__$1 = state_19141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19141__$1,inst_19139);
} else {
if((state_val_19142 === (2))){
var state_19141__$1 = state_19141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19141__$1,(4),ch);
} else {
if((state_val_19142 === (9))){
var inst_19128 = (state_19141[(9)]);
var inst_19121 = inst_19128;
var state_19141__$1 = (function (){var statearr_19152 = state_19141;
(statearr_19152[(7)] = inst_19121);

return statearr_19152;
})();
var statearr_19153_19167 = state_19141__$1;
(statearr_19153_19167[(2)] = null);

(statearr_19153_19167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19142 === (5))){
var inst_19121 = (state_19141[(7)]);
var state_19141__$1 = state_19141;
var statearr_19154_19168 = state_19141__$1;
(statearr_19154_19168[(2)] = inst_19121);

(statearr_19154_19168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19142 === (10))){
var inst_19135 = (state_19141[(2)]);
var state_19141__$1 = state_19141;
var statearr_19155_19169 = state_19141__$1;
(statearr_19155_19169[(2)] = inst_19135);

(statearr_19155_19169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19142 === (8))){
var inst_19128 = (state_19141[(9)]);
var inst_19131 = cljs.core.deref.call(null,inst_19128);
var state_19141__$1 = state_19141;
var statearr_19156_19170 = state_19141__$1;
(statearr_19156_19170[(2)] = inst_19131);

(statearr_19156_19170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto__))
;
return ((function (switch__16633__auto__,c__16792__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16634__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16634__auto____0 = (function (){
var statearr_19157 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19157[(0)] = cljs$core$async$reduce_$_state_machine__16634__auto__);

(statearr_19157[(1)] = (1));

return statearr_19157;
});
var cljs$core$async$reduce_$_state_machine__16634__auto____1 = (function (state_19141){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19158){if((e19158 instanceof Object)){
var ex__16637__auto__ = e19158;
var statearr_19159_19171 = state_19141;
(statearr_19159_19171[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19172 = state_19141;
state_19141 = G__19172;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16634__auto__ = function(state_19141){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16634__auto____1.call(this,state_19141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16634__auto____0;
cljs$core$async$reduce_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16634__auto____1;
return cljs$core$async$reduce_$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto__))
})();
var state__16794__auto__ = (function (){var statearr_19160 = f__16793__auto__.call(null);
(statearr_19160[(6)] = c__16792__auto__);

return statearr_19160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto__))
);

return c__16792__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto__,f__$1){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto__,f__$1){
return (function (state_19178){
var state_val_19179 = (state_19178[(1)]);
if((state_val_19179 === (1))){
var inst_19173 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19178__$1,(2),inst_19173);
} else {
if((state_val_19179 === (2))){
var inst_19175 = (state_19178[(2)]);
var inst_19176 = f__$1.call(null,inst_19175);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19178__$1,inst_19176);
} else {
return null;
}
}
});})(c__16792__auto__,f__$1))
;
return ((function (switch__16633__auto__,c__16792__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16634__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16634__auto____0 = (function (){
var statearr_19180 = [null,null,null,null,null,null,null];
(statearr_19180[(0)] = cljs$core$async$transduce_$_state_machine__16634__auto__);

(statearr_19180[(1)] = (1));

return statearr_19180;
});
var cljs$core$async$transduce_$_state_machine__16634__auto____1 = (function (state_19178){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19181){if((e19181 instanceof Object)){
var ex__16637__auto__ = e19181;
var statearr_19182_19184 = state_19178;
(statearr_19182_19184[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19185 = state_19178;
state_19178 = G__19185;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16634__auto__ = function(state_19178){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16634__auto____1.call(this,state_19178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16634__auto____0;
cljs$core$async$transduce_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16634__auto____1;
return cljs$core$async$transduce_$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto__,f__$1))
})();
var state__16794__auto__ = (function (){var statearr_19183 = f__16793__auto__.call(null);
(statearr_19183[(6)] = c__16792__auto__);

return statearr_19183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto__,f__$1))
);

return c__16792__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19187 = arguments.length;
switch (G__19187) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto__){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto__){
return (function (state_19212){
var state_val_19213 = (state_19212[(1)]);
if((state_val_19213 === (7))){
var inst_19194 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19214_19235 = state_19212__$1;
(statearr_19214_19235[(2)] = inst_19194);

(statearr_19214_19235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (1))){
var inst_19188 = cljs.core.seq.call(null,coll);
var inst_19189 = inst_19188;
var state_19212__$1 = (function (){var statearr_19215 = state_19212;
(statearr_19215[(7)] = inst_19189);

return statearr_19215;
})();
var statearr_19216_19236 = state_19212__$1;
(statearr_19216_19236[(2)] = null);

(statearr_19216_19236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (4))){
var inst_19189 = (state_19212[(7)]);
var inst_19192 = cljs.core.first.call(null,inst_19189);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19212__$1,(7),ch,inst_19192);
} else {
if((state_val_19213 === (13))){
var inst_19206 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19217_19237 = state_19212__$1;
(statearr_19217_19237[(2)] = inst_19206);

(statearr_19217_19237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (6))){
var inst_19197 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
if(cljs.core.truth_(inst_19197)){
var statearr_19218_19238 = state_19212__$1;
(statearr_19218_19238[(1)] = (8));

} else {
var statearr_19219_19239 = state_19212__$1;
(statearr_19219_19239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (3))){
var inst_19210 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19212__$1,inst_19210);
} else {
if((state_val_19213 === (12))){
var state_19212__$1 = state_19212;
var statearr_19220_19240 = state_19212__$1;
(statearr_19220_19240[(2)] = null);

(statearr_19220_19240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (2))){
var inst_19189 = (state_19212[(7)]);
var state_19212__$1 = state_19212;
if(cljs.core.truth_(inst_19189)){
var statearr_19221_19241 = state_19212__$1;
(statearr_19221_19241[(1)] = (4));

} else {
var statearr_19222_19242 = state_19212__$1;
(statearr_19222_19242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (11))){
var inst_19203 = cljs.core.async.close_BANG_.call(null,ch);
var state_19212__$1 = state_19212;
var statearr_19223_19243 = state_19212__$1;
(statearr_19223_19243[(2)] = inst_19203);

(statearr_19223_19243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (9))){
var state_19212__$1 = state_19212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19224_19244 = state_19212__$1;
(statearr_19224_19244[(1)] = (11));

} else {
var statearr_19225_19245 = state_19212__$1;
(statearr_19225_19245[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (5))){
var inst_19189 = (state_19212[(7)]);
var state_19212__$1 = state_19212;
var statearr_19226_19246 = state_19212__$1;
(statearr_19226_19246[(2)] = inst_19189);

(statearr_19226_19246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (10))){
var inst_19208 = (state_19212[(2)]);
var state_19212__$1 = state_19212;
var statearr_19227_19247 = state_19212__$1;
(statearr_19227_19247[(2)] = inst_19208);

(statearr_19227_19247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19213 === (8))){
var inst_19189 = (state_19212[(7)]);
var inst_19199 = cljs.core.next.call(null,inst_19189);
var inst_19189__$1 = inst_19199;
var state_19212__$1 = (function (){var statearr_19228 = state_19212;
(statearr_19228[(7)] = inst_19189__$1);

return statearr_19228;
})();
var statearr_19229_19248 = state_19212__$1;
(statearr_19229_19248[(2)] = null);

(statearr_19229_19248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto__))
;
return ((function (switch__16633__auto__,c__16792__auto__){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_19230 = [null,null,null,null,null,null,null,null];
(statearr_19230[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_19230[(1)] = (1));

return statearr_19230;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_19212){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19231){if((e19231 instanceof Object)){
var ex__16637__auto__ = e19231;
var statearr_19232_19249 = state_19212;
(statearr_19232_19249[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19250 = state_19212;
state_19212 = G__19250;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_19212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_19212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto__))
})();
var state__16794__auto__ = (function (){var statearr_19233 = f__16793__auto__.call(null);
(statearr_19233[(6)] = c__16792__auto__);

return statearr_19233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto__))
);

return c__16792__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19251 = (function (ch,cs,meta19252){
this.ch = ch;
this.cs = cs;
this.meta19252 = meta19252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19253,meta19252__$1){
var self__ = this;
var _19253__$1 = this;
return (new cljs.core.async.t_cljs$core$async19251(self__.ch,self__.cs,meta19252__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19253){
var self__ = this;
var _19253__$1 = this;
return self__.meta19252;
});})(cs))
;

cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19251.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19251.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19252","meta19252",-389997349,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19251";

cljs.core.async.t_cljs$core$async19251.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19251");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19251.
 */
cljs.core.async.__GT_t_cljs$core$async19251 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19251(ch__$1,cs__$1,meta19252){
return (new cljs.core.async.t_cljs$core$async19251(ch__$1,cs__$1,meta19252));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19251(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16792__auto___19473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___19473,cs,m,dchan,dctr,done){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___19473,cs,m,dchan,dctr,done){
return (function (state_19388){
var state_val_19389 = (state_19388[(1)]);
if((state_val_19389 === (7))){
var inst_19384 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19390_19474 = state_19388__$1;
(statearr_19390_19474[(2)] = inst_19384);

(statearr_19390_19474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (20))){
var inst_19287 = (state_19388[(7)]);
var inst_19299 = cljs.core.first.call(null,inst_19287);
var inst_19300 = cljs.core.nth.call(null,inst_19299,(0),null);
var inst_19301 = cljs.core.nth.call(null,inst_19299,(1),null);
var state_19388__$1 = (function (){var statearr_19391 = state_19388;
(statearr_19391[(8)] = inst_19300);

return statearr_19391;
})();
if(cljs.core.truth_(inst_19301)){
var statearr_19392_19475 = state_19388__$1;
(statearr_19392_19475[(1)] = (22));

} else {
var statearr_19393_19476 = state_19388__$1;
(statearr_19393_19476[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (27))){
var inst_19256 = (state_19388[(9)]);
var inst_19336 = (state_19388[(10)]);
var inst_19331 = (state_19388[(11)]);
var inst_19329 = (state_19388[(12)]);
var inst_19336__$1 = cljs.core._nth.call(null,inst_19329,inst_19331);
var inst_19337 = cljs.core.async.put_BANG_.call(null,inst_19336__$1,inst_19256,done);
var state_19388__$1 = (function (){var statearr_19394 = state_19388;
(statearr_19394[(10)] = inst_19336__$1);

return statearr_19394;
})();
if(cljs.core.truth_(inst_19337)){
var statearr_19395_19477 = state_19388__$1;
(statearr_19395_19477[(1)] = (30));

} else {
var statearr_19396_19478 = state_19388__$1;
(statearr_19396_19478[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (1))){
var state_19388__$1 = state_19388;
var statearr_19397_19479 = state_19388__$1;
(statearr_19397_19479[(2)] = null);

(statearr_19397_19479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (24))){
var inst_19287 = (state_19388[(7)]);
var inst_19306 = (state_19388[(2)]);
var inst_19307 = cljs.core.next.call(null,inst_19287);
var inst_19265 = inst_19307;
var inst_19266 = null;
var inst_19267 = (0);
var inst_19268 = (0);
var state_19388__$1 = (function (){var statearr_19398 = state_19388;
(statearr_19398[(13)] = inst_19268);

(statearr_19398[(14)] = inst_19267);

(statearr_19398[(15)] = inst_19266);

(statearr_19398[(16)] = inst_19265);

(statearr_19398[(17)] = inst_19306);

return statearr_19398;
})();
var statearr_19399_19480 = state_19388__$1;
(statearr_19399_19480[(2)] = null);

(statearr_19399_19480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (39))){
var state_19388__$1 = state_19388;
var statearr_19403_19481 = state_19388__$1;
(statearr_19403_19481[(2)] = null);

(statearr_19403_19481[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (4))){
var inst_19256 = (state_19388[(9)]);
var inst_19256__$1 = (state_19388[(2)]);
var inst_19257 = (inst_19256__$1 == null);
var state_19388__$1 = (function (){var statearr_19404 = state_19388;
(statearr_19404[(9)] = inst_19256__$1);

return statearr_19404;
})();
if(cljs.core.truth_(inst_19257)){
var statearr_19405_19482 = state_19388__$1;
(statearr_19405_19482[(1)] = (5));

} else {
var statearr_19406_19483 = state_19388__$1;
(statearr_19406_19483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (15))){
var inst_19268 = (state_19388[(13)]);
var inst_19267 = (state_19388[(14)]);
var inst_19266 = (state_19388[(15)]);
var inst_19265 = (state_19388[(16)]);
var inst_19283 = (state_19388[(2)]);
var inst_19284 = (inst_19268 + (1));
var tmp19400 = inst_19267;
var tmp19401 = inst_19266;
var tmp19402 = inst_19265;
var inst_19265__$1 = tmp19402;
var inst_19266__$1 = tmp19401;
var inst_19267__$1 = tmp19400;
var inst_19268__$1 = inst_19284;
var state_19388__$1 = (function (){var statearr_19407 = state_19388;
(statearr_19407[(13)] = inst_19268__$1);

(statearr_19407[(14)] = inst_19267__$1);

(statearr_19407[(15)] = inst_19266__$1);

(statearr_19407[(18)] = inst_19283);

(statearr_19407[(16)] = inst_19265__$1);

return statearr_19407;
})();
var statearr_19408_19484 = state_19388__$1;
(statearr_19408_19484[(2)] = null);

(statearr_19408_19484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (21))){
var inst_19310 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19412_19485 = state_19388__$1;
(statearr_19412_19485[(2)] = inst_19310);

(statearr_19412_19485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (31))){
var inst_19336 = (state_19388[(10)]);
var inst_19340 = done.call(null,null);
var inst_19341 = cljs.core.async.untap_STAR_.call(null,m,inst_19336);
var state_19388__$1 = (function (){var statearr_19413 = state_19388;
(statearr_19413[(19)] = inst_19340);

return statearr_19413;
})();
var statearr_19414_19486 = state_19388__$1;
(statearr_19414_19486[(2)] = inst_19341);

(statearr_19414_19486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (32))){
var inst_19331 = (state_19388[(11)]);
var inst_19329 = (state_19388[(12)]);
var inst_19330 = (state_19388[(20)]);
var inst_19328 = (state_19388[(21)]);
var inst_19343 = (state_19388[(2)]);
var inst_19344 = (inst_19331 + (1));
var tmp19409 = inst_19329;
var tmp19410 = inst_19330;
var tmp19411 = inst_19328;
var inst_19328__$1 = tmp19411;
var inst_19329__$1 = tmp19409;
var inst_19330__$1 = tmp19410;
var inst_19331__$1 = inst_19344;
var state_19388__$1 = (function (){var statearr_19415 = state_19388;
(statearr_19415[(11)] = inst_19331__$1);

(statearr_19415[(12)] = inst_19329__$1);

(statearr_19415[(20)] = inst_19330__$1);

(statearr_19415[(21)] = inst_19328__$1);

(statearr_19415[(22)] = inst_19343);

return statearr_19415;
})();
var statearr_19416_19487 = state_19388__$1;
(statearr_19416_19487[(2)] = null);

(statearr_19416_19487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (40))){
var inst_19356 = (state_19388[(23)]);
var inst_19360 = done.call(null,null);
var inst_19361 = cljs.core.async.untap_STAR_.call(null,m,inst_19356);
var state_19388__$1 = (function (){var statearr_19417 = state_19388;
(statearr_19417[(24)] = inst_19360);

return statearr_19417;
})();
var statearr_19418_19488 = state_19388__$1;
(statearr_19418_19488[(2)] = inst_19361);

(statearr_19418_19488[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (33))){
var inst_19347 = (state_19388[(25)]);
var inst_19349 = cljs.core.chunked_seq_QMARK_.call(null,inst_19347);
var state_19388__$1 = state_19388;
if(inst_19349){
var statearr_19419_19489 = state_19388__$1;
(statearr_19419_19489[(1)] = (36));

} else {
var statearr_19420_19490 = state_19388__$1;
(statearr_19420_19490[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (13))){
var inst_19277 = (state_19388[(26)]);
var inst_19280 = cljs.core.async.close_BANG_.call(null,inst_19277);
var state_19388__$1 = state_19388;
var statearr_19421_19491 = state_19388__$1;
(statearr_19421_19491[(2)] = inst_19280);

(statearr_19421_19491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (22))){
var inst_19300 = (state_19388[(8)]);
var inst_19303 = cljs.core.async.close_BANG_.call(null,inst_19300);
var state_19388__$1 = state_19388;
var statearr_19422_19492 = state_19388__$1;
(statearr_19422_19492[(2)] = inst_19303);

(statearr_19422_19492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (36))){
var inst_19347 = (state_19388[(25)]);
var inst_19351 = cljs.core.chunk_first.call(null,inst_19347);
var inst_19352 = cljs.core.chunk_rest.call(null,inst_19347);
var inst_19353 = cljs.core.count.call(null,inst_19351);
var inst_19328 = inst_19352;
var inst_19329 = inst_19351;
var inst_19330 = inst_19353;
var inst_19331 = (0);
var state_19388__$1 = (function (){var statearr_19423 = state_19388;
(statearr_19423[(11)] = inst_19331);

(statearr_19423[(12)] = inst_19329);

(statearr_19423[(20)] = inst_19330);

(statearr_19423[(21)] = inst_19328);

return statearr_19423;
})();
var statearr_19424_19493 = state_19388__$1;
(statearr_19424_19493[(2)] = null);

(statearr_19424_19493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (41))){
var inst_19347 = (state_19388[(25)]);
var inst_19363 = (state_19388[(2)]);
var inst_19364 = cljs.core.next.call(null,inst_19347);
var inst_19328 = inst_19364;
var inst_19329 = null;
var inst_19330 = (0);
var inst_19331 = (0);
var state_19388__$1 = (function (){var statearr_19425 = state_19388;
(statearr_19425[(11)] = inst_19331);

(statearr_19425[(12)] = inst_19329);

(statearr_19425[(20)] = inst_19330);

(statearr_19425[(21)] = inst_19328);

(statearr_19425[(27)] = inst_19363);

return statearr_19425;
})();
var statearr_19426_19494 = state_19388__$1;
(statearr_19426_19494[(2)] = null);

(statearr_19426_19494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (43))){
var state_19388__$1 = state_19388;
var statearr_19427_19495 = state_19388__$1;
(statearr_19427_19495[(2)] = null);

(statearr_19427_19495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (29))){
var inst_19372 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19428_19496 = state_19388__$1;
(statearr_19428_19496[(2)] = inst_19372);

(statearr_19428_19496[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (44))){
var inst_19381 = (state_19388[(2)]);
var state_19388__$1 = (function (){var statearr_19429 = state_19388;
(statearr_19429[(28)] = inst_19381);

return statearr_19429;
})();
var statearr_19430_19497 = state_19388__$1;
(statearr_19430_19497[(2)] = null);

(statearr_19430_19497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (6))){
var inst_19320 = (state_19388[(29)]);
var inst_19319 = cljs.core.deref.call(null,cs);
var inst_19320__$1 = cljs.core.keys.call(null,inst_19319);
var inst_19321 = cljs.core.count.call(null,inst_19320__$1);
var inst_19322 = cljs.core.reset_BANG_.call(null,dctr,inst_19321);
var inst_19327 = cljs.core.seq.call(null,inst_19320__$1);
var inst_19328 = inst_19327;
var inst_19329 = null;
var inst_19330 = (0);
var inst_19331 = (0);
var state_19388__$1 = (function (){var statearr_19431 = state_19388;
(statearr_19431[(11)] = inst_19331);

(statearr_19431[(12)] = inst_19329);

(statearr_19431[(20)] = inst_19330);

(statearr_19431[(30)] = inst_19322);

(statearr_19431[(29)] = inst_19320__$1);

(statearr_19431[(21)] = inst_19328);

return statearr_19431;
})();
var statearr_19432_19498 = state_19388__$1;
(statearr_19432_19498[(2)] = null);

(statearr_19432_19498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (28))){
var inst_19347 = (state_19388[(25)]);
var inst_19328 = (state_19388[(21)]);
var inst_19347__$1 = cljs.core.seq.call(null,inst_19328);
var state_19388__$1 = (function (){var statearr_19433 = state_19388;
(statearr_19433[(25)] = inst_19347__$1);

return statearr_19433;
})();
if(inst_19347__$1){
var statearr_19434_19499 = state_19388__$1;
(statearr_19434_19499[(1)] = (33));

} else {
var statearr_19435_19500 = state_19388__$1;
(statearr_19435_19500[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (25))){
var inst_19331 = (state_19388[(11)]);
var inst_19330 = (state_19388[(20)]);
var inst_19333 = (inst_19331 < inst_19330);
var inst_19334 = inst_19333;
var state_19388__$1 = state_19388;
if(cljs.core.truth_(inst_19334)){
var statearr_19436_19501 = state_19388__$1;
(statearr_19436_19501[(1)] = (27));

} else {
var statearr_19437_19502 = state_19388__$1;
(statearr_19437_19502[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (34))){
var state_19388__$1 = state_19388;
var statearr_19438_19503 = state_19388__$1;
(statearr_19438_19503[(2)] = null);

(statearr_19438_19503[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (17))){
var state_19388__$1 = state_19388;
var statearr_19439_19504 = state_19388__$1;
(statearr_19439_19504[(2)] = null);

(statearr_19439_19504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (3))){
var inst_19386 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19388__$1,inst_19386);
} else {
if((state_val_19389 === (12))){
var inst_19315 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19440_19505 = state_19388__$1;
(statearr_19440_19505[(2)] = inst_19315);

(statearr_19440_19505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (2))){
var state_19388__$1 = state_19388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19388__$1,(4),ch);
} else {
if((state_val_19389 === (23))){
var state_19388__$1 = state_19388;
var statearr_19441_19506 = state_19388__$1;
(statearr_19441_19506[(2)] = null);

(statearr_19441_19506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (35))){
var inst_19370 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19442_19507 = state_19388__$1;
(statearr_19442_19507[(2)] = inst_19370);

(statearr_19442_19507[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (19))){
var inst_19287 = (state_19388[(7)]);
var inst_19291 = cljs.core.chunk_first.call(null,inst_19287);
var inst_19292 = cljs.core.chunk_rest.call(null,inst_19287);
var inst_19293 = cljs.core.count.call(null,inst_19291);
var inst_19265 = inst_19292;
var inst_19266 = inst_19291;
var inst_19267 = inst_19293;
var inst_19268 = (0);
var state_19388__$1 = (function (){var statearr_19443 = state_19388;
(statearr_19443[(13)] = inst_19268);

(statearr_19443[(14)] = inst_19267);

(statearr_19443[(15)] = inst_19266);

(statearr_19443[(16)] = inst_19265);

return statearr_19443;
})();
var statearr_19444_19508 = state_19388__$1;
(statearr_19444_19508[(2)] = null);

(statearr_19444_19508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (11))){
var inst_19287 = (state_19388[(7)]);
var inst_19265 = (state_19388[(16)]);
var inst_19287__$1 = cljs.core.seq.call(null,inst_19265);
var state_19388__$1 = (function (){var statearr_19445 = state_19388;
(statearr_19445[(7)] = inst_19287__$1);

return statearr_19445;
})();
if(inst_19287__$1){
var statearr_19446_19509 = state_19388__$1;
(statearr_19446_19509[(1)] = (16));

} else {
var statearr_19447_19510 = state_19388__$1;
(statearr_19447_19510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (9))){
var inst_19317 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19448_19511 = state_19388__$1;
(statearr_19448_19511[(2)] = inst_19317);

(statearr_19448_19511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (5))){
var inst_19263 = cljs.core.deref.call(null,cs);
var inst_19264 = cljs.core.seq.call(null,inst_19263);
var inst_19265 = inst_19264;
var inst_19266 = null;
var inst_19267 = (0);
var inst_19268 = (0);
var state_19388__$1 = (function (){var statearr_19449 = state_19388;
(statearr_19449[(13)] = inst_19268);

(statearr_19449[(14)] = inst_19267);

(statearr_19449[(15)] = inst_19266);

(statearr_19449[(16)] = inst_19265);

return statearr_19449;
})();
var statearr_19450_19512 = state_19388__$1;
(statearr_19450_19512[(2)] = null);

(statearr_19450_19512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (14))){
var state_19388__$1 = state_19388;
var statearr_19451_19513 = state_19388__$1;
(statearr_19451_19513[(2)] = null);

(statearr_19451_19513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (45))){
var inst_19378 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19452_19514 = state_19388__$1;
(statearr_19452_19514[(2)] = inst_19378);

(statearr_19452_19514[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (26))){
var inst_19320 = (state_19388[(29)]);
var inst_19374 = (state_19388[(2)]);
var inst_19375 = cljs.core.seq.call(null,inst_19320);
var state_19388__$1 = (function (){var statearr_19453 = state_19388;
(statearr_19453[(31)] = inst_19374);

return statearr_19453;
})();
if(inst_19375){
var statearr_19454_19515 = state_19388__$1;
(statearr_19454_19515[(1)] = (42));

} else {
var statearr_19455_19516 = state_19388__$1;
(statearr_19455_19516[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (16))){
var inst_19287 = (state_19388[(7)]);
var inst_19289 = cljs.core.chunked_seq_QMARK_.call(null,inst_19287);
var state_19388__$1 = state_19388;
if(inst_19289){
var statearr_19456_19517 = state_19388__$1;
(statearr_19456_19517[(1)] = (19));

} else {
var statearr_19457_19518 = state_19388__$1;
(statearr_19457_19518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (38))){
var inst_19367 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19458_19519 = state_19388__$1;
(statearr_19458_19519[(2)] = inst_19367);

(statearr_19458_19519[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (30))){
var state_19388__$1 = state_19388;
var statearr_19459_19520 = state_19388__$1;
(statearr_19459_19520[(2)] = null);

(statearr_19459_19520[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (10))){
var inst_19268 = (state_19388[(13)]);
var inst_19266 = (state_19388[(15)]);
var inst_19276 = cljs.core._nth.call(null,inst_19266,inst_19268);
var inst_19277 = cljs.core.nth.call(null,inst_19276,(0),null);
var inst_19278 = cljs.core.nth.call(null,inst_19276,(1),null);
var state_19388__$1 = (function (){var statearr_19460 = state_19388;
(statearr_19460[(26)] = inst_19277);

return statearr_19460;
})();
if(cljs.core.truth_(inst_19278)){
var statearr_19461_19521 = state_19388__$1;
(statearr_19461_19521[(1)] = (13));

} else {
var statearr_19462_19522 = state_19388__$1;
(statearr_19462_19522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (18))){
var inst_19313 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19463_19523 = state_19388__$1;
(statearr_19463_19523[(2)] = inst_19313);

(statearr_19463_19523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (42))){
var state_19388__$1 = state_19388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19388__$1,(45),dchan);
} else {
if((state_val_19389 === (37))){
var inst_19256 = (state_19388[(9)]);
var inst_19347 = (state_19388[(25)]);
var inst_19356 = (state_19388[(23)]);
var inst_19356__$1 = cljs.core.first.call(null,inst_19347);
var inst_19357 = cljs.core.async.put_BANG_.call(null,inst_19356__$1,inst_19256,done);
var state_19388__$1 = (function (){var statearr_19464 = state_19388;
(statearr_19464[(23)] = inst_19356__$1);

return statearr_19464;
})();
if(cljs.core.truth_(inst_19357)){
var statearr_19465_19524 = state_19388__$1;
(statearr_19465_19524[(1)] = (39));

} else {
var statearr_19466_19525 = state_19388__$1;
(statearr_19466_19525[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (8))){
var inst_19268 = (state_19388[(13)]);
var inst_19267 = (state_19388[(14)]);
var inst_19270 = (inst_19268 < inst_19267);
var inst_19271 = inst_19270;
var state_19388__$1 = state_19388;
if(cljs.core.truth_(inst_19271)){
var statearr_19467_19526 = state_19388__$1;
(statearr_19467_19526[(1)] = (10));

} else {
var statearr_19468_19527 = state_19388__$1;
(statearr_19468_19527[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___19473,cs,m,dchan,dctr,done))
;
return ((function (switch__16633__auto__,c__16792__auto___19473,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16634__auto__ = null;
var cljs$core$async$mult_$_state_machine__16634__auto____0 = (function (){
var statearr_19469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19469[(0)] = cljs$core$async$mult_$_state_machine__16634__auto__);

(statearr_19469[(1)] = (1));

return statearr_19469;
});
var cljs$core$async$mult_$_state_machine__16634__auto____1 = (function (state_19388){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19470){if((e19470 instanceof Object)){
var ex__16637__auto__ = e19470;
var statearr_19471_19528 = state_19388;
(statearr_19471_19528[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19529 = state_19388;
state_19388 = G__19529;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16634__auto__ = function(state_19388){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16634__auto____1.call(this,state_19388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16634__auto____0;
cljs$core$async$mult_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16634__auto____1;
return cljs$core$async$mult_$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___19473,cs,m,dchan,dctr,done))
})();
var state__16794__auto__ = (function (){var statearr_19472 = f__16793__auto__.call(null);
(statearr_19472[(6)] = c__16792__auto___19473);

return statearr_19472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___19473,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19531 = arguments.length;
switch (G__19531) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19543 = arguments.length;
var i__4532__auto___19544 = (0);
while(true){
if((i__4532__auto___19544 < len__4531__auto___19543)){
args__4534__auto__.push((arguments[i__4532__auto___19544]));

var G__19545 = (i__4532__auto___19544 + (1));
i__4532__auto___19544 = G__19545;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19537){
var map__19538 = p__19537;
var map__19538__$1 = ((((!((map__19538 == null)))?(((((map__19538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19538):map__19538);
var opts = map__19538__$1;
var statearr_19540_19546 = state;
(statearr_19540_19546[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__19538,map__19538__$1,opts){
return (function (val){
var statearr_19541_19547 = state;
(statearr_19541_19547[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19538,map__19538__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19542_19548 = state;
(statearr_19542_19548[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19533){
var G__19534 = cljs.core.first.call(null,seq19533);
var seq19533__$1 = cljs.core.next.call(null,seq19533);
var G__19535 = cljs.core.first.call(null,seq19533__$1);
var seq19533__$2 = cljs.core.next.call(null,seq19533__$1);
var G__19536 = cljs.core.first.call(null,seq19533__$2);
var seq19533__$3 = cljs.core.next.call(null,seq19533__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19534,G__19535,G__19536,seq19533__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19549 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19550){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19550 = meta19550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19551,meta19550__$1){
var self__ = this;
var _19551__$1 = this;
return (new cljs.core.async.t_cljs$core$async19549(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19550__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19551){
var self__ = this;
var _19551__$1 = this;
return self__.meta19550;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19550","meta19550",1512735768,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19549";

cljs.core.async.t_cljs$core$async19549.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19549");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19549.
 */
cljs.core.async.__GT_t_cljs$core$async19549 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19549(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19550){
return (new cljs.core.async.t_cljs$core$async19549(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19550));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19549(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16792__auto___19713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___19713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___19713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19653){
var state_val_19654 = (state_19653[(1)]);
if((state_val_19654 === (7))){
var inst_19568 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
var statearr_19655_19714 = state_19653__$1;
(statearr_19655_19714[(2)] = inst_19568);

(statearr_19655_19714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (20))){
var inst_19580 = (state_19653[(7)]);
var state_19653__$1 = state_19653;
var statearr_19656_19715 = state_19653__$1;
(statearr_19656_19715[(2)] = inst_19580);

(statearr_19656_19715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (27))){
var state_19653__$1 = state_19653;
var statearr_19657_19716 = state_19653__$1;
(statearr_19657_19716[(2)] = null);

(statearr_19657_19716[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (1))){
var inst_19555 = (state_19653[(8)]);
var inst_19555__$1 = calc_state.call(null);
var inst_19557 = (inst_19555__$1 == null);
var inst_19558 = cljs.core.not.call(null,inst_19557);
var state_19653__$1 = (function (){var statearr_19658 = state_19653;
(statearr_19658[(8)] = inst_19555__$1);

return statearr_19658;
})();
if(inst_19558){
var statearr_19659_19717 = state_19653__$1;
(statearr_19659_19717[(1)] = (2));

} else {
var statearr_19660_19718 = state_19653__$1;
(statearr_19660_19718[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (24))){
var inst_19613 = (state_19653[(9)]);
var inst_19627 = (state_19653[(10)]);
var inst_19604 = (state_19653[(11)]);
var inst_19627__$1 = inst_19604.call(null,inst_19613);
var state_19653__$1 = (function (){var statearr_19661 = state_19653;
(statearr_19661[(10)] = inst_19627__$1);

return statearr_19661;
})();
if(cljs.core.truth_(inst_19627__$1)){
var statearr_19662_19719 = state_19653__$1;
(statearr_19662_19719[(1)] = (29));

} else {
var statearr_19663_19720 = state_19653__$1;
(statearr_19663_19720[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (4))){
var inst_19571 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
if(cljs.core.truth_(inst_19571)){
var statearr_19664_19721 = state_19653__$1;
(statearr_19664_19721[(1)] = (8));

} else {
var statearr_19665_19722 = state_19653__$1;
(statearr_19665_19722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (15))){
var inst_19598 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
if(cljs.core.truth_(inst_19598)){
var statearr_19666_19723 = state_19653__$1;
(statearr_19666_19723[(1)] = (19));

} else {
var statearr_19667_19724 = state_19653__$1;
(statearr_19667_19724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (21))){
var inst_19603 = (state_19653[(12)]);
var inst_19603__$1 = (state_19653[(2)]);
var inst_19604 = cljs.core.get.call(null,inst_19603__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19605 = cljs.core.get.call(null,inst_19603__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19606 = cljs.core.get.call(null,inst_19603__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19653__$1 = (function (){var statearr_19668 = state_19653;
(statearr_19668[(12)] = inst_19603__$1);

(statearr_19668[(13)] = inst_19605);

(statearr_19668[(11)] = inst_19604);

return statearr_19668;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19653__$1,(22),inst_19606);
} else {
if((state_val_19654 === (31))){
var inst_19635 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
if(cljs.core.truth_(inst_19635)){
var statearr_19669_19725 = state_19653__$1;
(statearr_19669_19725[(1)] = (32));

} else {
var statearr_19670_19726 = state_19653__$1;
(statearr_19670_19726[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (32))){
var inst_19612 = (state_19653[(14)]);
var state_19653__$1 = state_19653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19653__$1,(35),out,inst_19612);
} else {
if((state_val_19654 === (33))){
var inst_19603 = (state_19653[(12)]);
var inst_19580 = inst_19603;
var state_19653__$1 = (function (){var statearr_19671 = state_19653;
(statearr_19671[(7)] = inst_19580);

return statearr_19671;
})();
var statearr_19672_19727 = state_19653__$1;
(statearr_19672_19727[(2)] = null);

(statearr_19672_19727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (13))){
var inst_19580 = (state_19653[(7)]);
var inst_19587 = inst_19580.cljs$lang$protocol_mask$partition0$;
var inst_19588 = (inst_19587 & (64));
var inst_19589 = inst_19580.cljs$core$ISeq$;
var inst_19590 = (cljs.core.PROTOCOL_SENTINEL === inst_19589);
var inst_19591 = ((inst_19588) || (inst_19590));
var state_19653__$1 = state_19653;
if(cljs.core.truth_(inst_19591)){
var statearr_19673_19728 = state_19653__$1;
(statearr_19673_19728[(1)] = (16));

} else {
var statearr_19674_19729 = state_19653__$1;
(statearr_19674_19729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (22))){
var inst_19612 = (state_19653[(14)]);
var inst_19613 = (state_19653[(9)]);
var inst_19611 = (state_19653[(2)]);
var inst_19612__$1 = cljs.core.nth.call(null,inst_19611,(0),null);
var inst_19613__$1 = cljs.core.nth.call(null,inst_19611,(1),null);
var inst_19614 = (inst_19612__$1 == null);
var inst_19615 = cljs.core._EQ_.call(null,inst_19613__$1,change);
var inst_19616 = ((inst_19614) || (inst_19615));
var state_19653__$1 = (function (){var statearr_19675 = state_19653;
(statearr_19675[(14)] = inst_19612__$1);

(statearr_19675[(9)] = inst_19613__$1);

return statearr_19675;
})();
if(cljs.core.truth_(inst_19616)){
var statearr_19676_19730 = state_19653__$1;
(statearr_19676_19730[(1)] = (23));

} else {
var statearr_19677_19731 = state_19653__$1;
(statearr_19677_19731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (36))){
var inst_19603 = (state_19653[(12)]);
var inst_19580 = inst_19603;
var state_19653__$1 = (function (){var statearr_19678 = state_19653;
(statearr_19678[(7)] = inst_19580);

return statearr_19678;
})();
var statearr_19679_19732 = state_19653__$1;
(statearr_19679_19732[(2)] = null);

(statearr_19679_19732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (29))){
var inst_19627 = (state_19653[(10)]);
var state_19653__$1 = state_19653;
var statearr_19680_19733 = state_19653__$1;
(statearr_19680_19733[(2)] = inst_19627);

(statearr_19680_19733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (6))){
var state_19653__$1 = state_19653;
var statearr_19681_19734 = state_19653__$1;
(statearr_19681_19734[(2)] = false);

(statearr_19681_19734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (28))){
var inst_19623 = (state_19653[(2)]);
var inst_19624 = calc_state.call(null);
var inst_19580 = inst_19624;
var state_19653__$1 = (function (){var statearr_19682 = state_19653;
(statearr_19682[(7)] = inst_19580);

(statearr_19682[(15)] = inst_19623);

return statearr_19682;
})();
var statearr_19683_19735 = state_19653__$1;
(statearr_19683_19735[(2)] = null);

(statearr_19683_19735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (25))){
var inst_19649 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
var statearr_19684_19736 = state_19653__$1;
(statearr_19684_19736[(2)] = inst_19649);

(statearr_19684_19736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (34))){
var inst_19647 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
var statearr_19685_19737 = state_19653__$1;
(statearr_19685_19737[(2)] = inst_19647);

(statearr_19685_19737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (17))){
var state_19653__$1 = state_19653;
var statearr_19686_19738 = state_19653__$1;
(statearr_19686_19738[(2)] = false);

(statearr_19686_19738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (3))){
var state_19653__$1 = state_19653;
var statearr_19687_19739 = state_19653__$1;
(statearr_19687_19739[(2)] = false);

(statearr_19687_19739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (12))){
var inst_19651 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19653__$1,inst_19651);
} else {
if((state_val_19654 === (2))){
var inst_19555 = (state_19653[(8)]);
var inst_19560 = inst_19555.cljs$lang$protocol_mask$partition0$;
var inst_19561 = (inst_19560 & (64));
var inst_19562 = inst_19555.cljs$core$ISeq$;
var inst_19563 = (cljs.core.PROTOCOL_SENTINEL === inst_19562);
var inst_19564 = ((inst_19561) || (inst_19563));
var state_19653__$1 = state_19653;
if(cljs.core.truth_(inst_19564)){
var statearr_19688_19740 = state_19653__$1;
(statearr_19688_19740[(1)] = (5));

} else {
var statearr_19689_19741 = state_19653__$1;
(statearr_19689_19741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (23))){
var inst_19612 = (state_19653[(14)]);
var inst_19618 = (inst_19612 == null);
var state_19653__$1 = state_19653;
if(cljs.core.truth_(inst_19618)){
var statearr_19690_19742 = state_19653__$1;
(statearr_19690_19742[(1)] = (26));

} else {
var statearr_19691_19743 = state_19653__$1;
(statearr_19691_19743[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (35))){
var inst_19638 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
if(cljs.core.truth_(inst_19638)){
var statearr_19692_19744 = state_19653__$1;
(statearr_19692_19744[(1)] = (36));

} else {
var statearr_19693_19745 = state_19653__$1;
(statearr_19693_19745[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (19))){
var inst_19580 = (state_19653[(7)]);
var inst_19600 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19580);
var state_19653__$1 = state_19653;
var statearr_19694_19746 = state_19653__$1;
(statearr_19694_19746[(2)] = inst_19600);

(statearr_19694_19746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (11))){
var inst_19580 = (state_19653[(7)]);
var inst_19584 = (inst_19580 == null);
var inst_19585 = cljs.core.not.call(null,inst_19584);
var state_19653__$1 = state_19653;
if(inst_19585){
var statearr_19695_19747 = state_19653__$1;
(statearr_19695_19747[(1)] = (13));

} else {
var statearr_19696_19748 = state_19653__$1;
(statearr_19696_19748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (9))){
var inst_19555 = (state_19653[(8)]);
var state_19653__$1 = state_19653;
var statearr_19697_19749 = state_19653__$1;
(statearr_19697_19749[(2)] = inst_19555);

(statearr_19697_19749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (5))){
var state_19653__$1 = state_19653;
var statearr_19698_19750 = state_19653__$1;
(statearr_19698_19750[(2)] = true);

(statearr_19698_19750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (14))){
var state_19653__$1 = state_19653;
var statearr_19699_19751 = state_19653__$1;
(statearr_19699_19751[(2)] = false);

(statearr_19699_19751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (26))){
var inst_19613 = (state_19653[(9)]);
var inst_19620 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19613);
var state_19653__$1 = state_19653;
var statearr_19700_19752 = state_19653__$1;
(statearr_19700_19752[(2)] = inst_19620);

(statearr_19700_19752[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (16))){
var state_19653__$1 = state_19653;
var statearr_19701_19753 = state_19653__$1;
(statearr_19701_19753[(2)] = true);

(statearr_19701_19753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (38))){
var inst_19643 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
var statearr_19702_19754 = state_19653__$1;
(statearr_19702_19754[(2)] = inst_19643);

(statearr_19702_19754[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (30))){
var inst_19613 = (state_19653[(9)]);
var inst_19605 = (state_19653[(13)]);
var inst_19604 = (state_19653[(11)]);
var inst_19630 = cljs.core.empty_QMARK_.call(null,inst_19604);
var inst_19631 = inst_19605.call(null,inst_19613);
var inst_19632 = cljs.core.not.call(null,inst_19631);
var inst_19633 = ((inst_19630) && (inst_19632));
var state_19653__$1 = state_19653;
var statearr_19703_19755 = state_19653__$1;
(statearr_19703_19755[(2)] = inst_19633);

(statearr_19703_19755[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (10))){
var inst_19555 = (state_19653[(8)]);
var inst_19576 = (state_19653[(2)]);
var inst_19577 = cljs.core.get.call(null,inst_19576,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19578 = cljs.core.get.call(null,inst_19576,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19579 = cljs.core.get.call(null,inst_19576,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19580 = inst_19555;
var state_19653__$1 = (function (){var statearr_19704 = state_19653;
(statearr_19704[(7)] = inst_19580);

(statearr_19704[(16)] = inst_19578);

(statearr_19704[(17)] = inst_19577);

(statearr_19704[(18)] = inst_19579);

return statearr_19704;
})();
var statearr_19705_19756 = state_19653__$1;
(statearr_19705_19756[(2)] = null);

(statearr_19705_19756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (18))){
var inst_19595 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
var statearr_19706_19757 = state_19653__$1;
(statearr_19706_19757[(2)] = inst_19595);

(statearr_19706_19757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (37))){
var state_19653__$1 = state_19653;
var statearr_19707_19758 = state_19653__$1;
(statearr_19707_19758[(2)] = null);

(statearr_19707_19758[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19654 === (8))){
var inst_19555 = (state_19653[(8)]);
var inst_19573 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19555);
var state_19653__$1 = state_19653;
var statearr_19708_19759 = state_19653__$1;
(statearr_19708_19759[(2)] = inst_19573);

(statearr_19708_19759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___19713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16633__auto__,c__16792__auto___19713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16634__auto__ = null;
var cljs$core$async$mix_$_state_machine__16634__auto____0 = (function (){
var statearr_19709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19709[(0)] = cljs$core$async$mix_$_state_machine__16634__auto__);

(statearr_19709[(1)] = (1));

return statearr_19709;
});
var cljs$core$async$mix_$_state_machine__16634__auto____1 = (function (state_19653){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19710){if((e19710 instanceof Object)){
var ex__16637__auto__ = e19710;
var statearr_19711_19760 = state_19653;
(statearr_19711_19760[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19761 = state_19653;
state_19653 = G__19761;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16634__auto__ = function(state_19653){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16634__auto____1.call(this,state_19653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16634__auto____0;
cljs$core$async$mix_$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16634__auto____1;
return cljs$core$async$mix_$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___19713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16794__auto__ = (function (){var statearr_19712 = f__16793__auto__.call(null);
(statearr_19712[(6)] = c__16792__auto___19713);

return statearr_19712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___19713,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19763 = arguments.length;
switch (G__19763) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19767 = arguments.length;
switch (G__19767) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__19765_SHARP_){
if(cljs.core.truth_(p1__19765_SHARP_.call(null,topic))){
return p1__19765_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19765_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19768 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19769){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19769 = meta19769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19770,meta19769__$1){
var self__ = this;
var _19770__$1 = this;
return (new cljs.core.async.t_cljs$core$async19768(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19769__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19770){
var self__ = this;
var _19770__$1 = this;
return self__.meta19769;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19769","meta19769",-1210662132,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19768";

cljs.core.async.t_cljs$core$async19768.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19768");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19768.
 */
cljs.core.async.__GT_t_cljs$core$async19768 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19769){
return (new cljs.core.async.t_cljs$core$async19768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19769));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19768(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16792__auto___19888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___19888,mults,ensure_mult,p){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___19888,mults,ensure_mult,p){
return (function (state_19842){
var state_val_19843 = (state_19842[(1)]);
if((state_val_19843 === (7))){
var inst_19838 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19844_19889 = state_19842__$1;
(statearr_19844_19889[(2)] = inst_19838);

(statearr_19844_19889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (20))){
var state_19842__$1 = state_19842;
var statearr_19845_19890 = state_19842__$1;
(statearr_19845_19890[(2)] = null);

(statearr_19845_19890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (1))){
var state_19842__$1 = state_19842;
var statearr_19846_19891 = state_19842__$1;
(statearr_19846_19891[(2)] = null);

(statearr_19846_19891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (24))){
var inst_19821 = (state_19842[(7)]);
var inst_19830 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19821);
var state_19842__$1 = state_19842;
var statearr_19847_19892 = state_19842__$1;
(statearr_19847_19892[(2)] = inst_19830);

(statearr_19847_19892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (4))){
var inst_19773 = (state_19842[(8)]);
var inst_19773__$1 = (state_19842[(2)]);
var inst_19774 = (inst_19773__$1 == null);
var state_19842__$1 = (function (){var statearr_19848 = state_19842;
(statearr_19848[(8)] = inst_19773__$1);

return statearr_19848;
})();
if(cljs.core.truth_(inst_19774)){
var statearr_19849_19893 = state_19842__$1;
(statearr_19849_19893[(1)] = (5));

} else {
var statearr_19850_19894 = state_19842__$1;
(statearr_19850_19894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (15))){
var inst_19815 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19851_19895 = state_19842__$1;
(statearr_19851_19895[(2)] = inst_19815);

(statearr_19851_19895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (21))){
var inst_19835 = (state_19842[(2)]);
var state_19842__$1 = (function (){var statearr_19852 = state_19842;
(statearr_19852[(9)] = inst_19835);

return statearr_19852;
})();
var statearr_19853_19896 = state_19842__$1;
(statearr_19853_19896[(2)] = null);

(statearr_19853_19896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (13))){
var inst_19797 = (state_19842[(10)]);
var inst_19799 = cljs.core.chunked_seq_QMARK_.call(null,inst_19797);
var state_19842__$1 = state_19842;
if(inst_19799){
var statearr_19854_19897 = state_19842__$1;
(statearr_19854_19897[(1)] = (16));

} else {
var statearr_19855_19898 = state_19842__$1;
(statearr_19855_19898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (22))){
var inst_19827 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
if(cljs.core.truth_(inst_19827)){
var statearr_19856_19899 = state_19842__$1;
(statearr_19856_19899[(1)] = (23));

} else {
var statearr_19857_19900 = state_19842__$1;
(statearr_19857_19900[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (6))){
var inst_19821 = (state_19842[(7)]);
var inst_19773 = (state_19842[(8)]);
var inst_19823 = (state_19842[(11)]);
var inst_19821__$1 = topic_fn.call(null,inst_19773);
var inst_19822 = cljs.core.deref.call(null,mults);
var inst_19823__$1 = cljs.core.get.call(null,inst_19822,inst_19821__$1);
var state_19842__$1 = (function (){var statearr_19858 = state_19842;
(statearr_19858[(7)] = inst_19821__$1);

(statearr_19858[(11)] = inst_19823__$1);

return statearr_19858;
})();
if(cljs.core.truth_(inst_19823__$1)){
var statearr_19859_19901 = state_19842__$1;
(statearr_19859_19901[(1)] = (19));

} else {
var statearr_19860_19902 = state_19842__$1;
(statearr_19860_19902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (25))){
var inst_19832 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19861_19903 = state_19842__$1;
(statearr_19861_19903[(2)] = inst_19832);

(statearr_19861_19903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (17))){
var inst_19797 = (state_19842[(10)]);
var inst_19806 = cljs.core.first.call(null,inst_19797);
var inst_19807 = cljs.core.async.muxch_STAR_.call(null,inst_19806);
var inst_19808 = cljs.core.async.close_BANG_.call(null,inst_19807);
var inst_19809 = cljs.core.next.call(null,inst_19797);
var inst_19783 = inst_19809;
var inst_19784 = null;
var inst_19785 = (0);
var inst_19786 = (0);
var state_19842__$1 = (function (){var statearr_19862 = state_19842;
(statearr_19862[(12)] = inst_19783);

(statearr_19862[(13)] = inst_19785);

(statearr_19862[(14)] = inst_19786);

(statearr_19862[(15)] = inst_19808);

(statearr_19862[(16)] = inst_19784);

return statearr_19862;
})();
var statearr_19863_19904 = state_19842__$1;
(statearr_19863_19904[(2)] = null);

(statearr_19863_19904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (3))){
var inst_19840 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19842__$1,inst_19840);
} else {
if((state_val_19843 === (12))){
var inst_19817 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19864_19905 = state_19842__$1;
(statearr_19864_19905[(2)] = inst_19817);

(statearr_19864_19905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (2))){
var state_19842__$1 = state_19842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19842__$1,(4),ch);
} else {
if((state_val_19843 === (23))){
var state_19842__$1 = state_19842;
var statearr_19865_19906 = state_19842__$1;
(statearr_19865_19906[(2)] = null);

(statearr_19865_19906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (19))){
var inst_19773 = (state_19842[(8)]);
var inst_19823 = (state_19842[(11)]);
var inst_19825 = cljs.core.async.muxch_STAR_.call(null,inst_19823);
var state_19842__$1 = state_19842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19842__$1,(22),inst_19825,inst_19773);
} else {
if((state_val_19843 === (11))){
var inst_19783 = (state_19842[(12)]);
var inst_19797 = (state_19842[(10)]);
var inst_19797__$1 = cljs.core.seq.call(null,inst_19783);
var state_19842__$1 = (function (){var statearr_19866 = state_19842;
(statearr_19866[(10)] = inst_19797__$1);

return statearr_19866;
})();
if(inst_19797__$1){
var statearr_19867_19907 = state_19842__$1;
(statearr_19867_19907[(1)] = (13));

} else {
var statearr_19868_19908 = state_19842__$1;
(statearr_19868_19908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (9))){
var inst_19819 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19869_19909 = state_19842__$1;
(statearr_19869_19909[(2)] = inst_19819);

(statearr_19869_19909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (5))){
var inst_19780 = cljs.core.deref.call(null,mults);
var inst_19781 = cljs.core.vals.call(null,inst_19780);
var inst_19782 = cljs.core.seq.call(null,inst_19781);
var inst_19783 = inst_19782;
var inst_19784 = null;
var inst_19785 = (0);
var inst_19786 = (0);
var state_19842__$1 = (function (){var statearr_19870 = state_19842;
(statearr_19870[(12)] = inst_19783);

(statearr_19870[(13)] = inst_19785);

(statearr_19870[(14)] = inst_19786);

(statearr_19870[(16)] = inst_19784);

return statearr_19870;
})();
var statearr_19871_19910 = state_19842__$1;
(statearr_19871_19910[(2)] = null);

(statearr_19871_19910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (14))){
var state_19842__$1 = state_19842;
var statearr_19875_19911 = state_19842__$1;
(statearr_19875_19911[(2)] = null);

(statearr_19875_19911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (16))){
var inst_19797 = (state_19842[(10)]);
var inst_19801 = cljs.core.chunk_first.call(null,inst_19797);
var inst_19802 = cljs.core.chunk_rest.call(null,inst_19797);
var inst_19803 = cljs.core.count.call(null,inst_19801);
var inst_19783 = inst_19802;
var inst_19784 = inst_19801;
var inst_19785 = inst_19803;
var inst_19786 = (0);
var state_19842__$1 = (function (){var statearr_19876 = state_19842;
(statearr_19876[(12)] = inst_19783);

(statearr_19876[(13)] = inst_19785);

(statearr_19876[(14)] = inst_19786);

(statearr_19876[(16)] = inst_19784);

return statearr_19876;
})();
var statearr_19877_19912 = state_19842__$1;
(statearr_19877_19912[(2)] = null);

(statearr_19877_19912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (10))){
var inst_19783 = (state_19842[(12)]);
var inst_19785 = (state_19842[(13)]);
var inst_19786 = (state_19842[(14)]);
var inst_19784 = (state_19842[(16)]);
var inst_19791 = cljs.core._nth.call(null,inst_19784,inst_19786);
var inst_19792 = cljs.core.async.muxch_STAR_.call(null,inst_19791);
var inst_19793 = cljs.core.async.close_BANG_.call(null,inst_19792);
var inst_19794 = (inst_19786 + (1));
var tmp19872 = inst_19783;
var tmp19873 = inst_19785;
var tmp19874 = inst_19784;
var inst_19783__$1 = tmp19872;
var inst_19784__$1 = tmp19874;
var inst_19785__$1 = tmp19873;
var inst_19786__$1 = inst_19794;
var state_19842__$1 = (function (){var statearr_19878 = state_19842;
(statearr_19878[(17)] = inst_19793);

(statearr_19878[(12)] = inst_19783__$1);

(statearr_19878[(13)] = inst_19785__$1);

(statearr_19878[(14)] = inst_19786__$1);

(statearr_19878[(16)] = inst_19784__$1);

return statearr_19878;
})();
var statearr_19879_19913 = state_19842__$1;
(statearr_19879_19913[(2)] = null);

(statearr_19879_19913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (18))){
var inst_19812 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19880_19914 = state_19842__$1;
(statearr_19880_19914[(2)] = inst_19812);

(statearr_19880_19914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19843 === (8))){
var inst_19785 = (state_19842[(13)]);
var inst_19786 = (state_19842[(14)]);
var inst_19788 = (inst_19786 < inst_19785);
var inst_19789 = inst_19788;
var state_19842__$1 = state_19842;
if(cljs.core.truth_(inst_19789)){
var statearr_19881_19915 = state_19842__$1;
(statearr_19881_19915[(1)] = (10));

} else {
var statearr_19882_19916 = state_19842__$1;
(statearr_19882_19916[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___19888,mults,ensure_mult,p))
;
return ((function (switch__16633__auto__,c__16792__auto___19888,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_19883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19883[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_19883[(1)] = (1));

return statearr_19883;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_19842){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19884){if((e19884 instanceof Object)){
var ex__16637__auto__ = e19884;
var statearr_19885_19917 = state_19842;
(statearr_19885_19917[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19918 = state_19842;
state_19842 = G__19918;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_19842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_19842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___19888,mults,ensure_mult,p))
})();
var state__16794__auto__ = (function (){var statearr_19886 = f__16793__auto__.call(null);
(statearr_19886[(6)] = c__16792__auto___19888);

return statearr_19886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___19888,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19920 = arguments.length;
switch (G__19920) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19923 = arguments.length;
switch (G__19923) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19926 = arguments.length;
switch (G__19926) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16792__auto___19993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___19993,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___19993,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19965){
var state_val_19966 = (state_19965[(1)]);
if((state_val_19966 === (7))){
var state_19965__$1 = state_19965;
var statearr_19967_19994 = state_19965__$1;
(statearr_19967_19994[(2)] = null);

(statearr_19967_19994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (1))){
var state_19965__$1 = state_19965;
var statearr_19968_19995 = state_19965__$1;
(statearr_19968_19995[(2)] = null);

(statearr_19968_19995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (4))){
var inst_19929 = (state_19965[(7)]);
var inst_19931 = (inst_19929 < cnt);
var state_19965__$1 = state_19965;
if(cljs.core.truth_(inst_19931)){
var statearr_19969_19996 = state_19965__$1;
(statearr_19969_19996[(1)] = (6));

} else {
var statearr_19970_19997 = state_19965__$1;
(statearr_19970_19997[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (15))){
var inst_19961 = (state_19965[(2)]);
var state_19965__$1 = state_19965;
var statearr_19971_19998 = state_19965__$1;
(statearr_19971_19998[(2)] = inst_19961);

(statearr_19971_19998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (13))){
var inst_19954 = cljs.core.async.close_BANG_.call(null,out);
var state_19965__$1 = state_19965;
var statearr_19972_19999 = state_19965__$1;
(statearr_19972_19999[(2)] = inst_19954);

(statearr_19972_19999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (6))){
var state_19965__$1 = state_19965;
var statearr_19973_20000 = state_19965__$1;
(statearr_19973_20000[(2)] = null);

(statearr_19973_20000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (3))){
var inst_19963 = (state_19965[(2)]);
var state_19965__$1 = state_19965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19965__$1,inst_19963);
} else {
if((state_val_19966 === (12))){
var inst_19951 = (state_19965[(8)]);
var inst_19951__$1 = (state_19965[(2)]);
var inst_19952 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19951__$1);
var state_19965__$1 = (function (){var statearr_19974 = state_19965;
(statearr_19974[(8)] = inst_19951__$1);

return statearr_19974;
})();
if(cljs.core.truth_(inst_19952)){
var statearr_19975_20001 = state_19965__$1;
(statearr_19975_20001[(1)] = (13));

} else {
var statearr_19976_20002 = state_19965__$1;
(statearr_19976_20002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (2))){
var inst_19928 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19929 = (0);
var state_19965__$1 = (function (){var statearr_19977 = state_19965;
(statearr_19977[(7)] = inst_19929);

(statearr_19977[(9)] = inst_19928);

return statearr_19977;
})();
var statearr_19978_20003 = state_19965__$1;
(statearr_19978_20003[(2)] = null);

(statearr_19978_20003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (11))){
var inst_19929 = (state_19965[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19965,(10),Object,null,(9));
var inst_19938 = chs__$1.call(null,inst_19929);
var inst_19939 = done.call(null,inst_19929);
var inst_19940 = cljs.core.async.take_BANG_.call(null,inst_19938,inst_19939);
var state_19965__$1 = state_19965;
var statearr_19979_20004 = state_19965__$1;
(statearr_19979_20004[(2)] = inst_19940);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (9))){
var inst_19929 = (state_19965[(7)]);
var inst_19942 = (state_19965[(2)]);
var inst_19943 = (inst_19929 + (1));
var inst_19929__$1 = inst_19943;
var state_19965__$1 = (function (){var statearr_19980 = state_19965;
(statearr_19980[(10)] = inst_19942);

(statearr_19980[(7)] = inst_19929__$1);

return statearr_19980;
})();
var statearr_19981_20005 = state_19965__$1;
(statearr_19981_20005[(2)] = null);

(statearr_19981_20005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (5))){
var inst_19949 = (state_19965[(2)]);
var state_19965__$1 = (function (){var statearr_19982 = state_19965;
(statearr_19982[(11)] = inst_19949);

return statearr_19982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19965__$1,(12),dchan);
} else {
if((state_val_19966 === (14))){
var inst_19951 = (state_19965[(8)]);
var inst_19956 = cljs.core.apply.call(null,f,inst_19951);
var state_19965__$1 = state_19965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19965__$1,(16),out,inst_19956);
} else {
if((state_val_19966 === (16))){
var inst_19958 = (state_19965[(2)]);
var state_19965__$1 = (function (){var statearr_19983 = state_19965;
(statearr_19983[(12)] = inst_19958);

return statearr_19983;
})();
var statearr_19984_20006 = state_19965__$1;
(statearr_19984_20006[(2)] = null);

(statearr_19984_20006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (10))){
var inst_19933 = (state_19965[(2)]);
var inst_19934 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19965__$1 = (function (){var statearr_19985 = state_19965;
(statearr_19985[(13)] = inst_19933);

return statearr_19985;
})();
var statearr_19986_20007 = state_19965__$1;
(statearr_19986_20007[(2)] = inst_19934);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19966 === (8))){
var inst_19947 = (state_19965[(2)]);
var state_19965__$1 = state_19965;
var statearr_19987_20008 = state_19965__$1;
(statearr_19987_20008[(2)] = inst_19947);

(statearr_19987_20008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___19993,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16633__auto__,c__16792__auto___19993,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_19988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19988[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_19988[(1)] = (1));

return statearr_19988;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_19965){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_19965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e19989){if((e19989 instanceof Object)){
var ex__16637__auto__ = e19989;
var statearr_19990_20009 = state_19965;
(statearr_19990_20009[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20010 = state_19965;
state_19965 = G__20010;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_19965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_19965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___19993,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16794__auto__ = (function (){var statearr_19991 = f__16793__auto__.call(null);
(statearr_19991[(6)] = c__16792__auto___19993);

return statearr_19991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___19993,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20013 = arguments.length;
switch (G__20013) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16792__auto___20067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___20067,out){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___20067,out){
return (function (state_20045){
var state_val_20046 = (state_20045[(1)]);
if((state_val_20046 === (7))){
var inst_20025 = (state_20045[(7)]);
var inst_20024 = (state_20045[(8)]);
var inst_20024__$1 = (state_20045[(2)]);
var inst_20025__$1 = cljs.core.nth.call(null,inst_20024__$1,(0),null);
var inst_20026 = cljs.core.nth.call(null,inst_20024__$1,(1),null);
var inst_20027 = (inst_20025__$1 == null);
var state_20045__$1 = (function (){var statearr_20047 = state_20045;
(statearr_20047[(7)] = inst_20025__$1);

(statearr_20047[(9)] = inst_20026);

(statearr_20047[(8)] = inst_20024__$1);

return statearr_20047;
})();
if(cljs.core.truth_(inst_20027)){
var statearr_20048_20068 = state_20045__$1;
(statearr_20048_20068[(1)] = (8));

} else {
var statearr_20049_20069 = state_20045__$1;
(statearr_20049_20069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20046 === (1))){
var inst_20014 = cljs.core.vec.call(null,chs);
var inst_20015 = inst_20014;
var state_20045__$1 = (function (){var statearr_20050 = state_20045;
(statearr_20050[(10)] = inst_20015);

return statearr_20050;
})();
var statearr_20051_20070 = state_20045__$1;
(statearr_20051_20070[(2)] = null);

(statearr_20051_20070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20046 === (4))){
var inst_20015 = (state_20045[(10)]);
var state_20045__$1 = state_20045;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20045__$1,(7),inst_20015);
} else {
if((state_val_20046 === (6))){
var inst_20041 = (state_20045[(2)]);
var state_20045__$1 = state_20045;
var statearr_20052_20071 = state_20045__$1;
(statearr_20052_20071[(2)] = inst_20041);

(statearr_20052_20071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20046 === (3))){
var inst_20043 = (state_20045[(2)]);
var state_20045__$1 = state_20045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20045__$1,inst_20043);
} else {
if((state_val_20046 === (2))){
var inst_20015 = (state_20045[(10)]);
var inst_20017 = cljs.core.count.call(null,inst_20015);
var inst_20018 = (inst_20017 > (0));
var state_20045__$1 = state_20045;
if(cljs.core.truth_(inst_20018)){
var statearr_20054_20072 = state_20045__$1;
(statearr_20054_20072[(1)] = (4));

} else {
var statearr_20055_20073 = state_20045__$1;
(statearr_20055_20073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20046 === (11))){
var inst_20015 = (state_20045[(10)]);
var inst_20034 = (state_20045[(2)]);
var tmp20053 = inst_20015;
var inst_20015__$1 = tmp20053;
var state_20045__$1 = (function (){var statearr_20056 = state_20045;
(statearr_20056[(10)] = inst_20015__$1);

(statearr_20056[(11)] = inst_20034);

return statearr_20056;
})();
var statearr_20057_20074 = state_20045__$1;
(statearr_20057_20074[(2)] = null);

(statearr_20057_20074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20046 === (9))){
var inst_20025 = (state_20045[(7)]);
var state_20045__$1 = state_20045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20045__$1,(11),out,inst_20025);
} else {
if((state_val_20046 === (5))){
var inst_20039 = cljs.core.async.close_BANG_.call(null,out);
var state_20045__$1 = state_20045;
var statearr_20058_20075 = state_20045__$1;
(statearr_20058_20075[(2)] = inst_20039);

(statearr_20058_20075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20046 === (10))){
var inst_20037 = (state_20045[(2)]);
var state_20045__$1 = state_20045;
var statearr_20059_20076 = state_20045__$1;
(statearr_20059_20076[(2)] = inst_20037);

(statearr_20059_20076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20046 === (8))){
var inst_20025 = (state_20045[(7)]);
var inst_20026 = (state_20045[(9)]);
var inst_20015 = (state_20045[(10)]);
var inst_20024 = (state_20045[(8)]);
var inst_20029 = (function (){var cs = inst_20015;
var vec__20020 = inst_20024;
var v = inst_20025;
var c = inst_20026;
return ((function (cs,vec__20020,v,c,inst_20025,inst_20026,inst_20015,inst_20024,state_val_20046,c__16792__auto___20067,out){
return (function (p1__20011_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20011_SHARP_);
});
;})(cs,vec__20020,v,c,inst_20025,inst_20026,inst_20015,inst_20024,state_val_20046,c__16792__auto___20067,out))
})();
var inst_20030 = cljs.core.filterv.call(null,inst_20029,inst_20015);
var inst_20015__$1 = inst_20030;
var state_20045__$1 = (function (){var statearr_20060 = state_20045;
(statearr_20060[(10)] = inst_20015__$1);

return statearr_20060;
})();
var statearr_20061_20077 = state_20045__$1;
(statearr_20061_20077[(2)] = null);

(statearr_20061_20077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___20067,out))
;
return ((function (switch__16633__auto__,c__16792__auto___20067,out){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_20062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20062[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_20062[(1)] = (1));

return statearr_20062;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_20045){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_20045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e20063){if((e20063 instanceof Object)){
var ex__16637__auto__ = e20063;
var statearr_20064_20078 = state_20045;
(statearr_20064_20078[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20079 = state_20045;
state_20045 = G__20079;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_20045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_20045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___20067,out))
})();
var state__16794__auto__ = (function (){var statearr_20065 = f__16793__auto__.call(null);
(statearr_20065[(6)] = c__16792__auto___20067);

return statearr_20065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___20067,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20081 = arguments.length;
switch (G__20081) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16792__auto___20126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___20126,out){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___20126,out){
return (function (state_20105){
var state_val_20106 = (state_20105[(1)]);
if((state_val_20106 === (7))){
var inst_20087 = (state_20105[(7)]);
var inst_20087__$1 = (state_20105[(2)]);
var inst_20088 = (inst_20087__$1 == null);
var inst_20089 = cljs.core.not.call(null,inst_20088);
var state_20105__$1 = (function (){var statearr_20107 = state_20105;
(statearr_20107[(7)] = inst_20087__$1);

return statearr_20107;
})();
if(inst_20089){
var statearr_20108_20127 = state_20105__$1;
(statearr_20108_20127[(1)] = (8));

} else {
var statearr_20109_20128 = state_20105__$1;
(statearr_20109_20128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (1))){
var inst_20082 = (0);
var state_20105__$1 = (function (){var statearr_20110 = state_20105;
(statearr_20110[(8)] = inst_20082);

return statearr_20110;
})();
var statearr_20111_20129 = state_20105__$1;
(statearr_20111_20129[(2)] = null);

(statearr_20111_20129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (4))){
var state_20105__$1 = state_20105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20105__$1,(7),ch);
} else {
if((state_val_20106 === (6))){
var inst_20100 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20112_20130 = state_20105__$1;
(statearr_20112_20130[(2)] = inst_20100);

(statearr_20112_20130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (3))){
var inst_20102 = (state_20105[(2)]);
var inst_20103 = cljs.core.async.close_BANG_.call(null,out);
var state_20105__$1 = (function (){var statearr_20113 = state_20105;
(statearr_20113[(9)] = inst_20102);

return statearr_20113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20105__$1,inst_20103);
} else {
if((state_val_20106 === (2))){
var inst_20082 = (state_20105[(8)]);
var inst_20084 = (inst_20082 < n);
var state_20105__$1 = state_20105;
if(cljs.core.truth_(inst_20084)){
var statearr_20114_20131 = state_20105__$1;
(statearr_20114_20131[(1)] = (4));

} else {
var statearr_20115_20132 = state_20105__$1;
(statearr_20115_20132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (11))){
var inst_20082 = (state_20105[(8)]);
var inst_20092 = (state_20105[(2)]);
var inst_20093 = (inst_20082 + (1));
var inst_20082__$1 = inst_20093;
var state_20105__$1 = (function (){var statearr_20116 = state_20105;
(statearr_20116[(10)] = inst_20092);

(statearr_20116[(8)] = inst_20082__$1);

return statearr_20116;
})();
var statearr_20117_20133 = state_20105__$1;
(statearr_20117_20133[(2)] = null);

(statearr_20117_20133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (9))){
var state_20105__$1 = state_20105;
var statearr_20118_20134 = state_20105__$1;
(statearr_20118_20134[(2)] = null);

(statearr_20118_20134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (5))){
var state_20105__$1 = state_20105;
var statearr_20119_20135 = state_20105__$1;
(statearr_20119_20135[(2)] = null);

(statearr_20119_20135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (10))){
var inst_20097 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20120_20136 = state_20105__$1;
(statearr_20120_20136[(2)] = inst_20097);

(statearr_20120_20136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (8))){
var inst_20087 = (state_20105[(7)]);
var state_20105__$1 = state_20105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20105__$1,(11),out,inst_20087);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___20126,out))
;
return ((function (switch__16633__auto__,c__16792__auto___20126,out){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_20121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20121[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_20121[(1)] = (1));

return statearr_20121;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_20105){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_20105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e20122){if((e20122 instanceof Object)){
var ex__16637__auto__ = e20122;
var statearr_20123_20137 = state_20105;
(statearr_20123_20137[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20138 = state_20105;
state_20105 = G__20138;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_20105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_20105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___20126,out))
})();
var state__16794__auto__ = (function (){var statearr_20124 = f__16793__auto__.call(null);
(statearr_20124[(6)] = c__16792__auto___20126);

return statearr_20124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___20126,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20140 = (function (f,ch,meta20141){
this.f = f;
this.ch = ch;
this.meta20141 = meta20141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20142,meta20141__$1){
var self__ = this;
var _20142__$1 = this;
return (new cljs.core.async.t_cljs$core$async20140(self__.f,self__.ch,meta20141__$1));
});

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20142){
var self__ = this;
var _20142__$1 = this;
return self__.meta20141;
});

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20143 = (function (f,ch,meta20141,_,fn1,meta20144){
this.f = f;
this.ch = ch;
this.meta20141 = meta20141;
this._ = _;
this.fn1 = fn1;
this.meta20144 = meta20144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20145,meta20144__$1){
var self__ = this;
var _20145__$1 = this;
return (new cljs.core.async.t_cljs$core$async20143(self__.f,self__.ch,self__.meta20141,self__._,self__.fn1,meta20144__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20145){
var self__ = this;
var _20145__$1 = this;
return self__.meta20144;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20139_SHARP_){
return f1.call(null,(((p1__20139_SHARP_ == null))?null:self__.f.call(null,p1__20139_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20143.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20141","meta20141",1939204942,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20140","cljs.core.async/t_cljs$core$async20140",-883896091,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20144","meta20144",1051632247,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20143";

cljs.core.async.t_cljs$core$async20143.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20143");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20143.
 */
cljs.core.async.__GT_t_cljs$core$async20143 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20143(f__$1,ch__$1,meta20141__$1,___$2,fn1__$1,meta20144){
return (new cljs.core.async.t_cljs$core$async20143(f__$1,ch__$1,meta20141__$1,___$2,fn1__$1,meta20144));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20143(self__.f,self__.ch,self__.meta20141,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20141","meta20141",1939204942,null)], null);
});

cljs.core.async.t_cljs$core$async20140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20140";

cljs.core.async.t_cljs$core$async20140.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20140");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20140.
 */
cljs.core.async.__GT_t_cljs$core$async20140 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20140(f__$1,ch__$1,meta20141){
return (new cljs.core.async.t_cljs$core$async20140(f__$1,ch__$1,meta20141));
});

}

return (new cljs.core.async.t_cljs$core$async20140(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20146 = (function (f,ch,meta20147){
this.f = f;
this.ch = ch;
this.meta20147 = meta20147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20148,meta20147__$1){
var self__ = this;
var _20148__$1 = this;
return (new cljs.core.async.t_cljs$core$async20146(self__.f,self__.ch,meta20147__$1));
});

cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20148){
var self__ = this;
var _20148__$1 = this;
return self__.meta20147;
});

cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20147","meta20147",1836612597,null)], null);
});

cljs.core.async.t_cljs$core$async20146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20146";

cljs.core.async.t_cljs$core$async20146.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20146");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20146.
 */
cljs.core.async.__GT_t_cljs$core$async20146 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20146(f__$1,ch__$1,meta20147){
return (new cljs.core.async.t_cljs$core$async20146(f__$1,ch__$1,meta20147));
});

}

return (new cljs.core.async.t_cljs$core$async20146(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20149 = (function (p,ch,meta20150){
this.p = p;
this.ch = ch;
this.meta20150 = meta20150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20151,meta20150__$1){
var self__ = this;
var _20151__$1 = this;
return (new cljs.core.async.t_cljs$core$async20149(self__.p,self__.ch,meta20150__$1));
});

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20151){
var self__ = this;
var _20151__$1 = this;
return self__.meta20150;
});

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20150","meta20150",822601490,null)], null);
});

cljs.core.async.t_cljs$core$async20149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20149";

cljs.core.async.t_cljs$core$async20149.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20149");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20149.
 */
cljs.core.async.__GT_t_cljs$core$async20149 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20149(p__$1,ch__$1,meta20150){
return (new cljs.core.async.t_cljs$core$async20149(p__$1,ch__$1,meta20150));
});

}

return (new cljs.core.async.t_cljs$core$async20149(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20153 = arguments.length;
switch (G__20153) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16792__auto___20193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___20193,out){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___20193,out){
return (function (state_20174){
var state_val_20175 = (state_20174[(1)]);
if((state_val_20175 === (7))){
var inst_20170 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
var statearr_20176_20194 = state_20174__$1;
(statearr_20176_20194[(2)] = inst_20170);

(statearr_20176_20194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (1))){
var state_20174__$1 = state_20174;
var statearr_20177_20195 = state_20174__$1;
(statearr_20177_20195[(2)] = null);

(statearr_20177_20195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (4))){
var inst_20156 = (state_20174[(7)]);
var inst_20156__$1 = (state_20174[(2)]);
var inst_20157 = (inst_20156__$1 == null);
var state_20174__$1 = (function (){var statearr_20178 = state_20174;
(statearr_20178[(7)] = inst_20156__$1);

return statearr_20178;
})();
if(cljs.core.truth_(inst_20157)){
var statearr_20179_20196 = state_20174__$1;
(statearr_20179_20196[(1)] = (5));

} else {
var statearr_20180_20197 = state_20174__$1;
(statearr_20180_20197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (6))){
var inst_20156 = (state_20174[(7)]);
var inst_20161 = p.call(null,inst_20156);
var state_20174__$1 = state_20174;
if(cljs.core.truth_(inst_20161)){
var statearr_20181_20198 = state_20174__$1;
(statearr_20181_20198[(1)] = (8));

} else {
var statearr_20182_20199 = state_20174__$1;
(statearr_20182_20199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (3))){
var inst_20172 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20174__$1,inst_20172);
} else {
if((state_val_20175 === (2))){
var state_20174__$1 = state_20174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20174__$1,(4),ch);
} else {
if((state_val_20175 === (11))){
var inst_20164 = (state_20174[(2)]);
var state_20174__$1 = state_20174;
var statearr_20183_20200 = state_20174__$1;
(statearr_20183_20200[(2)] = inst_20164);

(statearr_20183_20200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (9))){
var state_20174__$1 = state_20174;
var statearr_20184_20201 = state_20174__$1;
(statearr_20184_20201[(2)] = null);

(statearr_20184_20201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (5))){
var inst_20159 = cljs.core.async.close_BANG_.call(null,out);
var state_20174__$1 = state_20174;
var statearr_20185_20202 = state_20174__$1;
(statearr_20185_20202[(2)] = inst_20159);

(statearr_20185_20202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (10))){
var inst_20167 = (state_20174[(2)]);
var state_20174__$1 = (function (){var statearr_20186 = state_20174;
(statearr_20186[(8)] = inst_20167);

return statearr_20186;
})();
var statearr_20187_20203 = state_20174__$1;
(statearr_20187_20203[(2)] = null);

(statearr_20187_20203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20175 === (8))){
var inst_20156 = (state_20174[(7)]);
var state_20174__$1 = state_20174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20174__$1,(11),out,inst_20156);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___20193,out))
;
return ((function (switch__16633__auto__,c__16792__auto___20193,out){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_20188 = [null,null,null,null,null,null,null,null,null];
(statearr_20188[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_20188[(1)] = (1));

return statearr_20188;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_20174){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_20174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e20189){if((e20189 instanceof Object)){
var ex__16637__auto__ = e20189;
var statearr_20190_20204 = state_20174;
(statearr_20190_20204[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20205 = state_20174;
state_20174 = G__20205;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_20174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_20174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___20193,out))
})();
var state__16794__auto__ = (function (){var statearr_20191 = f__16793__auto__.call(null);
(statearr_20191[(6)] = c__16792__auto___20193);

return statearr_20191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___20193,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20207 = arguments.length;
switch (G__20207) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16792__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto__){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto__){
return (function (state_20270){
var state_val_20271 = (state_20270[(1)]);
if((state_val_20271 === (7))){
var inst_20266 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
var statearr_20272_20310 = state_20270__$1;
(statearr_20272_20310[(2)] = inst_20266);

(statearr_20272_20310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (20))){
var inst_20236 = (state_20270[(7)]);
var inst_20247 = (state_20270[(2)]);
var inst_20248 = cljs.core.next.call(null,inst_20236);
var inst_20222 = inst_20248;
var inst_20223 = null;
var inst_20224 = (0);
var inst_20225 = (0);
var state_20270__$1 = (function (){var statearr_20273 = state_20270;
(statearr_20273[(8)] = inst_20225);

(statearr_20273[(9)] = inst_20224);

(statearr_20273[(10)] = inst_20247);

(statearr_20273[(11)] = inst_20222);

(statearr_20273[(12)] = inst_20223);

return statearr_20273;
})();
var statearr_20274_20311 = state_20270__$1;
(statearr_20274_20311[(2)] = null);

(statearr_20274_20311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (1))){
var state_20270__$1 = state_20270;
var statearr_20275_20312 = state_20270__$1;
(statearr_20275_20312[(2)] = null);

(statearr_20275_20312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (4))){
var inst_20211 = (state_20270[(13)]);
var inst_20211__$1 = (state_20270[(2)]);
var inst_20212 = (inst_20211__$1 == null);
var state_20270__$1 = (function (){var statearr_20276 = state_20270;
(statearr_20276[(13)] = inst_20211__$1);

return statearr_20276;
})();
if(cljs.core.truth_(inst_20212)){
var statearr_20277_20313 = state_20270__$1;
(statearr_20277_20313[(1)] = (5));

} else {
var statearr_20278_20314 = state_20270__$1;
(statearr_20278_20314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (15))){
var state_20270__$1 = state_20270;
var statearr_20282_20315 = state_20270__$1;
(statearr_20282_20315[(2)] = null);

(statearr_20282_20315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (21))){
var state_20270__$1 = state_20270;
var statearr_20283_20316 = state_20270__$1;
(statearr_20283_20316[(2)] = null);

(statearr_20283_20316[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (13))){
var inst_20225 = (state_20270[(8)]);
var inst_20224 = (state_20270[(9)]);
var inst_20222 = (state_20270[(11)]);
var inst_20223 = (state_20270[(12)]);
var inst_20232 = (state_20270[(2)]);
var inst_20233 = (inst_20225 + (1));
var tmp20279 = inst_20224;
var tmp20280 = inst_20222;
var tmp20281 = inst_20223;
var inst_20222__$1 = tmp20280;
var inst_20223__$1 = tmp20281;
var inst_20224__$1 = tmp20279;
var inst_20225__$1 = inst_20233;
var state_20270__$1 = (function (){var statearr_20284 = state_20270;
(statearr_20284[(8)] = inst_20225__$1);

(statearr_20284[(14)] = inst_20232);

(statearr_20284[(9)] = inst_20224__$1);

(statearr_20284[(11)] = inst_20222__$1);

(statearr_20284[(12)] = inst_20223__$1);

return statearr_20284;
})();
var statearr_20285_20317 = state_20270__$1;
(statearr_20285_20317[(2)] = null);

(statearr_20285_20317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (22))){
var state_20270__$1 = state_20270;
var statearr_20286_20318 = state_20270__$1;
(statearr_20286_20318[(2)] = null);

(statearr_20286_20318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (6))){
var inst_20211 = (state_20270[(13)]);
var inst_20220 = f.call(null,inst_20211);
var inst_20221 = cljs.core.seq.call(null,inst_20220);
var inst_20222 = inst_20221;
var inst_20223 = null;
var inst_20224 = (0);
var inst_20225 = (0);
var state_20270__$1 = (function (){var statearr_20287 = state_20270;
(statearr_20287[(8)] = inst_20225);

(statearr_20287[(9)] = inst_20224);

(statearr_20287[(11)] = inst_20222);

(statearr_20287[(12)] = inst_20223);

return statearr_20287;
})();
var statearr_20288_20319 = state_20270__$1;
(statearr_20288_20319[(2)] = null);

(statearr_20288_20319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (17))){
var inst_20236 = (state_20270[(7)]);
var inst_20240 = cljs.core.chunk_first.call(null,inst_20236);
var inst_20241 = cljs.core.chunk_rest.call(null,inst_20236);
var inst_20242 = cljs.core.count.call(null,inst_20240);
var inst_20222 = inst_20241;
var inst_20223 = inst_20240;
var inst_20224 = inst_20242;
var inst_20225 = (0);
var state_20270__$1 = (function (){var statearr_20289 = state_20270;
(statearr_20289[(8)] = inst_20225);

(statearr_20289[(9)] = inst_20224);

(statearr_20289[(11)] = inst_20222);

(statearr_20289[(12)] = inst_20223);

return statearr_20289;
})();
var statearr_20290_20320 = state_20270__$1;
(statearr_20290_20320[(2)] = null);

(statearr_20290_20320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (3))){
var inst_20268 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20270__$1,inst_20268);
} else {
if((state_val_20271 === (12))){
var inst_20256 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
var statearr_20291_20321 = state_20270__$1;
(statearr_20291_20321[(2)] = inst_20256);

(statearr_20291_20321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (2))){
var state_20270__$1 = state_20270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20270__$1,(4),in$);
} else {
if((state_val_20271 === (23))){
var inst_20264 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
var statearr_20292_20322 = state_20270__$1;
(statearr_20292_20322[(2)] = inst_20264);

(statearr_20292_20322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (19))){
var inst_20251 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
var statearr_20293_20323 = state_20270__$1;
(statearr_20293_20323[(2)] = inst_20251);

(statearr_20293_20323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (11))){
var inst_20222 = (state_20270[(11)]);
var inst_20236 = (state_20270[(7)]);
var inst_20236__$1 = cljs.core.seq.call(null,inst_20222);
var state_20270__$1 = (function (){var statearr_20294 = state_20270;
(statearr_20294[(7)] = inst_20236__$1);

return statearr_20294;
})();
if(inst_20236__$1){
var statearr_20295_20324 = state_20270__$1;
(statearr_20295_20324[(1)] = (14));

} else {
var statearr_20296_20325 = state_20270__$1;
(statearr_20296_20325[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (9))){
var inst_20258 = (state_20270[(2)]);
var inst_20259 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20270__$1 = (function (){var statearr_20297 = state_20270;
(statearr_20297[(15)] = inst_20258);

return statearr_20297;
})();
if(cljs.core.truth_(inst_20259)){
var statearr_20298_20326 = state_20270__$1;
(statearr_20298_20326[(1)] = (21));

} else {
var statearr_20299_20327 = state_20270__$1;
(statearr_20299_20327[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (5))){
var inst_20214 = cljs.core.async.close_BANG_.call(null,out);
var state_20270__$1 = state_20270;
var statearr_20300_20328 = state_20270__$1;
(statearr_20300_20328[(2)] = inst_20214);

(statearr_20300_20328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (14))){
var inst_20236 = (state_20270[(7)]);
var inst_20238 = cljs.core.chunked_seq_QMARK_.call(null,inst_20236);
var state_20270__$1 = state_20270;
if(inst_20238){
var statearr_20301_20329 = state_20270__$1;
(statearr_20301_20329[(1)] = (17));

} else {
var statearr_20302_20330 = state_20270__$1;
(statearr_20302_20330[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (16))){
var inst_20254 = (state_20270[(2)]);
var state_20270__$1 = state_20270;
var statearr_20303_20331 = state_20270__$1;
(statearr_20303_20331[(2)] = inst_20254);

(statearr_20303_20331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20271 === (10))){
var inst_20225 = (state_20270[(8)]);
var inst_20223 = (state_20270[(12)]);
var inst_20230 = cljs.core._nth.call(null,inst_20223,inst_20225);
var state_20270__$1 = state_20270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20270__$1,(13),out,inst_20230);
} else {
if((state_val_20271 === (18))){
var inst_20236 = (state_20270[(7)]);
var inst_20245 = cljs.core.first.call(null,inst_20236);
var state_20270__$1 = state_20270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20270__$1,(20),out,inst_20245);
} else {
if((state_val_20271 === (8))){
var inst_20225 = (state_20270[(8)]);
var inst_20224 = (state_20270[(9)]);
var inst_20227 = (inst_20225 < inst_20224);
var inst_20228 = inst_20227;
var state_20270__$1 = state_20270;
if(cljs.core.truth_(inst_20228)){
var statearr_20304_20332 = state_20270__$1;
(statearr_20304_20332[(1)] = (10));

} else {
var statearr_20305_20333 = state_20270__$1;
(statearr_20305_20333[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto__))
;
return ((function (switch__16633__auto__,c__16792__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16634__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16634__auto____0 = (function (){
var statearr_20306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20306[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16634__auto__);

(statearr_20306[(1)] = (1));

return statearr_20306;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16634__auto____1 = (function (state_20270){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_20270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e20307){if((e20307 instanceof Object)){
var ex__16637__auto__ = e20307;
var statearr_20308_20334 = state_20270;
(statearr_20308_20334[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20335 = state_20270;
state_20270 = G__20335;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16634__auto__ = function(state_20270){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16634__auto____1.call(this,state_20270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16634__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16634__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto__))
})();
var state__16794__auto__ = (function (){var statearr_20309 = f__16793__auto__.call(null);
(statearr_20309[(6)] = c__16792__auto__);

return statearr_20309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto__))
);

return c__16792__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20337 = arguments.length;
switch (G__20337) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20340 = arguments.length;
switch (G__20340) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20343 = arguments.length;
switch (G__20343) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16792__auto___20390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___20390,out){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___20390,out){
return (function (state_20367){
var state_val_20368 = (state_20367[(1)]);
if((state_val_20368 === (7))){
var inst_20362 = (state_20367[(2)]);
var state_20367__$1 = state_20367;
var statearr_20369_20391 = state_20367__$1;
(statearr_20369_20391[(2)] = inst_20362);

(statearr_20369_20391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20368 === (1))){
var inst_20344 = null;
var state_20367__$1 = (function (){var statearr_20370 = state_20367;
(statearr_20370[(7)] = inst_20344);

return statearr_20370;
})();
var statearr_20371_20392 = state_20367__$1;
(statearr_20371_20392[(2)] = null);

(statearr_20371_20392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20368 === (4))){
var inst_20347 = (state_20367[(8)]);
var inst_20347__$1 = (state_20367[(2)]);
var inst_20348 = (inst_20347__$1 == null);
var inst_20349 = cljs.core.not.call(null,inst_20348);
var state_20367__$1 = (function (){var statearr_20372 = state_20367;
(statearr_20372[(8)] = inst_20347__$1);

return statearr_20372;
})();
if(inst_20349){
var statearr_20373_20393 = state_20367__$1;
(statearr_20373_20393[(1)] = (5));

} else {
var statearr_20374_20394 = state_20367__$1;
(statearr_20374_20394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20368 === (6))){
var state_20367__$1 = state_20367;
var statearr_20375_20395 = state_20367__$1;
(statearr_20375_20395[(2)] = null);

(statearr_20375_20395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20368 === (3))){
var inst_20364 = (state_20367[(2)]);
var inst_20365 = cljs.core.async.close_BANG_.call(null,out);
var state_20367__$1 = (function (){var statearr_20376 = state_20367;
(statearr_20376[(9)] = inst_20364);

return statearr_20376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20367__$1,inst_20365);
} else {
if((state_val_20368 === (2))){
var state_20367__$1 = state_20367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20367__$1,(4),ch);
} else {
if((state_val_20368 === (11))){
var inst_20347 = (state_20367[(8)]);
var inst_20356 = (state_20367[(2)]);
var inst_20344 = inst_20347;
var state_20367__$1 = (function (){var statearr_20377 = state_20367;
(statearr_20377[(7)] = inst_20344);

(statearr_20377[(10)] = inst_20356);

return statearr_20377;
})();
var statearr_20378_20396 = state_20367__$1;
(statearr_20378_20396[(2)] = null);

(statearr_20378_20396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20368 === (9))){
var inst_20347 = (state_20367[(8)]);
var state_20367__$1 = state_20367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20367__$1,(11),out,inst_20347);
} else {
if((state_val_20368 === (5))){
var inst_20344 = (state_20367[(7)]);
var inst_20347 = (state_20367[(8)]);
var inst_20351 = cljs.core._EQ_.call(null,inst_20347,inst_20344);
var state_20367__$1 = state_20367;
if(inst_20351){
var statearr_20380_20397 = state_20367__$1;
(statearr_20380_20397[(1)] = (8));

} else {
var statearr_20381_20398 = state_20367__$1;
(statearr_20381_20398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20368 === (10))){
var inst_20359 = (state_20367[(2)]);
var state_20367__$1 = state_20367;
var statearr_20382_20399 = state_20367__$1;
(statearr_20382_20399[(2)] = inst_20359);

(statearr_20382_20399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20368 === (8))){
var inst_20344 = (state_20367[(7)]);
var tmp20379 = inst_20344;
var inst_20344__$1 = tmp20379;
var state_20367__$1 = (function (){var statearr_20383 = state_20367;
(statearr_20383[(7)] = inst_20344__$1);

return statearr_20383;
})();
var statearr_20384_20400 = state_20367__$1;
(statearr_20384_20400[(2)] = null);

(statearr_20384_20400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___20390,out))
;
return ((function (switch__16633__auto__,c__16792__auto___20390,out){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_20385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20385[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_20385[(1)] = (1));

return statearr_20385;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_20367){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_20367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e20386){if((e20386 instanceof Object)){
var ex__16637__auto__ = e20386;
var statearr_20387_20401 = state_20367;
(statearr_20387_20401[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20402 = state_20367;
state_20367 = G__20402;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_20367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_20367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___20390,out))
})();
var state__16794__auto__ = (function (){var statearr_20388 = f__16793__auto__.call(null);
(statearr_20388[(6)] = c__16792__auto___20390);

return statearr_20388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___20390,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20404 = arguments.length;
switch (G__20404) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16792__auto___20470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___20470,out){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___20470,out){
return (function (state_20442){
var state_val_20443 = (state_20442[(1)]);
if((state_val_20443 === (7))){
var inst_20438 = (state_20442[(2)]);
var state_20442__$1 = state_20442;
var statearr_20444_20471 = state_20442__$1;
(statearr_20444_20471[(2)] = inst_20438);

(statearr_20444_20471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (1))){
var inst_20405 = (new Array(n));
var inst_20406 = inst_20405;
var inst_20407 = (0);
var state_20442__$1 = (function (){var statearr_20445 = state_20442;
(statearr_20445[(7)] = inst_20407);

(statearr_20445[(8)] = inst_20406);

return statearr_20445;
})();
var statearr_20446_20472 = state_20442__$1;
(statearr_20446_20472[(2)] = null);

(statearr_20446_20472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (4))){
var inst_20410 = (state_20442[(9)]);
var inst_20410__$1 = (state_20442[(2)]);
var inst_20411 = (inst_20410__$1 == null);
var inst_20412 = cljs.core.not.call(null,inst_20411);
var state_20442__$1 = (function (){var statearr_20447 = state_20442;
(statearr_20447[(9)] = inst_20410__$1);

return statearr_20447;
})();
if(inst_20412){
var statearr_20448_20473 = state_20442__$1;
(statearr_20448_20473[(1)] = (5));

} else {
var statearr_20449_20474 = state_20442__$1;
(statearr_20449_20474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (15))){
var inst_20432 = (state_20442[(2)]);
var state_20442__$1 = state_20442;
var statearr_20450_20475 = state_20442__$1;
(statearr_20450_20475[(2)] = inst_20432);

(statearr_20450_20475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (13))){
var state_20442__$1 = state_20442;
var statearr_20451_20476 = state_20442__$1;
(statearr_20451_20476[(2)] = null);

(statearr_20451_20476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (6))){
var inst_20407 = (state_20442[(7)]);
var inst_20428 = (inst_20407 > (0));
var state_20442__$1 = state_20442;
if(cljs.core.truth_(inst_20428)){
var statearr_20452_20477 = state_20442__$1;
(statearr_20452_20477[(1)] = (12));

} else {
var statearr_20453_20478 = state_20442__$1;
(statearr_20453_20478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (3))){
var inst_20440 = (state_20442[(2)]);
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20442__$1,inst_20440);
} else {
if((state_val_20443 === (12))){
var inst_20406 = (state_20442[(8)]);
var inst_20430 = cljs.core.vec.call(null,inst_20406);
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20442__$1,(15),out,inst_20430);
} else {
if((state_val_20443 === (2))){
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20442__$1,(4),ch);
} else {
if((state_val_20443 === (11))){
var inst_20422 = (state_20442[(2)]);
var inst_20423 = (new Array(n));
var inst_20406 = inst_20423;
var inst_20407 = (0);
var state_20442__$1 = (function (){var statearr_20454 = state_20442;
(statearr_20454[(7)] = inst_20407);

(statearr_20454[(8)] = inst_20406);

(statearr_20454[(10)] = inst_20422);

return statearr_20454;
})();
var statearr_20455_20479 = state_20442__$1;
(statearr_20455_20479[(2)] = null);

(statearr_20455_20479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (9))){
var inst_20406 = (state_20442[(8)]);
var inst_20420 = cljs.core.vec.call(null,inst_20406);
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20442__$1,(11),out,inst_20420);
} else {
if((state_val_20443 === (5))){
var inst_20407 = (state_20442[(7)]);
var inst_20410 = (state_20442[(9)]);
var inst_20406 = (state_20442[(8)]);
var inst_20415 = (state_20442[(11)]);
var inst_20414 = (inst_20406[inst_20407] = inst_20410);
var inst_20415__$1 = (inst_20407 + (1));
var inst_20416 = (inst_20415__$1 < n);
var state_20442__$1 = (function (){var statearr_20456 = state_20442;
(statearr_20456[(12)] = inst_20414);

(statearr_20456[(11)] = inst_20415__$1);

return statearr_20456;
})();
if(cljs.core.truth_(inst_20416)){
var statearr_20457_20480 = state_20442__$1;
(statearr_20457_20480[(1)] = (8));

} else {
var statearr_20458_20481 = state_20442__$1;
(statearr_20458_20481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (14))){
var inst_20435 = (state_20442[(2)]);
var inst_20436 = cljs.core.async.close_BANG_.call(null,out);
var state_20442__$1 = (function (){var statearr_20460 = state_20442;
(statearr_20460[(13)] = inst_20435);

return statearr_20460;
})();
var statearr_20461_20482 = state_20442__$1;
(statearr_20461_20482[(2)] = inst_20436);

(statearr_20461_20482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (10))){
var inst_20426 = (state_20442[(2)]);
var state_20442__$1 = state_20442;
var statearr_20462_20483 = state_20442__$1;
(statearr_20462_20483[(2)] = inst_20426);

(statearr_20462_20483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20443 === (8))){
var inst_20406 = (state_20442[(8)]);
var inst_20415 = (state_20442[(11)]);
var tmp20459 = inst_20406;
var inst_20406__$1 = tmp20459;
var inst_20407 = inst_20415;
var state_20442__$1 = (function (){var statearr_20463 = state_20442;
(statearr_20463[(7)] = inst_20407);

(statearr_20463[(8)] = inst_20406__$1);

return statearr_20463;
})();
var statearr_20464_20484 = state_20442__$1;
(statearr_20464_20484[(2)] = null);

(statearr_20464_20484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___20470,out))
;
return ((function (switch__16633__auto__,c__16792__auto___20470,out){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_20465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20465[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_20465[(1)] = (1));

return statearr_20465;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_20442){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_20442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e20466){if((e20466 instanceof Object)){
var ex__16637__auto__ = e20466;
var statearr_20467_20485 = state_20442;
(statearr_20467_20485[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20486 = state_20442;
state_20442 = G__20486;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_20442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_20442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___20470,out))
})();
var state__16794__auto__ = (function (){var statearr_20468 = f__16793__auto__.call(null);
(statearr_20468[(6)] = c__16792__auto___20470);

return statearr_20468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___20470,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20488 = arguments.length;
switch (G__20488) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16792__auto___20558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16792__auto___20558,out){
return (function (){
var f__16793__auto__ = (function (){var switch__16633__auto__ = ((function (c__16792__auto___20558,out){
return (function (state_20530){
var state_val_20531 = (state_20530[(1)]);
if((state_val_20531 === (7))){
var inst_20526 = (state_20530[(2)]);
var state_20530__$1 = state_20530;
var statearr_20532_20559 = state_20530__$1;
(statearr_20532_20559[(2)] = inst_20526);

(statearr_20532_20559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (1))){
var inst_20489 = [];
var inst_20490 = inst_20489;
var inst_20491 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20530__$1 = (function (){var statearr_20533 = state_20530;
(statearr_20533[(7)] = inst_20491);

(statearr_20533[(8)] = inst_20490);

return statearr_20533;
})();
var statearr_20534_20560 = state_20530__$1;
(statearr_20534_20560[(2)] = null);

(statearr_20534_20560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (4))){
var inst_20494 = (state_20530[(9)]);
var inst_20494__$1 = (state_20530[(2)]);
var inst_20495 = (inst_20494__$1 == null);
var inst_20496 = cljs.core.not.call(null,inst_20495);
var state_20530__$1 = (function (){var statearr_20535 = state_20530;
(statearr_20535[(9)] = inst_20494__$1);

return statearr_20535;
})();
if(inst_20496){
var statearr_20536_20561 = state_20530__$1;
(statearr_20536_20561[(1)] = (5));

} else {
var statearr_20537_20562 = state_20530__$1;
(statearr_20537_20562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (15))){
var inst_20520 = (state_20530[(2)]);
var state_20530__$1 = state_20530;
var statearr_20538_20563 = state_20530__$1;
(statearr_20538_20563[(2)] = inst_20520);

(statearr_20538_20563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (13))){
var state_20530__$1 = state_20530;
var statearr_20539_20564 = state_20530__$1;
(statearr_20539_20564[(2)] = null);

(statearr_20539_20564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (6))){
var inst_20490 = (state_20530[(8)]);
var inst_20515 = inst_20490.length;
var inst_20516 = (inst_20515 > (0));
var state_20530__$1 = state_20530;
if(cljs.core.truth_(inst_20516)){
var statearr_20540_20565 = state_20530__$1;
(statearr_20540_20565[(1)] = (12));

} else {
var statearr_20541_20566 = state_20530__$1;
(statearr_20541_20566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (3))){
var inst_20528 = (state_20530[(2)]);
var state_20530__$1 = state_20530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20530__$1,inst_20528);
} else {
if((state_val_20531 === (12))){
var inst_20490 = (state_20530[(8)]);
var inst_20518 = cljs.core.vec.call(null,inst_20490);
var state_20530__$1 = state_20530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20530__$1,(15),out,inst_20518);
} else {
if((state_val_20531 === (2))){
var state_20530__$1 = state_20530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20530__$1,(4),ch);
} else {
if((state_val_20531 === (11))){
var inst_20494 = (state_20530[(9)]);
var inst_20498 = (state_20530[(10)]);
var inst_20508 = (state_20530[(2)]);
var inst_20509 = [];
var inst_20510 = inst_20509.push(inst_20494);
var inst_20490 = inst_20509;
var inst_20491 = inst_20498;
var state_20530__$1 = (function (){var statearr_20542 = state_20530;
(statearr_20542[(11)] = inst_20510);

(statearr_20542[(7)] = inst_20491);

(statearr_20542[(8)] = inst_20490);

(statearr_20542[(12)] = inst_20508);

return statearr_20542;
})();
var statearr_20543_20567 = state_20530__$1;
(statearr_20543_20567[(2)] = null);

(statearr_20543_20567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (9))){
var inst_20490 = (state_20530[(8)]);
var inst_20506 = cljs.core.vec.call(null,inst_20490);
var state_20530__$1 = state_20530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20530__$1,(11),out,inst_20506);
} else {
if((state_val_20531 === (5))){
var inst_20491 = (state_20530[(7)]);
var inst_20494 = (state_20530[(9)]);
var inst_20498 = (state_20530[(10)]);
var inst_20498__$1 = f.call(null,inst_20494);
var inst_20499 = cljs.core._EQ_.call(null,inst_20498__$1,inst_20491);
var inst_20500 = cljs.core.keyword_identical_QMARK_.call(null,inst_20491,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20501 = ((inst_20499) || (inst_20500));
var state_20530__$1 = (function (){var statearr_20544 = state_20530;
(statearr_20544[(10)] = inst_20498__$1);

return statearr_20544;
})();
if(cljs.core.truth_(inst_20501)){
var statearr_20545_20568 = state_20530__$1;
(statearr_20545_20568[(1)] = (8));

} else {
var statearr_20546_20569 = state_20530__$1;
(statearr_20546_20569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (14))){
var inst_20523 = (state_20530[(2)]);
var inst_20524 = cljs.core.async.close_BANG_.call(null,out);
var state_20530__$1 = (function (){var statearr_20548 = state_20530;
(statearr_20548[(13)] = inst_20523);

return statearr_20548;
})();
var statearr_20549_20570 = state_20530__$1;
(statearr_20549_20570[(2)] = inst_20524);

(statearr_20549_20570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (10))){
var inst_20513 = (state_20530[(2)]);
var state_20530__$1 = state_20530;
var statearr_20550_20571 = state_20530__$1;
(statearr_20550_20571[(2)] = inst_20513);

(statearr_20550_20571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20531 === (8))){
var inst_20494 = (state_20530[(9)]);
var inst_20498 = (state_20530[(10)]);
var inst_20490 = (state_20530[(8)]);
var inst_20503 = inst_20490.push(inst_20494);
var tmp20547 = inst_20490;
var inst_20490__$1 = tmp20547;
var inst_20491 = inst_20498;
var state_20530__$1 = (function (){var statearr_20551 = state_20530;
(statearr_20551[(7)] = inst_20491);

(statearr_20551[(8)] = inst_20490__$1);

(statearr_20551[(14)] = inst_20503);

return statearr_20551;
})();
var statearr_20552_20572 = state_20530__$1;
(statearr_20552_20572[(2)] = null);

(statearr_20552_20572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16792__auto___20558,out))
;
return ((function (switch__16633__auto__,c__16792__auto___20558,out){
return (function() {
var cljs$core$async$state_machine__16634__auto__ = null;
var cljs$core$async$state_machine__16634__auto____0 = (function (){
var statearr_20553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20553[(0)] = cljs$core$async$state_machine__16634__auto__);

(statearr_20553[(1)] = (1));

return statearr_20553;
});
var cljs$core$async$state_machine__16634__auto____1 = (function (state_20530){
while(true){
var ret_value__16635__auto__ = (function (){try{while(true){
var result__16636__auto__ = switch__16633__auto__.call(null,state_20530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16636__auto__;
}
break;
}
}catch (e20554){if((e20554 instanceof Object)){
var ex__16637__auto__ = e20554;
var statearr_20555_20573 = state_20530;
(statearr_20555_20573[(5)] = ex__16637__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20574 = state_20530;
state_20530 = G__20574;
continue;
} else {
return ret_value__16635__auto__;
}
break;
}
});
cljs$core$async$state_machine__16634__auto__ = function(state_20530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16634__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16634__auto____1.call(this,state_20530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16634__auto____0;
cljs$core$async$state_machine__16634__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16634__auto____1;
return cljs$core$async$state_machine__16634__auto__;
})()
;})(switch__16633__auto__,c__16792__auto___20558,out))
})();
var state__16794__auto__ = (function (){var statearr_20556 = f__16793__auto__.call(null);
(statearr_20556[(6)] = c__16792__auto___20558);

return statearr_20556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16794__auto__);
});})(c__16792__auto___20558,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
