
(function(){
  'use strict';
  const inject = function () {
    // Necessary because extensions cannot directly access the page's global variables.
    const scr = document.createElement('script');
    const swapWebSocketImplStr = swapWebSocketImpl.toString();
    scr.textContent = '(function() {' +
         swapWebSocketImplStr + 
      '  swapWebSocketImpl();' +
      '})();';
    (document.head || document.documentElement).appendChild(scr);
    scr.parentNode.removeChild(scr);
  };

  inject();

  function swapWebSocketImpl() {
    const send = window.WebSocket.prototype.send;
    window.WebSocket.prototype.send = function () {
      const args = [].slice.call(arguments, 0);
      try {
        const parsed = JSON.parse(args[0] || '{}');
        if (parsed.type === 'typing') {
          return;
        }
      } catch(ex) {}
      return send.apply(this, args);
    };
  }
})();