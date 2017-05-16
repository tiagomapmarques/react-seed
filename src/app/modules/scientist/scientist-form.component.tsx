import * as React from 'react';
import Input from 'react-toolbox/lib/input';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import { Button } from 'react-toolbox/lib/button';

import { TITLE, TitleType, NumberType } from '../../types';
import { ScientistsStateActions } from '../../states';

const capitalize = (title: string) => title.charAt(0).toUpperCase() + title.slice(1);

export interface ScientistFormProps {
  scientistsActions: ScientistsStateActions;
}

export interface ScientistFormState {
  name: string | null;
  title: TitleType | null;
}

export class ScientistForm extends React.Component<ScientistFormProps, ScientistFormState> {

  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.state = {
      name: null,
      title: null,
    };
  }

  handleNameChange(value: string) {
    this.setState({ name: value });
  }

  handleTitleChange(value: string) {
    this.setState({ title: parseInt(value, NumberType.DEC) as TitleType });
  }

  handleSubmit() {
    const { name, title } = this.state;
    const isValid = this.isFormValid();
    isValid && this.props.scientistsActions.add(name as string, title as TitleType);
    this.setState({
      name: isValid ? null : (name || ''),
      title: isValid ? null : title,
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
    const options = TITLE.enumValues().map((type: TitleType) => (
      <RadioButton
        key={`radio-button-${type}`}
        label={capitalize(TITLE.map(type))}
        value={`${type}`}
      />
    ));
    return (
      <div>
        <Input
          type="text"
          label="Awesome Computer Scientist"
          value={name || ''}
          onChange={this.handleNameChange}
          required
        />

        <RadioGroup value={`${title as number}`} onChange={this.handleTitleChange}>
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
