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

eval("var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n// テーブルをリセットする\nfunction resetTable() {\n    let tBody = document.getElementById(\"table_body\");\n    while (tBody.hasChildNodes()) {\n        tBody.removeChild(tBody.lastChild);\n    }\n}\n// テーブルを作成する\nfunction createTable(body) {\n    let tBody = document.getElementById(\"table_body\");\n    for (let i = 0; i < body.length; i++) {\n        let b = body[i];\n        let tr = document.createElement(\"tr\");\n        let vote = document.createElement(\"td\");\n        let title = document.createElement(\"td\");\n        let discription = document.createElement(\"td\");\n        let snipet = document.createElement(\"td\");\n        let date = document.createElement(\"td\");\n        let views = document.createElement(\"td\");\n        title.innerText = b.title;\n        discription.innerText = b.discription;\n        let s = b.snipet.slice(0, 20) + \"...\";\n        snipet.innerText = s;\n        let d = new Date(b.date);\n        date.innerText = d.toDateString();\n        let v = b.views;\n        if (v == null) {\n            views.innerText = \"0\";\n        }\n        else {\n            views.innerText = v;\n        }\n        let upvoteIcon = new Image();\n        upvoteIcon.src = \"images/ic_vote.png\";\n        upvoteIcon.width = 16;\n        upvoteIcon.height = 16;\n        let upvote = document.createElement(\"div\");\n        upvote.style.fontSize = \"small\";\n        upvote.style.color = \"lightgray\";\n        let vo = b.vote;\n        if (vo == null) {\n            upvote.innerText = \"0\";\n        }\n        else {\n            upvote.innerText = vo;\n        }\n        vote.append(upvoteIcon);\n        vote.append(upvote);\n        tr.append(vote);\n        tr.append(title);\n        tr.append(discription);\n        tr.append(snipet);\n        tr.append(date);\n        tr.append(views);\n        addVoteEvent(upvoteIcon, upvote, vo, b._id);\n        addTransitionEvent(title, v, b._id);\n        addTransitionEvent(discription, v, b._id);\n        addTransitionEvent(snipet, v, b._id);\n        addTransitionEvent(date, v, b._id);\n        addTransitionEvent(views, v, b._id);\n        tBody.append(tr);\n    }\n}\n// 遷移イベントを追加\nfunction addTransitionEvent(elm, v, _id) {\n    elm.addEventListener(\"click\", () => {\n        let dv = 1;\n        if (v != undefined) {\n            dv = v + 1;\n        }\n        const data = {\n            _id: _id,\n            views: dv\n        };\n        let body = JSON.stringify(data);\n        fetch('./api/views', {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body\n        });\n        location.href = \"index.html?id=\" + encodeURIComponent(_id);\n    });\n    elm.addEventListener(\"mouseover\", () => {\n        elm.style.cursor = \"pointer\";\n    });\n}\n// Voteイベントを追加\nfunction addVoteEvent(elm, textElm, vote, _id) {\n    elm.addEventListener(\"click\", () => {\n        let dv = 1;\n        if (vote != undefined) {\n            dv = vote + 1;\n        }\n        const data = {\n            _id: _id,\n            vote: dv\n        };\n        let body = JSON.stringify(data);\n        let promise = fetch('./api/vote', {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body\n        });\n        promise.then(() => {\n            textElm.innerText = dv.toString();\n        });\n    });\n    elm.addEventListener(\"mouseover\", () => {\n        elm.style.cursor = \"pointer\";\n    });\n}\nfunction main() {\n    // タイトルを押したとき\n    let title = document.getElementById(\"title_text\");\n    title.addEventListener(\"click\", () => {\n        location.href = \"index.html\";\n    });\n    title.addEventListener(\"mouseover\", () => {\n        title.style.cursor = \"pointer\";\n    });\n    // 検索ボタンを押したとき\n    let searchButton = document.getElementById(\"search_button\");\n    searchButton.addEventListener(\"click\", () => {\n        let searchBox = document.getElementById(\"textbox\");\n        const data = {\n            query: searchBox.value\n        };\n        let body = JSON.stringify(data);\n        let promise = fetch('./api/find', {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body\n        });\n        promise.then((resolve) => __awaiter(this, void 0, void 0, function* () {\n            let body = yield resolve.json();\n            resetTable();\n            createTable(body);\n        }));\n    });\n}\nmain();\n\n\n//# sourceURL=webpack://opencvjsplayground/./src/discover.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_modules__["./src/discover.ts"]();
/******/ })()
;