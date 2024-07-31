import { SDKProvider } from '@telegram-apps/sdk-react';
import { AuthProvider } from './AuthProvider';
import { PageSizeProvider } from './PageSizeProvider';
import { TelegramProvider } from './TelegramProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SDKProvider debug>
      <TelegramProvider>
        <AuthProvider>
          <PageSizeProvider>
            <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
          </PageSizeProvider>
        </AuthProvider>
      </TelegramProvider>
    </SDKProvider>
  );
};
