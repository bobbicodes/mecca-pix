(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]))

(defn component->hex [c]
  (let [hex (.toString c 16)]
    (if (= (.-length hex) 1) (+ 0 hex) hex)))

(defn get-color [r g b a]
  (cond
    (= a 255)
    (str "#" (component->hex r) (component->hex g) (component->hex b))
  (= a 0) false
  :else
  (str "rgba(" r "," g "," b "," (/ a 255) ")")))

(defn make-path-data [x y w]
  (str "M" x " " y "h" w))

(defn make-path [color data]
  (str "[\"" color "\" \"" data "\"]\n"))

(defn img->data [img] 
  (let [canvas (.createElement js/document "canvas")
        ctx (.getContext canvas "2d")
        width (.-width img)
        height (.-height img)]
    (set! (.-width canvas) width) 
    (set! (.-height canvas) height) 
    (.drawImage ctx img 0 0) 
    (.-data (.getImageData ctx 0 0 width height))))

(defn img-el []
  (let [file (subscribe [:file-upload])
        el (subscribe [:img])]
    (fn []
      [:div
       [:img {:src @file}]
       [:p (str "Base64:" @file)]
         [:div
          [:p (str "Width: " (.-width @el))]
          [:p (str "Height: " (.-height @el))]]])))

(defn get-colors [img]
  (let [data (img->data img)
        w (.-width img)]
    (loop [n 0 colors {}]
      (if (or (>= n (.-length data))
               (> 1 (aget data (+ n 3))))
        colors
        (recur (+ 4 n)
               (update colors
                       [(aget data n)
                        (aget data (+ n 1))
                        (aget data (+ n 2))
                        (aget data (+ n 3))]
                       #(conj % [(mod (/ n 4) w)
                                  (.floor js/Math (/ (/ n 4) w))])))))))

(defn import-image []
  [:div
   [:h1 "Import image file"]
   [:input#input
    {:type      "file"
     :on-change
     (fn [e]
       (let [dom    (o/get e "target")
             file   (o/getValueByKeys dom #js ["files" 0])
             reader (js/FileReader.)]
         (.readAsDataURL reader file)
         (set! (.-onload reader)
               #(dispatch [:file-upload
                           (-> % .-target .-result)]))))}] 
   [:p]])

(defn mecca []
  [:div
   [import-image]
   (when-let [img @(subscribe [:img])]
     [:div
      [img-el]
      [:h3 "Pixels by color:"]
      (for [[k v] (get-colors img)]
        [:div
         [:span 
          [:svg {:width 20 :height 20} [:rect {:width 20 :height 20 :fill (str (apply get-color k))}]]
          (str " "(apply get-color k))]
         [:p (str (reverse v))]
         [:p "Path data:"]
         [:p (apply str (map (fn [[x y]] (make-path-data x y 1)) (reverse v)))]
         [:p]])])])
