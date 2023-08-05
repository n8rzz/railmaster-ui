'use client';

import React, { useEffect } from 'react';
import { useTrainStore } from '@/domain/trains/train.store';
import { ListPageHeader } from '@/components/ListPageHeader/ListPageHeader';

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
      <div>{JSON.stringify(trains)}</div>
    </main>
  );
}
