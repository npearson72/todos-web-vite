import React from 'react';
import { MainNav } from '@components';
import { Spinner } from '@components/loaders';

export function FullPageSpinner() {
  return (
    <>
      <MainNav />
      <Spinner />
      <div className="flex justify-center text-gray-500">
        <div>Loading, please wait.</div>
      </div>
    </>
  );
}
