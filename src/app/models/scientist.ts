import { TITLE, TitleType, NumberType } from 'types';
import { JsonModel, JsonModelProperty } from 'typescript-json-model';

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

export class Scientist extends JsonModel<ScientistObject> implements ScientistObject {
  @JsonModelProperty
  public id: number;
  @JsonModelProperty
  public name: string;
  @JsonModelProperty
  public title: TitleType;

  constructor(scientist: ScientistObject) {
    super(scientist);
    this.id = scientist.id;
    this.name = scientist.name;
    this.title = scientist.title;
  }

  public static fromResponse(scientist: ScientistObjectResponse): Scientist {
    return new Scientist({
      id: parseInt(`${scientist.id}`, NumberType.DEC),
      name: `${scientist.name}`,
      title: TITLE.toModel(`${scientist.title}`),
    });
  }
}
