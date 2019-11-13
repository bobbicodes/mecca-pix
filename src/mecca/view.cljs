(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]))

(defn mecca []
  [:div
   [:h1 "Import image file"]
   [:p]
   [:div
    [:input#input
     {:type "file"
      :on-change
      (fn [event]
        (let [dom  (o/get event "target")
              file (o/getValueByKeys dom #js ["files" 0])
              reader (js/FileReader.)]
          (.readAsDataURL reader file)
          (set! (.-onload reader)
                (fn [e]
                  (dispatch [:file-upload
                             (-> e .-target .-result)])))))}]]
   (let [file (subscribe [:file-upload])]
     [:div
      [:h2 "Base64 URL:"]
      [:p (str @file)]
      (if (= (apply str (take 8 @file)) "4d546864")
        [:h3.green "Valid MIDI file :)"])])])
