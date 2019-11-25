(ns mecca.pix
  (:require [re-frame.core :refer [subscribe]]))

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

;; TODO: color quantization must be done *before* assembling paths -
;; limiting color pallet will maximize color run optimization.

(defn compare-rgb
  "Quantifies euclidean distance in 3 dimensional color space"
  [[r1 g1 b1 _] [r2 g2 b2 _]]
  (.sqrt js/Math (+ (.pow js/Math (- r1 r2) 2)
                    (.pow js/Math (- g1 g2) 2)
                    (.pow js/Math (- b1 b2) 2))))

(comment
  (compare-rgb  [102 51 204 255] [102 51 153 255])
  (compare-rgb [153 51 204 255] [153 102 153 255])
(compare-rgb [153 102 153 255] [204 204 204 255])
(compare-rgb [204 204 204 255]  [255 204 204 255])
(compare-rgb [0 0 0 0]  [255 255 255 255])
(compare-rgb [153 204 255 255]  [153 204 255 255])

  )

(defn closest-neighbor
  "Returns distance of nearest color to color in colors"
  [color colors]
  (second (sort (map #(compare-rgb color %) colors))))

(defn similar-colors 
  "Takes a collection of rgba vectors,
  sorts them by colors closest to each other"
  [colors]
  (sort-by #(closest-neighbor % colors)
           colors))

(comment
  (keys (get-pixels @(subscribe [:img])))
  
  (closest-neighbor [0 0 1 255] (keys (get-pixels @(subscribe [:img]))))

  (similar-colors (keys (get-pixels @(subscribe [:img])))))

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

  (partition-by last   '([0 0] [1 0] [2 0] [3 0] [4 0] [5 0] [6 0] [10 0] [11 0] [12 0] [13 0] [14 0] [15 0] [16 0] [0 1] [1 1] [2 1] [3 1] [4 1] [12 1] [13 1] [14 1] [15 1] [16 1]))

  '([0 0] [10 0] [11 0] [16 0] [0 1] [4 1] [12 1] [16 1])

  "M0 0h1M1 0h1M2 0h1M3 0h1M4 0h1M5 0h1M6 0h1M10 0h1M11 0h1M12 0h1M13 0h1M14 0h1M15 0h1M16 0h1M0 1h1M1 1h1M2 1h1M3 1h1M4 1h1M12 1h1M13 1h1M14 1h1M15 1h1M16 1h1M0 2h1M1 2h1M2 2h1M3 2h1M13 2h1M14 2h1M15 2h1M16 2h1M0 3h1M1 3h1M2 3h1M14 3h1M15 3h1M16 3h1M0 4h1M1 4h1M15 4h1M16 4h1M0 5h1M1 5h1M15 5h1M16 5h1M0 6h1M1 6h1M2 6h1M14 6h1M15 6h1M16 6h1M0 7h1M1 7h1M2 7h1M3 7h1M13 7h1M14 7h1M15 7h1M16 7h1M0 8h1M1 8h1M2 8h1M3 8h1M4 8h1M12 8h1M13 8h1M14 8h1M15 8h1M16 8h1M0 9h1M1 9h1M2 9h1M14 9h1M15 9h1M16 9h1M0 10h1M1 10h1M15 10h1M16 10h1M0 11h1M16 11h1M0 15h1M16 15h1M0 16h1M1 16h1M15 16h1M16 16h1M0 17h1M1 17h1M15 17h1M16 17h1M0 18h1M16 18h1M0 22h1M16 22h1"

  "M0 0h7M10 0h7M0 1h5M12 1h5M0 2h4M13 2h4M0 3h3M14 3h3M0 4h2M15 4h2M0 5h2M15 5h2M0 6h3M14 6h3M0 7h4M13 7h4M0 8h5M12 8h5M0 9h3M14 9h3M0 10h2M15 10h2M0 11h1M16 11h1M0 15h1M16 15h1M0 16h2M15 16h2M0 17h2M15 17h2M0 18h1M16 18h1M0 22h1M16 22h1")

(defn make-path-data [x y w]
  (str "M" x " " y "h" w))

(defn svg-data [img]
  (for [[k v] (get-pixels img)]
    [(apply rgba->hex k)
     (apply str (map (fn [[x y]] (make-path-data x y 1))
                     (reverse v)))]))