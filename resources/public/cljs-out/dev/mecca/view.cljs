(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]))

(defn component->hex
  [c]
  (let [hex (.toString (js/parseInt c) 16)]
    (if (= (.-length hex) 1) (+ 0 hex) hex)))

(defn get-color
  [r g b a]
  (let [a (js/parseInt a)]
  (when (or (= a "undefined") (= a 255))
    (str "#" (component->hex r) (component->hex g) (component->hex b)))
  (when (= a 0) false)
  (str "rgba(" r "," g "," b "," (/ a 255) ")")))

(defn make-path-data [x y w] (str "M" x " " y "h" w ""))

(defn make-path [color data] (str "[\"" color "\" \"" data "\"]\n"))


(defn img->data [img] 
  (let [canvas (.createElement js/document "canvas")
        ctx (.getContext canvas "2d")
        width (.-width img) 
        height (.-height img)] 
    (set! (.-width canvas) width) 
    (set! (.-height canvas) height) 
    (.drawImage ctx img 0 0) 
    (.getImageData ctx 0 0 width height)))

(defn convert
  [img fileName]
  (let [img-data   (img->data img)
        ;converted (convertImage imgData)
        ]
    ;(showOutput converted fileName)
    img-data))

(defn make-image
  [src callback]
  (let [img (js/Image.)]
    (set! (.-onload img) callback)
    (set! (.-src img) (if (.-target src) (.. src -target -result) src))))

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
      [:img {:src (str @file)}]])])
