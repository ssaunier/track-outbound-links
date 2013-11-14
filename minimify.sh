#!/bin/sh
# Make sure you ran `npm install uglify-js -g` beforehand
uglifyjs track_outbound_links.js -o track_outbound_links.min.js -m -c --comments