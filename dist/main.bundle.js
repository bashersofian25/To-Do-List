/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: grid;
    grid-template-columns: 1.5fr 8fr;
    grid-template-rows: 1fr 8fr;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100wh;
    font-family: 'Courier New', Courier, monospace;
}
#content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c0b0a0;
}
#big-card {
    margin: 20px;
    border-radius: 5px;
    background-color: white;
    width: 80%;
    height: 80%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#header {
    grid-column: 2;
    grid-row: 1;
    background-color: #e83c38;
    display: flex;
    align-items: center;
    justify-content: center;
}
#side-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row: 1/3;
    grid-column: 1;
    background-color: #322c38;
    padding-top: 60px;
    gap: 100px;
}

#logo {
    width: 7em;
    height: auto;
}

#nav button {
    border-radius: 30px;
    padding: 20px;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    background-color: #e83c38;

}
#nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

#content{
    display: flex;
    flex-direction: column;
}

.dialog-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.dialog {
    border-radius: 20px;
    border: 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    align-self: center;
    justify-content: center;
    background-color: #322c38;
    color: white;

}

#big-card {
    padding: 20px;
    overflow-y: auto;
    height: 700px;
}

.add {
    width: 150px;
    font-family: inherit;
    font-size: 2em;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    border: 0;
    background-color: #e83c38;
}

.add:hover {
    opacity: 50%;
    color: white;
}
.text-field {
    display: flex;
    align-items: center;
    gap: 20px;

}
#task, #description {
    width: 100%;
    height: 1.3em;
    border-radius: 10px;
    font-size: inherit;
    font-family: inherit;
}

#confirm {
    font-family: inherit;
    font-size: inherit;
    background-color:#e83c38;
    border: 0;
    border-radius: 30px;
    padding: 10px;
}

#cancel {
    font-size: inherit;
    font-family: inherit;
    background-color: #e83c38;
    border: 0;
    border-radius: 30px;
    padding: 10px;
}

#big-card::-webkit-scrollbar {
    width: 12px;
}

#big-card::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

#big-card::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 12px 0 6px grey; 
}

.area {
    list-style: none;
    display: flex;
    align-items: flex-start;
    gap: 30px;
    height: 100px;
}

.area textarea {
    width: 50px;
    height: 300px;
}
.radio {
    list-style: none;
}

.buttons {
    display: flex;
    gap: 20px;
}

.buttons button {
    padding: 10px;
    border: 0;
    border-radius: 15px;
    background-color: #e83c38;
}

button.task-done {
    background-color: green;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gCAAgC;IAChC,2BAA2B;IAC3B,UAAU;IACV,SAAS;IACT,aAAa;IACb,YAAY;IACZ,8CAA8C;AAClD;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;IACV,WAAW;IACX,uLAAuL;AAC3L;;AAEA;IACI,cAAc;IACd,WAAW;IACX,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;;AAE7B;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,4CAA4C;IAC5C,kBAAkB;IAClB,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;AACA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,wBAAwB;IACxB,SAAS;IACT,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,SAAS;IACT,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iDAAiD;IACjD,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["body {\n    display: grid;\n    grid-template-columns: 1.5fr 8fr;\n    grid-template-rows: 1fr 8fr;\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100wh;\n    font-family: 'Courier New', Courier, monospace;\n}\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #c0b0a0;\n}\n#big-card {\n    margin: 20px;\n    border-radius: 5px;\n    background-color: white;\n    width: 80%;\n    height: 80%;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n#header {\n    grid-column: 2;\n    grid-row: 1;\n    background-color: #e83c38;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#side-bar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-row: 1/3;\n    grid-column: 1;\n    background-color: #322c38;\n    padding-top: 60px;\n    gap: 100px;\n}\n\n#logo {\n    width: 7em;\n    height: auto;\n}\n\n#nav button {\n    border-radius: 30px;\n    padding: 20px;\n    border: 0;\n    font-family: inherit;\n    font-size: inherit;\n    background-color: #e83c38;\n\n}\n#nav {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n}\n\n.dialog-list {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.dialog {\n    border-radius: 20px;\n    border: 0px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    align-self: center;\n    justify-content: center;\n    background-color: #322c38;\n    color: white;\n\n}\n\n#big-card {\n    padding: 20px;\n    overflow-y: auto;\n    height: 700px;\n}\n\n.add {\n    width: 150px;\n    font-family: inherit;\n    font-size: 2em;\n    margin: 10px;\n    padding: 10px;\n    border-radius: 20px;\n    border: 0;\n    background-color: #e83c38;\n}\n\n.add:hover {\n    opacity: 50%;\n    color: white;\n}\n.text-field {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n\n}\n#task, #description {\n    width: 100%;\n    height: 1.3em;\n    border-radius: 10px;\n    font-size: inherit;\n    font-family: inherit;\n}\n\n#confirm {\n    font-family: inherit;\n    font-size: inherit;\n    background-color:#e83c38;\n    border: 0;\n    border-radius: 30px;\n    padding: 10px;\n}\n\n#cancel {\n    font-size: inherit;\n    font-family: inherit;\n    background-color: #e83c38;\n    border: 0;\n    border-radius: 30px;\n    padding: 10px;\n}\n\n#big-card::-webkit-scrollbar {\n    width: 12px;\n}\n\n#big-card::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n    border-radius: 10px;\n}\n\n#big-card::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 12px 0 6px grey; \n}\n\n.area {\n    list-style: none;\n    display: flex;\n    align-items: flex-start;\n    gap: 30px;\n    height: 100px;\n}\n\n.area textarea {\n    width: 50px;\n    height: 300px;\n}\n.radio {\n    list-style: none;\n}\n\n.buttons {\n    display: flex;\n    gap: 20px;\n}\n\n.buttons button {\n    padding: 10px;\n    border: 0;\n    border-radius: 15px;\n    background-color: #e83c38;\n}\n\nbutton.task-done {\n    background-color: green;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Components/addButton.js":
/*!*************************************!*\
  !*** ./src/Components/addButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddButton: () => (/* binding */ createAddButton)
/* harmony export */ });
const createAddButton = () => {
    const addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.classList.add('add');
    addButton.addEventListener('click', () => {
        document.querySelector("dialog").show();
    });

    return addButton;
};

/***/ }),

/***/ "./src/Components/bigCard.js":
/*!***********************************!*\
  !*** ./src/Components/bigCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBigCard: () => (/* binding */ createBigCard)
/* harmony export */ });
/* harmony import */ var _Components_listItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/listItem */ "./src/Components/listItem.js");



const createBigCard = (dailyList) => {
    const bigCard = document.createElement('div');
    bigCard.setAttribute('id', 'big-card');
    const cards = dailyList.map(item => {
        return (0,_Components_listItem__WEBPACK_IMPORTED_MODULE_0__.createListItem)(item);
    });
    cards.forEach(item => {
        bigCard.append(item); 
    });

    return bigCard;
};

/***/ }),

/***/ "./src/Components/listItem.js":
/*!************************************!*\
  !*** ./src/Components/listItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListItem: () => (/* binding */ createListItem)
/* harmony export */ });
/* harmony import */ var _Lists_dailyList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Lists/dailyList */ "./src/Lists/dailyList.js");
/* harmony import */ var _Lists_monthlyList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Lists/monthlyList */ "./src/Lists/monthlyList.js");
/* harmony import */ var _Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lists/weeklyList */ "./src/Lists/weeklyList.js");






const createListItem = (Item) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.setAttribute('id', `${Item.id}`);
    item.classList.add(`${Item.type}`);
    const task = document.createElement('h2');
    task.innerText = Item.task;
    const description = document.createElement('p');
    description.innerText = Item.description;
    
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const deleteButton = document.createElement('button');
    const doneButton = document.createElement('button');

    if(Item.done){
        doneButton.innerText = "Done";
        doneButton.classList.add('task-done');
       
    }else{
        doneButton.innerText = "Not Done";
    }
    
  
    
    deleteButton.innerText = "delete";


    doneButton.addEventListener('click', (e) => {
        e.target.classList.toggle('task-done');

        if(e.target.innerText == 'Done'){
            e.target.innerText = "Not Done";
        }else {
            e.target.innerText = 'Done';
        }

        const type = e.target.parentElement.parentElement.classList[1];
        const id  = e.target.parentElement.parentElement.id;

        if(type == "monthly"){
            (0,_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_1__.changeForMonthly)(id);
            
        }else if (type == "weekly"){
            (0,_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__.changeForWeekly)(id);
        }else {
            (0,_Lists_dailyList__WEBPACK_IMPORTED_MODULE_0__.changeForDaily)(id);

        }

        localStorage.setItem("monthlyList", JSON.stringify(_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_1__.monthlyList));
        localStorage.setItem("weeklyList", JSON.stringify(_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__.weeklyList));
        localStorage.setItem("dailyList", JSON.stringify(_Lists_dailyList__WEBPACK_IMPORTED_MODULE_0__.dailyList));

    });
    deleteButton.addEventListener('click', (e) => {

        const type = e.target.parentElement.parentElement.classList[1];
        const id  = e.target.parentElement.parentElement.id;

        if(type == "monthly"){
            (0,_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_1__.deleteFromMonthly)(id);
            
        }else if (type == "weekly"){
            (0,_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__.deleteFromWeekly)(id);
        }else {
            (0,_Lists_dailyList__WEBPACK_IMPORTED_MODULE_0__.deleteFromDaily)(id);

        }
        
        e.target.parentElement.parentElement.remove();

        localStorage.setItem("monthlyList", JSON.stringify(_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_1__.monthlyList));
        localStorage.setItem("weeklyList", JSON.stringify(_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__.weeklyList));
        localStorage.setItem("dailyList", JSON.stringify(_Lists_dailyList__WEBPACK_IMPORTED_MODULE_0__.dailyList));
        
    });


    buttons.append(doneButton);
    buttons.append(deleteButton);
    item.append(task);
    item.append(description);
    item.append(buttons);
    item.append(document.createElement("hr"));

    return item;
};

/***/ }),

/***/ "./src/Lists/dailyList.js":
/*!********************************!*\
  !*** ./src/Lists/dailyList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendToDailyList: () => (/* binding */ appendToDailyList),
/* harmony export */   changeForDaily: () => (/* binding */ changeForDaily),
/* harmony export */   dailyList: () => (/* binding */ dailyList),
/* harmony export */   deleteFromDaily: () => (/* binding */ deleteFromDaily),
/* harmony export */   loadDaily: () => (/* binding */ loadDaily)
/* harmony export */ });
let dailyList = []; 


const loadDaily = () => {
    dailyList = JSON.parse(localStorage.getItem("dailyList"));
};

const appendToDailyList = (item) => {
    dailyList.push(item);
};

const deleteFromDaily = (id) => {
    dailyList = dailyList.filter((item) => id != item.id);
    console.log(dailyList);
};

const changeForDaily = (id) => {
    dailyList  = dailyList.map((item) => {
        if(id == item.id){
            item.done = !item.done;
        }
        return item;
    });
    console.log(dailyList);
};

/***/ }),

/***/ "./src/Lists/monthlyList.js":
/*!**********************************!*\
  !*** ./src/Lists/monthlyList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendToMonthlyList: () => (/* binding */ appendToMonthlyList),
/* harmony export */   changeForMonthly: () => (/* binding */ changeForMonthly),
/* harmony export */   deleteFromMonthly: () => (/* binding */ deleteFromMonthly),
/* harmony export */   loadMonthly: () => (/* binding */ loadMonthly),
/* harmony export */   monthlyList: () => (/* binding */ monthlyList)
/* harmony export */ });
let monthlyList = [];

const appendToMonthlyList = (item) => {
    monthlyList.push(item);
};
const loadMonthly = () => {
    monthlyList = JSON.parse(localStorage.getItem("monthlyList"));
};

const deleteFromMonthly = (id) => {
    monthlyList = monthlyList.filter((item) => id != item.id);
};

const changeForMonthly = (id) => {
    monthlyList  = monthlyList.map((item) => {
        if(id == item.id){
            item.done = !item.done;
        }
        return item;
    });
}

/***/ }),

/***/ "./src/Lists/weeklyList.js":
/*!*********************************!*\
  !*** ./src/Lists/weeklyList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendToWeeklyList: () => (/* binding */ appendToWeeklyList),
/* harmony export */   changeForWeekly: () => (/* binding */ changeForWeekly),
/* harmony export */   deleteFromWeekly: () => (/* binding */ deleteFromWeekly),
/* harmony export */   loadWeekly: () => (/* binding */ loadWeekly),
/* harmony export */   weeklyList: () => (/* binding */ weeklyList)
/* harmony export */ });
let weeklyList = [];

const appendToWeeklyList = (item) => {
    weeklyList.push(item);
};
const loadWeekly = () => {
    weeklyList = JSON.parse(localStorage.getItem("weeklyList"));
};

const deleteFromWeekly = (id) => {
    weeklyList = weeklyList.filter((item) => id != item.id);
};

const changeForWeekly = (id) => {
    weeklyList  = weeklyList.map((item) => {
        if(id == item.id){
            item.done = !item.done;
        }
        return item;
    });
}

/***/ }),

/***/ "./src/Pages/addingPage.js":
/*!*********************************!*\
  !*** ./src/Pages/addingPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addingPage: () => (/* binding */ addingPage)
/* harmony export */ });
/* harmony import */ var _Components_addButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/addButton */ "./src/Components/addButton.js");
/* harmony import */ var _Components_bigCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/bigCard */ "./src/Components/bigCard.js");
/* harmony import */ var _Lists_monthlyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lists/monthlyList */ "./src/Lists/monthlyList.js");



const addingPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = (0,_Components_bigCard__WEBPACK_IMPORTED_MODULE_1__.createBigCard)([]);
        const addButton = (0,_Components_addButton__WEBPACK_IMPORTED_MODULE_0__.createAddButton)();
        bigCard.innerHTML = "<p>Our approach is separating goals to monthly, weekly and daily.<br>This provides flexibility in planning.</p>"
        content.append(addButton);
        content.append(bigCard);
       
    };
    return { renderPage }
})();

/***/ }),

/***/ "./src/Pages/dailyPage.js":
/*!********************************!*\
  !*** ./src/Pages/dailyPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dailyPage: () => (/* binding */ dailyPage)
/* harmony export */ });
/* harmony import */ var _Lists_dailyList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Lists/dailyList */ "./src/Lists/dailyList.js");
/* harmony import */ var _Components_addButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/addButton */ "./src/Components/addButton.js");
/* harmony import */ var _Components_bigCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/bigCard */ "./src/Components/bigCard.js");




const dailyPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = (0,_Components_bigCard__WEBPACK_IMPORTED_MODULE_2__.createBigCard)(_Lists_dailyList__WEBPACK_IMPORTED_MODULE_0__.dailyList);
        content.append(bigCard);
    };
    return { renderPage }
})();

/***/ }),

/***/ "./src/Pages/monthlyPage.js":
/*!**********************************!*\
  !*** ./src/Pages/monthlyPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   monthlyPage: () => (/* binding */ monthlyPage)
/* harmony export */ });
/* harmony import */ var _Components_addButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/addButton */ "./src/Components/addButton.js");
/* harmony import */ var _Components_bigCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/bigCard */ "./src/Components/bigCard.js");
/* harmony import */ var _Lists_monthlyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lists/monthlyList */ "./src/Lists/monthlyList.js");




const monthlyPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = (0,_Components_bigCard__WEBPACK_IMPORTED_MODULE_1__.createBigCard)(_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_2__.monthlyList);
        content.append(bigCard);
    };
    return { renderPage }
})();

/***/ }),

/***/ "./src/Pages/weeklyPage.js":
/*!*********************************!*\
  !*** ./src/Pages/weeklyPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weeklyPage: () => (/* binding */ weeklyPage)
/* harmony export */ });
/* harmony import */ var _Components_addButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/addButton */ "./src/Components/addButton.js");
/* harmony import */ var _Components_bigCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/bigCard */ "./src/Components/bigCard.js");
/* harmony import */ var _Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lists/weeklyList */ "./src/Lists/weeklyList.js");




const weeklyPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = (0,_Components_bigCard__WEBPACK_IMPORTED_MODULE_1__.createBigCard)(_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__.weeklyList);
        content.append(bigCard);
    };
    return { renderPage }
})();

/***/ }),

/***/ "./src/handelAdding.js":
/*!*****************************!*\
  !*** ./src/handelAdding.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItem: () => (/* binding */ addItem)
/* harmony export */ });
/* harmony import */ var _Lists_monthlyList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lists/monthlyList */ "./src/Lists/monthlyList.js");
/* harmony import */ var _Lists_dailyList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lists/dailyList */ "./src/Lists/dailyList.js");
/* harmony import */ var _Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lists/weeklyList */ "./src/Lists/weeklyList.js");





const addItem = () => {
    const item = {};
    const taskName = document.getElementById('task');
    const taskDescription = document.getElementById('description');
    const radio = document.getElementsByName('type');
  
    item.task = taskName.value;
    item.description = taskDescription.value;
    item.done = false;
    item.id = Date.now();
    if(radio[0].checked){
        item.type = "monthly";
        (0,_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_0__.appendToMonthlyList)(item);
    }else if(radio[1].checked){
        item.type = "weekly";
        (0,_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_2__.appendToWeeklyList)(item);
    }else {
        item.type = "daily";
        (0,_Lists_dailyList__WEBPACK_IMPORTED_MODULE_1__.appendToDailyList)(item);
    }
};





/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea6c16cb278b2fd84172.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _Pages_dailyPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/dailyPage */ "./src/Pages/dailyPage.js");
/* harmony import */ var _Pages_monthlyPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/monthlyPage */ "./src/Pages/monthlyPage.js");
/* harmony import */ var _Lists_weeklyList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lists/weeklyList */ "./src/Lists/weeklyList.js");
/* harmony import */ var _Lists_monthlyList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lists/monthlyList */ "./src/Lists/monthlyList.js");
/* harmony import */ var _Lists_dailyList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Lists/dailyList */ "./src/Lists/dailyList.js");
/* harmony import */ var _handelAdding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handelAdding */ "./src/handelAdding.js");
/* harmony import */ var _Pages_weeklyPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/weeklyPage */ "./src/Pages/weeklyPage.js");
/* harmony import */ var _Pages_addingPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/addingPage */ "./src/Pages/addingPage.js");













const loadStorage = () => {
    try{
        (0,_Lists_dailyList__WEBPACK_IMPORTED_MODULE_6__.loadDaily)();
        (0,_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_4__.loadWeekly)();
        (0,_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_5__.loadMonthly)();
    }catch (e) {
        console.log(e);
    }
    
};
loadStorage();
const confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_handelAdding__WEBPACK_IMPORTED_MODULE_7__.addItem)();
    dialog.close();
});

const dialog = document.querySelector('.dialog');


const cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

_Pages_addingPage__WEBPACK_IMPORTED_MODULE_9__.addingPage.renderPage([]);
const monthly = document.getElementById('monthly');
monthly.addEventListener('click', (e) => {
    
    _Pages_monthlyPage__WEBPACK_IMPORTED_MODULE_3__.monthlyPage.renderPage(_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_5__.monthlyList);
    document.querySelector('header h1').innerText = "Monthly";
    localStorage.setItem("monthlyList", JSON.stringify(_Lists_monthlyList__WEBPACK_IMPORTED_MODULE_5__.monthlyList));

});

const weekly = document.getElementById('weekly');
weekly.addEventListener('click', (e) => {
    _Pages_weeklyPage__WEBPACK_IMPORTED_MODULE_8__.weeklyPage.renderPage(_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_4__.weeklyList);
    document.querySelector('header h1').innerText = "Weekly";
    localStorage.setItem("weeklyList", JSON.stringify(_Lists_weeklyList__WEBPACK_IMPORTED_MODULE_4__.weeklyList));
});

const daily = document.getElementById('daily');
daily.addEventListener('click', (e) => {
    _Pages_dailyPage__WEBPACK_IMPORTED_MODULE_2__.dailyPage.renderPage(_Lists_dailyList__WEBPACK_IMPORTED_MODULE_6__.dailyList);
    document.querySelector('header h1').innerText = "Daily";
    localStorage.setItem("dailyList", JSON.stringify(_Lists_dailyList__WEBPACK_IMPORTED_MODULE_6__.dailyList));
    console.log(localStorage.getItem("dailyList"));
    
});

const add = document.getElementById("add");
add.addEventListener('click', (e) => {
    _Pages_addingPage__WEBPACK_IMPORTED_MODULE_9__.addingPage.renderPage([]);
    document.querySelector('header h1').innerText = "perfectodo, perfect To-Do listing!";
});


document.getElementById('logo').src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7QUFDVTtBQUNJO0FBQ1U7QUFDRztBQUNOO0FBQ2hCO0FBQ087QUFDQTs7OztBQUloRDtBQUNBO0FBQ0EsUUFBUSwyREFBUztBQUNqQixRQUFRLDZEQUFVO0FBQ2xCLFFBQVEsK0RBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFPO0FBQ1g7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQseURBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFXLFlBQVksMkRBQVc7QUFDdEM7QUFDQSx1REFBdUQsMkRBQVc7O0FBRWxFLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUkseURBQVUsWUFBWSx5REFBVTtBQUNwQztBQUNBLHNEQUFzRCx5REFBVTtBQUNoRSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHVEQUFTLFlBQVksdURBQVM7QUFDbEM7QUFDQSxxREFBcUQsdURBQVM7QUFDOUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZDtBQUNBLENBQUM7OztBQUdELHNDQUFzQyw2Q0FBSSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvYWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9iaWdDYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQ29tcG9uZW50cy9saXN0SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xpc3RzL2RhaWx5TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xpc3RzL21vbnRobHlMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvTGlzdHMvd2Vla2x5TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1BhZ2VzL2FkZGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9QYWdlcy9kYWlseVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9QYWdlcy9tb250aGx5UGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1BhZ2VzL3dlZWtseVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9oYW5kZWxBZGRpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDhmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwd2g7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwYjBhMDtcbn1cbiNiaWctY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcbn1cblxuI2hlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jc2lkZS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmMzODtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBnYXA6IDEwMHB4O1xufVxuXG4jbG9nbyB7XG4gICAgd2lkdGg6IDdlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbiNuYXYgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xuXG59XG4jbmF2IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMwcHg7XG59XG5cbiNjb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRpYWxvZy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uZGlhbG9nIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIyYzM4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4jYmlnLWNhcmQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6IDcwMHB4O1xufVxuXG4uYWRkIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcbn1cblxuLmFkZDpob3ZlciB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50ZXh0LWZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuXG59XG4jdGFzaywgI2Rlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEuM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4jY29uZmlybSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2U4M2MzODtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jY2FuY2VsIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jYmlnLWNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuI2JpZy1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2JpZy1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDEycHggMCA2cHggZ3JleTsgXG59XG5cbi5hcmVhIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5hcmVhIHRleHRhcmVhIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuLnJhZGlvIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xufVxuXG5idXR0b24udGFzay1kb25lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUxBQXVMO0FBQzNMOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7QUFFYjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA4ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwd2g7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGIwYTA7XFxufVxcbiNiaWctY2FyZCB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNzaWRlLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIyYzM4O1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICB3aWR0aDogN2VtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNuYXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xcblxcbn1cXG4jbmF2IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRpYWxvZy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZGlhbG9nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIyYzM4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNiaWctY2FyZCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogNzAwcHg7XFxufVxcblxcbi5hZGQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XFxufVxcblxcbi5hZGQ6aG92ZXIge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRleHQtZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcbiN0YXNrLCAjZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxLjNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI2NvbmZpcm0ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlODNjMzg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2NhbmNlbCB7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2JpZy1jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbn1cXG5cXG4jYmlnLWNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNiaWctY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDEycHggMCA2cHggZ3JleTsgXFxufVxcblxcbi5hcmVhIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMzBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmFyZWEgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLnJhZGlvIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcXG59XFxuXFxuYnV0dG9uLnRhc2stZG9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIitcIjtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkJyk7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpLnNob3coKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhZGRCdXR0b247XG59OyIsIlxuaW1wb3J0IHsgY3JlYXRlTGlzdEl0ZW0gfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9saXN0SXRlbVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQmlnQ2FyZCA9IChkYWlseUxpc3QpID0+IHtcbiAgICBjb25zdCBiaWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmlnQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JpZy1jYXJkJyk7XG4gICAgY29uc3QgY2FyZHMgPSBkYWlseUxpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gY3JlYXRlTGlzdEl0ZW0oaXRlbSk7XG4gICAgfSk7XG4gICAgY2FyZHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgYmlnQ2FyZC5hcHBlbmQoaXRlbSk7IFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJpZ0NhcmQ7XG59OyIsIlxuaW1wb3J0IHsgY2hhbmdlRm9yRGFpbHksIGRlbGV0ZUZyb21EYWlseSwgZGFpbHlMaXN0fSBmcm9tIFwiLi4vTGlzdHMvZGFpbHlMaXN0XCI7XG5pbXBvcnQgeyBjaGFuZ2VGb3JNb250aGx5LCBkZWxldGVGcm9tTW9udGhseSwgbW9udGhseUxpc3QgfSBmcm9tIFwiLi4vTGlzdHMvbW9udGhseUxpc3RcIjtcbmltcG9ydCB7IGNoYW5nZUZvcldlZWtseSwgZGVsZXRlRnJvbVdlZWtseSwgd2Vla2x5TGlzdCB9IGZyb20gXCIuLi9MaXN0cy93ZWVrbHlMaXN0XCI7XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxpc3RJdGVtID0gKEl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7SXRlbS5pZH1gKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoYCR7SXRlbS50eXBlfWApO1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRhc2suaW5uZXJUZXh0ID0gSXRlbS50YXNrO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IEl0ZW0uZGVzY3JpcHRpb247XG4gICAgXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGlmKEl0ZW0uZG9uZSl7XG4gICAgICAgIGRvbmVCdXR0b24uaW5uZXJUZXh0ID0gXCJEb25lXCI7XG4gICAgICAgIGRvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1kb25lJyk7XG4gICAgICAgXG4gICAgfWVsc2V7XG4gICAgICAgIGRvbmVCdXR0b24uaW5uZXJUZXh0ID0gXCJOb3QgRG9uZVwiO1xuICAgIH1cbiAgICBcbiAgXG4gICAgXG4gICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XG5cblxuICAgIGRvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWRvbmUnKTtcblxuICAgICAgICBpZihlLnRhcmdldC5pbm5lclRleHQgPT0gJ0RvbmUnKXtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9IFwiTm90IERvbmVcIjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ0RvbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMV07XG4gICAgICAgIGNvbnN0IGlkICA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcblxuICAgICAgICBpZih0eXBlID09IFwibW9udGhseVwiKXtcbiAgICAgICAgICAgIGNoYW5nZUZvck1vbnRobHkoaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmICh0eXBlID09IFwid2Vla2x5XCIpe1xuICAgICAgICAgICAgY2hhbmdlRm9yV2Vla2x5KGlkKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlRm9yRGFpbHkoaWQpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vbnRobHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2Vla2x5TGlzdFwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFpbHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuXG4gICAgfSk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICBjb25zdCB0eXBlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgICAgY29uc3QgaWQgID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuXG4gICAgICAgIGlmKHR5cGUgPT0gXCJtb250aGx5XCIpe1xuICAgICAgICAgICAgZGVsZXRlRnJvbU1vbnRobHkoaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmICh0eXBlID09IFwid2Vla2x5XCIpe1xuICAgICAgICAgICAgZGVsZXRlRnJvbVdlZWtseShpZCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZUZyb21EYWlseShpZCk7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9udGhseUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3ZWVrbHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYWlseUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG4gICAgICAgIFxuICAgIH0pO1xuXG5cbiAgICBidXR0b25zLmFwcGVuZChkb25lQnV0dG9uKTtcbiAgICBidXR0b25zLmFwcGVuZChkZWxldGVCdXR0b24pO1xuICAgIGl0ZW0uYXBwZW5kKHRhc2spO1xuICAgIGl0ZW0uYXBwZW5kKGRlc2NyaXB0aW9uKTtcbiAgICBpdGVtLmFwcGVuZChidXR0b25zKTtcbiAgICBpdGVtLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIikpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59OyIsImV4cG9ydCBsZXQgZGFpbHlMaXN0ID0gW107IFxuXG5cbmV4cG9ydCBjb25zdCBsb2FkRGFpbHkgPSAoKSA9PiB7XG4gICAgZGFpbHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhaWx5TGlzdFwiKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwZW5kVG9EYWlseUxpc3QgPSAoaXRlbSkgPT4ge1xuICAgIGRhaWx5TGlzdC5wdXNoKGl0ZW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21EYWlseSA9IChpZCkgPT4ge1xuICAgIGRhaWx5TGlzdCA9IGRhaWx5TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGlkICE9IGl0ZW0uaWQpO1xuICAgIGNvbnNvbGUubG9nKGRhaWx5TGlzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlRm9yRGFpbHkgPSAoaWQpID0+IHtcbiAgICBkYWlseUxpc3QgID0gZGFpbHlMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZihpZCA9PSBpdGVtLmlkKXtcbiAgICAgICAgICAgIGl0ZW0uZG9uZSA9ICFpdGVtLmRvbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZGFpbHlMaXN0KTtcbn07IiwiZXhwb3J0IGxldCBtb250aGx5TGlzdCA9IFtdO1xuXG5leHBvcnQgY29uc3QgYXBwZW5kVG9Nb250aGx5TGlzdCA9IChpdGVtKSA9PiB7XG4gICAgbW9udGhseUxpc3QucHVzaChpdGVtKTtcbn07XG5leHBvcnQgY29uc3QgbG9hZE1vbnRobHkgPSAoKSA9PiB7XG4gICAgbW9udGhseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9udGhseUxpc3RcIikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21Nb250aGx5ID0gKGlkKSA9PiB7XG4gICAgbW9udGhseUxpc3QgPSBtb250aGx5TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGlkICE9IGl0ZW0uaWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUZvck1vbnRobHkgPSAoaWQpID0+IHtcbiAgICBtb250aGx5TGlzdCAgPSBtb250aGx5TGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYoaWQgPT0gaXRlbS5pZCl7XG4gICAgICAgICAgICBpdGVtLmRvbmUgPSAhaXRlbS5kb25lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xufSIsImV4cG9ydCBsZXQgd2Vla2x5TGlzdCA9IFtdO1xuXG5leHBvcnQgY29uc3QgYXBwZW5kVG9XZWVrbHlMaXN0ID0gKGl0ZW0pID0+IHtcbiAgICB3ZWVrbHlMaXN0LnB1c2goaXRlbSk7XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRXZWVrbHkgPSAoKSA9PiB7XG4gICAgd2Vla2x5TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3ZWVrbHlMaXN0XCIpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tV2Vla2x5ID0gKGlkKSA9PiB7XG4gICAgd2Vla2x5TGlzdCA9IHdlZWtseUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpZCAhPSBpdGVtLmlkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGb3JXZWVrbHkgPSAoaWQpID0+IHtcbiAgICB3ZWVrbHlMaXN0ICA9IHdlZWtseUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmKGlkID09IGl0ZW0uaWQpe1xuICAgICAgICAgICAgaXRlbS5kb25lID0gIWl0ZW0uZG9uZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVBZGRCdXR0b24gfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9hZGRCdXR0b25cIjtcbmltcG9ydCB7IGNyZWF0ZUJpZ0NhcmQgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9iaWdDYXJkXCI7XG5pbXBvcnQgeyBtb250aGx5TGlzdCB9IGZyb20gXCIuLi9MaXN0cy9tb250aGx5TGlzdFwiO1xuZXhwb3J0IGNvbnN0IGFkZGluZ1BhZ2UgPSAoZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCBiaWdDYXJkID0gY3JlYXRlQmlnQ2FyZChbXSk7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGNyZWF0ZUFkZEJ1dHRvbigpO1xuICAgICAgICBiaWdDYXJkLmlubmVySFRNTCA9IFwiPHA+T3VyIGFwcHJvYWNoIGlzIHNlcGFyYXRpbmcgZ29hbHMgdG8gbW9udGhseSwgd2Vla2x5IGFuZCBkYWlseS48YnI+VGhpcyBwcm92aWRlcyBmbGV4aWJpbGl0eSBpbiBwbGFubmluZy48L3A+XCJcbiAgICAgICAgY29udGVudC5hcHBlbmQoYWRkQnV0dG9uKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoYmlnQ2FyZCk7XG4gICAgICAgXG4gICAgfTtcbiAgICByZXR1cm4geyByZW5kZXJQYWdlIH1cbn0pKCk7IiwiaW1wb3J0IHsgZGFpbHlMaXN0IH0gZnJvbSBcIi4uL0xpc3RzL2RhaWx5TGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlQWRkQnV0dG9uIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYWRkQnV0dG9uXCI7XG5pbXBvcnQgeyBjcmVhdGVCaWdDYXJkIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYmlnQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgZGFpbHlQYWdlID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYmlnQ2FyZCA9IGNyZWF0ZUJpZ0NhcmQoZGFpbHlMaXN0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoYmlnQ2FyZCk7XG4gICAgfTtcbiAgICByZXR1cm4geyByZW5kZXJQYWdlIH1cbn0pKCk7IiwiXG5pbXBvcnQgeyBjcmVhdGVBZGRCdXR0b24gfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9hZGRCdXR0b25cIjtcbmltcG9ydCB7IGNyZWF0ZUJpZ0NhcmQgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9iaWdDYXJkXCI7XG5pbXBvcnQgeyBtb250aGx5TGlzdCB9IGZyb20gXCIuLi9MaXN0cy9tb250aGx5TGlzdFwiO1xuZXhwb3J0IGNvbnN0IG1vbnRobHlQYWdlID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYmlnQ2FyZCA9IGNyZWF0ZUJpZ0NhcmQobW9udGhseUxpc3QpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChiaWdDYXJkKTtcbiAgICB9O1xuICAgIHJldHVybiB7IHJlbmRlclBhZ2UgfVxufSkoKTsiLCJcbmltcG9ydCB7IGNyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gXCIuLi9Db21wb25lbnRzL2FkZEJ1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlQmlnQ2FyZCB9IGZyb20gXCIuLi9Db21wb25lbnRzL2JpZ0NhcmRcIjtcbmltcG9ydCB7IHdlZWtseUxpc3QgfSBmcm9tIFwiLi4vTGlzdHMvd2Vla2x5TGlzdFwiO1xuZXhwb3J0IGNvbnN0IHdlZWtseVBhZ2UgPSAoZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCBiaWdDYXJkID0gY3JlYXRlQmlnQ2FyZCh3ZWVrbHlMaXN0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoYmlnQ2FyZCk7XG4gICAgfTtcbiAgICByZXR1cm4geyByZW5kZXJQYWdlIH1cbn0pKCk7IiwiaW1wb3J0IHsgbW9udGhseUxpc3QsIGFwcGVuZFRvTW9udGhseUxpc3QgfSBmcm9tIFwiLi9MaXN0cy9tb250aGx5TGlzdFwiO1xuaW1wb3J0IHsgYXBwZW5kVG9EYWlseUxpc3QsIGRhaWx5TGlzdCB9IGZyb20gXCIuL0xpc3RzL2RhaWx5TGlzdFwiO1xuaW1wb3J0IHsgYXBwZW5kVG9XZWVrbHlMaXN0IH0gZnJvbSBcIi4vTGlzdHMvd2Vla2x5TGlzdFwiO1xuXG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSB7fTtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJyk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndHlwZScpO1xuICBcbiAgICBpdGVtLnRhc2sgPSB0YXNrTmFtZS52YWx1ZTtcbiAgICBpdGVtLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgIGl0ZW0uZG9uZSA9IGZhbHNlO1xuICAgIGl0ZW0uaWQgPSBEYXRlLm5vdygpO1xuICAgIGlmKHJhZGlvWzBdLmNoZWNrZWQpe1xuICAgICAgICBpdGVtLnR5cGUgPSBcIm1vbnRobHlcIjtcbiAgICAgICAgYXBwZW5kVG9Nb250aGx5TGlzdChpdGVtKTtcbiAgICB9ZWxzZSBpZihyYWRpb1sxXS5jaGVja2VkKXtcbiAgICAgICAgaXRlbS50eXBlID0gXCJ3ZWVrbHlcIjtcbiAgICAgICAgYXBwZW5kVG9XZWVrbHlMaXN0KGl0ZW0pO1xuICAgIH1lbHNlIHtcbiAgICAgICAgaXRlbS50eXBlID0gXCJkYWlseVwiO1xuICAgICAgICBhcHBlbmRUb0RhaWx5TGlzdChpdGVtKTtcbiAgICB9XG59O1xuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5wbmcnXG5pbXBvcnQgeyBkYWlseVBhZ2UgfSBmcm9tICcuL1BhZ2VzL2RhaWx5UGFnZSc7XG5pbXBvcnQgeyBtb250aGx5UGFnZSB9IGZyb20gJy4vUGFnZXMvbW9udGhseVBhZ2UnO1xuaW1wb3J0IHsgbG9hZFdlZWtseSwgd2Vla2x5TGlzdCB9IGZyb20gJy4vTGlzdHMvd2Vla2x5TGlzdCc7XG5pbXBvcnQgeyBsb2FkTW9udGhseSwgbW9udGhseUxpc3QgfSBmcm9tICcuL0xpc3RzL21vbnRobHlMaXN0JztcbmltcG9ydCB7IGxvYWREYWlseSwgZGFpbHlMaXN0IH0gZnJvbSAnLi9MaXN0cy9kYWlseUxpc3QnO1xuaW1wb3J0IHsgYWRkSXRlbSB9IGZyb20gJy4vaGFuZGVsQWRkaW5nJztcbmltcG9ydCB7IHdlZWtseVBhZ2UgfSBmcm9tICcuL1BhZ2VzL3dlZWtseVBhZ2UnO1xuaW1wb3J0IHsgYWRkaW5nUGFnZSB9IGZyb20gJy4vUGFnZXMvYWRkaW5nUGFnZSc7XG5cblxuXG5jb25zdCBsb2FkU3RvcmFnZSA9ICgpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIGxvYWREYWlseSgpO1xuICAgICAgICBsb2FkV2Vla2x5KCk7XG4gICAgICAgIGxvYWRNb250aGx5KCk7XG4gICAgfWNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgICBcbn07XG5sb2FkU3RvcmFnZSgpO1xuY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtJyk7XG5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkSXRlbSgpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2cnKTtcblxuXG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XG5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5hZGRpbmdQYWdlLnJlbmRlclBhZ2UoW10pO1xuY29uc3QgbW9udGhseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb250aGx5Jyk7XG5tb250aGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBcbiAgICBtb250aGx5UGFnZS5yZW5kZXJQYWdlKG1vbnRobHlMaXN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKS5pbm5lclRleHQgPSBcIk1vbnRobHlcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vbnRobHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG5cbn0pO1xuXG5jb25zdCB3ZWVrbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla2x5Jyk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHdlZWtseVBhZ2UucmVuZGVyUGFnZSh3ZWVrbHlMaXN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKS5pbm5lclRleHQgPSBcIldlZWtseVwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2Vla2x5TGlzdFwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG59KTtcblxuY29uc3QgZGFpbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKTtcbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkYWlseVBhZ2UucmVuZGVyUGFnZShkYWlseUxpc3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpLmlubmVyVGV4dCA9IFwiRGFpbHlcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhaWx5TGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhaWx5TGlzdFwiKSk7XG4gICAgXG59KTtcblxuY29uc3QgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIik7XG5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFkZGluZ1BhZ2UucmVuZGVyUGFnZShbXSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJykuaW5uZXJUZXh0ID0gXCJwZXJmZWN0b2RvLCBwZXJmZWN0IFRvLURvIGxpc3RpbmchXCI7XG59KTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpLnNyYyA9IGxvZ287Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9