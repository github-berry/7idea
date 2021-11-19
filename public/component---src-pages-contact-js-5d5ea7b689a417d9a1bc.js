/*! For license information please see component---src-pages-contact-js-5d5ea7b689a417d9a1bc.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[501],{5900:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var l in t)r.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},6187:function(e,n,t){"use strict";var r=t(4942),o=t(4925),i=t(5900),a=t.n(i),l=t(7294),c=t(9541),u=t(5893),s=["bsPrefix","fluid","as","className"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=l.forwardRef((function(e,n){var t=e.bsPrefix,r=e.fluid,i=e.as,l=void 0===i?"div":i,f=e.className,p=(0,o.Z)(e,s),m=(0,c.vE)(t,"container"),b="string"==typeof r?"-".concat(r):"-fluid";return(0,u.jsx)(l,d(d({ref:n},p),{},{className:a()(f,r?"".concat(m).concat(b):m)}))}));p.displayName="Container",p.defaultProps={fluid:!1},n.Z=p},9541:function(e,n,t){"use strict";t.d(n,{vE:function(){return i}});var r=t(7294);t(5893);var o=r.createContext({prefixes:{}});o.Consumer,o.Provider;function i(e,n){var t=(0,r.useContext)(o).prefixes;return e||t[n]||n}},5610:function(e,n,t){"use strict";var r,o,i,a,l=t(1880),c=t(7294),u=t(9),s=u.ZP.div(r||(r=(0,l.Z)(["\n  background: black;\n  padding: 100px;\n  box-sizing: border-box;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 250px 100px;\n  @media (max-width: 800px) {\n    display: block;\n  }\n  @media (max-width: 400px) {\n    padding: 10px;\n  }\n"]))),f=u.ZP.div(o||(o=(0,l.Z)(["\n  width: 33%;\n  @media (max-width: 800px) {\n    margin-bottom: 50px;\n    width: 100%;\n  }\n"]))),d=u.ZP.img(i||(i=(0,l.Z)(["\n  width: 180px;\n  height: 180px;\n"]))),p=u.ZP.a(a||(a=(0,l.Z)(["\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));n.Z=function(){return c.createElement(c.Fragment,null,c.createElement(s,null,c.createElement(f,null,c.createElement(d,{src:"logo-white.png",alt:""})),c.createElement(f,null,c.createElement(p,{href:"#"},"Home"),c.createElement(p,{href:"#"},"About Us."),c.createElement(p,{href:"#"},"Projects."),c.createElement(p,{href:"#"},"Clients."),c.createElement(p,{href:"#"},"Team."),c.createElement(p,{href:"#"},"Contact Us.")),c.createElement(f,null,"7 idea is a new startup company that offers IT solutions and online marketing. We are trying to build a bigger team to answer our business needs. As we are growing we are looking for people to join us and build up our team and culture. Our service offers a new cutting edge technology and we are able to move quickly to catch up with the new technology.")))}},262:function(e,n,t){"use strict";t.r(n);var r,o,i,a,l,c,u=t(1880),s=t(7294),f=t(9),d=t(6187),p=t(5617),m=t(9275),b=t(5610),h=f.ZP.div(r||(r=(0,u.Z)(["\n  background: #000;\n  width: 100%;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),g=f.ZP.h1(o||(o=(0,u.Z)(["\n  margin-top: 100px;\n  font-size: 120px;\n  color: #fff;\n  font-weight: bold;\n  @media (max-width: 1200px) {\n    font-size: 48px;\n  }\n"]))),x=f.ZP.div(i||(i=(0,u.Z)(["\n  background: #fff;\n  width: 100%;\n  height: auto;\n  padding-top: 50px;\n  padding-bottom: 60px;\n"]))),w=f.ZP.input(a||(a=(0,u.Z)(["\n  height: 50px;\n  width: 80%;\n  @media (max-width: 1200px) {\n    width: 100%;\n  }\n  border: none;\n  border-bottom: 2px solid silver;\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid #66afe9;\n  }\n  margin-bottom: 30px;\n"]))),y=f.ZP.textarea(l||(l=(0,u.Z)(["\n  width: 80%;\n  @media (max-width: 1200px) {\n    width: 100%;\n  }\n  border: none;\n  border-bottom: 2px solid silver;\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid #66afe9;\n  }\n"]))),v=f.ZP.a(c||(c=(0,u.Z)(["\n  padding: 10px 20px;\n  background: #000;\n  color: #fff;\n  font-size: 20px;\n  text-decoration: none;\n  &:hover {\n    background: silver;\n    color: #000;\n  }\n"])));n.default=function(){return s.createElement(s.Fragment,null,s.createElement(p.Z,null),s.createElement(m.Z,null),s.createElement(h,null,s.createElement(g,null,"Contact Us.")),s.createElement(x,null,s.createElement(d.Z,null,s.createElement(w,{placeholder:"NAME"}),s.createElement(w,{placeholder:"EMAIL"}),s.createElement(y,{placeholder:"MESSAGE",rows:"4",cols:"50"}),s.createElement("br",null),s.createElement("br",null),s.createElement(v,null,"SEND"))),s.createElement(b.Z,null))}},4942:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},4925:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-5d5ea7b689a417d9a1bc.js.map