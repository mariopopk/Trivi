/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Trivi.ts":
/*!**********************!*\
  !*** ./src/Trivi.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_TriviModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/TriviModel */ "./src/model/TriviModel.ts");
/* harmony import */ var _view_TriviView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/TriviView */ "./src/view/TriviView.ts");


var Trivi = /** @class */ (function () {
    function Trivi(attachment, options) {
        this._attachment = attachment;
        this.model = new _model_TriviModel__WEBPACK_IMPORTED_MODULE_0__.default();
        this.view = new _view_TriviView__WEBPACK_IMPORTED_MODULE_1__.default();
        if (options) {
            if (options.prefix)
                this._prefix = options.prefix;
        }
    }
    Trivi.prototype.start = function () {
        this.view.initialize(this._attachment, this._prefix);
        this.view.paint(this.model.current + 1);
    };
    return Trivi;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trivi);


/***/ }),

/***/ "./src/model/TriviModel.ts":
/*!*********************************!*\
  !*** ./src/model/TriviModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TriviModel = /** @class */ (function () {
    function TriviModel() {
        this._questions = [];
        this._current = 0;
        this._score = 0;
    }
    Object.defineProperty(TriviModel.prototype, "current", {
        get: function () {
            return this._current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriviModel.prototype, "activeQuestion", {
        get: function () {
            return this._questions[this._current];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriviModel.prototype, "questions", {
        set: function (questions) {
            if (questions.length <= 0)
                return;
            this._questions = questions;
        },
        enumerable: false,
        configurable: true
    });
    TriviModel.prototype.selectAnswer = function (id) {
        var responses = (this.activeQuestion).answers;
        for (var i = 0; i < responses.length; i++) {
            console.log(responses[i]);
        }
    };
    TriviModel.prototype.next = function () {
        this._current++;
    };
    TriviModel.prototype.back = function () {
        this._current--;
    };
    TriviModel.prototype.initialize = function () {
        this._current = 0;
    };
    return TriviModel;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TriviModel);


/***/ }),

/***/ "./src/view/TriviView.ts":
/*!*******************************!*\
  !*** ./src/view/TriviView.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TriviView = /** @class */ (function () {
    function TriviView() {
        this.current = null;
        this.total = null;
        this.prompt = null;
        this.responses = null;
    }
    TriviView.prototype.initialize = function (attachment, prefix) {
        if (prefix === void 0) { prefix = "trivi"; }
        var template = "  \n        <div class=\"card\">\n           <div class=\"card-body\">\n             <p><strong id=\"" + prefix + "-current\">#CURRENT</strong><span id=\"" + prefix + "-total\">#TOTAL</span></p>\n             <p class=\"lead\" id=\"" + prefix + "-current-prompt\">#PROMPT</p>\n             <div id=\"" + prefix + "-current-questions\" class=\"d-grid gap-2 questions\">\n               #RESPONSES\n             </div>\n             <button id=\"" + prefix + "-next\" class=\"btn btn-primary btn-sm float-end mt-3\">Next</button>\n           </div>\n        </div>\n           ";
        var skeleton = document.createElement("div");
        skeleton.innerHTML = template;
        attachment.appendChild(skeleton);
        this.current = attachment.querySelector("#" + prefix + "-current");
        this.total = attachment.querySelector("#" + prefix + "-total");
        this.prompt = attachment.querySelector("#" + prefix + "-current-prompt");
        this.responses = attachment.querySelector("#" + prefix + "-current-questions");
    };
    TriviView.prototype.paint = function (current) {
        this.current.textContent = current.toString();
    };
    return TriviView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TriviView);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trivi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trivi */ "./src/Trivi.ts");

var container = document.querySelector("#questions");
var trivi = new _Trivi__WEBPACK_IMPORTED_MODULE_0__.default(container);
trivi.model.questions = [
    {
        id: 1,
        prompt: "The first person convicted of speeding in history was going at what speed?",
        answers: [
            { text: "18 mph", isCorrect: false, id: 1 },
            { text: "30 mph", isCorrect: false, id: 2 },
            { text: "8 mph", isCorrect: true, id: 3 },
            { text: "20 mph", isCorrect: false, id: 4 }
        ]
    },
    {
        id: 2,
        prompt: "'New car smell' consists of how many different chemicals?",
        answers: [
            { text: "Over 300 chemicals", isCorrect: false, id: 5 },
            { text: "Around 100-200 chemicals", isCorrect: false, id: 6 },
            { text: "Around 50-100 chemicals", isCorrect: true, id: 7 },
            { text: "Less than 49 chemicals", isCorrect: false, id: 8 }
        ]
    }
];
trivi.start();
console.log(trivi);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aS8uL3NyYy9Ucml2aS50cyIsIndlYnBhY2s6Ly90cml2aS8uL3NyYy9tb2RlbC9Ucml2aU1vZGVsLnRzIiwid2VicGFjazovL3RyaXZpLy4vc3JjL3ZpZXcvVHJpdmlWaWV3LnRzIiwid2VicGFjazovL3RyaXZpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmkvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNIO0FBR3hDO0lBTUksZUFBWSxVQUFtQixFQUFFLE9BQWE7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxzREFBVSxFQUFFO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvREFBUyxFQUFFO1FBQzNCLElBQUcsT0FBTyxFQUFDO1lBQ1AsSUFBRyxPQUFPLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNO1NBQ25EO0lBQ0QsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQztBQUdELGlFQUFlLEtBQUs7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QUUsRUFBRSxFQUFDLENBQUMsRUFBQztZQUN4RCxFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUM7U0FDM0Q7S0FDSjtDQUNKO0FBR0QsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUViLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcml2aU1vZGVsIGZyb20gXCIuL21vZGVsL1RyaXZpTW9kZWxcIlxyXG5pbXBvcnQgVHJpdmlWaWV3IGZyb20gXCIuL3ZpZXcvVHJpdmlWaWV3XCJcclxuXHJcblxyXG5jbGFzcyBUcml2aXtcclxuICAgIG1vZGVsOiBUcml2aU1vZGVsXHJcbiAgICB2aWV3OiBUcml2aVZpZXdcclxuICAgIHByaXZhdGUgX2F0dGFjaG1lbnQ6IEVsZW1lbnRcclxuICAgIHByaXZhdGUgX3ByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkXHJcblxyXG4gICAgY29uc3RydWN0b3IoYXR0YWNobWVudDogRWxlbWVudCwgb3B0aW9ucz86IGFueSl7XHJcbiAgICB0aGlzLl9hdHRhY2htZW50ID0gYXR0YWNobWVudFxyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBUcml2aU1vZGVsKClcclxuICAgIHRoaXMudmlldyA9IG5ldyBUcml2aVZpZXcoKVxyXG4gICAgaWYob3B0aW9ucyl7XHJcbiAgICAgICAgaWYob3B0aW9ucy5wcmVmaXgpIHRoaXMuX3ByZWZpeCA9IG9wdGlvbnMucHJlZml4XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLnZpZXcuaW5pdGlhbGl6ZSh0aGlzLl9hdHRhY2htZW50LCB0aGlzLl9wcmVmaXgpXHJcbiAgICAgICAgdGhpcy52aWV3LnBhaW50KHRoaXMubW9kZWwuY3VycmVudCArIDEpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmkiLCJpbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4vUXVlc3Rpb25cIlxyXG5cclxuXHJcbmNsYXNzIFRyaXZpTW9kZWx7XHJcbiAgICBwcml2YXRlIF9xdWVzdGlvbnM6IFF1ZXN0aW9uW10gXHJcbiAgICBwcml2YXRlIF9jdXJyZW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY29yZTogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLl9xdWVzdGlvbnMgPSBbXVxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwXHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSAwXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhY3RpdmVRdWVzdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbnNbdGhpcy5fY3VycmVudF1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHF1ZXN0aW9ucyhxdWVzdGlvbnM6IFF1ZXN0aW9uW10pe1xyXG4gICAgICAgIGlmKHF1ZXN0aW9ucy5sZW5ndGggPD0gMCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5fcXVlc3Rpb25zID0gcXVlc3Rpb25zXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbGVjdEFuc3dlcihpZDpudW1iZXIpe1xyXG4gICAgICAgIGNvbnN0IHthbnN3ZXJzOiByZXNwb25zZXN9ID0gKHRoaXMuYWN0aXZlUXVlc3Rpb24pXHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IHJlc3BvbnNlcy5sZW5ndGg7IGkgKyspe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZXNbaV0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5leHQoKXtcclxuICAgICAgICB0aGlzLl9jdXJyZW50KytcclxuICAgIH1cclxuXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudC0tXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpTW9kZWwiLCJpbXBvcnQgVHJpdmlSZXNwb25zZSBmcm9tIFwiLi4vbW9kZWwvUmVzcG9uc2VcIlxyXG5cclxuXHJcbmNsYXNzIFRyaXZpVmlld3tcclxuXHJcbiAgICBjdXJyZW50OiBFbGVtZW50IHwgbnVsbFxyXG4gICAgdG90YWw6IEVsZW1lbnQgfCBudWxsXHJcbiAgICBwcm9tcHQ6IEVsZW1lbnQgfCBudWxsXHJcbiAgICByZXNwb25zZXM6IEVsZW1lbnQgfCBudWxsXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMudG90YWwgID0gbnVsbFxyXG4gICAgICAgIHRoaXMucHJvbXB0ICA9IG51bGxcclxuICAgICAgICB0aGlzLnJlc3BvbnNlcyAgPSBudWxsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRpYWxpemUoIGF0dGFjaG1lbnQ6IEVsZW1lbnQgLCBwcmVmaXg6IHN0cmluZyA9IFwidHJpdmlcIil7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgIDxwPjxzdHJvbmcgaWQ9XCIke3ByZWZpeH0tY3VycmVudFwiPiNDVVJSRU5UPC9zdHJvbmc+PHNwYW4gaWQ9XCIke3ByZWZpeH0tdG90YWxcIj4jVE9UQUw8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCIgaWQ9XCIke3ByZWZpeH0tY3VycmVudC1wcm9tcHRcIj4jUFJPTVBUPC9wPlxyXG4gICAgICAgICAgICAgPGRpdiBpZD1cIiR7cHJlZml4fS1jdXJyZW50LXF1ZXN0aW9uc1wiIGNsYXNzPVwiZC1ncmlkIGdhcC0yIHF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAjUkVTUE9OU0VTXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3ByZWZpeH0tbmV4dFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBmbG9hdC1lbmQgbXQtM1wiPk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBgXHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgc2tlbGV0b24uaW5uZXJIVE1MID0gdGVtcGxhdGVcclxuICAgICAgICBhdHRhY2htZW50LmFwcGVuZENoaWxkKHNrZWxldG9uKVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBhdHRhY2htZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH0tY3VycmVudGApXHJcbiAgICAgICAgdGhpcy50b3RhbCA9IGF0dGFjaG1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJlZml4fS10b3RhbGApXHJcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBhdHRhY2htZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH0tY3VycmVudC1wcm9tcHRgKVxyXG4gICAgICAgIHRoaXMucmVzcG9uc2VzID0gYXR0YWNobWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcmVmaXh9LWN1cnJlbnQtcXVlc3Rpb25zYClcclxuICAgIH1cclxuXHJcbiAgICBwYWludChjdXJyZW50OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudCEudGV4dENvbnRlbnQgPSBjdXJyZW50LnRvU3RyaW5nKClcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmlWaWV3IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVHJpdmkgZnJvbSBcIi4vVHJpdmlcIjtcclxuXHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0aW9uc1wiKSFcclxuXHJcbmNvbnN0IHRyaXZpID0gbmV3IFRyaXZpKGNvbnRhaW5lcik7XHJcblxyXG50cml2aS5tb2RlbC5xdWVzdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgcHJvbXB0OiBcIlRoZSBmaXJzdCBwZXJzb24gY29udmljdGVkIG9mIHNwZWVkaW5nIGluIGhpc3Rvcnkgd2FzIGdvaW5nIGF0IHdoYXQgc3BlZWQ/XCIsXHJcbiAgICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgICAgICB7dGV4dDogXCIxOCBtcGhcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6MX0sXHJcbiAgICAgICAgICAgIHt0ZXh0OiBcIjMwIG1waFwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDoyfSxcclxuICAgICAgICAgICAge3RleHQ6IFwiOCBtcGhcIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDozfSxcclxuICAgICAgICAgICAge3RleHQ6IFwiMjAgbXBoXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOjR9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHByb21wdDogXCInTmV3IGNhciBzbWVsbCcgY29uc2lzdHMgb2YgaG93IG1hbnkgZGlmZmVyZW50IGNoZW1pY2Fscz9cIixcclxuICAgICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgICAgIHt0ZXh0OiBcIk92ZXIgMzAwIGNoZW1pY2Fsc1wiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDo1fSxcclxuICAgICAgICAgICAge3RleHQ6IFwiQXJvdW5kIDEwMC0yMDAgY2hlbWljYWxzXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOjZ9LFxyXG4gICAgICAgICAgICB7dGV4dDogXCJBcm91bmQgNTAtMTAwIGNoZW1pY2Fsc1wiLCBpc0NvcnJlY3Q6IHRydWUsIGlkOjd9LFxyXG4gICAgICAgICAgICB7dGV4dDogXCJMZXNzIHRoYW4gNDkgY2hlbWljYWxzXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOjh9IFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXVxyXG5cclxuXHJcbnRyaXZpLnN0YXJ0KClcclxuXHJcbmNvbnNvbGUubG9nKHRyaXZpKVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=