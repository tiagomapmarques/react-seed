import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RadioButton } from './radio-button.component';

class RadioGroup extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      selected: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.selected) {
      this.setState({ selected: nextProps.value });
    }
  }

  handleClick(selected) {
    const { onChange } = this.props;
    this.setState({ selected }, () => onChange && onChange(selected));
  }

  buildButtons(options) {
    const { selected } = this.state;
    return options.map(option => (
      <RadioButton
        key={`radio-button-${option.id}`}
        label={option.label}
        value={`${option.id}`}
        checked={`${option.id}` === selected}
        onClick={this.handleClick}
      />
    ));
  }

  render() {
    const { options } = this.props;
    const buttons = this.buildButtons(options);
    return (
      <div>
        { buttons }
      </div>
    );
  }
}

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.any.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  value: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  onChange: PropTypes.func,
};

export { RadioGroup };
