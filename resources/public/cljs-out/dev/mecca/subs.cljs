(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf :refer [reg-sub]]
            [mecca.pix :refer [get-pixels]]))

(reg-sub
 :base64
 (fn [db _]
   (:base64 db)))

(reg-sub
 :img
 (fn [db _]
   (:img db)))

(reg-sub
 :pix
 (fn [db _]
   (get-pixels (:img db))))

(reg-sub
 :colors
 (fn [db _]
   (reverse (sort-by :pixels (for [[color pix] (get-pixels (:img db))]
                               {:color color :pixels (count pix)})))))

(reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(reg-sub
 :xml
 (fn [db _]
   (:xml db)))