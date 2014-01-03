Amilia Demo Organization
========================

This demo site demonstrates how easy it is to embed your Amilia Catalog inside your organization's web site. Your clients can then consult your catalog of activities without leaving you site. Embedding is done using an iframe.

Example
-------
We have created a sample site. Check out the Amilia Demo Organization called ABC Sports: http://amiliaapp.github.io/amilia-demo-organization/.

Instructions
------------
1.  Copy this code in your HTML document.
```
<!-- Embed this code in your page. Ensure to change src to your store. -->
<div id="amilia">
	<iframe id="amilia-iframe"
			allowtransparency="true"
			frameborder="0"
			width="100%"
			style="width: 100%!important; border: none!important; overflow: hidden!important;"
			scrolling="no"
			horizontalscrolling="no"
			verticalscrolling="no"
			src="AMILIA-CATALOG-URL">
	</iframe>
	<script src="http://www.amilia.com/scripts/amilia-iframe.js" type="text/javascript"></script>
</div>
<!-- End of Amilia embed -->
```

2.  Ensure to change AMILIA-CATALOG-URL with the URL of your Amilia Catalog. It starts with `www.amilia.com/pages/...`. For example: http://www.amilia.com/pages/sports-center-abc.

3.  Host this file on your web site: [amilia-iframe-helper.html](http://amiliaapp.github.io/amilia-demo-organization/amilia-iframe-helper.html). It must be located at the root of your domain. For example:
```
http://www.example.com/amilia-iframe-helper.html
```
This file is necessary to allow communication between your page and the Amilia iframed page. It allows Amilia to resize the iframe.

FAQ
---
Q.  Why should I embed my Amilia Catalog on my web site? <br/>
A.  By embedding your Amilia Catalog on your web site, your customers can remain on your site to navigate through your catalog of events.

Q.  Why do I need to host amilia-iframe-helper.html on my site? <br/>
A.  Because of the same-origin policy, the Amilia Catalog embedded in the iframe cannot talk with your Organization page. To overcome this limitation, we are able to communicate through the HTML page you host on your site. For a more technical description, please consult this article: http://stackoverflow.com/questions/153152/resizing-an-iframe-based-on-content

Q.  A part of the Amilia Catalog is being cut off. I cannot see all of my actitivies. <br/>
A.  Ensure the amilia-iframe-helper.html is located in the root of your domain. For example: www.example.com/amilia-iframe-helper.html

Reporting issues
----------------
For help on implementation, please go to http://support.amilia.com.
