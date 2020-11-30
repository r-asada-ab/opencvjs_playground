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

/***/ "./src/discover.ts":
/*!*************************!*\
  !*** ./src/discover.ts ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports */
/*! CommonJS bailout: this is used directly at 1:17-21 */
/***/ (function() {

eval("var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n// テーブルをリセットする\r\nfunction resetTable() {\r\n    let tBody = document.getElementById(\"table_body\");\r\n    while (tBody.hasChildNodes()) {\r\n        tBody.removeChild(tBody.lastChild);\r\n    }\r\n}\r\n// テーブルを作成する\r\nfunction createTable(body) {\r\n    let tBody = document.getElementById(\"table_body\");\r\n    for (let i = 0; i < body.length; i++) {\r\n        let b = body[i];\r\n        let tr = document.createElement(\"tr\");\r\n        let title = document.createElement(\"td\");\r\n        let discription = document.createElement(\"td\");\r\n        let snipet = document.createElement(\"td\");\r\n        let date = document.createElement(\"td\");\r\n        title.innerText = b.title;\r\n        discription.innerText = b.discription;\r\n        let s = b.snipet.slice(0, 20) + \"...\";\r\n        snipet.innerText = s;\r\n        let d = new Date(b.date);\r\n        date.innerText = d.toDateString();\r\n        tr.append(title);\r\n        tr.append(discription);\r\n        tr.append(snipet);\r\n        tr.append(date);\r\n        tr.addEventListener(\"click\", () => {\r\n            location.href = \"index.html?id=\" + encodeURIComponent(b._id);\r\n        });\r\n        tBody.append(tr);\r\n    }\r\n}\r\nfunction main() {\r\n    // タイトルを押したとき\r\n    let title = document.getElementById(\"title_text\");\r\n    title.addEventListener(\"click\", () => {\r\n        location.href = \"index.html\";\r\n    });\r\n    title.addEventListener(\"mouseover\", () => {\r\n        title.style.cursor = \"pointer\";\r\n    });\r\n    // 検索ボタンを押したとき\r\n    let searchButton = document.getElementById(\"search_button\");\r\n    searchButton.addEventListener(\"click\", () => {\r\n        let searchBox = document.getElementById(\"textbox\");\r\n        const data = {\r\n            query: searchBox.value\r\n        };\r\n        let body = JSON.stringify(data);\r\n        let promise = fetch('./api/find', {\r\n            method: 'POST',\r\n            headers: { 'Content-Type': 'application/json' },\r\n            body\r\n        });\r\n        promise.then((resolve) => __awaiter(this, void 0, void 0, function* () {\r\n            let body = yield resolve.json();\r\n            resetTable();\r\n            createTable(body);\r\n        }));\r\n    });\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack://opencvjsplayground/./src/discover.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_modules__["./src/discover.ts"]();
/******/ })()
;