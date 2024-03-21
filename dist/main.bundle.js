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
    const local = localStorage.getItem("dailyList");
    if(local != null){
        dailyList = JSON.parse(local);
    }
    
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
    const local = localStorage.getItem("monthlyLIst");
    if(local != null){
        monthlyList = JSON.parse(local);
    }
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
    const local = localStorage.getItem("weeklyList");
    if(local != null){
        weeklyList = JSON.parse(local);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL2FkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvYmlnQ2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvbGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9MaXN0cy9kYWlseUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9MaXN0cy9tb250aGx5TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xpc3RzL3dlZWtseUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9QYWdlcy9hZGRpbmdQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUGFnZXMvZGFpbHlQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUGFnZXMvbW9udGhseVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9QYWdlcy93ZWVrbHlQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGFuZGVsQWRkaW5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA4ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHdoO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGIwYTA7XG59XG4jYmlnLWNhcmQge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XG59XG5cbiNoZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3NpZGUtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMS8zO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjJjMzg7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgZ2FwOiAxMDBweDtcbn1cblxuI2xvZ28ge1xuICAgIHdpZHRoOiA3ZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jbmF2IGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcblxufVxuI25hdiB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzMHB4O1xufVxuXG4jY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kaWFsb2ctbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmRpYWxvZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmMzODtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuI2JpZy1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiA3MDBweDtcbn1cblxuLmFkZCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XG59XG5cbi5hZGQ6aG92ZXIge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGV4dC1maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcblxufVxuI3Rhc2ssICNkZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxLjNlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuI2NvbmZpcm0ge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlODNjMzg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2NhbmNlbCB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2JpZy1jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEycHg7XG59XG5cbiNiaWctY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNiaWctY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxMnB4IDAgNnB4IGdyZXk7IFxufVxuXG4uYXJlYSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMzBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYXJlYSB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cbi5yYWRpbyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uYnV0dG9ucyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcbn1cblxuYnV0dG9uLnRhc2stZG9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsV0FBVztJQUNYLHVMQUF1TDtBQUMzTDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7O0FBRWI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgOGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHdoO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBiMGEwO1xcbn1cXG4jYmlnLWNhcmQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jc2lkZS1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmMzODtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgd2lkdGg6IDdlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jbmF2IGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcXG5cXG59XFxuI25hdiB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kaWFsb2ctbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmRpYWxvZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMmMzODtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4jYmlnLWNhcmQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uYWRkIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xcbn1cXG5cXG4uYWRkOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi50ZXh0LWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG4jdGFzaywgI2Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMS4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNjb25maXJtIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTgzYzM4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNjYW5jZWwge1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNiaWctY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTJweDtcXG59XFxuXFxuI2JpZy1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jYmlnLWNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxMnB4IDAgNnB4IGdyZXk7IFxcbn1cXG5cXG4uYXJlYSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5hcmVhIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxufVxcbi5yYWRpbyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XFxufVxcblxcbmJ1dHRvbi50YXNrLWRvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjcmVhdGVBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCIrXCI7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWRkQnV0dG9uO1xufTsiLCJcbmltcG9ydCB7IGNyZWF0ZUxpc3RJdGVtIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvbGlzdEl0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJpZ0NhcmQgPSAoZGFpbHlMaXN0KSA9PiB7XG4gICAgY29uc3QgYmlnQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJpZ0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdiaWctY2FyZCcpO1xuICAgIGNvbnN0IGNhcmRzID0gZGFpbHlMaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxpc3RJdGVtKGl0ZW0pO1xuICAgIH0pO1xuICAgIGNhcmRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGJpZ0NhcmQuYXBwZW5kKGl0ZW0pOyBcbiAgICB9KTtcblxuICAgIHJldHVybiBiaWdDYXJkO1xufTsiLCJcbmltcG9ydCB7IGNoYW5nZUZvckRhaWx5LCBkZWxldGVGcm9tRGFpbHksIGRhaWx5TGlzdH0gZnJvbSBcIi4uL0xpc3RzL2RhaWx5TGlzdFwiO1xuaW1wb3J0IHsgY2hhbmdlRm9yTW9udGhseSwgZGVsZXRlRnJvbU1vbnRobHksIG1vbnRobHlMaXN0IH0gZnJvbSBcIi4uL0xpc3RzL21vbnRobHlMaXN0XCI7XG5pbXBvcnQgeyBjaGFuZ2VGb3JXZWVrbHksIGRlbGV0ZUZyb21XZWVrbHksIHdlZWtseUxpc3QgfSBmcm9tIFwiLi4vTGlzdHMvd2Vla2x5TGlzdFwiO1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVMaXN0SXRlbSA9IChJdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGAke0l0ZW0uaWR9YCk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKGAke0l0ZW0udHlwZX1gKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0YXNrLmlubmVyVGV4dCA9IEl0ZW0udGFzaztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBJdGVtLmRlc2NyaXB0aW9uO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBpZihJdGVtLmRvbmUpe1xuICAgICAgICBkb25lQnV0dG9uLmlubmVyVGV4dCA9IFwiRG9uZVwiO1xuICAgICAgICBkb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpO1xuICAgICAgIFxuICAgIH1lbHNle1xuICAgICAgICBkb25lQnV0dG9uLmlubmVyVGV4dCA9IFwiTm90IERvbmVcIjtcbiAgICB9XG4gICAgXG4gIFxuICAgIFxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcImRlbGV0ZVwiO1xuXG5cbiAgICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1kb25lJyk7XG5cbiAgICAgICAgaWYoZS50YXJnZXQuaW5uZXJUZXh0ID09ICdEb25lJyl7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lclRleHQgPSBcIk5vdCBEb25lXCI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9ICdEb25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBpZCAgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG5cbiAgICAgICAgaWYodHlwZSA9PSBcIm1vbnRobHlcIil7XG4gICAgICAgICAgICBjaGFuZ2VGb3JNb250aGx5KGlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSBcIndlZWtseVwiKXtcbiAgICAgICAgICAgIGNoYW5nZUZvcldlZWtseShpZCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZUZvckRhaWx5KGlkKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtb250aGx5TGlzdFwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndlZWtseUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhaWx5TGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcblxuICAgIH0pO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMV07XG4gICAgICAgIGNvbnN0IGlkICA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcblxuICAgICAgICBpZih0eXBlID09IFwibW9udGhseVwiKXtcbiAgICAgICAgICAgIGRlbGV0ZUZyb21Nb250aGx5KGlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSBcIndlZWtseVwiKXtcbiAgICAgICAgICAgIGRlbGV0ZUZyb21XZWVrbHkoaWQpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBkZWxldGVGcm9tRGFpbHkoaWQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vbnRobHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2Vla2x5TGlzdFwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFpbHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICAgICAgICBcbiAgICB9KTtcblxuXG4gICAgYnV0dG9ucy5hcHBlbmQoZG9uZUJ1dHRvbik7XG4gICAgYnV0dG9ucy5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcbiAgICBpdGVtLmFwcGVuZCh0YXNrKTtcbiAgICBpdGVtLmFwcGVuZChkZXNjcmlwdGlvbik7XG4gICAgaXRlbS5hcHBlbmQoYnV0dG9ucyk7XG4gICAgaXRlbS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcblxuICAgIHJldHVybiBpdGVtO1xufTsiLCJleHBvcnQgbGV0IGRhaWx5TGlzdCA9IFtdOyBcblxuXG5leHBvcnQgY29uc3QgbG9hZERhaWx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYWlseUxpc3RcIik7XG4gICAgaWYobG9jYWwgIT0gbnVsbCl7XG4gICAgICAgIGRhaWx5TGlzdCA9IEpTT04ucGFyc2UobG9jYWwpO1xuICAgIH1cbiAgICBcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRUb0RhaWx5TGlzdCA9IChpdGVtKSA9PiB7XG4gICAgZGFpbHlMaXN0LnB1c2goaXRlbSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbURhaWx5ID0gKGlkKSA9PiB7XG4gICAgZGFpbHlMaXN0ID0gZGFpbHlMaXN0LmZpbHRlcigoaXRlbSkgPT4gaWQgIT0gaXRlbS5pZCk7XG4gICAgY29uc29sZS5sb2coZGFpbHlMaXN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGb3JEYWlseSA9IChpZCkgPT4ge1xuICAgIGRhaWx5TGlzdCAgPSBkYWlseUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmKGlkID09IGl0ZW0uaWQpe1xuICAgICAgICAgICAgaXRlbS5kb25lID0gIWl0ZW0uZG9uZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhkYWlseUxpc3QpO1xufTsiLCJleHBvcnQgbGV0IG1vbnRobHlMaXN0ID0gW107XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRUb01vbnRobHlMaXN0ID0gKGl0ZW0pID0+IHtcbiAgICBtb250aGx5TGlzdC5wdXNoKGl0ZW0pO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkTW9udGhseSA9ICgpID0+IHtcbiAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9udGhseUxJc3RcIik7XG4gICAgaWYobG9jYWwgIT0gbnVsbCl7XG4gICAgICAgIG1vbnRobHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21Nb250aGx5ID0gKGlkKSA9PiB7XG4gICAgbW9udGhseUxpc3QgPSBtb250aGx5TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGlkICE9IGl0ZW0uaWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUZvck1vbnRobHkgPSAoaWQpID0+IHtcbiAgICBtb250aGx5TGlzdCAgPSBtb250aGx5TGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYoaWQgPT0gaXRlbS5pZCl7XG4gICAgICAgICAgICBpdGVtLmRvbmUgPSAhaXRlbS5kb25lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xufSIsImV4cG9ydCBsZXQgd2Vla2x5TGlzdCA9IFtdO1xuXG5leHBvcnQgY29uc3QgYXBwZW5kVG9XZWVrbHlMaXN0ID0gKGl0ZW0pID0+IHtcbiAgICB3ZWVrbHlMaXN0LnB1c2goaXRlbSk7XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRXZWVrbHkgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndlZWtseUxpc3RcIik7XG4gICAgaWYobG9jYWwgIT0gbnVsbCl7XG4gICAgICAgIHdlZWtseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbVdlZWtseSA9IChpZCkgPT4ge1xuICAgIHdlZWtseUxpc3QgPSB3ZWVrbHlMaXN0LmZpbHRlcigoaXRlbSkgPT4gaWQgIT0gaXRlbS5pZCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlRm9yV2Vla2x5ID0gKGlkKSA9PiB7XG4gICAgd2Vla2x5TGlzdCAgPSB3ZWVrbHlMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZihpZCA9PSBpdGVtLmlkKXtcbiAgICAgICAgICAgIGl0ZW0uZG9uZSA9ICFpdGVtLmRvbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgY3JlYXRlQWRkQnV0dG9uIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYWRkQnV0dG9uXCI7XG5pbXBvcnQgeyBjcmVhdGVCaWdDYXJkIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYmlnQ2FyZFwiO1xuaW1wb3J0IHsgbW9udGhseUxpc3QgfSBmcm9tIFwiLi4vTGlzdHMvbW9udGhseUxpc3RcIjtcbmV4cG9ydCBjb25zdCBhZGRpbmdQYWdlID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYmlnQ2FyZCA9IGNyZWF0ZUJpZ0NhcmQoW10pO1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVBZGRCdXR0b24oKTtcbiAgICAgICAgYmlnQ2FyZC5pbm5lckhUTUwgPSBcIjxwPk91ciBhcHByb2FjaCBpcyBzZXBhcmF0aW5nIGdvYWxzIHRvIG1vbnRobHksIHdlZWtseSBhbmQgZGFpbHkuPGJyPlRoaXMgcHJvdmlkZXMgZmxleGliaWxpdHkgaW4gcGxhbm5pbmcuPC9wPlwiXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGFkZEJ1dHRvbik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGJpZ0NhcmQpO1xuICAgICAgIFxuICAgIH07XG4gICAgcmV0dXJuIHsgcmVuZGVyUGFnZSB9XG59KSgpOyIsImltcG9ydCB7IGRhaWx5TGlzdCB9IGZyb20gXCIuLi9MaXN0cy9kYWlseUxpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gXCIuLi9Db21wb25lbnRzL2FkZEJ1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlQmlnQ2FyZCB9IGZyb20gXCIuLi9Db21wb25lbnRzL2JpZ0NhcmRcIjtcblxuZXhwb3J0IGNvbnN0IGRhaWx5UGFnZSA9IChmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpZ0NhcmQgPSBjcmVhdGVCaWdDYXJkKGRhaWx5TGlzdCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGJpZ0NhcmQpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgcmVuZGVyUGFnZSB9XG59KSgpOyIsIlxuaW1wb3J0IHsgY3JlYXRlQWRkQnV0dG9uIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYWRkQnV0dG9uXCI7XG5pbXBvcnQgeyBjcmVhdGVCaWdDYXJkIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYmlnQ2FyZFwiO1xuaW1wb3J0IHsgbW9udGhseUxpc3QgfSBmcm9tIFwiLi4vTGlzdHMvbW9udGhseUxpc3RcIjtcbmV4cG9ydCBjb25zdCBtb250aGx5UGFnZSA9IChmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpZ0NhcmQgPSBjcmVhdGVCaWdDYXJkKG1vbnRobHlMaXN0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoYmlnQ2FyZCk7XG4gICAgfTtcbiAgICByZXR1cm4geyByZW5kZXJQYWdlIH1cbn0pKCk7IiwiXG5pbXBvcnQgeyBjcmVhdGVBZGRCdXR0b24gfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9hZGRCdXR0b25cIjtcbmltcG9ydCB7IGNyZWF0ZUJpZ0NhcmQgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9iaWdDYXJkXCI7XG5pbXBvcnQgeyB3ZWVrbHlMaXN0IH0gZnJvbSBcIi4uL0xpc3RzL3dlZWtseUxpc3RcIjtcbmV4cG9ydCBjb25zdCB3ZWVrbHlQYWdlID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYmlnQ2FyZCA9IGNyZWF0ZUJpZ0NhcmQod2Vla2x5TGlzdCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGJpZ0NhcmQpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgcmVuZGVyUGFnZSB9XG59KSgpOyIsImltcG9ydCB7IG1vbnRobHlMaXN0LCBhcHBlbmRUb01vbnRobHlMaXN0IH0gZnJvbSBcIi4vTGlzdHMvbW9udGhseUxpc3RcIjtcbmltcG9ydCB7IGFwcGVuZFRvRGFpbHlMaXN0LCBkYWlseUxpc3QgfSBmcm9tIFwiLi9MaXN0cy9kYWlseUxpc3RcIjtcbmltcG9ydCB7IGFwcGVuZFRvV2Vla2x5TGlzdCB9IGZyb20gXCIuL0xpc3RzL3dlZWtseUxpc3RcIjtcblxuXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtID0ge307XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3R5cGUnKTtcbiAgXG4gICAgaXRlbS50YXNrID0gdGFza05hbWUudmFsdWU7XG4gICAgaXRlbS5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICBpdGVtLmRvbmUgPSBmYWxzZTtcbiAgICBpdGVtLmlkID0gRGF0ZS5ub3coKTtcbiAgICBpZihyYWRpb1swXS5jaGVja2VkKXtcbiAgICAgICAgaXRlbS50eXBlID0gXCJtb250aGx5XCI7XG4gICAgICAgIGFwcGVuZFRvTW9udGhseUxpc3QoaXRlbSk7XG4gICAgfWVsc2UgaWYocmFkaW9bMV0uY2hlY2tlZCl7XG4gICAgICAgIGl0ZW0udHlwZSA9IFwid2Vla2x5XCI7XG4gICAgICAgIGFwcGVuZFRvV2Vla2x5TGlzdChpdGVtKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGl0ZW0udHlwZSA9IFwiZGFpbHlcIjtcbiAgICAgICAgYXBwZW5kVG9EYWlseUxpc3QoaXRlbSk7XG4gICAgfVxufTtcblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vYXNzZXRzL2xvZ28ucG5nJ1xuaW1wb3J0IHsgZGFpbHlQYWdlIH0gZnJvbSAnLi9QYWdlcy9kYWlseVBhZ2UnO1xuaW1wb3J0IHsgbW9udGhseVBhZ2UgfSBmcm9tICcuL1BhZ2VzL21vbnRobHlQYWdlJztcbmltcG9ydCB7IGxvYWRXZWVrbHksIHdlZWtseUxpc3QgfSBmcm9tICcuL0xpc3RzL3dlZWtseUxpc3QnO1xuaW1wb3J0IHsgbG9hZE1vbnRobHksIG1vbnRobHlMaXN0IH0gZnJvbSAnLi9MaXN0cy9tb250aGx5TGlzdCc7XG5pbXBvcnQgeyBsb2FkRGFpbHksIGRhaWx5TGlzdCB9IGZyb20gJy4vTGlzdHMvZGFpbHlMaXN0JztcbmltcG9ydCB7IGFkZEl0ZW0gfSBmcm9tICcuL2hhbmRlbEFkZGluZyc7XG5pbXBvcnQgeyB3ZWVrbHlQYWdlIH0gZnJvbSAnLi9QYWdlcy93ZWVrbHlQYWdlJztcbmltcG9ydCB7IGFkZGluZ1BhZ2UgfSBmcm9tICcuL1BhZ2VzL2FkZGluZ1BhZ2UnO1xuXG5cbmNvbnN0IGxvYWRTdG9yYWdlID0gKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgbG9hZERhaWx5KCk7XG4gICAgICAgIGxvYWRXZWVrbHkoKTtcbiAgICAgICAgbG9hZE1vbnRobHkoKTtcbiAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICAgIFxufTtcbmxvYWRTdG9yYWdlKCk7XG5jb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0nKTtcbmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRJdGVtKCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG59KTtcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZycpO1xuXG5cbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmFkZGluZ1BhZ2UucmVuZGVyUGFnZShbXSk7XG5jb25zdCBtb250aGx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbnRobHknKTtcbm1vbnRobHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIFxuICAgIG1vbnRobHlQYWdlLnJlbmRlclBhZ2UobW9udGhseUxpc3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpLmlubmVyVGV4dCA9IFwiTW9udGhseVwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9udGhseUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcblxufSk7XG5cbmNvbnN0IHdlZWtseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrbHknKTtcbndlZWtseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgd2Vla2x5UGFnZS5yZW5kZXJQYWdlKHdlZWtseUxpc3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpLmlubmVyVGV4dCA9IFwiV2Vla2x5XCI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3ZWVrbHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbn0pO1xuXG5jb25zdCBkYWlseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseScpO1xuZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGRhaWx5UGFnZS5yZW5kZXJQYWdlKGRhaWx5TGlzdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJykuaW5uZXJUZXh0ID0gXCJEYWlseVwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFpbHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhaWx5TGlzdCkpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFpbHlMaXN0XCIpKTtcbiAgICBcbn0pO1xuXG5jb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcbmFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYWRkaW5nUGFnZS5yZW5kZXJQYWdlKFtdKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKS5pbm5lclRleHQgPSBcInBlcmZlY3RvZG8sIHBlcmZlY3QgVG8tRG8gbGlzdGluZyFcIjtcbn0pO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJykuc3JjID0gbG9nbzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=