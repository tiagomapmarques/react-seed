import * as React from 'react';

import { ScientistsStateValue } from 'states';

export interface ScientistListProps {
  scientists: ScientistsStateValue;
  onClick: (id: number) => void;
}

export type ScientistListState = null;

export class ScientistList extends React.Component<ScientistListProps, ScientistListState> {

  handleClick = (id: number) => () => {
    const { onClick } = this.props;
    onClick && onClick(id);
  }

  buildScientistList(scientists: ScientistsStateValue) {
    return scientists.list.map(scientist => (
      <li key={`scientist-${scientist.id}`} onClick={this.handleClick(scientist.id)}>{scientist.name}</li>
    ));
  }

  render() {
    const { scientists } = this.props;
    const list = this.buildScientistList(scientists);
    return (
      <div>
        <h3>Scientists list:</h3>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}
