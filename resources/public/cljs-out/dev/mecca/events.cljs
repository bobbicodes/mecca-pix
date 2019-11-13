(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db reg-event-fx dispatch subscribe]]
   [re-pressed.core :as rp]
   [day8.re-frame.undo :as undo :refer [undoable]]
   [goog.events :refer [listen unlisten]])
  (:import [goog.events EventType]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:file-upload nil}))

(reg-event-db
 :file-upload
 (fn [db [_ file]]
      (assoc db :file-upload file)))