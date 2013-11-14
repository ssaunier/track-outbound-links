# Google Analytics: track external links clicked

## Install

Locate your `<script>` tag where you included the Google Analytics tracking code.
Before the closing tag `</script>`, insert the minimified javascript.

```js
/*!
 * http://github.com/ssaunier/track-external-links
 * Copyright 2013 Sébastien Saunier
 * @license MIT
 */
!function(){function n(){for(var n=document.getElementsByTagName("a"),t=[],e=0;e<n.length;++e){var o=n[e];o.host!=window.location.host&&t.push(o)}return t}function t(){var n=this;return window._gaq&&_gaq.push(["_trackEvent","External link","Click",n.href]),setTimeout(function(){document.location.href=n.href},100),!1}window.addEventListener("load",function(){var e=n();for(var o in e)e[o].addEventListener("click",t)})}();
```

It will automatically listen for external links and report them as clicked in Google Analytics.

## Development

To debug the script, run

    python -m SimpleHTTPServer

And open your browser at [localhost:8000](http://localhost:8000).