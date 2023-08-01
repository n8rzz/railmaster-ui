import React from 'react';

interface IProps {
  condition: boolean;
}

export function UiIf(props: React.PropsWithChildren<IProps>) {
  return props.condition ? props.children : null;
}

UiIf.displayName = 'UiIf';
