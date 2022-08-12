(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{3598:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/new",function(){return r(1)}])},4510:function(e,t,r){"use strict";r.d(t,{kU:function(){return E},M6:function(){return S},Qs:function(){return w},L8:function(){return k},by:function(){return N},PY:function(){return g},$t:function(){return P},Z0:function(){return y},AY:function(){return C}});var n=r(4051),s=r.n(n),u=r(7294),c=r(9745),o=r(71);function a(e){return e.query?(0,o.rd)("projects?query=".concat(encodeURIComponent(e.query)),"GET"):(0,o.rd)("projects","GET")}function i(e){var t=e.projectId;return(0,o.rd)("projects/".concat(t),"GET")}function l(e){return(0,o.rd)("projects","POST",e)}function d(e){var t=e.projectId;return(0,o.rd)("projects/".concat(t),"DELETE")}function f(e){var t=e.projectId;return(0,o.rd)("memberships/projects/".concat(t),"GET")}function p(e){var t=e.projectId,r=e.userId;return(0,o.rd)("memberships/projects/".concat(t),"POST",{userId:r})}function m(e){var t=e.membershipId;return(0,o.rd)("memberships/".concat(t),"PUT",{status:"accepted"})}function h(e){var t=e.membershipId;return(0,o.rd)("memberships/".concat(t),"PUT",{status:"rejected"})}function x(e,t,r,n,s,u,c){try{var o=e[u](c),a=o.value}catch(i){return void r(i)}o.done?t(a):Promise.resolve(a).then(n,s)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var u=e.apply(t,r);function c(e){x(u,n,s,c,o,"next",e)}function o(e){x(u,n,s,c,o,"throw",e)}c(void 0)}))}}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}function y(e){var t=(0,u.useState)(null),r=t[0],n=t[1],c=function(){var e=v(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,a(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){c(e)}),[]),{result:r,projects:null===r||void 0===r?void 0:r.data,refetch:c}}function g(e){var t=(0,u.useState)(null),r=t[0],n=t[1],c=function(){var t=v(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=8;break}return t.t0=n,t.next=4,i({projectId:e});case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=9;break;case 8:n(null);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){c()}),[e]),{result:r,project:null===r||void 0===r?void 0:r.data,refetch:c}}function w(){var e=(0,u.useState)(null),t=e[0],r=e[1],n=(0,u.useContext)(c.Z).user,o=function(){var e=v(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,l(j({},t,{owner:n._id}));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{createProject:o,result:t}}function k(){var e=function(){var e=v(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({projectId:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{deleteProject:e}}function N(e){var t=P(e),r=t.memberships,n=t.refetch,s=(0,u.useContext)(c.Z).user;return{status:(0,u.useMemo)((function(){if(!r||!s)return null;var e=r.find((function(e){return e.user==s._id}));return e?e.status:"can apply"}),[r,s]),refetch:n}}function P(e){var t=(0,u.useState)(null),r=t[0],n=t[1],c=function(){var t=v(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=8;break}return t.t0=n,t.next=4,f({projectId:e});case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=9;break;case 8:n(null);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){c()}),[e]),{result:r,memberships:null===r||void 0===r?void 0:r.data,refetch:c}}function S(e){var t=(0,u.useState)(null),r=t[0],n=t[1],o=(0,u.useContext)(c.Z).user,a=function(){var t=v(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=n,t.next=3,p({projectId:e,userId:o._id});case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{apply:a,result:r}}function E(){var e=function(){var e=v(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({membershipId:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{accept:e}}function C(){var e=function(){var e=v(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({membershipId:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{reject:e}}},1:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(5893),s=r(7294),u=r(1163),c=r(4068),o=r(4510);function a(){var e=(0,u.useRouter)(),t=(0,s.useState)(""),r=t[0],a=t[1],i=(0,s.useState)(""),l=i[0],d=i[1],f=(0,s.useState)(""),p=f[0],m=f[1],h=(0,s.useState)(""),x=h[0],v=h[1],b=(0,s.useState)(""),j=b[0],y=b[1],g=(0,s.useState)(""),w=g[0],k=g[1],N=(0,s.useState)(""),P=N[0],S=N[1],E=(0,o.Qs)(),C=E.createProject,I=E.result,O=function(e){return e.preventDefault(),C({title:r,description:l,skills:p,faculty:x,degree:j,type:w,link:P}),!1};return(0,s.useEffect)((function(){I&&I.success&&e.replace("/projects/".concat(I.data._id))}),[I]),(0,n.jsxs)(c.Z,{current:"Projects",children:[(0,n.jsx)("header",{children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsx)("h1",{className:"text-3xl font-bold leading-tight text-gray-900",children:"Create Project"})})}),(0,n.jsx)("main",{children:(0,n.jsx)("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:(0,n.jsxs)("form",{className:"space-y-6",onSubmit:O,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("input",{id:"title",name:"title",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:r,onChange:function(e){return a(e.target.value)}})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("textarea",{id:"description",name:"description",className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:l,onChange:function(e){return d(e.target.value)}})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"skills",className:"block text-sm font-medium text-gray-700",children:"Skills (comma-separated)"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("input",{id:"skills",name:"skills",className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:p,onChange:function(e){return m(e.target.value)}})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"faculty",className:"block text-sm font-medium text-gray-700",children:"Faculty"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("input",{id:"faculty",name:"faculty",className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:x,onChange:function(e){return v(e.target.value)}})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"degree",className:"block text-sm font-medium text-gray-700",children:"Degree"}),(0,n.jsxs)("select",{id:"degree",name:"degree",className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",value:j,onChange:function(e){return y(e.target.value)},children:[(0,n.jsx)("option",{value:"",children:"None"}),(0,n.jsx)("option",{value:"Bachelor",children:"Bachelor"}),(0,n.jsx)("option",{value:"Master",children:"Master"}),(0,n.jsx)("option",{value:"PhD",children:"PhD"}),(0,n.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"type",className:"block text-sm font-medium text-gray-700",children:"Type"}),(0,n.jsxs)("select",{id:"type",name:"type",className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",value:w,onChange:function(e){return k(e.target.value)},children:[(0,n.jsx)("option",{value:"Project",children:"Project"}),(0,n.jsx)("option",{value:"Thesis",children:"Thesis"}),(0,n.jsx)("option",{value:"Personal",children:"Personal"}),(0,n.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"link",className:"block text-sm font-medium text-gray-700",children:"Link"}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)("input",{id:"link",name:"link",className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",value:P,onChange:function(e){return S(e.target.value)}})})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:O,type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Create project"})})]})})})]})}},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[215,68,774,888,179],(function(){return t=3598,e(e.s=t);var t}));var t=e.O();_N_E=t}]);