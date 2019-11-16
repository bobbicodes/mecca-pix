(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]))

(defn svg-paths
  [paths]
   (into [:g]
         (for [[color path] paths]
           [:path {:stroke color
                   :d      path}])))

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

;; TODO: implement horizontal color run optimization
;; (or better yet... color quantization!)

(defn make-path-data [x y w]
  (str "M" x " " y "h" w))

(defn img->data [img] 
  (let [canvas (.createElement js/document "canvas")
        ctx (.getContext canvas "2d")
        width (.-width img)
        height (.-height img)]
    (set! (.-width canvas) width) 
    (set! (.-height canvas) height) 
    (.drawImage ctx img 0 0) 
    (.-data (.getImageData ctx 0 0 width height))))

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

(defn svg-data [img]
  (for [[k v] (get-colors img)]
    [(apply get-color k)
     (apply str (map (fn [[x y]] (make-path-data x y 1)) 
                     (reverse v)))]))

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
                           (-> % .-target .-result)]))))}]])

(defn scaled-image []
  [:div
   [:p "Original image scaled normally:"]
   [:img {:src   @(subscribe [:base64])
          :width 480}]])

(defn base64 []
  [:div
   [:p "Base64:"]
   [:textarea {:rows      3
               :cols      40
               :value     (str @(subscribe [:base64]))
               :read-only true}]])

(defn orig-img []
  (let [file (subscribe [:base64])]
    (fn []
      [:div
       [:p "Original image:"]
       [:img {:src   @file}]])))

(defn edn->xml [width height paths]
  (str "<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 "
       width " " height "\"><g>"
       (apply str (for [[color path] paths]
              (str "<path stroke=\"" color "\" " "d=\"" path "\"></path>\n")))
       "</g></svg>"))

(defn svg-output []
  (let [img (subscribe [:img])
        width (.-width @img)
        height (.-height @img)]
    (fn []
      [:div
       [:p "SVG:"]
       [:svg#converted 
        {:xmlns           "http://www.w3.org/2000/svg"
         :shape-rendering "crispEdges"
         :width           480
         :view-box        (str "0 -0.5 " width " " height)}
        (svg-paths (svg-data @img))]
       [:textarea {:rows      10
                   :cols      100
                   :value     (edn->xml width height (svg-data @img))
                   :read-only true}]])))

(defn img-data []
  [:div
   [:p "Image data:"]
   [:textarea {:rows      3
               :cols      50
               :value     (str (img->data @(subscribe [:img])))
               :read-only true}]])

(defn mecca []
  [:div
   [import-image]
   (when-let [img @(subscribe [:img])]
     [:div
      [orig-img]
      [svg-output]
      [scaled-image]
      [base64]
      [img-data]
      [:div
       [:h3 "Pixels by color:"]
       (for [[k v] (get-colors img)]
         ^{:key k}
         [:div
          [:span
           [:svg {:width  30
                  :height 30} [:rect {:width  30
                                      :height 30
                                      :fill   (str (apply get-color k))}]]
           (str " " (apply get-color k))]
          [:textarea {:rows      3
                      :cols      30
                      :value     (str v)
                      :read-only true}]])]])])
