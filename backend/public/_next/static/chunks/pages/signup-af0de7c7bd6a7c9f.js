(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{2755:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(5724)}])},71:function(e,r,n){"use strict";n.d(r,{kC:function(){return m},rd:function(){return i}});var t=n(4051),s=n.n(t);function a(e,r,n,t,s,a,u){try{var o=e[a](u),c=o.value}catch(l){return void n(l)}o.done?r(c):Promise.resolve(c).then(t,s)}function u(e){return function(){var r=this,n=arguments;return new Promise((function(t,s){var u=e.apply(r,n);function o(e){a(u,t,s,o,c,"next",e)}function c(e){a(u,t,s,o,c,"throw",e)}o(void 0)}))}}function o(e){return e.startsWith("/")||(e="/".concat(e)),"".concat("/api").concat(e)}function c(e){return l.apply(this,arguments)}function l(){return(l=u(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,r.json();case 4:n=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.abrupt("return",{success:r.status>=200&&r.status<=399,status:r.status,data:n});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function i(e,r){return d.apply(this,arguments)}function d(){return d=u(s().mark((function e(r,n){var t,a,u,l=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3&&void 0!==l[3]?l[3]:null,e.next=3,fetch(o(r),{method:n,headers:{"Content-Type":t?"application/json":null,Authorization:a?"Bearer ".concat(a):null},body:t?JSON.stringify(t):null});case 3:return u=e.sent,e.next=6,c(u);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}},8488:function(e,r,n){"use strict";n.d(r,{xJ:function(){return x},AN:function(){return h},zq:function(){return f},QJ:function(){return p},QS:function(){return v},aF:function(){return g},Pb:function(){return b}});var t=n(4051),s=n.n(t),a=n(7294),u=n(9745),o=n(71);function c(e){return(0,o.rd)("users","POST",e)}function l(e){var r=e.userId;return(0,o.rd)("users/".concat(r),"GET")}function i(e){var r=e.userId;return(0,o.rd)("memberships/users/".concat(r),"GET")}function d(e,r,n,t,s,a,u){try{var o=e[a](u),c=o.value}catch(l){return void n(l)}o.done?r(c):Promise.resolve(c).then(t,s)}function m(e){return function(){var r=this,n=arguments;return new Promise((function(t,s){var a=e.apply(r,n);function u(e){d(a,t,s,u,o,"next",e)}function o(e){d(a,t,s,u,o,"throw",e)}u(void 0)}))}}function f(){var e=(0,a.useContext)(u.Z).setUser,r=(0,a.useState)(null),n=r[0],t=r[1],c=function(){var r=m(s().mark((function r(n,a){var u;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s={username:n,password:a},(0,o.rd)("login","POST",s);case 2:(u=r.sent).success&&e(u.data),t(u);case 5:case"end":return r.stop()}var s}),r)})));return function(e,n){return r.apply(this,arguments)}}();return{signIn:c,result:n}}function p(){var e=(0,a.useContext)(u.Z).clearUser;return m(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e();case 1:case"end":return r.stop()}}),r)})))}function x(){return(0,a.useContext)(u.Z).user}function h(){var e=(0,a.useContext)(u.Z).user;return null!=(null===e||void 0===e?void 0:e.token)}function v(){var e=f().signIn,r=(0,a.useState)(null),n=r[0],t=r[1],u=function(){var r=m(s().mark((function r(n){var a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c(n);case 2:if(!(a=r.sent).success){r.next=6;break}return r.next=6,e(n.username,n.password);case 6:t(a);case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return{signUp:u,result:n}}function g(e){var r=(0,a.useState)(null),n=r[0],t=r[1],u=function(){var r=m(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=8;break}return r.t0=t,r.next=4,l({userId:e});case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=9;break;case 8:t(null);case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,a.useEffect)((function(){u()}),[e]),{result:n,user:null===n||void 0===n?void 0:n.data,refetch:u}}function b(e){var r=(0,a.useState)(null),n=r[0],t=r[1],u=function(){var r=m(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=8;break}return r.t0=t,r.next=4,i({userId:e});case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=9;break;case 8:t(null);case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,a.useEffect)((function(){u()}),[e]),{result:n,projects:null===n||void 0===n?void 0:n.data,refetch:u}}},8226:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(5893);function s(e){var r,n=e.result,s=e.defaultMessage;return!n||n.success?(0,t.jsx)(t.Fragment,{}):(0,t.jsxs)("p",{className:"text-red-500",children:["Error: ",(null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||s||"Unknown error occurred"]})}},5724:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t=n(5893),s=n(7294),a=n(1163),u=n(8488),o=n(8226);function c(){var e=(0,a.useRouter)(),r=(0,u.QS)(),n=r.signUp,c=r.signUpResult,l=(0,u.AN)(),i=(0,s.useState)(""),d=i[0],m=i[1],f=(0,s.useState)(""),p=f[0],x=f[1],h=(0,s.useState)(""),v=h[0],g=h[1],b=(0,s.useState)(""),j=b[0],y=b[1],w=(0,s.useState)(""),N=w[0],k=w[1],S=(0,s.useState)(""),C=S[0],P=S[1],F=(0,s.useState)(""),T=F[0],_=F[1],E=(0,s.useState)(""),q=E[0],U=E[1],D=function(e){return e.preventDefault(),n({username:d,password:p,fullName:v,birthDate:j,email:N,userType:C,degree:T,major:q}),!1};return l?(e.replace("/"),(0,t.jsx)(t.Fragment,{})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:(0,t.jsx)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:(0,t.jsxs)("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:[(0,t.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md mb-10",children:[(0,t.jsx)("img",{className:"mx-auto h-12 w-auto",src:"prodle.png",alt:"Prodle"}),(0,t.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-red-600",children:"Create an account"})]}),(0,t.jsxs)("form",{className:"space-y-6",onSubmit:D,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"Username"}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)("input",{id:"username",name:"username",type:"username",autoComplete:"username",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:d,onChange:function(e){return m(e.target.value)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:p,onChange:function(e){return x(e.target.value)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"fullName",className:"block text-sm font-medium text-gray-700",children:"Full name"}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)("input",{id:"fullName",name:"fullName",type:"fullName",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:v,onChange:function(e){return g(e.target.value)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)("input",{id:"email",name:"email",type:"email",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:N,onChange:function(e){return k(e.target.value)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"Birthdate"}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)("input",{id:"birthDate",name:"birthDate",type:"date",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:j,onChange:function(e){return y(e.target.value)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"userType",className:"block text-sm font-medium text-gray-700",children:"Type"}),(0,t.jsxs)("select",{id:"userType",name:"userType",required:!0,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",value:C,onChange:function(e){return P(e.target.value)},children:[(0,t.jsx)("option",{value:"Student",children:"Student"}),(0,t.jsx)("option",{value:"Student Assistant",children:"Student Assistant"}),(0,t.jsx)("option",{value:"Researcher",children:"Researcher"}),(0,t.jsx)("option",{value:"Professor",children:"Professor"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"degree",className:"block text-sm font-medium text-gray-700",children:"Degree"}),(0,t.jsxs)("select",{id:"degree",name:"degree",required:!0,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",value:T,onChange:function(e){return _(e.target.value)},children:[(0,t.jsx)("option",{value:"",children:"None"}),(0,t.jsx)("option",{value:"Bachelor",children:"Bachelor"}),(0,t.jsx)("option",{value:"Master",children:"Master"}),(0,t.jsx)("option",{value:"PhD",children:"PhD"}),(0,t.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"major",className:"block text-sm font-medium text-gray-700",children:"Major"}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)("input",{id:"major",name:"major",type:"major",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:q,onChange:function(e){return U(e.target.value)}})})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:D,type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Sign up"})})]}),(0,t.jsx)(o.Z,{result:c,defaultMessage:"There was an error signing up"})]})})})})}},1163:function(e,r,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],(function(){return r=2755,e(e.s=r);var r}));var r=e.O();_N_E=r}]);