#!/bin/sh
# Make sure you ran `npm install uglify-js jshint -g` beforehand
jshint track_outbound_links.js
uglifyjs track_outbound_links.js -o track_outbound_links.min.js -m -c --comments