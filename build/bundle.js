/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Home = __webpack_require__(5);

	// var html = React.renderToString(React.createElement(Home));
	// console.log(html);

	if (typeof document !== 'undefined') {
	  React.render(React.createElement(Home), document.getElementById('root'));
	}

	module.exports = Home;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (true) {
	  module.exports = __webpack_require__(3);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.7.0
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';var k=__webpack_require__(4),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,A=n?Symbol.for("react.memo"):
	60115,B=n?Symbol.for("react.lazy"):60116,C="function"===typeof Symbol&&Symbol.iterator;function aa(a,b,e,c,d,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[e,c,d,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
	function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};
	function G(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}G.prototype.isReactComponent={};G.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}var J=I.prototype=new H;
	J.constructor=I;k(J,G.prototype);J.isPureReactComponent=!0;var K={current:null,currentDispatcher:null},L=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};
	function N(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:d,_owner:K.current}}
	function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,e,c){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}
	function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
	function T(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return e(c,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+U(d,h);g+=T(d,f,e,c)}else if(null===a||"object"!==typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
	0;!(d=a.next()).done;)d=d.value,f=b+U(d,h++),g+=T(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function V(a,b,e){return null==a?0:T(a,"",b,e)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
	function da(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,function(a){return a}):null!=a&&(O(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(P,"$&/")+"/");b=R(b,g,c,d);V(a,da,b);S(b)}
	var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=R(null,null,b,e);V(a,ca,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){O(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:G,PureComponent:I,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
	_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:B,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,Suspense:z,createElement:N,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;
	if(null!=b){void 0!==b.ref&&(h=b.ref,f=K.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=N.bind(null,a);b.type=a;return b},isValidElement:O,version:"16.7.0",
	unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:K,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var HomeFeature = __webpack_require__(19);
	var HomeDocumentation = __webpack_require__(64);

	module.exports = (function (_ReactCSS$Component) {
	  _inherits(Home, _ReactCSS$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this);

	    this.state = {
	      primaryColor: '#194D33'
	    };

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(Home, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          home: {
	            fontFamily: 'Roboto'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(hex) {
	      this.setState({ primaryColor: '#' + hex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().home },
	        React.createElement(
	          'style',
	          null,
	          '\n          html, body {\n            background: #eee;\n            overflow-x: hidden;\n          }\n          .flexbox-fix {\n            display: -webkit-box;\n            display: -moz-box;\n            display: -ms-flexbox;\n            display: -webkit-flex;\n            display: flex;\n          }\n        '
	        ),
	        React.createElement(HomeFeature, { onChange: this.handleChange }),
	        React.createElement(HomeDocumentation, { primaryColor: this.state.primaryColor })
	      );
	    }
	  }]);

	  return Home;
	})(ReactCSS.Component);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var css;module.exports=css={Component:__webpack_require__(7),inline:__webpack_require__(11),mixin:{css:__webpack_require__(11)}};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var PropTypes,React,ReactCSSComponent,inline,extend=function(t,e){function r(){this.constructor=t}for(var n in e)hasProp.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;React=__webpack_require__(2),PropTypes=__webpack_require__(8),inline=__webpack_require__(11),module.exports=ReactCSSComponent=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return extend(e,t),e.contextTypes={mixins:PropTypes.object},e.prototype.css=function(t){return inline.call(this,t)},e.prototype.styles=function(){return this.css()},e}(React.Component);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(10);

	function emptyFunction() {}

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _,checkClassStructure,combine;_=__webpack_require__(12),checkClassStructure=__webpack_require__(14),combine=__webpack_require__(15),module.exports=function(s){var e,c,n,r,t,i,o,u,l;if(combine=__webpack_require__(15),c=[],null==this.classes)throw console.warn("Define this.classes on `"+this.constructor.name+"`");checkClassStructure(this.classes()),e=function(s){return function(e,n){return null!=s.classes()[e]?c.push(s.classes()[e]):e&&(null!=n?n.warn:void 0)===!0?console.warn("The `"+e+"` css class does not exist on `"+s.constructor.name+"`"):void 0}}(this),e("default"),o=this.props;for(i in o)l=o[i],_.isObject(l)||(l===!0?(e(i),e(i+"-true")):e(l?i+"-"+l:i+"-false"));for(t in s)n=s[t],n===!0&&e(t,{warn:!0});return e("public"),r={},(null!=(u=this.context)?u.mixins:void 0)&&(r=this.context.mixins),combine(c,r)};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';

	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;

	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);

	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;

	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;

	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;

	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }

	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;

	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }

	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }

	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;

	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;

	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;

	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');

	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;

	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }

	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }

	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }

	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }

	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;

	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }

	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	      return result ? 0 : -1;
	    }

	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);

	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;

	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;

	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);

	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;

	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;

	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;

	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }

	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }

	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;

	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);

	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);

	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }

	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;

	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);

	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];

	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;

	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];

	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;

	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;

	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);

	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }

	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;

	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);

	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	      stackA.pop();
	      stackB.pop();

	      return result;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];

	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');

	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);

	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;

	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];

	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }

	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;

	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;

	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];

	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;

	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;

	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }

	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;

	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }

	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);

	      view.set(new Uint8Array(buffer));
	      return result;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);

	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;

	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;

	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;

	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }

	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';

	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }

	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }

	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }

	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }

	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);

	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;

	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }

	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }

	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }

	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }

	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }

	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }

	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }

	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);

	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;

	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);

	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;

	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);

	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;

	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }

	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }

	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }

	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;

	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);

	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;

	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));

	      var index = -1,
	          result = [];

	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }

	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }

	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }

	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];

	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];

	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];

	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;

	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];

	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);

	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;

	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }

	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;

	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }

	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);

	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};

	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;

	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }

	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });

	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;

	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }

	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }

	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }

	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }

	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);

	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }

	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });

	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

	      var index = -1,
	          length = methodNames.length;

	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }

	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }

	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }

	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }

	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }

	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);

	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;

	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });

	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }

	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);

	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }

	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }

	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }

	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }

	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }

	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }

	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;

	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });

	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);

	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);

	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);

	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);

	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;

	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;

	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);

	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });

	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);

	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }

	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });

	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }

	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }

	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;

	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });

	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }

	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);

	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }

	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;

	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);

	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);

	      return result;
	    }

	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

	      return string.lastIndexOf(target, position) == position;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);

	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;

	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];

	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);

	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }

	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);

	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);

	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }

	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }

	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');

	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');

	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);

	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);

	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');

	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }

	    /*------------------------------------------------------------------------*/

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;

	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;

	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;

	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);

	    /*------------------------------------------------------------------------*/

	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;

	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });

	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;

	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);

	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };

	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;

	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });

	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });

	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;

	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module), (function() { return this; }())))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var _;_=__webpack_require__(12),module.exports=function(e){var s,o,t,n,r;r=[];for(s in e)n=e[s],_.isObject(n)?r.push(function(){var e;e=[];for(t in n)o=n[t],_.isObject(o)?e.push(void 0):e.push(console.warn("Make sure the value of the element `"+s+"` is an object of css. You passed it `"+n+"`"));return e}()):r.push(console.warn("Make sure the value of `"+s+"` is an object of html elements. You passed it `"+n+"`"));return r};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var merge,mixins;merge=__webpack_require__(16),mixins=__webpack_require__(18),module.exports=function(e,r){var i;return i=merge(e),mixins(i,r)};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _,merge;merge=__webpack_require__(17),_=__webpack_require__(12),module.exports=function(e){return _.isObject(e)&&!_.isArray(e)?e:1===e.length?e[0]:merge.recursive.apply(this,e)};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * @name JavaScript/NodeJS Merge v1.2.1
	 * @author yeikos
	 * @repository https://github.com/yeikos/js.merge

	 * Copyright 2014 yeikos - MIT license
	 * https://raw.github.com/yeikos/js.merge/master/LICENSE
	 */

	;(function(isNode) {

		/**
		 * Merge one or more objects 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		var Public = function(clone) {

			return merge(clone === true, false, arguments);

		}, publicName = 'merge';

		/**
		 * Merge two or more objects recursively 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		Public.recursive = function(clone) {

			return merge(clone === true, true, arguments);

		};

		/**
		 * Clone the input removing any reference
		 * @param mixed input
		 * @return mixed
		 */

		Public.clone = function(input) {

			var output = input,
				type = typeOf(input),
				index, size;

			if (type === 'array') {

				output = [];
				size = input.length;

				for (index=0;index<size;++index)

					output[index] = Public.clone(input[index]);

			} else if (type === 'object') {

				output = {};

				for (index in input)

					output[index] = Public.clone(input[index]);

			}

			return output;

		};

		/**
		 * Merge two objects recursively
		 * @param mixed input
		 * @param mixed extend
		 * @return mixed
		 */

		function merge_recursive(base, extend) {

			if (typeOf(base) !== 'object')

				return extend;

			for (var key in extend) {

				if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

					base[key] = merge_recursive(base[key], extend[key]);

				} else {

					base[key] = extend[key];

				}

			}

			return base;

		}

		/**
		 * Merge two or more objects
		 * @param bool clone
		 * @param bool recursive
		 * @param array argv
		 * @return object
		 */

		function merge(clone, recursive, argv) {

			var result = argv[0],
				size = argv.length;

			if (clone || typeOf(result) !== 'object')

				result = {};

			for (var index=0;index<size;++index) {

				var item = argv[index],

					type = typeOf(item);

				if (type !== 'object') continue;

				for (var key in item) {

					if (key === '__proto__') continue;

					var sitem = clone ? Public.clone(item[key]) : item[key];

					if (recursive) {

						result[key] = merge_recursive(result[key], sitem);

					} else {

						result[key] = sitem;

					}

				}

			}

			return result;

		}

		/**
		 * Get type of variable
		 * @param mixed input
		 * @return string
		 *
		 * @see http://jsperf.com/typeofvar
		 */

		function typeOf(input) {

			return ({}).toString.call(input).slice(8, -1).toLowerCase();

		}

		if (isNode) {

			module.exports = Public;

		} else {

			window[publicName] = Public;

		}

	})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _,localProps,merge,transform;_=__webpack_require__(12),merge=__webpack_require__(17),localProps={borderRadius:function(r){if(null!=r)return{msBorderRadius:r,MozBorderRadius:r,OBorderRadius:r,WebkitBorderRadius:r,borderRadius:r}},boxShadow:function(r){if(null!=r)return{msBoxShadow:r,MozBoxShadow:r,OBoxShadow:r,WebkitBoxShadow:r,boxShadow:r}},userSelect:function(r){if(null!=r)return{WebkitTouchCallout:r,KhtmlUserSelect:r,MozUserSelect:r,msUserSelect:r,WebkitUserSelect:r,userSelect:r}},flex:function(r){if(null!=r)return{WebkitBoxFlex:r,MozBoxFlex:r,WebkitFlex:r,msFlex:r,flex:r}},flexBasis:function(r){if(null!=r)return{WebkitFlexBasis:r,flexBasis:r}},justifyContent:function(r){if(null!=r)return{WebkitJustifyContent:r,justifyContent:r}},transition:function(r){if(null!=r)return{msTransition:r,MozTransition:r,OTransition:r,WebkitTransition:r,transition:r}},transform:function(r){if(null!=r)return{msTransform:r,MozTransform:r,OTransform:r,WebkitTransform:r,transform:r}},Absolute:function(r){var e,t;if(null!=r)return e=r.split(" "),t={position:"absolute",top:e[0],right:e[1],bottom:e[2],left:e[3]}},Extend:function(r,e){if(e[r])return e[r]}},transform=function(r,e,t){var n,o,i,s,u,l,f;o=merge(e,localProps),l={};for(u in r)if(f=r[u],_.isObject(f)&&!_.isArray(f))l[u]=transform(f,e,r);else if(null!=o[u]){i=o[u](f,t);for(n in i)s=i[n],l[n]=s}else l[u]=f;return l},module.exports=function(r,e,t){return transform(r,e,t)};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var ColorPicker = __webpack_require__(20);

	var _require = __webpack_require__(59);

	var Container = _require.Container;
	var Grid = _require.Grid;

	var _require2 = __webpack_require__(43);

	var Raised = _require2.Raised;

	var Move = __webpack_require__(62);

	var HomeFeature = (function (_ReactCSS$Component) {
	  _inherits(HomeFeature, _ReactCSS$Component);

	  function HomeFeature() {
	    _classCallCheck(this, HomeFeature);

	    _get(Object.getPrototypeOf(HomeFeature.prototype), 'constructor', this).call(this);

	    this.state = {
	      h: 150,
	      s: .50,
	      l: .20,
	      a: 1
	    };

	    this.handleChangeComplete = this.handleChangeComplete.bind(this);
	  }

	  _createClass(HomeFeature, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          graphic: {
	            height: '580px',
	            background: '#ddd url("docs/images/bg-2.jpg")',
	            backgroundPosition: 'center center',
	            backgroundSize: 'cover'
	          },
	          logo: {
	            paddingTop: '40px'
	          },
	          square: {
	            width: '24px',
	            height: '24px',
	            background: 'url("docs/images/react-color.svg")'
	          },
	          title: {
	            paddingTop: '30px',
	            fontSize: '52px',
	            color: '#253727'
	          },
	          subtitle: {
	            fontSize: '20px',
	            lineHeight: '27px',
	            color: '#425655',
	            paddingTop: '15px',
	            fontWeight: '300',
	            maxWidth: '320px'
	          },
	          star: {
	            paddingTop: '25px',
	            paddingBottom: '20px'
	          },

	          chrome: {
	            paddingTop: '50px',
	            position: 'relative'
	          },
	          sketch: {
	            position: 'relative'
	          },
	          photoshop: {
	            position: 'relative'
	          },
	          compact: {
	            position: 'relative'
	          },
	          material: {
	            position: 'relative'
	          },
	          swatches: {
	            position: 'relative'
	          },
	          over: {
	            position: 'absolute',
	            width: '100%',
	            marginTop: '40px'
	          },

	          under: {
	            paddingTop: '130px'
	          },

	          slider: {
	            paddingTop: '10px',
	            position: 'relative'
	          },

	          split: {
	            display: 'flex',
	            justifyContent: 'space-between',
	            alignItems: 'flex-end',
	            position: 'absolute',
	            bottom: '0',
	            width: '100%'
	          },

	          label: {
	            textAlign: 'center',
	            position: 'absolute',
	            width: '100%',
	            color: 'rgba(0,0,0,.4)',
	            fontSize: '12px',
	            marginTop: '10px'
	          },
	          whiteLabel: {
	            Extend: 'label',
	            color: 'rgba(255,255,255,.7)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChangeComplete',
	    value: function handleChangeComplete(data) {
	      // console.log(data);
	      if (data.hsl !== this.state) {
	        this.setState(data.hsl);
	      }

	      this.props.onChange && this.props.onChange(data.hex);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var container = React.findDOMNode(this.refs.container);
	      var over = React.findDOMNode(this.refs.over);
	      var under = React.findDOMNode(this.refs.under);
	      var containerHeight = container.getBoundingClientRect().top + container.clientHeight;
	      var overHeight = over.getBoundingClientRect().top + over.clientHeight;

	      under.style.paddingTop = overHeight - containerHeight + 50 + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().feature },
	        React.createElement(
	          'div',
	          { style: this.styles().graphic, ref: 'container' },
	          React.createElement(
	            Container,
	            { width: 780 },
	            React.createElement(
	              Grid,
	              { preset: 'one' },
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'div',
	                  { style: this.styles().logo },
	                  React.createElement('div', { style: this.styles().square })
	                ),
	                React.createElement(
	                  'div',
	                  { style: this.styles().title },
	                  'React Color'
	                ),
	                React.createElement(
	                  'div',
	                  { style: this.styles().subtitle },
	                  'A Collection of Color Pickers from Sketch, Photoshop, Chrome & more'
	                ),
	                React.createElement(
	                  'div',
	                  { style: this.styles().star },
	                  React.createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large', scrolling: '0', width: '160px', height: '30px', frameBorder: '0' })
	                )
	              ),
	              React.createElement(
	                'div',
	                { style: this.styles().chrome },
	                React.createElement(
	                  Move,
	                  { inDelay: 200, inStartTransform: 'translateY(10px)', inEndTransform: 'translateY(0)' },
	                  React.createElement(ColorPicker, { type: 'chrome', color: this.state, onChangeComplete: this.handleChangeComplete }),
	                  React.createElement(
	                    'div',
	                    { style: this.styles().whiteLabel },
	                    'Chrome'
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              'div',
	              { style: this.styles().over, ref: 'over' },
	              React.createElement(
	                Move,
	                { inDelay: 400, inStartTransform: 'translateY(10px)', inEndTransform: 'translateY(0)' },
	                React.createElement(
	                  Grid,
	                  { preset: 'two' },
	                  React.createElement(
	                    'div',
	                    { style: this.styles().sketch },
	                    React.createElement(ColorPicker, { type: 'sketch', color: this.state, onChangeComplete: this.handleChangeComplete }),
	                    React.createElement(
	                      'div',
	                      { style: this.styles().label },
	                      'Sketch'
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { style: this.styles().photoshop },
	                    React.createElement(ColorPicker, { type: 'photoshop', color: this.state, onChangeComplete: this.handleChangeComplete }),
	                    React.createElement(
	                      'div',
	                      { style: this.styles().label },
	                      'Photoshop'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().under, ref: 'under' },
	          React.createElement(
	            Container,
	            { width: 780 },
	            React.createElement(
	              Move,
	              { inDelay: 600, inStartTransform: 'translateY(10px)', inEndTransform: 'translateY(0)' },
	              React.createElement(
	                Grid,
	                { preset: 'three' },
	                React.createElement(
	                  'div',
	                  { style: this.styles().group },
	                  React.createElement(
	                    'div',
	                    { style: this.styles().slider },
	                    React.createElement(ColorPicker, { type: 'slider', color: this.state, onChangeComplete: this.handleChangeComplete }),
	                    React.createElement(
	                      'div',
	                      { style: this.styles().label },
	                      'Slider'
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { style: this.styles().split, className: 'flexbox-fix' },
	                    React.createElement(
	                      'div',
	                      { style: this.styles().compact },
	                      React.createElement(ColorPicker, { type: 'compact', color: this.state, onChangeComplete: this.handleChangeComplete }),
	                      React.createElement(
	                        'div',
	                        { style: this.styles().label },
	                        'Compact'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { style: this.styles().material },
	                      React.createElement(ColorPicker, { type: 'material', color: this.state, onChangeComplete: this.handleChangeComplete }),
	                      React.createElement(
	                        'div',
	                        { style: this.styles().label },
	                        'Material'
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { style: this.styles().swatches },
	                  React.createElement(ColorPicker, { type: 'swatches', color: this.state, onChangeComplete: this.handleChangeComplete }),
	                  React.createElement(
	                    'div',
	                    { style: this.styles().label },
	                    'Swatches'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return HomeFeature;
	})(ReactCSS.Component);

	module.exports = HomeFeature;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var merge = __webpack_require__(17);
	var _ = __webpack_require__(12);
	var color = __webpack_require__(22);

	var Photoshop = __webpack_require__(24);
	var Sketch = __webpack_require__(34);
	var Chrome = __webpack_require__(37);
	var Swatches = __webpack_require__(41);
	var Slider = __webpack_require__(51);
	var Material = __webpack_require__(55);
	var Compact = __webpack_require__(56);

	var ColorPicker = (function (_ReactCSS$Component) {
	  _inherits(ColorPicker, _ReactCSS$Component);

	  function ColorPicker(props) {
	    _classCallCheck(this, ColorPicker);

	    _get(Object.getPrototypeOf(ColorPicker.prototype), 'constructor', this).call(this);

	    this.state = merge(color.toState(props.color, 0), {
	      visible: props.display
	    });

	    this.debounce = _.debounce(function (fn, data) {
	      fn(data);
	    }, 100);

	    this.handleChange = this.handleChange.bind(this);
	    this.handleHide = this.handleHide.bind(this);
	    this.handleAccept = this.handleAccept.bind(this);
	    this.handleCancel = this.handleCancel.bind(this);
	  }

	  _createClass(ColorPicker, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'show': {
	          wrap: {
	            zIndex: '999',
	            position: 'absolute',
	            display: 'block'
	          },
	          picker: {
	            zIndex: '2',
	            position: 'relative'
	          },
	          cover: {
	            position: 'fixed',
	            top: '0',
	            bottom: '0',
	            left: '0',
	            right: '0'
	          }
	        },
	        'hide': {
	          wrap: {
	            zIndex: '999',
	            position: 'absolute',
	            display: 'none'
	          }
	        },
	        'right': {
	          wrap: {
	            left: '100%',
	            marginLeft: '20px',
	            top: '0'
	          }
	        },
	        'left': {
	          wrap: {
	            right: '100%',
	            marginRight: '20px',
	            top: '0'
	          }
	        },
	        'below': {
	          wrap: {
	            left: '0',
	            marginLeft: '0',
	            top: '100%',
	            marginTop: '20px'
	          }
	        },
	        'override': {
	          wrap: this.props.positionCSS
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'below': this.props.position === 'below' && this.props.display !== null,
	        'right': this.props.position === 'right' && this.props.display !== null,
	        'left': this.props.position === 'left' && this.props.display !== null,
	        'show': this.state.visible === true,
	        'hide': this.state.visible === false,
	        'override': _.isPlainObject(this.props.positionCSS)
	      });
	    }
	  }, {
	    key: 'handleHide',
	    value: function handleHide() {
	      if (this.state.visible === true) {
	        this.setState({
	          visible: false
	        });
	        this.props.onClose && this.props.onClose({
	          hex: this.state.hex,
	          hsl: this.state.hsl,
	          rgb: this.state.rgb
	        });
	      }
	    }
	  }, {
	    key: 'handleAccept',
	    value: function handleAccept() {
	      this.handleHide();
	    }
	  }, {
	    key: 'handleCancel',
	    value: function handleCancel() {
	      if (this.state.visible === true) {
	        this.setState({
	          visible: false
	        });
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      data = color.simpleCheckForValidColor(data);
	      if (data) {
	        var colors = color.toState(data, data.h || this.state.oldHue);
	        this.setState(colors);
	        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors);
	        this.props.onChange && this.props.onChange(colors);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState(merge(color.toState(nextProps.color, this.state.oldHue), {
	        visible: nextProps.display
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var Picker;
	      if (this.props.type === 'sketch') {
	        Picker = Sketch;
	      } else if (this.props.type === 'photoshop') {
	        Picker = Photoshop;
	      } else if (this.props.type === 'chrome') {
	        Picker = Chrome;
	      } else if (this.props.type === 'swatches') {
	        Picker = Swatches;
	      } else if (this.props.type === 'slider') {
	        Picker = Slider;
	      } else if (this.props.type === 'material') {
	        Picker = Material;
	      } else if (this.props.type === 'compact') {
	        Picker = Compact;
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().wrap },
	        React.createElement(
	          'div',
	          { style: this.styles().picker },
	          React.createElement(Picker, _extends({}, this.state, { onChange: this.handleChange, onAccept: this.handleAccept, onCancel: this.handleCancel }))
	        ),
	        React.createElement('div', { style: this.styles().cover, onClick: this.handleHide })
	      );
	    }
	  }]);

	  return ColorPicker;
	})(ReactCSS.Component);

	ColorPicker.defaultProps = {
	  color: {
	    h: 250,
	    s: .50,
	    l: .20,
	    a: 1
	  },
	  display: null,
	  type: 'sketch',
	  position: 'right',
	  positionCSS: {}
	};

	module.exports = ColorPicker;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var tinycolor = __webpack_require__(23);

	module.exports = {

	  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
	    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
	    var checked = 0;
	    var passed = 0;
	    for (var i = 0; i < keysToCheck.length; i++) {
	      var letter = keysToCheck[i];
	      if (data[letter]) {
	        checked++;
	        if (!isNaN(data[letter])) {
	          passed++;
	        }
	      }
	    }

	    if (checked === passed) {
	      return data;
	    }
	  },

	  toState: function toState(data, oldHue) {
	    var color = tinycolor(data);
	    var hsl = color.toHsl();
	    var hsv = color.toHsv();
	    if (hsl.s === 0) {
	      hsl.h = oldHue || 0;
	      hsv.h = oldHue || 0;
	    }

	    return {
	      hsl: hsl,
	      hex: color.toHex(),
	      rgb: color.toRgb(),
	      hsv: hsv,
	      oldHue: data.h || oldHue || hsl.h
	    };
	  },

	  isValidHex: function isValidHex(hex) {
	    return tinycolor(hex).isValid();
	  }

	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// jscs: disable

	// TinyColor v1.1.2
	// https://github.com/bgrins/TinyColor
	// Brian Grinstead, MIT License

	(function() {

	var trimLeft = /^[\s,#]+/;
	var trimRight = /\s+$/;
	var tinyCounter = 0;
	var math = Math;
	var mathRound = math.round;
	var mathMin = math.min;
	var mathMax = math.max;
	var mathRandom = math.random;

	function tinycolor(color, opts) {

			color = (color) ? color : '';
			opts = opts || { };

			// If input is already a tinycolor, return itself
			if (color instanceof tinycolor) {
				 return color;
			}
			// If we are called as a function, call using new instead
			if (!(this instanceof tinycolor)) {
					return new tinycolor(color, opts);
			}

			var rgb = inputToRGB(color);
			this._originalInput = color,
			this._r = rgb.r,
			this._g = rgb.g,
			this._b = rgb.b,
			this._a = rgb.a,
			this._roundA = mathRound(100*this._a) / 100,
			this._format = opts.format || rgb.format;
			this._gradientType = opts.gradientType;

			// Don't let the range of [0,255] come back in [0,1].
			// Potentially lose a little bit of precision here, but will fix issues where
			// .5 gets interpreted as half of the total, instead of half of 1
			// If it was supposed to be 128, this was already taken care of by `inputToRgb`
			if (this._r < 1) { this._r = mathRound(this._r); }
			if (this._g < 1) { this._g = mathRound(this._g); }
			if (this._b < 1) { this._b = mathRound(this._b); }

			this._ok = rgb.ok;
			this._tc_id = tinyCounter++;
	}

	tinycolor.prototype = {
			isDark: function() {
					return this.getBrightness() < 128;
			},
			isLight: function() {
					return !this.isDark();
			},
			isValid: function() {
					return this._ok;
			},
			getOriginalInput: function() {
				return this._originalInput;
			},
			getFormat: function() {
					return this._format;
			},
			getAlpha: function() {
					return this._a;
			},
			getBrightness: function() {
					//http://www.w3.org/TR/AERT#color-contrast
					var rgb = this.toRgb();
					return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
			},
			getLuminance: function() {
					//http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
					var rgb = this.toRgb();
					var RsRGB, GsRGB, BsRGB, R, G, B;
					RsRGB = rgb.r/255;
					GsRGB = rgb.g/255;
					BsRGB = rgb.b/255;

					if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
					if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
					if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
					return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
			},
			setAlpha: function(value) {
					this._a = boundAlpha(value);
					this._roundA = mathRound(100*this._a) / 100;
					return this;
			},
			toHsv: function() {
					var hsv = rgbToHsv(this._r, this._g, this._b);
					return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
			},
			toHsvString: function() {
					var hsv = rgbToHsv(this._r, this._g, this._b);
					var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
					return (this._a == 1) ?
						"hsv("	+ h + ", " + s + "%, " + v + "%)" :
						"hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
			},
			toHsl: function() {
					var hsl = rgbToHsl(this._r, this._g, this._b);
					return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
			},
			toHslString: function() {
					var hsl = rgbToHsl(this._r, this._g, this._b);
					var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
					return (this._a == 1) ?
						"hsl("	+ h + ", " + s + "%, " + l + "%)" :
						"hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
			},
			toHex: function(allow3Char) {
					return rgbToHex(this._r, this._g, this._b, allow3Char);
			},
			toHexString: function(allow3Char) {
					return '#' + this.toHex(allow3Char);
			},
			toHex8: function() {
					return rgbaToHex(this._r, this._g, this._b, this._a);
			},
			toHex8String: function() {
					return '#' + this.toHex8();
			},
			toRgb: function() {
					return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
			},
			toRgbString: function() {
					return (this._a == 1) ?
						"rgb("	+ mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
						"rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
			},
			toPercentageRgb: function() {
					return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
			},
			toPercentageRgbString: function() {
					return (this._a == 1) ?
						"rgb("	+ mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
						"rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
			},
			toName: function() {
					if (this._a === 0) {
							return "transparent";
					}

					if (this._a < 1) {
							return false;
					}

					return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
			},
			toFilter: function(secondColor) {
					var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
					var secondHex8String = hex8String;
					var gradientType = this._gradientType ? "GradientType = 1, " : "";

					if (secondColor) {
							var s = tinycolor(secondColor);
							secondHex8String = s.toHex8String();
					}

					return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
			},
			toString: function(format) {
					var formatSet = !!format;
					format = format || this._format;

					var formattedString = false;
					var hasAlpha = this._a < 1 && this._a >= 0;
					var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

					if (needsAlphaFormat) {
							// Special case for "transparent", all other non-alpha formats
							// will return rgba when there is transparency.
							if (format === "name" && this._a === 0) {
									return this.toName();
							}
							return this.toRgbString();
					}
					if (format === "rgb") {
							formattedString = this.toRgbString();
					}
					if (format === "prgb") {
							formattedString = this.toPercentageRgbString();
					}
					if (format === "hex" || format === "hex6") {
							formattedString = this.toHexString();
					}
					if (format === "hex3") {
							formattedString = this.toHexString(true);
					}
					if (format === "hex8") {
							formattedString = this.toHex8String();
					}
					if (format === "name") {
							formattedString = this.toName();
					}
					if (format === "hsl") {
							formattedString = this.toHslString();
					}
					if (format === "hsv") {
							formattedString = this.toHsvString();
					}

					return formattedString || this.toHexString();
			},

			_applyModification: function(fn, args) {
					var color = fn.apply(null, [this].concat([].slice.call(args)));
					this._r = color._r;
					this._g = color._g;
					this._b = color._b;
					this.setAlpha(color._a);
					return this;
			},
			lighten: function() {
					return this._applyModification(lighten, arguments);
			},
			brighten: function() {
					return this._applyModification(brighten, arguments);
			},
			darken: function() {
					return this._applyModification(darken, arguments);
			},
			desaturate: function() {
					return this._applyModification(desaturate, arguments);
			},
			saturate: function() {
					return this._applyModification(saturate, arguments);
			},
			greyscale: function() {
					return this._applyModification(greyscale, arguments);
			},
			spin: function() {
					return this._applyModification(spin, arguments);
			},

			_applyCombination: function(fn, args) {
					return fn.apply(null, [this].concat([].slice.call(args)));
			},
			analogous: function() {
					return this._applyCombination(analogous, arguments);
			},
			complement: function() {
					return this._applyCombination(complement, arguments);
			},
			monochromatic: function() {
					return this._applyCombination(monochromatic, arguments);
			},
			splitcomplement: function() {
					return this._applyCombination(splitcomplement, arguments);
			},
			triad: function() {
					return this._applyCombination(triad, arguments);
			},
			tetrad: function() {
					return this._applyCombination(tetrad, arguments);
			}
	};

	// If input is an object, force 1 into "1.0" to handle ratios properly
	// String input requires "1.0" as input, so 1 will be treated as 1
	tinycolor.fromRatio = function(color, opts) {
			if (typeof color == "object") {
					var newColor = {};
					for (var i in color) {
							if (color.hasOwnProperty(i)) {
									if (i === "a") {
											newColor[i] = color[i];
									}
									else {
											newColor[i] = convertToPercentage(color[i]);
									}
							}
					}
					color = newColor;
			}

			return tinycolor(color, opts);
	};

	// Given a string or object, convert that input to RGB
	// Possible string inputs:
	//
	//		 "red"
	//		 "#f00" or "f00"
	//		 "#ff0000" or "ff0000"
	//		 "#ff000000" or "ff000000"
	//		 "rgb 255 0 0" or "rgb (255, 0, 0)"
	//		 "rgb 1.0 0 0" or "rgb (1, 0, 0)"
	//		 "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
	//		 "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
	//		 "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
	//		 "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
	//		 "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
	//
	function inputToRGB(color) {

			var rgb = { r: 0, g: 0, b: 0 };
			var a = 1;
			var ok = false;
			var format = false;

			if (typeof color == "string") {
					color = stringInputToObject(color);
			}

			if (typeof color == "object") {
					if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
							rgb = rgbToRgb(color.r, color.g, color.b);
							ok = true;
							format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
					}
					else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
							color.s = convertToPercentage(color.s, 1);
							color.v = convertToPercentage(color.v, 1);
							rgb = hsvToRgb(color.h, color.s, color.v);
							ok = true;
							format = "hsv";
					}
					else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
							color.s = convertToPercentage(color.s);
							color.l = convertToPercentage(color.l);
							rgb = hslToRgb(color.h, color.s, color.l);
							ok = true;
							format = "hsl";
					}

					if (color.hasOwnProperty("a")) {
							a = color.a;
					}
			}

			a = boundAlpha(a);

			return {
					ok: ok,
					format: color.format || format,
					r: mathMin(255, mathMax(rgb.r, 0)),
					g: mathMin(255, mathMax(rgb.g, 0)),
					b: mathMin(255, mathMax(rgb.b, 0)),
					a: a
			};
	}


	// Conversion Functions
	// --------------------

	// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
	// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

	// `rgbToRgb`
	// Handle bounds / percentage checking to conform to CSS color spec
	// <http://www.w3.org/TR/css3-color/>
	// *Assumes:* r, g, b in [0, 255] or [0, 1]
	// *Returns:* { r, g, b } in [0, 255]
	function rgbToRgb(r, g, b){
			return {
					r: bound01(r, 255) * 255,
					g: bound01(g, 255) * 255,
					b: bound01(b, 255) * 255
			};
	}

	// `rgbToHsl`
	// Converts an RGB color value to HSL.
	// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
	// *Returns:* { h, s, l } in [0,1]
	function rgbToHsl(r, g, b) {

			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);

			var max = mathMax(r, g, b), min = mathMin(r, g, b);
			var h, s, l = (max + min) / 2;

			if(max == min) {
					h = s = 0; // achromatic
			}
			else {
					var d = max - min;
					s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
					switch(max) {
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
					}

					h /= 6;
			}

			return { h: h, s: s, l: l };
	}

	// `hslToRgb`
	// Converts an HSL color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	function hslToRgb(h, s, l) {
			var r, g, b;

			h = bound01(h, 360);
			s = bound01(s, 100);
			l = bound01(l, 100);

			function hue2rgb(p, q, t) {
					if(t < 0) t += 1;
					if(t > 1) t -= 1;
					if(t < 1/6) return p + (q - p) * 6 * t;
					if(t < 1/2) return q;
					if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
					return p;
			}

			if(s === 0) {
					r = g = b = l; // achromatic
			}
			else {
					var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
					var p = 2 * l - q;
					r = hue2rgb(p, q, h + 1/3);
					g = hue2rgb(p, q, h);
					b = hue2rgb(p, q, h - 1/3);
			}

			return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHsv`
	// Converts an RGB color value to HSV
	// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
	// *Returns:* { h, s, v } in [0,1]
	function rgbToHsv(r, g, b) {

			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);

			var max = mathMax(r, g, b), min = mathMin(r, g, b);
			var h, s, v = max;

			var d = max - min;
			s = max === 0 ? 0 : d / max;

			if(max == min) {
					h = 0; // achromatic
			}
			else {
					switch(max) {
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
					}
					h /= 6;
			}
			return { h: h, s: s, v: v };
	}

	// `hsvToRgb`
	// Converts an HSV color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	 function hsvToRgb(h, s, v) {

			h = bound01(h, 360) * 6;
			s = bound01(s, 100);
			v = bound01(v, 100);

			var i = math.floor(h),
					f = h - i,
					p = v * (1 - s),
					q = v * (1 - f * s),
					t = v * (1 - (1 - f) * s),
					mod = i % 6,
					r = [v, q, p, p, t, v][mod],
					g = [t, v, v, q, p, p][mod],
					b = [p, p, t, v, v, q][mod];

			return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHex`
	// Converts an RGB color to hex
	// Assumes r, g, and b are contained in the set [0, 255]
	// Returns a 3 or 6 character hex
	function rgbToHex(r, g, b, allow3Char) {

			var hex = [
					pad2(mathRound(r).toString(16)),
					pad2(mathRound(g).toString(16)),
					pad2(mathRound(b).toString(16))
			];

			// Return a 3 character hex if possible
			if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
					return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
			}

			return hex.join("");
	}
			// `rgbaToHex`
			// Converts an RGBA color plus alpha transparency to hex
			// Assumes r, g, b and a are contained in the set [0, 255]
			// Returns an 8 character hex
			function rgbaToHex(r, g, b, a) {

					var hex = [
							pad2(convertDecimalToHex(a)),
							pad2(mathRound(r).toString(16)),
							pad2(mathRound(g).toString(16)),
							pad2(mathRound(b).toString(16))
					];

					return hex.join("");
			}

	// `equals`
	// Can be called with any tinycolor input
	tinycolor.equals = function (color1, color2) {
			if (!color1 || !color2) { return false; }
			return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
	};
	tinycolor.random = function() {
			return tinycolor.fromRatio({
					r: mathRandom(),
					g: mathRandom(),
					b: mathRandom()
			});
	};


	// Modification Functions
	// ----------------------
	// Thanks to less.js for some of the basics here
	// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

	function desaturate(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.s -= amount / 100;
			hsl.s = clamp01(hsl.s);
			return tinycolor(hsl);
	}

	function saturate(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.s += amount / 100;
			hsl.s = clamp01(hsl.s);
			return tinycolor(hsl);
	}

	function greyscale(color) {
			return tinycolor(color).desaturate(100);
	}

	function lighten (color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.l += amount / 100;
			hsl.l = clamp01(hsl.l);
			return tinycolor(hsl);
	}

	function brighten(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var rgb = tinycolor(color).toRgb();
			rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
			rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
			rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
			return tinycolor(rgb);
	}

	function darken (color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.l -= amount / 100;
			hsl.l = clamp01(hsl.l);
			return tinycolor(hsl);
	}

	// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	// Values outside of this range will be wrapped into this range.
	function spin(color, amount) {
			var hsl = tinycolor(color).toHsl();
			var hue = (mathRound(hsl.h) + amount) % 360;
			hsl.h = hue < 0 ? 360 + hue : hue;
			return tinycolor(hsl);
	}

	// Combination Functions
	// ---------------------
	// Thanks to jQuery xColor for some of the ideas behind these
	// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

	function complement(color) {
			var hsl = tinycolor(color).toHsl();
			hsl.h = (hsl.h + 180) % 360;
			return tinycolor(hsl);
	}

	function triad(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
			];
	}

	function tetrad(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
			];
	}

	function splitcomplement(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
					tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
			];
	}

	function analogous(color, results, slices) {
			results = results || 6;
			slices = slices || 30;

			var hsl = tinycolor(color).toHsl();
			var part = 360 / slices;
			var ret = [tinycolor(color)];

			for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
					hsl.h = (hsl.h + part) % 360;
					ret.push(tinycolor(hsl));
			}
			return ret;
	}

	function monochromatic(color, results) {
			results = results || 6;
			var hsv = tinycolor(color).toHsv();
			var h = hsv.h, s = hsv.s, v = hsv.v;
			var ret = [];
			var modification = 1 / results;

			while (results--) {
					ret.push(tinycolor({ h: h, s: s, v: v}));
					v = (v + modification) % 1;
			}

			return ret;
	}

	// Utility Functions
	// ---------------------

	tinycolor.mix = function(color1, color2, amount) {
			amount = (amount === 0) ? 0 : (amount || 50);

			var rgb1 = tinycolor(color1).toRgb();
			var rgb2 = tinycolor(color2).toRgb();

			var p = amount / 100;
			var w = p * 2 - 1;
			var a = rgb2.a - rgb1.a;

			var w1;

			if (w * a == -1) {
					w1 = w;
			} else {
					w1 = (w + a) / (1 + w * a);
			}

			w1 = (w1 + 1) / 2;

			var w2 = 1 - w1;

			var rgba = {
					r: rgb2.r * w1 + rgb1.r * w2,
					g: rgb2.g * w1 + rgb1.g * w2,
					b: rgb2.b * w1 + rgb1.b * w2,
					a: rgb2.a * p	+ rgb1.a * (1 - p)
			};

			return tinycolor(rgba);
	};


	// Readability Functions
	// ---------------------
	// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

	// `contrast`
	// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
	tinycolor.readability = function(color1, color2) {
			var c1 = tinycolor(color1);
			var c2 = tinycolor(color2);
			return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
	};

	// `isReadable`
	// Ensure that foreground and background color combinations meet WCAG2 guidelines.
	// The third argument is an optional Object.
	//			the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
	//			the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
	// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

	// *Example*
	//		tinycolor.isReadable("#000", "#111") => false
	//		tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false

	tinycolor.isReadable = function(color1, color2, wcag2) {
			var readability = tinycolor.readability(color1, color2);
			var wcag2Parms, out;

			out = false;

			wcag2Parms = validateWCAG2Parms(wcag2);
			switch (wcag2Parms.level + wcag2Parms.size) {
					case "AAsmall":
					case "AAAlarge":
							out = readability >= 4.5;
							break;
					case "AAlarge":
							out = readability >= 3;
							break;
					case "AAAsmall":
							out = readability >= 7;
							break;
			}
			return out;

	};

	// `mostReadable`
	// Given a base color and a list of possible foreground or background
	// colors for that base, returns the most readable color.
	// Optionally returns Black or White if the most readable color is unreadable.
	// *Example*
	//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
	//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();	// "#ffffff"
	//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
	//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


	tinycolor.mostReadable = function(baseColor, colorList, args) {
			var bestColor = null;
			var bestScore = 0;
			var readability;
			var includeFallbackColors, level, size ;
			args = args || {};
			includeFallbackColors = args.includeFallbackColors ;
			level = args.level;
			size = args.size;

			for (var i= 0; i < colorList.length ; i++) {
					readability = tinycolor.readability(baseColor, colorList[i]);
					if (readability > bestScore) {
							bestScore = readability;
							bestColor = tinycolor(colorList[i]);
					}
			}

			if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
					return bestColor;
			}
			else {
					args.includeFallbackColors=false;
					return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
			}
	};


	// Big List of Colors
	// ------------------
	// <http://www.w3.org/TR/css3-color/#svg-color>
	var names = tinycolor.names = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "0ff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000",
			blanchedalmond: "ffebcd",
			blue: "00f",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			burntsienna: "ea7e5d",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "0ff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgreen: "006400",
			darkgrey: "a9a9a9",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkslategrey: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dimgrey: "696969",
			dodgerblue: "1e90ff",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "f0f",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			green: "008000",
			greenyellow: "adff2f",
			grey: "808080",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgray: "d3d3d3",
			lightgreen: "90ee90",
			lightgrey: "d3d3d3",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslategray: "789",
			lightslategrey: "789",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "0f0",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "f0f",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370db",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "db7093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			rebeccapurple: "663399",
			red: "f00",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			slategrey: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			wheat: "f5deb3",
			white: "fff",
			whitesmoke: "f5f5f5",
			yellow: "ff0",
			yellowgreen: "9acd32"
	};

	// Make it easy to access colors via `hexNames[hex]`
	var hexNames = tinycolor.hexNames = flip(names);


	// Utilities
	// ---------

	// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
	function flip(o) {
			var flipped = { };
			for (var i in o) {
					if (o.hasOwnProperty(i)) {
							flipped[o[i]] = i;
					}
			}
			return flipped;
	}

	// Return a valid alpha value [0,1] with all invalid values being set to 1
	function boundAlpha(a) {
			a = parseFloat(a);

			if (isNaN(a) || a < 0 || a > 1) {
					a = 1;
			}

			return a;
	}

	// Take input from [0, n] and return it as [0, 1]
	function bound01(n, max) {
			if (isOnePointZero(n)) { n = "100%"; }

			var processPercent = isPercentage(n);
			n = mathMin(max, mathMax(0, parseFloat(n)));

			// Automatically convert percentage into number
			if (processPercent) {
					n = parseInt(n * max, 10) / 100;
			}

			// Handle floating point rounding errors
			if ((math.abs(n - max) < 0.000001)) {
					return 1;
			}

			// Convert into [0, 1] range if it isn't already
			return (n % max) / parseFloat(max);
	}

	// Force a number between 0 and 1
	function clamp01(val) {
			return mathMin(1, mathMax(0, val));
	}

	// Parse a base-16 hex value into a base-10 integer
	function parseIntFromHex(val) {
			return parseInt(val, 16);
	}

	// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
	// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
	function isOnePointZero(n) {
			return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
	}

	// Check to see if string passed in is a percentage
	function isPercentage(n) {
			return typeof n === "string" && n.indexOf('%') != -1;
	}

	// Force a hex value to have 2 characters
	function pad2(c) {
			return c.length == 1 ? '0' + c : '' + c;
	}

	// Replace a decimal with it's percentage value
	function convertToPercentage(n, multiplier) {
			multiplier = multiplier || 100;
			if (n <= 1) {
					n = (n * multiplier) + "%";
			}

			return n;
	}

	// Converts a decimal to a hex value
	function convertDecimalToHex(d) {
			return Math.round(parseFloat(d) * 255).toString(16);
	}
	// Converts a hex value to a decimal
	function convertHexToDecimal(h) {
			return (parseIntFromHex(h) / 255);
	}

	var matchers = (function() {

			// <http://www.w3.org/TR/css3-values/#integers>
			var CSS_INTEGER = "[-\\+]?\\d+%?";

			// <http://www.w3.org/TR/css3-values/#number-value>
			var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

			// Allow positive/negative integer/number.	Don't capture the either/or, just the entire outcome.
			var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

			// Actual matching.
			// Parentheses and commas are optional, but not required.
			// Whitespace can take the place of commas or opening paren
			var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
			var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

			return {
					rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
					rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
					hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
					hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
					hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
					hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
					hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
					hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
					hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			};
	})();

	// `stringInputToObject`
	// Permissive string parsing.	Take in a number of formats, and output an object
	// based on detected format.	Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
	function stringInputToObject(color) {

			color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
			var named = false;
			if (names[color]) {
					color = names[color];
					named = true;
			}
			else if (color == 'transparent') {
					return { r: 0, g: 0, b: 0, a: 0, format: "name" };
			}

			// Try to match string input using regular expressions.
			// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
			// Just return an object and let the conversion functions handle that.
			// This way the result will be the same whether the tinycolor is initialized with string or object.
			var match;
			if ((match = matchers.rgb.exec(color))) {
					return { r: match[1], g: match[2], b: match[3] };
			}
			if ((match = matchers.rgba.exec(color))) {
					return { r: match[1], g: match[2], b: match[3], a: match[4] };
			}
			if ((match = matchers.hsl.exec(color))) {
					return { h: match[1], s: match[2], l: match[3] };
			}
			if ((match = matchers.hsla.exec(color))) {
					return { h: match[1], s: match[2], l: match[3], a: match[4] };
			}
			if ((match = matchers.hsv.exec(color))) {
					return { h: match[1], s: match[2], v: match[3] };
			}
			if ((match = matchers.hsva.exec(color))) {
					return { h: match[1], s: match[2], v: match[3], a: match[4] };
			}
			if ((match = matchers.hex8.exec(color))) {
					return {
							a: convertHexToDecimal(match[1]),
							r: parseIntFromHex(match[2]),
							g: parseIntFromHex(match[3]),
							b: parseIntFromHex(match[4]),
							format: named ? "name" : "hex8"
					};
			}
			if ((match = matchers.hex6.exec(color))) {
					return {
							r: parseIntFromHex(match[1]),
							g: parseIntFromHex(match[2]),
							b: parseIntFromHex(match[3]),
							format: named ? "name" : "hex"
					};
			}
			if ((match = matchers.hex3.exec(color))) {
					return {
							r: parseIntFromHex(match[1] + '' + match[1]),
							g: parseIntFromHex(match[2] + '' + match[2]),
							b: parseIntFromHex(match[3] + '' + match[3]),
							format: named ? "name" : "hex"
					};
			}

			return false;
	}

	function validateWCAG2Parms(parms) {
			// return valid WCAG2 parms for isReadable.
			// If input parms are invalid, return {"level":"AA", "size":"small"}
			var level, size;
			parms = parms || {"level":"AA", "size":"small"};
			level = (parms.level || "AA").toUpperCase();
			size = (parms.size || "small").toLowerCase();
			if (level !== "AA" && level !== "AAA") {
					level = "AA";
			}
			if (size !== "small" && size !== "large") {
					size = "small";
			}
			return {"level":level, "size":size};
	}
	// Node: Export function
	if (typeof module !== "undefined" && module.exports) {
			module.exports = tinycolor;
	}
	// AMD/requirejs: Define the module
	else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// Browser: Expose to window
	else {
			window.tinycolor = tinycolor;
	}

	})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _require = __webpack_require__(25);

	var Saturation = _require.Saturation;
	var Hue = _require.Hue;

	var PhotoshopFields = __webpack_require__(31);
	var PhotoshopPointerCircle = __webpack_require__(32);
	var PhotoshopPointer = __webpack_require__(33);

	var PhotoshopPicker = (function (_ReactCSS$Component) {
	  _inherits(PhotoshopPicker, _ReactCSS$Component);

	  function PhotoshopPicker(props) {
	    _classCallCheck(this, PhotoshopPicker);

	    _get(Object.getPrototypeOf(PhotoshopPicker.prototype), 'constructor', this).call(this);

	    this.state = {
	      currentColor: props.hex
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleAccept = this.handleAccept.bind(this);
	    this.handleCancel = this.handleCancel.bind(this);
	  }

	  _createClass(PhotoshopPicker, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            background: '#DCDCDC',
	            borderRadius: '4px',
	            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
	            boxSizing: 'initial',
	            width: '513px'
	          },
	          head: {
	            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
	            borderBottom: '1px solid #B1B1B1',
	            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
	            height: '23px',
	            lineHeight: '24px',
	            borderRadius: '4px 4px 0 0',
	            fontSize: '13px',
	            color: '#4D4D4D',
	            textAlign: 'center'
	          },
	          body: {
	            padding: '15px 15px 0',
	            display: 'flex'
	          },
	          saturation: {
	            width: '256px',
	            height: '256px',
	            position: 'relative',
	            border: '2px solid #B3B3B3',
	            borderBottom: '2px solid #F0F0F0',
	            overflow: 'hidden'
	          },
	          hue: {
	            position: 'relative',
	            height: '256px',
	            width: '19px',
	            marginLeft: '10px',
	            border: '2px solid #B3B3B3',
	            borderBottom: '2px solid #F0F0F0'
	          },
	          Hue: {
	            direction: 'vertical'
	          },
	          controls: {
	            width: '180px',
	            marginLeft: '10px'
	          },

	          top: {
	            display: 'flex'
	          },
	          previews: {
	            width: '60px'
	          },
	          swatches: {
	            border: '1px solid #B3B3B3',
	            borderBottom: '1px solid #F0F0F0',
	            marginBottom: '2px',
	            marginTop: '1px'
	          },
	          'new': {
	            height: '34px',
	            background: 'rgb(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ')',
	            boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
	          },
	          current: {
	            height: '34px',
	            background: '#' + this.state.currentColor,
	            boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
	          },
	          label: {
	            fontSize: '14px',
	            color: '#000',
	            textAlign: 'center'
	          },
	          actions: {
	            flex: '1',
	            marginLeft: '20px'
	          },
	          button: {
	            backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
	            border: '1px solid #878787',
	            borderRadius: '2px',
	            height: '20px',
	            boxShadow: '0 1px 0 0 #EAEAEA',
	            fontSize: '14px',
	            color: '#000',
	            lineHeight: '20px',
	            textAlign: 'center',
	            marginBottom: '10px'
	          },
	          acceptButton: {
	            Extend: 'button',
	            boxShadow: '0 0 0 1px #878787'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      this.props.onChange(data);
	    }
	  }, {
	    key: 'handleAccept',
	    value: function handleAccept() {
	      this.props.onAccept && this.props.onAccept();
	    }
	  }, {
	    key: 'handleCancel',
	    value: function handleCancel() {
	      this.props.onCancel && this.props.onCancel();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var header;

	      if (this.props.header) {
	        header = React.createElement(
	          'div',
	          { style: this.styles().head },
	          this.props.header
	        );
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().picker },
	        header,
	        React.createElement(
	          'div',
	          { style: this.styles().body, className: 'flexbox-fix' },
	          React.createElement(
	            'div',
	            { style: this.styles().saturation },
	            React.createElement(Saturation, _extends({}, this.styles().Saturation, this.props, { pointer: PhotoshopPointerCircle, onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().hue },
	            React.createElement(Hue, _extends({}, this.styles().Hue, this.props, { pointer: PhotoshopPointer, onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().controls },
	            React.createElement(
	              'div',
	              { style: this.styles().top, className: 'flexbox-fix' },
	              React.createElement(
	                'div',
	                { style: this.styles().previews },
	                React.createElement(
	                  'div',
	                  { style: this.styles().label },
	                  'new'
	                ),
	                React.createElement(
	                  'div',
	                  { style: this.styles().swatches },
	                  React.createElement('div', { style: this.styles()['new'] }),
	                  React.createElement('div', { style: this.styles().current })
	                ),
	                React.createElement(
	                  'div',
	                  { style: this.styles().label },
	                  'current'
	                )
	              ),
	              React.createElement(
	                'div',
	                { style: this.styles().actions },
	                React.createElement(
	                  'div',
	                  { style: this.styles().acceptButton, onClick: this.handleAccept },
	                  'OK'
	                ),
	                React.createElement(
	                  'div',
	                  { style: this.styles().button, onClick: this.handleCancel },
	                  'Cancel'
	                ),
	                React.createElement(PhotoshopFields, this.props)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return PhotoshopPicker;
	})(ReactCSS.Component);

	PhotoshopPicker.defaultProps = {
	  header: 'Color Picker'
	};

	module.exports = PhotoshopPicker;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  Alpha: __webpack_require__(26),
	  Checkboard: __webpack_require__(27),
	  EditableInput: __webpack_require__(28),
	  Hue: __webpack_require__(29),
	  Saturation: __webpack_require__(30)
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var Checkboard = __webpack_require__(27);

	var Alpha = (function (_ReactCSS$Component) {
	  _inherits(Alpha, _ReactCSS$Component);

	  function Alpha() {
	    _classCallCheck(this, Alpha);

	    _get(Object.getPrototypeOf(Alpha.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	    this.handleMouseDown = this.handleMouseDown.bind(this);
	    this.handleMouseUp = this.handleMouseUp.bind(this);
	  }

	  _createClass(Alpha, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          alpha: {
	            Absolute: '0 0 0 0',
	            borderRadius: this.props.radius
	          },
	          checkboard: {
	            Absolute: '0 0 0 0',
	            overflow: 'hidden'
	          },
	          gradient: {
	            Absolute: '0 0 0 0',
	            background: 'linear-gradient(to right, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 0) 0%, rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', 1) 100%)',
	            boxShadow: this.props.shadow,
	            borderRadius: this.props.radius
	          },
	          container: {
	            position: 'relative',
	            zIndex: '2',
	            height: '100%',
	            margin: '0 3px'
	          },
	          pointer: {
	            zIndex: '2',
	            position: 'absolute',
	            left: this.props.rgb.a * 100 + '%'
	          },
	          slider: {
	            width: '4px',
	            borderRadius: '1px',
	            height: '12px',
	            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
	            background: '#fff',
	            marginTop: '1px',
	            transform: 'translateX(-2px)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e, skip) {
	      !skip && e.preventDefault();
	      var container = React.findDOMNode(this.refs.container);
	      var containerWidth = container.clientWidth;
	      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);

	      var a;
	      if (left < 0) {
	        a = 0;
	      } else if (left > containerWidth) {
	        a = 1;
	      } else {
	        a = Math.round(left * 100 / containerWidth) / 100;
	      }

	      if (this.props.a !== a) {
	        this.props.onChange({ h: this.props.hsl.h, s: this.props.hsl.s, l: this.props.hsl.l, a: a });
	      }
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(e) {
	      this.handleChange(e, true);
	      window.addEventListener('mousemove', this.handleChange);
	      window.addEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pointer = React.createElement('div', { style: this.styles().slider });

	      if (this.props.pointer) {
	        pointer = React.createElement(this.props.pointer, this.props);
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().alpha },
	        React.createElement(
	          'div',
	          { style: this.styles().checkboard },
	          React.createElement(Checkboard, null)
	        ),
	        React.createElement('div', { style: this.styles().gradient }),
	        React.createElement(
	          'div',
	          { style: this.styles().container, ref: 'container', onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange },
	          React.createElement(
	            'div',
	            { style: this.styles().pointer, ref: 'pointer' },
	            pointer
	          )
	        )
	      );
	    }
	  }]);

	  return Alpha;
	})(ReactCSS.Component);

	module.exports = Alpha;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _checkboardCache = {};

	function renderCheckboard(c1, c2, size) {
	  if (typeof document == 'undefined') return null; // Dont Render On Server
	  var canvas = document.createElement('canvas');
	  canvas.width = canvas.height = size * 2;
	  var ctx = canvas.getContext('2d');
	  ctx.fillStyle = c1;
	  ctx.fillRect(0, 0, canvas.width, canvas.height);
	  ctx.fillStyle = c2;
	  ctx.fillRect(0, 0, size, size);
	  ctx.translate(size, size);
	  ctx.fillRect(0, 0, size, size);
	  return canvas.toDataURL();
	}

	function getCheckboard(c1, c2, size) {
	  var key = c1 + ',' + c2 + ',' + size;

	  if (_checkboardCache[key]) {
	    return _checkboardCache[key];
	  } else {
	    var checkboard = renderCheckboard(c1, c2, size);
	    _checkboardCache[key] = checkboard;
	    return checkboard;
	  }
	}

	var Checkboard = (function (_ReactCSS$Component) {
	  _inherits(Checkboard, _ReactCSS$Component);

	  function Checkboard() {
	    _classCallCheck(this, Checkboard);

	    _get(Object.getPrototypeOf(Checkboard.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Checkboard, [{
	    key: 'classes',
	    value: function classes() {
	      var background = getCheckboard(this.props.white, this.props.grey, this.props.size);
	      return {
	        'default': {
	          grid: {
	            Absolute: '0 0 0 0',
	            background: 'url(' + background + ') center left'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { style: this.styles().grid, ref: 'grid' });
	    }
	  }]);

	  return Checkboard;
	})(ReactCSS.Component);

	Checkboard.defaultProps = {
	  size: 8,
	  white: '#fff',
	  grey: '#e6e6e6'
	};

	module.exports = Checkboard;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var EditableInput = (function (_ReactCSS$Component) {
	  _inherits(EditableInput, _ReactCSS$Component);

	  function EditableInput(props) {
	    _classCallCheck(this, EditableInput);

	    _get(Object.getPrototypeOf(EditableInput.prototype), 'constructor', this).call(this);

	    this.state = {
	      value: String(props.value).toUpperCase(),
	      blurValue: String(props.value).toUpperCase()
	    }, this.handleChange = this.handleChange.bind(this);
	    this.handleDrag = this.handleDrag.bind(this);
	    this.handleBlur = this.handleBlur.bind(this);
	    this.handleKeyDown = this.handleKeyDown.bind(this);
	    this.handleMouseDown = this.handleMouseDown.bind(this);
	    this.handleMouseUp = this.handleMouseUp.bind(this);
	  }

	  _createClass(EditableInput, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'user-override': {
	          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
	          input: this.props.style && this.props.style.input ? this.props.style.input : {},
	          label: this.props.style && this.props.style.label ? this.props.style.label : {}
	        },
	        'dragLabel-true': {
	          label: {
	            cursor: 'ew-resize'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'user-override': true
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var input = React.findDOMNode(this.refs.input);
	      if (nextProps.value !== this.state.value) {
	        if (input === document.activeElement) {
	          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
	        } else {
	          this.setState({ value: String(nextProps.value).toUpperCase() });
	        }
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      if (this.state.blurValue) {
	        this.setState({ value: this.state.blurValue, blurValue: null });
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      if (this.props.label !== null) {
	        var obj = {};
	        obj[this.props.label] = e.target.value;
	        this.props.onChange(obj);
	      } else {
	        this.props.onChange(e.target.value);
	      }

	      this.setState({ value: e.target.value });
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      var number = Number(e.target.value);
	      if (number) {
	        var amount = this.props.arrowOffset || 1;

	        // Up
	        if (e.keyCode === 38) {
	          if (this.props.label !== null) {
	            var obj = {};
	            obj[this.props.label] = number + amount;
	            this.props.onChange(obj);
	          } else {
	            this.props.onChange(number + amount);
	          }

	          this.setState({ value: number + amount });
	        }

	        // Down
	        if (e.keyCode === 40) {
	          if (this.props.label !== null) {
	            var obj = {};
	            obj[this.props.label] = number - amount;
	            this.props.onChange(obj);
	          } else {
	            this.props.onChange(number - amount);
	          }

	          this.setState({ value: number - amount });
	        }
	      }
	    }
	  }, {
	    key: 'handleDrag',
	    value: function handleDrag(e) {
	      if (this.props.dragLabel) {
	        var newValue = Math.round(this.props.value + e.movementX);
	        if (newValue >= 0 && newValue <= this.props.dragMax) {
	          var obj = {};
	          obj[this.props.label] = newValue;
	          this.props.onChange(obj);
	        }
	      }
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(e) {
	      if (this.props.dragLabel) {
	        e.preventDefault();
	        this.handleDrag(e);
	        window.addEventListener('mousemove', this.handleDrag);
	        window.addEventListener('mouseup', this.handleMouseUp);
	      }
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	      window.removeEventListener('mousemove', this.handleDrag);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var label;
	      if (this.props.label) {
	        label = React.createElement(
	          'span',
	          { style: this.styles().label, ref: 'label', onMouseDown: this.handleMouseDown },
	          this.props.label
	        );
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().wrap, ref: 'container' },
	        React.createElement('input', { style: this.styles().input, ref: 'input', value: this.state.value, onKeyDown: this.handleKeyDown, onChange: this.handleChange, onBlur: this.handleBlur }),
	        label
	      );
	    }
	  }]);

	  return EditableInput;
	})(ReactCSS.Component);

	module.exports = EditableInput;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var Hue = (function (_ReactCSS$Component) {
	  _inherits(Hue, _ReactCSS$Component);

	  function Hue() {
	    _classCallCheck(this, Hue);

	    _get(Object.getPrototypeOf(Hue.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	    this.handleMouseDown = this.handleMouseDown.bind(this);
	    this.handleMouseUp = this.handleMouseUp.bind(this);
	  }

	  _createClass(Hue, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          hue: {
	            Absolute: '0 0 0 0',
	            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
	            borderRadius: this.props.radius,
	            boxShadow: this.props.shadow
	          },
	          container: {
	            margin: '0 2px',
	            position: 'relative',
	            height: '100%'
	          },
	          pointer: {
	            zIndex: '2',
	            position: 'absolute',
	            left: this.props.hsl.h * 100 / 360 + '%'
	          },
	          slider: {
	            marginTop: '1px',
	            width: '4px',
	            borderRadius: '1px',
	            height: '12px',
	            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
	            background: '#fff',
	            transform: 'translateX(-2px)'
	          }
	        },
	        'direction-vertical': {
	          hue: {
	            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
	          },
	          pointer: {
	            left: '0',
	            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e, skip) {
	      !skip && e.preventDefault();
	      var container = React.findDOMNode(this.refs.container);
	      var containerWidth = container.clientWidth;
	      var containerHeight = container.clientHeight;
	      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
	      var top = (e.pageY || e.touches[0].pageY) - (container.getBoundingClientRect().top + window.pageYOffset);

	      if (this.props.direction === 'vertical') {
	        var h;
	        if (top < 0) {
	          h = 359;
	        } else if (top > containerHeight) {
	          h = 0;
	        } else {
	          var percent = -(top * 100 / containerHeight) + 100;
	          h = 360 * percent / 100;
	        }

	        if (this.props.hsl.h !== h) {
	          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l, a: this.props.hsl.a });
	        }
	      } else {
	        var h;
	        if (left < 0) {
	          h = 0;
	        } else if (left > containerWidth) {
	          h = 359;
	        } else {
	          var percent = left * 100 / containerWidth;
	          h = 360 * percent / 100;
	        }

	        if (this.props.hsl.h !== h) {
	          this.props.onChange({ h: h, s: this.props.hsl.s, l: this.props.hsl.l, a: this.props.hsl.a });
	        }
	      }
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(e) {
	      this.handleChange(e, true);
	      window.addEventListener('mousemove', this.handleChange);
	      window.addEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pointer = React.createElement('div', { style: this.styles().slider });

	      if (this.props.pointer) {
	        pointer = React.createElement(this.props.pointer, this.props);
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().hue },
	        React.createElement(
	          'div',
	          { style: this.styles().container, ref: 'container', onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange },
	          React.createElement(
	            'div',
	            { style: this.styles().pointer, ref: 'pointer' },
	            pointer
	          )
	        )
	      );
	    }
	  }]);

	  return Hue;
	})(ReactCSS.Component);

	module.exports = Hue;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var _ = __webpack_require__(12);

	var Saturation = (function (_ReactCSS$Component) {
	  _inherits(Saturation, _ReactCSS$Component);

	  function Saturation(props) {
	    _classCallCheck(this, Saturation);

	    _get(Object.getPrototypeOf(Saturation.prototype), 'constructor', this).call(this);

	    this.throttle = _.throttle(function (fn, data) {
	      fn(data);
	    }, 50);

	    this.handleChange = this.handleChange.bind(this);
	    this.handleMouseDown = this.handleMouseDown.bind(this);
	    this.handleMouseUp = this.handleMouseUp.bind(this);
	  }

	  _createClass(Saturation, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          color: {
	            Absolute: '0 0 0 0',
	            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
	            borderRadius: this.props.radius
	          },
	          white: {
	            Absolute: '0 0 0 0',
	            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))'
	          },
	          black: {
	            Absolute: '0 0 0 0',
	            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
	            boxShadow: this.props.shadow
	          },
	          pointer: {
	            position: 'absolute',
	            top: -(this.props.hsv.v * 100) + 100 + '%',
	            left: this.props.hsv.s * 100 + '%',
	            cursor: 'default'
	          },
	          circle: {
	            width: '4px',
	            height: '4px',
	            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4)',
	            borderRadius: '50%',
	            cursor: 'hand',
	            transform: 'translate(-2px, -2px)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e, skip) {
	      !skip && e.preventDefault();
	      var container = React.findDOMNode(this.refs.container);
	      var containerWidth = container.clientWidth;
	      var containerHeight = container.clientHeight;
	      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
	      var top = (e.pageY || e.touches[0].pageY) - (container.getBoundingClientRect().top + window.pageYOffset);

	      if (left < 0) {
	        left = 0;
	      } else if (left > containerWidth) {
	        left = containerWidth;
	      } else if (top < 0) {
	        top = 0;
	      } else if (top > containerHeight) {
	        top = containerHeight;
	      }

	      var saturation = left * 100 / containerWidth;
	      var bright = -(top * 100 / containerHeight) + 100;

	      this.throttle(this.props.onChange, { h: this.props.hsl.h, s: saturation, v: bright, a: this.props.hsl.a });
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(e) {
	      this.handleChange(e, true);
	      window.addEventListener('mousemove', this.handleChange);
	      window.addEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pointer = React.createElement('div', { style: this.styles().circle });

	      if (this.props.pointer) {
	        pointer = React.createElement(this.props.pointer, this.props);
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().color, ref: 'container', onMouseDown: this.handleMouseDown, onTouchMove: this.handleChange },
	        React.createElement(
	          'div',
	          { style: this.styles().white },
	          React.createElement('div', { style: this.styles().black }),
	          React.createElement(
	            'div',
	            { style: this.styles().pointer, ref: 'pointer' },
	            pointer
	          )
	        )
	      );
	    }
	  }]);

	  return Saturation;
	})(ReactCSS.Component);

	module.exports = Saturation;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var color = __webpack_require__(22);

	var _require = __webpack_require__(25);

	var EditableInput = _require.EditableInput;

	var PhotoshopPicker = (function (_ReactCSS$Component) {
	  _inherits(PhotoshopPicker, _ReactCSS$Component);

	  function PhotoshopPicker() {
	    _classCallCheck(this, PhotoshopPicker);

	    _get(Object.getPrototypeOf(PhotoshopPicker.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(PhotoshopPicker, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          fields: {
	            paddingTop: '5px',
	            paddingBottom: '9px',
	            width: '80px',
	            position: 'relative'
	          },
	          divider: {
	            height: '5px'
	          },
	          Input: {
	            style: {
	              wrap: {
	                position: 'relative'
	              },
	              input: {
	                marginLeft: '40%',
	                width: '40%',
	                height: '18px',
	                border: '1px solid #888888',
	                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
	                marginBottom: '5px',
	                fontSize: '13px',
	                paddingLeft: '3px',
	                marginRight: '10px'
	              },
	              label: {
	                left: '0',
	                width: '34px',
	                textTransform: 'uppercase',
	                fontSize: '13px',
	                height: '18px',
	                lineHeight: '22px',
	                position: 'absolute'
	              }
	            }
	          },
	          Hex: {
	            style: {
	              wrap: {
	                position: 'relative'
	              },
	              input: {
	                marginLeft: '20%',
	                width: '80%',
	                height: '18px',
	                border: '1px solid #888888',
	                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
	                marginBottom: '6px',
	                fontSize: '13px',
	                paddingLeft: '3px'
	              },
	              label: {
	                position: 'absolute',
	                top: '0',
	                left: '0',
	                width: '14px',
	                textTransform: 'uppercase',
	                fontSize: '13px',
	                height: '18px',
	                lineHeight: '22px'
	              }
	            }
	          },
	          fieldSymbols: {
	            position: 'absolute',
	            top: '5px',
	            right: '-7px',
	            fontSize: '13px'
	          },
	          symbol: {
	            height: '20px',
	            lineHeight: '22px',
	            paddingBottom: '7px'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      if (data['#']) {
	        color.isValidHex(data['#']) && this.props.onChange(data['#']);
	      } else if (data.r || data.g || data.b) {
	        this.props.onChange({
	          r: data.r || this.props.rgb.r,
	          g: data.g || this.props.rgb.g,
	          b: data.b || this.props.rgb.b
	        });
	      } else if (data.h || data.s || data.v) {
	        this.props.onChange({
	          h: data.h || this.props.hsv.h,
	          s: data.s || this.props.hsv.s,
	          v: data.v || this.props.hsv.v
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().fields },
	        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'h', value: Math.round(this.props.hsv.h), onChange: this.handleChange })),
	        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 's', value: Math.round(this.props.hsv.s * 100), onChange: this.handleChange })),
	        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'v', value: Math.round(this.props.hsv.v * 100), onChange: this.handleChange })),
	        React.createElement('div', { style: this.styles().divider }),
	        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange })),
	        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange })),
	        React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange })),
	        React.createElement('div', { style: this.styles().divider }),
	        React.createElement(EditableInput, _extends({}, this.styles().Hex, { label: '#', value: this.props.hex, onChange: this.handleChange })),
	        React.createElement(
	          'div',
	          { style: this.styles().fieldSymbols },
	          React.createElement(
	            'div',
	            { style: this.styles().symbol },
	            '°'
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().symbol },
	            '%'
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().symbol },
	            '%'
	          )
	        )
	      );
	    }
	  }]);

	  return PhotoshopPicker;
	})(ReactCSS.Component);

	module.exports = PhotoshopPicker;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var PhotoshopPointerCircle = (function (_ReactCSS$Component) {
	  _inherits(PhotoshopPointerCircle, _ReactCSS$Component);

	  function PhotoshopPointerCircle() {
	    _classCallCheck(this, PhotoshopPointerCircle);

	    _get(Object.getPrototypeOf(PhotoshopPointerCircle.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PhotoshopPointerCircle, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            width: '12px',
	            height: '12px',
	            borderRadius: '6px',
	            boxShadow: 'inset 0 0 0 1px #fff',
	            transform: 'translate(-6px, -6px)'
	          }
	        },
	        'black-outline': {
	          picker: {
	            boxShadow: 'inset 0 0 0 1px #000'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'black-outline': this.props.hsl.l > .5
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { style: this.styles().picker });
	    }
	  }]);

	  return PhotoshopPointerCircle;
	})(ReactCSS.Component);

	module.exports = PhotoshopPointerCircle;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var PhotoshopPointerCircle = (function (_ReactCSS$Component) {
	  _inherits(PhotoshopPointerCircle, _ReactCSS$Component);

	  function PhotoshopPointerCircle() {
	    _classCallCheck(this, PhotoshopPointerCircle);

	    _get(Object.getPrototypeOf(PhotoshopPointerCircle.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PhotoshopPointerCircle, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          triangle: {
	            width: 0,
	            height: 0,
	            borderStyle: 'solid',
	            borderWidth: '4px 0 4px 6px',
	            borderColor: 'transparent transparent transparent #fff',
	            position: 'absolute',
	            top: '1px',
	            left: '1px'
	          },
	          triangleBorder: {
	            width: 0,
	            height: 0,
	            borderStyle: 'solid',
	            borderWidth: '5px 0 5px 8px',
	            borderColor: 'transparent transparent transparent #555'
	          },

	          left: {
	            Extend: 'triangleBorder',
	            transform: 'translate(-13px, -4px)'
	          },
	          leftInside: {
	            Extend: 'triangle',
	            transform: 'translate(-8px, -5px)'
	          },

	          right: {
	            Extend: 'triangleBorder',
	            transform: 'translate(20px, -14px) rotate(180deg)'
	          },
	          rightInside: {
	            Extend: 'triangle',
	            transform: 'translate(-8px, -5px)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().pointer },
	        React.createElement(
	          'div',
	          { style: this.styles().left },
	          React.createElement('div', { style: this.styles().leftInside })
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().right },
	          React.createElement('div', { style: this.styles().rightInside })
	        )
	      );
	    }
	  }]);

	  return PhotoshopPointerCircle;
	})(ReactCSS.Component);

	module.exports = PhotoshopPointerCircle;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _require = __webpack_require__(25);

	var Saturation = _require.Saturation;
	var Hue = _require.Hue;
	var Alpha = _require.Alpha;
	var Checkboard = _require.Checkboard;

	var SketchFields = __webpack_require__(35);
	var SketchPresetColors = __webpack_require__(36);

	var Sketch = (function (_ReactCSS$Component) {
	  _inherits(Sketch, _ReactCSS$Component);

	  function Sketch() {
	    _classCallCheck(this, Sketch);

	    _get(Object.getPrototypeOf(Sketch.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(Sketch, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            width: '200px',
	            padding: '10px 10px 0',
	            boxSizing: 'initial',
	            background: '#fff',
	            borderRadius: '4px',
	            boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
	          },
	          saturation: {
	            width: '100%',
	            paddingBottom: '75%',
	            position: 'relative',
	            overflow: 'hidden'
	          },
	          Saturation: {
	            radius: '3px',
	            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	          },
	          controls: {
	            display: 'flex'
	          },
	          sliders: {
	            padding: '4px 0',
	            flex: '1',
	            marginBottom: '4px'
	          },
	          color: {
	            width: '24px',
	            height: '14px',
	            position: 'relative',
	            marginTop: '4px',
	            marginLeft: '4px',
	            borderRadius: '3px'
	          },
	          activeColor: {
	            Absolute: '0 0 0 0',
	            borderRadius: '2px',
	            background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')',
	            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
	            zIndex: '2'
	          },
	          hue: {
	            position: 'relative',
	            height: '14px',
	            overflow: 'hidden'
	          },
	          Hue: {
	            radius: '2px',
	            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	          },

	          alpha: {
	            position: 'relative',
	            height: '10px',
	            marginTop: '4px',
	            overflow: 'hidden'
	          },
	          Alpha: {
	            radius: '2px',
	            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      this.props.onChange(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().picker },
	        React.createElement(
	          'div',
	          { style: this.styles().saturation },
	          React.createElement(Saturation, _extends({}, this.styles().Saturation, this.props, { onChange: this.handleChange }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().controls, className: 'flexbox-fix' },
	          React.createElement(
	            'div',
	            { style: this.styles().sliders },
	            React.createElement(
	              'div',
	              { style: this.styles().hue },
	              React.createElement(Hue, _extends({}, this.styles().Hue, this.props, { onChange: this.handleChange }))
	            )
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().color },
	            React.createElement('div', { style: this.styles().activeColor })
	          )
	        )
	      );
	    }
	  }]);

	  return Sketch;
	})(ReactCSS.Component);

	Sketch.defaultProps = {
	  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
	};

	module.exports = Sketch;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var color = __webpack_require__(22);

	var _require = __webpack_require__(25);

	var EditableInput = _require.EditableInput;

	var ShetchFields = (function (_ReactCSS$Component) {
	  _inherits(ShetchFields, _ReactCSS$Component);

	  function ShetchFields() {
	    _classCallCheck(this, ShetchFields);

	    _get(Object.getPrototypeOf(ShetchFields.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(ShetchFields, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          fields: {
	            display: 'flex',
	            paddingTop: '4px'
	          },
	          single: {
	            flex: '1',
	            paddingLeft: '6px'
	          },
	          double: {
	            flex: '2'
	          },
	          Input: {
	            style: {
	              input: {
	                width: '80%',
	                padding: '4px 10% 3px',
	                border: 'none',
	                boxShadow: 'inset 0 0 0 1px #ccc',
	                fontSize: '11px'
	              },
	              label: {
	                display: 'block',
	                textAlign: 'center',
	                fontSize: '11px',
	                color: '#222',
	                paddingTop: '3px',
	                paddingBottom: '4px',
	                textTransform: 'capitalize'
	              }
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      if (data.hex) {
	        color.isValidHex(data.hex) && this.props.onChange(data.hex);
	      } else if (data.r || data.g || data.b) {
	        this.props.onChange({
	          r: data.r || this.props.rgb.r,
	          g: data.g || this.props.rgb.g,
	          b: data.b || this.props.rgb.b,
	          a: this.props.rgb.a
	        });
	      } else if (data.a) {
	        if (data.a < 0) {
	          data.a = 0;
	        } else if (data.a > 100) {
	          data.a = 100;
	        }

	        data.a = data.a / 100;
	        this.props.onChange({
	          h: this.props.hsl.h,
	          s: this.props.hsl.s,
	          l: this.props.hsl.l,
	          a: data.a
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().fields, className: 'flexbox-fix' },
	        React.createElement(
	          'div',
	          { style: this.styles().double },
	          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'hex', value: this.props.hex.replace('#', ''), onChange: this.handleChange }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().single },
	          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().single },
	          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().single },
	          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().single },
	          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'a', value: Math.round(this.props.rgb.a * 100), onChange: this.handleChange, dragLabel: 'true', dragMax: '100' }))
	        )
	      );
	    }
	  }]);

	  return ShetchFields;
	})(ReactCSS.Component);

	module.exports = ShetchFields;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var SketchPresetColors = (function (_ReactCSS$Component) {
	  _inherits(SketchPresetColors, _ReactCSS$Component);

	  function SketchPresetColors() {
	    _classCallCheck(this, SketchPresetColors);

	    _get(Object.getPrototypeOf(SketchPresetColors.prototype), 'constructor', this).call(this);

	    this.handleClick = this.handleClick.bind(this);
	  }

	  _createClass(SketchPresetColors, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          colors: {
	            marginRight: '-10px',
	            marginLeft: '-10px',
	            paddingLeft: '10px',
	            paddingTop: '10px',
	            borderTop: '1px solid #eee'
	          },
	          li: {
	            borderRadius: '3px',
	            overflow: 'hidden',
	            position: 'relative',
	            display: 'inline-block',
	            margin: '0 10px 10px 0',
	            verticalAlign: 'top',
	            cursor: 'pointer'
	          },
	          square: {
	            borderRadius: '3px',
	            width: '16px',
	            height: '16px',
	            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
	          }
	        },
	        'no-presets': {
	          colors: {
	            display: 'none'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'no-presets': !this.props.colors || !this.props.colors.length
	      });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(hex) {
	      this.props.onClick(hex);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var colors = [];
	      if (this.props.colors) {
	        for (var i = 0; i < this.props.colors.length; i++) {
	          var color = this.props.colors[i];
	          colors.push(React.createElement(
	            'div',
	            { key: color, style: this.styles().li, onClick: this.handleClick.bind(null, color) },
	            React.createElement(
	              'div',
	              { style: { background: color } },
	              ' ',
	              React.createElement('div', { style: this.styles().square }),
	              ' '
	            )
	          ));
	        }
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().colors },
	        colors
	      );
	    }
	  }]);

	  return SketchPresetColors;
	})(ReactCSS.Component);

	module.exports = SketchPresetColors;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _require = __webpack_require__(25);

	var Saturation = _require.Saturation;
	var Hue = _require.Hue;
	var Alpha = _require.Alpha;
	var Checkboard = _require.Checkboard;

	var ChromeFields = __webpack_require__(38);
	var ChromePointer = __webpack_require__(39);
	var ChromePointerCircle = __webpack_require__(40);

	var Chrome = (function (_ReactCSS$Component) {
	  _inherits(Chrome, _ReactCSS$Component);

	  function Chrome() {
	    _classCallCheck(this, Chrome);

	    _get(Object.getPrototypeOf(Chrome.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(Chrome, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            background: '#fff',
	            borderRadius: '2px',
	            boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
	            boxSizing: 'initial',
	            width: '225px',
	            fontFamily: 'Menlo'
	          },
	          saturation: {
	            width: '100%',
	            paddingBottom: '55%',
	            position: 'relative',
	            borderRadius: '2px 2px 0 0',
	            overflow: 'hidden'
	          },
	          Saturation: {
	            radius: '2px 2px 0 0'
	          },
	          body: {
	            padding: '16px 16px 12px'
	          },
	          controls: {
	            display: 'flex'
	          },
	          color: {
	            width: '32px'
	          },
	          swatch: {
	            marginTop: '6px',
	            width: '16px',
	            height: '16px',
	            borderRadius: '8px',
	            position: 'relative',
	            overflow: 'hidden'
	          },
	          active: {
	            Absolute: '0 0 0 0',
	            zIndex: 2,
	            borderRadius: '8px',
	            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
	            background: 'rgba(' + this.props.rgb.r + ', ' + this.props.rgb.g + ', ' + this.props.rgb.b + ', ' + this.props.rgb.a + ')'
	          },
	          toggles: {
	            flex: '1'
	          },
	          hue: {
	            height: '10px',
	            position: 'relative',
	            marginBottom: '8px'
	          },
	          Hue: {
	            radius: '2px'
	          },
	          alpha: {
	            height: '10px',
	            position: 'relative'
	          },
	          Alpha: {
	            radius: '2px'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      this.props.onChange(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().picker },
	        React.createElement(
	          'div',
	          { style: this.styles().saturation },
	          React.createElement(Saturation, _extends({}, this.styles().Saturation, this.props, { pointer: ChromePointerCircle, onChange: this.handleChange }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().body },
	          React.createElement(
	            'div',
	            { style: this.styles().controls, className: 'flexbox-fix' },
	            React.createElement(
	              'div',
	              { style: this.styles().color },
	              React.createElement(
	                'div',
	                { style: this.styles().swatch },
	                React.createElement('div', { style: this.styles().active }),
	                React.createElement(Checkboard, null)
	              )
	            ),
	            React.createElement(
	              'div',
	              { style: this.styles().toggles },
	              React.createElement(
	                'div',
	                { style: this.styles().hue },
	                React.createElement(Hue, _extends({}, this.styles().Hue, this.props, { pointer: ChromePointer, onChange: this.handleChange }))
	              ),
	              React.createElement(
	                'div',
	                { style: this.styles().alpha },
	                React.createElement(Alpha, _extends({}, this.styles().Alpha, this.props, { pointer: ChromePointer, onChange: this.handleChange }))
	              )
	            )
	          ),
	          React.createElement(ChromeFields, _extends({}, this.props, { onChange: this.handleChange }))
	        )
	      );
	    }
	  }]);

	  return Chrome;
	})(ReactCSS.Component);

	module.exports = Chrome;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var color = __webpack_require__(22);

	var _require = __webpack_require__(25);

	var EditableInput = _require.EditableInput;

	var ChromeFields = (function (_ReactCSS$Component) {
	  _inherits(ChromeFields, _ReactCSS$Component);

	  function ChromeFields(props) {
	    _classCallCheck(this, ChromeFields);

	    _get(Object.getPrototypeOf(ChromeFields.prototype), 'constructor', this).call(this);

	    this.state = {
	      view: ''
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.toggleViews = this.toggleViews.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.hideHighlight = this.hideHighlight.bind(this);
	    this.showHighlight = this.showHighlight.bind(this);
	  }

	  _createClass(ChromeFields, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          wrap: {
	            paddingTop: '16px',
	            display: 'flex'
	          },
	          fields: {
	            flex: '1',
	            display: 'flex',
	            marginLeft: '-6px'
	          },
	          field: {
	            paddingLeft: '6px',
	            width: '100%'
	          },
	          toggle: {
	            width: '32px',
	            textAlign: 'right',
	            position: 'relative'
	          },
	          icon: {
	            marginRight: '-4px',
	            marginTop: '12px',
	            cursor: 'pointer',
	            position: 'relative',
	            zIndex: '2'
	          },
	          iconHighlight: {
	            position: 'absolute',
	            width: '24px',
	            height: '28px',
	            background: '#eee',
	            borderRadius: '4px',
	            top: '10px',
	            left: '12px',
	            display: 'none'
	          },
	          Input: {
	            style: {
	              input: {
	                fontSize: '11px',
	                color: '#333',
	                width: '100%',
	                borderRadius: '2px',
	                border: 'none',
	                boxShadow: 'inset 0 0 0 1px #dadada',
	                height: '21px',
	                textAlign: 'center'
	              },
	              label: {
	                textTransform: 'uppercase',
	                fontSize: '11px',
	                lineHeight: '11px',
	                color: '#969696',
	                textAlign: 'center',
	                display: 'block',
	                marginTop: '12px'
	              }
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      this.props.onChange(data);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
	        this.setState({ view: 'hex' });
	      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
	        this.setState({ view: 'rgb' });
	      }
	    }
	  }, {
	    key: 'toggleViews',
	    value: function toggleViews() {
	      if (this.state.view === 'hex') {
	        this.setState({ view: 'rgb' });
	      } else if (this.state.view === 'rgb') {
	        this.setState({ view: 'hsl' });
	      } else if (this.state.view === 'hsl') {
	        if (this.props.hsl.a === 1) {
	          this.setState({ view: 'hex' });
	        } else {
	          this.setState({ view: 'rgb' });
	        }
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
	        this.setState({ view: 'rgb' });
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      if (data.hex) {
	        color.isValidHex(data.hex) && this.props.onChange(data.hex);
	      } else if (data.r || data.g || data.b) {
	        this.props.onChange({
	          r: data.r || this.props.rgb.r,
	          g: data.g || this.props.rgb.g,
	          b: data.b || this.props.rgb.b
	        });
	      } else if (data.a) {
	        if (data.a < 0) {
	          data.a = 0;
	        } else if (data.a > 1) {
	          data.a = 1;
	        }

	        this.props.onChange({
	          h: this.props.hsl.h,
	          s: this.props.hsl.s,
	          l: this.props.hsl.l,
	          a: Math.round(data.a * 100) / 100
	        });
	      } else if (data.h || data.s || data.l) {

	        this.props.onChange({
	          h: data.h || this.props.hsl.h,
	          s: data.s && data.s.replace('%', '') || this.props.hsl.s,
	          l: data.l && data.l.replace('%', '') || this.props.hsl.l
	        });
	      }
	    }
	  }, {
	    key: 'showHighlight',
	    value: function showHighlight() {
	      React.findDOMNode(this.refs.iconHighlight).style.display = 'block';
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight() {
	      React.findDOMNode(this.refs.iconHighlight).style.display = 'none';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fields;
	      if (this.state.view === 'hex') {
	        fields = React.createElement(
	          'div',
	          { style: this.styles().fields, className: 'flexbox-fix' },
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange }))
	          )
	        );
	      } else if (this.state.view === 'rgb') {
	        fields = React.createElement(
	          'div',
	          { style: this.styles().fields, className: 'flexbox-fix' },
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'a', value: this.props.rgb.a, arrowOffset: .01, onChange: this.handleChange }))
	          )
	        );
	      } else if (this.state.view === 'hsl') {
	        fields = React.createElement(
	          'div',
	          { style: this.styles().fields, className: 'flexbox-fix' },
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'h', value: Math.round(this.props.hsl.h), onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 's', value: Math.round(this.props.hsl.s * 100) + '%', onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'l', value: Math.round(this.props.hsl.l * 100) + '%', onChange: this.handleChange }))
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().field },
	            React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'a', value: this.props.hsl.a, arrowOffset: .01, onChange: this.handleChange }))
	          )
	        );
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().wrap, className: 'flexbox-fix' },
	        fields,
	        React.createElement(
	          'div',
	          { style: this.styles().toggle },
	          React.createElement(
	            'div',
	            { style: this.styles().icon, onClick: this.toggleViews },
	            React.createElement(
	              'svg',
	              { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24', onMouseOver: this.showHighlight, onMouseEnter: this.showHighlight, onMouseOut: this.hideHighlight },
	              React.createElement('path', { fill: '#333', d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
	            )
	          ),
	          React.createElement('div', { style: this.styles().iconHighlight, ref: 'iconHighlight' })
	        )
	      );
	    }
	  }]);

	  return ChromeFields;
	})(ReactCSS.Component);

	module.exports = ChromeFields;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var ChromePointer = (function (_ReactCSS$Component) {
	  _inherits(ChromePointer, _ReactCSS$Component);

	  function ChromePointer() {
	    _classCallCheck(this, ChromePointer);

	    _get(Object.getPrototypeOf(ChromePointer.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ChromePointer, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            width: '12px',
	            height: '12px',
	            borderRadius: '6px',
	            transform: 'translate(-6px, -1px)',
	            backgroundColor: 'rgb(248, 248, 248)',
	            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { style: this.styles().picker });
	    }
	  }]);

	  return ChromePointer;
	})(ReactCSS.Component);

	module.exports = ChromePointer;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var ChromePointerCircle = (function (_ReactCSS$Component) {
	  _inherits(ChromePointerCircle, _ReactCSS$Component);

	  function ChromePointerCircle() {
	    _classCallCheck(this, ChromePointerCircle);

	    _get(Object.getPrototypeOf(ChromePointerCircle.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ChromePointerCircle, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            width: '12px',
	            height: '12px',
	            borderRadius: '6px',
	            boxShadow: 'inset 0 0 0 1px #fff',
	            transform: 'translate(-6px, -6px)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { style: this.styles().picker });
	    }
	  }]);

	  return ChromePointerCircle;
	})(ReactCSS.Component);

	module.exports = ChromePointerCircle;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var color = __webpack_require__(22);
	var material = __webpack_require__(42);

	var _require = __webpack_require__(43);

	var Raised = _require.Raised;

	var SwatchesGroup = __webpack_require__(49);

	var Swatches = (function (_ReactCSS$Component) {
	  _inherits(Swatches, _ReactCSS$Component);

	  function Swatches() {
	    _classCallCheck(this, Swatches);

	    _get(Object.getPrototypeOf(Swatches.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(Swatches, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            width: '320px',
	            height: '240px'
	          },
	          overflow: {
	            height: '240px',
	            overflowY: 'scroll'
	          },
	          body: {
	            padding: '16px 0 6px 16px'
	          },

	          clear: {
	            clear: 'both'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      color.isValidHex(data) && this.props.onChange(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var groups = [];
	      if (this.props.colors) {
	        for (var i = 0; i < this.props.colors.length; i++) {
	          var group = this.props.colors[i];
	          groups.push(React.createElement(SwatchesGroup, { key: group.toString(), group: group, active: this.props.hex, onClick: this.handleChange }));
	        }
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().picker },
	        React.createElement(
	          Raised,
	          null,
	          React.createElement(
	            'div',
	            { style: this.styles().overflow },
	            React.createElement(
	              'div',
	              { style: this.styles().body },
	              groups,
	              React.createElement('div', { style: this.styles().clear })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Swatches;
	})(ReactCSS.Component);

	Swatches.defaultProps = {
	  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']]]
	};

	module.exports = Swatches;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.materialColors = factory();
	  }
	})(this, function() {
	  return {"red":{"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"},"pink":{"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"},"purple":{"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"},"deepPurple":{"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"},"indigo":{"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"},"blue":{"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"},"lightBlue":{"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"},"cyan":{"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"},"teal":{"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"},"green":{"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"},"lightGreen":{"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"},"lime":{"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"},"yellow":{"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"},"amber":{"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"},"orange":{"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"},"deepOrange":{"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"},"brown":{"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"},"blueGrey":{"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"},"darkText":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"},"lightText":{"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"},"darkIcons":{"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"},"lightIcons":{"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"},"white":"#ffffff","black":"#000000"};
	});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	
	module.exports = {
	  Raised: __webpack_require__(44),
	  Tile: __webpack_require__(45),

	  Tabs: __webpack_require__(46),
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var Raised = (function (_ReactCSS$Component) {
	  _inherits(Raised, _ReactCSS$Component);

	  function Raised() {
	    _classCallCheck(this, Raised);

	    _get(Object.getPrototypeOf(Raised.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Raised, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          wrap: {
	            position: 'relative'
	          },
	          content: {
	            position: 'relative'
	          },
	          bg: {
	            Absolute: '0 0 0 0',
	            boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
	            borderRadius: this.props.radius,
	            background: this.props.background
	          }
	        },
	        'zDepth-0': {
	          bg: {
	            boxShadow: 'none'
	          }
	        },

	        'zDepth-1': {
	          bg: {
	            boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
	          }
	        },
	        'zDepth-2': {
	          bg: {
	            boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
	          }
	        },
	        'zDepth-3': {
	          bg: {
	            boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
	          }
	        },
	        'zDepth-4': {
	          bg: {
	            boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
	          }
	        },
	        'zDepth-5': {
	          bg: {
	            boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
	          }
	        },
	        'square': {
	          bg: {
	            borderRadius: '0'
	          }
	        },
	        'circle': {
	          bg: {
	            borderRadius: '50%'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().wrap },
	        React.createElement('div', { style: this.styles().bg }),
	        React.createElement(
	          'div',
	          { style: this.styles().content },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Raised;
	})(ReactCSS.Component);

	Raised.propTypes = {
	  background: React.PropTypes.string,
	  zDepth: React.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
	  radius: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
	};

	Raised.defaultProps = {
	  background: '#fff',
	  zDepth: '1',
	  radius: '2px'
	};

	module.exports = Raised;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	module.exports = (function (_ReactCSS$Component) {
	  _inherits(Tile, _ReactCSS$Component);

	  function Tile() {
	    _classCallCheck(this, Tile);

	    _get(Object.getPrototypeOf(Tile.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Tile, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          tile: {
	            fontSize: '16px',
	            padding: '16px',
	            display: 'flex',
	            justifyContent: 'space-between',
	            color: this.props.color
	          },
	          primary: {
	            display: 'flex',
	            width: '100%'
	          },
	          sidebar: {
	            minWidth: '56px',
	            maxWidth: '56px',
	            flexBasis: '56' },
	          // 72 minus 16
	          content: {
	            background: 'none',
	            flex: '1',
	            maxWidth: '95%'
	          },
	          secondary: {
	            flexBasis: '42',
	            textAlign: 'center'
	          },
	          sidebarIcon: {
	            marginTop: '-12px',
	            marginLeft: '-12px',
	            marginBottom: '-12px'
	          }
	        },
	        'divider': {
	          tile: {
	            boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)'
	          }
	        },
	        'condensed': {
	          tile: {
	            paddingBottom: '0',
	            paddingTop: '0'
	          },
	          sidebar: {
	            minWidth: '28px',
	            maxWidth: '28px',
	            flexBasis: '28'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'clickable': this.props.onClick
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props$children = _slicedToArray(this.props.children, 2);

	      var sidebar = _props$children[0];
	      var content = _props$children[1];

	      return React.createElement(
	        'div',
	        { style: this.styles().tile, className: 'flexbox-fix' },
	        React.createElement(
	          'div',
	          { style: this.styles().primary, className: 'flexbox-fix' },
	          React.createElement(
	            'div',
	            { style: this.styles().sidebar, key: "sidebar-#{ sidebar }" },
	            sidebar
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().content, key: "content-#{ content }" },
	            content
	          )
	        )
	      );
	    }
	  }]);

	  return Tile;
	})(ReactCSS.Component);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var _ = __webpack_require__(12);

	var Tab = __webpack_require__(47);
	var Link = __webpack_require__(48);

	// var Ink = require('./Ink');

	// var context = {
	//   primaryColor: '#2196F3',
	//   accentColor: '#E91E63',
	//   theme: 'light'
	// }

	var Tabs = (function (_ReactCSS$Component) {
	  _inherits(Tabs, _ReactCSS$Component);

	  function Tabs(props) {
	    _classCallCheck(this, Tabs);

	    _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this);

	    var selectedTab;
	    if (props.selectedTab < (props.tabs && props.tabs.length)) {
	      selectedTab = props.selectedTab;
	    } else {
	      selectedTab = 0;
	    }

	    this.state = {
	      selectedTab: selectedTab
	    };

	    this.handleClick = this.handleClick.bind(this);
	    this.slide = this.slide.bind(this);
	  }

	  _createClass(Tabs, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          tabs: {
	            position: 'relative',
	            background: this.props.background
	          },
	          tabWrap: {
	            display: 'flex'
	          },
	          tab: {
	            justifyContent: 'flex-start',
	            minWidth: '68px',
	            maxWidth: '240px'
	          },
	          Tab: {
	            color: this.props.color,
	            inactive: this.props.inactive,
	            capitalize: this.props.capitalize
	          },
	          indicator: {
	            height: '0',
	            position: 'absolute',
	            bottom: '0',
	            left: '0',
	            background: this.props.color,
	            transition: 'all 200ms linear'
	          }
	        },
	        'scrollable': {
	          tabs: {
	            overflowX: 'scroll'
	          },
	          tabWrap: {
	            paddingLeft: '60px',
	            justifyContent: 'flex-start',
	            width: '400%'
	          },
	          tab: {
	            width: 'auto'
	          }
	        },
	        'align-justify': {
	          tabWrap: {
	            justifyContent: 'space-between'
	          },
	          tab: {
	            width: 100 / this.props.tabs.length + '%'
	          }
	        },
	        'align-left': {
	          tabWrap: {
	            paddingLeft: '60px',
	            justifyContent: 'flex-start'
	          },
	          tab: {
	            width: 'auto'
	          }
	        },
	        'align-center': {
	          tabWrap: {
	            justifyContent: 'center'
	          },
	          tab: {
	            width: 'auto'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'scrollable': this.props.width / this.props.tabs.length < 72
	      });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(tab) {
	      if (this.props.onChange) {
	        this.props.onChange(tab);
	      }

	      this.setState({
	        selectedTab: tab
	      });
	    }
	  }, {
	    key: 'slide',
	    value: function slide() {
	      if (this.props.tabs.length) {
	        var containerNode = this.refs.tabs.getDOMNode();
	        var containerLeft = containerNode.scrollLeft;
	        var containerRight = containerNode.offsetWidth + containerNode.scrollLeft;

	        var selectedNode = this.refs['tab-' + this.state.selectedTab] && this.refs['tab-' + this.state.selectedTab].getDOMNode();
	        var selectedLeft = selectedNode && selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft;
	        var selectedRight = selectedNode && selectedLeft + selectedNode.offsetWidth;

	        // scroll right if tab is off screen
	        if (selectedRight > containerRight) {
	          containerNode.scrollLeft += selectedRight - containerRight;
	        }

	        // scroll left if tab is off screen
	        if (selectedLeft < containerLeft) {
	          containerNode.scrollLeft -= containerLeft - selectedLeft;
	        }

	        // slide the indicator
	        var indicator = React.findDOMNode(this.refs.indicator);
	        indicator.style.left = selectedLeft + 'px';
	        indicator.style.width = selectedNode.offsetWidth + 'px';
	        indicator.style.height = '2px';
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.slide();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selectedTab !== this.state.selectedTab) {
	        this.setState({ selectedTab: nextProps.selectedTab });
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextState.selectedTab >= (nextProps.tabs && nextProps.tabs.length)) {
	        nextState.selectedTab = nextProps.tabs.length - 1;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.slide();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tabs = [];
	      for (var i = 0; i < this.props.tabs.length; i++) {
	        var tab = this.props.tabs[i];

	        var label;
	        var callback;
	        var callbackValue;
	        var newTab;
	        if (_.isString(tab)) {
	          label = tab;
	          callback = null;
	        } else {
	          label = tab.label;
	          callback = tab.onClick;
	          callbackValue = tab.callbackValue;
	          newTab = tab.newTab;
	        }

	        tabs.push(React.createElement(
	          'div',
	          { style: this.styles().tab, ref: 'tab-' + i, key: i },
	          React.createElement(
	            Link,
	            { onClick: callback, callbackValue: callbackValue, newTab: newTab },
	            React.createElement(
	              Tab,
	              _extends({}, this.styles().Tab, { tab: i, selected: this.state.selectedTab === i, selectable: tab.selectable, onClick: this.handleClick }),
	              label
	            )
	          )
	        ));
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().tabs, ref: 'tabs' },
	        React.createElement(
	          'div',
	          { style: this.styles().tabWrap, className: 'flexbox-fix' },
	          tabs
	        ),
	        React.createElement('div', { style: this.styles().indicator, ref: 'indicator' })
	      );
	    }
	  }]);

	  return Tabs;
	})(ReactCSS.Component);

	Tabs.defaultProps = {
	  selectedTab: 0,
	  background: 'transparent',
	  color: '#fff'
	};

	module.exports = Tabs;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var Tab = (function (_ReactCSS$Component) {
	  _inherits(Tab, _ReactCSS$Component);

	  function Tab() {
	    _classCallCheck(this, Tab);

	    _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).call(this);

	    this.handleClick = this.handleClick.bind(this);
	  }

	  _createClass(Tab, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          tab: {
	            color: this.props.inactive || this.props.color,
	            cursor: 'pointer',
	            paddingLeft: '12px',
	            paddingRight: '12px',
	            height: '48px',
	            lineHeight: '48px',
	            textAlign: 'center',
	            fontSize: '14px',
	            textTransform: this.props.capitalize === false ? '' : 'uppercase',
	            fontWeight: '500',
	            whiteSpace: 'nowrap',
	            opacity: '.47',
	            transition: 'opacity 100ms linear'
	          }
	        },
	        'selected': {
	          tab: {
	            color: this.props.color,
	            opacity: '.87'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      if (this.props.selectable !== false) {
	        this.props.onClick(this.props.tab);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().tab, onClick: this.handleClick },
	        this.props.children
	      );
	    }
	  }]);

	  return Tab;
	})(ReactCSS.Component);

	Tab.propTypes = {
	  selected: React.PropTypes.bool
	};

	Tab.defaultProps = {
	  selected: false,
	  color: '#fff'
	};

	module.exports = Tab;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var _ = __webpack_require__(12);

	var Link = (function (_React$Component) {
	  _inherits(Link, _React$Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).call(this);
	    this.handleClick = this.handleClick.bind(this);
	  }

	  // Link.propTypes =
	  //   onClick: React.PropTypes.oneOfType(
	  //     React.PropTypes.string,
	  //     React.PropTypes.func
	  //   );

	  _createClass(Link, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      if (this.props.onClick) {
	        this.props.onClick(e, this.props.callbackValue);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var a;
	      if (_.isString(this.props.onClick)) {
	        a = React.createElement(
	          'a',
	          { style: { textDecoration: 'none' }, href: this.props.onClick, target: this.props.newTab && '_blank' },
	          this.props.children
	        );
	      } else {
	        a = React.createElement(
	          'a',
	          { style: { textDecoration: 'none' }, onClick: this.handleClick },
	          this.props.children
	        );
	      }

	      return a;
	    }
	  }]);

	  return Link;
	})(React.Component);

	Link.defaultProps = {
	  newTab: false
	};

	module.exports = Link;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var SwatchesColor = __webpack_require__(50);

	var SwatchesGroup = (function (_ReactCSS$Component) {
	  _inherits(SwatchesGroup, _ReactCSS$Component);

	  function SwatchesGroup() {
	    _classCallCheck(this, SwatchesGroup);

	    _get(Object.getPrototypeOf(SwatchesGroup.prototype), 'constructor', this).call(this);

	    this.handleClick = this.handleClick.bind(this);
	  }

	  _createClass(SwatchesGroup, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          group: {
	            paddingBottom: '10px',
	            width: '40px',
	            float: 'left',
	            marginRight: '10px'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(data) {
	      this.props.onClick(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var colors = [];
	      for (var i = 0; i < this.props.group.length; i++) {
	        var color = this.props.group[i];

	        colors.push(React.createElement(SwatchesColor, { key: color, color: color, active: color.replace('#', '').toLowerCase() === this.props.active, first: i === 0, last: i === this.props.group.length - 1, onClick: this.handleClick }));
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().group },
	        colors
	      );
	    }
	  }]);

	  return SwatchesGroup;
	})(ReactCSS.Component);

	module.exports = SwatchesGroup;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var SwatchesColor = (function (_ReactCSS$Component) {
	  _inherits(SwatchesColor, _ReactCSS$Component);

	  function SwatchesColor() {
	    _classCallCheck(this, SwatchesColor);

	    _get(Object.getPrototypeOf(SwatchesColor.prototype), 'constructor', this).call(this);

	    this.handleClick = this.handleClick.bind(this);
	  }

	  _createClass(SwatchesColor, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          color: {
	            width: '40px',
	            height: '24px',
	            cursor: 'pointer',
	            background: this.props.color,
	            marginBottom: '1px'
	          },
	          check: {
	            fill: '#fff',
	            marginLeft: '8px',
	            display: 'none'
	          }
	        },
	        'first': {
	          color: {
	            overflow: 'hidden',
	            borderRadius: '2px 2px 0 0'
	          }
	        },
	        'last': {
	          color: {
	            overflow: 'hidden',
	            borderRadius: '0 0 2px 2px'
	          }
	        },
	        active: {
	          check: {
	            display: 'block'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick(this.props.color);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().color, onClick: this.handleClick },
	        React.createElement(
	          'div',
	          { style: this.styles().check },
	          React.createElement(
	            'svg',
	            { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
	            React.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
	          )
	        )
	      );
	    }
	  }]);

	  return SwatchesColor;
	})(ReactCSS.Component);

	module.exports = SwatchesColor;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _require = __webpack_require__(25);

	var Hue = _require.Hue;

	var SliderSwatches = __webpack_require__(52);
	var SliderPointer = __webpack_require__(54);

	var Swatches = (function (_ReactCSS$Component) {
	  _inherits(Swatches, _ReactCSS$Component);

	  function Swatches() {
	    _classCallCheck(this, Swatches);

	    _get(Object.getPrototypeOf(Swatches.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(Swatches, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          slider: {},
	          hue: {
	            height: '12px',
	            position: 'relative'
	          },
	          Hue: {
	            radius: '2px'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      this.props.onChange(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().slider },
	        React.createElement(
	          'div',
	          { style: this.styles().hue },
	          React.createElement(Hue, _extends({}, this.styles().Hue, this.props, { pointer: SliderPointer, onChange: this.handleChange }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().swatches },
	          React.createElement(SliderSwatches, _extends({}, this.props, { onClick: this.handleChange }))
	        )
	      );
	    }
	  }]);

	  return Swatches;
	})(ReactCSS.Component);

	module.exports = Swatches;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var SliderSwatch = __webpack_require__(53);

	var SliderSwatches = (function (_ReactCSS$Component) {
	  _inherits(SliderSwatches, _ReactCSS$Component);

	  function SliderSwatches() {
	    _classCallCheck(this, SliderSwatches);

	    _get(Object.getPrototypeOf(SliderSwatches.prototype), 'constructor', this).call(this);

	    this.handleClick = this.handleClick.bind(this);
	  }

	  _createClass(SliderSwatches, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          swatches: {
	            marginRight: '-4px',
	            marginTop: '20px'
	          },
	          swatch: {
	            width: '19.65%',
	            marginRight: '1px',
	            float: 'left'
	          },
	          clear: {
	            clear: 'both'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(data) {
	      this.props.onClick(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().swatches },
	        React.createElement(
	          'div',
	          { style: this.styles().swatch },
	          React.createElement(SliderSwatch, _extends({}, this.props, { offset: '.80', active: Math.round(this.props.hsl.l * 100) / 100 == .80 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick, first: true }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().swatch },
	          React.createElement(SliderSwatch, _extends({}, this.props, { offset: '.65', active: Math.round(this.props.hsl.l * 100) / 100 == .65 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().swatch },
	          React.createElement(SliderSwatch, _extends({}, this.props, { offset: '.50', active: Math.round(this.props.hsl.l * 100) / 100 == .50 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().swatch },
	          React.createElement(SliderSwatch, _extends({}, this.props, { offset: '.35', active: Math.round(this.props.hsl.l * 100) / 100 == .35 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick }))
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().swatch },
	          React.createElement(SliderSwatch, _extends({}, this.props, { offset: '.20', active: Math.round(this.props.hsl.l * 100) / 100 == .20 && Math.round(this.props.hsl.s * 100) / 100 == .50, onClick: this.handleClick, last: true }))
	        ),
	        React.createElement('div', { style: this.styles().clear })
	      );
	    }
	  }]);

	  return SliderSwatches;
	})(ReactCSS.Component);

	module.exports = SliderSwatches;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var SliderSwatch = (function (_ReactCSS$Component) {
	  _inherits(SliderSwatch, _ReactCSS$Component);

	  function SliderSwatch() {
	    _classCallCheck(this, SliderSwatch);

	    _get(Object.getPrototypeOf(SliderSwatch.prototype), 'constructor', this).call(this);

	    this.handleClick = this.handleClick.bind(this);
	  }

	  _createClass(SliderSwatch, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          swatch: {
	            height: '12px',
	            background: 'hsl(' + this.props.hsl.h + ', 50%, ' + this.props.offset * 100 + '%)',
	            cursor: 'pointer'
	          }
	        },
	        'first': {
	          swatch: {
	            borderRadius: '2px 0 0 2px'
	          }
	        },
	        'last': {
	          swatch: {
	            borderRadius: '0 2px 2px 0'
	          }
	        },
	        active: {
	          swatch: {
	            transform: 'scaleY(1.8)',
	            borderRadius: '3.6px/2px'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick({ h: this.props.hsl.h, s: .5, l: this.props.offset });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { style: this.styles().swatch, onClick: this.handleClick });
	    }
	  }]);

	  return SliderSwatch;
	})(ReactCSS.Component);

	module.exports = SliderSwatch;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var SliderPointer = (function (_ReactCSS$Component) {
	  _inherits(SliderPointer, _ReactCSS$Component);

	  function SliderPointer() {
	    _classCallCheck(this, SliderPointer);

	    _get(Object.getPrototypeOf(SliderPointer.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(SliderPointer, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          picker: {
	            width: '14px',
	            height: '14px',
	            borderRadius: '6px',
	            transform: 'translate(-7px, -1px)',
	            backgroundColor: 'rgb(248, 248, 248)',
	            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { style: this.styles().picker });
	    }
	  }]);

	  return SliderPointer;
	})(ReactCSS.Component);

	module.exports = SliderPointer;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var color = __webpack_require__(22);

	var _require = __webpack_require__(43);

	var Raised = _require.Raised;

	var _require2 = __webpack_require__(25);

	var EditableInput = _require2.EditableInput;

	var Material = (function (_ReactCSS$Component) {
	  _inherits(Material, _ReactCSS$Component);

	  function Material() {
	    _classCallCheck(this, Material);

	    _get(Object.getPrototypeOf(Material.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(Material, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          material: {
	            width: '98px',
	            height: '98px',
	            padding: '16px',
	            fontFamily: 'Roboto'
	          },
	          Hex: {
	            style: {
	              wrap: {
	                position: 'relative'
	              },
	              input: {
	                width: '100%',
	                marginTop: '12px',
	                fontSize: '15px',
	                color: '#333',
	                padding: '0',
	                border: '0',
	                borderBottom: '2px solid #' + this.props.hex,
	                outline: 'none',
	                height: '30px'
	              },
	              label: {
	                position: 'absolute',
	                top: '0',
	                left: '0',
	                fontSize: '11px',
	                color: '#999999',
	                textTransform: 'capitalize'
	              }
	            }
	          },
	          Input: {
	            style: {
	              wrap: {
	                position: 'relative'
	              },
	              input: {
	                width: '100%',
	                marginTop: '12px',
	                fontSize: '15px',
	                color: '#333',
	                padding: '0',
	                border: '0',
	                borderBottom: '1px solid #eee',
	                outline: 'none',
	                height: '30px'
	              },
	              label: {
	                position: 'absolute',
	                top: '0',
	                left: '0',
	                fontSize: '11px',
	                color: '#999999',
	                textTransform: 'capitalize'
	              }
	            }
	          },
	          split: {
	            display: 'flex',
	            marginRight: '-10px',
	            paddingTop: '11px'
	          },
	          third: {
	            flex: '1',
	            paddingRight: '10px'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      if (data.hex) {
	        color.isValidHex(data.hex) && this.props.onChange(data.hex);
	      } else if (data.r || data.g || data.b) {
	        this.props.onChange({
	          r: data.r || this.props.rgb.r,
	          g: data.g || this.props.rgb.g,
	          b: data.b || this.props.rgb.b
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Raised,
	        null,
	        React.createElement(
	          'div',
	          { style: this.styles().material },
	          React.createElement(EditableInput, _extends({}, this.styles().Hex, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange })),
	          React.createElement(
	            'div',
	            { style: this.styles().split, className: 'flexbox-fix' },
	            React.createElement(
	              'div',
	              { style: this.styles().third },
	              React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange }))
	            ),
	            React.createElement(
	              'div',
	              { style: this.styles().third },
	              React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange }))
	            ),
	            React.createElement(
	              'div',
	              { style: this.styles().third },
	              React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Material;
	})(ReactCSS.Component);

	module.exports = Material;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var color = __webpack_require__(22);

	var _require = __webpack_require__(43);

	var Raised = _require.Raised;

	var CompactColor = __webpack_require__(57);
	var CompactFields = __webpack_require__(58);

	var Compact = (function (_ReactCSS$Component) {
	  _inherits(Compact, _ReactCSS$Component);

	  function Compact() {
	    _classCallCheck(this, Compact);

	    _get(Object.getPrototypeOf(Compact.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(Compact, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          Compact: {
	            background: '#f6f6f6',
	            radius: '4px'
	          },
	          compact: {
	            paddingTop: '5px',
	            paddingLeft: '5px',
	            boxSizing: 'initial',
	            width: '240px'
	          },

	          clear: {
	            clear: 'both'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      if (data.hex) {
	        color.isValidHex(data.hex) && this.props.onChange(data.hex);
	      } else {
	        this.props.onChange(data);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var colors = [];
	      if (this.props.colors) {
	        for (var i = 0; i < this.props.colors.length; i++) {
	          var color = this.props.colors[i];
	          colors.push(React.createElement(CompactColor, { key: color, color: color, active: color.replace('#', '').toLowerCase() == this.props.hex, onClick: this.handleChange }));
	        }
	      }

	      return React.createElement(
	        Raised,
	        this.styles().Compact,
	        React.createElement(
	          'div',
	          { style: this.styles().compact },
	          colors,
	          React.createElement('div', { style: this.styles().clear }),
	          React.createElement(CompactFields, _extends({}, this.props, { onChange: this.handleChange }))
	        )
	      );
	    }
	  }]);

	  return Compact;
	})(ReactCSS.Component);

	Compact.defaultProps = {
	  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
	};

	module.exports = Compact;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var CompactColor = (function (_ReactCSS$Component) {
	  _inherits(CompactColor, _ReactCSS$Component);

	  function CompactColor() {
	    _classCallCheck(this, CompactColor);

	    _get(Object.getPrototypeOf(CompactColor.prototype), 'constructor', this).call(this);

	    this.handleClick = this.handleClick.bind(this);
	  }

	  _createClass(CompactColor, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          color: {
	            background: this.props.color,
	            width: '15px',
	            height: '15px',
	            float: 'left',
	            marginRight: '5px',
	            marginBottom: '5px',
	            position: 'relative',
	            cursor: 'pointer'
	          },
	          dot: {
	            Absolute: '5px 5px 5px 5px',
	            background: '#fff',
	            borderRadius: '50%',
	            opacity: '0'
	          }
	        },
	        'active': {
	          dot: {
	            opacity: '1'
	          }
	        },
	        'color-#FFFFFF': {
	          color: {
	            boxShadow: 'inset 0 0 0 1px #ddd'
	          },
	          dot: {
	            background: '#000'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.onClick({ hex: this.props.color });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().color, onClick: this.handleClick },
	        React.createElement('div', { style: this.styles().dot })
	      );
	    }
	  }]);

	  return CompactColor;
	})(ReactCSS.Component);

	module.exports = CompactColor;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _require = __webpack_require__(25);

	var EditableInput = _require.EditableInput;

	var CompactColor = (function (_ReactCSS$Component) {
	  _inherits(CompactColor, _ReactCSS$Component);

	  function CompactColor() {
	    _classCallCheck(this, CompactColor);

	    _get(Object.getPrototypeOf(CompactColor.prototype), 'constructor', this).call(this);

	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(CompactColor, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          fields: {
	            display: 'flex',
	            paddingBottom: '6px',
	            paddingRight: '5px',
	            position: 'relative'
	          },
	          active: {
	            position: 'absolute',
	            top: '6px',
	            left: '5px',
	            height: '9px',
	            width: '9px',
	            background: '#' + this.props.hex
	          },
	          Hex: {
	            style: {
	              wrap: {
	                flex: '6',
	                position: 'relative'
	              },
	              input: {
	                width: '80%',
	                padding: '0',
	                paddingLeft: '20%',
	                border: 'none',
	                outline: 'none',
	                background: 'none',
	                fontSize: '12px',
	                color: '#333',
	                height: '16px'
	              },
	              label: {
	                display: 'none'
	              }
	            }
	          },
	          RGB: {
	            style: {
	              wrap: {
	                flex: '3',
	                position: 'relative'
	              },
	              input: {
	                width: '70%',
	                padding: '0',
	                paddingLeft: '30%',
	                border: 'none',
	                outline: 'none',
	                background: 'none',
	                fontSize: '12px',
	                color: '#333',
	                height: '16px'
	              },
	              label: {
	                position: 'absolute',
	                top: '3px',
	                left: '0',
	                lineHeight: '16px',
	                textTransform: 'uppercase',
	                fontSize: '12px',
	                color: '#999'
	              }
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(data) {
	      if (data.r || data.g || data.b) {
	        this.props.onChange({
	          r: data.r || this.props.rgb.r,
	          g: data.g || this.props.rgb.g,
	          b: data.b || this.props.rgb.b
	        });
	      } else {
	        this.props.onChange(data);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().fields, className: 'flexbox-fix' },
	        React.createElement('div', { style: this.styles().active }),
	        React.createElement(EditableInput, _extends({}, this.styles().Hex, { label: 'hex', value: '#' + this.props.hex, onChange: this.handleChange })),
	        React.createElement(EditableInput, _extends({}, this.styles().RGB, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange })),
	        React.createElement(EditableInput, _extends({}, this.styles().RGB, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange })),
	        React.createElement(EditableInput, _extends({}, this.styles().RGB, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange }))
	      );
	    }
	  }]);

	  return CompactColor;
	})(ReactCSS.Component);

	module.exports = CompactColor;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	
	module.exports = {
	  Container: __webpack_require__(60),
	  Grid: __webpack_require__(61),
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var Container = (function (_ReactCSS$Component) {
	  _inherits(Container, _ReactCSS$Component);

	  function Container() {
	    _classCallCheck(this, Container);

	    _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Container, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          container: {
	            maxWidth: this.props.width + 'px',
	            padding: '0 20px',
	            margin: '0 auto'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().container },
	        this.props.children
	      );
	    }
	  }]);

	  return Container;
	})(ReactCSS.Component);

	Container.defaultProps = {
	  width: 960
	};

	module.exports = Container;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var Grid = (function (_ReactCSS$Component) {
	  _inherits(Grid, _ReactCSS$Component);

	  function Grid() {
	    _classCallCheck(this, Grid);

	    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Grid, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          grid: {
	            position: 'relative'
	          }
	        },
	        'preset-default': {
	          left: {
	            position: 'absolute',
	            width: '170px'
	          },
	          main: {
	            paddingLeft: '190px'
	          }
	        },
	        'preset-one': {
	          left: {
	            width: 'auto',
	            position: 'relative',
	            paddingRight: '260px'
	          },
	          main: {
	            position: 'absolute',
	            right: '0',
	            top: '0',
	            width: '225px'
	          }
	        },
	        'preset-two': {
	          left: {
	            width: '220px',
	            position: 'absolute'
	          },
	          main: {
	            paddingLeft: '267px'
	          }
	        },
	        'preset-three': {
	          left: {
	            width: '410px',
	            position: 'absolute',
	            height: '100%'
	          },
	          main: {
	            paddingLeft: '455px'
	          }
	        },

	        'mobile-default': {
	          main: {
	            padding: '0'
	          },
	          left: {
	            display: 'none'
	          }
	        },
	        'mobile-one': {
	          left: {
	            paddingRight: '0'
	          },
	          main: {
	            display: 'none'
	          }
	        },
	        'mobile-two': {
	          grid: {
	            position: 'relative',
	            width: '100%'
	          },
	          left: {
	            position: 'absolute',
	            left: '50%',
	            transform: 'translateX(-50%)',
	            marginLeft: '-20px'
	          },
	          main: {
	            display: 'none'
	          }
	        },
	        'mobile-three': {
	          grid: {
	            display: 'none'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'mobile-default': this.props.preset === 'default' && document.getElementById('root').clientWidth < 500,
	        'mobile-one': this.props.preset === 'one' && document.getElementById('root').clientWidth < 500,
	        'mobile-two': this.props.preset === 'two' && document.getElementById('root').clientWidth < 500,
	        'mobile-three': this.props.preset === 'three' && document.getElementById('root').clientWidth < 500
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().grid },
	        React.createElement(
	          'div',
	          { style: this.styles().left },
	          this.props.children[0]
	        ),
	        React.createElement(
	          'div',
	          { style: this.styles().main },
	          this.props.children[1]
	        )
	      );
	    }
	  }]);

	  return Grid;
	})(ReactCSS.Component);

	Grid.defaultProps = {
	  preset: 'default'
	};

	module.exports = Grid;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(63);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var Move = (function (_ReactCSS$Component) {
	  _inherits(Move, _ReactCSS$Component);

	  function Move() {
	    _classCallCheck(this, Move);

	    _get(Object.getPrototypeOf(Move.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Move, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          outer: {
	            opacity: this.props.inStartOpacity,
	            transform: this.props.inStartTransform,
	            transition: this.props.inStartTransition
	          }
	        }
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var animate = React.findDOMNode(this.refs.outer);

	      setTimeout((function () {
	        animate.style.opacity = this.props.inEndOpacity;
	        animate.style.transform = this.props.inEndTransform;
	        animate.style.transition = this.props.inEndTransition;
	      }).bind(this), this.props.inDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().outer, ref: 'outer', className: 'foobarbaz' },
	        this.props.children
	      );
	    }
	  }]);

	  return Move;
	})(ReactCSS.Component);

	Move.defaultProps = {
	  inStartOpacity: '0',
	  inStartTransform: '',
	  inStartTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
	  inEndOpacity: '1',
	  inEndTransform: '',
	  inEndTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
	  inDelay: 0
	};

	module.exports = Move;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _require = __webpack_require__(59);

	var Container = _require.Container;
	var Grid = _require.Grid;

	var _require2 = __webpack_require__(43);

	var Raised = _require2.Raised;

	var Docs = __webpack_require__(65);
	var Markdown = __webpack_require__(73);

	var documentation = __webpack_require__(78);

	var _require3 = __webpack_require__(97);

	var Button = _require3.Button;
	var buttonmd = _require3.buttonmd;
	var Sketch = _require3.Sketch;
	var sketchmd = _require3.sketchmd;

	var HomeDocumentation = (function (_ReactCSS$Component) {
	  _inherits(HomeDocumentation, _ReactCSS$Component);

	  function HomeDocumentation() {
	    _classCallCheck(this, HomeDocumentation);

	    _get(Object.getPrototypeOf(HomeDocumentation.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(HomeDocumentation, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          body: {
	            paddingTop: '50px',
	            paddingBottom: '50px'
	          },
	          examples: {
	            paddingTop: '30px'
	          },
	          example: {
	            paddingBottom: '40px'
	          },
	          playground: {
	            background: '#ddd',
	            boxShadow: 'inset 0 2px 3px rgba(0,0,0,.1)',
	            position: 'relative',
	            height: '200px',
	            borderRadius: '4px 4px 0 0'
	          },
	          exampleButton: {
	            width: '90px',
	            height: '24px',
	            margin: '-12px 0 0 -45px',
	            position: 'absolute',
	            left: '50%',
	            top: '50%'
	          },
	          exampleSketch: {
	            width: '46px',
	            height: '24px',
	            margin: '-12px 0 0 -23px',
	            position: 'absolute',
	            left: '50%',
	            top: '50%'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bottom = React.createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large', scrolling: '0', width: '160px', height: '30px', frameBorder: '0' });
	      return React.createElement(
	        'div',
	        { style: this.styles().body },
	        React.createElement(
	          Container,
	          { width: 780 },
	          React.createElement(Docs, { markdown: documentation, primaryColor: this.props.primaryColor, bottom: bottom }),
	          React.createElement(
	            Grid,
	            null,
	            React.createElement('div', null),
	            React.createElement(
	              'div',
	              { style: this.styles().examples },
	              React.createElement(
	                'div',
	                { style: this.styles().example },
	                React.createElement(
	                  'div',
	                  { style: this.styles().playground },
	                  React.createElement(
	                    'div',
	                    { style: this.styles().exampleButton },
	                    React.createElement(Button, null)
	                  )
	                ),
	                React.createElement(
	                  Markdown,
	                  null,
	                  buttonmd
	                )
	              ),
	              React.createElement(
	                'div',
	                { style: this.styles().example },
	                React.createElement(
	                  'div',
	                  { style: this.styles().playground },
	                  React.createElement(
	                    'div',
	                    { style: this.styles().exampleSketch },
	                    React.createElement(Sketch, null)
	                  )
	                ),
	                React.createElement(
	                  Markdown,
	                  null,
	                  sketchmd
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return HomeDocumentation;
	})(ReactCSS.Component);

	module.exports = HomeDocumentation;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(66);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var markdown = __webpack_require__(67);

	var _require = __webpack_require__(59);

	var Grid = _require.Grid;

	var MarkdownTitle = __webpack_require__(72);
	var Markdown = __webpack_require__(73);
	var Code = __webpack_require__(74);
	var Sidebar = __webpack_require__(76);

	var Docs = (function (_ReactCSS$Component) {
	  _inherits(Docs, _ReactCSS$Component);

	  function Docs() {
	    _classCallCheck(this, Docs);

	    _get(Object.getPrototypeOf(Docs.prototype), 'constructor', this).call(this);
	    this.state = {
	      sidebarFixed: false,
	      visible: false,
	      files: {}
	    };
	    this.changeSelection = this.changeSelection.bind(this);
	    this.attachSidebar = this.attachSidebar.bind(this);
	    this.handleScroll = this.handleScroll.bind(this);
	  }

	  _createClass(Docs, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {}
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('scroll', this.handleScroll, false);

	      var domFiles = React.findDOMNode(this.refs.files) && React.findDOMNode(this.refs.files).children;

	      if (domFiles) {
	        var files = {};
	        for (var i = 0; i < domFiles.length; i++) {
	          var file = domFiles[i];
	          files[file.offsetTop] = file.id;
	        }

	        this.setState({ files: files });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.handleScroll, false);
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(e) {
	      this.changeSelection();
	      this.attachSidebar();
	    }
	  }, {
	    key: 'attachSidebar',
	    value: function attachSidebar() {
	      var sidebarTop = React.findDOMNode(this.refs.sidebar).getBoundingClientRect().top;

	      if (sidebarTop <= 0 && this.state.sidebarFixed === false) {
	        this.setState({ sidebarFixed: true });
	      }

	      if (sidebarTop > 0 && this.state.sidebarFixed === true) {
	        this.setState({ sidebarFixed: false });
	      }
	    }
	  }, {
	    key: 'changeSelection',
	    value: function changeSelection() {
	      var top = document.body.scrollTop - 300;
	      var mostVisible = '';

	      for (var offset in this.state.files) {
	        if (this.state.files.hasOwnProperty(offset)) {
	          var id = this.state.files[offset];
	          if (offset < top) {
	            mostVisible = id;
	          }
	        }
	      }

	      if (mostVisible !== this.state.visible) {
	        this.setState({ visible: mostVisible });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var markdownFiles = [];

	      for (var fileName in this.props.markdown) {
	        if (this.props.markdown.hasOwnProperty(fileName)) {
	          var file = this.props.markdown[fileName];
	          var args = markdown.getArgs(file);
	          var body = markdown.getBody(file);

	          markdownFiles.push(React.createElement(
	            'div',
	            { key: fileName, id: args.id, style: this.styles().file, className: 'markdown' },
	            React.createElement(MarkdownTitle, {
	              isHeadline: markdown.isSubSection(fileName) ? true : false,
	              title: args.title,
	              link: args.id,
	              primaryColor: this.props.primaryColor }),
	            React.createElement(
	              Markdown,
	              null,
	              body
	            )
	          ));
	        }
	      }

	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'style',
	          null,
	          '\n          .rendered{\n            color: #607D8B; // blue grey 500\n          }\n          .rendered .hljs-comment {\n            color: #B0BEC5; // blue grey 200\n          }\n          .rendered .hljs-keyword{\n            color: #EF9A9A;  // red 200\n          }\n          .rendered .hljs-string{\n            color: #689F38; // light green 700\n          }\n          .rendered .hljs-title{\n          }\n          .text code{\n            background: #ddd;\n            padding: 1px 5px 3px;\n            border-radius: 2px;\n            box-shadow: inset 0 0 0 1px rgba(0,0,0,.03);\n            font-size: 85%;\n            vertical-align: bottom;\n          }\n          .markdown p{\n            margin: 15px 24px 15px 0;\n          }\n          .markdown h1{\n            font-size: 38px;\n            font-weight: 200;\n            color: rgba(0,0,0,.77);\n            margin: 0;\n            padding-top: 54px;\n            padding-bottom: 5px;\n          }\n          .markdown h2{\n            font-size: 26px;\n            line-height: 32px;\n            font-weight: 200;\n            color: rgba(0,0,0,.57);\n            padding-top: 20px;\n            margin-top: 20px;\n            margin-bottom: 10px;\n          }\n          .markdown h3{\n            font-weight: normal;\n            font-size: 20px;\n            padding-top: 20px;\n            margin-top: 20px;\n            color: rgba(0,0,0,.67);\n          }\n        '
	        ),
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            'div',
	            { style: this.styles().sidebar, ref: 'sidebar' },
	            React.createElement(Sidebar, { files: this.props.markdown, active: this.state.visible, primaryColor: this.props.primaryColor, bottom: this.props.bottom, fixed: this.state.sidebarFixed })
	          ),
	          React.createElement(
	            'div',
	            { ref: 'files', style: this.styles().files },
	            markdownFiles
	          )
	        )
	      );
	    }
	  }]);

	  return Docs;
	})(ReactCSS.Component);

	Docs.defaultProps = {
	  primaryColor: '#03A9F4'
	};

	module.exports = Docs;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Remarkable = __webpack_require__(68);
	var hljs = __webpack_require__(69);
	var regularMd = new Remarkable();
	var codeMd = new Remarkable({
	  highlight: function highlight(str) {
	    try {
	      return hljs.highlight('javascript', str).value;
	    } catch (err) {
	      console.log(err);
	    }
	  }
	});

	module.exports = {

	  render: function render(text) {
	    return regularMd.render(text);
	  },

	  renderCode: function renderCode(text) {
	    return codeMd.render(text);
	  },

	  getArgs: function getArgs(code) {
	    var args = {};
	    if (code.indexOf('---') > -1) {
	      var match = /---([\s\S]*?)---\n([\s\S]*)/.exec(code);
	      var argSplit = match[1].trim().split('\n');

	      for (var i = 0; i < argSplit.length; i++) {
	        var arg = argSplit[i];
	        var regex = /(.+?): (.+)/.exec(arg);
	        args[regex[1]] = regex[2];
	      }

	      code = match[2];
	    }

	    return args;
	  },

	  getBody: function getBody(code) {
	    if (code.indexOf('---') > -1) {
	      var match = /---([\s\S]*?)---\n([\s\S]*)/.exec(code);
	      return match[2];
	    } else {
	      return code;
	    }
	  },

	  isCode: function isCode(text) {
	    var array = [];
	    var reg = new RegExp(/(```.*\n([\s\S]*?)```)/g);
	    var match;
	    while ((match = reg.exec(text)) !== null) {
	      array.push(match);
	    }

	    return array;
	  },

	  isCodeBlock: function isCodeBlock(string) {
	    if (string.indexOf('|Code:') > -1) {
	      return true;
	    } else {
	      return false;
	    }
	  },

	  isSubSection: function isSubSection(string) {
	    if (string.split('-')[0].indexOf('.') === -1) {
	      return true;
	    } else {
	      return false;
	    }
	  },

	  codeNumber: function codeNumber(string) {
	    return (/\|Code:(.+?)\|/.exec(string)[1]
	    );
	  }

	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var require;var require;/*! remarkable 1.5.0 https://github.com//jonschlinkert/remarkable @license MIT */ ! function(e) {
	    if (true) module.exports = e();
	    else if ("function" == typeof define && define.amd) define([], e);
	    else {
	        var t;
	        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Remarkable = e()
	    }
	}(function() {
	    var e;
	    return function t(e, r, n) {
	        function s(i, l) {
	            if (!r[i]) {
	                if (!e[i]) {
	                    var a = "function" == typeof require && require;
	                    if (!l && a) return require(i, !0);
	                    if (o) return o(i, !0);
	                    var c = new Error("Cannot find module '" + i + "'");
	                    throw c.code = "MODULE_NOT_FOUND", c
	                }
	                var u = r[i] = {
	                    exports: {}
	                };
	                e[i][0].call(u.exports, function(t) {
	                    var r = e[i][1][t];
	                    return s(r ? r : t)
	                }, u, u.exports, t, e, r, n)
	            }
	            return r[i].exports
	        }
	        for (var o = "function" == typeof require && require, i = 0; i < n.length; i++) s(n[i]);
	        return s
	    }({
	        1: [function(e, t) {
	            "use strict";
	            t.exports = {
	                Aacute: "Á",
	                aacute: "á",
	                Abreve: "Ă",
	                abreve: "ă",
	                ac: "∾",
	                acd: "∿",
	                acE: "∾̳",
	                Acirc: "Â",
	                acirc: "â",
	                acute: "´",
	                Acy: "А",
	                acy: "а",
	                AElig: "Æ",
	                aelig: "æ",
	                af: "⁡",
	                Afr: "𝔄",
	                afr: "𝔞",
	                Agrave: "À",
	                agrave: "à",
	                alefsym: "ℵ",
	                aleph: "ℵ",
	                Alpha: "Α",
	                alpha: "α",
	                Amacr: "Ā",
	                amacr: "ā",
	                amalg: "⨿",
	                AMP: "&",
	                amp: "&",
	                And: "⩓",
	                and: "∧",
	                andand: "⩕",
	                andd: "⩜",
	                andslope: "⩘",
	                andv: "⩚",
	                ang: "∠",
	                ange: "⦤",
	                angle: "∠",
	                angmsd: "∡",
	                angmsdaa: "⦨",
	                angmsdab: "⦩",
	                angmsdac: "⦪",
	                angmsdad: "⦫",
	                angmsdae: "⦬",
	                angmsdaf: "⦭",
	                angmsdag: "⦮",
	                angmsdah: "⦯",
	                angrt: "∟",
	                angrtvb: "⊾",
	                angrtvbd: "⦝",
	                angsph: "∢",
	                angst: "Å",
	                angzarr: "⍼",
	                Aogon: "Ą",
	                aogon: "ą",
	                Aopf: "𝔸",
	                aopf: "𝕒",
	                ap: "≈",
	                apacir: "⩯",
	                apE: "⩰",
	                ape: "≊",
	                apid: "≋",
	                apos: "'",
	                ApplyFunction: "⁡",
	                approx: "≈",
	                approxeq: "≊",
	                Aring: "Å",
	                aring: "å",
	                Ascr: "𝒜",
	                ascr: "𝒶",
	                Assign: "≔",
	                ast: "*",
	                asymp: "≈",
	                asympeq: "≍",
	                Atilde: "Ã",
	                atilde: "ã",
	                Auml: "Ä",
	                auml: "ä",
	                awconint: "∳",
	                awint: "⨑",
	                backcong: "≌",
	                backepsilon: "϶",
	                backprime: "‵",
	                backsim: "∽",
	                backsimeq: "⋍",
	                Backslash: "∖",
	                Barv: "⫧",
	                barvee: "⊽",
	                Barwed: "⌆",
	                barwed: "⌅",
	                barwedge: "⌅",
	                bbrk: "⎵",
	                bbrktbrk: "⎶",
	                bcong: "≌",
	                Bcy: "Б",
	                bcy: "б",
	                bdquo: "„",
	                becaus: "∵",
	                Because: "∵",
	                because: "∵",
	                bemptyv: "⦰",
	                bepsi: "϶",
	                bernou: "ℬ",
	                Bernoullis: "ℬ",
	                Beta: "Β",
	                beta: "β",
	                beth: "ℶ",
	                between: "≬",
	                Bfr: "𝔅",
	                bfr: "𝔟",
	                bigcap: "⋂",
	                bigcirc: "◯",
	                bigcup: "⋃",
	                bigodot: "⨀",
	                bigoplus: "⨁",
	                bigotimes: "⨂",
	                bigsqcup: "⨆",
	                bigstar: "★",
	                bigtriangledown: "▽",
	                bigtriangleup: "△",
	                biguplus: "⨄",
	                bigvee: "⋁",
	                bigwedge: "⋀",
	                bkarow: "⤍",
	                blacklozenge: "⧫",
	                blacksquare: "▪",
	                blacktriangle: "▴",
	                blacktriangledown: "▾",
	                blacktriangleleft: "◂",
	                blacktriangleright: "▸",
	                blank: "␣",
	                blk12: "▒",
	                blk14: "░",
	                blk34: "▓",
	                block: "█",
	                bne: "=⃥",
	                bnequiv: "≡⃥",
	                bNot: "⫭",
	                bnot: "⌐",
	                Bopf: "𝔹",
	                bopf: "𝕓",
	                bot: "⊥",
	                bottom: "⊥",
	                bowtie: "⋈",
	                boxbox: "⧉",
	                boxDL: "╗",
	                boxDl: "╖",
	                boxdL: "╕",
	                boxdl: "┐",
	                boxDR: "╔",
	                boxDr: "╓",
	                boxdR: "╒",
	                boxdr: "┌",
	                boxH: "═",
	                boxh: "─",
	                boxHD: "╦",
	                boxHd: "╤",
	                boxhD: "╥",
	                boxhd: "┬",
	                boxHU: "╩",
	                boxHu: "╧",
	                boxhU: "╨",
	                boxhu: "┴",
	                boxminus: "⊟",
	                boxplus: "⊞",
	                boxtimes: "⊠",
	                boxUL: "╝",
	                boxUl: "╜",
	                boxuL: "╛",
	                boxul: "┘",
	                boxUR: "╚",
	                boxUr: "╙",
	                boxuR: "╘",
	                boxur: "└",
	                boxV: "║",
	                boxv: "│",
	                boxVH: "╬",
	                boxVh: "╫",
	                boxvH: "╪",
	                boxvh: "┼",
	                boxVL: "╣",
	                boxVl: "╢",
	                boxvL: "╡",
	                boxvl: "┤",
	                boxVR: "╠",
	                boxVr: "╟",
	                boxvR: "╞",
	                boxvr: "├",
	                bprime: "‵",
	                Breve: "˘",
	                breve: "˘",
	                brvbar: "¦",
	                Bscr: "ℬ",
	                bscr: "𝒷",
	                bsemi: "⁏",
	                bsim: "∽",
	                bsime: "⋍",
	                bsol: "\\",
	                bsolb: "⧅",
	                bsolhsub: "⟈",
	                bull: "•",
	                bullet: "•",
	                bump: "≎",
	                bumpE: "⪮",
	                bumpe: "≏",
	                Bumpeq: "≎",
	                bumpeq: "≏",
	                Cacute: "Ć",
	                cacute: "ć",
	                Cap: "⋒",
	                cap: "∩",
	                capand: "⩄",
	                capbrcup: "⩉",
	                capcap: "⩋",
	                capcup: "⩇",
	                capdot: "⩀",
	                CapitalDifferentialD: "ⅅ",
	                caps: "∩︀",
	                caret: "⁁",
	                caron: "ˇ",
	                Cayleys: "ℭ",
	                ccaps: "⩍",
	                Ccaron: "Č",
	                ccaron: "č",
	                Ccedil: "Ç",
	                ccedil: "ç",
	                Ccirc: "Ĉ",
	                ccirc: "ĉ",
	                Cconint: "∰",
	                ccups: "⩌",
	                ccupssm: "⩐",
	                Cdot: "Ċ",
	                cdot: "ċ",
	                cedil: "¸",
	                Cedilla: "¸",
	                cemptyv: "⦲",
	                cent: "¢",
	                CenterDot: "·",
	                centerdot: "·",
	                Cfr: "ℭ",
	                cfr: "𝔠",
	                CHcy: "Ч",
	                chcy: "ч",
	                check: "✓",
	                checkmark: "✓",
	                Chi: "Χ",
	                chi: "χ",
	                cir: "○",
	                circ: "ˆ",
	                circeq: "≗",
	                circlearrowleft: "↺",
	                circlearrowright: "↻",
	                circledast: "⊛",
	                circledcirc: "⊚",
	                circleddash: "⊝",
	                CircleDot: "⊙",
	                circledR: "®",
	                circledS: "Ⓢ",
	                CircleMinus: "⊖",
	                CirclePlus: "⊕",
	                CircleTimes: "⊗",
	                cirE: "⧃",
	                cire: "≗",
	                cirfnint: "⨐",
	                cirmid: "⫯",
	                cirscir: "⧂",
	                ClockwiseContourIntegral: "∲",
	                CloseCurlyDoubleQuote: "”",
	                CloseCurlyQuote: "’",
	                clubs: "♣",
	                clubsuit: "♣",
	                Colon: "∷",
	                colon: ":",
	                Colone: "⩴",
	                colone: "≔",
	                coloneq: "≔",
	                comma: ",",
	                commat: "@",
	                comp: "∁",
	                compfn: "∘",
	                complement: "∁",
	                complexes: "ℂ",
	                cong: "≅",
	                congdot: "⩭",
	                Congruent: "≡",
	                Conint: "∯",
	                conint: "∮",
	                ContourIntegral: "∮",
	                Copf: "ℂ",
	                copf: "𝕔",
	                coprod: "∐",
	                Coproduct: "∐",
	                COPY: "©",
	                copy: "©",
	                copysr: "℗",
	                CounterClockwiseContourIntegral: "∳",
	                crarr: "↵",
	                Cross: "⨯",
	                cross: "✗",
	                Cscr: "𝒞",
	                cscr: "𝒸",
	                csub: "⫏",
	                csube: "⫑",
	                csup: "⫐",
	                csupe: "⫒",
	                ctdot: "⋯",
	                cudarrl: "⤸",
	                cudarrr: "⤵",
	                cuepr: "⋞",
	                cuesc: "⋟",
	                cularr: "↶",
	                cularrp: "⤽",
	                Cup: "⋓",
	                cup: "∪",
	                cupbrcap: "⩈",
	                CupCap: "≍",
	                cupcap: "⩆",
	                cupcup: "⩊",
	                cupdot: "⊍",
	                cupor: "⩅",
	                cups: "∪︀",
	                curarr: "↷",
	                curarrm: "⤼",
	                curlyeqprec: "⋞",
	                curlyeqsucc: "⋟",
	                curlyvee: "⋎",
	                curlywedge: "⋏",
	                curren: "¤",
	                curvearrowleft: "↶",
	                curvearrowright: "↷",
	                cuvee: "⋎",
	                cuwed: "⋏",
	                cwconint: "∲",
	                cwint: "∱",
	                cylcty: "⌭",
	                Dagger: "‡",
	                dagger: "†",
	                daleth: "ℸ",
	                Darr: "↡",
	                dArr: "⇓",
	                darr: "↓",
	                dash: "‐",
	                Dashv: "⫤",
	                dashv: "⊣",
	                dbkarow: "⤏",
	                dblac: "˝",
	                Dcaron: "Ď",
	                dcaron: "ď",
	                Dcy: "Д",
	                dcy: "д",
	                DD: "ⅅ",
	                dd: "ⅆ",
	                ddagger: "‡",
	                ddarr: "⇊",
	                DDotrahd: "⤑",
	                ddotseq: "⩷",
	                deg: "°",
	                Del: "∇",
	                Delta: "Δ",
	                delta: "δ",
	                demptyv: "⦱",
	                dfisht: "⥿",
	                Dfr: "𝔇",
	                dfr: "𝔡",
	                dHar: "⥥",
	                dharl: "⇃",
	                dharr: "⇂",
	                DiacriticalAcute: "´",
	                DiacriticalDot: "˙",
	                DiacriticalDoubleAcute: "˝",
	                DiacriticalGrave: "`",
	                DiacriticalTilde: "˜",
	                diam: "⋄",
	                Diamond: "⋄",
	                diamond: "⋄",
	                diamondsuit: "♦",
	                diams: "♦",
	                die: "¨",
	                DifferentialD: "ⅆ",
	                digamma: "ϝ",
	                disin: "⋲",
	                div: "÷",
	                divide: "÷",
	                divideontimes: "⋇",
	                divonx: "⋇",
	                DJcy: "Ђ",
	                djcy: "ђ",
	                dlcorn: "⌞",
	                dlcrop: "⌍",
	                dollar: "$",
	                Dopf: "𝔻",
	                dopf: "𝕕",
	                Dot: "¨",
	                dot: "˙",
	                DotDot: "⃜",
	                doteq: "≐",
	                doteqdot: "≑",
	                DotEqual: "≐",
	                dotminus: "∸",
	                dotplus: "∔",
	                dotsquare: "⊡",
	                doublebarwedge: "⌆",
	                DoubleContourIntegral: "∯",
	                DoubleDot: "¨",
	                DoubleDownArrow: "⇓",
	                DoubleLeftArrow: "⇐",
	                DoubleLeftRightArrow: "⇔",
	                DoubleLeftTee: "⫤",
	                DoubleLongLeftArrow: "⟸",
	                DoubleLongLeftRightArrow: "⟺",
	                DoubleLongRightArrow: "⟹",
	                DoubleRightArrow: "⇒",
	                DoubleRightTee: "⊨",
	                DoubleUpArrow: "⇑",
	                DoubleUpDownArrow: "⇕",
	                DoubleVerticalBar: "∥",
	                DownArrow: "↓",
	                Downarrow: "⇓",
	                downarrow: "↓",
	                DownArrowBar: "⤓",
	                DownArrowUpArrow: "⇵",
	                DownBreve: "̑",
	                downdownarrows: "⇊",
	                downharpoonleft: "⇃",
	                downharpoonright: "⇂",
	                DownLeftRightVector: "⥐",
	                DownLeftTeeVector: "⥞",
	                DownLeftVector: "↽",
	                DownLeftVectorBar: "⥖",
	                DownRightTeeVector: "⥟",
	                DownRightVector: "⇁",
	                DownRightVectorBar: "⥗",
	                DownTee: "⊤",
	                DownTeeArrow: "↧",
	                drbkarow: "⤐",
	                drcorn: "⌟",
	                drcrop: "⌌",
	                Dscr: "𝒟",
	                dscr: "𝒹",
	                DScy: "Ѕ",
	                dscy: "ѕ",
	                dsol: "⧶",
	                Dstrok: "Đ",
	                dstrok: "đ",
	                dtdot: "⋱",
	                dtri: "▿",
	                dtrif: "▾",
	                duarr: "⇵",
	                duhar: "⥯",
	                dwangle: "⦦",
	                DZcy: "Џ",
	                dzcy: "џ",
	                dzigrarr: "⟿",
	                Eacute: "É",
	                eacute: "é",
	                easter: "⩮",
	                Ecaron: "Ě",
	                ecaron: "ě",
	                ecir: "≖",
	                Ecirc: "Ê",
	                ecirc: "ê",
	                ecolon: "≕",
	                Ecy: "Э",
	                ecy: "э",
	                eDDot: "⩷",
	                Edot: "Ė",
	                eDot: "≑",
	                edot: "ė",
	                ee: "ⅇ",
	                efDot: "≒",
	                Efr: "𝔈",
	                efr: "𝔢",
	                eg: "⪚",
	                Egrave: "È",
	                egrave: "è",
	                egs: "⪖",
	                egsdot: "⪘",
	                el: "⪙",
	                Element: "∈",
	                elinters: "⏧",
	                ell: "ℓ",
	                els: "⪕",
	                elsdot: "⪗",
	                Emacr: "Ē",
	                emacr: "ē",
	                empty: "∅",
	                emptyset: "∅",
	                EmptySmallSquare: "◻",
	                emptyv: "∅",
	                EmptyVerySmallSquare: "▫",
	                emsp: " ",
	                emsp13: " ",
	                emsp14: " ",
	                ENG: "Ŋ",
	                eng: "ŋ",
	                ensp: " ",
	                Eogon: "Ę",
	                eogon: "ę",
	                Eopf: "𝔼",
	                eopf: "𝕖",
	                epar: "⋕",
	                eparsl: "⧣",
	                eplus: "⩱",
	                epsi: "ε",
	                Epsilon: "Ε",
	                epsilon: "ε",
	                epsiv: "ϵ",
	                eqcirc: "≖",
	                eqcolon: "≕",
	                eqsim: "≂",
	                eqslantgtr: "⪖",
	                eqslantless: "⪕",
	                Equal: "⩵",
	                equals: "=",
	                EqualTilde: "≂",
	                equest: "≟",
	                Equilibrium: "⇌",
	                equiv: "≡",
	                equivDD: "⩸",
	                eqvparsl: "⧥",
	                erarr: "⥱",
	                erDot: "≓",
	                Escr: "ℰ",
	                escr: "ℯ",
	                esdot: "≐",
	                Esim: "⩳",
	                esim: "≂",
	                Eta: "Η",
	                eta: "η",
	                ETH: "Ð",
	                eth: "ð",
	                Euml: "Ë",
	                euml: "ë",
	                euro: "€",
	                excl: "!",
	                exist: "∃",
	                Exists: "∃",
	                expectation: "ℰ",
	                ExponentialE: "ⅇ",
	                exponentiale: "ⅇ",
	                fallingdotseq: "≒",
	                Fcy: "Ф",
	                fcy: "ф",
	                female: "♀",
	                ffilig: "ﬃ",
	                fflig: "ﬀ",
	                ffllig: "ﬄ",
	                Ffr: "𝔉",
	                ffr: "𝔣",
	                filig: "ﬁ",
	                FilledSmallSquare: "◼",
	                FilledVerySmallSquare: "▪",
	                fjlig: "fj",
	                flat: "♭",
	                fllig: "ﬂ",
	                fltns: "▱",
	                fnof: "ƒ",
	                Fopf: "𝔽",
	                fopf: "𝕗",
	                ForAll: "∀",
	                forall: "∀",
	                fork: "⋔",
	                forkv: "⫙",
	                Fouriertrf: "ℱ",
	                fpartint: "⨍",
	                frac12: "½",
	                frac13: "⅓",
	                frac14: "¼",
	                frac15: "⅕",
	                frac16: "⅙",
	                frac18: "⅛",
	                frac23: "⅔",
	                frac25: "⅖",
	                frac34: "¾",
	                frac35: "⅗",
	                frac38: "⅜",
	                frac45: "⅘",
	                frac56: "⅚",
	                frac58: "⅝",
	                frac78: "⅞",
	                frasl: "⁄",
	                frown: "⌢",
	                Fscr: "ℱ",
	                fscr: "𝒻",
	                gacute: "ǵ",
	                Gamma: "Γ",
	                gamma: "γ",
	                Gammad: "Ϝ",
	                gammad: "ϝ",
	                gap: "⪆",
	                Gbreve: "Ğ",
	                gbreve: "ğ",
	                Gcedil: "Ģ",
	                Gcirc: "Ĝ",
	                gcirc: "ĝ",
	                Gcy: "Г",
	                gcy: "г",
	                Gdot: "Ġ",
	                gdot: "ġ",
	                gE: "≧",
	                ge: "≥",
	                gEl: "⪌",
	                gel: "⋛",
	                geq: "≥",
	                geqq: "≧",
	                geqslant: "⩾",
	                ges: "⩾",
	                gescc: "⪩",
	                gesdot: "⪀",
	                gesdoto: "⪂",
	                gesdotol: "⪄",
	                gesl: "⋛︀",
	                gesles: "⪔",
	                Gfr: "𝔊",
	                gfr: "𝔤",
	                Gg: "⋙",
	                gg: "≫",
	                ggg: "⋙",
	                gimel: "ℷ",
	                GJcy: "Ѓ",
	                gjcy: "ѓ",
	                gl: "≷",
	                gla: "⪥",
	                glE: "⪒",
	                glj: "⪤",
	                gnap: "⪊",
	                gnapprox: "⪊",
	                gnE: "≩",
	                gne: "⪈",
	                gneq: "⪈",
	                gneqq: "≩",
	                gnsim: "⋧",
	                Gopf: "𝔾",
	                gopf: "𝕘",
	                grave: "`",
	                GreaterEqual: "≥",
	                GreaterEqualLess: "⋛",
	                GreaterFullEqual: "≧",
	                GreaterGreater: "⪢",
	                GreaterLess: "≷",
	                GreaterSlantEqual: "⩾",
	                GreaterTilde: "≳",
	                Gscr: "𝒢",
	                gscr: "ℊ",
	                gsim: "≳",
	                gsime: "⪎",
	                gsiml: "⪐",
	                GT: ">",
	                Gt: "≫",
	                gt: ">",
	                gtcc: "⪧",
	                gtcir: "⩺",
	                gtdot: "⋗",
	                gtlPar: "⦕",
	                gtquest: "⩼",
	                gtrapprox: "⪆",
	                gtrarr: "⥸",
	                gtrdot: "⋗",
	                gtreqless: "⋛",
	                gtreqqless: "⪌",
	                gtrless: "≷",
	                gtrsim: "≳",
	                gvertneqq: "≩︀",
	                gvnE: "≩︀",
	                Hacek: "ˇ",
	                hairsp: " ",
	                half: "½",
	                hamilt: "ℋ",
	                HARDcy: "Ъ",
	                hardcy: "ъ",
	                hArr: "⇔",
	                harr: "↔",
	                harrcir: "⥈",
	                harrw: "↭",
	                Hat: "^",
	                hbar: "ℏ",
	                Hcirc: "Ĥ",
	                hcirc: "ĥ",
	                hearts: "♥",
	                heartsuit: "♥",
	                hellip: "…",
	                hercon: "⊹",
	                Hfr: "ℌ",
	                hfr: "𝔥",
	                HilbertSpace: "ℋ",
	                hksearow: "⤥",
	                hkswarow: "⤦",
	                hoarr: "⇿",
	                homtht: "∻",
	                hookleftarrow: "↩",
	                hookrightarrow: "↪",
	                Hopf: "ℍ",
	                hopf: "𝕙",
	                horbar: "―",
	                HorizontalLine: "─",
	                Hscr: "ℋ",
	                hscr: "𝒽",
	                hslash: "ℏ",
	                Hstrok: "Ħ",
	                hstrok: "ħ",
	                HumpDownHump: "≎",
	                HumpEqual: "≏",
	                hybull: "⁃",
	                hyphen: "‐",
	                Iacute: "Í",
	                iacute: "í",
	                ic: "⁣",
	                Icirc: "Î",
	                icirc: "î",
	                Icy: "И",
	                icy: "и",
	                Idot: "İ",
	                IEcy: "Е",
	                iecy: "е",
	                iexcl: "¡",
	                iff: "⇔",
	                Ifr: "ℑ",
	                ifr: "𝔦",
	                Igrave: "Ì",
	                igrave: "ì",
	                ii: "ⅈ",
	                iiiint: "⨌",
	                iiint: "∭",
	                iinfin: "⧜",
	                iiota: "℩",
	                IJlig: "Ĳ",
	                ijlig: "ĳ",
	                Im: "ℑ",
	                Imacr: "Ī",
	                imacr: "ī",
	                image: "ℑ",
	                ImaginaryI: "ⅈ",
	                imagline: "ℐ",
	                imagpart: "ℑ",
	                imath: "ı",
	                imof: "⊷",
	                imped: "Ƶ",
	                Implies: "⇒",
	                "in": "∈",
	                incare: "℅",
	                infin: "∞",
	                infintie: "⧝",
	                inodot: "ı",
	                Int: "∬",
	                "int": "∫",
	                intcal: "⊺",
	                integers: "ℤ",
	                Integral: "∫",
	                intercal: "⊺",
	                Intersection: "⋂",
	                intlarhk: "⨗",
	                intprod: "⨼",
	                InvisibleComma: "⁣",
	                InvisibleTimes: "⁢",
	                IOcy: "Ё",
	                iocy: "ё",
	                Iogon: "Į",
	                iogon: "į",
	                Iopf: "𝕀",
	                iopf: "𝕚",
	                Iota: "Ι",
	                iota: "ι",
	                iprod: "⨼",
	                iquest: "¿",
	                Iscr: "ℐ",
	                iscr: "𝒾",
	                isin: "∈",
	                isindot: "⋵",
	                isinE: "⋹",
	                isins: "⋴",
	                isinsv: "⋳",
	                isinv: "∈",
	                it: "⁢",
	                Itilde: "Ĩ",
	                itilde: "ĩ",
	                Iukcy: "І",
	                iukcy: "і",
	                Iuml: "Ï",
	                iuml: "ï",
	                Jcirc: "Ĵ",
	                jcirc: "ĵ",
	                Jcy: "Й",
	                jcy: "й",
	                Jfr: "𝔍",
	                jfr: "𝔧",
	                jmath: "ȷ",
	                Jopf: "𝕁",
	                jopf: "𝕛",
	                Jscr: "𝒥",
	                jscr: "𝒿",
	                Jsercy: "Ј",
	                jsercy: "ј",
	                Jukcy: "Є",
	                jukcy: "є",
	                Kappa: "Κ",
	                kappa: "κ",
	                kappav: "ϰ",
	                Kcedil: "Ķ",
	                kcedil: "ķ",
	                Kcy: "К",
	                kcy: "к",
	                Kfr: "𝔎",
	                kfr: "𝔨",
	                kgreen: "ĸ",
	                KHcy: "Х",
	                khcy: "х",
	                KJcy: "Ќ",
	                kjcy: "ќ",
	                Kopf: "𝕂",
	                kopf: "𝕜",
	                Kscr: "𝒦",
	                kscr: "𝓀",
	                lAarr: "⇚",
	                Lacute: "Ĺ",
	                lacute: "ĺ",
	                laemptyv: "⦴",
	                lagran: "ℒ",
	                Lambda: "Λ",
	                lambda: "λ",
	                Lang: "⟪",
	                lang: "⟨",
	                langd: "⦑",
	                langle: "⟨",
	                lap: "⪅",
	                Laplacetrf: "ℒ",
	                laquo: "«",
	                Larr: "↞",
	                lArr: "⇐",
	                larr: "←",
	                larrb: "⇤",
	                larrbfs: "⤟",
	                larrfs: "⤝",
	                larrhk: "↩",
	                larrlp: "↫",
	                larrpl: "⤹",
	                larrsim: "⥳",
	                larrtl: "↢",
	                lat: "⪫",
	                lAtail: "⤛",
	                latail: "⤙",
	                late: "⪭",
	                lates: "⪭︀",
	                lBarr: "⤎",
	                lbarr: "⤌",
	                lbbrk: "❲",
	                lbrace: "{",
	                lbrack: "[",
	                lbrke: "⦋",
	                lbrksld: "⦏",
	                lbrkslu: "⦍",
	                Lcaron: "Ľ",
	                lcaron: "ľ",
	                Lcedil: "Ļ",
	                lcedil: "ļ",
	                lceil: "⌈",
	                lcub: "{",
	                Lcy: "Л",
	                lcy: "л",
	                ldca: "⤶",
	                ldquo: "“",
	                ldquor: "„",
	                ldrdhar: "⥧",
	                ldrushar: "⥋",
	                ldsh: "↲",
	                lE: "≦",
	                le: "≤",
	                LeftAngleBracket: "⟨",
	                LeftArrow: "←",
	                Leftarrow: "⇐",
	                leftarrow: "←",
	                LeftArrowBar: "⇤",
	                LeftArrowRightArrow: "⇆",
	                leftarrowtail: "↢",
	                LeftCeiling: "⌈",
	                LeftDoubleBracket: "⟦",
	                LeftDownTeeVector: "⥡",
	                LeftDownVector: "⇃",
	                LeftDownVectorBar: "⥙",
	                LeftFloor: "⌊",
	                leftharpoondown: "↽",
	                leftharpoonup: "↼",
	                leftleftarrows: "⇇",
	                LeftRightArrow: "↔",
	                Leftrightarrow: "⇔",
	                leftrightarrow: "↔",
	                leftrightarrows: "⇆",
	                leftrightharpoons: "⇋",
	                leftrightsquigarrow: "↭",
	                LeftRightVector: "⥎",
	                LeftTee: "⊣",
	                LeftTeeArrow: "↤",
	                LeftTeeVector: "⥚",
	                leftthreetimes: "⋋",
	                LeftTriangle: "⊲",
	                LeftTriangleBar: "⧏",
	                LeftTriangleEqual: "⊴",
	                LeftUpDownVector: "⥑",
	                LeftUpTeeVector: "⥠",
	                LeftUpVector: "↿",
	                LeftUpVectorBar: "⥘",
	                LeftVector: "↼",
	                LeftVectorBar: "⥒",
	                lEg: "⪋",
	                leg: "⋚",
	                leq: "≤",
	                leqq: "≦",
	                leqslant: "⩽",
	                les: "⩽",
	                lescc: "⪨",
	                lesdot: "⩿",
	                lesdoto: "⪁",
	                lesdotor: "⪃",
	                lesg: "⋚︀",
	                lesges: "⪓",
	                lessapprox: "⪅",
	                lessdot: "⋖",
	                lesseqgtr: "⋚",
	                lesseqqgtr: "⪋",
	                LessEqualGreater: "⋚",
	                LessFullEqual: "≦",
	                LessGreater: "≶",
	                lessgtr: "≶",
	                LessLess: "⪡",
	                lesssim: "≲",
	                LessSlantEqual: "⩽",
	                LessTilde: "≲",
	                lfisht: "⥼",
	                lfloor: "⌊",
	                Lfr: "𝔏",
	                lfr: "𝔩",
	                lg: "≶",
	                lgE: "⪑",
	                lHar: "⥢",
	                lhard: "↽",
	                lharu: "↼",
	                lharul: "⥪",
	                lhblk: "▄",
	                LJcy: "Љ",
	                ljcy: "љ",
	                Ll: "⋘",
	                ll: "≪",
	                llarr: "⇇",
	                llcorner: "⌞",
	                Lleftarrow: "⇚",
	                llhard: "⥫",
	                lltri: "◺",
	                Lmidot: "Ŀ",
	                lmidot: "ŀ",
	                lmoust: "⎰",
	                lmoustache: "⎰",
	                lnap: "⪉",
	                lnapprox: "⪉",
	                lnE: "≨",
	                lne: "⪇",
	                lneq: "⪇",
	                lneqq: "≨",
	                lnsim: "⋦",
	                loang: "⟬",
	                loarr: "⇽",
	                lobrk: "⟦",
	                LongLeftArrow: "⟵",
	                Longleftarrow: "⟸",
	                longleftarrow: "⟵",
	                LongLeftRightArrow: "⟷",
	                Longleftrightarrow: "⟺",
	                longleftrightarrow: "⟷",
	                longmapsto: "⟼",
	                LongRightArrow: "⟶",
	                Longrightarrow: "⟹",
	                longrightarrow: "⟶",
	                looparrowleft: "↫",
	                looparrowright: "↬",
	                lopar: "⦅",
	                Lopf: "𝕃",
	                lopf: "𝕝",
	                loplus: "⨭",
	                lotimes: "⨴",
	                lowast: "∗",
	                lowbar: "_",
	                LowerLeftArrow: "↙",
	                LowerRightArrow: "↘",
	                loz: "◊",
	                lozenge: "◊",
	                lozf: "⧫",
	                lpar: "(",
	                lparlt: "⦓",
	                lrarr: "⇆",
	                lrcorner: "⌟",
	                lrhar: "⇋",
	                lrhard: "⥭",
	                lrm: "‎",
	                lrtri: "⊿",
	                lsaquo: "‹",
	                Lscr: "ℒ",
	                lscr: "𝓁",
	                Lsh: "↰",
	                lsh: "↰",
	                lsim: "≲",
	                lsime: "⪍",
	                lsimg: "⪏",
	                lsqb: "[",
	                lsquo: "‘",
	                lsquor: "‚",
	                Lstrok: "Ł",
	                lstrok: "ł",
	                LT: "<",
	                Lt: "≪",
	                lt: "<",
	                ltcc: "⪦",
	                ltcir: "⩹",
	                ltdot: "⋖",
	                lthree: "⋋",
	                ltimes: "⋉",
	                ltlarr: "⥶",
	                ltquest: "⩻",
	                ltri: "◃",
	                ltrie: "⊴",
	                ltrif: "◂",
	                ltrPar: "⦖",
	                lurdshar: "⥊",
	                luruhar: "⥦",
	                lvertneqq: "≨︀",
	                lvnE: "≨︀",
	                macr: "¯",
	                male: "♂",
	                malt: "✠",
	                maltese: "✠",
	                Map: "⤅",
	                map: "↦",
	                mapsto: "↦",
	                mapstodown: "↧",
	                mapstoleft: "↤",
	                mapstoup: "↥",
	                marker: "▮",
	                mcomma: "⨩",
	                Mcy: "М",
	                mcy: "м",
	                mdash: "—",
	                mDDot: "∺",
	                measuredangle: "∡",
	                MediumSpace: " ",
	                Mellintrf: "ℳ",
	                Mfr: "𝔐",
	                mfr: "𝔪",
	                mho: "℧",
	                micro: "µ",
	                mid: "∣",
	                midast: "*",
	                midcir: "⫰",
	                middot: "·",
	                minus: "−",
	                minusb: "⊟",
	                minusd: "∸",
	                minusdu: "⨪",
	                MinusPlus: "∓",
	                mlcp: "⫛",
	                mldr: "…",
	                mnplus: "∓",
	                models: "⊧",
	                Mopf: "𝕄",
	                mopf: "𝕞",
	                mp: "∓",
	                Mscr: "ℳ",
	                mscr: "𝓂",
	                mstpos: "∾",
	                Mu: "Μ",
	                mu: "μ",
	                multimap: "⊸",
	                mumap: "⊸",
	                nabla: "∇",
	                Nacute: "Ń",
	                nacute: "ń",
	                nang: "∠⃒",
	                nap: "≉",
	                napE: "⩰̸",
	                napid: "≋̸",
	                napos: "ŉ",
	                napprox: "≉",
	                natur: "♮",
	                natural: "♮",
	                naturals: "ℕ",
	                nbsp: " ",
	                nbump: "≎̸",
	                nbumpe: "≏̸",
	                ncap: "⩃",
	                Ncaron: "Ň",
	                ncaron: "ň",
	                Ncedil: "Ņ",
	                ncedil: "ņ",
	                ncong: "≇",
	                ncongdot: "⩭̸",
	                ncup: "⩂",
	                Ncy: "Н",
	                ncy: "н",
	                ndash: "–",
	                ne: "≠",
	                nearhk: "⤤",
	                neArr: "⇗",
	                nearr: "↗",
	                nearrow: "↗",
	                nedot: "≐̸",
	                NegativeMediumSpace: "​",
	                NegativeThickSpace: "​",
	                NegativeThinSpace: "​",
	                NegativeVeryThinSpace: "​",
	                nequiv: "≢",
	                nesear: "⤨",
	                nesim: "≂̸",
	                NestedGreaterGreater: "≫",
	                NestedLessLess: "≪",
	                NewLine: "\n",
	                nexist: "∄",
	                nexists: "∄",
	                Nfr: "𝔑",
	                nfr: "𝔫",
	                ngE: "≧̸",
	                nge: "≱",
	                ngeq: "≱",
	                ngeqq: "≧̸",
	                ngeqslant: "⩾̸",
	                nges: "⩾̸",
	                nGg: "⋙̸",
	                ngsim: "≵",
	                nGt: "≫⃒",
	                ngt: "≯",
	                ngtr: "≯",
	                nGtv: "≫̸",
	                nhArr: "⇎",
	                nharr: "↮",
	                nhpar: "⫲",
	                ni: "∋",
	                nis: "⋼",
	                nisd: "⋺",
	                niv: "∋",
	                NJcy: "Њ",
	                njcy: "њ",
	                nlArr: "⇍",
	                nlarr: "↚",
	                nldr: "‥",
	                nlE: "≦̸",
	                nle: "≰",
	                nLeftarrow: "⇍",
	                nleftarrow: "↚",
	                nLeftrightarrow: "⇎",
	                nleftrightarrow: "↮",
	                nleq: "≰",
	                nleqq: "≦̸",
	                nleqslant: "⩽̸",
	                nles: "⩽̸",
	                nless: "≮",
	                nLl: "⋘̸",
	                nlsim: "≴",
	                nLt: "≪⃒",
	                nlt: "≮",
	                nltri: "⋪",
	                nltrie: "⋬",
	                nLtv: "≪̸",
	                nmid: "∤",
	                NoBreak: "⁠",
	                NonBreakingSpace: " ",
	                Nopf: "ℕ",
	                nopf: "𝕟",
	                Not: "⫬",
	                not: "¬",
	                NotCongruent: "≢",
	                NotCupCap: "≭",
	                NotDoubleVerticalBar: "∦",
	                NotElement: "∉",
	                NotEqual: "≠",
	                NotEqualTilde: "≂̸",
	                NotExists: "∄",
	                NotGreater: "≯",
	                NotGreaterEqual: "≱",
	                NotGreaterFullEqual: "≧̸",
	                NotGreaterGreater: "≫̸",
	                NotGreaterLess: "≹",
	                NotGreaterSlantEqual: "⩾̸",
	                NotGreaterTilde: "≵",
	                NotHumpDownHump: "≎̸",
	                NotHumpEqual: "≏̸",
	                notin: "∉",
	                notindot: "⋵̸",
	                notinE: "⋹̸",
	                notinva: "∉",
	                notinvb: "⋷",
	                notinvc: "⋶",
	                NotLeftTriangle: "⋪",
	                NotLeftTriangleBar: "⧏̸",
	                NotLeftTriangleEqual: "⋬",
	                NotLess: "≮",
	                NotLessEqual: "≰",
	                NotLessGreater: "≸",
	                NotLessLess: "≪̸",
	                NotLessSlantEqual: "⩽̸",
	                NotLessTilde: "≴",
	                NotNestedGreaterGreater: "⪢̸",
	                NotNestedLessLess: "⪡̸",
	                notni: "∌",
	                notniva: "∌",
	                notnivb: "⋾",
	                notnivc: "⋽",
	                NotPrecedes: "⊀",
	                NotPrecedesEqual: "⪯̸",
	                NotPrecedesSlantEqual: "⋠",
	                NotReverseElement: "∌",
	                NotRightTriangle: "⋫",
	                NotRightTriangleBar: "⧐̸",
	                NotRightTriangleEqual: "⋭",
	                NotSquareSubset: "⊏̸",
	                NotSquareSubsetEqual: "⋢",
	                NotSquareSuperset: "⊐̸",
	                NotSquareSupersetEqual: "⋣",
	                NotSubset: "⊂⃒",
	                NotSubsetEqual: "⊈",
	                NotSucceeds: "⊁",
	                NotSucceedsEqual: "⪰̸",
	                NotSucceedsSlantEqual: "⋡",
	                NotSucceedsTilde: "≿̸",
	                NotSuperset: "⊃⃒",
	                NotSupersetEqual: "⊉",
	                NotTilde: "≁",
	                NotTildeEqual: "≄",
	                NotTildeFullEqual: "≇",
	                NotTildeTilde: "≉",
	                NotVerticalBar: "∤",
	                npar: "∦",
	                nparallel: "∦",
	                nparsl: "⫽⃥",
	                npart: "∂̸",
	                npolint: "⨔",
	                npr: "⊀",
	                nprcue: "⋠",
	                npre: "⪯̸",
	                nprec: "⊀",
	                npreceq: "⪯̸",
	                nrArr: "⇏",
	                nrarr: "↛",
	                nrarrc: "⤳̸",
	                nrarrw: "↝̸",
	                nRightarrow: "⇏",
	                nrightarrow: "↛",
	                nrtri: "⋫",
	                nrtrie: "⋭",
	                nsc: "⊁",
	                nsccue: "⋡",
	                nsce: "⪰̸",
	                Nscr: "𝒩",
	                nscr: "𝓃",
	                nshortmid: "∤",
	                nshortparallel: "∦",
	                nsim: "≁",
	                nsime: "≄",
	                nsimeq: "≄",
	                nsmid: "∤",
	                nspar: "∦",
	                nsqsube: "⋢",
	                nsqsupe: "⋣",
	                nsub: "⊄",
	                nsubE: "⫅̸",
	                nsube: "⊈",
	                nsubset: "⊂⃒",
	                nsubseteq: "⊈",
	                nsubseteqq: "⫅̸",
	                nsucc: "⊁",
	                nsucceq: "⪰̸",
	                nsup: "⊅",
	                nsupE: "⫆̸",
	                nsupe: "⊉",
	                nsupset: "⊃⃒",
	                nsupseteq: "⊉",
	                nsupseteqq: "⫆̸",
	                ntgl: "≹",
	                Ntilde: "Ñ",
	                ntilde: "ñ",
	                ntlg: "≸",
	                ntriangleleft: "⋪",
	                ntrianglelefteq: "⋬",
	                ntriangleright: "⋫",
	                ntrianglerighteq: "⋭",
	                Nu: "Ν",
	                nu: "ν",
	                num: "#",
	                numero: "№",
	                numsp: " ",
	                nvap: "≍⃒",
	                nVDash: "⊯",
	                nVdash: "⊮",
	                nvDash: "⊭",
	                nvdash: "⊬",
	                nvge: "≥⃒",
	                nvgt: ">⃒",
	                nvHarr: "⤄",
	                nvinfin: "⧞",
	                nvlArr: "⤂",
	                nvle: "≤⃒",
	                nvlt: "<⃒",
	                nvltrie: "⊴⃒",
	                nvrArr: "⤃",
	                nvrtrie: "⊵⃒",
	                nvsim: "∼⃒",
	                nwarhk: "⤣",
	                nwArr: "⇖",
	                nwarr: "↖",
	                nwarrow: "↖",
	                nwnear: "⤧",
	                Oacute: "Ó",
	                oacute: "ó",
	                oast: "⊛",
	                ocir: "⊚",
	                Ocirc: "Ô",
	                ocirc: "ô",
	                Ocy: "О",
	                ocy: "о",
	                odash: "⊝",
	                Odblac: "Ő",
	                odblac: "ő",
	                odiv: "⨸",
	                odot: "⊙",
	                odsold: "⦼",
	                OElig: "Œ",
	                oelig: "œ",
	                ofcir: "⦿",
	                Ofr: "𝔒",
	                ofr: "𝔬",
	                ogon: "˛",
	                Ograve: "Ò",
	                ograve: "ò",
	                ogt: "⧁",
	                ohbar: "⦵",
	                ohm: "Ω",
	                oint: "∮",
	                olarr: "↺",
	                olcir: "⦾",
	                olcross: "⦻",
	                oline: "‾",
	                olt: "⧀",
	                Omacr: "Ō",
	                omacr: "ō",
	                Omega: "Ω",
	                omega: "ω",
	                Omicron: "Ο",
	                omicron: "ο",
	                omid: "⦶",
	                ominus: "⊖",
	                Oopf: "𝕆",
	                oopf: "𝕠",
	                opar: "⦷",
	                OpenCurlyDoubleQuote: "“",
	                OpenCurlyQuote: "‘",
	                operp: "⦹",
	                oplus: "⊕",
	                Or: "⩔",
	                or: "∨",
	                orarr: "↻",
	                ord: "⩝",
	                order: "ℴ",
	                orderof: "ℴ",
	                ordf: "ª",
	                ordm: "º",
	                origof: "⊶",
	                oror: "⩖",
	                orslope: "⩗",
	                orv: "⩛",
	                oS: "Ⓢ",
	                Oscr: "𝒪",
	                oscr: "ℴ",
	                Oslash: "Ø",
	                oslash: "ø",
	                osol: "⊘",
	                Otilde: "Õ",
	                otilde: "õ",
	                Otimes: "⨷",
	                otimes: "⊗",
	                otimesas: "⨶",
	                Ouml: "Ö",
	                ouml: "ö",
	                ovbar: "⌽",
	                OverBar: "‾",
	                OverBrace: "⏞",
	                OverBracket: "⎴",
	                OverParenthesis: "⏜",
	                par: "∥",
	                para: "¶",
	                parallel: "∥",
	                parsim: "⫳",
	                parsl: "⫽",
	                part: "∂",
	                PartialD: "∂",
	                Pcy: "П",
	                pcy: "п",
	                percnt: "%",
	                period: ".",
	                permil: "‰",
	                perp: "⊥",
	                pertenk: "‱",
	                Pfr: "𝔓",
	                pfr: "𝔭",
	                Phi: "Φ",
	                phi: "φ",
	                phiv: "ϕ",
	                phmmat: "ℳ",
	                phone: "☎",
	                Pi: "Π",
	                pi: "π",
	                pitchfork: "⋔",
	                piv: "ϖ",
	                planck: "ℏ",
	                planckh: "ℎ",
	                plankv: "ℏ",
	                plus: "+",
	                plusacir: "⨣",
	                plusb: "⊞",
	                pluscir: "⨢",
	                plusdo: "∔",
	                plusdu: "⨥",
	                pluse: "⩲",
	                PlusMinus: "±",
	                plusmn: "±",
	                plussim: "⨦",
	                plustwo: "⨧",
	                pm: "±",
	                Poincareplane: "ℌ",
	                pointint: "⨕",
	                Popf: "ℙ",
	                popf: "𝕡",
	                pound: "£",
	                Pr: "⪻",
	                pr: "≺",
	                prap: "⪷",
	                prcue: "≼",
	                prE: "⪳",
	                pre: "⪯",
	                prec: "≺",
	                precapprox: "⪷",
	                preccurlyeq: "≼",
	                Precedes: "≺",
	                PrecedesEqual: "⪯",
	                PrecedesSlantEqual: "≼",
	                PrecedesTilde: "≾",
	                preceq: "⪯",
	                precnapprox: "⪹",
	                precneqq: "⪵",
	                precnsim: "⋨",
	                precsim: "≾",
	                Prime: "″",
	                prime: "′",
	                primes: "ℙ",
	                prnap: "⪹",
	                prnE: "⪵",
	                prnsim: "⋨",
	                prod: "∏",
	                Product: "∏",
	                profalar: "⌮",
	                profline: "⌒",
	                profsurf: "⌓",
	                prop: "∝",
	                Proportion: "∷",
	                Proportional: "∝",
	                propto: "∝",
	                prsim: "≾",
	                prurel: "⊰",
	                Pscr: "𝒫",
	                pscr: "𝓅",
	                Psi: "Ψ",
	                psi: "ψ",
	                puncsp: " ",
	                Qfr: "𝔔",
	                qfr: "𝔮",
	                qint: "⨌",
	                Qopf: "ℚ",
	                qopf: "𝕢",
	                qprime: "⁗",
	                Qscr: "𝒬",
	                qscr: "𝓆",
	                quaternions: "ℍ",
	                quatint: "⨖",
	                quest: "?",
	                questeq: "≟",
	                QUOT: '"',
	                quot: '"',
	                rAarr: "⇛",
	                race: "∽̱",
	                Racute: "Ŕ",
	                racute: "ŕ",
	                radic: "√",
	                raemptyv: "⦳",
	                Rang: "⟫",
	                rang: "⟩",
	                rangd: "⦒",
	                range: "⦥",
	                rangle: "⟩",
	                raquo: "»",
	                Rarr: "↠",
	                rArr: "⇒",
	                rarr: "→",
	                rarrap: "⥵",
	                rarrb: "⇥",
	                rarrbfs: "⤠",
	                rarrc: "⤳",
	                rarrfs: "⤞",
	                rarrhk: "↪",
	                rarrlp: "↬",
	                rarrpl: "⥅",
	                rarrsim: "⥴",
	                Rarrtl: "⤖",
	                rarrtl: "↣",
	                rarrw: "↝",
	                rAtail: "⤜",
	                ratail: "⤚",
	                ratio: "∶",
	                rationals: "ℚ",
	                RBarr: "⤐",
	                rBarr: "⤏",
	                rbarr: "⤍",
	                rbbrk: "❳",
	                rbrace: "}",
	                rbrack: "]",
	                rbrke: "⦌",
	                rbrksld: "⦎",
	                rbrkslu: "⦐",
	                Rcaron: "Ř",
	                rcaron: "ř",
	                Rcedil: "Ŗ",
	                rcedil: "ŗ",
	                rceil: "⌉",
	                rcub: "}",
	                Rcy: "Р",
	                rcy: "р",
	                rdca: "⤷",
	                rdldhar: "⥩",
	                rdquo: "”",
	                rdquor: "”",
	                rdsh: "↳",
	                Re: "ℜ",
	                real: "ℜ",
	                realine: "ℛ",
	                realpart: "ℜ",
	                reals: "ℝ",
	                rect: "▭",
	                REG: "®",
	                reg: "®",
	                ReverseElement: "∋",
	                ReverseEquilibrium: "⇋",
	                ReverseUpEquilibrium: "⥯",
	                rfisht: "⥽",
	                rfloor: "⌋",
	                Rfr: "ℜ",
	                rfr: "𝔯",
	                rHar: "⥤",
	                rhard: "⇁",
	                rharu: "⇀",
	                rharul: "⥬",
	                Rho: "Ρ",
	                rho: "ρ",
	                rhov: "ϱ",
	                RightAngleBracket: "⟩",
	                RightArrow: "→",
	                Rightarrow: "⇒",
	                rightarrow: "→",
	                RightArrowBar: "⇥",
	                RightArrowLeftArrow: "⇄",
	                rightarrowtail: "↣",
	                RightCeiling: "⌉",
	                RightDoubleBracket: "⟧",
	                RightDownTeeVector: "⥝",
	                RightDownVector: "⇂",
	                RightDownVectorBar: "⥕",
	                RightFloor: "⌋",
	                rightharpoondown: "⇁",
	                rightharpoonup: "⇀",
	                rightleftarrows: "⇄",
	                rightleftharpoons: "⇌",
	                rightrightarrows: "⇉",
	                rightsquigarrow: "↝",
	                RightTee: "⊢",
	                RightTeeArrow: "↦",
	                RightTeeVector: "⥛",
	                rightthreetimes: "⋌",
	                RightTriangle: "⊳",
	                RightTriangleBar: "⧐",
	                RightTriangleEqual: "⊵",
	                RightUpDownVector: "⥏",
	                RightUpTeeVector: "⥜",
	                RightUpVector: "↾",
	                RightUpVectorBar: "⥔",
	                RightVector: "⇀",
	                RightVectorBar: "⥓",
	                ring: "˚",
	                risingdotseq: "≓",
	                rlarr: "⇄",
	                rlhar: "⇌",
	                rlm: "‏",
	                rmoust: "⎱",
	                rmoustache: "⎱",
	                rnmid: "⫮",
	                roang: "⟭",
	                roarr: "⇾",
	                robrk: "⟧",
	                ropar: "⦆",
	                Ropf: "ℝ",
	                ropf: "𝕣",
	                roplus: "⨮",
	                rotimes: "⨵",
	                RoundImplies: "⥰",
	                rpar: ")",
	                rpargt: "⦔",
	                rppolint: "⨒",
	                rrarr: "⇉",
	                Rrightarrow: "⇛",
	                rsaquo: "›",
	                Rscr: "ℛ",
	                rscr: "𝓇",
	                Rsh: "↱",
	                rsh: "↱",
	                rsqb: "]",
	                rsquo: "’",
	                rsquor: "’",
	                rthree: "⋌",
	                rtimes: "⋊",
	                rtri: "▹",
	                rtrie: "⊵",
	                rtrif: "▸",
	                rtriltri: "⧎",
	                RuleDelayed: "⧴",
	                ruluhar: "⥨",
	                rx: "℞",
	                Sacute: "Ś",
	                sacute: "ś",
	                sbquo: "‚",
	                Sc: "⪼",
	                sc: "≻",
	                scap: "⪸",
	                Scaron: "Š",
	                scaron: "š",
	                sccue: "≽",
	                scE: "⪴",
	                sce: "⪰",
	                Scedil: "Ş",
	                scedil: "ş",
	                Scirc: "Ŝ",
	                scirc: "ŝ",
	                scnap: "⪺",
	                scnE: "⪶",
	                scnsim: "⋩",
	                scpolint: "⨓",
	                scsim: "≿",
	                Scy: "С",
	                scy: "с",
	                sdot: "⋅",
	                sdotb: "⊡",
	                sdote: "⩦",
	                searhk: "⤥",
	                seArr: "⇘",
	                searr: "↘",
	                searrow: "↘",
	                sect: "§",
	                semi: ";",
	                seswar: "⤩",
	                setminus: "∖",
	                setmn: "∖",
	                sext: "✶",
	                Sfr: "𝔖",
	                sfr: "𝔰",
	                sfrown: "⌢",
	                sharp: "♯",
	                SHCHcy: "Щ",
	                shchcy: "щ",
	                SHcy: "Ш",
	                shcy: "ш",
	                ShortDownArrow: "↓",
	                ShortLeftArrow: "←",
	                shortmid: "∣",
	                shortparallel: "∥",
	                ShortRightArrow: "→",
	                ShortUpArrow: "↑",
	                shy: "­",
	                Sigma: "Σ",
	                sigma: "σ",
	                sigmaf: "ς",
	                sigmav: "ς",
	                sim: "∼",
	                simdot: "⩪",
	                sime: "≃",
	                simeq: "≃",
	                simg: "⪞",
	                simgE: "⪠",
	                siml: "⪝",
	                simlE: "⪟",
	                simne: "≆",
	                simplus: "⨤",
	                simrarr: "⥲",
	                slarr: "←",
	                SmallCircle: "∘",
	                smallsetminus: "∖",
	                smashp: "⨳",
	                smeparsl: "⧤",
	                smid: "∣",
	                smile: "⌣",
	                smt: "⪪",
	                smte: "⪬",
	                smtes: "⪬︀",
	                SOFTcy: "Ь",
	                softcy: "ь",
	                sol: "/",
	                solb: "⧄",
	                solbar: "⌿",
	                Sopf: "𝕊",
	                sopf: "𝕤",
	                spades: "♠",
	                spadesuit: "♠",
	                spar: "∥",
	                sqcap: "⊓",
	                sqcaps: "⊓︀",
	                sqcup: "⊔",
	                sqcups: "⊔︀",
	                Sqrt: "√",
	                sqsub: "⊏",
	                sqsube: "⊑",
	                sqsubset: "⊏",
	                sqsubseteq: "⊑",
	                sqsup: "⊐",
	                sqsupe: "⊒",
	                sqsupset: "⊐",
	                sqsupseteq: "⊒",
	                squ: "□",
	                Square: "□",
	                square: "□",
	                SquareIntersection: "⊓",
	                SquareSubset: "⊏",
	                SquareSubsetEqual: "⊑",
	                SquareSuperset: "⊐",
	                SquareSupersetEqual: "⊒",
	                SquareUnion: "⊔",
	                squarf: "▪",
	                squf: "▪",
	                srarr: "→",
	                Sscr: "𝒮",
	                sscr: "𝓈",
	                ssetmn: "∖",
	                ssmile: "⌣",
	                sstarf: "⋆",
	                Star: "⋆",
	                star: "☆",
	                starf: "★",
	                straightepsilon: "ϵ",
	                straightphi: "ϕ",
	                strns: "¯",
	                Sub: "⋐",
	                sub: "⊂",
	                subdot: "⪽",
	                subE: "⫅",
	                sube: "⊆",
	                subedot: "⫃",
	                submult: "⫁",
	                subnE: "⫋",
	                subne: "⊊",
	                subplus: "⪿",
	                subrarr: "⥹",
	                Subset: "⋐",
	                subset: "⊂",
	                subseteq: "⊆",
	                subseteqq: "⫅",
	                SubsetEqual: "⊆",
	                subsetneq: "⊊",
	                subsetneqq: "⫋",
	                subsim: "⫇",
	                subsub: "⫕",
	                subsup: "⫓",
	                succ: "≻",
	                succapprox: "⪸",
	                succcurlyeq: "≽",
	                Succeeds: "≻",
	                SucceedsEqual: "⪰",
	                SucceedsSlantEqual: "≽",
	                SucceedsTilde: "≿",
	                succeq: "⪰",
	                succnapprox: "⪺",
	                succneqq: "⪶",
	                succnsim: "⋩",
	                succsim: "≿",
	                SuchThat: "∋",
	                Sum: "∑",
	                sum: "∑",
	                sung: "♪",
	                Sup: "⋑",
	                sup: "⊃",
	                sup1: "¹",
	                sup2: "²",
	                sup3: "³",
	                supdot: "⪾",
	                supdsub: "⫘",
	                supE: "⫆",
	                supe: "⊇",
	                supedot: "⫄",
	                Superset: "⊃",
	                SupersetEqual: "⊇",
	                suphsol: "⟉",
	                suphsub: "⫗",
	                suplarr: "⥻",
	                supmult: "⫂",
	                supnE: "⫌",
	                supne: "⊋",
	                supplus: "⫀",
	                Supset: "⋑",
	                supset: "⊃",
	                supseteq: "⊇",
	                supseteqq: "⫆",
	                supsetneq: "⊋",
	                supsetneqq: "⫌",
	                supsim: "⫈",
	                supsub: "⫔",
	                supsup: "⫖",
	                swarhk: "⤦",
	                swArr: "⇙",
	                swarr: "↙",
	                swarrow: "↙",
	                swnwar: "⤪",
	                szlig: "ß",
	                Tab: "	",
	                target: "⌖",
	                Tau: "Τ",
	                tau: "τ",
	                tbrk: "⎴",
	                Tcaron: "Ť",
	                tcaron: "ť",
	                Tcedil: "Ţ",
	                tcedil: "ţ",
	                Tcy: "Т",
	                tcy: "т",
	                tdot: "⃛",
	                telrec: "⌕",
	                Tfr: "𝔗",
	                tfr: "𝔱",
	                there4: "∴",
	                Therefore: "∴",
	                therefore: "∴",
	                Theta: "Θ",
	                theta: "θ",
	                thetasym: "ϑ",
	                thetav: "ϑ",
	                thickapprox: "≈",
	                thicksim: "∼",
	                ThickSpace: "  ",
	                thinsp: " ",
	                ThinSpace: " ",
	                thkap: "≈",
	                thksim: "∼",
	                THORN: "Þ",
	                thorn: "þ",
	                Tilde: "∼",
	                tilde: "˜",
	                TildeEqual: "≃",
	                TildeFullEqual: "≅",
	                TildeTilde: "≈",
	                times: "×",
	                timesb: "⊠",
	                timesbar: "⨱",
	                timesd: "⨰",
	                tint: "∭",
	                toea: "⤨",
	                top: "⊤",
	                topbot: "⌶",
	                topcir: "⫱",
	                Topf: "𝕋",
	                topf: "𝕥",
	                topfork: "⫚",
	                tosa: "⤩",
	                tprime: "‴",
	                TRADE: "™",
	                trade: "™",
	                triangle: "▵",
	                triangledown: "▿",
	                triangleleft: "◃",
	                trianglelefteq: "⊴",
	                triangleq: "≜",
	                triangleright: "▹",
	                trianglerighteq: "⊵",
	                tridot: "◬",
	                trie: "≜",
	                triminus: "⨺",
	                TripleDot: "⃛",
	                triplus: "⨹",
	                trisb: "⧍",
	                tritime: "⨻",
	                trpezium: "⏢",
	                Tscr: "𝒯",
	                tscr: "𝓉",
	                TScy: "Ц",
	                tscy: "ц",
	                TSHcy: "Ћ",
	                tshcy: "ћ",
	                Tstrok: "Ŧ",
	                tstrok: "ŧ",
	                twixt: "≬",
	                twoheadleftarrow: "↞",
	                twoheadrightarrow: "↠",
	                Uacute: "Ú",
	                uacute: "ú",
	                Uarr: "↟",
	                uArr: "⇑",
	                uarr: "↑",
	                Uarrocir: "⥉",
	                Ubrcy: "Ў",
	                ubrcy: "ў",
	                Ubreve: "Ŭ",
	                ubreve: "ŭ",
	                Ucirc: "Û",
	                ucirc: "û",
	                Ucy: "У",
	                ucy: "у",
	                udarr: "⇅",
	                Udblac: "Ű",
	                udblac: "ű",
	                udhar: "⥮",
	                ufisht: "⥾",
	                Ufr: "𝔘",
	                ufr: "𝔲",
	                Ugrave: "Ù",
	                ugrave: "ù",
	                uHar: "⥣",
	                uharl: "↿",
	                uharr: "↾",
	                uhblk: "▀",
	                ulcorn: "⌜",
	                ulcorner: "⌜",
	                ulcrop: "⌏",
	                ultri: "◸",
	                Umacr: "Ū",
	                umacr: "ū",
	                uml: "¨",
	                UnderBar: "_",
	                UnderBrace: "⏟",
	                UnderBracket: "⎵",
	                UnderParenthesis: "⏝",
	                Union: "⋃",
	                UnionPlus: "⊎",
	                Uogon: "Ų",
	                uogon: "ų",
	                Uopf: "𝕌",
	                uopf: "𝕦",
	                UpArrow: "↑",
	                Uparrow: "⇑",
	                uparrow: "↑",
	                UpArrowBar: "⤒",
	                UpArrowDownArrow: "⇅",
	                UpDownArrow: "↕",
	                Updownarrow: "⇕",
	                updownarrow: "↕",
	                UpEquilibrium: "⥮",
	                upharpoonleft: "↿",
	                upharpoonright: "↾",
	                uplus: "⊎",
	                UpperLeftArrow: "↖",
	                UpperRightArrow: "↗",
	                Upsi: "ϒ",
	                upsi: "υ",
	                upsih: "ϒ",
	                Upsilon: "Υ",
	                upsilon: "υ",
	                UpTee: "⊥",
	                UpTeeArrow: "↥",
	                upuparrows: "⇈",
	                urcorn: "⌝",
	                urcorner: "⌝",
	                urcrop: "⌎",
	                Uring: "Ů",
	                uring: "ů",
	                urtri: "◹",
	                Uscr: "𝒰",
	                uscr: "𝓊",
	                utdot: "⋰",
	                Utilde: "Ũ",
	                utilde: "ũ",
	                utri: "▵",
	                utrif: "▴",
	                uuarr: "⇈",
	                Uuml: "Ü",
	                uuml: "ü",
	                uwangle: "⦧",
	                vangrt: "⦜",
	                varepsilon: "ϵ",
	                varkappa: "ϰ",
	                varnothing: "∅",
	                varphi: "ϕ",
	                varpi: "ϖ",
	                varpropto: "∝",
	                vArr: "⇕",
	                varr: "↕",
	                varrho: "ϱ",
	                varsigma: "ς",
	                varsubsetneq: "⊊︀",
	                varsubsetneqq: "⫋︀",
	                varsupsetneq: "⊋︀",
	                varsupsetneqq: "⫌︀",
	                vartheta: "ϑ",
	                vartriangleleft: "⊲",
	                vartriangleright: "⊳",
	                Vbar: "⫫",
	                vBar: "⫨",
	                vBarv: "⫩",
	                Vcy: "В",
	                vcy: "в",
	                VDash: "⊫",
	                Vdash: "⊩",
	                vDash: "⊨",
	                vdash: "⊢",
	                Vdashl: "⫦",
	                Vee: "⋁",
	                vee: "∨",
	                veebar: "⊻",
	                veeeq: "≚",
	                vellip: "⋮",
	                Verbar: "‖",
	                verbar: "|",
	                Vert: "‖",
	                vert: "|",
	                VerticalBar: "∣",
	                VerticalLine: "|",
	                VerticalSeparator: "❘",
	                VerticalTilde: "≀",
	                VeryThinSpace: " ",
	                Vfr: "𝔙",
	                vfr: "𝔳",
	                vltri: "⊲",
	                vnsub: "⊂⃒",
	                vnsup: "⊃⃒",
	                Vopf: "𝕍",
	                vopf: "𝕧",
	                vprop: "∝",
	                vrtri: "⊳",
	                Vscr: "𝒱",
	                vscr: "𝓋",
	                vsubnE: "⫋︀",
	                vsubne: "⊊︀",
	                vsupnE: "⫌︀",
	                vsupne: "⊋︀",
	                Vvdash: "⊪",
	                vzigzag: "⦚",
	                Wcirc: "Ŵ",
	                wcirc: "ŵ",
	                wedbar: "⩟",
	                Wedge: "⋀",
	                wedge: "∧",
	                wedgeq: "≙",
	                weierp: "℘",
	                Wfr: "𝔚",
	                wfr: "𝔴",
	                Wopf: "𝕎",
	                wopf: "𝕨",
	                wp: "℘",
	                wr: "≀",
	                wreath: "≀",
	                Wscr: "𝒲",
	                wscr: "𝓌",
	                xcap: "⋂",
	                xcirc: "◯",
	                xcup: "⋃",
	                xdtri: "▽",
	                Xfr: "𝔛",
	                xfr: "𝔵",
	                xhArr: "⟺",
	                xharr: "⟷",
	                Xi: "Ξ",
	                xi: "ξ",
	                xlArr: "⟸",
	                xlarr: "⟵",
	                xmap: "⟼",
	                xnis: "⋻",
	                xodot: "⨀",
	                Xopf: "𝕏",
	                xopf: "𝕩",
	                xoplus: "⨁",
	                xotime: "⨂",
	                xrArr: "⟹",
	                xrarr: "⟶",
	                Xscr: "𝒳",
	                xscr: "𝓍",
	                xsqcup: "⨆",
	                xuplus: "⨄",
	                xutri: "△",
	                xvee: "⋁",
	                xwedge: "⋀",
	                Yacute: "Ý",
	                yacute: "ý",
	                YAcy: "Я",
	                yacy: "я",
	                Ycirc: "Ŷ",
	                ycirc: "ŷ",
	                Ycy: "Ы",
	                ycy: "ы",
	                yen: "¥",
	                Yfr: "𝔜",
	                yfr: "𝔶",
	                YIcy: "Ї",
	                yicy: "ї",
	                Yopf: "𝕐",
	                yopf: "𝕪",
	                Yscr: "𝒴",
	                yscr: "𝓎",
	                YUcy: "Ю",
	                yucy: "ю",
	                Yuml: "Ÿ",
	                yuml: "ÿ",
	                Zacute: "Ź",
	                zacute: "ź",
	                Zcaron: "Ž",
	                zcaron: "ž",
	                Zcy: "З",
	                zcy: "з",
	                Zdot: "Ż",
	                zdot: "ż",
	                zeetrf: "ℨ",
	                ZeroWidthSpace: "​",
	                Zeta: "Ζ",
	                zeta: "ζ",
	                Zfr: "ℨ",
	                zfr: "𝔷",
	                ZHcy: "Ж",
	                zhcy: "ж",
	                zigrarr: "⇝",
	                Zopf: "ℤ",
	                zopf: "𝕫",
	                Zscr: "𝒵",
	                zscr: "𝓏",
	                zwj: "‍",
	                zwnj: "‌"
	            }
	        }, {}],
	        2: [function(e, t) {
	            "use strict";
	            var r = {};
	            ["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function(e) {
	                r[e] = !0
	            }), t.exports = r
	        }, {}],
	        3: [function(e, t) {
	            "use strict";

	            function r(e, t) {
	                return e = e.source, t = t || "",
	                    function r(n, s) {
	                        return n ? (s = s.source || s, e = e.replace(n, s), r) : new RegExp(e, t)
	                    }
	            }
	            var n = /[a-zA-Z_:][a-zA-Z0-9:._-]*/,
	                s = /[^"'=<>`\x00-\x20]+/,
	                o = /'[^']*'/,
	                i = /"[^"]*"/,
	                l = r(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", s)("single_quoted", o)("double_quoted", i)(),
	                a = r(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", n)("attr_value", l)(),
	                c = r(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", a)(),
	                u = /<\/[A-Za-z][A-Za-z0-9]*\s*>/,
	                p = /<!--([^-]+|[-][^-]+)*-->/,
	                h = /<[?].*?[?]>/,
	                f = /<![A-Z]+\s+[^>]*>/,
	                d = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/,
	                g = r(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", c)("close_tag", u)("comment", p)("processing", h)("declaration", f)("cdata", d)();
	            t.exports.HTML_TAG_RE = g
	        }, {}],
	        4: [function(e, t) {
	            "use strict";
	            t.exports = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"]
	        }, {}],
	        5: [function(e, t, r) {
	            "use strict";

	            function n(e) {
	                return Object.prototype.toString.call(e)
	            }

	            function s(e) {
	                return "[object String]" === n(e)
	            }

	            function o(e, t) {
	                return e ? d.call(e, t) : !1
	            }

	            function i(e) {
	                var t = Array.prototype.slice.call(arguments, 1);
	                return t.forEach(function(t) {
	                    if (t) {
	                        if ("object" != typeof t) throw new TypeError(t + "must be object");
	                        Object.keys(t).forEach(function(r) {
	                            e[r] = t[r]
	                        })
	                    }
	                }), e
	            }

	            function l(e) {
	                return e.indexOf("\\") < 0 ? e : e.replace(g, "$1")
	            }

	            function a(e) {
	                return e >= 55296 && 57343 >= e ? !1 : e >= 64976 && 65007 >= e ? !1 : 65535 === (65535 & e) || 65534 === (65535 & e) ? !1 : e >= 0 && 8 >= e ? !1 : 11 === e ? !1 : e >= 14 && 31 >= e ? !1 : e >= 127 && 159 >= e ? !1 : e > 1114111 ? !1 : !0
	            }

	            function c(e) {
	                if (e > 65535) {
	                    e -= 65536;
	                    var t = 55296 + (e >> 10),
	                        r = 56320 + (1023 & e);
	                    return String.fromCharCode(t, r)
	                }
	                return String.fromCharCode(e)
	            }

	            function u(e, t) {
	                var r = 0;
	                return o(v, t) ? v[t] : 35 === t.charCodeAt(0) && b.test(t) && (r = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10), a(r)) ? c(r) : e
	            }

	            function p(e) {
	                return e.indexOf("&") < 0 ? e : e.replace(m, u)
	            }

	            function h(e) {
	                return y[e]
	            }

	            function f(e) {
	                return k.test(e) ? e.replace(_, h) : e
	            }
	            var d = Object.prototype.hasOwnProperty,
	                g = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,
	                m = /&([a-z#][a-z0-9]{1,31});/gi,
	                b = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
	                v = e("./entities"),
	                k = /[&<>"]/,
	                _ = /[&<>"]/g,
	                y = {
	                    "&": "&amp;",
	                    "<": "&lt;",
	                    ">": "&gt;",
	                    '"': "&quot;"
	                };
	            r.assign = i, r.isString = s, r.has = o, r.unescapeMd = l, r.isValidEntityCode = a, r.fromCodePoint = c, r.replaceEntities = p, r.escapeHtml = f
	        }, {
	            "./entities": 1
	        }],
	        6: [function(e, t) {
	            "use strict";
	            t.exports = {
	                options: {
	                    html: !0,
	                    xhtmlOut: !0,
	                    breaks: !1,
	                    langPrefix: "language-",
	                    linkify: !1,
	                    typographer: !1,
	                    quotes: "“”‘’",
	                    highlight: null,
	                    maxNesting: 20
	                },
	                components: {
	                    core: {
	                        rules: ["block", "inline", "references", "abbr2"]
	                    },
	                    block: {
	                        rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph"]
	                    },
	                    inline: {
	                        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "htmltag", "links", "newline", "text"]
	                    }
	                }
	            }
	        }, {}],
	        7: [function(e, t) {
	            "use strict";
	            t.exports = {
	                options: {
	                    html: !1,
	                    xhtmlOut: !1,
	                    breaks: !1,
	                    langPrefix: "language-",
	                    linkify: !1,
	                    typographer: !1,
	                    quotes: "“”‘’",
	                    highlight: null,
	                    maxNesting: 20
	                },
	                components: {
	                    core: {
	                        rules: ["block", "inline", "references", "replacements", "linkify", "smartquotes", "references", "abbr2", "footnote_tail"]
	                    },
	                    block: {
	                        rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph", "table"]
	                    },
	                    inline: {
	                        rules: ["autolink", "backticks", "del", "emphasis", "entity", "escape", "footnote_ref", "htmltag", "links", "newline", "text"]
	                    }
	                }
	            }
	        }, {}],
	        8: [function(e, t) {
	            "use strict";
	            t.exports = {
	                options: {
	                    html: !1,
	                    xhtmlOut: !1,
	                    breaks: !1,
	                    langPrefix: "language-",
	                    linkify: !1,
	                    typographer: !1,
	                    quotes: "“”‘’",
	                    highlight: null,
	                    maxNesting: 20
	                },
	                components: {
	                    core: {},
	                    block: {},
	                    inline: {}
	                }
	            }
	        }, {}],
	        9: [function(e, t) {
	            "use strict";
	            var r = e("../common/utils").replaceEntities;
	            t.exports = function(e) {
	                var t = r(e);
	                try {
	                    t = decodeURI(t)
	                } catch (n) {}
	                return encodeURI(t)
	            }
	        }, {
	            "../common/utils": 5
	        }],
	        10: [function(e, t) {
	            "use strict";
	            t.exports = function(e) {
	                return e.trim().replace(/\s+/g, " ").toUpperCase()
	            }
	        }, {}],
	        11: [function(e, t) {
	            "use strict";
	            var r = e("./normalize_link"),
	                n = e("../common/utils").unescapeMd;
	            t.exports = function(e, t) {
	                var s, o, i, l = t,
	                    a = e.posMax;
	                if (60 === e.src.charCodeAt(t)) {
	                    for (t++; a > t;) {
	                        if (s = e.src.charCodeAt(t), 10 === s) return !1;
	                        if (62 === s) return i = r(n(e.src.slice(l + 1, t))), e.parser.validateLink(i) ? (e.pos = t + 1, e.linkContent = i, !0) : !1;
	                        92 === s && a > t + 1 ? t += 2 : t++
	                    }
	                    return !1
	                }
	                for (o = 0; a > t && (s = e.src.charCodeAt(t), 32 !== s) && !(32 > s || 127 === s);)
	                    if (92 === s && a > t + 1) t += 2;
	                    else {
	                        if (40 === s && (o++, o > 1)) break;
	                        if (41 === s && (o--, 0 > o)) break;
	                        t++
	                    }
	                return l === t ? !1 : (i = r(n(e.src.slice(l, t))), e.parser.validateLink(i) ? (e.linkContent = i, e.pos = t, !0) : !1)
	            }
	        }, {
	            "../common/utils": 5,
	            "./normalize_link": 9
	        }],
	        12: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s, o = -1,
	                    i = e.posMax,
	                    l = e.pos,
	                    a = e.isInLabel;
	                if (e.isInLabel) return -1;
	                if (e.labelUnmatchedScopes) return e.labelUnmatchedScopes--, -1;
	                for (e.pos = t + 1, e.isInLabel = !0, r = 1; e.pos < i;) {
	                    if (s = e.src.charCodeAt(e.pos), 91 === s) r++;
	                    else if (93 === s && (r--, 0 === r)) {
	                        n = !0;
	                        break
	                    }
	                    e.parser.skipToken(e)
	                }
	                return n ? (o = e.pos, e.labelUnmatchedScopes = 0) : e.labelUnmatchedScopes = r - 1, e.pos = l, e.isInLabel = a, o
	            }
	        }, {}],
	        13: [function(e, t) {
	            "use strict";
	            var r = e("../common/utils").unescapeMd;
	            t.exports = function(e, t) {
	                var n, s = t,
	                    o = e.posMax,
	                    i = e.src.charCodeAt(t);
	                if (34 !== i && 39 !== i && 40 !== i) return !1;
	                for (t++, 40 === i && (i = 41); o > t;) {
	                    if (n = e.src.charCodeAt(t), n === i) return e.pos = t + 1, e.linkContent = r(e.src.slice(s + 1, t)), !0;
	                    92 === n && o > t + 1 ? t += 2 : t++
	                }
	                return !1
	            }
	        }, {
	            "../common/utils": 5
	        }],
	        14: [function(e, t) {
	            "use strict";

	            function r(e, t, r) {
	                this.src = t, this.env = r, this.options = e.options, this.tokens = [], this.inlineMode = !1, this.inline = e.inline, this.block = e.block, this.renderer = e.renderer, this.typographer = e.typographer
	            }

	            function n(e, t) {
	                t || o(e) || (t = e || {}, e = "default"), this.inline = new c, this.block = new a, this.core = new l, this.renderer = new i, this.ruler = new u, this.options = {}, this.configure(p[e]), t && this.set(t)
	            }
	            var s = e("./common/utils").assign,
	                o = e("./common/utils").isString,
	                i = e("./renderer"),
	                l = e("./parser_core"),
	                a = e("./parser_block"),
	                c = e("./parser_inline"),
	                u = e("./ruler"),
	                p = {
	                    "default": e("./configs/default"),
	                    full: e("./configs/full"),
	                    commonmark: e("./configs/commonmark")
	                };
	            n.prototype.set = function(e) {
	                s(this.options, e)
	            }, n.prototype.configure = function(e) {
	                var t = this;
	                if (!e) throw new Error("Wrong `remarkable` preset, check name/content");
	                e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(r) {
	                    e.components[r].rules && t[r].ruler.enable(e.components[r].rules, !0)
	                })
	            }, n.prototype.use = function(e, t) {
	                return e(this, t), this
	            }, n.prototype.parse = function(e, t) {
	                var n = new r(this, e, t);
	                return this.core.process(n), n.tokens
	            }, n.prototype.render = function(e, t) {
	                return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t)
	            }, n.prototype.parseInline = function(e, t) {
	                var n = new r(this, e, t);
	                return n.inlineMode = !0, this.core.process(n), n.tokens
	            }, n.prototype.renderInline = function(e, t) {
	                return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t)
	            }, t.exports = n, t.exports.utils = e("./common/utils")
	        }, {
	            "./common/utils": 5,
	            "./configs/commonmark": 6,
	            "./configs/default": 7,
	            "./configs/full": 8,
	            "./parser_block": 15,
	            "./parser_core": 16,
	            "./parser_inline": 17,
	            "./renderer": 18,
	            "./ruler": 19
	        }],
	        15: [function(e, t) {
	            "use strict";

	            function r() {
	                this.ruler = new n;
	                for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1], {
	                    alt: (o[e][2] || []).slice()
	                })
	            }
	            var n = e("./ruler"),
	                s = e("./rules_block/state_block"),
	                o = [
	                    ["code", e("./rules_block/code")],
	                    ["fences", e("./rules_block/fences"), ["paragraph", "blockquote", "list"]],
	                    ["blockquote", e("./rules_block/blockquote"), ["paragraph", "blockquote", "list"]],
	                    ["hr", e("./rules_block/hr"), ["paragraph", "blockquote", "list"]],
	                    ["list", e("./rules_block/list"), ["paragraph", "blockquote"]],
	                    ["footnote", e("./rules_block/footnote"), ["paragraph"]],
	                    ["heading", e("./rules_block/heading"), ["paragraph", "blockquote"]],
	                    ["lheading", e("./rules_block/lheading")],
	                    ["htmlblock", e("./rules_block/htmlblock"), ["paragraph", "blockquote"]],
	                    ["table", e("./rules_block/table"), ["paragraph"]],
	                    ["deflist", e("./rules_block/deflist"), ["paragraph"]],
	                    ["paragraph", e("./rules_block/paragraph")]
	                ];
	            r.prototype.tokenize = function(e, t, r) {
	                for (var n, s, o = this.ruler.getRules(""), i = o.length, l = t, a = !1; r > l && (e.line = l = e.skipEmptyLines(l), !(l >= r)) && !(e.tShift[l] < e.blkIndent);) {
	                    for (s = 0; i > s && !(n = o[s](e, l, r, !1)); s++);
	                    if (e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), l = e.line, r > l && e.isEmpty(l)) {
	                        if (a = !0, l++, r > l && "list" === e.parentType && e.isEmpty(l)) break;
	                        e.line = l
	                    }
	                }
	            };
	            var i = /[\n\t]/g,
	                l = /\r[\n\u0085]|[\u2424\u2028\u0085]/g,
	                a = /\u00a0/g;
	            r.prototype.parse = function(e, t, r, n) {
	                var o, c = 0,
	                    u = 0;
	                return e ? (e = e.replace(a, " "), e = e.replace(l, "\n"), e.indexOf("	") >= 0 && (e = e.replace(i, function(t, r) {
	                    var n;
	                    return 10 === e.charCodeAt(r) ? (c = r + 1, u = 0, t) : (n = "    ".slice((r - c - u) % 4), u = r - c + 1, n)
	                })), o = new s(e, this, t, r, n), void this.tokenize(o, o.line, o.lineMax)) : []
	            }, t.exports = r
	        }, {
	            "./ruler": 19,
	            "./rules_block/blockquote": 20,
	            "./rules_block/code": 21,
	            "./rules_block/deflist": 22,
	            "./rules_block/fences": 23,
	            "./rules_block/footnote": 24,
	            "./rules_block/heading": 25,
	            "./rules_block/hr": 26,
	            "./rules_block/htmlblock": 27,
	            "./rules_block/lheading": 28,
	            "./rules_block/list": 29,
	            "./rules_block/paragraph": 30,
	            "./rules_block/state_block": 31,
	            "./rules_block/table": 32
	        }],
	        16: [function(e, t) {
	            "use strict";

	            function r() {
	                this.options = {}, this.ruler = new n;
	                for (var e = 0; e < s.length; e++) this.ruler.push(s[e][0], s[e][1])
	            }
	            var n = e("./ruler"),
	                s = [
	                    ["block", e("./rules_core/block")],
	                    ["abbr", e("./rules_core/abbr")],
	                    ["references", e("./rules_core/references")],
	                    ["inline", e("./rules_core/inline")],
	                    ["footnote_tail", e("./rules_core/footnote_tail")],
	                    ["abbr2", e("./rules_core/abbr2")],
	                    ["replacements", e("./rules_core/replacements")],
	                    ["smartquotes", e("./rules_core/smartquotes")],
	                    ["linkify", e("./rules_core/linkify")]
	                ];
	            r.prototype.process = function(e) {
	                var t, r, n;
	                for (n = this.ruler.getRules(""), t = 0, r = n.length; r > t; t++) n[t](e)
	            }, t.exports = r
	        }, {
	            "./ruler": 19,
	            "./rules_core/abbr": 33,
	            "./rules_core/abbr2": 34,
	            "./rules_core/block": 35,
	            "./rules_core/footnote_tail": 36,
	            "./rules_core/inline": 37,
	            "./rules_core/linkify": 38,
	            "./rules_core/references": 39,
	            "./rules_core/replacements": 40,
	            "./rules_core/smartquotes": 41
	        }],
	        17: [function(e, t) {
	            "use strict";

	            function r(e) {
	                var t = e.trim().toLowerCase();
	                return t = i(t), t.indexOf(":") >= 0 && a.indexOf(t.split(":")[0]) >= 0 ? !1 : !0
	            }

	            function n() {
	                this.validateLink = r, this.ruler = new s;
	                for (var e = 0; e < l.length; e++) this.ruler.push(l[e][0], l[e][1])
	            }
	            var s = e("./ruler"),
	                o = e("./rules_inline/state_inline"),
	                i = e("./common/utils").replaceEntities,
	                l = [
	                    ["text", e("./rules_inline/text")],
	                    ["newline", e("./rules_inline/newline")],
	                    ["escape", e("./rules_inline/escape")],
	                    ["backticks", e("./rules_inline/backticks")],
	                    ["del", e("./rules_inline/del")],
	                    ["ins", e("./rules_inline/ins")],
	                    ["mark", e("./rules_inline/mark")],
	                    ["emphasis", e("./rules_inline/emphasis")],
	                    ["sub", e("./rules_inline/sub")],
	                    ["sup", e("./rules_inline/sup")],
	                    ["links", e("./rules_inline/links")],
	                    ["footnote_inline", e("./rules_inline/footnote_inline")],
	                    ["footnote_ref", e("./rules_inline/footnote_ref")],
	                    ["autolink", e("./rules_inline/autolink")],
	                    ["htmltag", e("./rules_inline/htmltag")],
	                    ["entity", e("./rules_inline/entity")]
	                ],
	                a = ["vbscript", "javascript", "file"];
	            n.prototype.skipToken = function(e) {
	                var t, r, n = e.pos,
	                    s = this.ruler.getRules(""),
	                    o = s.length;
	                if ((r = e.cacheGet(n)) > 0) return void(e.pos = r);
	                for (t = 0; o > t; t++)
	                    if (s[t](e, !0)) return void e.cacheSet(n, e.pos);
	                e.pos++, e.cacheSet(n, e.pos)
	            }, n.prototype.tokenize = function(e) {
	                for (var t, r, n = this.ruler.getRules(""), s = n.length, o = e.posMax; e.pos < o;) {
	                    for (r = 0; s > r && !(t = n[r](e, !1)); r++);
	                    if (t) {
	                        if (e.pos >= o) break
	                    } else e.pending += e.src[e.pos++]
	                }
	                e.pending && e.pushPending()
	            }, n.prototype.parse = function(e, t, r, n) {
	                var s = new o(e, this, t, r, n);
	                this.tokenize(s)
	            }, t.exports = n
	        }, {
	            "./common/utils": 5,
	            "./ruler": 19,
	            "./rules_inline/autolink": 42,
	            "./rules_inline/backticks": 43,
	            "./rules_inline/del": 44,
	            "./rules_inline/emphasis": 45,
	            "./rules_inline/entity": 46,
	            "./rules_inline/escape": 47,
	            "./rules_inline/footnote_inline": 48,
	            "./rules_inline/footnote_ref": 49,
	            "./rules_inline/htmltag": 50,
	            "./rules_inline/ins": 51,
	            "./rules_inline/links": 52,
	            "./rules_inline/mark": 53,
	            "./rules_inline/newline": 54,
	            "./rules_inline/state_inline": 55,
	            "./rules_inline/sub": 56,
	            "./rules_inline/sup": 57,
	            "./rules_inline/text": 58
	        }],
	        18: [function(e, t) {
	            "use strict";

	            function r(e, t) {
	                return ++t >= e.length - 2 ? t : "paragraph_open" === e[t].type && e[t].tight && "inline" === e[t + 1].type && 0 === e[t + 1].content.length && "paragraph_close" === e[t + 2].type && e[t + 2].tight ? r(e, t + 2) : t
	            }

	            function n(e, t) {
	                return t = r(e, t), t < e.length && "list_item_close" === e[t].type ? "" : "\n"
	            }

	            function s() {
	                this.rules = o({}, u), this.getBreak = n
	            }
	            var o = e("./common/utils").assign,
	                i = e("./common/utils").has,
	                l = e("./common/utils").unescapeMd,
	                a = e("./common/utils").replaceEntities,
	                c = e("./common/utils").escapeHtml,
	                u = {};
	            u.blockquote_open = function() {
	                return "<blockquote>\n"
	            }, u.blockquote_close = function(e, t) {
	                return "</blockquote>" + n(e, t)
	            }, u.code = function(e, t) {
	                return e[t].block ? "<pre><code>" + c(e[t].content) + "</code></pre>" + n(e, t) : "<code>" + c(e[t].content) + "</code>"
	            }, u.fence = function(e, t, r, s, o) {
	                var u, p, h = e[t],
	                    f = "",
	                    d = r.langPrefix,
	                    g = "";
	                if (h.params) {
	                    if (u = h.params.split(/\s+/g)[0], i(o.rules.fence_custom, u)) return o.rules.fence_custom[u](e, t, r, s, o);
	                    g = c(a(l(u))), f = ' class="' + d + g + '"'
	                }
	                return p = r.highlight ? r.highlight(h.content, g) || c(h.content) : c(h.content), "<pre><code" + f + ">" + p + "</code></pre>" + n(e, t)
	            }, u.fence_custom = {}, u.heading_open = function(e, t) {
	                return "<h" + e[t].hLevel + ">"
	            }, u.heading_close = function(e, t) {
	                return "</h" + e[t].hLevel + ">\n"
	            }, u.hr = function(e, t, r) {
	                return (r.xhtmlOut ? "<hr />" : "<hr>") + n(e, t)
	            }, u.bullet_list_open = function() {
	                return "<ul>\n"
	            }, u.bullet_list_close = function(e, t) {
	                return "</ul>" + n(e, t)
	            }, u.list_item_open = function() {
	                return "<li>"
	            }, u.list_item_close = function() {
	                return "</li>\n"
	            }, u.ordered_list_open = function(e, t) {
	                var r = e[t];
	                return "<ol" + (r.order > 1 ? ' start="' + r.order + '"' : "") + ">\n"
	            }, u.ordered_list_close = function(e, t) {
	                return "</ol>" + n(e, t)
	            }, u.paragraph_open = function(e, t) {
	                return e[t].tight ? "" : "<p>"
	            }, u.paragraph_close = function(e, t) {
	                var r = !(e[t].tight && t && "inline" === e[t - 1].type && !e[t - 1].content);
	                return (e[t].tight ? "" : "</p>") + (r ? n(e, t) : "")
	            }, u.link_open = function(e, t) {
	                var r = e[t].title ? ' title="' + c(a(e[t].title)) + '"' : "";
	                return '<a href="' + c(e[t].href) + '"' + r + ">"
	            }, u.link_close = function() {
	                return "</a>"
	            }, u.image = function(e, t, r) {
	                var n = ' src="' + c(e[t].src) + '"',
	                    s = e[t].title ? ' title="' + c(a(e[t].title)) + '"' : "",
	                    o = ' alt="' + (e[t].alt ? c(a(e[t].alt)) : "") + '"',
	                    i = r.xhtmlOut ? " /" : "";
	                return "<img" + n + o + s + i + ">"
	            }, u.table_open = function() {
	                return "<table>\n"
	            }, u.table_close = function() {
	                return "</table>\n"
	            }, u.thead_open = function() {
	                return "<thead>\n"
	            }, u.thead_close = function() {
	                return "</thead>\n"
	            }, u.tbody_open = function() {
	                return "<tbody>\n"
	            }, u.tbody_close = function() {
	                return "</tbody>\n"
	            }, u.tr_open = function() {
	                return "<tr>"
	            }, u.tr_close = function() {
	                return "</tr>\n"
	            }, u.th_open = function(e, t) {
	                var r = e[t];
	                return "<th" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">"
	            }, u.th_close = function() {
	                return "</th>"
	            }, u.td_open = function(e, t) {
	                var r = e[t];
	                return "<td" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">"
	            }, u.td_close = function() {
	                return "</td>"
	            }, u.strong_open = function() {
	                return "<strong>"
	            }, u.strong_close = function() {
	                return "</strong>"
	            }, u.em_open = function() {
	                return "<em>"
	            }, u.em_close = function() {
	                return "</em>"
	            }, u.del_open = function() {
	                return "<del>"
	            }, u.del_close = function() {
	                return "</del>"
	            }, u.ins_open = function() {
	                return "<ins>"
	            }, u.ins_close = function() {
	                return "</ins>"
	            }, u.mark_open = function() {
	                return "<mark>"
	            }, u.mark_close = function() {
	                return "</mark>"
	            }, u.sub = function(e, t) {
	                return "<sub>" + c(e[t].content) + "</sub>"
	            }, u.sup = function(e, t) {
	                return "<sup>" + c(e[t].content) + "</sup>"
	            }, u.hardbreak = function(e, t, r) {
	                return r.xhtmlOut ? "<br />\n" : "<br>\n"
	            }, u.softbreak = function(e, t, r) {
	                return r.breaks ? r.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
	            }, u.text = function(e, t) {
	                return c(e[t].content)
	            }, u.htmlblock = function(e, t) {
	                return e[t].content
	            }, u.htmltag = function(e, t) {
	                return e[t].content
	            }, u.abbr_open = function(e, t) {
	                return '<abbr title="' + c(a(e[t].title)) + '">'
	            }, u.abbr_close = function() {
	                return "</abbr>"
	            }, u.footnote_ref = function(e, t) {
	                var r = Number(e[t].id + 1).toString(),
	                    n = "fnref" + r;
	                return e[t].subId > 0 && (n += ":" + e[t].subId), '<sup class="footnote-ref"><a href="#fn' + r + '" id="' + n + '">[' + r + "]</a></sup>"
	            }, u.footnote_block_open = function(e, t, r) {
	                return (r.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n') + '<section class="footnotes">\n<ol class="footnotes-list">\n'
	            }, u.footnote_block_close = function() {
	                return "</ol>\n</section>\n"
	            }, u.footnote_open = function(e, t) {
	                var r = Number(e[t].id + 1).toString();
	                return '<li id="fn' + r + '"  class="footnote-item">'
	            }, u.footnote_close = function() {
	                return "</li>\n"
	            }, u.footnote_anchor = function(e, t) {
	                var r = Number(e[t].id + 1).toString(),
	                    n = "fnref" + r;
	                return e[t].subId > 0 && (n += ":" + e[t].subId), ' <a href="#' + n + '" class="footnote-backref">↩</a>'
	            }, u.dl_open = function() {
	                return "<dl>\n"
	            }, u.dt_open = function() {
	                return "<dt>"
	            }, u.dd_open = function() {
	                return "<dd>"
	            }, u.dl_close = function() {
	                return "</dl>\n"
	            }, u.dt_close = function() {
	                return "</dt>\n"
	            }, u.dd_close = function() {
	                return "</dd>\n"
	            }, s.prototype.renderInline = function(e, t, r) {
	                for (var n = "", s = this.rules, o = 0, i = e.length; i > o; o++) n += s[e[o].type](e, o, t, r, this);
	                return n
	            }, s.prototype.render = function(e, t, r) {
	                var n, s, o = "",
	                    i = this.rules;
	                for (n = 0, s = e.length; s > n; n++) o += "inline" === e[n].type ? this.renderInline(e[n].children, t, r) : i[e[n].type](e, n, t, r, this);
	                return o
	            }, t.exports = s
	        }, {
	            "./common/utils": 5
	        }],
	        19: [function(e, t) {
	            "use strict";

	            function r() {
	                this.__rules__ = [], this.__cache__ = null
	            }
	            r.prototype.__find__ = function(e) {
	                for (var t = 0; t < this.__rules__.length; t++)
	                    if (this.__rules__[t].name === e) return t;
	                return -1
	            }, r.prototype.__compile__ = function() {
	                var e = this,
	                    t = [""];
	                e.__rules__.forEach(function(e) {
	                    e.enabled && e.alt.forEach(function(e) {
	                        t.indexOf(e) < 0 && t.push(e)
	                    })
	                }), e.__cache__ = {}, t.forEach(function(t) {
	                    e.__cache__[t] = [], e.__rules__.forEach(function(r) {
	                        r.enabled && (t && r.alt.indexOf(t) < 0 || e.__cache__[t].push(r.fn))
	                    })
	                })
	            }, r.prototype.at = function(e, t, r) {
	                var n = this.__find__(e),
	                    s = r || {};
	                if (-1 === n) throw new Error("Parser rule not found: " + e);
	                this.__rules__[n].fn = t, this.__rules__[n].alt = s.alt || [], this.__cache__ = null
	            }, r.prototype.before = function(e, t, r, n) {
	                var s = this.__find__(e),
	                    o = n || {};
	                if (-1 === s) throw new Error("Parser rule not found: " + e);
	                this.__rules__.splice(s, 0, {
	                    name: t,
	                    enabled: !0,
	                    fn: r,
	                    alt: o.alt || []
	                }), this.__cache__ = null
	            }, r.prototype.after = function(e, t, r, n) {
	                var s = this.__find__(e),
	                    o = n || {};
	                if (-1 === s) throw new Error("Parser rule not found: " + e);
	                this.__rules__.splice(s + 1, 0, {
	                    name: t,
	                    enabled: !0,
	                    fn: r,
	                    alt: o.alt || []
	                }), this.__cache__ = null
	            }, r.prototype.push = function(e, t, r) {
	                var n = r || {};
	                this.__rules__.push({
	                    name: e,
	                    enabled: !0,
	                    fn: t,
	                    alt: n.alt || []
	                }), this.__cache__ = null
	            }, r.prototype.enable = function(e, t) {
	                Array.isArray(e) || (e = [e]), t && this.__rules__.forEach(function(e) {
	                    e.enabled = !1
	                }), e.forEach(function(e) {
	                    var t = this.__find__(e);
	                    if (0 > t) throw new Error("Rules manager: invalid rule name " + e);
	                    this.__rules__[t].enabled = !0
	                }, this), this.__cache__ = null
	            }, r.prototype.disable = function(e) {
	                Array.isArray(e) || (e = [e]), e.forEach(function(e) {
	                    var t = this.__find__(e);
	                    if (0 > t) throw new Error("Rules manager: invalid rule name " + e);
	                    this.__rules__[t].enabled = !1
	                }, this), this.__cache__ = null
	            }, r.prototype.getRules = function(e) {
	                return null === this.__cache__ && this.__compile__(), this.__cache__[e]
	            }, t.exports = r
	        }, {}],
	        20: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t, r, n) {
	                var s, o, i, l, a, c, u, p, h, f, d, g = e.bMarks[t] + e.tShift[t],
	                    m = e.eMarks[t];
	                if (g > m) return !1;
	                if (62 !== e.src.charCodeAt(g++)) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                if (n) return !0;
	                for (32 === e.src.charCodeAt(g) && g++, a = e.blkIndent, e.blkIndent = 0, l = [e.bMarks[t]], e.bMarks[t] = g, g = m > g ? e.skipSpaces(g) : g, o = g >= m, i = [e.tShift[t]], e.tShift[t] = g - e.bMarks[t], p = e.parser.ruler.getRules("blockquote"), s = t + 1; r > s && (g = e.bMarks[s] + e.tShift[s], m = e.eMarks[s], !(g >= m)); s++)
	                    if (62 !== e.src.charCodeAt(g++)) {
	                        if (o) break;
	                        for (d = !1, h = 0, f = p.length; f > h; h++)
	                            if (p[h](e, s, r, !0)) {
	                                d = !0;
	                                break
	                            }
	                        if (d) break;
	                        l.push(e.bMarks[s]), i.push(e.tShift[s]), e.tShift[s] = -1337
	                    } else 32 === e.src.charCodeAt(g) && g++, l.push(e.bMarks[s]), e.bMarks[s] = g, g = m > g ? e.skipSpaces(g) : g, o = g >= m, i.push(e.tShift[s]), e.tShift[s] = g - e.bMarks[s];
	                for (c = e.parentType, e.parentType = "blockquote", e.tokens.push({
	                        type: "blockquote_open",
	                        lines: u = [t, 0],
	                        level: e.level++
	                    }), e.parser.tokenize(e, t, s), e.tokens.push({
	                        type: "blockquote_close",
	                        level: --e.level
	                    }), e.parentType = c, u[1] = e.line, h = 0; h < i.length; h++) e.bMarks[h + t] = l[h], e.tShift[h + t] = i[h];
	                return e.blkIndent = a, !0
	            }
	        }, {}],
	        21: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t, r) {
	                var n, s;
	                if (e.tShift[t] - e.blkIndent < 4) return !1;
	                for (s = n = t + 1; r > n;)
	                    if (e.isEmpty(n)) n++;
	                    else {
	                        if (!(e.tShift[n] - e.blkIndent >= 4)) break;
	                        n++, s = n
	                    }
	                return e.line = n, e.tokens.push({
	                    type: "code",
	                    content: e.getLines(t, s, 4 + e.blkIndent, !0),
	                    block: !0,
	                    lines: [t, e.line],
	                    level: e.level
	                }), !0
	            }
	        }, {}],
	        22: [function(e, t) {
	            "use strict";

	            function r(e, t) {
	                var r, n, s = e.bMarks[t] + e.tShift[t],
	                    o = e.eMarks[t];
	                return s >= o ? -1 : (n = e.src.charCodeAt(s++), 126 !== n && 58 !== n ? -1 : (r = e.skipSpaces(s), s === r ? -1 : r >= o ? -1 : r))
	            }

	            function n(e, t) {
	                var r, n, s = e.level + 2;
	                for (r = t + 2, n = e.tokens.length - 2; n > r; r++) e.tokens[r].level === s && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0, e.tokens[r].tight = !0, r += 2)
	            }
	            t.exports = function(e, t, s, o) {
	                var i, l, a, c, u, p, h, f, d, g, m, b, v, k;
	                if (o) return e.ddIndent < 0 ? !1 : r(e, t) >= 0;
	                if (h = t + 1, e.isEmpty(h) && ++h > s) return !1;
	                if (e.tShift[h] < e.blkIndent) return !1;
	                if (i = r(e, h), 0 > i) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                p = e.tokens.length, e.tokens.push({
	                    type: "dl_open",
	                    lines: u = [t, 0],
	                    level: e.level++
	                }), a = t, l = h;
	                e: for (;;) {
	                    for (k = !0, v = !1, e.tokens.push({
	                            type: "dt_open",
	                            lines: [a, a],
	                            level: e.level++
	                        }), e.tokens.push({
	                            type: "inline",
	                            content: e.getLines(a, a + 1, e.blkIndent, !1).trim(),
	                            level: e.level + 1,
	                            lines: [a, a],
	                            children: []
	                        }), e.tokens.push({
	                            type: "dt_close",
	                            level: --e.level
	                        });;) {
	                        if (e.tokens.push({
	                                type: "dd_open",
	                                lines: c = [h, 0],
	                                level: e.level++
	                            }), b = e.tight, d = e.ddIndent, f = e.blkIndent, m = e.tShift[l], g = e.parentType, e.blkIndent = e.ddIndent = e.tShift[l] + 2, e.tShift[l] = i - e.bMarks[l], e.tight = !0, e.parentType = "deflist", e.parser.tokenize(e, l, s, !0), (!e.tight || v) && (k = !1), v = e.line - l > 1 && e.isEmpty(e.line - 1), e.tShift[l] = m, e.tight = b, e.parentType = g, e.blkIndent = f, e.ddIndent = d, e.tokens.push({
	                                type: "dd_close",
	                                level: --e.level
	                            }), c[1] = h = e.line, h >= s) break e;
	                        if (e.tShift[h] < e.blkIndent) break e;
	                        if (i = r(e, h), 0 > i) break;
	                        l = h
	                    }
	                    if (h >= s) break;
	                    if (a = h, e.isEmpty(a)) break;
	                    if (e.tShift[a] < e.blkIndent) break;
	                    if (l = a + 1, l >= s) break;
	                    if (e.isEmpty(l) && l++, l >= s) break;
	                    if (e.tShift[l] < e.blkIndent) break;
	                    if (i = r(e, l), 0 > i) break
	                }
	                return e.tokens.push({
	                    type: "dl_close",
	                    level: --e.level
	                }), u[1] = h, e.line = h, k && n(e, p), !0
	            }
	        }, {}],
	        23: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t, r, n) {
	                var s, o, i, l, a, c = !1,
	                    u = e.bMarks[t] + e.tShift[t],
	                    p = e.eMarks[t];
	                if (u + 3 > p) return !1;
	                if (s = e.src.charCodeAt(u), 126 !== s && 96 !== s) return !1;
	                if (a = u, u = e.skipChars(u, s), o = u - a, 3 > o) return !1;
	                if (i = e.src.slice(u, p).trim(), i.indexOf("`") >= 0) return !1;
	                if (n) return !0;
	                for (l = t;
	                    (l++, !(l >= r)) && (u = a = e.bMarks[l] + e.tShift[l], p = e.eMarks[l], !(p > u && e.tShift[l] < e.blkIndent));)
	                    if (e.src.charCodeAt(u) === s && !(e.tShift[l] - e.blkIndent >= 4 || (u = e.skipChars(u, s), o > u - a || (u = e.skipSpaces(u), p > u)))) {
	                        c = !0;
	                        break
	                    }
	                return o = e.tShift[t], e.line = l + (c ? 1 : 0), e.tokens.push({
	                    type: "fence",
	                    params: i,
	                    content: e.getLines(t + 1, l, o, !0),
	                    lines: [t, e.line],
	                    level: e.level
	                }), !0
	            }
	        }, {}],
	        24: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t, r, n) {
	                var s, o, i, l, a, c = e.bMarks[t] + e.tShift[t],
	                    u = e.eMarks[t];
	                if (c + 4 > u) return !1;
	                if (91 !== e.src.charCodeAt(c)) return !1;
	                if (94 !== e.src.charCodeAt(c + 1)) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                for (l = c + 2; u > l; l++) {
	                    if (32 === e.src.charCodeAt(l)) return !1;
	                    if (93 === e.src.charCodeAt(l)) break
	                }
	                return l === c + 2 ? !1 : l + 1 >= u || 58 !== e.src.charCodeAt(++l) ? !1 : n ? !0 : (l++, e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.refs || (e.env.footnotes.refs = {}), a = e.src.slice(c + 2, l - 2), e.env.footnotes.refs[":" + a] = -1, e.tokens.push({
	                    type: "footnote_reference_open",
	                    label: a,
	                    level: e.level++
	                }), s = e.bMarks[t], o = e.tShift[t], i = e.parentType, e.tShift[t] = e.skipSpaces(l) - l, e.bMarks[t] = l, e.blkIndent += 4, e.parentType = "footnote", e.tShift[t] < e.blkIndent && (e.tShift[t] += e.blkIndent, e.bMarks[t] -= e.blkIndent), e.parser.tokenize(e, t, r, !0), e.parentType = i, e.blkIndent -= 4, e.tShift[t] = o, e.bMarks[t] = s, e.tokens.push({
	                    type: "footnote_reference_close",
	                    level: --e.level
	                }), !0)
	            }
	        }, {}],
	        25: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t, r, n) {
	                var s, o, i, l = e.bMarks[t] + e.tShift[t],
	                    a = e.eMarks[t];
	                if (l >= a) return !1;
	                if (s = e.src.charCodeAt(l), 35 !== s || l >= a) return !1;
	                for (o = 1, s = e.src.charCodeAt(++l); 35 === s && a > l && 6 >= o;) o++, s = e.src.charCodeAt(++l);
	                return o > 6 || a > l && 32 !== s ? !1 : n ? !0 : (a = e.skipCharsBack(a, 32, l), i = e.skipCharsBack(a, 35, l), i > l && 32 === e.src.charCodeAt(i - 1) && (a = i), e.line = t + 1, e.tokens.push({
	                    type: "heading_open",
	                    hLevel: o,
	                    lines: [t, e.line],
	                    level: e.level
	                }), a > l && e.tokens.push({
	                    type: "inline",
	                    content: e.src.slice(l, a).trim(),
	                    level: e.level + 1,
	                    lines: [t, e.line],
	                    children: []
	                }), e.tokens.push({
	                    type: "heading_close",
	                    hLevel: o,
	                    level: e.level
	                }), !0)
	            }
	        }, {}],
	        26: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t, r, n) {
	                var s, o, i, l = e.bMarks[t],
	                    a = e.eMarks[t];
	                if (l += e.tShift[t], l > a) return !1;
	                if (s = e.src.charCodeAt(l++), 42 !== s && 45 !== s && 95 !== s) return !1;
	                for (o = 1; a > l;) {
	                    if (i = e.src.charCodeAt(l++), i !== s && 32 !== i) return !1;
	                    i === s && o++
	                }
	                return 3 > o ? !1 : n ? !0 : (e.line = t + 1, e.tokens.push({
	                    type: "hr",
	                    lines: [t, e.line],
	                    level: e.level
	                }), !0)
	            }
	        }, {}],
	        27: [function(e, t) {
	            "use strict";

	            function r(e) {
	                var t = 32 | e;
	                return t >= 97 && 122 >= t
	            }
	            var n = e("../common/html_blocks"),
	                s = /^<([a-zA-Z]{1,15})[\s\/>]/,
	                o = /^<\/([a-zA-Z]{1,15})[\s>]/;
	            t.exports = function(e, t, i, l) {
	                var a, c, u, p = e.bMarks[t],
	                    h = e.eMarks[t],
	                    f = e.tShift[t];
	                if (p += f, !e.options.html) return !1;
	                if (f > 3 || p + 2 >= h) return !1;
	                if (60 !== e.src.charCodeAt(p)) return !1;
	                if (a = e.src.charCodeAt(p + 1), 33 === a || 63 === a) {
	                    if (l) return !0
	                } else {
	                    if (47 !== a && !r(a)) return !1;
	                    if (47 === a) {
	                        if (c = e.src.slice(p, h).match(o), !c) return !1
	                    } else if (c = e.src.slice(p, h).match(s), !c) return !1;
	                    if (n[c[1].toLowerCase()] !== !0) return !1;
	                    if (l) return !0
	                }
	                for (u = t + 1; u < e.lineMax && !e.isEmpty(u);) u++;
	                return e.line = u, e.tokens.push({
	                    type: "htmlblock",
	                    level: e.level,
	                    lines: [t, e.line],
	                    content: e.getLines(t, u, 0, !0)
	                }), !0
	            }
	        }, {
	            "../common/html_blocks": 2
	        }],
	        28: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t, r) {
	                var n, s, o, i = t + 1;
	                return i >= r ? !1 : e.tShift[i] < e.blkIndent ? !1 : e.tShift[i] - e.blkIndent > 3 ? !1 : (s = e.bMarks[i] + e.tShift[i], o = e.eMarks[i], s >= o ? !1 : (n = e.src.charCodeAt(s), 45 !== n && 61 !== n ? !1 : (s = e.skipChars(s, n), s = e.skipSpaces(s), o > s ? !1 : (s = e.bMarks[t] + e.tShift[t], e.line = i + 1, e.tokens.push({
	                    type: "heading_open",
	                    hLevel: 61 === n ? 1 : 2,
	                    lines: [t, e.line],
	                    level: e.level
	                }), e.tokens.push({
	                    type: "inline",
	                    content: e.src.slice(s, e.eMarks[t]).trim(),
	                    level: e.level + 1,
	                    lines: [t, e.line - 1],
	                    children: []
	                }), e.tokens.push({
	                    type: "heading_close",
	                    hLevel: 61 === n ? 1 : 2,
	                    level: e.level
	                }), !0))))
	            }
	        }, {}],
	        29: [function(e, t) {
	            "use strict";

	            function r(e, t) {
	                var r, n, s;
	                return n = e.bMarks[t] + e.tShift[t], s = e.eMarks[t], n >= s ? -1 : (r = e.src.charCodeAt(n++), 42 !== r && 45 !== r && 43 !== r ? -1 : s > n && 32 !== e.src.charCodeAt(n) ? -1 : n)
	            }

	            function n(e, t) {
	                var r, n = e.bMarks[t] + e.tShift[t],
	                    s = e.eMarks[t];
	                if (n + 1 >= s) return -1;
	                if (r = e.src.charCodeAt(n++), 48 > r || r > 57) return -1;
	                for (;;) {
	                    if (n >= s) return -1;
	                    if (r = e.src.charCodeAt(n++), !(r >= 48 && 57 >= r)) {
	                        if (41 === r || 46 === r) break;
	                        return -1
	                    }
	                }
	                return s > n && 32 !== e.src.charCodeAt(n) ? -1 : n
	            }

	            function s(e, t) {
	                var r, n, s = e.level + 2;
	                for (r = t + 2, n = e.tokens.length - 2; n > r; r++) e.tokens[r].level === s && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0, e.tokens[r].tight = !0, r += 2)
	            }
	            t.exports = function(e, t, o, i) {
	                var l, a, c, u, p, h, f, d, g, m, b, v, k, _, y, x, w, A, q, C, S, M, E = !0;
	                if ((d = n(e, t)) >= 0) k = !0;
	                else {
	                    if (!((d = r(e, t)) >= 0)) return !1;
	                    k = !1
	                }
	                if (e.level >= e.options.maxNesting) return !1;
	                if (v = e.src.charCodeAt(d - 1), i) return !0;
	                for (y = e.tokens.length, k ? (f = e.bMarks[t] + e.tShift[t], b = Number(e.src.substr(f, d - f - 1)), e.tokens.push({
	                        type: "ordered_list_open",
	                        order: b,
	                        lines: w = [t, 0],
	                        level: e.level++
	                    })) : e.tokens.push({
	                        type: "bullet_list_open",
	                        lines: w = [t, 0],
	                        level: e.level++
	                    }), l = t, x = !1, q = e.parser.ruler.getRules("list"); !(!(o > l) || (_ = e.skipSpaces(d), g = e.eMarks[l], m = _ >= g ? 1 : _ - d, m > 4 && (m = 1), 1 > m && (m = 1), a = d - e.bMarks[l] + m, e.tokens.push({
	                        type: "list_item_open",
	                        lines: A = [t, 0],
	                        level: e.level++
	                    }), u = e.blkIndent, p = e.tight, c = e.tShift[t], h = e.parentType, e.tShift[t] = _ - e.bMarks[t], e.blkIndent = a, e.tight = !0, e.parentType = "list", e.parser.tokenize(e, t, o, !0), (!e.tight || x) && (E = !1), x = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = u, e.tShift[t] = c, e.tight = p, e.parentType = h, e.tokens.push({
	                        type: "list_item_close",
	                        level: --e.level
	                    }), l = t = e.line, A[1] = l, _ = e.bMarks[t], l >= o) || e.isEmpty(l) || e.tShift[l] < e.blkIndent);) {
	                    for (M = !1, C = 0, S = q.length; S > C; C++)
	                        if (q[C](e, l, o, !0)) {
	                            M = !0;
	                            break
	                        }
	                    if (M) break;
	                    if (k) {
	                        if (d = n(e, l), 0 > d) break
	                    } else if (d = r(e, l), 0 > d) break;
	                    if (v !== e.src.charCodeAt(d - 1)) break
	                }
	                return e.tokens.push({
	                    type: k ? "ordered_list_close" : "bullet_list_close",
	                    level: --e.level
	                }), w[1] = l, e.line = l, E && s(e, y), !0
	            }
	        }, {}],
	        30: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s, o, i, l, a = t + 1;
	                if (r = e.lineMax, r > a && !e.isEmpty(a))
	                    for (l = e.parser.ruler.getRules("paragraph"); r > a && !e.isEmpty(a); a++)
	                        if (!(e.tShift[a] - e.blkIndent > 3)) {
	                            for (s = !1, o = 0, i = l.length; i > o; o++)
	                                if (l[o](e, a, r, !0)) {
	                                    s = !0;
	                                    break
	                                }
	                            if (s) break
	                        }
	                return n = e.getLines(t, a, e.blkIndent, !1).trim(), e.line = a, n.length && (e.tokens.push({
	                    type: "paragraph_open",
	                    tight: !1,
	                    lines: [t, e.line],
	                    level: e.level
	                }), e.tokens.push({
	                    type: "inline",
	                    content: n,
	                    level: e.level + 1,
	                    lines: [t, e.line],
	                    children: []
	                }), e.tokens.push({
	                    type: "paragraph_close",
	                    tight: !1,
	                    level: e.level
	                })), !0
	            }
	        }, {}],
	        31: [function(e, t) {
	            "use strict";

	            function r(e, t, r, n, s) {
	                var o, i, l, a, c, u, p;
	                for (this.src = e, this.parser = t, this.options = r, this.env = n, this.tokens = s, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", i = this.src, u = 0, p = !1, l = a = u = 0, c = i.length; c > a; a++) {
	                    if (o = i.charCodeAt(a), !p) {
	                        if (32 === o) {
	                            u++;
	                            continue
	                        }
	                        p = !0
	                    }(10 === o || a === c - 1) && (10 !== o && a++, this.bMarks.push(l), this.eMarks.push(a), this.tShift.push(u), p = !1, u = 0, l = a + 1)
	                }
	                this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1
	            }
	            r.prototype.isEmpty = function(e) {
	                return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
	            }, r.prototype.skipEmptyLines = function(e) {
	                for (var t = this.lineMax; t > e && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
	                return e
	            }, r.prototype.skipSpaces = function(e) {
	                for (var t = this.src.length; t > e && 32 === this.src.charCodeAt(e); e++);
	                return e
	            }, r.prototype.skipChars = function(e, t) {
	                for (var r = this.src.length; r > e && this.src.charCodeAt(e) === t; e++);
	                return e
	            }, r.prototype.skipCharsBack = function(e, t, r) {
	                if (r >= e) return e;
	                for (; e > r;)
	                    if (t !== this.src.charCodeAt(--e)) return e + 1;
	                return e
	            }, r.prototype.getLines = function(e, t, r, n) {
	                var s, o, i, l, a, c = e;
	                if (e >= t) return "";
	                if (c + 1 === t) return o = this.bMarks[c] + Math.min(this.tShift[c], r), i = n ? this.bMarks[t] : this.eMarks[t - 1], this.src.slice(o, i);
	                for (l = new Array(t - e), s = 0; t > c; c++, s++) a = this.tShift[c], a > r && (a = r), 0 > a && (a = 0), o = this.bMarks[c] + a, i = t > c + 1 || n ? this.eMarks[c] + 1 : this.eMarks[c], l[s] = this.src.slice(o, i);
	                return l.join("")
	            }, t.exports = r
	        }, {}],
	        32: [function(e, t) {
	            "use strict";

	            function r(e, t) {
	                var r = e.bMarks[t] + e.blkIndent,
	                    n = e.eMarks[t];
	                return e.src.substr(r, n - r)
	            }
	            t.exports = function(e, t, n, s) {
	                var o, i, l, a, c, u, p, h, f, d;
	                if (t + 2 > n) return !1;
	                if (c = t + 1, e.tShift[c] < e.blkIndent) return !1;
	                if (l = e.bMarks[c] + e.tShift[c], l >= e.eMarks[c]) return !1;
	                if (o = e.src.charCodeAt(l), 124 !== o && 45 !== o && 58 !== o) return !1;
	                if (i = r(e, t + 1), !/^[-:| ]+$/.test(i)) return !1;
	                if (u = i.split("|"), 2 >= u) return !1;
	                for (p = [], a = 0; a < u.length; a++) {
	                    if (h = u[a].trim(), !h) {
	                        if (0 === a || a === u.length - 1) continue;
	                        return !1
	                    }
	                    if (!/^:?-+:?$/.test(h)) return !1;
	                    p.push(58 === h.charCodeAt(h.length - 1) ? 58 === h.charCodeAt(0) ? "center" : "right" : 58 === h.charCodeAt(0) ? "left" : "")
	                }
	                if (i = r(e, t).trim(), -1 === i.indexOf("|")) return !1;
	                if (u = i.replace(/^\||\|$/g, "").split("|"), p.length !== u.length) return !1;
	                if (s) return !0;
	                for (e.tokens.push({
	                        type: "table_open",
	                        lines: f = [t, 0],
	                        level: e.level++
	                    }), e.tokens.push({
	                        type: "thead_open",
	                        lines: [t, t + 1],
	                        level: e.level++
	                    }), e.tokens.push({
	                        type: "tr_open",
	                        lines: [t, t + 1],
	                        level: e.level++
	                    }), a = 0; a < u.length; a++) e.tokens.push({
	                    type: "th_open",
	                    align: p[a],
	                    lines: [t, t + 1],
	                    level: e.level++
	                }), e.tokens.push({
	                    type: "inline",
	                    content: u[a].trim(),
	                    lines: [t, t + 1],
	                    level: e.level,
	                    children: []
	                }), e.tokens.push({
	                    type: "th_close",
	                    level: --e.level
	                });
	                for (e.tokens.push({
	                        type: "tr_close",
	                        level: --e.level
	                    }), e.tokens.push({
	                        type: "thead_close",
	                        level: --e.level
	                    }), e.tokens.push({
	                        type: "tbody_open",
	                        lines: d = [t + 2, 0],
	                        level: e.level++
	                    }), c = t + 2; n > c && !(e.tShift[c] < e.blkIndent) && (i = r(e, c).trim(), -1 !== i.indexOf("|")); c++) {
	                    for (u = i.replace(/^\||\|$/g, "").split("|"), e.tokens.push({
	                            type: "tr_open",
	                            level: e.level++
	                        }), a = 0; a < u.length; a++) e.tokens.push({
	                        type: "td_open",
	                        align: p[a],
	                        level: e.level++
	                    }), e.tokens.push({
	                        type: "inline",
	                        content: u[a].replace(/^\|? *| *\|?$/g, ""),
	                        level: e.level,
	                        children: []
	                    }), e.tokens.push({
	                        type: "td_close",
	                        level: --e.level
	                    });
	                    e.tokens.push({
	                        type: "tr_close",
	                        level: --e.level
	                    })
	                }
	                return e.tokens.push({
	                    type: "tbody_close",
	                    level: --e.level
	                }), e.tokens.push({
	                    type: "table_close",
	                    level: --e.level
	                }), f[1] = d[1] = c, e.line = c, !0
	            }
	        }, {}],
	        33: [function(e, t) {
	            "use strict";

	            function r(e, t, r, o) {
	                var i, l, a, c, u, p;
	                if (42 !== e.charCodeAt(0)) return -1;
	                if (91 !== e.charCodeAt(1)) return -1;
	                if (-1 === e.indexOf("]:")) return -1;
	                if (i = new n(e, t, r, o, []), l = s(i, 1), 0 > l || 58 !== e.charCodeAt(l + 1)) return -1;
	                for (c = i.posMax, a = l + 2; c > a && 10 !== i.src.charCodeAt(a); a++);
	                return u = e.slice(2, l), p = e.slice(l + 2, a).trim(), 0 === p.length ? -1 : (o.abbreviations || (o.abbreviations = {}), "undefined" == typeof o.abbreviations[":" + u] && (o.abbreviations[":" + u] = p), a)
	            }
	            var n = e("../rules_inline/state_inline"),
	                s = e("../helpers/parse_link_label");
	            t.exports = function(e) {
	                var t, n, s, o, i = e.tokens;
	                if (!e.inlineMode)
	                    for (t = 1, n = i.length - 1; n > t; t++)
	                        if ("paragraph_open" === i[t - 1].type && "inline" === i[t].type && "paragraph_close" === i[t + 1].type) {
	                            for (s = i[t].content; s.length && (o = r(s, e.inline, e.options, e.env), !(0 > o));) s = s.slice(o).trim();
	                            i[t].content = s, s.length || (i[t - 1].tight = !0, i[t + 1].tight = !0)
	                        }
	            }
	        }, {
	            "../helpers/parse_link_label": 12,
	            "../rules_inline/state_inline": 55
	        }],
	        34: [function(e, t) {
	            "use strict";

	            function r(e) {
	                return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
	            }
	            var n = " \n()[]'\".,!?-";
	            t.exports = function(e) {
	                var t, s, o, i, l, a, c, u, p, h, f, d, g = e.tokens;
	                if (e.env.abbreviations)
	                    for (e.env.abbrRegExp || (d = "(^|[" + n.split("").map(r).join("") + "])(" + Object.keys(e.env.abbreviations).map(function(e) {
	                            return e.substr(1)
	                        }).sort(function(e, t) {
	                            return t.length - e.length
	                        }).map(r).join("|") + ")($|[" + n.split("").map(r).join("") + "])", e.env.abbrRegExp = new RegExp(d, "g")), h = e.env.abbrRegExp, s = 0, o = g.length; o > s; s++)
	                        if ("inline" === g[s].type)
	                            for (i = g[s].children, t = i.length - 1; t >= 0; t--)
	                                if (l = i[t], "text" === l.type) {
	                                    for (u = 0, a = l.content, h.lastIndex = 0, p = l.level, c = []; f = h.exec(a);) h.lastIndex > u && c.push({
	                                        type: "text",
	                                        content: a.slice(u, f.index + f[1].length),
	                                        level: p
	                                    }), c.push({
	                                        type: "abbr_open",
	                                        title: e.env.abbreviations[":" + f[2]],
	                                        level: p++
	                                    }), c.push({
	                                        type: "text",
	                                        content: f[2],
	                                        level: p
	                                    }), c.push({
	                                        type: "abbr_close",
	                                        level: --p
	                                    }), u = h.lastIndex - f[3].length;
	                                    c.length && (u < a.length && c.push({
	                                        type: "text",
	                                        content: a.slice(u),
	                                        level: p
	                                    }), g[s].children = i = [].concat(i.slice(0, t), c, i.slice(t + 1)))
	                                }
	            }
	        }, {}],
	        35: [function(e, t) {
	            "use strict";
	            t.exports = function(e) {
	                e.inlineMode ? e.tokens.push({
	                    type: "inline",
	                    content: e.src.replace(/\n/g, " ").trim(),
	                    level: 0,
	                    lines: [0, 1],
	                    children: []
	                }) : e.block.parse(e.src, e.options, e.env, e.tokens)
	            }
	        }, {}],
	        36: [function(e, t) {
	            "use strict";
	            t.exports = function(e) {
	                var t, r, n, s, o, i, l, a, c, u = 0,
	                    p = !1,
	                    h = {};
	                if (e.env.footnotes && (e.tokens = e.tokens.filter(function(e) {
	                        return "footnote_reference_open" === e.type ? (p = !0, a = [], c = e.label, !1) : "footnote_reference_close" === e.type ? (p = !1, h[":" + c] = a, !1) : (p && a.push(e), !p)
	                    }), e.env.footnotes.list)) {
	                    for (i = e.env.footnotes.list, e.tokens.push({
	                            type: "footnote_block_open",
	                            level: u++
	                        }), t = 0, r = i.length; r > t; t++) {
	                        for (e.tokens.push({
	                                type: "footnote_open",
	                                id: t,
	                                level: u++
	                            }), i[t].tokens ? (l = [], l.push({
	                                type: "paragraph_open",
	                                tight: !1,
	                                level: u++
	                            }), l.push({
	                                type: "inline",
	                                content: "",
	                                level: u,
	                                children: i[t].tokens
	                            }), l.push({
	                                type: "paragraph_close",
	                                tight: !1,
	                                level: --u
	                            })) : i[t].label && (l = h[":" + i[t].label]), e.tokens = e.tokens.concat(l), o = "paragraph_close" === e.tokens[e.tokens.length - 1].type ? e.tokens.pop() : null, s = i[t].count > 0 ? i[t].count : 1, n = 0; s > n; n++) e.tokens.push({
	                            type: "footnote_anchor",
	                            id: t,
	                            subId: n,
	                            level: u
	                        });
	                        o && e.tokens.push(o), e.tokens.push({
	                            type: "footnote_close",
	                            level: --u
	                        })
	                    }
	                    e.tokens.push({
	                        type: "footnote_block_close",
	                        level: --u
	                    })
	                }
	            }
	        }, {}],
	        37: [function(e, t) {
	            "use strict";
	            t.exports = function(e) {
	                var t, r, n, s = e.tokens;
	                for (r = 0, n = s.length; n > r; r++) t = s[r], "inline" === t.type && e.inline.parse(t.content, e.options, e.env, t.children)
	            }
	        }, {}],
	        38: [function(e, t) {
	            "use strict";

	            function r(e) {
	                return /^<a[>\s]/i.test(e)
	            }

	            function n(e) {
	                return /^<\/a\s*>/i.test(e)
	            }

	            function s() {
	                var e = [],
	                    t = new o({
	                        stripPrefix: !1,
	                        url: !0,
	                        email: !0,
	                        twitter: !1,
	                        replaceFn: function(t, r) {
	                            switch (r.getType()) {
	                                case "url":
	                                    e.push({
	                                        text: r.matchedText,
	                                        url: r.getUrl()
	                                    });
	                                    break;
	                                case "email":
	                                    e.push({
	                                        text: r.matchedText,
	                                        url: "mailto:" + r.getEmail().replace(/^mailto:/i, "")
	                                    })
	                            }
	                            return !1
	                        }
	                    });
	                return {
	                    links: e,
	                    autolinker: t
	                }
	            }
	            var o = e("autolinker"),
	                i = /www|@|\:\/\//;
	            t.exports = function(e) {
	                var t, o, l, a, c, u, p, h, f, d, g, m, b, v = e.tokens,
	                    k = null;
	                if (e.options.linkify)
	                    for (o = 0, l = v.length; l > o; o++)
	                        if ("inline" === v[o].type)
	                            for (a = v[o].children, g = 0, t = a.length - 1; t >= 0; t--)
	                                if (c = a[t], "link_close" !== c.type) {
	                                    if ("htmltag" === c.type && (r(c.content) && g > 0 && g--, n(c.content) && g++), !(g > 0) && "text" === c.type && i.test(c.content)) {
	                                        if (k || (k = s(), m = k.links, b = k.autolinker), u = c.content, m.length = 0, b.link(u), !m.length) continue;
	                                        for (p = [], d = c.level, h = 0; h < m.length; h++) e.inline.validateLink(m[h].url) && (f = u.indexOf(m[h].text), f && (d = d, p.push({
	                                            type: "text",
	                                            content: u.slice(0, f),
	                                            level: d
	                                        })), p.push({
	                                            type: "link_open",
	                                            href: m[h].url,
	                                            title: "",
	                                            level: d++
	                                        }), p.push({
	                                            type: "text",
	                                            content: m[h].text,
	                                            level: d
	                                        }), p.push({
	                                            type: "link_close",
	                                            level: --d
	                                        }), u = u.slice(f + m[h].text.length));
	                                        u.length && p.push({
	                                            type: "text",
	                                            content: u,
	                                            level: d
	                                        }), v[o].children = a = [].concat(a.slice(0, t), p, a.slice(t + 1))
	                                    }
	                                } else
	                                    for (t--; a[t].level !== c.level && "link_open" !== a[t].type;) t--
	            }
	        }, {
	            autolinker: 59
	        }],
	        39: [function(e, t) {
	            "use strict";

	            function r(e, t, r, a) {
	                var c, u, p, h, f, d, g, m, b;
	                if (91 !== e.charCodeAt(0)) return -1;
	                if (-1 === e.indexOf("]:")) return -1;
	                if (c = new n(e, t, r, a, []), u = s(c, 0), 0 > u || 58 !== e.charCodeAt(u + 1)) return -1;
	                for (h = c.posMax, p = u + 2; h > p && (f = c.src.charCodeAt(p), 32 === f || 10 === f); p++);
	                if (!o(c, p)) return -1;
	                for (g = c.linkContent, p = c.pos, d = p, p += 1; h > p && (f = c.src.charCodeAt(p), 32 === f || 10 === f); p++);
	                for (h > p && d !== p && i(c, p) ? (m = c.linkContent, p = c.pos) : (m = "", p = d); h > p && 32 === c.src.charCodeAt(p);) p++;
	                return h > p && 10 !== c.src.charCodeAt(p) ? -1 : (b = l(e.slice(1, u)), "undefined" == typeof a.references[b] && (a.references[b] = {
	                    title: m,
	                    href: g
	                }), p)
	            }
	            var n = e("../rules_inline/state_inline"),
	                s = e("../helpers/parse_link_label"),
	                o = e("../helpers/parse_link_destination"),
	                i = e("../helpers/parse_link_title"),
	                l = e("../helpers/normalize_reference");
	            t.exports = function(e) {
	                var t, n, s, o, i = e.tokens;
	                if (e.env.references = e.env.references || {}, !e.inlineMode)
	                    for (t = 1, n = i.length - 1; n > t; t++)
	                        if ("inline" === i[t].type && "paragraph_open" === i[t - 1].type && "paragraph_close" === i[t + 1].type) {
	                            for (s = i[t].content; s.length && (o = r(s, e.inline, e.options, e.env), !(0 > o));) s = s.slice(o).trim();
	                            i[t].content = s, s.length || (i[t - 1].tight = !0, i[t + 1].tight = !0)
	                        }
	            }
	        }, {
	            "../helpers/normalize_reference": 10,
	            "../helpers/parse_link_destination": 11,
	            "../helpers/parse_link_label": 12,
	            "../helpers/parse_link_title": 13,
	            "../rules_inline/state_inline": 55
	        }],
	        40: [function(e, t) {
	            "use strict";

	            function r(e) {
	                return e.indexOf("(") < 0 ? e : e.replace(s, function(e, t) {
	                    return o[t.toLowerCase()]
	                })
	            }
	            var n = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
	                s = /\((c|tm|r|p)\)/gi,
	                o = {
	                    c: "©",
	                    r: "®",
	                    p: "§",
	                    tm: "™"
	                };
	            t.exports = function(e) {
	                var t, s, o, i, l;
	                if (e.options.typographer)
	                    for (l = e.tokens.length - 1; l >= 0; l--)
	                        if ("inline" === e.tokens[l].type)
	                            for (i = e.tokens[l].children, t = i.length - 1; t >= 0; t--) s = i[t], "text" === s.type && (o = s.content, o = r(o), n.test(o) && (o = o.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), s.content = o)
	            }
	        }, {}],
	        41: [function(e, t) {
	            "use strict";

	            function r(e, t) {
	                return 0 > t || t >= e.length ? !1 : !i.test(e[t])
	            }

	            function n(e, t, r) {
	                return e.substr(0, t) + r + e.substr(t + 1)
	            }
	            var s = /['"]/,
	                o = /['"]/g,
	                i = /[-\s()\[\]]/,
	                l = "’";
	            t.exports = function(e) {
	                var t, i, a, c, u, p, h, f, d, g, m, b, v, k, _, y, x;
	                if (e.options.typographer)
	                    for (x = [], _ = e.tokens.length - 1; _ >= 0; _--)
	                        if ("inline" === e.tokens[_].type)
	                            for (y = e.tokens[_].children, x.length = 0, t = 0; t < y.length; t++)
	                                if (i = y[t], "text" === i.type && !s.test(i.text)) {
	                                    for (h = y[t].level, v = x.length - 1; v >= 0 && !(x[v].level <= h); v--);
	                                    x.length = v + 1, a = i.content, u = 0, p = a.length;
	                                    e: for (; p > u && (o.lastIndex = u, c = o.exec(a));)
	                                        if (f = !r(a, c.index - 1), u = c.index + 1, k = "'" === c[0], d = !r(a, u), d || f) {
	                                            if (m = !d, b = !f)
	                                                for (v = x.length - 1; v >= 0 && (g = x[v], !(x[v].level < h)); v--)
	                                                    if (g.single === k && x[v].level === h) {
	                                                        g = x[v], k ? (y[g.token].content = n(y[g.token].content, g.pos, e.options.quotes[2]), i.content = n(i.content, c.index, e.options.quotes[3])) : (y[g.token].content = n(y[g.token].content, g.pos, e.options.quotes[0]), i.content = n(i.content, c.index, e.options.quotes[1])), x.length = v;
	                                                        continue e
	                                                    }
	                                            m ? x.push({
	                                                token: t,
	                                                pos: c.index,
	                                                single: k,
	                                                level: h
	                                            }) : b && k && (i.content = n(i.content, c.index, l))
	                                        } else k && (i.content = n(i.content, c.index, l))
	                                }
	            }
	        }, {}],
	        42: [function(e, t) {
	            "use strict";
	            var r = e("../common/url_schemas"),
	                n = e("../helpers/normalize_link"),
	                s = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
	                o = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
	            t.exports = function(e, t) {
	                var i, l, a, c, u, p = e.pos;
	                return 60 !== e.src.charCodeAt(p) ? !1 : (i = e.src.slice(p), i.indexOf(">") < 0 ? !1 : (l = i.match(o)) ? r.indexOf(l[1].toLowerCase()) < 0 ? !1 : (c = l[0].slice(1, -1), u = n(c), e.parser.validateLink(c) ? (t || (e.push({
	                    type: "link_open",
	                    href: u,
	                    level: e.level
	                }), e.push({
	                    type: "text",
	                    content: c,
	                    level: e.level + 1
	                }), e.push({
	                    type: "link_close",
	                    level: e.level
	                })), e.pos += l[0].length, !0) : !1) : (a = i.match(s), a ? (c = a[0].slice(1, -1), u = n("mailto:" + c), e.parser.validateLink(u) ? (t || (e.push({
	                    type: "link_open",
	                    href: u,
	                    level: e.level
	                }), e.push({
	                    type: "text",
	                    content: c,
	                    level: e.level + 1
	                }), e.push({
	                    type: "link_close",
	                    level: e.level
	                })), e.pos += a[0].length, !0) : !1) : !1))
	            }
	        }, {
	            "../common/url_schemas": 4,
	            "../helpers/normalize_link": 9
	        }],
	        43: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s, o, i, l = e.pos,
	                    a = e.src.charCodeAt(l);
	                if (96 !== a) return !1;
	                for (r = l, l++, n = e.posMax; n > l && 96 === e.src.charCodeAt(l);) l++;
	                for (s = e.src.slice(r, l), o = i = l; - 1 !== (o = e.src.indexOf("`", i));) {
	                    for (i = o + 1; n > i && 96 === e.src.charCodeAt(i);) i++;
	                    if (i - o === s.length) return t || e.push({
	                        type: "code",
	                        content: e.src.slice(l, o).replace(/[ \n]+/g, " ").trim(),
	                        block: !1,
	                        level: e.level
	                    }), e.pos = i, !0
	                }
	                return t || (e.pending += s), e.pos += s.length, !0
	            }
	        }, {}],
	        44: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s, o, i, l = e.posMax,
	                    a = e.pos;
	                if (126 !== e.src.charCodeAt(a)) return !1;
	                if (t) return !1;
	                if (a + 4 >= l) return !1;
	                if (126 !== e.src.charCodeAt(a + 1)) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 126 === o) return !1;
	                if (126 === i) return !1;
	                if (32 === i || 10 === i) return !1;
	                for (n = a + 2; l > n && 126 === e.src.charCodeAt(n);) n++;
	                if (n > a + 3) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;
	                for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
	                    if (126 === e.src.charCodeAt(e.pos) && 126 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 126 !== i && 126 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
	                        r = !0;
	                        break
	                    }
	                    e.parser.skipToken(e)
	                }
	                return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
	                    type: "del_open",
	                    level: e.level++
	                }), e.parser.tokenize(e), e.push({
	                    type: "del_close",
	                    level: --e.level
	                })), e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1)
	            }
	        }, {}],
	        45: [function(e, t) {
	            "use strict";

	            function r(e) {
	                return e >= 48 && 57 >= e || e >= 65 && 90 >= e || e >= 97 && 122 >= e
	            }

	            function n(e, t) {
	                var n, s, o, i = t,
	                    l = !0,
	                    a = !0,
	                    c = e.posMax,
	                    u = e.src.charCodeAt(t);
	                for (n = t > 0 ? e.src.charCodeAt(t - 1) : -1; c > i && e.src.charCodeAt(i) === u;) i++;
	                return i >= c && (l = !1), o = i - t, o >= 4 ? l = a = !1 : (s = c > i ? e.src.charCodeAt(i) : -1, (32 === s || 10 === s) && (l = !1), (32 === n || 10 === n) && (a = !1), 95 === u && (r(n) && (l = !1), r(s) && (a = !1))), {
	                    can_open: l,
	                    can_close: a,
	                    delims: o
	                }
	            }
	            t.exports = function(e, t) {
	                var r, s, o, i, l, a, c, u = e.posMax,
	                    p = e.pos,
	                    h = e.src.charCodeAt(p);
	                if (95 !== h && 42 !== h) return !1;
	                if (t) return !1;
	                if (c = n(e, p), r = c.delims, !c.can_open) return e.pos += r, t || (e.pending += e.src.slice(p, e.pos)), !0;
	                if (e.level >= e.options.maxNesting) return !1;
	                for (e.pos = p + r, a = [r]; e.pos < u;)
	                    if (e.src.charCodeAt(e.pos) !== h) e.parser.skipToken(e);
	                    else {
	                        if (c = n(e, e.pos), s = c.delims, c.can_close) {
	                            for (i = a.pop(), l = s; i !== l;) {
	                                if (i > l) {
	                                    a.push(i - l);
	                                    break
	                                }
	                                if (l -= i, 0 === a.length) break;
	                                e.pos += i, i = a.pop()
	                            }
	                            if (0 === a.length) {
	                                r = i, o = !0;
	                                break
	                            }
	                            e.pos += s;
	                            continue
	                        }
	                        c.can_open && a.push(s), e.pos += s
	                    }
	                return o ? (e.posMax = e.pos, e.pos = p + r, t || ((2 === r || 3 === r) && e.push({
	                    type: "strong_open",
	                    level: e.level++
	                }), (1 === r || 3 === r) && e.push({
	                    type: "em_open",
	                    level: e.level++
	                }), e.parser.tokenize(e), (1 === r || 3 === r) && e.push({
	                    type: "em_close",
	                    level: --e.level
	                }), (2 === r || 3 === r) && e.push({
	                    type: "strong_close",
	                    level: --e.level
	                })), e.pos = e.posMax + r, e.posMax = u, !0) : (e.pos = p, !1)
	            }
	        }, {}],
	        46: [function(e, t) {
	            "use strict";
	            var r = e("../common/entities"),
	                n = e("../common/utils").has,
	                s = e("../common/utils").isValidEntityCode,
	                o = e("../common/utils").fromCodePoint,
	                i = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
	                l = /^&([a-z][a-z0-9]{1,31});/i;
	            t.exports = function(e, t) {
	                var a, c, u, p = e.pos,
	                    h = e.posMax;
	                if (38 !== e.src.charCodeAt(p)) return !1;
	                if (h > p + 1)
	                    if (a = e.src.charCodeAt(p + 1), 35 === a) {
	                        if (u = e.src.slice(p).match(i)) return t || (c = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), e.pending += o(s(c) ? c : 65533)), e.pos += u[0].length, !0
	                    } else if (u = e.src.slice(p).match(l), u && n(r, u[1])) return t || (e.pending += r[u[1]]), e.pos += u[0].length, !0;
	                return t || (e.pending += "&"), e.pos++, !0
	            }
	        }, {
	            "../common/entities": 1,
	            "../common/utils": 5
	        }],
	        47: [function(e, t) {
	            "use strict";
	            for (var r = [], n = 0; 256 > n; n++) r.push(0);
	            "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
	                r[e.charCodeAt(0)] = 1
	            }), t.exports = function(e, t) {
	                var n, s = e.pos,
	                    o = e.posMax;
	                if (92 !== e.src.charCodeAt(s)) return !1;
	                if (s++, o > s) {
	                    if (n = e.src.charCodeAt(s), 256 > n && 0 !== r[n]) return t || (e.pending += e.src[s]), e.pos += 2, !0;
	                    if (10 === n) {
	                        for (t || e.push({
	                                type: "hardbreak",
	                                level: e.level
	                            }), s++; o > s && 32 === e.src.charCodeAt(s);) s++;
	                        return e.pos = s, !0
	                    }
	                }
	                return t || (e.pending += "\\"), e.pos++, !0
	            }
	        }, {}],
	        48: [function(e, t) {
	            "use strict";
	            var r = e("../helpers/parse_link_label");
	            t.exports = function(e, t) {
	                var n, s, o, i, l = e.posMax,
	                    a = e.pos;
	                return a + 2 >= l ? !1 : 94 !== e.src.charCodeAt(a) ? !1 : 91 !== e.src.charCodeAt(a + 1) ? !1 : e.level >= e.options.maxNesting ? !1 : (n = a + 2, s = r(e, a + 1), 0 > s ? !1 : (t || (e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.list || (e.env.footnotes.list = []), o = e.env.footnotes.list.length, e.pos = n, e.posMax = s, e.push({
	                    type: "footnote_ref",
	                    id: o,
	                    level: e.level
	                }), e.linkLevel++, i = e.tokens.length, e.parser.tokenize(e), e.env.footnotes.list[o] = {
	                    tokens: e.tokens.splice(i)
	                }, e.linkLevel--), e.pos = s + 1, e.posMax = l, !0))
	            }
	        }, {
	            "../helpers/parse_link_label": 12
	        }],
	        49: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s, o, i = e.posMax,
	                    l = e.pos;
	                if (l + 3 > i) return !1;
	                if (!e.env.footnotes || !e.env.footnotes.refs) return !1;
	                if (91 !== e.src.charCodeAt(l)) return !1;
	                if (94 !== e.src.charCodeAt(l + 1)) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                for (n = l + 2; i > n; n++) {
	                    if (32 === e.src.charCodeAt(n)) return !1;
	                    if (10 === e.src.charCodeAt(n)) return !1;
	                    if (93 === e.src.charCodeAt(n)) break
	                }
	                return n === l + 2 ? !1 : n >= i ? !1 : (n++, r = e.src.slice(l + 2, n - 1), "undefined" == typeof e.env.footnotes.refs[":" + r] ? !1 : (t || (e.env.footnotes.list || (e.env.footnotes.list = []), e.env.footnotes.refs[":" + r] < 0 ? (s = e.env.footnotes.list.length, e.env.footnotes.list[s] = {
	                    label: r,
	                    count: 0
	                }, e.env.footnotes.refs[":" + r] = s) : s = e.env.footnotes.refs[":" + r], o = e.env.footnotes.list[s].count, e.env.footnotes.list[s].count++, e.push({
	                    type: "footnote_ref",
	                    id: s,
	                    subId: o,
	                    level: e.level
	                })), e.pos = n, e.posMax = i, !0))
	            }
	        }, {}],
	        50: [function(e, t) {
	            "use strict";

	            function r(e) {
	                var t = 32 | e;
	                return t >= 97 && 122 >= t
	            }
	            var n = e("../common/html_re").HTML_TAG_RE;
	            t.exports = function(e, t) {
	                var s, o, i, l = e.pos;
	                return e.options.html ? (i = e.posMax, 60 !== e.src.charCodeAt(l) || l + 2 >= i ? !1 : (s = e.src.charCodeAt(l + 1), (33 === s || 63 === s || 47 === s || r(s)) && (o = e.src.slice(l).match(n)) ? (t || e.push({
	                    type: "htmltag",
	                    content: e.src.slice(l, l + o[0].length),
	                    level: e.level
	                }), e.pos += o[0].length, !0) : !1)) : !1
	            }
	        }, {
	            "../common/html_re": 3
	        }],
	        51: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s, o, i, l = e.posMax,
	                    a = e.pos;
	                if (43 !== e.src.charCodeAt(a)) return !1;
	                if (t) return !1;
	                if (a + 4 >= l) return !1;
	                if (43 !== e.src.charCodeAt(a + 1)) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 43 === o) return !1;
	                if (43 === i) return !1;
	                if (32 === i || 10 === i) return !1;
	                for (n = a + 2; l > n && 43 === e.src.charCodeAt(n);) n++;
	                if (n !== a + 2) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;
	                for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
	                    if (43 === e.src.charCodeAt(e.pos) && 43 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 43 !== i && 43 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
	                        r = !0;
	                        break
	                    }
	                    e.parser.skipToken(e)
	                }
	                return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
	                    type: "ins_open",
	                    level: e.level++
	                }), e.parser.tokenize(e), e.push({
	                    type: "ins_close",
	                    level: --e.level
	                })), e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1)
	            }
	        }, {}],
	        52: [function(e, t) {
	            "use strict";
	            var r = e("../helpers/parse_link_label"),
	                n = e("../helpers/parse_link_destination"),
	                s = e("../helpers/parse_link_title"),
	                o = e("../helpers/normalize_reference");
	            t.exports = function(e, t) {
	                var i, l, a, c, u, p, h, f, d = !1,
	                    g = e.pos,
	                    m = e.posMax,
	                    b = e.pos,
	                    v = e.src.charCodeAt(b);
	                if (33 === v && (d = !0, v = e.src.charCodeAt(++b)), 91 !== v) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                if (i = b + 1, l = r(e, b), 0 > l) return !1;
	                if (p = l + 1, m > p && 40 === e.src.charCodeAt(p)) {
	                    for (p++; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);
	                    if (p >= m) return !1;
	                    for (b = p, n(e, p) ? (c = e.linkContent, p = e.pos) : c = "", b = p; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);
	                    if (m > p && b !== p && s(e, p))
	                        for (u = e.linkContent, p = e.pos; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);
	                    else u = "";
	                    if (p >= m || 41 !== e.src.charCodeAt(p)) return e.pos = g, !1;
	                    p++
	                } else {
	                    if (e.linkLevel > 0) return !1;
	                    for (; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);
	                    if (m > p && 91 === e.src.charCodeAt(p) && (b = p + 1, p = r(e, p), p >= 0 ? a = e.src.slice(b, p++) : p = b - 1), a || (a = e.src.slice(i, l)), h = e.env.references[o(a)], !h) return e.pos = g, !1;
	                    c = h.href, u = h.title
	                }
	                return t || (e.pos = i, e.posMax = l, d ? e.push({
	                    type: "image",
	                    src: c,
	                    title: u,
	                    alt: e.src.substr(i, l - i),
	                    level: e.level
	                }) : (e.push({
	                    type: "link_open",
	                    href: c,
	                    title: u,
	                    level: e.level++
	                }), e.linkLevel++, e.parser.tokenize(e), e.linkLevel--, e.push({
	                    type: "link_close",
	                    level: --e.level
	                }))), e.pos = p, e.posMax = m, !0
	            }
	        }, {
	            "../helpers/normalize_reference": 10,
	            "../helpers/parse_link_destination": 11,
	            "../helpers/parse_link_label": 12,
	            "../helpers/parse_link_title": 13
	        }],
	        53: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s, o, i, l = e.posMax,
	                    a = e.pos;
	                if (61 !== e.src.charCodeAt(a)) return !1;
	                if (t) return !1;
	                if (a + 4 >= l) return !1;
	                if (61 !== e.src.charCodeAt(a + 1)) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 61 === o) return !1;
	                if (61 === i) return !1;
	                if (32 === i || 10 === i) return !1;
	                for (n = a + 2; l > n && 61 === e.src.charCodeAt(n);) n++;
	                if (n !== a + 2) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;
	                for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
	                    if (61 === e.src.charCodeAt(e.pos) && 61 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 61 !== i && 61 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
	                        r = !0;
	                        break
	                    }
	                    e.parser.skipToken(e)
	                }
	                return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
	                    type: "mark_open",
	                    level: e.level++
	                }), e.parser.tokenize(e), e.push({
	                    type: "mark_close",
	                    level: --e.level
	                })), e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1)
	            }
	        }, {}],
	        54: [function(e, t) {
	            "use strict";
	            t.exports = function(e, t) {
	                var r, n, s = e.pos;
	                if (10 !== e.src.charCodeAt(s)) return !1;
	                for (r = e.pending.length - 1, n = e.posMax, t || (r >= 0 && 32 === e.pending.charCodeAt(r) ? r >= 1 && 32 === e.pending.charCodeAt(r - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push({
	                        type: "hardbreak",
	                        level: e.level
	                    })) : (e.pending = e.pending.slice(0, -1), e.push({
	                        type: "softbreak",
	                        level: e.level
	                    })) : e.push({
	                        type: "softbreak",
	                        level: e.level
	                    })), s++; n > s && 32 === e.src.charCodeAt(s);) s++;
	                return e.pos = s, !0
	            }
	        }, {}],
	        55: [function(e, t) {
	            "use strict";

	            function r(e, t, r, n, s) {
	                this.src = e, this.env = n, this.options = r, this.parser = t, this.tokens = s, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0
	            }
	            r.prototype.pushPending = function() {
	                this.tokens.push({
	                    type: "text",
	                    content: this.pending,
	                    level: this.pendingLevel
	                }), this.pending = ""
	            }, r.prototype.push = function(e) {
	                this.pending && this.pushPending(), this.tokens.push(e), this.pendingLevel = this.level
	            }, r.prototype.cacheSet = function(e, t) {
	                for (var r = this.cache.length; e >= r; r++) this.cache.push(0);
	                this.cache[e] = t
	            }, r.prototype.cacheGet = function(e) {
	                return e < this.cache.length ? this.cache[e] : 0
	            }, t.exports = r
	        }, {}],
	        56: [function(e, t) {
	            "use strict";
	            var r = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	            t.exports = function(e, t) {
	                var n, s, o = e.posMax,
	                    i = e.pos;
	                if (126 !== e.src.charCodeAt(i)) return !1;
	                if (t) return !1;
	                if (i + 2 >= o) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                for (e.pos = i + 1; e.pos < o;) {
	                    if (126 === e.src.charCodeAt(e.pos)) {
	                        n = !0;
	                        break
	                    }
	                    e.parser.skipToken(e)
	                }
	                return n && i + 1 !== e.pos ? (s = e.src.slice(i + 1, e.pos), s.match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = i, !1) : (e.posMax = e.pos, e.pos = i + 1, t || e.push({
	                    type: "sub",
	                    level: e.level,
	                    content: s.replace(r, "$1")
	                }), e.pos = e.posMax + 1, e.posMax = o, !0)) : (e.pos = i, !1)
	            }
	        }, {}],
	        57: [function(e, t) {
	            "use strict";
	            var r = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	            t.exports = function(e, t) {
	                var n, s, o = e.posMax,
	                    i = e.pos;
	                if (94 !== e.src.charCodeAt(i)) return !1;
	                if (t) return !1;
	                if (i + 2 >= o) return !1;
	                if (e.level >= e.options.maxNesting) return !1;
	                for (e.pos = i + 1; e.pos < o;) {
	                    if (94 === e.src.charCodeAt(e.pos)) {
	                        n = !0;
	                        break
	                    }
	                    e.parser.skipToken(e)
	                }
	                return n && i + 1 !== e.pos ? (s = e.src.slice(i + 1, e.pos), s.match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = i, !1) : (e.posMax = e.pos, e.pos = i + 1, t || e.push({
	                    type: "sup",
	                    level: e.level,
	                    content: s.replace(r, "$1")
	                }), e.pos = e.posMax + 1, e.posMax = o, !0)) : (e.pos = i, !1)
	            }
	        }, {}],
	        58: [function(e, t) {
	            "use strict";

	            function r(e) {
	                switch (e) {
	                    case 10:
	                    case 92:
	                    case 96:
	                    case 42:
	                    case 95:
	                    case 94:
	                    case 91:
	                    case 93:
	                    case 33:
	                    case 38:
	                    case 60:
	                    case 62:
	                    case 123:
	                    case 125:
	                    case 36:
	                    case 37:
	                    case 64:
	                    case 126:
	                    case 43:
	                    case 61:
	                    case 58:
	                        return !0;
	                    default:
	                        return !1
	                }
	            }
	            t.exports = function(e, t) {
	                for (var n = e.pos; n < e.posMax && !r(e.src.charCodeAt(n));) n++;
	                return n === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0)
	            }
	        }, {}],
	        59: [function(t, r, n) {
	            ! function(t, s) {
	                "function" == typeof e && e.amd ? e([], function() {
	                    return t.returnExportsGlobal = s()
	                }) : "object" == typeof n ? r.exports = s() : t.Autolinker = s()
	            }(this, function() {
	                var e = function(t) {
	                    e.Util.assign(this, t), this.matchValidator = new e.MatchValidator
	                };
	                return e.prototype = {
	                    constructor: e,
	                    urls: !0,
	                    email: !0,
	                    twitter: !0,
	                    newWindow: !0,
	                    stripPrefix: !0,
	                    className: "",
	                    htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,
	                    matcherRegex: function() {
	                        var e = /(^|[^\w])@(\w{1,15})/,
	                            t = /(?:[\-;:&=\+\$,\w\.]+@)/,
	                            r = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
	                            n = /(?:www\.)/,
	                            s = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
	                            o = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
	                            i = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
	                        return new RegExp(["(", e.source, ")", "|", "(", t.source, s.source, o.source, ")", "|", "(", "(?:", "(", r.source, s.source, ")", "|", "(?:", "(.?//)?", n.source, s.source, ")", "|", "(?:", "(.?//)?", s.source, o.source, ")", ")", "(?:" + i.source + ")?", ")"].join(""), "gi")
	                    }(),
	                    charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
	                    link: function(t) {
	                        var r = this,
	                            n = this.getHtmlParser(),
	                            s = this.htmlCharacterEntitiesRegex,
	                            o = 0,
	                            i = [];
	                        return n.parse(t, {
	                            processHtmlNode: function(e, t, r) {
	                                "a" === t && (r ? o = Math.max(o - 1, 0) : o++), i.push(e)
	                            },
	                            processTextNode: function(t) {
	                                if (0 === o)
	                                    for (var n = e.Util.splitAndCapture(t, s), l = 0, a = n.length; a > l; l++) {
	                                        var c = n[l],
	                                            u = r.processTextNode(c);
	                                        i.push(u)
	                                    } else i.push(t)
	                            }
	                        }), i.join("")
	                    },
	                    getHtmlParser: function() {
	                        var t = this.htmlParser;
	                        return t || (t = this.htmlParser = new e.HtmlParser), t
	                    },
	                    getTagBuilder: function() {
	                        var t = this.tagBuilder;
	                        return t || (t = this.tagBuilder = new e.AnchorTagBuilder({
	                            newWindow: this.newWindow,
	                            truncate: this.truncate,
	                            className: this.className
	                        })), t
	                    },
	                    processTextNode: function(e) {
	                        var t = this;
	                        return e.replace(this.matcherRegex, function(e, r, n, s, o, i, l, a, c) {
	                            var u = t.processCandidateMatch(e, r, n, s, o, i, l, a, c);
	                            if (u) {
	                                var p = t.createMatchReturnVal(u.match, u.matchStr);
	                                return u.prefixStr + p + u.suffixStr
	                            }
	                            return e
	                        })
	                    },
	                    processCandidateMatch: function(t, r, n, s, o, i, l, a, c) {
	                        var u, p = a || c,
	                            h = "",
	                            f = "";
	                        if (r && !this.twitter || o && !this.email || i && !this.urls || !this.matchValidator.isValidMatch(i, l, p)) return null;
	                        if (this.matchHasUnbalancedClosingParen(t) && (t = t.substr(0, t.length - 1), f = ")"), o) u = new e.match.Email({
	                            matchedText: t,
	                            email: o
	                        });
	                        else if (r) n && (h = n, t = t.slice(1)), u = new e.match.Twitter({
	                            matchedText: t,
	                            twitterHandle: s
	                        });
	                        else {
	                            if (p) {
	                                var d = p.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
	                                d && (h = d, t = t.slice(1))
	                            }
	                            u = new e.match.Url({
	                                matchedText: t,
	                                url: t,
	                                protocolUrlMatch: !!l,
	                                protocolRelativeMatch: !!p,
	                                stripPrefix: this.stripPrefix
	                            })
	                        }
	                        return {
	                            prefixStr: h,
	                            suffixStr: f,
	                            matchStr: t,
	                            match: u
	                        }
	                    },
	                    matchHasUnbalancedClosingParen: function(e) {
	                        var t = e.charAt(e.length - 1);
	                        if (")" === t) {
	                            var r = e.match(/\(/g),
	                                n = e.match(/\)/g),
	                                s = r && r.length || 0,
	                                o = n && n.length || 0;
	                            if (o > s) return !0
	                        }
	                        return !1
	                    },
	                    createMatchReturnVal: function(t, r) {
	                        var n;
	                        if (this.replaceFn && (n = this.replaceFn.call(this, this, t)), "string" == typeof n) return n;
	                        if (n === !1) return r;
	                        if (n instanceof e.HtmlTag) return n.toString();
	                        var s = this.getTagBuilder(),
	                            o = s.build(t);
	                        return o.toString()
	                    }
	                }, e.link = function(t, r) {
	                    var n = new e(r);
	                    return n.link(t)
	                }, e.match = {}, e.Util = {
	                    abstractMethod: function() {
	                        throw "abstract"
	                    },
	                    assign: function(e, t) {
	                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
	                        return e
	                    },
	                    extend: function(t, r) {
	                        var n = t.prototype,
	                            s = function() {};
	                        s.prototype = n;
	                        var o;
	                        o = r.hasOwnProperty("constructor") ? r.constructor : function() {
	                            n.constructor.apply(this, arguments)
	                        };
	                        var i = o.prototype = new s;
	                        return i.constructor = o, i.superclass = n, delete r.constructor, e.Util.assign(i, r), o
	                    },
	                    ellipsis: function(e, t, r) {
	                        return e.length > t && (r = null == r ? ".." : r, e = e.substring(0, t - r.length) + r), e
	                    },
	                    indexOf: function(e, t) {
	                        if (Array.prototype.indexOf) return e.indexOf(t);
	                        for (var r = 0, n = e.length; n > r; r++)
	                            if (e[r] === t) return r;
	                        return -1
	                    },
	                    splitAndCapture: function(e, t) {
	                        if (!t.global) throw new Error("`splitRegex` must have the 'g' flag set");
	                        for (var r, n = [], s = 0; r = t.exec(e);) n.push(e.substring(s, r.index)), n.push(r[0]), s = r.index + r[0].length;
	                        return n.push(e.substring(s)), n
	                    }
	                }, e.HtmlParser = e.Util.extend(Object, {
	                    htmlRegex: function() {
	                        var e = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
	                            t = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
	                            r = /(?:".*?"|'.*?'|[^'"=<>`\s]+)/,
	                            n = t.source + "(?:\\s*=\\s*" + r.source + ")?";
	                        return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", n, "|", r.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(" + e.source + ")", "(?:", "\\s+", n, ")*", "\\s*/?", ">", ")"].join(""), "gi")
	                    }(),
	                    parse: function(e, t) {
	                        t = t || {};
	                        for (var r, n = t.processHtmlNode || function() {}, s = t.processTextNode || function() {}, o = this.htmlRegex, i = 0; null !== (r = o.exec(e));) {
	                            var l = r[0],
	                                a = r[1] || r[3],
	                                c = !!r[2],
	                                u = e.substring(i, r.index);
	                            u && s(u), n(l, a.toLowerCase(), c), i = r.index + l.length
	                        }
	                        if (i < e.length) {
	                            var p = e.substring(i);
	                            p && s(p)
	                        }
	                    }
	                }), e.HtmlTag = e.Util.extend(Object, {
	                    whitespaceRegex: /\s+/,
	                    constructor: function(t) {
	                        e.Util.assign(this, t), this.innerHtml = this.innerHtml || this.innerHTML
	                    },
	                    setTagName: function(e) {
	                        return this.tagName = e, this
	                    },
	                    getTagName: function() {
	                        return this.tagName || ""
	                    },
	                    setAttr: function(e, t) {
	                        var r = this.getAttrs();
	                        return r[e] = t, this
	                    },
	                    getAttr: function(e) {
	                        return this.getAttrs()[e]
	                    },
	                    setAttrs: function(t) {
	                        var r = this.getAttrs();
	                        return e.Util.assign(r, t), this
	                    },
	                    getAttrs: function() {
	                        return this.attrs || (this.attrs = {})
	                    },
	                    setClass: function(e) {
	                        return this.setAttr("class", e)
	                    },
	                    addClass: function(t) {
	                        for (var r, n = this.getClass(), s = this.whitespaceRegex, o = e.Util.indexOf, i = n ? n.split(s) : [], l = t.split(s); r = l.shift();) - 1 === o(i, r) && i.push(r);
	                        return this.getAttrs()["class"] = i.join(" "), this
	                    },
	                    removeClass: function(t) {
	                        for (var r, n = this.getClass(), s = this.whitespaceRegex, o = e.Util.indexOf, i = n ? n.split(s) : [], l = t.split(s); i.length && (r = l.shift());) {
	                            var a = o(i, r); - 1 !== a && i.splice(a, 1)
	                        }
	                        return this.getAttrs()["class"] = i.join(" "), this
	                    },
	                    getClass: function() {
	                        return this.getAttrs()["class"] || ""
	                    },
	                    hasClass: function(e) {
	                        return -1 !== (" " + this.getClass() + " ").indexOf(" " + e + " ")
	                    },
	                    setInnerHtml: function(e) {
	                        return this.innerHtml = e, this
	                    },
	                    getInnerHtml: function() {
	                        return this.innerHtml || ""
	                    },
	                    toString: function() {
	                        var e = this.getTagName(),
	                            t = this.buildAttrsStr();
	                        return t = t ? " " + t : "", ["<", e, t, ">", this.getInnerHtml(), "</", e, ">"].join("")
	                    },
	                    buildAttrsStr: function() {
	                        if (!this.attrs) return "";
	                        var e = this.getAttrs(),
	                            t = [];
	                        for (var r in e) e.hasOwnProperty(r) && t.push(r + '="' + e[r] + '"');
	                        return t.join(" ")
	                    }
	                }), e.MatchValidator = e.Util.extend(Object, {
	                    invalidProtocolRelMatchRegex: /^[\w]\/\//,
	                    hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
	                    uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
	                    hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
	                    isValidMatch: function(e, t, r) {
	                        return t && !this.isValidUriScheme(t) || this.urlMatchDoesNotHaveProtocolOrDot(e, t) || this.urlMatchDoesNotHaveAtLeastOneWordChar(e, t) || this.isInvalidProtocolRelativeMatch(r) ? !1 : !0
	                    },
	                    isValidUriScheme: function(e) {
	                        var t = e.match(this.uriSchemeRegex)[0];
	                        return "javascript:" !== t && "vbscript:" !== t
	                    },
	                    urlMatchDoesNotHaveProtocolOrDot: function(e, t) {
	                        return !(!e || t && this.hasFullProtocolRegex.test(t) || -1 !== e.indexOf("."))
	                    },
	                    urlMatchDoesNotHaveAtLeastOneWordChar: function(e, t) {
	                        return e && t ? !this.hasWordCharAfterProtocolRegex.test(e) : !1
	                    },
	                    isInvalidProtocolRelativeMatch: function(e) {
	                        return !!e && this.invalidProtocolRelMatchRegex.test(e)
	                    }
	                }), e.AnchorTagBuilder = e.Util.extend(Object, {
	                    constructor: function(t) {
	                        e.Util.assign(this, t)
	                    },
	                    build: function(t) {
	                        var r = new e.HtmlTag({
	                            tagName: "a",
	                            attrs: this.createAttrs(t.getType(), t.getAnchorHref()),
	                            innerHtml: this.processAnchorText(t.getAnchorText())
	                        });
	                        return r
	                    },
	                    createAttrs: function(e, t) {
	                        var r = {
	                                href: t
	                            },
	                            n = this.createCssClass(e);
	                        return n && (r["class"] = n), this.newWindow && (r.target = "_blank"), r
	                    },
	                    createCssClass: function(e) {
	                        var t = this.className;
	                        return t ? t + " " + t + "-" + e : ""
	                    },
	                    processAnchorText: function(e) {
	                        return e = this.doTruncate(e)
	                    },
	                    doTruncate: function(t) {
	                        return e.Util.ellipsis(t, this.truncate || Number.POSITIVE_INFINITY)
	                    }
	                }), e.match.Match = e.Util.extend(Object, {
	                    constructor: function(t) {
	                        e.Util.assign(this, t)
	                    },
	                    getType: e.Util.abstractMethod,
	                    getMatchedText: function() {
	                        return this.matchedText
	                    },
	                    getAnchorHref: e.Util.abstractMethod,
	                    getAnchorText: e.Util.abstractMethod
	                }), e.match.Email = e.Util.extend(e.match.Match, {
	                    getType: function() {
	                        return "email"
	                    },
	                    getEmail: function() {
	                        return this.email
	                    },
	                    getAnchorHref: function() {
	                        return "mailto:" + this.email
	                    },
	                    getAnchorText: function() {
	                        return this.email
	                    }
	                }), e.match.Twitter = e.Util.extend(e.match.Match, {
	                    getType: function() {
	                        return "twitter"
	                    },
	                    getTwitterHandle: function() {
	                        return this.twitterHandle
	                    },
	                    getAnchorHref: function() {
	                        return "https://twitter.com/" + this.twitterHandle
	                    },
	                    getAnchorText: function() {
	                        return "@" + this.twitterHandle
	                    }
	                }), e.match.Url = e.Util.extend(e.match.Match, {
	                    urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
	                    protocolRelativeRegex: /^\/\//,
	                    protocolPrepended: !1,
	                    getType: function() {
	                        return "url"
	                    },
	                    getUrl: function() {
	                        var e = this.url;
	                        return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (e = this.url = "http://" + e, this.protocolPrepended = !0), e
	                    },
	                    getAnchorHref: function() {
	                        var e = this.getUrl();
	                        return e.replace(/&amp;/g, "&")
	                    },
	                    getAnchorText: function() {
	                        var e = this.getUrl();
	                        return this.protocolRelativeMatch && (e = this.stripProtocolRelativePrefix(e)), this.stripPrefix && (e = this.stripUrlPrefix(e)), e = this.removeTrailingSlash(e)
	                    },
	                    stripUrlPrefix: function(e) {
	                        return e.replace(this.urlPrefixRegex, "")
	                    },
	                    stripProtocolRelativePrefix: function(e) {
	                        return e.replace(this.protocolRelativeRegex, "")
	                    },
	                    removeTrailingSlash: function(e) {
	                        return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e
	                    }
	                }), e
	            })
	        }, {}],
	        "/": [function(e, t) {
	            "use strict";
	            t.exports = e("./lib/")
	        }, {
	            "./lib/": 14
	        }]
	    }, {}, [])("/")
	});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var hljs = __webpack_require__(70);

	hljs.registerLanguage('javascript', __webpack_require__(71));

	module.exports = hljs;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/

	(function(factory) {

	  // Setup highlight.js for different environments. First is Node.js or
	  // CommonJS.
	  if(true) {
	    factory(exports);
	  } else {
	    // Export hljs globally even when using AMD for cases when this script
	    // is loaded with others that may still expect a global hljs.
	    window.hljs = factory({});

	    // Finally register the global hljs with AMD.
	    if(typeof define === 'function' && define.amd) {
	      define('hljs', [], function() {
	        return window.hljs;
	      });
	    }
	  }

	}(function(hljs) {

	  /* Utility functions */

	  function escape(value) {
	    return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
	  }

	  function tag(node) {
	    return node.nodeName.toLowerCase();
	  }

	  function testRe(re, lexeme) {
	    var match = re && re.exec(lexeme);
	    return match && match.index == 0;
	  }

	  function isNotHighlighted(language) {
	    return /no-?highlight|plain|text/.test(language);
	  }

	  function blockLanguage(block) {
	    var i, match, length,
	        classes = block.className + ' ';

	    classes += block.parentNode ? block.parentNode.className : '';

	    // language-* takes precedence over non-prefixed class names and
	    match = /\blang(?:uage)?-([\w-]+)\b/.exec(classes);
	    if (match) {
	      return getLanguage(match[1]) ? match[1] : 'no-highlight';
	    }

	    classes = classes.split(/\s+/);
	    for(i = 0, length = classes.length; i < length; i++) {
	      if(getLanguage(classes[i]) || isNotHighlighted(classes[i])) {
	        return classes[i];
	      }
	    }

	  }

	  function inherit(parent, obj) {
	    var result = {}, key;
	    for (key in parent)
	      result[key] = parent[key];
	    if (obj)
	      for (key in obj)
	        result[key] = obj[key];
	    return result;
	  }

	  /* Stream merging */

	  function nodeStream(node) {
	    var result = [];
	    (function _nodeStream(node, offset) {
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (child.nodeType == 3)
	          offset += child.nodeValue.length;
	        else if (child.nodeType == 1) {
	          result.push({
	            event: 'start',
	            offset: offset,
	            node: child
	          });
	          offset = _nodeStream(child, offset);
	          // Prevent void elements from having an end tag that would actually
	          // double them in the output. There are more void elements in HTML
	          // but we list only those realistically expected in code display.
	          if (!tag(child).match(/br|hr|img|input/)) {
	            result.push({
	              event: 'stop',
	              offset: offset,
	              node: child
	            });
	          }
	        }
	      }
	      return offset;
	    })(node, 0);
	    return result;
	  }

	  function mergeStreams(original, highlighted, value) {
	    var processed = 0;
	    var result = '';
	    var nodeStack = [];

	    function selectStream() {
	      if (!original.length || !highlighted.length) {
	        return original.length ? original : highlighted;
	      }
	      if (original[0].offset != highlighted[0].offset) {
	        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
	      }

	      /*
	      To avoid starting the stream just before it should stop the order is
	      ensured that original always starts first and closes last:

	      if (event1 == 'start' && event2 == 'start')
	        return original;
	      if (event1 == 'start' && event2 == 'stop')
	        return highlighted;
	      if (event1 == 'stop' && event2 == 'start')
	        return original;
	      if (event1 == 'stop' && event2 == 'stop')
	        return highlighted;

	      ... which is collapsed to:
	      */
	      return highlighted[0].event == 'start' ? original : highlighted;
	    }

	    function open(node) {
	      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
	      result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';
	    }

	    function close(node) {
	      result += '</' + tag(node) + '>';
	    }

	    function render(event) {
	      (event.event == 'start' ? open : close)(event.node);
	    }

	    while (original.length || highlighted.length) {
	      var stream = selectStream();
	      result += escape(value.substr(processed, stream[0].offset - processed));
	      processed = stream[0].offset;
	      if (stream == original) {
	        /*
	        On any opening or closing tag of the original markup we first close
	        the entire highlighted node stack, then render the original tag along
	        with all the following original tags at the same offset and then
	        reopen all the tags on the highlighted stack.
	        */
	        nodeStack.reverse().forEach(close);
	        do {
	          render(stream.splice(0, 1)[0]);
	          stream = selectStream();
	        } while (stream == original && stream.length && stream[0].offset == processed);
	        nodeStack.reverse().forEach(open);
	      } else {
	        if (stream[0].event == 'start') {
	          nodeStack.push(stream[0].node);
	        } else {
	          nodeStack.pop();
	        }
	        render(stream.splice(0, 1)[0]);
	      }
	    }
	    return result + escape(value.substr(processed));
	  }

	  /* Initialization */

	  function compileLanguage(language) {

	    function reStr(re) {
	        return (re && re.source) || re;
	    }

	    function langRe(value, global) {
	      return new RegExp(
	        reStr(value),
	        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	      );
	    }

	    function compileMode(mode, parent) {
	      if (mode.compiled)
	        return;
	      mode.compiled = true;

	      mode.keywords = mode.keywords || mode.beginKeywords;
	      if (mode.keywords) {
	        var compiled_keywords = {};

	        var flatten = function(className, str) {
	          if (language.case_insensitive) {
	            str = str.toLowerCase();
	          }
	          str.split(' ').forEach(function(kw) {
	            var pair = kw.split('|');
	            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          });
	        };

	        if (typeof mode.keywords == 'string') { // string
	          flatten('keyword', mode.keywords);
	        } else {
	          Object.keys(mode.keywords).forEach(function (className) {
	            flatten(className, mode.keywords[className]);
	          });
	        }
	        mode.keywords = compiled_keywords;
	      }
	      mode.lexemesRe = langRe(mode.lexemes || /\b\w+\b/, true);

	      if (parent) {
	        if (mode.beginKeywords) {
	          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
	        }
	        if (!mode.begin)
	          mode.begin = /\B|\b/;
	        mode.beginRe = langRe(mode.begin);
	        if (!mode.end && !mode.endsWithParent)
	          mode.end = /\B|\b/;
	        if (mode.end)
	          mode.endRe = langRe(mode.end);
	        mode.terminator_end = reStr(mode.end) || '';
	        if (mode.endsWithParent && parent.terminator_end)
	          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
	      }
	      if (mode.illegal)
	        mode.illegalRe = langRe(mode.illegal);
	      if (mode.relevance === undefined)
	        mode.relevance = 1;
	      if (!mode.contains) {
	        mode.contains = [];
	      }
	      var expanded_contains = [];
	      mode.contains.forEach(function(c) {
	        if (c.variants) {
	          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
	        } else {
	          expanded_contains.push(c == 'self' ? mode : c);
	        }
	      });
	      mode.contains = expanded_contains;
	      mode.contains.forEach(function(c) {compileMode(c, mode);});

	      if (mode.starts) {
	        compileMode(mode.starts, parent);
	      }

	      var terminators =
	        mode.contains.map(function(c) {
	          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
	        })
	        .concat([mode.terminator_end, mode.illegal])
	        .map(reStr)
	        .filter(Boolean);
	      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
	    }

	    compileMode(language);
	  }

	  /*
	  Core highlighting function. Accepts a language name, or an alias, and a
	  string with the code to highlight. Returns an object with the following
	  properties:

	  - relevance (int)
	  - value (an HTML string with highlighting markup)

	  */
	  function highlight(name, value, ignore_illegals, continuation) {

	    function subMode(lexeme, mode) {
	      for (var i = 0; i < mode.contains.length; i++) {
	        if (testRe(mode.contains[i].beginRe, lexeme)) {
	          return mode.contains[i];
	        }
	      }
	    }

	    function endOfMode(mode, lexeme) {
	      if (testRe(mode.endRe, lexeme)) {
	        while (mode.endsParent && mode.parent) {
	          mode = mode.parent;
	        }
	        return mode;
	      }
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, lexeme);
	      }
	    }

	    function isIllegal(lexeme, mode) {
	      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
	    }

	    function keywordMatch(mode, match) {
	      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
	    }

	    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
	      var classPrefix = noPrefix ? '' : options.classPrefix,
	          openSpan    = '<span class="' + classPrefix,
	          closeSpan   = leaveOpen ? '' : '</span>';

	      openSpan += classname + '">';

	      return openSpan + insideSpan + closeSpan;
	    }

	    function processKeywords() {
	      if (!top.keywords)
	        return escape(mode_buffer);
	      var result = '';
	      var last_index = 0;
	      top.lexemesRe.lastIndex = 0;
	      var match = top.lexemesRe.exec(mode_buffer);
	      while (match) {
	        result += escape(mode_buffer.substr(last_index, match.index - last_index));
	        var keyword_match = keywordMatch(top, match);
	        if (keyword_match) {
	          relevance += keyword_match[1];
	          result += buildSpan(keyword_match[0], escape(match[0]));
	        } else {
	          result += escape(match[0]);
	        }
	        last_index = top.lexemesRe.lastIndex;
	        match = top.lexemesRe.exec(mode_buffer);
	      }
	      return result + escape(mode_buffer.substr(last_index));
	    }

	    function processSubLanguage() {
	      var explicit = typeof top.subLanguage == 'string';
	      if (explicit && !languages[top.subLanguage]) {
	        return escape(mode_buffer);
	      }

	      var result = explicit ?
	                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
	                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Usecase in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      if (explicit) {
	        continuations[top.subLanguage] = result.top;
	      }
	      return buildSpan(result.language, result.value, false, true);
	    }

	    function processBuffer() {
	      return top.subLanguage !== undefined ? processSubLanguage() : processKeywords();
	    }

	    function startNewMode(mode, lexeme) {
	      var markup = mode.className? buildSpan(mode.className, '', true): '';
	      if (mode.returnBegin) {
	        result += markup;
	        mode_buffer = '';
	      } else if (mode.excludeBegin) {
	        result += escape(lexeme) + markup;
	        mode_buffer = '';
	      } else {
	        result += markup;
	        mode_buffer = lexeme;
	      }
	      top = Object.create(mode, {parent: {value: top}});
	    }

	    function processLexeme(buffer, lexeme) {

	      mode_buffer += buffer;
	      if (lexeme === undefined) {
	        result += processBuffer();
	        return 0;
	      }

	      var new_mode = subMode(lexeme, top);
	      if (new_mode) {
	        result += processBuffer();
	        startNewMode(new_mode, lexeme);
	        return new_mode.returnBegin ? 0 : lexeme.length;
	      }

	      var end_mode = endOfMode(top, lexeme);
	      if (end_mode) {
	        var origin = top;
	        if (!(origin.returnEnd || origin.excludeEnd)) {
	          mode_buffer += lexeme;
	        }
	        result += processBuffer();
	        do {
	          if (top.className) {
	            result += '</span>';
	          }
	          relevance += top.relevance;
	          top = top.parent;
	        } while (top != end_mode.parent);
	        if (origin.excludeEnd) {
	          result += escape(lexeme);
	        }
	        mode_buffer = '';
	        if (end_mode.starts) {
	          startNewMode(end_mode.starts, '');
	        }
	        return origin.returnEnd ? 0 : lexeme.length;
	      }

	      if (isIllegal(lexeme, top))
	        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

	      /*
	      Parser should not reach this point as all types of lexemes should be caught
	      earlier, but if it does due to some bug make sure it advances at least one
	      character forward to prevent infinite looping.
	      */
	      mode_buffer += lexeme;
	      return lexeme.length || 1;
	    }

	    var language = getLanguage(name);
	    if (!language) {
	      throw new Error('Unknown language: "' + name + '"');
	    }

	    compileLanguage(language);
	    var top = continuation || language;
	    var continuations = {}; // keep continuations for sub-languages
	    var result = '', current;
	    for(current = top; current != language; current = current.parent) {
	      if (current.className) {
	        result = buildSpan(current.className, '', true) + result;
	      }
	    }
	    var mode_buffer = '';
	    var relevance = 0;
	    try {
	      var match, count, index = 0;
	      while (true) {
	        top.terminators.lastIndex = index;
	        match = top.terminators.exec(value);
	        if (!match)
	          break;
	        count = processLexeme(value.substr(index, match.index - index), match[0]);
	        index = match.index + count;
	      }
	      processLexeme(value.substr(index));
	      for(current = top; current.parent; current = current.parent) { // close dangling modes
	        if (current.className) {
	          result += '</span>';
	        }
	      }
	      return {
	        relevance: relevance,
	        value: result,
	        language: name,
	        top: top
	      };
	    } catch (e) {
	      if (e.message.indexOf('Illegal') != -1) {
	        return {
	          relevance: 0,
	          value: escape(value)
	        };
	      } else {
	        throw e;
	      }
	    }
	  }

	  /*
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:

	  - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)

	  */
	  function highlightAuto(text, languageSubset) {
	    languageSubset = languageSubset || options.languages || Object.keys(languages);
	    var result = {
	      relevance: 0,
	      value: escape(text)
	    };
	    var second_best = result;
	    languageSubset.forEach(function(name) {
	      if (!getLanguage(name)) {
	        return;
	      }
	      var current = highlight(name, text, false);
	      current.language = name;
	      if (current.relevance > second_best.relevance) {
	        second_best = current;
	      }
	      if (current.relevance > result.relevance) {
	        second_best = result;
	        result = current;
	      }
	    });
	    if (second_best.language) {
	      result.second_best = second_best;
	    }
	    return result;
	  }

	  /*
	  Post-processing of the highlighted markup:

	  - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers

	  */
	  function fixMarkup(value) {
	    if (options.tabReplace) {
	      value = value.replace(/^((<[^>]+>|\t)+)/gm, function(match, p1 /*..., offset, s*/) {
	        return p1.replace(/\t/g, options.tabReplace);
	      });
	    }
	    if (options.useBR) {
	      value = value.replace(/\n/g, '<br>');
	    }
	    return value;
	  }

	  function buildClassName(prevClassName, currentLang, resultLang) {
	    var language = currentLang ? aliases[currentLang] : resultLang,
	        result   = [prevClassName.trim()];

	    if (!prevClassName.match(/\bhljs\b/)) {
	      result.push('hljs');
	    }

	    if (prevClassName.indexOf(language) === -1) {
	      result.push(language);
	    }

	    return result.join(' ').trim();
	  }

	  /*
	  Applies highlighting to a DOM node containing code. Accepts a DOM node and
	  two optional parameters for fixMarkup.
	  */
	  function highlightBlock(block) {
	    var language = blockLanguage(block);
	    if (isNotHighlighted(language))
	        return;

	    var node;
	    if (options.useBR) {
	      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
	    } else {
	      node = block;
	    }
	    var text = node.textContent;
	    var result = language ? highlight(language, text, true) : highlightAuto(text);

	    var originalStream = nodeStream(node);
	    if (originalStream.length) {
	      var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      resultNode.innerHTML = result.value;
	      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	    }
	    result.value = fixMarkup(result.value);

	    block.innerHTML = result.value;
	    block.className = buildClassName(block.className, language, result.language);
	    block.result = {
	      language: result.language,
	      re: result.relevance
	    };
	    if (result.second_best) {
	      block.second_best = {
	        language: result.second_best.language,
	        re: result.second_best.relevance
	      };
	    }
	  }

	  var options = {
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: undefined
	  };

	  /*
	  Updates highlight.js global options with values passed in the form of an object
	  */
	  function configure(user_options) {
	    options = inherit(options, user_options);
	  }

	  /*
	  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
	  */
	  function initHighlighting() {
	    if (initHighlighting.called)
	      return;
	    initHighlighting.called = true;

	    var blocks = document.querySelectorAll('pre code');
	    Array.prototype.forEach.call(blocks, highlightBlock);
	  }

	  /*
	  Attaches highlighting to the page load event.
	  */
	  function initHighlightingOnLoad() {
	    addEventListener('DOMContentLoaded', initHighlighting, false);
	    addEventListener('load', initHighlighting, false);
	  }

	  var languages = {};
	  var aliases = {};

	  function registerLanguage(name, language) {
	    var lang = languages[name] = language(hljs);
	    if (lang.aliases) {
	      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
	    }
	  }

	  function listLanguages() {
	    return Object.keys(languages);
	  }

	  function getLanguage(name) {
	    return languages[name] || languages[aliases[name]];
	  }

	  /* Interface definition */

	  hljs.highlight = highlight;
	  hljs.highlightAuto = highlightAuto;
	  hljs.fixMarkup = fixMarkup;
	  hljs.highlightBlock = highlightBlock;
	  hljs.configure = configure;
	  hljs.initHighlighting = initHighlighting;
	  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
	  hljs.registerLanguage = registerLanguage;
	  hljs.listLanguages = listLanguages;
	  hljs.getLanguage = getLanguage;
	  hljs.inherit = inherit;

	  // Common regexps
	  hljs.IDENT_RE = '[a-zA-Z]\\w*';
	  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	  hljs.C_NUMBER_RE = '(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

	  // Common modes
	  hljs.BACKSLASH_ESCAPE = {
	    begin: '\\\\[\\s\\S]', relevance: 0
	  };
	  hljs.APOS_STRING_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.PHRASAL_WORDS_MODE = {
	    begin: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
	  };
	  hljs.COMMENT = function (begin, end, inherits) {
	    var mode = hljs.inherit(
	      {
	        className: 'comment',
	        begin: begin, end: end,
	        contains: []
	      },
	      inherits || {}
	    );
	    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
	    mode.contains.push({
	      className: 'doctag',
	      begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
	      relevance: 0
	    });
	    return mode;
	  };
	  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
	  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
	  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
	  hljs.NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };
	  hljs.C_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.C_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.BINARY_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.BINARY_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.CSS_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE + '(' +
	      '%|em|ex|ch|rem'  +
	      '|vw|vh|vmin|vmax' +
	      '|cm|mm|in|pt|pc|px' +
	      '|deg|grad|rad|turn' +
	      '|s|ms' +
	      '|Hz|kHz' +
	      '|dpi|dpcm|dppx' +
	      ')?',
	    relevance: 0
	  };
	  hljs.REGEXP_MODE = {
	    className: 'regexp',
	    begin: /\//, end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      {
	        begin: /\[/, end: /\]/,
	        relevance: 0,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  hljs.TITLE_MODE = {
	    className: 'title',
	    begin: hljs.IDENT_RE,
	    relevance: 0
	  };
	  hljs.UNDERSCORE_TITLE_MODE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };

	  return hljs;
	}));


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['js'],
	    keywords: {
	      keyword:
	        'in of if for while finally var new function do return void else break catch ' +
	        'instanceof with throw case default try this switch continue typeof delete ' +
	        'let yield const export super debugger as async await',
	      literal:
	        'true false null undefined NaN Infinity',
	      built_in:
	        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
	        'Promise'
	    },
	    contains: [
	      {
	        className: 'pi',
	        relevance: 10,
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          { // E4X / JSX
	            begin: /</, end: />\s*[);\]]/,
	            relevance: 0,
	            subLanguage: 'xml'
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /\{/, excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ],
	            illegal: /["'\(]/
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      {
	        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
	      },
	      // ECMAScript 6 modules import
	      {
	        beginKeywords: 'import', end: '[;$]',
	        keywords: 'import from as',
	        contains: [
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE
	        ]
	      },
	      { // ES6 class
	        className: 'class',
	        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      }
	    ],
	    illegal: /#/
	  };
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	module.exports = (function (_ReactCSS$Component) {
	  _inherits(MarkdownTitle, _ReactCSS$Component);

	  function MarkdownTitle() {
	    _classCallCheck(this, MarkdownTitle);

	    _get(Object.getPrototypeOf(MarkdownTitle.prototype), 'constructor', this).call(this);
	    this.state = {
	      hover: false
	    };
	    this.handleHover = this.handleHover.bind(this);
	  }

	  _createClass(MarkdownTitle, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          link: {
	            opacity: '0',
	            textDecoration: 'none',
	            fill: this.props.primaryColor,
	            transition: 'opacity 200ms linear'
	          }
	        },
	        'hovered': {
	          link: {
	            opacity: '1'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'hovered': this.state.hover
	      });
	    }
	  }, {
	    key: 'handleHover',
	    value: function handleHover(e) {
	      if (e.type === 'mouseenter') {
	        this.setState({ hover: true });
	      } else if (e.type === 'mouseleave') {
	        this.setState({ hover: false });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var linkSvg = {
	        __html: '\n              <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n                  <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />\n              </svg>\n              '
	      };

	      var title;
	      if (this.props.isHeadline) {
	        title = React.createElement(
	          'h1',
	          null,
	          this.props.title,
	          ' ',
	          React.createElement('a', { style: this.styles().link, href: '#' + this.props.link, dangerouslySetInnerHTML: linkSvg })
	        );
	      } else {
	        title = React.createElement(
	          'h2',
	          null,
	          this.props.title,
	          ' ',
	          React.createElement('a', { style: this.styles().link, href: '#' + this.props.link, dangerouslySetInnerHTML: linkSvg })
	        );
	      }

	      return React.createElement(
	        'div',
	        { onMouseEnter: this.handleHover, onMouseLeave: this.handleHover },
	        title
	      );
	    }
	  }]);

	  return MarkdownTitle;
	})(ReactCSS.Component);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var markdown = __webpack_require__(67);

	var Code = __webpack_require__(74);

	module.exports = (function (_ReactCSS$Component) {
	  _inherits(Markdown, _ReactCSS$Component);

	  function Markdown() {
	    _classCallCheck(this, Markdown);

	    _get(Object.getPrototypeOf(Markdown.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Markdown, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          markdown: {
	            fontSize: '17px',
	            lineHeight: '24px',
	            color: 'rgba(0,0,0,.47)'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      var newLines = children;

	      var codes = [];
	      for (var i = 0; i < markdown.isCode(children).length; i++) {
	        var codeBlock = markdown.isCode(children)[i];
	        newLines = newLines.replace(codeBlock[1], '|Code:' + i + '|');
	        codes[i] = React.createElement(Code, { file: codeBlock[2], condensed: this.props.condensed, borders: true });
	      }

	      var markdownFile = [];
	      for (var i = 0; i < newLines.split('\n').length; i++) {
	        var line = newLines.split('\n')[i];
	        if (markdown.isCodeBlock(line)) {
	          markdownFile.push(React.createElement(
	            'div',
	            { key: i },
	            codes[markdown.codeNumber(line)]
	          ));
	        } else {
	          markdownFile.push(React.createElement('div', { key: i, style: this.styles().markdown, className: 'markdown text', dangerouslySetInnerHTML: { __html: markdown.render(line) } }));
	        }
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().markdown },
	        markdownFile
	      );
	    }
	  }]);

	  return Markdown;
	})(ReactCSS.Component);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var markdown = __webpack_require__(67);
	var context = __webpack_require__(75);

	var _require = __webpack_require__(43);

	var Tile = _require.Tile;
	var Raised = _require.Raised;

	var Code = (function (_ReactCSS$Component) {
	  _inherits(Code, _ReactCSS$Component);

	  function Code() {
	    _classCallCheck(this, Code);

	    _get(Object.getPrototypeOf(Code.prototype), 'constructor', this).call(this);
	  }

	  _createClass(Code, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          shortCodeBlock: {
	            display: 'inline-block'
	          },
	          shortCode: {
	            padding: '14px 16px'
	          },
	          head: {
	            borderRadius: '2px 2px 0 0',
	            background: '#fafafa'
	          },
	          files: {
	            display: 'inline-block'
	          },
	          Files: {
	            align: 'none',
	            color: '#666'
	          },
	          center: {
	            fontFamily: 'Monaco',
	            fontSize: '14px',
	            lineHeight: '19px',
	            color: 'rgba(0,0,0,.77)'
	          },
	          numbers: {
	            fontSize: '14px',
	            lineHeight: '19px',
	            display: 'inline-block',
	            textAlign: 'right',
	            color: 'rgba(0,0,0,.20)',
	            userSelect: 'none',
	            paddingLeft: '7px'
	          }
	        },
	        'condensed': {
	          Tile: {
	            condensed: true
	          },
	          center: {
	            paddingTop: '16px',
	            paddingBottom: '16px',
	            fontSize: '13px',
	            lineHeight: '15px',
	            overflowX: 'scroll'
	          },
	          numbers: {
	            paddingTop: '16px',
	            fontSize: '13px',
	            lineHeight: '15px'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'styles',
	    value: function styles() {
	      return this.css({
	        'condensed': this.context.width < 500
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var code = markdown.getBody(this.props.file);
	      var args = markdown.getArgs(this.props.file);
	      var colorCoded = markdown.renderCode('```\n' + code + '```').trim();
	      var lineCount = colorCoded.split('\n').length;

	      var lines;
	      if (args.lineDecoration) {
	        lines = args.lineDecoration;
	      } else {
	        lines = [];
	        for (var i = 1; i < lineCount; i++) {
	          lines.push(React.createElement(
	            'div',
	            { key: i },
	            i
	          ));
	        }
	      }

	      return React.createElement(
	        Raised,
	        null,
	        React.createElement(
	          Tile,
	          this.styles().Tile,
	          React.createElement(
	            'div',
	            { style: this.styles().numbers },
	            lines
	          ),
	          React.createElement(
	            'div',
	            { style: this.styles().center },
	            React.createElement(
	              'style',
	              null,
	              '\n              .rendered pre{\n                margin: 0;\n              }\n              .rendered p{\n                margin: 0;\n              }\n            '
	            ),
	            React.createElement('div', { className: 'rendered', dangerouslySetInnerHTML: { __html: colorCoded } })
	          )
	        )
	      );
	    }
	  }]);

	  return Code;
	})(ReactCSS.Component);

	Code.contextTypes = context.subscribe(['width']);

	module.exports = Code;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true, browser: true */
	"use strict";

	var React = __webpack_require__(2);

	var contextTypes = {
	  pointer: React.PropTypes.string,
	  density: React.PropTypes.number,
	  width: React.PropTypes.number,
	  height: React.PropTypes.number,
	  language: React.PropTypes.string,
	  focus: React.PropTypes.bool,
	  scroll: React.PropTypes.number,
	  adBlock: React.PropTypes.bool,
	  os: React.PropTypes.string,
	  browser: React.PropTypes.string,
	  browserVersion: React.PropTypes.string
	};

	var context = function context(Component) {

	  var Context = React.createClass({
	    displayName: 'Context',

	    getInitialState: function getInitialState() {
	      return {
	        width: window.innerWidth,
	        height: window.innerHeight,
	        focus: document.hasFocus(),
	        scroll: window.scrollY,
	        adBlock: false
	      };
	    },

	    childContextTypes: contextTypes,

	    getChildContext: function getChildContext() {
	      return {
	        // pointer: (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) ? 'touch' : 'mouse',
	        density: window.devicePixelRatio,
	        width: this.state.width,
	        height: this.state.height,
	        language: window.navigator.userLanguage || window.navigator.language,
	        focus: this.state.focus,
	        scroll: this.state.scroll,
	        adBlock: this.state.adBlock,
	        os: this.checkOS(),
	        browser: this.checkBrowser().browser,
	        browserVersion: this.checkBrowser().version
	      };
	    },

	    // (C) viazenetti GmbH (Christian Ludwig)
	    // http://jsfiddle.net/ChristianL/AVyND/
	    checkOS: function checkOS() {
	      var os;
	      var clientStrings = [{
	        s: 'Windows',
	        r: /(Windows)/
	      }, {
	        s: 'Android',
	        r: /Android/
	      }, {
	        s: 'Open BSD',
	        r: /OpenBSD/
	      }, {
	        s: 'Linux',
	        r: /(Linux|X11)/
	      }, {
	        s: 'iOS',
	        r: /(iPhone|iPad|iPod)/
	      }, {
	        s: 'Mac',
	        r: /Mac/
	      }, {
	        s: 'UNIX',
	        r: /UNIX/
	      }, {
	        s: 'Robot',
	        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
	      }];

	      for (var i = 0; i < clientStrings.length; i++) {
	        var cs = clientStrings[i];
	        if (cs.r.test(navigator.userAgent)) {
	          return cs.s;
	        }
	      }
	    },

	    // (C) viazenetti GmbH (Christian Ludwig)
	    // http://jsfiddle.net/ChristianL/AVyND/
	    checkBrowser: function checkBrowser() {
	      var UA = navigator.userAgent;
	      var browser;
	      var version;
	      var verOffset;

	      if ((verOffset = UA.indexOf('Opera')) > -1) {
	        browser = 'Opera';
	        version = UA.substring(verOffset + 6);
	        if ((verOffset = UA.indexOf('Version')) > -1) {
	          version = UA.substring(verOffset + 8);
	        }
	      } else if ((verOffset = UA.indexOf('MSIE')) > -1) {
	        browser = 'Internet Explorer';
	        version = UA.substring(verOffset + 5);
	      } else if ((verOffset = UA.indexOf('Chrome')) > -1) {
	        browser = 'Chrome';
	        version = UA.substring(verOffset + 7);
	      } else if ((verOffset = UA.indexOf('Safari')) > -1) {
	        browser = 'Safari';
	        version = UA.substring(verOffset + 7);
	        if ((verOffset = UA.indexOf('Version')) > -1) {
	          version = UA.substring(verOffset + 8);
	        }
	      } else if ((verOffset = UA.indexOf('Firefox')) > -1) {
	        browser = 'Firefox';
	        version = UA.substring(verOffset + 8);
	      } else if (UA.indexOf('Trident/') > -1) {
	        browser = 'Internet Explorer';
	        version = UA.substring(UA.indexOf('rv:') + 3);
	      } else if ((nameOffset = UA.lastIndexOf(' ') + 1) < (verOffset = UA.lastIndexOf('/'))) {
	        browser = UA.substring(nameOffset, verOffset);
	        version = UA.substring(verOffset + 1);
	        if (browser.toLowerCase() == browser.toUpperCase()) {
	          browser = navigator.appName;
	        }
	      }

	      return {
	        browser: browser,
	        version: version
	      };
	    },

	    componentDidMount: function componentDidMount() {
	      window.addEventListener('resize', this.handleResize, false);
	      window.addEventListener('focus', this.handleFocus, false);
	      window.addEventListener('blur', this.handleFocus, false);
	      window.addEventListener('scroll', this.handleScroll, false);
	      this.checkForAdBlock();
	    },

	    componentWillUnmount: function componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize, false);
	      window.removeEventListener('focus', this.handleFocus, false);
	      window.removeEventListener('blur', this.handleFocus, false);
	      window.removeEventListener('scroll', this.handleScroll, false);
	    },

	    handleScroll: function handleScroll() {
	      this.setState({
	        scroll: window.scrollY
	      });
	    },

	    // Cross-browser height and width values
	    // http://stackoverflow.com/a/8876069/989006
	    handleResize: function handleResize() {
	      this.setState({
	        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
	        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	      });
	    },

	    handleFocus: function handleFocus(e) {
	      this.setState({
	        focus: e.type === 'focus' ? true : false
	      });
	    },

	    // FuckAdBlock 3.1.1
	    // Copyright (c) 2015 Valentin Allaire <valentin.allaire@sitexw.fr>
	    // Released under the MIT license
	    // https://github.com/sitexw/FuckAdBlock
	    checkForAdBlock: function checkForAdBlock() {
	      var ad = React.findDOMNode(this.refs.fakeAd);

	      if (ad) {
	        if (window.document.body.getAttribute('abp') !== null || ad.offsetParent === null || ad.offsetHeight === 0 || ad.offsetLeft === 0 || ad.offsetTop === 0 || ad.offsetWidth === 0 || ad.clientHeight === 0 || ad.clientWidth === 0) {
	          this.setState({ adBlock: true });
	        }

	        if (window.getComputedStyle !== undefined) {
	          var adStyles = window.getComputedStyle(ad, null);

	          if (adStyles.getPropertyValue('display') == 'none' || adStyles.getPropertyValue('visibility') == 'hidden') {
	            this.setState({ adBlock: true });
	          }
	        }
	      }
	    },

	    render: function render() {
	      var fakeAdClasses = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links';
	      var fakeAdStyles = {
	        width: '1px !important',
	        height: '1px !important',
	        position: 'absolute !important',
	        left: '-10000px !important',
	        top: '-1000px !important'
	      };

	      return React.createElement('div', null, React.createElement('div', { ref: "fakeAd", className: fakeAdClasses, style: fakeAdStyles }), React.createElement(Component, this.props));
	    }
	  });

	  return Context;
	};

	context.subscribe = function (lookup) {
	  if (!lookup) {
	    return contextTypes;
	  } else {
	    var customTypes = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = lookup[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var type = _step.value;

	        if (contextTypes[type]) {
	          customTypes[type] = contextTypes[type];
	        } else {
	          console.warn('Context type `' + type + '` does not exist');
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator['return']) {
	          _iterator['return']();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return customTypes;
	  }
	};

	module.exports = context;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var markdown = __webpack_require__(67);

	var _require = __webpack_require__(43);

	var Tile = _require.Tile;

	var SidebarItem = __webpack_require__(77);

	module.exports = (function (_ReactCSS$Component) {
	  _inherits(Sidebar, _ReactCSS$Component);

	  function Sidebar() {
	    _classCallCheck(this, Sidebar);

	    _get(Object.getPrototypeOf(Sidebar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Sidebar, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          sidebar: {
	            paddingTop: '20px',
	            position: 'relative',
	            width: '170px'
	          },
	          star: {
	            display: 'none',
	            position: 'absolute'
	          }
	        },
	        'fixed': {
	          sidebar: {
	            top: '0',
	            bottom: '0',
	            position: 'fixed'
	          },
	          star: {
	            bottom: '30px',
	            top: 'auto',
	            display: 'block'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var sidebarItems = [];

	      for (var fileName in this.props.files) {
	        if (this.props.files.hasOwnProperty(fileName)) {
	          var file = this.props.files[fileName];
	          var args = markdown.getArgs(file);
	          var sectionNumber;
	          if (markdown.isSubSection(fileName)) {
	            sectionNumber = fileName.split('-')[0];
	          } else {
	            sectionNumber = false;
	          }

	          sidebarItems.push(React.createElement(SidebarItem, { key: fileName,
	            sidebarNumber: sectionNumber,
	            href: '#' + args.id,
	            active: this.props.active === args.id,
	            bold: sectionNumber && true,
	            label: args.title,
	            primaryColor: this.props.primaryColor }));
	        }
	      }

	      return React.createElement(
	        'div',
	        { style: this.styles().sidebar },
	        React.createElement(
	          'div',
	          { style: this.styles().star },
	          this.props.bottom
	        ),
	        sidebarItems
	      );
	    }
	  }]);

	  return Sidebar;
	})(ReactCSS.Component);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);

	var _require = __webpack_require__(43);

	var Tile = _require.Tile;

	module.exports = (function (_ReactCSS$Component) {
	  _inherits(SidebarItem, _ReactCSS$Component);

	  function SidebarItem() {
	    _classCallCheck(this, SidebarItem);

	    _get(Object.getPrototypeOf(SidebarItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(SidebarItem, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          sidebarItem: {
	            fontSize: '14px',
	            textDecoration: 'none',
	            color: 'rgba(0, 0, 0, .57)',
	            transition: 'all 200ms linear'
	          },
	          number: {
	            fontSize: '14px',
	            color: 'rgba(0, 0, 0, .27)',
	            fontWeight: 'bold',
	            paddingTop: '14px'
	          },
	          li: {
	            paddingBottom: '8px'
	          }
	        },
	        'bold': {
	          sidebarItem: {
	            fontWeight: 'bold',
	            paddingTop: '14px',
	            display: 'block'
	          }
	        },
	        'active': {
	          sidebarItem: {
	            color: this.props.primaryColor
	          }
	        }
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: this.styles().li },
	        React.createElement(
	          Tile,
	          { condensed: true },
	          React.createElement(
	            'div',
	            { style: this.styles().number },
	            this.props.sidebarNumber
	          ),
	          React.createElement(
	            'a',
	            { href: this.props.href, style: this.styles().sidebarItem },
	            this.props.label
	          )
	        )
	      );
	    }
	  }]);

	  return SidebarItem;
	})(ReactCSS.Component);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  '01-about': __webpack_require__(79),
	  '02-getting-started': __webpack_require__(80),
	  '02.01-install': __webpack_require__(81),
	  '02.02-include': __webpack_require__(82),
	  '02.03-display': __webpack_require__(83),
	  '03-api': __webpack_require__(84),
	  '03.01-type': __webpack_require__(85),
	  '03.02-onChange': __webpack_require__(86),
	  '03.03-onChangeComplete': __webpack_require__(87),
	  '03.04-color': __webpack_require__(88),
	  '03.05-display': __webpack_require__(89),
	  '03.06-onClose': __webpack_require__(90),
	  '03.07-position': __webpack_require__(91),
	  '03.08-positionCSS': __webpack_require__(92),
	  '04-create': __webpack_require__(93),
	  '04.01-parent': __webpack_require__(94),
	  '04.02-helpers': __webpack_require__(95),
	  '05-examples': __webpack_require__(96)
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports = "---\nid: about\ntitle: About\n---\n\n**7 Different Pickers** - Sketch, Photoshop, Chrome and many more\n\n**Popup or Block** - It can be used it as a popup or always visible\n\n**Make Your Own** - Use the building block components to make your own\n";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = "---\nid: getting-started\ntitle: Getting Started\n---\n";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = "---\nid: usage-install\ntitle: Install\n---\nStart by installing `react-color` via npm:\n```\nnpm install react-color --save\n```\n";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = "---\nid: usage-include\ntitle: Include the Component\n---\nRequire `react-color` at the top of a component and then use `ColorPicker` in the render function:\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  render() {\n    return <ColorPicker type=\"sketch\" />;\n  }\n}\n```\n";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = "---\nid: usage-display\ntitle: Display It\n---\nDisplay the color picker popup on click, or don't define `display` and it will always be visible.\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  constructor() {\n    super();\n    this.state = {\n      displayColorPicker: false,\n    };\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick() {\n    this.setState({ displayColorPicker: !this.state.displayColorPicker });\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={ this.handleClick }>Pick Color</button>\n        <ColorPicker display={ this.state.displayColorPicker } type=\"sketch\" />\n      </div>\n    );\n  }\n}\n```\n";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api\ntitle: Component API\n---\n";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-type\ntitle: type\n---\nA string that defines the type of color picker theme to display. Types include: `sketch` `chrome` `photoshop` `slider` `compact` `material` `swatches`\n";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-onChange\ntitle: onChange\n---\nPass a function to call every time the color is changed. Use this to store the color in the state of a parent component or to make other transformations.\n\nKeep in mind this is called on drag events that can happen quite frequently. If you just need to get the color once use `onChangeComplete`.\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  handleChange(color) {\n    // color = {\n    //   hex: '#333',\n    //   rgb: {\n    //     r: 51,\n    //     g: 51,\n    //     b: 51,\n    //     a: 1,\n    //   },\n    //   hsl: {\n    //     h: 0,\n    //     s: 0,\n    //     l: .20,\n    //     a: 1,\n    //   },\n    // }\n  }\n\n  render() {\n    return <ColorPicker onChange={ this.handleChange } />;\n  }\n}\n```\n";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-onChangeComplete\ntitle: onChangeComplete\n---\nPass a function to call once a color change is complete.\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  constructor() {\n    super();\n    this.state = {\n      background: '#fff',\n    };\n    this.handleChangeComplete = this.handleChangeComplete.bind(this);\n  }\n\n  handleChangeComplete(color) {\n    this.setState({ background: color.hex });\n  }\n\n  render() {\n    return <ColorPicker onChangeComplete={ this.handleChangeComplete } />;\n  }\n}\n```\n";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-color\ntitle: color\n---\nColor controls what color is active on the color picker. You can use this to initialize the color picker with a particular color, or to keep it in sync with the state of a parent component.\n\nColor accepts either a string of a hex color `'#333'` or a object of rgb or hsl values `{ r: 51, g: 51, b: 51 }` or `{ h: 0, s: 0, l: .10 }`. Both rgb and hsl will also take a `a: 1` value for alpha.\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  constructor() {\n    super();\n    this.state = {\n      background: '#fff',\n    };\n    this.handleChangeComplete = this.handleChangeComplete.bind(this);\n  }\n\n  handleChangeComplete(color) {\n    this.setState({ background: color.hex });\n  }\n\n  render() {\n    return <ColorPicker color={ this.state.background } type=\"sketch\" onChangeComplete={ this.handleChangeComplete } />;\n  }\n}\n```\nIn this case, the color picker will initialize with the color `#fff`. When the color is changed, `handleChangeComplete` will fire and set the new color to state.\n";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-display\ntitle: display\n---\nBy default, the color picker is a block element that is always visible. To display the popup programmatically, pass `display` a boolean value:\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  constructor() {\n    super();\n    this.state = {\n      displayColorPicker: false,\n    };\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick() {\n    this.setState({ displayColorPicker: !this.state.displayColorPicker });\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={ this.handleClick }>Pick Color</button>\n        <ColorPicker display={ this.state.displayColorPicker } type=\"sketch\" />\n      </div>\n    );\n  }\n}\n```\n";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-onClose\ntitle: onClose\n---\nIf you are using the ColorPicker as a popup, you can pass a function to `onClose` that will fire when the popup is closed. The callback gets called with the latest color information as the first argument.\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  handleClose(color) {\n    ...\n  }\n\n  render() {\n    return <ColorPicker display={ true } onClose={ this.handleClose } />;\n  }\n}\n```\n";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-position\ntitle: position\n---\nUse `position` alongside `display` to position the popup relative to the container. It takes `left` `right` and `below` as options.\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  render() {\n    return <ColorPicker position=\"below\" display={ true } />;\n  }\n}\n```\n";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = "---\nid: api-positionCSS\ntitle: positionCSS\n---\nUse `positionCSS` alongside `display` to declare a custom position for the color picker with a CSS object:\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass Component extends React.Component {\n\n  render() {\n    var popupPosition = {\n      position: 'absolute',\n      top: '100px',\n      left: '20px',\n    };\n    return <ColorPicker positionCSS={ popupPosition } display={ true } />;\n  }\n}\n```\n";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports = "---\nid: create\ntitle: Create Your Own\n---\n";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = "---\nid: create-parent\ntitle: Parent Component\n---\nTo make a custom color picker, create a top-level component that will act as the bridge with the ColorPicker component. Pass that component down on the custom property:\n\n```\nvar React = require('react');\nvar ColorPicker = require('react-color');\nvar CustomColorPicker = require('./CustomColorPicker');\n\nclass Component extends React.Component {\n  render() {\n    return <ColorPicker custom={ CustomColorPicker } />;\n  }\n}\n```\n\nThis component will be passed `hex`, `rgb` and `hsl` values as props for the current color. It is also provided an `onChange` prop that should be called to propagate a new color. Pass it a hex string, or an rgb or hsl object.\n";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = "---\nid: create-helpers\ntitle: Helper Components\n---\nEvery color picker provided is made up of a collection of helper components. Those components are accessible for you to use to make a custom color picker.\n\n### <Alpha />\nUse Alpha to display a slider to toggle the alpha value. Make sure to wrap it in a div that's the size you want the slider to be and that it is `position: relative`.\n\n* **...this.props** - Pass down all the color props from your top-most component.\n* **pointer** - Define a custom pointer component for the slider pointer.\n* **onChange** - Function callback. Make sure this calls the onChange function of the parent to make it change.\n```\nvar { Alpha } = require('react-color/src/components/common');\n\n<Alpha\n  {...this.props}\n  pointer={ CustomPointer }\n  onChange={ this.handleChange } />\n```\n\n\n### <EditableInput />\nUse EditableInput to display an input / label that acts as the single source of truth until the input is blurred.  \n\n* **label** - Used to put a label on the input.\n* **value** - The value to be passed down to the input.\n* **onChange** - Function callback. Use this to call the onChange function of the parent. Returns an object where the key is the label and the value is the new value.\n* **style** - Inline css to style the children elements: `{ wrap: {}, input: {}, label: {} }`\n\n```\nvar { EditableInput } = require('react-color/src/components/common');\n\nvar inputStyles = {\n  input: {\n    border: none,\n  },\n  label: {\n    fontSize: '12px',\n    color: '#999',\n  },\n};\n\n<EditableInput\n  style={ inputStyles }\n  label=\"hex\"\n  value={ this.props.hex }\n  onChange={ this.handleChange } />\n```\n\n### <Hue />\nUse Hue to display a slider to toggle the hue value. Make sure to wrap it in a div that's the size you want the slider to be and that it is `position: relative`.\n\n* **...this.props** - Pass down all the color props from your top-most component.\n* **pointer** - Define a custom pointer component for the slider pointer.\n* **onChange** - Function callback. Make sure this calls the onChange function of the parent to make it change.\n* **direction** - Display direction of the slider. Horizontal by default.\n```\nvar { Alpha } = require('react-color/src/components/common');\n\n<Hue\n  {...this.props}\n  pointer={ CustomPointer }\n  onChange={ this.handleChange }\n  direction={ 'horizontal' || 'vertical' } />\n```\n\n### <Saturation />\nUse Saturation to display a saturation block that users can drag to change the value. Make sure to wrap it in a div that's the size you want the block to be and that it is `position: relative`.\n\n* **...this.props** - Pass down all the color props from your top-most component.\n* **pointer** - Define a custom pointer component for the slider pointer.\n* **onChange** - Function callback. Make sure this calls the onChange function of the parent to make it change.\n```\nvar { Alpha } = require('react-color/src/components/common');\n\n<Saturation\n  {...this.props}\n  pointer={ CustomPointer }\n  onChange={ this.handleChange }  />\n```\n";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = "---\nid: examples\ntitle: More Examples\n---\n";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  Button: __webpack_require__(98),
	  buttonmd: __webpack_require__(99),
	  Sketch: __webpack_require__(100),
	  sketchmd: __webpack_require__(101)
	};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ColorPicker = __webpack_require__(20);

	module.exports = (function (_React$Component) {
	  _inherits(ButtonExample, _React$Component);

	  function ButtonExample() {
	    _classCallCheck(this, ButtonExample);

	    _get(Object.getPrototypeOf(ButtonExample.prototype), 'constructor', this).call(this);
	    this.state = {
	      displayColorPicker: false
	    };
	    this.handleClick = this.handleClick.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	  }

	  _createClass(ButtonExample, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ displayColorPicker: !this.state.displayColorPicker });
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      this.setState({ displayColorPicker: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'button',
	          { onClick: this.handleClick },
	          'Pick Color'
	        ),
	        React.createElement(ColorPicker, { display: this.state.displayColorPicker, onClose: this.handleClose, type: 'chrome' })
	      );
	    }
	  }]);

	  return ButtonExample;
	})(React.Component);

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = "```\nvar React = require('react');\nvar ColorPicker = require('react-color');\n\nclass ButtonExample extends React.Component {\n\n  constructor() {\n    super();\n    this.state = {\n      displayColorPicker: false,\n    };\n    this.handleClick = this.handleClick.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n  }\n\n  handleClick() {\n    this.setState({ displayColorPicker: !this.state.displayColorPicker });\n  }\n\n  handleClose() {\n    this.setState({ displayColorPicker: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={ this.handleClick }>Pick Color</button>\n        <ColorPicker\n          display={ this.state.displayColorPicker }\n          onClose={ this.handleClose }\n          type=\"chrome\" />\n      </div>\n    );\n  }\n};\n```\n";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactCSS = __webpack_require__(6);
	var ColorPicker = __webpack_require__(20);

	module.exports = (function (_ReactCSS$Component) {
	  _inherits(SketchExample, _ReactCSS$Component);

	  function SketchExample() {
	    _classCallCheck(this, SketchExample);

	    _get(Object.getPrototypeOf(SketchExample.prototype), 'constructor', this).call(this);
	    this.state = {
	      displayColorPicker: false,
	      color: '#F17013'
	    };
	    this.handleClick = this.handleClick.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  _createClass(SketchExample, [{
	    key: 'classes',
	    value: function classes() {
	      return {
	        'default': {
	          color: {
	            width: '36px',
	            height: '14px',
	            borderRadius: '2px',
	            background: this.state.color
	          },
	          swatch: {
	            padding: '5px',
	            background: '#fff',
	            borderRadius: '1px',
	            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
	            display: 'inline-block',
	            cursor: 'pointer'
	          }
	        }
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ displayColorPicker: !this.state.displayColorPicker });
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      this.setState({ displayColorPicker: false });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(color) {
	      this.setState({ color: '#' + color.hex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { style: this.styles().swatch, onClick: this.handleClick },
	          React.createElement('div', { style: this.styles().color })
	        ),
	        React.createElement(ColorPicker, { color: this.state.color, display: this.state.displayColorPicker, position: 'below', onChange: this.handleChange, onClose: this.handleClose, type: 'sketch' })
	      );
	    }
	  }]);

	  return SketchExample;
	})(ReactCSS.Component);

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = "```\nvar React = require('react');\nvar ReactCSS = require('reactcss');\nvar ColorPicker = require('react-color');\n\nclass SketchExample extends ReactCSS.Component {\n\n  constructor() {\n    super();\n    this.state = {\n      displayColorPicker: false,\n      color: '#F17013',\n    };\n    this.handleClick = this.handleClick.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  classes() {\n    return {\n      'default': {\n        color: {\n          width: '36px',\n          height: '14px',\n          borderRadius: '2px',\n          background: this.state.color,\n        },\n        swatch: {\n          padding: '5px',\n          background: '#fff',\n          borderRadius: '1px',\n          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',\n          display: 'inline-block',\n          cursor: 'pointer',\n        },\n      },\n    };\n  }\n\n  handleClick() {\n    this.setState({ displayColorPicker: !this.state.displayColorPicker });\n  }\n\n  handleClose() {\n    this.setState({ displayColorPicker: false });\n  }\n\n  handleChange(color) {\n    this.setState({ color: '#' + color.hex });\n  }\n\n  render() {\n    return (\n      <div>\n        <div is=\"swatch\" onClick={ this.handleClick }>\n          <div is=\"color\" />\n        </div>\n        <ColorPicker\n          color={ this.state.color }\n          position=\"below\"\n          display={ this.state.displayColorPicker }\n          onChange={ this.handleChange }\n          onClose={ this.handleClose }\n          type=\"sketch\" />\n      </div>\n    );\n  }\n};\n```\n";

/***/ })
/******/ ]);