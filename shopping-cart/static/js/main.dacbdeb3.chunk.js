(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{24:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(16),r=c.n(i),a=c(15),l=c(19),d=c(7),j=c(6),o=c(2),b=(c(24),c(0)),h=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.b,{to:"/",className:"logo nav-item",children:"#"}),Object(b.jsxs)("div",{className:"nav-bar",children:[Object(b.jsx)(j.b,{to:"/products",className:"nav-item",children:"Products"}),Object(b.jsx)(j.b,{to:"/contact",className:"nav-item",children:"Contact"})]})]})},x=(c(34),function(e){var t=e.item,c=e.handleAdd,n=e.handleRemove,s={fontSize:"24px",backgroundColor:"transparent",cursor:"pointer",border:"none"};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{fontSize:"18px",display:"grid",gridTemplateColumns:"0.3fr 0.4fr 0.3fr",textAlign:"center",width:"120px",border:"1px solid #111"},children:[Object(b.jsx)("button",{type:"button",onClick:function(){t.quantity>1?c(t.id,t.quantity-1):n(t.id)},style:s,children:"-"}),Object(b.jsx)("span",{children:t.quantity}),Object(b.jsx)("button",{type:"button",onClick:function(){t.quantity<9&&c(t.id,t.quantity+1)},style:s,children:"+"})]})})}),u=c(5),O=(c(35),function(e){var t=e.items,c=e.handleAdd,s=e.handleRemove,i=0,r=Object(n.useState)(!1),a=Object(d.a)(r,2),l=a[0],j=a[1],o=function(){j(!1)},h=t.map((function(e){var t=e.id,n=u[t].name,r=parseFloat(u[t].price),a="."+"/assets/".concat(t,".jpg"),l=e.quantity;return i+=r*l,Object(b.jsxs)("li",{className:"cart-item",children:[Object(b.jsx)("img",{src:a,alt:n,width:"150",style:{paddingRight:"10px",float:"left"}}),Object(b.jsx)("div",{children:Object(b.jsx)("b",{children:n})}),Object(b.jsxs)("div",{children:["$",r.toFixed(2)]}),Object(b.jsx)(x,{item:e,handleAdd:c,handleRemove:s}),Object(b.jsx)("span",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(){return s(t)},children:"Remove"})]},t)})),O=Object(b.jsxs)("div",{className:"cart-overlay",children:[Object(b.jsx)("div",{onClickCapture:o,style:{position:"absolute",width:"100vw",height:"100vh"}}),Object(b.jsxs)("div",{className:"cart-display",children:[Object(b.jsxs)("div",{className:"cart-header",children:[Object(b.jsx)("span",{children:"Cart"}),Object(b.jsx)("button",{type:"button",onClick:o,className:"cart-btn-close",children:"\u2715"})]}),t.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ul",{className:"cart-items",children:h}),Object(b.jsxs)("div",{style:{textAlign:"center",fontWeight:"bold"},children:["Total: $",i.toFixed(2),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:"btn",style:{justifySelf:"center"},children:"Checkout"})})]})]}):Object(b.jsx)("div",{style:{padding:"10px"},children:"Your cart is empty"})]})]}),m=Object(b.jsxs)("button",{type:"button",onClick:function(){j(!0)},className:"cart-btn nav-item",children:[Object(b.jsx)("span",{className:"cart-count",children:t.length}),Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:Object(b.jsx)("path",{d:"M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"})})]});return Object(b.jsx)("div",{children:l?O:m})});c(36);var m=function(){},p=(c(37),function(){var e=Object.keys(u);return Object(b.jsx)("div",{className:"product-view",children:Object(b.jsx)("ul",{className:"product-list",children:e.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)(j.b,{to:"/item/".concat(e),className:"item",children:[Object(b.jsx)("img",{src:"/assets/".concat(e,".jpg"),alt:u[e].name,loading:"lazy"}),Object(b.jsx)("div",{children:Object(b.jsx)("b",{children:u[e].name})}),Object(b.jsxs)("div",{children:["$",u[e].price]})]})},e)}))})})}),v=function(e){var t=e.id,c=e.handler,s=Object(n.useState)(1),i=Object(d.a)(s,2),r=i[0],a=i[1],l={fontSize:"24px",backgroundColor:"transparent",cursor:"pointer",border:"none"};return Object(b.jsxs)("form",{style:{display:"flex",flexDirection:"column",gap:"5px"},onSubmit:function(e){e.preventDefault(),c(t,r)},children:[Object(b.jsxs)("div",{style:{fontSize:"18px",display:"grid",gridTemplateColumns:"0.3fr 0.4fr 0.3fr",textAlign:"center",width:"120px",border:"1px solid #111"},children:[Object(b.jsx)("button",{type:"button",onClick:function(){r>1&&a(r-1)},style:l,children:"-"}),Object(b.jsx)("span",{children:r}),Object(b.jsx)("button",{type:"button",onClick:function(){r<9&&a(r+1)},style:l,children:"+"})]}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Add to Cart"})]})},f=(c(38),function(e){var t=e.match,c=e.checker,n=e.handler,s=t.params.id,i=u[s];return Object(b.jsxs)("div",{className:"details-view",children:[Object(b.jsx)("img",{src:"."+"/assets/".concat(s,".jpg"),alt:i.name,style:{float:"left"}}),Object(b.jsxs)("div",{className:"details-text",children:[Object(b.jsx)("div",{children:Object(b.jsx)("b",{children:i.name})}),Object(b.jsxs)("div",{children:["$",i.price]}),c(s)?Object(b.jsx)("div",{children:"Item added to cart"}):Object(b.jsx)(v,{id:s,handler:n})]})]})}),g=function(){return Object(b.jsx)("div",{className:"contact-view",children:Object(b.jsxs)("div",{className:"contact-links",children:[Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"https://github.com/Chadwick-B",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("svg",{className:"link",viewBox:"0 0 496 512",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/contact",onClick:function(e){return e.preventDefault()},children:Object(b.jsx)("svg",{className:"link",viewBox:"0 0 448 512",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"/contact",onClick:function(e){return e.preventDefault()},children:Object(b.jsx)("svg",{className:"link",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})})})]})})};var y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],i=function(e){return c.some((function(t){return t.id===e}))},r=function(e,t){if(i(e)){var n=c.map((function(c){return c.id===e?{id:e,quantity:t}:c}));s(n)}else s([].concat(Object(l.a)(c),[{id:e,quantity:t}]))};return Object(b.jsxs)(j.a,{basename:".",children:[Object(b.jsxs)("header",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(O,{items:c,handleAdd:r,handleRemove:function(e){var t=c.filter((function(t){return t.id!==e}));s(t)}})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(o.a,{exact:!0,path:"/products",component:p}),Object(b.jsx)(o.a,{exact:!0,path:"/contact",component:g}),Object(b.jsx)(o.a,{path:"/item/:id",render:function(e){return Object(b.jsx)(f,Object(a.a)(Object(a.a)({},e),{},{checker:i,handler:r}))}})]})})]})};c(39);r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"hoodie_grey":{"name":"Hoodie / Grey","price":"999.99"},"crewneck_black":{"name":"Crewneck / Black","price":"540.00"},"sweatpants_black":{"name":"Sweatpants / Black","price":"540.00"}}')}},[[40,1,2]]]);
//# sourceMappingURL=main.dacbdeb3.chunk.js.map