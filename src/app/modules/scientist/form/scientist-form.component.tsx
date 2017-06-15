import * as React from 'react';
import * as capitalize from 'capitalize';

import { Component } from 'modules/base.component';
import { RadioGroup, RadioButton, TextInput, Button } from 'modules/ui';
import { ScientistsStateActions } from 'states';
import { TITLE, TitleType } from 'types';

const styles = require('./scientist-form.style');

export interface ScientistFormProps {
  scientistsActions: ScientistsStateActions;
}

export interface ScientistFormState {
  name: string | null;
  title: TitleType | null;
}

export class ScientistForm extends Component<ScientistFormProps, ScientistFormState> {

  constructor(props: any) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);

    this.state = {
      name: null,
      title: null,
    };
  }

  handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleNameChange(value: string) {
    this.setState({ name: value });
  }

  handleRadioChange(title: TitleType) {
    this.setState({ title });
  }

  handleSubmit() {
    const { name, title } = this.state;
    const isValid = this.isFormValid();
    isValid && this.props.scientistsActions.add(name as string, title as TitleType);
    this.setState({
      name: isValid ? null : (name || ''),
      title: isValid ? null : (title || 0),
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

  buildOptions() {
    const { title } = this.state;
    return TITLE.enumValues().map((type: TitleType) => (
      <RadioButton
        value={type}
        label={capitalize(TITLE.map(type))}
        checked={title === type}
        onClick={this.handleRadioChange}
        key={`scientist-form-radio-${type}`}
      />
    ));
  }

  render() {
    const { name } = this.state;
    const isPrimary = this.isFormAnyPristine() || this.isFormValid();
    const options = this.buildOptions();

    return (
      <div className={styles.scientistForm} onKeyUp={this.handleKeyUp}>
        <TextInput
          value={name}
          label="Awesome Computer Scientist"
          className={styles.textInput}
          onChange={this.handleNameChange}
          required
        />

        <RadioGroup className={styles.radioGroup}>
          { options }
        </RadioGroup>

        <Button onClick={this.handleSubmit} label={'Add'} isWarning isPrimary={isPrimary} className={styles.button}/>
      </div>
    );
  }
}
