(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf :refer [reg-sub]]))

(rf/reg-sub
 :file-upload
 (fn [db _]
   (:file-upload db)))
