/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/pell/dist/pell.min.js":
/*!********************************************!*\
  !*** ./node_modules/pell/dist/pell.min.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, top-level-this-exports */
/*! CommonJS bailout: this is used directly at 1:153-157 */
/*! CommonJS bailout: exports is used directly at 1:70-77 */
/***/ (function(__unused_webpack_module, exports) {

eval("!function(t,e){ true?e(exports):0}(this,function(t){\"use strict\";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=\"defaultParagraphSeparator\",l=\"formatBlock\",a=function(t,e,n){return t.addEventListener(e,n)},s=function(t,e){return t.appendChild(e)},d=function(t){return document.createElement(t)},n=function(t){return document.queryCommandState(t)},f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(t,!1,e)},p={bold:{icon:\"<b>B</b>\",title:\"Bold\",state:function(){return n(\"bold\")},result:function(){return f(\"bold\")}},italic:{icon:\"<i>I</i>\",title:\"Italic\",state:function(){return n(\"italic\")},result:function(){return f(\"italic\")}},underline:{icon:\"<u>U</u>\",title:\"Underline\",state:function(){return n(\"underline\")},result:function(){return f(\"underline\")}},strikethrough:{icon:\"<strike>S</strike>\",title:\"Strike-through\",state:function(){return n(\"strikeThrough\")},result:function(){return f(\"strikeThrough\")}},heading1:{icon:\"<b>H<sub>1</sub></b>\",title:\"Heading 1\",result:function(){return f(l,\"<h1>\")}},heading2:{icon:\"<b>H<sub>2</sub></b>\",title:\"Heading 2\",result:function(){return f(l,\"<h2>\")}},paragraph:{icon:\"&#182;\",title:\"Paragraph\",result:function(){return f(l,\"<p>\")}},quote:{icon:\"&#8220; &#8221;\",title:\"Quote\",result:function(){return f(l,\"<blockquote>\")}},olist:{icon:\"&#35;\",title:\"Ordered List\",result:function(){return f(\"insertOrderedList\")}},ulist:{icon:\"&#8226;\",title:\"Unordered List\",result:function(){return f(\"insertUnorderedList\")}},code:{icon:\"&lt;/&gt;\",title:\"Code\",result:function(){return f(l,\"<pre>\")}},line:{icon:\"&#8213;\",title:\"Horizontal Line\",result:function(){return f(\"insertHorizontalRule\")}},link:{icon:\"&#128279;\",title:\"Link\",result:function(){var t=window.prompt(\"Enter the link URL\");t&&f(\"createLink\",t)}},image:{icon:\"&#128247;\",title:\"Image\",result:function(){var t=window.prompt(\"Enter the image URL\");t&&f(\"insertImage\",t)}}},m={actionbar:\"pell-actionbar\",button:\"pell-button\",content:\"pell-content\",selected:\"pell-button-selected\"},r=function(n){var t=n.actions?n.actions.map(function(t){return\"string\"==typeof t?p[t]:p[t.name]?e({},p[t.name],t):t}):Object.keys(p).map(function(t){return p[t]}),r=e({},m,n.classes),i=n[c]||\"div\",o=d(\"div\");o.className=r.actionbar,s(n.element,o);var u=n.element.content=d(\"div\");return u.contentEditable=!0,u.className=r.content,u.oninput=function(t){var e=t.target.firstChild;e&&3===e.nodeType?f(l,\"<\"+i+\">\"):\"<br>\"===u.innerHTML&&(u.innerHTML=\"\"),n.onChange(u.innerHTML)},u.onkeydown=function(t){var e;\"Enter\"===t.key&&\"blockquote\"===(e=l,document.queryCommandValue(e))&&setTimeout(function(){return f(l,\"<\"+i+\">\")},0)},s(n.element,u),t.forEach(function(t){var e=d(\"button\");if(e.className=r.button,e.innerHTML=t.icon,e.title=t.title,e.setAttribute(\"type\",\"button\"),e.onclick=function(){return t.result()&&u.focus()},t.state){var n=function(){return e.classList[t.state()?\"add\":\"remove\"](r.selected)};a(u,\"keyup\",n),a(u,\"mouseup\",n),a(e,\"click\",n)}s(o,e)}),n.styleWithCSS&&f(\"styleWithCSS\"),f(c,i),n.element},i={exec:f,init:r};t.exec=f,t.init=r,t.default=i,Object.defineProperty(t,\"__esModule\",{value:!0})});\n\n\n//# sourceURL=webpack://opencvjsplayground/./node_modules/pell/dist/pell.min.js?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pell */ \"./node_modules/pell/dist/pell.min.js\");\n/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pell__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar editor = (0,pell__WEBPACK_IMPORTED_MODULE_0__.init)({\r\n    element: document.getElementById('editor'),\r\n    onChange: function (html) {\r\n        document.getElementById('html-output').textContent = html;\r\n    },\r\n    defaultParagraphSeparator: 'p',\r\n    styleWithCSS: true,\r\n    actions: [\r\n        'bold',\r\n        'underline',\r\n        {\r\n            name: 'italic',\r\n            result: function () { return (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('italic'); }\r\n        },\r\n        {\r\n            name: 'backColor',\r\n            icon: '<div style=\"background-color:pink;\">A</div>',\r\n            title: 'Highlight Color',\r\n            result: function () { return (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('backColor', 'pink'); }\r\n        },\r\n        {\r\n            name: 'image',\r\n            result: function () {\r\n                var url = window.prompt('Enter the image URL');\r\n                if (url)\r\n                    (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('insertImage', url);\r\n            }\r\n        },\r\n        {\r\n            name: 'link',\r\n            result: function () {\r\n                var url = window.prompt('Enter the link URL');\r\n                if (url)\r\n                    (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('createLink', url);\r\n            }\r\n        }\r\n    ],\r\n    classes: {\r\n        actionbar: 'pell-actionbar-custom-name',\r\n        button: 'pell-button-custom-name',\r\n        content: 'pell-content-custom-name',\r\n        selected: 'pell-button-selected-custom-name'\r\n    }\r\n});\r\n// editor.content<HTMLElement>\r\n// To change the editor's content:\r\neditor.content.innerHTML = '<b><u><i>Initial content!</i></u></b>';\r\n\n\n//# sourceURL=webpack://opencvjsplayground/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;