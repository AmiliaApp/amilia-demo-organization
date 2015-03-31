(function() {

  function handleEvent(e) {
    var options = e.data ? JSON.parse(e.data) : {};
    if (options.amiliaCmd != "show_iframe") return;

    var iframe = document.getElementById('amilia-iframe');

    var cssLink = document.createElement("link");
    cssLink.href = "/stylesheets/amilia-iframe-custome.css"; 
    cssLink .rel = "stylesheet"; 
    cssLink .type = "text/css"; 
    iframe.document.body.appendChild(cssLink);
  }

	if (window.addEventListener) {
	  window.addEventListener("message", handleEvent, false);
	} else {
	  window.attachEvent("onmessage", handleEvent);
	}

}).call(this);