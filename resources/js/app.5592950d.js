!function(t){function e(e){for(var a,r,o=e[0],u=e[1],c=e[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);for(l&&l(e);d.length;)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={0:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([48,1]),n()}({18:function(t,e,n){t.exports=function(){"use strict";var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},e=function(t){var e=t.id;if(this._el=document.getElementById(e),null!==this._el){this._radius=t.radius||10,this._duration=void 0===t.duration?500:t.duration,this._value=1e-7,this._maxValue=t.maxValue||100,this._text=void 0===t.text?function(t){return this.htmlifyNumber(t)}:t.text,this._text2=void 0===t.text2?"":t.text2,this._strokeWidth=t.width||10,this._outerStrokeWidth=t.outerWidth||10,this._biggerStrokeWidth=this._outerStrokeWidth>=this._strokeWidth?this._outerStrokeWidth:this._strokeWidth,this._colors=t.colors||["#EEE","#F00"],this._svg=null,this._movingPath=null,this._wrapContainer=null,this._textWrapContainer=null,this._textContainer=null,this._textContainer2=null,this._wrpClass=t.wrpClass||"circles-wrp",this._txtWrpClass=t.txtWrpClass||"circles-text-wrp",this._textClass=t.textClass||"circles-text",this._secondTextClass=t.secondTextClass||"circles-text-secondary",this._valClass=t.valueStrokeClass||"circles-valueStroke",this._maxValClass=t.maxValueStrokeClass||"circles-maxValueStroke";var n=Math.PI/180*270;this._start=-Math.PI/180*90,this._startPrecise=this._precise(this._start),this._circ=n-this._start,this._generate().update(t.value||0)}};return e.prototype={VERSION:"0.0.6",_generate:function(){return this._svgSize=2*this._radius,this._radiusAdjusted=this._radius-this._biggerStrokeWidth/2,this._generateSvg()._generateText()._generateSecondaryText()._gerateTextWrapper()._generateWrapper(),this._el.innerHTML="",this._el.appendChild(this._wrapContainer),this},_setPercentage:function(t){this._movingPath.setAttribute("d",this._calculatePath(t,!0)),this._textContainer.innerHTML=this._getText(this.getValueFromPercent(t))},_generateWrapper:function(){return this._wrapContainer=document.createElement("div"),this._wrapContainer.className=this._wrpClass,this._wrapContainer.appendChild(this._svg),this._wrapContainer.appendChild(this._textWrapContainer),this},_gerateTextWrapper:function(){return this._textWrapContainer=document.createElement("div"),this._textWrapContainer.className=this._txtWrpClass,this._textWrapContainer.appendChild(this._textContainer),this._textWrapContainer.appendChild(this._textContainer2),this},_generateText:function(){return this._textContainer=document.createElement("div"),this._textContainer.className=this._textClass,this._textContainer.innerHTML=this._getText(0),this},_generateSecondaryText:function(){return this._textContainer2=document.createElement("div"),this._textContainer2.className=this._secondTextClass,this._textContainer2.innerHTML=this._text2,this},_getText:function(t){return this._text?(void 0===t&&(t=this._value),t=parseFloat(t.toFixed(2)),"function"==typeof this._text?this._text.call(this,t):this._text):""},_generateSvg:function(){return this._svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this._svg.setAttribute("xmlns","http://www.w3.org/2000/svg"),this._svg.setAttribute("version","1.1"),this._svg.setAttribute("viewBox","0 0 "+this._svgSize+" "+this._svgSize),this._generatePath(100,!1,this._colors[0],this._maxValClass,!0)._generatePath(1,!0,this._colors[1],this._valClass,!1),this._movingPath=this._svg.getElementsByTagName("path")[1],this},_generatePath:function(t,e,n,a,i){var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("version","1.1"),s.setAttribute("fill","transparent"),s.setAttribute("d",this._calculatePath(t,e)),s.setAttribute("class",a),this._svg.appendChild(s),this},_calculatePath:function(t,e){var n=this._start+t/100*this._circ,a=this._precise(n);return this._arc(a,e)},_arc:function(t,e){var n=t-.001,a=t-this._startPrecise<Math.PI?0:1;return["M",this._radius+this._radiusAdjusted*Math.cos(this._startPrecise),this._radius+this._radiusAdjusted*Math.sin(this._startPrecise),"A",this._radiusAdjusted,this._radiusAdjusted,0,a,1,this._radius+this._radiusAdjusted*Math.cos(n),this._radius+this._radiusAdjusted*Math.sin(n),e?"":"Z"].join(" ")},_precise:function(t){return Math.round(1e3*t)/1e3},htmlifyNumber:function(t,e,n){e=e||"circles-integer",n=n||"circles-decimals";var a=(t+"").split("."),i='<span class="'+e+'">'+a[0]+"</span>";return a.length>1&&(i+='.<span class="'+n+'">'+a[1].substring(0,2)+"</span>"),i},updateRadius:function(t){return this._radius=t,this._generate().update(!0)},updateWidth:function(t,e){return this._strokeWidth=t,this._outerStrokeWidth=e,this._biggerStrokeWidth=this._outerStrokeWidth>=this._strokeWidth?this._outerStrokeWidth:this._strokeWidth,this._generate().update(!0)},updateColors:function(t){this._colors=t;var e=this._svg.getElementsByTagName("path");return e[0].setAttribute("stroke",t[0]),e[1].setAttribute("stroke",t[1]),this},getPercent:function(){return 100*this._value/this._maxValue},getValueFromPercent:function(t){return this._maxValue*t/100},getValue:function(){return this._value},getMaxValue:function(){return this._maxValue},update:function(e,n){if(!0===e)return this._setPercentage(this.getPercent()),this;if(this._value==e||isNaN(e))return this;void 0===n&&(n=this._duration);var a,i,s,r,o=this,u=o.getPercent(),c=1;return this._value=Math.min(this._maxValue,Math.max(0,e)),n?(a=o.getPercent(),i=a>u,c+=a%1,s=Math.floor(Math.abs(a-u)/c),r=n/s,function e(n){if(i?u+=c:u-=c,i&&u>=a||!i&&u<=a)t((function(){o._setPercentage(a)}));else{t((function(){o._setPercentage(u)}));var s=Date.now(),l=s-n;l>=r?e(s):setTimeout((function(){e(Date.now())}),r-l)}}(Date.now()),this):(this._setPercentage(this.getPercent()),this)}},e.create=function(t){return new e(t)},e}()},38:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);n(19),n(38);var a=n(0),i=n.n(a),s=(n(5),n(39),n(10),function(t,e){var n=i()(".nav-custom-menu.show,.nav-custom-search.show"),a=i()(t);n.removeClass("show"),a.addClass("show"),e&&a.trigger("focus:link")}),r=function(){i()(".nav-custom-menu.show").removeClass("show")};i()(".nav-custom-menu").each((function(t,e){var n=i()(e),a=n.attr("id"),s=i()('.nav-menu-open[data-menu="'.concat(a,'"]')),o=n.find(".nav-custom-menu-col:first-child .nav-custom-menu-link-group:first-child > p > a"),u=n.find(".nav-menu-close");n.on("focus:link",(function(t){o.focus(),u.addClass("show")})),o.on("keydown",(function(t){t.shiftKey&&"Tab"===t.key&&(t.preventDefault(),u.focus())})),u.on("click",(function(t){r(),s.focus()})),u.on("keydown",(function(t){"Tab"===t.key&&o.focus()}))})),i()("[data-menu-toggle]").on("mouseenter",(function(t){s(i()(t.currentTarget).data("menu-toggle"))})),i()(".nav-menu-open").on("click",(function(t){s(i()(t.currentTarget).prev().data("menu-toggle"),!0)})),i()(".nav-custom, .nav-item").on("mouseleave",(function(t){window.setTimeout((function(){0==i()(".nav-item:hover").length&&0==i()(".nav-custom:hover").length&&r()}))})),i()("#search-menu-btn").on("click",(function(){var t=i()("#search-menu");t.toggleClass("show"),"block"===t.css("display")&&t.find("input[type=text]").focus()}));var o=!1,u=null;i()(".nav-main, .nav-sub").on("mousedown",(function(){o=!0,null!==u&&clearTimeout(u),u=setTimeout((function(){return o=!1}),50)}));var c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i()(t).on("focusout",(function(){var t=this;n&&o||setTimeout((function(){i.a.contains(t,document.activeElement)||i()(t).find(e).collapse("hide")}),500)}))};c(".nav-sub-menu > li","> ul.collapse"),c("ul.collapse > li","> ul.collapse"),c(".nav-mobile","#navbarSupportedContent",!0);var l=function(t){var e=i()(t).find("> li");e.find("> .nav-item a.nav-caret").each((function(){var t=i()(this).attr("href");i()(this).attr("data-target",t),i()(this).attr("href","#")})),e.find("> ul.collapse").attr("data-parent",t)};l(".nav-sub-menu"),i()(".nav-sub-menu > li > ul.collapse").each((function(){var t=i()(this).attr("id");l("#".concat(t))}));n(41),n(42);var h=n(18),d=n.n(h);n(43),n(44),n(45);function p(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var f=function(){function t(e,n,a){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=i()(e),this.campusData=n,!n)throw new Error("Missing Campus Data");a=a||"UC Davis",this.registerHandlers(),this.element.find('[data-name="'.concat(a,'"]')).click()}var e,n,a;return e=t,(n=[{key:"registerHandlers",value:function(){this.element.find("svg .cls-2").on("click focus",this.campusNameClick.bind(this))}},{key:"campusNameClick",value:function(t){t.preventDefault();var e=i()(t.currentTarget),n=e.data("name"),a=e.parent().parent().attr("xlink:href"),s=this.getCampusDataByName(n);this.element.find("svg .active").removeClass("active"),e.parent().parent().addClass("active"),s&&this.updateCampusInfoBox(n,a,s)}},{key:"getCampusDataByName",value:function(t){return this.campusData.hasOwnProperty(t)?this.campusData[t]:null}},{key:"updateCampusInfoBox",value:function(t,e,n){if(!t||!n)throw new Error("Missing arguments");i()("#campus-name").html(t),i()("#campus-description").html(n.description),i()("#campus-students").html(n.students),i()("#campus-setting").html(n.setting),i()("#campus-fun-fact").html(n.funFact),i()("#campus-mascot").html(n.mascot.name),i()("#campus-mascot-logo").attr("src",n.mascot.logo),i()("#campus-link").attr("href",e),i()("#campus-link span").html(t)}}])&&p(e.prototype,n),a&&p(e,a),t}();window.ppjquery=i.a;var m=function(t,e){return i()(e).find("#main-content").removeAttr("id")};i()(".carousel").each((function(t,e){var n,a,s,r=i()(e),o=r.find(".carousel-indicators"),u=r.find(".carousel-indicators li"),c=r.find(".carousel-item");for(r.attr({tabindex:"0"}),o.attr("role","tablist"),u.each((function(t,e){return i()(e).attr({tabindex:"0"})})),c.each(m),s=0;s<c.length;s++)(n=c[s]).setAttribute("role","tabpanel"),n.setAttribute("id","tabpanel-"+t+"-"+s),n.setAttribute("aria-labelledby","tab-"+t+"-"+s);for("string"!=typeof r.attr("role")&&(r.attr("role","complementary"),r.attr("aria-labelledby","id_title"),r.attr("aria-describedby","id_desc"),r.prepend('<a id="btn-carousel-play" role="button" href="#"><i class="fas fa-pause-circle"></i><span class="sr-only">Pause carousel</span></a>'),r.prepend('<p  id="id_desc" class="sr-only">A carousel is a rotating set of images, rotation stops on keyboard focus on carousel tab controls or hovering the mouse pointer over images.  Use the tabs to change the displayed slide.</p>'),r.prepend('<h2 id="id_title" class="sr-only">Carousel content with '+c.length+" slides.</h2>")),s=0;s<u.length;s++){(a=u[s]).setAttribute("role","tab"),a.setAttribute("id","tab-"+t+"-"+s),a.setAttribute("aria-controls","tabpanel-"+t+"-"+s);var l="#tabpanel-"+t+"-"+s,h=r.find(l).find("h1").text();"string"==typeof h&&0!==h.length||(h=r.find(l).find("h2").text()),"string"==typeof h&&0!==h.length||(h=r.find(l).text()),"string"==typeof h&&0!==h.length||(h=r.find(l).find("h3").text()),"string"==typeof h&&0!==h.length||(h=r.find(l).find("h4").text()),"string"==typeof h&&0!==h.length||(h=r.find(l).find("h5").text()),"string"==typeof h&&0!==h.length||(h=r.find(l).find("h6").text()),"string"==typeof h&&0!==h.length||(h="no title");var d=document.createElement("span");d.setAttribute("class","sr-only"),d.innerHTML="Slide "+(s+1),h&&(d.innerHTML+=": "+h),a.appendChild(d)}r.on("slide.bs.carousel",(function(){i()(this);u.each((function(){var t=i()(this);t.hasClass("active")?t.attr({"aria-selected":"true"}):t.attr({"aria-selected":"false"})}))})),u.on("keydown",(function(t){var e=t.which||t.keyCode;/(13|32)/.test(e)&&(r.carousel(i()(t.target).data("slide-to")),t.preventDefault())})),r.find("#btn-carousel-play").click((function(t){i()("#btn-carousel-play i").hasClass("fa-pause-circle")?(i()(".carousel").carousel("pause"),i()("#btn-carousel-play i").removeClass("fa-pause-circle"),i()("#btn-carousel-play i").addClass("fa-play-circle"),i()("#btn-carousel-play span").text("Carousel has stopped.  Activate the button to resume carousel.")):(i()(".carousel").carousel("cycle"),i()("#btn-carousel-play i").removeClass("fa-play-circle"),i()("#btn-carousel-play i").addClass("fa-pause-circle"),i()("#btn-carousel-play span").text("Carousel has resumed.  Activate the button to pause carousel.")),t.preventDefault()}))})),i()("[data-ride=carousel]").carousel({interval:1e4}),window.interactiveMap&&new f(".uc-map-interactive",window.interactiveMap),i()(document).ready((function(){window.onLoadCreateOptions&&window.onLoadCreateOptions.length>0&&window.onLoadCreateOptions.forEach((function(t,e){d.a.create(t)}))}))}});
//# sourceMappingURL=app.5592950d.js.map