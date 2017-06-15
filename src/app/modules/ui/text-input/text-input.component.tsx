import * as React from 'react';
import * as classnames from 'classnames';

import { Component } from 'modules/base.component';

const styles = require('./text-input.style');

export interface TextInputProps {
  label: string;
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export interface TextInputState {
  value: string;
};

export class TextInput extends Component<TextInputProps, TextInputState> {

  public static defaultProps: Partial<TextInputProps> = {
    value: '',
    className: '',
  };

  constructor(props: TextInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: this.props.value as string,
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value }, () => {
      const { onChange } = this.props;
      const { value } = this.state;
      onChange && onChange(value);
    });
  }

  componentWillUpdate(nextProps: TextInputProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value || '' });
    }
  }

  render() {
    const { label, className } = this.props;
    const { value } = this.state;
    return (
      <div className={classnames(styles.container, className as string)}>
        <label className={styles.label}>{label}</label>
        <input type="text" onChange={this.handleChange} value={value} className={styles.input} />
      </div>
    );
  }
}
