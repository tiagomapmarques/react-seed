import * as React from 'react';

import { ContainerContext, ContainerContextValidation } from 'containers/base.container';

export type ComponentEmptyProps = {};
export type ComponentEmptyState = null;

export abstract class Component<P, S> extends React.Component<P, S> {

  public static contextTypes = ContainerContextValidation;
  public context: ContainerContext;
}

export abstract class StatelessComponent<P> extends Component<P, ComponentEmptyState> { }
export abstract class ProplessComponent<S> extends Component<ComponentEmptyProps, S> { }
export abstract class SimpleComponent extends Component<ComponentEmptyProps, ComponentEmptyState> { }
