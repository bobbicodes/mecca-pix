(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [mecca.pix :refer [get-color get-colors img->data edn->xml svg-data svg-paths]]))

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
          :width 400
      ;    :style {:image-rendering "pixelated"}
          }]])

(defn base64 []
  [:div
   [:p "Base64:"]
   [:textarea {:rows      10
               :cols      48
               :value     (str @(subscribe [:base64]))
               :read-only true}]])

(defn orig-img []
  (let [file (subscribe [:base64])]
    (fn []
      [:div
       [:p "Original image:"]
       [:img {:src   @file}]])))

(defn svg-output []
  (let [img (subscribe [:img])]
    (fn []
      [:div
       [:p (str  "Width: " (.-width @img))]
       [:p (str  "Height: " (.-height @img))]
       [:p "SVG:"]
       [:svg#converted 
        {:xmlns           "http://www.w3.org/2000/svg"
         :shape-rendering "crispEdges"
         :width           400
         :view-box        (str "0 -0.5 " (.-width @img) " " (.-height @img))}
        (svg-paths (svg-data @img))]
       [:textarea {:rows      10
                   :cols      48
                   :value     (edn->xml (.-width @img) (.-height @img) (svg-data @img))
                   :read-only true}]])))

(defn img-data []
  [:div
   [:p "Image data:"]
   [:textarea {:rows      10
               :cols      48
               :value     (str (img->data @(subscribe [:img])))
               :read-only true}]])

(defn color-pix []
  [:div
   [:h3 "Pixels by color:"]
   (for [[k v] (get-colors @(subscribe [:img]))]
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
                  :value     (str (reverse v))
                  :read-only true}]])])

(defn mecca []
  [:div
   [import-image]
   (when @(subscribe [:img])
     [:div
      [orig-img]
      [svg-output]
      [scaled-image]
      [base64]
      [img-data]
      [color-pix]])])

(comment
  
canvas
  
  (let [canvas (.getElementById js/document "canvas")
        ctx    (.getContext canvas "2d")
        img (js/Image.)]
    (set! (.-src img) "https://mdn.mozillademos.org/files/5397/rhino.jpg")
    (set! (.-onload img) 
          (fn []
            (.drawImage ctx img 0 0)
            (set! (.. img -style -display) "none"))))
  
  (keys (get-colors @(subscribe [:img])))
  (img)
  )
