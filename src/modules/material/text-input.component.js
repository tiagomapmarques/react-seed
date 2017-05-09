import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomString from 'crypto-random-string';

class TextInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange(event) {
    const { onChange } = this.props;
    const value = event.target.value;
    this.setState({ value }, () => onChange && onChange(value));
  }

  render() {
    const { value, label } = this.props;
    const name = `text-input-${randomString(32)}`;
    return (
      <div>
        { !!label && <label htmlFor={name}>{label}</label> }
        <input name={name} type="text" value={value || ''} onChange={this.handleChange}/>
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { TextInput };
