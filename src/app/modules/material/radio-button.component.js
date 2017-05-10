import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomString from 'crypto-random-string';

class RadioButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { value, onClick } = this.props;
    onClick && onClick(value);
  }

  render() {
    const { value, label, checked } = this.props;
    const name = `radio-button-${randomString(32)}`;
    return (
      <div onClick={this.handleClick}>
        <input name={name} type="radio" value={value} checked={checked} />
        { !!label && <label htmlFor={name}>{label}</label> }
      </div>
    );
  }
}

RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { RadioButton };
