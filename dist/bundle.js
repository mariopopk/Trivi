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
        var _this = this;
        var _a;
        this.view.initialize(this._attachment, this._prefix);
        this.render();
        (_a = this.view.next) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
            e.preventDefault();
            _this.model.next();
            _this.render();
        });
    };
    Trivi.prototype.render = function () {
        this.view.paint(this.model.current + 1, this.model.questions.length, this.model.activeQuestion.prompt, this.model.activeQuestion.answers);
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
        get: function () {
            return this._questions;
        },
        set: function (questions) {
            if (questions.length <= 0)
                return;
            this._questions = questions;
        },
        enumerable: false,
        configurable: true
    });
    // selectAnswer(id:number){
    //     const {answers: responses} = (this.activeQuestion)
    //     for(let i =0; i < responses.length; i ++){
    //         console.log(responses[i])      
    //     }
    // }
    TriviModel.prototype.next = function () {
        if (this._current < this._questions.length - 1)
            this._current++;
    };
    TriviModel.prototype.back = function () {
        if (this._current > 0)
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
        this.next = null;
    }
    TriviView.prototype.initialize = function (attachment, prefix) {
        if (prefix === void 0) { prefix = "trivi"; }
        var template = "  \n        <div class=\"card\">\n           <div class=\"card-body\">\n             <p><strong id=\"" + prefix + "-current\">#CURRENT</strong><span>/</span><span id=\"" + prefix + "-total\">#TOTAL</span></p>\n             <p class=\"lead\" id=\"" + prefix + "-current-prompt\">#PROMPT</p>\n             <div id=\"" + prefix + "-current-questions\" class=\"d-grid gap-2 questions\">\n             \n             </div>\n             <button id=\"" + prefix + "-next\" class=\"btn btn-primary btn-sm float-end mt-3\">Next</button>\n           </div>\n        </div>\n           ";
        var skeleton = document.createElement("div");
        skeleton.innerHTML = template;
        attachment.appendChild(skeleton);
        this.current = attachment.querySelector("#" + prefix + "-current");
        this.total = attachment.querySelector("#" + prefix + "-total");
        this.prompt = attachment.querySelector("#" + prefix + "-current-prompt");
        this.responses = attachment.querySelector("#" + prefix + "-current-questions");
        this.next = attachment.querySelector("#" + prefix + "-next");
    };
    TriviView.prototype.paint = function (current, total, prompt, responses) {
        var _this = this;
        this.current.textContent = current.toString();
        this.total.textContent = total.toString();
        this.prompt.textContent = prompt;
        this.responses.innerHTML = "";
        responses.forEach(function (response) {
            var template = "<button class=\"btn btn-secondary btn-sm text-start\">" + response.text + "</button>";
            _this.responses.innerHTML += template;
        });
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
    },
    {
        id: 3,
        prompt: "Where has the hottest temperature been recorded?",
        answers: [
            { text: "El Azizia, Libya", isCorrect: false, id: 9 },
            { text: "Death Valley, United States", isCorrect: true, id: 10 },
            { text: "Timbuktu, Mali", isCorrect: false, id: 11 },
            { text: "Bangkok, Thailand", isCorrect: false, id: 12 }
        ]
    }
];
trivi.start();
console.log(trivi);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2aS8uL3NyYy9Ucml2aS50cyIsIndlYnBhY2s6Ly90cml2aS8uL3NyYy9tb2RlbC9Ucml2aU1vZGVsLnRzIiwid2VicGFjazovL3RyaXZpLy4vc3JjL3ZpZXcvVHJpdmlWaWV3LnRzIiwid2VicGFjazovL3RyaXZpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXZpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cml2aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXZpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpdmkvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNIO0FBR3hDO0lBTUksZUFBWSxVQUFtQixFQUFFLE9BQWE7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxzREFBVSxFQUFFO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvREFBUyxFQUFFO1FBQzNCLElBQUcsT0FBTyxFQUFDO1lBQ1AsSUFBRyxPQUFPLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNO1NBQ25EO0lBQ0QsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFBQSxpQkFRQzs7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNaLFVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxj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QUFFLGtEQUFrRDtRQUMxRCxPQUFPLEVBQUU7WUFDTCxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUUsNkJBQTZCLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsRUFBRSxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQztZQUNqRCxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUM7U0FDdkQ7S0FDSjtDQUNMO0FBR0QsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUViLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcml2aU1vZGVsIGZyb20gXCIuL21vZGVsL1RyaXZpTW9kZWxcIlxyXG5pbXBvcnQgVHJpdmlWaWV3IGZyb20gXCIuL3ZpZXcvVHJpdmlWaWV3XCJcclxuXHJcblxyXG5jbGFzcyBUcml2aXtcclxuICAgIG1vZGVsOiBUcml2aU1vZGVsXHJcbiAgICB2aWV3OiBUcml2aVZpZXdcclxuICAgIHByaXZhdGUgX2F0dGFjaG1lbnQ6IEVsZW1lbnRcclxuICAgIHByaXZhdGUgX3ByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkXHJcblxyXG4gICAgY29uc3RydWN0b3IoYXR0YWNobWVudDogRWxlbWVudCwgb3B0aW9ucz86IGFueSl7XHJcbiAgICB0aGlzLl9hdHRhY2htZW50ID0gYXR0YWNobWVudFxyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBUcml2aU1vZGVsKClcclxuICAgIHRoaXMudmlldyA9IG5ldyBUcml2aVZpZXcoKVxyXG4gICAgaWYob3B0aW9ucyl7XHJcbiAgICAgICAgaWYob3B0aW9ucy5wcmVmaXgpIHRoaXMuX3ByZWZpeCA9IG9wdGlvbnMucHJlZml4XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLnZpZXcuaW5pdGlhbGl6ZSh0aGlzLl9hdHRhY2htZW50LCB0aGlzLl9wcmVmaXgpXHJcbiAgICAgICB0aGlzLnJlbmRlcigpXHJcbiAgICAgICAgdGhpcy52aWV3Lm5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpICBcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5uZXh0KClcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgdGhpcy52aWV3LnBhaW50KFxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnQgKyAxLFxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnF1ZXN0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuYWN0aXZlUXVlc3Rpb24ucHJvbXB0LCBcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5hY3RpdmVRdWVzdGlvbi5hbnN3ZXJzKVxyXG4gICAgfVxyXG5cclxuIFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpIiwiaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuL1F1ZXN0aW9uXCJcclxuXHJcblxyXG5jbGFzcyBUcml2aU1vZGVse1xyXG4gICAgcHJpdmF0ZSBfcXVlc3Rpb25zOiBRdWVzdGlvbltdIFxyXG4gICAgcHJpdmF0ZSBfY3VycmVudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fcXVlc3Rpb25zID0gW11cclxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gMFxyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gMFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWN0aXZlUXVlc3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25zW3RoaXMuX2N1cnJlbnRdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBxdWVzdGlvbnMocXVlc3Rpb25zOiBRdWVzdGlvbltdKXtcclxuICAgICAgICBpZihxdWVzdGlvbnMubGVuZ3RoIDw9IDApIHJldHVyblxyXG4gICAgICAgIHRoaXMuX3F1ZXN0aW9ucyA9IHF1ZXN0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcXVlc3Rpb25zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXN0aW9uc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBzZWxlY3RBbnN3ZXIoaWQ6bnVtYmVyKXtcclxuICAgIC8vICAgICBjb25zdCB7YW5zd2VyczogcmVzcG9uc2VzfSA9ICh0aGlzLmFjdGl2ZVF1ZXN0aW9uKVxyXG5cclxuICAgIC8vICAgICBmb3IobGV0IGkgPTA7IGkgPCByZXNwb25zZXMubGVuZ3RoOyBpICsrKXtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VzW2ldKSAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgbmV4dCgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJlbnQgPCB0aGlzLl9xdWVzdGlvbnMubGVuZ3RoIC0gMSkgICB0aGlzLl9jdXJyZW50KytcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGJhY2soKXtcclxuICAgICAgICBpZih0aGlzLl9jdXJyZW50ID4gMCkgdGhpcy5fY3VycmVudC0tXHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCl7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmlNb2RlbCIsImltcG9ydCBUcml2aVJlc3BvbnNlIGZyb20gXCIuLi9tb2RlbC9SZXNwb25zZVwiXHJcblxyXG5cclxuY2xhc3MgVHJpdmlWaWV3e1xyXG5cclxuICAgIGN1cnJlbnQ6IEVsZW1lbnQgfCBudWxsXHJcbiAgICB0b3RhbDogRWxlbWVudCB8IG51bGxcclxuICAgIHByb21wdDogRWxlbWVudCB8IG51bGxcclxuICAgIHJlc3BvbnNlczogRWxlbWVudCB8IG51bGxcclxuICAgIG5leHQ6IEVsZW1lbnQgfCBudWxsXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMudG90YWwgID0gbnVsbFxyXG4gICAgICAgIHRoaXMucHJvbXB0ICA9IG51bGxcclxuICAgICAgICB0aGlzLnJlc3BvbnNlcyAgPSBudWxsXHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpbml0aWFsaXplKCBhdHRhY2htZW50OiBFbGVtZW50ICwgcHJlZml4OiBzdHJpbmcgPSBcInRyaXZpXCIpe1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYCAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICA8cD48c3Ryb25nIGlkPVwiJHtwcmVmaXh9LWN1cnJlbnRcIj4jQ1VSUkVOVDwvc3Ryb25nPjxzcGFuPi88L3NwYW4+PHNwYW4gaWQ9XCIke3ByZWZpeH0tdG90YWxcIj4jVE9UQUw8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCIgaWQ9XCIke3ByZWZpeH0tY3VycmVudC1wcm9tcHRcIj4jUFJPTVBUPC9wPlxyXG4gICAgICAgICAgICAgPGRpdiBpZD1cIiR7cHJlZml4fS1jdXJyZW50LXF1ZXN0aW9uc1wiIGNsYXNzPVwiZC1ncmlkIGdhcC0yIHF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke3ByZWZpeH0tbmV4dFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBmbG9hdC1lbmQgbXQtM1wiPk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBgXHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgc2tlbGV0b24uaW5uZXJIVE1MID0gdGVtcGxhdGVcclxuICAgICAgICBhdHRhY2htZW50LmFwcGVuZENoaWxkKHNrZWxldG9uKVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBhdHRhY2htZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH0tY3VycmVudGApXHJcbiAgICAgICAgdGhpcy50b3RhbCA9IGF0dGFjaG1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJlZml4fS10b3RhbGApXHJcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBhdHRhY2htZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH0tY3VycmVudC1wcm9tcHRgKVxyXG4gICAgICAgIHRoaXMucmVzcG9uc2VzID0gYXR0YWNobWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcmVmaXh9LWN1cnJlbnQtcXVlc3Rpb25zYClcclxuICAgICAgICB0aGlzLm5leHQgPSBhdHRhY2htZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3ByZWZpeH0tbmV4dGApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhaW50KGN1cnJlbnQ6IG51bWJlciwgdG90YWw6IG51bWJlciwgcHJvbXB0OiBzdHJpbmcsIHJlc3BvbnNlczogVHJpdmlSZXNwb25zZVtdKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnQhLnRleHRDb250ZW50ID0gY3VycmVudC50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy50b3RhbCEudGV4dENvbnRlbnQgPSB0b3RhbC50b1N0cmluZygpXHJcbiAgICAgICAgdGhpcy5wcm9tcHQhLnRleHRDb250ZW50ID0gcHJvbXB0XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZXMhLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICByZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gdGV4dC1zdGFydFwiPiR7cmVzcG9uc2UudGV4dH08L2J1dHRvbj5gXHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VzIS5pbm5lckhUTUwgKz0gdGVtcGxhdGVcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpVmlldyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRyaXZpIGZyb20gXCIuL1RyaXZpXCI7XHJcblxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVzdGlvbnNcIikhXHJcblxyXG5jb25zdCB0cml2aSA9IG5ldyBUcml2aShjb250YWluZXIpO1xyXG5cclxudHJpdmkubW9kZWwucXVlc3Rpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHByb21wdDogXCJUaGUgZmlyc3QgcGVyc29uIGNvbnZpY3RlZCBvZiBzcGVlZGluZyBpbiBoaXN0b3J5IHdhcyBnb2luZyBhdCB3aGF0IHNwZWVkP1wiLFxyXG4gICAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICAgICAge3RleHQ6IFwiMTggbXBoXCIsIGlzQ29ycmVjdDogZmFsc2UsIGlkOjF9LFxyXG4gICAgICAgICAgICB7dGV4dDogXCIzMCBtcGhcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6Mn0sXHJcbiAgICAgICAgICAgIHt0ZXh0OiBcIjggbXBoXCIsIGlzQ29ycmVjdDogdHJ1ZSwgaWQ6M30sXHJcbiAgICAgICAgICAgIHt0ZXh0OiBcIjIwIG1waFwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDo0fVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICBpZDogMixcclxuICAgICAgICBwcm9tcHQ6IFwiJ05ldyBjYXIgc21lbGwnIGNvbnNpc3RzIG9mIGhvdyBtYW55IGRpZmZlcmVudCBjaGVtaWNhbHM/XCIsXHJcbiAgICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgICAgICB7dGV4dDogXCJPdmVyIDMwMCBjaGVtaWNhbHNcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6NX0sXHJcbiAgICAgICAgICAgIHt0ZXh0OiBcIkFyb3VuZCAxMDAtMjAwIGNoZW1pY2Fsc1wiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDo2fSxcclxuICAgICAgICAgICAge3RleHQ6IFwiQXJvdW5kIDUwLTEwMCBjaGVtaWNhbHNcIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDo3fSxcclxuICAgICAgICAgICAge3RleHQ6IFwiTGVzcyB0aGFuIDQ5IGNoZW1pY2Fsc1wiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDo4fSBcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgICBwcm9tcHQ6IFwiV2hlcmUgaGFzIHRoZSBob3R0ZXN0IHRlbXBlcmF0dXJlIGJlZW4gcmVjb3JkZWQ/XCIsXHJcbiAgICAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICAgICAgIHt0ZXh0OiBcIkVsIEF6aXppYSwgTGlieWFcIiwgaXNDb3JyZWN0OiBmYWxzZSwgaWQ6OX0sXHJcbiAgICAgICAgICAgICB7dGV4dDogXCJEZWF0aCBWYWxsZXksIFVuaXRlZCBTdGF0ZXNcIiwgaXNDb3JyZWN0OiB0cnVlLCBpZDoxMH0sXHJcbiAgICAgICAgICAgICB7dGV4dDogXCJUaW1idWt0dSwgTWFsaVwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDoxMX0sXHJcbiAgICAgICAgICAgICB7dGV4dDogXCJCYW5na29rLCBUaGFpbGFuZFwiLCBpc0NvcnJlY3Q6IGZhbHNlLCBpZDoxMn0gXHJcbiAgICAgICAgIF1cclxuICAgICB9XHJcbl1cclxuXHJcblxyXG50cml2aS5zdGFydCgpXHJcblxyXG5jb25zb2xlLmxvZyh0cml2aSlcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9