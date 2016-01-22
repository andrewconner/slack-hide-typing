chrome.extension.sendMessage({}, function(response) {
  'use strict';

  const inject = function () {
    // Necessary because extensions cannot directly access the page's global variables.
    const scr = document.createElement('script');
    scr.textContent = '(function() {' +
      '  if (window.TS && window.TS.ms) {' +
      '    window.TS.ms.sendTyping = function () {};' +
      '    window.dispatchEvent(new CustomEvent("TSLoaded", {}));' +
      '  }' +
      '})();';
    (document.head || document.documentElement).appendChild(scr);
    scr.parentNode.removeChild(scr);
  };

  const destroy = function () {
    clearInterval(readyStateCheckInterval);
  };

  var i = 0;
  let readyStateCheckInterval = setInterval(function() {
    inject();

    if (i > 20) {
      destroy();
    }
    i++;
  }, 2000);

  window.addEventListener("TSLoaded", destroy);
});