import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import { Button } from 'react-toolbox/lib/button';

import { statePropTypes } from 'states';
import { TITLE } from 'types/title';

const capitalize = title => title.charAt(0).toUpperCase() + title.slice(1);

class ScientistForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: null,
      title: null,
    };
  }

  handleChange = stateType => value => {
    this.setState({ [stateType]: value });
  }

  handleSubmit() {
    const { name, title } = this.state;
    const isValid = this.isFormValid();
    isValid && this.props.scientistsActions.add(name, title);
    this.setState({
      name: isValid ? null : name || '',
      title: isValid ? null : title || '',
    });
  }

  isFormValid() {
    const { name, title } = this.state;
    return !!(name && title);
  }

  isFormAnyPristine() {
    const { name, title } = this.state;
    return name === null || title === null;
  }

  render() {
    const { name, title } = this.state;
    const options = TITLE.enumValues().map(type => (
      <RadioButton
        key={`radio-button-${type}`}
        label={capitalize(TITLE.map(type))}
        value={`${type}`}
        checked={title === `${type}`}
        onClick={this.handleChange('title')}
      />
    ));
    return (
      <div>
        <Input
          type="text"
          label="Awesome Computer Scientist"
          value={name || ''}
          onChange={this.handleChange('name')}
          required
        />

        <RadioGroup value={title}>
          { options }
        </RadioGroup>

        <Button
          label="Add"
          onClick={this.handleSubmit}
          primary={this.isFormAnyPristine() || this.isFormValid()}
          accent={!this.isFormAnyPristine() || !this.isFormValid()}
          raised />
      </div>
    );
  }
}

ScientistForm.propTypes = {
  scientistsActions: statePropTypes.scientists.scientistsActions.isRequired,
};

export { ScientistForm };
