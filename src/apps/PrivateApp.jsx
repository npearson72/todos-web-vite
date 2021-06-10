import React from 'react';
import { TodosPage } from '@pages/private';
import { MainNav } from '@components';
import { MainNavLogout } from '@components/private';
import { FullPageSpinner } from '@components/loaders';
import { useAuth } from '@hooks';

export function PrivateApp() {
  const { isReady } = useAuth();

  if (!isReady) return <FullPageSpinner />;

  return (
    <>
      <MainNav>
        <MainNavLogout />
      </MainNav>
      <div className="px-4">
        <TodosPage />
      </div>
    </>
  );
}
