import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Step extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {
      activeColor, completeColor, defaultColor, circleFontColor,
      activeTitleColor, completeTitleColor, defaultTitleColor,
      size, circleFontSize, titleFontSize,
      circleTop, titleTop, width, completeOpactiy, defaultOpacity, activeOpacity
    } = this.props;


    return {
      step: {
        width: `${width}%`,
        display: 'table-cell',
        position: 'relative',
        paddingTop: circleTop,
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
        padding:1,
        fontSize: circleFontSize,
        color: circleFontColor,
        display: 'block',
        opacity: defaultOpacity,

      },
      activeCircle: {
        backgroundColor: activeColor,
        opacity: activeOpacity
      },
      completedCircle: {
        backgroundColor: completeColor,
        opacity: completeOpactiy,
      },
      index: {
        lineHeight: `${size + circleFontSize / 4}px`,
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
      },
    };
  }

  render() {
    const { title, index, active, completed, first, isLast, href, onClick } = this.props;

    const styles = this.getStyles();
    const circleStyle = Object.assign(
      styles.circle,
      completed ? styles.completedCircle : {},
      active ? styles.activeCircle : {},
    );

    const titleStyle = Object.assign(
      styles.title,
      completed ? styles.completedTitle : {},
      active ? styles.activeTitle : {},
    );
    const leftStyle = Object.assign(styles.leftBar, (active || completed) ? styles.completedBar : {});
    const rightStyle = Object.assign(styles.rightBar, completed ? styles.completedBar : {});

    return (
      <div style={ styles.step }>
          <div style={ circleStyle }>
            {active || completed ? (
              <a href={href} onClick={onClick} style={ styles.index }>{ index + 1 }</a>
            ) : (
              <span style={ styles.index }>{ index + 1 }</span>
            )}
          </div>
        {active || completed ? (
          <a href={href} onClick={onClick} style={ titleStyle }>{ title }</a>
        ) : (
          <div style={ titleStyle }>{ title }</div>
        )}
        { !first && <div style={ leftStyle }></div> }
        { !isLast && <div style={ rightStyle }></div> }
      </div>
    );
  }
}

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
  titleTop: 8,
};

Step.propTypes = {
  width: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  activeTitleColor: PropTypes.string,
  completeTitleColor: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  circleFontColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  titleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  first: PropTypes.bool,
  isLast: PropTypes.bool,
};
