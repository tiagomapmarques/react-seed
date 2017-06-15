import * as React from 'react';

import { StatelessComponent } from 'modules/base.component';
import { Icon } from 'modules/ui';
import { IconType } from 'types';

const styles = require('./navbar.style');

export interface NavbarBurgerProps {
  onMouseDown?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

export class NavbarBurger extends StatelessComponent<NavbarBurgerProps> {

  constructor(props: NavbarBurgerProps) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseDown(event: React.MouseEvent<HTMLSpanElement>) {
    const { onMouseDown } = this.props;
    onMouseDown && onMouseDown(event);
  }

  handleClick(event: React.MouseEvent<HTMLSpanElement>) {
    const { onClick } = this.props;
    onClick && onClick(event);
  }

  render() {
    return (
      <span className={styles.navToggle} onClick={this.handleClick}>
        <Icon icon={IconType.BURGER} />
      </span>
    );
  }
}
