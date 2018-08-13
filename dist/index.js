'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Loading = _interopDefault(require('react-loading'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
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

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".loader-text {\n\tcolor: #888;\n\tpadding-left: 5px;\n}\n\n.loader-wrapper {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(255, 255, 255, 0.7);\n\tz-index: 9999;\n}\n\n.centerViewer {\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n\tdisplay: inline-block;\n}\n\n.loader-wrapper.fixed {\n\tposition: fixed;\n}\n\n.loader-wrapper.fixed .centerViewer {\n\tposition: fixed\n}\n\n.loader-wrapper.full-screen-loader {\n\tbackground: rgba(255, 255, 255, 0.4);\n}\n\n.inline-small-loader {\n\tdisplay: inline-block;\n}\n";
styleInject(css);

function Loader(props) {
	var text = props.text,
	    type = props.type,
	    size = props.size;

	var viewSize = size ? size : 64;
	var usingType = type ? type : 'bubbles';
	var loader = React.createElement(
		'div',
		{ className: 'loading' },
		React.createElement(
			'span',
			{ className: 'loader-text' },
			text ? text : 'Загрузка...'
		),
		React.createElement(Loading, { type: usingType, color: '#888888', width: viewSize, height: viewSize })
	);

	return React.createElement(
		'div',
		null,
		loader
	);
}

Loader.propTypes = {
	text: propTypes.string,
	type: propTypes.string,
	size: propTypes.number
};

function FullScreenLoader() {
	return React.createElement(
		'div',
		{ className: 'loader-wrapper full-screen-loader' },
		React.createElement(
			'div',
			{ className: 'centerViewer' },
			React.createElement(Loader, null)
		)
	);
}

function InlineSmallLoader(props) {
	var size = props.size,
	    color = props.color,
	    style = props.style;


	return React.createElement(
		'div',
		{ className: 'inline-small-loader', style: style },
		React.createElement(Loading, { type: 'bubbles', color: color, width: size, height: size })
	);
}

InlineSmallLoader.propTypes = {
	size: propTypes.number,
	color: propTypes.string,
	style: propTypes.object
};

InlineSmallLoader.defaultProps = {
	size: 32,
	color: '#888888',
	style: {}
};

function InlineAbsolutePositionLoader(props) {
	var top = props.top,
	    right = props.right,
	    bottom = props.bottom,
	    left = props.left;

	return React.createElement(
		'div',
		{
			style: {
				position: 'absolute',
				top: '' + top,
				right: '' + right,
				bottom: '' + bottom,
				left: '' + left
			}
		},
		React.createElement(InlineSmallLoader, null)
	);
}

InlineAbsolutePositionLoader.propTypes = {
	top: propTypes.string,
	right: propTypes.string,
	bottom: propTypes.string,
	left: propTypes.string
};

function LoadingButton(props) {
	var label = props.label,
	    className = props.className,
	    type = props.type,
	    loading = props.loading,
	    onClick = props.onClick;


	return React.createElement(
		'button',
		{
			type: type,
			className: className,
			style: {
				height: '34px',
				minWidth: '87px',
				position: 'relative'
			},
			disabled: loading,
			onClick: onClick
		},
		loading ? React.createElement(InlineAbsolutePositionLoader, { color: '#ffffff', left: '30%' }) : props.children
	);
}

LoadingButton.propTypes = {
	label: propTypes.oneOfType([propTypes.string, propTypes.object]),
	className: propTypes.string,
	type: propTypes.string,
	loading: propTypes.bool,
	children: propTypes.node,
	onClick: propTypes.func
};

LoadingButton.defaultProps = {
	label: 'OK',
	className: 'btn btn-primary btn-block btn-flat',
	type: 'submit',
	loading: false
};

exports.Loader = Loader;
exports.FullScreenLoader = FullScreenLoader;
exports.InlineAbsolutePositionLoader = InlineAbsolutePositionLoader;
exports.InlineSmallLoader = InlineSmallLoader;
exports.LoadingButton = LoadingButton;
