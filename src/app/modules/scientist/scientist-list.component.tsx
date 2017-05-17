import * as React from 'react';

import { ScientistsStateValue } from 'states';
import { TITLE, TitleType } from 'types';

import { capitalise } from './capitalise';
const styles = require('./scientist-list.style');

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

  getClassFromTitle(title: TitleType): any {
    if (title === TitleType.MISTER) {
      return styles.titleMister;
    }
    if (title === TitleType.MISS) {
      return styles.titleMiss;
    }
    if (title === TitleType.DOCTOR) {
      return styles.titleDoctor;
    }
  }

  getTitle(title: TitleType): any {
    return capitalise(TITLE.map(title));
  }

  buildScientistList(scientists: ScientistsStateValue) {
    return scientists.list.map(scientist => (
      <li
        key={`scientist-${scientist.id}`}
        onClick={this.handleClick(scientist.id)}
        className={styles.listItem}
      >
        <div>
          <span className={this.getClassFromTitle(scientist.title)}>{this.getTitle(scientist.title)}</span>
          <span>{scientist.name}</span>
        </div>
      </li>
    ));
  }

  render() {
    const { scientists } = this.props;
    const list = this.buildScientistList(scientists);
    return (
      <div className={styles.scientistList}>
        <h3>Scientists list:</h3>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}
