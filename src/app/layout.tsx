import type { Metadata } from 'next';
import localFont from 'next/font/local';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import QueryProvider from '@/lib/components/query-provider';
import theme from '@/lib/theme';

const ibmVga = localFont({
  src: './fonts/IBM_VGA.woff',
  variable: '--font-ibm-vga',
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Pokemon Trainer Registration Form',
  description: 'Pokemon Trainer Registration Form application'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${ibmVga.variable} ${ibmVga.variable}`}>
        <QueryProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
