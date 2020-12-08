(this.webpackJsonpconcourse=this.webpackJsonpconcourse||[]).push([[0],{34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(17),l=n.n(i),o=(n(34),n(8)),u=n(15),s=n(9),j=n(11),d=n(6);var b=function(e){for(var t=e.users,n=[],c=0;c<t;c+=1)n.push(Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)(d.a.Control,{required:!0,type:"text",placeholder:"User ".concat(c+1),name:"User ".concat(c),onFocus:function(e){e.target.value=""}})},"User ".concat(c)));return Object(r.jsx)(r.Fragment,{children:n})};var h=function(e,t){return t.some((function(t){return t.groupName.toLowerCase()===e.toLowerCase()}))},O=function(e){return JSON.parse(localStorage.getItem(e))},p=function(e,t){return localStorage.setItem(e,JSON.stringify(t))};var x=function(e){var t=e,n=t.groupName;return delete t.groupName,{groupName:n,users:Object.values(e)}};var m=function(e){var t=x(e),n=O("savedGroups");if(!n){var r=t;return p("currentGroup",r),p("savedGroups",[r]),!0}return h(t.groupName,n)?(alert("Group name already exists!"),!1):(n.push(t),p("savedGroups",n),p("currentGroup",t),!0)};n(38);var f=function(e){var t=e.changePage,n=Object(c.useState)(2),a=Object(o.a)(n,2),i=a[0],l=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target),r=Object.fromEntries(n.entries());m(r)&&t("page2","bills")},autoComplete:"off",children:[Object(r.jsx)(d.a.Group,{controlId:"groupName",children:Object(r.jsxs)(d.a.Label,{children:["Group name",Object(r.jsx)(d.a.Control,{type:"text",placeholder:"Max. 20 characters",name:"groupName",required:!0})]})}),Object(r.jsx)(d.a.Group,{children:Object(r.jsxs)(d.a.Label,{children:["Users",Object(r.jsxs)(d.a.Control,{as:"select",onChange:function(e){return l(e.target.value)},children:[Object(r.jsx)("option",{value:2,children:"2"}),Object(r.jsx)("option",{value:3,children:"3"}),Object(r.jsx)("option",{value:4,children:"4"}),Object(r.jsx)("option",{value:5,children:"5"}),Object(r.jsx)("option",{value:6,children:"6"}),Object(r.jsx)("option",{value:7,children:"7"})]})]})}),Object(r.jsx)(d.a.Group,{children:Object(r.jsxs)(d.a.Label,{children:["Users",Object(r.jsx)(b,{users:i})]})}),Object(r.jsx)(j.a,{variant:"primary",type:"submit",children:"Submit"})]})})};var v=function(e){return O("savedGroups").find((function(t){return t.groupName===e}))};var g=function(e){var t=e.changePage,n=O("savedGroups");return n=n?n.map((function(e){return Object(r.jsx)("button",{onClick:function(){return n=e.groupName,p("currentGroup",v(n)),void t("page2","bills");var n},type:"button",children:e.groupName},e.groupName)})):Object(r.jsx)("h1",{children:"No groups found!"}),Object(r.jsx)("div",{style:{display:"flex",flexDirection:"column",margin:"5rem 3rem"},children:n})};var y=function(e){var t=e.tab,n=e.setTab,c=e.changePage;return Object(r.jsxs)(u.a,{transition:!1,id:"controlled",activeKey:t,onSelect:function(e){return n(e)},children:[Object(r.jsx)(s.a,{eventKey:"new",title:"New",children:Object(r.jsx)(f,{changePage:c})}),Object(r.jsx)(s.a,{eventKey:"load",title:"Load",children:Object(r.jsx)(g,{changePage:c})})]})},B=n(14),N=n(10);var S=function(e,t){var n=t.groupName,r=O(e),c=r.findIndex((function(e){return e.groupName===n}));r[c]=t,p(e,r)};function F(e){var t=e;return delete t.description,delete t.total,Object.entries(t).map((function(e){var t=Object(o.a)(e,2);return{name:t[0],paid:t[1]}}))}var G=function(e,t){e.preventDefault();var n=t;n.current.disabled=!0;var r=new FormData(e.target),c=Object.fromEntries(r.entries()),a={description:c.description,total:Number(c.total),details:F(c)};return function(e,t){var n=e;"bills"in n?n.bills.push(t):n.bills=[t],p("currentGroup",n),S("savedGroups",n)}(O("currentGroup"),a),n.current.disabled=!1,alert("Saved"),!0};var w=function(e){var t,n=e.userNames,i=e.saveValue,l=e.totalSum,o=e.bills,u=e.setBill,s=Object(c.useRef)(),b=Object(c.useRef)();return Object(r.jsxs)(d.a,{autoComplete:"off",ref:s,onSubmit:function(e){G(e,b)?s.current.reset():alert("Something went wrong!"),b.current.disabled=!1,u(o?o.length:0)},children:[Object(r.jsxs)(d.a.Label,{style:{fontSize:"1.5rem",marginBottom:"1rem"},onKeyDown:function(e){return"Enter"===e.key?e.preventDefault():null},children:["Title",Object(r.jsx)(d.a.Control,{type:"text",name:"description",required:!0,placeholder:"Bill title",onKeyDown:function(e){return"Enter"===e.key?e.preventDefault():null}})]}),Object(r.jsx)(d.a.Group,{children:(t=n,t.map((function(e){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsxs)(d.a.Label,{children:[e,Object(r.jsx)(d.a.Control,{onBlur:function(e){return i(e.target)},onFocus:function(e){e.target.value=""},required:!0,name:e,type:"number",step:"0.01",placeholder:"0.00",onKeyDown:function(e){return"Enter"===e.key?e.preventDefault():null}})]}),Object(r.jsx)("br",{})]},e)})))}),Object(r.jsx)(d.a.Group,{controlId:"totalSum",children:Object(r.jsxs)(d.a.Label,{children:["Total sum:",Object(r.jsx)(d.a.Control,{type:"number",name:"total",step:"0.01",placeholder:"0.00",ref:l,tabIndex:-1,readOnly:!0})]})}),Object(r.jsx)("br",{}),Object(r.jsx)(j.a,{variant:"primary",type:"submit",ref:b,children:"Submit"})]})};n(40);var C=function(e){var t=e.bills,n=e.setBill,a=O("currentGroup").users,i=Object(c.useRef)(0),l={};return a.forEach((function(e){l[e]=0})),Object(r.jsx)("section",{className:"add-bill-controller",children:Object(r.jsx)(w,{saveValue:function(e){var t=function(e){return e.value=parseFloat(e.value).toFixed(2),e.value}(e);l=Object(N.a)(Object(N.a)({},l),{},Object(B.a)({},e.name,Number(t))),i.current.value=Number(Object.values(l).reduce((function(e,t){return e+t}))).toFixed(2)},userNames:a,usersPaid:l,totalSum:i,bills:t,setBill:n})})},D=n(22);var E=function(e){var t=e.currentBill,n=e.editBill;function c(e){var n,r=e,c=t.total,a=t.details.length;return(n=(r-c/a).toFixed(2))>=0?"+".concat(n):"".concat(n)}var i=t?t.details.map((function(e,t){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:"".concat(e.paid," \u20ac")}),Object(r.jsx)("td",{style:{color:c(e.paid)>=0?"green":"red"},children:"".concat(c(e.paid)," \u20ac")})]})},"".concat(e.name).concat(1*t))})):null;return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:t.description}),Object(r.jsx)("button",{onClick:function(){return n()},type:"button",style:{all:"unset",cursor:"pointer",float:"right",fontSize:"1.3rem",paddingRight:"1rem"},children:Object(r.jsx)("i",{className:"far fa-edit"})}),Object(r.jsxs)(D.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Paid"}),Object(r.jsx)("th",{children:"Change"})]})}),Object(r.jsx)("tbody",{children:i})]}),Object(r.jsx)("i",{children:Object(r.jsx)("h5",{style:{textAlign:"center"},children:"Bill amount: ".concat(t.total.toFixed(2)," \u20ac")})})]}):null})};var K=function(e){var t=e.currentBill,n=e.editBill,c=e.setBill,i=e.bills,l=i?i.map((function(e,t){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)("option",{value:t,children:"".concat(e.description," (").concat(e.total.toFixed(2)," \u20ac)")})},"".concat(1*t).concat(e.description))})):null;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("select",{style:{textAlign:"center"},value:t?i.findIndex((function(e){return e.description===t.description})):"",onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{hidden:!0,children:"Select bill"}),l]}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),Object(r.jsx)(E,{currentBill:t,editBill:n})]})};n(41);var I=function(e){var t=e.editBill,n=e.currentBill,a=e.setBill,i=Object(c.useState)(n?"showBill":"addBill"),l=Object(o.a)(i,2),j=l[0],d=l[1],b=O("currentGroup"),h=b.bills;return Object(r.jsxs)(u.a,{transition:!1,id:"controlled",activeKey:j,onSelect:function(e){return d(e)},style:{margin:"0.5rem 3rem",fontSize:"1rem",borderBottom:"none",marginTop:"0.5rem"},children:[Object(r.jsx)(s.a,{eventKey:"addBill",title:"Add bill",children:Object(r.jsx)(C,{setBill:a,bills:h})}),Object(r.jsx)(s.a,{eventKey:"showBill",title:"Show bills",children:h?Object(r.jsx)(K,{currentGroup:b,editBill:t,currentBill:n,bills:h,setBill:a}):Object(r.jsx)("h4",{children:"No bills saved"})})]})},P=n(28),L=function(e){return e?e.map((function(e){return e.total})).reduce((function(e,t){return e+t})):0},T=function(e,t){return e.findIndex((function(e){return e===t}))};function k(e,t){return e?e.map((function(e){return Number(e.details[t].paid)})).reduce((function(e,t){return e+t})):0}var z=T,V=k,q=function(e,t,n){if(!e)return 0;var r=t.length,c=L(e),a=T(t,n);return Math.round(100*(k(e,a)-c/r))/100};var R=function(e){var t=e.totalValue,n=e.users,c=e.bills,a=z,i=V,l=[],o=["#f15a24","#fbb03b","#75a0aa","#5163af","gray","brown","yellow","green"];return n.map((function(e,t){l.push({title:e,value:i(c,a(n,e)),color:o[t],label:"1"})})),Object(r.jsx)(P.PieChart,{radius:40,totalValue:t,style:{height:"200px"},data:l,label:function(e){var t=e.dataEntry;return"".concat(t.title,"(").concat(t.value,"\u20ac)")},labelPosition:106,labelStyle:Object(N.a)({},{fontSize:"6px"})})};var U=function(){var e=O("currentGroup"),t=e.groupName,n=e.users,c=e.bills,i=q,l=n.map((function(e,t){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e}),Object(r.jsx)("td",{style:{color:i(c,n,n[t])>=0?"green":"red"},children:"".concat((l=i(c,n,n[t]),l>=0?"+".concat(l):"".concat(l))," \u20ac")})]})},"".concat(e.name).concat(1*t));var l}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{style:{paddingTop:"10%"},children:t}),Object(r.jsxs)(D.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Balance"})]})}),Object(r.jsx)("tbody",{children:l})]}),c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{totalValue:L(c),users:n,bills:c}),Object(r.jsx)("i",{children:Object(r.jsx)("h4",{style:{marginBottom:"2rem"},children:"Total: ".concat(L(c).toFixed(2)," \u20ac")})})]}):null]})};var J=function(e,t,n,r){var c=O("savedGroups"),a=O("currentGroup");t.details.forEach((function(e,t){e.paid=Object.values(n)[t].toFixed(2)})),t.total=Number(r);var i=e.bills.findIndex((function(e){return e.description===t.description}));a.bills[i]=t;var l=c.findIndex((function(t){return t.groupName===e.groupName}));return p("currentGroup",a),c[l]=a,p("savedGroups",c),!0};function A(e){var t=e.currentGroup,n=e.currentBill,i=e.editBill,l=Object(c.useRef)();var o={};function u(e){var t=Number(function(e){return e.value=Number(e.value).toFixed(2),e.value}(e));o=Object(N.a)(Object(N.a)({},o),{},Object(B.a)({},e.name,t)),l.current.value=Object.values(o).reduce((function(e,t){return e+t})).toFixed(2)}return n.details.forEach((function(e){o[e.name]=Number(e.paid)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{style:{padding:"15%"},children:"Edit bill ".concat(n.description)}),Object(r.jsxs)(d.a,{onSubmit:function(e){return function(e){e.preventDefault(),J(t,n,o,l.current.value)?(alert("Changes saved!"),i()):alert("Something went wrong!")}(e)},style:{margin:"0 6rem"},children:[n.details.map((function(e,t){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsxs)(d.a.Group,{children:[Object(r.jsx)(d.a.Label,{children:e.name}),Object(r.jsx)(d.a.Control,{onBlur:function(e){return u(e.target)},onFocus:function(e){e.target.value=""},required:!0,name:e.name,type:"number",step:"0.01",placeholder:"0.00",defaultValue:e.paid})]})},"".concat(e.name).concat(1*t))})),Object(r.jsx)(d.a.Label,{children:"Total"}),Object(r.jsx)(d.a.Control,{type:"number",name:"total",step:"0.01",placeholder:"0.00",ref:l,tabIndex:-1,readOnly:!0,defaultValue:n.total.toFixed(2)}),Object(r.jsx)(j.a,{type:"submit",variant:"primary",children:"Save"}),Object(r.jsx)(j.a,{type:"reset",variant:"danger",onClick:function(){confirm("Stop editing and discard changes?")&&i()},children:"Discard"})]})]})}var M=a.a.memo(A);var H=function(e){var t=e.tab,n=e.setTab,a=e.changePage,i=Object(c.useState)(),l=Object(o.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(!1),h=Object(o.a)(b,2),p=h[0],x=h[1],m=O("currentGroup"),f=m.bills;function v(e){f=O("currentGroup").bills,d(e?f[e]:"")}function g(){x(!p)}return Object(r.jsx)(r.Fragment,{children:p?Object(r.jsx)(M,{editBill:g,currentBill:j,currentGroup:m}):Object(r.jsxs)(u.a,{transition:!1,activeKey:t,onSelect:function(e){return n(e)},children:[Object(r.jsx)(s.a,{eventKey:"bills",title:"Bills",children:Object(r.jsx)(I,{editBill:g,setBill:v,currentBill:j,bills:f})}),Object(r.jsx)(s.a,{eventKey:"balance",title:"Balance",children:Object(r.jsx)(U,{})}),Object(r.jsx)(s.a,{eventKey:"exit",title:"Exit",children:Object(r.jsx)("button",{type:"button",onClick:function(){a("main","new"),v("")},style:{marginTop:"5rem",fontSize:"2rem"},children:"Exit"})})]})})};n(42),n(43);var Q=function(){var e=Object(c.useState)("main"),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("new"),l=Object(o.a)(i,2),u=l[0],s=l[1];function j(e,t){a(e),s(t)}return Object(r.jsx)("main",{className:"app-container",children:Object(r.jsx)(r.Fragment,{children:"main"===n?Object(r.jsx)(y,{tab:u,setTab:s,changePage:j}):Object(r.jsx)(H,{tab:u,setTab:s,changePage:j})})})};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.79c15c30.chunk.js.map