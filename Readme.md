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
!function(n,t){function e(){for(var e=t.getElementsByTagName("a"),r=[],a=0;a<e.length;++a){var o=e[a];o.host!=n.location.host&&r.push(o)}return r}function r(){var e=this;return n._gaq&&_gaq.push(["_trackEvent","External link","Click",e.href]),setTimeout(function(){t.location.href=e.href},100),!1}n.addEventListener("load",function(){var n=e();for(var t in n)n[t].addEventListener("click",r)})}(window,document);
```

It will automatically listen for external links and report them as clicked in Google Analytics.

## Development

To debug the script, run

    python -m SimpleHTTPServer

And open your browser at [localhost:8000](http://localhost:8000).