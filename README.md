# mecca-pix

This thing came about because of my deep frustration with every SVG tool I could find for tracing bitmaps, I simply wanted to preserve the pixels 1:1 for consistent results. When I found the technique used in [Pixels.svg](https://codepen.io/shshaw/pen/XbxvNj), which is itself inspired by [px2svg](https://github.com/meyerweb/px2svg), I was so pleased with it that I decided to write the functionality into my own app.

Intended for small, low-res images with limited colors. Output is rendered pixel for vector "pixel", a `path` with a `stroke` with a length and width of `1`.  To optimize, run through [SVGOMG](https://jakearchibald.github.io/svgomg/) or the like.

[Live app here](https://BTowersCoding.github.io/mecca-pix/)

## Development

Start local server:

```bash
clojure -A:fig -b dev -r
```

Create optimized build:

```bash
clj -m figwheel.main -O advanced -bo dev
```
