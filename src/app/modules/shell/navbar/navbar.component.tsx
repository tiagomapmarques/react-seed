import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-toolbox';

import { SimpleComponent } from 'modules/base.component';

const styles = require('./navbar.style');

export class NavbarComponent extends SimpleComponent {

  render() {
    return (
      <div>
        <Link to="/"><Button icon="home" label="Home" flat className={styles.navbarLink} /></Link>
        <Link to="/about"><Button icon="info" label="About" flat className={styles.navbarLink} /></Link>
      </div>
    );
  }
}
