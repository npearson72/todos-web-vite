import React from 'react';
import { useAuth } from '@hooks';

export function MainNavLogin() {
  const { loginWithRedirect } = useAuth();

  return (
    <div className="flex">
      <div
        className="text-sm text-white flex items-center cursor-pointer"
        onClick={loginWithRedirect}
      >
        Login
      </div>
      <button
        className="btn btn-primary btn-small"
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
      >
        Sign up
      </button>
    </div>
  );
}
