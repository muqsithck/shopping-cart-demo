(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){var n={"./Ahinsak.jpg":19,"./akiva.jpg":20,"./akshay.jpg":21,"./brigigowla.jpg":22,"./brijmohan.jpg":23,"./divya.jpg":24,"./iorganic1.jpg":25,"./iorganic500.jpg":26,"./jivika.jpg":27,"./nanak.jpg":28,"./naturlle.jpg":29,"./shaiwal.jpg":30,"./vanaliya.jpg":31,"./ved.jpg":32};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=18},function(e,t,a){e.exports=a.p+"static/media/Ahinsak.5661caa0.jpg"},function(e,t,a){e.exports=a.p+"static/media/akiva.4ba45de3.jpg"},function(e,t,a){e.exports=a.p+"static/media/akshay.341ea69f.jpg"},function(e,t,a){e.exports=a.p+"static/media/brigigowla.1436618c.jpg"},function(e,t,a){e.exports=a.p+"static/media/brijmohan.c4b41160.jpg"},function(e,t,a){e.exports=a.p+"static/media/divya.95094672.jpg"},function(e,t,a){e.exports=a.p+"static/media/iorganic1.d88a3e52.jpg"},function(e,t,a){e.exports=a.p+"static/media/iorganic500.49c20a61.jpg"},function(e,t,a){e.exports=a.p+"static/media/jivika.7e637000.jpg"},function(e,t,a){e.exports=a.p+"static/media/nanak.63a62df5.jpg"},function(e,t,a){e.exports=a.p+"static/media/naturlle.858a25d3.jpg"},function(e,t,a){e.exports=a.p+"static/media/shaiwal.6eaf958f.jpg"},function(e,t,a){e.exports=a.p+"static/media/vanaliya.195bcedf.jpg"},function(e,t,a){e.exports=a.p+"static/media/ved.a97d6aed.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),i=a.n(o),r=(a(15),a(4)),s=a.n(r),l=a(7),u=a(8),p=a(9),d=a(1);a(17);function m(e){var t=Object(n.useState)(1),o=Object(d.a)(t,2),i=o[0],r=o[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"product-item-wrapper"},c.a.createElement("div",{className:"product-image-wrapper"},c.a.createElement("div",{className:"product-image-container"},c.a.createElement("img",{src:a(18)("./".concat(e.item.image_URL)),alt:e.item.Product_name,width:"90%"}))),c.a.createElement("div",{className:"product-details-wrapper"},c.a.createElement("div",null,c.a.createElement("h3",{className:"heading"},e.item.brand_name),c.a.createElement("p",{className:"sub-title"},e.item.product_name),c.a.createElement("p",{className:"sub-title"},"MRP ",e.item.quantity),c.a.createElement("p",{className:"sub-title bold"},"RS ",e.item.price),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement("div",null,c.a.createElement("button",{className:"primary-button",onClick:function(){return e.handleAddToCart(e.item,i)}}," ADD TO CART ")),c.a.createElement("div",{className:"round-button-wrapper"},c.a.createElement("button",{className:"round-button",onClick:function(){return r(i+1)}}," + "),c.a.createElement("p",{className:"caption"}," ",i," "),c.a.createElement("button",{className:"round-button",style:{display:i>0?"block":"none"},onClick:function(){return r(i-1)}}," -")))))))}function f(e){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",null,c.a.createElement("p",{className:"title"},"Qty ",e.cart.reduce((function(e,t){return+e+ +t.count}),0)," "),c.a.createElement("p",{className:"title"},"Total ",e.cart.reduce((function(e,t){return+e+ +t.total}),0)," ")),c.a.createElement("button",{className:"secondary-button",onClick:e.handleModal}," CHECKOUT"))}function g(e){return c.a.createElement("div",{className:"modal",style:{display:e.modal?"flex":"none"}},c.a.createElement("div",null,c.a.createElement("p",{className:"title",style:{textAlign:"center"}},"Total ",e.cart.reduce((function(e,t){return+e+ +t.total}),0)," "),c.a.createElement("div",{style:{paddingTop:"20px"}},c.a.createElement("button",{className:"secondary-button",onClick:e.handleModal},"close"),c.a.createElement("button",{className:"secondary-button",onClick:e.handleSubmit},"ok"))))}var v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),r=Object(d.a)(i,2),v=r[0],h=r[1],b=Object(n.useState)(!1),j=Object(d.a)(b,2),E=j[0],w=j[1],k=function(e,t){var a=e.price*t,n=Object(p.a)({},e,{count:t,total:a});h([].concat(Object(u.a)(v),[n]))},y=function(){w(!E)};return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data.json").then((function(e){return e.json()})).catch((function(e){throw e}));case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",{className:"app-container"},a.map((function(e,t){return c.a.createElement(m,{item:e,handleAddToCart:k,key:t})}))),c.a.createElement(f,{cart:v,handleModal:y}),c.a.createElement(g,{cart:v,handleModal:y,modal:E,handleSubmit:function(){h([]),w(!E)}}))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopping-cart-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/shopping-cart-demo","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.b2a80bb3.chunk.js.map