(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6nqU":function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){return"        <li>"+n.escapeExpression(n.lambda(null!=e?e.name:e,e))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var o,i,u=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c=n.escapeExpression;return'<p class="country-name">'+c("function"==typeof(i=null!=(i=t.name||(null!=e?e.name:e))?i:r)?i.call(u,{name:"name",hash:{},data:l,loc:{start:{line:1,column:24},end:{line:1,column:32}}}):i)+'</p>\n<div class="description">\n  <div>\n    <p><span class="headline">Capital:</span> '+c("function"==typeof(i=null!=(i=t.capital||(null!=e?e.capital:e))?i:r)?i.call(u,{name:"capital",hash:{},data:l,loc:{start:{line:4,column:46},end:{line:4,column:57}}}):i)+'</p>\n    <p><span class="headline">Population:</span> '+c("function"==typeof(i=null!=(i=t.population||(null!=e?e.population:e))?i:r)?i.call(u,{name:"population",hash:{},data:l,loc:{start:{line:5,column:49},end:{line:5,column:63}}}):i)+'</p>\n    <p><span class="headline">Languages:</span>\n      <ul>\n'+(null!=(o=t.each.call(u,null!=e?e.languages:e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:8,column:8},end:{line:10,column:17}}}))?o:"")+'      </ul>\n    </p>\n  </div>\n  <img src="'+c("function"==typeof(i=null!=(i=t.flag||(null!=e?e.flag:e))?i:r)?i.call(u,{name:"flag",hash:{},data:l,loc:{start:{line:14,column:12},end:{line:14,column:20}}}):i)+'" alt="This is the flag!" class="flag" width="300px">\n</div>'},useData:!0})},A7VU:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var o;return"<li>"+n.escapeExpression("function"==typeof(o=null!=(o=t.name||(null!=e?e.name:e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"name",hash:{},data:l,loc:{start:{line:2,column:4},end:{line:2,column:12}}}):o)+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var o;return null!=(o=t.each.call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?o:""},useData:!0})},L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("L1EO"),t("lYjL"),t("4owi"),t("IvQZ"),t("D/wG"),t("4NM0"),t("WoWj"),t("JBxO"),t("FdtR");var a=function(){return fetch("https://restcountries.eu/rest/v2/").then((function(n){return n.json()}))},l=t("A7VU"),o=t.n(l),i=t("6nqU"),u=t.n(i),r=t("dIfx");t("IlkV");r.a.defaults.styling="material",r.a.defaults.icons="material";var c=function(n){return r.a.error({text:n})},s=function(n){return r.a.notice({text:n})},p={info:"",warningNotIn:"No match found!\nPlease, enter another query",warningTooMany:"Too many matches found!\nPlease, enter a more specific query"},f={input:document.querySelector(".input-js"),alertList:document.querySelector(".alert-list"),foundContry:document.querySelector(".country-description-js")},m=t("jffb");function d(){f.alertList.innerHTML="",f.foundContry.innerHTML=""}f.input.addEventListener("input",m((function(n){n.preventDefault();var e=n.target.value.toLowerCase();a(e).then((function(n){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})).then((function(n){var t,a,l=Array.from(n);if(0===l.length)c(p.warningNotIn);else if(0===e.length)d();else if(1===l.length){d(),function(n){f.foundContry.insertAdjacentHTML("afterbegin",n)}((a=n[0],u()(a)))}else if(l.length>1&&l.length<=10){d(),function(n){f.alertList.insertAdjacentHTML("beforeend",n)}((t=n,o()(t)))}else d(),s(p.warningTooMany)})).catch((function(n){return console.warn(n)}))}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1804559c1fbc13e90993.js.map