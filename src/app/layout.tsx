import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import localFont from 'next/font/local';
import theme from '@/lib/theme';

const ibmVga = localFont({
  src: './fonts/IBM_VGA.woff',
  variable: '--font-ibm-vga',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Pokemon Trainer Registration Form',
  description: 'Pokemon Trainer Registration Form application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${ibmVga.variable} ${ibmVga.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
