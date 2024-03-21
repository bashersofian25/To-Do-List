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
    grid-template-rows: 1fr 1.5fr 8fr;
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
    grid-column: 1/3;
    grid-row: 1;
    background-color: #e83c38;
    display: flex;
    align-items: center;
    justify-content: center;
}
#side-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-row: 2;
    grid-column: 1/3;
    background-color: black;
    padding-top: 60px;
   
}

#logo {
    width: 7em;
    height: auto;
    margin-bottom: 20px;
}

textarea {
    height: 100px;;
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
    flex-wrap: wrap;
    gap: 30px;
}

#content{
    display: flex;
    flex-direction: column;
    grid-row: 3;
    grid-column: 1/3;
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
    background-color: black;
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
    height: auto;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gCAAgC;IAChC,iCAAiC;IACjC,UAAU;IACV,SAAS;IACT,aAAa;IACb,YAAY;IACZ,8CAA8C;AAClD;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;IACV,WAAW;IACX,uLAAuL;AAC3L;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;IACX,gBAAgB;IAChB,uBAAuB;IACvB,iBAAiB;;AAErB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;;AAE7B;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,4CAA4C;IAC5C,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,wBAAwB;IACxB,SAAS;IACT,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,SAAS;IACT,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iDAAiD;IACjD,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["body {\n    display: grid;\n    grid-template-columns: 1.5fr 8fr;\n    grid-template-rows: 1fr 1.5fr 8fr;\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    width: 100wh;\n    font-family: 'Courier New', Courier, monospace;\n}\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #c0b0a0;\n}\n#big-card {\n    margin: 20px;\n    border-radius: 5px;\n    background-color: white;\n    width: 80%;\n    height: 80%;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n#header {\n    grid-column: 1/3;\n    grid-row: 1;\n    background-color: #e83c38;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#side-bar {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    grid-row: 2;\n    grid-column: 1/3;\n    background-color: black;\n    padding-top: 60px;\n   \n}\n\n#logo {\n    width: 7em;\n    height: auto;\n    margin-bottom: 20px;\n}\n\ntextarea {\n    height: 100px;;\n}\n\n#nav button {\n    border-radius: 30px;\n    padding: 20px;\n    border: 0;\n    font-family: inherit;\n    font-size: inherit;\n    background-color: #e83c38;\n\n}\n#nav {\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 30px;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    grid-row: 3;\n    grid-column: 1/3;\n}\n\n.dialog-list {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.dialog {\n    border-radius: 20px;\n    border: 0px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    align-self: center;\n    justify-content: center;\n    background-color: black;\n    color: white;\n\n}\n\n#big-card {\n    padding: 20px;\n    overflow-y: auto;\n    height: 700px;\n}\n\n.add {\n    width: 150px;\n    font-family: inherit;\n    font-size: 2em;\n    margin: 10px;\n    padding: 10px;\n    border-radius: 20px;\n    border: 0;\n    background-color: #e83c38;\n}\n\n.add:hover {\n    opacity: 50%;\n    color: white;\n}\n.text-field {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n\n}\n#task, #description {\n    width: 100%;\n    height: auto;\n    border-radius: 10px;\n    font-size: inherit;\n    font-family: inherit;\n}\n\n#confirm {\n    font-family: inherit;\n    font-size: inherit;\n    background-color:#e83c38;\n    border: 0;\n    border-radius: 30px;\n    padding: 10px;\n}\n\n#cancel {\n    font-size: inherit;\n    font-family: inherit;\n    background-color: #e83c38;\n    border: 0;\n    border-radius: 30px;\n    padding: 10px;\n}\n\n#big-card::-webkit-scrollbar {\n    width: 12px;\n}\n\n#big-card::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n    border-radius: 10px;\n}\n\n#big-card::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 12px 0 6px grey; \n}\n\n.area {\n    list-style: none;\n    display: flex;\n    align-items: flex-start;\n    gap: 30px;\n    height: 100px;\n}\n\n.area textarea {\n    width: 50px;\n    height: 300px;\n}\n.radio {\n    list-style: none;\n}\n\n.buttons {\n    display: flex;\n    gap: 20px;\n}\n\n.buttons button {\n    padding: 10px;\n    border: 0;\n    border-radius: 15px;\n    background-color: #e83c38;\n}\n\nbutton.task-done {\n    background-color: green;\n}"],"sourceRoot":""}]);
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
    const local = localStorage.getItem("monthlyList");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FB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QUFVO0FBQ2Q7QUFDQSxDQUFDOzs7QUFHRCxzQ0FBc0MsNkNBQUksQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Db21wb25lbnRzL2FkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvYmlnQ2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0NvbXBvbmVudHMvbGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9MaXN0cy9kYWlseUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9MaXN0cy9tb250aGx5TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xpc3RzL3dlZWtseUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9QYWdlcy9hZGRpbmdQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUGFnZXMvZGFpbHlQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUGFnZXMvbW9udGhseVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9QYWdlcy93ZWVrbHlQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGFuZGVsQWRkaW5nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA4ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnIgOGZyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHdoO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGIwYTA7XG59XG4jYmlnLWNhcmQge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XG59XG5cbiNoZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jc2lkZS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgXG59XG5cbiNsb2dvIHtcbiAgICB3aWR0aDogN2VtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAxMDBweDs7XG59XG5cbiNuYXYgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xuXG59XG4jbmF2IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMzBweDtcbn1cblxuI2NvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdyaWQtcm93OiAzO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG59XG5cbi5kaWFsb2ctbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmRpYWxvZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbiNiaWctY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogNzAwcHg7XG59XG5cbi5hZGQge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xufVxuXG4uYWRkOmhvdmVyIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRleHQtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbn1cbiN0YXNrLCAjZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuI2NvbmZpcm0ge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlODNjMzg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2NhbmNlbCB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2JpZy1jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEycHg7XG59XG5cbiNiaWctY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNiaWctY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxMnB4IDAgNnB4IGdyZXk7IFxufVxuXG4uYXJlYSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMzBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYXJlYSB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cbi5yYWRpbyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uYnV0dG9ucyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcbn1cblxuYnV0dG9uLnRhc2stZG9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsV0FBVztJQUNYLHVMQUF1TDtBQUMzTDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7O0FBRWI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgOGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmciA4ZnI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHdoO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBiMGEwO1xcbn1cXG4jYmlnLWNhcmQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNzaWRlLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgIFxcbn1cXG5cXG4jbG9nbyB7XFxuICAgIHdpZHRoOiA3ZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEwMHB4OztcXG59XFxuXFxuI25hdiBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XFxuXFxufVxcbiNuYXYge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uZGlhbG9nLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbiNiaWctY2FyZCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogNzAwcHg7XFxufVxcblxcbi5hZGQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNjMzg7XFxufVxcblxcbi5hZGQ6aG92ZXIge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRleHQtZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcbiN0YXNrLCAjZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jY29uZmlybSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2U4M2MzODtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4M2MzODtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jYmlnLWNhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEycHg7XFxufVxcblxcbiNiaWctY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2JpZy1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMTJweCAwIDZweCBncmV5OyBcXG59XFxuXFxuLmFyZWEge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uYXJlYSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG4ucmFkaW8ge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzYzM4O1xcbn1cXG5cXG5idXR0b24udGFzay1kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiK1wiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIikuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFkZEJ1dHRvbjtcbn07IiwiXG5pbXBvcnQgeyBjcmVhdGVMaXN0SXRlbSB9IGZyb20gXCIuLi9Db21wb25lbnRzL2xpc3RJdGVtXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCaWdDYXJkID0gKGRhaWx5TGlzdCkgPT4ge1xuICAgIGNvbnN0IGJpZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiaWdDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmlnLWNhcmQnKTtcbiAgICBjb25zdCBjYXJkcyA9IGRhaWx5TGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMaXN0SXRlbShpdGVtKTtcbiAgICB9KTtcbiAgICBjYXJkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBiaWdDYXJkLmFwcGVuZChpdGVtKTsgXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYmlnQ2FyZDtcbn07IiwiXG5pbXBvcnQgeyBjaGFuZ2VGb3JEYWlseSwgZGVsZXRlRnJvbURhaWx5LCBkYWlseUxpc3R9IGZyb20gXCIuLi9MaXN0cy9kYWlseUxpc3RcIjtcbmltcG9ydCB7IGNoYW5nZUZvck1vbnRobHksIGRlbGV0ZUZyb21Nb250aGx5LCBtb250aGx5TGlzdCB9IGZyb20gXCIuLi9MaXN0cy9tb250aGx5TGlzdFwiO1xuaW1wb3J0IHsgY2hhbmdlRm9yV2Vla2x5LCBkZWxldGVGcm9tV2Vla2x5LCB3ZWVrbHlMaXN0IH0gZnJvbSBcIi4uL0xpc3RzL3dlZWtseUxpc3RcIjtcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoSXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtJdGVtLmlkfWApO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChgJHtJdGVtLnR5cGV9YCk7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGFzay5pbm5lclRleHQgPSBJdGVtLnRhc2s7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gSXRlbS5kZXNjcmlwdGlvbjtcbiAgICBcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaWYoSXRlbS5kb25lKXtcbiAgICAgICAgZG9uZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRvbmVcIjtcbiAgICAgICAgZG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKTtcbiAgICAgICBcbiAgICB9ZWxzZXtcbiAgICAgICAgZG9uZUJ1dHRvbi5pbm5lclRleHQgPSBcIk5vdCBEb25lXCI7XG4gICAgfVxuICAgIFxuICBcbiAgICBcbiAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJkZWxldGVcIjtcblxuXG4gICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2stZG9uZScpO1xuXG4gICAgICAgIGlmKGUudGFyZ2V0LmlubmVyVGV4dCA9PSAnRG9uZScpe1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gXCJOb3QgRG9uZVwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lclRleHQgPSAnRG9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0eXBlID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgICAgY29uc3QgaWQgID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuXG4gICAgICAgIGlmKHR5cGUgPT0gXCJtb250aGx5XCIpe1xuICAgICAgICAgICAgY2hhbmdlRm9yTW9udGhseShpZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIil7XG4gICAgICAgICAgICBjaGFuZ2VGb3JXZWVrbHkoaWQpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VGb3JEYWlseShpZCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9udGhseUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhseUxpc3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3ZWVrbHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHdlZWtseUxpc3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYWlseUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGFpbHlMaXN0KSk7XG5cbiAgICB9KTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBpZCAgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG5cbiAgICAgICAgaWYodHlwZSA9PSBcIm1vbnRobHlcIil7XG4gICAgICAgICAgICBkZWxldGVGcm9tTW9udGhseShpZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gXCJ3ZWVrbHlcIil7XG4gICAgICAgICAgICBkZWxldGVGcm9tV2Vla2x5KGlkKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlRnJvbURhaWx5KGlkKTtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtb250aGx5TGlzdFwiLCBKU09OLnN0cmluZ2lmeShtb250aGx5TGlzdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndlZWtseUxpc3RcIiwgSlNPTi5zdHJpbmdpZnkod2Vla2x5TGlzdCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhaWx5TGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICAgICAgXG4gICAgfSk7XG5cblxuICAgIGJ1dHRvbnMuYXBwZW5kKGRvbmVCdXR0b24pO1xuICAgIGJ1dHRvbnMuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XG4gICAgaXRlbS5hcHBlbmQodGFzayk7XG4gICAgaXRlbS5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICAgIGl0ZW0uYXBwZW5kKGJ1dHRvbnMpO1xuICAgIGl0ZW0uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKSk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn07IiwiZXhwb3J0IGxldCBkYWlseUxpc3QgPSBbXTsgXG5cblxuZXhwb3J0IGNvbnN0IGxvYWREYWlseSA9ICgpID0+IHtcbiAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFpbHlMaXN0XCIpO1xuICAgIGlmKGxvY2FsICE9IG51bGwpe1xuICAgICAgICBkYWlseUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsKTtcbiAgICB9XG4gICAgXG59O1xuXG5leHBvcnQgY29uc3QgYXBwZW5kVG9EYWlseUxpc3QgPSAoaXRlbSkgPT4ge1xuICAgIGRhaWx5TGlzdC5wdXNoKGl0ZW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21EYWlseSA9IChpZCkgPT4ge1xuICAgIGRhaWx5TGlzdCA9IGRhaWx5TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGlkICE9IGl0ZW0uaWQpO1xuICAgIGNvbnNvbGUubG9nKGRhaWx5TGlzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlRm9yRGFpbHkgPSAoaWQpID0+IHtcbiAgICBkYWlseUxpc3QgID0gZGFpbHlMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZihpZCA9PSBpdGVtLmlkKXtcbiAgICAgICAgICAgIGl0ZW0uZG9uZSA9ICFpdGVtLmRvbmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZGFpbHlMaXN0KTtcbn07IiwiZXhwb3J0IGxldCBtb250aGx5TGlzdCA9IFtdO1xuXG5leHBvcnQgY29uc3QgYXBwZW5kVG9Nb250aGx5TGlzdCA9IChpdGVtKSA9PiB7XG4gICAgbW9udGhseUxpc3QucHVzaChpdGVtKTtcbn07XG5leHBvcnQgY29uc3QgbG9hZE1vbnRobHkgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vbnRobHlMaXN0XCIpO1xuICAgIGlmKGxvY2FsICE9IG51bGwpe1xuICAgICAgICBtb250aGx5TGlzdCA9IEpTT04ucGFyc2UobG9jYWwpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tTW9udGhseSA9IChpZCkgPT4ge1xuICAgIG1vbnRobHlMaXN0ID0gbW9udGhseUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpZCAhPSBpdGVtLmlkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGb3JNb250aGx5ID0gKGlkKSA9PiB7XG4gICAgbW9udGhseUxpc3QgID0gbW9udGhseUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmKGlkID09IGl0ZW0uaWQpe1xuICAgICAgICAgICAgaXRlbS5kb25lID0gIWl0ZW0uZG9uZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbn0iLCJleHBvcnQgbGV0IHdlZWtseUxpc3QgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGFwcGVuZFRvV2Vla2x5TGlzdCA9IChpdGVtKSA9PiB7XG4gICAgd2Vla2x5TGlzdC5wdXNoKGl0ZW0pO1xufTtcbmV4cG9ydCBjb25zdCBsb2FkV2Vla2x5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3ZWVrbHlMaXN0XCIpO1xuICAgIGlmKGxvY2FsICE9IG51bGwpe1xuICAgICAgICB3ZWVrbHlMaXN0ID0gSlNPTi5wYXJzZShsb2NhbCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21XZWVrbHkgPSAoaWQpID0+IHtcbiAgICB3ZWVrbHlMaXN0ID0gd2Vla2x5TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGlkICE9IGl0ZW0uaWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUZvcldlZWtseSA9IChpZCkgPT4ge1xuICAgIHdlZWtseUxpc3QgID0gd2Vla2x5TGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYoaWQgPT0gaXRlbS5pZCl7XG4gICAgICAgICAgICBpdGVtLmRvbmUgPSAhaXRlbS5kb25lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xufSIsImltcG9ydCB7IGNyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gXCIuLi9Db21wb25lbnRzL2FkZEJ1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlQmlnQ2FyZCB9IGZyb20gXCIuLi9Db21wb25lbnRzL2JpZ0NhcmRcIjtcbmltcG9ydCB7IG1vbnRobHlMaXN0IH0gZnJvbSBcIi4uL0xpc3RzL21vbnRobHlMaXN0XCI7XG5leHBvcnQgY29uc3QgYWRkaW5nUGFnZSA9IChmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpZ0NhcmQgPSBjcmVhdGVCaWdDYXJkKFtdKTtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gY3JlYXRlQWRkQnV0dG9uKCk7XG4gICAgICAgIGJpZ0NhcmQuaW5uZXJIVE1MID0gXCI8cD5PdXIgYXBwcm9hY2ggaXMgc2VwYXJhdGluZyBnb2FscyB0byBtb250aGx5LCB3ZWVrbHkgYW5kIGRhaWx5Ljxicj5UaGlzIHByb3ZpZGVzIGZsZXhpYmlsaXR5IGluIHBsYW5uaW5nLjwvcD5cIlxuICAgICAgICBjb250ZW50LmFwcGVuZChhZGRCdXR0b24pO1xuICAgICAgICBjb250ZW50LmFwcGVuZChiaWdDYXJkKTtcbiAgICAgICBcbiAgICB9O1xuICAgIHJldHVybiB7IHJlbmRlclBhZ2UgfVxufSkoKTsiLCJpbXBvcnQgeyBkYWlseUxpc3QgfSBmcm9tIFwiLi4vTGlzdHMvZGFpbHlMaXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVBZGRCdXR0b24gfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9hZGRCdXR0b25cIjtcbmltcG9ydCB7IGNyZWF0ZUJpZ0NhcmQgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9iaWdDYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBkYWlseVBhZ2UgPSAoZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCBiaWdDYXJkID0gY3JlYXRlQmlnQ2FyZChkYWlseUxpc3QpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChiaWdDYXJkKTtcbiAgICB9O1xuICAgIHJldHVybiB7IHJlbmRlclBhZ2UgfVxufSkoKTsiLCJcbmltcG9ydCB7IGNyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gXCIuLi9Db21wb25lbnRzL2FkZEJ1dHRvblwiO1xuaW1wb3J0IHsgY3JlYXRlQmlnQ2FyZCB9IGZyb20gXCIuLi9Db21wb25lbnRzL2JpZ0NhcmRcIjtcbmltcG9ydCB7IG1vbnRobHlMaXN0IH0gZnJvbSBcIi4uL0xpc3RzL21vbnRobHlMaXN0XCI7XG5leHBvcnQgY29uc3QgbW9udGhseVBhZ2UgPSAoZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb25zdCBiaWdDYXJkID0gY3JlYXRlQmlnQ2FyZChtb250aGx5TGlzdCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGJpZ0NhcmQpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgcmVuZGVyUGFnZSB9XG59KSgpOyIsIlxuaW1wb3J0IHsgY3JlYXRlQWRkQnV0dG9uIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYWRkQnV0dG9uXCI7XG5pbXBvcnQgeyBjcmVhdGVCaWdDYXJkIH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvYmlnQ2FyZFwiO1xuaW1wb3J0IHsgd2Vla2x5TGlzdCB9IGZyb20gXCIuLi9MaXN0cy93ZWVrbHlMaXN0XCI7XG5leHBvcnQgY29uc3Qgd2Vla2x5UGFnZSA9IChmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpZ0NhcmQgPSBjcmVhdGVCaWdDYXJkKHdlZWtseUxpc3QpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChiaWdDYXJkKTtcbiAgICB9O1xuICAgIHJldHVybiB7IHJlbmRlclBhZ2UgfVxufSkoKTsiLCJpbXBvcnQgeyBtb250aGx5TGlzdCwgYXBwZW5kVG9Nb250aGx5TGlzdCB9IGZyb20gXCIuL0xpc3RzL21vbnRobHlMaXN0XCI7XG5pbXBvcnQgeyBhcHBlbmRUb0RhaWx5TGlzdCwgZGFpbHlMaXN0IH0gZnJvbSBcIi4vTGlzdHMvZGFpbHlMaXN0XCI7XG5pbXBvcnQgeyBhcHBlbmRUb1dlZWtseUxpc3QgfSBmcm9tIFwiLi9MaXN0cy93ZWVrbHlMaXN0XCI7XG5cblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHt9O1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCByYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0eXBlJyk7XG4gIFxuICAgIGl0ZW0udGFzayA9IHRhc2tOYW1lLnZhbHVlO1xuICAgIGl0ZW0uZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gICAgaXRlbS5kb25lID0gZmFsc2U7XG4gICAgaXRlbS5pZCA9IERhdGUubm93KCk7XG4gICAgaWYocmFkaW9bMF0uY2hlY2tlZCl7XG4gICAgICAgIGl0ZW0udHlwZSA9IFwibW9udGhseVwiO1xuICAgICAgICBhcHBlbmRUb01vbnRobHlMaXN0KGl0ZW0pO1xuICAgIH1lbHNlIGlmKHJhZGlvWzFdLmNoZWNrZWQpe1xuICAgICAgICBpdGVtLnR5cGUgPSBcIndlZWtseVwiO1xuICAgICAgICBhcHBlbmRUb1dlZWtseUxpc3QoaXRlbSk7XG4gICAgfWVsc2Uge1xuICAgICAgICBpdGVtLnR5cGUgPSBcImRhaWx5XCI7XG4gICAgICAgIGFwcGVuZFRvRGFpbHlMaXN0KGl0ZW0pO1xuICAgIH1cbn07XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2Fzc2V0cy9sb2dvLnBuZydcbmltcG9ydCB7IGRhaWx5UGFnZSB9IGZyb20gJy4vUGFnZXMvZGFpbHlQYWdlJztcbmltcG9ydCB7IG1vbnRobHlQYWdlIH0gZnJvbSAnLi9QYWdlcy9tb250aGx5UGFnZSc7XG5pbXBvcnQgeyBsb2FkV2Vla2x5LCB3ZWVrbHlMaXN0IH0gZnJvbSAnLi9MaXN0cy93ZWVrbHlMaXN0JztcbmltcG9ydCB7IGxvYWRNb250aGx5LCBtb250aGx5TGlzdCB9IGZyb20gJy4vTGlzdHMvbW9udGhseUxpc3QnO1xuaW1wb3J0IHsgbG9hZERhaWx5LCBkYWlseUxpc3QgfSBmcm9tICcuL0xpc3RzL2RhaWx5TGlzdCc7XG5pbXBvcnQgeyBhZGRJdGVtIH0gZnJvbSAnLi9oYW5kZWxBZGRpbmcnO1xuaW1wb3J0IHsgd2Vla2x5UGFnZSB9IGZyb20gJy4vUGFnZXMvd2Vla2x5UGFnZSc7XG5pbXBvcnQgeyBhZGRpbmdQYWdlIH0gZnJvbSAnLi9QYWdlcy9hZGRpbmdQYWdlJztcblxuXG5jb25zdCBsb2FkU3RvcmFnZSA9ICgpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIGxvYWREYWlseSgpO1xuICAgICAgICBsb2FkV2Vla2x5KCk7XG4gICAgICAgIGxvYWRNb250aGx5KCk7XG4gICAgfWNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgICBcbn07XG5sb2FkU3RvcmFnZSgpO1xuY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtJyk7XG5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkSXRlbSgpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2cnKTtcblxuXG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XG5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5hZGRpbmdQYWdlLnJlbmRlclBhZ2UoW10pO1xuY29uc3QgbW9udGhseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb250aGx5Jyk7XG5tb250aGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBcbiAgICBtb250aGx5UGFnZS5yZW5kZXJQYWdlKG1vbnRobHlMaXN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKS5pbm5lclRleHQgPSBcIk1vbnRobHlcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vbnRobHlMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG1vbnRobHlMaXN0KSk7XG5cbn0pO1xuXG5jb25zdCB3ZWVrbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla2x5Jyk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHdlZWtseVBhZ2UucmVuZGVyUGFnZSh3ZWVrbHlMaXN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKS5pbm5lclRleHQgPSBcIldlZWtseVwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2Vla2x5TGlzdFwiLCBKU09OLnN0cmluZ2lmeSh3ZWVrbHlMaXN0KSk7XG59KTtcblxuY29uc3QgZGFpbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKTtcbmRhaWx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkYWlseVBhZ2UucmVuZGVyUGFnZShkYWlseUxpc3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpLmlubmVyVGV4dCA9IFwiRGFpbHlcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhaWx5TGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYWlseUxpc3QpKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhaWx5TGlzdFwiKSk7XG4gICAgXG59KTtcblxuY29uc3QgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIik7XG5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGFkZGluZ1BhZ2UucmVuZGVyUGFnZShbXSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJykuaW5uZXJUZXh0ID0gXCJwZXJmZWN0b2RvLCBwZXJmZWN0IFRvLURvIGxpc3RpbmchXCI7XG59KTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpLnNyYyA9IGxvZ287Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9