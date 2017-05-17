import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-toolbox';

import { SimpleComponent } from 'modules/base.component';
import { ICON } from 'types';

import { navbarItems } from './navbar.constants';
const styles = require('./navbar.style');

export class NavbarComponent extends SimpleComponent {

  buildNavbarItems() {
    return navbarItems.map(item => (
      <Link to={item.link} key={`navbar-link-${item.id}`}>
        <Button icon={ICON.map(item.icon)} label={item.title} flat className={styles.navbarLink} />
      </Link>
    ));
  }

  render() {
    return (
      <div className={styles.navbar}>
        { this.buildNavbarItems() }
      </div>
    );
  }
}
