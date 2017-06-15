import * as React from 'react';
import * as classnames from 'classnames';

import { StatelessComponent } from 'modules/base.component';
import { ICON, IconType } from 'types';

const styles = require('./icon.style');

export interface IconProps {
  icon: IconType;
  className?: string;
};

export class Icon extends StatelessComponent<IconProps> {

  public static defaultProps: Partial<IconProps> = {
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
