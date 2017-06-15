import * as React from 'react';

import { StatelessComponent } from 'modules/base.component';

export interface RadioGroupProps<V> {
  children: React.ReactElement<any>[];
  className?: string;
  onChange?: (value: V) => void;
};

export class RadioGroup<V> extends StatelessComponent<RadioGroupProps<V>> {

  public static defaultProps: Partial<RadioGroupProps<any>> = {
    className: '',
  };

  handleClick = (originalOnClick: (_: V) => void) => (value: V) => {
    const { onChange } = this.props;
    originalOnClick && originalOnClick(value);
    onChange && onChange(value);
  }

  render() {
    const { children, className } = this.props;
    const handledChildren = !!children && (children as React.ReactElement<any>[]).map(child =>
      React.cloneElement(child, { onClick: this.handleClick((child as any).props.onClick) })
    );
    return (
      <div className={className as string}>
        { handledChildren }
      </div>
    );
  }
}
