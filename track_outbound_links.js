/*!
 * http://github.com/ssaunier/track-outbound-links
 * Copyright 2013 Sébastien Saunier
 * @license MIT
 */

(function(window, document) {
  function getOutboundLinks() {
    var links = document.getElementsByTagName('a');
    var outboundLinks = [];
    for (var i = 0; i < links.length; ++i) {
      var link = links[i];
      if (link.host != window.location.host) {
        outboundLinks.push(link);
      }
    }
    return outboundLinks;
  }

  function trackOutboundLink() {
    var link = this;
    window._gaq && _gaq.push(['_trackEvent', 'Outbound link', 'Click', link.href ]);
    setTimeout(function() {
      document.location.href = link.href;
    }, 100);  // Delay navigation so that GA is notified of the click
    return false;
  }

  // Track outbound links
  window.addEventListener('load', function() {
    var outboundLinks = getOutboundLinks();
    for (var i in outboundLinks) {
      outboundLinks[i].addEventListener('click', trackOutboundLink);
    }
  });
}(window, document));