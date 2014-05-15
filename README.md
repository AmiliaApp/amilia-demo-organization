Amilia Demo Organization
========================

This demo site demonstrates how easy it is to embed your Amilia Store inside your organization's web site. Your clients can then consult your catalog and make purchases without leaving your site. Embedding is done using an iframe.

Example
-------
We have created a sample site. Check out the Amilia Demo Organization called ABC Sports: http://amiliaapp.github.io/amilia-demo-organization/.

Instructions
------------
* Copy this code in your HTML document.
```
<!-- Embed this code in your page. Make sure to change src to your store. -->
<div id="amilia">
	<iframe id="amilia-iframe"
			allowtransparency="true"
			frameborder="0"
			width="100%"
			style="width: 100%!important; border: none!important; overflow: hidden!important;"
			scrolling="no"
			horizontalscrolling="no"
			verticalscrolling="no"
			src="AMILIA-STORE-URL">
	</iframe>
	<script src="http://www.amilia.com/scripts/amilia-iframe.js" type="text/javascript"></script>
</div>
<!-- End of Amilia embed -->
```

* Make sure to change AMILIA-STORE-URL to the URL of your Amilia Store. It starts with `www.amilia.com/store/...`. For example: http://www.amilia.com/store/en/sports-center-abc/shop.

Reporting issues
----------------
For help on implementation, please go to http://support.amilia.com.
