import * as React from 'react';

import { SimpleComponent } from 'modules/base.component';

const styles = require('./toolbar.style');

export class ToolbarComponent extends SimpleComponent {

  render() {
    return (
      <div className={styles.toolbar}>
        <div className={styles.toolbarContent}>
          <h1 className={styles.brand}>React Seed</h1>
        </div>
      </div>
    );
  }
}
