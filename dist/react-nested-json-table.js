(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactNestedJsonTable"] = factory(require("react"));
	else
		root["ReactNestedJsonTable"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _NestedJsonTable = __webpack_require__(1);
	
	var _NestedJsonTable2 = _interopRequireDefault(_NestedJsonTable);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = _NestedJsonTable2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JsonNode = __webpack_require__(7);
	
	var _JsonNode2 = _interopRequireDefault(_JsonNode);
	
	var _Table2 = __webpack_require__(9);
	
	var _Table3 = _interopRequireDefault(_Table2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var NestedJsonTable = function (_Table) {
	  _inherits(NestedJsonTable, _Table);
	
	  function NestedJsonTable(props) {
	    _classCallCheck(this, NestedJsonTable);
	
	    return _possibleConstructorReturn(this, (NestedJsonTable.__proto__ || Object.getPrototypeOf(NestedJsonTable)).call(this, props));
	  }
	
	  _createClass(NestedJsonTable, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var data = _props.data;
	      var parentKey = _props.parentKey;
	      var expandAll = _props.expandAll;
	
	      data = this.ensureChildIsArray(data);
	      this.ensureChildIsObject(data);
	
	      var header = [];
	      var rows = [];
	
	      data.forEach(function (child, i) {
	        for (var key in child) {
	          var n = Math.random();
	          var obj = child[key];
	          var childKey = parentKey + '/' + i + '/' + key;
	
	          header.push(_react2.default.createElement('th', { key: Math.random() }, key));
	
	          var o = [];
	          if (_this2.isObject(obj)) {
	            o = _this2.makeArray(obj);
	          }
	          if (_this2.isArray(obj) && obj.length > 0) {
	            var modifiedArray = _this2.makeArrayForEach(obj);
	            rows.push(_react2.default.createElement('td', { key: n }, _react2.default.createElement(_JsonNode2.default, { path: childKey, data: modifiedArray, expandAll: expandAll })));
	          } else {
	            if (o.length > 0) {
	              rows.push(_react2.default.createElement('td', { key: n }, _react2.default.createElement(_JsonNode2.default, { path: childKey, data: o, expandAll: expandAll })));
	            } else {
	              rows.push(_react2.default.createElement('td', { key: n }, obj ? obj.toString() : ''));
	            }
	          }
	        }
	      });
	
	      return _react2.default.createElement('div', { className: 'react-nested-json-table' }, _react2.default.createElement('table', null, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, header)), _react2.default.createElement('tbody', null, _react2.default.createElement('tr', null, rows))));
	    }
	  }]);
	
	  return NestedJsonTable;
	}(_Table3.default);
	
	NestedJsonTable.propTypes = {
	  data: _react.PropTypes.any.isRequired,
	  expandAll: _react.PropTypes.bool
	};
	exports.default = NestedJsonTable;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".divCollapsible--hide {\r\n  display: none;\r\n}\r\n.spanGlyph--expand {\r\n  color: #6e6e6e !important;\r\n  font-size: 10px !important;\r\n  margin-left: -4px !important;\r\n  margin-right: 3px !important;\r\n  white-space: pre !important;\r\n  min-height: 10px !important;\r\n  max-height: 10px !important;\r\n  line-height: 10px !important;\r\n}\r\n.spanGlyph--expand:hover {\r\n  cursor: pointer;\r\n}\r\n.react-nested-json-table table td, table td * {\r\n  vertical-align: top;\r\n}\r\n\r\n.react-nested-json-table table {\r\n  font-size: 0.85rem;\r\n  border: 1px solid #e0e0e0;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  empty-cells: show;\r\n  /* margin-bottom: 1.5rem; */\r\n  width: 100%; }\r\n  table caption {\r\n    color: #555;\r\n    font-size: 85%;\r\n    font-style: italic;\r\n    line-height: 3rem;\r\n    text-align: center; }\r\n  table thead {\r\n    background-color: #f5f5f5;\r\n    text-align: left; }\r\n  table tfoot {\r\n    background-color: #fbfbfb;\r\n    border-top: 1px solid #e0e0e0; }\r\n  table th,\r\n  table td {\r\n    /*display: inline-flex;*/\r\n    white-space: pre;\r\n    border-right: 1px solid #e0e0e0;\r\n    line-height: 1rem;\r\n    overflow: visible;\r\n    padding: 0.175rem 0.5em; }\r\n    @media (min-width: 480px) {\r\n      table th,\r\n      table td {\r\n        line-height: 1rem; } }\r\n    table th:last-child,\r\n    table td:last-child {\r\n      border-right: none; }\r\n  table tr,\r\n  table td {\r\n    -webkit-transition: background-color 150ms;\r\n    transition: background-color 150ms; }\r\n  @media (min-width: 480px) {\r\n    table {\r\n      width: auto; }\r\n      table th,\r\n      table td {\r\n        /* padding: 0 2.5em; */\r\n      } }\r\n\r\n.nonresponsive {\r\n  width: auto; }\r\n  .nonresponsive th,\r\n  .nonresponsive td {\r\n    /* padding: 0 2.5em; */\r\n  }\r\n\r\n.nonresponsive th,\r\n.nonresponsive td {\r\n  line-height: 2rem; }\r\n\r\n.table--responsive {\r\n  overflow: auto;\r\n  width: 100%; }\r\n  .table--responsive::-webkit-scrollbar {\r\n    height: 14px;\r\n    width: 14px;\r\n    -webkit-appearance: none; }\r\n  .table--responsive::-webkit-scrollbar-thumb {\r\n    background-color: rgba(50, 50, 50, 0.2);\r\n    border: 3px solid white;\r\n    border-radius: 8px; }\r\n  .table--responsive table {\r\n    margin-bottom: 0; }\r\n\r\n.table--full {\r\n  width: 100%; }\r\n\r\n.table--border {\r\n  border: 1px solid #e0e0e0; }\r\n  .table--border thead,\r\n  .table--border td {\r\n    border-bottom: 1px solid #e0e0e0; }\r\n\r\n.table--borderOuter {\r\n  border: 1px solid #e0e0e0; }\r\n  .table--borderOuter th,\r\n  .table--borderOuter td {\r\n    border-right: none; }\r\n\r\n.table--borderHorizontal thead,\r\n.table--borderHorizontal td {\r\n  border-bottom: 1px solid #e0e0e0; }\r\n\r\n.table--borderHorizontal th,\r\n.table--borderHorizontal td {\r\n  border-right: none; }\r\n\r\n.table--flat {\r\n  border: none; }\r\n  .table--flat td {\r\n    border-bottom: none; }\r\n  .table--flat th,\r\n  .table--flat td {\r\n    border-right: none; }\r\n\r\n.table--fillEven tbody tr:nth-child(even) {\r\n  background-color: #f5f5f5; }\r\n\r\n.table--fillOdd tbody tr:nth-child(odd) {\r\n  background-color: #f5f5f5; }\r\n\r\n.table--hoverRow tbody tr:hover {\r\n  background-color: #f5f5f5; }\r\n\r\n.table--hoverCell tbody td:hover {\r\n  background-color: #f5f5f5; }\r\n\r\n.table--truncate {\r\n  table-layout: fixed; }\r\n  .table--truncate td {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap; }\r\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(8);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Table = __webpack_require__(9);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	/* http://unicode-table.com/en/sets/arrows-symbols/ */
	var glyphArrowUp = '▲';
	var glyphArrowDown = '▼';
	var glyphArrowRight = '▶';
	
	var JsonNode = function (_Component) {
	  _inherits(JsonNode, _Component);
	
	  function JsonNode(props) {
	    _classCallCheck(this, JsonNode);
	
	    var _this = _possibleConstructorReturn(this, (JsonNode.__proto__ || Object.getPrototypeOf(JsonNode)).call(this, props));
	
	    var path = props.path;
	    var expandAll = props.expandAll;
	
	    var newState = _defineProperty({}, path, { display: { 'divCollapsible--hide': expandAll ? false : true }, spanGlyph: { 'spanGlyph--expand': true }, expander: expandAll ? glyphArrowDown : glyphArrowRight });
	    _this.state = Object.assign(newState, { expanded: expandAll || false });
	    return _this;
	  }
	
	  _createClass(JsonNode, [{
	    key: 'handleClick',
	    value: function handleClick(id) {
	      if (!this.state.expanded) {
	        this.setState(_defineProperty({}, id, { display: { 'divCollapsible--hide': false }, spanGlyph: { 'spanGlyph--expand': true }, expander: glyphArrowDown }));
	      } else {
	        this.setState(_defineProperty({}, id, { display: { 'divCollapsible--hide': true }, spanGlyph: { 'spanGlyph--expand': true }, expander: glyphArrowRight }));
	      }
	      this.setState({ expanded: !this.state.expanded });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var path = _props.path;
	      var expandAll = _props.expandAll;
	
	      return _react2.default.createElement('div', null, _react2.default.createElement('span', { className: (0, _classnames2.default)(this.state[path].spanGlyph), onClick: this.handleClick.bind(this, path) }, this.state[path].expander), ' ', _react2.default.createElement('div', { className: (0, _classnames2.default)(this.state[path].display) }, _react2.default.createElement(_Table2.default, { data: data, parentKey: path, expandAll: expandAll })));
	    }
	  }]);
	
	  return JsonNode;
	}(_react.Component);
	
	JsonNode.propTypes = {
	  data: _react.PropTypes.any,
	  path: _react.PropTypes.string,
	  expandAll: _react.PropTypes.bool
	};
	exports.default = JsonNode;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _JsonNode = __webpack_require__(7);
	
	var _JsonNode2 = _interopRequireDefault(_JsonNode);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	/*
	 *  @description Child node table creator
	 */
	var Table = function (_Component) {
	  _inherits(Table, _Component);
	
	  function Table(props) {
	    _classCallCheck(this, Table);
	
	    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  /**
	    * @reference jQuery.makeArray
	  **/
	
	  _createClass(Table, [{
	    key: 'makeArray',
	    value: function makeArray(arr, results) {
	      var ret = results || [];
	
	      if (arr != null) {
	        if (this.isArray(Object(arr))) {
	          Object.assign(ret, typeof arr === "string" ? [arr] : arr);
	        } else {
	          [].push.call(ret, arr);
	        }
	      }
	
	      return ret;
	    }
	
	    /**
	      * @reference underscore.isObject
	    **/
	
	  }, {
	    key: 'isObject',
	    value: function isObject(obj) {
	      var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	      return type === 'function' || type === 'object' && !!obj;
	    }
	  }, {
	    key: 'isArray',
	    value: function isArray(obj) {
	      return Object.prototype.toString.call(obj) === '[object Array]';
	    }
	
	    // create object if value is not object or array
	
	  }, {
	    key: 'ensureChildIsObject',
	    value: function ensureChildIsObject(data) {
	      for (var k in data) {
	        var ty = _typeof(data[k]);
	
	        if (ty.search(/^string|number|boolean|function$/i) != -1) {
	          var r = _defineProperty({}, data.length.toString() + ' items', data[k]);
	          data[k] = r;
	        }
	      }
	    }
	
	    // create array from object for each member in an array
	
	  }, {
	    key: 'makeArrayForEach',
	    value: function makeArrayForEach(data) {
	      var _this2 = this;
	
	      return data.map(function (child) {
	        if (_this2.isObject(child)) {
	          return _this2.makeArray(child);
	        }
	        return child;
	      });
	    }
	
	    // make sure the passed in data property is an array
	
	  }, {
	    key: 'ensureChildIsArray',
	    value: function ensureChildIsArray(data) {
	      if (!this.isArray(data)) {
	        return [data];
	      }
	      return data;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props;
	      var data = _props.data;
	      var parentKey = _props.parentKey;
	      var expandAll = _props.expandAll;
	
	      this.ensureChildIsObject(data);
	
	      var header = [];
	      var rows = [];
	      Object.keys(data[0]).forEach(function (d) {
	        return header.push(_react2.default.createElement('th', { key: Math.random() }, isNaN(d) ? d : 'collection'));
	      });
	
	      data.forEach(function (child, i) {
	        var curRow = [];
	        for (var key in child) {
	          var obj = child[key];
	          var childKey = parentKey + '/' + i + '/' + key;
	
	          var o = [];
	          if (_this3.isObject(obj)) {
	            o = _this3.makeArray(obj);
	          }
	          var newChild = [];
	          if (_this3.isArray(obj) && obj.length > 0) {
	            // if a collection is a variant, make the object an array (ie. const node = [{ 1, "2", { "variant": 3.0 } }])
	            var modifiedArray = _this3.makeArrayForEach(obj);
	            newChild.push(_react2.default.createElement('td', { key: Math.random() }, _react2.default.createElement(_JsonNode2.default, { path: childKey, data: modifiedArray, expandAll: expandAll })));
	          } else {
	            if (o.length > 0) {
	              newChild.push(_react2.default.createElement('td', { key: Math.random() }, _react2.default.createElement(_JsonNode2.default, { path: childKey, data: o, expandAll: expandAll })));
	            } else {
	              newChild.push(_react2.default.createElement('td', { key: Math.random() }, obj ? obj.toString() : ''));
	            }
	          }
	          curRow.push(newChild);
	        }
	        rows.push(_react2.default.createElement('tr', { key: Math.random() }, curRow));
	      });
	
	      return _react2.default.createElement('table', null, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, header)), _react2.default.createElement('tbody', null, rows));
	    }
	  }]);
	
	  return Table;
	}(_react.Component);
	
	Table.propTypes = {
	  data: _react.PropTypes.array.isRequired,
	  parentKey: _react.PropTypes.string,
	  expandAll: _react.PropTypes.bool
	};
	Table.defaultProps = {
	  parentKey: 'root'
	};
	exports.default = Table;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-nested-json-table.map