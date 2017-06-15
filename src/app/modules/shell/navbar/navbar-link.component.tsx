import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classnames from 'classnames';

import { NavbarItem } from 'models/navbar-item';
import { StatelessComponent } from 'modules/base.component';
import { Icon } from 'modules/ui';

const styles = require('./navbar.style');

export interface NavbarLinkProps {
  item: NavbarItem;
  selected: boolean;
  showIcon: boolean;
  onMouseDown?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export class NavbarLink extends StatelessComponent<NavbarLinkProps> {

  constructor(props: NavbarLinkProps) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseDown(event: React.MouseEvent<HTMLAnchorElement>) {
    const { onMouseDown } = this.props;
    onMouseDown && onMouseDown(event);
  }

  handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const { onClick } = this.props;
    onClick && onClick(event);
  }

  render() {
    const { item, showIcon, selected } = this.props;
    const itemClassname = [ styles.item, ...(selected ? styles.selected : []) ];
    return (
      <Link to={item.link} onMouseDown={this.handleMouseDown} onClick={this.handleClick}>
        <div className={classnames(...itemClassname)}>
          { showIcon && (<Icon icon={item.icon}/>) }
          <div className={styles.label}>{item.title}</div>
        </div>
      </Link>
    );;
  }
}
