# Google Analytics: track outbound links clicked

## Install

Locate your `<script>` tag where you included the Google Analytics tracking code.
Before the closing tag `</script>`, insert the minified javascript.

```js
/*!
 * http://github.com/ssaunier/track-outbound-links
 * Copyright 2013 Sébastien Saunier
 * @license MIT
 */
!function(e,t){function n(){for(var n=t.getElementsByTagName("a"),a=[],r=0;r<n.length;++r){var o=n[r];o.host!=e.location.host&&a.push(o)}return a}function a(n){for(var a=n.srcElement||n.target;a&&("undefined"==typeof a.tagName||"a"!=a.tagName.toLowerCase()||!a.href);)a=a.parentNode;a&&a.href&&(e._gaq&&_gaq.push(["_trackEvent","Outbound link","Click",a.href]),(!a.target||a.target.match(/^_(self|parent|top)$/i))&&(setTimeout(function(){t.location.href=a.href},150),n.preventDefault?n.preventDefault():n.returnValue=!1))}e.addEventListener("load",function(){var e=n();for(var t in e)e[t].addEventListener("click",a)})}(window,document);
```

It will automatically listen for outbound links and report them as clicked in Google Analytics.

## Where can I view the statistics?

Go to your Google Analytics page, and select in the left menu "Behavior -> Events -> Overview".

![Behavior -> Events -> Overview](https://raw.github.com/ssaunier/track-outbound-links/master/img/behavior_events_overview.png)

Then if you click on "Event label" you should see which outbound URLs have been clicked.

## Development

To debug the script, run

    python -m SimpleHTTPServer

And open your browser at [localhost:8000](http://localhost:8000).
