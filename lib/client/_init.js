// Generated by CoffeeScript 1.9.3
var ApiHero;

ApiHero = {
  WebSock: {
    utils: {
      getClientNS: function() {
        if (typeof module === "undefined" || module === null) {
          return global[ApiHeroUI.ns].WebSock;
        } else {
          return module.parent.WebSock;
        }
      }
    }
  }
};
