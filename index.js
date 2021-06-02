'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var styledSystem = require('styled-system');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var customTextProps$1 = styledSystem.system({
  cursor: {
    property: 'cursor'
  },
  fill: {
    property: 'fill',
    scale: 'colors'
  },
  stroke: {
    property: 'stroke',
    scale: 'colors'
  },
  strokeWidth: {
    property: 'strokeWidth'
  },
  outline: {
    property: 'outline'
  },
  textDecoration: {
    property: 'textDecoration'
  },
  whiteSpace: {
    property: 'whiteSpace'
  },
  textTransform: {
    property: 'textTransform'
  },
  letterSpacing: {
    property: 'letterSpacing'
  },
  wordBreak: {
    property: 'wordBreak'
  }
});
var customBoxProps$1 = styledSystem.system({
  boxSizing: {
    property: 'boxSizing'
  },
  pointerEvents: {
    property: 'pointerEvents'
  },
  transform: {
    property: 'transform'
  },
  transition: {
    property: 'transition'
  }
});
var composers = {
  box: styledSystem.compose(styledSystem.flexbox, styledSystem.layout, styledSystem.space, styledSystem.color, styledSystem.border, styledSystem.position, styledSystem.background, styledSystem.shadow, styledSystem.typography, styledSystem.grid, customTextProps$1, customBoxProps$1),
  text: styledSystem.compose(styledSystem.typography, styledSystem.color, styledSystem.space, styledSystem.layout, styledSystem.position, styledSystem.flexbox, customTextProps$1)
};

var _templateObject$a;
var Box = styled__default['default'].div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  ", "\n"])), composers.box);
Box.defaultProps = {
  display: 'flex',
  position: 'relative',
  fontFamily: 'normal'
};
Box.displayName = 'Box';

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p$1;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p$1};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p$1||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
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
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
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
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

var _templateObject$9, _templateObject2$2;
var StyledSpinner = styled__default['default'].svg(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  ", "\n  animation: rotate 1s linear infinite;\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"])), composers.box);
StyledSpinner.defaultProps = {
  m: 0,
  p: 0
};
var StyledCircle = styled__default['default'].circle(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  stroke-linecap: round;\n  animation: dash 1.5s ease-in-out infinite;\n  ", "\n"])), composers.box);
StyledCircle.defaultProps = {
  cx: '25',
  cy: '25',
  r: '20',
  fill: 'none'
};

var Spinner = function Spinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 50 : _ref$size,
      color = _ref.color,
      margin = _ref.margin,
      padding = _ref.padding,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 6 : _ref$strokeWidth,
      props = _objectWithoutProperties(_ref, ["size", "color", "margin", "padding", "strokeWidth"]);

  return /*#__PURE__*/React__default['default'].createElement(Box, _extends({
    "data-testid": "bt__spinner"
  }, props), /*#__PURE__*/React__default['default'].createElement(StyledSpinner, {
    size: size,
    margin: margin,
    padding: padding,
    viewBox: "0 0 ".concat(size, " ").concat(size)
  }, /*#__PURE__*/React__default['default'].createElement(StyledCircle, {
    stroke: color,
    strokeWidth: strokeWidth
  })));
};
Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.number,
  padding: PropTypes.number,
  strokeWidth: PropTypes.number
};

var iconPaths = {
  trashCan: 'M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z',
  sortingArrow: 'M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z',
  downArrow: 'M10 0L5 5 0 0z',
  goToLink: 'M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z',
  linkUrl: 'M21.337.458l-3.937 3.936c-2.449-1.466-5.67-1.144-7.78.966l-4.261 4.262c-2.11 2.11-2.433 5.331-.968 7.78l-3.935 3.935c-.609.609-.609 1.597 0 2.207s1.598.609 2.207 0l3.935-3.935c2.449 1.465 5.67 1.144 7.78-.967l4.261-4.261c2.11-2.11 2.433-5.331.968-7.781l3.936-3.936c.609-.609.609-1.597 0-2.207s-1.597-.609-2.206.001zm-4.862 11.757l-4.261 4.261c-.895.894-2.176 1.169-3.31.827l1.632-1.632c.609-.609.609-1.597 0-2.207s-1.598-.609-2.207 0l-1.631 1.632c-.343-1.133-.067-2.415.826-3.309l4.261-4.261c.895-.894 2.176-1.169 3.31-.827l-1.631 1.63c-.609.609-.609 1.597 0 2.207s1.598.609 2.207 0l1.63-1.63c.343 1.133.067 2.415-.826 3.309z',
  link: 'M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z',
  pencil: 'M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z',
  heart: 'M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z',
  musicPlaylist: 'M12 21h-12v-2h12v2zm4-9l8-1v6.681c-.002 1.555-1.18 2.319-2.257 2.319-.907 0-1.743-.542-1.743-1.61 0-.96.903-1.852 2-2.073v-2.317l-4 .5v4.181c-.002 1.555-1.18 2.319-2.257 2.319-.907 0-1.743-.542-1.743-1.61 0-.96.903-1.852 2-2.073v-5.317zm-4 4.976h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z',
  eye: 'M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z',
  play: 'M3 22v-20l18 10-18 10z',
  paperClip: 'M17.843 1c2.159 0 3.912 1.753 3.912 3.912 0 .395-.053 1.704-1.195 2.813l-8.465 8.465c-.596.671-2.12 1.279-3.299.099-1.178-1.177-.586-2.685.088-3.29l4.409-4.409.707.707-3.164 3.163.014.003-1.411 1.413.004.003c-.97 1.151.618 2.93 1.977 1.572l8.383-8.384c.656-.652.94-1.393.94-2.155 0-1.601-1.299-2.9-2.9-2.9-.783 0-1.495.311-2.018.818l-.003-.003c-.573.573-11.502 11.494-11.534 11.527l-.002-.002c-.795.812-1.286 1.923-1.286 3.148 0 2.483 2.017 4.5 4.5 4.5.65 0 1.84.007 3.52-1.668l10.273-10.267.707.707-10.477 10.477c-1.004 1.077-2.435 1.751-4.023 1.751-3.035 0-5.5-2.465-5.5-5.5 0-1.577.666-3 1.731-4.004 10.668-10.667 10.835-10.839 11.295-11.297.277-.278 1.215-1.199 2.817-1.199',
  download: 'M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z',
  forward: 'M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z',
  previous: 'M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z',
  volume: 'M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm15.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z',
  noVolume: 'M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm17 4h-5v2h5v-2zm-1.584-6.232l-4.332 2.5 1 1.732 4.332-2.5-1-1.732zm1 12.732l-4.332-2.5-1 1.732 4.332 2.5 1-1.732z',
  musicNotes: 'M23 0l-15.996 3.585v13.04c-2.979-.589-6.004 1.671-6.004 4.154 0 2.137 1.671 3.221 3.485 3.221 2.155 0 4.512-1.528 4.515-4.638v-10.9l12-2.459v8.624c-2.975-.587-6 1.664-6 4.141 0 2.143 1.715 3.232 3.521 3.232 2.14 0 4.476-1.526 4.479-4.636v-17.364z',
  pause: 'M6,19 L10,19 L10,5 L6,5 L6,19 Z M14,5 L14,19 L18,19 L18,5 L14,5 Z',
  video: 'M4 11c-2.21 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm10 2c.702 0 1.373-.127 2-.35v6.35c0 1.104-.896 2-2 2h-10c-1.104 0-2-.896-2-2v-6.35c.627.223 1.298.35 2 .35 2.084 0 3.924-1.068 5-2.687 1.076 1.619 2.916 2.687 5 2.687zm4 1v4l6 3v-10l-6 3zm-4-11c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z',
  vinyl: 'M14 12c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-15.44 4.912c-.572-.401-1.07-.899-1.471-1.471l-3.691 1.641c.859 1.45 2.071 2.662 3.521 3.521l1.641-3.691zm7.44-4.912c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm4.603-5.08c-.859-1.451-2.071-2.663-3.522-3.522l-1.641 3.691c.572.401 1.07.899 1.472 1.471l3.691-1.64z',
  plusSign: 'M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z',
  minusSign: 'M0 10h24v4h-24z',
  backArrow: 'M0 12l9-8v6h15v4h-15v6z',
  scratch: 'M11.917 11.019c0-.507-.41-.918-.916-.918s-.917.411-.917.918c0 .507.411.918.917.918s.916-.411.916-.918m1.751 0c0 1.473-1.196 2.671-2.667 2.671-1.47 0-2.667-1.198-2.667-2.671 0-1.473 1.197-2.671 2.667-2.671 1.471 0 2.667 1.198 2.667 2.671m5.125-2.679c-.827-2.397-2.722-4.29-5.117-5.113l-.118.936c1.981.741 3.553 2.313 4.299 4.293l.936-.116zm-1.858.232c-.652-1.58-1.913-2.843-3.491-3.494l-.12.955c1.166.548 2.109 1.491 2.656 2.659l.955-.12zm-2.267 2.447c0-2.028-1.643-3.673-3.667-3.673-2.025 0-3.667 1.645-3.667 3.673s1.642 3.673 3.667 3.673c2.024 0 3.667-1.645 3.667-3.673m-5.991 4.987c-1.166-.549-2.107-1.492-2.654-2.66l-.954.119c.65 1.582 1.911 2.844 3.49 3.496l.118-.955zm-.238 1.906c-1.989-.747-3.569-2.332-4.308-4.329l-.935.118c.822 2.412 2.721 4.318 5.126 5.147l.117-.936zm13.561-6.893c0 .264-.022.521-.04.78-.132-.033-.457-.114-.894-.021-.295-.486-.85-.799-1.503-.799-.685 0-1.27.351-1.548.885-.946-.17-2.098.418-2.098 1.593v2.761c-.687-.72-2.916-.376-2.916 1.41 0 .275.062.549.185.82.066.158 1.393 2.805 1.467 2.955-1.144.404-2.37.635-3.652.635-6.075 0-11.001-4.933-11.001-11.019 0-6.085 4.926-11.019 11-11.019s11 4.934 11 11.019m-6.302 6.286c.007.01.757 1.39.872 1.607.124.228.494.179.494-.12v-5.335c0-.839 1.348-.814 1.348 0v4.311c0 .234.453.23.453 0l.002-5.131c0-.441.355-.656.714-.656.363 0 .729.221.729.656v5.072c0 .235.437.244.437.006v-4.323c0-.862 1.475-.886 1.475 0v4.579c0 .233.472.234.472 0v-2.849c0-.778 1.304-.822 1.304.039l.002 6.499c0 1.489-.831 2.34-2.406 2.34h-2.935c-1.497 0-2.022-.846-2.438-1.696-.395-.808-2.001-3.976-2.125-4.272-.066-.144-.095-.28-.095-.404 0-.809 1.276-1.128 1.697-.323',
  archive: 'M18.546 1h-13.069l-5.477 8.986v13.014h24v-13.014l-5.454-8.986zm-3.796 12h-5.5l-2.25-3h-4.666l4.266-7h10.82l4.249 7h-4.669l-2.25 3zm-9.75-4l.607-1h12.786l.607 1h-14zm12.18-3l.607 1h-11.573l.606-1h10.36zm-1.214-2l.606 1h-9.144l.607-1h7.931z',
  xMark: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  post: 'M10 13h-4v-1h4v1zm2.318-4.288l3.301 3.299-4.369.989 1.068-4.288zm11.682-5.062l-7.268 7.353-3.401-3.402 7.267-7.352 3.402 3.401zm-6 8.916v.977c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h14.056l1.977-2h-18.033v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.843l-2 2.023z',
  user: 'M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z',
  playlist: 'M15 21v-10l9 5-9 5zm-3 0h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-6v2h-24v-2h24z',
  tv: 'M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z',
  search: 'M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z',
  arrowRightCircle: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17v-4h-8v-2h8v-4l6 5-6 5z',
  archiveFolder: 'M22 24h-20l-2-10h24l-2 10zm-1.444-22.001l.439-1.999h-17.994l.439 1.999h17.116zm1.7 4.001l.37-2h-21.256l.371 2h20.515zm-19.731 6l-.254-2h19.45l-.262 2h2.017l.524-4h-24l.509 4h2.016z',
  windows: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6.834l6-.834v6h-6v-5.166zm-1 .165l-5 .678v4.323h5v-5.001zm0 6.001h-5v3.323l5 .678v-4.001zm1 0v4.166l6 .834v-5h-6z',
  apple: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 13.804c-.393 1.14-1.569 3.159-2.782 3.18-.804.016-1.062-.476-1.98-.476s-1.207.461-1.967.492c-1.286.048-3.271-2.915-3.271-5.498 0-2.374 1.654-3.55 3.099-3.572.774-.014 1.507.522 1.98.522.475 0 1.364-.645 2.298-.55.391.016 1.488.158 2.195 1.189-1.873 1.221-1.581 3.774.428 4.713zm-2.611-8.804c-1.413.058-2.566 1.54-2.404 2.765 1.304.102 2.558-1.362 2.404-2.765z',
  linux: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.768 15.583l-.504-1.064c.307-1.87-.554-3.518-1.581-4.574-.862-.886-.584-1.748-.584-2.495 0-1.192-.488-2.45-1.972-2.45-1.585 0-2.02 1.323-2.035 2.077-.038 1.812.366 2.283-.693 3.603-1.248 1.552-1.433 3.099-1.15 3.92-.133.153-.311.323-.643.464-.918.4-.245 1.069-.499 1.544-.072.135-.107.275-.107.411 0 .417.331.777.934.723.812-.073 1.56.502 2.044.502.428 0 .779-.243.941-.578.766-.188 1.71-.165 2.475.032.138.385.51.634.924.634.906 0 1.081-1.027 2.12-1.375.374-.124.562-.487.562-.826 0-.216-.077-.422-.232-.548zm-5.082-5.814c-.177 0-.323-.143-.556-.315-.293-.218-.592-.344-.588-.572 0-.158.21-.206.482-.379.292-.185.406-.372.693-.372.294 0 .384.148.783.321.394.17.667.237.667.43 0 .197-.412.338-.643.481-.338.21-.514.406-.838.406zm.925-2.897c.489.078.544.939.31 1.363l-.197-.08c.103-.302.101-.799-.242-.83-.217-.02-.356.267-.387.512-.085-.036-.179-.061-.291-.071.036-.513.366-.965.807-.894zm-1.891.183c.375-.094.598.343.599.797l-.171.106c-.024-.19-.108-.499-.322-.433-.229.07-.191.601-.064.709l-.169.095c-.235-.392-.235-1.184.127-1.274zm-1.175 10.691c-1.091-.496-1.462-.383-1.67-.383-.433 0-.572-.322-.41-.626.138-.258.095-.529.061-.746-.053-.333-.061-.442.266-.585.452-.192.654-.439.804-.624.421-.521.847.298 1.195 1.027.227.473.671.712.808 1.236.125.484-.396 1-1.054.701zm3.882-1.041c-.77.374-1.748.545-2.481.166-.107-.313-.281-.515-.468-.719.3-.078.522-.452.255-.827-.283-.401-.863-.68-1.449-1.134-.549-.424-.722-1.468.024-2.637-.363 1.035-.15 1.988.032 2.261.037-.549.081-1.466.831-2.564.378-.554.384-1.287.393-1.745l.344.236c.253.187.466.394.77.394.45 0 .698-.259 1.046-.474.136-.083.341-.168.512-.285.289 1.375 1.487 3.03 1.555 3.973.277-.573-.08-1.952-.08-1.952.468.714.505 1.309.525 2.039.328.133.679.483.711.942l-.137-.016c-.069-.511-1.447-1.261-1.571-.299-.662.101-.421 1.148-.555 1.826-.062.311-.176.557-.257.815zm2.692-.023c-.547.211-.917.659-1.171.938-.489.537-1.136.28-1.204-.222-.073-.537.199-.83.317-1.43.106-.549-.013-1.393.239-1.482.163.974 1.147.564 1.372.298.364 0 .396.124.478.466.051.214.121.394.32.605.234.247.163.629-.351.827zm-4.444-7.226c-.361 0-.633-.24-.853-.427-.112-.095.027-.271.141-.175.215.182.432.375.712.375.337 0 .634-.289 1.037-.447.137-.054.215.159.079.212-.391.154-.705.462-1.116.462z',
  support: 'M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z',
  network: 'M2 24h2.948c1-.923 2.004-2 3.55-2 1.547 0 2.55 1.077 3.55 2h2.948l-6.498-6-6.498 6zm20-8.042c0 3.269-5.858 3.387-9.787 1.79-6.835-2.779-9.629-9.79-7.817-15.17.84-2.496 1.852-3.84 6.333-.922 1.101.716 2.27 1.649 3.437 2.722l-1.72 1.152c-7.717-7.009-6.992-2.036-.983 4.55 5.858 6.417 11.668 8.615 5.767.717l1.199-1.745c1.223 1.634 3.571 4.873 3.571 6.906zm-1.026-12.437c-.004.829-.68 1.497-1.508 1.492-.225-.001-.436-.056-.628-.146l-3.829 5.646c-.784-.555-1.994-1.768-2.548-2.554l5.682-3.77c-.104-.207-.169-.437-.168-.684.005-.829.68-1.497 1.507-1.492.828.005 1.497.68 1.492 1.508z',
  filter: 'M1 0h22l-9 15.094v8.906l-4-3v-5.906z',
  android: 'M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z',
  add: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  arrowDown: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
  arrowRight: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
  arrowUp: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z',
  back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  calendar: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z',
  caution: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
  check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  checkCircle: 'M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
  clear: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 12 7.7 9.11a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z',
  close: 'M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z',
  cookie: 'M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10H18V9C18,8 17,8 17,8H15V7C15,6 14,6 14,6H13V4C13,3 12,3 12,3M9.5,6A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,7.5A1.5,1.5 0 0,1 9.5,6M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5A1.5,1.5 0 0,1 11.5,11M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16H16.5A1.5,1.5 0 0,1 15,14.5H15A1.5,1.5 0 0,1 16.5,13M11,16A1.5,1.5 0 0,1 12.5,17.5A1.5,1.5 0 0,1 11,19A1.5,1.5 0 0,1 9.5,17.5A1.5,1.5 0 0,1 11,16Z',
  dropdown: 'M7 10l5 5 5-5z',
  dropup: 'M7 14l5-5 5 5z',
  edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
  education: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z',
  eyeOff: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
  facebook: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
  floppy: 'M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z',
  geoLocation: 'M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
  info: 'M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  ios: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z',
  website: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
  location: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  linkedin: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
  mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  menu: 'M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z',
  notice: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  person: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  radio: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
  radioChecked: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
  remove: 'M19 13H5v-2h14v2z',
  star: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  smartphone: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z',
  suitcase: 'M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z',
  times: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
  twitter: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
  up: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
  pollOutlined: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z',
  peopleOutlined: 'M 9 13.75 c -2.34 0 -7 1.17 -7 3.5 V 19 h 14 v -1.75 c 0 -2.33 -4.66 -3.5 -7 -3.5 Z M 4.34 17 c 0.84 -0.58 2.87 -1.25 4.66 -1.25 s 3.82 0.67 4.66 1.25 H 4.34 Z M 9 12 c 1.93 0 3.5 -1.57 3.5 -3.5 S 10.93 5 9 5 S 5.5 6.57 5.5 8.5 S 7.07 12 9 12 Z m 0 -5 c 0.83 0 1.5 0.67 1.5 1.5 S 9.83 10 9 10 s -1.5 -0.67 -1.5 -1.5 S 8.17 7 9 7 Z m 7.04 6.81 c 1.16 0.84 1.96 1.96 1.96 3.44 V 19 h 4 v -1.75 c 0 -2.02 -3.5 -3.17 -5.96 -3.44 Z M 15 12 c 1.93 0 3.5 -1.57 3.5 -3.5 S 16.93 5 15 5 c -0.54 0 -1.04 0.13 -1.5 0.35 c 0.63 0.89 1 1.98 1 3.15 s -0.37 2.26 -1 3.15 c 0.46 0.22 0.96 0.35 1.5 0.35 Z',
  messageOutlined: 'M 4 4 h 16 v 12 H 5.17 L 4 17.17 V 4 m 0 -2 c -1.1 0 -1.99 0.9 -1.99 2 L 2 22 l 4 -4 h 14 c 1.1 0 2 -0.9 2 -2 V 4 c 0 -1.1 -0.9 -2 -2 -2 H 4 Z m 2 10 h 12 v 2 H 6 v -2 Z m 0 -3 h 12 v 2 H 6 V 9 Z m 0 -3 h 12 v 2 H 6 V 6 Z',
  mute: 'M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm15.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z',
  whatsapp: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z',
  microphone: 'M12 2c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2s-2-.897-2-2v-7c0-1.103.897-2 2-2zm0-2c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4s4-1.791 4-4v-7c0-2.209-1.791-4-4-4zm8 9v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z',
  share: 'M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z',
  shareNetwork: 'M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z',
  people: 'M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z',
  autoPilot: 'M7.599 17.399c0-.729-.591-1.32-1.32-1.32s-1.32.591-1.32 1.32c0 .729.591 1.32 1.32 1.32s1.32-.591 1.32-1.32zm7.922.88c0-.243-.197-.44-.44-.44h-6.162c-.243 0-.44.197-.44.44s.197.44.44.44h6.161c.244 0 .441-.197.441-.44zm3.521-.88c0-.729-.591-1.32-1.32-1.32-.729 0-1.32.591-1.32 1.32 0 .729.591 1.32 1.32 1.32.728 0 1.32-.591 1.32-1.32zm-15.226-5.722h-1.938c-.243 0-.44.197-.44.44v.45c0 .698.815.871 1.422.871l.956-1.761zm17.003 2.789c-.67-1.244-1.496-2.79-2.362-4.236-.692-1.154-1.206-1.706-2.421-1.925-1.228-.219-2.36-.305-4.036-.305s-2.808.086-4.036.306c-1.215.218-1.729.77-2.421 1.925-.864 1.441-1.684 2.977-2.362 4.236-.605 1.121-.863 2.123-.863 3.35 0 1.16.37 2.125.88 3.36v1.944c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-.88h11.443v.88c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-1.944c.511-1.235.88-2.2.88-3.36.001-1.229-.257-2.23-.862-3.351zm-13.767-3.331c.59-.983.75-1.012 1.223-1.097 1.117-.2 2.161-.278 3.725-.278s2.608.078 3.725.278c.474.085.634.113 1.223 1.097.359.6.713 1.222 1.051 1.831-1.281.194-3.538.471-5.999.471-2.683 0-4.856-.295-5.99-.488.336-.603.686-1.22 1.042-1.814zm10.206 9.344h-10.516c-1.471 0-2.664-1.192-2.664-2.664 0-1.445.446-2.131 1.042-3.237.916.181 3.492.62 6.88.62 3.064 0 5.775-.4 6.895-.591.584 1.083 1.026 1.769 1.026 3.209.001 1.471-1.192 2.663-2.663 2.663zm4.864-8.802c.243 0 .44.197.44.44v.45c0 .698-.815.871-1.422.871l-.956-1.76h1.938zm-4.419-9.677h-5.709v-.608c.001-.814-.708-1.455-1.532-1.387l-4.172.464c-.733.061-1.29.664-1.29 1.387v3.286c0 .723.556 1.325 1.288 1.386l4.171.466c.825.069 1.535-.572 1.535-1.388v-.607h2.224l.808-.988.815.989.871-.988.812.988 1.476-1.294-1.297-1.706zm-10.709 3.534l-.664-.059c-.187-.016-.336-.167-.335-.345v-3.286c0-.177.148-.329.335-.344l.663-.06v4.094z',
  stop: 'M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm.932 11.667c-.127.328-1.695 3.888-2.096 4.786-.42.941-1.239 1.881-2.751 1.881h-2.627c-1.592-.001-2.429-.945-2.429-2.597v-7.208c0-.956 1.317-.908 1.317-.044v3.16c0 .26.477.259.477 0v-5.078c0-.982 1.472-.957 1.472 0v4.795c0 .264.442.252.442-.005v-5.628c0-.957 1.458-.984 1.458 0l.001 5.692c0 .254.459.261.459 0v-4.78c0-.905 1.596-.933 1.596 0v5.417c0 .331.327.384.45.131.118-.24.605-1.315.613-1.327.489-1.029 2.127-.404 1.618.805z',
  computerControlled: 'M10 2h-2v-2h2v2zm-8 6h-2v2h2v-2zm0-5c0-.551.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3v4h2v-4zm0 8h-2v2h2v-2zm14-11h-2v2h2v-2zm-3 0h-2v2h2v-2zm-11 14h-2v2h2v-2zm18-2.042h-2.277l-2.36 5.386-2.883-7.93-2.442 5.78-2.071-4.14-1.129 1.966h-2.838v6.98h16v-8.042zm-16 .063h2.259l1.768-3.081 1.935 3.866 2.589-6.126 2.899 7.976 1.62-3.697h2.93v-6.959h-16v8.021zm10 11.979h2v-2h-2v2zm8-11h2v-2h-2v2zm-20 8v-4h-2v4c0 1.657 1.343 3 3 3h4v-2h-4c-.552 0-1-.449-1-1zm20 0c0 .551-.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3v-4h-2v4zm0-11h2v-2h-2v2zm0 6h2v-2h-2v2zm2-13c0-1.657-1.343-3-3-3h-4v2h4c.552 0 1 .449 1 1v4h2v-4zm-16 21h2v-2h-2v2zm3 0h2v-2h-2v2z',
  dice: 'M21 16.5a1 1 0 0 1-.527.881l-7.907 4.443a.996.996 0 0 1-1.132 0l-7.907-4.443A1 1 0 0 1 3 16.5v-9a1 1 0 0 1 .527-.881l7.907-4.443a.995.995 0 0 1 1.132 0l7.907 4.443A1 1 0 0 1 21 7.5v9zM5.5 14.316c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.313 1 .118 1-.434s-.448-1.253-1-1.566zm0-4c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.313 1 .118 1-.434s-.448-1.253-1-1.566zm4 6.264c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.312 1 .118 1-.434c0-.553-.448-1.254-1-1.566zm-2-3.132c-.552-.313-1-.118-1 .434s.448 1.253 1 1.566c.552.312 1 .118 1-.434c0-.553-.448-1.254-1-1.566zm2-.868c-.552-.313-1-.119-1 .434c0 .552.448 1.253 1 1.566c.552.312 1 .118 1-.434c0-.553-.448-1.254-1-1.566zm9 1.736c-.552.313-1 1.014-1 1.566s.448.746 1 .434c.552-.313 1-1.014 1-1.566s-.448-.747-1-.434zm0-4c-.552.313-1 1.014-1 1.566s.448.747 1 .434s1-1.014 1-1.566s-.448-.747-1-.434zm-4 6.264c-.552.312-1 1.014-1 1.566s.448.746 1 .434c.552-.313 1-1.014 1-1.566s-.448-.747-1-.434zm0-4c-.552.312-1 1.014-1 1.566s.448.746 1 .434c.552-.313 1-1.014 1-1.566s-.448-.747-1-.434zm1.992-4.81c.547-.321.602-.806.124-1.082s-1.31-.24-1.856.083c-.547.322-.602.807-.124 1.083c.478.276 1.31.239 1.856-.083zm-7.425.333c.547-.322.603-.807.124-1.083c-.478-.276-1.309-.239-1.856.083c-.547.322-.602.807-.124 1.083c.478.276 1.31.24 1.856-.083zm3.713-.166c.546-.322.602-.807.124-1.083c-.479-.276-1.31-.239-1.857.083c-.546.322-.602.807-.124 1.083c.479.276 1.31.239 1.857-.083z',
  rec: 'M0,12a12,12 0 1,0 24,0a12,12 0 1,0 -24,0',
  cycle: 'M18 13v5h-5l1.607-1.608c-3.404-2.824-5.642-8.392-9.179-8.392-2.113 0-3.479 1.578-3.479 4s1.365 4 3.479 4c1.664 0 2.86-1.068 4.015-2.392l1.244 1.561c-1.499 1.531-3.05 2.831-5.259 2.831-3.197 0-5.428-2.455-5.428-6s2.231-6 5.428-6c4.839 0 7.34 6.449 10.591 8.981l1.981-1.981zm.57-7c-2.211 0-3.762 1.301-5.261 2.833l1.244 1.561c1.156-1.325 2.352-2.394 4.017-2.394 2.114 0 3.48 1.578 3.48 4 0 1.819-.771 3.162-2.051 3.718v2.099c2.412-.623 4-2.829 4-5.816.001-3.546-2.231-6.001-5.429-6.001z',
  loop: 'M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z',
  soundcloud: 'M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z',
  openInNew: 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
  twitch: 'M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z',
  discogs: 'M7.247,16.996l-1.053,1.139c0,0,0,0,0,0l-0.057,0.062l0,0l-0.491,0.531l-0.001,0.001l-0.499,0.539 C3.215,17.446,2.006,14.866,2.001,12v-0.095L2,11.904c0.06-5.478,4.509-9.894,9.999-9.902h0.162 c1.713,0.027,3.321,0.488,4.721,1.274l-0.285,0.522l-0.001,0.001l-0.395,0.723c0,0,0,0-0.001,0l-0.04,0.073c0,0,0.001,0,0.001,0 l-0.746,1.361l0,0l-0.04,0.072l0,0l-0.744,1.358h0l-0.037,0.069l-0.728,1.329c-0.544-0.315-1.174-0.498-1.848-0.498 c-2.043,0-3.698,1.655-3.698,3.698c0,1.043,0.434,1.984,1.129,2.656c-0.004-0.004-0.009-0.008-0.013-0.012l-0.35,0.379 l-0.024,0.025l-0.654,0.708l-0.053,0.057l-1.051,1.137v0L7.247,16.996L7.247,16.996z M18.971,4.835l-0.967,1.04c0,0,0,0,0,0 l-0.057,0.061c0,0,0,0,0,0l-1.056,1.137l0,0l-0.056,0.06v0L15.78,8.268v0l-0.053,0.057l-0.39,0.419l-0.003,0.003l-0.641,0.69 c0.631,0.663,1.021,1.559,1.021,2.547c0,2.042-1.656,3.698-3.697,3.698c-0.621,0-1.205-0.155-1.719-0.425l-0.742,1.321l-1.05,1.869 l-0.547,0.974l-0.041,0.073l-0.716,1.273c1.423,0.781,3.057,1.227,4.796,1.231C17.522,21.999,22,17.521,22,12 C21.999,9.189,20.837,6.652,18.971,4.835z M11.315,11.984c0,0.387,0.315,0.7,0.702,0.7c0.386,0,0.703-0.314,0.703-0.7 c0-0.388-0.317-0.702-0.703-0.702C11.63,11.282,11.315,11.596,11.315,11.984z',
  mixcloud: 'M19.399,21.164h3.351V2.836h-6.628l-3.693,17.473h-0.858L7.878,2.836H1.25v18.328h3.351V5.875L4.003,3.691h1.055  l3.875,17.473h6.159l3.849-17.473h1.081l-0.623,2.185V21.164z'
};

var _templateObject$8;
var Svg = styled__default['default'].svg.withConfig({
  shouldForwardProp: function shouldForwardProp(prop, defaultValidatorFn) {
    return !['height', 'width'].includes(prop) && defaultValidatorFn(prop);
  }
})(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  ", "\n"])), composers.box);
var Icon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 24 24' : _ref$viewBox,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'gray.9' : _ref$fill,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["title", "size", "viewBox", "fill", "icon"]);

  return /*#__PURE__*/React__default['default'].createElement(Box, _extends({
    as: "span",
    justifyContent: "center",
    alignItems: "center",
    ref: ref
  }, props), /*#__PURE__*/React__default['default'].createElement(Svg, {
    "data-testid": "bt__svg-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: viewBox,
    fill: fill
  }, title && /*#__PURE__*/React__default['default'].createElement("title", null, title), /*#__PURE__*/React__default['default'].createElement("path", {
    d: iconPaths[icon]
  })));
});
Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
};

var _templateObject$7;

var ellipsis = function ellipsis(props) {
  return props.ellipsis && "\n    display: -webkit-box;\n    overflow: hidden;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: ".concat(props.ellipsis, ";\n  ");
};

var Text = styled__default['default'].span.attrs(function (props) {
  var isTitle = props.textStyle.includes('title');
  if (props.link) return {
    as: 'a',
    textDecoration: 'none',
    fontFamily: isTitle ? props.theme.fonts.title : props.theme.fonts.normal
  };

  if (isTitle) {
    return {
      fontFamily: props.theme.fonts.title
    };
  }

  return {
    fontFamily: props.theme.fonts.normal
  };
})(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", "\n"])), composers.box, composers.text, ellipsis, styledSystem.textStyle, styledSystem.variant({
  prop: 'link',
  scale: 'linkStyles'
}));
Text.defaultProps = {
  textStyle: 'p.default',
  width: 'fit-content',
  transition: 'all 0.1s ease-in',
  lineHeight: 'default'
};

var baseTheme = {
  borderWidths: [0, '3px'],
  breakpoints: ['444px', '768px', '1080px', '1640px'],
  fonts: {
    normal: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    title: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '28px', '34px', '40px', '48px'],
  fontWeights: {
    light: 100,
    regular: 400,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    "default": 1.5
  },
  radii: ['0', '3px', '6px', '9px'],
  shadows: {
    xs: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)',
    sm: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.14)',
    md: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.17)',
    lg: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.17)',
    xl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.19)'
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px']
};

var themeColors = {
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
  black: '#1b1f23',
  white: '#fff',
  blackfade15: 'rgba(27, 31, 35, 0.15)',
  blackfade20: 'rgba(27, 31, 35, 0.20)',
  blackfade30: 'rgba(27,31,35,0.3)',
  blackfade35: 'rgba(27, 31, 35, 0.35)',
  blackfade50: 'rgba(27, 31, 35, 0.5)',
  blackfade80: 'rgba(27, 31, 35, 0.8)',
  blackfade90: '#000000ed',
  whitefade15: 'rgba(255, 255, 255, 0.15)',
  whitefade50: 'rgba(255, 255, 255, 0.50)',
  whitefade80: 'rgba(255, 255, 255, 0.8)'
};

var disabledStyles = {
  backgroundColor: themeColors.gray[2],
  borderColor: themeColors.gray[2],
  color: themeColors.gray[4],
  '& svg > path': {
    fill: themeColors.gray[4]
  }
};
var commonDefault = {
  borderWidth: '2px',
  borderStyle: 'solid'
};
var buttonStyles = {
  text: {
    color: themeColors.black,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: '2px',
    borderStyle: 'solid',
    '& svg > path': {
      fill: themeColors.black
    },
    '&:hover': {
      backgroundColor: themeColors.gray[1],
      borderColor: themeColors.gray[1]
    },
    '&:active': {
      backgroundColor: themeColors.gray[2],
      borderColor: themeColors.gray[2]
    },
    '&:disabled': disabledStyles
  },
  primary: _objectSpread2(_objectSpread2({
    color: themeColors.white,
    backgroundColor: themeColors.gray[8],
    borderColor: themeColors.gray[9]
  }, commonDefault), {}, {
    '& svg > path': {
      fill: themeColors.white
    },
    '&:hover': {
      backgroundColor: themeColors.gray[7],
      fill: themeColors.white,
      borderColor: themeColors.gray[7]
    },
    '&:active': {
      color: themeColors.white,
      fill: themeColors.white,
      backgroundColor: themeColors.gray[8],
      borderColor: themeColors.gray[8]
    },
    '&:disabled': disabledStyles
  }),
  secondary: _objectSpread2(_objectSpread2({
    color: themeColors.gray[7],
    backgroundColor: themeColors.white,
    borderColor: themeColors.gray[7]
  }, commonDefault), {}, {
    '& svg > path': {
      fill: themeColors.gray[7]
    },
    '&:hover': {
      color: themeColors.white,
      fill: themeColors.white,
      backgroundColor: themeColors.gray[7],
      borderColor: themeColors.gray[7],
      '& svg > path': {
        fill: themeColors.white
      }
    },
    '&:active': {
      color: themeColors.white,
      fill: themeColors.white,
      backgroundColor: themeColors.gray[8],
      borderColor: themeColors.gray[8]
    },
    '&:disabled': disabledStyles
  }),
  danger: _objectSpread2(_objectSpread2({
    color: themeColors.white,
    backgroundColor: themeColors.red[4],
    borderColor: themeColors.red[4]
  }, commonDefault), {}, {
    '& svg > path': {
      fill: themeColors.white
    },
    '&:hover': {
      backgroundColor: themeColors.red[5],
      borderColor: themeColors.red[5]
    },
    '&:active': {
      backgroundColor: themeColors.red[6],
      borderColor: themeColors.red[6]
    },
    '&:disabled': disabledStyles
  }),
  warning: _objectSpread2(_objectSpread2({
    color: themeColors.red[6],
    backgroundColor: themeColors.yellow[4],
    borderColor: themeColors.yellow[4]
  }, commonDefault), {}, {
    '& svg > path': {
      fill: themeColors.red[6]
    },
    '&:hover': {
      backgroundColor: themeColors.yellow[5],
      borderColor: themeColors.yellow[5]
    },
    '&:active': {
      backgroundColor: themeColors.yellow[6],
      borderColor: themeColors.yellow[6]
    },
    '&:disabled': disabledStyles
  }),
  info: _objectSpread2(_objectSpread2({
    color: themeColors.white,
    backgroundColor: themeColors.blue[4],
    borderColor: themeColors.blue[4]
  }, commonDefault), {}, {
    '& svg > path': {
      fill: themeColors.white
    },
    '&:hover': {
      backgroundColor: themeColors.blue[5],
      borderColor: themeColors.blue[5]
    },
    '&:active': {
      backgroundColor: themeColors.blue[6],
      borderColor: themeColors.blue[6]
    },
    '&:disabled': disabledStyles
  }),
  success: _objectSpread2(_objectSpread2({
    color: themeColors.white,
    backgroundColor: themeColors.green[7],
    borderColor: themeColors.green[7]
  }, commonDefault), {}, {
    '& svg > path': {
      fill: themeColors.green
    },
    '&:hover': {
      backgroundColor: themeColors.green[6],
      borderColor: themeColors.green[6]
    },
    '&:active': {
      backgroundColor: themeColors.green[7],
      borderColor: themeColors.green[7]
    },
    '&:disabled': disabledStyles
  })
};
var buttonShapeVariant = styledSystem.variant({
  prop: 'shape',
  key: 'buttonShape'
});
var buttonShape = {
  "default": {
    sm: {
      height: '32px',
      fontSize: baseTheme.fontSizes[1],
      lineHeight: baseTheme.fontSizes[1],
      borderRadius: baseTheme.radii[1],
      padding: "0 4px"
    },
    md: {
      height: '40px',
      fontSize: baseTheme.fontSizes[2],
      borderRadius: baseTheme.radii[1],
      padding: '0 16px'
    },
    lg: {
      height: '48px',
      fontSize: baseTheme.fontSizes[3],
      lineHeight: baseTheme.fontSizes[6],
      borderRadius: baseTheme.radii[2],
      padding: "0 32px"
    }
  },
  circle: {
    sm: {
      height: '32px',
      width: '32px',
      maxWidth: '32px',
      borderRadius: '50%',
      fontSize: baseTheme.fontSizes[1],
      '& svg': {
        width: '24px',
        height: '24px'
      }
    },
    md: {
      height: '40px',
      width: '40px',
      maxWidth: '40px',
      borderRadius: '50%',
      fontSize: baseTheme.fontSizes[2],
      '& svg': {
        width: '32px',
        height: '32px'
      }
    },
    lg: {
      height: '48px',
      width: '48px',
      maxWidth: '48px',
      borderRadius: '50%',
      fontSize: baseTheme.fontSizes[3],
      '& svg': {
        width: '40px',
        height: '40px'
      }
    }
  },
  squared: {
    sm: {
      height: '32px',
      width: '32px',
      maxWidth: '32px',
      borderRadius: baseTheme.radii[1],
      fontSize: baseTheme.fontSizes[1],
      '& svg': {
        width: '24px',
        height: '24px'
      }
    },
    md: {
      height: '40px',
      width: '40px',
      maxWidth: '40px',
      borderRadius: baseTheme.radii[1],
      fontSize: baseTheme.fontSizes[2],
      '& svg': {
        width: '32px',
        height: '32px'
      }
    },
    lg: {
      height: '48px',
      width: '48px',
      maxWidth: '48px',
      borderRadius: baseTheme.radii[1],
      fontSize: baseTheme.fontSizes[3],
      '& svg': {
        width: '40px',
        height: '40px'
      }
    }
  }
};

var buttonStyles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  buttonStyles: buttonStyles,
  buttonShapeVariant: buttonShapeVariant,
  buttonShape: buttonShape
});

var _templateObject$6;
var InnerButton = styled__default['default'].button(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  &:disabled {\n    pointer-events: none;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), buttonShapeVariant, styledSystem.buttonStyle, styledSystem.typography, composers.box);
InnerButton.defaultProps = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in',
  letterSpacing: '0.5',
  textAlign: 'center',
  m: 2
};

var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'button' : _ref$as,
      icon = _ref.icon,
      onClick = _ref.onClick,
      children = _ref.children,
      disabled = _ref.disabled,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, ["as", "icon", "onClick", "children", "disabled", "loading"]);

  var buttonContent = React.useMemo(function () {
    if (loading) return /*#__PURE__*/React__default['default'].createElement(Spinner, {
      size: 18,
      color: "gray.2"
    });
    if (icon) return /*#__PURE__*/React__default['default'].createElement(Icon, {
      icon: icon,
      fill: "gray.0"
    });
    return /*#__PURE__*/React__default['default'].createElement(Text, {
      variant: "p"
    }, children);
  }, [children, icon, loading]);
  return /*#__PURE__*/React__default['default'].createElement(InnerButton, _extends({
    as: as,
    ref: ref,
    onClick: onClick,
    disabled: disabled || loading
  }, props), buttonContent);
});
Button.defaultProps = {
  variant: 'primary',
  shape: 'default.md',
  fontFamily: 'normal',
  fontWeight: 500,
  cursor: 'pointer'
};
Button.displayName = 'Button';
Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.string
};

var transforms = {
  top: 'translateY(-100%)',
  right: 'translateX(100%)',
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)'
};
var defaultPlacements = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0
  },
  bottom: {
    right: 0,
    bottom: 0,
    left: 0
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0
  }
};

var _templateObject$5, _templateObject2$1;
/* https://github.com/GoogleChrome/lighthouse/issues/10908 
  In the home-next I noticed an issue with lighthouse regarding the visibility of the drawer content.
  I'm going to remove this comment once everything will be tested in front.
  display: ${(props) => (props.open ? 'block' : 'none')};
*/

var DrawerWrapper = styled__default['default'](Box)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  display: block;\n  transform: ", ";\n"])), function (props) {
  return !props.open ? transforms[props.side] : null;
});
DrawerWrapper.displayName = 'DrawerWrapper';
DrawerWrapper.defaultProps = {
  zIndices: 'drawer',
  width: '100%'
};
var DrawerContent = styled__default['default'](Box)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: block;\n  box-sizing: border-box;\n  ", "\n  height: ", ";\n  ", "\n  z-index: 7;\n  transform: ", ";\n  transition: transform 0.2s ease-out;\n"])), function (props) {
  return props.placements[props.side];
}, function (props) {
  return (props.side === 'top' || props.side === 'bottom') && props.size ? props.size : '100%';
}, function (props) {
  return props.open && ['bottom', 'top'].includes(props.side) && 'height: fit-content;';
}, function (props) {
  return !props.open ? transforms[props.side] : null;
});
DrawerContent.defaultProps = {
  maxWidth: '100%',
  bg: 'white',
  boxShadow: 'md',
  color: 'black',
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'fixed',
  width: '100%'
};
DrawerContent.displayName = 'DrawerContent';

var Drawer = function Drawer(_ref) {
  var children = _ref.children,
      open = _ref.open;
      _ref.onDismiss;
      var placement = _ref.placement,
      _ref$side = _ref.side,
      side = _ref$side === void 0 ? 'top' : _ref$side,
      props = _objectWithoutProperties(_ref, ["children", "open", "onDismiss", "placement", "side"]);

  var enhancedPlacements = placement ? _objectSpread2(_objectSpread2({}, defaultPlacements), {}, _defineProperty({}, placement.key, placement.value)) : defaultPlacements;
  return /*#__PURE__*/React__default['default'].createElement(DrawerWrapper, {
    as: "div",
    open: open,
    side: side
  }, /*#__PURE__*/React__default['default'].createElement(DrawerContent, _extends({
    "data-testid": "drawer__container",
    as: "div",
    open: open,
    side: side,
    placements: enhancedPlacements
  }, props), children));
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  onDismiss: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  placement: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string]))
  })
};
var Drawer$1 = /*#__PURE__*/React.memo(Drawer);

var _templateObject$4;
var InputField$1 = styled__default['default'].input(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), composers.text, composers.box, function (_ref) {
  var theme = _ref.theme;
  return "\n    &:focus {\n      border-color:".concat(theme.colors.blue[5], ";\n      background:").concat(theme.colors.blue[0], ";\n    }\n    &:active {\n      border-color:").concat(theme.colors.blue[5], ";\n    }\n    &:disabled {\n      border-color:").concat(theme.colors.gray[4], ";\n      background:").concat(theme.colors.gray[0], ";\n    }\n  ");
});
InputField$1.defaultProps = {
  boxSizing: 'border-box',
  fontFamily: 'normal',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 4,
  fontSize: 2,
  height: '40px',
  width: '100%'
};

var InputField = function InputField(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return /*#__PURE__*/React__default['default'].createElement(Box, {
    className: "bt__input--container",
    flexDirection: "column"
  }, label && /*#__PURE__*/React__default['default'].createElement(Text, {
    ml: 1,
    className: "bt__input--label",
    color: "gray.9",
    textStyle: "p.xs",
    fontWeight: "semibold"
  }, label), /*#__PURE__*/React__default['default'].createElement(InputField$1, props));
};

InputField.propTypes = {
  label: PropTypes.string
};

var _templateObject$3;
var StyledOverlay = styled__default['default'](Box)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transition: height 0.3s ease-out;\n"])));
StyledOverlay.defaultProps = {
  zIndex: 5,
  position: 'fixed',
  bg: 'blackfade35'
};

var Overlay = function Overlay(_ref) {
  var isVisible = _ref.isVisible,
      props = _objectWithoutProperties(_ref, ["isVisible"]);

  React.useEffect(function () {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return function () {
      document.body.style.overflow = '';
    };
  }, [isVisible]);
  return /*#__PURE__*/React__default['default'].createElement(StyledOverlay, _extends({
    key: "overlay",
    display: isVisible ? 'block' : 'none'
  }, props));
};

Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  isVisible: PropTypes.bool
};

var context = /*#__PURE__*/React.createContext({
  activeTabId: 'a',
  changeTab: function changeTab() {}
});

styled__default['default'](Text).withConfig({
  displayName: "TabPanel___StyledText",
  componentId: "sc-1uzt35c-0"
})(["transition:all .3s ease"]);

({
  id: PropTypes.string,
  children: PropTypes.node
});

({
  whenActive: PropTypes.string,
  children: PropTypes.node
});

var TabSwitcher = function TabSwitcher(_ref3) {
  var children = _ref3.children,
      defaultTab = _ref3.defaultTab;

  var _useState = React.useState('a'),
      _useState2 = _slicedToArray(_useState, 2),
      activeTabId = _useState2[0],
      setActiveTab = _useState2[1];

  var changeTab = function changeTab(newTabId) {
    setActiveTab(newTabId);
  };

  React.useEffect(function () {
    if (defaultTab) {
      changeTab(defaultTab);
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(context.Provider, {
    value: {
      activeTabId: activeTabId,
      changeTab: changeTab
    }
  }, children);
};

TabSwitcher.propTypes = {
  children: PropTypes.node,
  defaultTab: PropTypes.string
};

var _templateObject$2, _templateObject2, _templateObject3;

var Toggle = function Toggle(_ref) {
  var onChange = _ref.onChange,
      ariaLabel = _ref.ariaLabel,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["onChange", "ariaLabel", "disabled"]);

  return /*#__PURE__*/React__default['default'].createElement(CheckBoxWrapper, _extends({
    disabled: disabled
  }, props), /*#__PURE__*/React__default['default'].createElement(CheckBox, {
    "aria-label": ariaLabel,
    disabled: disabled,
    id: ariaLabel,
    type: "checkbox",
    onChange: onChange
  }), /*#__PURE__*/React__default['default'].createElement(CheckBoxLabel, {
    disabled: disabled,
    htmlFor: ariaLabel
  }));
};

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
Toggle.defaultProps = {
  ariaLabel: 'toggle-id',
  disabled: false
};
var CheckBoxWrapper = styled__default['default'].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  position: relative;\n  ", "\n  ", "\n"])), composers.box, function (props) {
  return props.disabled ? "\n     border-color: ".concat(props.theme.colors.gray[1], ";\n  ") : "\n     border-color: ".concat(props.theme.colors.borderColor, ";\n  ");
});
CheckBoxWrapper.defaultProps = {
  border: '2px solid',
  borderColor: 'gray.3',
  borderRadius: '15px',
  position: 'relative',
  width: '46px',
  maxWidth: '46px',
  m: 2
};
var CheckBoxLabel = styled__default['default'].label(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: ", ";\n  &::after {\n    z-index: 10;\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: ", ";\n    box-shadow: ", ";\n    transition: all 0.2s ease-in;\n  }\n  ", "\n"])), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.disabled ? props.theme.colors.gray[4] : props.theme.colors.gray[6];
}, function (props) {
  return props.disabled ? '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' : '1px 3px 3px 1px rgba(0, 0, 0, 0.2)';
}, composers.box);
CheckBoxLabel.defaultProps = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '42px',
  height: '24px',
  borderRadius: '15px',
  bg: 'gray.3'
};
var CheckBox = styled__default['default'].input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: ", ";\n  &:checked + ", " {\n    transition: all 0.2s ease-in;\n    &::after {\n      content: '';\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n    }\n  }\n  &:not(:checked) + ", " {\n    background: ", ";\n  }\n"])), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, CheckBoxLabel, CheckBoxLabel, function (props) {
  return props.disabled ? props.theme.colors.gray[1] : props.theme.colors.white;
});
CheckBox.defaultProps = {
  zIndex: 1,
  width: '24px',
  height: '20px',
  borderRadius: '15px',
  bg: 'gray.1'
};

var _templateObject$1;
var TextArea = styled__default['default'].textarea(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  box-sizing: border-box;\n  ", "\n"])), composers.box, composers.text, function (_ref) {
  var theme = _ref.theme;
  return "\n    &:focus {\n      border-color:".concat(theme.colors.blue[5], ";\n      background:").concat(theme.colors.blue[0], ";\n    }\n    &:active {\n      border-color:").concat(theme.colors.blue[5], ";\n    }\n    &:disabled {\n      border-color:").concat(theme.colors.gray[4], ";\n      background:").concat(theme.colors.gray[0], ";\n    }\n  ");
});
TextArea.defaultProps = {
  boxSizing: 'border-box',
  fontFamily: 'normal',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 4,
  fontSize: 2,
  width: '100%'
};

var _templateObject;
var GlobalReset = styled.createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  ul,\n  ol {\n    padding: 0;\n  }\n\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  ul,\n  ol,\n  li,\n  figure,\n  figcaption,\n  blockquote,\n  dl,\n  dd {\n    margin: 0;\n  }\n\n  body {\n    scroll-behavior: smooth;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  ul,\n  ol {\n    list-style: none;\n  }\n\n  img {\n    max-width: 100%;\n    display: block;\n  }\n\n  input,\n  button,\n  textarea,\n  select {\n    font: inherit;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n\n  html {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n"])));

var customTextProps = styledSystem.system({
  cursor: {
    property: 'cursor'
  },
  fill: {
    property: 'fill',
    scale: 'colors'
  },
  stroke: {
    property: 'stroke',
    scale: 'colors'
  },
  strokeWidth: {
    property: 'strokeWidth'
  },
  outline: {
    property: 'outline'
  },
  textDecoration: {
    property: 'textDecoration'
  },
  whiteSpace: {
    property: 'whiteSpace'
  },
  textTransform: {
    property: 'textTransform'
  },
  letterSpacing: {
    property: 'letterSpacing'
  },
  wordBreak: {
    property: 'wordBreak'
  }
});
var customBoxProps = styledSystem.system({
  boxSizing: {
    property: 'boxSizing'
  },
  pointerEvents: {
    property: 'pointerEvents'
  },
  transform: {
    property: 'transform'
  },
  transition: {
    property: 'transition'
  }
});
({
  box: styledSystem.compose(styledSystem.flexbox, styledSystem.layout, styledSystem.space, styledSystem.color, styledSystem.border, styledSystem.position, styledSystem.background, styledSystem.shadow, styledSystem.typography, styledSystem.grid, customTextProps, customBoxProps),
  text: styledSystem.compose(styledSystem.typography, styledSystem.color, styledSystem.space, styledSystem.layout, styledSystem.position, styledSystem.flexbox, customTextProps)
});

var title = {
  xl: {
    fontSize: baseTheme.fontSizes[7],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  lg: {
    fontSize: baseTheme.fontSizes[6],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  "default": {
    fontSize: baseTheme.fontSizes[5],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  sm: {
    fontSize: baseTheme.fontSizes[4],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  xs: {
    fontSize: baseTheme.fontSizes[3],
    fontWeight: 'bold',
    marginBottom: 1
  }
};
var p = {
  xl: {
    fontSize: baseTheme.fontSizes[4]
  },
  lg: {
    fontSize: baseTheme.fontSizes[3]
  },
  "default": {
    fontSize: baseTheme.fontSizes[2]
  },
  sm: {
    fontSize: baseTheme.fontSizes[1]
  },
  xs: {
    fontSize: baseTheme.fontSizes[0]
  }
};
var textStyles = {
  p: p,
  title: title
};

var linkProps = {
  cursor: 'pointer',
  marginTop: '-2px',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'transparent',
  height: 'min-content',
  textDecoration: 'none'
};
var linkStyles = {
  "default": _objectSpread2(_objectSpread2({}, linkProps), {}, {
    color: themeColors.purple[4],
    '&:hover': {
      borderBottomColor: themeColors.purple[4],
      borderBottomWidth: '2px'
    }
  }),
  lg: _objectSpread2(_objectSpread2({}, linkProps), {}, {
    color: 'blue.6',
    '&:hover': {
      borderBottomColor: 'white',
      borderBottomWidth: '2px'
    }
  }),
  external: _objectSpread2(_objectSpread2({}, linkProps), {}, {
    color: themeColors.red[4],
    '&:hover': {
      borderBottomColor: themeColors.red[4],
      borderBottomWidth: '2px'
    }
  }),
  cta: {
    paddingLeft: baseTheme.space[1],
    paddingRight: baseTheme.space[1],
    marginTop: '-2px',
    marginLeft: baseTheme.space[1],
    marginRight: baseTheme.space[1],
    cursor: 'pointer',
    borderColor: themeColors.gray[8],
    color: themeColors.gray[8],
    border: '2px solid',
    minHeight: '24px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: themeColors.gray[8],
      color: themeColors.gray[0],
      borderColor: themeColors.gray[8]
    }
  }
};

var enhancedColors = _objectSpread2({}, themeColors);

var theme = _objectSpread2(_objectSpread2({}, baseTheme), {}, {
  buttons: buttonStyles,
  buttonShape: buttonShape,
  textStyles: textStyles,
  linkStyles: linkStyles,
  colors: enhancedColors
});

exports.Box = Box;
exports.Button = Button;
exports.Drawer = Drawer$1;
exports.GlobalReset = GlobalReset;
exports.Icon = Icon;
exports.InputField = InputField;
exports.Overlay = Overlay;
exports.Spinner = Spinner;
exports.TabPanel = TabSwitcher;
exports.Text = Text;
exports.TextArea = TextArea;
exports.Toggle = Toggle;
exports.baseTheme = baseTheme;
exports.buttonStyles = buttonStyles$1;
exports.linkStyles = linkStyles;
exports.textStyles = textStyles;
exports.theme = theme;
exports.themeColors = themeColors;
