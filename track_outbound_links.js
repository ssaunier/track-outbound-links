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

  function trackOutboundLink(event) {
    // Find actual <a> element in ancestors (e.g. image within a link)
    var link = event.srcElement || event.target;
    while (link && (typeof link.tagName == 'undefined' || link.tagName.toLowerCase() != 'a' || !link.href)) {
     link = link.parentNode;
    }

    if (!link || !link.href) {
      return;
    }

    // Track
    if (window.ga) {
      ga('send', 'event', 'Outbound link', 'Click', link.href);
    }

    // Delay navigation so that GA is notified of the click
    if(!link.target || link.target.match(/^_(self|parent|top)$/i)) {
       setTimeout(function() {
         document.location.href = link.href;
       }, 150);
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
  }

  // Track outbound links
  window.addEventListener('load', function() {
    var outboundLinks = getOutboundLinks();
    for (var i in outboundLinks) {
      outboundLinks[i].addEventListener('click', trackOutboundLink);
    }
  });
}(window, document));