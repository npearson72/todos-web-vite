import React from 'react';
import { HomePage } from '@pages';
import { MainNav, MainNavLogin } from '@components';

export function PublicApp() {
  return (
    <>
      <MainNav>
        <MainNavLogin />
      </MainNav>
      <div className="px-4">
        <HomePage />
      </div>
    </>
  );
}
