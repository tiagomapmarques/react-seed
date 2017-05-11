import React from 'react';

import { Container } from 'containers/base.container';

class AboutContainer extends Container {

  render() {
    /* eslint-disable max-len */
    return (
      <div>
        <p>React Seed is a starter project that implements best practices in coding, building and testing React apps.</p>
        <p>It is a sibling of the <a href="https://github.com/tiagomapmarques/angular-seed">Agular Seed</a> project</p>

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
    );
    /* eslint-enable max-len */
  }
}

export { AboutContainer };
