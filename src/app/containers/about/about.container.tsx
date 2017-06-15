import * as React from 'react';

import { Container, ContainerProps } from 'containers/base.container';
import { Toolbar, Navbar } from 'modules/shell';

const styles = require('./about.style');

export type AboutContainerProps = ContainerProps;

export class AboutContainer extends Container<AboutContainerProps> {

  render() {
    return (
      <div>
        <Toolbar />
        <Navbar selected={1}/>
        <div className={styles.aboutContainer}>
          <p>React Seed is a starter project that implements best practices in coding, building and testing React apps.</p>
          <p>It is a sibling of the <a href="https://github.com/tiagomapmarques/angular-seed">Agular Seed</a> project.</p>

          <h3>Features</h3>
          <ul>
            <li>Ready to go, statically typed build system with TypeScript</li>
            <li>Production and development builds</li>
            <li>Sample unit and end-to-end tests</li>
            <li>Development server with live reload</li>
            <li>Example structure for a complete front-end app</li>
            <li>Angular material sample usage</li>
            <li>Versatile theming with Sass</li>
          </ul>
        </div>
      </div>
    );
  }
}
