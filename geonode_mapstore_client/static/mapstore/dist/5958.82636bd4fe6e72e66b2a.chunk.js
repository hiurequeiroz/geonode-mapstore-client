(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5958],{57579:(t,e,r)=>{"use strict";r.d(e,{Jm:()=>a,AE:()=>c,dm:()=>f,n8:()=>s,BV:()=>d,Cz:()=>l,$A:()=>g,eb:()=>v,v8:()=>p,yY:()=>b,ff:()=>y,S0:()=>h,Q6:()=>E,kb:()=>T,GV:()=>O,LH:()=>m,lG:()=>D,Km:()=>w,pV:()=>I,V5:()=>A,IT:()=>S,VR:()=>G,jv:()=>j,oU:()=>P,Ym:()=>W,uU:()=>R,ke:()=>_,nw:()=>N,A4:()=>k,C2:()=>x,Qe:()=>H,Ij:()=>C,Ko:()=>L,E9:()=>M,K4:()=>V,c_:()=>Y,uT:()=>F,bS:()=>U,Rz:()=>q,t4:()=>z,_k:()=>X,w2:()=>$,YA:()=>B,sD:()=>K,Rb:()=>J,fy:()=>Q,kr:()=>Z,f:()=>tt,Ff:()=>et,Pt:()=>rt,ep:()=>nt});var n=r(23570),i=r.n(n);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a="WIDGETS:INSERT",c="WIDGETS:NEW",f="WIDGETS:EDIT",s="WIDGETS:EDIT_NEW",d="WIDGETS:EDITOR_CHANGE",l="WIDGETS:EDITOR_SETTING_CHANGE",g="WIDGETS:UPDATE_PROPERTY",v="WIDGETS:UPDATE_LAYER",p="WIDGETS:CHANGE_LAYOUT",b="WIDGETS:DELETE",y="WIDGETS:CLEAR_WIDGETS",h="WIDGETS:ADD_DEPENDENCY",E="WIDGETS:REMOVE_DEPENDENCY",T="WIDGETS:LOAD_DEPENDENCIES",O="WIDGETS:RESET_DEPENDENCIES",m="WIDGETS:TOGGLE_CONNECTION",D="WIDGETS:OPEN_FILTER_EDITOR",w="WIDGETS:EXPORT_CSV",I="WIDGETS:EXPORT_IMAGE",A="WIDGETS:WIDGET_SELECTED",S="WIDGETS:NEW_CHART",G="floating",j="dependencySelector",P=/^widgets\["?([^"\]]*)"?\]\.?(.*)$/,W="WIDGET:TOGGLE_COLLAPSE",R="WIDGET:TOGGLE_COLLAPSE_ALL",_="WIDGET:TOGGLE_MAXIMIZE",N="WIDGET:TOGGLE_TRAY",k=function(t){return{type:c,widget:t}},x=function(){return{type:S}},H=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;return{type:a,target:e,id:i()(),widget:t}},C=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"replace",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:G;return{type:g,id:t,target:i,key:e,value:r,mode:n}},L=function(t){return{type:v,layer:t}},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;return{type:b,target:e,widget:t}},V=function(){return{type:y}},Y=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G;return{type:p,allLayouts:e,layout:t,target:r}},F=function(t){return{type:f,widget:t}},U=function(t,e){return{type:s,widget:t,settings:e}},q=function(t,e){return{type:d,key:t,value:e}},z=function(t,e){return{type:l,key:t,value:e}},X=function(t){return{type:T,dependencies:t}},$=function(t,e,r,n){return{type:m,active:t,availableDependencies:e,options:r,target:n}},B=function(t){return z("step",t)},K=function(t){var e=t.data,r=void 0===e?[]:e,n=t.title;return{type:w,data:r,title:void 0===n?"export":n}},J=function(t){var e=t.widgetDivId;return{type:I,widgetDivId:e}},Q=function(){return{type:D}},Z=function(t,e){return r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({active:t},e),z("".concat(j),r);var r},tt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;return{type:W,widget:t,target:e}},et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;return{type:R,target:t}},rt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G;return{type:_,widget:t,target:e}},nt=function(t){return{type:N,value:t}}},67306:(t,e,r)=>{"use strict";r.d(e,{Wy:()=>o,i$:()=>u,P0:()=>a});var n=r(22222),i=r(24684),o=function(t){return t&&t.dashboard&&t.dashboard.editor&&t.dashboard.editor.available},u=function(t){return t&&t.dashboard&&t.dashboard.editing},a=function(t){return t&&t.dashboard&&t.dashboard.showConnections};(0,n.P1)(i.F,(function(t){return t&&t.dashboard&&t.dashboard.resource}),(function(t){return t&&t.browser&&t.browser.mobile}),(function(t,e,r){return r?!r:e&&e.canEdit||isNaN(t.substr(-4))}))},25958:(t,e,r)=>{"use strict";r.d(e,{zA:()=>k,jx:()=>N,h9:()=>F,YR:()=>W,lF:()=>G,r0:()=>x,YI:()=>I,um:()=>Y,E2:()=>m,zm:()=>S,yZ:()=>L,p:()=>C,Jb:()=>j,E5:()=>P,GW:()=>A,Xu:()=>M,xI:()=>H,Wo:()=>V});var n=r(86494),i=r(827),o=r(75110),u=r(24684),a=r(57579),c=function(t,e,r){var n,i,o=[],u=[],a=t;for(o.push(a);o.length>0;)if(!r[a=o.shift()])for(r[a]=!0,u.push(a),n=0;n<e.length;n+=1)(i=e[n])[0]!==a||r[i[1]]?i[1]!==a||r[i[0]]||o.push(i[0]):o.push(i[1]);return u},f=function(t){for(var e={},r=[],n=0,i=t.length;n<i;n+=1){var o=t[n],u=o[0],a=o[1],f=null;e[u]?e[a]||(f=a):f=u,f&&r.push(c(f,t,e))}return r},s=r(43143);function d(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var v=function(t,e){var r,i,o=(r=a.oU.exec(t),i=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}(r,i)||l(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=o[0],c=o[1];return u?(0,n.find)(e,{id:c}):null},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(e,r){var i=(0,n.get)(r,"mapSync")&&(0,n.get)(r,"dependenciesMap")||{},o=Object.keys(i).map((function(e){return v(i[e],t)}))||[];return[].concat(d(e),d(o.filter((function(t){return void 0!==t})).map((function(t){return[r.id,t.id]}))))}),[])},b=r(67306),y=r(22222),h=r(84715);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=function(t){return(0,n.get)(t,"widgets.builder.settings")},D=function(t){return(0,n.get)(t,"widgets.dependencies")||{}},w=function(t){return Object.keys(D(t)).map((function(e){return D(t)[e]}))},I=function(t){return(0,n.get)(t,"widgets.builder.editor")},A=(0,y.P1)(I,o.Iz,(function(t){return(0,b.Wy)(t)&&(0,b.i$)(t)}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.layer,r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return e||!n&&r})),S=function(t){return(0,n.get)(t,"widgets.containers[".concat(a.VR,"].widgets"))},G=function(t){return(0,n.get)(t,"widgets.containers[".concat(a.VR,"].collapsed"))},j=function(t){return(0,n.get)(t,"widgets.containers[".concat(a.VR,"].maximized"))},P=(0,y.P1)(S,G,j,(function(t,e,r){if(t){if(null!=r&&r.widget)return t.filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id;return e===r.widget.id}));if(e)return t.filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.id;return!e[r]}))}return t})),W=(0,y.P1)(G,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t)})),R=function(t){return(S(t)||[]).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.widgetType;return"map"===e}))},_=function(t){return(S(t)||[]).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.widgetType;return"table"===e}))},N=(0,y.P1)(R,_,i.Od,u.F,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3?arguments[3]:void 0;return{availableDependencies:t.map((function(t){var e=t.id;return"widgets[".concat(e,"].map")})).concat((0,n.castArray)(r).map((function(){return"map"}))).concat((0,n.castArray)(e).filter((function(){return-1===i.indexOf("viewer")})).map((function(t){var e=t.id;return"widgets[".concat(e,"]")})))}})),k=(0,y.P1)(R,_,i.Od,u.F,I,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,u=o&&"map"!==o.widgetType?o&&o.layer||{}:o&&o.map&&o.map.layers||[];return{availableDependencies:t.map((function(t){var e=t.id;return"widgets[".concat(e,"].map")})).concat((0,n.castArray)(r).map((function(){return r?"map":null}))).filter((function(t){return t})).concat((0,n.castArray)(e).filter((function(){return-1===i.indexOf("viewer")})).filter((function(t){return(0,n.isArray)(u)||u.name===t.layer.name})).filter((function(t){return o&&o.id!==t.id})).map((function(t){var e=t.id;return"widgets[".concat(e,"]")})))}})),x=function(t){return(0,n.get)(m(t),"".concat(a.jv))},H=function(t){return(0,n.get)(x(t),"active")},C=((0,y.P1)(S,(function(t){return function(){var t=f(p(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[])),e={base:190,range:340,options:{base:10,range:360,s:.67,v:.67}},r=(0,s.qH)(e.base,e.range,t.length+1,e.options);return t.map((function(t,e){return{color:r[e],widgets:t}}))}(t)})),function(t){return(0,n.get)(t,"widgets.containers[".concat(a.VR,"].layouts"))}),L=function(t){return(0,n.get)(t,"widgets.containers[".concat(a.VR,"].layout"))},M=function(t){return(0,n.get)(t,"widgets.tray")},V=function(t){return(0,n.get)(t,"widgets.builder.editor.returnToFeatureGrid",!1)},Y=function(t){return(0,n.get)(I(t),"filter")},F=(0,h.y)(D,w,(function(t){return w(t).map((function(e){return 0===e.indexOf("map.")?(0,n.get)((0,i.Od)(t),e.slice(4)):e.match(a.oU)?function(t,e){var r=a.oU.exec(t),i=r&&r[2],o=v(t,e);return i?(0,n.get)(o,i):o}(e,S(t)):(0,n.get)(t,e)}))}),(function(t,e,r){return e.reduce((function(e,n,i){return T(T({},e),{},O({},Object.keys(t)[i],r[i]))}),{})}));(0,y.zB)({widgets:S,layouts:C})},43143:(t,e,r)=>{"use strict";r.d(e,{qH:()=>a,qj:()=>c,qq:()=>f});var n,i=r(17621),o=r.n(i),u=r(86494),a=function(t,e,r,i){var o=t;isNaN(parseFloat(t))&&(o=n.hexToHsv(t)[0]);var u=.5/(r-1),a=e/(r-1),c=[];1===r&&(u=.5,a=e/2);for(var f=0;f<r;f++){var s=o+f*a-e/2,d=u*f+.3,l=d;i&&(s=i.h||s,d=i.s||d,l=i.v||l),c.push(n.hsvToHex(s,d,l,f))}return c},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return o()(t).toHexString()},f=function(t,e,r){var n=o()(t);return t&&n.setAlpha((0,u.toNumber)(void 0!==e?e:n.getAlpha())).toRgbString()||r};n={decToHex:function(t){var e="0123456789ABCDEF",r=parseInt(t,10);return r=isNaN(r)?0:r,e.charAt(((r=r>255||r<0?0:r)-r%16)/16)+e.charAt(r%16)},rgbToHex:function(t,e,r){return t instanceof Array?n.rgbToHex(t[0],t[1],t[2]):"#"+n.decToHex(t)+n.decToHex(e)+n.decToHex(r)},realToDec:function(t){return Math.min(255,Math.round(256*t))},rgbToHsv:function(t,e,r){if(t instanceof Array)return n.rgbToHsv(t[0],t[1],t[2]);var i,o,u,a,c,f=t/255,s=e/255,d=r/255;switch(i=Math.min(Math.min(f,s),d),u=(o=Math.max(Math.max(f,s),d))-i,o){case i:a=0;break;case f:a=60*(s-d)/u,s<d&&(a+=360);break;case s:a=60*(d-f)/u+120;break;case d:a=60*(f-s)/u+240}return c=0===o?0:1-i/o,[Math.round(a),c,o]},distributedColorsHEX:function(t){for(var e=360/(t-1),r=[],i=function t(e,r,i){var o=t(e,r,i);return n.rgbToHex(o)},o=0;o<t;o++)r.push(i(e*o,.57,.63));return r},sameToneRangeColors:a,hsvToRgb:function(t,e,r){if(t instanceof Array)return n.hsvToRgb(t[0],t[1],t[2]);var i,o,u,a=Math.floor(t/60%6),c=t/60-a,f=r*(1-e),s=r*(1-c*e),d=r*(1-(1-c)*e);switch(a){case 0:i=r,o=d,u=f;break;case 1:i=s,o=r,u=f;break;case 2:i=f,o=r,u=d;break;case 3:i=f,o=s,u=r;break;case 4:i=d,o=f,u=r;break;case 5:i=r,o=f,u=s}return[n.realToDec(i),n.realToDec(o),n.realToDec(u)]},hsvToHex:function(t,e,r){var i=n.hsvToRgb(t,e,r);return n.rgbToHex(i)},hexToHsv:function(t){var e=t;if(e.length>0){"#"===e[0]&&(e=t.substring(1));var r=n.hexToRgb(e);return n.rgbToHsv(r)}return null},hexToRgb:function(t){var e,r,n,i=t;return"#"===i.charAt(0)&&(i=t.substring(1)),e=i.charAt(0)+i.charAt(1),r=i.charAt(2)+i.charAt(3),n=i.charAt(4)+i.charAt(5),[parseInt(e,16),parseInt(r,16),parseInt(n,16)]},colorToHexStr:c,colorToRgbaStr:f}},84715:(t,e,r)=>{"use strict";r.d(e,{y:()=>a,o:()=>c});var n=r(86494),i=r(22222),o=function(t,e){return t===e},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return function(e,r){return Array.isArray(e)&&Array.isArray(r)?e===r||e.length===r.length&&e.reduce((function(e,n,i){return e&&t(n,r[i])}),!0):(0,n.isObject)(e)&&(0,n.isObject)(r)?e===r||Object.keys(e).length===Object.keys(r).length&&Object.keys(e).reduce((function(n,i){return n&&t(e[i],r[i])}),!0):e===r}},a=(0,i.wN)(i.PW,(function(t,e){return(0,n.isEqualWith)(t,e,u())})),c=function(t){return(0,i.wN)(i.PW,(function(e,r){return(0,n.isEqualWith)(e,r,u(t))}))}}}]);