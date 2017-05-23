import { TITLE, TitleType, NumberType } from 'types';
import { Model, ModelProperty } from 'models/base.model';

export interface ScientistObjectResponse {
  id: number;
  name: string;
  title: string;
}

export interface ScientistObject {
  id: number;
  name: string;
  title: TitleType;
}

export class Scientist extends Model<ScientistObject> implements ScientistObject {
  @ModelProperty
  public id: number;
  @ModelProperty
  public name: string;
  @ModelProperty
  public title: TitleType;

  constructor(scientist: ScientistObject) {
    super(scientist);
    this.id = scientist.id;
    this.name = scientist.name;
    this.title = scientist.title;
  }

  public static fromResponse(scientist: ScientistObjectResponse): Scientist {
    const cenas = new Scientist({
      id: parseInt(`${scientist.id}`, NumberType.DEC),
      name: `${scientist.name}`,
      title: TITLE.toModel(`${scientist.title}`),
    });
    return cenas;
  }
}
