import { HomePage } from '@/pages/home';
import { ProfilePage } from '@/pages/profile';
import { RefPage } from '@/pages/ref';
import { useIntegration } from '@telegram-apps/react-router-integration';
import { initNavigator } from '@telegram-apps/sdk-react';
import { useEffect, useMemo } from 'react';
import {
  Navigate,
  Router as ReactRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Navigation } from './nav';
import { Providers } from './providers/providers';

export const Router = () => {
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Providers>
      <ReactRouter location={location} navigator={reactNavigator}>
        <div className="page-container grid h-screen grid-rows-[1fr_80px] overflow-hidden">
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/ref'} element={<RefPage />} />
            <Route path={'/you'} element={<ProfilePage />} />
            <Route path={'*'} element={<Navigate to={'/'} />} />
          </Routes>

          <Navigation />
        </div>
      </ReactRouter>
    </Providers>
  );
};
