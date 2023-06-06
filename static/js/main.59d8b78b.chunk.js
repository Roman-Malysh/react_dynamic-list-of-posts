(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),s=n(4),r=n(3),i=n(2),o=n.n(i),l=n(1),d=(n(16),n(17),n(18),n(5)),u=n.n(d),j="https://mate.academy/students-api";function m(e){return new Promise((function(t){setTimeout(t,e)}))}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.body=JSON.stringify(n),a.headers={"Content-Type":"application/json; charset=UTF-8"}),m(300).then((function(){return fetch(j+e,a)})).then((function(e){return e.json()}))}var h=function(e){return b(e)},O=function(e,t){return b(e,"POST",t)},p=function(e){return b(e,"DELETE")},f=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/posts?userId=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/comments?postId=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/comments/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/comments",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(0),w=function(e){var t=e.posts,n=e.setActivePost,a=e.setNewCommentField,c=e.activePost,s=function(e){(null===c||void 0===c?void 0:c.id)===e.id?(a(!1),n(null),n(null)):(n(e),n(e),a(!1))};return Object(g.jsxs)("div",{"data-cy":"PostsList",children:[Object(g.jsx)("p",{className:"title",children:"Posts:"}),Object(g.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{className:"has-background-link-light",children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"Title"}),Object(g.jsx)("th",{children:" "})]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{"data-cy":"Post",children:[Object(g.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(g.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(g.jsx)("td",{className:"has-text-right is-vcentered",children:(null===c||void 0===c?void 0:c.id)===e.id?Object(g.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:function(){s(e)},children:"Close"}):Object(g.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){s(e)},children:"Open"})})]},e.id)}))})]})]})},k=n(10),C=(n(20),function(){return Object(g.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(g.jsx)("div",{className:"Loader__content"})})}),S=function(e){var t=e.activePost,n=e.addComment,a=e.isAdding,c=Object(l.useState)(""),i=Object(r.a)(c,2),d=i[0],j=i[1],m=Object(l.useState)(""),b=Object(r.a)(m,2),h=b[0],O=b[1],p=Object(l.useState)(""),f=Object(r.a)(p,2),x=f[0],v=f[1],N=Object(l.useState)(!1),y=Object(r.a)(N,2),w=y[0],k=y[1],C=Object(l.useState)(!1),S=Object(r.a)(C,2),P=S[0],E=S[1],F=Object(l.useState)(!1),I=Object(r.a)(F,2),A=I[0],T=I[1],M=h.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),B=function(){var e=Object(s.a)(o.a.mark((function e(a){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),c=d.trim().length&&M&&x.trim().length,d.length||k(!0),M||E(!0),x.length||T(!0),c&&(s={id:0,postId:t.id,name:d,email:h,body:x},n(s),v(""));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:B,children:[Object(g.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(g.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(g.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":w}),value:d,onChange:function(e){j(e.target.value),k(!1)}}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-user"})}),w&&Object(g.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(g.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(g.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(g.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(g.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":P}),value:h,onChange:function(e){O(e.target.value),E(!1)}}),Object(g.jsx)("span",{className:"icon is-small is-left",children:Object(g.jsx)("i",{className:"fas fa-envelope"})}),P&&Object(g.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(g.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),P&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(g.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(g.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:u()("textarea",{"is-danger":A}),value:x,onChange:function(e){v(e.target.value),T(!1)}})}),A&&Object(g.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(g.jsxs)("div",{className:"field is-grouped",children:[Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("button",{type:"submit",className:u()("button is-link",{"is-loading":a}),children:"Add"})}),Object(g.jsx)("div",{className:"control",children:Object(g.jsx)("button",{type:"button",className:"button is-link is-light",onClick:function(){return v("")},children:"Clear"})})]})]})},P=function(e){var t=e.activePost,n=e.newCommentField,a=e.setNewCommentField,c=Object(l.useState)([]),i=Object(r.a)(c,2),d=i[0],u=i[1],j=Object(l.useState)(!1),m=Object(r.a)(j,2),b=m[0],h=m[1],O=Object(l.useState)(!1),p=Object(r.a)(O,2),f=p[0],x=p[1],w=Object(l.useState)(!1),P=Object(r.a)(w,2),E=P[0],F=P[1],I=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,y(t);case 3:u((function(e){return[].concat(Object(k.a)(e),[t])})),F(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:n=d.filter((function(e){return e.id!==t})),u(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e=function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,v(t.id);case 3:n=e.sent;try{u(n)}catch(a){x(!0)}finally{h(!1)}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(g.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(g.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(g.jsxs)("div",{className:"block",children:[Object(g.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(g.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(g.jsx)("div",{className:"block",children:b?Object(g.jsx)(C,{}):Object(g.jsxs)(g.Fragment,{children:[f&&Object(g.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),d.length>0?Object(g.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"Comments:"}):Object(g.jsx)("p",{className:"title is-4",children:"No comments yet"}),d.map((function(e){return Object(g.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(g.jsxs)("div",{className:"message-header",children:[Object(g.jsx)("a",{href:"mailto:misha@mate.academy","data-cy":"CommentAuthor",children:e.name}),Object(g.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return A(e.id)},children:"delete button"})]}),Object(g.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]})})),n?Object(g.jsx)(S,{activePost:t,addComment:I,isAdding:E}):Object(g.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return a(!0)},children:"Write a comment"})]})})]})})},E=function(e){var t=e.users,n=e.setSelectedUserId,a=e.selectUser,c=e.PostAnulation,s=Object(l.useState)(!1),i=Object(r.a)(s,2),o=i[0],d=i[1],j=Object(l.useState)(null),m=Object(r.a)(j,2),b=m[0],h=m[1],O=Object(l.useState)("Choose a user"),p=Object(r.a)(O,2),f=p[0],x=p[1];return Object(g.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(g.jsx)("div",{className:"dropdown-trigger",children:Object(g.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return d(!0)},onBlur:function(){return d(!1)},children:[Object(g.jsx)("span",{children:f}),Object(g.jsx)("span",{className:"icon is-small",children:Object(g.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),o&&Object(g.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(g.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(g.jsx)("a",{href:"#user-".concat(e.id),className:u()("dropdown-item",{"is-active":(null===b||void 0===b?void 0:b.id)===e.id}),onMouseDown:function(){!function(e){h(e),c(null),x(e.name),d(!1),n(e.id),a(e)}(e)},children:e.name},e.id)}))})})]})},F=(n(21),function(e){var t=e.setDarkModeIsOn,n=e.darkModeIsOn;return Object(g.jsx)("input",{id:"toggle",className:"toggle",type:"checkbox",onChange:function(){return t(!n)}})}),I=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(!1),i=Object(r.a)(c,2),d=i[0],j=i[1],m=Object(l.useState)(!1),b=Object(r.a)(m,2),h=b[0],O=b[1],p=Object(l.useState)([]),v=Object(r.a)(p,2),N=v[0],y=v[1],k=Object(l.useState)(null),S=Object(r.a)(k,2),I=S[0],A=S[1],T=Object(l.useState)(null),M=Object(r.a)(T,2),B=M[0],D=M[1],U=Object(l.useState)(!1),L=Object(r.a)(U,2),_=L[0],J=L[1],Z=Object(l.useState)(!1),q=Object(r.a)(Z,2),W=q[0],G=q[1];function Y(){return(Y=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y([]),j(!0),e.prev=2,e.next=5,x(t);case 5:n=e.sent,y(n);case 7:return e.prev=7,j(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[2,,7,10]])})))).apply(this,arguments)}Object(l.useEffect)((function(){var e=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent;try{j(!0),a(t)}catch(n){O(!0),setTimeout((function(){O(!1)}),3e3)}finally{j(!1)}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var $=Object(l.useCallback)((function(e){A(e.id),function(e){Y.apply(this,arguments)}(e.id)}),[]);return Object(g.jsxs)("main",{className:u()("section",{darkModeIsOn:W}),children:[Object(g.jsx)(F,{setDarkModeIsOn:G,darkModeIsOn:W}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"tile is-ancestor",children:[Object(g.jsx)("div",{className:"tile is-parent",children:Object(g.jsxs)("div",{className:"tile is-child box is-success",children:[Object(g.jsx)("div",{className:"block",children:Object(g.jsx)(E,{users:n,setSelectedUserId:A,selectUser:$,PostAnulation:function(){D(null)}})}),Object(g.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!I&&Object(g.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),d&&Object(g.jsx)(C,{}),h&&Object(g.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),I&&0===N.length&&!d&&Object(g.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),N.length>0&&Object(g.jsx)(w,{posts:N,setActivePost:D,setNewCommentField:J,activePost:B})]})]})}),Object(g.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":B}),children:B&&Object(g.jsx)("div",{className:"tile is-child box is-success ",children:Object(g.jsx)(P,{activePost:B,setNewCommentField:J,newCommentField:_})})})]})})]})};c.a.render(Object(g.jsx)(I,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.59d8b78b.chunk.js.map