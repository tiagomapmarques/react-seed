
// FIXME: remove this hack on RadioGroup when these issues are resolved
// NOTE:  also have a look at 'base.environment.js'
// https://github.com/react-toolbox/react-toolbox/issues/1368
// https://github.com/react-toolbox/react-toolbox/issues/1417

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioGroup as RadioGroupBugged } from 'react-toolbox/lib/real-radio';

class RadioGroup extends Component {

  handleChange = index => () => {
    const { onChange } = this.props;
    onChange && onChange(index);
  }

  getChildWithChecked(child) {
    const { value } = this.props;
    return React.cloneElement(child, {
     checked: value === child.props.value,
    });
  }

  getChildren() {
    const { children } = this.props;
    return children.map(child => (
      <div
        onClick={this.handleChange(`${child.props.value}`)}
        key={`RadioButtonBuggedDiv-${child.props.value}`}
      >
        { this.getChildWithChecked(child) }
      </div>
    ));
  }

  render() {
    const { label, value, checked } = this.props;
    return (
      <RadioGroupBugged
        label={label}
        checked={checked}
      >
        { this.getChildren() }
      </RadioGroupBugged>
    );
  }
}

RadioGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { RadioGroup };
