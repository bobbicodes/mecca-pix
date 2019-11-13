(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:file-upload nil}))

(reg-event-db
 :file-upload
 (fn [db [_ file]]
      (assoc db :file-upload file)))