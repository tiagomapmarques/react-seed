import * as React from 'react';
import * as capitalize from 'capitalize';

import { StatelessComponent } from 'modules/base.component';
import { ScientistsStateValue } from 'states';
import { TITLE, TitleType } from 'types';

const styles = require('./scientist-list.style');

export interface ScientistListProps {
  scientists: ScientistsStateValue;
  onClick: (id: number) => void;
}

export class ScientistList extends StatelessComponent<ScientistListProps> {

  handleClick = (id: number) => () => {
    const { onClick } = this.props;
    onClick && onClick(id);
  }

  getTitle(title: TitleType): any {
    return capitalize(TITLE.map(title));
  }

  getClassFromTitle(title: TitleType): string {
    return styles[`title${this.getTitle(TITLE.enumValues().filter((type: TitleType) => title === type))}`];
  }

  buildScientistList(scientists: ScientistsStateValue) {
    return scientists.list.map(scientist => (
      <li
        key={`scientist-list-scientist-${scientist.id}`}
        onClick={this.handleClick(scientist.id)}
        className={styles.scientistListItem}
      >
        <div className={styles.scientistListItemContent}>
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
          { list.length ? list : (
            <div>
              <p>No scientists here.<br />Try adding one!</p>
            </div>
          ) }
        </ul>
      </div>
    );
  }
}
