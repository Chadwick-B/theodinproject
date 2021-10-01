(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(9),l=n.n(i),r=(n(14),n(15),n(16),n(3)),s=n(1),o=n(4),j=n(0),u=function(e){var t=e.label,n=e.name,c=e.type,i=e.defaultValue,l=e.onChange,r=Object(a.useState)(!1),s=Object(o.a)(r,2),u=s[0],b=s[1],d=function(e,t){var n=e.target.value;b(0===n.replace(" ","").length),l(e,t)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{htmlFor:n,children:t})}),Object(j.jsx)("div",{children:"textarea"===c?Object(j.jsx)("textarea",{name:n,defaultValue:i,onChange:d,autoComplete:"off",className:"field ".concat(u?"error":""),rows:5,columns:50}):Object(j.jsx)("input",{type:c,name:n,defaultValue:i,onChange:d,autoComplete:"off",className:"field ".concat(u?"error":"")})})]})},b=function(){var e=Object(a.useState)({name:"",email:"",phoneNumber:"",isEditable:!0}),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(e){var t=e.target.name,a=e.target.value;c(Object(s.a)(Object(s.a)({},n),{},Object(r.a)({},t,a)))};return Object(j.jsxs)("div",{className:"section",children:[Object(j.jsx)("h2",{className:"title",children:"General Information"}),Object(j.jsx)("div",{children:n.isEditable?Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(Object(s.a)(Object(s.a)({},n),{},{isEditable:!1}))},className:"form",children:[Object(j.jsx)(u,{label:"Name",name:"name",type:"text",defaultValue:n.name,onChange:i}),Object(j.jsx)(u,{label:"Email",name:"email",type:"text",defaultValue:n.email,onChange:i}),Object(j.jsx)(u,{label:"Phone Number",name:"phoneNumber",type:"tel",defaultValue:n.phoneNumber,onChange:i}),Object(j.jsx)("button",{type:"submit",className:"btn",children:"Save"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"icon-group",children:Object(j.jsx)("span",{onClick:function(){c(Object(s.a)(Object(s.a)({},n),{},{isEditable:!0}))},children:"\u270e"})}),Object(j.jsxs)("p",{children:["Name: ",n.name]}),Object(j.jsxs)("p",{children:["Email: ",n.email]}),Object(j.jsxs)("p",{children:["Phone Number: ",n.phoneNumber]})]})})]})},d=n(5),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;return parseInt(Math.ceil(Math.random()*Date.now()).toPrecision(e).toString().replace(".",""))},O=function(){var e=Object(a.useState)([{id:m(),schoolName:"",titleOfStudy:"",dateFrom:"",dateTo:"",isEditable:!0}]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(e,t){var a=e.target.name,i=e.target.value,l=n.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},a,i)):Object(s.a)({},e)}));c(l)};return Object(j.jsxs)("ul",{className:"section",children:[Object(j.jsx)("h2",{className:"title",children:"Education Information"}),n.map((function(e){var t=e.id,a=e.schoolName,l=e.titleOfStudy,r=e.dateFrom,s=e.dateTo,o=e.isEditable;return Object(j.jsx)("li",{children:o?Object(j.jsxs)("form",{onSubmit:function(e){return function(e,t){e.preventDefault();var a=Object(d.a)(n),i=a.findIndex((function(e){return e.id===t}));a[i].isEditable=!1,c(a)}(e,t)},className:"form",children:[Object(j.jsx)(u,{label:"School Name",name:"schoolName",type:"text",defaultValue:a,onChange:function(e){return i(e,t)}}),Object(j.jsx)(u,{label:"Title of Study",name:"titleOfStudy",type:"text",defaultValue:l,onChange:function(e){return i(e,t)}}),Object(j.jsxs)("div",{className:"date-group flex gap",children:[Object(j.jsx)(u,{label:"Date From",name:"dateFrom",type:"date",defaultValue:r,onChange:function(e){return i(e,t)}}),Object(j.jsx)(u,{label:"Date To",name:"dateTo",type:"date",defaultValue:s,onChange:function(e){return i(e,t)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn",children:"Save"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"icon-group",children:[Object(j.jsx)("span",{onClick:function(){return function(e){var t=Object(d.a)(n),a=t.findIndex((function(t){return t.id===e}));t[a].isEditable=!0,c(t)}(t)},children:"\u270e"}),Object(j.jsx)("span",{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}(t)},children:"\u2716"})]}),Object(j.jsxs)("p",{children:["School Name: ",a]}),Object(j.jsxs)("p",{children:["Study: ",l]}),Object(j.jsxs)("p",{children:["Date: ",r," to ",s]})]})},t)})),Object(j.jsx)("button",{type:"button",className:"btn",onClick:function(){var e=[].concat(Object(d.a)(n),[{id:m(),schoolName:"",titleOfStudy:"",dateFrom:"",dateTo:"",isEditable:!0}]);c(e)},children:"Add"})]})},f=function(){var e=Object(a.useState)([{id:m(),companyName:"",positionTitle:"",jobTasks:"",dateFrom:"",dateTo:"",isEditable:!0}]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(e,t){var a=e.target.name,i=e.target.value,l=n.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},a,i)):Object(s.a)({},e)}));c(l)};return Object(j.jsxs)("ul",{className:"section",children:[Object(j.jsx)("h2",{className:"title",children:"Practical Information"}),n.map((function(e){var t=e.id,a=e.companyName,l=e.positionTitle,r=e.jobTasks,s=e.dateFrom,o=e.dateTo,b=e.isEditable;return Object(j.jsx)("li",{children:b?Object(j.jsxs)("form",{onSubmit:function(e){return function(e,t){e.preventDefault();var a=Object(d.a)(n),i=a.findIndex((function(e){return e.id===t}));a[i].isEditable=!1,c(a)}(e,t)},className:"form",children:[Object(j.jsx)(u,{label:"Company Name",name:"companyName",type:"text",defaultValue:a,onChange:function(e){return i(e,t)}}),Object(j.jsx)(u,{label:"Position Title",name:"positionTitle",type:"text",defaultValue:l,onChange:function(e){return i(e,t)}}),Object(j.jsx)(u,{label:"Job Tasks",name:"jobTasks",type:"textarea",defaultValue:r,onChange:function(e){return i(e,t)}}),Object(j.jsxs)("div",{className:"date-group flex gap",children:[Object(j.jsx)(u,{label:"Date From",name:"dateFrom",type:"date",defaultValue:s,onChange:function(e){return i(e,t)}}),Object(j.jsx)(u,{label:"Date To",name:"dateTo",type:"date",defaultValue:o,onChange:function(e){return i(e,t)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn",children:"Save"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"icon-group",children:[Object(j.jsx)("span",{onClick:function(){return function(e){var t=Object(d.a)(n),a=t.findIndex((function(t){return t.id===e}));t[a].isEditable=!0,c(t)}(t)},children:"\u270e"}),Object(j.jsx)("span",{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}(t)},children:"\u2716"})]}),Object(j.jsxs)("p",{children:["Company Name: ",a]}),Object(j.jsxs)("p",{children:["Position Title: ",l]}),Object(j.jsxs)("p",{children:["Job Tasks: ",r]}),Object(j.jsxs)("p",{children:["Date: ",s," to ",o]})]})},t)})),Object(j.jsx)("button",{type:"button",className:"btn",onClick:function(){var e=[].concat(Object(d.a)(n),[{id:m(),companyName:"",positionTitle:"",jobTasks:"",dateFrom:"",dateTo:"",isEditable:!0}]);c(e)},children:"Add"})]})},h=(n(18),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"text-center",children:"CV Form"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{}),Object(j.jsx)(O,{}),Object(j.jsx)(f,{})]})]})});var x=function(){return Object(j.jsx)("main",{children:Object(j.jsx)(h,{})})};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.80dca5b1.chunk.js.map