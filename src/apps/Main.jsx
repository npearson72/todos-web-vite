import React, { Suspense, lazy } from 'react';
import { useAuth } from '@hooks';
import { FullPageSpinner } from '@components/loaders';

const PrivateApp = lazy(() =>
  import('./PrivateApp').then(module => ({ default: module.PrivateApp }))
);
const PublicApp = lazy(() =>
  import('./PublicApp').then(module => ({ default: module.PublicApp }))
);

export function Main() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) return <FullPageSpinner />;

  return (
    <Suspense fallback={<FullPageSpinner />}>
      {isAuthenticated ? <PrivateApp /> : <PublicApp />}
    </Suspense>
  );
}
