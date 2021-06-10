import { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '@providers';

export function useAuth() {
  const [isReady, setIsReady] = useState(false);
  const { accessToken } = useContext(AuthContext);
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } =
    useAuth0();

  useEffect(() => {
    setIsReady(() => isAuthenticated && accessToken);
  }, [isAuthenticated, accessToken]);

  return {
    accessToken,
    isAuthenticated,
    isLoading,
    isReady,
    loginWithRedirect,
    logout,
    user
  };
}
