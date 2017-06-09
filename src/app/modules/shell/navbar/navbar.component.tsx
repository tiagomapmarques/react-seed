import * as React from 'react';
import * as classnames from 'classnames';

import { Component } from 'modules/base.component';

import { NavbarBurger } from './navbar-burger.component';
import { NavbarList } from './navbar-list.component';
import { navbarItems } from './navbar.constants';
const styles = require('./navbar.style');

export interface NavbarProps {
  selected?: number;
};

export interface NavbarState {
  isOpen: boolean;
  beingClicked: boolean;
};

const SET_STATE_PROPAGATION_DELAY = 70*2; // 70ms is the stability breaking point

export class NavbarComponent extends Component<NavbarProps, NavbarState> {

  private delay: number|undefined;

  constructor(props: NavbarProps) {
    super(props);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleListMouseDown = this.handleListMouseDown.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.handleListBlur = this.handleListBlur.bind(this);

    this.state = {
      isOpen: false,
      beingClicked: false,
    };
  }

  componentDidMount() {
    this.delay = SET_STATE_PROPAGATION_DELAY;
  }

  componentWillUnmount () {
    this.delay = undefined;
  }

  toggleNavMenu(forceClose: boolean = false) {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !forceClose ? !isOpen : false,
      beingClicked: false,
    });
  }

  waitAndExecuteIfOpen(func: () => void) {
    this.delay && setTimeout(() => this.delay && this.state.isOpen && func(), this.delay);
  }

  handleBurgerClick() {
    this.toggleNavMenu();
  }

  handleListMouseDown() {
    this.setState({ beingClicked: true });
  }

  handleListClick() {
    this.waitAndExecuteIfOpen(() => this.state.beingClicked && this.toggleNavMenu(true));
  }

  handleListBlur() {
    this.waitAndExecuteIfOpen(() => !this.state.beingClicked && this.toggleNavMenu(true));
  }

  render() {
    const { selected } = this.props;
    const { isOpen } = this.state;
    const stylesNavMenu = [ styles.navMenu, ...(isOpen ? [ styles.visible ] : []) ];
    return (
      <div className={styles.nav}>
        <NavbarList items={navbarItems} selectedIndex={selected} className={styles.navBar}/>

        <NavbarBurger onClick={this.handleBurgerClick} />
        <NavbarList
          items={navbarItems}
          selectedIndex={selected}
          className={classnames(...stylesNavMenu)}
          showIcon={false}
          onMouseDown={this.handleListMouseDown}
          onClick={this.handleListClick}
          onBlur={this.handleListBlur}
        />
      </div>
    );
  }
}
