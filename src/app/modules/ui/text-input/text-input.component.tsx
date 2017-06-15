import * as React from 'react';
import * as classnames from 'classnames';

import { Component } from 'modules/base.component';

const styles = require('./text-input.style');

export interface TextInputProps {
  label: string;
  value: string|null;
  className?: string;
  required?: boolean;
  onChange?: (value: string) => void;
};

export interface TextInputState {
  value: string;
  dirty: boolean;
};

export class TextInput extends Component<TextInputProps, TextInputState> {

  public static defaultProps: Partial<TextInputProps> = {
    value: '',
    className: '',
    required: false,
  };

  constructor(props: TextInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: this.props.value as string,
      dirty: false,
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value,
      dirty: true,
    }, () => {
      const { onChange } = this.props;
      const { value } = this.state;
      onChange && onChange(value);
    });
  }

  componentWillUpdate(nextProps: TextInputProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value || '',
        dirty: typeof nextProps.value == 'string',
      });
    }
  }

  render() {
    const { label, className, required } = this.props;
    const { value, dirty } = this.state;
    return (
      <div className={classnames(styles.container, className as string)}>
        <label className={styles.label}>{label}</label>
        <input type="text" onChange={this.handleChange} value={value || ''} className={styles.input} />
        { required && dirty && !value && (
          <p className={classnames(styles.help, styles.isDanger)}>
            This field is required
          </p>
        ) }
      </div>
    );
  }
}
