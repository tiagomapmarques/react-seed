import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick && onClick();
  }

  render() {
    const { label } = this.props;
    return (
      <button onClick={this.handleClick}>{ label }</button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export { Button };
