import * as React from 'react';

import { NavbarItem } from 'models/navbar-item';
import { StatelessComponent } from 'modules/base.component';

import { NavbarLink } from './navbar-link.component';
const styles = require('./navbar.style');

export interface NavbarListProps {
  items: NavbarItem[];
  selectedIndex?: number;
  className: string;
  showIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
};

export class NavbarList extends StatelessComponent<NavbarListProps> {

  private dummyButton: HTMLButtonElement;

  public static defaultProps: Partial<NavbarListProps> = {
    showIcon: true,
  };

  constructor(props: NavbarListProps) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidUpdate() {
    this.dummyButton && this.dummyButton.focus();
  }

  handleMouseDown(event: React.MouseEvent<HTMLAnchorElement>) {
    const { onMouseDown } = this.props;
    onMouseDown && onMouseDown(event);
  }

  handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const { onClick } = this.props;
    onClick && onClick(event);
  }

  handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const { onBlur } = this.props;
    onBlur && onBlur(event);
  }

  buildNavbarItems() {
    const { items, selectedIndex, showIcon } = this.props;
    return items.map((item, index) => (
      <NavbarLink
        item={item}
        selected={selectedIndex === index}
        showIcon={showIcon as boolean}
        key={`navbar-list-navbar-link-${item.id}`}
        onMouseDown={this.handleMouseDown}
        onClick={this.handleClick}
      />
    ));
  }

  render() {
    const { className, onBlur } = this.props;
    return (
      <div className={className} onBlur={this.handleBlur}>
        { this.buildNavbarItems() }

        { !!onBlur && (<button ref={(e) => this.dummyButton = e} className={styles.hidden}></button>) }
      </div>
    );
  }
}
