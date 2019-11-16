# mecca-pix
This came about because of my deep frustration with every SVG tool I could find for tracing bitmaps, I simply wanted to preserve the pixels 1:1 for consistent results. For smaller files, run them through [SVGOMG](https://jakearchibald.github.io/svgomg/) or the like.


[Live app here](https://porkostomus.github.io/mecca-pix/)

## SVG Output

The data representing the SVG paths is printed below the image in EDN format. For the final XML, see your browser's inspector.

# Development

Start local server:

```
clojure -A:fig -b dev -r
```

Create optimized build:

```
clj -m figwheel.main -O advanced -bo dev
```

# Credits

Inspired by [Pixels.svg](https://codepen.io/shshaw/pen/XbxvNj), which is itself inspired by [px2svg](https://github.com/meyerweb/px2svg).