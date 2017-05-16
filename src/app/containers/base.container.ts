import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export type UrlParameters = any;

export type ContainerProps = RouteComponentProps<UrlParameters>;

export class Container<P> extends React.Component<ContainerProps & P, void> { }
