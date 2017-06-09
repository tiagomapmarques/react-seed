import * as React from 'react';

import { Container, ContainerProps } from 'containers/base.container';
import { ToolbarComponent, NavbarComponent } from 'modules/shell';
import { ScientistList, ScientistForm } from 'modules/scientist';
import { AppState, connect, ScientistsStateProps } from 'states';
import { defaultValue } from 'states/scientists/types';

const styles = require('./home.style');

export type HomeContainerProps = ContainerProps & ScientistsStateProps;

class Home extends Container<HomeContainerProps> {

  constructor(props: HomeContainerProps) {
    super(props);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleRemoval(id: number) {
    this.props.scientistsActions.remove(id);
  }

  render() {
    const { scientists, scientistsActions } = this.props;
    return (
      <div>
        <ToolbarComponent />
        <NavbarComponent selected={0}/>
        <div className={styles.homeContainer}>
          <p>Howdy! Here's a list of awesome computer scientists.</p>
          <p>Do you know any others? Add to the list yourself.</p>
          <ScientistForm scientistsActions={scientistsActions} />
          <ScientistList scientists={scientists || defaultValue} onClick={this.handleRemoval}/>
        </div>
      </div>
    );
  }
}

export const HomeContainer = connect(AppState.scientists)(Home);
