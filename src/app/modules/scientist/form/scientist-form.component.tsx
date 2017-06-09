import * as React from 'react';
// import { Input, Button, RadioGroup, RadioButton } from 'react-toolbox';

import { /*TITLE,*/ TitleType, NumberType } from 'types';
import { ScientistsStateActions } from 'states';
import { Component } from 'modules/base.component';

// import { capitalise } from './capitalise';
// const styles = require('./scientist-form.style');

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

  render() {
    // const { name, title } = this.state;
    // const options = TITLE.enumValues().map((type: TitleType) => (
    //   <RadioButton
    //     key={`radio-button-${type}`}
    //     label={capitalise(TITLE.map(type))}
    //     value={`${type}`}
    //     className={styles.radioButton}
    //   />
    // ));
    return (
      <div>
        {/*}<Input
          type="text"
          label="Awesome Computer Scientist"
          value={name || ''}
          onChange={this.handleNameChange}
          required
        />

        <RadioGroup value={`${title as number}`} onChange={this.handleTitleChange} className={styles.scientistRadioGroup}>
          { options }
        </RadioGroup>

        <Button
          label="Add"
          onClick={this.handleSubmit}
          primary={this.isFormAnyPristine() || this.isFormValid()}
          accent={!this.isFormAnyPristine() || !this.isFormValid()}
          raised
        />*/}
        Form
      </div>
    );
  }
}
