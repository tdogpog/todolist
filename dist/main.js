/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 300px auto;\n    height: 100vh;\n    \n}\n\n#darken{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    top: 0;\n    left: 0;\n    display: none;\n}\n\n#sidebar{\n    grid-column: 1;\n    background-color: #d0d0d0;\n    height: 100vh;\n    padding:20px ;\n    display: flex;\n    flex-direction: column; \n    gap: 10px;\n    padding-top: 15px;\n}\n\n#main{\n    grid-column:2;\n    background-color: floralwhite;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n}\n\n.sidebarItem:hover{\n    background-color: #c0c0c0;\n}\n\n.sidebarItem{\n    transition: background-color 0.3s ease;\n    border-radius: 10px;\n    padding:10px;\n    cursor: pointer;\n}\n\n#taskAdder{\n    transition: background-color 0.3s ease;\n    border-radius: 10px;\n    padding:10px;\n    cursor: pointer;\n}\n\n#taskAdder:hover{\n    background-color: #c0c0c0;\n}\n\n\n.user{\n    padding: 10px;\n}\n\n.myProjects{\n    display: flex;\n    padding: 10px;\n    line-height: 2;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.mainItem{\n    flex-basis: 800px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n}\n\n.taskContainer{\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.taskItem{\n    display: flex;\n    gap: 10px;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n    background-color: #e0e0e0;\n    padding: 6px;\n}\n\n.taskBody{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n#newEntry{\n    position: fixed;\n    z-index: 1;\n    top: 30%;\n    left: 50%;\n    background-color: blanchedalmond;\n    border-radius: 20px;\n    width: 250px;\n    height: 200px;\n    display: flex;\n    padding: 20px;\n    transform: translate(-50%,-50%);\n    gap: 8px;\n    display: none;\n}\n\n#form{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    gap: 20px;\n    display: none;\n}\n\n.entryInputs{\n    border-style: none;\n}\n\n#formBottom{\n    display: flex;\n    justify-content: space-between;\n}\n\nselect{\n    border-style: none;\n    border-radius: 6px;\n}\n\nbutton{\n    border-style: none;\n    border-radius: 6px;\n    padding: 2px;\n}\n\n#categoryPopup {\n    position: fixed;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    z-index: 20;\n    display: none; /* Initially hidden */\n    border-radius: 10px;\n}\n\n\n.categoryItem:hover:not(.deleteCategory) {\n    background-color: #c0c0c0;\n}\n\n.categoryItem{\n    transition: background-color 0.3s ease;\n    border-radius: 10px;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.myProjects span{\n    display: flex;\n    justify-content: space-between;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/CategoryManager.js":
/*!********************************!*\
  !*** ./src/CategoryManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CategoryManager: () => (/* binding */ CategoryManager)\n/* harmony export */ });\n\n\nclass CategoryManager {\n    constructor(darkenElement, addCategoryButton, categoryPopup, newCategoryInput, submitCategoryButton, projectDropdown, taskDisplay) {\n        this.darkenElement = darkenElement;\n        this.addCategoryButton = addCategoryButton;\n        this.categoryPopup = categoryPopup;\n        this.newCategoryInput = newCategoryInput;\n        this.submitCategoryButton = submitCategoryButton;\n        this.projectDropdown = projectDropdown;\n        //object will need access to refreshing the display\n        this.taskDisplay = taskDisplay;\n        this.setupEventListeners();\n        //init default cases i inserted when page loads\n        //since obj is instatiated as page loads6\n        this.initializeDefaultCategories(); \n    }\n\n    setupEventListeners() {\n        this.addCategoryButton.addEventListener('click', () => {\n            this.showPopup();\n        });\n\n        this.darkenElement.addEventListener('click', () => {\n            this.hidePopup();\n        });\n\n        this.submitCategoryButton.addEventListener('click', () => {\n            this.addCategory();\n        });\n    }\n\n    initializeDefaultCategories() {\n        const defaultCategories = document.querySelectorAll('.myProjects .categoryItem');\n        \n        defaultCategories.forEach(categoryItem => {\n            const categoryName = categoryItem.querySelector('span').textContent.trim();\n    \n            categoryItem.addEventListener('click', (e) => {\n                if (!e.target.classList.contains('deleteCategory')) {\n                    this.filterTasksByCategory(categoryName);\n                    this.taskDisplay.updateTaskContainerHeader(categoryName); // Call on taskDisplay\n                }\n            });\n            \n    \n            // Delete event listener on the delete button\n            categoryItem.querySelector('.deleteCategory').addEventListener('click', (e) => {\n                e.stopPropagation();\n                this.deleteCategory(categoryName, categoryItem);\n            });\n        });\n    }\n\n    \n    showPopup() {\n        this.darkenElement.style.display = 'block';\n        this.categoryPopup.style.display = 'block';\n    }\n\n    hidePopup() {\n        this.darkenElement.style.display = 'none';\n        this.categoryPopup.style.display = 'none';\n        this.newCategoryInput.value = '';\n    }\n\n    addCategory() {\n        const categoryName = this.newCategoryInput.value.trim();\n        if (categoryName) {\n            this.addCategoryToDropdown(categoryName);\n            this.addCategoryToProjects(categoryName);\n            this.hidePopup(); \n        } else {\n            alert('Please enter a category name.');\n        }\n    }\n\n    deleteCategory(categoryName, categoryItem) {\n        // Remove category from the sidebar\n        categoryItem.remove();\n\n        // Remove category from the dropdown\n        const dropdownOption = Array.from(this.projectDropdown.options).find(option => option.value === categoryName);\n        if (dropdownOption) {\n            dropdownOption.remove();\n        }\n\n        // Remove all tasks with the deleted category\n        const remainingTasks = this.taskDisplay.taskArray.filter(task => task.dropdownVal !== categoryName);\n        this.taskDisplay.taskArray = remainingTasks;\n\n        // Re-render the task list without the deleted category's tasks\n        this.taskDisplay.renderFilteredTasks(remainingTasks);\n\n        // Update task container header to \"Tasks\" after deletion\n        const taskContainerHeader = document.querySelector('.taskContainerHeader span');\n        taskContainerHeader.textContent = \"Tasks\";\n    }\n\n    addCategoryToDropdown(categoryName) {\n        const option = document.createElement('option');\n        option.value = categoryName;\n        option.textContent = categoryName;\n        this.projectDropdown.appendChild(option);\n    }\n\n    addCategoryToProjects(categoryName) {\n        const categoryItem = document.createElement('div');\n        categoryItem.classList.add('categoryItem');\n    \n        // Create the span for the category name\n        const categoryText = document.createElement('span');\n        categoryText.textContent = categoryName;\n    \n        // Create the delete button\n        const deleteButton = document.createElement('button');\n        deleteButton.classList.add('deleteCategory');\n        deleteButton.textContent = 'X';\n    \n        // Append the span and button to the categoryItem\n        categoryItem.appendChild(categoryText);\n        categoryItem.appendChild(deleteButton);\n    \n        // Event listener for filtering tasks by category\n        categoryItem.addEventListener('click', (e) => {\n            //this is for delete button listener\n            //if event object didnt contain the deleteCategory,\n            //we weren't clicking the delete button\n            //if it did, we clicked the delete button\n            //consequences of having two elemetns in same div\n            if (!e.target.classList.contains('deleteCategory')) {\n                this.filterTasksByCategory(categoryName);\n                this.taskDisplay.updateTaskContainerHeader(categoryName); \n            }\n        });\n    \n        // Event listener for deleting category\n        deleteButton.addEventListener('click', (e) => {\n            // prevent triggering the category click event when deleting\n            e.stopPropagation();\n            this.deleteCategory(categoryName, categoryItem);\n        });\n    \n        // Append the categoryItem to the sidebar\n        document.querySelector('.myProjects').appendChild(categoryItem);\n        \n        // Update the header after adding the category\n        this.taskDisplay.updateTaskContainerHeader(categoryName);\n    }\n    \n    \n    filterTasksByCategory(category) {\n        this.taskDisplay.filterTasksByCategory(category, category); \n    }\n    \n}\n\n\n\n//# sourceURL=webpack://todolist/./src/CategoryManager.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDisplay: () => (/* binding */ addDisplay)\n/* harmony export */ });\n\n\nclass addDisplay{\n\n    //take in all elements necessary for the display state\n    constructor(formElement, formContainer,taskAdder,darkenElement){\n        this.formElement=formElement;\n        this.formContainer=formContainer;\n        this.taskAdder=taskAdder;\n        this.darkenElement=darkenElement;\n        this.setupEventListeners();\n    }\n\n    showForm(){\n        this.formElement.style.display='block';\n        this.darkenElement.style.display='block';\n        this.formContainer.style.display='block';\n    }\n\n    hideForm(){\n        this.formElement.style.display='none';\n        this.darkenElement.style.display='none';\n        this.formContainer.style.display='none';\n    }\n\n    //initialize the event listeners with the functions we created\n    setupEventListeners(){\n        this.taskAdder.addEventListener('click',()=>{\n            this.showForm();\n        });\n\n        this.darkenElement.addEventListener('click',()=>{\n            this.hideForm();\n        });\n    }\n\n\n}\n\n\n//# sourceURL=webpack://todolist/./src/addTask.js?");

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\nclass displayTasks{\n    constructor(taskArray){\n        this.taskArray=taskArray\n        this.currentFilter = 'all';\n    }\n\n    setFilter(filterType) {\n        this.currentFilter = filterType;\n        this.filterTasksByDate(this.currentFilter);\n    }\n\n    addTask(task){\n        this.taskArray.push(task);\n        this.filterTasksByDate(this.currentFilter);\n    }\n\n    removeTask(index){\n        this.taskArray.splice(index,1);\n        this.filterTasksByDate(this.currentFilter);    \n    }\n\n    createTaskItem(task, index) {\n        const taskItem = document.createElement('div');\n        taskItem.classList.add('taskItem');\n    \n        taskItem.innerHTML = `\n            <div class=\"taskCheckmark\">\n                <input type=\"checkbox\">\n            </div>\n            <div class=\"taskBody\">\n                <div class=\"taskHeader\"><span>${task.task}</span></div>\n                <div class=\"taskDescription\"><span>${task.description}</span></div>\n                <div class=\"priority\"><span>${task.dropdownVal}</span></div>\n                <div class=\"date\"><span>${task.dateVal}</span></div>\n            </div>\n            <div class=\"taskDelete\">\n                <button data-index=\"${index}\">delete</button>\n            </div>\n        `;\n    \n        return taskItem;\n    }\n\n    filterTasksByCategory(category, categoryName) {\n        const filteredTasks = this.taskArray.filter(task => task.dropdownVal === category);\n        this.renderFilteredTasks(filteredTasks);\n        // call the method to update the header\n        this.updateTaskContainerHeader(categoryName); \n    }\n\n    updateTaskContainerHeader(categoryName) {\n        const taskContainerHeader = document.querySelector('.taskContainerHeader span');\n        // set to category name or default to 'Tasks'\n        taskContainerHeader.textContent = categoryName ? categoryName : 'Tasks'; \n    }\n\n    filterTasksByDate(filterType) {\n        const today = new Date();\n        let filteredTasks = [];\n    \n        if (filterType === 'today') {\n            filteredTasks = this.taskArray.filter(task => {\n                const taskDate = new Date(task.dateVal);\n    \n                // Ensure both dates are compared in 'YYYY-MM-DD' format\n                const taskDateString = taskDate.toISOString().split('T')[0];\n                const todayString = today.toISOString().split('T')[0];\n    \n                return taskDateString === todayString;  \n            });\n        } else if (filterType === 'week') {\n            const startOfWeek = new Date(today);\n            startOfWeek.setDate(today.getDate() - today.getDay()); \n            const endOfWeek = new Date(startOfWeek);\n            endOfWeek.setDate(startOfWeek.getDate() + 6);\n    \n            filteredTasks = this.taskArray.filter(task => {\n                const taskDate = new Date(task.dateVal);\n                return taskDate >= startOfWeek && taskDate <= endOfWeek;\n            });\n        } else {\n            filteredTasks = this.taskArray; \n        }\n    \n        this.renderFilteredTasks(filteredTasks);\n    }\n    \n\n    renderFilteredTasks(filteredTasks) {\n        const taskContainer = document.querySelector('.taskContainer');\n        const taskList = taskContainer.querySelectorAll('.taskItem'); \n        const taskCounter = taskContainer.querySelector('.taskCounter span'); \n\n        taskList.forEach(task => task.remove());\n        \n        filteredTasks.forEach((task, index) => {\n            const taskItem = this.createTaskItem(task, index);\n            taskContainer.appendChild(taskItem);\n        });\n\n        taskCounter.textContent = `Tasks: ${filteredTasks.length}`;\n        \n        // Re-attach delete listeners\n        document.querySelectorAll('.taskDelete button').forEach(button => {\n            button.addEventListener('click', (e) => {\n                const taskIndex = e.target.getAttribute('data-index');\n                this.removeTask(taskIndex);\n            });\n        });\n    }\n\n}\n\n\n//# sourceURL=webpack://todolist/./src/displayTasks.js?");

/***/ }),

/***/ "./src/headerUpdater.js":
/*!******************************!*\
  !*** ./src/headerUpdater.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerUpdate: () => (/* binding */ headerUpdate)\n/* harmony export */ });\nfunction headerUpdate(){\n    const headerSpan=document.querySelector('.taskContainerHeader span');\n\n    const sidebarItems=document.querySelectorAll('.sidebarItem');\n\n    sidebarItems.forEach(item =>{\n        item.addEventListener('click',function(){\n\n            const sidebarText=this.textContent.trim();\n\n            headerSpan.textContent=sidebarText;\n        });\n    });\n\n}\n\n//# sourceURL=webpack://todolist/./src/headerUpdater.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _headerUpdater_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerUpdater.js */ \"./src/headerUpdater.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTask.js */ \"./src/addTask.js\");\n/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTasks.js */ \"./src/displayTasks.js\");\n/* harmony import */ var _processInputs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processInputs.js */ \"./src/processInputs.js\");\n/* harmony import */ var _CategoryManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CategoryManager.js */ \"./src/CategoryManager.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_headerUpdater_js__WEBPACK_IMPORTED_MODULE_1__.headerUpdate)();\n\n//init task item array\nlet taskArray=[];\n\n// select all elements needed for input into classes\n\n//addDisplayClass\nconst formElement = document.querySelector('#form');\nconst formContainer = document.querySelector('#newEntry');\nconst taskAdder = document.querySelector('#taskAdder');\nconst darkenElement = document.querySelector('#darken');\n\n//processInputs Class\nconst taskInput = document.querySelector('#task');\nconst descriptionInput = document.querySelector('#description');\nconst dateInput = document.querySelector('input[type=\"date\"]');\nconst dropdownInput = document.querySelector('#projectDropdown');\n\n//category class\nconst addCategoryButton = document.getElementById('addCategoryButton');\nconst categoryPopup = document.getElementById('categoryPopup');\nconst newCategoryInput = document.getElementById('newCategoryInput');\nconst submitCategoryButton = document.getElementById('submitCategoryButton');\nconst projectDropdown = document.getElementById('projectDropdown');\n\n// set up objects from our class\nconst display = new _addTask_js__WEBPACK_IMPORTED_MODULE_2__.addDisplay(formElement, formContainer,taskAdder, darkenElement);\nconst inputProcessor = new _processInputs_js__WEBPACK_IMPORTED_MODULE_4__.processInputs(taskInput, descriptionInput, dateInput, dropdownInput);\nconst taskDisplay = new _displayTasks_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks(taskArray);\nconst categoryManager = new _CategoryManager_js__WEBPACK_IMPORTED_MODULE_5__.CategoryManager(darkenElement, addCategoryButton, categoryPopup, newCategoryInput, submitCategoryButton, projectDropdown, taskDisplay); \n// event listener for form submit\nformElement.addEventListener('submit', (e) => {\n    e.preventDefault(); // Prevent form from refreshing page\n\n    // Get the task data from the input processor\n    const taskData = inputProcessor.getInputData();\n    \n    // If valid task data, add it to the task display\n    if (taskData) {\n        taskDisplay.addTask(taskData);\n    }\n});\n\ndocument.getElementById('filterToday').addEventListener('click', () => {\n    taskDisplay.setFilter('today');\n});\n\ndocument.getElementById('filterWeek').addEventListener('click', () => {\n    taskDisplay.setFilter('week');\n});\n\ndocument.getElementById('filterAll').addEventListener('click', () => {\n    taskDisplay.setFilter('all');\n});\n\n\nconst defaultCategories = document.querySelectorAll('.categoryItem');\ndefaultCategories.forEach(categoryItem => {\n    categoryItem.addEventListener('click', () => {\n        const categoryName = categoryItem.querySelector('span').textContent.trim(); \n        categoryManager.filterTasksByCategory(categoryName);\n    });\n});\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/processInputs.js":
/*!******************************!*\
  !*** ./src/processInputs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   processInputs: () => (/* binding */ processInputs)\n/* harmony export */ });\nclass processInputs{\n\n    constructor(taskInput,descriptionInput,dateInput,dropdownInput){\n        this.taskInput=taskInput;\n        this.descriptionInput=descriptionInput;\n        this.dateInput=dateInput;\n        this.dropdownInput=dropdownInput;\n    }\n\n    getInputData(){\n        const task=this.taskInput.value.trim();\n        const description=this.descriptionInput.value.trim();\n        const dateVal=this.dateInput.value;\n        const dropdownVal=this.dropdownInput.value;\n\n        if(!task){\n            alert('Please name the task');\n            return null;\n        }\n\n        this.resetInputs()\n\n        return{task,description,dateVal,dropdownVal}\n    }\n\n    resetInputs(){\n        this.taskInput.value='';\n        this.descriptionInput.value='';\n        this.dateInput.value='';\n        this.dropdownInput.value='';\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/processInputs.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;