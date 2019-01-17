/*! react-redux-firebase.js v2.2.6 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactReduxFirebase"] = factory(require("react"), require("prop-types"));
	else
		root["ReactReduxFirebase"] = factory(root["React"], root["PropTypes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_48__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(87);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionsPrefix = exports.actionsPrefix = '@@reactReduxFirebase';

var actionTypes = exports.actionTypes = {
  START: actionsPrefix + '/START',
  SET: actionsPrefix + '/SET',
  REMOVE: actionsPrefix + '/REMOVE',
  MERGE: actionsPrefix + '/MERGE',
  SET_PROFILE: actionsPrefix + '/SET_PROFILE',
  LOGIN: actionsPrefix + '/LOGIN',
  LOGOUT: actionsPrefix + '/LOGOUT',
  LOGIN_ERROR: actionsPrefix + '/LOGIN_ERROR',
  NO_VALUE: actionsPrefix + '/NO_VALUE',
  UNAUTHORIZED_ERROR: actionsPrefix + '/UNAUTHORIZED_ERROR',
  ERROR: actionsPrefix + '/ERROR',
  CLEAR_ERRORS: actionsPrefix + '/CLEAR_ERRORS',
  SET_LISTENER: actionsPrefix + '/SET_LISTENER',
  UNSET_LISTENER: actionsPrefix + '/UNSET_LISTENER',
  AUTHENTICATION_INIT_STARTED: actionsPrefix + '/AUTHENTICATION_INIT_STARTED',
  AUTHENTICATION_INIT_FINISHED: actionsPrefix + '/AUTHENTICATION_INIT_FINISHED',
  SESSION_START: actionsPrefix + '/SESSION_START',
  SESSION_END: actionsPrefix + '/SESSION_END',
  FILE_UPLOAD_START: actionsPrefix + '/FILE_UPLOAD_START',
  FILE_UPLOAD_ERROR: actionsPrefix + '/FILE_UPLOAD_ERROR',
  FILE_UPLOAD_PROGRESS: actionsPrefix + '/FILE_UPLOAD_PROGRESS',
  FILE_UPLOAD_COMPLETE: actionsPrefix + '/FILE_UPLOAD_COMPLETE',
  FILE_DELETE_START: actionsPrefix + '/FILE_DELETE_START',
  FILE_DELETE_ERROR: actionsPrefix + '/FILE_DELETE_ERROR',
  FILE_DELETE_COMPLETE: actionsPrefix + '/FILE_DELETE_COMPLETE',
  AUTH_UPDATE_START: actionsPrefix + '/AUTH_UPDATE_START',
  AUTH_UPDATE_SUCCESS: actionsPrefix + '/AUTH_UPDATE_SUCCESS',
  AUTH_UPDATE_ERROR: actionsPrefix + '/AUTH_UPDATE_ERROR',
  PROFILE_UPDATE_START: actionsPrefix + '/PROFILE_UPDATE_START',
  PROFILE_UPDATE_SUCCESS: actionsPrefix + '/PROFILE_UPDATE_SUCCESS',
  PROFILE_UPDATE_ERROR: actionsPrefix + '/PROFILE_UPDATE_ERROR',
  EMAIL_UPDATE_START: actionsPrefix + '/EMAIL_UPDATE_START',
  EMAIL_UPDATE_SUCCESS: actionsPrefix + '/EMAIL_UPDATE_SUCCESS',
  EMAIL_UPDATE_ERROR: actionsPrefix + '/EMAIL_UPDATE_ERROR',
  AUTH_RELOAD_START: actionsPrefix + '/AUTH_RELOAD_START',
  AUTH_RELOAD_ERROR: actionsPrefix + '/AUTH_RELOAD_ERROR',
  AUTH_RELOAD_SUCCESS: actionsPrefix + '/AUTH_RELOAD_SUCCESS',
  AUTH_LINK_START: actionsPrefix + '/AUTH_LINK_START',
  AUTH_LINK_ERROR: actionsPrefix + '/AUTH_LINK_ERROR',
  AUTH_LINK_SUCCESS: actionsPrefix + '/AUTH_LINK_SUCCESS',
  AUTH_EMPTY_CHANGE: actionsPrefix + '/AUTH_EMPTY_CHANGE'
};

var defaultConfig = exports.defaultConfig = {
  userProfile: null,
  presence: null,
  sessions: 'sessions',
  enableLogging: false,
  logErrors: true,
  preserveOnLogout: null,
  preserveOnEmptyAuthChange: null,
  resetBeforeLogin: true,
  updateProfileOnLogin: true,
  enableRedirectHandling: true,
  autoPopulateProfile: false,
  setProfilePopulateResults: false,
  dispatchOnUnsetListener: true,
  dispatchRemoveAction: false,
  enableEmptyAuthChanges: true,
  firebaseStateName: 'firebase',
  attachAuthIsReady: false,
  keysToRemoveFromAuth: ['appName', 'apiKey', 'authDomain', 'redirectEventId', 'stsTokenManager', 'uid'],
  keysToPreserveFromProviderData: ['email', 'phoneNumber', 'photoURL', 'providerId', 'uid']
};

var supportedAuthProviders = exports.supportedAuthProviders = ['google', 'github', 'twitter', 'facebook'];

var topLevelPaths = exports.topLevelPaths = ['auth', 'profile', 'ordered', 'data'];

var v3ErrorMessage = exports.v3ErrorMessage = 'Context from react-redux not found. If you are using react-redux v6 a v3.*.* version of react-redux-firebase is required. Please checkout the v3 migration guide: http://bit.ly/2SRNdiO';

exports.default = {
  actionTypes: actionTypes,
  defaultConfig: defaultConfig
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObject = __webpack_require__(1);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    getRawTag = __webpack_require__(150),
    objectToString = __webpack_require__(151);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(154),
    baseMatchesProperty = __webpack_require__(198),
    identity = __webpack_require__(25),
    isArray = __webpack_require__(0),
    property = __webpack_require__(203);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(5),
    isLength = __webpack_require__(57);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(166),
    getValue = __webpack_require__(169);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(39),
    baseAssignValue = __webpack_require__(40);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(98),
    baseKeys = __webpack_require__(59),
    isArrayLike = __webpack_require__(8);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
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
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(194),
    Map = __webpack_require__(50),
    Promise = __webpack_require__(195),
    Set = __webpack_require__(196),
    WeakMap = __webpack_require__(100),
    baseGetTag = __webpack_require__(6),
    toSource = __webpack_require__(88);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(60),
    stringToPath = __webpack_require__(103),
    toString = __webpack_require__(24);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(108),
    createBaseEach = __webpack_require__(211);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToDate = exports.wrapDisplayName = exports.getDisplayName = exports.createCallable = exports.getEventsFromInput = undefined;

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _events = __webpack_require__(152);

Object.defineProperty(exports, 'getEventsFromInput', {
  enumerable: true,
  get: function get() {
    return _events.getEventsFromInput;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCallable = exports.createCallable = function createCallable(f) {
  return (0, _isFunction3.default)(f) ? f : function () {
    return f;
  };
};

var getDisplayName = exports.getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

var wrapDisplayName = exports.wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + getDisplayName(BaseComponent) + ')';
};

var stringToDate = exports.stringToDate = function stringToDate(strInput) {
  try {
    return new Date(JSON.parse(strInput));
  } catch (err) {
    console.error('Error parsing string to date:', err.message || err);
    return strInput;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(36);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
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
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(201);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(28),
    stackClear = __webpack_require__(161),
    stackDelete = __webpack_require__(162),
    stackGet = __webpack_require__(163),
    stackHas = __webpack_require__(164),
    stackSet = __webpack_require__(165);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(156),
    listCacheDelete = __webpack_require__(157),
    listCacheGet = __webpack_require__(158),
    listCacheHas = __webpack_require__(159),
    listCacheSet = __webpack_require__(160);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(21);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(178);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(190),
    isObjectLike = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(191);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(17),
    toKey = __webpack_require__(10);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(18),
    baseIteratee = __webpack_require__(7),
    baseMap = __webpack_require__(209),
    isArray = __webpack_require__(0);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promisesForPopulate = exports.populateList = exports.getPopulateChild = exports.getPopulates = exports.getPopulateObjs = exports.getChildType = exports.getPopulateObj = undefined;

var _some2 = __webpack_require__(64);

var _some3 = _interopRequireDefault(_some2);

var _has2 = __webpack_require__(110);

var _has3 = _interopRequireDefault(_has2);

var _set2 = __webpack_require__(111);

var _set3 = _interopRequireDefault(_set2);

var _forEach2 = __webpack_require__(67);

var _forEach3 = _interopRequireDefault(_forEach2);

var _get2 = __webpack_require__(22);

var _get3 = _interopRequireDefault(_get2);

var _map2 = __webpack_require__(37);

var _map3 = _interopRequireDefault(_map2);

var _isObject2 = __webpack_require__(1);

var _isObject3 = _interopRequireDefault(_isObject2);

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _isString2 = __webpack_require__(11);

var _isString3 = _interopRequireDefault(_isString2);

var _filter2 = __webpack_require__(113);

var _filter3 = _interopRequireDefault(_filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPopulateObj = exports.getPopulateObj = function getPopulateObj(str) {
  if (!(0, _isString3.default)(str)) {
    return str;
  }
  var strArray = str.split(':');

  return { child: strArray[0], root: strArray[1] };
};
var getChildType = exports.getChildType = function getChildType(child) {
  if ((0, _isString3.default)(child)) {
    return 'string';
  }
  if ((0, _isArray3.default)(child)) {
    return 'array';
  }
  if ((0, _isObject3.default)(child)) {
    return 'object';
  }
  return 'other';
};

var getPopulateObjs = exports.getPopulateObjs = function getPopulateObjs(arr) {
  if (!(0, _isArray3.default)(arr)) {
    return arr;
  }
  return arr.map(function (o) {
    return (0, _isObject3.default)(o) ? o : getPopulateObj(o);
  });
};

var getPopulates = exports.getPopulates = function getPopulates(params) {
  var populates = (0, _filter3.default)(params, function (param) {
    return param.indexOf('populate') !== -1 || (0, _isObject3.default)(param) && param.populates;
  }).map(function (p) {
    return p.split('=')[1];
  });

  if (!populates.length) {
    return null;
  }
  return populates.map(getPopulateObj);
};

var getPopulateChild = exports.getPopulateChild = function getPopulateChild(firebase, populate, id) {
  return firebase.database().ref().child(populate.root + '/' + id).once('value').then(function (snap) {
    return snap.val();
  });
};

var populateList = exports.populateList = function populateList(firebase, list, p, results) {
  if (!results[p.root]) {
    (0, _set3.default)(results, p.root, {});
  }
  return Promise.all((0, _map3.default)(list, function (id, childKey) {
    var populateKey = id === true || p.populateByKey ? childKey : id;
    return getPopulateChild(firebase, p, populateKey).then(function (pc) {
      if (pc) {
        return (0, _set3.default)(results, p.root + '.' + populateKey, pc);
      }
      return results;
    });
  }));
};

var promisesForPopulate = exports.promisesForPopulate = function promisesForPopulate(firebase, dataKey, originalData, populatesIn) {
  var promisesArray = [];
  var results = {};

  var populatesForData = getPopulateObjs((0, _isFunction3.default)(populatesIn) ? populatesIn(dataKey, originalData) : populatesIn);

  var dataHasPopulateChilds = (0, _some3.default)(populatesForData, function (populate) {
    return (0, _has3.default)(originalData, populate.child);
  });

  if (dataHasPopulateChilds) {
    (0, _forEach3.default)(populatesForData, function (p) {
      if ((0, _isString3.default)((0, _get3.default)(originalData, p.child))) {
        return promisesArray.push(getPopulateChild(firebase, p, (0, _get3.default)(originalData, p.child)).then(function (v) {
          if (v) {
            (0, _set3.default)(results, p.root + '.' + (0, _get3.default)(originalData, p.child), v);
          }
        }));
      }

      return promisesArray.push(populateList(firebase, (0, _get3.default)(originalData, p.child), p, results));
    });
  } else {
    (0, _forEach3.default)(originalData, function (d, key) {
      var populatesForDataItem = getPopulateObj((0, _isFunction3.default)(populatesIn) ? populatesIn(key, d) : populatesIn);

      (0, _forEach3.default)(populatesForDataItem, function (p) {
        var idOrList = (0, _get3.default)(d, p.child);

        if (!idOrList) {
          return;
        }

        if ((0, _isString3.default)(idOrList)) {
          return promisesArray.push(getPopulateChild(firebase, p, idOrList).then(function (v) {
            if (v) {
              (0, _set3.default)(results, p.root + '.' + idOrList, v);
            }
            return results;
          }));
        }

        if ((0, _isArray3.default)(idOrList) || (0, _isObject3.default)(idOrList)) {
          return promisesArray.push(populateList(firebase, idOrList, p, results));
        }
      });
    });
  }

  return Promise.all(promisesArray).then(function () {
    return results;
  });
};

exports.default = { promisesForPopulate: promisesForPopulate };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(40),
    eq = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(112);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(98),
    baseKeysIn = __webpack_require__(227),
    isArrayLike = __webpack_require__(8);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(44),
    isObject = __webpack_require__(1);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
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

module.exports = createCtor;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(170),
    mapCacheDelete = __webpack_require__(177),
    mapCacheGet = __webpack_require__(179),
    mapCacheHas = __webpack_require__(180),
    mapCacheSet = __webpack_require__(181);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(182),
    isObjectLike = __webpack_require__(2);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

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

module.exports = arrayPush;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(96),
    stubArray = __webpack_require__(97);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(192),
    baseUnary = __webpack_require__(34),
    nodeUtil = __webpack_require__(58);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(87);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(35),
    nativeKeys = __webpack_require__(193);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(23);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(17),
    last = __webpack_require__(62),
    parent = __webpack_require__(206),
    toKey = __webpack_require__(10);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(53),
    isFlattenable = __webpack_require__(208);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__(91),
    baseIteratee = __webpack_require__(7),
    baseSome = __webpack_require__(212),
    isArray = __webpack_require__(0),
    isIterateeCall = __webpack_require__(65);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
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
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(21),
    isArrayLike = __webpack_require__(8),
    isIndex = __webpack_require__(15),
    isObject = __webpack_require__(1);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(39),
    castPath = __webpack_require__(17),
    isIndex = __webpack_require__(15),
    isObject = __webpack_require__(1),
    toKey = __webpack_require__(10);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(41),
    baseEach = __webpack_require__(19),
    castFunction = __webpack_require__(214),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(59),
    getTag = __webpack_require__(16),
    isArrayLike = __webpack_require__(8),
    isString = __webpack_require__(11),
    stringSize = __webpack_require__(216);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
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
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(222),
    flatRest = __webpack_require__(71);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(223),
    overRest = __webpack_require__(119),
    setToString = __webpack_require__(72);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(224),
    shortOut = __webpack_require__(120);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    arrayEach = __webpack_require__(41),
    assignValue = __webpack_require__(39),
    baseAssign = __webpack_require__(122),
    baseAssignIn = __webpack_require__(226),
    cloneBuffer = __webpack_require__(123),
    copyArray = __webpack_require__(26),
    copySymbols = __webpack_require__(229),
    copySymbolsIn = __webpack_require__(230),
    getAllKeys = __webpack_require__(94),
    getAllKeysIn = __webpack_require__(75),
    getTag = __webpack_require__(16),
    initCloneArray = __webpack_require__(231),
    initCloneByTag = __webpack_require__(232),
    initCloneObject = __webpack_require__(126),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(33),
    isMap = __webpack_require__(236),
    isObject = __webpack_require__(1),
    isSet = __webpack_require__(238),
    keys = __webpack_require__(14);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
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
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(99);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(95),
    getSymbolsIn = __webpack_require__(124),
    keysIn = __webpack_require__(43);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(93);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    getPrototype = __webpack_require__(74),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
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
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(25),
    overRest = __webpack_require__(119),
    setToString = __webpack_require__(72);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recursiveUnset = exports.preserveValuesFromState = exports.combineReducers = undefined;

var _unset2 = __webpack_require__(253);

var _unset3 = _interopRequireDefault(_unset2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _pick2 = __webpack_require__(70);

var _pick3 = _interopRequireDefault(_pick2);

var _isBoolean2 = __webpack_require__(287);

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _size2 = __webpack_require__(68);

var _size3 = _interopRequireDefault(_size2);

var _replace2 = __webpack_require__(288);

var _replace3 = _interopRequireDefault(_replace2);

var _get2 = __webpack_require__(22);

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pathToArr = pathToArr;
exports.getSlashStrPath = getSlashStrPath;
exports.getDotStrPath = getDotStrPath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pathToArr(path) {
  return path ? path.split(/\//).filter(function (p) {
    return !!p;
  }) : [];
}

function getSlashStrPath(path) {
  return pathToArr(path).join('/');
}

function getDotStrPath(path) {
  return pathToArr(path).join('.');
}

var combineReducers = exports.combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];
    return Object.keys(reducers).reduce(function (nextState, key) {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

var preserveValuesFromState = exports.preserveValuesFromState = function preserveValuesFromState(state, preserveSetting, nextState) {
  if ((0, _isFunction3.default)(preserveSetting)) {
    return preserveSetting(state, nextState);
  }

  if ((0, _isBoolean3.default)(preserveSetting) && preserveSetting) {
    return nextState ? _extends({}, state, nextState) : state;
  }

  if ((0, _isArray3.default)(preserveSetting)) {
    return (0, _pick3.default)(state, preserveSetting);
  }

  throw new Error('Invalid preserve parameter. It must be an Object or an Array');
};

var recursiveUnset = exports.recursiveUnset = function recursiveUnset(path, obj) {
  var isRecursiveCall = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!path) {
    return obj;
  }

  if ((0, _size3.default)((0, _get3.default)(obj, path)) > 0 && isRecursiveCall) {
    return obj;
  }

  var objectWithRemovedKey = (0, _unset3.default)(path, obj);
  var newPath = path.match(/\./) ? (0, _replace3.default)(path, /\.[^.]*$/, '') : '';
  return recursiveUnset(newPath, objectWithRemovedKey, true);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseConvert = __webpack_require__(254),
    util = __webpack_require__(256);

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert(name, func, options) {
  return baseConvert(util, name, func, options);
}

module.exports = convert;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(133),
    createBind = __webpack_require__(258),
    createCurry = __webpack_require__(259),
    createHybrid = __webpack_require__(135),
    createPartial = __webpack_require__(275),
    getData = __webpack_require__(139),
    mergeData = __webpack_require__(276),
    setData = __webpack_require__(141),
    setWrapToString = __webpack_require__(142),
    toInteger = __webpack_require__(145);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(44),
    baseLodash = __webpack_require__(83);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

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
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfileOnFirestore = exports.updateProfileOnRTDB = exports.createAuthIsReady = exports.authIsReady = exports.getLoginMethodAndParams = undefined;

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isString2 = __webpack_require__(11);

var _isString3 = _interopRequireDefault(_isString2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _capitalize2 = __webpack_require__(289);

var _capitalize3 = _interopRequireDefault(_capitalize2);

exports.setupPresence = setupPresence;

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createAuthProvider = function createAuthProvider(firebase, providerName, scopes) {
  var capitalProviderName = (0, _capitalize3.default)(providerName) + 'AuthProvider';

  if (!firebase.auth[capitalProviderName]) {
    throw new Error(providerName + ' is not a valid auth provider for your firebase instance. If using react-native, use a RN specific auth library.');
  }

  var provider = new firebase.auth[capitalProviderName]();

  var customAuthParameters = firebase._.config.customAuthParameters;

  if (customAuthParameters && customAuthParameters[providerName]) {
    provider.setCustomParameters(customAuthParameters[providerName]);
  }

  if (providerName.toLowerCase() === 'twitter' || !(0, _isFunction3.default)(provider.addScope)) {
    return provider;
  }

  provider.addScope('email');

  if (scopes) {
    if ((0, _isArray3.default)(scopes)) {
      scopes.forEach(function (scope) {
        provider.addScope(scope);
      });
    }
    if ((0, _isString3.default)(scopes)) {
      provider.addScope(scopes);
    }
  }

  return provider;
};

var getLoginMethodAndParams = exports.getLoginMethodAndParams = function getLoginMethodAndParams(firebase, creds) {
  var email = creds.email,
      password = creds.password,
      provider = creds.provider,
      type = creds.type,
      token = creds.token,
      scopes = creds.scopes,
      phoneNumber = creds.phoneNumber,
      applicationVerifier = creds.applicationVerifier,
      credential = creds.credential;

  if (credential) {
    var credentialAuth = firebase.auth().signInAndRetrieveDataWithCredential;

    if (credentialAuth) {
      return {
        method: 'signInAndRetrieveDataWithCredential',
        params: [credential]
      };
    }
    return { method: 'signInWithCredential', params: [credential] };
  }

  if (provider) {
    if (_constants.supportedAuthProviders.indexOf(provider.toLowerCase()) === -1) {
      throw new Error(provider + ' is not a valid Auth Provider');
    }
    if (token) {
      throw new Error('provider with token no longer supported, use credential parameter instead');
    }
    var authProvider = createAuthProvider(firebase, provider, scopes);
    if (type === 'popup') {
      return { method: 'signInWithPopup', params: [authProvider] };
    }
    return { method: 'signInWithRedirect', params: [authProvider] };
  }

  if (token) {
    var tokenAuth = firebase.auth().signInAndRetrieveDataWithCustomToken;

    if (tokenAuth) {
      return { method: 'signInAndRetrieveDataWithCustomToken', params: [token] };
    }

    return { method: 'signInWithCustomToken', params: [token] };
  }

  if (phoneNumber) {
    if (!applicationVerifier) {
      throw new Error('Application verifier is required for phone authentication');
    }
    return {
      method: 'signInWithPhoneNumber',
      params: [phoneNumber, applicationVerifier]
    };
  }

  if (!firebase.auth().signInWithEmailAndPassword) {
    return {
      method: 'signInAndRetrieveDataWithEmailAndPassword',
      params: [email, password]
    };
  }

  return { method: 'signInWithEmailAndPassword', params: [email, password] };
};

var isAuthReady = function isAuthReady(store, stateName) {
  var state = store.getState();
  var firebaseState = stateName ? state[stateName] : state;
  var firebaseAuthState = firebaseState && firebaseState.auth;
  if (!firebaseAuthState) {
    throw new Error('The Firebase auth state could not be found in the store under the attribute \'' + (stateName ? stateName + '.' : '') + 'auth\'. Make sure your react-redux-firebase reducer is correctly set in the store');
  }
  return firebaseState.auth.isLoaded;
};

var authIsReady = exports.authIsReady = function authIsReady(store) {
  var stateName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'firebase';
  return new Promise(function (resolve) {
    if (isAuthReady(store, stateName)) {
      resolve();
    } else {
      var unsubscribe = store.subscribe(function () {
        if (isAuthReady(store, stateName)) {
          unsubscribe();
          resolve();
        }
      });
    }
  });
};

var createAuthIsReady = exports.createAuthIsReady = function createAuthIsReady(store, config) {
  return (0, _isFunction3.default)(config.authIsReady) ? config.authIsReady(store, config) : authIsReady(store, config.firebaseStateName);
};

var updateProfileOnRTDB = exports.updateProfileOnRTDB = function updateProfileOnRTDB(firebase, profileUpdate) {
  var database = firebase.database,
      _firebase$_ = firebase._,
      config = _firebase$_.config,
      authUid = _firebase$_.authUid;

  var profileRef = database().ref(config.userProfile + '/' + authUid);
  return profileRef.update(profileUpdate).then(function () {
    return profileRef.once('value');
  });
};

var updateProfileOnFirestore = exports.updateProfileOnFirestore = function updateProfileOnFirestore(firebase, profileUpdate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$useSet = options.useSet,
      useSet = _options$useSet === undefined ? true : _options$useSet,
      _options$merge = options.merge,
      merge = _options$merge === undefined ? true : _options$merge;
  var firestore = firebase.firestore,
      _firebase$_2 = firebase._,
      config = _firebase$_2.config,
      authUid = _firebase$_2.authUid;

  var profileRef = firestore().doc(config.userProfile + '/' + authUid);

  var profileUpdatePromise = useSet ? profileRef.set(profileUpdate, { merge: merge }) : profileRef.update(profileUpdate);
  return profileUpdatePromise.then(function () {
    return profileRef.get();
  });
};

function setupPresence(dispatch, firebase) {
  if (!firebase.database || !firebase.database.ServerValue) {
    return;
  }
  var ref = firebase.database().ref();
  var _firebase$_3 = firebase._,
      _firebase$_3$config = _firebase$_3.config,
      presence = _firebase$_3$config.presence,
      sessions = _firebase$_3$config.sessions,
      authUid = _firebase$_3.authUid;

  var amOnline = ref.child('.info/connected');
  var onlineRef = ref.child((0, _isFunction3.default)(presence) ? presence(firebase.auth().currentUser, firebase) : presence).child(authUid);
  var sessionsRef = (0, _isFunction3.default)(sessions) ? sessions(firebase.auth().currentUser, firebase) : sessions;
  if (sessionsRef) {
    sessionsRef = ref.child(sessions);
  }
  amOnline.on('value', function (snapShot) {
    if (!snapShot.val()) return;

    if (sessionsRef) {
      dispatch({ type: _constants.actionTypes.SESSION_START, payload: authUid });

      var session = sessionsRef.push({
        startedAt: firebase.database.ServerValue.TIMESTAMP,
        user: authUid
      });

      if ((0, _isFunction3.default)(session.setPriority)) {
        session.setPriority(authUid);
      }
      session.child('endedAt').onDisconnect().set(firebase.database.ServerValue.TIMESTAMP, function () {
        dispatch({ type: _constants.actionTypes.SESSION_END });
      });
    }

    onlineRef.set(true);
    onlineRef.onDisconnect().remove();
  });
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFirebaseInstance = undefined;

var _isObject2 = __webpack_require__(1);

var _isObject3 = _interopRequireDefault(_isObject2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(20);

var _actions = __webpack_require__(115);

var _actions2 = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createFirebaseInstance = exports.createFirebaseInstance = function createFirebaseInstance(firebase, configs, dispatch) {
  if (configs.enableLogging && firebase.database && typeof firebase.database.enableLogging === 'function') {
    firebase.database.enableLogging(configs.enableLogging);
  }

  var defaultInternals = {
    watchers: {},
    listeners: {},
    callbacks: {},
    queries: {},
    config: configs,
    authUid: null
  };

  Object.defineProperty(firebase, '_', {
    value: defaultInternals,
    writable: true,
    enumerable: true,
    configurable: true
  });

  var withMeta = function withMeta(method, path, value, onComplete) {
    if ((0, _isObject3.default)(value)) {
      var prefix = method === 'update' ? 'updated' : 'created';
      var dataWithMeta = _extends({}, value, _defineProperty({}, prefix + 'At', firebase.database.ServerValue.TIMESTAMP));
      if (firebase.auth().currentUser) {
        dataWithMeta[prefix + 'By'] = firebase.auth().currentUser.uid;
      }
      return firebase.database().ref(path)[method](dataWithMeta, onComplete);
    }
    return firebase.database().ref(path)[method](value, onComplete);
  };

  var set = function set(path, value, onComplete) {
    return firebase.database().ref(path).set(value, onComplete);
  };

  var setWithMeta = function setWithMeta(path, value, onComplete) {
    return withMeta('set', path, value, onComplete);
  };

  var push = function push(path, value, onComplete) {
    return firebase.database().ref(path).push(value, onComplete);
  };

  var pushWithMeta = function pushWithMeta(path, value, onComplete) {
    return withMeta('push', path, value, onComplete);
  };

  var update = function update(path, value, onComplete) {
    return firebase.database().ref(path).update(value, onComplete);
  };

  var updateWithMeta = function updateWithMeta(path, value, onComplete) {
    return withMeta('update', path, value, onComplete);
  };

  var remove = function remove(path, onComplete, options) {
    return _actions2.queryActions.remove(firebase, dispatch, path, options).then(function () {
      if (typeof onComplete === 'function') onComplete();
      return path;
    });
  };

  var uniqueSet = function uniqueSet(path, value, onComplete) {
    return firebase.database().ref(path).transaction(function (d) {
      return d === null ? value : undefined;
    }).then(function (_ref) {
      var committed = _ref.committed,
          snapshot = _ref.snapshot;

      if (!committed) {
        var newError = new Error('Path already exists.');
        if (onComplete) onComplete(newError);
        return Promise.reject(newError);
      }
      if (onComplete) onComplete(snapshot);
      return snapshot;
    });
  };

  var uploadFile = function uploadFile(path, file, dbPath, options) {
    return _actions2.storageActions.uploadFile(dispatch, firebase, {
      path: path,
      file: file,
      dbPath: dbPath,
      options: options
    });
  };

  var uploadFiles = function uploadFiles(path, files, dbPath, options) {
    return _actions2.storageActions.uploadFiles(dispatch, firebase, {
      path: path,
      files: files,
      dbPath: dbPath,
      options: options
    });
  };

  var deleteFile = function deleteFile(path, dbPath) {
    return _actions2.storageActions.deleteFile(dispatch, firebase, { path: path, dbPath: dbPath });
  };

  var watchEvent = function watchEvent(type, path, storeAs) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return _actions2.queryActions.watchEvent(firebase, dispatch, _extends({
      type: type,
      path: path,
      storeAs: storeAs
    }, options));
  };

  var unWatchEvent = function unWatchEvent(type, path, queryId) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return _actions2.queryActions.unWatchEvent(firebase, dispatch, _extends({
      type: type,
      path: path,
      queryId: queryId
    }, options));
  };

  var promiseEvents = function promiseEvents(watchArray, options) {
    var inputAsFunc = (0, _utils.createCallable)(watchArray);
    var prevData = inputAsFunc(options, firebase);
    var queryConfigs = (0, _utils.getEventsFromInput)(prevData);

    return Promise.all(queryConfigs.map(function (queryConfig) {
      return _actions2.queryActions.watchEvent(firebase, dispatch, queryConfig);
    }));
  };

  var login = function login(credentials) {
    return _actions2.authActions.login(dispatch, firebase, credentials);
  };

  var logout = function logout() {
    return _actions2.authActions.logout(dispatch, firebase);
  };

  var createUser = function createUser(credentials, profile) {
    return _actions2.authActions.createUser(dispatch, firebase, credentials, profile);
  };

  var resetPassword = function resetPassword(credentials) {
    return _actions2.authActions.resetPassword(dispatch, firebase, credentials);
  };

  var confirmPasswordReset = function confirmPasswordReset(code, password) {
    return _actions2.authActions.confirmPasswordReset(dispatch, firebase, code, password);
  };

  var verifyPasswordResetCode = function verifyPasswordResetCode(code) {
    return _actions2.authActions.verifyPasswordResetCode(dispatch, firebase, code);
  };

  var updateProfile = function updateProfile(profileUpdate, options) {
    return _actions2.authActions.updateProfile(dispatch, firebase, profileUpdate, options);
  };

  var updateAuth = function updateAuth(authUpdate, updateInProfile) {
    return _actions2.authActions.updateAuth(dispatch, firebase, authUpdate, updateInProfile);
  };

  var updateEmail = function updateEmail(newEmail, updateInProfile) {
    return _actions2.authActions.updateEmail(dispatch, firebase, newEmail, updateInProfile);
  };

  var reloadAuth = function reloadAuth() {
    return _actions2.authActions.reloadAuth(dispatch, firebase);
  };

  var linkWithCredential = function linkWithCredential(credential) {
    return _actions2.authActions.linkWithCredential(dispatch, firebase, credential);
  };

  var actionCreators = (0, _actions.mapWithFirebaseAndDispatch)(firebase, dispatch, {
    signInWithPhoneNumber: _actions2.authActions.signInWithPhoneNumber
  });

  var helpers = _extends({
    ref: function ref(path) {
      return firebase.database().ref(path);
    },
    set: set,
    setWithMeta: setWithMeta,
    uniqueSet: uniqueSet,
    push: push,
    pushWithMeta: pushWithMeta,
    remove: remove,
    update: update,
    updateWithMeta: updateWithMeta,
    login: login,
    logout: logout,
    updateAuth: updateAuth,
    updateEmail: updateEmail,
    updateProfile: updateProfile,
    uploadFile: uploadFile,
    uploadFiles: uploadFiles,
    deleteFile: deleteFile,
    createUser: createUser,
    resetPassword: resetPassword,
    confirmPasswordReset: confirmPasswordReset,
    verifyPasswordResetCode: verifyPasswordResetCode,
    watchEvent: watchEvent,
    unWatchEvent: unWatchEvent,
    reloadAuth: reloadAuth,
    linkWithCredential: linkWithCredential,
    promiseEvents: promiseEvents
  }, actionCreators);

  return _extends(firebase, helpers, { helpers: helpers });
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(149)))

/***/ }),
/* 88 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(90),
    arraySome = __webpack_require__(91),
    cacheHas = __webpack_require__(92);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(51),
    setCacheAdd = __webpack_require__(183),
    setCacheHas = __webpack_require__(184);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(95),
    getSymbols = __webpack_require__(54),
    keys = __webpack_require__(14);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(53),
    isArray = __webpack_require__(0);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(189),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(33),
    isIndex = __webpack_require__(15),
    isTypedArray = __webpack_require__(56);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);

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

module.exports = isStrictComparable;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(199);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(202),
    hasPath = __webpack_require__(105);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(17),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(15),
    isLength = __webpack_require__(57),
    toKey = __webpack_require__(10);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

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

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
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

module.exports = baseSlice;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(109),
    keys = __webpack_require__(14);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(210);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(213),
    hasPath = __webpack_require__(105);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(66);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
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
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(96),
    baseFilter = __webpack_require__(215),
    baseIteratee = __webpack_require__(7),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populateAndDispatch = exports.orderedFromSnapshot = exports.applyParamsToQuery = exports.unsetWatcher = exports.getWatcherCount = exports.setWatcher = exports.getQueryIdFromPath = exports.getWatchPath = undefined;

var _isString2 = __webpack_require__(11);

var _isString3 = _interopRequireDefault(_isString2);

var _size2 = __webpack_require__(68);

var _size3 = _interopRequireDefault(_size2);

var _forEach2 = __webpack_require__(67);

var _forEach3 = _interopRequireDefault(_forEach2);

var _isNaN2 = __webpack_require__(219);

var _isNaN3 = _interopRequireDefault(_isNaN2);

var _constants = __webpack_require__(4);

var _populate = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tryParseToNumber = function tryParseToNumber(value) {
  var result = Number(value);
  if ((0, _isNaN3.default)(result)) {
    return value;
  }
  return result;
};

var getWatchPath = exports.getWatchPath = function getWatchPath(event, path) {
  if (!event || event === '' || !path) {
    throw new Error('Event and path are required');
  }
  return event + ':' + (path.substring(0, 1) === '/' ? '' : '/') + path;
};

var getQueryIdFromPath = exports.getQueryIdFromPath = function getQueryIdFromPath(path, event) {
  if (!(0, _isString3.default)(path)) {
    throw new Error('Query path must be a string');
  }
  var origPath = path;
  var pathSplitted = path.split('#');
  path = pathSplitted[0];

  var isQuery = pathSplitted.length > 1;
  var queryParams = isQuery ? pathSplitted[1].split('&') : [];
  var queryId = isQuery ? queryParams.map(function (param) {
    var splittedParam = param.split('=');

    if (splittedParam[0] === 'queryId') {
      return splittedParam[1];
    }
  }).filter(function (q) {
    return q;
  }) : undefined;
  return queryId && queryId.length > 0 ? event ? event + ':/' + queryId : queryId[0] : isQuery ? origPath : undefined;
};

var setWatcher = exports.setWatcher = function setWatcher(firebase, dispatch, event, path, queryId) {
  var id = queryId || getQueryIdFromPath(path, event) || getWatchPath(event, path);

  if (firebase._.watchers[id]) {
    firebase._.watchers[id]++;
  } else {
    firebase._.watchers[id] = 1;
  }

  dispatch({ type: _constants.actionTypes.SET_LISTENER, path: path, payload: { id: id } });

  return firebase._.watchers[id];
};

var getWatcherCount = exports.getWatcherCount = function getWatcherCount(firebase, event, path, queryId) {
  var id = queryId || getQueryIdFromPath(path, event) || getWatchPath(event, path);
  return firebase._.watchers[id];
};

var unsetWatcher = exports.unsetWatcher = function unsetWatcher(firebase, dispatch, event, path, queryId) {
  var id = queryId || getQueryIdFromPath(path, event) || getWatchPath(event, path);
  path = path.split('#')[0];
  var watchers = firebase._.watchers;

  if (watchers[id] <= 1) {
    delete watchers[id];
    if (event !== 'first_child' && event !== 'once') {
      firebase.database().ref().child(path).off(event);
    }
  } else if (watchers[id]) {
    watchers[id]--;
  }

  dispatch({ type: _constants.actionTypes.UNSET_LISTENER, path: path, payload: { id: id } });
};

var applyParamsToQuery = exports.applyParamsToQuery = function applyParamsToQuery(queryParams, query) {
  var doNotParse = false;
  if (queryParams) {
    queryParams.forEach(function (param) {
      param = param.split('=');
      switch (param[0]) {
        case 'orderByValue':
          query = query.orderByValue();
          doNotParse = true;
          break;
        case 'orderByPriority':
          query = query.orderByPriority();
          doNotParse = true;
          break;
        case 'orderByKey':
          query = query.orderByKey();
          doNotParse = true;
          break;
        case 'orderByChild':
          query = query.orderByChild(param[1]);
          break;
        case 'limitToFirst':
          query = query.limitToFirst(parseInt(param[1], 10));
          break;
        case 'limitToLast':
          query = query.limitToLast(parseInt(param[1], 10));
          break;
        case 'notParsed':
          doNotParse = true;
          break;
        case 'parsed':
          doNotParse = false;
          break;
        case 'equalTo':
          var equalToParam = !doNotParse ? tryParseToNumber(param[1]) : param[1];
          equalToParam = equalToParam === 'null' ? null : equalToParam;
          equalToParam = equalToParam === 'false' ? false : equalToParam;
          equalToParam = equalToParam === 'true' ? true : equalToParam;
          query = param.length === 3 ? query.equalTo(equalToParam, param[2]) : query.equalTo(equalToParam);
          break;
        case 'startAt':
          var startAtParam = !doNotParse ? tryParseToNumber(param[1]) : param[1];
          startAtParam = startAtParam === 'null' ? null : startAtParam;
          query = param.length === 3 ? query.startAt(startAtParam, param[2]) : query.startAt(startAtParam);
          break;
        case 'endAt':
          var endAtParam = !doNotParse ? tryParseToNumber(param[1]) : param[1];
          endAtParam = endAtParam === 'null' ? null : endAtParam;
          query = param.length === 3 ? query.endAt(endAtParam, param[2]) : query.endAt(endAtParam);
          break;
      }
    });
  }

  return query;
};

var orderedFromSnapshot = exports.orderedFromSnapshot = function orderedFromSnapshot(snap) {
  if (snap.hasChildren && !snap.hasChildren()) {
    return null;
  }
  var ordered = [];
  if (snap.forEach) {
    snap.forEach(function (child) {
      ordered.push({ key: child.key, value: child.val() });
    });
  }
  return (0, _size3.default)(ordered) ? ordered : null;
};

var populateAndDispatch = exports.populateAndDispatch = function populateAndDispatch(firebase, dispatch, config) {
  var data = config.data,
      populates = config.populates,
      snapshot = config.snapshot,
      path = config.path,
      storeAs = config.storeAs;

  return (0, _populate.promisesForPopulate)(firebase, snapshot.key, data, populates).then(function (results) {
    (0, _forEach3.default)(results, function (result, path) {
      dispatch({
        type: _constants.actionTypes.MERGE,
        path: path,
        data: result
      });
    });
    dispatch({
      type: _constants.actionTypes.SET,
      path: storeAs || path,
      data: data,
      ordered: orderedFromSnapshot(snapshot)
    });
    return results;
  }).catch(function (err) {
    dispatch({
      type: _constants.actionTypes.ERROR,
      payload: err
    });
    return Promise.reject(err);
  });
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapWithFirebaseAndDispatch = exports.wrapInDispatch = undefined;

var _mapValues2 = __webpack_require__(116);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _isObject2 = __webpack_require__(1);

var _isObject3 = _interopRequireDefault(_isObject2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var wrapInDispatch = exports.wrapInDispatch = function wrapInDispatch(dispatch, _ref) {
  var ref = _ref.ref,
      meta = _ref.meta,
      method = _ref.method,
      _ref$args = _ref.args,
      args = _ref$args === undefined ? [] : _ref$args,
      types = _ref.types;

  var _types = _slicedToArray(types, 3),
      requestingType = _types[0],
      successType = _types[1],
      errorType = _types[2];

  dispatch({
    type: (0, _isObject3.default)(requestingType) ? requestingType.type : requestingType,
    meta: meta,
    payload: (0, _isObject3.default)(requestingType) ? requestingType.payload : { args: args }
  });
  return method.apply(undefined, _toConsumableArray(args)).then(function (payload) {
    dispatch({
      type: (0, _isObject3.default)(successType) ? successType.type : successType,
      meta: meta,
      payload: (0, _isObject3.default)(successType) ? successType.payload : payload
    });
    return payload;
  }).catch(function (err) {
    dispatch({
      type: errorType,
      meta: meta,
      payload: err
    });
    return Promise.reject(err);
  });
};

var createWithFirebaseAndDispatch = function createWithFirebaseAndDispatch(firebase, dispatch, dispatchFirst) {
  return function (func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return func.apply(firebase, dispatchFirst ? [dispatch, firebase].concat(args) : [firebase, dispatch].concat(args));
    };
  };
};

var mapWithFirebaseAndDispatch = exports.mapWithFirebaseAndDispatch = function mapWithFirebaseAndDispatch(firebase, dispatch, actions) {
  var aliases = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var withFirebaseAndDispatch = createWithFirebaseAndDispatch(firebase, dispatch);
  return _extends({}, (0, _mapValues3.default)(actions, withFirebaseAndDispatch), aliases.reduce(function (acc, _ref2) {
    var action = _ref2.action,
        name = _ref2.name;
    return _extends({}, acc, _defineProperty({}, name, withFirebaseAndDispatch(action)));
  }, {}));
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(40),
    baseForOwn = __webpack_require__(108),
    baseIteratee = __webpack_require__(7);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storageActions = exports.queryActions = exports.authActions = undefined;

var _auth = __webpack_require__(221);

var authActions = _interopRequireWildcard(_auth);

var _query = __webpack_require__(146);

var queryActions = _interopRequireWildcard(_query);

var _storage = __webpack_require__(296);

var storageActions = _interopRequireWildcard(_storage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.authActions = authActions;
exports.queryActions = queryActions;
exports.storageActions = storageActions;
exports.default = { authActions: authActions, queryActions: queryActions, storageActions: storageActions };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(36),
    baseSet = __webpack_require__(66),
    castPath = __webpack_require__(17);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(42);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(18),
    baseClone = __webpack_require__(73),
    baseUnset = __webpack_require__(61),
    castPath = __webpack_require__(17),
    copyObject = __webpack_require__(12),
    customOmitClone = __webpack_require__(240),
    flatRest = __webpack_require__(71),
    getAllKeysIn = __webpack_require__(75);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(12),
    keys = __webpack_require__(14);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(53),
    getPrototype = __webpack_require__(74),
    getSymbols = __webpack_require__(54),
    stubArray = __webpack_require__(97);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(76);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(44),
    getPrototype = __webpack_require__(74),
    isPrototype = __webpack_require__(35);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populate = exports.fixPath = exports.isEmpty = exports.isLoaded = exports.getVal = undefined;

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _some2 = __webpack_require__(64);

var _some3 = _interopRequireDefault(_some2);

var _compact2 = __webpack_require__(241);

var _compact3 = _interopRequireDefault(_compact2);

var _isString2 = __webpack_require__(11);

var _isString3 = _interopRequireDefault(_isString2);

var _defaultsDeep2 = __webpack_require__(242);

var _defaultsDeep3 = _interopRequireDefault(_defaultsDeep2);

var _reduce2 = __webpack_require__(247);

var _reduce3 = _interopRequireDefault(_reduce2);

var _every2 = __webpack_require__(250);

var _every3 = _interopRequireDefault(_every2);

var _mapValues2 = __webpack_require__(116);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _map2 = __webpack_require__(37);

var _map3 = _interopRequireDefault(_map2);

var _last2 = __webpack_require__(62);

var _last3 = _interopRequireDefault(_last2);

var _has2 = __webpack_require__(110);

var _has3 = _interopRequireDefault(_has2);

var _get2 = __webpack_require__(22);

var _get3 = _interopRequireDefault(_get2);

var _set2 = __webpack_require__(111);

var _set3 = _interopRequireDefault(_set2);

var _size2 = __webpack_require__(68);

var _size3 = _interopRequireDefault(_size2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _populate = __webpack_require__(38);

var _reducers = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getVal = exports.getVal = function getVal(firebase, path, notSetValue) {
  if (!firebase) {
    return notSetValue;
  }

  var dotPath = (0, _reducers.getDotStrPath)(path);
  var valueAtPath = (0, _get3.default)(firebase, dotPath, notSetValue);

  return valueAtPath;
};

var isLoaded = exports.isLoaded = function isLoaded() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args || !args.length ? true : (0, _every3.default)(args, function (arg) {
    return arg !== undefined && (0, _get3.default)(arg, 'isLoaded') !== false;
  });
};

var isEmpty = exports.isEmpty = function isEmpty() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return (0, _some3.default)(args, function (arg) {
    return !(arg && (0, _size3.default)(arg)) || arg.isEmpty === true;
  });
};

var fixPath = exports.fixPath = function fixPath(path) {
  return (path.substring(0, 1) === '/' ? '' : '/') + path;
};

var buildChildList = function buildChildList(state, list, p) {
  return (0, _mapValues3.default)(list, function (val, key) {
    var getKey = val;

    if (val === true || p.populateByKey) {
      getKey = key;
    }

    var dotRoot = (0, _compact3.default)(p.root.split('/')).join('.');
    var pathArr = [dotRoot, getKey];

    if (p.childParam) {
      pathArr.push(p.childParam);
    }

    var pathString = pathArr.join('.');

    if ((0, _get3.default)(state.data, pathString)) {
      return p.keyProp ? _extends(_defineProperty({}, p.keyProp, getKey), (0, _get3.default)(state.data, pathString)) : (0, _get3.default)(state.data, pathString);
    }

    return val === true || p.populateByKey ? val : getKey;
  });
};

var populateChild = function populateChild(state, child, p) {
  var childVal = (0, _get3.default)(child, p.child);
  if (!child || !childVal) {
    return null;
  }

  if ((0, _isString3.default)(childVal)) {
    var dotRoot = (0, _compact3.default)(p.root.split('/')).join('.');
    var pathArr = [dotRoot, childVal];

    if (p.childParam) {
      pathArr.push(p.childParam);
    }

    var pathString = pathArr.join('.');

    var populateVal = (0, _get3.default)(state.data, pathString);
    if (populateVal) {
      return (0, _set3.default)({}, p.childAlias || p.child, p.keyProp ? _extends(_defineProperty({}, p.keyProp, childVal), populateVal) : populateVal);
    }

    return child;
  }

  return (0, _set3.default)({}, p.childAlias || p.child, buildChildList(state, childVal, p));
};

var populate = exports.populate = function populate(state, path, populates, notSetValue) {
  var splitPath = (0, _compact3.default)(path.split('/'));

  var pathArr = _constants.topLevelPaths.indexOf(splitPath[0]) === -1 ? ['data'].concat(_toConsumableArray(splitPath)) : splitPath;
  var dotPath = pathArr.join('.');

  var data = (0, _get3.default)(state, dotPath, notSetValue);

  if (!state || data === notSetValue) {
    return notSetValue;
  }

  if (data === null) {
    return null;
  }

  var populatesForData = (0, _populate.getPopulateObjs)((0, _isFunction3.default)(populates) ? populates((0, _last3.default)(pathArr), data) : populates);

  if ((0, _isArray3.default)(data)) {
    var someArrayItemHasKey = function someArrayItemHasKey(array) {
      return function (key) {
        return (0, _some3.default)(array, function (item) {
          return (0, _has3.default)(item, key);
        });
      };
    };

    var _dataHasPopulateChilds = (0, _some3.default)(populatesForData, function (populate) {
      return someArrayItemHasKey(data)(['value', populate.child]);
    });

    if (_dataHasPopulateChilds) {
      return data.map(function (_ref) {
        var key = _ref.key,
            dataValue = _ref.value;

        var populatedValue = populatesForData.map(function (p) {
          return populateChild(state, dataValue, p);
        }).reduce(function (acc, v) {
          return (0, _defaultsDeep3.default)(v, acc);
        }, dataValue);

        return {
          key: key,
          value: populatedValue
        };
      });
    }

    return data;
  }

  var dataHasPopulateChilds = (0, _some3.default)(populatesForData, function (p) {
    return (0, _has3.default)(data, p.child);
  });

  if (dataHasPopulateChilds) {
    return populatesForData.map(function (p) {
      return populateChild(state, data, p);
    }).reduce(function (acc, v) {
      return (0, _defaultsDeep3.default)(v, acc);
    }, data);
  }

  if (pathArr.indexOf('profile') !== -1) {
    return data;
  }

  return (0, _mapValues3.default)(data, function (child, childKey) {
    var key = pathArr[0] === 'ordered' ? child.key : childKey;

    var populatesForDataItem = (0, _populate.getPopulateObjs)((0, _isFunction3.default)(populates) ? populates(key, child) : populates);

    var dataHasPopulateChilds = (0, _some3.default)(populatesForDataItem, function (p) {
      return (0, _has3.default)(child, p.child);
    });

    if (!dataHasPopulateChilds) {
      return child;
    }

    return (0, _reduce3.default)((0, _map3.default)(populatesForDataItem, function (p) {
      return populateChild(state, child, p);
    }), function (obj, v) {
      return (0, _defaultsDeep3.default)(v, obj);
    }, child);
  });
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    assignMergeValue = __webpack_require__(129),
    baseFor = __webpack_require__(109),
    baseMergeDeep = __webpack_require__(244),
    isObject = __webpack_require__(1),
    keysIn = __webpack_require__(43),
    safeGet = __webpack_require__(131);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(40),
    eq = __webpack_require__(21);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(8),
    isObjectLike = __webpack_require__(2);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(78),
    isIterateeCall = __webpack_require__(65);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(25),
    metaMap = __webpack_require__(134);

/**
 * The base implementation of `setData` without support for hot loop shorting.
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

module.exports = baseSetData;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(100);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(136),
    composeArgsRight = __webpack_require__(137),
    countHolders = __webpack_require__(260),
    createCtor = __webpack_require__(46),
    createRecurry = __webpack_require__(138),
    getHolder = __webpack_require__(144),
    reorder = __webpack_require__(274),
    replaceHolders = __webpack_require__(84),
    root = __webpack_require__(3);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(261),
    setData = __webpack_require__(141),
    setWrapToString = __webpack_require__(142);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(134),
    noop = __webpack_require__(262);

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

module.exports = getData;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(44),
    baseLodash = __webpack_require__(83);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(133),
    shortOut = __webpack_require__(120);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(267),
    insertWrapDetails = __webpack_require__(268),
    setToString = __webpack_require__(72),
    updateWrapDetails = __webpack_require__(269);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(270);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(277);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.unWatchEvents = exports.watchEvents = exports.unWatchEvent = exports.watchEvent = undefined;

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _constants = __webpack_require__(4);

var _query = __webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var watchEvent = exports.watchEvent = function watchEvent(firebase, dispatch, options) {
  if (!firebase.database || typeof firebase.database !== 'function') {
    throw new Error('Firebase database is required to create watchers');
  }
  var type = options.type,
      path = options.path,
      populates = options.populates,
      queryParams = options.queryParams,
      queryId = options.queryId,
      isQuery = options.isQuery,
      storeAs = options.storeAs;
  var logErrors = firebase._.config.logErrors;


  var watchPath = !storeAs ? path : path + '@' + storeAs;
  var id = queryId || (0, _query.getQueryIdFromPath)(path);
  var counter = (0, _query.getWatcherCount)(firebase, type, watchPath, id);

  if (counter > 0) {
    if (id) {
      (0, _query.unsetWatcher)(firebase, dispatch, type, path, id);
    }
  }

  (0, _query.setWatcher)(firebase, dispatch, type, watchPath, id);

  if (type === 'first_child') {
    return firebase.database().ref().child(path).orderByKey().limitToFirst(1).once('value').then(function (snapshot) {
      if (snapshot.val() === null) {
        dispatch({
          type: _constants.actionTypes.NO_VALUE,
          path: storeAs || path
        });
      }
      return snapshot;
    }).catch(function (err) {
      dispatch({
        type: _constants.actionTypes.ERROR,
        path: storeAs || path,
        payload: err
      });
      return Promise.reject(err);
    });
  }

  var query = firebase.database().ref().child(path);

  if (isQuery) {
    query = (0, _query.applyParamsToQuery)(queryParams, query);
  }

  dispatch({ type: _constants.actionTypes.START, path: storeAs || path });

  if (type === 'once') {
    return query.once('value').then(function (snapshot) {
      if (snapshot.val() === null) {
        return dispatch({
          type: _constants.actionTypes.NO_VALUE,
          path: storeAs || path
        });
      }

      if (!populates) {
        return dispatch({
          type: _constants.actionTypes.SET,
          path: storeAs || path,
          data: snapshot.val(),
          ordered: (0, _query.orderedFromSnapshot)(snapshot)
        });
      }

      return (0, _query.populateAndDispatch)(firebase, dispatch, {
        path: path,
        storeAs: storeAs,
        snapshot: snapshot,
        data: snapshot.val(),
        populates: populates
      });
    }).catch(function (err) {
      dispatch({
        type: _constants.actionTypes.UNAUTHORIZED_ERROR,
        payload: err
      });
      return Promise.reject(err);
    });
  }

  query.on(type, function (snapshot) {
    var data = type === 'child_removed' ? undefined : snapshot.val();
    var resultPath = storeAs || type === 'value' ? path : path + '/' + snapshot.key;

    if (!populates) {
      var ordered = type === 'child_added' ? [{ key: snapshot.key, value: snapshot.val() }] : (0, _query.orderedFromSnapshot)(snapshot);
      return dispatch({
        type: _constants.actionTypes.SET,
        path: storeAs || resultPath,
        data: data,
        ordered: ordered
      });
    }

    return (0, _query.populateAndDispatch)(firebase, dispatch, {
      path: path,
      storeAs: storeAs,
      snapshot: snapshot,
      data: snapshot.val(),
      populates: populates
    });
  }, function (err) {
    if (logErrors) {
      console.log('RRF: Error retrieving data for path: ' + path + ', storeAs: ' + storeAs + '. Firebase:', err);
    }
    dispatch({
      type: _constants.actionTypes.ERROR,
      storeAs: storeAs,
      path: path,
      payload: err
    });
  });
};

var unWatchEvent = exports.unWatchEvent = function unWatchEvent(firebase, dispatch, _ref) {
  var type = _ref.type,
      path = _ref.path,
      storeAs = _ref.storeAs,
      queryId = _ref.queryId;

  var watchPath = !storeAs ? path : path + '@' + storeAs;
  (0, _query.unsetWatcher)(firebase, dispatch, type, watchPath, queryId);
};

var watchEvents = exports.watchEvents = function watchEvents(firebase, dispatch, events) {
  if (!(0, _isArray3.default)(events)) {
    throw new Error('Events config must be an Array');
  }
  return events.map(function (event) {
    return watchEvent(firebase, dispatch, event);
  });
};

var unWatchEvents = exports.unWatchEvents = function unWatchEvents(firebase, dispatch, events) {
  return events.forEach(function (event) {
    return unWatchEvent(firebase, dispatch, event);
  });
};

var remove = exports.remove = function remove(firebase, dispatch, path) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _options$dispatchActi = options.dispatchAction,
      dispatchAction = _options$dispatchActi === undefined ? true : _options$dispatchActi;
  var dispatchRemoveAction = firebase._.config.dispatchRemoveAction;

  return firebase.database().ref(path).remove().then(function () {
    if (dispatchRemoveAction && dispatchAction) {
      dispatch({ type: _constants.actionTypes.REMOVE, path: path });
    }
    return path;
  }).catch(function (err) {
    dispatch({ type: _constants.actionTypes.ERROR, payload: err });
    return Promise.reject(err);
  });
};

exports.default = { watchEvents: watchEvents, unWatchEvents: unWatchEvents, remove: remove };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(52);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createFirebaseInstance = __webpack_require__(86);

var _firebaseConnect = __webpack_require__(302);

var _firebaseConnect2 = _interopRequireDefault(_firebaseConnect);

var _firestoreConnect = __webpack_require__(306);

var _firestoreConnect2 = _interopRequireDefault(_firestoreConnect);

var _withFirebase = __webpack_require__(307);

var _withFirebase2 = _interopRequireDefault(_withFirebase);

var _withFirestore = __webpack_require__(308);

var _withFirestore2 = _interopRequireDefault(_withFirestore);

var _enhancer = __webpack_require__(309);

var _enhancer2 = _interopRequireDefault(_enhancer);

var _reducer = __webpack_require__(310);

var _reducer2 = _interopRequireDefault(_reducer);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _auth = __webpack_require__(85);

var _helpers = __webpack_require__(127);

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({
  firebase: _firebaseConnect2.default,
  createFirebaseInstance: _createFirebaseInstance.createFirebaseInstance,
  firebaseConnect: _firebaseConnect2.default,
  createFirebaseConnect: _firebaseConnect.createFirebaseConnect,
  firestoreConnect: _firestoreConnect2.default,
  createFirestoreConnect: _firestoreConnect.createFirestoreConnect,
  withFirebase: _withFirebase2.default,
  createWithFirebase: _withFirebase.createWithFirebase,
  withFirestore: _withFirestore2.default,
  createWithFirestore: _withFirestore.createWithFirestore,
  reducer: _reducer2.default,
  firebaseReducer: _reducer2.default,
  firebaseStateReducer: _reducer2.default,
  reduxReactFirebase: _enhancer2.default,
  reactReduxFirebase: _enhancer2.default,
  reduxFirebase: _enhancer2.default,
  constants: _constants2.default,
  actionTypes: _constants.actionTypes,
  getFirebase: _enhancer.getFirebase,
  authIsReady: _auth.authIsReady,
  helpers: helpers
}, helpers);
module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventsFromInput = exports.pathStrToObj = undefined;

var _remove2 = __webpack_require__(153);

var _remove3 = _interopRequireDefault(_remove2);

var _isString2 = __webpack_require__(11);

var _isString3 = _interopRequireDefault(_isString2);

var _isObject2 = __webpack_require__(1);

var _isObject3 = _interopRequireDefault(_isObject2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _flatMap2 = __webpack_require__(207);

var _flatMap3 = _interopRequireDefault(_flatMap2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _populate = __webpack_require__(38);

var _query = __webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathStrToObj = exports.pathStrToObj = function pathStrToObj(path) {
  var pathObj = { path: path, type: 'value', isQuery: false };
  var queryId = (0, _query.getQueryIdFromPath)(path);

  if (queryId) {
    var pathArray = path.split('#');
    pathObj = _extends({}, pathObj, {
      queryId: queryId,
      isQuery: true,
      path: pathArray[0],
      queryParams: pathArray[1].split('&')
    });
    if ((0, _populate.getPopulates)(pathArray[1].split('&'))) {
      pathObj.populates = (0, _populate.getPopulates)(pathArray[1].split('&'));
      pathObj.queryParams = (0, _remove3.default)(pathArray[1].split('&'), function (p) {
        return p.indexOf('populate') === -1;
      });
    }
  }

  return pathObj;
};

var getEventsFromInput = exports.getEventsFromInput = function getEventsFromInput(paths) {
  return (0, _flatMap3.default)(paths, function (path) {
    if ((0, _isString3.default)(path)) {
      return [pathStrToObj(path)];
    }

    if ((0, _isArray3.default)(path)) {
      return [{ type: 'first_child', path: path[0] }, { type: 'child_added', path: path[0] }, { type: 'child_removed', path: path[0] }, { type: 'child_moved', path: path[0] }, { type: 'child_changed', path: path[0] }];
    }

    if ((0, _isObject3.default)(path)) {
      if (!path.path) {
        throw new Error('Path is a required parameter within definition object');
      }
      var strPath = path.path;

      if (path.storeAs) {
        strPath += '@' + path.storeAs;
      }

      if (path.queryParams) {
        strPath += '#' + path.queryParams.join('&');
      }

      path = _extends({}, pathStrToObj(strPath), path);
      return [path];
    }

    throw new Error('Invalid Path Definition: ' + path + '. Only strings, objects, and arrays accepted.');
  });
};

exports.default = { getEventsFromInput: getEventsFromInput };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(7),
    basePullAt = __webpack_require__(205);

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
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
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate, 3);
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

module.exports = remove;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(155),
    getMatchData = __webpack_require__(197),
    matchesStrictComparable = __webpack_require__(102);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    baseIsEqual = __webpack_require__(52);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
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
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(29);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(28);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(28),
    Map = __webpack_require__(50),
    MapCache = __webpack_require__(51);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(5),
    isMasked = __webpack_require__(167),
    isObject = __webpack_require__(1),
    toSource = __webpack_require__(88);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(168);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(171),
    ListCache = __webpack_require__(28),
    Map = __webpack_require__(50);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(172),
    hashDelete = __webpack_require__(173),
    hashGet = __webpack_require__(174),
    hashHas = __webpack_require__(175),
    hashSet = __webpack_require__(176);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(30);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(31);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(27),
    equalArrays = __webpack_require__(89),
    equalByTag = __webpack_require__(185),
    equalObjects = __webpack_require__(188),
    getTag = __webpack_require__(16),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(33),
    isTypedArray = __webpack_require__(56);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    Uint8Array = __webpack_require__(93),
    eq = __webpack_require__(21),
    equalArrays = __webpack_require__(89),
    mapToArray = __webpack_require__(186),
    setToArray = __webpack_require__(187);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(94);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isLength = __webpack_require__(57),
    isObjectLike = __webpack_require__(2);

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
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(99);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(101),
    keys = __webpack_require__(14);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(52),
    get = __webpack_require__(22),
    hasIn = __webpack_require__(104),
    isKey = __webpack_require__(60),
    isStrictComparable = __webpack_require__(101),
    matchesStrictComparable = __webpack_require__(102),
    toKey = __webpack_require__(10);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(200);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(51);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    arrayMap = __webpack_require__(18),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 202 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(106),
    basePropertyDeep = __webpack_require__(204),
    isKey = __webpack_require__(60),
    toKey = __webpack_require__(10);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(36);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(61),
    isIndex = __webpack_require__(15);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

module.exports = basePullAt;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(36),
    baseSlice = __webpack_require__(107);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(63),
    map = __webpack_require__(37);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(19),
    isArrayLike = __webpack_require__(8);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
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

module.exports = baseMap;


/***/ }),
/* 210 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(8);

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
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(19);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
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

module.exports = baseSome;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(25);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(19);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
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

module.exports = baseFilter;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(217),
    hasUnicode = __webpack_require__(69),
    unicodeSize = __webpack_require__(218);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(106);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var isNumber = __webpack_require__(220);

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithPhoneNumber = exports.linkWithCredential = exports.reloadAuth = exports.updateEmail = exports.updateAuth = exports.updateProfile = exports.verifyPasswordResetCode = exports.confirmPasswordReset = exports.resetPassword = exports.createUser = exports.logout = exports.login = exports.init = exports.handleRedirectResult = exports.createUserProfile = exports.watchUserProfile = exports.handleProfileWatchResponse = exports.unWatchUserProfile = undefined;

var _pick2 = __webpack_require__(70);

var _pick3 = _interopRequireDefault(_pick2);

var _omit2 = __webpack_require__(121);

var _omit3 = _interopRequireDefault(_omit2);

var _forEach2 = __webpack_require__(67);

var _forEach3 = _interopRequireDefault(_forEach2);

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isString2 = __webpack_require__(11);

var _isString3 = _interopRequireDefault(_isString2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _helpers = __webpack_require__(127);

var _auth = __webpack_require__(85);

var _populate = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var dispatchLoginError = function dispatchLoginError(dispatch, authError) {
  return dispatch({
    type: _constants.actionTypes.LOGIN_ERROR,
    authError: authError
  });
};

var unWatchUserProfile = exports.unWatchUserProfile = function unWatchUserProfile(firebase) {
  var _firebase$_ = firebase._,
      authUid = _firebase$_.authUid,
      _firebase$_$config = _firebase$_.config,
      userProfile = _firebase$_$config.userProfile,
      useFirestoreForProfile = _firebase$_$config.useFirestoreForProfile;

  if (firebase._.profileWatch) {
    if (useFirestoreForProfile && firebase.firestore) {
      firebase._.profileWatch();
    } else {
      firebase.database().ref().child(userProfile + '/' + authUid).off('value', firebase._.profileWatch);
    }
    firebase._.profileWatch = null;
  }
};

var getProfileFromSnap = function getProfileFromSnap(snap) {
  if (snap && snap.val) {
    return snap.val();
  }

  if (snap && snap.data && snap.exists) {
    return snap.data();
  }
  return null;
};

var handleProfileWatchResponse = exports.handleProfileWatchResponse = function handleProfileWatchResponse(dispatch, firebase, userProfileSnap) {
  var _firebase$_$config2 = firebase._.config,
      profileParamsToPopulate = _firebase$_$config2.profileParamsToPopulate,
      autoPopulateProfile = _firebase$_$config2.autoPopulateProfile,
      useFirestoreForProfile = _firebase$_$config2.useFirestoreForProfile,
      logErrors = _firebase$_$config2.logErrors;

  var profile = getProfileFromSnap(userProfileSnap);
  if (!profileParamsToPopulate || useFirestoreForProfile || !(0, _isArray3.default)(profileParamsToPopulate) && !(0, _isString3.default)(profileParamsToPopulate)) {
    if (useFirestoreForProfile && profileParamsToPopulate) {
      console.warn('Profile population is not yet supported for Firestore');
    }
    dispatch({ type: _constants.actionTypes.SET_PROFILE, profile: profile });
  } else {
    (0, _populate.promisesForPopulate)(firebase, userProfileSnap.key, profile, profileParamsToPopulate).then(function (data) {
      (0, _forEach3.default)(data, function (result, path) {
        dispatch({
          type: _constants.actionTypes.SET,
          path: path,
          data: result,
          timestamp: Date.now(),
          requesting: false,
          requested: true
        });
      });
      if (!autoPopulateProfile) {
        dispatch({ type: _constants.actionTypes.SET_PROFILE, profile: profile });
      } else {
        var populates = (0, _populate.getPopulateObjs)(profileParamsToPopulate);
        var _profile = userProfileSnap.val();
        dispatch({
          type: _constants.actionTypes.SET_PROFILE,
          profile: (0, _helpers.populate)({ profile: _profile, data: data }, 'profile', populates)
        });
      }
    }).catch(function (err) {
      if (logErrors) {
        console.error('RRF: Error retrieving data for profile population. Firebase:', err);
      }

      dispatch({
        type: _constants.actionTypes.UNAUTHORIZED_ERROR,
        authError: 'Error during profile population: ' + err.message
      });

      dispatch({ type: _constants.actionTypes.SET_PROFILE, profile: profile });
    });
  }
};

function createProfileWatchErrorHandler(dispatch, firebase) {
  var _firebase$_$config3 = firebase._.config,
      onProfileListenerError = _firebase$_$config3.onProfileListenerError,
      logErrors = _firebase$_$config3.logErrors;

  return function handleProfileError(err) {
    if (logErrors) {
      console.error('Error with profile listener: ' + (err.message || ''), err);
    }
    if ((0, _isFunction3.default)(onProfileListenerError)) {
      var factoryResult = onProfileListenerError(err, firebase);

      if ((0, _isFunction3.default)(factoryResult.then)) {
        return factoryResult;
      }
    }
    return Promise.reject(err);
  };
}

var watchUserProfile = exports.watchUserProfile = function watchUserProfile(dispatch, firebase) {
  var _firebase$_2 = firebase._,
      authUid = _firebase$_2.authUid,
      _firebase$_2$config = _firebase$_2.config,
      userProfile = _firebase$_2$config.userProfile,
      useFirestoreForProfile = _firebase$_2$config.useFirestoreForProfile;

  unWatchUserProfile(firebase);

  if (userProfile) {
    if (useFirestoreForProfile && firebase.firestore) {
      firebase._.profileWatch = firebase.firestore().collection(userProfile).doc(authUid).onSnapshot(function (userProfileSnap) {
        return handleProfileWatchResponse(dispatch, firebase, userProfileSnap);
      }, createProfileWatchErrorHandler(dispatch, firebase));
    } else if (firebase.database) {
      firebase._.profileWatch = firebase.database().ref().child(userProfile + '/' + authUid).on('value', function (userProfileSnap) {
        return handleProfileWatchResponse(dispatch, firebase, userProfileSnap);
      }, createProfileWatchErrorHandler(dispatch, firebase));
    } else {
      throw new Error('Real Time Database or Firestore must be included to enable user profile');
    }
  }
};

var createUserProfile = exports.createUserProfile = function createUserProfile(dispatch, firebase, userData, profile) {
  var config = firebase._.config;

  if (!config.userProfile || !firebase.database && !firebase.firestore) {
    return Promise.resolve(userData);
  }

  if ((0, _isFunction3.default)(config.profileFactory)) {
    try {
      profile = config.profileFactory(userData, profile);
    } catch (err) {
      console.error('Error occured within profileFactory function:', err.message || err);

      return Promise.reject(err);
    }
  }

  if (config.useFirestoreForProfile) {
    return firebase.firestore().collection(config.userProfile).doc(userData.uid || userData.user.uid).get().then(function (profileSnap) {
      if (!config.updateProfileOnLogin && profileSnap.exists) {
        return profileSnap.data();
      }
      var newProfile = profile;

      if (!newProfile) {
        var userDataObject = userData.uid ? userData.toJSON ? userData.toJSON() : userData : userData.user.toJSON ? userData.user.toJSON() : userData.user;

        newProfile = _extends({}, (0, _omit3.default)(userDataObject, config.keysToRemoveFromAuth), {
          avatarUrl: userDataObject.photoURL });
      }

      if ((0, _isArray3.default)(newProfile.providerData)) {
        newProfile.providerData = newProfile.providerData.map(function (providerDataItem) {
          return (0, _pick3.default)(providerDataItem, config.keysToPreserveFromProviderData);
        });
      }

      return profileSnap.ref.set(newProfile, { merge: true }).then(function () {
        return newProfile;
      });
    }).catch(function (err) {
      dispatch({ type: _constants.actionTypes.UNAUTHORIZED_ERROR, authError: err });
      return Promise.reject(err);
    });
  }

  return firebase.database().ref().child(config.userProfile + '/' + (userData.user ? userData.user.uid : userData.uid)).once('value').then(function (profileSnap) {
    return !config.updateProfileOnLogin && profileSnap.val() !== null ? profileSnap.val() : profileSnap.ref.update(profile).then(function () {
      return profile;
    });
  }).catch(function (err) {
    dispatch({ type: _constants.actionTypes.UNAUTHORIZED_ERROR, authError: err });
    if ((0, _isFunction3.default)(config.onProfileWriteError)) {
      config.onProfileWriteError(err, firebase);
    }
    return Promise.reject(err);
  });
};

var handleAuthStateChange = function handleAuthStateChange(dispatch, firebase, authData) {
  var config = firebase._.config;

  if (!authData) {
    if ((0, _isFunction3.default)(config.onAuthStateChanged)) {
      firebase._.config.onAuthStateChanged(authData, firebase, dispatch);
    }
    dispatch({
      type: _constants.actionTypes.AUTH_EMPTY_CHANGE,
      preserve: config.preserveOnEmptyAuthChange
    });
  } else {
    firebase._.authUid = authData.uid;
    if (config.presence) {
      (0, _auth.setupPresence)(dispatch, firebase);
    }

    dispatch({
      type: _constants.actionTypes.LOGIN,
      auth: authData,
      preserve: config.preserveOnLogin
    });

    watchUserProfile(dispatch, firebase);

    if ((0, _isFunction3.default)(config.onAuthStateChanged)) {
      config.onAuthStateChanged(authData, firebase, dispatch);
    }
  }
};

var handleRedirectResult = exports.handleRedirectResult = function handleRedirectResult(dispatch, firebase, authData) {
  if (typeof firebase._.config.onRedirectResult === 'function') {
    firebase._.config.onRedirectResult(authData, firebase, dispatch);
  }
  if (authData && authData.user) {
    var user = authData.user;


    firebase._.authUid = user.uid;
    watchUserProfile(dispatch, firebase);

    dispatch({
      type: _constants.actionTypes.LOGIN,
      auth: user,
      preserve: firebase._.config.preserveOnLogin
    });

    return createUserProfile(dispatch, firebase, user, {
      email: user.email,
      displayName: user.providerData[0].displayName || user.email,
      avatarUrl: user.providerData[0].photoURL,
      providerData: user.providerData
    });
  }
};

var init = exports.init = function init(dispatch, firebase) {
  if (!firebase.auth) {
    return;
  }
  dispatch({ type: _constants.actionTypes.AUTHENTICATION_INIT_STARTED });

  firebase.auth().onAuthStateChanged(function (authData) {
    return handleAuthStateChange(dispatch, firebase, authData);
  });

  if (firebase._.config.enableRedirectHandling && (0, _isFunction3.default)(firebase.auth().getRedirectResult) && typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.indexOf('http') !== -1) {
    firebase.auth().getRedirectResult().then(function (authData) {
      return handleRedirectResult(dispatch, firebase, authData);
    }).catch(function (error) {
      dispatchLoginError(dispatch, error);
      return Promise.reject(error);
    });
  }

  firebase.auth().currentUser;

  dispatch({ type: _constants.actionTypes.AUTHENTICATION_INIT_FINISHED });
};

var login = exports.login = function login(dispatch, firebase, credentials) {
  var _firebase$auth;

  if (firebase._.config.resetBeforeLogin) {
    dispatchLoginError(dispatch, null);
  }

  var _getLoginMethodAndPar = (0, _auth.getLoginMethodAndParams)(firebase, credentials),
      method = _getLoginMethodAndPar.method,
      params = _getLoginMethodAndPar.params;

  return (_firebase$auth = firebase.auth())[method].apply(_firebase$auth, _toConsumableArray(params)).then(function (userData) {
    if (!userData) return Promise.resolve(null);

    if (['signInWithEmailAndPassword', 'signInAndRetrieveDataWithEmailAndPassword'].includes(method)) {
      return { user: userData };
    }

    if (['signInWithCustomToken', 'signInAndRetrieveDataWithCustomToken'].includes(method)) {
      if (!firebase._.config.updateProfileOnLogin) {
        return { user: userData };
      }
      return createUserProfile(dispatch, firebase, userData, credentials.profile);
    }

    if (method === 'signInWithPhoneNumber') {
      return _extends({}, userData, {
        confirm: function confirm(code) {
          return userData.confirm(code).then(function (_ref) {
            var user = _ref.user,
                additionalUserInfo = _ref.additionalUserInfo;
            return createUserProfile(dispatch, firebase, user, {
              phoneNumber: user.providerData[0].phoneNumber,
              providerData: user.providerData
            }).then(function (profile) {
              return { profile: profile, user: user, additionalUserInfo: additionalUserInfo };
            });
          });
        }
      });
    }

    var user = userData.user || userData;

    return createUserProfile(dispatch, firebase, user, credentials.profile || {
      email: user.email,
      displayName: user.providerData[0].displayName || user.email,
      avatarUrl: user.providerData[0].photoURL,
      providerData: user.providerData
    }).then(function (profile) {
      return _extends({ profile: profile }, userData);
    });
  }).catch(function (err) {
    dispatchLoginError(dispatch, err);
    return Promise.reject(err);
  });
};

var logout = exports.logout = function logout(dispatch, firebase) {
  unWatchUserProfile(firebase);
  return firebase.auth().signOut().then(function () {
    var action = {
      type: _constants.actionTypes.LOGOUT
    };
    if (firebase._.config.preserveOnLogout) {
      action.preserve = firebase._.config.preserveOnLogout;
    }
    dispatch(action);
    firebase._.authUid = null;
    return firebase;
  });
};

var createUser = exports.createUser = function createUser(dispatch, firebase, _ref2, profile) {
  var email = _ref2.email,
      password = _ref2.password,
      signIn = _ref2.signIn;

  dispatchLoginError(dispatch, null);

  if (!email || !password) {
    var error = new Error('Email and Password are required to create user');
    dispatchLoginError(dispatch, error);
    return Promise.reject(error);
  }

  return firebase.auth().createUserWithEmailAndPassword(email, password).then(function (userData) {
    return firebase.auth().currentUser || !!signIn && signIn === false ? createUserProfile(dispatch, firebase, userData, profile || { email: email }) : login(dispatch, firebase, { email: email, password: password }).then(function () {
      return createUserProfile(dispatch, firebase, userData, profile || { email: email });
    }).catch(function (err) {
      if (err) {
        switch (err.code) {
          case 'auth/user-not-found':
            dispatchLoginError(dispatch, new Error('The specified user account does not exist.'));
            break;
          default:
            dispatchLoginError(dispatch, err);
        }
      }
      return Promise.reject(err);
    });
  }).catch(function (err) {
    dispatchLoginError(dispatch, err);
    return Promise.reject(err);
  });
};

var resetPassword = exports.resetPassword = function resetPassword(dispatch, firebase, email) {
  dispatchLoginError(dispatch, null);
  return firebase.auth().sendPasswordResetEmail(email).catch(function (err) {
    if (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          dispatchLoginError(dispatch, new Error('The specified user account does not exist.'));
          break;
        default:
          dispatchLoginError(dispatch, err);
      }
      return Promise.reject(err);
    }
  });
};

var confirmPasswordReset = exports.confirmPasswordReset = function confirmPasswordReset(dispatch, firebase, code, password) {
  dispatchLoginError(dispatch, null);
  return firebase.auth().confirmPasswordReset(code, password).catch(function (err) {
    if (err) {
      switch (err.code) {
        case 'auth/expired-action-code':
          dispatchLoginError(dispatch, new Error('The action code has expired.'));
          break;
        case 'auth/invalid-action-code':
          dispatchLoginError(dispatch, new Error('The action code is invalid.'));
          break;
        case 'auth/user-disabled':
          dispatchLoginError(dispatch, new Error('The user is disabled.'));
          break;
        case 'auth/user-not-found':
          dispatchLoginError(dispatch, new Error('The user is not found.'));
          break;
        case 'auth/weak-password':
          dispatchLoginError(dispatch, new Error('The password is not strong enough.'));
          break;
        default:
          dispatchLoginError(dispatch, err);
      }
      return Promise.reject(err);
    }
  });
};

var verifyPasswordResetCode = exports.verifyPasswordResetCode = function verifyPasswordResetCode(dispatch, firebase, code) {
  dispatchLoginError(dispatch, null);
  return firebase.auth().verifyPasswordResetCode(code).catch(function (err) {
    if (err) {
      dispatchLoginError(dispatch, err);
    }
    return Promise.reject(err);
  });
};

var updateProfile = exports.updateProfile = function updateProfile(dispatch, firebase, profileUpdate) {
  var config = firebase._.config;

  dispatch({
    type: _constants.actionTypes.PROFILE_UPDATE_START,
    payload: profileUpdate
  });

  var updatePromise = config.useFirestoreForProfile ? _auth.updateProfileOnFirestore : _auth.updateProfileOnRTDB;
  return updatePromise(firebase, profileUpdate).then(function (snap) {
    dispatch({
      type: _constants.actionTypes.PROFILE_UPDATE_SUCCESS,
      payload: config.useFirestoreForProfile ? snap.data() : snap.val()
    });
    return snap;
  }).catch(function (error) {
    dispatch({ type: _constants.actionTypes.PROFILE_UPDATE_ERROR, error: error });
    return Promise.reject(error);
  });
};

var updateAuth = exports.updateAuth = function updateAuth(dispatch, firebase, authUpdate, updateInProfile) {
  dispatch({ type: _constants.actionTypes.AUTH_UPDATE_START, payload: authUpdate });

  if (!firebase.auth().currentUser) {
    var error = new Error('User must be logged in to update auth.');
    dispatch({ type: _constants.actionTypes.AUTH_UPDATE_ERROR, payload: error });
    return Promise.reject(error);
  }

  return firebase.auth().currentUser.updateProfile(authUpdate).then(function (payload) {
    dispatch({
      type: _constants.actionTypes.AUTH_UPDATE_SUCCESS,
      auth: firebase.auth().currentUser
    });
    if (updateInProfile) {
      return updateProfile(dispatch, firebase, authUpdate);
    }
    return payload;
  }).catch(function (error) {
    dispatch({ type: _constants.actionTypes.AUTH_UPDATE_ERROR, error: error });
    return Promise.reject(error);
  });
};

var updateEmail = exports.updateEmail = function updateEmail(dispatch, firebase, newEmail, updateInProfile) {
  dispatch({ type: _constants.actionTypes.EMAIL_UPDATE_START, payload: newEmail });

  if (!firebase.auth().currentUser) {
    var error = new Error('User must be logged in to update email.');
    dispatch({ type: _constants.actionTypes.EMAIL_UPDATE_ERROR, error: error });
    return Promise.reject(error);
  }

  return firebase.auth().currentUser.updateEmail(newEmail).then(function (payload) {
    dispatch({ type: _constants.actionTypes.EMAIL_UPDATE_SUCCESS, payload: newEmail });
    if (updateInProfile) {
      return updateProfile(dispatch, firebase, { email: newEmail });
    }
    return payload;
  }).catch(function (error) {
    dispatch({ type: _constants.actionTypes.EMAIL_UPDATE_ERROR, error: error });
    return Promise.reject(error);
  });
};

var reloadAuth = exports.reloadAuth = function reloadAuth(dispatch, firebase) {
  dispatch({ type: _constants.actionTypes.AUTH_RELOAD_START });

  if (!firebase.auth().currentUser) {
    var error = new Error('User must be logged in to reload auth.');
    dispatch({ type: _constants.actionTypes.AUTH_RELOAD_ERROR, error: error });
    return Promise.reject(error);
  }

  return firebase.auth().currentUser.reload().then(function () {
    var auth = firebase.auth().currentUser;
    dispatch({ type: _constants.actionTypes.AUTH_RELOAD_SUCCESS, payload: auth });
    return auth;
  }).catch(function (error) {
    dispatch({ type: _constants.actionTypes.AUTH_RELOAD_ERROR, error: error });
    return Promise.reject(error);
  });
};

var linkWithCredential = exports.linkWithCredential = function linkWithCredential(dispatch, firebase, credential) {
  dispatch({ type: _constants.actionTypes.AUTH_LINK_START });

  if (!firebase.auth().currentUser) {
    var error = new Error('User must be logged in to link with credential.');
    dispatch({ type: _constants.actionTypes.AUTH_LINK_ERROR, error: error });
    return Promise.reject(error);
  }

  return firebase.auth().currentUser.linkWithCredential(credential).then(function (auth) {
    dispatch({ type: _constants.actionTypes.AUTH_LINK_SUCCESS, payload: auth });
    return auth;
  }).catch(function (error) {
    dispatch({ type: _constants.actionTypes.AUTH_LINK_ERROR, error: error });
    return Promise.reject(error);
  });
};

var signInWithPhoneNumber = exports.signInWithPhoneNumber = function signInWithPhoneNumber(firebase, dispatch, phoneNumber, applicationVerifier) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  return login(dispatch, firebase, _extends({
    phoneNumber: phoneNumber,
    applicationVerifier: applicationVerifier
  }, options));
};

exports.default = {
  dispatchLoginError: dispatchLoginError,
  unWatchUserProfile: unWatchUserProfile,
  watchUserProfile: watchUserProfile,
  init: init,
  createUserProfile: createUserProfile,
  login: login,
  logout: logout,
  createUser: createUser,
  resetPassword: resetPassword,
  confirmPasswordReset: confirmPasswordReset,
  verifyPasswordResetCode: verifyPasswordResetCode,
  updateAuth: updateAuth,
  updateProfile: updateProfile,
  updateEmail: updateEmail,
  reloadAuth: reloadAuth,
  signInWithPhoneNumber: signInWithPhoneNumber
};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(118),
    hasIn = __webpack_require__(104);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(63);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(225),
    defineProperty = __webpack_require__(112),
    identity = __webpack_require__(25);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 225 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(12),
    keysIn = __webpack_require__(43);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    isPrototype = __webpack_require__(35),
    nativeKeysIn = __webpack_require__(228);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(12),
    getSymbols = __webpack_require__(54);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(12),
    getSymbolsIn = __webpack_require__(124);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 231 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(76),
    cloneDataView = __webpack_require__(233),
    cloneRegExp = __webpack_require__(234),
    cloneSymbol = __webpack_require__(235),
    cloneTypedArray = __webpack_require__(125);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
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
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(76);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(237),
    baseUnary = __webpack_require__(34),
    nodeUtil = __webpack_require__(58);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(239),
    baseUnary = __webpack_require__(34),
    nodeUtil = __webpack_require__(58);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(77);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),
/* 241 */
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(42),
    baseRest = __webpack_require__(78),
    customDefaultsMerge = __webpack_require__(243),
    mergeWith = __webpack_require__(246);

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(128),
    isObject = __webpack_require__(1);

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(129),
    cloneBuffer = __webpack_require__(123),
    cloneTypedArray = __webpack_require__(125),
    copyArray = __webpack_require__(26),
    initCloneObject = __webpack_require__(126),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(0),
    isArrayLikeObject = __webpack_require__(130),
    isBuffer = __webpack_require__(33),
    isFunction = __webpack_require__(5),
    isObject = __webpack_require__(1),
    isPlainObject = __webpack_require__(77),
    isTypedArray = __webpack_require__(56),
    safeGet = __webpack_require__(131),
    toPlainObject = __webpack_require__(245);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(12),
    keysIn = __webpack_require__(43);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(128),
    createAssigner = __webpack_require__(132);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(248),
    baseEach = __webpack_require__(19),
    baseIteratee = __webpack_require__(7),
    baseReduce = __webpack_require__(249),
    isArray = __webpack_require__(0);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 249 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEvery = __webpack_require__(251),
    baseEvery = __webpack_require__(252),
    baseIteratee = __webpack_require__(7),
    isArray = __webpack_require__(0),
    isIterateeCall = __webpack_require__(65);

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(19);

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
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

module.exports = baseEvery;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(80),
    func = convert('unset', __webpack_require__(286));

func.placeholder = __webpack_require__(45);
module.exports = func;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var mapping = __webpack_require__(255),
    fallbackHolder = __webpack_require__(45);

/** Built-in value reference. */
var push = Array.prototype.push;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * A specialized version of `_.spread` which flattens the spread array into
 * the arguments of the invoked `func`.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */
function flatSpread(func, start) {
  return function() {
    var length = arguments.length,
        lastIndex = length - 1,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start],
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func.apply(this, otherArgs);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var defaultHolder = isLib ? func : fallbackHolder,
      forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isError': util.isError,
    'isFunction': util.isFunction,
    'isWeakMap': util.isWeakMap,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isError = helpers.isError,
      isFunction = helpers.isFunction,
      isWeakMap = helpers.isWeakMap,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : flatSpread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null &&
          !(isFunction(value) || isError(value) || isWeakMap(value))) {
        nested[key] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var realName = mapping.aliasToReal[name] || name,
        methodName = mapping.remap[realName] || realName,
        oldOptions = options;

    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func, placeholder) {
    var result,
        realName = mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var data = mapping.methodSpread[realName],
              afterRearg = data && data.afterRearg;

          result = afterRearg
            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func);
    result.placeholder = func.placeholder = placeholder;

    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func, defaultHolder);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func, _)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  _.placeholder = _;

  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1],
  'reduceRight': [1, 0]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'start': 0 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'start': 0 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'start': 0 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'ary': __webpack_require__(257),
  'assign': __webpack_require__(122),
  'clone': __webpack_require__(279),
  'curry': __webpack_require__(280),
  'forEach': __webpack_require__(41),
  'isArray': __webpack_require__(0),
  'isError': __webpack_require__(281),
  'isFunction': __webpack_require__(5),
  'isWeakMap': __webpack_require__(282),
  'iteratee': __webpack_require__(283),
  'keys': __webpack_require__(59),
  'rearg': __webpack_require__(284),
  'toInteger': __webpack_require__(145),
  'toPath': __webpack_require__(285)
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(81);

/** Used to compose bitmasks for function metadata. */
var WRAP_ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

module.exports = ary;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(46),
    root = __webpack_require__(3);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(42),
    createCtor = __webpack_require__(46),
    createHybrid = __webpack_require__(135),
    createRecurry = __webpack_require__(138),
    getHolder = __webpack_require__(144),
    replaceHolders = __webpack_require__(84),
    root = __webpack_require__(3);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 260 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(82),
    getData = __webpack_require__(139),
    getFuncName = __webpack_require__(263),
    lodash = __webpack_require__(265);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(264);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 264 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(82),
    LodashWrapper = __webpack_require__(140),
    baseLodash = __webpack_require__(83),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(2),
    wrapperClone = __webpack_require__(266);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
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
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(82),
    LodashWrapper = __webpack_require__(140),
    copyArray = __webpack_require__(26);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(41),
    arrayIncludes = __webpack_require__(143);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(271),
    baseIsNaN = __webpack_require__(272),
    strictIndexOf = __webpack_require__(273);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 271 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 272 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 273 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(26),
    isIndex = __webpack_require__(15);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

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
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(42),
    createCtor = __webpack_require__(46),
    root = __webpack_require__(3);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(136),
    composeArgsRight = __webpack_require__(137),
    replaceHolders = __webpack_require__(84);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
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
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
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

module.exports = mergeData;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(278);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(73);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(81);

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
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
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(2),
    isPlainObject = __webpack_require__(77);

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var weakMapTag = '[object WeakMap]';

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */
function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) == weakMapTag;
}

module.exports = isWeakMap;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(73),
    baseIteratee = __webpack_require__(7);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
}

module.exports = iteratee;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(81),
    flatRest = __webpack_require__(71);

/** Used to compose bitmasks for function metadata. */
var WRAP_REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});

module.exports = rearg;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(18),
    copyArray = __webpack_require__(26),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(23),
    stringToPath = __webpack_require__(103),
    toKey = __webpack_require__(10),
    toString = __webpack_require__(24);

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(61);

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : baseUnset(object, path);
}

module.exports = unset;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(2);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(24);

/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @example
 *
 * _.replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */
function replace() {
  var args = arguments,
      string = toString(args[0]);

  return args.length < 3 ? string : string.replace(args[1], args[2]);
}

module.exports = replace;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(24),
    upperFirst = __webpack_require__(290);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(291);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(292),
    hasUnicode = __webpack_require__(69),
    stringToArray = __webpack_require__(293),
    toString = __webpack_require__(24);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(107);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(294),
    hasUnicode = __webpack_require__(69),
    unicodeToArray = __webpack_require__(295);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 294 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 295 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = exports.uploadFiles = exports.uploadFile = undefined;

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _map2 = __webpack_require__(37);

var _map3 = _interopRequireDefault(_map2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _actions = __webpack_require__(115);

var _storage = __webpack_require__(297);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FILE_UPLOAD_START = _constants.actionTypes.FILE_UPLOAD_START,
    FILE_UPLOAD_ERROR = _constants.actionTypes.FILE_UPLOAD_ERROR,
    FILE_UPLOAD_COMPLETE = _constants.actionTypes.FILE_UPLOAD_COMPLETE,
    FILE_DELETE_START = _constants.actionTypes.FILE_DELETE_START,
    FILE_DELETE_ERROR = _constants.actionTypes.FILE_DELETE_ERROR,
    FILE_DELETE_COMPLETE = _constants.actionTypes.FILE_DELETE_COMPLETE;
var uploadFile = exports.uploadFile = function uploadFile(dispatch, firebase, config) {
  if (!firebase.storage) {
    throw new Error('Firebase storage is required to upload files');
  }

  var _ref = config || {},
      path = _ref.path,
      file = _ref.file,
      dbPath = _ref.dbPath,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? { progress: false } : _ref$options;

  var logErrors = firebase._.config.logErrors;

  var nameFromOptions = (0, _isFunction3.default)(options.name) ? options.name(file, firebase, config) : options.name;
  var filename = nameFromOptions || file.name;

  var meta = _extends({}, config, { filename: filename });

  dispatch({ type: FILE_UPLOAD_START, payload: _extends({}, config, { filename: filename }) });

  var uploadPromise = function uploadPromise() {
    return options.progress ? (0, _storage.uploadFileWithProgress)(dispatch, firebase, {
      path: path,
      file: file,
      filename: filename,
      meta: meta
    }) : firebase.storage().ref(path + '/' + filename).put(file);
  };

  return uploadPromise().then(function (uploadTaskSnapshot) {
    if (!dbPath || !firebase.database && !firebase.firestore) {
      dispatch({
        type: FILE_UPLOAD_COMPLETE,
        meta: _extends({}, config, { filename: filename }),
        payload: {
          uploadTaskSnapshot: uploadTaskSnapshot,
          uploadTaskSnaphot: uploadTaskSnapshot }
      });
      return {
        uploadTaskSnapshot: uploadTaskSnapshot,
        uploadTaskSnaphot: uploadTaskSnapshot };
    }

    return (0, _storage.writeMetadataToDb)({
      firebase: firebase,
      uploadTaskSnapshot: uploadTaskSnapshot,
      dbPath: dbPath,
      options: options
    }).then(function (payload) {
      dispatch({
        type: FILE_UPLOAD_COMPLETE,
        meta: _extends({}, config, { filename: filename }),
        payload: payload
      });
      return payload;
    });
  }).catch(function (err) {
    if (logErrors) {
      console.error && console.error('RRF: Error uploading file: ' + (err.message || err), err);
    }
    dispatch({ type: FILE_UPLOAD_ERROR, path: path, payload: err });
    return Promise.reject(err);
  });
};

var uploadFiles = function uploadFiles(dispatch, firebase, _ref2) {
  var files = _ref2.files,
      other = _objectWithoutProperties(_ref2, ['files']);

  return Promise.all((0, _map3.default)(files, function (file) {
    return uploadFile(dispatch, firebase, _extends({ file: file }, other));
  }));
};

exports.uploadFiles = uploadFiles;
var deleteFile = exports.deleteFile = function deleteFile(dispatch, firebase, _ref3) {
  var path = _ref3.path,
      dbPath = _ref3.dbPath;
  return (0, _actions.wrapInDispatch)(dispatch, {
    method: _storage.deleteFile,
    args: [firebase, { path: path, dbPath: dbPath }],
    types: [FILE_DELETE_START, FILE_DELETE_COMPLETE, FILE_DELETE_ERROR]
  });
};

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined2 = __webpack_require__(298);

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _omitBy2 = __webpack_require__(299);

var _omitBy3 = _interopRequireDefault(_omitBy2);

var _isFunction2 = __webpack_require__(5);

var _isFunction3 = _interopRequireDefault(_isFunction2);

exports.deleteFile = deleteFile;
exports.writeMetadataToDb = writeMetadataToDb;
exports.uploadFileWithProgress = uploadFileWithProgress;

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FILE_UPLOAD_ERROR = _constants.actionTypes.FILE_UPLOAD_ERROR,
    FILE_UPLOAD_PROGRESS = _constants.actionTypes.FILE_UPLOAD_PROGRESS;
function deleteFile(firebase, _ref) {
  var path = _ref.path,
      dbPath = _ref.dbPath;

  return firebase.storage().ref(path).delete().then(function () {
    if (!dbPath || !firebase.database && !firebase.firestore) {
      return { path: path };
    }

    var metaDeletePromise = function metaDeletePromise() {
      return firebase._.config.useFirestoreForStorageMeta ? firebase.firestore().doc(dbPath).delete() : firebase.database().ref(dbPath).remove();
    };

    return metaDeletePromise().then(function () {
      return { path: path, dbPath: dbPath };
    });
  });
}

function createUploadMetaResponseHandler(_ref2) {
  var fileData = _ref2.fileData,
      firebase = _ref2.firebase,
      uploadTaskSnapshot = _ref2.uploadTaskSnapshot,
      downloadURL = _ref2.downloadURL;

  return function uploadResultFromSnap(metaDataSnapshot) {
    var useFirestoreForStorageMeta = firebase._.config.useFirestoreForStorageMeta;

    var result = {
      snapshot: metaDataSnapshot,
      key: metaDataSnapshot.key || metaDataSnapshot.id,
      File: fileData,
      metaDataSnapshot: metaDataSnapshot,
      uploadTaskSnapshot: uploadTaskSnapshot,

      uploadTaskSnaphot: uploadTaskSnapshot,
      createdAt: useFirestoreForStorageMeta ? firebase.firestore.FieldValue.serverTimestamp() : firebase.database.ServerValue.TIMESTAMP
    };

    if (metaDataSnapshot.id) {
      result.id = metaDataSnapshot.id;
    }

    if (downloadURL) {
      result.downloadURL = downloadURL;
    }
    return result;
  };
}

function getDownloadURLFromUploadTaskSnapshot(uploadTaskSnapshot) {
  if (uploadTaskSnapshot.ref && typeof uploadTaskSnapshot.ref.getDownloadURL === 'function') {
    return uploadTaskSnapshot.ref.getDownloadURL();
  }

  return Promise.resolve(uploadTaskSnapshot.downloadURLs && uploadTaskSnapshot.downloadURLs[0]);
}

function writeMetadataToDb(_ref3) {
  var firebase = _ref3.firebase,
      uploadTaskSnapshot = _ref3.uploadTaskSnapshot,
      dbPath = _ref3.dbPath,
      options = _ref3.options;
  var _firebase$_$config = firebase._.config,
      fileMetadataFactory = _firebase$_$config.fileMetadataFactory,
      useFirestoreForStorageMeta = _firebase$_$config.useFirestoreForStorageMeta;
  var metadataFactory = options.metadataFactory;

  var metaFactoryFunction = metadataFactory || fileMetadataFactory;

  return getDownloadURLFromUploadTaskSnapshot(uploadTaskSnapshot).then(function (downloadURL) {
    var fileData = (0, _isFunction3.default)(metaFactoryFunction) ? metaFactoryFunction(uploadTaskSnapshot, firebase, uploadTaskSnapshot.metadata, downloadURL) : (0, _omitBy3.default)(uploadTaskSnapshot.metadata, _isUndefined3.default);

    var resultFromSnap = createUploadMetaResponseHandler({
      fileData: fileData,
      firebase: firebase,
      uploadTaskSnapshot: uploadTaskSnapshot,
      downloadURL: downloadURL
    });

    var metaSetPromise = function metaSetPromise(fileData) {
      if (useFirestoreForStorageMeta) {
        return firebase.firestore().collection(dbPath).add(fileData);
      }

      var newMetaRef = firebase.database().ref(dbPath).push();

      return newMetaRef.set(fileData).then(function (res) {
        return newMetaRef;
      });
    };

    return metaSetPromise(fileData).then(resultFromSnap);
  });
}

function uploadFileWithProgress(dispatch, firebase, _ref4) {
  var path = _ref4.path,
      file = _ref4.file,
      filename = _ref4.filename,
      meta = _ref4.meta;

  var uploadEvent = firebase.storage().ref(path + '/' + filename).put(file);

  var unListen = uploadEvent.on(firebase.storage.TaskEvent.STATE_CHANGED, {
    next: function next(snapshot) {
      dispatch({
        type: FILE_UPLOAD_PROGRESS,
        meta: meta,
        payload: {
          snapshot: snapshot,
          percent: Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100)
        }
      });
    },
    error: function error(err) {
      dispatch({ type: FILE_UPLOAD_ERROR, meta: meta, payload: err });
      unListen();
    },
    complete: function complete() {
      unListen();
    }
  });
  return uploadEvent;
}

/***/ }),
/* 298 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
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

module.exports = isUndefined;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(7),
    negate = __webpack_require__(300),
    pickBy = __webpack_require__(301);

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}

module.exports = omitBy;


/***/ }),
/* 300 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
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
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(18),
    baseIteratee = __webpack_require__(7),
    basePickBy = __webpack_require__(118),
    getAllKeysIn = __webpack_require__(75);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFirebaseConnect = undefined;

var _differenceWith2 = __webpack_require__(303);

var _differenceWith3 = _interopRequireDefault(_differenceWith2);

var _isEqual2 = __webpack_require__(147);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(48);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(49);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _query = __webpack_require__(146);

var _utils = __webpack_require__(20);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createFirebaseConnect = exports.createFirebaseConnect = function createFirebaseConnect() {
  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  return function () {
    var dataOrFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function (WrappedComponent) {
      var FirebaseConnect = function (_Component) {
        _inherits(FirebaseConnect, _Component);

        function FirebaseConnect() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, FirebaseConnect);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FirebaseConnect.__proto__ || Object.getPrototypeOf(FirebaseConnect)).call.apply(_ref, [this].concat(args))), _this), _this.firebaseEvents = [], _this.firebase = null, _this.prevData = null, _this.store = _this.context[storeKey], _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(FirebaseConnect, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            if (!this.context || !this.context[storeKey]) {
              throw new Error(_constants.v3ErrorMessage);
            }
            var _store = this.store,
                firebase = _store.firebase,
                dispatch = _store.dispatch;

            var inputAsFunc = (0, _utils.createCallable)(dataOrFn);
            this.prevData = inputAsFunc(this.props, this.store);

            var ref = firebase.ref,
                helpers = firebase.helpers,
                storage = firebase.storage,
                database = firebase.database,
                auth = firebase.auth;

            this.firebase = _extends({ ref: ref, storage: storage, database: database, auth: auth }, helpers);

            this._firebaseEvents = (0, _utils.getEventsFromInput)(this.prevData);

            (0, _query.watchEvents)(firebase, dispatch, this._firebaseEvents);
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var _store2 = this.store,
                firebase = _store2.firebase,
                dispatch = _store2.dispatch;

            (0, _query.unWatchEvents)(firebase, dispatch, this._firebaseEvents);
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(np) {
            var _store3 = this.store,
                firebase = _store3.firebase,
                dispatch = _store3.dispatch;

            var inputAsFunc = (0, _utils.createCallable)(dataOrFn);
            var data = inputAsFunc(np, this.store);

            if (!(0, _isEqual3.default)(data, this.prevData)) {
              var itemsToSubscribe = (0, _differenceWith3.default)(data, this.prevData, _isEqual3.default);
              var itemsToUnsubscribe = (0, _differenceWith3.default)(this.prevData, data, _isEqual3.default);

              this.prevData = data;

              (0, _query.unWatchEvents)(firebase, dispatch, (0, _utils.getEventsFromInput)(itemsToUnsubscribe));

              this._firebaseEvents = (0, _utils.getEventsFromInput)(data);

              (0, _query.watchEvents)(firebase, dispatch, (0, _utils.getEventsFromInput)(itemsToSubscribe));
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2.default.createElement(WrappedComponent, _extends({}, this.props, this.state, {
              firebase: this.firebase
            }));
          }
        }]);

        return FirebaseConnect;
      }(_react.Component);

      FirebaseConnect.displayName = 'FirebaseConnect(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';
      FirebaseConnect.wrappedComponent = WrappedComponent;
      FirebaseConnect.contextTypes = _defineProperty({}, storeKey, _propTypes2.default.object.isRequired);


      return (0, _hoistNonReactStatics2.default)(FirebaseConnect, WrappedComponent);
    };
  };
};

exports.default = createFirebaseConnect();

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(304),
    baseFlatten = __webpack_require__(63),
    baseRest = __webpack_require__(78),
    isArrayLikeObject = __webpack_require__(130),
    last = __webpack_require__(62);

/**
 * This method is like `_.difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 *
 * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }]
 */
var differenceWith = baseRest(function(array, values) {
  var comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : [];
});

module.exports = differenceWith;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(90),
    arrayIncludes = __webpack_require__(143),
    arrayIncludesWith = __webpack_require__(305),
    arrayMap = __webpack_require__(18),
    baseUnary = __webpack_require__(34),
    cacheHas = __webpack_require__(92);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 305 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFirestoreConnect = undefined;

var _filter2 = __webpack_require__(113);

var _filter3 = _interopRequireDefault(_filter2);

var _some2 = __webpack_require__(64);

var _some3 = _interopRequireDefault(_some2);

var _isEqual2 = __webpack_require__(147);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(48);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(49);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _utils = __webpack_require__(20);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createFirestoreConnect = exports.createFirestoreConnect = function createFirestoreConnect() {
  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  return function () {
    var dataOrFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function (WrappedComponent) {
      var FirestoreConnect = function (_Component) {
        _inherits(FirestoreConnect, _Component);

        function FirestoreConnect() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, FirestoreConnect);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FirestoreConnect.__proto__ || Object.getPrototypeOf(FirestoreConnect)).call.apply(_ref, [this].concat(args))), _this), _this.prevData = null, _this.store = _this.context[storeKey], _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(FirestoreConnect, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            if (!this.context || !this.context[storeKey]) {
              throw new Error(_constants.v3ErrorMessage);
            }
            var firestore = this.store.firestore;

            if (this.firestoreIsEnabled) {
              var inputAsFunc = (0, _utils.createCallable)(dataOrFn);
              this.prevData = inputAsFunc(this.props, this.store);

              firestore.setListeners(this.prevData);
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var firestore = this.store.firestore;

            if (this.firestoreIsEnabled && this.prevData) {
              firestore.unsetListeners(this.prevData);
            }
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(np) {
            var firestore = this.store.firestore;

            var inputAsFunc = (0, _utils.createCallable)(dataOrFn);
            var data = inputAsFunc(np, this.store);

            if (this.firestoreIsEnabled && !(0, _isEqual3.default)(data, this.prevData)) {
              var changes = this.getChanges(data, this.prevData);

              this.prevData = data;

              firestore.unsetListeners(changes.removed);

              firestore.setListeners(changes.added);
            }
          }
        }, {
          key: 'getChanges',
          value: function getChanges() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var prevData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var result = {};
            result.added = (0, _filter3.default)(data, function (d) {
              return !(0, _some3.default)(prevData, function (p) {
                return (0, _isEqual3.default)(d, p);
              });
            });
            result.removed = (0, _filter3.default)(prevData, function (p) {
              return !(0, _some3.default)(data, function (d) {
                return (0, _isEqual3.default)(p, d);
              });
            });
            return result;
          }
        }, {
          key: 'render',
          value: function render() {
            var _store = this.store,
                firebase = _store.firebase,
                firestore = _store.firestore;

            var newProps = _extends({}, this.props, { firestore: firestore });
            if (firebase) {
              newProps.firebase = _extends({}, firebase, firebase.helpers);
            }
            return _react2.default.createElement(WrappedComponent, newProps);
          }
        }, {
          key: 'firestoreIsEnabled',
          get: function get() {
            return !!this.store.firestore;
          }
        }]);

        return FirestoreConnect;
      }(_react.Component);

      FirestoreConnect.wrappedComponent = WrappedComponent;
      FirestoreConnect.displayName = (0, _utils.wrapDisplayName)(WrappedComponent, 'FirestoreConnect');
      FirestoreConnect.contextTypes = _defineProperty({}, storeKey, _propTypes2.default.object.isRequired);


      return (0, _hoistNonReactStatics2.default)(FirestoreConnect, WrappedComponent);
    };
  };
};

exports.default = createFirestoreConnect();

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWithFirebase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(48);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(49);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _utils = __webpack_require__(20);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createWithFirebase = exports.createWithFirebase = function createWithFirebase() {
  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  return function (WrappedComponent) {
    var withFirebase = function (_Component) {
      _inherits(withFirebase, _Component);

      function withFirebase() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, withFirebase);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = withFirebase.__proto__ || Object.getPrototypeOf(withFirebase)).call.apply(_ref, [this].concat(args))), _this), _this.store = _this.context[storeKey], _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(withFirebase, [{
        key: 'render',
        value: function render() {
          if (!this.context || !this.context[storeKey]) {
            throw new Error(_constants.v3ErrorMessage);
          }
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, this.state, {
            dispatch: this.store.dispatch,
            firebase: this.store.firebase
          }));
        }
      }]);

      return withFirebase;
    }(_react.Component);

    withFirebase.wrappedComponent = WrappedComponent;
    withFirebase.displayName = (0, _utils.wrapDisplayName)(WrappedComponent, 'withFirebase');
    withFirebase.contextTypes = _defineProperty({}, storeKey, _propTypes2.default.object.isRequired);


    return (0, _hoistNonReactStatics2.default)(withFirebase, WrappedComponent);
  };
};

exports.default = createWithFirebase();

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWithFirestore = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(48);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(49);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _utils = __webpack_require__(20);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createWithFirestore = exports.createWithFirestore = function createWithFirestore() {
  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  return function (WrappedComponent) {
    var withFirestore = function (_Component) {
      _inherits(withFirestore, _Component);

      function withFirestore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, withFirestore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = withFirestore.__proto__ || Object.getPrototypeOf(withFirestore)).call.apply(_ref, [this].concat(args))), _this), _this.store = _this.context[storeKey], _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(withFirestore, [{
        key: 'render',
        value: function render() {
          if (!this.context || !this.context[storeKey]) {
            throw new Error(_constants.v3ErrorMessage);
          }
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
            dispatch: this.store.dispatch,
            firestore: this.store.firestore,
            firebase: this.store.firebase
          }));
        }
      }]);

      return withFirestore;
    }(_react.Component);

    withFirestore.wrappedComponent = WrappedComponent;
    withFirestore.displayName = (0, _utils.wrapDisplayName)(WrappedComponent, 'withFirestore');
    withFirestore.contextTypes = _defineProperty({}, storeKey, _propTypes2.default.object.isRequired);


    return (0, _hoistNonReactStatics2.default)(withFirestore, WrappedComponent);
  };
};

exports.default = createWithFirestore();

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirebase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createFirebaseInstance = __webpack_require__(86);

var _auth = __webpack_require__(85);

var _constants = __webpack_require__(4);

var _actions = __webpack_require__(117);

var firebaseInstance = void 0;

exports.default = function (instance, otherConfig) {
  return function (next) {
    return function (reducer, initialState, middleware) {
      var store = next(reducer, initialState, middleware);

      if (!instance.SDK_VERSION && !instance.firebase_ && !instance.database) {
        throw new Error('v2.0.0-beta and higher require passing a firebase app instance or a firebase library instance. View the migration guide for details.');
      }

      var existingConfig = instance && instance._ || {};

      var configs = _extends({}, existingConfig, _constants.defaultConfig, otherConfig);

      firebaseInstance = (0, _createFirebaseInstance.createFirebaseInstance)(instance.firebase_ || instance, configs, store.dispatch);

      _actions.authActions.init(store.dispatch, firebaseInstance);

      store.firebase = firebaseInstance;

      if (configs.attachAuthIsReady) {
        store.firebaseAuthIsReady = (0, _auth.createAuthIsReady)(store, configs);
      }

      return store;
    };
  };
};

var getFirebase = exports.getFirebase = function getFirebase() {
  if (!firebaseInstance) {
    throw new Error('Firebase instance does not yet exist. Check your compose function.');
  }

  return firebaseInstance;
};

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(79);

var _reducers2 = __webpack_require__(311);

exports.default = (0, _reducers.combineReducers)({
  requesting: _reducers2.requestingReducer,
  requested: _reducers2.requestedReducer,
  timestamps: _reducers2.timestampsReducer,
  data: _reducers2.dataReducer,
  ordered: _reducers2.orderedReducer,
  auth: _reducers2.authReducer,
  authError: _reducers2.authErrorReducer,
  profile: _reducers2.profileReducer,
  listeners: _reducers2.listenersReducer,
  isInitializing: _reducers2.isInitializingReducer,
  errors: _reducers2.errorsReducer
});
module.exports = exports['default'];

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderedReducer = exports.dataReducer = exports.listenersReducer = exports.errorsReducer = exports.profileReducer = exports.authErrorReducer = exports.authReducer = exports.timestampsReducer = exports.requestedReducer = exports.requestingReducer = exports.isInitializingReducer = undefined;

var _assign2 = __webpack_require__(312);

var _assign3 = _interopRequireDefault(_assign2);

var _setWith2 = __webpack_require__(314);

var _setWith3 = _interopRequireDefault(_setWith2);

var _isObject2 = __webpack_require__(1);

var _isObject3 = _interopRequireDefault(_isObject2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _get2 = __webpack_require__(22);

var _get3 = _interopRequireDefault(_get2);

var _omit2 = __webpack_require__(121);

var _omit3 = _interopRequireDefault(_omit2);

var _pick2 = __webpack_require__(70);

var _pick3 = _interopRequireDefault(_pick2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _reducers = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var START = _constants.actionTypes.START,
    SET = _constants.actionTypes.SET,
    SET_PROFILE = _constants.actionTypes.SET_PROFILE,
    MERGE = _constants.actionTypes.MERGE,
    LOGIN = _constants.actionTypes.LOGIN,
    LOGOUT = _constants.actionTypes.LOGOUT,
    LOGIN_ERROR = _constants.actionTypes.LOGIN_ERROR,
    CLEAR_ERRORS = _constants.actionTypes.CLEAR_ERRORS,
    REMOVE = _constants.actionTypes.REMOVE,
    NO_VALUE = _constants.actionTypes.NO_VALUE,
    SET_LISTENER = _constants.actionTypes.SET_LISTENER,
    UNSET_LISTENER = _constants.actionTypes.UNSET_LISTENER,
    AUTHENTICATION_INIT_STARTED = _constants.actionTypes.AUTHENTICATION_INIT_STARTED,
    AUTHENTICATION_INIT_FINISHED = _constants.actionTypes.AUTHENTICATION_INIT_FINISHED,
    AUTH_EMPTY_CHANGE = _constants.actionTypes.AUTH_EMPTY_CHANGE,
    AUTH_LINK_SUCCESS = _constants.actionTypes.AUTH_LINK_SUCCESS,
    UNAUTHORIZED_ERROR = _constants.actionTypes.UNAUTHORIZED_ERROR,
    AUTH_UPDATE_SUCCESS = _constants.actionTypes.AUTH_UPDATE_SUCCESS,
    AUTH_RELOAD_SUCCESS = _constants.actionTypes.AUTH_RELOAD_SUCCESS,
    PROFILE_UPDATE_SUCCESS = _constants.actionTypes.PROFILE_UPDATE_SUCCESS;
var isInitializingReducer = exports.isInitializingReducer = function isInitializingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case AUTHENTICATION_INIT_STARTED:
      return true;
    case AUTHENTICATION_INIT_FINISHED:
      return false;
    default:
      return state;
  }
};

var requestingReducer = exports.requestingReducer = function requestingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type,
      path = _ref.path;

  switch (type) {
    case START:
      return _extends({}, state, _defineProperty({}, (0, _reducers.getSlashStrPath)(path), true));
    case NO_VALUE:
    case SET:
      return _extends({}, state, _defineProperty({}, (0, _reducers.getSlashStrPath)(path), false));
    default:
      return state;
  }
};

var requestedReducer = exports.requestedReducer = function requestedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref2 = arguments[1];
  var type = _ref2.type,
      path = _ref2.path;

  switch (type) {
    case START:
      return _extends({}, state, _defineProperty({}, (0, _reducers.getSlashStrPath)(path), false));
    case NO_VALUE:
    case SET:
      return _extends({}, state, _defineProperty({}, (0, _reducers.getSlashStrPath)(path), true));
    default:
      return state;
  }
};

var timestampsReducer = exports.timestampsReducer = function timestampsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref3 = arguments[1];
  var type = _ref3.type,
      path = _ref3.path;

  switch (type) {
    case START:
    case NO_VALUE:
    case SET:
      return _extends({}, state, _defineProperty({}, (0, _reducers.getSlashStrPath)(path), Date.now()));
    default:
      return state;
  }
};

var createDataReducer = function createDataReducer() {
  var actionKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data';
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
      case SET:
        return (0, _setWith3.default)(Object, (0, _reducers.getDotStrPath)(action.path), action[actionKey], state);
      case MERGE:
        var previousData = (0, _get3.default)(state, (0, _reducers.getDotStrPath)(action.path), {});
        var mergedData = (0, _assign3.default)(previousData, action[actionKey]);
        return (0, _setWith3.default)(Object, (0, _reducers.getDotStrPath)(action.path), mergedData, state);
      case NO_VALUE:
        return (0, _setWith3.default)(Object, (0, _reducers.getDotStrPath)(action.path), null, state);
      case REMOVE:
        if (actionKey === 'data') {
          return (0, _reducers.recursiveUnset)((0, _reducers.getDotStrPath)(action.path), state);
        }
        return state;
      case LOGOUT:
        if (action.preserve) {
          if ((0, _isArray3.default)(action.preserve)) {
            return (0, _pick3.default)(state, action.preserve);
          } else if ((0, _isObject3.default)(action.preserve)) {
            return action.preserve[actionKey] ? (0, _reducers.preserveValuesFromState)(state, action.preserve[actionKey], {}) : {};
          }
          throw new Error('Invalid preserve parameter. It must be an Object or an Array');
        }
        return {};
      default:
        return state;
    }
  };
};

var authReducer = exports.authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isLoaded: false, isEmpty: true };
  var action = arguments[1];

  switch (action.type) {
    case LOGIN:
    case AUTH_UPDATE_SUCCESS:
      if (!action.auth) {
        return {
          isEmpty: true,
          isLoaded: true
        };
      }
      var auth = action.auth.toJSON ? action.auth.toJSON() : action.auth;

      if (action.preserve && action.preserve.auth) {
        return (0, _reducers.preserveValuesFromState)(state, action.preserve.auth, _extends({}, auth, {
          isEmpty: false,
          isLoaded: true
        }));
      }
      return _extends({}, auth, { isEmpty: false, isLoaded: true });
    case AUTH_LINK_SUCCESS:
    case AUTH_RELOAD_SUCCESS:
      if (!action.payload) {
        return {
          isEmpty: true,
          isLoaded: true
        };
      }
      return _extends({}, action.payload.toJSON ? action.payload.toJSON() : action.payload, {
        isEmpty: false,
        isLoaded: true
      });
    case LOGIN_ERROR:
    case AUTH_EMPTY_CHANGE:
    case LOGOUT:
      if (action.preserve && action.preserve.auth) {
        return (0, _reducers.preserveValuesFromState)(state, action.preserve.auth, {
          isLoaded: true,
          isEmpty: true
        });
      }
      return { isLoaded: true, isEmpty: true };
    default:
      return state;
  }
};

var authErrorReducer = exports.authErrorReducer = function authErrorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return null;
    case LOGIN_ERROR:
    case UNAUTHORIZED_ERROR:
      return action.authError;
    default:
      return state;
  }
};

var profileReducer = exports.profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isLoaded: false, isEmpty: true };
  var action = arguments[1];

  switch (action.type) {
    case SET_PROFILE:
      if (!action.profile) {
        return _extends({}, state, {
          isEmpty: true,
          isLoaded: true
        });
      }
      return _extends({}, action.profile, {
        isEmpty: false,
        isLoaded: true
      });
    case PROFILE_UPDATE_SUCCESS:
      return _extends({}, state, action.payload);
    case LOGIN:
      if (action.preserve && action.preserve.profile) {
        return (0, _reducers.preserveValuesFromState)(state, action.preserve.profile, {
          isLoaded: true,
          isEmpty: true
        });
      }
      return {
        isEmpty: true,
        isLoaded: false
      };
    case LOGOUT:
    case AUTH_EMPTY_CHANGE:
      if (action.preserve && action.preserve.profile) {
        return (0, _reducers.preserveValuesFromState)(state, action.preserve.profile, {
          isLoaded: true,
          isEmpty: true
        });
      }
      return { isLoaded: true, isEmpty: true };
    default:
      return state;
  }
};

var errorsReducer = exports.errorsReducer = function errorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case LOGIN_ERROR:
    case UNAUTHORIZED_ERROR:
      if (!(0, _isArray3.default)(state)) {
        throw new Error('Errors state must be an array');
      }
      return [].concat(_toConsumableArray(state), [action.authError]);
    case LOGOUT:
    case CLEAR_ERRORS:
      if (action.preserve && action.preserve.errors) {
        if (typeof action.preserve.errors !== 'function') {
          throw new Error('Preserve for the errors state currently only supports functions');
        }
        return state.filter(action.preserve.errors);
      }
      return [];
    default:
      return state;
  }
};

var listenersById = function listenersById() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref4 = arguments[1];
  var type = _ref4.type,
      path = _ref4.path,
      payload = _ref4.payload;

  switch (type) {
    case SET_LISTENER:
      return _extends({}, state, _defineProperty({}, payload.id, {
        id: payload.id,
        path: path
      }));
    case UNSET_LISTENER:
      return (0, _omit3.default)(state, [payload.id]);
    default:
      return state;
  }
};

var allListeners = function allListeners() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref5 = arguments[1];
  var type = _ref5.type,
      path = _ref5.path,
      payload = _ref5.payload;

  switch (type) {
    case SET_LISTENER:
      return [].concat(_toConsumableArray(state), [payload.id]);
    case UNSET_LISTENER:
      return state.filter(function (lId) {
        return lId !== payload.id;
      });
    default:
      return state;
  }
};

var listenersReducer = exports.listenersReducer = (0, _reducers.combineReducers)({
  byId: listenersById,
  allIds: allListeners
});

var dataReducer = exports.dataReducer = createDataReducer();

var orderedReducer = exports.orderedReducer = createDataReducer('ordered');

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(80),
    func = convert('assign', __webpack_require__(313));

func.placeholder = __webpack_require__(45);
module.exports = func;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(39),
    copyObject = __webpack_require__(12),
    createAssigner = __webpack_require__(132),
    isArrayLike = __webpack_require__(8),
    isPrototype = __webpack_require__(35),
    keys = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(80),
    func = convert('setWith', __webpack_require__(315));

func.placeholder = __webpack_require__(45);
module.exports = func;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(66);

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}

module.exports = setWith;


/***/ })
/******/ ]);
});