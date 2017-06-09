'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: '100%',
    minHeight: 0,
    padding: 0
  },
  stepper: {
    display: 'table',
    width: '100%',
    margin: '0 auto'
  }
};

function Stepper(_ref) {
  var activeStep = _ref.activeStep,
      steps = _ref.steps,
      activeColor = _ref.activeColor,
      completeColor = _ref.completeColor,
      defaultColor = _ref.defaultColor,
      circleFontColor = _ref.circleFontColor,
      activeTitleColor = _ref.activeTitleColor,
      completeTitleColor = _ref.completeTitleColor,
      defaultTitleColor = _ref.defaultTitleColor,
      size = _ref.size,
      circleFontSize = _ref.circleFontSize,
      titleFontSize = _ref.titleFontSize,
      circleTop = _ref.circleTop,
      titleTop = _ref.titleTop,
      activeOpacity = _ref.activeOpacity,
      defaultOpacity = _ref.defaultOpacity,
      completeOpactiy = _ref.completeOpactiy;

  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      'div',
      { style: styles.stepper },
      steps.map(function (step, index) {
        return _react2.default.createElement(_Step2.default, {
          key: index,
          width: 100 / steps.length,
          title: step.title,
          href: step.href,
          onClick: step.onClick,
          active: index === activeStep,
          completed: index < activeStep,
          first: index === 0,
          isLast: index === steps.length - 1,
          index: index,
          activeColor: activeColor,
          completeColor: completeColor,
          defaultColor: defaultColor,
          circleFontColor: circleFontColor,
          activeTitleColor: activeTitleColor,
          completeTitleColor: completeTitleColor,
          defaultTitleColor: defaultTitleColor,
          size: size,
          circleFontSize: circleFontSize,
          titleFontSize: titleFontSize,
          circleTop: circleTop,
          titleTop: titleTop,
          activeOpacity: activeOpacity,
          defaultOpacity: defaultOpacity,
          completeOpactiy: completeOpactiy
        });
      })
    )
  );
}

Stepper.defaultProps = {
  activeStep: 0
};

Stepper.propTypes = {
  activeStep: _propTypes2.default.number,
  steps: _propTypes2.default.array,
  activeColor: _propTypes2.default.string,
  completeColor: _propTypes2.default.string,
  defaultColor: _propTypes2.default.string,
  activeTitleColor: _propTypes2.default.string,
  completeTitleColor: _propTypes2.default.string,
  defaultTitleColor: _propTypes2.default.string,
  circleFontColor: _propTypes2.default.string,
  size: _propTypes2.default.number,
  circleFontSize: _propTypes2.default.number,
  titleFontSize: _propTypes2.default.number,
  circleTop: _propTypes2.default.number,
  titleTop: _propTypes2.default.number
};

exports.default = Stepper;
