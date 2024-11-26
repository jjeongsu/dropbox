import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../config/material-tailwind-theme-provider';
import ReactQueryClientProvider from '../config/ReactQueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drop Box',
  description: 'Drop Image file',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {/* @ts-ignore */}
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={inter.className}>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
