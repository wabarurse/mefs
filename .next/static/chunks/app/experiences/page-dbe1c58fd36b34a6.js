(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>d});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,o,a;n=e,o=t,a=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>n.createElement(u,s({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:o,size:a,title:c}=e,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,d,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}},4308:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(5155);r(2115);var o=r(6084);let a=e=>{let{direction:t,logo:r,title:o,company:a,description:i,date:s,link:c}=e;return(0,n.jsxs)("div",{className:"scroll-fade relative flex gap-4 h-[400px]",children:[(0,n.jsx)("div",{className:"experience-vertical-line"}),(0,n.jsx)("div",{className:"hover-zoom experience-logo",children:(0,n.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:r,alt:"company logo",className:"h-[60px] w-[60px]"})})}),(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("div",{className:"scale-100",children:(0,n.jsxs)("div",{className:"experience-card ".concat(0===t?"left-4":"right-4"),children:[(0,n.jsx)("h2",{className:"font-nunito text-color-1 text-2xl font-bold",children:o}),(0,n.jsx)("h3",{className:"font-nunito text-color-1 text-xl font-bold py-2",children:a}),(0,n.jsx)("hr",{className:"w-full border-t-2 text-color-1 my-2"}),(0,n.jsx)("ul",{className:"list-disc pl-4",children:i.split("\n").map((e,t)=>(0,n.jsx)("li",{className:"text-color-2",children:e},t))})]})})}),(0,n.jsx)("div",{className:"experience-date ".concat(0===t?"left-1/2 translate-x-16":"right-1/2 -translate-x-16 "),children:(0,n.jsx)("h3",{className:"font-nunito text-color-1 text-xl font-bold",children:s})})]})},i=function(){return(0,n.jsxs)("div",{className:"bg-color",children:[(0,n.jsxs)("div",{className:"page-fade-in flex justify-center items-center h-screen",children:[(0,n.jsx)("h1",{className:"font-crazy text-9xl font-bold text-color-1",children:"Experiences"}),(0,n.jsx)(o.nfB,{size:48,className:"absolute bottom-8 animate-bounce text-color-1"})]}),(0,n.jsxs)("div",{className:"max-w-5xl mx-auto px-4 py-48",children:[(0,n.jsx)(a,{direction:0,logo:"/images/experiences/orbital.png",title:"Software Developer",company:"@ UW Orbital",description:"Optimized API endpoints to create and delete system commands, ensuring efficient database transactions and proper error handling.\nDesigned an asynchronous logging middleware to capture and log request-response cycles, improving system observability and debugging efficiency.",date:"October 2024 - Present",link:"https://www.uworbital.com/"}),(0,n.jsx)(a,{direction:1,logo:"/images/experiences/checkmate.png",title:"Hardware and Software Developer",company:"@ Checkmate Robotics",description:"Collaborated on a movement library written in C++ under the Purdue Robotics Operating System (PROS), implementing PID feedback loops to ensure precise direction and speed for consistent autonomous routes.\nQualified for the VEX World Championships for 4 consecutive years",date:"June 2019 - May 2024",link:"https://www.youtube.com/@16868"}),(0,n.jsx)(a,{direction:0,logo:"/images/experiences/uhn.png",title:"Summer Student",company:"@ Princess Margaret Cancer Center",description:"Operated the Laser Capture Micro-dissection (LCM) to remove tumor cells from heterogeneous H&E stained biopsy samples, obtaining over 100 tumor samples for both research and diagnosis.\nObserved the application of various biomedical systems in extracting complex medical data for clinical diagnosis and cancer treatment.",date:"August 2022, 2023",link:"https://www.uhn.ca/OurHospitals/PrincessMargaret"})]})]})}},8264:(e,t,r)=>{Promise.resolve().then(r.bind(r,4308))}},e=>{var t=t=>e(e.s=t);e.O(0,[873,441,587,358],()=>t(8264)),_N_E=e.O()}]);