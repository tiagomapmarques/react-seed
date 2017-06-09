import * as React from 'react';
import * as classnames from 'classnames';

import { StatelessComponent } from 'modules/base.component';
import { ICON, IconType } from 'types';

const styles = require('./simple-icon.style');

export interface SimpleIconProps {
  icon: IconType;
  className?: string;
};

export class SimpleIcon extends StatelessComponent<SimpleIconProps> {

  public static defaultProps: Partial<SimpleIconProps> = {
    className: '',
  };

  render() {
    const { icon, className } = this.props;
    const defaultClassname = styles[ICON.map(icon)];
    return (
      <i className={!!className ? classnames(defaultClassname, className) : defaultClassname}></i>
    );
  }
}
