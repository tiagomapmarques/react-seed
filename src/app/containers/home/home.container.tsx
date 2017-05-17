import * as React from 'react';

import { Container, ContainerProps } from 'containers/base.container';
import { AppState, connect, ScientistsStateProps } from 'states';
import { defaultValue } from 'states/scientists/types';
import { ScientistList, ScientistForm } from 'modules/scientist';

const styles = require('./home.style');

export type HomeContainerProps = ContainerProps & ScientistsStateProps;

class Home extends Container<ScientistsStateProps> {

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
      <div className={styles.homeContainer}>
        <p>Howdy! Here's a list of awesome computer scientists.</p>
        <p>Do you know any others? Add to the list yourself.</p>
        <ScientistForm scientistsActions={scientistsActions} />
        <ScientistList scientists={scientists || defaultValue} onClick={this.handleRemoval}/>
      </div>
    );
  }
}

export const HomeContainer = connect(AppState.scientists)(Home);
