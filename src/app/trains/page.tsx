'use client';

import React, { useEffect } from 'react';
import { useTrainStore } from '@/domain/trains/train.store';
import { ListPageHeader } from '@/components/ListPageHeader/ListPageHeader';
import { ITrain } from '@/domain/trains/train.types';

export default function Trains() {
  const { trains, getTrains } = useTrainStore();

  useEffect(() => {
    void getTrains();
  }, [getTrains]);

  return (
    <main>
      <ListPageHeader
        caption={trains.length.toString()}
        title={'Trains'}
      />
      <ul>
        {trains.map((train: ITrain) => (
          <li
            key={train.id}
            className={'flex gap-2'}
          >
            <div>{train.id}</div>
            <div>{train.status}</div>
            <div>{train.maxSpeed}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
