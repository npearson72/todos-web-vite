import React from 'react';
import { AuthProvider } from '@providers';
import { Main } from '@apps';

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
