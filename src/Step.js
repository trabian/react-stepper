'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this));

    _this.getStyles = _this.getStyles.bind(_this);
    return _this;
  }

  _createClass(Step, [{
    key: 'getStyles',
    value: function getStyles() {
      var _props = this.props,
          activeColor = _props.activeColor,
          completeColor = _props.completeColor,
          defaultColor = _props.defaultColor,
          circleFontColor = _props.circleFontColor,
          activeTitleColor = _props.activeTitleColor,
          completeTitleColor = _props.completeTitleColor,
          defaultTitleColor = _props.defaultTitleColor,
          size = _props.size,
          circleFontSize = _props.circleFontSize,
          titleFontSize = _props.titleFontSize,
          circleTop = _props.circleTop,
          titleTop = _props.titleTop,
          width = _props.width,
          completeOpactiy = _props.completeOpactiy,
          defaultOpacity = _props.defaultOpacity,
          activeOpacity = _props.activeOpacity;


      return {
        step: {
          width: width + '%',
          display: 'table-cell',
          position: 'relative',
          paddingTop: circleTop
        },

        circle: {
          width: size,
          height: size,
          margin: '0 auto',
          backgroundColor: 'transparent',
          borderRadius: '50%',
          borderWidth: 3,
          borderStyle: 'solid',
          borderColor: '#fff',
          textAlign: 'center',
          padding: 1,
          fontSize: circleFontSize,
          color: circleFontColor,
          display: 'block',
          opacity: defaultOpacity

        },
        activeCircle: {
          backgroundColor: activeColor,
          opacity: activeOpacity
        },
        completedCircle: {
          backgroundColor: completeColor,
          opacity: completeOpactiy
        },
        index: {
          lineHeight: size + circleFontSize / 4 + 'px',
          color: circleFontColor
        },
        title: {
          marginTop: titleTop,
          fontSize: titleFontSize,
          fontWeight: '300',
          textAlign: 'center',
          display: 'block',
          color: defaultTitleColor,
          opacity: defaultOpacity
        },
        activeTitle: {
          color: activeTitleColor,
          opacity: activeOpacity
        },
        completedTitle: {
          color: completeTitleColor,
          opacity: completeOpactiy
        },
        leftBar: {
          position: 'absolute',
          top: circleTop + size / 2,
          height: 1,
          borderTopStyle: 'dashed',
          borderTopWidth: 1,
          borderTopColor: defaultColor,
          left: 0,
          right: '50%',
          marginRight: size / 2 + 5,
          opacity: defaultOpacity
        },
        rightBar: {
          position: 'absolute',
          top: circleTop + size / 2,
          height: 1,
          borderTopStyle: 'dashed',
          borderTopWidth: 1,
          borderTopColor: defaultColor,
          right: 0,
          left: '50%',
          marginLeft: size / 2 + 5,
          opacity: defaultOpacity
        },
        completedBar: {
          borderTopStyle: 'dashed',
          borderTopWidth: 1,
          borderTopColor: completeColor,
          opacity: completeOpactiy
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          index = _props2.index,
          active = _props2.active,
          completed = _props2.completed,
          first = _props2.first,
          isLast = _props2.isLast,
          href = _props2.href,
          onClick = _props2.onClick;


      var styles = this.getStyles();
      var circleStyle = Object.assign(styles.circle, completed ? styles.completedCircle : {}, active ? styles.activeCircle : {});

      var titleStyle = Object.assign(styles.title, completed ? styles.completedTitle : {}, active ? styles.activeTitle : {});
      var leftStyle = Object.assign(styles.leftBar, active || completed ? styles.completedBar : {});
      var rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

      return _react2.default.createElement(
        'div',
        { style: styles.step },
        _react2.default.createElement(
          'div',
          { style: circleStyle },
          active || completed ? _react2.default.createElement(
            'a',
            { href: href, onClick: onClick, style: styles.index },
            index + 1
          ) : _react2.default.createElement(
            'span',
            { style: styles.index },
            index + 1
          )
        ),
        active || completed ? _react2.default.createElement(
          'a',
          { href: href, onClick: onClick, style: titleStyle },
          title
        ) : _react2.default.createElement(
          'div',
          { style: titleStyle },
          title
        ),
        !first && _react2.default.createElement('div', { style: leftStyle }),
        !isLast && _react2.default.createElement('div', { style: rightStyle })
      );
    }
  }]);

  return Step;
}(_react.Component);

exports.default = Step;


Step.defaultProps = {
  activeColor: '#5096FF',
  completeColor: '#5096FF',
  defaultColor: '#E0E0E0',
  activeTitleColor: '#000',
  completeTitleColor: '#000',
  defaultTitleColor: '#757575',
  circleFontColor: '#FFF',
  size: 32,
  circleFontSize: 16,
  titleFontSize: 16,
  circleTop: 24,
  titleTop: 8
};

Step.propTypes = {
  width: _propTypes2.default.number.isRequired,
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
  titleTop: _propTypes2.default.number,
  title: _propTypes2.default.string,
  index: _propTypes2.default.number,
  active: _propTypes2.default.bool,
  completed: _propTypes2.default.bool,
  first: _propTypes2.default.bool,
  isLast: _propTypes2.default.bool
};
