import { getToken } from '@/data/sdk';
import { useSessionToken } from '@/state/auth';
import { useInitData } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';
import useSWR from 'swr';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [sessionToken, setSessionToken] = useSessionToken();
  const initData = useInitData();

  const { data: token } = useSWR('/token', () => {
    return 'someToken32030920';

    return getToken(JSON.stringify(initData));
  });

  useEffect(() => {
    if (token) {
      setSessionToken(token);
    }
  }, [token, setSessionToken]);

  if (!sessionToken) {
    console.error('Session token is not set');
    return null;
  }

  return <>{children}</>;
};
