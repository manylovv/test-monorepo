import {
  useMiniApp,
  useSwipeBehavior,
  useViewport,
} from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const miniApp = useMiniApp();
  const swipe = useSwipeBehavior();
  const viewport = useViewport();

  useEffect(() => {
    miniApp.setHeaderColor('#282828');
    miniApp.setBgColor('#212121');
  }, [miniApp]);

  useEffect(() => {
    viewport?.expand();
  }, [viewport]);

  useEffect(() => {
    if (swipe.supports('disableVerticalSwipe')) {
      swipe.disableVerticalSwipe();
    }
  }, [swipe]);

  return <>{children}</>;
};
