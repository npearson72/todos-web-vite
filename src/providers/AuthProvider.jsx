import React, { createContext, useEffect, useState } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import config from '@config';

export const AuthContext = createContext();

const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently();

        setAccessToken(token);
      } catch (err) {
        console.error(err.message);
      }
    };

    getAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export function AuthProvider({ children }) {
  return (
    <Auth0Provider {...config.auth0}>
      <AccessTokenProvider>{children}</AccessTokenProvider>
    </Auth0Provider>
  );
}
