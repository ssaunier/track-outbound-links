#!/bin/sh
# Make sure you ran `npm install uglify-js -g` beforehand
uglifyjs track_external_links.js -o track_external_links.min.js -m -c --comments