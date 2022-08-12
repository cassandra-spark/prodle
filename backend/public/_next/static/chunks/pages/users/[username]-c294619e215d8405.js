(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{6349:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[username]",function(){return t(7222)}])},3033:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var r=t(5893);function a(e){var s=e.result,t=e.render;return s?s.success?t(s.data):404==s.status?(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10",children:(0,r.jsx)("p",{className:"mt-12 whitespace-pre-line",children:"Not found"})})}):(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10",children:(0,r.jsxs)("p",{className:"mt-12 whitespace-pre-line",children:["Error ",s.status]})})}):(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex items-center justify-center",children:(0,r.jsxs)("svg",{role:"status",className:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})})}},3941:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});var r=t(5893),a=t(1664),m=t.n(a),n=function(e){return[{name:"Overview",href:"/users/".concat(e)},{name:"Projects",href:"/users/".concat(e,"/projects")}]};function l(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return s.filter(Boolean).join(" ")}function i(e){var s=e.current,t=e.username;return(0,r.jsx)("div",{children:(0,r.jsx)("nav",{className:"flex space-x-4 justify-center","aria-label":"Tabs",children:n(t).map((function(e){return(0,r.jsx)(m(),{href:e.href,children:(0,r.jsx)("a",{className:l(e.name==s?"bg-red-500 text-red-100":"text-gray-500 hover:text-gray-700","px-10 py-3 font-bold text-sm rounded-full"),"aria-current":e.name==s?"page":void 0,children:e.name})},e.name)}))})})}},7222:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var r=t(5893),a=t(1163),m=t(4068),n=t(3941),l=t(3033),i=t(8488);function c(e){var s=Date.now()-e,t=new Date(s);return Math.abs(t.getUTCFullYear()-1970)}function d(){var e=(0,a.useRouter)().query.username,s=(0,i.aF)(e).result;return(0,r.jsx)(m.Z,{current:"Profile",children:(0,r.jsx)(l.Z,{result:s,render:function(s){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"md:flex md:items-center md:justify-between",children:(0,r.jsx)("div",{className:"flex-1 min-w-0",children:(0,r.jsx)("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",children:s.fullName})})})})}),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10",children:[(0,r.jsx)(n.Z,{current:"Overview",username:e}),(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("dl",{className:"sm:divide-y sm:divide-gray-200",children:[(0,r.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Full name"}),(0,r.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:s.fullName})]}),(0,r.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Username"}),(0,r.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:s.username})]}),(0,r.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Age"}),(0,r.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:c(new Date(s.birthDate))})]}),(0,r.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Email address"}),(0,r.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:(0,r.jsx)("a",{href:"mailto:".concat(s.email),className:"text-red-800 underline",children:s.email})})]}),(0,r.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Type"}),(0,r.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:s.userType})]}),(0,r.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Degree"}),(0,r.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:s.degree})]}),(0,r.jsxs)("div",{className:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4",children:[(0,r.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Major"}),(0,r.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:s.major})]})]})})]})})]})}})})}},1163:function(e,s,t){e.exports=t(880)}},function(e){e.O(0,[215,68,774,888,179],(function(){return s=6349,e(e.s=s);var s}));var s=e.O();_N_E=s}]);