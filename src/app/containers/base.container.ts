import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export type UrlParameters = any;

export type ContainerProps = RouteComponentProps<UrlParameters>;

export interface ContainerContext {
  router: ContainerProps;
};

export const ContainerContextValidation: React.ValidationMap<any> = {
  router: React.PropTypes.shape({} as ContainerProps),
};

export abstract class Container<P> extends React.Component<ContainerProps & P, void> {

  public static childContextTypes = ContainerContextValidation;

  getChildContext() {
    const { match, location, history } = this.props;
    return { router: { match, location, history } };
  }
}
