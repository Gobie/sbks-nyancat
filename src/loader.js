var SBKSNyancat = {},
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SBKSNyancat.WebComponent = (function(_super, $) {
  __extends(WebComponent, _super);

  function WebComponent() {
    WebComponent.__super__.constructor.apply(this, arguments);
  }

  WebComponent.prototype.createdCallback = function() {
    this.template = '<div class="wrapper">\
      <div class="rainbow"></div>\
      <div class="nyan-cat">\
        <img src="../nyan-cat.gif" alt="nyan-cat" />\
      </div>\
    </div>';
  };

  WebComponent.prototype.attachedCallback = function() {
    var time = +this.getAttribute('time');
    this.innerHTML = this.template;

    $('.rainbow', this).switchClass("rainbow", "rainbow-loaded", time ? time : 10000);
  };

  WebComponent.prototype.detachedCallback = function() {
  };

  return WebComponent;

})(HTMLElement, jQuery);

SBKSNyancat = document.registerElement('sbks-nyancat', {
  prototype: SBKSNyancat.WebComponent.prototype
});