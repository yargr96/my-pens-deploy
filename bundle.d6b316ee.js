/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Canvas/Canvas.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Canvas/Canvas.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"canvas":"hNnRXrHlQnLwmuJsTHq5"});

/***/ }),

/***/ "./src/components/Controls/Controls.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Controls/Controls.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"gt3pDgkwwEiE80E7zc56","row":"W8QkwqrU18OQYVNUvMqP","button":"eKqLYGWJnnBpB9duMYp1"});

/***/ }),

/***/ "./src/components/Range/Range.module.scss":
/*!************************************************!*\
  !*** ./src/components/Range/Range.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"range":"JUYzgMhgJCaCUNKzELfF"});

/***/ }),

/***/ "./src/modules/fractal-sets/FractalSets.module.scss":
/*!**********************************************************!*\
  !*** ./src/modules/fractal-sets/FractalSets.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"canvas":"YFv7u5vznM8GqrW6cims"});

/***/ }),

/***/ "./src/styles/colors.module.scss":
/*!***************************************!*\
  !*** ./src/styles/colors.module.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dark":"#212529","light":"#f8f9fa","primary":"#0d6efd","gray500":"#adb5bd","gray800":"#343a40"});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Canvas/Canvas.ts":
/*!*****************************************!*\
  !*** ./src/components/Canvas/Canvas.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CANVAS_SCALE": () => (/* binding */ DEFAULT_CANVAS_SCALE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Canvas_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.module.scss */ "./src/components/Canvas/Canvas.module.scss");

var DEFAULT_CANVAS_SCALE = 2;
var Canvas = function () {
    var canvas = document.createElement('canvas');
    canvas.className = _Canvas_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].canvas;
    var getContext = function () { return canvas.getContext('2d'); };
    var setSize = function (mountElement, scale) {
        if (scale === void 0) { scale = DEFAULT_CANVAS_SCALE; }
        var _a = mountElement.getBoundingClientRect(), width = _a.width, height = _a.height;
        canvas.width = width * scale;
        canvas.height = height * scale;
    };
    var append = function (element) {
        element.append(canvas);
    };
    return {
        element: canvas,
        getContext: getContext,
        setSize: setSize,
        append: append,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);


/***/ }),

/***/ "./src/components/Canvas/index.ts":
/*!****************************************!*\
  !*** ./src/components/Canvas/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CANVAS_SCALE": () => (/* reexport safe */ _components_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANVAS_SCALE),
/* harmony export */   "default": () => (/* reexport safe */ _components_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _components_Canvas_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Canvas/Canvas */ "./src/components/Canvas/Canvas.ts");




/***/ }),

/***/ "./src/components/Controls/Controls.ts":
/*!*********************************************!*\
  !*** ./src/components/Controls/Controls.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Controls_Controls_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Controls/Controls.module.scss */ "./src/components/Controls/Controls.module.scss");

var Controls = function (items) {
    var wrapper = document.createElement('div');
    wrapper.className = _components_Controls_Controls_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper;
    var elements = {};
    var rows = items.map(function (row) { return row.map(function (_a) {
        var key = _a.key, text = _a.text;
        var button = document.createElement('button');
        button.className = _components_Controls_Controls_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button;
        button.textContent = text;
        elements[key] = button;
        return button;
    }); });
    rows.forEach(function (row) {
        var rowElement = document.createElement('div');
        rowElement.className = _components_Controls_Controls_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].row;
        row.forEach(function (controlElement) {
            rowElement.appendChild(controlElement);
        });
        wrapper.appendChild(rowElement);
    });
    var append = function (element) {
        element.append(wrapper);
    };
    return {
        elements: elements,
        append: append,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controls);


/***/ }),

/***/ "./src/components/Controls/index.ts":
/*!******************************************!*\
  !*** ./src/components/Controls/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _components_Controls_Controls__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _components_Controls_Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Controls/Controls */ "./src/components/Controls/Controls.ts");




/***/ }),

/***/ "./src/components/Range/Range.ts":
/*!***************************************!*\
  !*** ./src/components/Range/Range.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Range_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Range.module.scss */ "./src/components/Range/Range.module.scss");

var Range = function () {
    var range = document.createElement('input');
    range.type = 'range';
    range.min = '3';
    range.max = '10';
    range.className = _Range_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].range;
    return range;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Range);


/***/ }),

/***/ "./src/components/Range/index.ts":
/*!***************************************!*\
  !*** ./src/components/Range/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _components_Range_Range__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _components_Range_Range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Range/Range */ "./src/components/Range/Range.ts");



/***/ }),

/***/ "./src/layout/buger-menu/BurgerMenu.ts":
/*!*********************************************!*\
  !*** ./src/layout/buger-menu/BurgerMenu.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var BurgerMenu = function () {
    var burger = document.querySelector('#burger');
    var sidebar = document.querySelector('#sidebar');
    burger.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
    var closeMenu = function () {
        sidebar.classList.remove('active');
    };
    return { closeMenu: closeMenu };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerMenu);


/***/ }),

/***/ "./src/layout/buger-menu/index.ts":
/*!****************************************!*\
  !*** ./src/layout/buger-menu/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _layout_buger_menu_BurgerMenu__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _layout_buger_menu_BurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layout/buger-menu/BurgerMenu */ "./src/layout/buger-menu/BurgerMenu.ts");



/***/ }),

/***/ "./src/modules/fractal-sets/FractalSets.ts":
/*!*************************************************!*\
  !*** ./src/modules/fractal-sets/FractalSets.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./src/modules/fractal-sets/gradient.ts");
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Canvas */ "./src/components/Canvas/index.ts");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Controls */ "./src/components/Controls/index.ts");
/* harmony import */ var _modules_fractal_sets_FractalSets_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/fractal-sets/FractalSets.module.scss */ "./src/modules/fractal-sets/FractalSets.module.scss");
/* harmony import */ var _modules_fractal_sets_belongsToSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/modules/fractal-sets/belongsToSet */ "./src/modules/fractal-sets/belongsToSet.ts");
/* harmony import */ var _modules_fractal_sets_iterativeRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/modules/fractal-sets/iterativeRender */ "./src/modules/fractal-sets/iterativeRender.ts");
/* harmony import */ var _modules_fractal_sets_useCoordinates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/fractal-sets/useCoordinates */ "./src/modules/fractal-sets/useCoordinates.ts");
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");
/* harmony import */ var _utils_isTouchDevice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/isTouchDevice */ "./src/utils/isTouchDevice.ts");
/* harmony import */ var _utils_touchCoordinates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/touchCoordinates */ "./src/utils/touchCoordinates.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};










var gradient = (0,_gradient__WEBPACK_IMPORTED_MODULE_0__.getGradient)(_gradient__WEBPACK_IMPORTED_MODULE_0__.gradientPoints, _modules_fractal_sets_belongsToSet__WEBPACK_IMPORTED_MODULE_4__.ITERATIONS_COUNT);
var BACKGROUND_COLOR = gradient[0];
var C = [0.14, 0.6];
var belongsToJuliaSet = function (z) { return (0,_modules_fractal_sets_belongsToSet__WEBPACK_IMPORTED_MODULE_4__.belongsToSet)(z, C); };
var belongsToMandelbrotSet = function (c) { return (0,_modules_fractal_sets_belongsToSet__WEBPACK_IMPORTED_MODULE_4__.belongsToSet)([0, 0], c); };
var setSelectButtons = [
    {
        text: 'Mandelbrot set',
        key: 'mandelbrot',
        value: belongsToMandelbrotSet,
    },
    {
        text: 'Julia set',
        key: 'julia',
        value: belongsToJuliaSet,
    },
];
var zoomButtons = [
    {
        text: '+',
        key: 'plus',
        value: 2,
    },
    {
        text: '-',
        key: 'minus',
        value: 0.5,
    },
];
var FractalSets = function (mountElement) {
    var _a = (0,_components_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"])(), canvas = _a.element, setSize = _a.setSize, append = _a.append, getContext = _a.getContext;
    canvas.classList.add(_modules_fractal_sets_FractalSets_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].canvas);
    setSize(mountElement, 1);
    append(mountElement);
    var context = getContext();
    var PADDING = 20;
    var coordinatesSquareSize = Math.min(canvas.width, canvas.height) - PADDING * 2;
    var COORDINATE_SQUARE_MATH_SIZE = 4;
    var pixelsPerOneMathCoordinateDefault = (coordinatesSquareSize / COORDINATE_SQUARE_MATH_SIZE);
    var canvasCenterCoordinates = [canvas.width / 2, canvas.height / 2];
    var coordinatesCenterDefault = canvasCenterCoordinates;
    var belongsTo = belongsToMandelbrotSet;
    var coordinates = (0,_modules_fractal_sets_useCoordinates__WEBPACK_IMPORTED_MODULE_6__["default"])({
        coordinatesCenter: coordinatesCenterDefault,
        pixelsPerOneMathCoordinate: pixelsPerOneMathCoordinateDefault,
        canvas: canvas,
    });
    var render = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.isLowQuality, isLowQuality = _c === void 0 ? false : _c;
        var renderingBounds = [
            coordinates.getBoundingCanvasCoordinates([-2, 2]),
            coordinates.getBoundingCanvasCoordinates([2, -2]),
        ];
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, canvas.width, canvas.height);
        (0,_modules_fractal_sets_iterativeRender__WEBPACK_IMPORTED_MODULE_5__["default"])({
            start: renderingBounds[0],
            end: renderingBounds[1],
            isLowQuality: isLowQuality,
            callback: function (_a, step) {
                var x = _a[0], y = _a[1];
                var mathCoordinates = coordinates.toMathCoordinates([x, y]);
                var _b = belongsTo(mathCoordinates), value = _b.value, stepsCount = _b.stepsCount;
                context.fillStyle = value
                    ? '#000'
                    : gradient[stepsCount];
                context.fillRect(x, y, step, step);
            },
        });
    };
    var controls = (0,_components_Controls__WEBPACK_IMPORTED_MODULE_2__["default"])([
        setSelectButtons,
        zoomButtons,
    ]);
    controls.append(mountElement);
    setSelectButtons.forEach(function (_a) {
        var key = _a.key, value = _a.value;
        controls.elements[key].addEventListener('click', function () {
            belongsTo = value;
            coordinates.setPixelsPerOneMathCoordinate(pixelsPerOneMathCoordinateDefault);
            coordinates.setCoordinatesCenter(coordinatesCenterDefault);
            render();
        });
    });
    zoomButtons.forEach(function (_a) {
        var key = _a.key, value = _a.value;
        controls.elements[key].addEventListener('click', function () {
            var centerAsMathCoords = coordinates.toMathCoordinates(canvasCenterCoordinates);
            coordinates.setPixelsPerOneMathCoordinate(coordinates.getPixelsPerOneMathCoordinate() * value);
            coordinates.setCenterToMathCoordinates(centerAsMathCoords);
            render();
        });
    });
    var isMouseDown = false;
    var startMouseCoordinates;
    var coordinatesChanged = false;
    var imageData;
    var deltaCoordinates;
    var handleMouseDown = function (e) {
        isMouseDown = true;
        var _a = (0,_utils_touchCoordinates__WEBPACK_IMPORTED_MODULE_9__["default"])(e), offsetX = _a.offsetX, offsetY = _a.offsetY;
        startMouseCoordinates = [offsetX, offsetY];
    };
    var handleMouseMove = function (e) {
        if (!isMouseDown) {
            return;
        }
        var _a = (0,_utils_touchCoordinates__WEBPACK_IMPORTED_MODULE_9__["default"])(e), offsetX = _a.offsetX, offsetY = _a.offsetY;
        deltaCoordinates = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_7__.subtractVector)([offsetX, offsetY], startMouseCoordinates);
        if ((0,_utils_Vector__WEBPACK_IMPORTED_MODULE_7__.areSimilarVectors)(deltaCoordinates, [0, 0])) {
            return;
        }
        coordinatesChanged = true;
        imageData = imageData !== null && imageData !== void 0 ? imageData : context.getImageData(0, 0, canvas.width, canvas.height);
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.putImageData.apply(context, __spreadArray([imageData], deltaCoordinates, false));
    };
    var handleMouseUp = function () {
        if (!isMouseDown) {
            return;
        }
        isMouseDown = false;
        if (coordinatesChanged) {
            coordinates.setCoordinatesCenter((0,_utils_Vector__WEBPACK_IMPORTED_MODULE_7__.addVectors)(coordinates.getCoordinatesCenter(), deltaCoordinates));
            deltaCoordinates = null;
            imageData = null;
            coordinatesChanged = false;
            render();
        }
    };
    if ((0,_utils_isTouchDevice__WEBPACK_IMPORTED_MODULE_8__["default"])()) {
        canvas.addEventListener('touchstart', handleMouseDown);
        canvas.addEventListener('touchmove', handleMouseMove);
        window.addEventListener('touchend', handleMouseUp);
    }
    else {
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }
    render();
    return {
        beforeUnmount: function () {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        },
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FractalSets);


/***/ }),

/***/ "./src/modules/fractal-sets/belongsToSet.ts":
/*!**************************************************!*\
  !*** ./src/modules/fractal-sets/belongsToSet.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITERATIONS_COUNT": () => (/* binding */ ITERATIONS_COUNT),
/* harmony export */   "belongsToSet": () => (/* binding */ belongsToSet)
/* harmony export */ });
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var getComplexNumberSquare = function (_a) {
    var x = _a[0], y = _a[1];
    return [
        Math.pow(x, 2) - Math.pow(y, 2),
        2 * x * y,
    ];
};
var ITERATIONS_COUNT = 100;
var belongsToSet = function (z0, c) {
    var zLast = __spreadArray([], z0, true);
    for (var i = 0; i < ITERATIONS_COUNT; i += 1) {
        var zNew = ((0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.addVectors)(getComplexNumberSquare(zLast), c));
        if (Math.pow(zNew[0], 2) + Math.pow(zNew[1], 2) > 4) {
            return {
                value: false,
                stepsCount: i,
            };
        }
        zLast = zNew;
    }
    return { value: true };
};


/***/ }),

/***/ "./src/modules/fractal-sets/gradient.ts":
/*!**********************************************!*\
  !*** ./src/modules/fractal-sets/gradient.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGradient": () => (/* binding */ getGradient),
/* harmony export */   "gradientPoints": () => (/* binding */ gradientPoints)
/* harmony export */ });
var addVector3 = function (a, b) { return [
    a[0] + b[0],
    a[1] + b[1],
    a[2] + b[2],
]; };
var subtractVector3 = function (a, b) { return [
    a[0] - b[0],
    a[1] - b[1],
    a[2] - b[2],
]; };
var multiplyVector3ByNumber = function (_a, number) {
    var x = _a[0], y = _a[1], z = _a[2];
    return [
        x * number,
        y * number,
        z * number,
    ];
};
var roundVector3 = function (vector) { return [
    Math.round(vector[0]),
    Math.round(vector[1]),
    Math.round(vector[2]),
]; };
var gradientPoints = [
    [248, 249, 250],
    [25, 135, 84],
];
var vectorToColor = function (vector) { return "rgb(".concat(vector[0], ", ").concat(vector[1], ", ").concat(vector[2], ")"); };
var getGradient = function (points, length) {
    var colorsDifference = subtractVector3(points[1], points[0]);
    var step = multiplyVector3ByNumber(colorsDifference, 1 / length);
    var gradient = [];
    for (var i = 0; i < length - 1; i += 1) {
        gradient.push(addVector3(points[0], roundVector3(multiplyVector3ByNumber(step, i))));
    }
    gradient.push(points[1]);
    return gradient.map(function (v) { return vectorToColor(v); });
};


/***/ }),

/***/ "./src/modules/fractal-sets/index.ts":
/*!*******************************************!*\
  !*** ./src/modules/fractal-sets/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _modules_fractal_sets_FractalSets__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _modules_fractal_sets_FractalSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/fractal-sets/FractalSets */ "./src/modules/fractal-sets/FractalSets.ts");



/***/ }),

/***/ "./src/modules/fractal-sets/iterativeRender.ts":
/*!*****************************************************!*\
  !*** ./src/modules/fractal-sets/iterativeRender.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/useRenderLoop */ "./src/utils/useRenderLoop.ts");

var iterativeRender = function (_a) {
    var start = _a.start, end = _a.end, _b = _a.step, step = _b === void 0 ? 16 : _b, callback = _a.callback, _c = _a.isLowQuality, isLowQuality = _c === void 0 ? false : _c;
    var currentStep = step;
    var isRecursiveCall = false;
    var renderLoop = (0,_utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        for (var x = start[0], i = 0; x < end[0]; x += currentStep, i += 1) {
            var isEvenColumn = i % 2 === 0;
            var stepY = isEvenColumn && isRecursiveCall ? currentStep * 2 : currentStep;
            var startY = isEvenColumn && isRecursiveCall
                ? start[1] + currentStep
                : start[1];
            for (var y = startY; y < end[1]; y += stepY) {
                callback([x, y], currentStep);
            }
        }
        if (currentStep <= 1 || isLowQuality) {
            renderLoop.stop();
        }
        currentStep /= 2;
        isRecursiveCall = true;
    });
    renderLoop.run();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iterativeRender);


/***/ }),

/***/ "./src/modules/fractal-sets/useCoordinates.ts":
/*!****************************************************!*\
  !*** ./src/modules/fractal-sets/useCoordinates.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");

var useCoordinates = function (_a) {
    var coordinatesCenter = _a.coordinatesCenter, pixelsPerOneMathCoordinate = _a.pixelsPerOneMathCoordinate, canvas = _a.canvas;
    var properties = {
        coordinatesCenter: coordinatesCenter,
        pixelsPerOneMathCoordinate: pixelsPerOneMathCoordinate,
    };
    var canvasSize = [canvas.width, canvas.height];
    var canvasCenter = [canvas.width / 2, canvas.height / 2];
    var toShiftedCoordinates = function (canvasCoordinates) { return [
        canvasCoordinates[0] - properties.coordinatesCenter[0],
        canvasSize[1] - canvasCoordinates[1] - (canvasSize[1] - properties.coordinatesCenter[1]),
    ]; };
    var toUnshiftedCoordinates = function (shiftedCoordinates) { return [
        shiftedCoordinates[0] + properties.coordinatesCenter[0],
        canvasSize[1] - shiftedCoordinates[1] - (canvasSize[1] - properties.coordinatesCenter[1]),
    ]; };
    var toMathCoordinates = function (canvasCoordinates) {
        var shiftedCoordinates = toShiftedCoordinates(canvasCoordinates);
        return (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.multiplyVectorByNumber)(shiftedCoordinates, 1 / properties.pixelsPerOneMathCoordinate);
    };
    var toCanvasCoordinates = function (mathCoordinates) {
        var shiftedCoordinates = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.multiplyVectorByNumber)(mathCoordinates, properties.pixelsPerOneMathCoordinate);
        var unshiftedCoordinates = toUnshiftedCoordinates(shiftedCoordinates);
        return [
            Math.round(unshiftedCoordinates[0]),
            Math.round(unshiftedCoordinates[1]),
        ];
    };
    var getBoundingCanvasCoordinates = function (mathCoordinates) {
        var canvasCoordinates = toCanvasCoordinates(mathCoordinates);
        if (canvasCoordinates[0] < 0) {
            canvasCoordinates[0] = 0;
        }
        if (canvasCoordinates[0] > canvasSize[0]) {
            canvasCoordinates[0] = canvasSize[0];
        }
        if (canvasCoordinates[1] < 0) {
            canvasCoordinates[1] = 0;
        }
        if (canvasCoordinates[1] > canvasSize[1]) {
            canvasCoordinates[1] = canvasSize[1];
        }
        return canvasCoordinates;
    };
    var setCenterToMathCoordinates = function (mathCoordinates) {
        var mathCoordinatesInCanvasCoords = toCanvasCoordinates(mathCoordinates);
        var vectorToTargetCoords = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.subtractVector)(mathCoordinatesInCanvasCoords, properties.coordinatesCenter);
        properties.coordinatesCenter = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.subtractVector)(canvasCenter, vectorToTargetCoords);
    };
    var setCoordinatesCenter = function (value) {
        properties.coordinatesCenter = value;
    };
    var setPixelsPerOneMathCoordinate = function (value) {
        properties.pixelsPerOneMathCoordinate = value;
    };
    var getCoordinatesCenter = function () { return properties.coordinatesCenter; };
    var getPixelsPerOneMathCoordinate = function () { return properties.pixelsPerOneMathCoordinate; };
    return {
        toMathCoordinates: toMathCoordinates,
        toCanvasCoordinates: toCanvasCoordinates,
        getBoundingCanvasCoordinates: getBoundingCanvasCoordinates,
        setCoordinatesCenter: setCoordinatesCenter,
        setPixelsPerOneMathCoordinate: setPixelsPerOneMathCoordinate,
        getCoordinatesCenter: getCoordinatesCenter,
        getPixelsPerOneMathCoordinate: getPixelsPerOneMathCoordinate,
        setCenterToMathCoordinates: setCenterToMathCoordinates,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCoordinates);


/***/ }),

/***/ "./src/modules/game-of-life/GameOfLife.ts":
/*!************************************************!*\
  !*** ./src/modules/game-of-life/GameOfLife.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Canvas */ "./src/components/Canvas/index.ts");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Controls */ "./src/components/Controls/index.ts");
/* harmony import */ var _modules_game_of_life_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/game-of-life/controls */ "./src/modules/game-of-life/controls.ts");
/* harmony import */ var _modules_game_of_life_figures_life__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/game-of-life/figures/life */ "./src/modules/game-of-life/figures/life.ts");
/* harmony import */ var _modules_game_of_life_useFieldMatrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/modules/game-of-life/useFieldMatrix */ "./src/modules/game-of-life/useFieldMatrix.ts");
/* harmony import */ var _modules_game_of_life_useGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/modules/game-of-life/useGrid */ "./src/modules/game-of-life/useGrid.ts");
/* harmony import */ var _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/colors.module.scss */ "./src/styles/colors.module.scss");
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");
/* harmony import */ var _utils_isTouchDevice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/isTouchDevice */ "./src/utils/isTouchDevice.ts");
/* harmony import */ var _utils_touchCoordinates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/touchCoordinates */ "./src/utils/touchCoordinates.ts");
/* harmony import */ var _utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/useRenderLoop */ "./src/utils/useRenderLoop.ts");











var renderMatrix = function (fieldMatrix, renderCell) {
    fieldMatrix.forEach(function (item, x) {
        item.forEach(function (isAlive, y) {
            if (!isAlive) {
                return;
            }
            renderCell([x, y]);
        });
    });
};
var GameOfLife = function (mountElement) {
    var _a = (0,_components_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"])(), canvas = _a.element, setSize = _a.setSize, append = _a.append, getContext = _a.getContext;
    setSize(mountElement, 1);
    append(mountElement);
    var context = getContext();
    var grid = null;
    var fieldMatrix = null;
    var renderLoop = null;
    var config = {
        cellSize: 20,
        framesPerSecond: 10,
    };
    var render = function () {
        grid = (0,_modules_game_of_life_useGrid__WEBPACK_IMPORTED_MODULE_5__["default"])({
            canvas: canvas,
            context: context,
            cellSize: config.cellSize,
            showGrid: config.cellSize >= 10,
            colors: {
                colorBackground: _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dark,
                colorGrid: _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].gray800,
                colorCell: _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].primary,
            },
        });
        fieldMatrix = (0,_modules_game_of_life_useFieldMatrix__WEBPACK_IMPORTED_MODULE_4__["default"])({
            gridSize: {
                xCellsCount: grid.gridSizeParams.xCellsCount,
                yCellsCount: grid.gridSizeParams.yCellsCount,
            },
        });
        renderLoop = (0,_utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_10__["default"])(function () {
            var isUpdated = fieldMatrix.updateGeneration();
            if (!isUpdated) {
                renderLoop.stop();
            }
            grid.renderGrid();
            renderMatrix(fieldMatrix.getMatrix(), grid.renderCell);
        }, { framesPerSecond: config.framesPerSecond });
        grid.renderGrid();
        fieldMatrix.putFigureToCenter(_modules_game_of_life_figures_life__WEBPACK_IMPORTED_MODULE_3__["default"]);
        renderMatrix(fieldMatrix.getMatrix(), grid.renderCell);
    };
    render();
    var controls = (0,_components_Controls__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_game_of_life_controls__WEBPACK_IMPORTED_MODULE_2__["default"]);
    controls.append(mountElement);
    controls.elements.play.addEventListener('click', function () {
        renderLoop.toggle();
    });
    controls.elements.clear.addEventListener('click', function () {
        renderLoop.stop();
        fieldMatrix.setEmptyMatrix();
        grid.renderGrid();
    });
    controls.elements.randomFill.addEventListener('click', function () {
        grid.renderGrid();
        fieldMatrix.randomFill();
        renderMatrix(fieldMatrix.getMatrix(), grid.renderCell);
    });
    var changeSize = function (size) {
        if (config.cellSize === size) {
            return;
        }
        config.cellSize = size;
        render();
    };
    _modules_game_of_life_controls__WEBPACK_IMPORTED_MODULE_2__.sizeControls.forEach(function (_a) {
        var key = _a.key, value = _a.value;
        controls.elements[key].addEventListener('click', function () {
            changeSize(value);
        });
    });
    _modules_game_of_life_controls__WEBPACK_IMPORTED_MODULE_2__.speedControls.forEach(function (_a) {
        var key = _a.key, value = _a.value;
        controls.elements[key].addEventListener('click', function () {
            config.framesPerSecond = value;
            renderLoop.setFramesPerSecond(value);
        });
    });
    var previousCell = null;
    var isMouseDown = false;
    var drawCell = function (coordinates) {
        var cell = grid.getCellByCoordinates(coordinates);
        if (!cell) {
            return;
        }
        if (previousCell && (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_7__.areSimilarVectors)(cell, previousCell)) {
            return;
        }
        previousCell = cell;
        fieldMatrix.setPoints([cell]);
        grid.renderGrid();
        renderMatrix(fieldMatrix.getMatrix(), grid.renderCell);
    };
    var handleMouseDown = function (e) {
        var _a = (0,_utils_touchCoordinates__WEBPACK_IMPORTED_MODULE_9__["default"])(e), offsetX = _a.offsetX, offsetY = _a.offsetY;
        isMouseDown = true;
        renderLoop.stop();
        drawCell([offsetX, offsetY]);
    };
    var handleMouseUp = function () {
        isMouseDown = false;
        previousCell = null;
    };
    var handleMouseMove = function (e) {
        var _a = (0,_utils_touchCoordinates__WEBPACK_IMPORTED_MODULE_9__["default"])(e), offsetX = _a.offsetX, offsetY = _a.offsetY;
        if (!isMouseDown) {
            if (previousCell) {
                previousCell = null;
            }
            return;
        }
        drawCell([offsetX, offsetY]);
    };
    if ((0,_utils_isTouchDevice__WEBPACK_IMPORTED_MODULE_8__["default"])()) {
        canvas.addEventListener('touchstart', handleMouseDown);
        window.addEventListener('touchend', handleMouseUp);
        canvas.addEventListener('touchmove', handleMouseMove);
    }
    else {
        canvas.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);
    }
    var beforeUnmount = function () {
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleMouseUp);
    };
    return { beforeUnmount: beforeUnmount };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOfLife);


/***/ }),

/***/ "./src/modules/game-of-life/controls.ts":
/*!**********************************************!*\
  !*** ./src/modules/game-of-life/controls.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sizeControls": () => (/* binding */ sizeControls),
/* harmony export */   "speedControls": () => (/* binding */ speedControls)
/* harmony export */ });
var mainControls = [
    {
        key: 'play',
        text: 'Play',
    },
    {
        key: 'clear',
        text: 'Clear',
    },
    {
        key: 'randomFill',
        text: 'Random fill',
    },
];
var sizeControls = [
    {
        key: 'cellSizeSmall',
        text: 'Cells small',
        value: 5,
    },
    {
        key: 'cellSizeMedium',
        text: 'Cells medium',
        value: 10,
    },
    {
        key: 'cellSizeLarge',
        text: 'Cells large',
        value: 20,
    },
];
var speedControls = [
    {
        key: 'speedSmall',
        text: 'Speed small',
        value: 10,
    },
    {
        key: 'speedMedium',
        text: 'Speed medium',
        value: 30,
    },
    {
        key: 'speedMax',
        text: 'Speed maximum',
        value: 'auto',
    },
];
var controlsData = [
    mainControls,
    sizeControls,
    speedControls,
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controlsData);


/***/ }),

/***/ "./src/modules/game-of-life/figures/life.ts":
/*!**************************************************!*\
  !*** ./src/modules/game-of-life/figures/life.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var life = [
    [20, 18],
    [20, 19],
    [20, 20],
    [20, 21],
    [20, 22],
    [20, 23],
    [20, 24],
    [20, 25],
    [20, 26],
    [20, 27],
    [21, 27],
    [22, 27],
    [23, 27],
    [24, 27],
    [25, 27],
    [27, 18],
    [27, 19],
    [27, 20],
    [27, 21],
    [27, 22],
    [27, 23],
    [27, 24],
    [27, 25],
    [27, 26],
    [27, 27],
    [29, 18],
    [29, 19],
    [29, 20],
    [29, 21],
    [29, 22],
    [29, 23],
    [29, 24],
    [29, 25],
    [29, 26],
    [29, 27],
    [30, 18],
    [30, 22],
    [31, 18],
    [31, 22],
    [32, 18],
    [32, 22],
    [33, 18],
    [33, 22],
    [34, 18],
    [34, 22],
    [36, 18],
    [36, 19],
    [36, 20],
    [36, 21],
    [36, 22],
    [36, 23],
    [36, 24],
    [36, 25],
    [36, 26],
    [36, 27],
    [37, 18],
    [37, 23],
    [37, 27],
    [38, 18],
    [38, 23],
    [38, 27],
    [39, 18],
    [39, 23],
    [39, 27],
    [40, 18],
    [40, 23],
    [40, 27],
    [41, 18],
    [41, 23],
    [41, 27],
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (life);


/***/ }),

/***/ "./src/modules/game-of-life/index.ts":
/*!*******************************************!*\
  !*** ./src/modules/game-of-life/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _modules_game_of_life_GameOfLife__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _modules_game_of_life_GameOfLife__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/game-of-life/GameOfLife */ "./src/modules/game-of-life/GameOfLife.ts");



/***/ }),

/***/ "./src/modules/game-of-life/useFieldMatrix.ts":
/*!****************************************************!*\
  !*** ./src/modules/game-of-life/useFieldMatrix.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");

var getFieldMatrix = function (_a) {
    var xCellsCount = _a.xCellsCount, yCellsCount = _a.yCellsCount;
    var arr = [];
    for (var i = 0; i < xCellsCount; i += 1) {
        arr[i] = [];
        for (var j = 0; j < yCellsCount; j += 1) {
            arr[i][j] = false;
        }
    }
    return arr;
};
var useFieldMatrix = function (_a) {
    var _b = _a.gridSize, xCellsCount = _b.xCellsCount, yCellsCount = _b.yCellsCount;
    var fieldMatrix;
    var setEmptyMatrix = function () {
        fieldMatrix = getFieldMatrix({ xCellsCount: xCellsCount, yCellsCount: yCellsCount });
    };
    setEmptyMatrix();
    var getMatrix = function () { return fieldMatrix; };
    var updateGeneration = function () {
        var isUpdated = false;
        fieldMatrix = fieldMatrix.map(function (item, x) { return item.map(function (isAlive, y) {
            var _a;
            var aliveNeighboursCount = 0;
            for (var i = -1; i <= 1; i += 1) {
                for (var j = -1; j <= 1; j += 1) {
                    if (!(i === 0 && j === 0) && ((_a = fieldMatrix[x + i]) === null || _a === void 0 ? void 0 : _a[y + j])) {
                        aliveNeighboursCount += 1;
                    }
                }
            }
            var isAliveInNextGeneration = isAlive
                ? aliveNeighboursCount === 2 || aliveNeighboursCount === 3
                : aliveNeighboursCount === 3;
            if (!isUpdated && isAlive !== isAliveInNextGeneration) {
                isUpdated = true;
            }
            return isAliveInNextGeneration;
        }); });
        return isUpdated;
    };
    var setPoints = function (points) {
        points.forEach(function (_a) {
            var _b;
            var x = _a[0], y = _a[1];
            if (((_b = fieldMatrix[x]) === null || _b === void 0 ? void 0 : _b[y]) === undefined) {
                return;
            }
            fieldMatrix[x][y] = !fieldMatrix[x][y];
        });
    };
    var fieldCenter = [
        Math.floor(xCellsCount / 2),
        Math.floor(yCellsCount / 2),
    ];
    var putFigureToCenter = function (figure) {
        var figureBounds = figure.reduce(function (acc, _a) {
            var x = _a[0], y = _a[1];
            return ({
                top: y < acc.top ? y : acc.top,
                right: x > acc.right ? x : acc.right,
                bottom: y > acc.bottom ? y : acc.bottom,
                left: x < acc.left ? x : acc.left,
            });
        }, {
            top: Infinity,
            right: -Infinity,
            bottom: -Infinity,
            left: Infinity,
        });
        var figureHalfSize = [
            Math.floor((figureBounds.right - figureBounds.left) / 2),
            Math.floor((figureBounds.bottom - figureBounds.top) / 2),
        ];
        var normalizedFigure = figure
            .map(function (cell) { return (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.subtractVector)(cell, [figureBounds.left, figureBounds.top]); });
        var centeredFigure = normalizedFigure
            .map(function (cell) { return (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.addVectors)(cell, (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.subtractVector)(fieldCenter, figureHalfSize)); });
        setPoints(centeredFigure);
    };
    var randomFill = function () {
        fieldMatrix = fieldMatrix.map(function (row) { return row.map(function () { return Math.random() < 0.333; }); });
    };
    return {
        setEmptyMatrix: setEmptyMatrix,
        getMatrix: getMatrix,
        updateGeneration: updateGeneration,
        setPoints: setPoints,
        putFigureToCenter: putFigureToCenter,
        randomFill: randomFill,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFieldMatrix);


/***/ }),

/***/ "./src/modules/game-of-life/useGrid.ts":
/*!*********************************************!*\
  !*** ./src/modules/game-of-life/useGrid.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var getGridSizeParams = function (canvas, cellSize) {
    var xCellsCount = Math.floor(canvas.width / cellSize);
    var yCellsCount = Math.floor(canvas.height / cellSize);
    var gridWidth = cellSize * xCellsCount;
    var gridHeight = cellSize * yCellsCount;
    var offsetLeft = (canvas.width - gridWidth) / 2;
    var offsetTop = (canvas.height - gridHeight) / 2;
    return {
        xCellsCount: xCellsCount,
        yCellsCount: yCellsCount,
        gridWidth: gridWidth,
        gridHeight: gridHeight,
        offsetLeft: offsetLeft,
        offsetTop: offsetTop,
    };
};
var getCellPadding = function (cellSize) {
    if (cellSize < 10) {
        return 0;
    }
    if (cellSize < 20) {
        return 1;
    }
    return 2;
};
var useGrid = function (_a) {
    var canvas = _a.canvas, context = _a.context, cellSize = _a.cellSize, showGrid = _a.showGrid, _b = _a.colors, colorBackground = _b.colorBackground, colorGrid = _b.colorGrid, colorCell = _b.colorCell;
    var gridSizeParams = getGridSizeParams(canvas, cellSize);
    var renderGrid = function () {
        context.fillStyle = colorBackground;
        context.fillRect(0, 0, canvas.width, canvas.height);
        if (!showGrid) {
            return;
        }
        var xCellsCount = gridSizeParams.xCellsCount, yCellsCount = gridSizeParams.yCellsCount, gridWidth = gridSizeParams.gridWidth, gridHeight = gridSizeParams.gridHeight, offsetLeft = gridSizeParams.offsetLeft, offsetTop = gridSizeParams.offsetTop;
        context.strokeStyle = colorGrid;
        context.beginPath();
        for (var i = 0; i <= xCellsCount; i += 1) {
            var xCoordinate = cellSize * i;
            context.moveTo(xCoordinate + offsetLeft, offsetTop);
            context.lineTo(xCoordinate + offsetLeft, gridHeight + offsetTop);
        }
        for (var i = 0; i <= yCellsCount; i += 1) {
            var yCoordinate = cellSize * i;
            context.moveTo(offsetLeft, yCoordinate + offsetTop);
            context.lineTo(gridWidth + offsetLeft, yCoordinate + offsetTop);
        }
        context.stroke();
    };
    var renderCell = function (cell) {
        var offsetTop = gridSizeParams.offsetTop, offsetLeft = gridSizeParams.offsetLeft;
        var cellPadding = getCellPadding(cellSize);
        var cellRenderingSize = cellSize - cellPadding * 2;
        var position = [
            cell[0] * cellSize + offsetLeft + cellPadding,
            cell[1] * cellSize + offsetTop + cellPadding,
        ];
        context.fillStyle = colorCell;
        context.fillRect.apply(context, __spreadArray(__spreadArray([], position, false), [cellRenderingSize, cellRenderingSize], false));
    };
    var getCellByCoordinates = function (coordinates) {
        var coordinatesWithoutOffset = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.subtractVector)(coordinates, [
            gridSizeParams.offsetLeft,
            gridSizeParams.offsetTop,
        ]);
        if (coordinatesWithoutOffset[0] < 0 || coordinatesWithoutOffset[1] < 0) {
            return null;
        }
        var cell = [
            Math.floor(coordinatesWithoutOffset[0] / cellSize),
            Math.floor(coordinatesWithoutOffset[1] / cellSize),
        ];
        if (cell[0] >= gridSizeParams.xCellsCount || cell[1] >= gridSizeParams.yCellsCount) {
            return null;
        }
        return cell;
    };
    return {
        gridSizeParams: gridSizeParams,
        renderGrid: renderGrid,
        renderCell: renderCell,
        getCellByCoordinates: getCellByCoordinates,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGrid);


/***/ }),

/***/ "./src/modules/gravity/Gravity.ts":
/*!****************************************!*\
  !*** ./src/modules/gravity/Gravity.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Canvas */ "./src/components/Canvas/index.ts");
/* harmony import */ var _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/colors.module.scss */ "./src/styles/colors.module.scss");
/* harmony import */ var _utils_Particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/Particle */ "./src/utils/Particle.ts");
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");
/* harmony import */ var _utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/useRenderLoop */ "./src/utils/useRenderLoop.ts");





var config = {
    speed: 1.4,
    particleSize: 20,
    decelerationCoefficient: 0.99,
    pointsCount: 500,
};
var Gravity = function (mountElement) {
    var _a = (0,_components_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"])(), canvas = _a.element, setSize = _a.setSize, append = _a.append, getContext = _a.getContext;
    setSize(mountElement);
    append(mountElement);
    var context = getContext();
    var particles = [];
    var mouse = [canvas.width / 2, canvas.height / 2];
    var halfParticleSize = config.particleSize / 2;
    var clear = function () {
        context.fillStyle = _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dark;
        context.fillRect(0, 0, canvas.width, canvas.height);
    };
    var isParticleOutOfBounds = function (particle) {
        var isOutOfX = (particle.position[0] + halfParticleSize >= canvas.width
            && particle.velocity[0] > 0) || (particle.position[0] - halfParticleSize < 0
            && particle.velocity[0] < 0);
        var isOutOfY = (particle.position[1] + halfParticleSize >= canvas.height
            && particle.velocity[1] > 0) || (particle.position[1] - halfParticleSize < 0
            && particle.velocity[1] < 0);
        return {
            x: isOutOfX,
            y: isOutOfY,
        };
    };
    var getUpdatedParticle = function (_a) {
        var position = _a.position, velocity = _a.velocity;
        var angle = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.getVectorAngle)((0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.subtractVector)(mouse, position));
        var particle = (0,_utils_Particle__WEBPACK_IMPORTED_MODULE_2__.getMovedParticle)({
            position: position,
            acceleration: (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.polarToCartesianVector)(config.speed, angle),
            velocity: (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.multiplyVectorByNumber)(velocity, config.decelerationCoefficient),
        });
        var isOutOfBounds = isParticleOutOfBounds(particle);
        if (isOutOfBounds.x) {
            particle.velocity[0] *= -1;
        }
        if (isOutOfBounds.y) {
            particle.velocity[1] *= -1;
        }
        return particle;
    };
    var updateParticles = function () {
        particles = particles.map(getUpdatedParticle);
    };
    var setupParticles = function (count) {
        particles = [];
        for (var i = 0; i < count; i += 1) {
            particles.push({
                position: [canvas.width * Math.random(), canvas.height * Math.random()],
                velocity: [Math.random() * 10 - 5, Math.random() * 10 - 5],
                acceleration: [0, 0],
            });
        }
    };
    var render = function () {
        setupParticles(config.pointsCount);
        var run = (0,_utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
            clear();
            updateParticles();
            context.fillStyle = _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].light;
            particles.forEach(function (_a) {
                var _b = _a.position, x = _b[0], y = _b[1];
                context.beginPath();
                context.arc(x, y, halfParticleSize, 0, Math.PI * 2);
                context.fill();
            });
        }).run;
        run();
    };
    render();
    canvas.addEventListener('mousemove', function (_a) {
        var offsetX = _a.offsetX, offsetY = _a.offsetY;
        mouse = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.multiplyVectorByNumber)([offsetX, offsetY], _components_Canvas__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CANVAS_SCALE);
    });
    return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gravity);


/***/ }),

/***/ "./src/modules/gravity/index.ts":
/*!**************************************!*\
  !*** ./src/modules/gravity/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _modules_gravity_Gravity__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _modules_gravity_Gravity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/modules/gravity/Gravity */ "./src/modules/gravity/Gravity.ts");



/***/ }),

/***/ "./src/modules/sierpinski-triangle/SierpinskiTriangle.ts":
/*!***************************************************************!*\
  !*** ./src/modules/sierpinski-triangle/SierpinskiTriangle.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Canvas */ "./src/components/Canvas/index.ts");
/* harmony import */ var _components_Range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Range */ "./src/components/Range/index.ts");
/* harmony import */ var _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/colors.module.scss */ "./src/styles/colors.module.scss");
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");
/* harmony import */ var _utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/useRenderLoop */ "./src/utils/useRenderLoop.ts");





var CIRCLE_OFFSET = 100;
var getBasePoints = function (count, centerCoordinate) {
    var radius = Math.min.apply(Math, centerCoordinate) - CIRCLE_OFFSET;
    var angleStep = (2 * Math.PI) / count;
    var basePoints = [];
    for (var i = 0; i < count; i += 1) {
        var angle = angleStep * i + _utils_Vector__WEBPACK_IMPORTED_MODULE_3__.CLOCK_ANGLE_OFFSET;
        basePoints.push((0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.addVectors)((0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.polarToCartesianVector)(radius, angle), centerCoordinate));
    }
    return basePoints;
};
var SierpinskiTriangle = function (mountElement) {
    var _a = (0,_components_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"])(), canvas = _a.element, setSize = _a.setSize, append = _a.append, getContext = _a.getContext;
    setSize(mountElement);
    append(mountElement);
    var basePointsCount = 3;
    var context = getContext();
    var centerCoordinate = [
        canvas.width / 2,
        canvas.height / 2,
    ];
    var render = function () {
        context.fillStyle = _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dark;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = _styles_colors_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].light;
        var basePoints = getBasePoints(basePointsCount, centerCoordinate);
        basePoints.forEach(function (_a) {
            var x = _a[0], y = _a[1];
            context.fillRect(x, y, 1, 1);
        });
        var lastPoint = basePoints[0];
        var run = (0,_utils_useRenderLoop__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
            for (var i = 0; i < 100; i += 1) {
                var nextPointIndex = Math.floor(Math.random() * basePoints.length);
                var nextPoint = basePoints[nextPointIndex];
                var newPoint = (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_3__.getPointBetween)(lastPoint, nextPoint);
                context.fillRect(newPoint[0], newPoint[1], 2, 2);
                lastPoint = newPoint;
            }
        }).run;
        run();
    };
    render();
    var range = (0,_components_Range__WEBPACK_IMPORTED_MODULE_1__["default"])();
    range.value = String(basePointsCount);
    mountElement.appendChild(range);
    range.addEventListener('input', function (_a) {
        var target = _a.target;
        basePointsCount = Number(target.value);
        render();
    });
    return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SierpinskiTriangle);


/***/ }),

/***/ "./src/modules/sierpinski-triangle/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/sierpinski-triangle/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _SierpinskiTriangle__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SierpinskiTriangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SierpinskiTriangle */ "./src/modules/sierpinski-triangle/SierpinskiTriangle.ts");



/***/ }),

/***/ "./src/utils/Particle.ts":
/*!*******************************!*\
  !*** ./src/utils/Particle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMovedParticle": () => (/* binding */ getMovedParticle)
/* harmony export */ });
/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/Vector */ "./src/utils/Vector.ts");

var getMovedParticle = function (_a) {
    var position = _a.position, velocity = _a.velocity, acceleration = _a.acceleration;
    return ({
        position: (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.addVectors)(position, velocity),
        velocity: (0,_utils_Vector__WEBPACK_IMPORTED_MODULE_0__.addVectors)(velocity, acceleration),
        acceleration: acceleration,
    });
};


/***/ }),

/***/ "./src/utils/Vector.ts":
/*!*****************************!*\
  !*** ./src/utils/Vector.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLOCK_ANGLE_OFFSET": () => (/* binding */ CLOCK_ANGLE_OFFSET),
/* harmony export */   "addVectors": () => (/* binding */ addVectors),
/* harmony export */   "areSimilarVectors": () => (/* binding */ areSimilarVectors),
/* harmony export */   "getPointBetween": () => (/* binding */ getPointBetween),
/* harmony export */   "getVectorAngle": () => (/* binding */ getVectorAngle),
/* harmony export */   "multiplyVectorByNumber": () => (/* binding */ multiplyVectorByNumber),
/* harmony export */   "polarToCartesianVector": () => (/* binding */ polarToCartesianVector),
/* harmony export */   "subtractVector": () => (/* binding */ subtractVector)
/* harmony export */ });
var addVectors = function (a, b) { return [
    a[0] + b[0],
    a[1] + b[1],
]; };
var subtractVector = function (a, b) { return [
    a[0] - b[0],
    a[1] - b[1],
]; };
var multiplyVectorByNumber = function (_a, number) {
    var x = _a[0], y = _a[1];
    return [
        x * number,
        y * number,
    ];
};
var getPointBetween = function (a, b) { return [
    (a[0] + b[0]) / 2,
    (a[1] + b[1]) / 2,
]; };
var polarToCartesianVector = function (radius, angle) { return [
    radius * Math.cos(angle),
    radius * Math.sin(angle),
]; };
var getVectorAngle = function (_a) {
    var x = _a[0], y = _a[1];
    return Math.atan2(y, x);
};
var areSimilarVectors = function (a, b) { return a[0] === b[0] && a[1] === b[1]; };
var CLOCK_ANGLE_OFFSET = -Math.PI / 2;


/***/ }),

/***/ "./src/utils/isTouchDevice.ts":
/*!************************************!*\
  !*** ./src/utils/isTouchDevice.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isTouchDevice = function () { return (('ontouchstart' in window)
    || (navigator.maxTouchPoints > 0)); };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTouchDevice);


/***/ }),

/***/ "./src/utils/touchCoordinates.ts":
/*!***************************************!*\
  !*** ./src/utils/touchCoordinates.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getTouchCoordinates = function (e) {
    var _a, _b;
    return ({
        offsetX: (_a = e.offsetX) !== null && _a !== void 0 ? _a : e.touches[0].clientX,
        offsetY: (_b = e.offsetY) !== null && _b !== void 0 ? _b : e.touches[0].clientY,
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTouchCoordinates);


/***/ }),

/***/ "./src/utils/useRenderLoop.ts":
/*!************************************!*\
  !*** ./src/utils/useRenderLoop.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getRenderLoop": () => (/* binding */ getRenderLoop),
/* harmony export */   "useRenderLoop": () => (/* binding */ useRenderLoop)
/* harmony export */ });
var getTimeout = function (framesPerSecond) { return 1000 / framesPerSecond; };
var useRenderLoop = function () {
    var loopSingleton;
    var getRenderLoop = function (callback, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.framesPerSecond, framesPerSecond = _c === void 0 ? 'auto' : _c;
        var isRunning = false;
        var timerId;
        var getTimeoutFunction = function (fps) { return (fps === 'auto'
            ? requestAnimationFrame
            : function (recursiveCallback) {
                setTimeout(recursiveCallback, getTimeout(fps));
            }); };
        var timeoutFunction = getTimeoutFunction(framesPerSecond);
        var loop = function () {
            if (loop !== loopSingleton || !isRunning) {
                return;
            }
            callback();
            timeoutFunction(loop);
        };
        loopSingleton = loop;
        var run = function () {
            if (isRunning) {
                return;
            }
            isRunning = true;
            loop();
        };
        var stop = function () {
            isRunning = false;
            clearTimeout(timerId);
        };
        var toggle = function () {
            if (isRunning) {
                stop();
            }
            else {
                run();
            }
        };
        var setFramesPerSecond = function (fps) {
            timeoutFunction = getTimeoutFunction(fps);
        };
        return {
            run: run,
            stop: stop,
            toggle: toggle,
            setFramesPerSecond: setFramesPerSecond,
        };
    };
    return { getRenderLoop: getRenderLoop };
};
var getRenderLoop = useRenderLoop().getRenderLoop;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRenderLoop);


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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _layout_buger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layout/buger-menu */ "./src/layout/buger-menu/index.ts");
/* harmony import */ var _modules_fractal_sets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/fractal-sets */ "./src/modules/fractal-sets/index.ts");
/* harmony import */ var _modules_game_of_life__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/game-of-life */ "./src/modules/game-of-life/index.ts");
/* harmony import */ var _modules_gravity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/modules/gravity */ "./src/modules/gravity/index.ts");
/* harmony import */ var _modules_sierpinski_triangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/modules/sierpinski-triangle */ "./src/modules/sierpinski-triangle/index.ts");






var navItems = [
    {
        text: 'Fractal sets',
        module: _modules_fractal_sets__WEBPACK_IMPORTED_MODULE_2__["default"],
    },
    {
        text: 'Game of Life',
        module: _modules_game_of_life__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
    {
        text: 'Gravity',
        module: _modules_gravity__WEBPACK_IMPORTED_MODULE_4__["default"],
    },
    {
        text: 'Sierpinski triangle',
        module: _modules_sierpinski_triangle__WEBPACK_IMPORTED_MODULE_5__["default"],
    },
];
var DEFAULT_ACTIVE_NAV_ELEMENT_INDEX = 0;
var app = function () {
    var closeMenu = (0,_layout_buger_menu__WEBPACK_IMPORTED_MODULE_1__["default"])().closeMenu;
    var mountElement = document.querySelector('#content');
    var navItemsContainer = document.querySelector('#nav-items');
    var navElements = navItems.map(function (_a) {
        var text = _a.text;
        var item = document.createElement('div');
        item.className = 'sidebar__item';
        item.textContent = text;
        return item;
    });
    var setActiveNavItem = function (index) {
        navElements.forEach(function (element) {
            element.classList.remove('active');
        });
        navElements[index].classList.add('active');
    };
    var activeModuleIndex = DEFAULT_ACTIVE_NAV_ELEMENT_INDEX;
    var activeModule;
    var mountModule = function (index) {
        var _a;
        (_a = activeModule === null || activeModule === void 0 ? void 0 : activeModule.beforeUnmount) === null || _a === void 0 ? void 0 : _a.call(activeModule);
        mountElement.innerHTML = '';
        activeModule = navItems[index].module(mountElement);
        setActiveNavItem(index);
    };
    var setActiveModule = function (index) {
        activeModuleIndex = index;
        mountModule(index);
    };
    mountModule(activeModuleIndex);
    navElements.forEach(function (element, index) {
        navItemsContainer.appendChild(element);
        element.addEventListener('click', function () {
            setActiveModule(index);
            closeMenu();
        });
    });
    setActiveNavItem(DEFAULT_ACTIVE_NAV_ELEMENT_INDEX);
    mountElement.addEventListener('click', closeMenu);
    var timerId;
    window.addEventListener('resize', function () {
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            mountModule(activeModuleIndex);
        }, 200);
    });
};
document.addEventListener('DOMContentLoaded', app);

})();

/******/ })()
;
//# sourceMappingURL=bundle.d6b316ee.js.map