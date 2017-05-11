
// FIXME: remove this hack on RadioButton when these issues are resolved
// NOTE:  also have a look at 'base.environment.js'
// https://github.com/react-toolbox/react-toolbox/issues/1368
// https://github.com/react-toolbox/react-toolbox/issues/1417

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioButton as RadioButtonBugged } from 'react-toolbox/lib/real-radio';

class RadioButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, value } = this.props;
    onClick && onClick(value);
  }

  render() {
    const { label, value, checked } = this.props;
    return (
      <div onClick={this.handleClick}>
        <RadioButtonBugged
          label={label}
          value={value}
          checked={checked}
        />
      </div>
    );
  }
}

RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

export { RadioButton };
