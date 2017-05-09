import React, { Component } from 'react';

import { statePropTypes } from 'states';
import { TITLE } from 'types/title';
import { TextInput, RadioGroup, Button } from 'modules/material';

const capitalize = title => title.charAt(0).toUpperCase() + title.slice(1);

class ScientistAdd extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: null,
      title: null
    };
  }

  handleChange = stateType => value => this.setState({ [stateType]: value });

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
      { id: type, label: capitalize(TITLE.map(type)) }
    ));
    return (
      <div>
        <TextInput value={name} onChange={this.handleChange('name')} />
        <RadioGroup value={title} onChange={this.handleChange('title')} options={options}/>
        <Button label="Add Scientist" onClick={this.handleSubmit} />
      </div>
    );
  }
}

ScientistAdd.propTypes = {
  scientistsActions: statePropTypes.scientists.scientistsActions.isRequired,
};

export { ScientistAdd };
