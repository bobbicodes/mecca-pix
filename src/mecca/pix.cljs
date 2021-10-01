(ns mecca.pix
  (:require [re-frame.core :refer [subscribe]]
            [reagent.core :as r]))

(defn component->hex
  "Takes ASCII value 0-255, returns hex byte as string"
  [c]
  (let [hex (.toString c 16)]
    (if (= (count hex) 1) (+ 0 hex) hex)))

(comment 
  (component->hex 255)
  )

(defn rgba->hex
  "Returns proper hex color code. Ignores fully transparent colors."
  [r g b a]
  (when-not (= a 0)
    (str "#" (component->hex r) (component->hex g) (component->hex b))))

(defn img->data
  "Draws image onto HTML Canvas, returns a
   Uint8ClampedArray of rgba values (0-255 inclusive)"
  [img]
  (let [canvas (.createElement js/document "canvas")
        ctx    (.getContext canvas "2d")
        width  (.-width img)
        height (.-height img)]
    (set! (.-width canvas) width)
    (set! (.-height canvas) height)
    (.drawImage ctx img 0 0)
    (.-data (.getImageData ctx 0 0 width height))))

(defn pix 
  "Takes an HTMLImageElement, returns a seq of rgba vals."
  [el]
  (vec (partition 4 (js->clj (.from js/Array (img->data el))))))

(defonce threshold (r/atom 80))

(defn input [type label value on-change]
  [:label label
   [:input
    {:style     {:width 40}
     :type      type
     :value     value
     :on-change on-change}]])

(defn quantize-bw [[r g b a]]
  (if (< @threshold (/ (+ r g b) 3))
    [255 255 255 255]
    [0 0 0 255]))

(defn get-pixels
  "Takes an HTMLImageElement, returns a map of
  the colors to their corresponding pixels"
  [img]
  (let [data (img->data img)
        w    (.-width img)]
    (loop [n      0
           pixels {}]
      (if (>= n (.-length data))
        (dissoc pixels [0 0 0 0])
        (recur (+ 4 n)
               (update pixels
                       [(aget data n)
                                  (aget data (+ n 1))
                                  (aget data (+ n 2))
                                  (aget data (+ n 3))]
                       #(conj % [(mod (/ n 4) w)
                                 (.floor js/Math (/ (/ n 4) w))])))))))

(comment
  @(subscribe [:colors])
  @(subscribe [:pix])
  )

(defn compare-rgb
  "Quantifies euclidean distance in 3 dimensional color space"
  [[r1 g1 b1 _] [r2 g2 b2 _]]
  (.sqrt js/Math (+ (.pow js/Math (- r1 r2) 2)
                    (.pow js/Math (- g1 g2) 2)
                    (.pow js/Math (- b1 b2) 2))))

(defn closest-neighbor
  "Returns distance of nearest color to color in colors"
  [color colors]
  (second (sort (map #(compare-rgb color %) colors))))

(defn closest-color [color colors]
  (:color (first (sort-by :dist (for [dominant-color colors]
                                  {:color dominant-color
                                   :dist (compare-rgb color dominant-color)})))))

(defn quantize-color [color n]
  (closest-color color (map :color (take n @(subscribe [:colors])))))

(defonce n-colors (r/atom 5))

(defn quantized-pixels
  "Takes an HTMLImageElement, returns a map of
  the colors to their corresponding pixels"
  [img]
  (let [data (img->data img)
        w    (.-width img)]
    (loop [n      0
           pixels {}]
      (if (>= n (.-length data))
        (dissoc pixels [0 0 0 0])
        (recur (+ 4 n)
               (update pixels
                       (quantize-color [(aget data n)
                                        (aget data (+ n 1))
                                        (aget data (+ n 2))
                                        (aget data (+ n 3))]
                                       @n-colors)
                       #(conj % [(mod (/ n 4) w)
                                 (.floor js/Math (/ (/ n 4) w))])))))))

(comment

  )

(defn similar-colors 
  "Takes a collection of rgba vectors,
  sorts them by colors closest to each other"
  [colors]
  (sort-by #(closest-neighbor % colors)
           colors))


(comment
  )

(defn svg-paths
  "Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
   and outputs a reagent hiccup element"
  [paths]
  (into [:g]
        (for [[color path] paths]
          [:path {:stroke color
                  :d      path}])))

(defn edn->xml 
  "Accepts SVG paths in the form [[color1 path1] [color2 path2] ...]
   and outputs SVG in XML"
  [width height paths]
  (str "<svg xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"crispEdges\" viewBox=\"0 -0.5 "
       width " " height "\"><g>"
       (apply str (for [[color path] paths]
                    (str "<path stroke=\"" color "\" " "d=\"" path "\"></path>\n")))
       "</g></svg>"))

(comment

  )

(defn make-path-data [x y w]
  (str "M" x " " y "h" w))

(defn row-runs [color]
  (for [y (distinct (map last color))]
    (loop [pixels (map first (filter #(= y (last %)) color))
           run-start (first pixels)
           runs []]
      (cond
        (empty? pixels) runs
        (= 1 (- (second pixels) (first pixels)))
        (recur (rest pixels) run-start runs)
        :else
        (recur (rest pixels) (second pixels)
               (conj runs [run-start y (inc (- (first pixels) run-start))]))))))

#_(defn svg-data [img]
  (for [[k v] (get-pixels img)]
    [(apply rgba->hex k)
     (apply str (map (fn [[x y]] (make-path-data x y 1))
                     (reverse v)))]))

 (defn svg-data [img]
   (for [[k v] (quantized-pixels img)]
     [(apply rgba->hex k)
      (apply str (flatten
                  (map
                   #(map (fn [run] (apply make-path-data run)) %) (row-runs (reverse v)))))]))

(comment

  )