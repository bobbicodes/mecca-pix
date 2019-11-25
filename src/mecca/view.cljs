(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [mecca.pix :refer [get-pixels closest-neighbor similar-colors rgba->hex img->data edn->xml svg-data svg-paths]]))

(defn import-image []
  [:div
   [:h1 "Import pixel art"]
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

(defn color-pix
  "Renders image's colors sorted by similarity to each other,
  with most similar on top"
  []
  [:div
   [:h3 "Pixels by color:"]
   (let [pixels (get-pixels @(subscribe [:img]))
         colors (similar-colors (keys pixels))]
     (for [color colors]
       ^{:key color}
       [:div
        [:span
         [:svg {:width  40
                :height 40} [:rect {:width  40
                                    :height 40
                                    :fill   (str (apply rgba->hex color))}]]
         [:p (str "Color distance: " (.round js/Math (closest-neighbor color colors)))]
         [:p (str "RGBA: " (apply str (interpose " " color)))]
         [:p (str "Hex: " (apply rgba->hex color))]]
        [:textarea {:rows      3
                    :cols      30
                    :value     (str (reverse (get pixels color)))
                    :read-only true}]]))])

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
      [:p "Path data (EDN):"]
      [:textarea {:rows      10
                  :cols      48
                  :value     (str (svg-data @(subscribe [:img])))
                  :read-only true}]
     [color-pix]])])

(comment
  
  (let [canvas (.getElementById js/document "canvas")
        ctx    (.getContext canvas "2d")
        img (js/Image.)]
    (set! (.-src img) "https://mdn.mozillademos.org/files/5397/rhino.jpg")
    (set! (.-onload img) 
          (fn []
            (.drawImage ctx img 0 0)
            (set! (.. img -style -display) "none"))))

  (keys (get-pixels @(subscribe [:img])))
  )
