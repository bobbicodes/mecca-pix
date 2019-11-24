(ns ^:figwheel-hooks mecca.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [mecca.events]
   [mecca.subs]
   [mecca.view :as view]))

(rf/dispatch-sync [:initialize-db])

; load sample image

(rf/dispatch [:file-upload "data:image/gif;base64,R0lGODlhEQAXAOdWAAAAABgYGDEYACkpKQAISgBgKFogAHspEHZMAHpQLkFBQVJSUmhoUGpqanh4aHBwcHt7ewAA+HBI+AiYMACAQADQKAD4ADCg+ADYwAD4yAD4+EiI+HCo+LAAGIBgAJ9hFbBIAPgAAPgAGPgAMMBAIMVtFbAowKhw0MAAwPgA2Pgo+MhQwKmCSsWGBMiAAPiAAPiQAPakGNCQSMyncfDYAPj4AP//AICAgJycnKCggKCogKiokLC4kKioqKCgsL29vbiQyIDokKDAsIj4+Lj4+Ny8jv+A//iw+MDIoMjQqPjAgPjAkPjouPj4uMDAwMjIwMjIyNDQ0Mjo4ODowPj46PDw8Pj4+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+EUNyZWF0ZWQgd2l0aCBHSU1QACwAAAAAEQAXAAAIsgCNCBxoxINBgggHGnTB8GBCgR5cKFEikaKHhwsBTFQCwIVDhRQ5btQo8SJIDxMNolSC0qTClhtbuiRocGPKmQhRAtjJ8mFBDzBWsgTwESKMo0ENEo3oEihDFzs9RH160WlEADU6Yu0YMSkMj1CzhuXqwmtDAFa0po1YtupRqGnhEm34UqrYrSppMgRAQ2tfukav/uXL9aBTj4Sl9mWr8uvTqDufejSIFClYyXlVat6cNyAAOw=="])

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rf/clear-subscription-cache!)
  (r/render-component [view/mecca] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(defn ^:export init []
  (mount-app-element))