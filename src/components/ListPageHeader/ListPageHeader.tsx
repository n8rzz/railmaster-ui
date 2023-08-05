import React, { ReactNode } from 'react';

interface IProps {
  title: string | ReactNode;
  caption: string;
}

export function ListPageHeader(props: IProps) {
  return (
    <h2 className={'text-xl'}>
      {props.title} (
      <span className={'text-sm font-bold'}>{props.caption}</span>)
    </h2>
  );
}
