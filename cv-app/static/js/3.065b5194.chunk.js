(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[3],{19:function(t,e,a){"use strict";e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;return parseInt(Math.ceil(Math.random()*Date.now()).toPrecision(t).toString().replace(".",""))}},20:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a(4),o=a(5),i=a(6),c=a(8),l=a(7),d=a(1),r=a(0),h=function(t){var e=t.schoolName,a=t.titleOfStudy,n=t.dateFrom,s=t.dateTo,o=t.onChange,i=t.onSubmit,c=t.showEmpty;return Object(r.jsxs)("form",{onSubmit:i,className:"flex column form-container ".concat(c?"display-empty":""),children:[Object(r.jsx)("label",{htmlFor:"schoolName",className:e.length<=0?"empty":"",children:"School Name"}),Object(r.jsx)("input",{type:"text",name:"schoolName",value:e,onChange:o,autoComplete:"off"}),Object(r.jsx)("label",{htmlFor:"titleOfStudy",className:a.length<=0?"empty":"",children:"Title of Study"}),Object(r.jsx)("input",{type:"text",name:"titleOfStudy",value:a,onChange:o,autoComplete:"off"}),Object(r.jsxs)("div",{className:"date-field",children:[Object(r.jsx)("label",{htmlFor:"dateFrom",className:n.length<=0?"empty":"",children:"Date From"}),Object(r.jsx)("label",{htmlFor:"dateTo",className:s.length<=0?"empty":"",children:"To"}),Object(r.jsx)("input",{type:"date",name:"dateFrom",value:n,onChange:o}),Object(r.jsx)("input",{type:"date",name:"dateTo",value:s,onChange:o})]}),Object(r.jsx)("button",{type:"submit",className:"btn",children:"Save"})]})},m=function(t){var e=t.dataSets,a=t.onEdit,n=t.onDelete;return Object(r.jsx)("ul",{className:"display-container",children:e.map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"icon-group",children:[Object(r.jsx)("span",{onClick:function(){return a(t)},className:"icon-btn",children:"\u270e"}),Object(r.jsx)("span",{onClick:function(){return n(t.id)},className:"icon-btn",children:"\u2716"})]}),Object(r.jsxs)("p",{children:["School Name: ",t.schoolName]}),Object(r.jsxs)("p",{children:["Study: ",t.titleOfStudy]}),Object(r.jsxs)("p",{children:["Date: ",t.dateFrom," to ",t.dateTo]})]},t.id)}))})},u=a(19),j=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(o.a)(this,a),(i=e.call(this,t)).isFormValid=function(){for(var t=i.state.data,e=0,a=[t.schoolName,t.titleOfStudy,t.dateFrom,t.dateTo];e<a.length;e++){if(a[e].length<=0)return!1}return!0},i.handleChange=function(t){var e=t.target.name,a=t.target.value;i.setState({data:Object(s.a)(Object(s.a)({},i.state.data),{},Object(n.a)({},e,a)),isShowingEmpty:!1})},i.handleEdit=function(t){i.setState({dataSets:i.state.dataSets.filter((function(e){return e!==t})),data:t})},i.handleSubmit=function(t){t.preventDefault(),i.isFormValid()?i.setState({dataSets:i.state.dataSets.concat(i.state.data),data:{id:Object(u.a)(),schoolName:"",titleOfStudy:"",dateFrom:"",dateTo:""},isShowingEmpty:!1}):i.setState({isShowingEmpty:!0})},i.handleDelete=function(t){i.setState({dataSets:i.state.dataSets.filter((function(e){return e.id!==t}))})},i.state={dataSets:[],data:{id:Object(u.a)(),schoolName:"",titleOfStudy:"",dateFrom:"",dateTo:""},isShowingEmpty:!1},i}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state.data;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"text-center",children:"Education Information"}),Object(r.jsx)(m,{dataSets:this.state.dataSets,onEdit:this.handleEdit,onDelete:this.handleDelete}),Object(r.jsx)(h,{schoolName:t.schoolName,titleOfStudy:t.titleOfStudy,dateFrom:t.dateFrom,dateTo:t.dateTo,onChange:this.handleChange,onSubmit:this.handleSubmit,showEmpty:this.state.isShowingEmpty})]})}}]),a}(d.Component);e.default=j}}]);
//# sourceMappingURL=3.065b5194.chunk.js.map