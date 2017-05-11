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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: null,
      title: null,
    };
  }

  handleNameChange(value) {
    this.setState({ name: value });
  }

  handleTitleChange(idk) {
    console.log(idk);
  }

  handleSubmit() {
    const { name, title } = this.state;
    if (name && title) {
      this.props.scientistsActions.add(name, title);
      this.setState({
        name: null,
        title: null,
      });
    }
  }

  render() {
    const { name, title } = this.state;
    const options = TITLE.enumValues().map(type => (
      <RadioButton
        key={`radio-button-${type}`}
        label={capitalize(TITLE.map(type))}
        value={`${type}`}
        // checked={title === `${type}`}
      />
    ));
    return (
      <div>
        <Input
          type="text"
          label="Awesome Computer Scientist"
          value={name || ''}
          onChange={this.handleNameChange}
        />

        <RadioGroup value={title} onChange={this.handleTitleChange}>
          { options }
        </RadioGroup>

        <Button label="Add" raised primary onClick={this.handleSubmit} />
      </div>
    );
  }
}

ScientistForm.propTypes = {
  scientistsActions: statePropTypes.scientists.scientistsActions.isRequired,
};

export { ScientistForm };
