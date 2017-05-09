import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';

import styles from './navbar.style';

class NavbarComponent extends Component {

  render() {
    return (
      <div className={styles.navbar}>
        <Link to="/"><Button icon="home" label="Home" flat className={styles.navbarLink} /></Link>
        <Link to="/about"><Button icon="info" label="About" flat className={styles.navbarLink} /></Link>
      </div>
    );
  }
}

export { NavbarComponent };
