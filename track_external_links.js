/*!
 * http://github.com/ssaunier/track-external-links
 * Copyright 2013 Sébastien Saunier
 * @license MIT
 */

(function() {
  function getExternalLinks() {
    var links = document.getElementsByTagName('a');
    var externalLinks = [];
    for (var i = 0; i < links.length; ++i) {
      var link = links[i];
      if (link.host != window.location.host) {
        externalLinks.push(link);
      }
    }
    return externalLinks;
  }

  function trackExternalLink() {
    var link = this;
    window._gaq && _gaq.push(['_trackEvent', 'External link', 'Click', link.href ]);
    setTimeout(function() {
      document.location.href = link.href;
    }, 100);  // Delay navigation so that GA is notified of the click
    return false;
  }

  // Track outbound links
  window.addEventListener('load', function() {
    var externalLinks = getExternalLinks();
    for (var i in externalLinks) {
      externalLinks[i].addEventListener('click', trackExternalLink);
    }
  });
}());