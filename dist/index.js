"use strict";var e=require("react/jsx-runtime"),r=require("react"),t=function(){return t=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},t.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError,exports.Button=function(r){var n=r.children,o=r.onClick,s=r.color,i=void 0===s?"bg-slate-700":s;return e.jsx("button",t({onClick:o,className:"".concat(i," text-white p-2 rounded-md ")},{children:n}))},exports.Carousel=function(r){var n=r.children;return e.jsx("div",t({className:"relative w-full "},{children:e.jsxs("div",t({id:"carousel",className:"w-full h-40 overflow-auto flex gap-4 border-red-500 "},{children:[n,e.jsx("button",t({onClick:function(e){if(e){var r=document.getElementById("carousel");if(r){var t=r.scrollLeft-1552;console.log(t),r.scrollTo({behavior:"smooth",left:t})}}},className:"bg-red-200 px-1 py-0 h-6 text-center min-w-10 hover:shadow hover:bg-red-400 rounded-lg absolute   inset-y-1/3 left-0"},{children:"L"})),e.jsx("button",t({onClick:function(e){if(e){var r=document.getElementById("carousel");if(r){var t=r.scrollLeft+1552;console.log(t),r.scrollTo({behavior:"smooth",left:t})}}},className:"bg-red-200 px-1 py-0 h-6 text-center min-w-10 hover:shadow hover:bg-red-400 rounded-lg absolute   inset-y-1/3 right-0"},{children:"R"}))]}))}))},exports.CarouselCard=function(r){var n=r.children;return e.jsx("div",t({className:"w-full min-w-[100%] bg-green-500"},{children:n}))},exports.Modal=function(n){var o=n.label,s=void 0===o?"Modal":o,i=n.children,l=n.icon,a=r.useState(!1),c=a[0],d=a[1],u=r.useRef(null),m=function(){d((function(e){return!e}))},f=function(e){u.current&&!u.current.contains(e.target)&&d(!1)};return r.useEffect((function(){return c?document.addEventListener("mousedown",f):document.removeEventListener("mousedown",f),function(){document.removeEventListener("mousedown",f)}}),[c]),e.jsxs("div",t({className:"relative"},{children:[e.jsx("button",t({onClick:m,className:"bg-sky-500 text-white p-2 rounded-md shadow-md hover:bg-sky-600 transition-colors"},{children:"Open"})),c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-60"}),e.jsx("div",t({className:"fixed inset-0 flex items-center justify-center p-4"},{children:e.jsxs("div",t({ref:u,className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate__animated animate__fadeIn animate__faster"},{children:[e.jsxs("div",t({className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-4"},{children:[e.jsx("h3",t({className:"text-lg font-semibold"},{children:s})),e.jsx("button",t({onClick:m,className:"text-gray-600 hover:text-gray-900 transition-colors"},{children:l||"✖️"}))]})),e.jsx("div",{children:i})]}))}))]})]}))};
//# sourceMappingURL=index.js.map
