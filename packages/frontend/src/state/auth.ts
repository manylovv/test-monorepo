import { useCallback } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useSessionTokenStore = create(
  persist<{ sessionToken: string | null }>(
    () => ({
      sessionToken: null,
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useSessionToken = (): [
  string | null,
  (sessionToken: string | null) => void
] => {
  const sessionToken = useSessionTokenStore((state) => state.sessionToken);
  const setSessionToken = useCallback((sessionToken: string | null) => {
    useSessionTokenStore.setState({ sessionToken });
  }, []);

  return [sessionToken, setSessionToken];
};
