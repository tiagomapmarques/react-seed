import * as React from 'react';
import * as classnames from 'classnames';

import { StatelessComponent } from 'modules/base.component';

const styles = require('./button.style');

export interface ButtonProps {
  label: string;
  className?: string;
  isWhite?: boolean;
  isBlack?: boolean;
  isLight?: boolean;
  isDark?: boolean;
  isPrimary?: boolean;
  isInfo?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDanger?: boolean;
  onClick?: (value: React.MouseEvent<HTMLButtonElement>) => void;
};

export class Button extends StatelessComponent<ButtonProps> {

  public static defaultProps: Partial<ButtonProps> = {
    className: '',
  };

  constructor(props: ButtonProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const { onClick } = this.props;
    onClick && onClick(event);
  }

  getButtonClass(): string {
    const classList: string[] = [];
    Object.keys(this.props).forEach(propName => {
      if (propName.indexOf('is') === 0 && (this.props as any)[propName] === true) {
        classList.push(styles[propName]);
      }
    });
    return classList.reverse()[0];
  }

  render() {
    const { label, className } = this.props;
    const classList = [ styles.button, ...(!!className ? [className] : []), this.getButtonClass() ];
    return (
      <button className={classnames(...classList)} onClick={this.handleClick}>{label}</button>
    );
  }
}
