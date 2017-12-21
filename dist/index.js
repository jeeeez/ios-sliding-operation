(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = generator;
function generator($item) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var opts = Object.assign({
		contentSelector: '.content',
		operationSelector: '.controls',
		animationClass: 'drag-end',
		duration: 0
	}, options);
	$item.addEventListener('touchstart', genTouchStart($item, opts), false);
}

function genTouchStart(item, opts) {

	var $content = item.querySelector(opts.contentSelector);
	var $control = item.querySelector(opts.operationSelector);

	var animationClass = opts.animationClass;

	var duration = opts.duration;

	return function onTouchStart(startEvent) {
		var width = $control.clientWidth;

		clearTimeout(item.$timer);

		var offset = 0;

		$content.classList.remove(animationClass);

		var currentOffset = +$content.getAttribute('data-offset') || 0;
		var startX = startEvent.touches[0].clientX;
		var startY = startEvent.touches[0].clientY;

		document.addEventListener('touchmove', onTouchMove, false);
		document.addEventListener('touchend', onTouchEnd, false);

		var istouchX = false;

		function onTouchMove(evt) {
			var nowX = evt.touches[0].clientX;
			var nowY = evt.touches[0].clientY;

			istouchX = Math.abs(nowX - startX) > Math.abs(nowY - startY);

			var distance = nowX - startX + currentOffset;

			if (distance > -width && distance < 0) {
				offset = Math.floor(distance);
				istouchX && setOffset(offset);
			}
		}

		function onTouchEnd(evt) {
			$content.classList.add(animationClass);
			document.removeEventListener('touchmove', onTouchMove);
			document.removeEventListener('touchend', onTouchEnd);

			if (duration) {
				item.$timer = setTimeout(function () {
					setOffset(0);
				}, duration);
			}

			if (offset !== 0 && istouchX) {
				setTimeout(function () {
					setOffset(offset > -(width / 2) && offset < 0 ? 0 : -width);
				}, 0);
			}
		}

		function setOffset(offset) {
			$content.style.transform = 'translateX(' + offset + 'px)';
			$content.setAttribute('data-offset', offset);
		}
	};
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

console.log(2)
