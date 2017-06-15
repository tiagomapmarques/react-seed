import * as React from 'react';
import * as classnames from 'classnames';

import { StatelessComponent } from 'modules/base.component';

const styles = require('./radio-button.style');

export interface RadioButtonProps<V> {
  label: string;
  value: V;
  checked: boolean;
  className?: string;
  onClick?: (value: V) => void;
};

export class RadioButton<V> extends StatelessComponent<RadioButtonProps<V>> {

  public static defaultProps: Partial<RadioButtonProps<any>> = {
    className: '',
  };

  constructor(props: RadioButtonProps<V>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(_: React.MouseEvent<HTMLDivElement>) {
    const { onClick, value } = this.props;
    onClick && onClick(value);
  }

  render() {
    const { label, className, checked } = this.props;
    const buttonClassList = [ styles.button, ...(checked ? styles.checked : []) ];
    return (
      <div className={className}>
        <div className={styles.radio} onClick={this.handleClick}>
          <div className={classnames(...buttonClassList)}>
            <span className={styles.buttonInner}></span>
          </div>
          <div className={styles.label}>{label}</div>
        </div>
      </div>
    );
  }
}
