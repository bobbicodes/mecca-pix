# mecca-pix
This came about because of my deep frustration with every SVG tool I could find for tracing bitmaps, I simply wanted to preserve the pixels 1:1 for consistent results. When I found the technique used in [Pixels.svg](https://codepen.io/shshaw/pen/XbxvNj), which is itself inspired by [px2svg](https://github.com/meyerweb/px2svg), I was so pleased with it that I decided to write the functionality into my own app.

Intended for small images with limited colors. Output is rendered pixel for pixel with no optimization. For smaller files, run them through [SVGOMG](https://jakearchibald.github.io/svgomg/) or the like.


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