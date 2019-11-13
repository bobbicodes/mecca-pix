// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17762 = arguments.length;
switch (G__17762) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17763 = (function (f,blockable,meta17764){
this.f = f;
this.blockable = blockable;
this.meta17764 = meta17764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17765,meta17764__$1){
var self__ = this;
var _17765__$1 = this;
return (new cljs.core.async.t_cljs$core$async17763(self__.f,self__.blockable,meta17764__$1));
});

cljs.core.async.t_cljs$core$async17763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17765){
var self__ = this;
var _17765__$1 = this;
return self__.meta17764;
});

cljs.core.async.t_cljs$core$async17763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17764], null);
});

cljs.core.async.t_cljs$core$async17763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17763";

cljs.core.async.t_cljs$core$async17763.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17763");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17763.
 */
cljs.core.async.__GT_t_cljs$core$async17763 = (function cljs$core$async$__GT_t_cljs$core$async17763(f__$1,blockable__$1,meta17764){
return (new cljs.core.async.t_cljs$core$async17763(f__$1,blockable__$1,meta17764));
});

}

return (new cljs.core.async.t_cljs$core$async17763(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__17769 = arguments.length;
switch (G__17769) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__17772 = arguments.length;
switch (G__17772) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__17775 = arguments.length;
switch (G__17775) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17777 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17777) : fn1.call(null,val_17777));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17777,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17777) : fn1.call(null,val_17777));
});})(val_17777,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__17779 = arguments.length;
switch (G__17779) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___17781 = n;
var x_17782 = (0);
while(true){
if((x_17782 < n__4408__auto___17781)){
(a[x_17782] = x_17782);

var G__17783 = (x_17782 + (1));
x_17782 = G__17783;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17784 = (function (flag,meta17785){
this.flag = flag;
this.meta17785 = meta17785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17786,meta17785__$1){
var self__ = this;
var _17786__$1 = this;
return (new cljs.core.async.t_cljs$core$async17784(self__.flag,meta17785__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17786){
var self__ = this;
var _17786__$1 = this;
return self__.meta17785;
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17785], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17784";

cljs.core.async.t_cljs$core$async17784.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17784");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17784.
 */
cljs.core.async.__GT_t_cljs$core$async17784 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17784(flag__$1,meta17785){
return (new cljs.core.async.t_cljs$core$async17784(flag__$1,meta17785));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17784(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17787 = (function (flag,cb,meta17788){
this.flag = flag;
this.cb = cb;
this.meta17788 = meta17788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17789,meta17788__$1){
var self__ = this;
var _17789__$1 = this;
return (new cljs.core.async.t_cljs$core$async17787(self__.flag,self__.cb,meta17788__$1));
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17789){
var self__ = this;
var _17789__$1 = this;
return self__.meta17788;
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17788], null);
});

cljs.core.async.t_cljs$core$async17787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17787";

cljs.core.async.t_cljs$core$async17787.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17787");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17787.
 */
cljs.core.async.__GT_t_cljs$core$async17787 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17787(flag__$1,cb__$1,meta17788){
return (new cljs.core.async.t_cljs$core$async17787(flag__$1,cb__$1,meta17788));
});

}

return (new cljs.core.async.t_cljs$core$async17787(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17790_SHARP_){
var G__17792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17790_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17792) : fret.call(null,G__17792));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17791_SHARP_){
var G__17793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17791_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17793) : fret.call(null,G__17793));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17794 = (i + (1));
i = G__17794;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4531__auto___17800 = arguments.length;
var i__4532__auto___17801 = (0);
while(true){
if((i__4532__auto___17801 < len__4531__auto___17800)){
args__4534__auto__.push((arguments[i__4532__auto___17801]));

var G__17802 = (i__4532__auto___17801 + (1));
i__4532__auto___17801 = G__17802;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17797){
var map__17798 = p__17797;
var map__17798__$1 = ((((!((map__17798 == null)))?(((((map__17798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17798):map__17798);
var opts = map__17798__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17795){
var G__17796 = cljs.core.first(seq17795);
var seq17795__$1 = cljs.core.next(seq17795);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17796,seq17795__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__17804 = arguments.length;
switch (G__17804) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15835__auto___17850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___17850){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___17850){
return (function (state_17828){
var state_val_17829 = (state_17828[(1)]);
if((state_val_17829 === (7))){
var inst_17824 = (state_17828[(2)]);
var state_17828__$1 = state_17828;
var statearr_17830_17851 = state_17828__$1;
(statearr_17830_17851[(2)] = inst_17824);

(statearr_17830_17851[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (1))){
var state_17828__$1 = state_17828;
var statearr_17831_17852 = state_17828__$1;
(statearr_17831_17852[(2)] = null);

(statearr_17831_17852[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (4))){
var inst_17807 = (state_17828[(7)]);
var inst_17807__$1 = (state_17828[(2)]);
var inst_17808 = (inst_17807__$1 == null);
var state_17828__$1 = (function (){var statearr_17832 = state_17828;
(statearr_17832[(7)] = inst_17807__$1);

return statearr_17832;
})();
if(cljs.core.truth_(inst_17808)){
var statearr_17833_17853 = state_17828__$1;
(statearr_17833_17853[(1)] = (5));

} else {
var statearr_17834_17854 = state_17828__$1;
(statearr_17834_17854[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (13))){
var state_17828__$1 = state_17828;
var statearr_17835_17855 = state_17828__$1;
(statearr_17835_17855[(2)] = null);

(statearr_17835_17855[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (6))){
var inst_17807 = (state_17828[(7)]);
var state_17828__$1 = state_17828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17828__$1,(11),to,inst_17807);
} else {
if((state_val_17829 === (3))){
var inst_17826 = (state_17828[(2)]);
var state_17828__$1 = state_17828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17828__$1,inst_17826);
} else {
if((state_val_17829 === (12))){
var state_17828__$1 = state_17828;
var statearr_17836_17856 = state_17828__$1;
(statearr_17836_17856[(2)] = null);

(statearr_17836_17856[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (2))){
var state_17828__$1 = state_17828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17828__$1,(4),from);
} else {
if((state_val_17829 === (11))){
var inst_17817 = (state_17828[(2)]);
var state_17828__$1 = state_17828;
if(cljs.core.truth_(inst_17817)){
var statearr_17837_17857 = state_17828__$1;
(statearr_17837_17857[(1)] = (12));

} else {
var statearr_17838_17858 = state_17828__$1;
(statearr_17838_17858[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (9))){
var state_17828__$1 = state_17828;
var statearr_17839_17859 = state_17828__$1;
(statearr_17839_17859[(2)] = null);

(statearr_17839_17859[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (5))){
var state_17828__$1 = state_17828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17840_17860 = state_17828__$1;
(statearr_17840_17860[(1)] = (8));

} else {
var statearr_17841_17861 = state_17828__$1;
(statearr_17841_17861[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (14))){
var inst_17822 = (state_17828[(2)]);
var state_17828__$1 = state_17828;
var statearr_17842_17862 = state_17828__$1;
(statearr_17842_17862[(2)] = inst_17822);

(statearr_17842_17862[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (10))){
var inst_17814 = (state_17828[(2)]);
var state_17828__$1 = state_17828;
var statearr_17843_17863 = state_17828__$1;
(statearr_17843_17863[(2)] = inst_17814);

(statearr_17843_17863[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17829 === (8))){
var inst_17811 = cljs.core.async.close_BANG_(to);
var state_17828__$1 = state_17828;
var statearr_17844_17864 = state_17828__$1;
(statearr_17844_17864[(2)] = inst_17811);

(statearr_17844_17864[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__15835__auto___17850))
;
return ((function (switch__15652__auto__,c__15835__auto___17850){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_17845 = [null,null,null,null,null,null,null,null];
(statearr_17845[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_17845[(1)] = (1));

return statearr_17845;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_17828){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_17828);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17846){if((e17846 instanceof Object)){
var ex__15656__auto__ = e17846;
var statearr_17847_17865 = state_17828;
(statearr_17847_17865[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17828);

return cljs.core.cst$kw$recur;
} else {
throw e17846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__17866 = state_17828;
state_17828 = G__17866;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_17828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_17828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___17850))
})();
var state__15837__auto__ = (function (){var statearr_17848 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_17848[(6)] = c__15835__auto___17850);

return statearr_17848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___17850))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17867){
var vec__17868 = p__17867;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17868,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17868,(1),null);
var job = vec__17868;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15835__auto___18039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___18039,res,vec__17868,v,p,job,jobs,results){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___18039,res,vec__17868,v,p,job,jobs,results){
return (function (state_17875){
var state_val_17876 = (state_17875[(1)]);
if((state_val_17876 === (1))){
var state_17875__$1 = state_17875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17875__$1,(2),res,v);
} else {
if((state_val_17876 === (2))){
var inst_17872 = (state_17875[(2)]);
var inst_17873 = cljs.core.async.close_BANG_(res);
var state_17875__$1 = (function (){var statearr_17877 = state_17875;
(statearr_17877[(7)] = inst_17872);

return statearr_17877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17875__$1,inst_17873);
} else {
return null;
}
}
});})(c__15835__auto___18039,res,vec__17868,v,p,job,jobs,results))
;
return ((function (switch__15652__auto__,c__15835__auto___18039,res,vec__17868,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17878 = [null,null,null,null,null,null,null,null];
(statearr_17878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17878[(1)] = (1));

return statearr_17878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17875){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_17875);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17879){if((e17879 instanceof Object)){
var ex__15656__auto__ = e17879;
var statearr_17880_18040 = state_17875;
(statearr_17880_18040[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17875);

return cljs.core.cst$kw$recur;
} else {
throw e17879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18041 = state_17875;
state_17875 = G__18041;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___18039,res,vec__17868,v,p,job,jobs,results))
})();
var state__15837__auto__ = (function (){var statearr_17881 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_17881[(6)] = c__15835__auto___18039);

return statearr_17881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___18039,res,vec__17868,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17882){
var vec__17883 = p__17882;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(1),null);
var job = vec__17883;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18042 = n;
var __18043 = (0);
while(true){
if((__18043 < n__4408__auto___18042)){
var G__17886_18044 = type;
var G__17886_18045__$1 = (((G__17886_18044 instanceof cljs.core.Keyword))?G__17886_18044.fqn:null);
switch (G__17886_18045__$1) {
case "compute":
var c__15835__auto___18047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18043,c__15835__auto___18047,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (__18043,c__15835__auto___18047,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async){
return (function (state_17899){
var state_val_17900 = (state_17899[(1)]);
if((state_val_17900 === (1))){
var state_17899__$1 = state_17899;
var statearr_17901_18048 = state_17899__$1;
(statearr_17901_18048[(2)] = null);

(statearr_17901_18048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17900 === (2))){
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17899__$1,(4),jobs);
} else {
if((state_val_17900 === (3))){
var inst_17897 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17899__$1,inst_17897);
} else {
if((state_val_17900 === (4))){
var inst_17889 = (state_17899[(2)]);
var inst_17890 = process(inst_17889);
var state_17899__$1 = state_17899;
if(cljs.core.truth_(inst_17890)){
var statearr_17902_18049 = state_17899__$1;
(statearr_17902_18049[(1)] = (5));

} else {
var statearr_17903_18050 = state_17899__$1;
(statearr_17903_18050[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17900 === (5))){
var state_17899__$1 = state_17899;
var statearr_17904_18051 = state_17899__$1;
(statearr_17904_18051[(2)] = null);

(statearr_17904_18051[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17900 === (6))){
var state_17899__$1 = state_17899;
var statearr_17905_18052 = state_17899__$1;
(statearr_17905_18052[(2)] = null);

(statearr_17905_18052[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17900 === (7))){
var inst_17895 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17906_18053 = state_17899__$1;
(statearr_17906_18053[(2)] = inst_17895);

(statearr_17906_18053[(1)] = (3));


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
});})(__18043,c__15835__auto___18047,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async))
;
return ((function (__18043,switch__15652__auto__,c__15835__auto___18047,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17907 = [null,null,null,null,null,null,null];
(statearr_17907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17907[(1)] = (1));

return statearr_17907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17899){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_17899);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17908){if((e17908 instanceof Object)){
var ex__15656__auto__ = e17908;
var statearr_17909_18054 = state_17899;
(statearr_17909_18054[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17899);

return cljs.core.cst$kw$recur;
} else {
throw e17908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18055 = state_17899;
state_17899 = G__18055;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
;})(__18043,switch__15652__auto__,c__15835__auto___18047,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async))
})();
var state__15837__auto__ = (function (){var statearr_17910 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_17910[(6)] = c__15835__auto___18047);

return statearr_17910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(__18043,c__15835__auto___18047,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async))
);


break;
case "async":
var c__15835__auto___18056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18043,c__15835__auto___18056,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (__18043,c__15835__auto___18056,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async){
return (function (state_17923){
var state_val_17924 = (state_17923[(1)]);
if((state_val_17924 === (1))){
var state_17923__$1 = state_17923;
var statearr_17925_18057 = state_17923__$1;
(statearr_17925_18057[(2)] = null);

(statearr_17925_18057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17924 === (2))){
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17923__$1,(4),jobs);
} else {
if((state_val_17924 === (3))){
var inst_17921 = (state_17923[(2)]);
var state_17923__$1 = state_17923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17923__$1,inst_17921);
} else {
if((state_val_17924 === (4))){
var inst_17913 = (state_17923[(2)]);
var inst_17914 = async(inst_17913);
var state_17923__$1 = state_17923;
if(cljs.core.truth_(inst_17914)){
var statearr_17926_18058 = state_17923__$1;
(statearr_17926_18058[(1)] = (5));

} else {
var statearr_17927_18059 = state_17923__$1;
(statearr_17927_18059[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17924 === (5))){
var state_17923__$1 = state_17923;
var statearr_17928_18060 = state_17923__$1;
(statearr_17928_18060[(2)] = null);

(statearr_17928_18060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17924 === (6))){
var state_17923__$1 = state_17923;
var statearr_17929_18061 = state_17923__$1;
(statearr_17929_18061[(2)] = null);

(statearr_17929_18061[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17924 === (7))){
var inst_17919 = (state_17923[(2)]);
var state_17923__$1 = state_17923;
var statearr_17930_18062 = state_17923__$1;
(statearr_17930_18062[(2)] = inst_17919);

(statearr_17930_18062[(1)] = (3));


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
});})(__18043,c__15835__auto___18056,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async))
;
return ((function (__18043,switch__15652__auto__,c__15835__auto___18056,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17931 = [null,null,null,null,null,null,null];
(statearr_17931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17931[(1)] = (1));

return statearr_17931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17923){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_17923);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17932){if((e17932 instanceof Object)){
var ex__15656__auto__ = e17932;
var statearr_17933_18063 = state_17923;
(statearr_17933_18063[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17923);

return cljs.core.cst$kw$recur;
} else {
throw e17932;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18064 = state_17923;
state_17923 = G__18064;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
;})(__18043,switch__15652__auto__,c__15835__auto___18056,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async))
})();
var state__15837__auto__ = (function (){var statearr_17934 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_17934[(6)] = c__15835__auto___18056);

return statearr_17934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(__18043,c__15835__auto___18056,G__17886_18044,G__17886_18045__$1,n__4408__auto___18042,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17886_18045__$1)].join('')));

}

var G__18065 = (__18043 + (1));
__18043 = G__18065;
continue;
} else {
}
break;
}

var c__15835__auto___18066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___18066,jobs,results,process,async){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___18066,jobs,results,process,async){
return (function (state_17956){
var state_val_17957 = (state_17956[(1)]);
if((state_val_17957 === (1))){
var state_17956__$1 = state_17956;
var statearr_17958_18067 = state_17956__$1;
(statearr_17958_18067[(2)] = null);

(statearr_17958_18067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17957 === (2))){
var state_17956__$1 = state_17956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17956__$1,(4),from);
} else {
if((state_val_17957 === (3))){
var inst_17954 = (state_17956[(2)]);
var state_17956__$1 = state_17956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17956__$1,inst_17954);
} else {
if((state_val_17957 === (4))){
var inst_17937 = (state_17956[(7)]);
var inst_17937__$1 = (state_17956[(2)]);
var inst_17938 = (inst_17937__$1 == null);
var state_17956__$1 = (function (){var statearr_17959 = state_17956;
(statearr_17959[(7)] = inst_17937__$1);

return statearr_17959;
})();
if(cljs.core.truth_(inst_17938)){
var statearr_17960_18068 = state_17956__$1;
(statearr_17960_18068[(1)] = (5));

} else {
var statearr_17961_18069 = state_17956__$1;
(statearr_17961_18069[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17957 === (5))){
var inst_17940 = cljs.core.async.close_BANG_(jobs);
var state_17956__$1 = state_17956;
var statearr_17962_18070 = state_17956__$1;
(statearr_17962_18070[(2)] = inst_17940);

(statearr_17962_18070[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17957 === (6))){
var inst_17937 = (state_17956[(7)]);
var inst_17942 = (state_17956[(8)]);
var inst_17942__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17944 = [inst_17937,inst_17942__$1];
var inst_17945 = (new cljs.core.PersistentVector(null,2,(5),inst_17943,inst_17944,null));
var state_17956__$1 = (function (){var statearr_17963 = state_17956;
(statearr_17963[(8)] = inst_17942__$1);

return statearr_17963;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17956__$1,(8),jobs,inst_17945);
} else {
if((state_val_17957 === (7))){
var inst_17952 = (state_17956[(2)]);
var state_17956__$1 = state_17956;
var statearr_17964_18071 = state_17956__$1;
(statearr_17964_18071[(2)] = inst_17952);

(statearr_17964_18071[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17957 === (8))){
var inst_17942 = (state_17956[(8)]);
var inst_17947 = (state_17956[(2)]);
var state_17956__$1 = (function (){var statearr_17965 = state_17956;
(statearr_17965[(9)] = inst_17947);

return statearr_17965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17956__$1,(9),results,inst_17942);
} else {
if((state_val_17957 === (9))){
var inst_17949 = (state_17956[(2)]);
var state_17956__$1 = (function (){var statearr_17966 = state_17956;
(statearr_17966[(10)] = inst_17949);

return statearr_17966;
})();
var statearr_17967_18072 = state_17956__$1;
(statearr_17967_18072[(2)] = null);

(statearr_17967_18072[(1)] = (2));


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
}
}
});})(c__15835__auto___18066,jobs,results,process,async))
;
return ((function (switch__15652__auto__,c__15835__auto___18066,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17968[(1)] = (1));

return statearr_17968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17956){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_17956);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17969){if((e17969 instanceof Object)){
var ex__15656__auto__ = e17969;
var statearr_17970_18073 = state_17956;
(statearr_17970_18073[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17956);

return cljs.core.cst$kw$recur;
} else {
throw e17969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18074 = state_17956;
state_17956 = G__18074;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___18066,jobs,results,process,async))
})();
var state__15837__auto__ = (function (){var statearr_17971 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_17971[(6)] = c__15835__auto___18066);

return statearr_17971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___18066,jobs,results,process,async))
);


var c__15835__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto__,jobs,results,process,async){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto__,jobs,results,process,async){
return (function (state_18009){
var state_val_18010 = (state_18009[(1)]);
if((state_val_18010 === (7))){
var inst_18005 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18011_18075 = state_18009__$1;
(statearr_18011_18075[(2)] = inst_18005);

(statearr_18011_18075[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (20))){
var state_18009__$1 = state_18009;
var statearr_18012_18076 = state_18009__$1;
(statearr_18012_18076[(2)] = null);

(statearr_18012_18076[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (1))){
var state_18009__$1 = state_18009;
var statearr_18013_18077 = state_18009__$1;
(statearr_18013_18077[(2)] = null);

(statearr_18013_18077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (4))){
var inst_17974 = (state_18009[(7)]);
var inst_17974__$1 = (state_18009[(2)]);
var inst_17975 = (inst_17974__$1 == null);
var state_18009__$1 = (function (){var statearr_18014 = state_18009;
(statearr_18014[(7)] = inst_17974__$1);

return statearr_18014;
})();
if(cljs.core.truth_(inst_17975)){
var statearr_18015_18078 = state_18009__$1;
(statearr_18015_18078[(1)] = (5));

} else {
var statearr_18016_18079 = state_18009__$1;
(statearr_18016_18079[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (15))){
var inst_17987 = (state_18009[(8)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18009__$1,(18),to,inst_17987);
} else {
if((state_val_18010 === (21))){
var inst_18000 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18017_18080 = state_18009__$1;
(statearr_18017_18080[(2)] = inst_18000);

(statearr_18017_18080[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (13))){
var inst_18002 = (state_18009[(2)]);
var state_18009__$1 = (function (){var statearr_18018 = state_18009;
(statearr_18018[(9)] = inst_18002);

return statearr_18018;
})();
var statearr_18019_18081 = state_18009__$1;
(statearr_18019_18081[(2)] = null);

(statearr_18019_18081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (6))){
var inst_17974 = (state_18009[(7)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18009__$1,(11),inst_17974);
} else {
if((state_val_18010 === (17))){
var inst_17995 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
if(cljs.core.truth_(inst_17995)){
var statearr_18020_18082 = state_18009__$1;
(statearr_18020_18082[(1)] = (19));

} else {
var statearr_18021_18083 = state_18009__$1;
(statearr_18021_18083[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (3))){
var inst_18007 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18009__$1,inst_18007);
} else {
if((state_val_18010 === (12))){
var inst_17984 = (state_18009[(10)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18009__$1,(14),inst_17984);
} else {
if((state_val_18010 === (2))){
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18009__$1,(4),results);
} else {
if((state_val_18010 === (19))){
var state_18009__$1 = state_18009;
var statearr_18022_18084 = state_18009__$1;
(statearr_18022_18084[(2)] = null);

(statearr_18022_18084[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (11))){
var inst_17984 = (state_18009[(2)]);
var state_18009__$1 = (function (){var statearr_18023 = state_18009;
(statearr_18023[(10)] = inst_17984);

return statearr_18023;
})();
var statearr_18024_18085 = state_18009__$1;
(statearr_18024_18085[(2)] = null);

(statearr_18024_18085[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (9))){
var state_18009__$1 = state_18009;
var statearr_18025_18086 = state_18009__$1;
(statearr_18025_18086[(2)] = null);

(statearr_18025_18086[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (5))){
var state_18009__$1 = state_18009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18026_18087 = state_18009__$1;
(statearr_18026_18087[(1)] = (8));

} else {
var statearr_18027_18088 = state_18009__$1;
(statearr_18027_18088[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (14))){
var inst_17987 = (state_18009[(8)]);
var inst_17989 = (state_18009[(11)]);
var inst_17987__$1 = (state_18009[(2)]);
var inst_17988 = (inst_17987__$1 == null);
var inst_17989__$1 = cljs.core.not(inst_17988);
var state_18009__$1 = (function (){var statearr_18028 = state_18009;
(statearr_18028[(8)] = inst_17987__$1);

(statearr_18028[(11)] = inst_17989__$1);

return statearr_18028;
})();
if(inst_17989__$1){
var statearr_18029_18089 = state_18009__$1;
(statearr_18029_18089[(1)] = (15));

} else {
var statearr_18030_18090 = state_18009__$1;
(statearr_18030_18090[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (16))){
var inst_17989 = (state_18009[(11)]);
var state_18009__$1 = state_18009;
var statearr_18031_18091 = state_18009__$1;
(statearr_18031_18091[(2)] = inst_17989);

(statearr_18031_18091[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (10))){
var inst_17981 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18032_18092 = state_18009__$1;
(statearr_18032_18092[(2)] = inst_17981);

(statearr_18032_18092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (18))){
var inst_17992 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18033_18093 = state_18009__$1;
(statearr_18033_18093[(2)] = inst_17992);

(statearr_18033_18093[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (8))){
var inst_17978 = cljs.core.async.close_BANG_(to);
var state_18009__$1 = state_18009;
var statearr_18034_18094 = state_18009__$1;
(statearr_18034_18094[(2)] = inst_17978);

(statearr_18034_18094[(1)] = (10));


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
});})(c__15835__auto__,jobs,results,process,async))
;
return ((function (switch__15652__auto__,c__15835__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_18035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_18035[(1)] = (1));

return statearr_18035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_18009){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18009);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18036){if((e18036 instanceof Object)){
var ex__15656__auto__ = e18036;
var statearr_18037_18095 = state_18009;
(statearr_18037_18095[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18009);

return cljs.core.cst$kw$recur;
} else {
throw e18036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18096 = state_18009;
state_18009 = G__18096;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_18009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_18009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto__,jobs,results,process,async))
})();
var state__15837__auto__ = (function (){var statearr_18038 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18038[(6)] = c__15835__auto__);

return statearr_18038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto__,jobs,results,process,async))
);

return c__15835__auto__;
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
var G__18098 = arguments.length;
switch (G__18098) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__18101 = arguments.length;
switch (G__18101) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__18104 = arguments.length;
switch (G__18104) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15835__auto___18153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___18153,tc,fc){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___18153,tc,fc){
return (function (state_18130){
var state_val_18131 = (state_18130[(1)]);
if((state_val_18131 === (7))){
var inst_18126 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
var statearr_18132_18154 = state_18130__$1;
(statearr_18132_18154[(2)] = inst_18126);

(statearr_18132_18154[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (1))){
var state_18130__$1 = state_18130;
var statearr_18133_18155 = state_18130__$1;
(statearr_18133_18155[(2)] = null);

(statearr_18133_18155[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (4))){
var inst_18107 = (state_18130[(7)]);
var inst_18107__$1 = (state_18130[(2)]);
var inst_18108 = (inst_18107__$1 == null);
var state_18130__$1 = (function (){var statearr_18134 = state_18130;
(statearr_18134[(7)] = inst_18107__$1);

return statearr_18134;
})();
if(cljs.core.truth_(inst_18108)){
var statearr_18135_18156 = state_18130__$1;
(statearr_18135_18156[(1)] = (5));

} else {
var statearr_18136_18157 = state_18130__$1;
(statearr_18136_18157[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (13))){
var state_18130__$1 = state_18130;
var statearr_18137_18158 = state_18130__$1;
(statearr_18137_18158[(2)] = null);

(statearr_18137_18158[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (6))){
var inst_18107 = (state_18130[(7)]);
var inst_18113 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18107) : p.call(null,inst_18107));
var state_18130__$1 = state_18130;
if(cljs.core.truth_(inst_18113)){
var statearr_18138_18159 = state_18130__$1;
(statearr_18138_18159[(1)] = (9));

} else {
var statearr_18139_18160 = state_18130__$1;
(statearr_18139_18160[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (3))){
var inst_18128 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18130__$1,inst_18128);
} else {
if((state_val_18131 === (12))){
var state_18130__$1 = state_18130;
var statearr_18140_18161 = state_18130__$1;
(statearr_18140_18161[(2)] = null);

(statearr_18140_18161[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (2))){
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18130__$1,(4),ch);
} else {
if((state_val_18131 === (11))){
var inst_18107 = (state_18130[(7)]);
var inst_18117 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18130__$1,(8),inst_18117,inst_18107);
} else {
if((state_val_18131 === (9))){
var state_18130__$1 = state_18130;
var statearr_18141_18162 = state_18130__$1;
(statearr_18141_18162[(2)] = tc);

(statearr_18141_18162[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (5))){
var inst_18110 = cljs.core.async.close_BANG_(tc);
var inst_18111 = cljs.core.async.close_BANG_(fc);
var state_18130__$1 = (function (){var statearr_18142 = state_18130;
(statearr_18142[(8)] = inst_18110);

return statearr_18142;
})();
var statearr_18143_18163 = state_18130__$1;
(statearr_18143_18163[(2)] = inst_18111);

(statearr_18143_18163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (14))){
var inst_18124 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
var statearr_18144_18164 = state_18130__$1;
(statearr_18144_18164[(2)] = inst_18124);

(statearr_18144_18164[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (10))){
var state_18130__$1 = state_18130;
var statearr_18145_18165 = state_18130__$1;
(statearr_18145_18165[(2)] = fc);

(statearr_18145_18165[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18131 === (8))){
var inst_18119 = (state_18130[(2)]);
var state_18130__$1 = state_18130;
if(cljs.core.truth_(inst_18119)){
var statearr_18146_18166 = state_18130__$1;
(statearr_18146_18166[(1)] = (12));

} else {
var statearr_18147_18167 = state_18130__$1;
(statearr_18147_18167[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__15835__auto___18153,tc,fc))
;
return ((function (switch__15652__auto__,c__15835__auto___18153,tc,fc){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_18148 = [null,null,null,null,null,null,null,null,null];
(statearr_18148[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_18148[(1)] = (1));

return statearr_18148;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_18130){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18130);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18149){if((e18149 instanceof Object)){
var ex__15656__auto__ = e18149;
var statearr_18150_18168 = state_18130;
(statearr_18150_18168[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18130);

return cljs.core.cst$kw$recur;
} else {
throw e18149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18169 = state_18130;
state_18130 = G__18169;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_18130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_18130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___18153,tc,fc))
})();
var state__15837__auto__ = (function (){var statearr_18151 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18151[(6)] = c__15835__auto___18153);

return statearr_18151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___18153,tc,fc))
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
var c__15835__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto__){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto__){
return (function (state_18190){
var state_val_18191 = (state_18190[(1)]);
if((state_val_18191 === (7))){
var inst_18186 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18192_18210 = state_18190__$1;
(statearr_18192_18210[(2)] = inst_18186);

(statearr_18192_18210[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18191 === (1))){
var inst_18170 = init;
var state_18190__$1 = (function (){var statearr_18193 = state_18190;
(statearr_18193[(7)] = inst_18170);

return statearr_18193;
})();
var statearr_18194_18211 = state_18190__$1;
(statearr_18194_18211[(2)] = null);

(statearr_18194_18211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18191 === (4))){
var inst_18173 = (state_18190[(8)]);
var inst_18173__$1 = (state_18190[(2)]);
var inst_18174 = (inst_18173__$1 == null);
var state_18190__$1 = (function (){var statearr_18195 = state_18190;
(statearr_18195[(8)] = inst_18173__$1);

return statearr_18195;
})();
if(cljs.core.truth_(inst_18174)){
var statearr_18196_18212 = state_18190__$1;
(statearr_18196_18212[(1)] = (5));

} else {
var statearr_18197_18213 = state_18190__$1;
(statearr_18197_18213[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18191 === (6))){
var inst_18173 = (state_18190[(8)]);
var inst_18170 = (state_18190[(7)]);
var inst_18177 = (state_18190[(9)]);
var inst_18177__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18170,inst_18173) : f.call(null,inst_18170,inst_18173));
var inst_18178 = cljs.core.reduced_QMARK_(inst_18177__$1);
var state_18190__$1 = (function (){var statearr_18198 = state_18190;
(statearr_18198[(9)] = inst_18177__$1);

return statearr_18198;
})();
if(inst_18178){
var statearr_18199_18214 = state_18190__$1;
(statearr_18199_18214[(1)] = (8));

} else {
var statearr_18200_18215 = state_18190__$1;
(statearr_18200_18215[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18191 === (3))){
var inst_18188 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18190__$1,inst_18188);
} else {
if((state_val_18191 === (2))){
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18190__$1,(4),ch);
} else {
if((state_val_18191 === (9))){
var inst_18177 = (state_18190[(9)]);
var inst_18170 = inst_18177;
var state_18190__$1 = (function (){var statearr_18201 = state_18190;
(statearr_18201[(7)] = inst_18170);

return statearr_18201;
})();
var statearr_18202_18216 = state_18190__$1;
(statearr_18202_18216[(2)] = null);

(statearr_18202_18216[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18191 === (5))){
var inst_18170 = (state_18190[(7)]);
var state_18190__$1 = state_18190;
var statearr_18203_18217 = state_18190__$1;
(statearr_18203_18217[(2)] = inst_18170);

(statearr_18203_18217[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18191 === (10))){
var inst_18184 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18204_18218 = state_18190__$1;
(statearr_18204_18218[(2)] = inst_18184);

(statearr_18204_18218[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18191 === (8))){
var inst_18177 = (state_18190[(9)]);
var inst_18180 = cljs.core.deref(inst_18177);
var state_18190__$1 = state_18190;
var statearr_18205_18219 = state_18190__$1;
(statearr_18205_18219[(2)] = inst_18180);

(statearr_18205_18219[(1)] = (10));


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
}
}
}
});})(c__15835__auto__))
;
return ((function (switch__15652__auto__,c__15835__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15653__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15653__auto____0 = (function (){
var statearr_18206 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18206[(0)] = cljs$core$async$reduce_$_state_machine__15653__auto__);

(statearr_18206[(1)] = (1));

return statearr_18206;
});
var cljs$core$async$reduce_$_state_machine__15653__auto____1 = (function (state_18190){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18190);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18207){if((e18207 instanceof Object)){
var ex__15656__auto__ = e18207;
var statearr_18208_18220 = state_18190;
(statearr_18208_18220[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18190);

return cljs.core.cst$kw$recur;
} else {
throw e18207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18221 = state_18190;
state_18190 = G__18221;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15653__auto__ = function(state_18190){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15653__auto____1.call(this,state_18190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15653__auto____0;
cljs$core$async$reduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15653__auto____1;
return cljs$core$async$reduce_$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto__))
})();
var state__15837__auto__ = (function (){var statearr_18209 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18209[(6)] = c__15835__auto__);

return statearr_18209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto__))
);

return c__15835__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15835__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto__,f__$1){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto__,f__$1){
return (function (state_18227){
var state_val_18228 = (state_18227[(1)]);
if((state_val_18228 === (1))){
var inst_18222 = cljs.core.async.reduce(f__$1,init,ch);
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18227__$1,(2),inst_18222);
} else {
if((state_val_18228 === (2))){
var inst_18224 = (state_18227[(2)]);
var inst_18225 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18224) : f__$1.call(null,inst_18224));
var state_18227__$1 = state_18227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18227__$1,inst_18225);
} else {
return null;
}
}
});})(c__15835__auto__,f__$1))
;
return ((function (switch__15652__auto__,c__15835__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15653__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15653__auto____0 = (function (){
var statearr_18229 = [null,null,null,null,null,null,null];
(statearr_18229[(0)] = cljs$core$async$transduce_$_state_machine__15653__auto__);

(statearr_18229[(1)] = (1));

return statearr_18229;
});
var cljs$core$async$transduce_$_state_machine__15653__auto____1 = (function (state_18227){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18227);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18230){if((e18230 instanceof Object)){
var ex__15656__auto__ = e18230;
var statearr_18231_18233 = state_18227;
(statearr_18231_18233[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18227);

return cljs.core.cst$kw$recur;
} else {
throw e18230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18234 = state_18227;
state_18227 = G__18234;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15653__auto__ = function(state_18227){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15653__auto____1.call(this,state_18227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15653__auto____0;
cljs$core$async$transduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15653__auto____1;
return cljs$core$async$transduce_$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto__,f__$1))
})();
var state__15837__auto__ = (function (){var statearr_18232 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18232[(6)] = c__15835__auto__);

return statearr_18232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto__,f__$1))
);

return c__15835__auto__;
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
var G__18236 = arguments.length;
switch (G__18236) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15835__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto__){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto__){
return (function (state_18261){
var state_val_18262 = (state_18261[(1)]);
if((state_val_18262 === (7))){
var inst_18243 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
var statearr_18263_18284 = state_18261__$1;
(statearr_18263_18284[(2)] = inst_18243);

(statearr_18263_18284[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (1))){
var inst_18237 = cljs.core.seq(coll);
var inst_18238 = inst_18237;
var state_18261__$1 = (function (){var statearr_18264 = state_18261;
(statearr_18264[(7)] = inst_18238);

return statearr_18264;
})();
var statearr_18265_18285 = state_18261__$1;
(statearr_18265_18285[(2)] = null);

(statearr_18265_18285[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (4))){
var inst_18238 = (state_18261[(7)]);
var inst_18241 = cljs.core.first(inst_18238);
var state_18261__$1 = state_18261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18261__$1,(7),ch,inst_18241);
} else {
if((state_val_18262 === (13))){
var inst_18255 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
var statearr_18266_18286 = state_18261__$1;
(statearr_18266_18286[(2)] = inst_18255);

(statearr_18266_18286[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (6))){
var inst_18246 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
if(cljs.core.truth_(inst_18246)){
var statearr_18267_18287 = state_18261__$1;
(statearr_18267_18287[(1)] = (8));

} else {
var statearr_18268_18288 = state_18261__$1;
(statearr_18268_18288[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (3))){
var inst_18259 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18261__$1,inst_18259);
} else {
if((state_val_18262 === (12))){
var state_18261__$1 = state_18261;
var statearr_18269_18289 = state_18261__$1;
(statearr_18269_18289[(2)] = null);

(statearr_18269_18289[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (2))){
var inst_18238 = (state_18261[(7)]);
var state_18261__$1 = state_18261;
if(cljs.core.truth_(inst_18238)){
var statearr_18270_18290 = state_18261__$1;
(statearr_18270_18290[(1)] = (4));

} else {
var statearr_18271_18291 = state_18261__$1;
(statearr_18271_18291[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (11))){
var inst_18252 = cljs.core.async.close_BANG_(ch);
var state_18261__$1 = state_18261;
var statearr_18272_18292 = state_18261__$1;
(statearr_18272_18292[(2)] = inst_18252);

(statearr_18272_18292[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (9))){
var state_18261__$1 = state_18261;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18273_18293 = state_18261__$1;
(statearr_18273_18293[(1)] = (11));

} else {
var statearr_18274_18294 = state_18261__$1;
(statearr_18274_18294[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (5))){
var inst_18238 = (state_18261[(7)]);
var state_18261__$1 = state_18261;
var statearr_18275_18295 = state_18261__$1;
(statearr_18275_18295[(2)] = inst_18238);

(statearr_18275_18295[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (10))){
var inst_18257 = (state_18261[(2)]);
var state_18261__$1 = state_18261;
var statearr_18276_18296 = state_18261__$1;
(statearr_18276_18296[(2)] = inst_18257);

(statearr_18276_18296[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18262 === (8))){
var inst_18238 = (state_18261[(7)]);
var inst_18248 = cljs.core.next(inst_18238);
var inst_18238__$1 = inst_18248;
var state_18261__$1 = (function (){var statearr_18277 = state_18261;
(statearr_18277[(7)] = inst_18238__$1);

return statearr_18277;
})();
var statearr_18278_18297 = state_18261__$1;
(statearr_18278_18297[(2)] = null);

(statearr_18278_18297[(1)] = (2));


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
}
}
}
}
}
}
});})(c__15835__auto__))
;
return ((function (switch__15652__auto__,c__15835__auto__){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_18279 = [null,null,null,null,null,null,null,null];
(statearr_18279[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_18279[(1)] = (1));

return statearr_18279;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_18261){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18261);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18280){if((e18280 instanceof Object)){
var ex__15656__auto__ = e18280;
var statearr_18281_18298 = state_18261;
(statearr_18281_18298[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18261);

return cljs.core.cst$kw$recur;
} else {
throw e18280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18299 = state_18261;
state_18261 = G__18299;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_18261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_18261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto__))
})();
var state__15837__auto__ = (function (){var statearr_18282 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18282[(6)] = c__15835__auto__);

return statearr_18282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto__))
);

return c__15835__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18300 = (function (ch,cs,meta18301){
this.ch = ch;
this.cs = cs;
this.meta18301 = meta18301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18302,meta18301__$1){
var self__ = this;
var _18302__$1 = this;
return (new cljs.core.async.t_cljs$core$async18300(self__.ch,self__.cs,meta18301__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18302){
var self__ = this;
var _18302__$1 = this;
return self__.meta18301;
});})(cs))
;

cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18300.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18300.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18301], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18300";

cljs.core.async.t_cljs$core$async18300.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18300");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18300.
 */
cljs.core.async.__GT_t_cljs$core$async18300 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18300(ch__$1,cs__$1,meta18301){
return (new cljs.core.async.t_cljs$core$async18300(ch__$1,cs__$1,meta18301));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18300(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15835__auto___18522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___18522,cs,m,dchan,dctr,done){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___18522,cs,m,dchan,dctr,done){
return (function (state_18437){
var state_val_18438 = (state_18437[(1)]);
if((state_val_18438 === (7))){
var inst_18433 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18439_18523 = state_18437__$1;
(statearr_18439_18523[(2)] = inst_18433);

(statearr_18439_18523[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (20))){
var inst_18336 = (state_18437[(7)]);
var inst_18348 = cljs.core.first(inst_18336);
var inst_18349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18348,(0),null);
var inst_18350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18348,(1),null);
var state_18437__$1 = (function (){var statearr_18440 = state_18437;
(statearr_18440[(8)] = inst_18349);

return statearr_18440;
})();
if(cljs.core.truth_(inst_18350)){
var statearr_18441_18524 = state_18437__$1;
(statearr_18441_18524[(1)] = (22));

} else {
var statearr_18442_18525 = state_18437__$1;
(statearr_18442_18525[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (27))){
var inst_18305 = (state_18437[(9)]);
var inst_18380 = (state_18437[(10)]);
var inst_18385 = (state_18437[(11)]);
var inst_18378 = (state_18437[(12)]);
var inst_18385__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18378,inst_18380);
var inst_18386 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18385__$1,inst_18305,done);
var state_18437__$1 = (function (){var statearr_18443 = state_18437;
(statearr_18443[(11)] = inst_18385__$1);

return statearr_18443;
})();
if(cljs.core.truth_(inst_18386)){
var statearr_18444_18526 = state_18437__$1;
(statearr_18444_18526[(1)] = (30));

} else {
var statearr_18445_18527 = state_18437__$1;
(statearr_18445_18527[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (1))){
var state_18437__$1 = state_18437;
var statearr_18446_18528 = state_18437__$1;
(statearr_18446_18528[(2)] = null);

(statearr_18446_18528[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (24))){
var inst_18336 = (state_18437[(7)]);
var inst_18355 = (state_18437[(2)]);
var inst_18356 = cljs.core.next(inst_18336);
var inst_18314 = inst_18356;
var inst_18315 = null;
var inst_18316 = (0);
var inst_18317 = (0);
var state_18437__$1 = (function (){var statearr_18447 = state_18437;
(statearr_18447[(13)] = inst_18355);

(statearr_18447[(14)] = inst_18315);

(statearr_18447[(15)] = inst_18317);

(statearr_18447[(16)] = inst_18314);

(statearr_18447[(17)] = inst_18316);

return statearr_18447;
})();
var statearr_18448_18529 = state_18437__$1;
(statearr_18448_18529[(2)] = null);

(statearr_18448_18529[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (39))){
var state_18437__$1 = state_18437;
var statearr_18452_18530 = state_18437__$1;
(statearr_18452_18530[(2)] = null);

(statearr_18452_18530[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (4))){
var inst_18305 = (state_18437[(9)]);
var inst_18305__$1 = (state_18437[(2)]);
var inst_18306 = (inst_18305__$1 == null);
var state_18437__$1 = (function (){var statearr_18453 = state_18437;
(statearr_18453[(9)] = inst_18305__$1);

return statearr_18453;
})();
if(cljs.core.truth_(inst_18306)){
var statearr_18454_18531 = state_18437__$1;
(statearr_18454_18531[(1)] = (5));

} else {
var statearr_18455_18532 = state_18437__$1;
(statearr_18455_18532[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (15))){
var inst_18315 = (state_18437[(14)]);
var inst_18317 = (state_18437[(15)]);
var inst_18314 = (state_18437[(16)]);
var inst_18316 = (state_18437[(17)]);
var inst_18332 = (state_18437[(2)]);
var inst_18333 = (inst_18317 + (1));
var tmp18449 = inst_18315;
var tmp18450 = inst_18314;
var tmp18451 = inst_18316;
var inst_18314__$1 = tmp18450;
var inst_18315__$1 = tmp18449;
var inst_18316__$1 = tmp18451;
var inst_18317__$1 = inst_18333;
var state_18437__$1 = (function (){var statearr_18456 = state_18437;
(statearr_18456[(14)] = inst_18315__$1);

(statearr_18456[(15)] = inst_18317__$1);

(statearr_18456[(18)] = inst_18332);

(statearr_18456[(16)] = inst_18314__$1);

(statearr_18456[(17)] = inst_18316__$1);

return statearr_18456;
})();
var statearr_18457_18533 = state_18437__$1;
(statearr_18457_18533[(2)] = null);

(statearr_18457_18533[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (21))){
var inst_18359 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18461_18534 = state_18437__$1;
(statearr_18461_18534[(2)] = inst_18359);

(statearr_18461_18534[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (31))){
var inst_18385 = (state_18437[(11)]);
var inst_18389 = done(null);
var inst_18390 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18385);
var state_18437__$1 = (function (){var statearr_18462 = state_18437;
(statearr_18462[(19)] = inst_18389);

return statearr_18462;
})();
var statearr_18463_18535 = state_18437__$1;
(statearr_18463_18535[(2)] = inst_18390);

(statearr_18463_18535[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (32))){
var inst_18380 = (state_18437[(10)]);
var inst_18377 = (state_18437[(20)]);
var inst_18379 = (state_18437[(21)]);
var inst_18378 = (state_18437[(12)]);
var inst_18392 = (state_18437[(2)]);
var inst_18393 = (inst_18380 + (1));
var tmp18458 = inst_18377;
var tmp18459 = inst_18379;
var tmp18460 = inst_18378;
var inst_18377__$1 = tmp18458;
var inst_18378__$1 = tmp18460;
var inst_18379__$1 = tmp18459;
var inst_18380__$1 = inst_18393;
var state_18437__$1 = (function (){var statearr_18464 = state_18437;
(statearr_18464[(10)] = inst_18380__$1);

(statearr_18464[(20)] = inst_18377__$1);

(statearr_18464[(22)] = inst_18392);

(statearr_18464[(21)] = inst_18379__$1);

(statearr_18464[(12)] = inst_18378__$1);

return statearr_18464;
})();
var statearr_18465_18536 = state_18437__$1;
(statearr_18465_18536[(2)] = null);

(statearr_18465_18536[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (40))){
var inst_18405 = (state_18437[(23)]);
var inst_18409 = done(null);
var inst_18410 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18405);
var state_18437__$1 = (function (){var statearr_18466 = state_18437;
(statearr_18466[(24)] = inst_18409);

return statearr_18466;
})();
var statearr_18467_18537 = state_18437__$1;
(statearr_18467_18537[(2)] = inst_18410);

(statearr_18467_18537[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (33))){
var inst_18396 = (state_18437[(25)]);
var inst_18398 = cljs.core.chunked_seq_QMARK_(inst_18396);
var state_18437__$1 = state_18437;
if(inst_18398){
var statearr_18468_18538 = state_18437__$1;
(statearr_18468_18538[(1)] = (36));

} else {
var statearr_18469_18539 = state_18437__$1;
(statearr_18469_18539[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (13))){
var inst_18326 = (state_18437[(26)]);
var inst_18329 = cljs.core.async.close_BANG_(inst_18326);
var state_18437__$1 = state_18437;
var statearr_18470_18540 = state_18437__$1;
(statearr_18470_18540[(2)] = inst_18329);

(statearr_18470_18540[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (22))){
var inst_18349 = (state_18437[(8)]);
var inst_18352 = cljs.core.async.close_BANG_(inst_18349);
var state_18437__$1 = state_18437;
var statearr_18471_18541 = state_18437__$1;
(statearr_18471_18541[(2)] = inst_18352);

(statearr_18471_18541[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (36))){
var inst_18396 = (state_18437[(25)]);
var inst_18400 = cljs.core.chunk_first(inst_18396);
var inst_18401 = cljs.core.chunk_rest(inst_18396);
var inst_18402 = cljs.core.count(inst_18400);
var inst_18377 = inst_18401;
var inst_18378 = inst_18400;
var inst_18379 = inst_18402;
var inst_18380 = (0);
var state_18437__$1 = (function (){var statearr_18472 = state_18437;
(statearr_18472[(10)] = inst_18380);

(statearr_18472[(20)] = inst_18377);

(statearr_18472[(21)] = inst_18379);

(statearr_18472[(12)] = inst_18378);

return statearr_18472;
})();
var statearr_18473_18542 = state_18437__$1;
(statearr_18473_18542[(2)] = null);

(statearr_18473_18542[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (41))){
var inst_18396 = (state_18437[(25)]);
var inst_18412 = (state_18437[(2)]);
var inst_18413 = cljs.core.next(inst_18396);
var inst_18377 = inst_18413;
var inst_18378 = null;
var inst_18379 = (0);
var inst_18380 = (0);
var state_18437__$1 = (function (){var statearr_18474 = state_18437;
(statearr_18474[(10)] = inst_18380);

(statearr_18474[(20)] = inst_18377);

(statearr_18474[(27)] = inst_18412);

(statearr_18474[(21)] = inst_18379);

(statearr_18474[(12)] = inst_18378);

return statearr_18474;
})();
var statearr_18475_18543 = state_18437__$1;
(statearr_18475_18543[(2)] = null);

(statearr_18475_18543[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (43))){
var state_18437__$1 = state_18437;
var statearr_18476_18544 = state_18437__$1;
(statearr_18476_18544[(2)] = null);

(statearr_18476_18544[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (29))){
var inst_18421 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18477_18545 = state_18437__$1;
(statearr_18477_18545[(2)] = inst_18421);

(statearr_18477_18545[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (44))){
var inst_18430 = (state_18437[(2)]);
var state_18437__$1 = (function (){var statearr_18478 = state_18437;
(statearr_18478[(28)] = inst_18430);

return statearr_18478;
})();
var statearr_18479_18546 = state_18437__$1;
(statearr_18479_18546[(2)] = null);

(statearr_18479_18546[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (6))){
var inst_18369 = (state_18437[(29)]);
var inst_18368 = cljs.core.deref(cs);
var inst_18369__$1 = cljs.core.keys(inst_18368);
var inst_18370 = cljs.core.count(inst_18369__$1);
var inst_18371 = cljs.core.reset_BANG_(dctr,inst_18370);
var inst_18376 = cljs.core.seq(inst_18369__$1);
var inst_18377 = inst_18376;
var inst_18378 = null;
var inst_18379 = (0);
var inst_18380 = (0);
var state_18437__$1 = (function (){var statearr_18480 = state_18437;
(statearr_18480[(10)] = inst_18380);

(statearr_18480[(20)] = inst_18377);

(statearr_18480[(29)] = inst_18369__$1);

(statearr_18480[(30)] = inst_18371);

(statearr_18480[(21)] = inst_18379);

(statearr_18480[(12)] = inst_18378);

return statearr_18480;
})();
var statearr_18481_18547 = state_18437__$1;
(statearr_18481_18547[(2)] = null);

(statearr_18481_18547[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (28))){
var inst_18396 = (state_18437[(25)]);
var inst_18377 = (state_18437[(20)]);
var inst_18396__$1 = cljs.core.seq(inst_18377);
var state_18437__$1 = (function (){var statearr_18482 = state_18437;
(statearr_18482[(25)] = inst_18396__$1);

return statearr_18482;
})();
if(inst_18396__$1){
var statearr_18483_18548 = state_18437__$1;
(statearr_18483_18548[(1)] = (33));

} else {
var statearr_18484_18549 = state_18437__$1;
(statearr_18484_18549[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (25))){
var inst_18380 = (state_18437[(10)]);
var inst_18379 = (state_18437[(21)]);
var inst_18382 = (inst_18380 < inst_18379);
var inst_18383 = inst_18382;
var state_18437__$1 = state_18437;
if(cljs.core.truth_(inst_18383)){
var statearr_18485_18550 = state_18437__$1;
(statearr_18485_18550[(1)] = (27));

} else {
var statearr_18486_18551 = state_18437__$1;
(statearr_18486_18551[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (34))){
var state_18437__$1 = state_18437;
var statearr_18487_18552 = state_18437__$1;
(statearr_18487_18552[(2)] = null);

(statearr_18487_18552[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (17))){
var state_18437__$1 = state_18437;
var statearr_18488_18553 = state_18437__$1;
(statearr_18488_18553[(2)] = null);

(statearr_18488_18553[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (3))){
var inst_18435 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18437__$1,inst_18435);
} else {
if((state_val_18438 === (12))){
var inst_18364 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18489_18554 = state_18437__$1;
(statearr_18489_18554[(2)] = inst_18364);

(statearr_18489_18554[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (2))){
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18437__$1,(4),ch);
} else {
if((state_val_18438 === (23))){
var state_18437__$1 = state_18437;
var statearr_18490_18555 = state_18437__$1;
(statearr_18490_18555[(2)] = null);

(statearr_18490_18555[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (35))){
var inst_18419 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18491_18556 = state_18437__$1;
(statearr_18491_18556[(2)] = inst_18419);

(statearr_18491_18556[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (19))){
var inst_18336 = (state_18437[(7)]);
var inst_18340 = cljs.core.chunk_first(inst_18336);
var inst_18341 = cljs.core.chunk_rest(inst_18336);
var inst_18342 = cljs.core.count(inst_18340);
var inst_18314 = inst_18341;
var inst_18315 = inst_18340;
var inst_18316 = inst_18342;
var inst_18317 = (0);
var state_18437__$1 = (function (){var statearr_18492 = state_18437;
(statearr_18492[(14)] = inst_18315);

(statearr_18492[(15)] = inst_18317);

(statearr_18492[(16)] = inst_18314);

(statearr_18492[(17)] = inst_18316);

return statearr_18492;
})();
var statearr_18493_18557 = state_18437__$1;
(statearr_18493_18557[(2)] = null);

(statearr_18493_18557[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (11))){
var inst_18336 = (state_18437[(7)]);
var inst_18314 = (state_18437[(16)]);
var inst_18336__$1 = cljs.core.seq(inst_18314);
var state_18437__$1 = (function (){var statearr_18494 = state_18437;
(statearr_18494[(7)] = inst_18336__$1);

return statearr_18494;
})();
if(inst_18336__$1){
var statearr_18495_18558 = state_18437__$1;
(statearr_18495_18558[(1)] = (16));

} else {
var statearr_18496_18559 = state_18437__$1;
(statearr_18496_18559[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (9))){
var inst_18366 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18497_18560 = state_18437__$1;
(statearr_18497_18560[(2)] = inst_18366);

(statearr_18497_18560[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (5))){
var inst_18312 = cljs.core.deref(cs);
var inst_18313 = cljs.core.seq(inst_18312);
var inst_18314 = inst_18313;
var inst_18315 = null;
var inst_18316 = (0);
var inst_18317 = (0);
var state_18437__$1 = (function (){var statearr_18498 = state_18437;
(statearr_18498[(14)] = inst_18315);

(statearr_18498[(15)] = inst_18317);

(statearr_18498[(16)] = inst_18314);

(statearr_18498[(17)] = inst_18316);

return statearr_18498;
})();
var statearr_18499_18561 = state_18437__$1;
(statearr_18499_18561[(2)] = null);

(statearr_18499_18561[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (14))){
var state_18437__$1 = state_18437;
var statearr_18500_18562 = state_18437__$1;
(statearr_18500_18562[(2)] = null);

(statearr_18500_18562[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (45))){
var inst_18427 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18501_18563 = state_18437__$1;
(statearr_18501_18563[(2)] = inst_18427);

(statearr_18501_18563[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (26))){
var inst_18369 = (state_18437[(29)]);
var inst_18423 = (state_18437[(2)]);
var inst_18424 = cljs.core.seq(inst_18369);
var state_18437__$1 = (function (){var statearr_18502 = state_18437;
(statearr_18502[(31)] = inst_18423);

return statearr_18502;
})();
if(inst_18424){
var statearr_18503_18564 = state_18437__$1;
(statearr_18503_18564[(1)] = (42));

} else {
var statearr_18504_18565 = state_18437__$1;
(statearr_18504_18565[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (16))){
var inst_18336 = (state_18437[(7)]);
var inst_18338 = cljs.core.chunked_seq_QMARK_(inst_18336);
var state_18437__$1 = state_18437;
if(inst_18338){
var statearr_18505_18566 = state_18437__$1;
(statearr_18505_18566[(1)] = (19));

} else {
var statearr_18506_18567 = state_18437__$1;
(statearr_18506_18567[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (38))){
var inst_18416 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18507_18568 = state_18437__$1;
(statearr_18507_18568[(2)] = inst_18416);

(statearr_18507_18568[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (30))){
var state_18437__$1 = state_18437;
var statearr_18508_18569 = state_18437__$1;
(statearr_18508_18569[(2)] = null);

(statearr_18508_18569[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (10))){
var inst_18315 = (state_18437[(14)]);
var inst_18317 = (state_18437[(15)]);
var inst_18325 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18315,inst_18317);
var inst_18326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18325,(0),null);
var inst_18327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18325,(1),null);
var state_18437__$1 = (function (){var statearr_18509 = state_18437;
(statearr_18509[(26)] = inst_18326);

return statearr_18509;
})();
if(cljs.core.truth_(inst_18327)){
var statearr_18510_18570 = state_18437__$1;
(statearr_18510_18570[(1)] = (13));

} else {
var statearr_18511_18571 = state_18437__$1;
(statearr_18511_18571[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (18))){
var inst_18362 = (state_18437[(2)]);
var state_18437__$1 = state_18437;
var statearr_18512_18572 = state_18437__$1;
(statearr_18512_18572[(2)] = inst_18362);

(statearr_18512_18572[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (42))){
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18437__$1,(45),dchan);
} else {
if((state_val_18438 === (37))){
var inst_18396 = (state_18437[(25)]);
var inst_18305 = (state_18437[(9)]);
var inst_18405 = (state_18437[(23)]);
var inst_18405__$1 = cljs.core.first(inst_18396);
var inst_18406 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18405__$1,inst_18305,done);
var state_18437__$1 = (function (){var statearr_18513 = state_18437;
(statearr_18513[(23)] = inst_18405__$1);

return statearr_18513;
})();
if(cljs.core.truth_(inst_18406)){
var statearr_18514_18573 = state_18437__$1;
(statearr_18514_18573[(1)] = (39));

} else {
var statearr_18515_18574 = state_18437__$1;
(statearr_18515_18574[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18438 === (8))){
var inst_18317 = (state_18437[(15)]);
var inst_18316 = (state_18437[(17)]);
var inst_18319 = (inst_18317 < inst_18316);
var inst_18320 = inst_18319;
var state_18437__$1 = state_18437;
if(cljs.core.truth_(inst_18320)){
var statearr_18516_18575 = state_18437__$1;
(statearr_18516_18575[(1)] = (10));

} else {
var statearr_18517_18576 = state_18437__$1;
(statearr_18517_18576[(1)] = (11));

}

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
});})(c__15835__auto___18522,cs,m,dchan,dctr,done))
;
return ((function (switch__15652__auto__,c__15835__auto___18522,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15653__auto__ = null;
var cljs$core$async$mult_$_state_machine__15653__auto____0 = (function (){
var statearr_18518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18518[(0)] = cljs$core$async$mult_$_state_machine__15653__auto__);

(statearr_18518[(1)] = (1));

return statearr_18518;
});
var cljs$core$async$mult_$_state_machine__15653__auto____1 = (function (state_18437){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18437);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18519){if((e18519 instanceof Object)){
var ex__15656__auto__ = e18519;
var statearr_18520_18577 = state_18437;
(statearr_18520_18577[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18437);

return cljs.core.cst$kw$recur;
} else {
throw e18519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18578 = state_18437;
state_18437 = G__18578;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15653__auto__ = function(state_18437){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15653__auto____1.call(this,state_18437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15653__auto____0;
cljs$core$async$mult_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15653__auto____1;
return cljs$core$async$mult_$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___18522,cs,m,dchan,dctr,done))
})();
var state__15837__auto__ = (function (){var statearr_18521 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18521[(6)] = c__15835__auto___18522);

return statearr_18521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___18522,cs,m,dchan,dctr,done))
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
var G__18580 = arguments.length;
switch (G__18580) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18592 = arguments.length;
var i__4532__auto___18593 = (0);
while(true){
if((i__4532__auto___18593 < len__4531__auto___18592)){
args__4534__auto__.push((arguments[i__4532__auto___18593]));

var G__18594 = (i__4532__auto___18593 + (1));
i__4532__auto___18593 = G__18594;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18586){
var map__18587 = p__18586;
var map__18587__$1 = ((((!((map__18587 == null)))?(((((map__18587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18587):map__18587);
var opts = map__18587__$1;
var statearr_18589_18595 = state;
(statearr_18589_18595[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18587,map__18587__$1,opts){
return (function (val){
var statearr_18590_18596 = state;
(statearr_18590_18596[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18587,map__18587__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18591_18597 = state;
(statearr_18591_18597[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18582){
var G__18583 = cljs.core.first(seq18582);
var seq18582__$1 = cljs.core.next(seq18582);
var G__18584 = cljs.core.first(seq18582__$1);
var seq18582__$2 = cljs.core.next(seq18582__$1);
var G__18585 = cljs.core.first(seq18582__$2);
var seq18582__$3 = cljs.core.next(seq18582__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18583,G__18584,G__18585,seq18582__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18598 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18599){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18599 = meta18599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18600,meta18599__$1){
var self__ = this;
var _18600__$1 = this;
return (new cljs.core.async.t_cljs$core$async18598(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18599__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18600){
var self__ = this;
var _18600__$1 = this;
return self__.meta18599;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18599], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18598";

cljs.core.async.t_cljs$core$async18598.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18598");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18598.
 */
cljs.core.async.__GT_t_cljs$core$async18598 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18598(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18599){
return (new cljs.core.async.t_cljs$core$async18598(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18599));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18598(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15835__auto___18762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___18762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___18762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18702){
var state_val_18703 = (state_18702[(1)]);
if((state_val_18703 === (7))){
var inst_18617 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18704_18763 = state_18702__$1;
(statearr_18704_18763[(2)] = inst_18617);

(statearr_18704_18763[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (20))){
var inst_18629 = (state_18702[(7)]);
var state_18702__$1 = state_18702;
var statearr_18705_18764 = state_18702__$1;
(statearr_18705_18764[(2)] = inst_18629);

(statearr_18705_18764[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (27))){
var state_18702__$1 = state_18702;
var statearr_18706_18765 = state_18702__$1;
(statearr_18706_18765[(2)] = null);

(statearr_18706_18765[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (1))){
var inst_18604 = (state_18702[(8)]);
var inst_18604__$1 = calc_state();
var inst_18606 = (inst_18604__$1 == null);
var inst_18607 = cljs.core.not(inst_18606);
var state_18702__$1 = (function (){var statearr_18707 = state_18702;
(statearr_18707[(8)] = inst_18604__$1);

return statearr_18707;
})();
if(inst_18607){
var statearr_18708_18766 = state_18702__$1;
(statearr_18708_18766[(1)] = (2));

} else {
var statearr_18709_18767 = state_18702__$1;
(statearr_18709_18767[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (24))){
var inst_18662 = (state_18702[(9)]);
var inst_18653 = (state_18702[(10)]);
var inst_18676 = (state_18702[(11)]);
var inst_18676__$1 = (inst_18653.cljs$core$IFn$_invoke$arity$1 ? inst_18653.cljs$core$IFn$_invoke$arity$1(inst_18662) : inst_18653.call(null,inst_18662));
var state_18702__$1 = (function (){var statearr_18710 = state_18702;
(statearr_18710[(11)] = inst_18676__$1);

return statearr_18710;
})();
if(cljs.core.truth_(inst_18676__$1)){
var statearr_18711_18768 = state_18702__$1;
(statearr_18711_18768[(1)] = (29));

} else {
var statearr_18712_18769 = state_18702__$1;
(statearr_18712_18769[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (4))){
var inst_18620 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18620)){
var statearr_18713_18770 = state_18702__$1;
(statearr_18713_18770[(1)] = (8));

} else {
var statearr_18714_18771 = state_18702__$1;
(statearr_18714_18771[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (15))){
var inst_18647 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18647)){
var statearr_18715_18772 = state_18702__$1;
(statearr_18715_18772[(1)] = (19));

} else {
var statearr_18716_18773 = state_18702__$1;
(statearr_18716_18773[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (21))){
var inst_18652 = (state_18702[(12)]);
var inst_18652__$1 = (state_18702[(2)]);
var inst_18653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18652__$1,cljs.core.cst$kw$solos);
var inst_18654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18652__$1,cljs.core.cst$kw$mutes);
var inst_18655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18652__$1,cljs.core.cst$kw$reads);
var state_18702__$1 = (function (){var statearr_18717 = state_18702;
(statearr_18717[(12)] = inst_18652__$1);

(statearr_18717[(13)] = inst_18654);

(statearr_18717[(10)] = inst_18653);

return statearr_18717;
})();
return cljs.core.async.ioc_alts_BANG_(state_18702__$1,(22),inst_18655);
} else {
if((state_val_18703 === (31))){
var inst_18684 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18684)){
var statearr_18718_18774 = state_18702__$1;
(statearr_18718_18774[(1)] = (32));

} else {
var statearr_18719_18775 = state_18702__$1;
(statearr_18719_18775[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (32))){
var inst_18661 = (state_18702[(14)]);
var state_18702__$1 = state_18702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18702__$1,(35),out,inst_18661);
} else {
if((state_val_18703 === (33))){
var inst_18652 = (state_18702[(12)]);
var inst_18629 = inst_18652;
var state_18702__$1 = (function (){var statearr_18720 = state_18702;
(statearr_18720[(7)] = inst_18629);

return statearr_18720;
})();
var statearr_18721_18776 = state_18702__$1;
(statearr_18721_18776[(2)] = null);

(statearr_18721_18776[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (13))){
var inst_18629 = (state_18702[(7)]);
var inst_18636 = inst_18629.cljs$lang$protocol_mask$partition0$;
var inst_18637 = (inst_18636 & (64));
var inst_18638 = inst_18629.cljs$core$ISeq$;
var inst_18639 = (cljs.core.PROTOCOL_SENTINEL === inst_18638);
var inst_18640 = ((inst_18637) || (inst_18639));
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18640)){
var statearr_18722_18777 = state_18702__$1;
(statearr_18722_18777[(1)] = (16));

} else {
var statearr_18723_18778 = state_18702__$1;
(statearr_18723_18778[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (22))){
var inst_18662 = (state_18702[(9)]);
var inst_18661 = (state_18702[(14)]);
var inst_18660 = (state_18702[(2)]);
var inst_18661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18660,(0),null);
var inst_18662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18660,(1),null);
var inst_18663 = (inst_18661__$1 == null);
var inst_18664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18662__$1,change);
var inst_18665 = ((inst_18663) || (inst_18664));
var state_18702__$1 = (function (){var statearr_18724 = state_18702;
(statearr_18724[(9)] = inst_18662__$1);

(statearr_18724[(14)] = inst_18661__$1);

return statearr_18724;
})();
if(cljs.core.truth_(inst_18665)){
var statearr_18725_18779 = state_18702__$1;
(statearr_18725_18779[(1)] = (23));

} else {
var statearr_18726_18780 = state_18702__$1;
(statearr_18726_18780[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (36))){
var inst_18652 = (state_18702[(12)]);
var inst_18629 = inst_18652;
var state_18702__$1 = (function (){var statearr_18727 = state_18702;
(statearr_18727[(7)] = inst_18629);

return statearr_18727;
})();
var statearr_18728_18781 = state_18702__$1;
(statearr_18728_18781[(2)] = null);

(statearr_18728_18781[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (29))){
var inst_18676 = (state_18702[(11)]);
var state_18702__$1 = state_18702;
var statearr_18729_18782 = state_18702__$1;
(statearr_18729_18782[(2)] = inst_18676);

(statearr_18729_18782[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (6))){
var state_18702__$1 = state_18702;
var statearr_18730_18783 = state_18702__$1;
(statearr_18730_18783[(2)] = false);

(statearr_18730_18783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (28))){
var inst_18672 = (state_18702[(2)]);
var inst_18673 = calc_state();
var inst_18629 = inst_18673;
var state_18702__$1 = (function (){var statearr_18731 = state_18702;
(statearr_18731[(7)] = inst_18629);

(statearr_18731[(15)] = inst_18672);

return statearr_18731;
})();
var statearr_18732_18784 = state_18702__$1;
(statearr_18732_18784[(2)] = null);

(statearr_18732_18784[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (25))){
var inst_18698 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18733_18785 = state_18702__$1;
(statearr_18733_18785[(2)] = inst_18698);

(statearr_18733_18785[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (34))){
var inst_18696 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18734_18786 = state_18702__$1;
(statearr_18734_18786[(2)] = inst_18696);

(statearr_18734_18786[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (17))){
var state_18702__$1 = state_18702;
var statearr_18735_18787 = state_18702__$1;
(statearr_18735_18787[(2)] = false);

(statearr_18735_18787[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (3))){
var state_18702__$1 = state_18702;
var statearr_18736_18788 = state_18702__$1;
(statearr_18736_18788[(2)] = false);

(statearr_18736_18788[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (12))){
var inst_18700 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18702__$1,inst_18700);
} else {
if((state_val_18703 === (2))){
var inst_18604 = (state_18702[(8)]);
var inst_18609 = inst_18604.cljs$lang$protocol_mask$partition0$;
var inst_18610 = (inst_18609 & (64));
var inst_18611 = inst_18604.cljs$core$ISeq$;
var inst_18612 = (cljs.core.PROTOCOL_SENTINEL === inst_18611);
var inst_18613 = ((inst_18610) || (inst_18612));
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18613)){
var statearr_18737_18789 = state_18702__$1;
(statearr_18737_18789[(1)] = (5));

} else {
var statearr_18738_18790 = state_18702__$1;
(statearr_18738_18790[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (23))){
var inst_18661 = (state_18702[(14)]);
var inst_18667 = (inst_18661 == null);
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18667)){
var statearr_18739_18791 = state_18702__$1;
(statearr_18739_18791[(1)] = (26));

} else {
var statearr_18740_18792 = state_18702__$1;
(statearr_18740_18792[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (35))){
var inst_18687 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18687)){
var statearr_18741_18793 = state_18702__$1;
(statearr_18741_18793[(1)] = (36));

} else {
var statearr_18742_18794 = state_18702__$1;
(statearr_18742_18794[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (19))){
var inst_18629 = (state_18702[(7)]);
var inst_18649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18629);
var state_18702__$1 = state_18702;
var statearr_18743_18795 = state_18702__$1;
(statearr_18743_18795[(2)] = inst_18649);

(statearr_18743_18795[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (11))){
var inst_18629 = (state_18702[(7)]);
var inst_18633 = (inst_18629 == null);
var inst_18634 = cljs.core.not(inst_18633);
var state_18702__$1 = state_18702;
if(inst_18634){
var statearr_18744_18796 = state_18702__$1;
(statearr_18744_18796[(1)] = (13));

} else {
var statearr_18745_18797 = state_18702__$1;
(statearr_18745_18797[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (9))){
var inst_18604 = (state_18702[(8)]);
var state_18702__$1 = state_18702;
var statearr_18746_18798 = state_18702__$1;
(statearr_18746_18798[(2)] = inst_18604);

(statearr_18746_18798[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (5))){
var state_18702__$1 = state_18702;
var statearr_18747_18799 = state_18702__$1;
(statearr_18747_18799[(2)] = true);

(statearr_18747_18799[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (14))){
var state_18702__$1 = state_18702;
var statearr_18748_18800 = state_18702__$1;
(statearr_18748_18800[(2)] = false);

(statearr_18748_18800[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (26))){
var inst_18662 = (state_18702[(9)]);
var inst_18669 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18662);
var state_18702__$1 = state_18702;
var statearr_18749_18801 = state_18702__$1;
(statearr_18749_18801[(2)] = inst_18669);

(statearr_18749_18801[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (16))){
var state_18702__$1 = state_18702;
var statearr_18750_18802 = state_18702__$1;
(statearr_18750_18802[(2)] = true);

(statearr_18750_18802[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (38))){
var inst_18692 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18751_18803 = state_18702__$1;
(statearr_18751_18803[(2)] = inst_18692);

(statearr_18751_18803[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (30))){
var inst_18662 = (state_18702[(9)]);
var inst_18654 = (state_18702[(13)]);
var inst_18653 = (state_18702[(10)]);
var inst_18679 = cljs.core.empty_QMARK_(inst_18653);
var inst_18680 = (inst_18654.cljs$core$IFn$_invoke$arity$1 ? inst_18654.cljs$core$IFn$_invoke$arity$1(inst_18662) : inst_18654.call(null,inst_18662));
var inst_18681 = cljs.core.not(inst_18680);
var inst_18682 = ((inst_18679) && (inst_18681));
var state_18702__$1 = state_18702;
var statearr_18752_18804 = state_18702__$1;
(statearr_18752_18804[(2)] = inst_18682);

(statearr_18752_18804[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (10))){
var inst_18604 = (state_18702[(8)]);
var inst_18625 = (state_18702[(2)]);
var inst_18626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18625,cljs.core.cst$kw$solos);
var inst_18627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18625,cljs.core.cst$kw$mutes);
var inst_18628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18625,cljs.core.cst$kw$reads);
var inst_18629 = inst_18604;
var state_18702__$1 = (function (){var statearr_18753 = state_18702;
(statearr_18753[(7)] = inst_18629);

(statearr_18753[(16)] = inst_18628);

(statearr_18753[(17)] = inst_18626);

(statearr_18753[(18)] = inst_18627);

return statearr_18753;
})();
var statearr_18754_18805 = state_18702__$1;
(statearr_18754_18805[(2)] = null);

(statearr_18754_18805[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (18))){
var inst_18644 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18755_18806 = state_18702__$1;
(statearr_18755_18806[(2)] = inst_18644);

(statearr_18755_18806[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (37))){
var state_18702__$1 = state_18702;
var statearr_18756_18807 = state_18702__$1;
(statearr_18756_18807[(2)] = null);

(statearr_18756_18807[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18703 === (8))){
var inst_18604 = (state_18702[(8)]);
var inst_18622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18604);
var state_18702__$1 = state_18702;
var statearr_18757_18808 = state_18702__$1;
(statearr_18757_18808[(2)] = inst_18622);

(statearr_18757_18808[(1)] = (10));


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
});})(c__15835__auto___18762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15652__auto__,c__15835__auto___18762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15653__auto__ = null;
var cljs$core$async$mix_$_state_machine__15653__auto____0 = (function (){
var statearr_18758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18758[(0)] = cljs$core$async$mix_$_state_machine__15653__auto__);

(statearr_18758[(1)] = (1));

return statearr_18758;
});
var cljs$core$async$mix_$_state_machine__15653__auto____1 = (function (state_18702){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18702);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18759){if((e18759 instanceof Object)){
var ex__15656__auto__ = e18759;
var statearr_18760_18809 = state_18702;
(statearr_18760_18809[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18702);

return cljs.core.cst$kw$recur;
} else {
throw e18759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18810 = state_18702;
state_18702 = G__18810;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15653__auto__ = function(state_18702){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15653__auto____1.call(this,state_18702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15653__auto____0;
cljs$core$async$mix_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15653__auto____1;
return cljs$core$async$mix_$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___18762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15837__auto__ = (function (){var statearr_18761 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18761[(6)] = c__15835__auto___18762);

return statearr_18761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___18762,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18812 = arguments.length;
switch (G__18812) {
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__18816 = arguments.length;
switch (G__18816) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__18814_SHARP_){
if(cljs.core.truth_((p1__18814_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18814_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18814_SHARP_.call(null,topic)))){
return p1__18814_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18814_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18817 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18818){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18818 = meta18818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18819,meta18818__$1){
var self__ = this;
var _18819__$1 = this;
return (new cljs.core.async.t_cljs$core$async18817(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18818__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18819){
var self__ = this;
var _18819__$1 = this;
return self__.meta18818;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18818], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18817";

cljs.core.async.t_cljs$core$async18817.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18817");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18817.
 */
cljs.core.async.__GT_t_cljs$core$async18817 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18818){
return (new cljs.core.async.t_cljs$core$async18817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18818));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18817(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15835__auto___18937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___18937,mults,ensure_mult,p){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___18937,mults,ensure_mult,p){
return (function (state_18891){
var state_val_18892 = (state_18891[(1)]);
if((state_val_18892 === (7))){
var inst_18887 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18893_18938 = state_18891__$1;
(statearr_18893_18938[(2)] = inst_18887);

(statearr_18893_18938[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (20))){
var state_18891__$1 = state_18891;
var statearr_18894_18939 = state_18891__$1;
(statearr_18894_18939[(2)] = null);

(statearr_18894_18939[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (1))){
var state_18891__$1 = state_18891;
var statearr_18895_18940 = state_18891__$1;
(statearr_18895_18940[(2)] = null);

(statearr_18895_18940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (24))){
var inst_18870 = (state_18891[(7)]);
var inst_18879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18870);
var state_18891__$1 = state_18891;
var statearr_18896_18941 = state_18891__$1;
(statearr_18896_18941[(2)] = inst_18879);

(statearr_18896_18941[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (4))){
var inst_18822 = (state_18891[(8)]);
var inst_18822__$1 = (state_18891[(2)]);
var inst_18823 = (inst_18822__$1 == null);
var state_18891__$1 = (function (){var statearr_18897 = state_18891;
(statearr_18897[(8)] = inst_18822__$1);

return statearr_18897;
})();
if(cljs.core.truth_(inst_18823)){
var statearr_18898_18942 = state_18891__$1;
(statearr_18898_18942[(1)] = (5));

} else {
var statearr_18899_18943 = state_18891__$1;
(statearr_18899_18943[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (15))){
var inst_18864 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18900_18944 = state_18891__$1;
(statearr_18900_18944[(2)] = inst_18864);

(statearr_18900_18944[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (21))){
var inst_18884 = (state_18891[(2)]);
var state_18891__$1 = (function (){var statearr_18901 = state_18891;
(statearr_18901[(9)] = inst_18884);

return statearr_18901;
})();
var statearr_18902_18945 = state_18891__$1;
(statearr_18902_18945[(2)] = null);

(statearr_18902_18945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (13))){
var inst_18846 = (state_18891[(10)]);
var inst_18848 = cljs.core.chunked_seq_QMARK_(inst_18846);
var state_18891__$1 = state_18891;
if(inst_18848){
var statearr_18903_18946 = state_18891__$1;
(statearr_18903_18946[(1)] = (16));

} else {
var statearr_18904_18947 = state_18891__$1;
(statearr_18904_18947[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (22))){
var inst_18876 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
if(cljs.core.truth_(inst_18876)){
var statearr_18905_18948 = state_18891__$1;
(statearr_18905_18948[(1)] = (23));

} else {
var statearr_18906_18949 = state_18891__$1;
(statearr_18906_18949[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (6))){
var inst_18870 = (state_18891[(7)]);
var inst_18872 = (state_18891[(11)]);
var inst_18822 = (state_18891[(8)]);
var inst_18870__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18822) : topic_fn.call(null,inst_18822));
var inst_18871 = cljs.core.deref(mults);
var inst_18872__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18871,inst_18870__$1);
var state_18891__$1 = (function (){var statearr_18907 = state_18891;
(statearr_18907[(7)] = inst_18870__$1);

(statearr_18907[(11)] = inst_18872__$1);

return statearr_18907;
})();
if(cljs.core.truth_(inst_18872__$1)){
var statearr_18908_18950 = state_18891__$1;
(statearr_18908_18950[(1)] = (19));

} else {
var statearr_18909_18951 = state_18891__$1;
(statearr_18909_18951[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (25))){
var inst_18881 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18910_18952 = state_18891__$1;
(statearr_18910_18952[(2)] = inst_18881);

(statearr_18910_18952[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (17))){
var inst_18846 = (state_18891[(10)]);
var inst_18855 = cljs.core.first(inst_18846);
var inst_18856 = cljs.core.async.muxch_STAR_(inst_18855);
var inst_18857 = cljs.core.async.close_BANG_(inst_18856);
var inst_18858 = cljs.core.next(inst_18846);
var inst_18832 = inst_18858;
var inst_18833 = null;
var inst_18834 = (0);
var inst_18835 = (0);
var state_18891__$1 = (function (){var statearr_18911 = state_18891;
(statearr_18911[(12)] = inst_18834);

(statearr_18911[(13)] = inst_18857);

(statearr_18911[(14)] = inst_18835);

(statearr_18911[(15)] = inst_18833);

(statearr_18911[(16)] = inst_18832);

return statearr_18911;
})();
var statearr_18912_18953 = state_18891__$1;
(statearr_18912_18953[(2)] = null);

(statearr_18912_18953[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (3))){
var inst_18889 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18891__$1,inst_18889);
} else {
if((state_val_18892 === (12))){
var inst_18866 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18913_18954 = state_18891__$1;
(statearr_18913_18954[(2)] = inst_18866);

(statearr_18913_18954[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (2))){
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18891__$1,(4),ch);
} else {
if((state_val_18892 === (23))){
var state_18891__$1 = state_18891;
var statearr_18914_18955 = state_18891__$1;
(statearr_18914_18955[(2)] = null);

(statearr_18914_18955[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (19))){
var inst_18872 = (state_18891[(11)]);
var inst_18822 = (state_18891[(8)]);
var inst_18874 = cljs.core.async.muxch_STAR_(inst_18872);
var state_18891__$1 = state_18891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18891__$1,(22),inst_18874,inst_18822);
} else {
if((state_val_18892 === (11))){
var inst_18846 = (state_18891[(10)]);
var inst_18832 = (state_18891[(16)]);
var inst_18846__$1 = cljs.core.seq(inst_18832);
var state_18891__$1 = (function (){var statearr_18915 = state_18891;
(statearr_18915[(10)] = inst_18846__$1);

return statearr_18915;
})();
if(inst_18846__$1){
var statearr_18916_18956 = state_18891__$1;
(statearr_18916_18956[(1)] = (13));

} else {
var statearr_18917_18957 = state_18891__$1;
(statearr_18917_18957[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (9))){
var inst_18868 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18918_18958 = state_18891__$1;
(statearr_18918_18958[(2)] = inst_18868);

(statearr_18918_18958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (5))){
var inst_18829 = cljs.core.deref(mults);
var inst_18830 = cljs.core.vals(inst_18829);
var inst_18831 = cljs.core.seq(inst_18830);
var inst_18832 = inst_18831;
var inst_18833 = null;
var inst_18834 = (0);
var inst_18835 = (0);
var state_18891__$1 = (function (){var statearr_18919 = state_18891;
(statearr_18919[(12)] = inst_18834);

(statearr_18919[(14)] = inst_18835);

(statearr_18919[(15)] = inst_18833);

(statearr_18919[(16)] = inst_18832);

return statearr_18919;
})();
var statearr_18920_18959 = state_18891__$1;
(statearr_18920_18959[(2)] = null);

(statearr_18920_18959[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (14))){
var state_18891__$1 = state_18891;
var statearr_18924_18960 = state_18891__$1;
(statearr_18924_18960[(2)] = null);

(statearr_18924_18960[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (16))){
var inst_18846 = (state_18891[(10)]);
var inst_18850 = cljs.core.chunk_first(inst_18846);
var inst_18851 = cljs.core.chunk_rest(inst_18846);
var inst_18852 = cljs.core.count(inst_18850);
var inst_18832 = inst_18851;
var inst_18833 = inst_18850;
var inst_18834 = inst_18852;
var inst_18835 = (0);
var state_18891__$1 = (function (){var statearr_18925 = state_18891;
(statearr_18925[(12)] = inst_18834);

(statearr_18925[(14)] = inst_18835);

(statearr_18925[(15)] = inst_18833);

(statearr_18925[(16)] = inst_18832);

return statearr_18925;
})();
var statearr_18926_18961 = state_18891__$1;
(statearr_18926_18961[(2)] = null);

(statearr_18926_18961[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (10))){
var inst_18834 = (state_18891[(12)]);
var inst_18835 = (state_18891[(14)]);
var inst_18833 = (state_18891[(15)]);
var inst_18832 = (state_18891[(16)]);
var inst_18840 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18833,inst_18835);
var inst_18841 = cljs.core.async.muxch_STAR_(inst_18840);
var inst_18842 = cljs.core.async.close_BANG_(inst_18841);
var inst_18843 = (inst_18835 + (1));
var tmp18921 = inst_18834;
var tmp18922 = inst_18833;
var tmp18923 = inst_18832;
var inst_18832__$1 = tmp18923;
var inst_18833__$1 = tmp18922;
var inst_18834__$1 = tmp18921;
var inst_18835__$1 = inst_18843;
var state_18891__$1 = (function (){var statearr_18927 = state_18891;
(statearr_18927[(12)] = inst_18834__$1);

(statearr_18927[(17)] = inst_18842);

(statearr_18927[(14)] = inst_18835__$1);

(statearr_18927[(15)] = inst_18833__$1);

(statearr_18927[(16)] = inst_18832__$1);

return statearr_18927;
})();
var statearr_18928_18962 = state_18891__$1;
(statearr_18928_18962[(2)] = null);

(statearr_18928_18962[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (18))){
var inst_18861 = (state_18891[(2)]);
var state_18891__$1 = state_18891;
var statearr_18929_18963 = state_18891__$1;
(statearr_18929_18963[(2)] = inst_18861);

(statearr_18929_18963[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18892 === (8))){
var inst_18834 = (state_18891[(12)]);
var inst_18835 = (state_18891[(14)]);
var inst_18837 = (inst_18835 < inst_18834);
var inst_18838 = inst_18837;
var state_18891__$1 = state_18891;
if(cljs.core.truth_(inst_18838)){
var statearr_18930_18964 = state_18891__$1;
(statearr_18930_18964[(1)] = (10));

} else {
var statearr_18931_18965 = state_18891__$1;
(statearr_18931_18965[(1)] = (11));

}

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
});})(c__15835__auto___18937,mults,ensure_mult,p))
;
return ((function (switch__15652__auto__,c__15835__auto___18937,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_18932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18932[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_18932[(1)] = (1));

return statearr_18932;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_18891){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_18891);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18933){if((e18933 instanceof Object)){
var ex__15656__auto__ = e18933;
var statearr_18934_18966 = state_18891;
(statearr_18934_18966[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18891);

return cljs.core.cst$kw$recur;
} else {
throw e18933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__18967 = state_18891;
state_18891 = G__18967;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_18891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_18891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___18937,mults,ensure_mult,p))
})();
var state__15837__auto__ = (function (){var statearr_18935 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_18935[(6)] = c__15835__auto___18937);

return statearr_18935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___18937,mults,ensure_mult,p))
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
var G__18969 = arguments.length;
switch (G__18969) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18972 = arguments.length;
switch (G__18972) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__18975 = arguments.length;
switch (G__18975) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15835__auto___19042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___19042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___19042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19014){
var state_val_19015 = (state_19014[(1)]);
if((state_val_19015 === (7))){
var state_19014__$1 = state_19014;
var statearr_19016_19043 = state_19014__$1;
(statearr_19016_19043[(2)] = null);

(statearr_19016_19043[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (1))){
var state_19014__$1 = state_19014;
var statearr_19017_19044 = state_19014__$1;
(statearr_19017_19044[(2)] = null);

(statearr_19017_19044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (4))){
var inst_18978 = (state_19014[(7)]);
var inst_18980 = (inst_18978 < cnt);
var state_19014__$1 = state_19014;
if(cljs.core.truth_(inst_18980)){
var statearr_19018_19045 = state_19014__$1;
(statearr_19018_19045[(1)] = (6));

} else {
var statearr_19019_19046 = state_19014__$1;
(statearr_19019_19046[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (15))){
var inst_19010 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19020_19047 = state_19014__$1;
(statearr_19020_19047[(2)] = inst_19010);

(statearr_19020_19047[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (13))){
var inst_19003 = cljs.core.async.close_BANG_(out);
var state_19014__$1 = state_19014;
var statearr_19021_19048 = state_19014__$1;
(statearr_19021_19048[(2)] = inst_19003);

(statearr_19021_19048[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (6))){
var state_19014__$1 = state_19014;
var statearr_19022_19049 = state_19014__$1;
(statearr_19022_19049[(2)] = null);

(statearr_19022_19049[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (3))){
var inst_19012 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19014__$1,inst_19012);
} else {
if((state_val_19015 === (12))){
var inst_19000 = (state_19014[(8)]);
var inst_19000__$1 = (state_19014[(2)]);
var inst_19001 = cljs.core.some(cljs.core.nil_QMARK_,inst_19000__$1);
var state_19014__$1 = (function (){var statearr_19023 = state_19014;
(statearr_19023[(8)] = inst_19000__$1);

return statearr_19023;
})();
if(cljs.core.truth_(inst_19001)){
var statearr_19024_19050 = state_19014__$1;
(statearr_19024_19050[(1)] = (13));

} else {
var statearr_19025_19051 = state_19014__$1;
(statearr_19025_19051[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (2))){
var inst_18977 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18978 = (0);
var state_19014__$1 = (function (){var statearr_19026 = state_19014;
(statearr_19026[(9)] = inst_18977);

(statearr_19026[(7)] = inst_18978);

return statearr_19026;
})();
var statearr_19027_19052 = state_19014__$1;
(statearr_19027_19052[(2)] = null);

(statearr_19027_19052[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (11))){
var inst_18978 = (state_19014[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19014,(10),Object,null,(9));
var inst_18987 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18978) : chs__$1.call(null,inst_18978));
var inst_18988 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18978) : done.call(null,inst_18978));
var inst_18989 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18987,inst_18988);
var state_19014__$1 = state_19014;
var statearr_19028_19053 = state_19014__$1;
(statearr_19028_19053[(2)] = inst_18989);


cljs.core.async.impl.ioc_helpers.process_exception(state_19014__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (9))){
var inst_18978 = (state_19014[(7)]);
var inst_18991 = (state_19014[(2)]);
var inst_18992 = (inst_18978 + (1));
var inst_18978__$1 = inst_18992;
var state_19014__$1 = (function (){var statearr_19029 = state_19014;
(statearr_19029[(7)] = inst_18978__$1);

(statearr_19029[(10)] = inst_18991);

return statearr_19029;
})();
var statearr_19030_19054 = state_19014__$1;
(statearr_19030_19054[(2)] = null);

(statearr_19030_19054[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (5))){
var inst_18998 = (state_19014[(2)]);
var state_19014__$1 = (function (){var statearr_19031 = state_19014;
(statearr_19031[(11)] = inst_18998);

return statearr_19031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19014__$1,(12),dchan);
} else {
if((state_val_19015 === (14))){
var inst_19000 = (state_19014[(8)]);
var inst_19005 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19000);
var state_19014__$1 = state_19014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19014__$1,(16),out,inst_19005);
} else {
if((state_val_19015 === (16))){
var inst_19007 = (state_19014[(2)]);
var state_19014__$1 = (function (){var statearr_19032 = state_19014;
(statearr_19032[(12)] = inst_19007);

return statearr_19032;
})();
var statearr_19033_19055 = state_19014__$1;
(statearr_19033_19055[(2)] = null);

(statearr_19033_19055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (10))){
var inst_18982 = (state_19014[(2)]);
var inst_18983 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19014__$1 = (function (){var statearr_19034 = state_19014;
(statearr_19034[(13)] = inst_18982);

return statearr_19034;
})();
var statearr_19035_19056 = state_19014__$1;
(statearr_19035_19056[(2)] = inst_18983);


cljs.core.async.impl.ioc_helpers.process_exception(state_19014__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19015 === (8))){
var inst_18996 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19036_19057 = state_19014__$1;
(statearr_19036_19057[(2)] = inst_18996);

(statearr_19036_19057[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__15835__auto___19042,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15652__auto__,c__15835__auto___19042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19037[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19037[(1)] = (1));

return statearr_19037;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19014){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19014);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19038){if((e19038 instanceof Object)){
var ex__15656__auto__ = e19038;
var statearr_19039_19058 = state_19014;
(statearr_19039_19058[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19014);

return cljs.core.cst$kw$recur;
} else {
throw e19038;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19059 = state_19014;
state_19014 = G__19059;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___19042,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15837__auto__ = (function (){var statearr_19040 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19040[(6)] = c__15835__auto___19042);

return statearr_19040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___19042,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19062 = arguments.length;
switch (G__19062) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15835__auto___19116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___19116,out){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___19116,out){
return (function (state_19094){
var state_val_19095 = (state_19094[(1)]);
if((state_val_19095 === (7))){
var inst_19073 = (state_19094[(7)]);
var inst_19074 = (state_19094[(8)]);
var inst_19073__$1 = (state_19094[(2)]);
var inst_19074__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19073__$1,(0),null);
var inst_19075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19073__$1,(1),null);
var inst_19076 = (inst_19074__$1 == null);
var state_19094__$1 = (function (){var statearr_19096 = state_19094;
(statearr_19096[(9)] = inst_19075);

(statearr_19096[(7)] = inst_19073__$1);

(statearr_19096[(8)] = inst_19074__$1);

return statearr_19096;
})();
if(cljs.core.truth_(inst_19076)){
var statearr_19097_19117 = state_19094__$1;
(statearr_19097_19117[(1)] = (8));

} else {
var statearr_19098_19118 = state_19094__$1;
(statearr_19098_19118[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (1))){
var inst_19063 = cljs.core.vec(chs);
var inst_19064 = inst_19063;
var state_19094__$1 = (function (){var statearr_19099 = state_19094;
(statearr_19099[(10)] = inst_19064);

return statearr_19099;
})();
var statearr_19100_19119 = state_19094__$1;
(statearr_19100_19119[(2)] = null);

(statearr_19100_19119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (4))){
var inst_19064 = (state_19094[(10)]);
var state_19094__$1 = state_19094;
return cljs.core.async.ioc_alts_BANG_(state_19094__$1,(7),inst_19064);
} else {
if((state_val_19095 === (6))){
var inst_19090 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19101_19120 = state_19094__$1;
(statearr_19101_19120[(2)] = inst_19090);

(statearr_19101_19120[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (3))){
var inst_19092 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19094__$1,inst_19092);
} else {
if((state_val_19095 === (2))){
var inst_19064 = (state_19094[(10)]);
var inst_19066 = cljs.core.count(inst_19064);
var inst_19067 = (inst_19066 > (0));
var state_19094__$1 = state_19094;
if(cljs.core.truth_(inst_19067)){
var statearr_19103_19121 = state_19094__$1;
(statearr_19103_19121[(1)] = (4));

} else {
var statearr_19104_19122 = state_19094__$1;
(statearr_19104_19122[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (11))){
var inst_19064 = (state_19094[(10)]);
var inst_19083 = (state_19094[(2)]);
var tmp19102 = inst_19064;
var inst_19064__$1 = tmp19102;
var state_19094__$1 = (function (){var statearr_19105 = state_19094;
(statearr_19105[(11)] = inst_19083);

(statearr_19105[(10)] = inst_19064__$1);

return statearr_19105;
})();
var statearr_19106_19123 = state_19094__$1;
(statearr_19106_19123[(2)] = null);

(statearr_19106_19123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (9))){
var inst_19074 = (state_19094[(8)]);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19094__$1,(11),out,inst_19074);
} else {
if((state_val_19095 === (5))){
var inst_19088 = cljs.core.async.close_BANG_(out);
var state_19094__$1 = state_19094;
var statearr_19107_19124 = state_19094__$1;
(statearr_19107_19124[(2)] = inst_19088);

(statearr_19107_19124[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (10))){
var inst_19086 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19108_19125 = state_19094__$1;
(statearr_19108_19125[(2)] = inst_19086);

(statearr_19108_19125[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (8))){
var inst_19075 = (state_19094[(9)]);
var inst_19073 = (state_19094[(7)]);
var inst_19074 = (state_19094[(8)]);
var inst_19064 = (state_19094[(10)]);
var inst_19078 = (function (){var cs = inst_19064;
var vec__19069 = inst_19073;
var v = inst_19074;
var c = inst_19075;
return ((function (cs,vec__19069,v,c,inst_19075,inst_19073,inst_19074,inst_19064,state_val_19095,c__15835__auto___19116,out){
return (function (p1__19060_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19060_SHARP_);
});
;})(cs,vec__19069,v,c,inst_19075,inst_19073,inst_19074,inst_19064,state_val_19095,c__15835__auto___19116,out))
})();
var inst_19079 = cljs.core.filterv(inst_19078,inst_19064);
var inst_19064__$1 = inst_19079;
var state_19094__$1 = (function (){var statearr_19109 = state_19094;
(statearr_19109[(10)] = inst_19064__$1);

return statearr_19109;
})();
var statearr_19110_19126 = state_19094__$1;
(statearr_19110_19126[(2)] = null);

(statearr_19110_19126[(1)] = (2));


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
}
}
}
}
});})(c__15835__auto___19116,out))
;
return ((function (switch__15652__auto__,c__15835__auto___19116,out){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19111[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19111[(1)] = (1));

return statearr_19111;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19094){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19094);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19112){if((e19112 instanceof Object)){
var ex__15656__auto__ = e19112;
var statearr_19113_19127 = state_19094;
(statearr_19113_19127[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19094);

return cljs.core.cst$kw$recur;
} else {
throw e19112;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19128 = state_19094;
state_19094 = G__19128;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___19116,out))
})();
var state__15837__auto__ = (function (){var statearr_19114 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19114[(6)] = c__15835__auto___19116);

return statearr_19114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___19116,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19130 = arguments.length;
switch (G__19130) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15835__auto___19175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___19175,out){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___19175,out){
return (function (state_19154){
var state_val_19155 = (state_19154[(1)]);
if((state_val_19155 === (7))){
var inst_19136 = (state_19154[(7)]);
var inst_19136__$1 = (state_19154[(2)]);
var inst_19137 = (inst_19136__$1 == null);
var inst_19138 = cljs.core.not(inst_19137);
var state_19154__$1 = (function (){var statearr_19156 = state_19154;
(statearr_19156[(7)] = inst_19136__$1);

return statearr_19156;
})();
if(inst_19138){
var statearr_19157_19176 = state_19154__$1;
(statearr_19157_19176[(1)] = (8));

} else {
var statearr_19158_19177 = state_19154__$1;
(statearr_19158_19177[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (1))){
var inst_19131 = (0);
var state_19154__$1 = (function (){var statearr_19159 = state_19154;
(statearr_19159[(8)] = inst_19131);

return statearr_19159;
})();
var statearr_19160_19178 = state_19154__$1;
(statearr_19160_19178[(2)] = null);

(statearr_19160_19178[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (4))){
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19154__$1,(7),ch);
} else {
if((state_val_19155 === (6))){
var inst_19149 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19161_19179 = state_19154__$1;
(statearr_19161_19179[(2)] = inst_19149);

(statearr_19161_19179[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (3))){
var inst_19151 = (state_19154[(2)]);
var inst_19152 = cljs.core.async.close_BANG_(out);
var state_19154__$1 = (function (){var statearr_19162 = state_19154;
(statearr_19162[(9)] = inst_19151);

return statearr_19162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19154__$1,inst_19152);
} else {
if((state_val_19155 === (2))){
var inst_19131 = (state_19154[(8)]);
var inst_19133 = (inst_19131 < n);
var state_19154__$1 = state_19154;
if(cljs.core.truth_(inst_19133)){
var statearr_19163_19180 = state_19154__$1;
(statearr_19163_19180[(1)] = (4));

} else {
var statearr_19164_19181 = state_19154__$1;
(statearr_19164_19181[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (11))){
var inst_19131 = (state_19154[(8)]);
var inst_19141 = (state_19154[(2)]);
var inst_19142 = (inst_19131 + (1));
var inst_19131__$1 = inst_19142;
var state_19154__$1 = (function (){var statearr_19165 = state_19154;
(statearr_19165[(10)] = inst_19141);

(statearr_19165[(8)] = inst_19131__$1);

return statearr_19165;
})();
var statearr_19166_19182 = state_19154__$1;
(statearr_19166_19182[(2)] = null);

(statearr_19166_19182[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (9))){
var state_19154__$1 = state_19154;
var statearr_19167_19183 = state_19154__$1;
(statearr_19167_19183[(2)] = null);

(statearr_19167_19183[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (5))){
var state_19154__$1 = state_19154;
var statearr_19168_19184 = state_19154__$1;
(statearr_19168_19184[(2)] = null);

(statearr_19168_19184[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (10))){
var inst_19146 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19169_19185 = state_19154__$1;
(statearr_19169_19185[(2)] = inst_19146);

(statearr_19169_19185[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19155 === (8))){
var inst_19136 = (state_19154[(7)]);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19154__$1,(11),out,inst_19136);
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
});})(c__15835__auto___19175,out))
;
return ((function (switch__15652__auto__,c__15835__auto___19175,out){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19170[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19170[(1)] = (1));

return statearr_19170;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19154){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19154);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19171){if((e19171 instanceof Object)){
var ex__15656__auto__ = e19171;
var statearr_19172_19186 = state_19154;
(statearr_19172_19186[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19154);

return cljs.core.cst$kw$recur;
} else {
throw e19171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19187 = state_19154;
state_19154 = G__19187;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___19175,out))
})();
var state__15837__auto__ = (function (){var statearr_19173 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19173[(6)] = c__15835__auto___19175);

return statearr_19173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___19175,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19189 = (function (f,ch,meta19190){
this.f = f;
this.ch = ch;
this.meta19190 = meta19190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19191,meta19190__$1){
var self__ = this;
var _19191__$1 = this;
return (new cljs.core.async.t_cljs$core$async19189(self__.f,self__.ch,meta19190__$1));
});

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19191){
var self__ = this;
var _19191__$1 = this;
return self__.meta19190;
});

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19192 = (function (f,ch,meta19190,_,fn1,meta19193){
this.f = f;
this.ch = ch;
this.meta19190 = meta19190;
this._ = _;
this.fn1 = fn1;
this.meta19193 = meta19193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19194,meta19193__$1){
var self__ = this;
var _19194__$1 = this;
return (new cljs.core.async.t_cljs$core$async19192(self__.f,self__.ch,self__.meta19190,self__._,self__.fn1,meta19193__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19194){
var self__ = this;
var _19194__$1 = this;
return self__.meta19193;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19188_SHARP_){
var G__19195 = (((p1__19188_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19188_SHARP_) : self__.f.call(null,p1__19188_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19195) : f1.call(null,G__19195));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19192.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19190,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19189], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19193], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19192";

cljs.core.async.t_cljs$core$async19192.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19192");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19192.
 */
cljs.core.async.__GT_t_cljs$core$async19192 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19192(f__$1,ch__$1,meta19190__$1,___$2,fn1__$1,meta19193){
return (new cljs.core.async.t_cljs$core$async19192(f__$1,ch__$1,meta19190__$1,___$2,fn1__$1,meta19193));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19192(self__.f,self__.ch,self__.meta19190,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19196 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19196) : self__.f.call(null,G__19196));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19189.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19190], null);
});

cljs.core.async.t_cljs$core$async19189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19189";

cljs.core.async.t_cljs$core$async19189.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19189");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19189.
 */
cljs.core.async.__GT_t_cljs$core$async19189 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19189(f__$1,ch__$1,meta19190){
return (new cljs.core.async.t_cljs$core$async19189(f__$1,ch__$1,meta19190));
});

}

return (new cljs.core.async.t_cljs$core$async19189(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19197 = (function (f,ch,meta19198){
this.f = f;
this.ch = ch;
this.meta19198 = meta19198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19199,meta19198__$1){
var self__ = this;
var _19199__$1 = this;
return (new cljs.core.async.t_cljs$core$async19197(self__.f,self__.ch,meta19198__$1));
});

cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19199){
var self__ = this;
var _19199__$1 = this;
return self__.meta19198;
});

cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19198], null);
});

cljs.core.async.t_cljs$core$async19197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19197";

cljs.core.async.t_cljs$core$async19197.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19197");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19197.
 */
cljs.core.async.__GT_t_cljs$core$async19197 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19197(f__$1,ch__$1,meta19198){
return (new cljs.core.async.t_cljs$core$async19197(f__$1,ch__$1,meta19198));
});

}

return (new cljs.core.async.t_cljs$core$async19197(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19200 = (function (p,ch,meta19201){
this.p = p;
this.ch = ch;
this.meta19201 = meta19201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19202,meta19201__$1){
var self__ = this;
var _19202__$1 = this;
return (new cljs.core.async.t_cljs$core$async19200(self__.p,self__.ch,meta19201__$1));
});

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19202){
var self__ = this;
var _19202__$1 = this;
return self__.meta19201;
});

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19201], null);
});

cljs.core.async.t_cljs$core$async19200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19200";

cljs.core.async.t_cljs$core$async19200.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19200");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19200.
 */
cljs.core.async.__GT_t_cljs$core$async19200 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19200(p__$1,ch__$1,meta19201){
return (new cljs.core.async.t_cljs$core$async19200(p__$1,ch__$1,meta19201));
});

}

return (new cljs.core.async.t_cljs$core$async19200(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19204 = arguments.length;
switch (G__19204) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15835__auto___19244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___19244,out){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___19244,out){
return (function (state_19225){
var state_val_19226 = (state_19225[(1)]);
if((state_val_19226 === (7))){
var inst_19221 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
var statearr_19227_19245 = state_19225__$1;
(statearr_19227_19245[(2)] = inst_19221);

(statearr_19227_19245[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (1))){
var state_19225__$1 = state_19225;
var statearr_19228_19246 = state_19225__$1;
(statearr_19228_19246[(2)] = null);

(statearr_19228_19246[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (4))){
var inst_19207 = (state_19225[(7)]);
var inst_19207__$1 = (state_19225[(2)]);
var inst_19208 = (inst_19207__$1 == null);
var state_19225__$1 = (function (){var statearr_19229 = state_19225;
(statearr_19229[(7)] = inst_19207__$1);

return statearr_19229;
})();
if(cljs.core.truth_(inst_19208)){
var statearr_19230_19247 = state_19225__$1;
(statearr_19230_19247[(1)] = (5));

} else {
var statearr_19231_19248 = state_19225__$1;
(statearr_19231_19248[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (6))){
var inst_19207 = (state_19225[(7)]);
var inst_19212 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19207) : p.call(null,inst_19207));
var state_19225__$1 = state_19225;
if(cljs.core.truth_(inst_19212)){
var statearr_19232_19249 = state_19225__$1;
(statearr_19232_19249[(1)] = (8));

} else {
var statearr_19233_19250 = state_19225__$1;
(statearr_19233_19250[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (3))){
var inst_19223 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19225__$1,inst_19223);
} else {
if((state_val_19226 === (2))){
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19225__$1,(4),ch);
} else {
if((state_val_19226 === (11))){
var inst_19215 = (state_19225[(2)]);
var state_19225__$1 = state_19225;
var statearr_19234_19251 = state_19225__$1;
(statearr_19234_19251[(2)] = inst_19215);

(statearr_19234_19251[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (9))){
var state_19225__$1 = state_19225;
var statearr_19235_19252 = state_19225__$1;
(statearr_19235_19252[(2)] = null);

(statearr_19235_19252[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (5))){
var inst_19210 = cljs.core.async.close_BANG_(out);
var state_19225__$1 = state_19225;
var statearr_19236_19253 = state_19225__$1;
(statearr_19236_19253[(2)] = inst_19210);

(statearr_19236_19253[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (10))){
var inst_19218 = (state_19225[(2)]);
var state_19225__$1 = (function (){var statearr_19237 = state_19225;
(statearr_19237[(8)] = inst_19218);

return statearr_19237;
})();
var statearr_19238_19254 = state_19225__$1;
(statearr_19238_19254[(2)] = null);

(statearr_19238_19254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19226 === (8))){
var inst_19207 = (state_19225[(7)]);
var state_19225__$1 = state_19225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19225__$1,(11),out,inst_19207);
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
});})(c__15835__auto___19244,out))
;
return ((function (switch__15652__auto__,c__15835__auto___19244,out){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19239 = [null,null,null,null,null,null,null,null,null];
(statearr_19239[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19239[(1)] = (1));

return statearr_19239;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19225){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19225);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19240){if((e19240 instanceof Object)){
var ex__15656__auto__ = e19240;
var statearr_19241_19255 = state_19225;
(statearr_19241_19255[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19225);

return cljs.core.cst$kw$recur;
} else {
throw e19240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19256 = state_19225;
state_19225 = G__19256;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___19244,out))
})();
var state__15837__auto__ = (function (){var statearr_19242 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19242[(6)] = c__15835__auto___19244);

return statearr_19242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___19244,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19258 = arguments.length;
switch (G__19258) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15835__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto__){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto__){
return (function (state_19321){
var state_val_19322 = (state_19321[(1)]);
if((state_val_19322 === (7))){
var inst_19317 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
var statearr_19323_19361 = state_19321__$1;
(statearr_19323_19361[(2)] = inst_19317);

(statearr_19323_19361[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (20))){
var inst_19287 = (state_19321[(7)]);
var inst_19298 = (state_19321[(2)]);
var inst_19299 = cljs.core.next(inst_19287);
var inst_19273 = inst_19299;
var inst_19274 = null;
var inst_19275 = (0);
var inst_19276 = (0);
var state_19321__$1 = (function (){var statearr_19324 = state_19321;
(statearr_19324[(8)] = inst_19276);

(statearr_19324[(9)] = inst_19275);

(statearr_19324[(10)] = inst_19273);

(statearr_19324[(11)] = inst_19274);

(statearr_19324[(12)] = inst_19298);

return statearr_19324;
})();
var statearr_19325_19362 = state_19321__$1;
(statearr_19325_19362[(2)] = null);

(statearr_19325_19362[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (1))){
var state_19321__$1 = state_19321;
var statearr_19326_19363 = state_19321__$1;
(statearr_19326_19363[(2)] = null);

(statearr_19326_19363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (4))){
var inst_19262 = (state_19321[(13)]);
var inst_19262__$1 = (state_19321[(2)]);
var inst_19263 = (inst_19262__$1 == null);
var state_19321__$1 = (function (){var statearr_19327 = state_19321;
(statearr_19327[(13)] = inst_19262__$1);

return statearr_19327;
})();
if(cljs.core.truth_(inst_19263)){
var statearr_19328_19364 = state_19321__$1;
(statearr_19328_19364[(1)] = (5));

} else {
var statearr_19329_19365 = state_19321__$1;
(statearr_19329_19365[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (15))){
var state_19321__$1 = state_19321;
var statearr_19333_19366 = state_19321__$1;
(statearr_19333_19366[(2)] = null);

(statearr_19333_19366[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (21))){
var state_19321__$1 = state_19321;
var statearr_19334_19367 = state_19321__$1;
(statearr_19334_19367[(2)] = null);

(statearr_19334_19367[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (13))){
var inst_19276 = (state_19321[(8)]);
var inst_19275 = (state_19321[(9)]);
var inst_19273 = (state_19321[(10)]);
var inst_19274 = (state_19321[(11)]);
var inst_19283 = (state_19321[(2)]);
var inst_19284 = (inst_19276 + (1));
var tmp19330 = inst_19275;
var tmp19331 = inst_19273;
var tmp19332 = inst_19274;
var inst_19273__$1 = tmp19331;
var inst_19274__$1 = tmp19332;
var inst_19275__$1 = tmp19330;
var inst_19276__$1 = inst_19284;
var state_19321__$1 = (function (){var statearr_19335 = state_19321;
(statearr_19335[(8)] = inst_19276__$1);

(statearr_19335[(9)] = inst_19275__$1);

(statearr_19335[(10)] = inst_19273__$1);

(statearr_19335[(11)] = inst_19274__$1);

(statearr_19335[(14)] = inst_19283);

return statearr_19335;
})();
var statearr_19336_19368 = state_19321__$1;
(statearr_19336_19368[(2)] = null);

(statearr_19336_19368[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (22))){
var state_19321__$1 = state_19321;
var statearr_19337_19369 = state_19321__$1;
(statearr_19337_19369[(2)] = null);

(statearr_19337_19369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (6))){
var inst_19262 = (state_19321[(13)]);
var inst_19271 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19262) : f.call(null,inst_19262));
var inst_19272 = cljs.core.seq(inst_19271);
var inst_19273 = inst_19272;
var inst_19274 = null;
var inst_19275 = (0);
var inst_19276 = (0);
var state_19321__$1 = (function (){var statearr_19338 = state_19321;
(statearr_19338[(8)] = inst_19276);

(statearr_19338[(9)] = inst_19275);

(statearr_19338[(10)] = inst_19273);

(statearr_19338[(11)] = inst_19274);

return statearr_19338;
})();
var statearr_19339_19370 = state_19321__$1;
(statearr_19339_19370[(2)] = null);

(statearr_19339_19370[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (17))){
var inst_19287 = (state_19321[(7)]);
var inst_19291 = cljs.core.chunk_first(inst_19287);
var inst_19292 = cljs.core.chunk_rest(inst_19287);
var inst_19293 = cljs.core.count(inst_19291);
var inst_19273 = inst_19292;
var inst_19274 = inst_19291;
var inst_19275 = inst_19293;
var inst_19276 = (0);
var state_19321__$1 = (function (){var statearr_19340 = state_19321;
(statearr_19340[(8)] = inst_19276);

(statearr_19340[(9)] = inst_19275);

(statearr_19340[(10)] = inst_19273);

(statearr_19340[(11)] = inst_19274);

return statearr_19340;
})();
var statearr_19341_19371 = state_19321__$1;
(statearr_19341_19371[(2)] = null);

(statearr_19341_19371[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (3))){
var inst_19319 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19321__$1,inst_19319);
} else {
if((state_val_19322 === (12))){
var inst_19307 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
var statearr_19342_19372 = state_19321__$1;
(statearr_19342_19372[(2)] = inst_19307);

(statearr_19342_19372[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (2))){
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19321__$1,(4),in$);
} else {
if((state_val_19322 === (23))){
var inst_19315 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
var statearr_19343_19373 = state_19321__$1;
(statearr_19343_19373[(2)] = inst_19315);

(statearr_19343_19373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (19))){
var inst_19302 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
var statearr_19344_19374 = state_19321__$1;
(statearr_19344_19374[(2)] = inst_19302);

(statearr_19344_19374[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (11))){
var inst_19273 = (state_19321[(10)]);
var inst_19287 = (state_19321[(7)]);
var inst_19287__$1 = cljs.core.seq(inst_19273);
var state_19321__$1 = (function (){var statearr_19345 = state_19321;
(statearr_19345[(7)] = inst_19287__$1);

return statearr_19345;
})();
if(inst_19287__$1){
var statearr_19346_19375 = state_19321__$1;
(statearr_19346_19375[(1)] = (14));

} else {
var statearr_19347_19376 = state_19321__$1;
(statearr_19347_19376[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (9))){
var inst_19309 = (state_19321[(2)]);
var inst_19310 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19321__$1 = (function (){var statearr_19348 = state_19321;
(statearr_19348[(15)] = inst_19309);

return statearr_19348;
})();
if(cljs.core.truth_(inst_19310)){
var statearr_19349_19377 = state_19321__$1;
(statearr_19349_19377[(1)] = (21));

} else {
var statearr_19350_19378 = state_19321__$1;
(statearr_19350_19378[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (5))){
var inst_19265 = cljs.core.async.close_BANG_(out);
var state_19321__$1 = state_19321;
var statearr_19351_19379 = state_19321__$1;
(statearr_19351_19379[(2)] = inst_19265);

(statearr_19351_19379[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (14))){
var inst_19287 = (state_19321[(7)]);
var inst_19289 = cljs.core.chunked_seq_QMARK_(inst_19287);
var state_19321__$1 = state_19321;
if(inst_19289){
var statearr_19352_19380 = state_19321__$1;
(statearr_19352_19380[(1)] = (17));

} else {
var statearr_19353_19381 = state_19321__$1;
(statearr_19353_19381[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (16))){
var inst_19305 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
var statearr_19354_19382 = state_19321__$1;
(statearr_19354_19382[(2)] = inst_19305);

(statearr_19354_19382[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19322 === (10))){
var inst_19276 = (state_19321[(8)]);
var inst_19274 = (state_19321[(11)]);
var inst_19281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19274,inst_19276);
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19321__$1,(13),out,inst_19281);
} else {
if((state_val_19322 === (18))){
var inst_19287 = (state_19321[(7)]);
var inst_19296 = cljs.core.first(inst_19287);
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19321__$1,(20),out,inst_19296);
} else {
if((state_val_19322 === (8))){
var inst_19276 = (state_19321[(8)]);
var inst_19275 = (state_19321[(9)]);
var inst_19278 = (inst_19276 < inst_19275);
var inst_19279 = inst_19278;
var state_19321__$1 = state_19321;
if(cljs.core.truth_(inst_19279)){
var statearr_19355_19383 = state_19321__$1;
(statearr_19355_19383[(1)] = (10));

} else {
var statearr_19356_19384 = state_19321__$1;
(statearr_19356_19384[(1)] = (11));

}

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
});})(c__15835__auto__))
;
return ((function (switch__15652__auto__,c__15835__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_19357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19357[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__);

(statearr_19357[(1)] = (1));

return statearr_19357;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____1 = (function (state_19321){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19321);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19358){if((e19358 instanceof Object)){
var ex__15656__auto__ = e19358;
var statearr_19359_19385 = state_19321;
(statearr_19359_19385[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19321);

return cljs.core.cst$kw$recur;
} else {
throw e19358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19386 = state_19321;
state_19321 = G__19386;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__ = function(state_19321){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____1.call(this,state_19321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto__))
})();
var state__15837__auto__ = (function (){var statearr_19360 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19360[(6)] = c__15835__auto__);

return statearr_19360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto__))
);

return c__15835__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19388 = arguments.length;
switch (G__19388) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19391 = arguments.length;
switch (G__19391) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19394 = arguments.length;
switch (G__19394) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15835__auto___19441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___19441,out){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___19441,out){
return (function (state_19418){
var state_val_19419 = (state_19418[(1)]);
if((state_val_19419 === (7))){
var inst_19413 = (state_19418[(2)]);
var state_19418__$1 = state_19418;
var statearr_19420_19442 = state_19418__$1;
(statearr_19420_19442[(2)] = inst_19413);

(statearr_19420_19442[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19419 === (1))){
var inst_19395 = null;
var state_19418__$1 = (function (){var statearr_19421 = state_19418;
(statearr_19421[(7)] = inst_19395);

return statearr_19421;
})();
var statearr_19422_19443 = state_19418__$1;
(statearr_19422_19443[(2)] = null);

(statearr_19422_19443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19419 === (4))){
var inst_19398 = (state_19418[(8)]);
var inst_19398__$1 = (state_19418[(2)]);
var inst_19399 = (inst_19398__$1 == null);
var inst_19400 = cljs.core.not(inst_19399);
var state_19418__$1 = (function (){var statearr_19423 = state_19418;
(statearr_19423[(8)] = inst_19398__$1);

return statearr_19423;
})();
if(inst_19400){
var statearr_19424_19444 = state_19418__$1;
(statearr_19424_19444[(1)] = (5));

} else {
var statearr_19425_19445 = state_19418__$1;
(statearr_19425_19445[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19419 === (6))){
var state_19418__$1 = state_19418;
var statearr_19426_19446 = state_19418__$1;
(statearr_19426_19446[(2)] = null);

(statearr_19426_19446[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19419 === (3))){
var inst_19415 = (state_19418[(2)]);
var inst_19416 = cljs.core.async.close_BANG_(out);
var state_19418__$1 = (function (){var statearr_19427 = state_19418;
(statearr_19427[(9)] = inst_19415);

return statearr_19427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19418__$1,inst_19416);
} else {
if((state_val_19419 === (2))){
var state_19418__$1 = state_19418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19418__$1,(4),ch);
} else {
if((state_val_19419 === (11))){
var inst_19398 = (state_19418[(8)]);
var inst_19407 = (state_19418[(2)]);
var inst_19395 = inst_19398;
var state_19418__$1 = (function (){var statearr_19428 = state_19418;
(statearr_19428[(7)] = inst_19395);

(statearr_19428[(10)] = inst_19407);

return statearr_19428;
})();
var statearr_19429_19447 = state_19418__$1;
(statearr_19429_19447[(2)] = null);

(statearr_19429_19447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19419 === (9))){
var inst_19398 = (state_19418[(8)]);
var state_19418__$1 = state_19418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19418__$1,(11),out,inst_19398);
} else {
if((state_val_19419 === (5))){
var inst_19395 = (state_19418[(7)]);
var inst_19398 = (state_19418[(8)]);
var inst_19402 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19398,inst_19395);
var state_19418__$1 = state_19418;
if(inst_19402){
var statearr_19431_19448 = state_19418__$1;
(statearr_19431_19448[(1)] = (8));

} else {
var statearr_19432_19449 = state_19418__$1;
(statearr_19432_19449[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19419 === (10))){
var inst_19410 = (state_19418[(2)]);
var state_19418__$1 = state_19418;
var statearr_19433_19450 = state_19418__$1;
(statearr_19433_19450[(2)] = inst_19410);

(statearr_19433_19450[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19419 === (8))){
var inst_19395 = (state_19418[(7)]);
var tmp19430 = inst_19395;
var inst_19395__$1 = tmp19430;
var state_19418__$1 = (function (){var statearr_19434 = state_19418;
(statearr_19434[(7)] = inst_19395__$1);

return statearr_19434;
})();
var statearr_19435_19451 = state_19418__$1;
(statearr_19435_19451[(2)] = null);

(statearr_19435_19451[(1)] = (2));


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
}
}
}
}
});})(c__15835__auto___19441,out))
;
return ((function (switch__15652__auto__,c__15835__auto___19441,out){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19436[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19436[(1)] = (1));

return statearr_19436;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19418){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19418);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19437){if((e19437 instanceof Object)){
var ex__15656__auto__ = e19437;
var statearr_19438_19452 = state_19418;
(statearr_19438_19452[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19418);

return cljs.core.cst$kw$recur;
} else {
throw e19437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19453 = state_19418;
state_19418 = G__19453;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___19441,out))
})();
var state__15837__auto__ = (function (){var statearr_19439 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19439[(6)] = c__15835__auto___19441);

return statearr_19439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___19441,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19455 = arguments.length;
switch (G__19455) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15835__auto___19521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___19521,out){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___19521,out){
return (function (state_19493){
var state_val_19494 = (state_19493[(1)]);
if((state_val_19494 === (7))){
var inst_19489 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19495_19522 = state_19493__$1;
(statearr_19495_19522[(2)] = inst_19489);

(statearr_19495_19522[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (1))){
var inst_19456 = (new Array(n));
var inst_19457 = inst_19456;
var inst_19458 = (0);
var state_19493__$1 = (function (){var statearr_19496 = state_19493;
(statearr_19496[(7)] = inst_19457);

(statearr_19496[(8)] = inst_19458);

return statearr_19496;
})();
var statearr_19497_19523 = state_19493__$1;
(statearr_19497_19523[(2)] = null);

(statearr_19497_19523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (4))){
var inst_19461 = (state_19493[(9)]);
var inst_19461__$1 = (state_19493[(2)]);
var inst_19462 = (inst_19461__$1 == null);
var inst_19463 = cljs.core.not(inst_19462);
var state_19493__$1 = (function (){var statearr_19498 = state_19493;
(statearr_19498[(9)] = inst_19461__$1);

return statearr_19498;
})();
if(inst_19463){
var statearr_19499_19524 = state_19493__$1;
(statearr_19499_19524[(1)] = (5));

} else {
var statearr_19500_19525 = state_19493__$1;
(statearr_19500_19525[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (15))){
var inst_19483 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19501_19526 = state_19493__$1;
(statearr_19501_19526[(2)] = inst_19483);

(statearr_19501_19526[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (13))){
var state_19493__$1 = state_19493;
var statearr_19502_19527 = state_19493__$1;
(statearr_19502_19527[(2)] = null);

(statearr_19502_19527[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (6))){
var inst_19458 = (state_19493[(8)]);
var inst_19479 = (inst_19458 > (0));
var state_19493__$1 = state_19493;
if(cljs.core.truth_(inst_19479)){
var statearr_19503_19528 = state_19493__$1;
(statearr_19503_19528[(1)] = (12));

} else {
var statearr_19504_19529 = state_19493__$1;
(statearr_19504_19529[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (3))){
var inst_19491 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19493__$1,inst_19491);
} else {
if((state_val_19494 === (12))){
var inst_19457 = (state_19493[(7)]);
var inst_19481 = cljs.core.vec(inst_19457);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19493__$1,(15),out,inst_19481);
} else {
if((state_val_19494 === (2))){
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19493__$1,(4),ch);
} else {
if((state_val_19494 === (11))){
var inst_19473 = (state_19493[(2)]);
var inst_19474 = (new Array(n));
var inst_19457 = inst_19474;
var inst_19458 = (0);
var state_19493__$1 = (function (){var statearr_19505 = state_19493;
(statearr_19505[(10)] = inst_19473);

(statearr_19505[(7)] = inst_19457);

(statearr_19505[(8)] = inst_19458);

return statearr_19505;
})();
var statearr_19506_19530 = state_19493__$1;
(statearr_19506_19530[(2)] = null);

(statearr_19506_19530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (9))){
var inst_19457 = (state_19493[(7)]);
var inst_19471 = cljs.core.vec(inst_19457);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19493__$1,(11),out,inst_19471);
} else {
if((state_val_19494 === (5))){
var inst_19466 = (state_19493[(11)]);
var inst_19457 = (state_19493[(7)]);
var inst_19458 = (state_19493[(8)]);
var inst_19461 = (state_19493[(9)]);
var inst_19465 = (inst_19457[inst_19458] = inst_19461);
var inst_19466__$1 = (inst_19458 + (1));
var inst_19467 = (inst_19466__$1 < n);
var state_19493__$1 = (function (){var statearr_19507 = state_19493;
(statearr_19507[(12)] = inst_19465);

(statearr_19507[(11)] = inst_19466__$1);

return statearr_19507;
})();
if(cljs.core.truth_(inst_19467)){
var statearr_19508_19531 = state_19493__$1;
(statearr_19508_19531[(1)] = (8));

} else {
var statearr_19509_19532 = state_19493__$1;
(statearr_19509_19532[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (14))){
var inst_19486 = (state_19493[(2)]);
var inst_19487 = cljs.core.async.close_BANG_(out);
var state_19493__$1 = (function (){var statearr_19511 = state_19493;
(statearr_19511[(13)] = inst_19486);

return statearr_19511;
})();
var statearr_19512_19533 = state_19493__$1;
(statearr_19512_19533[(2)] = inst_19487);

(statearr_19512_19533[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (10))){
var inst_19477 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19513_19534 = state_19493__$1;
(statearr_19513_19534[(2)] = inst_19477);

(statearr_19513_19534[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (8))){
var inst_19466 = (state_19493[(11)]);
var inst_19457 = (state_19493[(7)]);
var tmp19510 = inst_19457;
var inst_19457__$1 = tmp19510;
var inst_19458 = inst_19466;
var state_19493__$1 = (function (){var statearr_19514 = state_19493;
(statearr_19514[(7)] = inst_19457__$1);

(statearr_19514[(8)] = inst_19458);

return statearr_19514;
})();
var statearr_19515_19535 = state_19493__$1;
(statearr_19515_19535[(2)] = null);

(statearr_19515_19535[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__15835__auto___19521,out))
;
return ((function (switch__15652__auto__,c__15835__auto___19521,out){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19516[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19516[(1)] = (1));

return statearr_19516;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19493){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19493);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19517){if((e19517 instanceof Object)){
var ex__15656__auto__ = e19517;
var statearr_19518_19536 = state_19493;
(statearr_19518_19536[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19493);

return cljs.core.cst$kw$recur;
} else {
throw e19517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19537 = state_19493;
state_19493 = G__19537;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___19521,out))
})();
var state__15837__auto__ = (function (){var statearr_19519 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19519[(6)] = c__15835__auto___19521);

return statearr_19519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___19521,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19539 = arguments.length;
switch (G__19539) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15835__auto___19609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15835__auto___19609,out){
return (function (){
var f__15836__auto__ = (function (){var switch__15652__auto__ = ((function (c__15835__auto___19609,out){
return (function (state_19581){
var state_val_19582 = (state_19581[(1)]);
if((state_val_19582 === (7))){
var inst_19577 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19583_19610 = state_19581__$1;
(statearr_19583_19610[(2)] = inst_19577);

(statearr_19583_19610[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (1))){
var inst_19540 = [];
var inst_19541 = inst_19540;
var inst_19542 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19581__$1 = (function (){var statearr_19584 = state_19581;
(statearr_19584[(7)] = inst_19542);

(statearr_19584[(8)] = inst_19541);

return statearr_19584;
})();
var statearr_19585_19611 = state_19581__$1;
(statearr_19585_19611[(2)] = null);

(statearr_19585_19611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (4))){
var inst_19545 = (state_19581[(9)]);
var inst_19545__$1 = (state_19581[(2)]);
var inst_19546 = (inst_19545__$1 == null);
var inst_19547 = cljs.core.not(inst_19546);
var state_19581__$1 = (function (){var statearr_19586 = state_19581;
(statearr_19586[(9)] = inst_19545__$1);

return statearr_19586;
})();
if(inst_19547){
var statearr_19587_19612 = state_19581__$1;
(statearr_19587_19612[(1)] = (5));

} else {
var statearr_19588_19613 = state_19581__$1;
(statearr_19588_19613[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (15))){
var inst_19571 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19589_19614 = state_19581__$1;
(statearr_19589_19614[(2)] = inst_19571);

(statearr_19589_19614[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (13))){
var state_19581__$1 = state_19581;
var statearr_19590_19615 = state_19581__$1;
(statearr_19590_19615[(2)] = null);

(statearr_19590_19615[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (6))){
var inst_19541 = (state_19581[(8)]);
var inst_19566 = inst_19541.length;
var inst_19567 = (inst_19566 > (0));
var state_19581__$1 = state_19581;
if(cljs.core.truth_(inst_19567)){
var statearr_19591_19616 = state_19581__$1;
(statearr_19591_19616[(1)] = (12));

} else {
var statearr_19592_19617 = state_19581__$1;
(statearr_19592_19617[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (3))){
var inst_19579 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19581__$1,inst_19579);
} else {
if((state_val_19582 === (12))){
var inst_19541 = (state_19581[(8)]);
var inst_19569 = cljs.core.vec(inst_19541);
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19581__$1,(15),out,inst_19569);
} else {
if((state_val_19582 === (2))){
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19581__$1,(4),ch);
} else {
if((state_val_19582 === (11))){
var inst_19549 = (state_19581[(10)]);
var inst_19545 = (state_19581[(9)]);
var inst_19559 = (state_19581[(2)]);
var inst_19560 = [];
var inst_19561 = inst_19560.push(inst_19545);
var inst_19541 = inst_19560;
var inst_19542 = inst_19549;
var state_19581__$1 = (function (){var statearr_19593 = state_19581;
(statearr_19593[(11)] = inst_19559);

(statearr_19593[(12)] = inst_19561);

(statearr_19593[(7)] = inst_19542);

(statearr_19593[(8)] = inst_19541);

return statearr_19593;
})();
var statearr_19594_19618 = state_19581__$1;
(statearr_19594_19618[(2)] = null);

(statearr_19594_19618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (9))){
var inst_19541 = (state_19581[(8)]);
var inst_19557 = cljs.core.vec(inst_19541);
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19581__$1,(11),out,inst_19557);
} else {
if((state_val_19582 === (5))){
var inst_19542 = (state_19581[(7)]);
var inst_19549 = (state_19581[(10)]);
var inst_19545 = (state_19581[(9)]);
var inst_19549__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19545) : f.call(null,inst_19545));
var inst_19550 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19549__$1,inst_19542);
var inst_19551 = cljs.core.keyword_identical_QMARK_(inst_19542,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19552 = ((inst_19550) || (inst_19551));
var state_19581__$1 = (function (){var statearr_19595 = state_19581;
(statearr_19595[(10)] = inst_19549__$1);

return statearr_19595;
})();
if(cljs.core.truth_(inst_19552)){
var statearr_19596_19619 = state_19581__$1;
(statearr_19596_19619[(1)] = (8));

} else {
var statearr_19597_19620 = state_19581__$1;
(statearr_19597_19620[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (14))){
var inst_19574 = (state_19581[(2)]);
var inst_19575 = cljs.core.async.close_BANG_(out);
var state_19581__$1 = (function (){var statearr_19599 = state_19581;
(statearr_19599[(13)] = inst_19574);

return statearr_19599;
})();
var statearr_19600_19621 = state_19581__$1;
(statearr_19600_19621[(2)] = inst_19575);

(statearr_19600_19621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (10))){
var inst_19564 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19601_19622 = state_19581__$1;
(statearr_19601_19622[(2)] = inst_19564);

(statearr_19601_19622[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (8))){
var inst_19541 = (state_19581[(8)]);
var inst_19549 = (state_19581[(10)]);
var inst_19545 = (state_19581[(9)]);
var inst_19554 = inst_19541.push(inst_19545);
var tmp19598 = inst_19541;
var inst_19541__$1 = tmp19598;
var inst_19542 = inst_19549;
var state_19581__$1 = (function (){var statearr_19602 = state_19581;
(statearr_19602[(7)] = inst_19542);

(statearr_19602[(14)] = inst_19554);

(statearr_19602[(8)] = inst_19541__$1);

return statearr_19602;
})();
var statearr_19603_19623 = state_19581__$1;
(statearr_19603_19623[(2)] = null);

(statearr_19603_19623[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__15835__auto___19609,out))
;
return ((function (switch__15652__auto__,c__15835__auto___19609,out){
return (function() {
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19604[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19604[(1)] = (1));

return statearr_19604;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19581){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__(state_19581);
if(cljs.core.keyword_identical_QMARK_(result__15655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19605){if((e19605 instanceof Object)){
var ex__15656__auto__ = e19605;
var statearr_19606_19624 = state_19581;
(statearr_19606_19624[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19581);

return cljs.core.cst$kw$recur;
} else {
throw e19605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15654__auto__,cljs.core.cst$kw$recur)){
var G__19625 = state_19581;
state_19581 = G__19625;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
;})(switch__15652__auto__,c__15835__auto___19609,out))
})();
var state__15837__auto__ = (function (){var statearr_19607 = (f__15836__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15836__auto__.cljs$core$IFn$_invoke$arity$0() : f__15836__auto__.call(null));
(statearr_19607[(6)] = c__15835__auto___19609);

return statearr_19607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15837__auto__);
});})(c__15835__auto___19609,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

