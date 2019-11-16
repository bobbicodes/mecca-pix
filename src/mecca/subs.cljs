(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf :refer [reg-sub]]))

(reg-sub
 :base64
 (fn [db _]
   (:base64 db)))

(reg-sub
 :img
 (fn [db _]
   (:img db)))

(reg-sub
 :converting?
 (fn [db _]
   (:converting? db)))

(reg-sub
 :xml
 (fn [db _]
   (:xml db)))