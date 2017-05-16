import * as React from 'react';
import { AppBar } from 'react-toolbox';

import { SimpleComponent } from 'modules/base.component';

const styles = require('./toolbar.style');

export class ToolbarComponent extends SimpleComponent {

  render() {
    return (
      <AppBar title="React Seed" className={styles.brand} />
    );
  }
}
