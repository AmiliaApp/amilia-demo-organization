(function() {

  var iframeTemplate = [
    '<div id="amilia">',
    '  <iframe id="amilia-iframe" allowtransparency="true" frameborder="0" width="100%" style="width:100%!important; border:none!important; overflow:hidden!important; visibility:hidden;" scrolling="no" horizontalscrolling="no" verticalscrolling="no" data-color-code="{color}" src="{url}"></iframe>',
    '  <script src="http://www.amilia.dev/scripts/amilia-iframe.js" type="text/javascript"></script>',
    '</div>'
  ].join("");

  window.AMILIA = {
    color: "#46AAF8",
    urlRoot: undefined,
    initialize: function(options) {
      if (!options) throw "Missing options";
      if (!options.urlRoot) throw "Missing urlRoot option";

      this.color = options.color;
      this.urlRoot = options.urlRoot;

      this.$backdrop = $('<div id="amilia-backdrop"></div>').hide().appendTo("body");
      this.$modal = $('<div id="amilia-modal"></div>').hide().appendTo("body");
      this.$content = $('<div class="content"></div>').appendTo(this.$modal);

      this.$backdrop.click(this.hideModal);

      $("a.amilia-action").click(this.handleClick);
    },
    showModal: function(url) {
      this.$backdrop.show();
      this.$content.html(iframeTemplate
        .replace("{url}", url)
        .replace("{color}", this.color)
      );
      this.$modal.show();
    },
    hideModal: function() {
      this.$modal.hide();
      this.$backdrop.hide();
    },
    handleClick: function(e) {
      e.preventDefault();

      var $a = $(e.target),
          action = $a.data("amilia-action"),
          id = $a.data("amilia-id");

      switch (action) {
        case "addActivityToCart":
          this.showModal(this.urlRoot + "iframepartial/activity/" + id);
          break;
      }

      return false;
    }
  };


  // Bind public methods to object scope
  var funcs = ["initialize", "showModal", "hideModal", "handleClick"];
  for (var i = 0; i < funcs.length; i++)
    window.AMILIA[funcs[i]] = jQuery.proxy(window.AMILIA[funcs[i]], window.AMILIA);

}).call(this);