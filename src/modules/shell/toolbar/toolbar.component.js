import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';

import styles from './toolbar.style';

class ToolbarComponent extends Component {

  render() {
    return (
      <AppBar title="React Seed" className={styles.brand} />
    );
  }
}

export { ToolbarComponent };
