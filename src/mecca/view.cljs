(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]))

(defn mecca []
  [:div
   [:h1 "Import MIDI file"]
   [:p]
   [:div
    [:input#input
     {:type "file"
      :on-change
      (fn [event]
        (let [dom  (o/get event "target")
              file (o/getValueByKeys dom #js ["files" 0])
              reader (js/FileReader.)]
          (.readAsArrayBuffer reader file)
          (set! (.-onload reader)
                (fn [e]
                  (dispatch [:file-upload 
                             (-> e .-target .-result
                                 (js/Uint8Array.)
                                 crypt/byteArrayToHex)
                             ])))))}]]
   (let [file (subscribe [:file-upload])]
     [:div
      [:h2 "Hex dump:"]
      [:p (str @file)]
      [:h2 "Header:"]
      [:p (apply str (take 8 @file))]
      (if (= (apply str (take 8 @file)) "4d546864")
        [:h3.green "Valid MIDI file :)"])])])
