import { useViewport } from '@telegram-apps/sdk-react';
import { useLayoutEffect } from 'react';

export const PageSizeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const viewport = useViewport();

  useLayoutEffect(() => {
    if (!viewport) return;

    document.documentElement.style.height = `${viewport.height}px`;
    document.documentElement.style.overflow = 'hidden';

    document.body.style.height = `${viewport.height}px`;
    document.body.style.overflow = 'hidden';

    const element = document.querySelector('.page-container') as HTMLDivElement;

    if (!element) return;

    element.style.height = `${viewport.height}px`;
    element.style.overflow = 'hidden';
  }, [viewport]);

  return <>{children}</>;
};
