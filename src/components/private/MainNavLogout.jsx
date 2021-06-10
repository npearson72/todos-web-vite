import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '@hooks';

export function MainNavLogout() {
  const { logout, user } = useAuth();

  return (
    <div className="text-sm text-white flex items-center">
      {user.email}
      <FiLogOut
        className="ml-2 cursor-pointer"
        onClick={() => logout({ returnTo: window.location.origin })}
      />
    </div>
  );
}
