'use client';

import { ThemeProvider } from 'next-themes';

interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * 应用 Provider 组件
 * 统一管理所有 Context Providers
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
