(this["webpackJsonpreact-use-infinite-scroller-example"]=this["webpackJsonpreact-use-infinite-scroller-example"]||[]).push([[0],{14:function(e,n,t){e.exports=t(22)},22:function(e,n,t){"use strict";t.r(n);var r=t(8),a=t(0),o=t.n(a),i=t(9),c=t.n(i),u=t(2),s=t(1),l=t.n(s),f=t(3),d=t(13),p=["scroll","resize"];var m=function(e){var n=e.onLoadMore,t=e.threshold,r=void 0===t?250:t,o=e.hasMore,i=void 0===o||o,c=Object(a.useRef)(!1);Object(a.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(f.a)(l.a.mark((function e(){var t,a,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||c.current){e.next=10;break}if(t=document.documentElement||document.body.parentNode||document.body,a=void 0!==window.pageYOffset?window.pageYOffset:t.scrollTop,o=t.getBoundingClientRect(),u=o.height,!(u-a-window.innerHeight<=r)){e.next=10;break}return c.current=!0,e.next=9,n();case 9:c.current=!1;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return p.forEach((function(n){return window.addEventListener(n,e)})),function(){return p.forEach((function(n){return window.removeEventListener(n,e)}))}}),[n,r])},h=u.b.div.withConfig({displayName:"App__Container",componentId:"nn6k3e-0"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:1em;"]),g=u.b.div.withConfig({displayName:"App__Item",componentId:"nn6k3e-1"})(["height:20em;display:flex;align-items:center;justify-content:center;"]),w=function(){return new Promise((function(e){setTimeout(e,1e3)}))},v=function(){var e=o.a.useState(36),n=Object(d.a)(e,2),t=n[0],r=n[1],a=o.a.useRef(null);function i(){return(i=Object(f.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading more"),e.next=3,w();case 3:r(t+36);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m({onLoadMore:function(){return i.apply(this,arguments)},hasMore:t<360,containerRef:a});var c=Array(360).fill(null).slice(0,t);return o.a.createElement(h,{ref:a},c.map((function(e,n){return o.a.createElement(g,{key:n,style:{background:"hsl(".concat(n,",50%,50%)")}},n+1)})))};function b(){var e=Object(r.a)(["\n  body {\n    padding: 0;\n    margin: 0;\n  }\n"]);return b=function(){return e},e}var y=Object(u.a)(b());c.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null),o.a.createElement(v,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a1ebacaa.chunk.js.map